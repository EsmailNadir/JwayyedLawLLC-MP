import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Butler County Criminal Defense Attorney',
  description:
    'Misdemeanor defense in Butler County Area Courts and Hamilton Municipal Court: assault, domestic violence and theft. Call (614) 285-5482.',
  keywords: ['criminal misdemeanor defense Butler County', 'misdemeanor attorney Butler County Area Court', 'Butler County criminal lawyer', 'Hamilton Ohio misdemeanor defense', 'Oxford Ohio criminal attorney', 'West Chester misdemeanor lawyer'],
  openGraph: {
    title: 'Butler County Criminal Defense Attorney | Jwayyed Law LLC',
    description: 'Misdemeanor defense in Area Courts I, II and III and Hamilton Municipal Court.',
    url: 'https://www.jjlawohio.com/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Butler County', href: '/locations/butler-county' },
  { label: 'Criminal Misdemeanor Defense - Butler County Area Courts', href: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts' },
];

const faqs = [
  {
    question: "What are Ohio's misdemeanor penalty levels from M1 through minor misdemeanor?",
    answer:
      'Ohio Revised Code 2929.21 through 2929.28 governs misdemeanor sentencing. First-degree misdemeanor (M1): up to 180 days in jail and a $1,000 fine. Second-degree misdemeanor (M2): up to 90 days and a $750 fine. Third-degree misdemeanor (M3): up to 60 days and a $500 fine. Fourth-degree misdemeanor (M4): up to 30 days and a $250 fine. Minor misdemeanor (MM): no jail, up to a $150 fine. These are maximums; the actual sentence depends on the offense, your record and the judge.',
  },
  {
    question: 'What is the arraignment process in Butler County misdemeanor courts?',
    answer:
      'Arraignment is your first formal court appearance. It is held in the court with jurisdiction over your case: Area Court I (Oxford), Area Court II (Hamilton), Area Court III (West Chester) or Hamilton Municipal Court (700 Hanover St). The judge reads the charges, explains your rights and asks for a plea: not guilty, guilty or no contest. In most misdemeanor cases the right plea at arraignment is not guilty, which preserves your rights while your attorney reviews the evidence. Bail or recognizance conditions may be set. Missing arraignment can lead to a bench warrant.',
  },
  {
    question: 'What makes domestic violence charges unique in Ohio?',
    answer:
      'Domestic violence under Ohio Revised Code 2919.25 is typically a first-degree misdemeanor for a first offense of knowingly causing or attempting to cause physical harm to a family or household member. Unlike ordinary assault, a conviction brings heavy collateral consequences: federal law (the Lautenberg Amendment) bars firearm possession whatever the state classification, and the conviction can affect custody, professional licenses and housing. A Temporary Protection Order (TPO) under ORC 2919.26 often comes with the charge and can restrict contact with your home, children or workplace. The firm handles the charge and the protection order together.',
  },
  {
    question: 'What are the penalties for drug possession charges in Butler County?',
    answer:
      'Drug possession under Ohio Revised Code 2925.11 depends on the substance and quantity. Possession of a small amount of marijuana (under 100 grams) is a minor misdemeanor with no jail time and a $150 fine for a first offense. Larger quantities, or Schedule I/II substances such as cocaine, heroin, fentanyl and methamphetamine, can be charged as felonies even in small amounts. Many Butler County cases, particularly near Miami University in Oxford, involve marijuana and prescription drug offenses at the misdemeanor level. The firm challenges searches without probable cause or a valid warrant and explores diversion.',
  },
  {
    question: 'What diversion programs are available for first-time misdemeanor offenders in Butler County?',
    answer:
      "Butler County courts offer diversion for eligible first-time offenders, which avoids a conviction. Diversion typically means community service, fees, counseling or education classes, and staying arrest-free for a set period. When it is completed, the charges are dismissed and no conviction appears on the record. Eligibility depends on the charge, the defendant's record and the court's criteria, and some offenses, such as domestic violence, often have restrictions.",
  },
  {
    question: 'Am I eligible to have a misdemeanor expunged in Butler County, and how long do I have to wait?',
    answer:
      'Many misdemeanor convictions can be expunged (sealed) under Ohio Revised Code 2953.32. For most misdemeanors the wait is one year after final discharge, meaning one year after all probation, fines and jail time are complete. You must also be an eligible offender with a limited number of prior convictions. Some offenses are excluded, including OVI convictions (ORC 2953.36) and certain violent offenses. A sealed record is hidden from public view, which matters for jobs, housing and professional licensing. The firm prepares the petition and represents you at the sealing hearing.',
  },
  {
    question: 'How does an attorney help with misdemeanor defense in Butler County courts?',
    answer:
      'The firm reviews the charging documents, police reports, body camera footage and physical evidence; identifies unlawful stops, searches or seizures; files motions to suppress; negotiates with prosecutors in the Butler County Area Courts and Hamilton Municipal Court for reductions, dismissals or diversion; explains the collateral consequences of each plea (employment, housing, professional licenses, immigration); and tries the case when it should be fought. Knowing the prosecutors, judges and procedures in Hamilton, Oxford and West Chester shapes that work.',
  },
  {
    question: 'Should I accept a plea deal or go to trial on a misdemeanor charge in Butler County?',
    answer:
      'It depends on the strength of the evidence, the seriousness of the charge, the offer and your circumstances, including collateral consequences. Where the evidence is strong and the offer is good, a negotiated resolution can make sense. Where the evidence came from a flawed stop or search, or the facts do not support the charge, a motion to suppress or trial may be right. The firm gives you an honest read of each path and the decision is yours.',
  },
];

