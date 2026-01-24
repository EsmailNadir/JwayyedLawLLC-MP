import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Second OVI Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus second OVI defense attorney protecting your rights. Skilled representation for second OVI/DUI charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['second OVI lawyer Columbus OH', 'second DUI defense attorney Ohio', 'repeat OVI attorney', 'Franklin County second OVI lawyer'],
  openGraph: {
    title: 'Second OVI Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/second-ovi',
  },
  alternates: { canonical: '/ovi-dui-defense/second-ovi' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Second OVI', href: '/ovi-dui-defense/second-ovi' },
];

const faqs = [
  {
    question: 'What are the penalties for a second OVI in Ohio?',
    answer: 'A second OVI offense in Ohio under ORC 4511.19 carries enhanced penalties: 10 days to 6 months jail (minimum 10 days mandatory), fines of $525 to $1,625, driver\'s license suspension of 1 to 7 years, vehicle immobilization for 180 days, mandatory alcohol treatment program, and yellow license plates required. High-tier second OVI carries even more severe penalties.',
  },
  {
    question: 'Can I get limited driving privileges after a second OVI?',
    answer: 'Limited driving privileges may be available after a second OVI suspension, but eligibility is more restricted than first offenses. An ignition interlock device is typically required. An attorney can help determine eligibility and apply for limited privileges if available.',
  },
  {
    question: 'Will a second OVI be a felony?',
    answer: 'A second OVI is typically still a misdemeanor, but third and subsequent offenses are charged as felonies. However, a second OVI within 6 years of a prior OVI carries enhanced penalties. An experienced attorney can help understand your specific situation and potential penalties.',
  },
  {
    question: 'What should I do if I am charged with a second OVI?',
    answer: 'If charged with a second OVI, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced OVI defense attorney right away. You have only 30 days to appeal an administrative license suspension. An attorney can protect your rights and develop defense strategies.',
  },
  {
    question: 'Can a second OVI be reduced to a first offense?',
    answer: 'While it is difficult, a second OVI may potentially be reduced to a first offense in some circumstances through legal challenges, procedural defenses, or negotiations with prosecutors. An experienced attorney can evaluate your case and explore all options.',
  },
];

