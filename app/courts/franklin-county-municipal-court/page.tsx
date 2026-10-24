import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Franklin County Municipal Court Attorney | Jwayyed Law LLC',
  description: 'OVI, criminal defense, and civil representation in Franklin County Municipal Court at 375 S. High St., Columbus. Call Jwayyed Law LLC — (614) 285-5482.',
  keywords: [
    'Franklin County Municipal Court attorney',
    'Columbus Municipal Court OVI lawyer',
    'criminal defense Franklin County Municipal Court',
    'eviction attorney Columbus',
    'Franklin County Municipal Court criminal lawyer',
  ],
  openGraph: {
    title: 'Franklin County Municipal Court Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/franklin-county-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Municipal Court', href: '/courts/franklin-county-municipal-court' },
];

const faqs = [
  {
    question: `What types of cases does Jwayyed Law LLC handle in Franklin County Municipal Court?`,
    answer: `Jwayyed Law LLC provides full-service representation in Franklin County Municipal Court, including OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container, and more), traffic defense, and civil matters (contract disputes, evictions, landlord-tenant proceedings, and business collections within the court's $15,000 civil jurisdictional limit). Call (614) 285-5482 to discuss your case.`,
  },
  {
    question: `What are the OVI penalties in Franklin County Municipal Court?`,
    answer: `Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Franklin County Municipal Court carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums of 6 days. A second OVI within 10 years carries a minimum of 10 consecutive days, fines of $715 to $1,625, and suspension of 1 to 7 years. Felony OVI (4th degree) applies when there are 3 or more prior OVI convictions within 10 years.`,
  },
  {
    question: `How do I appeal an Administrative License Suspension (ALS) in Franklin County?`,
    answer: `Under ORC 4511.191, you have 30 days from the date of arrest to file an ALS appeal in Franklin County Municipal Court at 375 S. High Street, Columbus, OH 43215. The ALS takes effect immediately upon arrest and is a separate civil proceeding from the criminal OVI case. An attorney can file the appeal, request a stay of suspension, and challenge the suspension on procedural or substantive grounds before the deadline expires. Missing this 30-day window permanently forfeits your right to contest the ALS.`,
  },
  {
    question: `What criminal misdemeanor cases are heard in Franklin County Municipal Court?`,
    answer: `Franklin County Municipal Court handles all misdemeanor criminal charges arising within the court's jurisdiction, including: OVI/DUI, theft and shoplifting (M1 for amounts under $1,000), domestic violence (R.C. 2919.25), assault (R.C. 2903.13), drug possession (R.C. 2925.11), disorderly conduct (R.C. 2917.11), open container (R.C. 4301.62), driving under suspension, criminal damaging, criminal mischief, criminal trespass, obstructing official business, and resisting arrest. The court also handles felony arraignments before cases are bound over to Franklin County Common Pleas Court.`,
  },
  {
    question: `What is the civil jurisdictional limit of Franklin County Municipal Court?`,
    answer: `Franklin County Municipal Court has civil jurisdiction over disputes where the amount in controversy does not exceed $15,000, excluding interest and costs. Claims above $15,000 must be filed in the Franklin County Court of Common Pleas (General Division). Small claims cases are heard in the Small Claims Division with a $6,000 limit. If you are unsure which court has jurisdiction over your dispute, an attorney can help evaluate the amount in controversy and select the appropriate forum.`,
  },
  {
    question: `How does the eviction process work in Franklin County Municipal Court?`,
    answer: `Ohio's eviction process (forcible entry and detainer) is governed by ORC Chapter 1923. In Franklin County, the process begins when a landlord serves the tenant with proper written notice — typically a 3-day notice for nonpayment of rent, or a 30-day notice for other lease violations. If the tenant does not comply, the landlord files an eviction complaint in Franklin County Municipal Court. Under ORC 1923.07, the court schedules a hearing within 30 days of filing. If the landlord prevails, the court issues a judgment for possession. After the appeal period, a writ of restitution authorizes law enforcement to remove the tenant. Procedural errors can result in dismissal, so proper compliance with ORC Chapter 1923 is critical.`,
  },
  {
    question: `What specialized dockets does Franklin County Municipal Court operate?`,
    answer: `Franklin County Municipal Court operates several specialized dockets including: HART Court (a recovery docket for defendants with opioid addiction, offering treatment as an alternative to incarceration); MAVS Court (a mental health docket for defendants with serious mental illness); and CATCH Court (a specialized docket for adult female victims of human trafficking and sexual exploitation). Eligibility for these dockets may provide defendants with a path to treatment and dismissal of charges. An attorney can evaluate whether a client may qualify and advocate for placement.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for a Franklin County Municipal Court case?`,
    answer: `Jwayyed Law LLC provides experienced representation across all of Franklin County Municipal Court's divisions — criminal, OVI, traffic, civil, and eviction. Our firm understands the court's procedures, the local prosecutors' practices, and the specialized dockets available for certain defendants. We act quickly to file ALS appeals (30-day deadline from arrest), obtain evidence, and develop defense strategies tailored to each case. For criminal and OVI matters, early intervention is critical. Call (614) 285-5482 to discuss your Franklin County Municipal Court case.`,
  },
];

