import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { getSuburb, FCMC, DISORDERLY_CONDUCT, MISDEMEANOR_SENTENCING, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';

interface Props {
  suburb: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function DisorderlyConductTemplate({ suburb }: Props) {
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
    { label: 'Courts', href: '/courts' },
    { label: 'Franklin County', href: '/courts/franklin-county' },
    { label: `Disorderly Conduct Defense — ${suburb}`, href: `/locations/franklin-county/disorderly-conduct-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is disorderly conduct under Ohio law?`,
      answer: `Ohio Revised Code 2917.11 prohibits conduct that recklessly causes inconvenience, annoyance, or alarm to another or creates a risk of harm. Common forms include fighting in a public place, making unreasonable noise, using offensive language likely to provoke a violent response, and engaging in threatening or tumultuous behavior. The base offense is a minor misdemeanor — no jail, up to $150 fine. However, it escalates to a fourth-degree misdemeanor (up to ${MISDEMEANOR_SENTENCING.M4.maxJail} jail, ${MISDEMEANOR_SENTENCING.M4.maxFine} fine) if the person persists after a police warning, commits the offense near a school, or acts in the presence of emergency personnel at an emergency scene.`,
    },
    {
      question: `Where is a disorderly conduct charge from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `Disorderly conduct charges from ${suburb} are typically handled in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}. The court meets ${courtSchedule}. Minor misdemeanor and M4 disorderly conduct cases can be fully resolved at the mayor's court level, including arraignment, plea, and sentencing. More complex cases or repeat offenders may transfer to Franklin County Municipal Court at ${FCMC.address}.`
        : `${mayorsCourt.note} Disorderly conduct charges from ${suburb} are processed in Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. Both minor misdemeanor and M4 disorderly conduct cases are handled there.`,
    },
    {
      question: `Does a disorderly conduct conviction appear on a background check?`,
      answer: `Yes. Even a minor misdemeanor disorderly conduct conviction creates a public criminal record in Ohio. Employers, landlords, and professional licensing boards that conduct background checks will see the conviction. While disorderly conduct is less serious than many charges, it can still affect employment in security, healthcare, education, and licensed professions. Our firm evaluates whether charges can be diverted, dismissed, or resolved without a conviction — protecting your record going forward.`,
    },
    {
      question: `Can a disorderly conduct conviction in ${suburb} be expunged?`,
      answer: `Minor misdemeanor and M4 disorderly conduct convictions are eligible for expungement under Ohio Revised Code 2953.32 after a waiting period of ${EXPUNGEMENT.waitingPeriods.minorMisdemeanor} from final discharge (for minor misdemeanors) or ${EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5} for M4 convictions. Once sealed, the record is removed from public background check databases for most purposes. Our firm evaluates expungement eligibility from the outset of every case.`,
    },
    {
      question: `What if I was intoxicated when I was cited for disorderly conduct in ${suburb}?`,
      answer: `R.C. 2917.11(B) specifically addresses disorderly conduct while intoxicated in a public place — engaging in offensive conduct or creating a risk of physical harm while voluntarily intoxicated. This subsection is frequently used for public intoxication arrests in ${suburb} entertainment areas. The base offense is still a minor misdemeanor, but the escalation to M4 occurs faster with prior convictions under the intoxication subsection. Our firm evaluates whether the defendant was actually in a public place, whether the conduct actually created the risk alleged, and whether the charge can be dismissed or diverted.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for a disorderly conduct charge in ${suburb}?`,
      answer: `Even though disorderly conduct appears minor, a conviction creates a criminal record that follows you. Jwayyed Law LLC defends disorderly conduct charges throughout Franklin County, including ${suburb}. Many first-time cases qualify for diversion or conditional dismissal — outcomes that avoid a permanent record. Our firm evaluates every option before advising on any plea, and appears in ${courtName} and Franklin County Municipal Court on your behalf. Call (614) 285-5482 to discuss your situation.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Disorderly Conduct Defense Attorney in ${suburb}, Ohio`}
        description={`Facing disorderly conduct charges in ${suburb}? Jwayyed Law LLC defends clients in ${courtName} and throughout Franklin County. Call (614) 285-5482.`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Disorderly Conduct Defense in {suburb}, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Disorderly conduct is one of the most commonly issued citations in {suburb} and throughout Franklin County. Ohio Revised Code 2917.11 covers a broad range of conduct — from a verbal argument in a parking lot to a physical altercation that stops short of assault, from unreasonable noise at a late-night gathering to public behavior that alarm or inconvenienced bystanders. As a baseline offense, disorderly conduct is a minor misdemeanor carrying no jail time and a maximum $150 fine. But even a minor misdemeanor conviction creates a permanent criminal record that can affect employment applications, background checks, and professional licensing reviews. And when the offense escalates to a fourth-degree misdemeanor — which happens when an officer issues a warning that is ignored, or when the conduct occurs near a school — the penalties become significantly more serious. Jwayyed Law LLC defends disorderly conduct charges in{' '}
              {courtName} and Franklin County Municipal Court. Call{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              to discuss your case.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} is a Franklin County community of approximately {population2020.toLocaleString()} residents. The{' '}
              <strong>{policeAgency}</strong> handles disorderly conduct calls in {suburb}&apos;s residential neighborhoods, commercial corridors along {keyRoads[0]}, and at community events throughout the year. Many disorderly conduct charges arise in the context of a larger incident — a bar dispute, a neighborhood complaint, a traffic stop that became contentious — and in those cases the charge is sometimes added alongside more serious allegations. Our firm handles the full context of every case, including related charges that accompany the disorderly conduct citation.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Disorderly Conduct Under R.C. 2917.11 — What the Law Actually Says
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2917.11(A) defines disorderly conduct as recklessly causing inconvenience, annoyance, or alarm to another person by: engaging in fighting, in threatening harm to persons or property, or in violent or turbulent behavior; making unreasonable noise or an offensively coarse utterance, gesture, or display; creating a physically offensive condition that serves no legitimate purpose; or engaging in other behavior that creates a risk of physical harm to persons or property. Division (B) adds a separate prohibition on public intoxication: a person who is voluntarily intoxicated in a public place and who engages in offensive conduct or creates a risk of physical harm violates this section regardless of whether any other person complains.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The key statutory elements for defense purposes are: (1) the conduct must be &ldquo;reckless&rdquo; — not merely negligent or accidental; (2) it must cause inconvenience, annoyance, or alarm to a specific person — not merely abstract or theoretical offense; and (3) the &ldquo;unreasonable noise&rdquo; and &ldquo;offensively coarse utterance&rdquo; provisions are narrowly read under First Amendment principles to prohibit conduct, not protected speech. Our firm evaluates whether each element of the charge is actually supported by the evidence in your case before any plea is discussed.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              When Disorderly Conduct Escalates to an M4 in {suburb}
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio law escalates disorderly conduct from a minor misdemeanor to a fourth-degree misdemeanor in four circumstances: (1) the offender persists in the disorderly conduct after a reasonable request or warning by a law enforcement officer to stop; (2) the offense occurs in the vicinity of a school or school safety zone; (3) the offense occurs in the presence of emergency service personnel responding to an emergency; or (4) the offender has three or more prior convictions under the public intoxication subsection (R.C. 2917.11(B)). An M4 disorderly conduct conviction carries up to{' '}
              <strong>{MISDEMEANOR_SENTENCING.M4.maxJail}</strong> in jail and a <strong>{MISDEMEANOR_SENTENCING.M4.maxFine}</strong> fine.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The &ldquo;persists after warning&rdquo; escalation is the most commonly charged, and it depends entirely on whether the officer&apos;s warning was communicated clearly, whether the defendant actually heard and understood the warning, and whether the defendant actually continued the conduct afterward. Our firm scrutinizes the sequence of events — including all body-cam footage from the {policeAgency} response — to evaluate whether the escalation elements are supported.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Where Your {suburb} Disorderly Conduct Case Is Heard
            </h3>
            {hasMayorsCourt ? (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                Disorderly conduct charges from {suburb} are typically resolved in <strong>{suburb} Mayor&apos;s Court</strong> at {courtAddress}, {courtPhone}. The court meets {courtSchedule}. Both minor misdemeanor and M4 disorderly conduct matters — from citation through plea and sentencing — can be handled at the mayor&apos;s court level. Our firm appears in {suburb} Mayor&apos;s Court and also at Franklin County Municipal Court at {FCMC.address} for any cases transferred there.
              </p>
            ) : (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                {mayorsCourt.note} Disorderly conduct charges from {suburb} are processed directly in <strong>Franklin County Municipal Court</strong> at {FCMC.address} ({FCMC.floors}), {FCMC.clerkPhone}. Both minor misdemeanor and M4 disorderly conduct matters are handled there from arraignment through resolution. Our firm appears regularly at Franklin County Municipal Court and is familiar with its procedures and the prosecutors who handle these cases.
              </p>
            )}

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              First Amendment Limitations on Disorderly Conduct Charges
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio courts have consistently held that disorderly conduct charges based on speech — rather than physical conduct — must clear a high First Amendment bar. R.C. 2917.11 prohibits &ldquo;offensively coarse utterance&rdquo; or gestures likely to provoke a violent response, but these provisions reach only speech that constitutes &ldquo;fighting words&rdquo; under the constitutional standard established in Chaplinsky v. New Hampshire: speech that by its very utterance inflicts injury or tends to incite an immediate breach of the peace. Profanity, offensive language, or statements that are upsetting or annoying but not inherently threatening are constitutionally protected and cannot lawfully form the basis of a disorderly conduct charge. Ohio appellate courts have reversed convictions where the charge rested on verbal confrontations that involved no actual violence and no genuine immediate threat.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              In {suburb}, disorderly conduct charges arising from verbal disagreements — arguments with officers, disputes with neighbors, or heated exchanges during traffic stops — sometimes reflect an officer&apos;s personal reaction to being challenged rather than conduct that meets the legal threshold. Our firm evaluates the constitutional basis for every speech-based disorderly conduct charge and raises First Amendment defenses where the underlying conduct was protected expression rather than criminal behavior. If the charge cannot survive a First Amendment challenge, we raise that issue early — before trial — so that the charge can be dismissed without the cost and uncertainty of a contested hearing.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Expungement of a Disorderly Conduct Conviction in Franklin County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For clients who receive a disorderly conduct conviction, Ohio&apos;s expanded expungement statute (R.C. 2953.32, as amended through HB 96 effective September 30, 2025) provides a pathway to sealing the record. Minor misdemeanor disorderly conduct convictions become eligible for expungement after a waiting period of {EXPUNGEMENT.waitingPeriods.minorMisdemeanor} following final discharge of the sentence. Fourth-degree misdemeanor convictions are eligible after {EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5}. Once sealed, the conviction is removed from public criminal record databases for most purposes — meaning it will not appear on standard employment or housing background checks. Our firm advises clients on expungement eligibility at the start of every case so that the long-term record impact is part of the strategy from day one. If the charge cannot be dismissed or diverted, sealing the conviction is the next best outcome, and planning for it begins at arraignment.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies and Diversion Options
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Disorderly conduct cases in Franklin County often resolve without a conviction when handled by an experienced attorney. For first-time defendants with no prior criminal record, diversion programs — conditional dismissal agreements requiring community service or a brief probationary period — are frequently available. Successful completion results in dismissal of the charge and no permanent conviction. Our firm evaluates diversion availability in every disorderly conduct case before recommending any other resolution.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For cases that cannot be diverted, we scrutinize the evidentiary basis of the charge: Was the conduct actually reckless, or merely ill-advised? Did the behavior actually cause inconvenience or alarm to an identified person, or was the officer&apos;s basis for the charge general unease? Was the escalation from minor misdemeanor to M4 properly supported — was a warning actually communicated, heard, and ignored? These are all factual questions that can defeat charges or reduce the severity of the offense. We also evaluate whether the charge can be negotiated to an even lesser infraction that avoids a criminal record entirely.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Diversion and dismissal:</strong> Pursuing conditional dismissal or diversion for first-time disorderly conduct defendants</li>
              <li><strong>Evidence review:</strong> All body-cam footage, incident reports, and witness statements evaluated before any hearing</li>
              <li><strong>M4 escalation challenge:</strong> Contesting whether the &ldquo;persists after warning&rdquo; or other escalation elements are supported by evidence</li>
              <li><strong>Charge reduction:</strong> Negotiating to civil infraction or lesser offense where the facts support it</li>
              <li><strong>Expungement planning:</strong> Advising on ORC 2953.32 sealing eligibility for any conviction that results</li>
              <li><strong>Professional licensing impact:</strong> Evaluating the effect of a conviction on employment licenses and professional standing</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing disorderly conduct charges in {suburb} or anywhere in Franklin County, contact Jwayyed Law LLC at{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              Even a minor misdemeanor conviction creates a permanent record — it is always worth talking to an attorney before entering any plea.
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
