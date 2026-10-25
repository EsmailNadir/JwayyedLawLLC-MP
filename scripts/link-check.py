#!/usr/bin/env python3
"""Lists internal links (route strings and tel:) a page had at a base commit
that it no longer has. Usage: python3 scripts/link-check.py [base] files..."""
import re, subprocess, sys
base = sys.argv[1]; files = sys.argv[2:]
pat = re.compile(r"""["'`(]((?:/(?:[a-z0-9-]+)(?:/[a-z0-9#-]+)*/?)|tel:[+0-9]+|mailto:[^"'`\s?]+)""")
bad = 0
for f in files:
    old = subprocess.run(['git', 'show', f'{base}:{f}'], capture_output=True, text=True).stdout
    new = open(f).read()
    norm = lambda s: {m.rstrip('/') for m in pat.findall(s) if not m.startswith('/assets') and not m.startswith('/videos')}
    o, n = norm(old), norm(new)
    tel = lambda xs: {x for x in xs if x.startswith('tel:')}
    missing = sorted((o - n) - tel(o)) + (['tel'] if tel(o) and not tel(n) else [])
    if missing:
        bad += 1; print(f'{f}\n  lost: {", ".join(missing)}')
print(f'{len(files)} files checked, {bad} lost links'); sys.exit(1 if bad else 0)
