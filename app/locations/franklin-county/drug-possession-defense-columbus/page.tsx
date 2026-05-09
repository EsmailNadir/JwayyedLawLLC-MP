import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Drug Possession Defense Attorney | Jwayyed Law',
  description: 'Drug possession defense in Columbus, Ohio. R.C. 2925.11, ILC, HART Court, suppression motions. Franklin County Municipal Court. Jwayyed Law LLC. (614) 285-5482.',
  keywords: [
    'Columbus drug possession lawyer',
    'Columbus drug defense attorney',
    'drug possession Columbus Ohio',
    'Franklin County drug possession defense',
    'Columbus drug charge attorney',
    'Columbus Ohio cocaine possession lawyer',
    'heroin possession Columbus attorney',
  ],
  openGraph: {
    title: 'Columbus Drug Possession Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Drug Possession Defense — Columbus', href: '/locations/franklin-county/drug-possession-defense-columbus' },
];

const faqs = [
  {
    question: 'Where are Columbus drug possession cases heard?',
    answer: 'Drug possession charges from Columbus are processed at Franklin County Municipal Court, 375 S. High Street (floors 12–15), (614) 645-8186. Misdemeanor marijuana possession and minor misdemeanor drug citations are handled there. Felony drug possession — any amount of cocaine, heroin, methamphetamine, or other Schedule I/II substances — is arraigned at Franklin County Municipal Court and bound over to Franklin County Court of Common Pleas. Franklin County Municipal Court also operates HART Court for opioid-involved defendants.',
  },
  {
    question: 'What drug possession is still criminal in Columbus under Ohio\'s marijuana law?',
    answer: 'Ohio Issue 2 (effective December 7, 2023) and HB 86 legalized adult-use marijuana possession up to 2.5 oz and 15g concentrate for adults 21+. Above these limits: 2.5 oz (70.87g) to 100g is a minor misdemeanor ($150 fine, no jail); 100–199g is an M4 (up to 30 days, $250 fine); 200g or more (bulk amount) is an F5 felony; higher quantities escalate further. Possession of cocaine, heroin, fentanyl, methamphetamine, and other Schedule I/II substances remains felony-level from any amount. Drug paraphernalia (R.C. 2925.14) is an M4 for a first offense.',
  },
  {
    question: 'Can drug evidence in a Columbus case be suppressed?',
    answer: 'Yes. Many Columbus drug possession cases turn on the legality of the stop or search. If the Columbus Division of Police, OSP, or another agency conducted a stop without reasonable suspicion or searched without valid consent, exigent circumstances, or a proper warrant, a suppression motion can exclude all drug evidence. Without the drugs, the prosecution typically has no case. Post-legalization, the smell of marijuana alone as justification for a search is subject to increasing challenge in Ohio courts — our firm stays current on this evolving case law.',
  },
  {
    question: 'What is Intervention in Lieu of Conviction (ILC) in Columbus?',
    answer: 'Ohio Revised Code 2951.041 authorizes ILC — a program allowing eligible first-time defendants to complete substance abuse treatment instead of being convicted. Successful ILC completion results in full dismissal of all charges. Franklin County Municipal Court has discretion to grant ILC and also operates HART Court (a recovery docket for opioid-involved defendants). Our firm evaluates ILC eligibility at the outset of every Columbus drug possession case, because dismissal through ILC is always preferable to any plea.',
  },
  {
    question: 'Can a Columbus drug conviction be expunged?',
    answer: 'Most drug possession convictions — misdemeanor through F3 felony — are eligible for expungement under ORC 2953.32 after applicable waiting periods (1 year for misdemeanor/F4/F5; 3 years for F3). HB 96 (effective September 30, 2025) expanded eligibility. Our firm evaluates expungement eligibility from the start of every case to inform plea strategy — because some plea outcomes preserve expungement eligibility while others do not.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus drug possession charge?',
    answer: 'Jwayyed Law LLC provides experienced drug possession defense in Columbus and throughout Franklin County. Drug cases often have viable suppression arguments, and diversion through ILC or HART Court is available for many eligible first-time defendants. A drug conviction — especially a felony — affects employment, housing, and professional licensing far longer than the immediate penalties. Our firm fights for the best available outcome. Call (614) 285-5482 to discuss your case.',
  },
];

