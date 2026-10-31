'use client';

import { useEffect, useRef, useState } from 'react';
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

/** Enough to feel endless without mounting all hundred-plus reviews. */
// 16 cards, each column repeated three times so no column runs out mid-cycle.
// It was 24 x 3 = 72 moving cards, which made the wall the heaviest thing on
// the page.
const WALL_SIZE = 16;
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
            <AvatarFallback className="bg-ice text-[15px] font-semibold text-sky-deep">
              {initials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <figcaption className="truncate text-[15px] font-semibold text-navy-950">{name}</figcaption>
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: rating }, (_, i) => (
                <Star key={i} className="h-3 w-3 fill-sky-deep text-sky-deep" />
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
  // Hover and focus pause the wall (see Marquee). It also stops whenever it
  // is off screen, so dozens of moving cards in a 3D layer are never
  // animating out of sight while the visitor scrolls the rest of the page.
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const r = ref.current?.getBoundingClientRect();
      if (r) setVisible(r.bottom > -200 && r.top < window.innerHeight + 200);
    };
    const onScroll = () => {
      if (!frame) frame = window.setTimeout(check, 120);
    };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.clearTimeout(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative h-[420px] w-full overflow-hidden sm:h-[520px] [contain:layout_paint] ${
        !visible ? '[&_.animate-marquee-vertical]:[animation-play-state:paused]' : ''
      }`}
      aria-label="Client reviews"
    >
      {/* The cards are cut off a few pixels inside the wall's edge, under the
          solid end of the fades below. Cut off at the edge itself, Chrome
          could round the two differently while the wall slid in, leaving a
          hairline of white card along the top and bottom. */}
      <div className="absolute inset-1 flex items-center justify-center overflow-hidden [perspective:340px]">
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
              className="[--duration:46s]"
              ariaRole="list"
            >
              {group.map((review) => (
                <ReviewCard key={review.name} name={review.name} text={review.text} rating={review.rating} />
              ))}
            </Marquee>
          ))}
        </div>
      </div>

      {/* Edge fades as fixed overlays in the navy-900 field colour. They sit
          still above the moving cards, so the browser composites them once;
          a mask over the moving 3D layer (the earlier approach) forced the
          whole wall to be redrawn every frame. taste-skill-ignore */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#12253d] via-[#12253d]/70 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#12253d] via-[#12253d]/70 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#12253d] to-transparent sm:w-24" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#12253d] from-55% to-transparent sm:w-52" aria-hidden="true" />
    </div>
  );
}
