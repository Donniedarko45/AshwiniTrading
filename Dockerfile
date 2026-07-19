# ============================================================
# Multi-stage production Dockerfile for AshwiniTrading Academy
# ============================================================
# Stage 1 (deps):    Install Node.js dependencies
# Stage 2 (builder): Build frontend + compile server to JS
# Stage 3 (runner):  Lean production image
# ============================================================

# ----------------------------------------------------------
# Stage 1: Install dependencies from lockfile
# ----------------------------------------------------------
FROM node:22-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ----------------------------------------------------------
# Stage 2: Build frontend, generate Prisma client, compile TS
# ----------------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Vite React frontend → dist/
RUN npx vite build

# Generate Prisma client
RUN npx prisma generate

# Compile TypeScript server → JavaScript (eliminates tsx in prod)
RUN npx esbuild server.ts \
    --bundle \
    --platform=node \
    --target=node22 \
    --outfile=server.js \
    --format=esm \
    --packages=external

# Compile seed script → JavaScript
RUN npx esbuild prisma/seed.ts \
    --bundle \
    --platform=node \
    --target=node22 \
    --outfile=prisma/seed.js \
    --format=esm \
    --packages=external

# Compile Prisma config → JavaScript
RUN npx esbuild prisma.config.ts \
    --bundle \
    --platform=node \
    --target=node22 \
    --outfile=prisma.config.js \
    --format=esm \
    --packages=external

# ----------------------------------------------------------
# Stage 3: Lean production image
# ----------------------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && \
    # Install Prisma CLI for database migrations (db push) at runtime
    npm install --no-save prisma && \
    # Clean npm cache to reduce image size
    npm cache clean --force

# Copy generated Prisma client from builder
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Copy compiled server (esbuild output)
COPY --from=builder /app/server.js ./

# Copy built frontend (Vite output)
COPY --from=builder /app/dist ./dist

# Copy compiled seed script
COPY --from=builder /app/prisma/seed.js ./prisma/

# Copy Prisma schema (needed for `prisma db push`)
COPY prisma/schema.prisma ./prisma/

# Copy compiled Prisma config
COPY --from=builder /app/prisma.config.js ./

# Copy public assets (logo, images served by Express static)
COPY public ./public

# Copy container entrypoint script
COPY scripts/entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

# Security: run as non-root user
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 appuser
USER appuser

EXPOSE 5000

# Docker health check — used by Compose and deployment canary
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget --spider -q http://localhost:5000/api/health || exit 1

ENTRYPOINT ["./entrypoint.sh"]