export default function ColumbusDrugPossessionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus Drug Possession Defense Attorney"
        description="Drug possession charge in Columbus, Ohio? Jwayyed Law LLC defends R.C. 2925.11 charges at Franklin County Municipal Court with suppression motions, ILC, and HART Court. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Drug Possession Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus sits at the intersection of I-70 and I-71 — two major national drug-transit corridors — and the Columbus Division of Police, Ohio State Highway Patrol, and DEA task forces actively enforce drug possession laws in Columbus neighborhoods and on its highways. Drug possession charges under Ohio Revised Code 2925.11 range from a minor misdemeanor marijuana citation to serious felony possession of cocaine, heroin, fentanyl, or methamphetamine. The most powerful defense in many drug cases — suppression of evidence from an unlawful stop or search — is available before the case ever reaches a trial date. Jwayyed Law LLC provides experienced{' '}
              <Link href="/criminal-defense/drug-possession" className="text-[#b87333] underline hover:opacity-80">drug possession defense</Link>{' '}
              throughout Columbus and Franklin County. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to discuss your case.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus drug arrests arise in multiple contexts: traffic stops on I-70, I-71, US-40, and other Columbus corridors; searches incident to arrest for other offenses; consent searches at Columbus addresses; and warrant-based searches. Each entry point presents distinct constitutional issues. Our firm begins every drug possession case by evaluating whether the search that produced the evidence was constitutionally sound — because an unlawful search results in suppression, and suppression typically results in dismissal.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio&apos;s Adult-Use Marijuana Framework — What Is Legal in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Issue 2 (effective December 7, 2023) and House Bill 86 established a legal adult-use marijuana framework for Ohio adults 21 and older. Adults may now legally possess up to <strong>2.5 ounces</strong> of marijuana and up to <strong>15 grams</strong> of marijuana concentrate without criminal liability. Home cultivation of up to <strong>6 plants</strong> per adult is also legal. Possession within these limits is not criminal and cannot form the basis for a valid prosecution.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Above these limits, marijuana possession remains criminal. Possession of 2.5 oz to 99g (approximately 3.5 oz) is a minor misdemeanor — no jail, maximum $150 fine. Possession of 100–199g is a fourth-degree misdemeanor (up to 30 days jail, $250 fine). Possession of 200 grams or more reaches the bulk amount threshold and is charged as aggravated possession — a fifth-degree felony (up to 12 months in prison, $2,500 fine), with escalation to F3, F2, and F1 at higher quantities. For drug types other than marijuana — cocaine, heroin, fentanyl, methamphetamine — possession remains a felony from any detectable quantity.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Suppression, ILC, and HART Court — Columbus Defense Paths
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The two primary defense paths for Columbus drug possession cases are suppression and diversion. Suppression applies when the search or stop was unlawful — Fourth Amendment violations at every stage of the encounter (the stop, the frisk, the search, the warrant) are reviewed carefully. Post-legalization, the smell of marijuana alone as a basis for probable cause to search is an evolving and contested issue in Ohio courts. Our firm researches current Ohio Supreme Court and Tenth District appellate decisions on this issue for every Columbus marijuana-related case.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For eligible first-time defendants, Intervention in Lieu of Conviction (ILC) under ORC 2951.041 provides a treatment-based path to full dismissal. Franklin County Municipal Court&apos;s HART Court (opioid and substance use recovery docket) offers structured programming for eligible defendants as an alternative to traditional prosecution. These are not probationary outcomes — successful ILC and HART Court completion result in complete dismissal of all charges with no conviction.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Felony Drug Possession in Columbus — Cocaine, Heroin, Fentanyl, Methamphetamine
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Possession of controlled substances other than marijuana — including cocaine, heroin, fentanyl, methamphetamine, and most Schedule I and II drugs — is governed by R.C. 2925.11 and is a felony from the first detectable quantity. Possession of any amount of cocaine, heroin, or methamphetamine is a fifth-degree felony at baseline (up to 12 months in prison, $2,500 fine). The degree escalates with the quantity of the substance: cocaine and heroin in bulk amounts (10 grams and 5 grams respectively) become F4; higher quantities escalate further to F3, F2, and F1. Fentanyl and fentanyl-related compounds carry enhanced penalties due to the synthetic opioid crisis, with lower bulk thresholds than heroin.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Felony drug possession cases from Columbus are arraigned at Franklin County Municipal Court (375 S. High Street) and then bound over to Franklin County Court of Common Pleas for all further proceedings. Franklin County Common Pleas operates specialized dockets including a drug court for eligible defendants — our firm evaluates specialty docket eligibility alongside ILC and HART Court options for every Columbus felony drug defendant.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Drug Paraphernalia Charges in Columbus Under R.C. 2925.14
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Drug paraphernalia possession under R.C. 2925.14 — syringes, pipes, scales, packaging materials, and other items used to prepare, use, or conceal controlled substances — is a fourth-degree misdemeanor on a first offense (up to 30 days jail, $250 fine) and escalates to an M2 on a second offense. Paraphernalia charges are frequently added alongside drug possession charges and can sometimes be used as a leverage point in negotiations. Our firm evaluates whether the item in question actually meets the statutory definition of paraphernalia and whether the prosecution can establish that it was intended for drug use rather than legitimate purposes.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Collateral Consequences of a Columbus Drug Conviction
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A drug possession conviction in Columbus — particularly a felony — carries consequences that extend far beyond the criminal sentence. Felony drug convictions affect federal firearms rights (a convicted felon cannot possess a firearm under federal law). Employment in healthcare, transportation, education, finance, and any field that requires professional licensing or background checks becomes substantially more difficult with a drug conviction on record. Non-citizens face deportation risk from drug possession convictions. College and professional school financial aid, scholarship eligibility, and academic standing at Columbus institutions may all be affected by a drug conviction.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Most drug possession convictions — misdemeanor through F3 felony — are eligible for expungement under R.C. 2953.32 after applicable waiting periods. Our firm evaluates expungement eligibility from the outset of every case, because the right plea in the right charge can preserve expungement eligibility while a different plea cannot. Planning the long-term record outcome is part of every drug defense engagement.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Suppression motions:</strong> Fourth Amendment analysis of every stop, search, and seizure that produced the evidence</li>
              <li><strong>Marijuana law analysis:</strong> Confirming whether the possession was within Ohio adult-use legal limits before any plea</li>
              <li><strong>ILC and HART Court:</strong> Pursuing treatment-based dismissal for eligible first-time defendants</li>
              <li><strong>Quantity and classification challenges:</strong> Contesting the weight and substance classification used to determine the degree of offense</li>
              <li><strong>Knowledge challenges:</strong> Evaluating whether the prosecution can prove knowing possession</li>
              <li><strong>Expungement planning:</strong> Advising on ORC 2953.32 eligibility from the outset of the case</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing drug possession charges in Columbus or anywhere in Franklin County, contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Drug cases move quickly through the Franklin County system — early intervention is essential.
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
