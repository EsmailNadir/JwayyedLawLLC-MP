import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Criminal Defense Lawyer | Butler County Courts',
  description: 'Experienced criminal misdemeanor defense attorney in Butler County - Area Courts and Hamilton Municipal Court. Assault, domestic violence, theft.',
  keywords: ['criminal misdemeanor defense Butler County', 'misdemeanor attorney Butler County Area Court', 'Butler County criminal lawyer', 'Hamilton Ohio misdemeanor defense', 'Oxford Ohio criminal attorney', 'West Chester misdemeanor lawyer'],
  openGraph: {
    title: 'Criminal Defense Lawyer | Butler County Courts',
    url: 'https://www.jjlawohio.com/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Butler County', href: '/courts/butler-county' },
  { label: 'Criminal Misdemeanor Defense - Butler County Area Courts', href: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts' },
];

const faqs = [
  {
    question: `What are Ohio's misdemeanor penalty levels from M1 through minor misdemeanor?`,
    answer: `Ohio Revised Code 2929.21 through 2929.28 governs misdemeanor sentencing. The penalty levels are: First-degree misdemeanor (M1) — up to 180 days in jail and a $1,000 fine; Second-degree misdemeanor (M2) — up to 90 days in jail and a $750 fine; Third-degree misdemeanor (M3) — up to 60 days in jail and a $500 fine; Fourth-degree misdemeanor (M4) — up to 30 days in jail and a $250 fine; Minor misdemeanor (MM) — no jail time, up to a $150 fine. These are maximum penalties; actual sentences depend on the offense, prior record, and the judge. An experienced attorney works to minimize penalties, pursue alternatives to incarceration, and in appropriate cases seek dismissal.`,
  },
  {
    question: `What is the arraignment process in Butler County misdemeanor courts?`,
    answer: `Arraignment is your first formal court appearance after being charged with a misdemeanor in Butler County. It is held in the court that has jurisdiction over your case — Area Court I (Oxford), Area Court II (Hamilton), Area Court III (West Chester), or Hamilton Municipal Court (700 Hanover St). At arraignment, the judge reads the charges against you, advises you of your constitutional rights, and asks for your plea — typically not guilty, guilty, or no contest. In most misdemeanor cases, the appropriate response is to plead not guilty at arraignment, preserving all your rights while your attorney reviews the evidence. Depending on the charge, bail or recognizance conditions may be set. Missing your arraignment date can result in a bench warrant for your arrest.`,
  },
  {
    question: `What makes domestic violence charges unique in Ohio?`,
    answer: `Domestic violence under Ohio Revised Code 2919.25 is typically charged as a first-degree misdemeanor for a first offense involving knowingly causing or attempting to cause physical harm to a family or household member. What makes domestic violence distinct from ordinary assault is that a conviction triggers significant collateral consequences: federal law prohibits persons convicted of domestic violence misdemeanors from possessing firearms (the federal Lautenberg Amendment applies regardless of state classification), and the conviction can affect child custody proceedings, professional licenses, and housing applications. A domestic violence charge also often involves a Temporary Protection Order (TPO) under ORC 2919.26 that may restrict contact with your home, children, or workplace. Our attorney addresses both the criminal charge and the protection order simultaneously.`,
  },
  {
    question: `What are the penalties for drug possession charges in Butler County?`,
    answer: `Drug possession under Ohio Revised Code 2925.11 carries penalties that vary significantly based on the type and quantity of substance. Possession of marijuana in small amounts (under 100 grams) is a minor misdemeanor with no jail time and a $150 fine for a first offense. Possession of larger quantities or Schedule I/II controlled substances — including cocaine, heroin, fentanyl, and methamphetamine — can be charged as felonies, even in small amounts. Many possession cases in Butler County, particularly near Miami University in Oxford, involve marijuana and prescription drug offenses that are classified at the misdemeanor level. Our attorney reviews the circumstances of the stop and seizure, challenges searches that lacked probable cause or a valid warrant, and explores diversion programs as an alternative to conviction.`,
  },
  {
    question: `What diversion programs are available for first-time misdemeanor offenders in Butler County?`,
    answer: `Butler County courts offer diversion programs for eligible first-time offenders that allow participants to avoid a criminal conviction. Diversion typically requires completing community service, paying fees, attending counseling or education classes, and remaining arrest-free for a specified period. Upon successful completion, charges are dismissed and no conviction appears on the record. Eligibility depends on the charge type, the defendant&apos;s prior record, and the court&apos;s criteria. Not all offenses qualify — domestic violence charges, for example, often have restrictions on diversion eligibility. Our attorney evaluates each client&apos;s eligibility and advocates for diversion enrollment where available, protecting our clients from the long-term consequences of a misdemeanor conviction.`,
  },
  {
    question: `Am I eligible to have a misdemeanor expunged in Butler County, and how long do I have to wait?`,
    answer: `Many misdemeanor convictions are eligible for expungement (sealing) under Ohio Revised Code 2953.32. For most misdemeanors, the waiting period is one year after the final discharge of the case — meaning one year after completing all sentence requirements including probation, fines, and any jail time. You must also qualify as an eligible offender with a limited number of prior convictions. Certain offenses are excluded from expungement eligibility, including OVI convictions (ORC 2953.36) and certain violent offenses. A successfully expunged record is sealed from public view, which is significant for employment, housing, and professional licensing purposes. Our attorney reviews your eligibility, prepares the expungement petition, and represents you at the sealing hearing in the appropriate Butler County court.`,
  },
  {
    question: `How does an attorney help with misdemeanor defense in Butler County courts?`,
    answer: `An experienced criminal defense attorney provides far more value in a misdemeanor case than simply showing up in court. Our attorney reviews the charging documents, police reports, body camera footage, and any physical evidence; identifies constitutional violations such as unlawful stops, searches, or seizures; files motions to suppress evidence obtained improperly; negotiates with prosecutors in Butler County Area Courts and Hamilton Municipal Court to pursue charge reductions, dismissals, or diversion; advises on the collateral consequences of different pleas (employment, housing, professional licenses, immigration status); and represents clients at trial when the case should be fought. Local court knowledge — knowing the prosecutors, judges, and procedures in Hamilton, Oxford, and West Chester — translates directly into more effective advocacy.`,
  },
  {
    question: `Should I accept a plea deal or go to trial on a misdemeanor charge in Butler County?`,
    answer: `Whether to accept a plea offer or proceed to trial depends on the strength of the evidence, the severity of the charge, the plea offer terms, and your personal circumstances including collateral consequences. In some cases — particularly where evidence is strong and a favorable plea is offered — a negotiated resolution makes sense. In others, particularly where evidence was obtained through a flawed stop or search, or where the facts do not support the charge, fighting the case at trial or through a motion to suppress is the right strategy. Our attorney analyzes the evidence honestly, explains the realistic outcomes of each path, and respects your decision. We never pressure clients to plead guilty — every case gets an individualized assessment of whether a plea or a fight best serves your interests.`,
  },
];

export default function ButlerCriminalMisdemeanorDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Defense Lawyer | Butler County Courts"
        description="Experienced legal defense for criminal misdemeanor charges in Butler County. Protecting your rights in Area Courts I, II, III and Hamilton Municipal Court."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Criminal Misdemeanor Defense in Butler County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Butler County misdemeanor charges are prosecuted in four courts depending on where the offense occurred: Butler County Area Court I in Oxford, Area Court II in Hamilton, Area Court III in West Chester, and Hamilton Municipal Court at 700 Hanover Street, Hamilton. Each court operates with its own procedures, judges, prosecutors, and local practices. At Jwayyed Law LLC, we provide experienced criminal misdemeanor defense representation in all Butler County courts under Ohio Revised Code 2929.21 through 2929.28 and the full range of Ohio criminal statutes. Our attorney understands what it takes to protect your rights, challenge the evidence against you, and achieve the best possible outcome in each specific court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A misdemeanor conviction in Butler County is not a minor matter. Even a fourth-degree misdemeanor — the lowest level — carries up to 30 days in jail and a $250 fine. More significantly, any conviction creates a criminal record that appears in background checks, can affect employment and professional licensing, may impact immigration status, and can be used to enhance penalties for future charges. Domestic violence convictions carry federal firearms restrictions under the Lautenberg Amendment. Drug possession convictions can affect eligibility for student loans and housing. Understanding the full collateral consequences of a charge — not just the jail time — is essential to making informed decisions about how to handle your case.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Misdemeanor Charges in Butler County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The most common misdemeanor charges in Butler County courts include assault under ORC 2903.13 (M1, up to 180 days), domestic violence under ORC 2919.25 (typically M1 for first offense), theft under $1,000 under ORC 2913.02 (M1 or M2 depending on value), drug possession under ORC 2925.11 (level depends on substance and quantity), disorderly conduct under ORC 2917.11 (typically M4), and criminal trespass under ORC 2911.21 (M4). Oxford — home to Miami University — sees significant numbers of charges involving underage consumption, minor possession of alcohol, disorderly conduct, and assault around campus and off-campus housing. West Chester and Hamilton see theft, assault, and domestic violence cases at higher rates given their population centers.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Domestic violence charges in Butler County present unique complexity because they often arise alongside a Temporary Protection Order (TPO) under ORC 2919.26 filed at arraignment. The TPO can immediately restrict a defendant from returning to their home, contacting their children, or attending their workplace if the alleged victim works nearby. This makes the arraignment hearing critically important — our attorney appears at arraignment to address TPO conditions, argue for reasonable terms, and begin building the defense from day one. For clients facing a Civil Protection Order (CPO) under ORC 3113.31, we provide representation in that separate civil proceeding as well.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Butler County offers diversion programs for eligible first-time misdemeanor offenders, and expungement under ORC 2953.32 is available for many misdemeanor convictions after a one-year waiting period. Our attorney evaluates every client&apos;s eligibility for diversion and expungement at the outset, incorporating these options into our overall defense strategy. If you are facing a misdemeanor charge in Butler County, contact Jwayyed Law LLC at{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> or call (614) 285-5482. Learn more about our{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense practice</Link> throughout Ohio.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
