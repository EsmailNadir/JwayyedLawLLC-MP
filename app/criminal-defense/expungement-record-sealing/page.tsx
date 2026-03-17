import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Expungement & Record Sealing Lawyer Ohio | ORC 2953 | Columbus | Jwayyed Law LLC',
  description: 'Ohio expungement attorney helping seal criminal records under ORC 2953.32. Misdemeanors, low-level felonies, and dismissed charges. Columbus and throughout Ohio. Call (614) 285-5482.',
  keywords: ['expungement lawyer Ohio', 'record sealing attorney Columbus', 'Ohio expungement ORC 2953', 'criminal record sealing Ohio', 'expungement attorney Franklin County'],
  openGraph: {
    title: 'Expungement & Record Sealing Lawyer Ohio | ORC 2953 | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/expungement-record-sealing',
  },
  alternates: { canonical: '/criminal-defense/expungement-record-sealing' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Expungement / Record Sealing', href: '/criminal-defense/expungement-record-sealing' },
];

const faqs = [
  {
    question: `What is the difference between expungement and record sealing in Ohio?`,
    answer: `In Ohio, "expungement" and "record sealing" are often used interchangeably but technically refer to different relief under ORC Chapter 2953. Record sealing under ORC 2953.32 closes the record from public view — most employers, landlords, and the general public cannot access it, but law enforcement, courts, and certain government agencies can. Expungement under ORC 2953.38 goes further and results in the physical destruction of the record. For most practical purposes, record sealing provides sufficient relief: a sealed record does not appear on standard background checks and allows individuals to lawfully answer "no" to most employment applications asking about prior convictions. Our firm can help determine which form of relief applies to your case.`,
  },
  {
    question: `Who is eligible for record sealing in Ohio under ORC 2953.32?`,
    answer: `Eligibility for record sealing in Ohio depends on offense type, the number of prior convictions, completion of all sentence conditions, and expiration of the applicable waiting period. As amended by the Ohio legislature (most recently in 2023 and 2024), Ohio has significantly expanded expungement eligibility. Most misdemeanors (all degrees) and low-level felonies (F4 and F5, and many F3 offenses) are eligible. Certain offenses are categorically ineligible regardless of other factors: first- and second-degree felonies (with limited exceptions), crimes of violence under ORC 2901.01(A)(9), sexually oriented offenses, offenses involving minors as victims, and most traffic offenses (OVI/DUI under ORC 4511.19 is not sealable). An attorney can review your specific record and advise on eligibility.`,
  },
  {
    question: `What are the waiting periods for record sealing in Ohio?`,
    answer: `Under ORC 2953.32 (as amended through 2024), Ohio's record sealing waiting periods run from the date of final discharge — meaning completion of all incarceration, probation, parole, and payment of all fines, costs, and restitution. The waiting periods are: minor misdemeanors: 1 year; misdemeanors of the first through fourth degree: 1 year; fourth- and fifth-degree felonies: 1 year; third-degree felonies (one conviction): 3 years; third-degree felonies (two convictions): 3 years. For arrests and charges that did not result in conviction (dismissed charges, not-guilty verdicts, no-billed charges), there is no waiting period — you may seek sealing immediately. All financial obligations (fines, court costs, restitution) must be satisfied before the court will grant a sealing application.`,
  },
  {
    question: `Can felony records be sealed in Ohio?`,
    answer: `Yes, many felony records can be sealed in Ohio under ORC 2953.32, significantly expanded by recent Ohio legislation. Fourth- and fifth-degree felonies are eligible after a 1-year waiting period. Many third-degree felonies are eligible after 3 years. Some second-degree felony convictions became eligible under 2023 Ohio legislation for offenses committed after July 1, 2023, with certain conditions. Ineligible felonies include first-degree felonies (generally), crimes of violence as defined by ORC 2901.01(A)(9), sexually oriented offenses, offenses with mandatory prison terms, and offenses where the victim was a minor. The number of prior convictions also affects eligibility — Ohio law sets maximum conviction counts for sealing eligibility. A criminal defense attorney can review your specific felony conviction(s) and advise whether sealing is possible.`,
  },
  {
    question: `Can dismissed charges or not-guilty verdicts be sealed in Ohio?`,
    answer: `Yes. Dismissed charges, charges that resulted in not-guilty verdicts, no-billed charges (where a grand jury declined to indict), and cases in which the prosecutor entered a nolle prosequi (declined to prosecute) are eligible for sealing under ORC 2953.52 with no waiting period. These are some of the most important records to seal because they still appear on background checks and can harm employment and housing prospects even though they did not result in a conviction. An application can be filed at any time after the case is resolved, and the standard for granting relief is generally favorable to the applicant when no conviction resulted.`,
  },
  {
    question: `What is the process for getting a record sealed in Ohio?`,
    answer: `The record sealing process in Ohio involves several steps: (1) Eligibility determination — confirm the offense type, waiting period, and number of prior convictions; (2) Application preparation — draft and file an application for expungement/sealing in the court of conviction (the original sentencing court), along with any required affidavits or documents; (3) Notice — the court notifies the prosecuting attorney, who has 60 days to object; (4) Hearing — the court holds a hearing (usually brief) at which the court weighs the interests of the applicant against any legitimate governmental interest in maintaining the record; (5) Order — if granted, the court issues a sealing order directed to all relevant repositories (Ohio BCI, courts, law enforcement agencies); (6) Record updates — agencies update their records accordingly. Our firm handles all steps of this process, from eligibility review to post-order follow-up.`,
  },
  {
    question: `Does sealing a record allow me to say I have no criminal record on job applications?`,
    answer: `Generally yes, with important exceptions. After a record is sealed in Ohio under ORC 2953.32, the law provides that in most circumstances the individual "shall be treated as if he had not been convicted of or pleaded guilty to the offense." This means you may lawfully answer "no" on most private employer applications asking about prior convictions. However, Ohio law requires disclosure of sealed records in several specific circumstances: applications for law enforcement positions; applications requiring a criminal background check under Ohio law (certain licensed professions, positions working with children or vulnerable adults, applications to purchase firearms); and federal employment applications (federal law is not governed by Ohio sealing orders). An attorney can advise on which disclosure obligations may apply to your specific situation.`,
  },
  {
    question: `What records does Ohio's expungement order actually seal?`,
    answer: `An Ohio record sealing order under ORC 2953.32 directs all official repositories to seal the subject records — this includes court records (the docket, case file, and judgment entry), Ohio Bureau of Criminal Investigation (BCI) records, law enforcement agency records, and records held by the arresting agency. The Ohio Revised Code requires BCI to maintain a sealed index accessible only to courts for sentencing purposes and law enforcement agencies. Commercial background check companies are required to remove sealed records when notified, but some databases may take time to update and some private companies may retain information — this is one reason why monitoring your background check report after sealing is advisable. A sealed record will not appear on most Ohio BCI checks used by private employers and landlords.`,
  },
];

