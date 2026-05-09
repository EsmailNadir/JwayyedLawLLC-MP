import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'First OVI Defense Attorney Columbus Ohio | Jwayyed Law',
  description: 'First OVI offense in Columbus? Mandatory 3-day jail or DIP, $565–$1,075 fine, 1–3 year suspension under HB 37. ALS appeal (30-day deadline). (614) 285-5482.',
  keywords: [
    'first OVI Columbus Ohio',
    'first offense DUI Columbus',
    'Columbus first OVI lawyer',
    'first OVI defense Columbus',
    'first OVI penalty Ohio 2025',
    'Franklin County first OVI attorney',
  ],
  openGraph: {
    title: 'First OVI Defense Attorney Columbus Ohio | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/first-ovi-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/first-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'First OVI — Columbus', href: '/locations/franklin-county/first-ovi-columbus' },
];

const faqs = [
  {
    question: 'What are the mandatory penalties for a first OVI in Columbus?',
    answer: 'Under R.C. 4511.19 and HB 37 (effective April 9, 2025), a first low-tier OVI (BAC 0.08%–0.169%) in Columbus carries: mandatory minimum 3 days in jail OR 3 days in a certified Driver Intervention Program; fines of $565–$1,075; license suspension of 1–3 years; and a $315 reinstatement fee. High-tier OVI (BAC 0.17%+) raises the mandatory minimum to 6 days (3 days jail + 3-day DIP, or 6 days straight if DIP unavailable). A judge cannot impose less than these mandatory minimums.',
  },
  {
    question: 'Can the 15-day hard suspension be waived for a first Columbus OVI?',
    answer: 'Yes. HB 37 allows Franklin County Municipal Court to waive the 15-day hard suspension waiting period for limited driving privileges when a first-time defendant agrees to install a certified ignition interlock device. This means first offenders who accept an interlock can potentially drive to work, school, and medical appointments almost immediately after an OVI arrest — a significant change from prior law that required waiting 15 days before any privileges were available.',
  },
  {
    question: 'What is a Driver Intervention Program and how does it work in Columbus?',
    answer: 'A certified Driver Intervention Program (DIP) is a 3-day alcohol education and treatment program that Ohio courts can accept in lieu of 3 days in jail for a first low-tier OVI conviction. The program is held at certified facilities and must be completed within a court-ordered time frame. Franklin County Municipal Court regularly accepts DIP completion in lieu of jail for first-offense defendants. Our firm evaluates whether DIP is appropriate in your specific case and helps you identify a certified program.',
  },
  {
    question: 'What is the ALS and why is the 30-day deadline critical for a Columbus first OVI?',
    answer: 'The Administrative License Suspension (ALS) is a civil action imposed at the moment of OVI arrest — completely separate from the criminal case. You have 30 days from arrest to appeal at Franklin County Municipal Court. Miss this deadline and you permanently lose the right to contest the suspension. Our firm files ALS appeals immediately, requests a stay so you can keep driving during the appeal, and challenges whether all procedural requirements under ORC 4511.191 were met.',
  },
  {
    question: 'Can a first OVI in Columbus be reduced to reckless operation?',
    answer: 'In some Columbus first-OVI cases, the charge can be reduced to reckless operation under R.C. 4511.20 ("wet reckless") by plea agreement. Reckless operation does not carry the mandatory minimum jail requirement and — unlike an OVI — is eligible for expungement under ORC 2953.32 after the applicable waiting period. Our firm evaluates whether the facts of your case support pursuing this reduction and whether the prosecution in Franklin County Municipal Court is open to it.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus first OVI?',
    answer: 'For a first Columbus OVI, early attorney involvement is critical: the 30-day ALS appeal deadline, the availability of a DIP alternative to jail, and the potential for reckless operation reduction are all matters that require immediate action. Jwayyed Law LLC appears regularly at Franklin County Municipal Court and handles first-OVI matters from ALS appeal through final resolution. Call (614) 285-5482 — do not wait until your arraignment.',
  },
];

