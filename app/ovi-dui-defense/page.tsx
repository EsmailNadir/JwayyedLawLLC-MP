import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Columbus OVI Attorney | Experienced DUI/OVI Defense Lawyer | Jwayyed Law LLC',
  description: 'Experienced Columbus OVI/DUI defense attorney protecting your rights. Skilled representation for first, second, third, and felony OVI charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: [
    'Columbus OVI attorney',
    'Columbus DUI lawyer',
    'Ohio OVI defense attorney',
    'OVI defense Columbus OH',
    'DUI defense attorney Ohio',
    'first OVI defense',
    'felony OVI lawyer',
    'Franklin County OVI attorney'
  ],
  openGraph: {
    title: 'Columbus OVI Attorney | Jwayyed Law LLC',
    description: 'Experienced OVI/DUI defense representation in Columbus and throughout Ohio. Schedule consultation available.',
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
    answer: 'A first OVI offense in Ohio under ORC 4511.19 is typically a first-degree misdemeanor. Penalties include: 3 days to 6 months jail (minimum 3 days mandatory or completion of 3-day Driver Intervention Program), fines of $565 to $1,075, driver\'s license suspension of 1 to 3 years, vehicle immobilization for 90 days, mandatory alcohol assessment and treatment, and installation of ignition interlock device may be required. License reinstatement fee is $315. These penalties increase significantly for subsequent offenses.',
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
    answer: 'Limited driving privileges may be available after an OVI suspension under Ohio Revised Code 4511.191. For first-time offenders who test over the legal limit with no prior alcohol-related arrests, judges can now waive the 15-day waiting period and grant privileges immediately. For refusals or those with prior convictions, mandatory waiting periods apply (30 days for first refusal, 45 days for second offense). Limited privileges typically allow driving to work, school, treatment, and other necessary locations. An ignition interlock device is required for those with prior OVI or Physical Control convictions. An attorney can help apply for limited privileges and guide you through the process.',
  },
];

