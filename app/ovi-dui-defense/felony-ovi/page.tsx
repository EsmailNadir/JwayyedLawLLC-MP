import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Felony OVI Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus felony OVI defense attorney protecting your rights. Skilled representation for felony OVI/DUI charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['felony OVI lawyer Columbus OH', 'felony DUI defense attorney Ohio', 'felony OVI attorney', 'Franklin County felony OVI lawyer'],
  openGraph: {
    title: 'Felony OVI Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/felony-ovi',
  },
  alternates: { canonical: '/ovi-dui-defense/felony-ovi' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Felony OVI', href: '/ovi-dui-defense/felony-ovi' },
];

const faqs = [
  {
    question: 'What makes an OVI a felony in Ohio?',
    answer: 'OVI becomes a felony in Ohio under ORC 4511.19 when: it is a third or subsequent OVI within 6 years, it is a fourth or subsequent OVI within 20 years, or it involves additional serious circumstances such as causing serious physical harm. Felony OVI convictions carry substantial prison time, large fines, and permanent felony records affecting employment, housing, and opportunities.',
  },
  {
    question: 'What are the penalties for felony OVI in Ohio?',
    answer: 'Felony OVI penalties in Ohio depend on offense level: Third OVI is a fourth-degree felony (30 days to 1 year jail, fines $850-$2,750). Fourth OVI is a fourth-degree felony with enhanced penalties. Fifth or subsequent OVI is a fourth-degree felony with mandatory prison time. All felony OVI convictions result in permanent felony records and substantial consequences.',
  },
  {
    question: 'Can felony OVI charges be reduced?',
    answer: 'Felony OVI charges may potentially be reduced through legal challenges, procedural defenses, or negotiations with prosecutors. An experienced felony OVI attorney can evaluate your case, develop defense strategies, and explore all options to reduce charges or minimize penalties.',
  },
  {
    question: 'What should I do if I am charged with felony OVI?',
    answer: 'If charged with felony OVI, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced felony OVI defense attorney right away. Felony charges require immediate experienced representation. An attorney can protect your rights and develop defense strategies.',
  },
  {
    question: 'Will I go to prison for felony OVI?',
    answer: 'Felony OVI convictions carry mandatory minimum jail sentences ranging from 30 days to substantial prison time depending on offense level and prior convictions. However, experienced defense representation can challenge charges, negotiate plea agreements, or develop defenses to minimize or avoid prison time.',
  },
];

