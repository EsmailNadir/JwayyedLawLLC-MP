import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { getSuburb, FCMC, OVI_PENALTIES, OVI_BAC_THRESHOLDS, FIRM_NAP } from '@/data/franklin-county-reference';

interface Props {
  suburb: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function OVITemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, population2020, formerProsecutorTitle } = suburbData;
  const hasMayorsCourt = mayorsCourt.active;
  const courtName = hasMayorsCourt ? `${suburb} Mayor's Court` : FCMC.name;
  const courtAddress = hasMayorsCourt ? mayorsCourt.address! : FCMC.address;
  const courtPhone = hasMayorsCourt ? mayorsCourt.phone! : FCMC.clerkPhone;
  const courtSchedule = hasMayorsCourt ? mayorsCourt.schedule : null;

  const firstLow = OVI_PENALTIES.find((p) => p.offense === 1 && p.tier === 'low')!;
  const firstHigh = OVI_PENALTIES.find((p) => p.offense === 1 && p.tier === 'high')!;
  const secondLow = OVI_PENALTIES.find((p) => p.offense === 2 && p.tier === 'low')!;
  const thirdLow = OVI_PENALTIES.find((p) => p.offense === 3 && p.tier === 'low')!;

  const roadsText = keyRoads.slice(0, 3).join(', ');
  const slug = slugify(suburb);

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `OVI Defense — ${suburb}`, href: `/locations/franklin-county/ovi-dui-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What are the OVI penalties in ${suburb}, Ohio?`,
      answer: `Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction for a ${suburb} resident carries a mandatory minimum of ${firstLow.jailMin}, fines of ${firstLow.fine}, and a license suspension of ${firstLow.suspension}. High-tier OVI (BAC ${OVI_BAC_THRESHOLDS.highTierBlood}) carries ${firstHigh.jailMin} mandatory. A second OVI within 10 years escalates to ${secondLow.jailMin}, fines of ${secondLow.fine}, and suspension of ${secondLow.suspension}. OVI charges from ${suburb} are heard in ${courtName}.`,
    },
    {
      question: `Where is my OVI case heard if I was arrested in ${suburb}?`,
      answer: hasMayorsCourt
        ? `OVI and traffic charges arising in ${suburb} are initially heard in ${suburb} Mayor's Court, located at ${courtAddress}. The court meets ${courtSchedule}. If your case involves a 2nd offense OVI or higher, a high-tier OVI (BAC 0.17%+), or any matter that cannot be resolved at the mayor's court level, it transfers to Franklin County Municipal Court at ${FCMC.address}. First-offense OVI matters may be handled at ${suburb} Mayor's Court; repeat offenses must be heard in Franklin County Municipal Court. An attorney can appear at both courts on your behalf.`
        : `${mayorsCourt.note} All OVI cases from ${suburb} are heard at ${FCMC.address}, ${FCMC.floors}. The Franklin County Municipal Court handles the full spectrum of OVI matters including arraignments, ALS appeals, pleas, and trials.`,
    },
    {
      question: `How do I appeal my Administrative License Suspension (ALS) after an OVI arrest in ${suburb}?`,
      answer: `Under ORC 4511.191, you have exactly 30 days from the date of arrest to file an ALS appeal. Missing that deadline permanently forfeits your right to contest the suspension. Your ALS appeal is filed at Franklin County Municipal Court (${FCMC.address}), regardless of where in Franklin County the arrest occurred. Our firm treats every ALS appeal as an emergency — we file immediately, request a stay of suspension, and challenge the officer's compliance with ORC 4511.191 procedural requirements.`,
    },
    {
      question: `What OVI defenses are available for charges in ${suburb}?`,
      answer: `Common defenses we evaluate for every ${suburb} OVI case include: whether the initial stop by ${policeAgency} was supported by reasonable articulable suspicion; whether field sobriety tests (HGN, walk-and-turn, one-leg stand) were administered in strict compliance with NHTSA standards; whether breathalyzer maintenance and calibration records show the device was properly functioning; whether blood draw procedures followed proper chain-of-custody protocols; and, where BAC is near the threshold, the rising BAC defense — arguing that BAC was below 0.08% at the time of driving and rose to the tested level before the test was administered.`,
    },
    {
      question: `Can I get limited driving privileges after an OVI in ${suburb}?`,
      answer: `Yes. Ohio courts — including ${hasMayorsCourt ? courtName : FCMC.name} — can grant limited driving privileges for work, school, medical appointments, and other essential purposes. Under HB 37, first-time defendants who agree to install a certified ignition interlock device may waive the standard 15-day hard suspension waiting period, allowing near-immediate access to limited privileges. Our firm petitions quickly and helps you satisfy all court requirements. The reinstatement fee after an OVI suspension is ${OVI_BAC_THRESHOLDS.licenseReinstatementFee}.`,
    },
    {
      question: `Will an OVI conviction in ${suburb} affect my professional license?`,
      answer: `OVI convictions are reportable to Ohio professional licensing boards and can trigger investigations by the State Medical Board, Ohio Board of Nursing, Ohio Bar Association, Ohio Real Estate Commission, and commercial driver licensing authorities. ${suburb} residents employed in healthcare, law, education, or trucking face these collateral consequences in addition to criminal penalties. Our firm evaluates professional licensing exposure alongside the criminal case and works to achieve outcomes — such as reduction to reckless operation under ORC 4511.20 — that minimize long-term career impact.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for an OVI charge in ${suburb}?`,
      answer: `Jwayyed Law LLC provides experienced OVI defense throughout Franklin County, including ${suburb}. We understand the procedures of ${courtName} and Franklin County Municipal Court, the practices of the prosecutors handling ${suburb} OVI cases, and the defense arguments most effective in these courts. We act immediately to file ALS appeals within the 30-day deadline under ORC 4511.191 — this deadline cannot be extended. Call (614) 285-5482 as soon as possible after your arrest.`,
    },
  ];


  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`OVI / DUI Defense Attorney in ${suburb}, Ohio`}
        description={`Facing OVI or DUI charges in ${suburb}? Jwayyed Law LLC defends clients in ${courtName} and throughout Franklin County. Call (614) 285-5482 — the ALS appeal deadline is 30 days.`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              OVI / DUI Defense in {suburb}, Ohio
            </h2>
            {formerProsecutorTitle && (
              <div className="not-prose my-6 inline-flex items-center gap-3 bg-[#b87333]/8 border border-[#b87333]/25 rounded-lg px-4 py-3">
                <span className="text-[#b87333] font-bold text-sm">⚖</span>
                <span className="text-sm font-semibold text-slate-800">{formerProsecutorTitle} — Insider knowledge of local court procedures and prosecution strategy.</span>
              </div>
            )}
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An OVI arrest in {suburb} can happen fast — a traffic stop on {keyRoads[0]}, a checkpoint near a {suburb} business district, or a late-night stop by the{' '}
              <strong>{policeAgency}</strong>. One moment you are driving home; the next you have a citation in your hand, your license has been suspended, and you are wondering what to do. Ohio Revised Code 4511.19, substantially revised by HB 37 (effective April 9, 2025), sets mandatory minimum penalties that a court cannot waive below — meaning the consequences of even a first OVI conviction are serious, automatic, and lasting. Jwayyed Law LLC provides experienced{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI and DUI defense</Link>{' '}
              for clients throughout Franklin County, including {suburb}, and appears in {courtName} and Franklin County Municipal Court. Call{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              immediately — the administrative license suspension appeal deadline is only 30 days from your arrest.
            </p>
            {formerProsecutorTitle && (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                As a former prosecutor with experience working alongside and training law enforcement, attorney Jwayyed brings insight into police procedures, case preparation, and courtroom strategy.
              </p>
            )}
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              {suburb} is a Franklin County community of approximately {population2020.toLocaleString()} residents, and law enforcement activity on its primary corridors — {roadsText} — produces a significant number of OVI arrests each year. The {policeAgency} patrols these routes routinely, and Ohio State Highway Patrol units also operate in portions of Franklin County. Every OVI stop involves a sequence of decisions by law enforcement — the legal justification for the stop, the administration of field sobriety tests, the request for a breath or blood sample, and the documentation of results — and any misstep in that sequence can be the foundation of a successful defense.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Penalties in {suburb} Under HB 37
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s House Bill 37, effective April 9, 2025, restructured the mandatory minimum penalties for OVI under R.C. 4511.19. A first OVI conviction — with a BAC between {OVI_BAC_THRESHOLDS.lowTierBlood} (low-tier) — carries a mandatory minimum of{' '}
              <strong>{firstLow.jailMin}</strong>, fines of{' '}
              <strong>{firstLow.fine}</strong>, and a license suspension of{' '}
              <strong>{firstLow.suspension}</strong>. The license reinstatement fee is {OVI_BAC_THRESHOLDS.licenseReinstatementFee}. These are mandatory minimums — the court has no discretion to impose less. First-time defendants who agree to install a certified ignition interlock device may have the standard 15-day hard suspension waiting period waived under HB 37, allowing near-immediate limited driving privileges for work, school, and medical purposes.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              High-tier OVI charges — where the BAC is {OVI_BAC_THRESHOLDS.highTierBlood} — carry enhanced mandatory minimums even for first-time defendants: {firstHigh.jailMin}. If you have a prior OVI within the {OVI_BAC_THRESHOLDS.lookBackPeriod.split('(')[0].trim()}, a second offense carries a minimum of{' '}
              <strong>{secondLow.jailMin}</strong>, fines of <strong>{secondLow.fine}</strong>, and suspension of <strong>{secondLow.suspension}</strong>, plus a 90-day vehicle immobilization and 90-day plate impound. A third OVI within 10 years carries a minimum of {thirdLow.jailMin}, fines of {thirdLow.fine}, and suspension of {thirdLow.suspension}, with criminal forfeiture of the vehicle. A fourth or subsequent OVI conviction within 10 years escalates to a fourth-degree felony, processed in Franklin County Court of Common Pleas rather than municipal court.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Administrative License Suspension — 30-Day Deadline
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When a {suburb} driver is arrested for OVI, the arresting officer immediately issues a notice of Administrative License Suspension under ORC 4511.191. The ALS is a civil action entirely separate from the criminal OVI case — it takes effect the moment the notice is served, and it imposes a 15-day hard suspension during which no driving is permitted. You have <strong>30 days from the date of arrest</strong> to file an ALS appeal in Franklin County Municipal Court. Missing that window is permanent — no extension is available, and the right to challenge the suspension is forfeited entirely.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm treats every ALS appeal as an emergency. We file immediately after being retained, request a stay of the suspension so you can continue driving during the appeal process, and challenge the suspension on both procedural and substantive grounds. Procedural challenges include whether the officer properly advised you of the consequences of refusal or submission, whether the chemical testing device was properly maintained and calibrated, and whether all required documentation was submitted within the statutory time frame. Even a partial ALS appeal victory — a reduction in suspension length or a stay — can significantly reduce the disruption to your life while the criminal case proceeds.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Where Your {suburb} OVI Case Is Heard
            </h3>
            {hasMayorsCourt ? (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                OVI and traffic charges arising in {suburb} are initially processed in <strong>{suburb} Mayor&apos;s Court</strong>, located at {courtAddress}, reachable at {courtPhone}. The court meets {courtSchedule}. Mayor&apos;s courts are presided over by the municipal mayor or a designated magistrate and have jurisdiction over minor misdemeanor OVI and traffic offenses arising within the municipality. If your case involves a high-tier OVI, a repeat offense, or any matter that cannot be resolved at the mayor&apos;s court level, it is transferred to Franklin County Municipal Court at {FCMC.address} ({FCMC.floors}), {FCMC.clerkPhone}, for further proceedings including arraignment on misdemeanor OVI charges, pre-trial motions, and trial. Your ALS appeal is always filed directly in Franklin County Municipal Court regardless of which court handles the underlying criminal case.
              </p>
            ) : (
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
                {mayorsCourt.note} OVI charges from {suburb} are processed directly in <strong>Franklin County Municipal Court</strong> at {FCMC.address} ({FCMC.floors}), reachable at {FCMC.clerkPhone}. Franklin County Municipal Court is the busiest municipal court in Ohio, handling all OVI arraignments, ALS appeals, pretrial motions, and trials for Columbus and the surrounding Franklin County communities. Our firm regularly appears in this court and understands its judges, procedures, and the prosecutors who handle OVI dockets.
              </p>
            )}

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Defense Strategies for {suburb} Cases
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Every OVI defense begins with a close examination of the stop itself. The Fourth Amendment and Ohio constitutional protections require that the officer who stopped you had reasonable articulable suspicion of a traffic violation or criminal activity before initiating the stop. Stops based on vague observations — weaving slightly within a lane, braking early, or making an overly cautious turn — are sometimes legally insufficient, and evidence gathered after an invalid stop may be suppressed. We obtain all body-cam and dash-cam footage from the {policeAgency} stop and analyze every second of the recorded interaction.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              After evaluating the stop, we scrutinize the field sobriety test administration. The National Highway Traffic Safety Administration publishes standardized procedures for the Horizontal Gaze Nystagmus, walk-and-turn, and one-leg stand tests — and officers who deviate from those procedures administer invalid tests. We review the officer&apos;s training records, compare the recorded administration to NHTSA standards, and challenge any deviation as a basis for excluding the test results. For breath tests, we subpoena breathalyzer maintenance and calibration records to establish whether the instrument was properly functioning. For blood draws, we obtain chain-of-custody documentation and laboratory records. Where BAC is near the legal threshold — 0.08% or close to 0.17% for high-tier — the rising BAC defense argues that blood alcohol was below the threshold at the time of driving and rose by the time of testing due to continued alcohol absorption. This is a recognized defense in Ohio courts when the facts support it.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Collateral Consequences of an OVI Conviction
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond the mandatory jail, fines, and suspension, an OVI conviction in {suburb} carries significant collateral consequences. Ohio professional licensing boards — including the State Medical Board, Board of Nursing, Bar Association, Real Estate Commission, and Bureau of Motor Vehicles for CDL holders — can investigate, sanction, or revoke licenses based on OVI convictions. Auto insurance rates typically increase substantially following an OVI, and many insurers require SR-22 certification for the duration of the suspension. An OVI conviction is also not eligible for expungement under Ohio law, meaning it remains on your record permanently. Our firm considers all of these consequences when advising clients about the relative merits of any plea offer versus proceeding to trial, and in appropriate cases pursues reduction to reckless operation under ORC 4511.20, which can sometimes be sealed after applicable waiting periods under ORC 2953.32.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>ALS appeal (30-day deadline):</strong> Emergency filing, stay of suspension, procedural and substantive challenges under ORC 4511.191</li>
              <li><strong>First OVI defense:</strong> Stop validity, SFST administration, breathalyzer calibration records, rising BAC, diversion options</li>
              <li><strong>Second and third OVI defense:</strong> Enhanced penalty mitigation, continuous alcohol monitoring alternatives, vehicle immobilization challenges</li>
              <li><strong>High-tier OVI (BAC 0.17%+):</strong> Enhanced mandatory minimum defenses, interlock device requirements</li>
              <li><strong>CDL OVI defense:</strong> Federal disqualification consequences, commercial license impact strategy</li>
              <li><strong>Limited driving privileges:</strong> Petition to court for work/school/medical driving during suspension</li>
              <li><strong>Reckless operation reduction:</strong> Negotiating R.C. 4511.20 plea to preserve expungement eligibility</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been arrested for OVI in {suburb} or anywhere in Franklin County, contact Jwayyed Law LLC immediately at{' '}
              <a href={`tel:${FIRM_NAP.phoneRaw.replace('+', '')}`} className="text-[#b87333] underline hover:opacity-80">{FIRM_NAP.phone}</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              The 30-day ALS appeal deadline runs from the moment of arrest — it cannot be extended, and waiting even a few days reduces your options. Early involvement by an attorney is the single most important step you can take after an OVI arrest.
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
