import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Underage OVI Defense Attorney | Jwayyed Law LLC',
  description: 'Underage OVI in Columbus (under 21)? Zero-tolerance 0.02% threshold, R.C. 4511.19(B). Franklin County Municipal Court. Jwayyed Law LLC. (614) 285-5482.',
  keywords: ['Columbus underage OVI lawyer', 'under 21 DUI Columbus Ohio', 'underage drunk driving Columbus', 'minor OVI Columbus attorney', 'zero tolerance OVI Ohio Columbus'],
  openGraph: {
    title: 'Columbus Underage OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/underage-ovi-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/underage-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Underage OVI — Columbus', href: '/locations/franklin-county/underage-ovi-columbus' },
];

const faqs = [
  {
    question: 'What is the legal BAC limit for underage drivers in Columbus?',
    answer: 'Ohio applies a zero-tolerance standard for drivers under 21 under R.C. 4511.19(B). A person under 21 who operates a vehicle with a BAC of 0.02% or above — detectable by a breathalyzer — is guilty of underage OVI, also called OVUAC (operating a vehicle after underage alcohol consumption). This is a separate offense from standard OVI (which requires 0.08%) and carries its own penalties.',
  },
  {
    question: 'What are the penalties for an underage OVI in Columbus?',
    answer: 'An OVUAC conviction (R.C. 4511.19(B)) in Columbus carries: up to 60 days in a driver intervention program or equivalent treatment; fines of $250–$1,000; and a license suspension of 90 days to 2 years. An underage defendant who has a BAC of 0.08% or above is charged under the standard R.C. 4511.19(A) OVI statute (not just the underage provision) and faces the same mandatory minimums as an adult OVI.',
  },
  {
    question: 'Does an underage OVI in Columbus count as a prior OVI for future look-back purposes?',
    answer: 'Yes. Under Ohio law, an OVUAC conviction counts as a prior OVI for purposes of the 10-year look-back period. A Columbus resident who receives an underage OVI at 19 and then another OVI at 28 faces the enhanced second-offense mandatory minimums because the underage conviction qualifies as a prior within the look-back. Understanding this long-term consequence is why fighting an underage OVI — even one that appears minor — is important.',
  },
  {
    question: 'Can an underage OVI in Columbus affect college enrollment or financial aid?',
    answer: 'Yes. An OVUAC or OVI conviction creates a criminal record that can be seen by college admissions offices, scholarship committees, and employers of college students. Drug and alcohol convictions can also affect federal financial aid eligibility for some programs. For Columbus students at OSU, Columbus State, or other institutions, an underage OVI has implications beyond the immediate penalties. Our firm evaluates these collateral consequences in every underage OVI case.',
  },
  {
    question: 'What defenses apply to an underage OVI in Columbus?',
    answer: 'Standard OVI defenses apply to underage cases: the constitutional validity of the traffic stop (Columbus Division of Police must have had reasonable suspicion); whether any breath or blood test was properly administered; and whether the BAC reading was accurate. For an OVUAC with a very low BAC (0.02%–0.07%), margin-of-error arguments about breathalyzer accuracy can be particularly powerful. We also evaluate whether the minor was in a situation where law enforcement is required to contact a parent before questioning.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus underage OVI?',
    answer: 'An underage OVI in Columbus — even the OVUAC zero-tolerance version with a very low BAC — creates a criminal record, counts as a prior OVI for 10 years, and can affect education and employment. Jwayyed Law LLC defends underage OVI charges at Franklin County Municipal Court. The ALS appeal deadline (30 days from arrest) applies to underage cases as well. Call (614) 285-5482 to discuss your situation.',
  },
];

