#!/bin/bash
set -e

# ══════════════════════════════════════════════════════════════════════
#  AshwiniTrading – One-Time VPS Setup
#  Usage: bash scripts/setup-vps.sh
# ══════════════════════════════════════════════════════════════════════

echo "══════════════════════════════════════════════════════"
echo "  🏗️  AshwiniTrading – VPS Setup"
echo "══════════════════════════════════════════════════════"
echo ""

# ── Variables ─────────────────────────────────────────────────────────
APP_DIR="/opt/ashwini-trading"
FIRST_APP_DIR="/opt/app"
DOMAIN="ashwinitradingacademy.com"
EMAIL="admin@ashwinitradingacademy.com"

# ── Root check ────────────────────────────────────────────────────────
if [ "$(id -u)" -ne 0 ]; then
  echo "❌ This script must be run as root or with sudo."
  exit 1
fi

# ── Create app directory ──────────────────────────────────────────────
echo "📁 Creating ${APP_DIR}…"
mkdir -p "${APP_DIR}"
if [ -n "${SUDO_USER}" ]; then
  chown "${SUDO_USER}:${SUDO_USER}" "${APP_DIR}"
  echo "   Ownership set to ${SUDO_USER}"
else
  echo "   Ownership set to root (no SUDO_USER detected)"
fi

# ── Create shared-proxy network ──────────────────────────────────────
echo "🌐 Creating shared-proxy Docker network…"
docker network create shared-proxy 2>/dev/null || true

# ── Connect first app's nginx to shared-proxy ────────────────────────
echo "🔗 Connecting app-nginx to shared-proxy…"
docker network connect shared-proxy app-nginx 2>/dev/null || {
  echo "   ⚠️  app-nginx may already be connected or is not running."
}

# ── Copy ACME-only nginx config for certificate issuance ─────────────
ACME_CONF="${APP_DIR}/nginx/ashwinitradingacademy-acme-only.conf"
NGINX_CONF_DIR="${FIRST_APP_DIR}/nginx/conf.d"

if [ ! -f "${ACME_CONF}" ]; then
  echo "❌ ACME-only config not found at ${ACME_CONF}"
  echo "   Make sure the repository has been cloned to ${APP_DIR} first."
  exit 1
fi

echo "📋 Copying ACME-only nginx config…"
mkdir -p "${NGINX_CONF_DIR}"
cp "${ACME_CONF}" "${NGINX_CONF_DIR}/ashwinitradingacademy.conf"

# ── Reload nginx with ACME-only config ───────────────────────────────
echo "🔄 Reloading nginx…"
docker exec app-nginx nginx -s reload

# ── Issue SSL certificate ─────────────────────────────────────────────
echo ""
echo "🔒 Requesting SSL certificate for ${DOMAIN}…"
echo "   This may take a moment…"
echo ""

if docker compose -f "${FIRST_APP_DIR}/docker-compose.yml" run --rm certbot \
  certonly --webroot \
  -w /var/www/certbot \
  -d "${DOMAIN}" \
  -d "www.${DOMAIN}" \
  --email "${EMAIL}" \
  --agree-tos \
  --no-eff-email; then

  echo ""
  echo "✅ SSL certificate issued successfully!"

  # ── Copy full SSL nginx config ──────────────────────────────────────
  FULL_CONF="${APP_DIR}/nginx/ashwinitradingacademy.conf"
  if [ ! -f "${FULL_CONF}" ]; then
    echo "⚠️  Full SSL config not found at ${FULL_CONF}"
    echo "   You will need to copy it manually after cloning the repo."
  else
    echo "📋 Copying full SSL nginx config…"
    cp "${FULL_CONF}" "${NGINX_CONF_DIR}/ashwinitradingacademy.conf"
  fi

  # ── Reload nginx with full SSL config ───────────────────────────────
  echo "🔄 Reloading nginx…"
  docker exec app-nginx nginx -s reload

  echo ""
  echo "══════════════════════════════════════════════════════"
  echo "  ✅ VPS Setup Complete!"
  echo "══════════════════════════════════════════════════════"
  echo ""
  echo "  Next steps:"
  echo "  1. Set up GitHub repository secrets:"
  echo "     - VPS_HOST          (your VPS IP or hostname)"
  echo "     - VPS_USERNAME      (SSH user, e.g. root)"
  echo "     - VPS_SSH_KEY       (private SSH key)"
  echo "     - VPS_PORT          (optional, default 22)"
  echo "     - DATABASE_URL      (Neon.tech connection string)"
  echo "     - CF_CLIENT_ID      (Cashfree production client ID)"
  echo "     - CF_CLIENT_SECRET  (Cashfree production secret key)"
  echo "     - CF_WEBHOOK_SECRET (optional)"
  echo "     - GEMINI_API_KEY    (optional)"
  echo ""
  echo "  2. Push to the main branch to trigger deployment:"
  echo "     git push origin main"
  echo ""

else
  echo ""
  echo "❌ SSL certificate issuance failed!"
  echo "   Make sure:"
  echo "   - DNS for ${DOMAIN} and www.${DOMAIN} points to this server"
  echo "   - Port 80 is open and accessible"
  echo "   - The first app's certbot container is available"
  exit 1
fi
