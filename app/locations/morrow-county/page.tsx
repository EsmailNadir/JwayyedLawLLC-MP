import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Morrow County OVI & Criminal Defense | Jwayyed Law LLC',
  description:
    'OVI, criminal, and personal injury defense in Morrow County — Mt. Gilead, Cardington, and Marengo. Morrow County Municipal Court. Call (614) 285-5482.',
  keywords: [
    'Morrow County OVI attorney',
    'Morrow County criminal defense lawyer',
    'OVI lawyer Mt Gilead Ohio',
    'Morrow County Municipal Court attorney',
    'Cardington OVI defense Ohio',
    'Morrow County misdemeanor lawyer',
    'personal injury Morrow County Ohio',
    'Mt Gilead criminal defense attorney',
  ],
  openGraph: {
    title: 'Morrow County OVI & Criminal Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/morrow-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/morrow-county' },
};

const breadcrumbItems = [
  { label: 'Morrow County', href: '/locations/morrow-county' },
];

const faqs = [
  {
    question: 'What areas of Morrow County does Jwayyed Law LLC serve?',
    answer:
      'Jwayyed Law LLC serves clients throughout Morrow County, including Mt. Gilead, Cardington, Marengo, Edison, and surrounding communities. We appear at Morrow County Municipal Court (48 E. High St, Mt. Gilead, OH 43338) and the Morrow County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Morrow County?',
    answer:
      'Our Morrow County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Morrow County Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Morrow County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums. A second OVI within 10 years requires a minimum of 10 consecutive days in jail, fines of $715 to $1,625, and a 1 to 7 year suspension with vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Morrow County?',
    answer:
      'After an OVI arrest in Morrow County, the arresting officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have only 30 days from the date of the ALS to appeal it at Morrow County Municipal Court. Missing this deadline permanently waives your right to contest the suspension — even if the underlying OVI charge is later reduced or dismissed. Contact our office immediately after any OVI arrest.',
  },
  {
    question: 'Where is Morrow County Municipal Court located?',
    answer:
      'Morrow County Municipal Court is located at 48 E. High Street, Mt. Gilead, OH 43338. The court handles misdemeanor criminal cases, OVI/DUI charges, and traffic violations for Morrow County communities. The Morrow County Court of Common Pleas (48 E. High St, Mt. Gilead, OH 43338) handles felony cases and civil matters over $15,000.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Morrow County legal matters?',
    answer:
      'Jwayyed Law LLC is a Columbus-based firm that regularly serves clients in surrounding counties including Morrow County. We prepare every case thoroughly — reviewing all evidence, identifying constitutional issues, and understanding local procedures — to give Morrow County clients the strongest possible defense. Call (614) 285-5482 for a consultation.',
  },
];

export default function MorrowCountyLocationsPage() {


  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Morrow County Criminal Defense & OVI Attorney"
        description="Experienced legal representation throughout Morrow County — Mt. Gilead, Cardington, Marengo, and surrounding communities. OVI defense, criminal misdemeanor defense, and personal injury. Call (614) 285-5482."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Legal Services in Morrow County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Morrow County lies north of Columbus with Mt. Gilead as the county seat. OVI and misdemeanor criminal charges are heard at <strong>Morrow County Municipal Court</strong> (48 E. High St, Mt. Gilead, OH 43338). Jwayyed Law LLC represents clients throughout Morrow County at Municipal Court and the Morrow County Court of Common Pleas. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>

            <div className="not-prose space-y-4 mb-10">
              <div className="border-l-4 border-[#b87333] bg-gray-50 rounded-r-lg p-5">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-3">
                  Morrow County Practice Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    {
                      label: 'OVI / DUI Defense — Morrow County Municipal Court',
                      href: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court',
                      desc: 'First through felony OVI, high-tier, refusal, ALS appeals',
                    },
                    {
                      label: 'Criminal Misdemeanor Defense — Morrow County',
                      href: '/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court',
                      desc: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
                    },
                    {
                      label: 'Personal Injury — Morrow County',
                      href: '/locations/morrow-county/personal-injury-morrow-county',
                      desc: 'Car accidents, slip and fall, wrongful death, premises liability',
                    },
                    {
                      label: 'Business Formation / LLC — Morrow County',
                      href: '/locations/morrow-county/business-formation-llc-morrow-county',
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
              For OVI arrests in Morrow County, the 30-day ALS appeal deadline is critical — contact us immediately after any OVI arrest. Reach Jwayyed Law LLC at{' '}
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