export default function OVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus OVI Attorney"
        description="Experienced legal representation for OVI/DUI charges in Columbus and throughout Ohio. Protecting your rights and fighting for the best possible outcome."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Experienced OVI/DUI Defense Representation in Columbus, Ohio
            </h2>
            
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Facing OVI (Operating a Vehicle Impaired) charges in Columbus or throughout Ohio carries severe criminal penalties, license suspension, and long-term consequences that extend far beyond fines and jail time. At Jwayyed Law LLC, we provide experienced OVI/DUI defense representation for individuals charged under Ohio Revised Code 4511.19. Our attorney understands Ohio OVI laws including current requirements under HB 37 (Liv's Law, effective April 2025; current as of 2026), administrative license suspension procedures, and defense strategies necessary to protect your rights and achieve favorable outcomes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI charges in Ohio can be based on BAC (blood alcohol content) of 0.08% or higher, evidence of impairment from alcohol, drugs, or a combination, or results from the new oral fluid testing authorized under HB 37. Penalties escalate significantly with each subsequent offense, and high-tier OVI (BAC 0.17% or higher) carries enhanced penalties even for first offenses. An OVI conviction results in criminal penalties, administrative license suspension, increased insurance rates, and a permanent criminal record affecting employment and opportunities.
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
              Ohio OVI Penalties by Offense Level
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">First OVI Offense (ORC 4511.19)</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Jail: 3 days to 6 months (minimum 3 days mandatory or 3-day Driver Intervention Program)</li>
                <li>Fines: $565 to $1,075 (minimum increased under HB 37 effective April 2025)</li>
                <li>License Suspension: 1 to 3 years</li>
                <li>License Reinstatement Fee: $315 (reduced from $475)</li>
                <li>Vehicle Immobilization: 90 days</li>
                <li>Mandatory alcohol assessment and treatment</li>
                <li>Ignition interlock device may be required</li>
                <li>Limited driving privileges: 15-day waiting period may be waived by judge if no prior alcohol arrests</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Second OVI Offense (within 10 years)</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Jail: 10 days to 6 months (minimum 10 days mandatory)</li>
                <li>Fines: $715 to $1,625 (minimum increased under HB 37)</li>
                <li>License Suspension: 1 to 7 years</li>
                <li>Vehicle Immobilization: 90 days</li>
                <li>Mandatory alcohol treatment program</li>
                <li>Yellow license plates required</li>
                <li>Ignition interlock device required for limited driving privileges</li>
                <li>Limited privileges: 45-day waiting period (test over) or 90-day waiting period (refusal)</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Third OVI Offense (within 10 years)</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Jail: 30 days to 1 year (minimum 30 days mandatory)</li>
                <li>Fines: $1,040 to $2,750 (minimum increased under HB 37)</li>
                <li>License Suspension: 2 to 12 years</li>
                <li>Vehicle Forfeiture: Criminal forfeiture of vehicle (per ORC 4511.19)</li>
                <li>Misdemeanor of the first degree (becomes felony on 4th offense or more)</li>
                <li>Mandatory alcohol treatment</li>
                <li>Ignition interlock device required</li>
                <li>Limited privileges: 180-day waiting period</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">High-Tier OVI (BAC 0.17% or higher)</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Enhanced penalties for all offense levels</li>
                <li>Minimum 6 days jail for first offense (vs. 3 days standard)</li>
                <li>Higher fines and longer license suspensions</li>
                <li>Mandatory alcohol assessment and treatment</li>
              </ul>
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
              <li><strong>Record Sealing:</strong> Help eligible clients seal first-offense OVI records after required waiting periods (typically 3 years) and completion of sentences under Ohio Revised Code Chapter 2953</li>
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
                <li><strong>Test Refusal (First Offense):</strong> 1 year suspension (30-day waiting period for limited privileges)</li>
                <li><strong>Failed Test - Standard OVI (First Offense):</strong> 90 days suspension (15-day waiting period, may be waived by judge under HB 37)</li>
                <li><strong>Failed Test - High-Tier OVI (First Offense):</strong> 1 year suspension</li>
                <li><strong>Subsequent Offenses:</strong> Suspension periods increase significantly (2-5 years depending on offense number)</li>
                <li><strong>License Reinstatement Fee:</strong> $315 (reduced from $475 under HB 37)</li>
              </ul>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The ALS suspension runs concurrently with any criminal court suspension, but winning the ALS appeal can result in immediate license reinstatement and can strengthen your criminal defense case. You must file an ALS appeal within 30 days of arrest to preserve your right to challenge the suspension.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Limited Driving Privileges (Current 2026 Ohio Law - HB 37)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Under Ohio Revised Code 4511.191 as amended by HB 37 (effective April 2025), limited driving privileges may be available after an OVI suspension. For first-time offenders who test over the legal limit with no prior alcohol-related arrests or convictions, judges now have discretion to waive the 15-day waiting period and grant privileges immediately. For refusals or those with prior OVI or Physical Control convictions, mandatory waiting periods apply and an ignition interlock device is required before privileges can be granted. These privileges typically allow driving to work, school, treatment programs, medical appointments, and other necessary activities. An attorney can help prepare the application, present evidence of need, and navigate the approval process to minimize disruption to your daily life.
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
              Our firm provides dedicated OVI/DUI defense representation in Columbus, Franklin County, and throughout Ohio. We understand that OVI charges can arise from various circumstances and that every case requires careful analysis of evidence, testing procedures, and potential defenses. Our attorney works diligently to challenge evidence, develop strong defenses, and achieve favorable outcomes while protecting your driving privileges and future.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We handle all types of OVI cases, from first-time misdemeanor charges to serious felony OVI with prior convictions. Our firm also assists with administrative license suspension appeals, limited driving privileges, and working with prosecutors to secure alternative sentencing options including treatment programs when appropriate. We maintain open communication with clients, ensuring you understand the charges, potential consequences, defense strategies, and license suspension procedures throughout your case.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies including whether to pursue ALS appeals, negotiate pleas, or proceed to trial.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We recognize that OVI charges can have devastating consequences on your life, career, and future. Our firm is committed to providing personalized, dedicated representation focused on achieving the best possible outcome. Whether through ALS appeals, negotiation, pretrial motions, or trial advocacy, we fight aggressively to protect your rights, minimize consequences, and preserve your driving privileges. We handle cases from initial arrest through trial and post-conviction relief, providing comprehensive representation at every stage.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC immediately to schedule a consultation. We will review your case, explain your rights, discuss potential defenses including license suspension appeals, and develop a strategy tailored to your situation. Time is critical in OVI cases—you have only 30 days to appeal an administrative license suspension, and early intervention by experienced counsel can significantly impact the outcome. Do not delay in seeking experienced legal representation to protect your rights, driving privileges, and future.
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

