# Project Context Document: Ashwini Trading Academy - Secure Payment System

## 1. Project Overview
This repository contains the complete, production-ready payment integration module for the **Ashwini Trading Academy** website. The application provides an end-to-end payment lifecycle: starting from course selection and checkout, moving through coupon application, client-side pricing and GST calculations, Cashfree Payment Gateway integration (Web Checkout SDK v3), and finalizing with robust server-side transaction verification, cryptographic webhook verification, and printable GST invoice generation.

---

## 2. Tech Stack & Dependencies

### Frontend (Client-Side)
- **Core Framework**: React 19, Vite, TypeScript.
- **Styling & UI**: Tailwind CSS v4, shadcn/ui.
- **Animations**: Motion (f.k.a. Framer Motion).
- **Icons**: Lucide Icons.
- **Payment SDK**: `@cashfreepayments/cashfree-js` (Cashfree Web Checkout SDK v3).

### Backend (Server-Side)
- **Runtime**: Node.js with TypeScript running via the `tsx` runner.
- **Framework**: Express.js with JSON/URL-encoded parser middlewares.
- **Security & Rate Limiting**: CORS, `express-rate-limit` (for endpoints including checkout, coupons, and retries).
- **Database Access**: Prisma Client 7.x.

### Database & Gateway
- **Database**: PostgreSQL database instance.
- **ORM**: Prisma ORM 7.x (configured with `prisma/schema.prisma`).
- **Payment Gateway**: Cashfree PG (Sandbox for testing, Production for deployment).

---

## 3. Database Schema Entities & Prisma Models

