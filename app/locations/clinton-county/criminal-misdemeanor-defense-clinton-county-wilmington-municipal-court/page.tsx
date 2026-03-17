import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Criminal Misdemeanor Defense Lawyer for Wilmington, Ohio | Wilmington Municipal Court | Jwayyed Law LLC',
  description: 'Experienced criminal misdemeanor defense attorney for Wilmington and Clinton County, Ohio. Wilmington Municipal Court. Assault, theft, drug charges, domestic violence. Call (614) 285-5482.',
  keywords: ['criminal defense Wilmington Ohio', 'misdemeanor attorney Clinton County', 'Wilmington Municipal Court criminal lawyer', 'Clinton County misdemeanor defense'],
  openGraph: {
    title: 'Criminal Misdemeanor Defense in Clinton County - Wilmington Municipal Court | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court',
  },
  alternates: { canonical: '/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Clinton County', href: '/courts/clinton-county' },
  { label: 'Criminal Misdemeanor Defense - Wilmington Municipal Court', href: '/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court' },
];

const faqs = [
  {
    question: `What are the misdemeanor penalties in Wilmington Municipal Court?`,
    answer: `Misdemeanor penalties in Wilmington Municipal Court follow Ohio Revised Code. First-degree misdemeanors (e.g., domestic violence, assault, certain theft charges): up to 180 days in jail and a $1,000 fine. Second-degree: up to 90 days and $750. Third-degree: up to 60 days and $500. Fourth-degree: up to 30 days and $250. Minor misdemeanors carry no jail time but up to a $150 fine. An experienced attorney can work to minimize or avoid these penalties.`,
  },
  {
    question: `What types of misdemeanor cases does Wilmington Municipal Court handle?`,
    answer: `Wilmington Municipal Court handles all misdemeanor criminal cases arising in Clinton County, including assault, domestic violence, theft and shoplifting, drug possession, disorderly conduct, criminal damaging, menacing, and traffic-related criminal charges such as driving under suspension. The court also handles violations of protective orders and criminal trespass. An attorney familiar with this court can help you understand your options and develop a defense strategy.`,
  },
  {
    question: `What is Intervention in Lieu of Conviction (ILC) in Clinton County?`,
    answer: `Ohio&apos;s Intervention in Lieu of Conviction program (ILC) allows eligible first-time offenders charged with drug-related misdemeanors or offenses driven by substance abuse or mental health issues to complete treatment instead of facing conviction. If successfully completed, the charge is dismissed. Wilmington Municipal Court has discretion to grant ILC. Our attorney can evaluate your eligibility and advocate for ILC where appropriate.`,
  },
  {
    question: `Can a misdemeanor be expunged in Clinton County?`,
    answer: `Many misdemeanor convictions in Clinton County are eligible for expungement (record sealing) under Ohio Revised Code 2953.31 after completing sentence requirements and waiting periods. For first-degree misdemeanors the waiting period is generally one year after discharge; for lower-degree misdemeanors it may be shorter. Some offenses are not eligible, including domestic violence convictions. Our firm helps clients evaluate eligibility and file expungement petitions in Wilmington Municipal Court.`,
  },
  {
    question: `What should I do first if I am charged with a misdemeanor in Clinton County?`,
    answer: `If you are charged with a misdemeanor in Clinton County, do not make any statements to law enforcement without an attorney present. Exercise your right to remain silent. Do not contact alleged victims in domestic violence or assault cases, as this can result in additional charges. Contact Jwayyed Law LLC immediately so we can appear at your arraignment, evaluate bond conditions, review the evidence, and begin building your defense strategy.`,
  },
  {
    question: `Can domestic violence charges be dropped in Clinton County?`,
    answer: `Domestic violence charges in Wilmington Municipal Court are prosecuted by the Clinton County prosecutor&apos;s office, not the alleged victim. Even if the alleged victim does not want to press charges, the prosecution can proceed independently. However, an experienced defense attorney can challenge evidence, highlight credibility issues, present self-defense arguments, and negotiate with prosecutors to achieve reduced charges or dismissal in appropriate cases.`,
  },
  {
    question: `How does a misdemeanor conviction affect employment in Clinton County?`,
    answer: `A misdemeanor conviction in Wilmington Municipal Court creates a permanent public criminal record in Ohio that can appear on background checks and affect employment, professional licensing, housing applications, and federal benefits. This is why fighting misdemeanor charges vigorously — rather than pleading guilty for convenience — is important. Our firm works to achieve outcomes that protect your record, including dismissals, reductions, diversion programs, and eventual expungement.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for criminal defense in Clinton County?`,
    answer: `Jwayyed Law LLC provides dedicated criminal misdemeanor defense in Wilmington Municipal Court and throughout Clinton County. We understand local court procedures, prosecutor practices, and the judicial expectations of this rural southwestern Ohio court. Our attorney reviews all evidence, identifies constitutional violations and defense opportunities, and advocates aggressively for the best possible outcome. Call (614) 285-5482 for a consultation.`,
  },
];

export default function ClintonCriminalMisdemeanorDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Misdemeanor Defense in Clinton County"
        description="Wilmington Municipal Court criminal defense. Experienced representation for misdemeanor charges throughout Clinton County, Ohio — assault, theft, drug possession, domestic violence, and more."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Criminal Misdemeanor Defense in Clinton County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A misdemeanor charge in Clinton County is not a minor matter. A conviction in Wilmington Municipal Court, located at 69 N. South St, Wilmington, OH 45177, creates a permanent criminal record that can affect your employment, housing, professional licenses, and personal reputation. At Jwayyed Law LLC, we provide experienced{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link>{' '}
              representation for clients facing misdemeanor charges throughout Clinton County, including Wilmington, Sabina, Blanchester, Clarksville, and Port William.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Clinton County is a rural agricultural community in southwestern Ohio where close-knit community ties mean that a criminal charge can damage personal and professional relationships quickly. The Clinton County prosecutor&apos;s office handles all misdemeanor cases in Wilmington Municipal Court, and local prosecutor practices and judicial preferences can meaningfully affect case outcomes. Our attorney understands these local dynamics and tailors strategy accordingly.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Misdemeanor Cases in Wilmington Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Wilmington Municipal Court handles the full range of misdemeanor criminal charges arising in Clinton County. Common cases our firm handles include: assault and aggravated assault (first-degree misdemeanor, up to 180 days in jail); domestic violence (first-degree misdemeanor with mandatory minimum jail time on repeat offenses); theft and shoplifting (degree depends on value of property); drug possession of marijuana, controlled substances, and drug paraphernalia; criminal damaging or endangering; menacing and aggravated menacing; disorderly conduct; criminal trespass; driving under suspension; and violation of protection orders. Each charge carries distinct penalties, defenses, and plea negotiation dynamics.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Misdemeanor Penalties Under Ohio Revised Code
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code sets the following maximum misdemeanor penalties that Wilmington Municipal Court applies: first-degree misdemeanors carry up to 180 days in jail and a fine of up to $1,000; second-degree misdemeanors carry up to 90 days in jail and a $750 fine; third-degree misdemeanors carry up to 60 days in jail and a $500 fine; fourth-degree misdemeanors carry up to 30 days in jail and a $250 fine; minor misdemeanors carry no jail time but a fine of up to $150. These maximums can often be significantly reduced or avoided through skilled representation, plea negotiation, alternative sentencing, or diversion programs.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies in Clinton County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Effective misdemeanor defense in Clinton County requires thorough investigation of the facts and law. Our firm examines whether the arrest or search was constitutional under the Fourth Amendment and ORC 2935.26; whether Miranda rights were properly given before any statements were made; whether the evidence is sufficient to prove each element of the offense beyond a reasonable doubt; and whether witnesses or alleged victims have credibility issues that can be challenged. In assault and domestic violence cases, self-defense and defense of others under Ohio law provide complete defenses when the facts support them. In drug cases, we challenge search and seizure issues, chain of custody, and lab certification. We also evaluate eligibility for Intervention in Lieu of Conviction (ILC) and other diversion programs that can result in dismissal without conviction.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Expungement and Record Sealing in Clinton County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Even if you receive a misdemeanor conviction in Wilmington Municipal Court, you may be eligible for expungement and record sealing under Ohio Revised Code 2953.31 after completing your sentence and waiting periods. Expungement seals the record from public view, removes it from most background checks, and allows you to legally answer &quot;no conviction&quot; on most job and housing applications. Our firm evaluates expungement eligibility for every client and assists with the petition process in Wilmington Municipal Court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing misdemeanor charges in Clinton County, contact Jwayyed Law LLC immediately at (614) 285-5482. Early retention of counsel before arraignment is the most important step you can take to protect your rights. We will review the charges and evidence, explain your options, and develop a defense strategy tailored to the specific facts of your case and the procedures of Wilmington Municipal Court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
