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

/*
 * Spam protection for the message form, in layers:
 *
 * 1. Cloudflare Turnstile. The form carries a Turnstile token and Formspree
 *    verifies it server-side with the secret key set in the Formspree
 *    dashboard. This is the layer that counts: the Formspree address is in
 *    the page source, so a bot can post to it directly and skip anything that
 *    only runs in the browser. Once CAPTCHA is on in Formspree, a post
 *    without a valid token is refused there.
 * 2. A honeypot field (_gotcha) that people never see; Formspree discards
 *    any submission that fills it.
 * 3. A time trap: a form sent within a few seconds of appearing was not
 *    typed by a person.
 *
 * Layers 2 and 3 get a quiet fake success, so a bot learns nothing.
 *
 * The site key is public by design. Without one, local development uses
 * Cloudflare's always-pass test key; a production build without one shows
 * no widget (and Formspree, once CAPTCHA is on, would refuse the post).
 */
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? (process.env.NODE_ENV === 'development' ? '1x00000000000000000000AA' : '');
const TURNSTILE_SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const MIN_FILL_MS = 3000;

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

/** Loads Turnstile's script once, on demand. */
function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  return new Promise((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>('script[data-turnstile]');
    if (!script) {
      script = document.createElement('script');
      script.src = TURNSTILE_SCRIPT;
      script.async = true;
      script.dataset.turnstile = 'true';
      document.head.appendChild(script);
    }
    script.addEventListener('load', () => (window.turnstile ? resolve(window.turnstile) : reject(new Error('turnstile'))));
    script.addEventListener('error', () => reject(new Error('turnstile')));
  });
}

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

function MessageForm({ active }: { active: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [token, setToken] = useState<string | null>(null);
  const [check, setCheck] = useState<'loading' | 'ready' | 'failed'>(TURNSTILE_SITE_KEY ? 'loading' : 'ready');
  const id = useId();
  const widgetBox = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const shownAt = useRef(0);

  // The clock for the time trap starts when the form is actually on screen.
  useEffect(() => {
    if (active && status === 'idle') shownAt.current = Date.now();
  }, [active, status]);

  // Turnstile loads only once the visitor opens this tab.
  useEffect(() => {
    if (!active || status === 'sent' || !TURNSTILE_SITE_KEY || !widgetBox.current) return;
    let cancelled = false;
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !widgetBox.current || widgetId.current) return;
        widgetId.current = ts.render(widgetBox.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'light',
          appearance: 'interaction-only',
          callback: (t: string) => setToken(t),
          'expired-callback': () => setToken(null),
          'error-callback': () => setCheck('failed'),
        });
        setCheck('ready');
      })
      .catch(() => !cancelled && setCheck('failed'));
    return () => {
      cancelled = true;
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
      setToken(null);
    };
  }, [active, status]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // A bot filled the honeypot or sent the form inhumanly fast.
    if (String(data.get('_gotcha') ?? '') !== '' || Date.now() - shownAt.current < MIN_FILL_MS) {
      form.reset();
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
      setToken(null);
    }
  };

  const waitingOnCheck = Boolean(TURNSTILE_SITE_KEY) && !token && check !== 'failed';

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
    <form action={FORMSPREE} method="POST" onSubmit={onSubmit} className="relative bg-white p-6 sm:p-10 grid gap-6 sm:grid-cols-2">
      <input type="hidden" name="_subject" value="New inquiry from jjlawohio.com" />
      {/* Honeypot: off screen rather than display:none, which some bots skip.
          People never reach it; Formspree discards anything that fills it. */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label>
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

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

      {/* Turnstile: invisible for most visitors, a single checkbox for a few.
          Its token travels with the form as cf-turnstile-response. */}
      {TURNSTILE_SITE_KEY && <div ref={widgetBox} className="sm:col-span-2 empty:hidden" />}
      {check === 'failed' && (
        <p className="sm:col-span-2 text-[length:var(--step-small)] text-red-700" role="alert">
          The spam check could not load. Please call{' '}
          <a href={PHONE_TEL} className="font-semibold underline tabular-nums">
            {PHONE_DISPLAY}
          </a>{' '}
          or email instead.
        </p>
      )}

      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending' || waitingOnCheck || check === 'failed'}
          className="group inline-flex items-center justify-center gap-2 min-h-[56px] px-8 bg-navy-950 text-white font-semibold hover:bg-sky-deep disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky"
        >
          {status === 'sending' ? 'Sending…' : waitingOnCheck ? 'Checking you are human…' : 'Send message'}
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
        <MessageForm active={tab === 'message'} />
      </div>
    </div>
  );
}
