'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';

/**
 * Two ways to start, in one place: book a time on the firm's Calendly, or
 * write a message (Formspree). Tabs rather than two stacked sections, so the
 * visitor makes one choice and sees one thing.
 *
 * Calendly's script and iframe are heavy, so they load only once the panel
 * nears the screen, never on page load. Links to #message open the form tab.
 */

const FORMSPREE = 'https://formspree.io/f/xyzjyzgv';
const CALENDLY = 'https://calendly.com/jjlawohio';
const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';

const MATTERS = [
  'OVI / DUI',
  'Criminal defense',
  'Personal injury',
  'Civil dispute',
  'Business',
  'Estate planning, trusts or probate',
  'Something else',
];

type Tab = 'book' | 'message';

const FIELD =
  'mt-2 w-full min-h-[52px] bg-white border border-navy-950/20 px-4 text-navy-950 placeholder:text-navy-950/40 focus-visible:outline-none focus-visible:border-sky-deep focus-visible:ring-2 focus-visible:ring-sky-deep/30';
const LABEL = 'block text-[length:var(--step-small)] font-medium text-navy-950';

function CalendlyEmbed() {
  const box = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!near || document.querySelector('script[data-calendly]')) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.dataset.calendly = 'true';
    document.body.appendChild(script);
  }, [near]);

  return (
    <div ref={box} className="relative min-h-[700px] bg-white">
      {/* Shows until Calendly's iframe paints over it. */}
      <p className="absolute inset-x-0 top-24 text-center text-navy-950/60">Loading the calendar…</p>
      {near && (
        <div
          className="calendly-inline-widget relative"
          data-url={`${CALENDLY}?hide_gdpr_banner=1&primary_color=1f5fa8`}
          style={{ minWidth: '280px', height: '700px' }}
        />
      )}
    </div>
  );
}

function MessageForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const id = useId();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-white p-8 sm:p-12 min-h-[480px] flex flex-col justify-center" role="status">
        <span className="inline-flex items-center justify-center w-12 h-12 bg-sky text-navy-950">
          <Check className="w-6 h-6" aria-hidden="true" />
        </span>
        <p className="mt-6 jw-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-tight">Message received.</p>
        <p className="mt-3 max-w-[48ch] text-navy-950/75">
          The firm returns every message within one business day. If your matter is urgent, call{' '}
          <a href={PHONE_TEL} className="font-semibold text-sky-deep underline underline-offset-4 tabular-nums">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-8 self-start text-sky-deep font-medium underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    // Without script the form still posts to Formspree the ordinary way.
    <form action={FORMSPREE} method="POST" onSubmit={onSubmit} className="bg-white p-6 sm:p-10 grid gap-6 sm:grid-cols-2">
      <input type="hidden" name="_subject" value="New inquiry from jjlawohio.com" />
      {/* Honeypot for bots; Formspree drops anything that fills it. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className={LABEL} htmlFor={`${id}-name`}>
        Your name
        <input id={`${id}-name`} name="name" required autoComplete="name" className={FIELD} />
      </label>
      <label className={LABEL} htmlFor={`${id}-phone`}>
        Phone
        <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" className={FIELD} />
      </label>
      <label className={`${LABEL} sm:col-span-2`} htmlFor={`${id}-email`}>
        Email
        <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={FIELD} />
      </label>
      <label className={`${LABEL} sm:col-span-2`} htmlFor={`${id}-matter`}>
        What is it about?
        <select id={`${id}-matter`} name="matter" defaultValue="" required className={`${FIELD} cursor-pointer`}>
          <option value="" disabled>
            Choose one
          </option>
          {MATTERS.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </label>
      <label className={`${LABEL} sm:col-span-2`} htmlFor={`${id}-message`}>
        A few lines about your situation
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          required
          placeholder="For example: the charge, the court, and your next court date."
          className={`${FIELD} py-3 min-h-[140px] resize-y`}
        />
      </label>

      <p className="sm:col-span-2 text-[length:var(--step-small)] text-navy-950/70 max-w-[70ch]">
        Please keep it brief and leave out confidential details. Sending this form does not create an attorney-client
        relationship.
      </p>

      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center justify-center gap-2 min-h-[56px] px-8 bg-navy-950 text-white font-semibold hover:bg-sky-deep disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </button>
        {status === 'error' && (
          <p className="text-[length:var(--step-small)] text-red-700" role="alert">
            It did not send. Please try again, or call{' '}
            <a href={PHONE_TEL} className="font-semibold underline tabular-nums">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

export default function ConsultationPanel() {
  const [tab, setTab] = useState<Tab>('book');
  const ids = { book: useId(), message: useId() };
  const tabs = useRef<Record<Tab, HTMLButtonElement | null>>({ book: null, message: null });

  useEffect(() => {
    const fromHash = () => {
      if (window.location.hash === '#message') setTab('message');
      if (window.location.hash === '#book') setTab('book');
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next: Tab = tab === 'book' ? 'message' : 'book';
    setTab(next);
    tabs.current[next]?.focus();
  };

  const tabClass = (t: Tab) =>
    `relative flex-1 sm:flex-none min-h-[56px] px-6 sm:px-8 text-left font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-deep ${
      tab === t ? 'bg-white text-navy-950' : 'bg-navy-950/[0.06] text-navy-950/70 hover:text-navy-950 hover:bg-navy-950/[0.1]'
    }`;

  return (
    <div>
      <div role="tablist" aria-label="How would you like to start?" className="flex" onKeyDown={onKey}>
        {(['book', 'message'] as Tab[]).map((t) => (
          <button
            key={t}
            ref={(el) => {
              tabs.current[t] = el;
            }}
            type="button"
            role="tab"
            id={`${ids[t]}-tab`}
            aria-selected={tab === t}
            aria-controls={`${ids[t]}-panel`}
            tabIndex={tab === t ? 0 : -1}
            onClick={() => setTab(t)}
            className={tabClass(t)}
          >
            {tab === t && <span className="absolute inset-x-0 top-0 h-[3px] bg-sky-deep" aria-hidden="true" />}
            {t === 'book' ? 'Book a time' : 'Send a message'}
          </button>
        ))}
        <a
          href={PHONE_TEL}
          className="hidden md:inline-flex ml-auto items-center gap-2 px-2 text-navy-950/75 hover:text-sky-deep font-medium tabular-nums transition-colors"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Or call {PHONE_DISPLAY}
        </a>
      </div>

      {/* Both panels stay mounted so Calendly keeps its state when switching. */}
      <div role="tabpanel" id={`${ids.book}-panel`} aria-labelledby={`${ids.book}-tab`} hidden={tab !== 'book'}>
        <CalendlyEmbed />
      </div>
      <div role="tabpanel" id={`${ids.message}-panel`} aria-labelledby={`${ids.message}-tab`} hidden={tab !== 'message'}>
        <MessageForm />
      </div>
    </div>
  );
}
