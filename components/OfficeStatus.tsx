'use client';

import { useEffect, useState } from 'react';

/**
 * Live office status from the firm's posted hours (Monday to Friday, 9am to
 * 5pm, Columbus time), whatever time zone the visitor is in.
 *
 * Rendered only after mount: the server cannot know the visitor's "now", and
 * a status baked into static HTML would be wrong for most of the day. Public
 * holidays are not modelled, so the wording stays about posted hours.
 */
const OPEN_HOUR = 9;
const CLOSE_HOUR = 17;

function statusNow(): { open: boolean; text: string } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const day = get('weekday'); // Mon … Sun
  const minutes = Number(get('hour')) * 60 + Number(get('minute'));
  const weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day);

  if (weekday && minutes >= OPEN_HOUR * 60 && minutes < CLOSE_HOUR * 60) {
    return { open: true, text: 'Office open now, until 5pm' };
  }
  if (weekday && minutes < OPEN_HOUR * 60) return { open: false, text: 'Office opens today at 9am' };
  if (['Mon', 'Tue', 'Wed', 'Thu'].includes(day)) return { open: false, text: 'Office opens tomorrow at 9am' };
  return { open: false, text: 'Office opens Monday at 9am' };
}

export default function OfficeStatus({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    setStatus(statusNow());
    const id = window.setInterval(() => setStatus(statusNow()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) return null;

  const dot = status.open ? 'bg-emerald-400' : tone === 'dark' ? 'bg-white/40' : 'bg-navy-950/30';
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-[length:var(--step-small)] ${
        tone === 'dark' ? 'text-white/85' : 'text-navy-950/75'
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden="true" />
      {status.text}
      {!status.open && <span className="sr-only">. You can still call and leave a message.</span>}
    </p>
  );
}
