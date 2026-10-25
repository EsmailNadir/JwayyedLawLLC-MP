#!/usr/bin/env python3
"""Checks every sitemap URL on a running server for the on-page elements
search engines rely on: status 200, one <title>, a meta description, a
self-referencing canonical, exactly one <h1>, no noindex, and JSON-LD.
Usage: python3 scripts/seo-live-audit.py [base-url]"""
import re, sys, urllib.request, collections
base = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3100'
site = 'https://www.jjlawohio.com'
xml = urllib.request.urlopen(base + '/sitemap.xml').read().decode()
paths = [re.sub(r'^https?://[^/]+', '', u) or '/' for u in re.findall(r'<loc>([^<]+)</loc>', xml)]
problems = collections.defaultdict(list); titles = collections.Counter(); descs = collections.Counter(); schema = collections.Counter()
for p in paths:
    try:
        r = urllib.request.urlopen(base + p); h = r.read().decode('utf8', 'ignore'); code = r.status
    except Exception as e:
        problems['not 200'].append(f'{p} ({e})'); continue
    t = re.findall(r'<title>([^<]*)</title>', h)
    d = re.search(r'<meta name="description" content="([^"]*)"', h)
    c = re.search(r'<link rel="canonical" href="([^"]*)"', h)
    h1 = len(re.findall(r'<h1[\s>]', h))
    if len(t) != 1: problems['title count != 1'].append(p)
    else:
        titles[t[0]] += 1
        if len(t[0]) > 70: problems['title over 70 chars'].append(f'{p} ({len(t[0])})')
    if not d: problems['no meta description'].append(p)
    else:
        descs[d.group(1)] += 1
        if len(d.group(1)) > 170: problems['description over 170 chars'].append(f'{p} ({len(d.group(1))})')
    if not c: problems['no canonical'].append(p)
    elif c.group(1).rstrip('/') != (site + p).rstrip('/'): problems['canonical not self'].append(f'{p} -> {c.group(1)}')
    if h1 != 1: problems[f'h1 count != 1'].append(f'{p} ({h1})')
    if re.search(r'<meta name="robots" content="[^"]*noindex', h): problems['noindex'].append(p)
    for ty in re.findall(r'"@type":"([A-Za-z]+)"', h): schema[ty] += 1
for t, n in titles.items():
    if n > 1: problems['duplicate title'].append(f'{n}x "{t}"')
for d, n in descs.items():
    if n > 1: problems['duplicate description'].append(f'{n}x "{d[:70]}"')
print(f'{len(paths)} URLs audited')
for k, v in sorted(problems.items()):
    print(f'\n{k}: {len(v)}'); [print('  ' + x) for x in v[:12]]
print('\nstructured data types found:', dict(schema.most_common(12)))
