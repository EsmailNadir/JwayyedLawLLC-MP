import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/*
 * The practice-page kit: the few section shapes every practice, court and
 * location page is built from, so 300 pages share one layout language.
 *
 *   KeyFacts      the three or four figures that matter, on navy
 *   Section       heading column + reading column (the workhorse)
 *   FactTable     label/value rows for penalties, deadlines, costs
 *   PointGrid     titled points (defenses, what the firm does)
 *   Steps         an ordered process
 *   LinkGrid      cards linking on (courts, counties, related pages)
 *   Callout       one important note, set apart
 *
 * Copy inside a Section goes through .jw-prose (globals.css), so plain <p>,
 * <ul>, <a> and <strong> come out styled without class names on each.
 */

const FRAME = 'max-w-[1440px] mx-auto px-5 sm:px-8';

export type Fact = { figure: string; label: string };

/** The handful of numbers a visitor came for, set large on navy. */
export function KeyFacts({ facts, caption }: { facts: Fact[]; caption?: string }) {
  return (
    <section className="bg-navy-900 text-white" aria-label={caption ?? 'Key facts'}>
      <div className={`${FRAME} py-12 sm:py-16`}>
        <dl className={`grid gap-x-10 gap-y-10 sm:grid-cols-2 ${facts.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block jw-display text-[clamp(2rem,1.5rem+1.8vw,3rem)] leading-none text-sky tabular-nums">{f.figure}</span>
                <span className="block mt-3 max-w-[28ch] text-white/80 leading-snug">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        {caption && <p className="mt-10 text-[length:var(--step-small)] text-mist max-w-[70ch]">{caption}</p>}
      </div>
    </section>
  );
}

/**
 * A heading column and a reading column. `tone` sets the ground; neighbouring
 * sections alternate white and ice so the page has rhythm without rules.
 */
export function Section({
  id,
  title,
  intro,
  tone = 'white',
  children,
}: {
  id?: string;
  title: string;
  intro?: React.ReactNode;
  tone?: 'white' | 'ice';
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${tone === 'ice' ? 'bg-ice' : 'bg-white'} text-navy-950 py-16 sm:py-24 scroll-mt-24`}>
      <div className={`${FRAME} grid gap-8 lg:gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <h2 className="jw-display text-[clamp(1.875rem,1.3rem+2vw,3rem)] leading-[1.08] text-balance lg:sticky lg:top-28">{title}</h2>
        </div>
        <div className="lg:col-span-8 min-w-0">
          {intro && <div className="jw-prose text-[length:var(--step-lead)] leading-snug mb-8">{intro}</div>}
          <div className="jw-prose">{children}</div>
        </div>
      </div>
    </section>
  );
}

export type Row = { label: string; value: React.ReactNode };

/** Penalties, deadlines and costs as label/value rows. */
export function FactTable({ title, rows, note }: { title: string; rows: Row[]; note?: React.ReactNode }) {
  return (
    <div className="not-prose my-8 bg-white border border-navy-950/10">
      <h3 className="px-6 sm:px-8 py-5 bg-navy-950 text-white font-semibold">{title}</h3>
      <dl>
        {rows.map((r, i) => (
          <div key={r.label} className={`grid sm:grid-cols-[13rem_minmax(0,1fr)] gap-1 sm:gap-6 px-6 sm:px-8 py-4 ${i > 0 ? 'border-t border-navy-950/10' : ''}`}>
            <dt className="font-semibold">{r.label}</dt>
            <dd className="text-navy-950/80 leading-relaxed">{r.value}</dd>
          </div>
        ))}
      </dl>
      {note && <p className="px-6 sm:px-8 py-4 border-t border-navy-950/10 text-[length:var(--step-small)] text-navy-950/70">{note}</p>}
    </div>
  );
}

export type Point = { title: string; body: React.ReactNode };

/** Titled points in two columns: defenses, what the firm does, options. */
export function PointGrid({ points }: { points: Point[] }) {
  return (
    <ul className="not-prose my-8 grid gap-x-10 gap-y-9 sm:grid-cols-2 list-none p-0">
      {points.map((p) => (
        <li key={p.title} className="border-t-2 border-sky-deep pt-5">
          <h3 className="jw-serif text-[1.25rem] leading-snug">{p.title}</h3>
          <div className="mt-2 text-navy-950/80 leading-relaxed">{p.body}</div>
        </li>
      ))}
    </ul>
  );
}

/** An ordered process. The numerals are the real order of events. */
export function Steps({ steps }: { steps: Point[] }) {
  return (
    <ol className="not-prose my-8 grid gap-8">
      {steps.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4">
          <span className="jw-display text-[2.25rem] leading-none text-sky-deep tabular-nums" aria-hidden="true">
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold text-[length:var(--step-body)]">{s.title}</h3>
            <div className="mt-1.5 text-navy-950/80 leading-relaxed">{s.body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export type LinkCard = { href: string; title: string; subtitle?: string };

/** Cards that link on: courts, counties, related services. */
export function LinkGrid({ links, columns = 3 }: { links: LinkCard[]; columns?: 2 | 3 }) {
  return (
    <ul
      className={`not-prose my-8 grid gap-px bg-navy-950/10 border border-navy-950/10 sm:grid-cols-2 ${columns === 3 ? 'xl:grid-cols-3' : ''}`}
    >
      {links.map((l) => (
        <li key={l.href + l.title} className="bg-white">
          <Link
            href={l.href}
            className="group flex h-full items-start justify-between gap-4 p-5 hover:bg-ice transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-deep"
          >
            <span>
              <span className="block font-semibold group-hover:text-sky-deep transition-colors">{l.title}</span>
              {l.subtitle && <span className="block mt-1 text-[length:var(--step-small)] text-navy-950/65 leading-snug">{l.subtitle}</span>}
            </span>
            <ArrowRight className="mt-1 w-4 h-4 flex-shrink-0 text-sky-deep transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** One note that must not be missed (a deadline, a warning). */
export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="not-prose my-8 border-l-4 border-sky-deep bg-ice px-6 sm:px-8 py-6">
      <p className="font-semibold">{title}</p>
      <div className="mt-2 text-navy-950/80 leading-relaxed">{children}</div>
    </aside>
  );
}
