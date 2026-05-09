import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Felony OVI Defense Attorney | Jwayyed Law',
  description: 'Felony OVI in Columbus? 4th offense F4 felony OVI, Franklin County Court of Common Pleas. Mandatory prison. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Columbus felony OVI lawyer', 'felony DUI Columbus Ohio', '4th offense OVI Columbus', 'Columbus felony OVI attorney', 'Franklin County felony OVI defense'],
  openGraph: {
    title: 'Columbus Felony OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/felony-ovi-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/felony-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Felony OVI — Columbus', href: '/locations/franklin-county/felony-ovi-columbus' },
];

const faqs = [
  {
    question: 'When does a Columbus OVI become a felony?',
    answer: 'Under R.C. 4511.19(G)(1)(d), a fourth or subsequent OVI offense within 10 years is a fourth-degree felony (F4). Under R.C. 4511.19(G)(1)(e), a fourth OVI where the prior OVI resulted in a prior felony conviction is a third-degree felony (F3). Felony OVI cases are transferred from Franklin County Municipal Court to Franklin County Court of Common Pleas after arraignment for all further proceedings including trial.',
  },
  {
    question: 'What are the mandatory penalties for a felony OVI in Columbus?',
    answer: 'An F4 felony OVI in Columbus carries mandatory prison of 60–120 days, an optional additional 1–5 years, fines up to $5,000, and a lifetime or up to life license suspension. Criminal forfeiture of the vehicle is mandatory. The defendant serves the mandatory prison term in a state correctional facility — not county jail. An F3 felony OVI carries mandatory prison of 60–120 days plus additional 1–5 years community control, fines up to $10,000, and potential lifetime suspension.',
  },
  {
    question: 'Where is a Columbus felony OVI case heard?',
    answer: 'Columbus felony OVI cases are arraigned at Franklin County Municipal Court (375 S. High Street) and then transferred to Franklin County Court of Common Pleas for all further proceedings — pretrial motions, plea hearings, trial, and sentencing. The Common Pleas court follows different procedural rules and timelines than Municipal Court. Our firm handles both venues and ensures continuity of representation across the transfer.',
  },
  {
    question: 'Can a Columbus felony OVI still be challenged on constitutional grounds?',
    answer: 'Yes. All Fourth Amendment OVI defenses — stop validity, field sobriety test administration, breathalyzer calibration, blood test chain of custody — apply to felony OVI cases as well as misdemeanor OVI. Additionally, the prior conviction record is particularly scrutinized in felony cases: each prior OVI must qualify within the look-back period, and defects in prior conviction records can potentially defeat the felony designation. These challenges must be raised early in the proceedings at Franklin County Court of Common Pleas.',
  },
  {
    question: 'Is there any alternative to prison for a Columbus felony OVI?',
    answer: 'F4 felony OVI carries a mandatory prison term of 60–120 days in a state correctional facility — not county jail, and not suspended. After the mandatory term, the court may impose additional community control conditions. The mandatory term is not discretionary, but the length and conditions of post-release supervision may be negotiated. In some cases, aggressive suppression of underlying evidence can result in charge reduction that reduces or eliminates the mandatory prison requirement.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus felony OVI?',
    answer: 'A felony OVI in Columbus is one of the most serious criminal charges that occurs at the intersection of traffic law and criminal law — carrying mandatory state prison, fines up to $5,000, potential lifetime license suspension, and a felony record. Jwayyed Law LLC provides experienced felony OVI defense, appearing at both Franklin County Municipal Court and Franklin County Court of Common Pleas. Call (614) 285-5482 immediately.',
  },
];

