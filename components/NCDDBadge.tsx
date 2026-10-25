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
 * - `glass`: a tile for the trust row on the home page's navy field, badge
 *   on top at 96px so it can actually be read.
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
        className="flex flex-col items-center justify-start gap-4 px-5 pt-7 pb-6 min-w-0 text-center bg-navy-800 hover:bg-navy-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
      >
        <span className="flex h-24 w-full items-center justify-center">
          <Image
            src="/assets/ncdd-general-member-badge.png"
            alt={ALT}
            width={200}
            height={200}
            sizes="96px"
            className="h-24 w-24"
          />
        </span>
        <span>
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
        className="flex items-center gap-4 bg-white border border-navy-950/10 px-5 py-4 hover:border-navy-950/40 transition-colors duration-200"
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
          <p className="text-sm font-bold text-navy-950">NCDD Member</p>
          <p className="text-xs text-navy-950/60">National College for DUI Defense</p>
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
      className={`flex items-center gap-2.5 transition-opacity ${tone === 'light' ? 'hover:opacity-80' : 'opacity-90 hover:opacity-100'}`}
    >
      <Image
        src="/assets/ncdd-general-member-badge.png"
        alt={ALT}
        width={200}
        height={200}
        sizes="64px"
        className="h-16 w-16 flex-shrink-0"
      />
      <span className={tone === 'light' ? 'text-[length:var(--step-small)] font-medium' : 'text-[length:var(--step-small)] text-white/80'}>NCDD Member</span>
    </a>
  );
}