export default function SecondOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Second OVI Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for second OVI/DUI charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Second OVI Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A second OVI charge in Columbus or throughout Ohio carries significantly enhanced penalties compared to a first offense, including mandatory jail time, longer license suspension, vehicle immobilization, and mandatory alcohol treatment. At Jwayyed Law LLC, we provide experienced defense representation for second OVI charges under Ohio Revised Code 4511.19. Our attorney understands the severe consequences of second OVI convictions and defense strategies necessary to protect your rights.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Second OVI charges are treated much more seriously than first offenses under Ohio law. Prosecutors aggressively pursue these charges, and judges typically impose harsher sentences. Understanding the enhanced penalties, available defenses, and strategies to minimize consequences is essential. Early intervention by an experienced second OVI defense attorney can significantly impact the outcome, potentially resulting in reduced charges, dismissed cases, or favorable plea agreements that minimize consequences.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for second OVI charges involves both criminal court proceedings and administrative license suspension (ALS) hearings. These are separate processes that require different strategies. The ALS hearing must be requested within 30 days of arrest, while criminal proceedings follow a different timeline. An experienced attorney can navigate both processes simultaneously to protect your driving privileges and minimize criminal consequences. Winning the ALS appeal can result in license reinstatement and can strengthen your criminal defense.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Second OVI Penalties and Consequences in Ohio</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code 4511.19, second OVI convictions carry significantly enhanced penalties compared to first offenses:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Criminal Penalties</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li><strong>Jail:</strong> 10 days to 6 months (minimum 10 days mandatory, cannot be suspended)</li>
                <li><strong>Fines:</strong> $525 to $1,625 plus court costs</li>
                <li><strong>License Suspension:</strong> 1 to 7 years (significantly longer than first offense)</li>
                <li><strong>Vehicle Immobilization:</strong> 180 days (double the first offense period)</li>
                <li><strong>Mandatory Alcohol Treatment:</strong> Required completion of alcohol assessment and treatment program</li>
                <li><strong>Yellow License Plates:</strong> Required display of yellow license plates during suspension period</li>
                <li><strong>Ignition Interlock Device:</strong> May be required for limited driving privileges</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">High-Tier Second OVI Penalties</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If your BAC was 0.17% or higher, you face high-tier second OVI penalties including mandatory minimum 20 days jail (vs. 10 days standard), higher fines, longer license suspensions, and enhanced vehicle immobilization. High-tier penalties apply even for second offenses and significantly increase consequences.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Beyond criminal penalties, second OVI convictions create lasting consequences including employment barriers (many employers refuse to hire individuals with multiple OVI convictions), professional license restrictions, housing difficulties, dramatically increased insurance rates (often 3-4x higher for 5-7 years), permanent criminal record, and immigration consequences for non-citizens. These consequences persist long after completing sentences.
              </p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Legal Process for Second OVI Charges</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the legal process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Administrative License Suspension (ALS) Process</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Within 30 days of arrest, you must file an appeal of the ALS or lose your right to challenge it. For second OVI, the ALS suspension is significantly longer (1-7 years). An attorney can file the appeal, request a stay of suspension, and represent you at the ALS hearing. Winning the ALS appeal can result in license reinstatement and can strengthen your criminal defense.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Criminal Court Process</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The criminal process begins with arraignment where you enter a plea (typically not guilty). Discovery follows where prosecutors must provide all evidence. Pretrial motions may challenge evidence or seek dismissal. Most cases resolve through plea negotiations, but trial is an option. An experienced attorney navigates each stage strategically to achieve the best outcome while simultaneously handling the ALS appeal.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Limited Driving Privileges</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Limited driving privileges may be available after a second OVI suspension, but eligibility is more restricted than first offenses. An ignition interlock device is typically required. The application process requires court approval and must demonstrate necessity. An attorney can help prepare the application, present evidence of need, and navigate the approval process to minimize disruption to your daily life.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Second OVI Defense Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced second OVI defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate ALS Appeal:</strong> File administrative license suspension appeal within the critical 30-day deadline, request stay of suspension, and represent you at ALS hearing to protect your driving privileges</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, dashcam footage, bodycam footage, breathalyzer maintenance records, field sobriety test procedures, and all evidence to identify weaknesses, illegal stops, or improper testing</li>
              <li><strong>Strategic Evidence Challenges:</strong> Challenge breathalyzer accuracy through maintenance records and calibration issues, field sobriety test administration through NHTSA protocol violations, blood test procedures through chain of custody issues, or improperly obtained evidence through pretrial motions</li>
              <li><strong>Defense Strategy Development:</strong> Develop and execute defense strategies including illegal traffic stops, lack of probable cause, rising BAC defense, medical conditions affecting testing, or insufficient evidence based on thorough investigation</li>
              <li><strong>Prior Conviction Challenges:</strong> Challenge the validity of prior OVI convictions that elevate your charge to second offense, as invalid prior convictions can reduce charges to first offense</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges, negotiate favorable plea agreements, secure alternative sentencing options including treatment programs, or arrange dismissals upon completion of conditions</li>
              <li><strong>Limited Driving Privileges:</strong> Help eligible clients obtain limited driving privileges for work, school, treatment, and necessary activities during suspension, including preparation of applications and court representation</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination of police officers and expert witnesses, expert testimony, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Common Defenses to Second OVI Charges</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Challenging Prior Conviction</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If your prior OVI conviction is invalid, improperly recorded, or occurred outside the lookback period, you may be able to challenge it and reduce your charge to a first offense. This requires careful review of prior case records and can significantly reduce penalties.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Illegal Traffic Stop</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Police must have reasonable suspicion of a traffic violation or crime to stop your vehicle. If the stop was illegal, evidence obtained may be suppressed, potentially resulting in dismissed charges. An attorney can challenge the legality of the stop and argue for suppression of evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Inaccurate Breathalyzer Results</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Breathalyzer machines must be properly calibrated, maintained, and operated by trained officers. Medical conditions, recent alcohol consumption, or improper procedures can affect results. An attorney can challenge breathalyzer accuracy, maintenance records, and operator qualifications.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Field Sobriety Test Challenges</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Field sobriety tests are subjective and can be affected by medical conditions, weather, road conditions, or improper administration. An attorney can challenge test administration, scoring, and reliability as evidence of impairment.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated second OVI defense representation in Columbus, Franklin County, and throughout Ohio. We understand that second OVI charges require immediate attention and experienced defense. Our attorney works diligently to challenge evidence, develop defense strategies, and achieve favorable outcomes while protecting your rights and driving privileges.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies including whether to pursue ALS appeals, negotiate pleas, or proceed to trial.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing second OVI charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC immediately for a schedule consultation. We will review your case, explain your rights, discuss potential defenses including prior conviction challenges and license suspension appeals, and develop a strategy tailored to your situation. Time is critical in second OVI cases—you have only 30 days to appeal an administrative license suspension, and early intervention by experienced counsel can significantly impact the outcome. Do not delay in seeking experienced legal representation to protect your rights, driving privileges, and future.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

