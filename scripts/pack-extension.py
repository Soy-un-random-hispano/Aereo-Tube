#!/usr/bin/env python3
from pathlib import Path
import zipfile

root = Path("/workspace/public/extension")
out = Path("/workspace/public/aero-tube.zip")
if not root.exists():
    raise SystemExit(0)

with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
    for path in sorted(root.rglob("*")):
        if path.is_file():
            z.write(path, Path("aero-tube") / path.relative_to(root))
print(f"packed {out} ({out.stat().st_size} bytes)")