The data layer is defined in [schema.prisma](file:///c:/Users/karti/computer_science/AshwiniTrading/prisma/schema.prisma). It maps five primary models to the PostgreSQL database:

### User
Stores registration profiles. Users are queried or created by their unique email during checkout.
- `id` (String, UUID, PK)
- `fullName` (String)
- `email` (String, Unique)
- `phone` (String)
- `createdAt` / `updatedAt` (DateTime)
- `orders` (Order relation)

### Course
Represents the educational programs and workshops.
- `id` (String, PK) - e.g., `'foundation'`, `'futures-options-trader-pro'`
- `title` (String)
- `slug` (String, Unique)
- `description` (String)
- `thumbnail` (String)
- `price` (Float) - Original base price (inclusive of GST)
- `discountPrice` (Float) - Actual selling price (inclusive of GST)
- `isActive` (Boolean, default: true)
- `orders` (Order relation)

### Order
Tracks individual purchase intentions and gateway session mappings.
- `id` (String, UUID, PK)
- `orderId` (String, Unique) - Standard transaction ID generated in the format `ORD_[timestamp]_[rand]`
- `userId` (String, FK to User)
- `courseId` (String, FK to Course)
- `amount` (Float) - Final calculated amount paid after applying coupons
- `currency` (String, default: "INR")
- `paymentStatus` (String, default: "PENDING") - States: `PENDING`, `PAID`, `FAILED`, `CANCELLED`
- `orderStatus` (String, default: "CREATED") - States: `CREATED`, `COMPLETED`, `FAILED`
- `paymentGateway` (String, default: "CASHFREE")
- `cashfreeOrderId` (String, optional)
- `paymentSessionId` (String, optional) - Cashfree checkout token used by the frontend SDK
- `createdAt` / `updatedAt` (DateTime)

### Payment
Audit logs for successful or failed attempts returned by gateway checks.
- `id` (String, UUID, PK)
- `orderId` (String, FK to Order)
- `transactionId` (String, Unique) - Cashfree reference transaction ID
- `paymentSessionId` (String, optional)
- `paymentMethod` (String, optional) - e.g., `UPI`, `CARD`, `NET_BANKING`, `WALLET`
- `paymentStatus` (String) - States: `SUCCESS`, `FAILED`, `USER_DROPPED`
- `gatewayResponse` (Json, optional) - Full raw response stored for audit or refund requirements
- `paidAt` (DateTime)

### Coupon
Promotional codes mapped to checkout pricing logic.
- `id` (String, UUID, PK)
- `code` (String, Unique) - Case-insensitive code, e.g., `'WELCOME10'`
- `discountType` (String) - `PERCENTAGE` or `FIXED`
- `discountValue` (Float) - Percentage value or flat amount
- `maxUses` (Int)
- `usedCount` (Int, default: 0)
- `expiryDate` (DateTime)
- `isActive` (Boolean, default: true)

---

## 4. Architecture & Payment Lifecycle

```
Customer              Checkout Page            Express API           Cashfree Gateway
   │                         │                      │                        │
   │ ── Enters Details ────> │                      │                        │
   │                         │ ── Apply Coupon ───> │                        │
   │                         │ <── Returns Discount │                        │
   │                         │                      │                        │
   │ ── Clicks Pay ────────> │ ── Create Order ───> │                        │
   │                         │                      │ ── Create Session ───> │
   │                         │                      │ <── Returns session_id │
   │                         │ <── Launches Modal ──│                        │
   │                         │                      │                        │
   │ ── Pays on Gateway ───────────────────────────────────────────────────> │
   │                         │                      │                        │
   │ <── Auto Redirects ──── │                      │                        │
   │                         │ ── Status Polling ─> │                        │
   │                         │                      │ ── Get Order Status ─> │
   │                         │                      │ <── Status: PAID ──────│
   │ <── Shows Receipt ───── │ <── Status: SUCCESS ─│                        │
   │                         │                      │                        │
   │                         │                      │ <── Webhook Notification
```

### Steps:
1. **Details & Verification**: The checkout page collects user details. It triggers a rate-limited check to see if the user already owns the program with a state of `PAID`. If true, the purchase is blocked.
2. **Coupon Assessment**: The coupon code is processed via the `/api/payment/apply-coupon` API. The backend evaluates state, expiry dates, and usage counts. The discount is computed and capped at the product's base price.
3. **Local Order Generation**: Once verified, a local `Order` is written to the database with a state of `PENDING` and status of `CREATED`.
4. **Gateway Session Initiation**: The Express backend sends a request to the Cashfree API, sending customer coordinates, return/notify URLs, and amount. Cashfree responds with a unique `payment_session_id`.
5. **Checkout Launch**: The client-side page intercepts this session ID, initializes the `@cashfreepayments/cashfree-js` SDK, and presents the checkout gateway screen to the user.
6. **Payment Execution**: The client performs the transaction. Cashfree redirects the client back to `/payment/status?order_id=...`.
7. **Polling & Synchronization**: The status page polls the backend `/api/payment/status/:orderId` endpoint. If the local state is still `PENDING`, the backend makes a direct, secure API call to the Cashfree gateway to verify status.
8. **Asynchronous Webhook Sync**: Cashfree asynchronously notifies the Express webhook `POST /api/payment/webhook`. The webhook handler cryptographically verifies the request before marking the database record as `PAID` and granting the course access.

---

## 5. Component Breakdown & Core Modules

### 1. Client Checkout UI & Calculations
**File**: [CheckoutPage.tsx](file:///c:/Users/karti/computer_science/AshwiniTrading/src/components/sections/CheckoutPage.tsx)
- Gathers name, email, phone, and agreement to policies.
- Offers interactive coupon handling (`WELCOME10` for 10% off, `EARLYBIRD` for flat ₹1,500 off).
- Calculates taxable base values and tax components using an **18% inclusive GST formula**:
  - `Taxable Value = Final Price / 1.18`
  - `GST Amount = Final Price - Taxable Value`
- Triggers the Cashfree Checkout SDK in Sandbox or Production modes.

### 2. Express Backend Controllers
**File**: [server.ts](file:///c:/Users/karti/computer_science/AshwiniTrading/server.ts)
- Serves static assets from Vite's `dist/` directory.
- Exposes API routes protected by Express Rate Limit configurations:
  - `POST /api/payment/apply-coupon` (limiter: 50 requests/5 minutes)
  - `POST /api/payment/create-order` (limiter: 100 requests/15 minutes)
  - `POST /api/payment/verify`
  - `GET /api/payment/status/:orderId`
  - `POST /api/payment/webhook`
  - `POST /api/payment/retry`
- Manages Prisma database transactions atomically, avoiding race conditions and duplicate status updates during payment fulfillment.

### 3. Webhook Signature Verification
- Implements strict cryptographic HMAC-SHA256 verification to ensure webhook payloads originate from Cashfree.
- Extracts headers `x-webhook-signature` and `x-webhook-timestamp`.
- Computes `expectedSignature = Base64(HMAC-SHA256(timestamp + rawBody, clientSecret))`.
- Blocks execution if computed signature fails to match the received header.

### 4. Self-Healing Retries
- Instantiates a route `POST /api/payment/retry` to handle checkout drop-offs or initial banking declines.
- Instead of forcing the user to re-type registration credentials, the server generates a brand-new Cashfree order session mapped to the existing local database entry, resolving Cashfree's "Order already exists" conflicts.

### 5. Printable Invoice Generator
**File**: [PaymentSuccessPage.tsx](file:///c:/Users/karti/computer_science/AshwiniTrading/src/components/sections/PaymentSuccessPage.tsx)
- Fetches verified payment information and structures a GST invoice layout.
- Calculates CGST (9%) and SGST (9%) breakdowns for localized compliance.
- Initiates clean client-side printing prompts by formatting an isolated iframe/window.

---

## 6. Verification and Local Testing
We have provided an automated test runner containing 17 assertions covering core business logic:

```bash
# Run the local verification script
npx tsx scratch/verify_payment_system.ts
```

### Inspected Scenarios:
1. **Coupon Math**: Validates percentage and fixed calculations.
2. **Coupon Limits**: Verifies expired dates and max usage bounds.
3. **GST Breakdown Math**: Checks inclusive 18% base extraction matches summation inputs.
4. **Request Sanitization**: Validates phone length and email formats.
5. **Duplicate Guards**: Asserts that duplicate purchases are blocked.
6. **Webhook Signature Security**: Verifies signature validation logic and blocks modified/tampered payloads.
