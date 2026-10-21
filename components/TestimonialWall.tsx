'use client';

import { Star } from 'lucide-react';
import { Marquee } from '@/components/ui/3d-testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { oviReviews, truncateReview } from '@/components/OVIReviewsSwiper';

/**
 * Angled wall of continuously scrolling client reviews.
 *
 * The reviews are the firm's real Google reviews. The upstream demo pairs each
 * testimonial with a stock portrait; that is not done here, because attaching
 * invented faces to named real clients would misrepresent them. Initials are
 * used instead, which is both honest and the shadcn Avatar's own fallback.
 */

/** Enough to feel endless without mounting all ninety reviews. */
const WALL_SIZE = 24;
const COLUMNS = 4;

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

const columns = Array.from({ length: COLUMNS }, (_, col) =>
  oviReviews.slice(0, WALL_SIZE).filter((_, i) => i % COLUMNS === col)
);

function ReviewCard({ name, text, rating }: { name: string; text: string; rating: number }) {
  return (
    <Card className="w-[248px] border-copper-200/60 bg-paper-50 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9 border border-copper-200">
            <AvatarFallback className="bg-copper-100 text-[11px] font-semibold text-copper-700">
              {initials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <figcaption className="truncate text-sm font-semibold text-ink-900">{name}</figcaption>
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: rating }, (_, i) => (
                <Star key={i} className="h-3 w-3 fill-copper-500 text-copper-500" />
              ))}
            </div>
          </div>
        </div>
        <blockquote className="mt-3 text-[13px] leading-relaxed text-ink-700">
          &ldquo;{truncateReview(text)}&rdquo;
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialWall() {
  return (
    <div
      className="relative flex h-[420px] w-full items-center justify-center overflow-hidden sm:h-[520px] [perspective:340px]"
      aria-label="Client reviews"
    >
      {/* Rotation kept modest. The upstream demo tilts 20deg on three axes,
          which looks striking with placeholder text and is tiring to read with
          real ones — these are quotes a visitor is meant to actually read. */}
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            'translateX(-30px) translateZ(-60px) rotateX(10deg) rotateY(-9deg) rotateZ(7deg)',
        }}
      >
        {columns.map((group, i) => (
          <Marquee
            key={i}
            vertical
            pauseOnHover
            reverse={i % 2 === 1}
            repeat={3}
            className="[--duration:52s]"
            ariaRole="list"
          >
            {group.map((review) => (
              <ReviewCard key={review.name} name={review.name} text={review.text} rating={review.rating} />
            ))}
          </Marquee>
        ))}
      </div>

      {/* Fades to the oxblood field this sits on, not to a theme token — the
          shadcn `background` token is parchment and would band badly here.
          The rotated block is wider than its container, so without a solid
          first stop the side fades leave cards guillotined mid-word at the
          clip edge. Each therefore holds full opacity before falling off. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#37130f] via-[#37130f]/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1f0b0a] via-[#1f0b0a]/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#33120f] to-transparent sm:w-24"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#2a0f0c] from-55% to-transparent sm:w-52"
        aria-hidden="true"
      />
    </div>
  );
}
