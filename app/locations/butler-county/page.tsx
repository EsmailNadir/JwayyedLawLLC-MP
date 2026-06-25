import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Butler County Criminal Defense & OVI Lawyer | Jwayyed Law LLC',
  description:
    'Jwayyed Law LLC defends OVI, criminal misdemeanor, and personal injury cases in Butler County — Hamilton, Middletown, Fairfield, Oxford, and surrounding communities. Call (614) 285-5482.',
  keywords: [
    'Butler County OVI attorney',
    'Butler County criminal defense lawyer',
    'OVI lawyer Hamilton Ohio',
    'Middletown criminal defense attorney',
    'Butler County misdemeanor lawyer',
    'Fairfield OVI defense Ohio',
    'personal injury Butler County Ohio',
    'Butler County area courts attorney',
  ],
  openGraph: {
    title: 'Butler County Criminal Defense & OVI Lawyer | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/butler-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/butler-county' },
};

const breadcrumbItems = [
  { label: 'Butler County', href: '/locations/butler-county' },
];

const faqs = [
  {
    question: 'What areas of Butler County does Jwayyed Law LLC serve?',
    answer:
      'Jwayyed Law LLC serves clients throughout Butler County, including Hamilton, Middletown, Fairfield, Oxford, West Chester, Liberty Township, Mason, and surrounding communities. We appear at the Butler County area courts, including Hamilton Municipal Court, Middletown Municipal Court, and Fairfield Municipal Court, as well as the Butler County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Butler County?',
    answer:
      'Our Butler County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Butler County?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Butler County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums. A second OVI within 10 years escalates to a minimum of 10 consecutive days in jail, fines of $715 to $1,625, and 1 to 7 year license suspension with vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Butler County?',
    answer:
      'After an OVI arrest in Butler County, the arresting officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have only 30 days from the date of the ALS to file an appeal at the applicable Butler County area court. Missing this deadline permanently waives your right to contest the suspension — even if the underlying OVI charge is later reduced or dismissed. Contact our office immediately after any OVI arrest.',
  },
  {
    question: 'Which courts handle OVI and criminal cases in Butler County?',
    answer:
      'Butler County is served by multiple municipal courts: Hamilton Municipal Court (345 High St, Hamilton, OH 45011) serves the City of Hamilton and surrounding areas; Middletown Municipal Court (1 Donham Plaza, Middletown, OH 45042) serves Middletown and Monroe; Fairfield Municipal Court (5350 Pleasant Ave, Fairfield, OH 45014) serves Fairfield and surrounding communities. The Butler County Court of Common Pleas (315 High St, Hamilton, OH 45011) handles felony cases and civil matters over $15,000.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Butler County legal matters?',
    answer:
      'Jwayyed Law LLC is an Ohio firm that practices throughout the state, including Butler County area courts. We prepare every case thoroughly — reviewing all evidence, identifying constitutional issues, and understanding local court procedures — to give our Butler County clients the strongest possible defense. Call (614) 285-5482 for a consultation.',
  },
];

export default function ButlerCountyLocationsPage() {
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
        title="Butler County Criminal Defense & OVI Attorney"
        description="Experienced legal representation throughout Butler County — Hamilton, Middletown, Fairfield, Oxford, West Chester, and surrounding communities. OVI defense, criminal misdemeanor defense, and personal injury. Call (614) 285-5482."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Legal Services in Butler County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Butler County sits southwest of Columbus between Dayton and Cincinnati, encompassing Hamilton, Middletown, Fairfield, Oxford, and West Chester Township. OVI and criminal charges in Butler County are heard at multiple area courts — Hamilton Municipal Court, Middletown Municipal Court, and Fairfield Municipal Court — depending on where the offense occurred. Jwayyed Law LLC represents clients across all Butler County area courts and the Butler County Court of Common Pleas. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>

            <div className="not-prose space-y-4 mb-10">
              <div className="border-l-4 border-[#b87333] bg-gray-50 rounded-r-lg p-5">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-3">
                  Butler County Practice Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    {
                      label: 'OVI / DUI Defense — Butler County Area Courts',
                      href: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts',
                      desc: 'First through felony OVI, high-tier, refusal, ALS appeals — all Butler County courts',
                    },
                    {
                      label: 'Criminal Misdemeanor Defense — Butler County',
                      href: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts',
                      desc: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
                    },
                    {
                      label: 'Personal Injury — Butler County',
                      href: '/locations/butler-county/personal-injury-butler-county',
                      desc: 'Car accidents, slip and fall, wrongful death, premises liability',
                    },
                    {
                      label: 'Business Formation / LLC — Butler County',
                      href: '/locations/butler-county/business-formation-llc-butler-county',
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
              For OVI arrests in Butler County, the 30-day ALS appeal deadline is critical — contact us immediately after any OVI arrest. Reach Jwayyed Law LLC at{' '}
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
