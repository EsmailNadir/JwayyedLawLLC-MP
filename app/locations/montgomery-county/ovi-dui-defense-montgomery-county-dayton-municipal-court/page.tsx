import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Dayton, Ohio',
  description: 'OVI/DUI defense attorney for Dayton, Kettering, Huber Heights, and Montgomery County, Ohio. Dayton Municipal Court and Kettering Municipal Court. HB 37.',
  keywords: ['OVI lawyer Dayton Ohio', 'DUI attorney Montgomery County', 'OVI defense Kettering Ohio', 'Dayton Municipal Court OVI', 'Montgomery County OVI attorney'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Dayton, Ohio',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'OVI/DUI Defense - Montgomery County Courts', href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court' },
];

const faqs = [
  {
    question: `What are the OVI penalties in Dayton Municipal Court?`,
    answer: `Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Dayton Municipal Court carries 3 to 180 days in jail (minimum 3 mandatory days or driver intervention program), fines of $565 to $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory jail minimums. Second OVI within 10 years brings minimum 10 days in jail and fines of $715 to $1,625.`,
  },
  {
    question: `What is the difference between Dayton Municipal Court and Kettering Municipal Court for OVI?`,
    answer: `Jurisdiction depends on where the OVI offense occurred. Dayton Municipal Court at 301 W. Third St, Dayton handles cases from Dayton, Trotwood, Huber Heights, Vandalia, and Englewood. Kettering Municipal Court at 2325 Wilmington Pike, Kettering handles cases from Kettering, Miamisburg, Centerville, and surrounding areas. Each court has distinct local rules, docketing procedures, and prosecutorial practices. Jwayyed Law LLC practices in both courts.`,
  },
  {
    question: `How do I appeal an ALS in Montgomery County?`,
    answer: `Under ORC 4511.191, you have 30 days from the date of your OVI arrest to file an Administrative License Suspension appeal in the appropriate court — Dayton Municipal Court or Kettering Municipal Court. The ALS begins on the day of arrest and is entirely separate from the criminal OVI case. Our firm files ALS appeals immediately upon being retained and requests a stay of suspension to preserve your driving privileges during the appeal process.`,
  },
  {
    question: `Can the 15-day hard suspension be waived in Montgomery County under HB 37?`,
    answer: `Yes. HB 37 (effective April 9, 2025) authorizes courts in Montgomery County to waive the 15-day hard suspension waiting period for limited driving privileges if a first-time OVI defendant agrees to install and use a certified ignition interlock device. In an urban county where many residents depend on their vehicle for employment, this provision is especially significant. An experienced attorney can present this option persuasively to the court.`,
  },
  {
    question: `What OVI defenses are available in Montgomery County courts?`,
    answer: `Our firm investigates: the legality of the traffic stop under the Fourth Amendment; SFST administration compliance with NHTSA standards; breathalyzer calibration and maintenance records and operator certification; chain of custody for blood draws; and grounds to suppress evidence under ORC 2935.26. In Dayton, urban stop-and-investigate scenarios can present Fourth Amendment issues. We obtain all available video and documentation before evaluating any offer from the Montgomery County prosecutor.`,
  },
  {
    question: `Can I get limited driving privileges in Montgomery County after an OVI?`,
    answer: `Yes. Dayton Municipal Court and Kettering Municipal Court can grant limited driving privileges for work, school, medical, and treatment purposes. Under HB 37, first-time defendants who accept ignition interlock may avoid the standard waiting period. For Dayton-area residents who depend on vehicles to reach employment in a spread-out metro area, obtaining privileges quickly is often essential. Our firm petitions for privileges immediately and helps clients comply with all conditions.`,
  },
  {
    question: `Does a Montgomery County OVI affect CDL holders?`,
    answer: `Yes. Commercial driver&apos;s license holders face federal consequences for OVI convictions in addition to Ohio penalties. Under federal law, a CDL holder convicted of OVI in a personal vehicle faces a one-year CDL disqualification for a first offense; a second offense brings lifetime disqualification. Montgomery County&apos;s large trucking and transportation sector means CDL consequences are a significant concern. Our firm evaluates CDL implications when developing defense strategies.`,
  },
  {
    question: `Why hire Jwayyed Law LLC for a Montgomery County OVI?`,
    answer: `Jwayyed Law LLC provides experienced OVI/DUI defense in Dayton Municipal Court and Kettering Municipal Court. Montgomery County is Ohio&apos;s fourth-largest county and these courts handle a high volume of OVI cases. We act immediately on ALS appeals under ORC 4511.191, obtain all evidence, and build a tailored defense strategy. Call (614) 285-5482 for a consultation about your Montgomery County OVI case.`,
  },
];

