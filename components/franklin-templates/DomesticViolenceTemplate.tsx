import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { getSuburb, FCMC, MISDEMEANOR_SENTENCING, FIRM_NAP } from '@/data/franklin-county-reference';

interface Props {
  suburb: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function DomesticViolenceTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { policeAgency, population2020, formerProsecutorTitle } = suburbData;
  const slug = slugify(suburb);

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `Domestic Violence Defense — ${suburb}`, href: `/locations/franklin-county/domestic-violence-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is domestic violence under Ohio law?`,
      answer: `Under Ohio Revised Code 2919.25, domestic violence is knowingly causing or attempting to cause physical harm to a family or household member (first-degree misdemeanor), or recklessly causing serious physical harm to a family or household member (also M1). Threatening a family or household member with force that causes fear of imminent physical harm is a fourth-degree misdemeanor. A first M1 DV conviction carries up to ${MISDEMEANOR_SENTENCING.M1.maxJail} in jail and a ${MISDEMEANOR_SENTENCING.M1.maxFine} fine. Prior DV convictions can elevate the charge to a felony.`,
    },
    {
      question: `Can a domestic violence charge in ${suburb} be dropped if the alleged victim does not want to press charges?`,
      answer: `This is one of the most common misunderstandings in domestic violence cases. In Ohio, the decision to prosecute belongs to the state — not to the alleged victim. Once the ${policeAgency} makes an arrest and submits a report, the Franklin County prosecutor or the Franklin County Municipal Court prosecutor proceeds with the case regardless of whether the alleged victim recants, refuses to cooperate, or asks for the charges to be dropped. An attorney can advocate with the prosecutor and present legal defenses, but the alleged victim alone cannot dismiss the case.`,
    },
    {
      question: `What is the Lautenberg Amendment and how does it affect a DV conviction in ${suburb}?`,
      answer: `The Lautenberg Amendment (18 U.S.C. § 922(g)(9)) permanently prohibits anyone convicted of a misdemeanor crime of domestic violence from possessing or purchasing firearms or ammunition under federal law. This applies to every misdemeanor DV conviction — even a first-offense M4 threat conviction — and there is no exception for law enforcement officers or military personnel. For ${suburb} residents who own firearms for self-defense, hunting, or professional purposes, this federal lifetime prohibition is often the most severe consequence of a DV conviction. Our firm considers this consequence in every case.`,
    },
    {
      question: `Where is a domestic violence case from ${suburb} heard?`,
      answer: `Domestic violence charges are a first-degree misdemeanor under Ohio Revised Code 2919.25 and cannot be processed at the mayor's court level. All DV cases arising in ${suburb} are handled in Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. The mayor's court may receive the initial citation but must transfer all DV proceedings to Franklin County Municipal Court. Felony DV escalations (with prior DV convictions) are bound over to Franklin County Court of Common Pleas.`,
    },
    {
      question: `What happens if a protective order is violated in ${suburb}?`,
      answer: `Violating a temporary protection order (TPO) or civil protection order (CPO) in ${suburb} is a separate criminal offense under Ohio Revised Code 2919.27 — an M1 misdemeanor for a first offense, escalating to a F5 felony for subsequent violations or violations involving prior DV convictions. The ${policeAgency} takes protection order violations seriously, and a violation arrest often brings both the violation charge and new underlying DV charges. Our firm defends both the underlying DV charge and any related protection order violation simultaneously.`,
    },
    {
      question: `Can a domestic violence conviction in ${suburb} be expunged?`,
      answer: `No. Ohio Revised Code 2953.36 specifically lists domestic violence convictions under R.C. 2919.25 as ineligible for expungement or record sealing in Ohio. This is one of the most significant consequences of a DV conviction — unlike many misdemeanor convictions, a DV conviction cannot be removed from your record regardless of how much time passes or how otherwise clean your record is. This is an important consideration in evaluating any plea offer, and our firm advocates strongly to avoid DV convictions where alternative charges or dismissal are possible.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for a domestic violence charge in ${suburb}?`,
      answer: `Jwayyed Law LLC provides experienced domestic violence defense throughout Franklin County, including ${suburb}. DV cases are aggressively prosecuted in Ohio regardless of the alleged victim's wishes, and the consequences — including the permanent Lautenberg firearm prohibition and the ineligibility for expungement — make a dismissal or non-DV resolution critically important. Our firm investigates the factual basis of the accusation, evaluates self-defense arguments and credibility issues, and works to achieve the outcome that best protects your rights and your future. Call (614) 285-5482 to discuss your case.`,
    },
  ];


  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Domestic Violence Defense Attorney in ${suburb}, Ohio`}
        description={`Facing domestic violence charges in ${suburb}? Jwayyed Law LLC provides experienced DV defense in Franklin County Municipal Court and throughout Franklin County. Call (614) 285-5482.`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Domestic Violence Defense in {suburb}, Ohio
            </h2>
            {formerProsecutorTitle && (
              <div className="not-prose my-6 inline-flex items-center gap-3 bg-[#b87333]/8 border border-[#b87333]/25 rounded-lg px-4 py-3">
                <span className="text-[#b87333] font-bold text-sm">⚖</span>
                <span className="text-sm font-semibold text-slate-800">{formerProsecutorTitle} — Insider knowledge of local court procedures and prosecution strategy.</span>
              </div>
            )}
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A domestic violence arrest in {suburb} triggers consequences that begin immediately — before any court date, before any conviction, and often before you fully understand what is happening. When the{' '}
              <strong>{policeAgency}</strong> responds to a domestic disturbance call, Ohio mandatory arrest policies mean that an officer who finds probable cause to believe domestic violence has occurred will make an arrest. A temporary protection order is often issued the same night, prohibiting contact with your family home and potentially with your children. And the prosecution that follows proceeds under Ohio law on the state&apos;s timeline — not yours, and not the alleged victim&apos;s. Jwayyed Law LLC provides experienced{' '}
              <Link href="/criminal-defense/domestic-violence" className="text-[#b87333] underline hover:opacity-80">domestic violence defense</Link>{' '}
              for {suburb} residents, including full representation at Franklin County Municipal Court. Call{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              immediately — the earlier we are involved, the more options you have.
            </p>
            {formerProsecutorTitle && (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                As a former prosecutor with experience working alongside and training law enforcement, attorney Jwayyed brings insight into police procedures, case preparation, and courtroom strategy.
              </p>
            )}
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} is a Franklin County community with approximately {population2020.toLocaleString()} residents. Domestic disturbance calls and domestic violence arrests occur across all residential neighborhoods and economic demographics — this is not a charge limited to any particular background or circumstance. In many cases, the underlying facts are genuinely disputed, shaped by the dynamics of a difficult relationship, or driven by circumstances that the responding officer did not have time or information to fully evaluate. Our firm approaches each case by understanding the complete factual picture before advising on strategy.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Domestic Violence Under Ohio Revised Code 2919.25
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2919.25 defines three categories of domestic violence: knowingly causing or attempting to cause physical harm to a family or household member (first-degree misdemeanor — up to{' '}
              <strong>{MISDEMEANOR_SENTENCING.M1.maxJail}</strong> in jail and a <strong>{MISDEMEANOR_SENTENCING.M1.maxFine}</strong> fine); recklessly causing serious physical harm to a family or household member (also M1); and threatening a family or household member with force in a manner that causes the person to believe imminent harm is at risk (fourth-degree misdemeanor — up to {MISDEMEANOR_SENTENCING.M4.maxJail} in jail). The statute defines &ldquo;family or household member&rdquo; broadly to include spouses, former spouses, persons living as spouses, natural parents of shared children, and other blood or marriage relatives, as well as current and former cohabitants within the preceding five years.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Prior DV convictions and specific circumstances escalate the charge significantly under R.C. 2919.25(D). If the victim is pregnant at the time of a first-offense DV (division (A) or (B)), the charge escalates to a fifth-degree felony. One prior DV conviction involving a family or household member elevates the charge to a fourth-degree felony. Two or more prior DV convictions elevate the charge to a third-degree felony. These felony-level charges are processed in Franklin County Court of Common Pleas after arraignment and carry mandatory incarceration and substantially higher fines. Our firm evaluates whether prior-conviction escalation is properly charged and challenges any overcharging where the prior conviction record is incomplete or disputed.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Lautenberg Amendment — Federal Firearm Prohibition
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The most severe collateral consequence of a domestic violence conviction is the permanent federal firearm prohibition. Under 18 U.S.C. § 922(g)(9) — the Lautenberg Amendment — any person convicted of a misdemeanor crime of domestic violence is permanently prohibited from possessing, purchasing, or transporting firearms or ammunition under federal law. This applies to every misdemeanor DV conviction, including a first-offense M4 threat charge, and it is permanent with no exception and no path to restoration of firearm rights under federal law (Ohio-specific restoration does not override federal law). The prohibition applies to law enforcement officers and military members as well — a DV conviction can end a career in law enforcement.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For {suburb} residents who own firearms for home defense, hunting, professional use, or as a condition of employment, the Lautenberg prohibition is often the single most important reason to fight a domestic violence charge with every available defense. Combined with the fact that DV convictions are not eligible for expungement under Ohio law — meaning the record is permanent — the stakes of a DV conviction are exceptionally high even for an apparently minor first offense.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Where Your {suburb} DV Case Is Heard
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Domestic violence is a first-degree misdemeanor under Ohio Revised Code 2919.25 and <strong>cannot be processed at the mayor&apos;s court level</strong> — Ohio law requires that DV charges be handled by a court of record. All domestic violence charges arising in {suburb} are processed in <strong>Franklin County Municipal Court</strong> at {FCMC.address} ({FCMC.floors}), {FCMC.clerkPhone}. If a {suburb} citation is initially issued, it is transferred to Franklin County Municipal Court for all proceedings, including arraignment, pretrial hearings, pleas, and trial. Temporary protection order (TPO) proceedings are also heard at Franklin County Municipal Court. Felony DV escalations are bound over to Franklin County Court of Common Pleas. Our firm appears regularly at Franklin County Municipal Court and understands its domestic violence docket and prosecutors.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies for Domestic Violence Charges
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our domestic violence defense approach begins with a comprehensive factual investigation before any hearing occurs. We obtain all police reports, body-cam footage, 911 call recordings, medical records (if any), and any photographic evidence. We interview witnesses independently of the police investigation and look for evidence that contradicts the arresting officer&apos;s account — alternative explanations for any injuries, evidence of the alleged victim&apos;s own aggression, inconsistencies in the arrest narrative, and any prior false accusations.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Self-defense is a recognized and frequently applicable defense in DV cases in Ohio. If the defendant was the initial victim and responded to an attack, self-defense under ORC 2901.05 may apply. Ohio law places the burden of disproving self-defense on the prosecution once the defendant presents evidence raising it as an issue. In cases where the alleged victim later recants or provides a statement inconsistent with the initial police report, we use those inconsistencies to challenge the prosecution&apos;s ability to prove the case beyond a reasonable doubt. Where a non-DV resolution is possible — such as a plea to disorderly conduct, which does not carry the firearm prohibition or expungement ineligibility — our firm pursues it aggressively.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Emergency representation:</strong> Arraignment attendance to address bond conditions and protection order terms from day one</li>
              <li><strong>Evidence investigation:</strong> All body-cam footage, 911 recordings, police reports, and witness statements obtained before any hearing</li>
              <li><strong>Self-defense and credibility challenges:</strong> Evaluating the factual basis of the accusation and any inconsistencies in the alleged victim&apos;s account</li>
              <li><strong>Non-DV resolution:</strong> Pursuing pleas to disorderly conduct or other charges that avoid the Lautenberg firearm prohibition</li>
              <li><strong>Protection order defense:</strong> Contesting overly broad TPO or CPO conditions that affect your home, employment, or relationship with children</li>
              <li><strong>Professional licensing impact:</strong> Evaluating how a DV charge or conviction affects employment licenses, security clearances, and professional standing</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been arrested for domestic violence in {suburb} or anywhere in Franklin County, contact Jwayyed Law LLC immediately at{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              The decisions made in the first 48 hours after a DV arrest — including whether to make any statement and how to respond to the temporary protection order — have a lasting effect on the outcome of the case.
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
