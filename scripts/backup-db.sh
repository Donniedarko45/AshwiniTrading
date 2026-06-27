#!/bin/bash
set -e

# ══════════════════════════════════════════════════════════════════════
#  AshwiniTrading – Database Backup (Neon.tech PostgreSQL)
#  Usage: bash scripts/backup-db.sh [DATABASE_URL]
#
#  Requires: postgresql-client (pg_dump) installed on the host.
#    Install: sudo apt-get install -y postgresql-client
# ══════════════════════════════════════════════════════════════════════

APP_DIR="/opt/ashwini-trading"
BACKUP_DIR="${APP_DIR}/backups"
RETENTION_DAYS=7

# ── Resolve DATABASE_URL ──────────────────────────────────────────────
if [ -n "$1" ]; then
  DATABASE_URL="$1"
elif [ -f "${APP_DIR}/.env.production" ]; then
  DATABASE_URL="$(grep '^DATABASE_URL=' "${APP_DIR}/.env.production" | cut -d'=' -f2-)"
fi

if [ -z "${DATABASE_URL}" ]; then
  echo "❌ DATABASE_URL not found."
  echo "   Provide it as an argument or set it in ${APP_DIR}/.env.production"
  echo "   Usage: bash scripts/backup-db.sh <DATABASE_URL>"
  exit 1
fi

# ── Create backup directory ───────────────────────────────────────────
mkdir -p "${BACKUP_DIR}"

# ── Generate filename ─────────────────────────────────────────────────
TIMESTAMP="$(date +%Y%m%d_%H%M%S)"
BACKUP_FILE="${BACKUP_DIR}/ashwini_trading_${TIMESTAMP}.sql.gz"

# ── Run backup ────────────────────────────────────────────────────────
echo "🗄️  Starting database backup…"
echo "   Output: ${BACKUP_FILE}"

pg_dump "${DATABASE_URL}" | gzip > "${BACKUP_FILE}"

if [ ! -s "${BACKUP_FILE}" ]; then
  echo "❌ Backup file is empty – something went wrong."
  rm -f "${BACKUP_FILE}"
  exit 1
fi

# ── Prune old backups ─────────────────────────────────────────────────
echo "🧹 Removing backups older than ${RETENTION_DAYS} days…"
find "${BACKUP_DIR}" -name "ashwini_trading_*.sql.gz" -type f -mtime +${RETENTION_DAYS} -delete

# ── Summary ───────────────────────────────────────────────────────────
BACKUP_SIZE="$(du -h "${BACKUP_FILE}" | cut -f1)"
BACKUP_COUNT="$(find "${BACKUP_DIR}" -name "ashwini_trading_*.sql.gz" -type f | wc -l)"

echo ""
echo "✅ Backup complete!"
echo "   File: ${BACKUP_FILE}"
echo "   Size: ${BACKUP_SIZE}"
echo "   Total backups: ${BACKUP_COUNT}"
