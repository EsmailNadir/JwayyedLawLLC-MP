import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { getSuburb, FCMC, DRUG_POSSESSION, MISDEMEANOR_SENTENCING, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';

interface Props {
  suburb: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function DrugPossessionTemplate({ suburb }: Props) {
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
    { label: `Drug Possession Defense — ${suburb}`, href: `/locations/franklin-county/drug-possession-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `Is marijuana possession still illegal in ${suburb}, Ohio?`,
      answer: `Ohio's adult-use marijuana law (Issue 2, effective December 7, 2023, with implementing legislation under HB 86) allows adults 21 and older to legally possess up to 2.5 ounces of marijuana and up to 15 grams of marijuana concentrate. Home cultivation of up to 6 plants is also legal. Possession within these limits is not a criminal offense. However, possession above 2.5 oz (but below the bulk threshold of 200g) remains a minor misdemeanor. Possession of 200g or more is a fourth-degree misdemeanor, escalating to felony levels at higher quantities. Possession by persons under 21 remains illegal.`,
    },
    {
      question: `What are the penalties for drug possession in ${suburb}?`,
      answer: `Drug possession penalties in Ohio depend on the type and quantity of the controlled substance under R.C. 2925.11. Possession of most Schedule I and II controlled substances (cocaine, heroin, methamphetamine) begins as a fifth-degree felony and escalates with quantity. Marijuana possession above the adult-use legal limit (70.87g–99g) is a minor misdemeanor (no jail, up to $150 fine); possession of 100g–199g is an M4 (up to ${MISDEMEANOR_SENTENCING.M4.maxJail} jail, ${MISDEMEANOR_SENTENCING.M4.maxFine} fine); possession of 200g or more (bulk amount) is aggravated possession — a fifth-degree felony. Drug paraphernalia under R.C. 2925.14 is an M4 on a first offense. Charges from ${suburb} are heard in ${courtName}.`,
    },
    {
      question: `Where is a drug possession case from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `Drug possession charges from ${suburb} depend on the severity. Minor misdemeanor marijuana possession (2.5–10 oz) is handled in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}, meeting ${courtSchedule}. More serious drug possession charges — M4 marijuana, or any felony drug possession — transfer to Franklin County Municipal Court at ${FCMC.address} for arraignment, and felony matters are bound over to Franklin County Court of Common Pleas.`
        : `${mayorsCourt.note} Drug possession charges from ${suburb} are processed directly in Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. Felony drug possession is bound over to Franklin County Court of Common Pleas.`,
    },
    {
      question: `What is Intervention in Lieu of Conviction (ILC) in Franklin County?`,
      answer: `Ohio's Intervention in Lieu of Conviction program (ORC 2951.041) allows eligible defendants charged with drug possession or offenses related to substance abuse to complete treatment in lieu of conviction. Successful ILC completion results in full dismissal of the charges — no conviction, no record. Franklin County Municipal Court has discretion to grant ILC for eligible first-time offenders. Our firm evaluates ILC eligibility and advocates for placement where appropriate, because a dismissal under ILC is far better than any conviction.`,
    },
    {
      question: `Can the evidence be suppressed in a drug possession case in ${suburb}?`,
      answer: `Yes. Many drug possession cases turn entirely on the legality of the search or stop that produced the evidence. If the ${policeAgency} conducted an unlawful traffic stop, performed a warrantless search without valid consent or exigent circumstances, or exceeded the scope of a valid search warrant, the evidence may be suppressible under the Fourth Amendment. Without the drugs in evidence, the prosecution often cannot proceed. Our firm scrutinizes the stop, the search, and the chain of custody of every drug possession case before making any recommendation about plea or trial.`,
    },
    {
      question: `Can a drug possession charge in ${suburb} be expunged?`,
      answer: `Most drug possession convictions — including felony drug possession of the third, fourth, or fifth degree — are eligible for expungement under ORC 2953.32 after applicable waiting periods (${EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5} for M1/F4/F5; ${EXPUNGEMENT.waitingPeriods.felonyThirdDegree} for F3). The expanded eligibility enacted under HB 96 (effective September 30, 2025) broadened the categories of offenses that can be sealed. Our firm advises on expungement eligibility from day one so that plea strategy accounts for the long-term record impact.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for a drug possession charge in ${suburb}?`,
      answer: `Jwayyed Law LLC provides experienced drug possession defense throughout Franklin County, including ${suburb}. Drug cases often present strong suppression arguments based on the legality of the stop or search, and diversion and ILC options exist for many first-time defendants. A conviction — particularly a felony drug conviction — has long-term consequences for employment, housing, and professional licensing. Our firm evaluates every available option and fights for the outcome that best protects your future. Call (614) 285-5482 to discuss your ${suburb} drug possession case.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((f: { question: string; answer: string }) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map(
      (item: { label: string; href: string }, idx: number) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.label,
        'item': `https://www.jjlawohio.com${item.href}`,
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Drug Possession Defense Attorney in ${suburb}, Ohio`}
        description={`Facing drug possession charges in ${suburb}? Jwayyed Law LLC defends clients in ${courtName} and throughout Franklin County. Call (614) 285-5482.`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Drug Possession Defense in {suburb}, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Drug possession charges in {suburb} range from a minor misdemeanor marijuana citation — carrying no jail time and a $150 maximum fine — to serious felony charges for possession of heroin, cocaine, fentanyl, or methamphetamine that can result in prison time and lasting career consequences. Ohio&apos;s 2023 adult-use marijuana law changed the landscape for cannabis possession, but it did not eliminate drug possession as a criminal matter, and possession of controlled substances other than marijuana in amounts above legal limits remains prosecutable. The{' '}
              <strong>{policeAgency}</strong> enforces Ohio drug laws vigorously, and traffic stops on {keyRoads[0]} and elsewhere in {suburb} regularly produce drug possession charges when officers conduct searches incident to arrest or with claimed consent. Jwayyed Law LLC provides experienced{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link>{' '}
              for drug possession charges throughout Franklin County, including {suburb}. Call{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              to discuss your situation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} is a Franklin County community of approximately {population2020.toLocaleString()} residents. Drug possession cases here arise in a variety of settings: traffic stops on {keyRoads[0]}, searches of persons following an unrelated arrest, and in some cases searches of homes or vehicles pursuant to warrants. Each of these entry points presents different legal challenges and opportunities. Our firm begins every drug case by examining the origin of the search or seizure, because a successfully suppressed search often results in dismissal of the entire case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio&apos;s Adult-Use Marijuana Framework — What Is and Is Not Legal in {suburb}
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Issue 2, effective December 7, 2023, and implemented through House Bill 86, established a legal adult-use marijuana framework. Adults 21 and older may now legally possess up to <strong>2.5 ounces</strong> of usable marijuana and up to <strong>15 grams</strong> of marijuana concentrate without criminal liability. Home cultivation of up to <strong>6 marijuana plants</strong> per adult is also permitted. These amounts are not criminal and are not subject to prosecution. Officers in {suburb} are no longer permitted to treat possession within these limits as a criminal matter.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              However, the legal framework does not make all marijuana possession legal. Possession above 2.5 oz (70.87 grams) up to 100 grams remains a minor misdemeanor — no jail, maximum $150 fine. Possession of 100–199 grams is a fourth-degree misdemeanor (up to 30 days jail, $250 fine). Possession of 200 grams or more reaches the bulk amount threshold and becomes aggravated possession — a fifth-degree felony carrying up to 12 months in prison and a $2,500 fine. Possession of 1,000–4,999 grams is an F3 felony; 5,000–19,999 grams is an F2; 20,000 grams or more is an F1. Persons under 21 are not covered by the adult-use framework and face the standard criminal possession laws. Consumption in public spaces, motor vehicles, or near schools is prohibited and subject to civil penalties.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Controlled Substance Possession — Penalties Under R.C. 2925.11
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Possession of controlled substances other than marijuana — including cocaine, heroin, fentanyl, methamphetamine, and prescription drugs without a valid prescription — is governed by R.C. 2925.11 and carries felony penalties in most cases. The base offense for possession of cocaine, heroin, or methamphetamine in any amount is a fifth-degree felony (up to 12 months in prison, $2,500 fine). The charge escalates with the quantity of the substance: possession of bulk cocaine is F4; bulk heroin is F4; higher quantities escalate to F3, F2, and F1 felonies. Drug paraphernalia possession under R.C. 2925.14 is a fourth-degree misdemeanor on a first offense (up to {MISDEMEANOR_SENTENCING.M4.maxJail} jail, {MISDEMEANOR_SENTENCING.M4.maxFine} fine), escalating to M2 on a second offense.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Where Your {suburb} Drug Possession Case Is Heard
            </h3>
            {hasMayorsCourt ? (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                Minor misdemeanor marijuana possession citations from {suburb} may be handled in <strong>{suburb} Mayor&apos;s Court</strong> at {courtAddress}, {courtPhone} ({courtSchedule}). More serious misdemeanor drug charges and all felony drug possession matters transfer to Franklin County Municipal Court at {FCMC.address} for arraignment, and felonies are then bound over to Franklin County Court of Common Pleas. Franklin County Municipal Court also operates the HART Court (recovery docket for opioid-involved defendants) and offers ILC (Intervention in Lieu of Conviction) for eligible first-time drug defendants.
              </p>
            ) : (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                {mayorsCourt.note} Drug possession charges from {suburb} are processed directly in <strong>Franklin County Municipal Court</strong> at {FCMC.address} ({FCMC.floors}), {FCMC.clerkPhone}. Felony drug possession is bound over to Franklin County Court of Common Pleas. Franklin County Municipal Court operates the HART Court recovery docket for eligible opioid-involved defendants and offers ILC for first-time drug defendants.
              </p>
            )}

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies — Suppression and Diversion
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Drug possession cases present two major categories of defense. The first is constitutional — challenging the stop, search, or seizure that produced the evidence. If the {policeAgency} stopped a vehicle without reasonable suspicion of a traffic violation, searched without valid consent, or exceeded the scope of a warrant, a motion to suppress under the Fourth Amendment may exclude all drug evidence. Without the drugs, the prosecution has no case. Our firm reviews every traffic stop for articulated probable cause, every consent search for voluntariness, and every warrant for particularity and probable cause support.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The second category is diversion. Ohio&apos;s Intervention in Lieu of Conviction program (ORC 2951.041) allows eligible first-time defendants charged with drug possession to complete substance abuse treatment instead of being convicted. Successful ILC completion results in dismissal of all charges — no conviction, no record of guilt. Franklin County Municipal Court&apos;s HART Court (for opioid-involved defendants) provides a similar structured treatment path. Our firm evaluates ILC eligibility at the outset of every drug case and, where the defendant qualifies, advocates strongly for placement. A dismissal through ILC is always superior to any plea — even a plea to a reduced charge.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Suppression motions:</strong> Challenging the stop, search, or seizure that produced the drug evidence under the Fourth Amendment</li>
              <li><strong>ILC and diversion:</strong> Pursuing Intervention in Lieu of Conviction or HART Court placement for eligible first-time defendants</li>
              <li><strong>Marijuana law analysis:</strong> Confirming whether your possession was within Ohio&apos;s adult-use legal limits before any plea is entered</li>
              <li><strong>Quantity challenges:</strong> Contesting the lab-reported weight used to determine the degree of the offense</li>
              <li><strong>Chain-of-custody review:</strong> Scrutinizing laboratory procedures and handling of physical evidence</li>
              <li><strong>Expungement planning:</strong> Advising on long-term record-sealing eligibility under ORC 2953.32 from the start</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing drug possession charges in {suburb} or elsewhere in Franklin County, contact Jwayyed Law LLC at{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              Drug cases move through the Franklin County system quickly, and early intervention — before a plea is entered — is when your options are widest.
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
