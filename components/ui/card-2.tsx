import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewSummaryCardProps {
  /** The average rating value. */
  rating: number;
  /** The total number of reviews, shown with a "+" when `orMore` is set. */
  reviewCount: number;
  /** Render the count as "100+" rather than an exact figure. */
  orMore?: boolean;
  /** The maximum possible rating, used to render stars. */
  maxRating?: number;
  /** A descriptive summary text line. */
  summaryText: string;
  /** Optional class name for custom styling. */
  className?: string;
}

/**
 * Rating summary.
 *
 * Previously the figures counted up from zero once the card scrolled into
 * view, which meant the server HTML (what search engines and no-script
 * visitors get) read "0.0 (0 Reviews)", and a screenshot mid-count showed a
 * wrong rating. The real figures are rendered directly now.
 *
 * Stars round to the nearest whole star, so 4.9 shows five rather than four
 * and an empty one.
 */
export const ReviewSummaryCard: React.FC<ReviewSummaryCardProps> = ({
  rating,
  reviewCount,
  orMore = false,
  maxRating = 5,
  summaryText,
  className,
}) => {
  const count = `${new Intl.NumberFormat('en-US').format(reviewCount)}${orMore ? '+' : ''}`;

  return (
    <div
      className={cn('w-full max-w-xs rounded-xl bg-card p-6 text-center flex flex-col items-center justify-center', className)}
      role="group"
      aria-label={`Rated ${rating.toFixed(1)} out of ${maxRating} from ${count} reviews`}
    >
      <div className="flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            className={cn('h-6 w-6', rating >= i + 0.5 ? 'text-sky-deep' : 'text-muted-foreground/50')}
            fill="currentColor"
          />
        ))}
      </div>

      <p className="mt-4 text-4xl font-bold tracking-tight text-foreground tabular-nums" aria-hidden="true">
        {rating.toFixed(1)}
        <span className="text-2xl font-semibold"> ({count} reviews)</span>
      </p>

      <p className="mt-2 text-sm text-muted-foreground">{summaryText}</p>
    </div>
  );
};
