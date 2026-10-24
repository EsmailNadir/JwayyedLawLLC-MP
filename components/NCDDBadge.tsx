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
 */
export default function NCDDBadge({ variant = 'inline' }: { variant?: 'inline' | 'card' }) {
  if (variant === 'card') {
    return (
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="View Attorney Jwayyed's NCDD profile"
        className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm min-w-[220px] hover:border-slate-300 hover:shadow-md transition-all duration-200"
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
      className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity"
    >
      <Image
        src="/assets/ncdd-general-member-badge.png"
        alt={ALT}
        width={200}
        height={200}
        sizes="32px"
        className="h-8 w-8 flex-shrink-0"
      />
      <span className="text-xs text-gray-400">NCDD Member</span>
    </a>
  );
}