export default function ColumbusFirstOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="First OVI Defense in Columbus, Ohio"
        description="First OVI offense in Columbus? Jwayyed Law LLC handles ALS appeals (30-day deadline), Driver Intervention Program, and first-offense OVI defense at Franklin County Municipal Court. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              First OVI / DUI Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For many Columbus residents, a first OVI arrest is their first encounter with the criminal justice system. Even as a first offense, Ohio Revised Code 4511.19 — substantially revised by HB 37 effective April 9, 2025 — imposes mandatory minimum penalties that a judge cannot reduce below. A first OVI conviction in Columbus means a mandatory minimum of 3 days in jail or 3 days in a certified Driver Intervention Program, fines of $565–$1,075, and a license suspension of 1–3 years. These are not suggestions — they are floors. Jwayyed Law LLC provides experienced first-OVI defense at Franklin County Municipal Court. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              immediately — the ALS appeal deadline is 30 days from your arrest.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              First Columbus OVI — Mandatory Penalties Under HB 37
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s House Bill 37 revised the mandatory minimums effective April 9, 2025. For a first low-tier OVI (BAC 0.08%–0.169%): mandatory minimum of 3 consecutive days in jail, or 3 days in a certified Driver Intervention Program as an alternative; fines of $565–$1,075; license suspension of 1–3 years; and a $315 reinstatement fee. For a first high-tier OVI (BAC 0.17% or above): mandatory minimum of 6 days (3 days jail + 3 days DIP, or 6 days straight if DIP unavailable). Fines remain $565–$1,075 and suspension 1–3 years.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              HB 37 also introduced a significant change for first-time defendants: the mandatory 15-day hard suspension waiting period for limited driving privileges can be waived if the defendant agrees to install and use a certified ignition interlock device. This means Columbus first-OVI defendants who accept an interlock — a breath testing device installed in the vehicle — may be able to continue driving to work, school, and medical appointments almost immediately after arrest, rather than waiting through the hard suspension period. This is a meaningful quality-of-life change for employed defendants who depend on their vehicles.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              ALS Appeal — Act Within 30 Days
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Administrative License Suspension is the most time-sensitive issue in every Columbus first OVI. The ALS takes effect the moment the officer seizes your license and serves the notice — before any court date, before any conviction. You have <strong>exactly 30 days from the date of arrest</strong> to file an appeal in Franklin County Municipal Court. This deadline is absolute — no extension is available. Our firm files ALS appeals immediately, requests a stay so you can continue driving during the appeal, and challenges whether all ORC 4511.191 procedural requirements were met.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              First Columbus OVI Defenses
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              First Columbus OVI defense strategy begins with the validity of the traffic stop and proceeds through field sobriety test administration, breathalyzer calibration, and blood test chain of custody. Our firm obtains all body-cam and dash-cam footage, all breathalyzer maintenance records, and all blood test documentation before evaluating any offer. For near-threshold BAC results (close to 0.08% or near 0.17%), rising BAC analysis and instrument reliability challenges can be powerful. For cases where the BAC evidence is strong but other elements of the case are weak, reckless operation reduction may be available. For first-time defendants with no prior record and mitigating circumstances, diversion programs are occasionally available at Franklin County Municipal Court.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Collateral Consequences of a First Columbus OVI Conviction
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond the mandatory minimums, a first OVI conviction in Columbus creates a permanent criminal record that is accessible on background checks indefinitely — OVI convictions under R.C. 4511.19 are not eligible for expungement in Ohio. This means a Columbus resident convicted of OVI at 25 will have that conviction appear on background checks when they apply for jobs, housing, and professional licenses at 35, 45, and beyond. The driving record consequences include a 1–3 year suspension, the SR-22 insurance requirement after reinstatement, and dramatically higher insurance rates — sometimes tripling or quadrupling premiums. For professionals in regulated industries — nurses, teachers, attorneys, financial advisers — a first OVI conviction triggers mandatory reporting to licensing boards that may investigate or impose additional conditions.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The 10-year OVI look-back period means a first conviction stays relevant for a decade. If a second OVI occurs within 10 years, the first conviction doubles the mandatory minimum and extends the license suspension to 1–7 years. This long-term look-back consequence is one reason pursuing the strongest possible defense — including reckless operation reduction where available — is always worth the effort even when the case appears difficult.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>ALS appeal:</strong> Emergency filing within 30 days, stay of suspension requested</li>
              <li><strong>Traffic stop validity:</strong> Fourth Amendment analysis of the stop&apos;s basis</li>
              <li><strong>Field sobriety test review:</strong> NHTSA compliance comparison from body-cam footage</li>
              <li><strong>Breathalyzer calibration:</strong> Subpoena of maintenance and calibration records</li>
              <li><strong>DIP evaluation:</strong> Advising on Driver Intervention Program availability as an alternative to jail</li>
              <li><strong>Ignition interlock:</strong> Evaluating interlock agreement to waive the 15-day hard suspension</li>
              <li><strong>Reckless operation reduction:</strong> Pursuing R.C. 4511.20 plea to preserve expungement eligibility</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC immediately after your Columbus first OVI arrest at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              The 30-day ALS deadline starts the clock — every day matters.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
