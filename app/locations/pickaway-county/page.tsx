import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Pickaway County Criminal Defense & OVI Lawyer | Jwayyed Law LLC',
  description:
    'Jwayyed Law LLC defends OVI, criminal misdemeanor, and personal injury cases in Pickaway County — Circleville, Ashville, Williamsport, and surrounding communities. Circleville Municipal Court. Call (614) 285-5482.',
  keywords: [
    'Pickaway County OVI attorney',
    'Pickaway County criminal defense lawyer',
    'OVI lawyer Circleville Ohio',
    'Circleville Municipal Court attorney',
    'Ashville OVI defense Ohio',
    'Pickaway County misdemeanor lawyer',
    'personal injury Pickaway County Ohio',
    'Circleville OVI defense attorney',
  ],
  openGraph: {
    title: 'Pickaway County Criminal Defense & OVI Lawyer | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/pickaway-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/pickaway-county' },
};

const breadcrumbItems = [
  { label: 'Pickaway County', href: '/locations/pickaway-county' },
];

const faqs = [
  {
    question: 'What areas of Pickaway County does Jwayyed Law LLC serve?',
    answer:
      'Jwayyed Law LLC serves clients throughout Pickaway County, including Circleville, Ashville, Williamsport, South Bloomfield, and surrounding communities. We appear at Circleville Municipal Court (115 E. Main St, Circleville, OH 43113) and the Pickaway County Court of Common Pleas. Our attorney previously served as Municipal Prosecutor and Assistant Law Director for the City of Circleville, giving us unique insight into local court practices.',
  },
  {
    question: 'What practice areas does the firm handle in Pickaway County?',
    answer:
      'Our Pickaway County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Circleville Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Pickaway County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums. A second OVI within 10 years requires a minimum of 10 consecutive days in jail, fines of $715 to $1,625, and a 1 to 7 year suspension.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Pickaway County?',
    answer:
      'After an OVI arrest in Pickaway County, the arresting officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have only 30 days from the date of the ALS to appeal it at Circleville Municipal Court. Missing this deadline permanently waives your right to contest the suspension. Contact our office immediately after any OVI arrest.',
  },
  {
    question: 'Where is Circleville Municipal Court located?',
    answer:
      'Circleville Municipal Court is located at 115 E. Main Street, Circleville, OH 43113. The court handles misdemeanor criminal cases, OVI/DUI charges, and traffic violations for Circleville and surrounding Pickaway County communities. The Pickaway County Court of Common Pleas (207 S. Court St, Circleville, OH 43113) handles felony cases and civil matters over $15,000.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Pickaway County legal matters?',
    answer:
      'Our attorney previously served as Municipal Prosecutor and Assistant Law Director for the City of Circleville — giving us firsthand knowledge of how Pickaway County cases are prosecuted, what local prosecutors look for, and how Circleville Municipal Court operates. That insider perspective translates directly into stronger defense for our Pickaway County clients. Call (614) 285-5482 for a consultation.',
  },
];

export default function PickawayCountyLocationsPage() {
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
        title="Pickaway County Criminal Defense & OVI Attorney"
        description="Experienced legal representation throughout Pickaway County — Circleville, Ashville, Williamsport, and surrounding communities. Our attorney previously served as Municipal Prosecutor in Circleville. OVI defense, criminal misdemeanor defense, and personal injury. Call (614) 285-5482."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Legal Services in Pickaway County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Pickaway County sits directly south of Columbus, with Circleville as the county seat. Our attorney previously served as Municipal Prosecutor and Assistant Law Director for the City of Circleville — giving Jwayyed Law LLC unique familiarity with how OVI and criminal cases are handled at <strong>Circleville Municipal Court</strong> (115 E. Main St, Circleville, OH 43113). We represent defendants throughout Pickaway County in both criminal defense and civil matters. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>

            <div className="not-prose space-y-4 mb-10">
              <div className="border-l-4 border-[#b87333] bg-gray-50 rounded-r-lg p-5">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-3">
                  Pickaway County Practice Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    {
                      label: 'OVI / DUI Defense — Circleville Municipal Court',
                      href: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court',
                      desc: 'First through felony OVI, high-tier, refusal, ALS appeals',
                    },
                    {
                      label: 'Criminal Misdemeanor Defense — Pickaway County',
                      href: '/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court',
                      desc: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
                    },
                    {
                      label: 'Personal Injury — Pickaway County',
                      href: '/locations/pickaway-county/personal-injury-pickaway-county',
                      desc: 'Car accidents, slip and fall, wrongful death, premises liability',
                    },
                    {
                      label: 'Business Formation / LLC — Pickaway County',
                      href: '/locations/pickaway-county/business-formation-llc-pickaway-county',
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
              For OVI arrests in Pickaway County, the 30-day ALS appeal deadline is critical — contact us immediately after any OVI arrest. Reach Jwayyed Law LLC at{' '}
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
