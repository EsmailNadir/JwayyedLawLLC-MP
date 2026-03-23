import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Criminal Defense Lawyer | Fairborn & Xenia, Ohio',
  description: 'Experienced criminal misdemeanor defense attorney for Fairborn, Beavercreek, Xenia, and Greene County, Ohio.',
  keywords: ['criminal defense Fairborn Ohio', 'misdemeanor attorney Greene County', 'Fairborn Municipal Court criminal lawyer', 'Xenia misdemeanor defense', 'military criminal defense Ohio'],
  openGraph: {
    title: 'Criminal Misdemeanor Defense in Greene County - Fairborn & Xenia Courts',
    url: 'https://www.jjlawohio.com/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Criminal Misdemeanor Defense - Greene County Courts', href: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court' },
];

const faqs = [
  {
    question: `What are the misdemeanor penalties in Fairborn Municipal Court and Xenia Municipal Court?`,
    answer: `Misdemeanor penalties in both Fairborn Municipal Court and Xenia Municipal Court follow Ohio Revised Code. First-degree misdemeanors (assault, domestic violence, certain theft): up to 180 days in jail and $1,000 fine. Second-degree: up to 90 days and $750. Third-degree: up to 60 days and $500. Fourth-degree: up to 30 days and $250. Minor misdemeanors carry no jail time but up to a $150 fine. Skilled defense representation can often achieve reduced charges, diversion, or dismissal.`,
  },
  {
    question: `Which court handles my misdemeanor in Greene County — Fairborn or Xenia?`,
    answer: `Jurisdiction in Greene County depends on where the offense occurred. Fairborn Municipal Court at 1 W. Main St, Fairborn handles cases from Fairborn, Beavercreek, and surrounding areas. Xenia Municipal Court at 101 N. Detroit St, Xenia handles cases from Xenia, Yellow Springs, Centerville portions, and other areas of Greene County. Our attorney practices in both courts and understands the distinct procedures, prosecutor practices, and judicial expectations of each.`,
  },
  {
    question: `How does a misdemeanor charge affect military personnel in Greene County?`,
    answer: `Military personnel at Wright-Patterson Air Force Base charged with a misdemeanor in Fairborn Municipal Court or Xenia Municipal Court face dual consequences: Ohio criminal proceedings and potential military disciplinary action under the UCMJ. A conviction can impact security clearances, promotions, re-enlistment eligibility, and discharge status. Our firm understands these military collateral consequences and pursues outcomes — dismissals, reductions, ILC — that minimize both civilian and military consequences.`,
  },
  {
    question: `Can a misdemeanor be expunged in Greene County?`,
    answer: `Many misdemeanor convictions in Greene County are eligible for expungement (record sealing) under Ohio Revised Code 2953.31 after completing your sentence and applicable waiting periods. Expungement seals the record from public view and allows you to answer truthfully that you have no conviction on most applications. Domestic violence convictions, certain traffic offenses, and other specific charges are not eligible. Our firm evaluates eligibility and handles the expungement petition process.`,
  },
  {
    question: `What is Intervention in Lieu of Conviction (ILC) in Greene County?`,
    answer: `Ohio&apos;s Intervention in Lieu of Conviction program (ILC) allows eligible first-time offenders charged with drug-related or substance-abuse-driven offenses to complete treatment instead of prosecution. Successful completion results in dismissal. Both Fairborn Municipal Court and Xenia Municipal Court have discretion to grant ILC. Our attorney evaluates ILC eligibility and advocates for diversion programs that can result in no criminal conviction on your record.`,
  },
  {
    question: `What should I do immediately after a misdemeanor arrest in Greene County?`,
    answer: `After a misdemeanor arrest in Greene County, exercise your constitutional right to remain silent. Do not make any statements to law enforcement without an attorney present. Do not contact alleged victims in domestic violence or assault cases, as this can result in additional charges. Contact Jwayyed Law LLC immediately so we can attend your arraignment, protect your bond conditions, preserve evidence, and build your defense from the outset.`,
  },
  {
    question: `How are domestic violence cases handled in Greene County courts?`,
    answer: `Domestic violence cases in both Fairborn and Xenia Municipal Courts are prosecuted by the Greene County prosecutor&apos;s office, not the alleged victim. Even if the alleged victim does not cooperate, prosecution can proceed. A domestic violence conviction carries a mandatory firearm prohibition, potential immigration consequences, and is ineligible for expungement. Our firm investigates all facts, challenges credibility and evidence, and explores self-defense arguments and diversion in appropriate cases.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for criminal defense in Greene County?`,
    answer: `Jwayyed Law LLC provides dedicated criminal misdemeanor defense in both Fairborn Municipal Court and Xenia Municipal Court. We understand the unique challenges facing military personnel near Wright-Patterson AFB and the local prosecutor and judicial practices in both courts. Our attorney reviews all evidence, identifies constitutional and factual defenses, and advocates aggressively for outcomes that protect your record and your future. Call (614) 285-5482 for a consultation.`,
  },
];

export default function GreeneCriminalMisdemeanorDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Misdemeanor Defense in Greene County"
        description="Fairborn Municipal Court and Xenia Municipal Court criminal defense. Serving Fairborn, Beavercreek, Xenia, Yellow Springs, and military personnel near Wright-Patterson AFB."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Criminal Misdemeanor Defense in Greene County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Misdemeanor criminal charges in Greene County are handled in two courts: Fairborn Municipal Court at 1 W. Main St, Fairborn, OH 45324 and Xenia Municipal Court at 101 N. Detroit St, Xenia, OH 45385. Jurisdiction depends on where the offense occurred. At Jwayyed Law LLC, we provide aggressive{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link>{' '}
              representation in both courts for clients throughout Greene County, including Fairborn, Beavercreek, Xenia, Yellow Springs, and Centerville.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The presence of Wright-Patterson Air Force Base makes Greene County unique among Ohio counties for criminal defense purposes. Active-duty military members, reservists, veterans, and civilian base employees charged with misdemeanors in Fairborn or Xenia Municipal Court face consequences that extend far beyond Ohio&apos;s criminal penalties. Security clearance implications, UCMJ proceedings, and military career consequences must all be considered when developing a defense strategy. Our firm understands this population&apos;s specific needs and coordinates with military defense counsel when appropriate.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Misdemeanor Cases in Greene County Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Both Fairborn Municipal Court and Xenia Municipal Court handle the full range of misdemeanor criminal cases: assault and aggravated assault; domestic violence; theft and shoplifting; drug possession of controlled substances and marijuana; disorderly conduct; criminal damaging or endangering; menacing; criminal trespass; driving under suspension; and traffic-related criminal charges. Fairborn and Beavercreek&apos;s commercial areas and proximity to the base generate a significant number of retail theft, disorderly conduct, and assault cases. Xenia and Yellow Springs cases reflect that area&apos;s community characteristics. Our firm approaches each case according to the specific court, prosecutor, and local practices involved.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Penalties in Greene County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code, maximum misdemeanor penalties in Greene County courts are: first-degree misdemeanor — up to 180 days in jail and a $1,000 fine; second-degree — up to 90 days and $750; third-degree — up to 60 days and $500; fourth-degree — up to 30 days and $250; minor misdemeanor — no jail, up to $150 fine. These are maximum penalties and are not automatically imposed. An experienced defense attorney can often achieve reduced charges, suspended sentences, community service, diversion, or dismissal, substantially reducing or eliminating the impact on your record and life.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies in Fairborn and Xenia Municipal Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our defense strategy begins with thorough review of all available evidence: police reports, body-cam footage, witness statements, and physical evidence. We evaluate whether the arrest or search complied with constitutional requirements and ORC 2935.26. In assault cases, we assess self-defense and defense-of-others arguments under Ohio law. In drug cases, we challenge the basis for the search, chain of custody, and laboratory procedures. In domestic violence cases, we investigate the factual background, review all communications, and challenge the credibility of witnesses. We also evaluate whether clients are eligible for Ohio&apos;s Intervention in Lieu of Conviction (ILC) program, which can result in dismissal of the charges upon successful completion of treatment.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Military Considerations in Greene County Criminal Cases
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For military clients at Wright-Patterson AFB, even a minor misdemeanor conviction can have disproportionate career consequences. Security clearance adjudicators look at arrests, charges, and convictions regardless of the civilian sentence imposed. A domestic violence conviction triggers a federal firearm prohibition under the Lautenberg Amendment, which can result in immediate disqualification from military service. Our firm pursues the best possible civilian outcome — dismissal, reduction to a non-conviction, or ILC — with the goal of minimizing adverse military consequences.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing misdemeanor charges in Greene County, contact Jwayyed Law LLC immediately at (614) 285-5482. Whether your case is in Fairborn Municipal Court or Xenia Municipal Court, we will review the charges, explain all available options including diversion and expungement, and develop a defense strategy tailored to your specific situation and the court where your case will be heard.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
