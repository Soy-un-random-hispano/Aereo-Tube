#!/bin/sh
set -eu
cd /workspace
node scripts/preview.mjs stop || true
python3 /workspace/scripts/pack-extension.py || true
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
npm run dev >>/tmp/app-startup.log 2>&1 &
