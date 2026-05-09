import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { getSuburb, FCMC, THEFT_DEGREES, MISDEMEANOR_SENTENCING, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';

interface Props {
  suburb: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function TheftTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, population2020 } = suburbData;
  const hasMayorsCourt = mayorsCourt.active;
  const courtName = hasMayorsCourt ? `${suburb} Mayor's Court` : FCMC.name;
  const courtAddress = hasMayorsCourt ? mayorsCourt.address! : FCMC.address;
  const courtPhone = hasMayorsCourt ? mayorsCourt.phone! : FCMC.clerkPhone;
  const courtSchedule = hasMayorsCourt ? mayorsCourt.schedule : null;

  const pettyTheft = THEFT_DEGREES[0];
  const slug = slugify(suburb);

  const breadcrumbItems = [
    { label: 'Courts', href: '/courts' },
    { label: 'Franklin County', href: '/courts/franklin-county' },
    { label: `Theft Defense — ${suburb}`, href: `/locations/franklin-county/theft-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is the penalty for theft and shoplifting in ${suburb}, Ohio?`,
      answer: `Under Ohio Revised Code 2913.02, theft of property valued under $1,000 is petty theft — a first-degree misdemeanor carrying up to ${pettyTheft.maxJail} in jail and a ${pettyTheft.maxFine} fine. Theft of $1,000–$7,499 escalates to a fifth-degree felony (up to 12 months prison, $2,500 fine). Amounts above $7,500 escalate further through fourth, third, second, and first-degree felonies. Shoplifting charges in ${suburb} retail stores are most commonly charged as petty theft misdemeanors. The degree is determined by the value of the item at the time of the offense.`,
    },
    {
      question: `Where is a theft or shoplifting case from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `Misdemeanor theft and shoplifting charges arising in ${suburb} are initially heard in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}. The court meets ${courtSchedule}. Felony theft charges (property valued $1,000 or more) are bound over to Franklin County Court of Common Pleas after arraignment. If a misdemeanor theft cannot be resolved at mayor's court, it may also be transferred to Franklin County Municipal Court at ${FCMC.address}.`
        : `${mayorsCourt.note} Theft and shoplifting charges from ${suburb} are handled directly by Franklin County Municipal Court at ${FCMC.address}, ${FCMC.clerkPhone}. Felony theft matters are bound over to Franklin County Court of Common Pleas.`,
    },
    {
      question: `Does a theft conviction show up on a background check?`,
      answer: `Yes. A theft or shoplifting conviction in Ohio — even a first-degree misdemeanor — creates a permanent public criminal record accessible to employers, landlords, and professional licensing boards. Background checks routinely flag theft convictions, and many employers automatically disqualify applicants with theft records. This is why an aggressive early defense is critical: a dismissal, a diversion, or even a reduction to a lesser charge can make a substantial difference in your employment and housing prospects. An attorney can evaluate whether you qualify for a first-offender diversion program in ${suburb}.`,
    },
    {
      question: `Can a theft charge in ${suburb} be reduced or dismissed?`,
      answer: `Many first-time theft and shoplifting cases in Franklin County resolve through diversion programs, community service agreements, or plea negotiations that avoid a conviction. The Franklin County prosecutor's office and some mayor's courts in the county offer first-offender programs for eligible defendants — typically those with no prior theft record, small-value offenses, and restitution paid. Our firm evaluates every available avenue before accepting any plea offer and pushes for outcomes that protect your record.`,
    },
    {
      question: `Is a theft conviction in ${suburb} eligible for expungement?`,
      answer: `Misdemeanor theft convictions may be eligible for expungement under Ohio Revised Code 2953.32 after a waiting period of ${EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5} from final discharge — provided you meet all other eligibility criteria. Felony theft convictions of the third, fourth, or fifth degree may also be eligible after longer waiting periods. Some offenses and defendants with multiple prior convictions may not qualify. Our firm evaluates expungement eligibility and handles the petition process in Franklin County.`,
    },
    {
      question: `What defenses apply to theft charges in ${suburb}?`,
      answer: `Common theft defenses in ${suburb} and Franklin County include: challenging whether the defendant had the intent to permanently deprive the owner of the property (an element of R.C. 2913.02); challenging the valuation of the property used to determine the degree of offense; challenging identification where store surveillance is unclear; examining whether a civil demand settlement affects the prosecution; and evaluating whether the arrest or search violated Fourth Amendment rights. Our firm obtains all surveillance footage, police reports, and loss prevention documentation before advising on any strategy.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for a theft charge in ${suburb}?`,
      answer: `Jwayyed Law LLC provides experienced theft and shoplifting defense throughout Franklin County, including ${suburb}. A theft conviction has consequences far beyond the courtroom — it follows you into employment applications, housing searches, and professional licensing reviews. Our firm understands the difference between a case that can be dismissed, diverted, or reduced — and one that must be tried. We act quickly to preserve evidence, evaluate your options, and advocate for the outcome that best protects your future. Call (614) 285-5482 to discuss your ${suburb} theft case.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Theft Defense Attorney in ${suburb}, Ohio`}
        description={`Facing theft or shoplifting charges in ${suburb}? Jwayyed Law LLC defends clients in ${courtName} and Franklin County Municipal Court. Call (614) 285-5482.`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Theft and Shoplifting Defense in {suburb}, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A theft or shoplifting arrest in {suburb} can be one of the most disorienting experiences of a person&apos;s life — particularly for someone with no prior criminal history. Ohio Revised Code 2913.02 defines theft broadly, covering shoplifting from retail stores, taking property without consent, and obtaining property by deception or threat. Even a first-offense petty theft charge — a first-degree misdemeanor for items valued under $1,000 — creates a permanent criminal record that shows up on background checks used by employers, landlords, and professional licensing boards. Jwayyed Law LLC provides experienced{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link>{' '}
              for theft and shoplifting charges throughout Franklin County, including {suburb}. Call{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              to discuss your case.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} is a Franklin County community of approximately {population2020.toLocaleString()} residents. Retail businesses along {keyRoads[0]} and nearby commercial areas generate a significant number of theft and shoplifting complaints handled by the{' '}
              <strong>{policeAgency}</strong>. Loss prevention officers at major retailers have the authority to detain shoplifting suspects and call police, and the resulting charges are prosecuted seriously — even for first-time offenders. Our firm handles these cases at every stage, from early negotiations with the prosecutor to trial if necessary.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Theft Charges Under Ohio Revised Code 2913.02
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio theft law divides charges by the value of the property taken. Petty theft — property valued under $1,000 — is a first-degree misdemeanor carrying up to{' '}
              <strong>{pettyTheft.maxJail}</strong> in jail and a <strong>{pettyTheft.maxFine}</strong> fine. This is the most common theft charge for shoplifting in {suburb} retail stores. Once the value of property reaches $1,000, the charge becomes a fifth-degree felony (up to 12 months in prison and a $2,500 fine) — and it escalates further as the value increases: F4 for $7,500–$149,999; F3 for $150,000–$749,999; F2 and F1 for higher amounts. Some specific types of property — firearms, motor vehicles, credit cards, and property taken from elderly or disabled persons — trigger enhanced charges regardless of dollar value.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The critical element of theft under R.C. 2913.02 is intent: the prosecution must prove that the defendant purposely deprived the owner of property without consent or by deception, threat, or intimidation. Accidentally walking out of a store with merchandise, good-faith payment disputes, and mistaken belief of ownership are all situations that may defeat the intent element. Our firm scrutinizes the prosecution&apos;s evidence — surveillance footage, loss prevention reports, witness statements, and receipt records — to identify weaknesses in the state&apos;s case before evaluating any plea.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Where Your {suburb} Theft Case Is Heard
            </h3>
            {hasMayorsCourt ? (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                Misdemeanor theft and shoplifting charges from {suburb} are initially processed in <strong>{suburb} Mayor&apos;s Court</strong> at {courtAddress}, {courtPhone}. The court meets {courtSchedule}. Mayor&apos;s courts can accept pleas and impose sentences on minor misdemeanor and first-degree misdemeanor theft charges. Felony theft charges — any amount of $1,000 or more — must be transferred to Franklin County Municipal Court at {FCMC.address} for arraignment and then bound over to Franklin County Court of Common Pleas for trial. An attorney who knows both courts can appear at each stage without you needing separate representation.
              </p>
            ) : (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                {mayorsCourt.note} Theft and shoplifting charges from {suburb} are processed directly in <strong>Franklin County Municipal Court</strong> at {FCMC.address} ({FCMC.floors}), {FCMC.clerkPhone}. Misdemeanor theft cases are resolved there, while felony theft matters are bound over to Franklin County Court of Common Pleas after arraignment. Our firm appears regularly at Franklin County Municipal Court and understands the court&apos;s docket procedures and the prosecutors who handle theft cases.
              </p>
            )}

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              First-Offender Diversion and Plea Options
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Many first-time theft defendants in Franklin County — particularly for low-value shoplifting charges — qualify for diversion programs or conditional dismissal agreements. These programs typically require restitution, a brief community service commitment, and no new arrests during a probationary period. Successful completion results in dismissal of the charge, leaving no conviction on the record. Our firm evaluates diversion eligibility for every new client and, where available, pursues this path aggressively — because a dismissed charge is far better than any conviction, regardless of how minor it appears.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Where diversion is not available — for defendants with prior theft records or higher-value charges — our firm pursues charge reductions (from M1 to M2, or from felony to misdemeanor where the evidence supports challenging the valuation) and negotiates plea agreements that minimize the conviction&apos;s impact on employment and professional licensing. Some theft convictions are eligible for expungement under ORC 2953.32 after applicable waiting periods, which we evaluate at the outset of every case to inform the plea strategy.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Collateral Consequences of a Theft Conviction in {suburb}
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A theft conviction — even a misdemeanor — has consequences that reach well beyond the courtroom. Employers routinely run criminal background checks, and theft convictions carry a particular stigma in jobs that involve financial responsibility, access to property, or customer trust. Retail, healthcare, finance, education, and government positions are all fields where a theft conviction on record creates a significant employment obstacle. For {suburb} residents currently employed in any of these fields, a conviction can cost not just future job opportunities but existing employment.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Professional licensing boards — including Ohio boards governing nursing, real estate, cosmetology, contracting, and securities — require disclosure of criminal convictions and may deny, suspend, or revoke licenses based on theft offenses. Felony theft convictions additionally affect federal rights: a convicted felon cannot possess firearms under federal law. For non-citizens, even a misdemeanor theft conviction can trigger immigration consequences including removal proceedings. Our firm considers all of these downstream consequences when advising on whether to fight a charge, accept a plea, or pursue diversion — because the best outcome is the one that protects your life, not just your liberty.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Evidence review:</strong> Surveillance footage, loss prevention reports, witness statements, and all police documentation</li>
              <li><strong>Intent challenges:</strong> Evaluating whether the prosecution can prove purposeful deprivation under R.C. 2913.02</li>
              <li><strong>Diversion programs:</strong> Pursuing first-offender diversion where available for dismissal without conviction</li>
              <li><strong>Valuation challenges:</strong> Contesting the stated value of property to reduce the degree of the charge</li>
              <li><strong>Expungement planning:</strong> Advising on expungement eligibility under R.C. 2953.32 from the start of the case</li>
              <li><strong>Trial representation:</strong> Full jury or bench trial defense in {courtName} or Franklin County Municipal Court if the case cannot be favorably resolved</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing theft or shoplifting charges in {suburb} or elsewhere in Franklin County, contact Jwayyed Law LLC at{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Early intervention — before a plea is entered and before the record becomes permanent — is when an attorney can make the most difference.
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
