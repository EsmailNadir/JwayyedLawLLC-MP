'use client';

import { useState } from 'react';
import { Pause, Play, Star } from 'lucide-react';
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

/** Transparency masks that fade the wall's own edges (no colour is drawn). */
const FADE_Y = '[mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]'; // taste-skill-ignore
const FADE_X = '[mask-image:linear-gradient(to_right,transparent,black_12%,black_70%,transparent)]'; // taste-skill-ignore

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
    <Card className="w-[264px] border-0 bg-white shadow-none">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarFallback className="bg-copper-100 text-[15px] font-semibold text-copper-700">
              {initials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <figcaption className="truncate text-[15px] font-semibold text-navy-950">{name}</figcaption>
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: rating }, (_, i) => (
                <Star key={i} className="h-3 w-3 fill-copper-500 text-copper-500" />
              ))}
            </div>
          </div>
        </div>
        <blockquote className="mt-3 text-[15px] leading-relaxed text-navy-950/80">
          &ldquo;{truncateReview(text)}&rdquo;
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialWall() {
  // The wall scrolls without end, so it needs a way to stop that is not
  // hover: touch screens have no hover, and keyboard focus alone is not
  // discoverable. Hover and focus still pause it as well.
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`relative flex h-[420px] w-full items-center justify-center overflow-hidden sm:h-[520px] [perspective:340px] ${
        paused ? '[&_.animate-marquee-vertical]:[animation-play-state:paused]' : ''
      }`}
      aria-label="Client reviews"
    >
      {/* Rotation kept modest. The upstream demo tilts 20deg on three axes,
          which looks striking with placeholder text and is tiring to read with
          real ones — these are quotes a visitor is meant to actually read. */}
      {/* The wall fades out at its edges through masks on the wall itself,
          rather than colored overlay boxes, so it dissolves into whatever
          field it sits on. The rotated block is wider than its container, so
          each mask holds full opacity well in from the edge. */}
      <div className={`absolute inset-0 flex items-center justify-center ${FADE_Y}`}>
        <div className={`flex h-full w-full items-center justify-center ${FADE_X}`}>
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
        </div>
      </div>

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        className="motion-reduce:hidden absolute top-3 right-3 z-10 inline-flex items-center justify-center w-11 h-11 bg-navy-950 text-white hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
        aria-label={paused ? 'Play scrolling reviews' : 'Pause scrolling reviews'}
      >
        {paused ? <Play className="w-4 h-4" aria-hidden="true" /> : <Pause className="w-4 h-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