export default function FranklinCountyMunicipalCourtPage() {

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Municipal Court Attorney"
        description="OVI defense, criminal misdemeanor defense, and civil representation at Franklin County Municipal Court, 375 S. High Street, Columbus, OH 43215."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Full-Service Representation at Franklin County Municipal Court
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court, located at <strong>375 S. High Street, Columbus, OH 43215</strong> (floors 12–15), is the busiest municipal court in Ohio — hearing tens of thousands of criminal, OVI, traffic, and civil cases each year for Columbus and the surrounding Franklin County communities. Jwayyed Law LLC provides experienced representation in all divisions of this court, including OVI and DUI defense, criminal misdemeanor defense, traffic violations, civil disputes, and landlord-tenant matters. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to speak with an attorney about your Franklin County Municipal Court case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI / DUI Defense at Franklin County Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI charges under{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">Ohio Revised Code 4511.19</Link>{' '}
              are among the most frequently litigated matters in Franklin County Municipal Court. A first OVI conviction carries mandatory minimum penalties: 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years — all significantly revised under HB 37, effective April 9, 2025. High-tier OVI charges (BAC 0.17% or above) carry enhanced mandatory minimums even for first-time defendants. A second OVI within 10 years escalates to a minimum of 10 consecutive days in jail, fines of $715 to $1,625, and suspension of 1 to 7 years.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Upon an OVI arrest anywhere in Franklin County, the arresting officer immediately issues an Administrative License Suspension (ALS) notice under ORC 4511.191. The ALS is a separate civil proceeding from the criminal OVI case — and you have only <strong>30 days from the date of arrest</strong> to appeal it in Franklin County Municipal Court. Our firm treats the ALS appeal as an emergency matter, filing immediately and requesting a stay of suspension so you can continue driving during the appeal process. Missing this window permanently forfeits your right to contest the suspension.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our OVI defense strategy at Franklin County Municipal Court includes: evaluating the constitutionality of the initial traffic stop; reviewing body-cam and dash-cam footage of field sobriety test administration; challenging whether NHTSA-standardized procedures were followed for the HGN, walk-and-turn, and one-leg stand tests; obtaining breathalyzer maintenance and calibration records to challenge BAC accuracy; and analyzing blood-draw chain-of-custody documentation. Where BAC is near the legal threshold, the rising BAC defense — arguing BAC was below 0.08% at the time of driving and rose before testing — can be a viable argument. For clients facing career consequences, we also evaluate the impact of an OVI on professional licenses regulated by Ohio boards.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Criminal Misdemeanor Defense
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court handles the full range of misdemeanor criminal charges for Columbus and all Franklin County municipalities. Common cases our firm defends include theft and shoplifting under ORC 2913.02 (misdemeanor of the first degree for amounts under $1,000, with up to 180 days in jail and a $1,000 fine); domestic violence under ORC 2919.25 (M1 for physical harm, M4 for threats — with significant collateral consequences including the federal Lautenberg Amendment's permanent firearm prohibition triggered by any misdemeanor DV conviction); assault under ORC 2903.13 (M1 baseline, escalating to felony in certain circumstances); drug possession under ORC 2925.11; disorderly conduct under ORC 2917.11; and open container under ORC 4301.62.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court's high caseload means that early, informed advocacy is essential. Our firm obtains all available evidence — including police body-cam footage, incident reports, witness statements, and any applicable forensic evidence — before evaluating any plea offer. Franklin County prosecutors routinely offer diversion programs for first-time offenders in appropriate cases, and our firm understands when to pursue those options and when to push for dismissal or trial. A misdemeanor conviction creates a permanent criminal record accessible to employers, landlords, and licensing boards, which is why every case in Franklin County Municipal Court deserves aggressive representation regardless of the charge.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Specialized Dockets — HART, MAVS, and CATCH Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court operates three specialized dockets that may provide defendants with treatment-based alternatives to traditional prosecution. <strong>HART Court</strong> is a recovery-focused docket for defendants with opioid use disorder, offering structured treatment programming as an alternative to incarceration for eligible drug-related offenses. <strong>MAVS Court</strong> is a mental health docket serving defendants with serious mental illness, connecting them with community mental health services as part of their case disposition. <strong>CATCH Court</strong> is a specialized docket specifically designed for adult female victims of human trafficking and sexual exploitation, providing comprehensive social services and legal advocacy. Placement in a specialized docket can result in dismissal of charges upon successful program completion. An attorney can evaluate eligibility and advocate for placement in the appropriate docket.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Civil Jurisdiction — Disputes, Collections, and Evictions
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court has civil jurisdiction over disputes where the amount in controversy does not exceed $15,000, excluding interest and costs. The Civil Division handles contract disputes, property damage claims, and commercial collections. The Small Claims Division handles simpler disputes up to $6,000. The Housing Division handles residential evictions (forcible entry and detainer under ORC Chapter 1923), housing code enforcement, and certain landlord-tenant matters. For disputes exceeding $15,000, cases must be filed in Franklin County Court of Common Pleas (General Division).
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's eviction process requires strict procedural compliance. Before filing an eviction complaint, a landlord must serve the tenant with the appropriate written notice — typically a 3-day notice to vacate for nonpayment of rent, or a 30-day notice for other material lease violations under ORC Chapter 5321. After the notice period expires without compliance, the landlord files an eviction complaint in the Housing Division. Under ORC 1923.07, the court must schedule a hearing within 30 days. If the landlord prevails, the court issues a judgment for possession, and after the appeal period, a writ of restitution authorizes law enforcement to remove the tenant. Procedural errors — an improper notice, failure to comply with ORC 5321 habitability requirements, or an incorrect court filing — can result in dismissal and significant delay.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              After obtaining a civil judgment, creditors may enforce it through wage garnishment under ORC 2716.02 (up to 25% of disposable earnings), bank account levies under ORC 2716.11, or judgment liens on real property under ORC 2329.02. Debtors may claim Ohio property exemptions under ORC 2329.66 in response to garnishment or levy proceedings. Our firm handles both creditor-side collections and debtor-side defense in Franklin County Municipal Court post-judgment proceedings.
            </p>

            <LocationsWeServe title="Franklin County & Ohio" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>OVI / DUI defense:</strong> ALS appeals (30-day deadline), first/second/third offense defense, high-tier OVI, CDL OVI, limited driving privileges</li>
              <li><strong>Criminal misdemeanor defense:</strong> Theft, domestic violence, assault, drug possession, disorderly conduct, open container, driving under suspension, and more</li>
              <li><strong>Traffic violations:</strong> Speeding, reckless operation, failure to comply, marked lanes, and other traffic charges in Franklin County</li>
              <li><strong>Expungement:</strong> Record sealing for eligible misdemeanor convictions after applicable waiting periods under R.C. 2953.32</li>
              <li><strong>Civil disputes:</strong> Contract claims, property damage, and commercial collections within the $15,000 jurisdictional limit</li>
              <li><strong>Evictions:</strong> Residential and commercial eviction proceedings in the Housing Division under ORC Chapter 1923</li>
              <li><strong>Post-judgment enforcement:</strong> Wage garnishment, bank levies, and judgment lien filings</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a criminal, OVI, traffic, or civil matter in Franklin County Municipal Court, contact Jwayyed Law LLC immediately at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              For OVI arrests, the 30-day ALS appeal deadline cannot be extended — early contact is critical.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