const RELATED = [
  { href: '/courts/hamilton-municipal-court', title: 'Hamilton Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/butler-county', title: 'Butler County', subtitle: 'Every service the firm offers in the county' },
  { href: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts', title: 'OVI defense in Butler County', subtitle: 'Penalties and the 30-day ALS appeal' },
  { href: '/criminal-defense/domestic-violence', title: 'Domestic violence', subtitle: 'Protection orders and firearm consequences' },
  { href: '/criminal-defense/drug-possession', title: 'Drug possession', subtitle: 'Search challenges and diversion' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing an eligible record' },
];

export default function ButlerCriminalMisdemeanorDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Criminal Defense in Butler County',
    serviceType: 'Criminal Defense',
    areaServed: { '@type': 'County', name: 'Butler County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Misdemeanor defense in Butler County courts"
        description="Butler County misdemeanors are prosecuted in Area Court I, II or III or Hamilton Municipal Court, depending on where the offense occurred. Even an M4 carries up to 30 days in jail."
      />

      <Section
        title="Which court hears your case"
        intro={<p>Four courts prosecute Butler County misdemeanors, each with its own procedures, judges, prosecutors and local practice.</p>}
      >
        <FactTable
          title="Butler County misdemeanor courts"
          rows={[
            { label: 'Area Court I', value: 'Oxford' },
            { label: 'Area Court II', value: 'Hamilton' },
            { label: 'Area Court III', value: 'West Chester' },
            { label: 'Hamilton Municipal Court', value: '700 Hanover Street, Hamilton' },
          ]}
        />
        <h3>What each area sees</h3>
        <p>
          Oxford, home to Miami University, sees many charges for underage consumption, minor possession of alcohol, disorderly conduct
          and assault around campus and off-campus housing. West Chester and Hamilton see theft, assault and domestic violence cases at
          higher rates given their population. See the firm&rsquo;s <Link href="/criminal-defense">criminal defense practice</Link>{' '}
          for more.
        </p>
      </Section>

      <Section title="Common charges and their levels" tone="ice">
        <FactTable
          title="Frequent Butler County charges"
          rows={[
            { label: 'Assault', value: 'ORC 2903.13. M1, up to 180 days.' },
            { label: 'Domestic violence', value: 'ORC 2919.25. Typically M1 for a first offense.' },
            { label: 'Theft under $1,000', value: 'ORC 2913.02. M1 or M2 depending on value.' },
            { label: 'Drug possession', value: 'ORC 2925.11. Level depends on substance and quantity.' },
            { label: 'Disorderly conduct', value: 'ORC 2917.11. Typically M4.' },
            { label: 'Criminal trespass', value: 'ORC 2911.21. M4.' },
          ]}
        />
        <FactTable
          title="Maximum penalties (ORC 2929.21 through 2929.28)"
          rows={[
            { label: 'First-degree misdemeanor', value: 'Up to 180 days in jail and a $1,000 fine.' },
            { label: 'Second-degree misdemeanor', value: 'Up to 90 days and a $750 fine.' },
            { label: 'Third-degree misdemeanor', value: 'Up to 60 days and a $500 fine.' },
            { label: 'Fourth-degree misdemeanor', value: 'Up to 30 days and a $250 fine.' },
            { label: 'Minor misdemeanor', value: 'No jail; up to a $150 fine.' },
          ]}
        />
        <h3>Domestic violence and protection orders</h3>
        <p>
          Butler County domestic violence charges often come with a Temporary Protection Order (TPO) under ORC 2919.26, filed at
          arraignment. The TPO can immediately bar a defendant from returning home, contacting their children or going to work if the
          alleged victim works nearby. That makes arraignment important: the firm appears to address the TPO conditions and argue for
          reasonable terms. If you also face a Civil Protection Order (CPO) under ORC 3113.31, the firm represents you in that
          separate civil proceeding.
        </p>
        <p>
          Beyond the sentence, any conviction creates a record that shows on background checks, can affect jobs, professional
          licenses and immigration status, and can enhance penalties for future charges. Domestic violence convictions carry federal
          firearms restrictions under the Lautenberg Amendment, and drug convictions can affect student loan and housing eligibility.
        </p>
      </Section>

      <Section title="How a Butler County case moves">
        <Steps
          steps={[
            { title: 'Arraignment', body: 'In the court with jurisdiction. Usually a not guilty plea; bail or recognizance conditions may be set.' },
            { title: 'Evidence review', body: 'Reports, body camera footage and physical evidence, looking for unlawful stops, searches or seizures.' },
            { title: 'Motions and negotiation', body: 'Motions to suppress, and talks with prosecutors on reductions, dismissal or diversion.' },
            { title: 'Resolution or trial', body: 'A plea when it serves you, trial when the case should be fought.' },
          ]}
        />
        <PointGrid
          points={[
            {
              title: 'Diversion',
              body: 'Butler County courts offer diversion for eligible first-time offenders. Completion means dismissal and no conviction.',
            },
            {
              title: 'Expungement',
              body: 'Available for many misdemeanor convictions under ORC 2953.32 after a one-year waiting period.',
            },
          ]}
        />
        <p>
          The firm checks diversion and expungement eligibility at the outset. Use <Link href="/contact">the contact page</Link> or
          call (614) 285-5482.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
