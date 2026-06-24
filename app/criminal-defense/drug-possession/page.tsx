import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Drug Possession Defense Ohio | Jwayyed Law LLC',
  description: 'Facing drug possession charges in Ohio? Jwayyed Law LLC defends cocaine, heroin, fentanyl, meth, and marijuana possession under R.C. 2925.11. Call (614) 285-5482.',
  keywords: [
    'drug possession lawyer Ohio',
    'drug possession defense attorney Columbus',
    'cocaine possession Ohio',
    'heroin possession attorney Ohio',
    'drug possession ORC 2925.11',
    'Franklin County drug possession lawyer',
    'drug possession defense Ohio',
    'controlled substance possession attorney',
  ],
  openGraph: {
    title: 'Drug Possession Defense Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/drug-possession',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/criminal-defense/drug-possession' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Drug Possession', href: '/criminal-defense/drug-possession' },
];

const faqs = [
  {
    question: 'What is drug possession under Ohio Revised Code 2925.11?',
    answer: 'Ohio Revised Code 2925.11 prohibits knowingly obtaining, possessing, or using a controlled substance or controlled substance analog. The offense applies to Schedule I through V controlled substances — including cocaine, heroin, fentanyl, methamphetamine, prescription drugs without a valid prescription, and marijuana above the adult-use legal limit. The severity of the charge depends on the type of substance (its Schedule classification) and the quantity possessed. The prosecution must prove knowing possession — accidental possession and unknowing presence of drugs (e.g., in a borrowed vehicle) are defenses.',
  },
  {
    question: 'What are the penalties for drug possession in Ohio?',
    answer: 'Drug possession penalties in Ohio vary widely by substance and quantity. Possession of most Schedule I or II controlled substances (cocaine, heroin, methamphetamine) is a fifth-degree felony at base (up to 12 months prison, $2,500 fine), escalating to F4, F3, F2, and F1 felonies at higher quantities. Marijuana possession above the adult-use legal limit of 2.5 oz is a minor misdemeanor ($150 fine) up to bulk amount (200g); bulk marijuana possession is an M4 (up to 30 days, $250 fine). Drug paraphernalia under R.C. 2925.14 is an M4 on a first offense.',
  },
  {
    question: 'Is marijuana possession still a crime in Ohio?',
    answer: 'For adults 21 and older, Ohio Issue 2 (effective December 7, 2023) and House Bill 86 legalized possession of up to 2.5 ounces of marijuana and up to 15 grams of marijuana concentrate. Home cultivation of up to 6 plants is also permitted. Possession within these limits is not a criminal offense. However, possession above 2.5 oz remains a minor misdemeanor; possession of 200 grams or more (bulk amount) is an M4; and larger quantities escalate to felonies under R.C. 2925.11(C)(3). Persons under 21 are not covered by the adult-use framework.',
  },
  {
    question: 'Can drug evidence be suppressed if the search was unlawful?',
    answer: 'Yes. Many drug possession cases turn on the legality of the search that produced the evidence. If law enforcement conducted a traffic stop without reasonable suspicion, searched a person or vehicle without valid consent or exigent circumstances, or executed a warrant that lacked particularity or probable cause, a motion to suppress may exclude all drug evidence under the Fourth Amendment. Without the physical evidence, the prosecution often has no case. Our firm scrutinizes every stop, search, and chain-of-custody record in every drug possession case before evaluating any plea offer.',
  },
  {
    question: 'What is Intervention in Lieu of Conviction for drug possession in Ohio?',
    answer: 'Ohio Revised Code 2951.041 authorizes Intervention in Lieu of Conviction (ILC) — a program allowing eligible defendants charged with drug possession to complete substance abuse treatment in lieu of conviction. ILC is available for first-time offenders charged with drug possession where the offense was related to substance dependency. Successful completion results in full dismissal of charges — no conviction, no record. ILC is distinct from probation; it removes the conviction entirely. Our firm evaluates ILC eligibility for every drug possession client and advocates for placement where appropriate.',
  },
  {
    question: 'Can a drug possession conviction in Ohio be expunged?',
    answer: 'Most drug possession convictions are eligible for expungement under Ohio Revised Code 2953.32 after applicable waiting periods — 1 year for minor misdemeanor and M1/F4/F5 convictions; 3 years for F3 convictions. The expanded eligibility enacted under HB 96 (effective September 30, 2025) broadened the categories of drug offenses that can be sealed. However, drug trafficking and certain aggravated possession convictions may not be eligible. Our firm evaluates expungement eligibility at the start of every case to inform plea strategy.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for drug possession defense in Ohio?',
    answer: 'Jwayyed Law LLC provides experienced drug possession defense throughout Ohio, including Franklin County, Columbus, and surrounding communities. Drug cases often present viable suppression arguments based on unlawful stops or searches, and diversion options (ILC, HART Court) exist for many first-time defendants. A felony drug conviction affects employment, housing, and professional licensing for years. Our firm evaluates every option and fights for the best available outcome. Call (614) 285-5482 to discuss your case.',
  },
];

