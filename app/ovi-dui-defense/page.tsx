import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import OVIReviews from '@/components/OVIReviews';
import Link from 'next/link';
import { oviServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Ohio OVI Attorney | Experienced DUI/OVI Defense Lawyer | Jwayyed Law LLC',
  description: 'Experienced Ohio OVI/DUI defense attorney protecting your rights. Skilled representation for first, second, and third (misdemeanor) OVI charges in Ohio. We do not handle felony OVI cases. Schedule consultation: (614) 285-5482',
  keywords: [
    'Ohio OVI attorney',
    'Ohio DUI lawyer',
    'Ohio OVI defense attorney',
    'OVI defense Ohio',
    'DUI defense attorney Ohio',
    'first OVI defense',
  ],
  openGraph: {
    title: 'Ohio OVI Attorney | Jwayyed Law LLC',
    description: 'Experienced OVI/DUI defense representation throughout Ohio. Schedule consultation available.',
    url: 'https://www.jjlawohio.com/ovi-dui-defense',
  },
  alternates: {
    canonical: '/ovi-dui-defense',
  },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
];

const faqs = [
  {
    question: 'What is the difference between OVI and DUI in Ohio?',
    answer: 'Ohio uses the term OVI (Operating a Vehicle Impaired) instead of DUI (Driving Under the Influence). OVI under Ohio Revised Code 4511.19 means operating a vehicle while impaired by alcohol, drugs, or a combination. The terms are often used interchangeably, but OVI is the official legal term in Ohio. OVI can be charged based on BAC (blood alcohol content) of 0.08% or higher, or evidence of impairment regardless of BAC level.',
  },
  {
    question: 'What are the penalties for a first OVI in Ohio?',
    answer: 'A first OVI in Ohio is a first-degree misdemeanor. Low-level: 3 days to 6 months jail (court may allow 3-day Driver Intervention Program instead of jail, or waive jail with an ignition interlock). Fines $565 to $1,075; license 1 to 3 years ($315 reinstatement fee). Limited privileges after 15 days (30 for refusal); the 15-day wait may be waived if you have no prior Physical Control conviction. Treatment and restricted plates are optional at the court\'s discretion. High-level or refusal: 6 days minimum jail.',
  },
  {
    question: 'Can I refuse a breathalyzer test in Ohio?',
    answer: 'You can refuse a breathalyzer test in Ohio, but refusal carries severe consequences. Under Ohio\'s implied consent law (ORC 4511.191), refusing a chemical test results in automatic license suspension for 1 year (first offense) or longer for subsequent offenses. Refusal can also be used as evidence against you in court and may result in enhanced penalties. However, there are circumstances where refusal may be legally justified. Consult an attorney immediately if you refused testing.',
  },
  {
    question: 'What is a high-tier OVI in Ohio?',
    answer: 'High-tier OVI under Ohio Revised Code 4511.19 occurs when your BAC is 0.17% or higher. High-tier OVI carries enhanced penalties including mandatory jail time (6 days minimum for first offense), higher fines, longer license suspensions, and mandatory alcohol assessment and treatment. Even for a first offense, high-tier OVI requires more severe penalties than standard OVI. Prior convictions further enhance high-tier penalties.',
  },
  {
    question: 'Can I get limited driving privileges after an OVI suspension in Ohio?',
    answer: 'Yes, depending on offense level. First OVI: eligible after 15 days (30 for refusal); the 15-day wait may be waived if you have no prior Physical Control conviction; interlock is optional unless you have that prior. Second OVI: after 45 days (90 for refusal), interlock required. Third OVI: after 180 days (1 year for refusal), interlock required. Privileges typically allow driving for work, school, treatment, and necessary activities. An attorney can help you request an ALS hearing (30-day deadline) and apply for limited privileges when eligible.',
  },
];