export default function FelonyOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Felony OVI Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for felony OVI/DUI charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Felony OVI Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Felony OVI charges in Columbus or throughout Ohio carry the most severe penalties including mandatory prison time, substantial fines, lengthy license suspension, and permanent felony records. At Jwayyed Law LLC, we provide experienced defense representation for felony OVI charges under Ohio Revised Code 4511.19. Our attorney understands the severe consequences of felony OVI convictions and defense strategies necessary to protect your rights and freedom.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI becomes a felony in Ohio when it is a third or subsequent OVI within 6 years, a fourth or subsequent OVI within 20 years, or involves additional serious circumstances such as causing serious physical harm. Felony OVI convictions carry substantial prison time, large fines, and permanent felony records affecting employment, housing, and opportunities. Understanding the enhanced penalties, available defenses, and strategies to minimize consequences is essential. Early intervention by an experienced felony OVI defense attorney can significantly impact the outcome, potentially resulting in reduced charges, dismissed cases, or favorable plea agreements that minimize consequences.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for felony OVI charges involves both criminal court proceedings in Common Pleas Court (felony cases) and administrative license suspension (ALS) hearings. These are separate processes that require different strategies. The ALS hearing must be requested within 30 days of arrest, while criminal proceedings follow a different timeline. An experienced attorney can navigate both processes simultaneously to protect your driving privileges and minimize criminal consequences.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Felony OVI Penalties and Consequences in Ohio</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code 4511.19, felony OVI convictions carry severe penalties that escalate with each subsequent offense:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Third OVI (Fourth-Degree Felony)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Third OVI within 6 years of two prior OVI convictions is charged as a fourth-degree felony punishable by 30 days to 1 year jail (minimum 30 days mandatory), fines $850-$2,750, license suspension 2-12 years, vehicle immobilization 180 days or forfeiture, mandatory alcohol treatment, and permanent felony record.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Fourth OVI (Fourth-Degree Felony)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Fourth OVI within 6 years of three prior OVI convictions is charged as a fourth-degree felony with enhanced penalties including 60 days to 1 year jail (minimum 60 days mandatory), higher fines, longer license suspensions (3-15 years), enhanced vehicle immobilization or forfeiture, and permanent felony record.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Fifth or Subsequent OVI (Fourth-Degree Felony)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Fifth or subsequent OVI within 20 years is charged as a fourth-degree felony with mandatory prison time, substantial fines, lengthy license suspensions, vehicle forfeiture, and permanent felony record. These convictions have the most severe consequences.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Beyond criminal penalties, felony OVI convictions create lasting consequences including employment barriers (many employers refuse to hire individuals with felony OVI convictions), professional license restrictions, housing difficulties, dramatically increased insurance rates (often 4-5x higher for 7-10 years), permanent felony record, permanent loss of gun rights under federal law, immigration consequences for non-citizens, and voting restrictions until restoration. These consequences persist long after completing sentences.
              </p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Legal Process for Felony OVI Charges</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the legal process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Administrative License Suspension (ALS) Process</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Within 30 days of arrest, you must file an appeal of the ALS or lose your right to challenge it. For felony OVI, the ALS suspension is significantly longer (2-15 years depending on offense level). An attorney can file the appeal, request a stay of suspension, and represent you at the ALS hearing. Winning the ALS appeal can result in license reinstatement and can strengthen your criminal defense.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Criminal Court Process (Common Pleas Court)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Felony OVI cases are heard in Common Pleas Court as felony cases. The process begins with arraignment where you enter a plea (typically not guilty). Discovery follows where prosecutors must provide all evidence. Pretrial motions may challenge evidence or seek dismissal. Most cases resolve through plea negotiations, but trial is an option. An experienced attorney navigates each stage strategically to achieve the best outcome while simultaneously handling the ALS appeal.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Limited Driving Privileges</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Limited driving privileges after felony OVI are extremely restricted and typically require ignition interlock devices. Eligibility depends on circumstances and court approval. The application process requires court approval and must demonstrate necessity. An attorney can help prepare the application, present evidence of need, and navigate the approval process to minimize disruption to your daily life.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Felony OVI Defense Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced felony OVI defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate ALS Appeal:</strong> File administrative license suspension appeal within the critical 30-day deadline, request stay of suspension, and represent you at ALS hearing to protect your driving privileges</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, dashcam footage, bodycam footage, breathalyzer maintenance records, field sobriety test procedures, and all evidence to identify weaknesses, illegal stops, or improper testing</li>
              <li><strong>Prior Conviction Challenges:</strong> Challenge the validity of prior OVI convictions that elevate your charge to felony level, as invalid prior convictions can reduce charges to misdemeanor levels</li>
              <li><strong>Strategic Evidence Challenges:</strong> Challenge breathalyzer accuracy through maintenance records and calibration issues, field sobriety test administration through NHTSA protocol violations, blood test procedures through chain of custody issues, or improperly obtained evidence through pretrial motions</li>
              <li><strong>Defense Strategy Development:</strong> Develop and execute defense strategies including illegal traffic stops, lack of probable cause, rising BAC defense, medical conditions affecting testing, or insufficient evidence based on thorough investigation</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges (felony to misdemeanor if prior convictions are invalid), negotiate favorable plea agreements, secure alternative sentencing options including treatment programs, or arrange dismissals upon completion of conditions</li>
              <li><strong>Limited Driving Privileges:</strong> Help eligible clients obtain limited driving privileges for work, school, treatment, and necessary activities during suspension, including preparation of applications and court representation</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination of police officers and expert witnesses, expert testimony, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Common Defenses to Felony OVI Charges</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Challenging Prior Convictions</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If your prior OVI convictions are invalid, improperly recorded, or occurred outside the lookback period, you may be able to challenge them and reduce your charge to a misdemeanor. This requires careful review of prior case records and can significantly reduce penalties from felony to misdemeanor.
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
              Our firm provides dedicated felony OVI defense representation in Columbus, Franklin County, and throughout Ohio. We understand that felony OVI charges require immediate attention and experienced defense. Our attorney works diligently to challenge evidence, develop defense strategies, and achieve favorable outcomes while protecting your rights and freedom.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies including whether to pursue ALS appeals, challenge prior convictions, negotiate pleas, or proceed to trial.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing felony OVI charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC immediately for a schedule consultation. We will review your case, explain your rights, discuss potential defenses including prior conviction challenges and license suspension appeals, and develop a strategy tailored to your situation. Time is critical in felony OVI cases—you have only 30 days to appeal an administrative license suspension, and early intervention by experienced counsel can significantly impact the outcome. Do not delay in seeking experienced legal representation to protect your rights, driving privileges, and future.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

