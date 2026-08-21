import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Montgomery County OVI & Criminal Defense | Jwayyed Law LLC',
  description:
    'OVI, criminal defense & personal injury across Montgomery County — Dayton, Kettering, Huber Heights & nearby. Dayton Municipal Court. (614) 285-5482.',
  keywords: [
    'Montgomery County OVI attorney',
    'Montgomery County criminal defense lawyer',
    'OVI lawyer Dayton Ohio',
    'Dayton Municipal Court attorney',
    'Kettering OVI defense Ohio',
    'Huber Heights criminal defense attorney',
    'Montgomery County misdemeanor lawyer',
    'personal injury Montgomery County Ohio',
  ],
  openGraph: {
    title: 'Montgomery County OVI & Criminal Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/montgomery-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/montgomery-county' },
};

const breadcrumbItems = [
  { label: 'Montgomery County', href: '/locations/montgomery-county' },
];

const faqs = [
  {
    question: 'What areas of Montgomery County does Jwayyed Law LLC serve?',
    answer:
      'Jwayyed Law LLC serves clients throughout Montgomery County, including Dayton, Kettering, Huber Heights, Trotwood, Miamisburg, West Carrollton, Brookville, and surrounding communities. We appear at Dayton Municipal Court, Kettering Municipal Court, and the Montgomery County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Montgomery County?',
    answer:
      'Our Montgomery County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Montgomery County?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Montgomery County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums. A second OVI within 10 years requires a minimum of 10 consecutive days in jail, fines of $715 to $1,625, and a 1 to 7 year suspension with 90-day vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Montgomery County?',
    answer:
      'After an OVI arrest in Montgomery County, the arresting officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have only 30 days from the date of the ALS to appeal it at the applicable Montgomery County court. Missing this deadline permanently waives your right to contest the suspension — even if the underlying OVI charge is later reduced or dismissed. Contact our office immediately after any OVI arrest.',
  },
  {
    question: 'Where is Dayton Municipal Court located?',
    answer:
      'Dayton Municipal Court is located at 301 W. Third Street, Dayton, OH 45402. The court handles misdemeanor criminal cases, OVI/DUI charges, and traffic violations for the City of Dayton. The Montgomery County Court of Common Pleas (41 N. Perry St, Dayton, OH 45422) handles felony cases and civil matters over $15,000 for all of Montgomery County.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Montgomery County legal matters?',
    answer:
      'Jwayyed Law LLC is an Ohio firm that practices throughout the state, including Montgomery County courts. We prepare every case thoroughly — reviewing all evidence, identifying constitutional issues, and understanding local court procedures — to give our Montgomery County clients the strongest possible defense. Call (614) 285-5482 for a consultation.',
  },
];

export default function MontgomeryCountyLocationsPage() {
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
        title="Montgomery County Criminal Defense & OVI Attorney"
        description="Experienced legal representation throughout Montgomery County — Dayton, Kettering, Huber Heights, Trotwood, and surrounding communities. OVI defense, criminal misdemeanor defense, and personal injury. Call (614) 285-5482."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Legal Services in Montgomery County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County is Ohio&apos;s sixth-largest county by population and anchored by Dayton, the county seat. OVI arrests along I-75, I-675, US-35, and SR-4 are common, with cases heard at <strong>Dayton Municipal Court</strong> (301 W. Third St, Dayton, OH 45402), Kettering Municipal Court, and other area courts depending on jurisdiction. The <strong>Montgomery County Court of Common Pleas</strong> (41 N. Perry St, Dayton, OH 45422) handles felony and higher civil matters. Jwayyed Law LLC represents clients across all Montgomery County courts. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>

            <div className="not-prose space-y-4 mb-10">
              <div className="border-l-4 border-[#b87333] bg-gray-50 rounded-r-lg p-5">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-3">
                  Montgomery County Practice Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    {
                      label: 'OVI / DUI Defense — Dayton Municipal Court',
                      href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court',
                      desc: 'First through felony OVI, high-tier, refusal, ALS appeals',
                    },
                    {
                      label: 'Criminal Misdemeanor Defense — Montgomery County',
                      href: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court',
                      desc: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
                    },
                    {
                      label: 'Personal Injury — Montgomery County',
                      href: '/locations/montgomery-county/personal-injury-montgomery-county',
                      desc: 'Car accidents, slip and fall, wrongful death, premises liability',
                    },
                    {
                      label: 'Business Formation / LLC — Montgomery County',
                      href: '/locations/montgomery-county/business-formation-llc-montgomery-county',
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
              For OVI arrests in Montgomery County, the 30-day ALS appeal deadline is critical — contact us immediately after any OVI arrest. Reach Jwayyed Law LLC at{' '}
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
