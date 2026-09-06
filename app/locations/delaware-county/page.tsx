import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Delaware County Criminal Defense & OVI | Jwayyed Law LLC',
  description:
    'Jwayyed Law LLC defends OVI, misdemeanor, and personal injury cases in Delaware County — Delaware, Powell, Dublin, Sunbury. Call (614) 285-5482.',
  keywords: [
    'Delaware County OVI attorney',
    'Delaware County criminal defense lawyer',
    'OVI lawyer Delaware Ohio',
    'Delaware County Municipal Court attorney',
    'Powell OVI defense',
    'Lewis Center criminal defense',
    'Delaware County misdemeanor lawyer',
    'personal injury Delaware County Ohio',
  ],
  openGraph: {
    title: 'Delaware County Criminal Defense & OVI | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/delaware-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/delaware-county' },
};

const breadcrumbItems = [
  { label: 'Delaware County', href: '/locations/delaware-county' },
];

const faqs = [
  {
    question: 'What areas of Delaware County does Jwayyed Law LLC serve?',
    answer:
      'Jwayyed Law LLC serves all of Delaware County — including the City of Delaware, Powell, Lewis Center, Sunbury, Westerville (Delaware County portion), Dublin (Delaware County portion), and surrounding communities. We appear at Delaware County Municipal Court (1 W. Winter St, Delaware, OH 43015) and the Delaware County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Delaware County?',
    answer:
      'Our Delaware County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Delaware County Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Delaware County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums. A second OVI within 10 years requires a minimum of 10 consecutive days in jail, fines of $715 to $1,625, and a 1 to 7 year suspension with 90-day vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Delaware County?',
    answer:
      'After an OVI arrest in Delaware County, the arresting officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have only 30 days from the date of the ALS to appeal it at Delaware County Municipal Court. Missing this deadline permanently waives your right to contest the suspension — even if the underlying OVI charge is later reduced or dismissed. Contact our office immediately after an OVI arrest.',
  },
  {
    question: 'Where is Delaware County Municipal Court located?',
    answer:
      'Delaware County Municipal Court is located at 1 W. Winter Street, Delaware, OH 43015. The court handles misdemeanor criminal cases, OVI/DUI charges, traffic violations, and civil claims up to $15,000 for residents and incidents occurring within Delaware County.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Delaware County legal matters?',
    answer:
      'Jwayyed Law LLC is a Columbus-based firm that regularly practices in Delaware County Municipal Court and the Delaware County Court of Common Pleas. We understand the local prosecutors, court procedures, and sentencing practices specific to Delaware County. We combine thorough case preparation with knowledge of Ohio law to give our Delaware County clients the best possible defense. Call (614) 285-5482 for a consultation.',
  },
];

export default function DelawareCountyLocationsPage() {


  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Delaware County Criminal Defense & OVI Attorney"
        description="Experienced legal representation throughout Delaware County — Delaware, Powell, Lewis Center, Sunbury, and surrounding communities. OVI defense, criminal misdemeanor defense, and personal injury. Call (614) 285-5482."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Legal Services in Delaware County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County is one of Ohio&apos;s fastest-growing counties, stretching north of Columbus through Powell, Lewis Center, and the City of Delaware. OVI arrests along US-23, US-36, and SR-315 are handled first at{' '}
              <strong>Delaware County Municipal Court</strong> (1 W. Winter St, Delaware, OH 43015). Misdemeanor criminal charges, traffic offenses, and civil matters up to $15,000 are also heard there. Jwayyed Law LLC represents Delaware County clients at Municipal Court, the Court of Common Pleas, and throughout the county. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>

            <div className="not-prose space-y-4 mb-10">
              <div className="border-l-4 border-[#b87333] bg-gray-50 rounded-r-lg p-5">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-3">
                  Delaware County Practice Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    {
                      label: 'OVI / DUI Defense — Delaware County Municipal Court',
                      href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court',
                      desc: 'First through felony OVI, high-tier, refusal, ALS appeals',
                    },
                    {
                      label: 'Criminal Misdemeanor Defense — Delaware County',
                      href: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court',
                      desc: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
                    },
                    {
                      label: 'Personal Injury — Delaware County',
                      href: '/locations/delaware-county/personal-injury-delaware-county',
                      desc: 'Car accidents, slip and fall, wrongful death, premises liability',
                    },
                    {
                      label: 'Business Formation / LLC — Delaware County',
                      href: '/locations/delaware-county/business-formation-llc-delaware-county',
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
              For OVI arrests in Delaware County, the 30-day ALS appeal deadline is critical — contact us immediately after any OVI arrest. Reach Jwayyed Law LLC at{' '}
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
