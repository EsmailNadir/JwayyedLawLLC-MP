import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Athens County Criminal Defense & OVI | Jwayyed Law LLC',
  description:
    'Jwayyed Law LLC defends OVI, misdemeanor, and personal injury cases in Athens County — Athens, Nelsonville, and nearby. Call (614) 285-5482.',
  keywords: [
    'Athens County OVI attorney',
    'Athens County criminal defense lawyer',
    'OVI lawyer Athens Ohio',
    'Athens Municipal Court attorney',
    'Ohio University OVI defense',
    'Athens County misdemeanor lawyer',
    'personal injury Athens County Ohio',
    'Athens Ohio criminal defense attorney',
  ],
  openGraph: {
    title: 'Athens County Criminal Defense & OVI | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/athens-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/athens-county' },
};

const breadcrumbItems = [
  { label: 'Athens County', href: '/locations/athens-county' },
];

const faqs = [
  {
    question: 'What areas of Athens County does Jwayyed Law LLC serve?',
    answer:
      'Jwayyed Law LLC serves clients throughout Athens County, including the City of Athens, the Ohio University area, Nelsonville, Albany, Glouster, and surrounding communities. We appear at Athens Municipal Court (8 E. Washington St, Athens, OH 45701) and the Athens County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Athens County?',
    answer:
      'Our Athens County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Athens Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Athens County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums. A second OVI within 10 years requires a minimum of 10 consecutive days in jail, fines of $715 to $1,625, and a 1 to 7 year suspension.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Athens County?',
    answer:
      'After an OVI arrest in Athens County, the arresting officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have only 30 days from the date of the ALS to appeal it at Athens Municipal Court. Missing this deadline permanently waives your right to contest the suspension — even if the underlying OVI charge is later reduced or dismissed. Contact our office immediately after any OVI arrest.',
  },
  {
    question: 'Where is Athens Municipal Court located?',
    answer:
      'Athens Municipal Court is located at 8 E. Washington Street, Athens, OH 45701. The court handles misdemeanor criminal cases, OVI/DUI charges, and traffic violations for the City of Athens and surrounding Athens County communities. The Athens County Court of Common Pleas (1 South Court St, Athens, OH 45701) handles felony cases and civil matters over $15,000.',
  },
  {
    question: 'Does the firm handle cases involving Ohio University students in Athens?',
    answer:
      'Yes. Jwayyed Law LLC represents Ohio University students and all Athens County residents facing criminal charges, OVI, or other legal matters. Athens County — home to Ohio University — sees a significant volume of OVI, open container, disorderly conduct, and drug charges. A criminal conviction can affect a student\'s academic standing, scholarships, on-campus housing, and future career. Early, aggressive representation can often result in diversion, dismissal, or reduced charges that protect a student\'s record. Call (614) 285-5482.',
  },
];

export default function AthensCountyLocationsPage() {


  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Athens County Criminal Defense & OVI Attorney"
        description="Experienced legal representation throughout Athens County — Athens, Ohio University area, Nelsonville, and surrounding communities. OVI defense, criminal misdemeanor defense, and personal injury. Call (614) 285-5482."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Legal Services in Athens County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Athens County is located in southeast Ohio and is home to Ohio University, making it one of Ohio&apos;s most active counties for OVI, open container, and disorderly conduct charges. Criminal and OVI cases in Athens are heard at <strong>Athens Municipal Court</strong> (8 E. Washington St, Athens, OH 45701). Jwayyed Law LLC represents Athens County clients — including Ohio University students — at Municipal Court and the Athens County Court of Common Pleas. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>

            <div className="not-prose space-y-4 mb-10">
              <div className="border-l-4 border-[#b87333] bg-gray-50 rounded-r-lg p-5">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-3">
                  Athens County Practice Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    {
                      label: 'OVI / DUI Defense — Athens Municipal Court',
                      href: '/locations/athens-county/ovi-dui-defense-athens-municipal-court',
                      desc: 'First through felony OVI, high-tier, refusal, ALS appeals',
                    },
                    {
                      label: 'Criminal Misdemeanor Defense — Athens County',
                      href: '/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court',
                      desc: 'Theft, domestic violence, assault, drug possession, disorderly conduct, open container',
                    },
                    {
                      label: 'Personal Injury — Athens County',
                      href: '/locations/athens-county/personal-injury-athens-county',
                      desc: 'Car accidents, slip and fall, wrongful death, premises liability',
                    },
                    {
                      label: 'Business Formation / LLC — Athens County',
                      href: '/locations/athens-county/business-formation-llc-athens-county',
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
              For OVI arrests in Athens County, the 30-day ALS appeal deadline is critical — contact us immediately after any OVI arrest. Reach Jwayyed Law LLC at{' '}
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