export default function ColumbusFelonyOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus Felony OVI Defense Attorney"
        description="Facing felony OVI in Columbus? Fourth-degree felony, mandatory prison, Franklin County Court of Common Pleas. Jwayyed Law LLC. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Felony OVI Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A fourth or subsequent OVI within 10 years in Columbus is a fourth-degree felony under R.C. 4511.19(G)(1)(d) — carrying mandatory prison time in a state correctional facility, fines up to $5,000, and potential lifetime license suspension. Unlike misdemeanor OVI cases that are fully processed at Franklin County Municipal Court, felony OVI cases are transferred to Franklin County Court of Common Pleas after arraignment, where the full weight of Ohio&apos;s felony prosecution system applies. The mandatory prison term for an F4 felony OVI is 60–120 days — not suspended, not served in county jail. This is a felony conviction that permanently affects housing, employment, voting rights, and professional licensing. Jwayyed Law LLC provides experienced felony OVI defense in Columbus, appearing at both Franklin County Municipal Court and Franklin County Court of Common Pleas. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              immediately.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              When Does a Columbus OVI Become a Felony?
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              R.C. 4511.19(G)(1)(d) designates an OVI as a fourth-degree felony when it is the defendant&apos;s fourth or subsequent OVI violation within a 10-year look-back period. R.C. 4511.19(G)(1)(e) creates a third-degree felony when the defendant has three or more prior OVI convictions and one of those was itself a prior felony OVI. For the escalation to apply, each prior conviction must qualify as an OVI equivalent, must fall within the applicable look-back period, and must be established by competent proof. Our firm scrutinizes every prior conviction in the record.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Felony OVI Penalties in Franklin County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An F4 felony OVI conviction in Columbus carries: mandatory 60–120 days in a state correctional facility (not county jail, not suspended); optional additional prison or community control of 1–5 years; fines up to $5,000; a license suspension that may extend to a lifetime; and criminal forfeiture of the vehicle. These are imposed upon conviction and cannot be waived below the mandatory minimums regardless of the defendant&apos;s circumstances. An F3 felony OVI escalates the potential prison term further.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies for Columbus Felony OVI
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The most powerful defense in a Columbus felony OVI case is often the prior conviction record. If any one of the three or more qualifying prior OVI convictions does not hold up — whether due to a defective record, an out-of-jurisdiction conviction that does not qualify as an equivalent, a conviction that falls outside the look-back period, or a conviction that should have been for a different offense — the felony designation may fail, reducing the current charge to a third-offense misdemeanor. All standard Fourth Amendment defenses also apply to the current arrest: stop validity, field sobriety test compliance, breath/blood test accuracy.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For the current OVI offense itself, the same challenges available in any misdemeanor OVI apply here: was the traffic stop constitutionally valid? Were the field sobriety tests administered in compliance with NHTSA protocols? Was the breath or blood testing instrument properly calibrated and maintained? Is the BAC result accurate? In felony OVI cases, these challenges are often pursued through pretrial suppression motions in Franklin County Court of Common Pleas, where the formal rules of evidence and procedure provide the full range of defense options.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Transfer From Franklin County Municipal Court to Common Pleas
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A Columbus felony OVI case is arraigned at Franklin County Municipal Court (375 S. High Street) — the same as any misdemeanor OVI. But because the charge is a felony, the case is bound over to Franklin County Court of Common Pleas (373 S. High Street, two blocks away) after the preliminary hearing or waiver. All further proceedings — pretrial motions, plea, trial, sentencing — occur in the Common Pleas court. The two courts have different rules, different dockets, and different prosecution offices involved. Our firm handles representation through both courts and ensures the client has continuity of counsel through the entire process.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Franklin County Common Pleas, the prosecution is handled by the Franklin County Prosecutor&apos;s Office rather than the Columbus City Attorney&apos;s Office (which handles municipal court cases). The case proceeds under the Ohio Rules of Criminal Procedure applicable to felony proceedings, including grand jury indictment in some circumstances, formal discovery under Criminal Rule 16, and full suppression hearing procedures. The Common Pleas arraignment typically occurs within days of the bind-over, and all motions deadlines begin running from that point.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              ALS, License Suspension, and Interlock Requirements in Felony OVI Cases
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A felony OVI arrest in Columbus triggers the same Administrative License Suspension (ALS) process as a misdemeanor OVI arrest under R.C. 4511.191 — with the same 30-day appeal deadline running from the date of arrest. Given the severity of a felony OVI case, the ALS appeal is filed immediately upon retention and a stay of suspension is requested while the appeal is pending. Failing to file within 30 days forfeits the only available challenge to the administrative suspension, which runs three years for test refusal on a fourth-or-greater offense.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              On top of the ALS, a felony OVI conviction carries a court-imposed license suspension that may extend to a lifetime under R.C. 4511.19(G)(1)(d). Limited driving privileges — if granted at all — require an ignition interlock device for the entire period of any limited privilege. For defendants who drive commercially or professionally, the practical effect of a felony OVI suspension is immediate career disruption even before the mandatory prison term begins. Planning around the license consequences — including interlock timing and limited-privilege petitions — is part of our defense work from the earliest stage of the case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Collateral Consequences of a Felony OVI Conviction
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A felony OVI conviction in Columbus permanently changes a defendant&apos;s legal status in ways that extend far beyond the criminal sentence. Ohio felony convictions generally disqualify the defendant from possessing firearms under both federal and state law. A felony conviction can result in loss of professional licenses in medicine, law, nursing, education, contracting, and other licensed fields — most licensing boards treat felony convictions as grounds for suspension or revocation. For non-citizens, a felony OVI conviction may have serious immigration consequences including deportability. Employment opportunities requiring security clearances or bonding are typically foreclosed by a felony record.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Unlike most misdemeanor OVI convictions, a felony OVI conviction under current Ohio law is not eligible for expungement under R.C. 2953.32 — the statute excludes most felony OVI offenses from expungement eligibility. This means the conviction remains permanently on the public record. The permanence of the record makes aggressive defense before any conviction even more critical — a felony OVI that is reduced to a misdemeanor through successful challenge of the prior conviction record is a significantly better outcome than accepting the felony charge.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC immediately at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              Felony OVI cases require immediate and aggressive defense from the first court appearance.
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
