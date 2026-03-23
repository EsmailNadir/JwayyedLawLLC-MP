import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Criminal Defense Lawyer | Dayton, Ohio',
  description: 'Experienced criminal misdemeanor defense attorney for Dayton, Kettering, Huber Heights, and Montgomery County, Ohio.',
  keywords: ['criminal defense Dayton Ohio', 'misdemeanor attorney Montgomery County', 'Dayton Municipal Court criminal lawyer', 'Kettering misdemeanor defense', 'Montgomery County criminal defense attorney'],
  openGraph: {
    title: 'Criminal Misdemeanor Defense in Montgomery County - Dayton & Kettering Courts',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'Criminal Misdemeanor Defense - Dayton Municipal Court', href: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court' },
];

const faqs = [
  {
    question: `What are the misdemeanor penalties in Dayton Municipal Court and Kettering Municipal Court?`,
    answer: `Misdemeanor penalties in both Dayton Municipal Court and Kettering Municipal Court follow Ohio Revised Code. First-degree misdemeanors: up to 180 days in jail and $1,000 fine. Second-degree: up to 90 days and $750. Third-degree: up to 60 days and $500. Fourth-degree: up to 30 days and $250. Minor misdemeanors: no jail time, up to $150 fine. An experienced attorney can often negotiate reduced charges, diversion programs, suspended sentences, or dismissal.`,
  },
  {
    question: `Which court handles my misdemeanor in Montgomery County — Dayton or Kettering?`,
    answer: `Jurisdiction depends on where the offense occurred. Dayton Municipal Court at 301 W. Third St, Dayton handles cases from Dayton, Trotwood, Huber Heights, Vandalia, and Englewood. Kettering Municipal Court at 2325 Wilmington Pike, Kettering handles cases from Kettering, Miamisburg, Centerville, and surrounding areas. Our attorney practices in both courts and understands the distinct local rules, docketing procedures, and prosecutorial practices of each.`,
  },
  {
    question: `What types of misdemeanor cases do Montgomery County courts handle?`,
    answer: `Both Dayton Municipal Court and Kettering Municipal Court handle the full range of misdemeanor charges: assault, domestic violence, theft and shoplifting, drug possession, disorderly conduct, criminal damaging, menacing, trespass, driving under suspension, and traffic-related criminal charges. Dayton Municipal Court, as a high-volume urban court, also handles a significant number of cases involving disorderly conduct and petty theft. Kettering Municipal Court handles suburban-area cases with its own prosecutorial office and judicial practices.`,
  },
  {
    question: `Can a misdemeanor be expunged in Montgomery County?`,
    answer: `Many misdemeanor convictions in Montgomery County are eligible for expungement under Ohio Revised Code 2953.31 after completing sentence requirements and applicable waiting periods. Expungement seals the record from public view and removes it from most background checks. Certain offenses — including domestic violence convictions and most OVI charges — are not expungeable. Our firm evaluates eligibility for every client and handles expungement petitions in Dayton Municipal Court or Kettering Municipal Court.`,
  },
  {
    question: `What is Intervention in Lieu of Conviction (ILC) in Montgomery County?`,
    answer: `Ohio&apos;s ILC program allows eligible first-time offenders charged with drug-related offenses or offenses driven by substance abuse or mental health issues to complete treatment rather than face conviction. Successful ILC completion results in dismissal of charges. Both Dayton Municipal Court and Kettering Municipal Court may grant ILC at their discretion. Our attorney evaluates ILC and other diversion program eligibility for every client facing drug-related or substance-related charges.`,
  },
  {
    question: `How does a misdemeanor conviction affect CDL holders in Montgomery County?`,
    answer: `Commercial driver&apos;s license holders in Montgomery County&apos;s large transportation sector can face CDL-related consequences from certain misdemeanor convictions, including driving-related offenses and drug charges. Certain offenses trigger mandatory CDL disqualification under federal regulations regardless of the sentence imposed. Our firm evaluates CDL consequences alongside every criminal case involving commercial drivers.`,
  },
  {
    question: `How are domestic violence cases handled in Dayton Municipal Court?`,
    answer: `Domestic violence cases in Dayton Municipal Court and Kettering Municipal Court are prosecuted by the Montgomery County prosecutor&apos;s office independently of the alleged victim. Conviction carries a mandatory firearm prohibition under federal law, potential immigration consequences, and ineligibility for expungement. Our firm investigates all facts, challenges evidence and witness credibility, and pursues dismissals, reductions, or ILC in appropriate cases.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for criminal defense in Montgomery County?`,
    answer: `Jwayyed Law LLC provides dedicated criminal misdemeanor defense in both Dayton Municipal Court and Kettering Municipal Court. Montgomery County is Ohio&apos;s fourth-largest county and these courts handle a high volume of criminal cases with distinct procedures. Our attorney reviews all evidence, identifies constitutional violations and factual defenses, and advocates aggressively for outcomes that protect your record and future. Call (614) 285-5482 for a consultation.`,
  },
];

export default function MontgomeryCriminalMisdemeanorDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Misdemeanor Defense in Montgomery County"
        description="Dayton Municipal Court and Kettering Municipal Court criminal defense. Serving Dayton, Kettering, Huber Heights, Trotwood, Englewood, Miamisburg, and Vandalia."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Criminal Misdemeanor Defense in Montgomery County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County is Ohio&apos;s fourth-largest county and Dayton is one of the state&apos;s major urban centers. Misdemeanor criminal cases in the county are heard in two primary municipal courts: Dayton Municipal Court at 301 W. Third St, Dayton, OH 45402 — which serves Dayton, Trotwood, Huber Heights, Vandalia, and Englewood — and Kettering Municipal Court at 2325 Wilmington Pike, Kettering, OH 45420 — which serves Kettering, Miamisburg, Centerville, and surrounding suburbs. At Jwayyed Law LLC, we provide aggressive{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link>{' '}
              in both courts for clients throughout Montgomery County.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A misdemeanor conviction in Dayton Municipal Court or Kettering Municipal Court creates a permanent Ohio criminal record that can appear on background checks used by employers, landlords, professional licensing boards, and others. For Montgomery County&apos;s large workforce — including healthcare workers, commercial drivers, educators, and government employees — misdemeanor convictions can jeopardize professional licenses and employment. Our firm evaluates all collateral consequences when developing defense strategies and works to achieve outcomes that protect your record and livelihood.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Misdemeanor Cases in Montgomery County Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Both Dayton Municipal Court and Kettering Municipal Court handle the full range of misdemeanor criminal charges. Our firm regularly represents clients in: assault and aggravated assault (first-degree misdemeanor, up to 180 days in jail); domestic violence (first-degree misdemeanor with federal firearm prohibition consequences); theft and shoplifting (degree depends on property value); drug possession of controlled substances, marijuana, and paraphernalia; disorderly conduct; criminal damaging; menacing and aggravated menacing; criminal trespass; driving under suspension; and traffic-related criminal charges. Dayton Municipal Court, as a high-volume urban court, has a distinct cadence from Kettering Municipal Court, and we tailor our approach to the specific court where your case is pending.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Penalties in Montgomery County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code, maximum misdemeanor penalties in Montgomery County courts are: first-degree misdemeanor — up to 180 days in jail and $1,000 fine; second-degree — up to 90 days and $750; third-degree — up to 60 days and $500; fourth-degree — up to 30 days and $250; minor misdemeanor — no jail, up to $150 fine. These are ceilings, not floors. Skilled representation can often achieve significantly better outcomes through pretrial motions, plea negotiations, diversion programs, or trial. Alternative sentencing options including community service, probation, and treatment programs are commonly available in both courts.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies in Dayton and Kettering Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our defense approach in Montgomery County begins with comprehensive review of all evidence. We examine whether the arrest or search was constitutionally valid; whether statements were obtained in compliance with Miranda requirements; whether the evidence is legally sufficient to prove each element of the charged offense; and whether witnesses have credibility issues. In assault and domestic violence cases we evaluate self-defense claims. In drug cases we challenge search and seizure validity, chain of custody, and laboratory certification. We assess eligibility for Ohio&apos;s Intervention in Lieu of Conviction (ILC) program — which can result in dismissal — and other diversion options. In cases that cannot be resolved favorably through negotiation, we prepare thoroughly for trial.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Expungement in Montgomery County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you have a misdemeanor conviction in Dayton Municipal Court or Kettering Municipal Court, you may be eligible for expungement and record sealing under Ohio Revised Code 2953.31. Expungement removes the record from public access and allows you to truthfully answer &quot;no conviction&quot; on most applications. Eligibility depends on offense type, prior record, and whether applicable waiting periods have elapsed. Domestic violence convictions, OVI convictions, and certain other offenses are not eligible. Our firm evaluates eligibility for every client and handles the expungement petition process in the appropriate court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing misdemeanor charges in Montgomery County, contact Jwayyed Law LLC immediately at (614) 285-5482. Whether your case is in Dayton Municipal Court or Kettering Municipal Court, early consultation with an experienced defense attorney is the most important step you can take. We will review the charges, explain all options, and develop a defense strategy tailored to your case and the specific court where your matter will be resolved.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
