import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Delaware, Ohio | Delaware County Municipal Court | Jwayyed Law LLC',
  description: 'OVI/DUI defense attorney for Delaware, Powell, Dublin, Westerville, and Delaware County, Ohio. Delaware County Municipal Court. HB 37, ALS appeals. Call (614) 285-5482.',
  keywords: ['OVI lawyer Delaware Ohio', 'DUI attorney Delaware County', 'OVI defense Powell Ohio', 'Delaware County Municipal Court OVI', 'OVI lawyer Dublin Ohio'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Delaware, Ohio | Delaware County | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court',
  },
  alternates: { canonical: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'OVI/DUI Defense - Delaware County Municipal Court', href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court' },
];

const faqs = [
  {
    question: `What are the OVI penalties in Delaware County Municipal Court?`,
    answer: `Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Delaware County Municipal Court carries 3 to 180 days in jail (minimum 3 mandatory days or driver intervention program), fines of $565 to $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums. A second OVI within 10 years carries minimum 10 days in jail and fines of $715 to $1,625.`,
  },
  {
    question: `How do I appeal an ALS in Delaware County?`,
    answer: `Under ORC 4511.191, you have 30 days from the date of arrest to file an Administrative License Suspension appeal in Delaware County Municipal Court, located at 70 N. Union St, Delaware, OH 43015. The ALS takes effect immediately upon arrest and is separate from the criminal OVI case. An attorney can file the appeal, seek a stay of suspension, and challenge the suspension on procedural or substantive grounds before the deadline expires.`,
  },
  {
    question: `Can the 15-day hard suspension be waived in Delaware County under HB 37?`,
    answer: `Yes. HB 37 (effective April 9, 2025) authorizes Delaware County Municipal Court to waive the 15-day hard suspension waiting period for limited driving privileges if the first-time OVI defendant agrees to install and use a certified ignition interlock device. This allows first offenders to potentially maintain driving privileges for work or medical appointments almost immediately, subject to the court&apos;s discretion and interlock compliance.`,
  },
  {
    question: `What makes OVI defense in Delaware County unique?`,
    answer: `Delaware County is one of Ohio&apos;s fastest-growing counties, with high-traffic US 23 and US 36 corridors running through Delaware, Powell, and Lewis Center. Law enforcement agencies including the Delaware County Sheriff and Ohio State Highway Patrol actively patrol these routes. Our attorney understands which agencies handle stops in which areas and the specific procedures each agency uses for field sobriety and chemical testing.`,
  },
  {
    question: `What OVI defenses apply in Delaware County?`,
    answer: `Common OVI defenses our firm investigates for Delaware County cases include: challenging the stop for lack of reasonable suspicion; disputing Standardized Field Sobriety Test (SFST) administration under NHTSA guidelines; challenging breathalyzer or blood test accuracy and chain of custody; asserting the rising BAC defense; and filing motions to suppress illegally obtained evidence under ORC 2935.26. We obtain all videos, calibration records, and police reports before evaluating any offer.`,
  },
  {
    question: `Can I get limited driving privileges in Delaware County after an OVI?`,
    answer: `Yes. Delaware County Municipal Court can grant limited driving privileges for work, school, medical, and other essential purposes after an OVI suspension. Under HB 37, first-time defendants who agree to ignition interlock may qualify to bypass the standard waiting period. For ALS-related suspensions, privileges may be granted once the hard suspension period passes. Our firm petitions quickly and helps you meet all court requirements.`,
  },
  {
    question: `Will an OVI affect my professional license in Ohio?`,
    answer: `OVI convictions can impact professional licenses regulated by Ohio licensing boards, including medical, nursing, legal, real estate, and commercial driving licenses. Delaware County&apos;s higher-income professional population often faces these collateral consequences. Our firm evaluates professional licensing implications alongside the criminal case and works to achieve outcomes that minimize long-term career consequences.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for a Delaware County OVI?`,
    answer: `Jwayyed Law LLC provides experienced OVI/DUI defense in Delaware County Municipal Court. We act immediately to file ALS appeals within the 30-day deadline under ORC 4511.191, obtain all evidence, and build a defense strategy tailored to your case and the specific procedures of Delaware County Municipal Court. We understand the local prosecutors and court expectations in this rapidly growing suburban county. Call (614) 285-5482 for a consultation.`,
  },
];