export default function OVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio OVI Attorney"
        description="Experienced legal representation for OVI/DUI charges throughout Ohio. Protecting your rights and fighting for the best possible outcome."
      />

      {/* Sub-Services Grid */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mb-6">
            OVI / DUI Defense Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {oviServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-medium text-gray-900"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <OVIReviews />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Experienced OVI/DUI Defense Representation in Ohio
            </h2>
            
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed rounded-lg bg-amber-50 border border-amber-200 p-4">
              <strong>Disclaimer:</strong> Due to a conflict, Jwayyed Law LLC handles only civil, business, estate planning, and probate matters in Franklin County. We do not handle criminal defense, OVI/DUI, or traffic violations in Franklin County.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Facing OVI (Operating a Vehicle Impaired) charges throughout Ohio carries severe criminal penalties, license suspension, and long-term consequences that extend far beyond fines and jail time. At Jwayyed Law LLC, we provide experienced OVI/DUI defense representation for individuals charged under Ohio Revised Code 4511.19. Our attorney understands Ohio OVI laws including current requirements under HB 37 (Liv's Law, effective April 2025; current as of 2026), administrative license suspension procedures, and defense strategies necessary to protect your rights and achieve favorable outcomes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI in Ohio applies to impairment by alcohol, drugs (including marijuana, prescription drugs, and controlled substances), or a combination. Charges can be based on BAC of 0.08% or higher, evidence of impairment, or oral fluid or other chemical testing authorized under HB 37. The same penalty structure applies whether the offense involves alcohol, drugs, or both. Penalties escalate significantly with each subsequent offense, and high-tier OVI (BAC 0.17% or higher for alcohol) carries enhanced penalties even for first offenses. An OVI conviction results in criminal penalties, administrative license suspension, increased insurance rates, and a permanent criminal record.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's OVI laws are among the strictest in the nation, and prosecutors aggressively pursue these charges. Even first-time offenders face mandatory minimum sentences, automatic license suspensions, and significant financial penalties. Understanding the legal process, available defenses, and strategies to minimize consequences is essential. Early intervention by an experienced OVI defense attorney can significantly impact the outcome of your case, potentially resulting in reduced charges, dismissed cases, or favorable plea agreements that minimize consequences.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for OVI charges involves both criminal court proceedings and administrative license suspension (ALS) hearings. These are separate processes that require different strategies. The ALS hearing must be requested within 30 days of arrest, while criminal proceedings follow a different timeline. An experienced attorney can navigate both processes simultaneously to protect your driving privileges and minimize criminal consequences. Winning the ALS appeal can result in license reinstatement and can strengthen your criminal defense.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The consequences of an OVI conviction extend far beyond the immediate penalties. A criminal record can create barriers to employment, as many employers conduct background checks and may refuse to hire individuals with OVI convictions, particularly for driving-related jobs. Professional licenses in fields such as commercial driving, transportation, and security may be denied or revoked. Insurance rates typically increase dramatically (often 2-3x higher) for 3-5 years after an OVI conviction. Educational opportunities including financial aid eligibility can be affected. These collateral consequences persist long after completing sentences and paying fines.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI / DUI – Locations We Serve
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              We represent clients in OVI cases in the following Ohio counties and courts. Each county has its own page and court procedures; click through for court-specific information. (Note: We do not handle criminal or OVI matters in Franklin County due to a conflict—see Franklin County for civil, business, and estate planning.)
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link href="/courts/franklin-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Franklin County</span>
                <span className="block text-sm text-gray-600 mt-1">Columbus – Court information & practice areas</span>
              </Link>
              <Link href="/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Delaware County</span>
                <span className="block text-sm text-gray-600 mt-1">OVI/DUI Defense – Delaware County Municipal Court</span>
              </Link>
              <Link href="/locations/butler-county/ovi-dui-defense-butler-county-area-courts" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Butler County</span>
                <span className="block text-sm text-gray-600 mt-1">OVI/DUI Defense – Area Courts & Hamilton Municipal Court</span>
              </Link>
              <Link href="/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Greene County</span>
                <span className="block text-sm text-gray-600 mt-1">OVI/DUI Defense – Fairborn Municipal Court</span>
              </Link>
              <Link href="/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Montgomery County</span>
                <span className="block text-sm text-gray-600 mt-1">OVI/DUI Defense – Dayton Municipal Court</span>
              </Link>
              <Link href="/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Pickaway County</span>
                <span className="block text-sm text-gray-600 mt-1">OVI/DUI Defense – Circleville Municipal Court</span>
              </Link>
              <Link href="/locations/athens-county/ovi-dui-defense-athens-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Athens County</span>
                <span className="block text-sm text-gray-600 mt-1">OVI/DUI Defense – Athens Municipal Court</span>
              </Link>
              <Link href="/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Morrow County</span>
                <span className="block text-sm text-gray-600 mt-1">OVI/DUI Defense – Morrow County Municipal Court</span>
              </Link>
              <Link href="/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Clinton County</span>
                <span className="block text-sm text-gray-600 mt-1">OVI/DUI Defense – Wilmington Municipal Court</span>
              </Link>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio OVI Penalties by Offense Level
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">First OVI (within 10 years)</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Low-level: Jail 3 days to 6 months (court may allow 3-day DIP instead of jail or waive jail with interlock). High-level or refusal: 6 days to 6 months minimum.</li>
                <li>Fines: $565 to $1,075. License: 1 to 3 years ($315 reinstatement fee).</li>
                <li>Limited privileges after 15 days (30 for refusal); 15-day wait may be waived if no prior Physical Control. Interlock, treatment, and restricted plates optional at court&apos;s discretion (interlock required if prior Physical Control).</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Second OVI (within 10 years)</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Low-level: 10 days to 6 months jail (alternative minimum 5 days jail + 18 days house arrest with monitoring). High-level or refusal: 20 days to 6 months (alternative 10 days jail + 36 days house arrest).</li>
                <li>Fines: $715 to $1,625. License: 1 to 7 years ($315 reinstatement fee). Mandatory alcohol/drug assessment. Restricted plates required. 90-day vehicle immobilization if registered to you.</li>
                <li>Limited privileges after 45 days (90 for refusal). Ignition interlock required for alcohol-related OVI.</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Third OVI (within 10 years)</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Low-level: 30 days to 1 year jail (alternative 15 days jail + 55 days house arrest). High-level or refusal: 60 days to 1 year (alternative 30 days jail + 110 days house arrest).</li>
                <li>Fines: $1,040 to $2,750. License: 2 to 12 years ($315 reinstatement fee). Mandatory alcohol/drug addiction program. Restricted plates required. Vehicle forfeiture if registered to you.</li>
                <li>Limited privileges after 180 days (1 year for refusal). Ignition interlock required. First-degree misdemeanor; fourth OVI within 10 years becomes a felony.</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Fourth OVI (within 10 years)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Fourth OVI within 10 years is a felony. Jwayyed Law LLC does not represent clients on felony OVI charges.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Legal Process for OVI Charges
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the OVI legal process helps you prepare for what lies ahead. The process involves two separate legal proceedings:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Administrative License Suspension (ALS) Process</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Within 30 days of arrest, you must file an appeal of the ALS or lose your right to challenge it. An attorney can file the appeal, request a stay of suspension, and represent you at the ALS hearing. The hearing focuses on whether the officer had reasonable grounds to believe you were OVI, whether you were properly arrested, and whether testing was properly administered. Winning the ALS appeal can result in license reinstatement and can strengthen your criminal defense. The ALS process is separate from criminal court and requires immediate attention.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Criminal Court Process</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The criminal process begins with arraignment where you enter a plea (typically not guilty). Discovery follows where prosecutors must provide all evidence including police reports, breathalyzer maintenance records, dashcam footage, and witness statements. Pretrial motions may challenge evidence or seek dismissal. Most cases resolve through plea negotiations, but trial is an option. An experienced attorney navigates each stage strategically to achieve the best outcome while simultaneously handling the ALS appeal.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How an OVI Defense Attorney Can Help
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced OVI defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate ALS Appeal:</strong> File administrative license suspension appeal within the critical 30-day deadline, request stay of suspension, and represent you at ALS hearing to protect your driving privileges</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, dashcam footage, bodycam footage, breathalyzer maintenance records, field sobriety test procedures, and all evidence to identify weaknesses, illegal stops, or improper testing</li>
              <li><strong>Strategic Evidence Challenges:</strong> Challenge breathalyzer accuracy through maintenance records and calibration issues, field sobriety test administration through NHTSA protocol violations, blood test procedures through chain of custody issues, or improperly obtained evidence through pretrial motions</li>
              <li><strong>Defense Strategy Development:</strong> Develop and execute defense strategies including illegal traffic stops, lack of probable cause, rising BAC defense, medical conditions affecting testing, or insufficient evidence based on thorough investigation</li>
              <li><strong>Expert Consultation:</strong> Consult with toxicology experts, field sobriety test experts, or medical professionals to challenge prosecution evidence including breathalyzer results, blood test accuracy, or field sobriety test reliability</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges, negotiate favorable plea agreements, secure alternative sentencing options including treatment programs, or arrange dismissals upon completion of conditions</li>
              <li><strong>Limited Driving Privileges:</strong> Help eligible clients obtain limited driving privileges for work, school, treatment, and necessary activities during suspension, including preparation of applications and court representation</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination of police officers and expert witnesses, expert testimony, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
              <li><strong>Understanding Consequences:</strong> We help clients understand the long-term impact of an OVI and fight charges to avoid conviction when possible</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common OVI Defenses in Ohio
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Illegal Traffic Stop</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Police must have reasonable suspicion of a traffic violation or crime to stop your vehicle. If the stop was illegal, evidence obtained may be suppressed, potentially resulting in dismissed charges. An attorney can challenge the legality of the stop and argue for suppression of evidence.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Inaccurate Breathalyzer Results</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Breathalyzer machines must be properly calibrated, maintained, and operated by trained officers. Medical conditions, recent alcohol consumption, or improper procedures can affect results. An attorney can challenge breathalyzer accuracy, maintenance records, and operator qualifications.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Rising BAC Defense</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Your BAC may rise after you stop drinking. If you were under 0.08% at the time of driving but over 0.08% when tested, this defense may apply. This requires expert testimony and careful analysis of timing and consumption patterns.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Field Sobriety Test Challenges</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Field sobriety tests (walk-and-turn, one-leg-stand, horizontal gaze nystagmus) are subjective and can be affected by medical conditions, weather, road conditions, or improper administration. An attorney can challenge test administration, scoring, and reliability as evidence of impairment.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Administrative License Suspension (ALS) in Ohio
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's implied consent law under ORC 4511.191 requires automatic license suspension when you are charged with OVI. This administrative suspension is separate from any criminal penalties and begins immediately upon arrest if you refuse testing or fail a chemical test. You have only 30 days to appeal the ALS and request a stay of suspension. An experienced OVI attorney can file the appeal, request a stay, and challenge the suspension at a BMV hearing.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">ALS Suspension Periods</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li><strong>First offense—test over limit:</strong> Suspension per statute; eligible for limited privileges after 15 days (waiver possible if no prior Physical Control).</li>
                <li><strong>First offense—refusal:</strong> 1 year suspension; eligible for limited privileges after 30 days.</li>
                <li><strong>Second offense:</strong> 1 to 7 years suspension; eligible after 45 days (90 for refusal); interlock required.</li>
                <li><strong>Third offense:</strong> 2 to 12 years suspension; eligible after 180 days (1 year for refusal); interlock required.</li>
                <li><strong>License reinstatement fee:</strong> $315 when eligible.</li>
              </ul>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The ALS suspension runs concurrently with any criminal court suspension, but winning the ALS appeal can result in immediate license reinstatement and can strengthen your criminal defense case. You must file an ALS appeal within 30 days of arrest to preserve your right to challenge the suspension.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Limited Driving Privileges</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                First OVI: eligible after 15 days (30 for refusal). The 15-day wait may be waived by the judge if you have no prior &quot;Physical Control&quot; conviction within 10 years; if you do, interlock is required. Second OVI: eligible after 45 days (90 for refusal); interlock required. Third OVI: eligible after 180 days (1 year for refusal); interlock required. Privileges typically allow driving for work, school, treatment, medical care, and other necessary purposes. An attorney can help prepare the application and navigate the process.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">New in 2025: Oral Fluid Testing</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-2">
                Under HB 37 (Liv's Law), Ohio law enforcement is now authorized to conduct oral fluid (saliva) testing on drivers suspected of OVI. Officers swab the inside of the mouth to detect alcohol, drugs of abuse, controlled substances, and metabolites. Results can be used to establish probable cause for arrest and as evidence in court. Refusing an oral fluid test subjects you to Ohio's implied consent penalties including automatic license suspension. If you were subjected to oral fluid testing, an experienced attorney can challenge the testing procedures, accuracy, and admissibility of results.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Jwayyed Law LLC for OVI Defense
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated OVI/DUI defense representation throughout Ohio. We understand that OVI charges can arise from various circumstances and that every case requires careful analysis of evidence, testing procedures, and potential defenses. Our attorney works diligently to challenge evidence, develop strong defenses, and achieve favorable outcomes while protecting your driving privileges and future.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We handle misdemeanor OVI cases (first, second, and third OVI under Ohio law). Fourth OVI within 10 years is a felony; we do not handle felony OVI cases. Our firm also assists with administrative license suspension appeals, limited driving privileges, and working with prosecutors to secure alternative sentencing options including treatment programs when appropriate. We maintain open communication with clients, ensuring you understand the charges, potential consequences, defense strategies, and license suspension procedures throughout your case.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies including whether to pursue ALS appeals, negotiate pleas, or proceed to trial.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We recognize that OVI charges can have devastating consequences on your life, career, and future. Our firm is committed to providing personalized, dedicated representation focused on achieving the best possible outcome. Whether through ALS appeals, negotiation, pretrial motions, or trial advocacy, we fight aggressively to protect your rights, minimize consequences, and preserve your driving privileges. We handle cases from initial arrest through trial and post-conviction relief, providing comprehensive representation at every stage.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI charges anywhere in Ohio, contact Jwayyed Law LLC immediately to schedule a consultation. We will review your case, explain your rights, discuss potential defenses including license suspension appeals, and develop a strategy tailored to your situation. Time is critical in OVI cases—you have only 30 days to appeal an administrative license suspension, and early intervention by experienced counsel can significantly impact the outcome. Do not delay in seeking experienced legal representation to protect your rights, driving privileges, and future.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link href="/ovi-dui-defense/first-ovi" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">First OVI</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Defense for first-time OVI charges</p>
              </Link>
              <Link href="/ovi-dui-defense/high-tier-ovi" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">High-Tier OVI</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Defense for high BAC charges</p>
              </Link>
              <Link href="/ovi-dui-defense/limited-driving-privileges" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Limited Driving Privileges</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Get limited privileges during suspension</p>
              </Link>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Related Practice Areas</h4>
              <div className="flex flex-wrap gap-3 font-['Inter',_'Arial',_sans-serif]">
                <Link href="/criminal-defense" className="text-orange-500 hover:underline">Criminal Defense</Link>
                <Link href="/personal-injury/car-accidents" className="text-orange-500 hover:underline">Car Accident Claims</Link>
                <Link href="/criminal-defense" className="text-orange-500 hover:underline">Criminal Defense</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

