import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { getSuburb, FCMC, OPEN_CONTAINER, MISDEMEANOR_SENTENCING, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';

interface Props {
  suburb: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function OpenContainerTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, population2020 } = suburbData;
  const hasMayorsCourt = mayorsCourt.active;
  const courtName = hasMayorsCourt ? `${suburb} Mayor's Court` : FCMC.name;
  const courtAddress = hasMayorsCourt ? mayorsCourt.address! : FCMC.address;
  const courtPhone = hasMayorsCourt ? mayorsCourt.phone! : FCMC.clerkPhone;
  const courtSchedule = hasMayorsCourt ? mayorsCourt.schedule : null;
  const slug = slugify(suburb);

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `Open Container Defense — ${suburb}`, href: `/locations/franklin-county/open-container-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is the open container law in Ohio?`,
      answer: `Ohio Revised Code 4301.62 prohibits possessing an open container of beer or intoxicating liquor in an agency store, on the premises of a liquor permit holder for consumption off-premises, in a public place, or in a motor vehicle on a public road, street, or highway. A violation is a minor misdemeanor under R.C. 4301.99(A), carrying no jail time and a maximum $150 fine. The most common citation is open container in a vehicle — which applies to the driver and all passengers.`,
    },
    {
      question: `Where is an open container charge from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `Open container citations from ${suburb} are handled in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}. The court meets ${courtSchedule}. Minor misdemeanor open container cases can be fully resolved at the mayor's court level.`
        : `${mayorsCourt.note} Open container charges from ${suburb} are processed in Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. Minor misdemeanor matters are resolved there without needing transfer.`,
    },
    {
      question: `Does an open container conviction appear on a background check?`,
      answer: `Yes. Even a minor misdemeanor conviction — including an open container citation — creates a public criminal record in Ohio that is accessible through background checks. For most purposes an open container conviction is a low-severity entry, but it can appear on employment applications, tenant screening reports, and professional licensing reviews. Our firm evaluates whether the charge can be dismissed, diverted, or otherwise avoided before any plea is entered.`,
    },
    {
      question: `Can an open container conviction in ${suburb} be expunged?`,
      answer: `Most minor misdemeanor convictions, including open container violations under R.C. 4301.62, are eligible for expungement under Ohio Revised Code 2953.32 after a waiting period of ${EXPUNGEMENT.waitingPeriods.minorMisdemeanor} from final discharge. However, open container violations that arise in the context of a traffic stop — and are thus classified as traffic violations under chapters 4506–4511 — may be ineligible for expungement. The specific classification of the charge determines eligibility. Our firm evaluates expungement eligibility on a case-by-case basis.`,
    },
    {
      question: `What are the exceptions to Ohio's open container law?`,
      answer: `R.C. 4301.62 provides several exceptions. Passengers in chauffeured limousines may possess and consume alcohol in the rear passenger compartment. Passengers on licensed commercial quadricycles may consume up to 36 oz of beer or 18 oz of wine. In designated outdoor refreshment areas (ORAs) authorized by a municipality, open containers are permitted within the zone. Wine bottles resealed pursuant to R.C. 4301.62(B)(5) before leaving a licensed premises are also exempt. These exceptions are narrowly defined, and attempting to rely on an exception that does not apply can complicate a defense.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for an open container charge in ${suburb}?`,
      answer: `Jwayyed Law LLC handles open container defense throughout Franklin County, including ${suburb}. While these charges are minor misdemeanors, a conviction creates a criminal record. Many open container cases resolve without a conviction through diversion, dismissal on technical grounds, or informal agreement with the prosecutor. Our firm appears in ${courtName} and Franklin County Municipal Court and handles these matters efficiently. Call (614) 285-5482 to discuss your options.`,
    },
  ];


  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Open Container Defense Attorney in ${suburb}, Ohio`}
        description={`Open container charge in ${suburb}? Jwayyed Law LLC handles minor misdemeanor defense in ${courtName} and throughout Franklin County. Call (614) 285-5482.`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Open Container Defense in {suburb}, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An open container citation in {suburb} may seem like a minor inconvenience — a $150 fine, a quick court date, done. But it is not that simple. Under Ohio law, an open container violation under R.C. 4301.62 is a minor misdemeanor and creates a permanent public criminal record. That record appears on background checks used by employers, landlords, and professional licensing boards. For a first-time defendant with no prior record, an open container conviction is often avoidable with the right representation — many of these cases can be diverted or resolved without a conviction. Jwayyed Law LLC handles open container defense throughout Franklin County, appearing in{' '}
              {courtName} and Franklin County Municipal Court. Call{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              to discuss your situation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} is a Franklin County community of approximately {population2020.toLocaleString()} residents. Open container citations in the area are most commonly issued during traffic stops on {keyRoads[0]} and surrounding roads by the <strong>{policeAgency}</strong>, and during enforcement actions at community events and near {suburb}&apos;s commercial areas. In a vehicle stop context, open container citations are often issued alongside OVI or other traffic charges — and the open container charge is sometimes the least serious item on a citation that needs coordinated defense.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio Open Container Law — R.C. 4301.62
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 4301.62 prohibits possessing an open container of beer or intoxicating liquor in four locations: (1) an agency store; (2) on the premises of a liquor permit holder for off-premises consumption; (3) in a public place; or (4) in a motor vehicle on a public road, street, or highway open to public traffic. A violation is a minor misdemeanor under R.C. 4301.99(A) — no jail time is permitted, and the maximum fine is $150. The statute applies to all persons in possession of the open container, meaning both the driver and passengers in a vehicle can receive citations from a single open container found in the vehicle.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An &ldquo;open container&rdquo; under Ohio law means any bottle, can, or other receptacle that contains any amount of beer or intoxicating liquor and that (a) is open or (b) has a broken seal, or (c) the contents of which have been partially removed. A sealed, unopened bottle is not an open container. A closed bottle with an intact seal is not an open container — regardless of the quantity of alcohol it contains. These definitional distinctions matter in cases where the nature of the container is disputed.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              In-Vehicle Open Container Citations in {suburb}
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The most frequently issued open container citation in {suburb} is for an open container in a motor vehicle during a traffic stop. When the {policeAgency} conducts a traffic stop and observes — or claims to observe — an open container anywhere inside the vehicle (other than a locked glove compartment or locked trunk), any occupant in whose possession the container can be attributed may be cited. In practice, if the container is loose in the passenger compartment, all occupants may be cited, and the prosecutor must determine which individual possessed it.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Open container citations in this context are sometimes issued improperly — for a container in the trunk, for a sealed bottle, for a container not actually reachable by occupants, or for a vehicle on private property. Our firm reviews the police report and all available footage before evaluating the charge. In cases where the stop itself was invalid — where the officer lacked reasonable suspicion for the traffic stop — the open container citation may be suppressible as fruit of an unlawful stop.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Where Your {suburb} Open Container Case Is Heard
            </h3>
            {hasMayorsCourt ? (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                Open container citations issued in {suburb} are handled in <strong>{suburb} Mayor&apos;s Court</strong> at {courtAddress}, {courtPhone}. The court meets {courtSchedule}. Minor misdemeanor open container matters can be fully resolved at the mayor&apos;s court level — from citation through plea and payment of any fine. Our firm appears at {suburb} Mayor&apos;s Court and can handle the matter without you needing to take time off work for a court appearance in most cases.
              </p>
            ) : (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                {mayorsCourt.note} Open container charges from {suburb} are processed in <strong>Franklin County Municipal Court</strong> at {FCMC.address} ({FCMC.floors}), {FCMC.clerkPhone}. Minor misdemeanor matters are resolved there. Our firm appears regularly at Franklin County Municipal Court and is familiar with its procedures.
              </p>
            )}

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Exceptions to Ohio&apos;s Open Container Law
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              R.C. 4301.62 carves out several specific exceptions. Passengers traveling in a chauffeured limousine may possess and consume alcohol in the rear passenger compartment. Passengers riding on a licensed commercial quadricycle — a pedal-powered vehicle served by a licensed operator — may consume up to 36 ounces of beer or 18 ounces of wine during the ride. Where a municipality has designated an outdoor refreshment area (ORA) under R.C. 4301.821, open containers of alcohol are permitted within that zone during operating hours. And a wine bottle from which not all contents have been consumed at a licensed restaurant or retailer may be resealed and transported, provided it is in a location in the vehicle not accessible to the driver.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              These exceptions are narrowly defined by statute. An officer who cites a passenger in a rideshare vehicle, a tourist who purchases a carry-out cup in a permitted area, or a driver transporting a resealed bottle in a properly secured location is often acting on a misapplication of the statute. Our firm reviews whether any recognized exception applies before evaluating any defense strategy in {suburb} open container cases.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              What an Open Container Conviction Actually Costs You
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The $150 fine is the smallest part of the cost. An open container conviction under R.C. 4301.62 is a criminal misdemeanor and creates a permanent public record in Ohio that appears on background checks used by employers, landlords, and professional licensing boards. For individuals working in or pursuing careers in healthcare, education, social services, law enforcement, or any state-licensed profession, even a low-level misdemeanor conviction can trigger adverse licensing decisions or delayed credentialing. For CDL holders, any misdemeanor conviction connected to a traffic stop will appear on the commercial driver record reviewed by employers and the FMCSA Drug and Alcohol Clearinghouse.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For most open container charges in {suburb}, the factual dispute is limited — the officer observed the container, the client was present in the vehicle, and the charge is straightforward on its face. What makes the difference in those cases is not the facts but how the case is resolved. An attorney who appears in {courtName} and negotiates directly with the prosecutor can often secure a conditional dismissal or diversion outcome that closes the case without a conviction. That is the difference between a record that follows you and a charge that simply disappears. Our firm pursues that outcome in every first-offense open container case where the facts and the client&apos;s background support it.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Options — Avoiding a Conviction
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For a first-time open container citation in {suburb}, an attorney can often negotiate a conditional dismissal or diversion agreement that avoids a conviction entirely. Typical conditions include a nominal community service requirement, no new arrests during a short probationary period, and payment of court costs. Successful completion results in dismissal of the charge. Our firm pursues this outcome in every appropriate first-offense case because even the minor impact of a $150 fine is not worth the permanent criminal record that a guilty plea creates.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For cases where the evidence itself is contestable — a disputed container, a questionable stop, or an improper attribution of possession among multiple vehicle occupants — our firm evaluates the charge on its merits and advises whether a factual defense is available. In some cases, the prosecution cannot establish beyond a reasonable doubt that the specific defendant possessed the container as required by the statute.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Diversion and dismissal:</strong> Pursuing conditional dismissal for first-time defendants to avoid a permanent conviction</li>
              <li><strong>Stop validity review:</strong> Evaluating whether the underlying traffic stop was lawfully conducted</li>
              <li><strong>Possession challenge:</strong> Contesting attribution of the container to a specific defendant where multiple occupants were present</li>
              <li><strong>Definition challenge:</strong> Verifying that the container actually met the statutory definition of &ldquo;open container&rdquo;</li>
              <li><strong>Expungement planning:</strong> Advising on R.C. 2953.32 eligibility for any conviction that results</li>
              <li><strong>Companion charge defense:</strong> Coordinating open container defense with any accompanying OVI, drug possession, or other charges from the same stop</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have received an open container citation in {suburb} or anywhere in Franklin County, contact Jwayyed Law LLC at{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              These charges are handled efficiently and, in most first-offense cases, can be resolved without a conviction.
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
