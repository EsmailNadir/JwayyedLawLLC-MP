#!/usr/bin/env python3
"""Compares on-page SEO signals for every page between a base commit and the
working tree, from source: does each page still contain its own target
keywords (its metadata `keywords` array) in visible text, how many words of
copy it has, and how many internal links it carries.

Usage: python3 scripts/seo-compare.py [base-ref]   (default: main)
"""
import re
import subprocess
import sys
from pathlib import Path

base = sys.argv[1] if len(sys.argv) > 1 else 'main'


def git_show(path):
    r = subprocess.run(['git', 'show', f'{base}:{path}'], capture_output=True, text=True)
    return r.stdout if r.returncode == 0 else None


def visible(src: str) -> str:
    src = re.sub(r'className=(\{`[^`]*`\}|"[^"]*")', ' ', src)
    src = re.sub(r'^import .*$', ' ', src, flags=re.M)
    src = re.sub(r'<[^>]+>', ' ', src)
    src = re.sub(r'&[a-z]+;', ' ', src)
    return re.sub(r'\s+', ' ', src).lower()


def keywords(src: str):
    m = re.search(r'keywords:\s*\[([^\]]*)\]', src)
    return [k.lower() for k in re.findall(r"['\"]([^'\"]+)['\"]", m.group(1))] if m else []


def words(src: str) -> int:
    body = src.split('export default', 1)[-1]
    return len(re.findall(r"[A-Za-z][A-Za-z'-]+", visible(body)))


def links(src: str) -> int:
    return len(set(re.findall(r"""["'`](/[a-z0-9-]+(?:/[a-z0-9#-]+)*)""", src)))


def kw_hits(text: str, kws):
    # A keyword counts when all its significant words appear in the copy.
    hits = 0
    for k in kws:
        parts = [w for w in re.findall(r'[a-z0-9]+', k) if w not in {'in', 'for', 'of', 'the', 'a', 'an', 'and', 'ohio'}]
        if parts and all(re.search(rf'\b{re.escape(w)}', text) for w in parts):
            hits += 1
    return hits


rows = []
for p in sorted(Path('app').rglob('page.tsx')):
    if '_archived' in str(p):
        continue
    old, new = git_show(str(p)), p.read_text()
    if old is None:
        continue
    kws = keywords(old) or keywords(new)
    rows.append((str(p), len(kws), kw_hits(visible(old), kws), kw_hits(visible(new), kws), words(old), words(new), links(old), links(new)))

n = len(rows)
kw_total = sum(r[1] for r in rows)
kw_old = sum(r[2] for r in rows)
kw_new = sum(r[3] for r in rows)
w_old = sum(r[4] for r in rows)
w_new = sum(r[5] for r in rows)
l_old = sum(r[6] for r in rows)
l_new = sum(r[7] for r in rows)
print(f'pages compared: {n}')
print(f'target keywords present in copy: before {kw_old}/{kw_total}, after {kw_new}/{kw_total}')
print(f'words of copy: before {w_old:,}, after {w_new:,} ({(w_new - w_old) / max(w_old, 1):+.0%})')
print(f'distinct internal links: before {l_old:,}, after {l_new:,}')
lost = [r for r in rows if r[3] < r[2]]
print(f'pages where a target keyword dropped out of the copy: {len(lost)}')
for r in lost[:25]:
    print(f'  {r[0]}: {r[2]} -> {r[3]} of {r[1]}')
thin = [r for r in rows if r[5] < 0.6 * r[4] and r[4] > 300]
print(f'pages that lost more than 40% of their copy: {len(thin)}')
for r in thin[:25]:
    print(f'  {r[0]}: {r[4]} -> {r[5]} words')
