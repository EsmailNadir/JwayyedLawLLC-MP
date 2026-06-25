import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Greene County Criminal Defense & OVI Lawyer | Jwayyed Law LLC',
  description:
    'Jwayyed Law LLC defends OVI, criminal misdemeanor, and personal injury cases in Greene County — Fairborn, Xenia, Beavercreek, Kettering, and surrounding communities. Fairborn Municipal Court. Call (614) 285-5482.',
  keywords: [
    'Greene County OVI attorney',
    'Greene County criminal defense lawyer',
    'OVI lawyer Fairborn Ohio',
    'Fairborn Municipal Court attorney',
    'Xenia OVI defense Ohio',
    'Beavercreek criminal defense attorney',
    'Greene County misdemeanor lawyer',
    'personal injury Greene County Ohio',
  ],
  openGraph: {
    title: 'Greene County Criminal Defense & OVI Lawyer | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/greene-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/greene-county' },
};

const breadcrumbItems = [
  { label: 'Greene County', href: '/locations/greene-county' },
];

const faqs = [
  {
    question: 'What areas of Greene County does Jwayyed Law LLC serve?',
    answer:
      'Jwayyed Law LLC serves clients throughout Greene County, including Fairborn, Xenia, Beavercreek, Kettering (Greene County portion), Yellow Springs, Cedarville, and surrounding communities. We appear at Fairborn Municipal Court and the Greene County Court of Common Pleas in Xenia.',
  },
  {
    question: 'What practice areas does the firm handle in Greene County?',
    answer:
      'Our Greene County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Greene County?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Greene County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums. A second OVI within 10 years requires a minimum of 10 consecutive days in jail, fines of $715 to $1,625, and a 1 to 7 year suspension with 90-day vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Greene County?',
    answer:
      'After an OVI arrest in Greene County, the arresting officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have only 30 days from the date of the ALS to appeal it at Fairborn Municipal Court or the applicable Greene County court. Missing this deadline permanently waives your right to contest the suspension — even if the underlying OVI charge is later reduced or dismissed. Contact our office immediately after any OVI arrest.',
  },
  {
    question: 'Where is Fairborn Municipal Court located?',
    answer:
      'Fairborn Municipal Court is located at 1 W. Main Street, Fairborn, OH 45324. The court handles misdemeanor criminal cases, OVI/DUI charges, and traffic violations for Fairborn and surrounding Greene County communities. The Greene County Court of Common Pleas, which handles felony cases and civil matters over $15,000, is located at 45 N. Detroit St, Xenia, OH 45385.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Greene County legal matters?',
    answer:
      'Jwayyed Law LLC is an Ohio firm that practices throughout the state, including Greene County courts. We prepare every case thoroughly — reviewing all evidence, identifying constitutional issues, and understanding local court procedures — to give our Greene County clients the strongest possible defense. Call (614) 285-5482 for a consultation.',
  },
];

export default function GreeneCountyLocationsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: `https://www.jjlawohio.com${item.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Greene County Criminal Defense & OVI Attorney"
        description="Experienced legal representation throughout Greene County — Fairborn, Xenia, Beavercreek, Yellow Springs, and surrounding communities. OVI defense, criminal misdemeanor defense, and personal injury. Call (614) 285-5482."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Legal Services in Greene County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County lies east of Dayton and is home to Fairborn, Xenia, Beavercreek, and Yellow Springs. OVI arrests and criminal charges in Greene County are heard at <strong>Fairborn Municipal Court</strong> (1 W. Main St, Fairborn, OH 45324) and the <strong>Greene County Court of Common Pleas</strong> (45 N. Detroit St, Xenia, OH 45385). Jwayyed Law LLC represents clients across all Greene County courts. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>

            <div className="not-prose space-y-4 mb-10">
              <div className="border-l-4 border-[#b87333] bg-gray-50 rounded-r-lg p-5">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-3">
                  Greene County Practice Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    {
                      label: 'OVI / DUI Defense — Fairborn Municipal Court',
                      href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court',
                      desc: 'First through felony OVI, high-tier, refusal, ALS appeals',
                    },
                    {
                      label: 'Criminal Misdemeanor Defense — Greene County',
                      href: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court',
                      desc: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
                    },
                    {
                      label: 'Personal Injury — Greene County',
                      href: '/locations/greene-county/personal-injury-greene-county',
                      desc: 'Car accidents, slip and fall, wrongful death, premises liability',
                    },
                    {
                      label: 'Business Formation / LLC — Greene County',
                      href: '/locations/greene-county/business-formation-llc-greene-county',
                      desc: 'LLC formation, operating agreements, business planning',
                    },
                  ].map(({ label, href, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block p-4 border border-gray-200 rounded-lg hover:shadow-[inset_4px_0_0_#b87333] transition-all group"
                    >
                      <span className="font-['Inter',_'Arial',_sans-serif] text-sm font-semibold text-gray-900 group-hover:text-[#b87333] transition-colors block mb-1">
                        {label}
                      </span>
                      <span className="font-['Inter',_'Arial',_sans-serif] text-xs text-gray-500 group-hover:text-gray-700 transition-colors">{desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              For OVI arrests in Greene County, the 30-day ALS appeal deadline is critical — contact us immediately after any OVI arrest. Reach Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
            </p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
