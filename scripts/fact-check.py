#!/usr/bin/env python3
"""Fact-preservation check for copy rewrites.

For each page changed since a base commit, pulls the hard facts out of the
old and new text (statute sections, dollar amounts, durations, percentages,
BAC levels, dates, bill numbers) and reports any fact the old page stated
that the new page no longer does. Also flags em dashes and free-consultation
claims in the new text.

Usage: python3 scripts/fact-check.py [base-ref] [paths...]
  base-ref defaults to HEAD; paths default to every changed .tsx/.ts file.
Exit status is 1 if anything is missing or flagged.
"""
import re
import subprocess
import sys

NUM_WORDS = {
    'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8',
    'nine': '9', 'ten': '10', 'twelve': '12', 'fifteen': '15', 'twenty': '20', 'thirty': '30', 'sixty': '60', 'ninety': '90',
}

PATTERNS = [
    ('statute', r'\b(?:ORC|R\.C\.|Revised Code|section|§)?\s*(\d{3,4}\.\d{2,3}(?:\.\d+)?)\b'),
    ('money', r'\$\s?(\d[\d,]*(?:\.\d{2})?)'),
    ('duration', r'\b(\d+(?:\.\d+)?)[\s-]*(day|week|month|year|hour|point)s?\b'),
    ('percent', r'(\d*\.?\d+)\s?(?:%|percent)'),
    ('bac', r'\bBAC[^.]{0,20}?(0?\.\d{2,3})'),
    ('date', r'\b((?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4})'),
    ('bill', r'\b((?:HB|SB|H\.B\.|S\.B\.)\s?\d+)'),
    ('degree', r'\b((?:first|second|third|fourth|fifth|minor|unclassified)[- ]degree (?:misdemeanor|felony))'),
]


def text_of(src: str) -> str:
    # Drop imports and class strings, decode the common entities, fold
    # number words into digits so "thirty days" matches "30 days".
    src = re.sub(r'className=(\{`[^`]*`\}|"[^"]*")', ' ', src)
    src = src.replace('&apos;', "'").replace('&rsquo;', "'").replace('&quot;', '"').replace('&ldquo;', '"').replace('&rdquo;', '"')
    src = src.replace('&ndash;', '-').replace('–', '-').replace(' ', ' ')
    def fold(m):
        return NUM_WORDS[m.group(0).lower()]
    src = re.sub(r'\b(' + '|'.join(NUM_WORDS) + r')\b', fold, src, flags=re.I)
    return src


def facts(src: str) -> set:
    t = text_of(src)
    out = set()
    for kind, pat in PATTERNS:
        for m in re.finditer(pat, t, flags=re.I):
            val = ' '.join(g for g in m.groups() if g).lower().replace(',', '').replace(' ', '')
            if kind == 'percent':
                val = val.lstrip('0') if val.startswith('0.') else val
            out.add(f'{kind}:{val}')
    return out


def git(*args):
    return subprocess.run(['git', *args], capture_output=True, text=True).stdout


def main():
    base = sys.argv[1] if len(sys.argv) > 1 else 'HEAD'
    paths = sys.argv[2:] or [
        p for p in git('diff', '--name-only', base, '--', 'app', 'components', 'data').split() if p.endswith(('.tsx', '.ts'))
    ]
    bad = 0
    for p in paths:
        old = git('show', f'{base}:{p}')
        try:
            new = open(p).read()
        except FileNotFoundError:
            continue
        missing = sorted(facts(old) - facts(new)) if old else []
        visible = re.sub(r'(//[^\n]*|/\*.*?\*/|\{/\*.*?\*/\})', '', new, flags=re.S)
        dashes = len(re.findall(r'—|&mdash;', visible))
        free = re.findall(r'free[^.]{0,30}(?:consult|case evaluation|case review)', visible, flags=re.I)
        if missing or dashes or free:
            bad += 1
            print(f'\n{p}')
            if missing:
                print('  missing facts: ' + ', '.join(missing))
            if dashes:
                print(f'  em dashes: {dashes}')
            if free:
                print(f'  free consultation claims: {free}')
    print(f'\n{len(paths)} files checked, {bad} need attention')
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
