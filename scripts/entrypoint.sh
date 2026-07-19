#!/bin/sh
# ==============================================================================
# AshwiniTrading Academy — Container Entrypoint
# ==============================================================================
# Runs database migrations, seeds data, and starts the Express server.
# Used as the Docker ENTRYPOINT in production.
# ==============================================================================

set -e

echo "============================================"
echo " AshwiniTrading Academy — Starting Up"
echo "============================================"
echo ""

# ----------------------------------------------------------
# Step 1: Wait for database to be reachable
# ----------------------------------------------------------
echo "==> [1/3] Checking database connectivity..."

MAX_RETRIES=15
RETRY_COUNT=0

until node -e "
  const pg = require('pg');
  const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
  client.connect().then(() => { client.end(); process.exit(0); }).catch(() => process.exit(1));
" 2>/dev/null; do
  RETRY_COUNT=$((RETRY_COUNT + 1))
  if [ "$RETRY_COUNT" -ge "$MAX_RETRIES" ]; then
    echo "ERROR: Could not connect to database after ${MAX_RETRIES} attempts."
    echo "Check DATABASE_URL in .env.production"
    exit 1
  fi
  echo "   Waiting for database... (attempt ${RETRY_COUNT}/${MAX_RETRIES})"
  sleep 3
done

echo "   Database is reachable."

# ----------------------------------------------------------
# Step 2: Run Prisma schema sync (non-destructive)
# ----------------------------------------------------------
echo ""
echo "==> [2/3] Syncing database schema (prisma db push)..."
npx prisma db push
echo "   Schema sync complete."

# ----------------------------------------------------------
# Step 3: Seed database (idempotent upserts)
# ----------------------------------------------------------
echo ""
echo "==> [3/3] Seeding database..."
node prisma/seed.js
echo "   Seed complete."

# ----------------------------------------------------------
# Start the Express server
# ----------------------------------------------------------
echo ""
echo "============================================"
echo " Starting Express server on port ${PORT:-5000}"
echo "============================================"
echo ""

exec node server.js
