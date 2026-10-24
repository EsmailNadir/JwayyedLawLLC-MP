import Image from 'next/image';

const PROFILE_URL = 'https://www.ncdd.com/attorneys/5317-jwayyed-jwayyed';
const ALT = 'National College for DUI Defense General Member badge';

/**
 * National College for DUI Defense "General Member" badge, linking to
 * Attorney Jwayyed's NCDD profile.
 *
 * The badge image is self-hosted. NCDD's embed snippet hotlinks
 * ncdd.com/getbadge.php, which sits behind a Cloudflare firewall that
 * blocks the image for many visitors, so the badge never appeared. The
 * general-member badge is the same image for every member (archived copies
 * for different members are pixel-identical), so it is served from
 * /public/assets instead.
 *
 * - `inline`: the footer trust row.
 * - `card`: matches the Google and BBB cards above the review carousels.
 * - `glass`: a flat tile for the trust row on the home page's navy field.
 */
export default function NCDDBadge({
  variant = 'inline',
  tone = 'dark',
}: {
  variant?: 'inline' | 'card' | 'glass';
  /** For `inline`: the ground it sits on, which sets the label colour. */
  tone?: 'dark' | 'light';
}) {
  if (variant === 'glass') {
    return (
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="View Attorney Jwayyed's NCDD profile"
        className="flex items-center gap-4 px-5 py-4 flex-1 min-w-0 bg-navy-800 hover:bg-navy-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
      >
        <Image
          src="/assets/ncdd-general-member-badge.png"
          alt={ALT}
          width={200}
          height={200}
          sizes="40px"
          className="h-11 w-11 flex-shrink-0"
        />
        <span className="text-left">
          <span className="block font-medium text-white">NCDD member</span>
          <span className="block text-[length:var(--step-small)] text-mist">National College for DUI Defense</span>
        </span>
      </a>
    );
  }

  if (variant === 'card') {
    return (
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="View Attorney Jwayyed's NCDD profile"
        className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 min-w-[220px] hover:border-slate-400 transition-colors duration-200"
      >
        <Image
          src="/assets/ncdd-general-member-badge.png"
          alt={ALT}
          width={200}
          height={200}
          sizes="44px"
          className="h-11 w-11 flex-shrink-0"
        />
        <div className="text-left">
          <p className="text-sm font-bold text-slate-900">NCDD Member</p>
          <p className="text-xs text-slate-500">National College for DUI Defense</p>
        </div>
      </a>
    );
  }

  return (
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="View Attorney Jwayyed's NCDD profile"
      className={`flex items-center gap-2.5 transition-opacity ${tone === 'light' ? 'hover:opacity-80' : 'opacity-70 hover:opacity-100'}`}
    >
      <Image
        src="/assets/ncdd-general-member-badge.png"
        alt={ALT}
        width={200}
        height={200}
        sizes="32px"
        className="h-8 w-8 flex-shrink-0"
      />
      <span className={tone === 'light' ? 'text-[length:var(--step-small)] font-medium' : 'text-[length:var(--step-small)] text-white/80'}>NCDD Member</span>
    </a>
  );
}