export default function DelawareOVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI / DUI Lawyer for Delaware, Ohio"
        description="Delaware County Municipal Court OVI defense. Serving Delaware, Powell, Dublin, Westerville, Lewis Center, and Sunbury under HB 37 and ORC 4511.19."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              OVI/DUI Defense in Delaware County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County is one of the fastest-growing counties in Ohio, with booming communities along the US 23 and US 36 corridors including Delaware, Powell, Lewis Center, Dublin, Westerville, and Sunbury. The Delaware County Municipal Court, located at 70 N. Union St, Delaware, OH 43015, handles all misdemeanor OVI and DUI charges arising in the county. Jwayyed Law LLC provides aggressive OVI defense representation under{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">Ohio Revised Code 4511.19</Link>{' '}
              for clients throughout Delaware County.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The heavy growth in Delaware County has brought increased law enforcement presence on US 23, US 36, State Route 315, and the various connector routes linking suburb to suburb. The Delaware County Sheriff&apos;s Office, Ohio State Highway Patrol, and municipal police departments in Powell, Westerville, and Delaware City all make OVI stops and arrests. Our firm understands the specific procedures used by each agency and identifies any procedural deficiencies in the stop, testing, and arrest process.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Penalties in Delaware County Under HB 37
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s House Bill 37, effective April 9, 2025, revised the mandatory minimum penalties for OVI under ORC 4511.19. A first OVI conviction in Delaware County Municipal Court carries a mandatory minimum of 3 days in jail or 3 days in a certified driver intervention program, fines of $565 to $1,075, and license suspension of 1 to 3 years. The license reinstatement fee is $315. Importantly, HB 37 now allows Delaware County Municipal Court judges to waive the 15-day hard suspension waiting period for limited driving privileges when a first-time defendant agrees to use an ignition interlock device — a critical change for professionals who cannot afford to lose driving access.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              High-tier OVI charges — where the BAC is 0.17% or above, or where certain drug concentrations are detected — carry enhanced mandatory minimums even for first offenses: 6 mandatory days in jail (or 3 days in jail plus 3 days in a driver intervention program). A second OVI within 10 years escalates to a minimum of 10 days in jail, fines of $715 to $1,625, and suspension of 1 to 7 years. Given Delaware County&apos;s higher-income professional demographic, these penalties can have severe career and licensing consequences beyond the courtroom.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Administrative License Suspension — 30-Day Deadline in Delaware County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Upon arrest for OVI in Delaware County, the officer immediately seizes your license and issues a notice of Administrative License Suspension under ORC 4511.191. The ALS is an entirely separate civil proceeding from the criminal OVI case. You have only 30 days from the date of arrest to appeal the ALS in Delaware County Municipal Court. Missing this window permanently forfeits your right to administratively contest the suspension. Our firm treats the ALS appeal as an emergency matter — we file appeals promptly and request a stay of suspension so you can continue driving during the appeal process.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              ALS appeals can succeed when the officer failed to properly advise the defendant of consequences of refusal or submission, when the approved chemical testing device was improperly maintained, or when procedural requirements under ORC 4511.191 were not followed. Even a partial victory on an ALS appeal can meaningfully reduce the suspension period and improve your negotiating position in the criminal case.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Defense Strategies for Delaware County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm evaluates multiple defense angles for every Delaware County OVI case. We examine whether the initial traffic stop was supported by reasonable articulable suspicion — particularly important on busy US 23 or US 36 where officers sometimes conduct checkpoint-style enforcement. We review body-cam and dash-cam footage of field sobriety tests and evaluate whether the officer administered the walk-and-turn, one-leg stand, and horizontal gaze nystagmus tests in strict compliance with NHTSA standards. We obtain breathalyzer maintenance and calibration logs to challenge the accuracy of BAC readings, and we analyze whether blood draws were handled with proper chain-of-custody procedures. Where the BAC result is near the threshold, a rising BAC defense — arguing BAC was below 0.08% while driving and rose by the time of testing — can be powerful.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Professional Licensing Consequences in Delaware County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County&apos;s large professional workforce means that many OVI defendants face consequences beyond the criminal penalties. Ohio licensing boards for physicians, nurses, attorneys, real estate agents, commercial drivers, and others may investigate or sanction license holders convicted of OVI. Our firm considers these collateral consequences when evaluating potential plea agreements and works to achieve outcomes that minimize long-term professional impact. In some cases, a reduction to reckless operation under ORC 4511.20 can significantly limit licensing board exposure and expungement eligibility under ORC 2953.31 may follow after applicable waiting periods.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI or DUI charges in Delaware County, contact Jwayyed Law LLC immediately at (614) 285-5482. Time is critical — you have only 30 days from your arrest to appeal your administrative license suspension, and that deadline cannot be extended. We will review your case, explain all available defenses, and develop a strategy tailored to the facts of your case and the specific procedures of Delaware County Municipal Court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