export default function MontgomeryOVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI / DUI Lawyer for Dayton, Ohio"
        description="Montgomery County OVI defense in Dayton Municipal Court and Kettering Municipal Court. Serving Dayton, Kettering, Huber Heights, Trotwood, Englewood, Miamisburg, and Vandalia."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              OVI/DUI Defense in Montgomery County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County is Ohio&apos;s fourth-largest county, with Dayton serving as its urban center. OVI and DUI cases from across this large county are heard in two primary municipal courts: Dayton Municipal Court at 301 W. Third St, Dayton, OH 45402, which handles cases from Dayton, Trotwood, Huber Heights, Vandalia, and Englewood; and Kettering Municipal Court at 2325 Wilmington Pike, Kettering, OH 45420, which handles cases from Kettering, Miamisburg, Centerville, and surrounding communities. Jwayyed Law LLC provides aggressive{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI defense</Link>{' '}
              in both courts under Ohio Revised Code 4511.19.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Dayton metropolitan area sees substantial OVI enforcement activity on I-75, I-70, US 35, and the many state routes connecting Dayton&apos;s suburbs. The Dayton Police Department, Kettering Police Department, Montgomery County Sheriff&apos;s Office, and Ohio State Highway Patrol all conduct OVI stops throughout the county. Our firm understands the enforcement patterns and specific procedures used by each agency, which directly informs our defense strategy for every client.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Penalties in Montgomery County Under HB 37
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s House Bill 37, effective April 9, 2025, updated mandatory minimum OVI penalties under ORC 4511.19. In both Dayton Municipal Court and Kettering Municipal Court, a first OVI conviction carries at least 3 days in jail or 3 days in a certified driver intervention program, fines of $565 to $1,075, and license suspension of 1 to 3 years. The license reinstatement fee is $315. HB 37 also introduced the ability for courts to waive the 15-day hard suspension period for limited driving privileges when a first-time defendant agrees to ignition interlock — an important option for Montgomery County residents who depend on their vehicle for work.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums: at least 6 days in jail (or 3 days jail plus 3 days in a driver intervention program) even for first offenses. Second OVI within 10 years means at minimum 10 days in jail, fines of $715 to $1,625, and a 1-to-7-year suspension. Commercial driver&apos;s license holders face additional federal CDL disqualification consequences on top of Ohio penalties — a significant issue in Montgomery County&apos;s transportation-heavy economy.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Administrative License Suspension — 30-Day Deadline in Montgomery County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An OVI arrest in Montgomery County immediately triggers an Administrative License Suspension under ORC 4511.191. The ALS is a civil administrative proceeding entirely separate from the criminal OVI case; it begins on the day of arrest and requires a separate appeal filed within 30 days to contest. The appeal must be filed in the appropriate court — Dayton Municipal Court or Kettering Municipal Court, depending on where the offense occurred. Our firm files ALS appeals as an urgent priority upon retention and simultaneously requests a stay of suspension to allow continued driving during the appeal.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              ALS appeals succeed when officers fail to properly advise the defendant of rights under ORC 4511.191, when the chemical testing device lacked current calibration or proper maintenance records, or when testing procedures deviated from approved methods. In a large county like Montgomery with many different law enforcement agencies, procedural inconsistencies are not uncommon. Even a partial ALS victory can reduce the total suspension period and strengthen your position in the criminal proceedings.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Defense Strategies in Dayton and Kettering Courts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm conducts thorough investigation into every element of a Montgomery County OVI case. We review whether the stop was based on genuine reasonable articulable suspicion or whether it was pretextual. We examine body-cam and dash-cam footage of field sobriety tests and evaluate strict compliance with NHTSA protocols for the horizontal gaze nystagmus, walk-and-turn, and one-leg stand tests. We obtain breathalyzer calibration logs and operator certification records for the specific instrument used, and analyze blood draw chain-of-custody documentation when blood testing was used. Rising BAC defenses may apply when the defendant consumed alcohol shortly before driving and BAC was below the legal limit at the time of driving.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Dayton Municipal Court vs. Kettering Municipal Court — Key Differences
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Although both courts apply Ohio&apos;s OVI statutes, Dayton Municipal Court and Kettering Municipal Court have distinct local rules, docketing schedules, prosecutorial offices, and judicial practices. Dayton Municipal Court handles a high volume of criminal cases as a court for Ohio&apos;s fourth-largest city, which can affect scheduling timelines and negotiation dynamics. Kettering Municipal Court, serving a more suburban jurisdiction, operates with different staffing and docket management. Our attorney practices in both courts and tailors strategy accordingly.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI or DUI charges in Montgomery County, contact Jwayyed Law LLC immediately at (614) 285-5482. The 30-day ALS appeal deadline under ORC 4511.191 is strict and cannot be waived, so early contact with an attorney is essential. We will review your case, identify all available defenses, and develop a strategy specific to your case and the court — whether Dayton Municipal Court or Kettering Municipal Court — where your matter will be heard.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
