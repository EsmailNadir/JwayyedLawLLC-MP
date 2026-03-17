import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Criminal Misdemeanor Defense Lawyer for Delaware, Ohio | Delaware County Municipal Court | Jwayyed Law LLC',
  description: 'Experienced criminal misdemeanor defense attorney for Delaware, Powell, Dublin, and Delaware County, Ohio. Delaware County Municipal Court. Assault, theft, drug charges. Call (614) 285-5482.',
  keywords: ['criminal defense Delaware Ohio', 'misdemeanor attorney Delaware County', 'Delaware County Municipal Court criminal lawyer', 'Powell Ohio misdemeanor defense', 'Dublin criminal defense attorney'],
  openGraph: {
    title: 'Criminal Misdemeanor Defense in Delaware County - Delaware County Municipal Court | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court',
  },
  alternates: { canonical: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'Criminal Misdemeanor Defense - Delaware County Municipal Court', href: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court' },
];

const faqs = [
  {
    question: `What are the misdemeanor penalties in Delaware County Municipal Court?`,
    answer: `Misdemeanor penalties in Delaware County Municipal Court follow Ohio Revised Code. First-degree misdemeanors (assault, domestic violence, certain theft charges): up to 180 days in jail and a $1,000 fine. Second-degree: up to 90 days and $750. Third-degree: up to 60 days and $500. Fourth-degree: up to 30 days and $250. Minor misdemeanors carry no jail time but up to a $150 fine. An experienced attorney can often achieve reduced charges, diversion, or dismissal.`,
  },
  {
    question: `What types of misdemeanor cases does Delaware County Municipal Court handle?`,
    answer: `Delaware County Municipal Court at 70 N. Union St, Delaware handles all misdemeanor criminal charges arising in the county, including assault, domestic violence, theft, shoplifting, drug possession, disorderly conduct, criminal damaging, menacing, driving under suspension, trespass, and traffic-related criminal charges. As Delaware County grows, cases involving suburban communities like Powell, Lewis Center, Westerville, and Dublin portions in Delaware County are increasingly common.`,
  },
  {
    question: `Does a misdemeanor conviction affect professional licenses in Delaware County?`,
    answer: `Yes. Delaware County&apos;s large professional workforce means that misdemeanor convictions can trigger licensing board reviews for medical professionals, attorneys, real estate agents, teachers, nurses, and others. Ohio licensing boards have broad discretion to discipline or revoke licenses based on criminal convictions. Our firm evaluates professional licensing consequences alongside the criminal case and works to achieve outcomes — dismissals, reductions, or diversion — that minimize licensing board exposure.`,
  },
  {
    question: `What is Intervention in Lieu of Conviction (ILC) in Delaware County?`,
    answer: `Ohio&apos;s Intervention in Lieu of Conviction (ILC) program allows eligible first-time offenders charged with drug-related offenses or offenses driven by substance abuse or mental health issues to complete treatment in lieu of conviction. Successful completion results in dismissal of the charges. Delaware County Municipal Court has discretion to grant ILC. Our attorney evaluates eligibility and advocates for ILC or similar diversion programs where appropriate.`,
  },
  {
    question: `Can a misdemeanor be expunged in Delaware County?`,
    answer: `Many misdemeanor convictions are eligible for expungement under Ohio Revised Code 2953.31 after completing sentence requirements and applicable waiting periods. First-degree misdemeanor waiting periods are generally one year after discharge; lower-degree misdemeanor waiting periods may be shorter. Some charges are ineligible for expungement, including domestic violence and certain sexually oriented offenses. Our firm helps clients evaluate eligibility and file expungement petitions in Delaware County Municipal Court.`,
  },
  {
    question: `What should I do immediately after a misdemeanor arrest in Delaware County?`,
    answer: `After a misdemeanor arrest in Delaware County, exercise your right to remain silent and do not make any statements to law enforcement. Do not contact alleged victims in domestic violence or assault cases. Request an attorney immediately. Contact Jwayyed Law LLC so we can appear at your arraignment, evaluate bond conditions, preserve evidence, and begin developing your defense before critical pretrial deadlines pass.`,
  },
  {
    question: `How does Delaware County Municipal Court handle domestic violence charges?`,
    answer: `Domestic violence charges in Delaware County Municipal Court are prosecuted by the Delaware County prosecutor&apos;s office independently of the alleged victim&apos;s wishes. Ohio law also imposes mandatory minimum penalties for domestic violence convictions and prohibits firearm possession following conviction. Our firm challenges evidence, credibility of accusations, and procedural violations, and explores self-defense arguments and diversion options in appropriate cases.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for criminal defense in Delaware County?`,
    answer: `Jwayyed Law LLC provides dedicated criminal misdemeanor defense in Delaware County Municipal Court. We understand the local court procedures, prosecutor practices, and the unique professional licensing considerations facing Delaware County&apos;s large professional population. Our attorney reviews all evidence, identifies defense opportunities, and advocates aggressively for outcomes that protect your record and future. Call (614) 285-5482 for a consultation.`,
  },
];

export default function DelawareCriminalMisdemeanorDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Misdemeanor Defense in Delaware County"
        description="Delaware County Municipal Court criminal defense. Serving Delaware, Powell, Dublin, Westerville, Lewis Center, and Sunbury. Experienced representation for assault, theft, drug charges, and more."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Criminal Misdemeanor Defense in Delaware County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County is one of Ohio&apos;s fastest-growing counties, with rapidly expanding communities along US 23 and US 36 north of Columbus. A misdemeanor conviction in Delaware County Municipal Court, located at 70 N. Union St, Delaware, OH 43015, creates a permanent criminal record that can affect employment, professional licensing, housing, and future opportunities. At Jwayyed Law LLC, we provide aggressive{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link>{' '}
              for clients throughout Delaware County, including Delaware, Powell, Westerville, Dublin portions in Delaware County, Lewis Center, and Sunbury.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County&apos;s growing population includes a large professional workforce employed in healthcare, technology, finance, and other licensed fields. For these clients, a misdemeanor conviction carries consequences that extend far beyond the courtroom — Ohio licensing boards for medical professionals, attorneys, nurses, real estate agents, and teachers can investigate, suspend, or revoke licenses based on criminal records. Our firm carefully considers these collateral consequences when evaluating every case and strategy option.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Misdemeanor Cases in Delaware County Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County Municipal Court handles the full spectrum of misdemeanor criminal cases: assault and aggravated assault (first-degree misdemeanor, up to 180 days in jail and $1,000 fine); domestic violence (first-degree misdemeanor with collateral consequences including firearm prohibition); theft and shoplifting (degree depends on value); drug possession of controlled substances, marijuana, and drug paraphernalia; disorderly conduct; criminal damaging or endangering; menacing and aggravated menacing; criminal trespass; driving under suspension; and traffic-related criminal charges. As the county&apos;s suburban growth continues, new commercial areas in Powell and Lewis Center generate increasing numbers of retail theft, disorderly conduct, and assault cases that our firm handles.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Penalties in Delaware County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code sets maximum misdemeanor penalties applied by Delaware County Municipal Court: first-degree misdemeanors — up to 180 days in jail and $1,000 fine; second-degree — up to 90 days and $750; third-degree — up to 60 days and $500; fourth-degree — up to 30 days and $250; minor misdemeanors — no jail, up to $150 fine. These are maximum penalties and can frequently be reduced through skilled representation, diversion programs, or favorable plea agreements. Our firm works to achieve the outcome that minimizes the impact on your life and career.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies for Delaware County Cases
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our defense approach in Delaware County Municipal Court begins with thorough review of all evidence — police reports, body-cam and dash-cam footage, witness statements, and physical evidence. We evaluate whether the arrest or search was constitutionally valid and whether any evidence should be suppressed under the Fourth Amendment or ORC 2935.26. In assault cases, we assess self-defense arguments. In drug cases, we challenge the search that produced the evidence, chain of custody, and laboratory procedures. In domestic violence cases, we investigate the factual background, potential witness bias, and look for exculpatory evidence. We also evaluate whether clients are eligible for Intervention in Lieu of Conviction (ILC), community diversion, or other programs that can result in dismissal without a conviction on the record.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Expungement of Misdemeanor Records in Delaware County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you have a misdemeanor conviction in Delaware County Municipal Court, you may qualify for expungement and record sealing under Ohio Revised Code 2953.31. Expungement allows the record to be sealed from public view, effectively removing it from most background checks and allowing you to answer truthfully that you have no conviction on most applications. Waiting periods and eligibility rules depend on the offense type and prior record. Certain offenses — including domestic violence convictions and most traffic offenses — are not eligible. Our firm evaluates your eligibility and handles the petition process with the court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing misdemeanor charges in Delaware County, contact Jwayyed Law LLC immediately at (614) 285-5482. The decisions you make in the first days after a charge — including what you say to police and whether you attend arraignment with counsel — can profoundly affect the outcome. We will review your case, explain all available options, and develop a defense strategy tailored to the specific charges and the procedures of Delaware County Municipal Court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
