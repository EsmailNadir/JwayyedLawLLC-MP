'use client';

import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { motion, animate, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ReviewSummaryCardProps {
  /** The average rating value. */
  rating: number;
  /** The total number of reviews. */
  reviewCount: number;
  /** The maximum possible rating, used to render stars. */
  maxRating?: number;
  /** A descriptive summary text line. */
  summaryText: string;
  /** Optional class name for custom styling. */
  className?: string;
}

/**
 * Animated rating summary.
 *
 * Two changes from the upstream snippet:
 * - The count-up starts when the card scrolls into view rather than on mount.
 *   Mounted below the fold it would otherwise finish counting before anyone
 *   could see it, which is the whole point of the effect.
 * - Under `prefers-reduced-motion` the final figures are written immediately
 *   and nothing animates.
 */
export const ReviewSummaryCard: React.FC<ReviewSummaryCardProps> = ({
  rating,
  reviewCount,
  maxRating = 5,
  summaryText,
  className,
}) => {
  const ratingRef = useRef<HTMLSpanElement>(null);
  const reviewCountRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;

    const format = (value: number) => new Intl.NumberFormat('en-US').format(Math.round(value));

    if (reduceMotion) {
      if (ratingRef.current) ratingRef.current.textContent = rating.toFixed(1);
      if (reviewCountRef.current) reviewCountRef.current.textContent = format(reviewCount);
      return;
    }

    const ratingControl = animate(0, rating, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        if (ratingRef.current) ratingRef.current.textContent = value.toFixed(1);
      },
    });

    const reviewCountControl = animate(0, reviewCount, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        if (reviewCountRef.current) reviewCountRef.current.textContent = format(value);
      },
    });

    return () => {
      ratingControl.stop();
      reviewCountControl.stop();
    };
  }, [rating, reviewCount, inView, reduceMotion]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'w-full max-w-xs rounded-xl border bg-card p-6 text-center shadow-sm',
        'flex flex-col items-center justify-center',
        className
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-label={`Rating: ${rating} out of ${maxRating} based on ${reviewCount} reviews.`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <motion.div key={i} custom={i} variants={starVariants}>
            <Star
              className={cn('h-6 w-6', rating >= i + 1 ? 'text-copper-500' : 'text-muted-foreground/50')}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
        <span ref={ratingRef}>0.0</span>
        <span className="text-3xl font-semibold">
          {' '}
          (<span ref={reviewCountRef}>0</span> Reviews)
        </span>
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">{summaryText}</p>
    </motion.div>
  );
};
