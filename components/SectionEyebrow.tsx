import { OVERLINE } from '@/components/uiClasses';

/**
 * The rule-label-rule marker that sits above each section headline.
 *
 * It was previously inlined per section and had drifted: some instances had a
 * rule on both sides and some only on the left, and the label size and colour
 * varied by section. One component keeps the page's section openings identical.
 */
export default function SectionEyebrow({
  label,
  tone = 'light',
  align = 'center',
}: {
  label: string;
  /** `light` for paper surfaces, `dark` for the colour and deep surfaces. */
  tone?: 'light' | 'dark';
  align?: 'center' | 'start';
}) {
  const rule = tone === 'dark' ? 'bg-sky/70' : 'bg-sky-deep/60';
  const text = tone === 'dark' ? 'text-sky' : 'text-sky-deep';

  return (
    <div className={`inline-flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
      <span className={`h-px w-8 ${rule}`} aria-hidden="true" />
      <span className={`${OVERLINE} ${text}`}>{label}</span>
      <span className={`h-px w-8 ${rule}`} aria-hidden="true" />
    </div>
  );
}
