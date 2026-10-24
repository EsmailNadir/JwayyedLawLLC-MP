import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { getSuburb, FCMC, ASSAULT, MISDEMEANOR_SENTENCING, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';

interface Props {
  suburb: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function AssaultTemplate({ suburb }: Props) {
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
    { label: `Assault Defense — ${suburb}`, href: `/locations/franklin-county/assault-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is assault under Ohio law?`,
      answer: `Under Ohio Revised Code 2903.13, assault is knowingly causing or attempting to cause physical harm to another person, or recklessly causing serious physical harm. Baseline assault is a first-degree misdemeanor carrying up to ${MISDEMEANOR_SENTENCING.M1.maxJail} in jail and a ${MISDEMEANOR_SENTENCING.M1.maxFine} fine. However, assault against certain protected persons — law enforcement officers, emergency medical personnel, teachers, hospital staff — escalates to a felony even when the same conduct would be a misdemeanor against others. Understanding the specific category of victim is essential to evaluating the charges you face.`,
    },
    {
      question: `Where is an assault case from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `Misdemeanor assault charges arising in ${suburb} are initially processed in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}. The court meets ${courtSchedule}. If your case involves a felony assault escalation — for example, an alleged assault on a law enforcement officer — it transfers to Franklin County Municipal Court at ${FCMC.address} and then to Franklin County Court of Common Pleas.`
        : `${mayorsCourt.note} Assault charges from ${suburb} are processed directly in Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. Felony assault matters are bound over to Franklin County Court of Common Pleas.`,
    },
    {
      question: `Is self-defense a valid defense to assault charges in ${suburb}?`,
      answer: `Yes. Ohio Revised Code 2901.05 recognizes self-defense, defense of another, and defense of residence as complete affirmative defenses to assault charges. Under Ohio's 2019 self-defense law amendments, the prosecution has the burden of disproving self-defense beyond a reasonable doubt once the defendant presents evidence raising self-defense. For ${suburb} assault cases, we evaluate whether the defendant reasonably believed force was necessary to protect against imminent unlawful physical harm. Evidence of the alleged victim's aggression, prior threats, or threatening behavior is directly relevant.`,
    },
    {
      question: `Can an assault charge in ${suburb} be expunged?`,
      answer: `Most misdemeanor assault convictions under R.C. 2903.13 are eligible for expungement under ORC 2953.32 after a waiting period of ${EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5} from final discharge. However, if the assault arose from the same facts as a domestic violence allegation, or if the charge was treated as a DV-equivalent offense, expungement may not be available. Our firm evaluates expungement eligibility from the outset of the case, both to inform plea strategy and to advise on realistic long-term outcomes.`,
    },
    {
      question: `What happens if the alleged victim in an ${suburb} assault case does not want to press charges?`,
      answer: `In Ohio, assault prosecutions are brought by the state — the alleged victim does not have the power to drop charges unilaterally. Once the ${policeAgency} submits a report and probable cause exists, the prosecutor decides whether to proceed. However, the alleged victim's cooperation is often critical to the prosecution's ability to prove its case. An experienced attorney can evaluate the strength of the prosecution's independent evidence and use the alleged victim's reluctance to prosecute as a factor in negotiating a favorable resolution.`,
    },
    {
      question: `What are the felony escalations for assault in Ohio?`,
      answer: `Under R.C. 2903.13(C), assault escalates from a first-degree misdemeanor to a felony when the victim falls into certain protected categories: assault on a peace officer, firefighter, or EMS worker during official duties (F4); assault on a caretaker against a functionally impaired person (F4, or F3 with a prior); assault on correctional or youth services employees (F3); assault on a school teacher, administrator, or bus operator on school property (F5, or F4 with a prior); and assault on hospital employees or judges and prosecutors during official duties (F5, or F4 with a prior). The same physical conduct that is a misdemeanor against a private citizen can be a felony if the victim happens to be a protected public employee.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for an assault charge in ${suburb}?`,
      answer: `Jwayyed Law LLC provides experienced assault defense throughout Franklin County, including ${suburb}. Assault cases in Ohio turn on witness credibility, the video and physical evidence, and whether self-defense or other defenses apply under the specific facts. Our firm obtains all available evidence, evaluates the prosecution's case critically, and builds a defense strategy tailored to the circumstances of your case. A misdemeanor assault conviction affects employment, housing, and professional licensing — contact us at (614) 285-5482 before your arraignment if at all possible.`,
    },
  ];


  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Assault Defense Attorney in ${suburb}, Ohio`}
        description={`Facing assault charges in ${suburb}? Jwayyed Law LLC provides experienced defense in ${courtName} and throughout Franklin County. Call (614) 285-5482.`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Assault Defense in {suburb}, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An assault charge in {suburb} can arise from a wide range of situations — a bar fight on a {suburb} commercial strip, a neighborhood dispute that escalated, an altercation at a local event, or a confrontation that began with words and ended with police involvement. Whatever the circumstances, an assault conviction under Ohio Revised Code 2903.13 is a first-degree misdemeanor that creates a permanent criminal record, carries the possibility of jail time, and can affect employment, professional licensing, and housing applications for years. The{' '}
              <strong>{policeAgency}</strong> takes assault calls seriously, and the Franklin County prosecutorial system moves quickly once a report is filed. Jwayyed Law LLC provides experienced{' '}
              <Link href="/criminal-defense/assault-charges" className="text-[#b87333] underline hover:opacity-80">assault defense</Link>{' '}
              for {suburb} residents. Call{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              before your arraignment — the choices made at that first court appearance shape everything that follows.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} is a Franklin County community of approximately {population2020.toLocaleString()} residents. Assault cases in the area reflect the full range of circumstances that produce confrontations in any community — interpersonal disputes, nights out that turn physical, road rage incidents on {keyRoads[0]}, and domestic-adjacent conflicts that the prosecution chooses not to pursue as domestic violence. Our firm evaluates each situation on its own facts, identifies who initiated the confrontation, reviews all available evidence, and builds a defense rooted in the actual record of what happened.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Assault Under Ohio Revised Code 2903.13
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2903.13 defines assault as knowingly causing or attempting to cause physical harm to another person or to another person&apos;s unborn, or recklessly causing serious physical harm to another person. Importantly, the offense includes <em>attempts</em> — Ohio does not require that harm was actually inflicted, only that the defendant knowingly attempted to cause it. The baseline offense is a first-degree misdemeanor carrying up to{' '}
              <strong>{MISDEMEANOR_SENTENCING.M1.maxJail}</strong> in jail and a <strong>{MISDEMEANOR_SENTENCING.M1.maxFine}</strong> fine. These are maximum penalties — the actual sentence depends on the facts of the case, the defendant&apos;s prior record, and the skill of the attorney at the sentencing stage.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The word &ldquo;knowingly&rdquo; in the statute is legally significant. The prosecution must prove that the defendant was aware that his or her conduct would cause or probably cause the result — not merely that the harm occurred accidentally. Accidents, involuntary contact, and situations where the defendant lacked the mental state of awareness required by the statute are not criminal assault. Our firm examines the facts carefully for any argument that the defendant&apos;s conduct was not &ldquo;knowing&rdquo; within the legal meaning of that term.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Felony Escalations — When Assault Becomes a Felony
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              R.C. 2903.13(C) elevates assault from a first-degree misdemeanor to a felony when the victim falls into a protected category. Assault on a peace officer, firefighter, or emergency medical service worker during the performance of official duties becomes a fourth-degree felony — and a third-degree felony if there is a prior assault conviction. Assault on a corrections officer or youth services employee at a state DRC institution is a third-degree felony; assault on local jail staff or probation officers is a fifth-degree felony. Assault on a teacher, school administrator, or school bus operator on school grounds is a fifth-degree felony (F4 with a prior). Assault on hospital employees or judges and prosecutors during official duties is a fifth-degree felony (F4 with a prior). These felony-level charges are processed in Franklin County Court of Common Pleas after arraignment and carry substantially greater penalties than misdemeanor assault. Our firm scrutinizes whether the alleged victim&apos;s protected status was established, whether the victim was acting within the scope of official duties at the time of the incident, and whether the prosecution can prove these elements beyond a reasonable doubt.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Where Your {suburb} Assault Case Is Heard
            </h3>
            {hasMayorsCourt ? (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                Misdemeanor assault charges arising in {suburb} are initially processed in <strong>{suburb} Mayor&apos;s Court</strong> at {courtAddress}, {courtPhone}. The court meets {courtSchedule}. Arraignment, pretrial negotiations, and pleas on M1 assault charges may be handled at the mayor&apos;s court level. Felony assault escalations — where the victim is a law enforcement officer or other protected person — are transferred to Franklin County Municipal Court at {FCMC.address} for arraignment and then bound over to Franklin County Court of Common Pleas for trial. Our firm appears in all three venues.
              </p>
            ) : (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                {mayorsCourt.note} Assault charges from {suburb} are processed directly in <strong>Franklin County Municipal Court</strong> at {FCMC.address} ({FCMC.floors}), {FCMC.clerkPhone}. Felony assault matters are bound over to Franklin County Court of Common Pleas. Franklin County Municipal Court handles the full spectrum of misdemeanor assault cases, from initial arraignment through trial. Our firm regularly appears in this court.
              </p>
            )}

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Self-Defense and Other Defenses
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2901.05 recognizes self-defense, defense of another, and defense of one's residence as complete affirmative defenses to assault. Under amendments effective in 2019, the prosecution bears the burden of disproving self-defense beyond a reasonable doubt once the defendant produces evidence that the defense is at issue. For {suburb} assault cases, self-defense applies when the defendant reasonably believed force was immediately necessary to protect against the use or imminent use of unlawful force. We look for evidence of the alleged victim&apos;s threatening conduct, evidence that the defendant retreated or attempted to avoid the confrontation, and any physical or video evidence showing who initiated the contact.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond self-defense, our firm evaluates: whether the physical contact was knowing or accidental; whether the prosecution can identify the defendant with certainty; whether witness testimony is consistent and credible; and whether any evidence was obtained in violation of constitutional protections. We obtain all body-cam and surveillance footage, police reports, medical records, and forensic evidence before making any recommendation about plea or trial strategy.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Evidence analysis:</strong> All surveillance footage, body-cam video, police reports, and medical records reviewed before any hearing</li>
              <li><strong>Self-defense evaluation:</strong> Full factual investigation into who initiated the confrontation and the reasonableness of any force used</li>
              <li><strong>Felony escalation challenge:</strong> Contesting protected-victim status where the facts do not support felony charges</li>
              <li><strong>Charge reduction:</strong> Negotiating reductions to lesser offenses (disorderly conduct, attempted assault) where supported by the facts</li>
              <li><strong>Diversion and dismissal:</strong> Evaluating first-offender diversion eligibility for dismissal without conviction</li>
              <li><strong>Expungement planning:</strong> Advising on ORC 2953.32 eligibility from the start to inform plea strategy</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been charged with assault in {suburb} or anywhere in Franklin County, contact Jwayyed Law LLC at{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              Assault charges move quickly in Franklin County courts — having an attorney involved from the earliest stage gives you the best chance at a favorable outcome.
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