export default function DrugPossessionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Drug Possession Defense Attorney in Ohio"
        description="Experienced drug possession defense under Ohio Revised Code 2925.11. Serving Columbus, Franklin County, and surrounding Ohio communities. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Drug Possession Defense in Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Drug possession charges in Ohio — governed by Ohio Revised Code 2925.11 — range from a minor misdemeanor marijuana citation to serious felony charges for possession of cocaine, heroin, fentanyl, or methamphetamine that carry the possibility of prison and lasting career consequences. A felony drug conviction affects employment applications, professional licensing, housing, and in some cases federal benefits. Ohio&apos;s 2023 adult-use marijuana law changed the landscape for cannabis possession, but it did not eliminate drug crime for larger quantities or for other controlled substances. Jwayyed Law LLC provides experienced drug possession defense for clients in Columbus, Franklin County, and communities throughout central Ohio. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to discuss your situation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Drug possession cases present unique defense opportunities compared to many other charges. The most powerful is suppression — if the traffic stop, search, or seizure that produced the evidence was conducted unlawfully, a successful motion to suppress can exclude all drug evidence, leaving the prosecution with nothing to prove the charge. Our firm scrutinizes every step of the police encounter: the basis for the stop, the scope and basis for the search, whether consent was truly voluntary, whether the search exceeded its authorized scope, and whether the chain of custody of the evidence was maintained. In many drug cases, the legal basis for the search is the most important issue in the entire case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Drug Possession Under R.C. 2925.11 — What the Law Requires
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2925.11 prohibits knowingly obtaining, possessing, or using a controlled substance or controlled substance analog. The statute&apos;s key element is <em>knowing</em> possession — the prosecution must prove that the defendant was aware of the substance&apos;s presence and its nature as a controlled substance. Accidental possession, unknowing presence of drugs in a shared vehicle or home, and situations where the defendant had no reason to know the substance was illegal can all challenge the knowledge element. The degree of the offense depends on the substance&apos;s Schedule classification under Ohio law and the quantity possessed.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio&apos;s Adult-Use Marijuana Framework — What Remains Criminal
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Issue 2, effective December 7, 2023, and implemented through House Bill 86, made Ohio the 24th state to legalize adult-use marijuana. Adults 21 and older may legally possess up to <strong>2.5 ounces</strong> of marijuana and up to <strong>15 grams</strong> of marijuana concentrate without criminal liability. Home cultivation of up to <strong>6 plants</strong> per adult is permitted. However, possession above these amounts remains criminal. Possession of 2.5–10 ounces is a minor misdemeanor. Possession of 200 grams or more triggers M4 through felony charges. Marijuana impaired driving — OVI under R.C. 4511.19 — remains fully illegal.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Felony Drug Possession — Controlled Substances Other Than Marijuana
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Possession of cocaine, heroin, fentanyl, methamphetamine, or other Schedule I and II controlled substances begins as a fifth-degree felony under R.C. 2925.11 regardless of quantity, escalating rapidly with the amount. Bulk cocaine possession (15 grams+) is F4. Bulk heroin (10 grams+) is F4. Aggravated possession — between the bulk amount and five times the bulk amount of any Schedule I or II substance — is F5. Amounts above those thresholds escalate to F4 through F1. Felony drug possession convictions require prison in many cases and carry collateral consequences including federal student loan restrictions, public housing eligibility, and professional licensing impacts.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Intervention in Lieu of Conviction and HART Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For eligible first-time defendants, Ohio&apos;s Intervention in Lieu of Conviction (ILC) program under ORC 2951.041 allows completion of substance abuse treatment in lieu of a conviction. Successful ILC results in full dismissal — no conviction, no record. Franklin County Municipal Court also operates the HART Court (opioid and substance use recovery docket), which provides structured treatment programming for eligible defendants as an alternative to traditional prosecution. Our firm evaluates these options at the outset of every drug possession case, because a path to dismissal is always better than any plea.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Suppression motions:</strong> Challenging unlawful stops, searches, or seizures to exclude drug evidence</li>
              <li><strong>ILC / HART Court:</strong> Pursuing treatment-based dismissal for eligible first-time defendants</li>
              <li><strong>Marijuana law analysis:</strong> Confirming whether possession was within Ohio adult-use legal limits</li>
              <li><strong>Knowledge element challenges:</strong> Contesting the prosecution&apos;s ability to prove knowing possession</li>
              <li><strong>Quantity and classification challenges:</strong> Disputing lab-reported weights and substance classification used to determine the degree of offense</li>
              <li><strong>Expungement planning:</strong> Advising on ORC 2953.32 eligibility from the outset of the case</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing drug possession charges in Ohio — in{' '}
              <Link href="/locations/franklin-county" className="text-[#b87333] underline hover:opacity-80">Franklin County</Link>,{' '}
              <Link href="/locations/delaware-county" className="text-[#b87333] underline hover:opacity-80">Delaware County</Link>,{' '}
              <Link href="/locations/greene-county" className="text-[#b87333] underline hover:opacity-80">Greene County</Link>, or elsewhere — contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Drug cases move quickly through the Ohio court system — early intervention is essential.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <LocationsWeServe title="Areas We Serve" />
      <ContactCTA />
    </>
  );
}
