'use client';

import { useEffect } from 'react';

/**
 * Conversion event tracking (skill 2i). Delegated listeners fire GA4 events for
 * the surfaces that make the phone ring: tel: clicks and form submits.
 * PII GUARDRAIL: event params carry only the page path, the firm's own phone
 * number, and a form identifier — NEVER user-entered field values, names,
 * emails, or typed phone digits. The GA4 base tag is loaded in app/layout.tsx.
 */
export default function Analytics() {
  useEffect(() => {
    const fire = (name: string, params: Record<string, unknown>) => {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === 'function') w.gtag('event', name, params);
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const tel = target?.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (tel) {
        fire('tel_click', {
          page_path: window.location.pathname,
          phone: (tel.getAttribute('href') || '').replace('tel:', ''), // firm's own number
        });
        return;
      }
      const booking = target?.closest('a[href*="calendly"], a[href*="/contact"], a[data-booking]') as HTMLAnchorElement | null;
      if (booking) {
        fire('booking_click', { page_path: window.location.pathname });
      }
    };

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;
      // NO PII: identify the form only, never its contents.
      fire('generate_lead', {
        page_path: window.location.pathname,
        form_id: form.id || form.getAttribute('name') || 'contact_form',
      });
    };

    document.addEventListener('click', onClick, true);
    document.addEventListener('submit', onSubmit, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('submit', onSubmit, true);
    };
  }, []);

  return null;
}
