import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { getSuburb, FCMC, FIRM_NAP } from '@/data/franklin-county-reference';

interface Props {
  suburb: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function MayorsCourtTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, population2020 } = suburbData;

  if (!mayorsCourt.active) {
    throw new Error(`MayorsCourtTemplate used for suburb without active mayor's court: ${suburb}. Use a different template.`);
  }

  const { address, phone, schedule } = mayorsCourt;
  const slug = slugify(suburb);

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `${suburb} Mayor's Court`, href: `/locations/franklin-county/mayors-court-${slug}` },
  ];

  const faqs = [
    {
      question: `What is ${suburb} Mayor's Court and how does it work?`,
      answer: `${suburb} Mayor's Court is a limited-jurisdiction Ohio court that handles minor misdemeanor criminal charges and most traffic violations arising within ${suburb} city limits. It is presided over by the ${suburb} mayor or a designated magistrate, rather than by a licensed judge. The court meets ${schedule}. Cases are heard at ${address}. Mayor's courts can accept pleas, impose fines, and sentence defendants on eligible offenses, but they cannot conduct jury trials. Cases that involve jury demands, felony charges, or matters beyond the court's jurisdiction transfer to Franklin County Municipal Court at ${FCMC.address}.`,
    },
    {
      question: `What charges are heard in ${suburb} Mayor's Court?`,
      answer: `${suburb} Mayor's Court has jurisdiction over minor misdemeanors and first, second, third, and fourth-degree misdemeanor criminal charges arising within ${suburb} — including OVI, speeding, traffic violations, disorderly conduct, open container, minor drug possession citations, petty theft, and most other misdemeanor offenses. The court does not handle felony charges (which go to Franklin County Municipal Court and then Common Pleas), nor does it conduct jury trials. If you demand a jury trial, your case transfers to Franklin County Municipal Court.`,
    },
    {
      question: `Can I just pay my ${suburb} Mayor's Court fine online or by mail?`,
      answer: `For minor traffic citations, you may be able to pay a fine without appearing — contact ${suburb} Mayor's Court at ${phone} to confirm whether your specific charge allows a no-appearance fine payment. However, misdemeanor criminal charges (including OVI, disorderly conduct, theft, and most others) generally require a personal appearance at arraignment. Failing to appear on a misdemeanor charge results in a bench warrant and default judgment. An attorney can often appear on your behalf for minor matters, avoiding the need for you to take time off work.`,
    },
    {
      question: `When does a ${suburb} Mayor's Court case transfer to Franklin County Municipal Court?`,
      answer: `A ${suburb} Mayor's Court case transfers to Franklin County Municipal Court in several circumstances: when the defendant demands a jury trial; when the charge is a first-degree misdemeanor and the case cannot be resolved by plea; when a felony charge arises from the same facts; or when the mayor's court lacks jurisdiction over the specific offense. OVI charges are frequently resolved at the mayor's court level, but the ALS appeal (30-day deadline under ORC 4511.191) is always filed directly in Franklin County Municipal Court at ${FCMC.address}.`,
    },
    {
      question: `Does a conviction in ${suburb} Mayor's Court create a permanent record?`,
      answer: `Yes. A conviction in ${suburb} Mayor's Court is a criminal conviction under Ohio law and creates a permanent public record identical in effect to a conviction in any other Ohio court. The conviction appears on criminal background checks and is subject to the same expungement rules under ORC 2953.32. Many misdemeanor convictions are eligible for expungement after applicable waiting periods. Our firm evaluates expungement eligibility as part of every defense engagement and advises on long-term record outcomes.`,
    },
    {
      question: `Do I need an attorney for ${suburb} Mayor's Court?`,
      answer: `You have the right to an attorney in ${suburb} Mayor's Court for any charge that carries the possibility of incarceration. While minor traffic violations can sometimes be handled without counsel, any misdemeanor criminal charge — OVI, disorderly conduct, theft, assault — benefits significantly from attorney representation. An attorney can evaluate defenses you may not know about, negotiate with the prosecutor before your court date, and pursue dismissal or diversion options that are not available to unrepresented defendants. Call Jwayyed Law LLC at (614) 285-5482 before your ${suburb} Mayor's Court date.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`${suburb} Mayor's Court Attorney — Franklin County, Ohio`}
        description={`Facing charges in ${suburb} Mayor's Court? Jwayyed Law LLC provides experienced criminal and traffic defense in ${suburb} Mayor's Court. Call (614) 285-5482.`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              {suburb} Mayor&apos;s Court — What You Need to Know
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} Mayor&apos;s Court handles the initial processing of most misdemeanor criminal charges and traffic violations arising within {suburb} city limits — including OVI, speeding, disorderly conduct, open container, petty theft, and a range of other offenses that residents and visitors to {suburb} may face. The court meets{' '}
              <strong>{schedule}</strong> at{' '}
              <strong>{address}</strong>, reachable at {phone}. For {suburb} residents facing any criminal or traffic charge, the mayor&apos;s court is often the first and most important stop — and the decisions made there, including whether to enter a plea and what kind, can determine whether you end up with a permanent criminal record. Jwayyed Law LLC provides experienced defense representation in {suburb} Mayor&apos;s Court and, when cases transfer, at Franklin County Municipal Court. Call{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              before your court date — not after.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} is a Franklin County community of approximately {population2020.toLocaleString()} residents. The <strong>{policeAgency}</strong> makes most of the arrests and issues most of the citations that flow into {suburb} Mayor&apos;s Court. Traffic stops on {keyRoads[0]} and other primary corridors through {suburb} account for a significant portion of the court&apos;s caseload — OVI stops, speeding citations, open container discoveries, and other traffic-related criminal charges. Understanding how the mayor&apos;s court process works and when a case should be contested versus resolved by plea is knowledge that an attorney brings to every appearance.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Is a Mayor&apos;s Court Under Ohio Law?
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Mayor&apos;s courts are a uniquely Ohio institution authorized by Ohio Revised Code 1905.01. They are established by Ohio municipalities to handle minor criminal and traffic matters arising within the city limits, without requiring a full-time municipal court. Unlike a county or municipal court, a mayor&apos;s court is presided over by the mayor of the municipality (or a magistrate appointed by the mayor) rather than by a licensed attorney or judge. The mayor&apos;s court does not conduct jury trials — it has jurisdiction to accept pleas, impose fines, and sentence defendants, but any defendant who demands a jury trial has that case transferred to Franklin County Municipal Court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Mayor&apos;s courts have jurisdiction over minor misdemeanor, M4, M3, M2, and M1 criminal charges arising in the municipality, as well as traffic violations under Ohio&apos;s motor vehicle laws. They do not have jurisdiction over felony charges — felony arraignments are conducted in Franklin County Municipal Court. For OVI specifically, {suburb} Mayor&apos;s Court can handle the underlying criminal OVI charge, but the Administrative License Suspension (ALS) appeal must be filed separately in Franklin County Municipal Court within 30 days of arrest.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The {suburb} Mayor&apos;s Court Process
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When the {policeAgency} cites or arrests a person for a mayor&apos;s court offense in {suburb}, the defendant receives a citation or summons to appear at {suburb} Mayor&apos;s Court at {address} on a scheduled date. The court meets {schedule}. At the first appearance (arraignment), the defendant is informed of the charges, their rights, and asked to enter a plea. The most common options are: not guilty (continuing the case to a later date); guilty (convicted immediately, sentenced that day or at a later date); or no contest (not admitting guilt but not disputing the evidence — treated the same as a guilty plea for conviction purposes).
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An attorney appearing at arraignment can often enter a not guilty plea, request discovery of all police evidence, and negotiate with the prosecutor before any subsequent hearing. In many first-offense minor misdemeanor and M4 cases, pretrial negotiations result in dismissal, diversion, or charge reduction without requiring a trial. Having an attorney present at arraignment — or, better, before arraignment — is the most impactful single step you can take. Our firm appears at {suburb} Mayor&apos;s Court on behalf of clients, often allowing clients to avoid a personal court appearance for minor matters.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              When Cases Transfer From {suburb} Mayor&apos;s Court to Franklin County Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Several circumstances require transfer of a {suburb} Mayor&apos;s Court case to Franklin County Municipal Court at {FCMC.address} ({FCMC.floors}): (1) the defendant demands a jury trial, which the mayor&apos;s court cannot conduct; (2) the charge is a felony (arraignments and all proceedings for felony charges must occur in Franklin County Municipal Court); (3) the case involves an OVI with an ALS appeal (filed in Franklin County Municipal Court regardless of where the criminal case is pending); (4) the mayor&apos;s court otherwise lacks jurisdiction; or (5) the mayor&apos;s court and prosecutor agree to transfer for administrative convenience. Our firm handles cases at both levels and coordinates representation so you have continuity regardless of which court is handling your matter.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Charges Heard in {suburb} Mayor&apos;s Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} Mayor&apos;s Court regularly handles: OVI/DUI charges under R.C. 4511.19 (first appearances only — ALS appeals go to Franklin County Municipal Court); speeding and traffic violations; disorderly conduct under R.C. 2917.11; open container under R.C. 4301.62; petty theft and shoplifting under R.C. 2913.02 (misdemeanor level); minor drug possession citations (minor misdemeanor marijuana under adult-use amounts); driving under suspension; failure to control; marked lanes violations; and other misdemeanor charges under Ohio&apos;s criminal code or {suburb}&apos;s municipal ordinances. Each type of charge has its own procedural context and potential defenses — our firm prepares specifically for the charge you face, not generically.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help at {suburb} Mayor&apos;s Court
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Arraignment representation:</strong> Appearing at your first {suburb} Mayor&apos;s Court date to enter a not guilty plea and obtain discovery</li>
              <li><strong>Pre-trial negotiation:</strong> Discussing the case with the prosecutor before any hearing to evaluate diversion, dismissal, or charge reduction</li>
              <li><strong>OVI defense:</strong> Defending the underlying criminal OVI at mayor&apos;s court level and simultaneously filing the ALS appeal at Franklin County Municipal Court</li>
              <li><strong>Traffic defense:</strong> Challenging speeding citations, failure to control, and other traffic matters that affect your driving record and insurance rates</li>
              <li><strong>Transfer coordination:</strong> Handling seamless representation if your case transfers to Franklin County Municipal Court</li>
              <li><strong>Record protection:</strong> Evaluating diversion and expungement eligibility to minimize the long-term impact on your criminal record</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a citation or summons for {suburb} Mayor&apos;s Court, contact Jwayyed Law LLC at{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              Our firm handles mayor&apos;s court appearances throughout Franklin County — often without requiring your personal appearance for minor matters.
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