export default function ColumbusUnderageOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Underage OVI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/underage-ovi-columbus"};


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus Underage OVI Defense Attorney"
        description="Under 21 OVI charge in Columbus? Zero-tolerance 0.02% threshold, R.C. 4511.19(B). Jwayyed Law LLC at Franklin County Municipal Court. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Underage OVI Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus is home to Ohio State University — one of the largest universities in the country — as well as Columbus State, Franklin University, Capital University, and dozens of other educational institutions. The combination of a large student population and active nightlife near campus on High Street, the Short North, and the Arena District means Columbus has significant numbers of underage alcohol-related driving stops each year. Ohio&apos;s zero-tolerance law under R.C. 4511.19(B) sets the BAC threshold for drivers under 21 at just 0.02% — detectable by breathalyzer from a single drink. Even a minor OVUAC conviction creates a criminal record that counts as a prior OVI for 10 years, potentially affecting education, employment, and future driving record. Jwayyed Law LLC defends underage OVI charges at Franklin County Municipal Court. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio&apos;s Zero-Tolerance OVI Standard — R.C. 4511.19(B)
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              R.C. 4511.19(B) prohibits any person under 21 from operating a vehicle with a BAC of 0.02% or above. This is separate from the standard OVI threshold of 0.08%. A BAC of 0.02%–0.079% results in an OVUAC charge (operating a vehicle after underage consumption) rather than a full OVI — but it is still a criminal conviction with its own penalty structure. A BAC of 0.08% or above subjects an underage driver to both the OVUAC charge AND the standard OVI under R.C. 4511.19(A), with the full mandatory minimums of the adult OVI statute.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An OVUAC conviction carries: mandatory driver intervention programming up to 60 days; fines of $250–$1,000; and a license suspension of 90 days to 2 years. Critically, an OVUAC conviction also counts as a prior OVI for the 10-year look-back period — meaning a Columbus student convicted of OVUAC at 20 who receives another OVI at 29 faces enhanced second-offense penalties.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies for Columbus Underage OVI
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Standard OVI defenses — stop validity, breathalyzer accuracy, field sobriety test administration — apply to underage cases. For OVUAC cases with a very low BAC (0.02%–0.04%), the margin of error of the breathalyzer is a significant issue. Ohio breathalyzer instruments have certified margins of error; a reading at or near the 0.02% threshold may fall within that error margin, calling the accuracy of the result into question. Our firm subpoenas the maintenance and calibration records of the specific instrument used in every underage OVI case.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The constitutional validity of the traffic stop is the first line of defense in any Columbus underage OVI. The Columbus Division of Police or Ohio State University Police must have had reasonable, articulable suspicion of a traffic violation or criminal activity before initiating the stop. If the stop was not supported by specific and observable facts — if it was pretextual, based on a hunch, or based on mere presence near a bar at closing time without more — the stop may be challenged under the Fourth Amendment, and all evidence obtained from it may be suppressible. Our firm reviews the police report and all available body-cam and dash-cam footage in every underage OVI case before evaluating any plea option.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Administrative License Suspension for Underage OVI in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Like adult OVI defendants, underage OVI defendants in Columbus face an Administrative License Suspension (ALS) upon arrest — imposed immediately and independently of any criminal conviction. The ALS for a first underage consent (BAC 0.02%+) is 90 days; for a refusal, it is 1 year. The ALS appeal must be filed in Franklin County Municipal Court within 30 days of the arrest date. Our firm files the ALS appeal immediately upon being retained, simultaneously with the criminal defense. A successful ALS appeal can restore full driving privileges while the criminal case is still pending. For an underage college student who depends on driving for employment, internships, or class attendance, the ALS is often the most immediately disruptive consequence of the arrest.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Collateral Consequences — Education, Financial Aid, and Employment
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For Columbus students at OSU, Columbus State, Franklin University, Capital University, or any other institution, an underage OVI conviction carries consequences beyond the criminal penalties. Many academic scholarship programs require recipients to maintain a clean criminal record — a conviction can trigger review or revocation depending on the program terms. Students applying for internships, co-ops, professional certifications, or licensing in healthcare, law, education, or financial services face disclosure requirements for criminal convictions, and the conviction creates a background check record that persists for years.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The employment consequences are particularly lasting because the 10-year look-back period means the conviction counts as a prior OVI for nearly a decade. A Columbus student convicted at 19 who receives another OVI at any point before age 29 faces enhanced second-offense mandatory minimums. An aggressive defense seeking dismissal, diversion, or reduction before any conviction is entered is worth pursuing — even when the case appears straightforward — precisely because the collateral consequences can outlast the criminal penalties by years.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Expungement of an Underage OVI in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An OVUAC conviction under R.C. 4511.19(B) is eligible for expungement under R.C. 2953.32 after the applicable waiting period following final discharge. Ohio&apos;s expanded expungement law (as amended through HB 96, effective September 30, 2025) reduced waiting periods for many low-level convictions. Once sealed, the OVUAC conviction is removed from public records accessible through standard background checks. However, sealing does not erase the OVI look-back consequence — a sealed OVUAC conviction still counts as a prior OVI for the 10-year look-back in a future case. Expungement improves the background check picture significantly, but it is not a substitute for avoiding the conviction in the first place.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              The 30-day ALS appeal deadline applies to underage cases as well — act immediately.
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
