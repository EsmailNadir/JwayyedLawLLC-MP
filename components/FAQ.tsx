'use client';

import { useId, useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  className?: string;
  /** Section heading. Defaults to "Questions clients ask". */
  title?: string;
}

/**
 * Questions and answers, with FAQPage structured data.
 *
 * The heading sits in a left column on wide screens so the questions get a
 * long, readable measure. Answers open with a grid-rows transition, which
 * shows the whole answer however long it is (the old max-height trick cut
 * long answers off) and stays still under reduced motion.
 */
export default function FAQ({ faqs, className = '', title = 'Questions clients ask' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section
        className={`jw jw-mark jw-mark--navy bg-ice text-navy-950 py-20 sm:py-28 ${className}`}
        style={
          {
            '--jw-mark-fade': 'radial-gradient(ellipse 55% 70% at 0% 100%, #000 10%, transparent 100%)',
            '--jw-mark-opacity': 0.06,
          } as React.CSSProperties
        }
        aria-labelledby={`${id}-heading`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id={`${id}-heading`} className="jw-display text-[clamp(2rem,1.3rem+2.4vw,3.25rem)] leading-[1.08] lg:sticky lg:top-28">
              {title}
            </h2>
          </div>
          <ul className="lg:col-span-8 bg-white">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <li key={index} className={index > 0 ? 'border-t border-navy-950/10' : ''}>
                  <h3>
                    <button
                      type="button"
                      id={`${id}-q${index}`}
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                      aria-controls={`${id}-a${index}`}
                      className="w-full flex items-start justify-between gap-6 px-6 sm:px-8 py-6 text-left font-semibold text-[length:var(--step-body)] leading-snug hover:text-sky-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-deep"
                    >
                      <span>{faq.question}</span>
                      <Plus
                        className={`mt-0.5 w-5 h-5 flex-shrink-0 text-sky-deep transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`${id}-a${index}`}
                    role="region"
                    aria-labelledby={`${id}-q${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden" inert={!open}>
                      <p className="px-6 sm:px-8 pb-7 max-w-[70ch] text-navy-950/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