export default function ExpungementRecordSealingPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Expungement &amp; Record Sealing Lawyer in Ohio"
        description="Helping clients seal criminal records under ORC Chapter 2953. Misdemeanors, low-level felonies, dismissed charges, and not-guilty verdicts."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Ohio Expungement and Record Sealing: A Second Chance Under ORC 2953
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A criminal record — even for a minor misdemeanor — can follow Ohioans for years, appearing on background checks run by employers, landlords, professional licensing boards, and educational institutions. Ohio law provides a meaningful remedy: record sealing under <strong>ORC 2953.32</strong>, which effectively removes the conviction from public view and allows individuals to move forward without the ongoing collateral consequences of a criminal record. Ohio has significantly expanded its expungement and record sealing statutes in recent years, and many people who were previously ineligible may now qualify. At Jwayyed Law LLC, we help clients throughout Ohio navigate the eligibility requirements, file applications, and complete the sealing process efficiently.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Eligibility for record sealing in Ohio turns on several factors: the nature of the offense, the number of prior convictions, whether all sentence conditions have been completed, and whether the applicable waiting period has run. Under current Ohio law, most misdemeanor convictions and many felony convictions — including fourth- and fifth-degree felonies after a one-year waiting period, and third-degree felonies after three years — are eligible for sealing. Certain offenses remain categorically ineligible regardless of other factors: first-degree felonies in most circumstances, crimes of violence as defined by <strong>ORC 2901.01(A)(9)</strong>, sexually oriented offenses, offenses involving minor victims, and OVI/DUI convictions under <strong>ORC 4511.19</strong>. The expansion of eligible offenses under recent Ohio legislation means an attorney review of your specific record is the best way to determine whether you qualify.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One category of records that is often overlooked is arrests, charges, and cases that did not result in conviction. Dismissed charges, charges that were no-billed by a grand jury, cases in which the prosecutor entered a nolle prosequi, and acquittals (not-guilty verdicts) are all eligible for sealing under <strong>ORC 2953.52</strong> with no waiting period. These records still appear on background checks despite never resulting in a conviction — they can mislead employers and landlords about an individual&apos;s history. Sealing dismissed and non-conviction records is often the quickest and most impactful form of record relief available in Ohio.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The practical effect of a sealed record in Ohio is significant. Once a record is sealed, Ohio law provides that in most circumstances the individual &quot;shall be treated as if he had not been convicted of or pleaded guilty to the offense.&quot; Most private employers and landlords conducting standard background checks will not see the sealed record. The individual may lawfully answer &quot;no&quot; on most employment applications that ask about prior convictions. Important exceptions apply: law enforcement positions, certain licensed professions, positions involving children or vulnerable adults, and federal employment applications require disclosure of sealed records. Understanding which exceptions apply to your specific situation is an important part of post-sealing planning.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Ohio Record Sealing Waiting Periods (ORC 2953.32)
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Waiting periods are measured from <strong>final discharge</strong> — completion of all incarceration, probation, parole, and payment of all fines, costs, and restitution:</p>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Minor misdemeanors: <strong>1 year</strong></li>
                <li>Misdemeanors (all degrees, M1–M4): <strong>1 year</strong></li>
                <li>Fourth- and fifth-degree felonies (F4, F5): <strong>1 year</strong></li>
                <li>Third-degree felonies (F3, one or two convictions): <strong>3 years</strong></li>
                <li>Dismissed charges / non-conviction records (ORC 2953.52): <strong>No waiting period</strong></li>
              </ul>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700">Ineligible offenses include: OVI/DUI (ORC 4511.19), crimes of violence (ORC 2901.01(A)(9)), sexually oriented offenses, offenses with minor victims, and most F1/F2 felonies. All fines and costs must be paid before filing. Number of prior convictions affects eligibility for higher-degree offenses.</p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              How Jwayyed Law LLC Handles the Record Sealing Process
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Eligibility evaluation:</strong> Review of your complete criminal record history across all Ohio courts to identify all sealable offenses, confirm waiting periods have run, and identify any ineligible offenses that could complicate the application.</li>
              <li><strong>Application preparation and filing:</strong> Draft and file the expungement/sealing application in the court of original conviction (the correct court is the sentencing court, not just any court), along with supporting documentation.</li>
              <li><strong>Prosecutor response:</strong> Monitor for any objection by the prosecuting attorney (who has 60 days to respond) and respond appropriately if objections are filed.</li>
              <li><strong>Hearing representation:</strong> Appear at the sealing hearing on your behalf, present the case for sealing, and address any judicial concerns or prosecutorial objections.</li>
              <li><strong>Post-order follow-up:</strong> Confirm that sealing orders are transmitted to all relevant agencies including BCI, law enforcement repositories, and court records offices.</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you have a prior criminal record in Ohio, <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">contact Jwayyed Law LLC</Link> to discuss whether record sealing may be available to you. Read our articles on <Link href="/our-law-firm/blog/ohio-new-expungement-laws-clear-record" className="text-[#b87333] underline hover:text-[#a06828]">Ohio&apos;s new expungement laws</Link> and <Link href="/our-law-firm/blog/what-is-expungement-ohio-2024" className="text-[#b87333] underline hover:text-[#a06828]">how expungement works in Ohio</Link>. Related services include <Link href="/criminal-defense" className="text-[#b87333] underline hover:text-[#a06828]">Ohio criminal defense</Link> and <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:text-[#a06828]">OVI/DUI defense</Link>. Note that OVI convictions under ORC 4511.19 are not sealable.
            </p>

            <LocationsWeServe title="Criminal Defense" criminalDisclaimer />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/criminal-defense/assault-charges" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Assault Charges</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Simple and aggravated assault defense in Ohio</span>
              </Link>
              <Link href="/criminal-defense/domestic-violence" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Domestic Violence Defense</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Ohio DV charges and protection order defense</span>
              </Link>
              <Link href="/criminal-defense/petty-theft" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Petty Theft</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Shoplifting and theft defense in Ohio</span>
              </Link>
              <Link href="/criminal-defense/driving-under-suspension" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Driving Under Suspension</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Suspended license defense in Ohio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
