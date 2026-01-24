import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Felony Charges Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus felony defense attorney protecting your rights. Skilled representation for all felony charges in Ohio. Free consultation: (614) 285-5482',
  keywords: ['felony lawyer Columbus OH', 'felony defense attorney Ohio', 'felony charges attorney', 'Franklin County felony lawyer'],
  openGraph: {
    title: 'Felony Charges Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/felony-charges',
  },
  alternates: { canonical: '/criminal-defense/felony-charges' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Felony Charges', href: '/criminal-defense/felony-charges' },
];

const faqs = [
  {
    question: 'What is a felony in Ohio?',
    answer: 'A felony in Ohio is a serious crime punishable by substantial prison time, ranging from six months to life imprisonment. Felonies are classified as first, second, third, fourth, or fifth degree offenses, with first-degree felonies carrying the most severe penalties. Felony convictions result in permanent criminal records affecting employment, professional licenses, housing, and rights including gun ownership.',
  },
  {
    question: 'What are the penalties for felonies in Ohio?',
    answer: 'Felony penalties in Ohio under Ohio Revised Code Chapter 2929 depend on offense degree: First-degree felonies: 3-11 years to life imprisonment, fines up to $20,000. Second-degree felonies: 2-8 years imprisonment, fines up to $15,000. Third-degree felonies: 1-5 years imprisonment, fines up to $10,000. Fourth-degree felonies: 6-18 months imprisonment, fines up to $5,000. Fifth-degree felonies: 6-12 months imprisonment, fines up to $2,500. Prior convictions significantly enhance penalties.',
  },
  {
    question: 'Can felony charges be reduced to misdemeanors in Ohio?',
    answer: 'Yes, felony charges may be reduced to misdemeanors through various defenses including lack of intent, insufficient evidence, or negotiations with prosecutors. Prosecutors have discretion to reduce charges, and plea negotiations may result in reduced charges or alternative sentencing. An experienced felony defense attorney can evaluate your case and work toward reduced charges.',
  },
  {
    question: 'What are the consequences of a felony conviction?',
    answer: 'Felony convictions carry severe long-term consequences including substantial prison time, large fines, permanent criminal records, loss of gun rights, employment difficulties, professional license restrictions, housing challenges, and voting restrictions. These consequences can last for life and significantly impact your ability to work, live, and function in society.',
  },
  {
    question: 'What should I do if I am charged with a felony in Ohio?',
    answer: 'If charged with a felony in Ohio, exercise your rights immediately. Do not discuss the case with anyone except your attorney. Contact an experienced felony defense attorney right away. Avoid contact with witnesses or co-defendants. Do not make statements to police or prosecutors without your attorney present. An attorney can protect your rights and develop defense strategies.',
  },
];

export default function FelonyChargesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Felony Charges Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for all felony charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Felony Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Felony charges in Columbus or throughout Ohio carry serious penalties including substantial prison time, large fines, and permanent criminal records that affect employment, housing, and opportunities for life. At Jwayyed Law LLC, we provide experienced defense representation for all felony charges under Ohio Revised Code Chapter 2929. Our attorney understands Ohio felony laws, sentencing structures, and defense strategies necessary to protect your rights.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Felonies in Ohio are classified as first, second, third, fourth, or fifth degree offenses, with penalties ranging from 6 months to life imprisonment depending on offense severity. Prior convictions, use of weapons, or harm to victims enhance penalties significantly. Felony convictions result in permanent records affecting employment, professional licenses, housing, and rights including gun ownership.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's felony laws are complex, and prosecutors aggressively pursue felony charges due to their serious nature. Understanding the specific elements prosecutors must prove, available defenses, sentencing structures, and the court process is essential for building an effective defense. Early intervention by an experienced felony defense attorney can significantly impact the outcome, potentially resulting in reduced charges, dismissed cases, or favorable plea agreements that minimize consequences.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for felony charges begins with arrest and initial court appearances, followed by grand jury indictment (for most felonies), discovery, pretrial motions, plea negotiations, and potentially trial. Each stage requires strategic decision-making and experienced legal representation. Felony cases are heard in Common Pleas Court, which has more formal procedures than Municipal Court. An attorney can navigate these complex procedures and work toward the best possible outcome.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Felony Penalties and Consequences</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code Chapter 2929, felony convictions carry severe penalties that extend far beyond prison time:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Penalty Structure by Felony Degree</h4>
              <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li><strong>First-Degree Felony:</strong> 3-11 years to life imprisonment, fines up to $20,000, mandatory post-release control, permanent serious felony record</li>
                <li><strong>Second-Degree Felony:</strong> 2-8 years imprisonment, fines up to $15,000, mandatory post-release control, permanent felony record</li>
                <li><strong>Third-Degree Felony:</strong> 1-5 years imprisonment, fines up to $10,000, mandatory post-release control, permanent felony record</li>
                <li><strong>Fourth-Degree Felony:</strong> 6-18 months imprisonment, fines up to $5,000, mandatory post-release control, permanent felony record</li>
                <li><strong>Fifth-Degree Felony:</strong> 6-12 months imprisonment, fines up to $2,500, mandatory post-release control, permanent felony record</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Enhanced Penalties</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Prior felony convictions significantly enhance penalties, often elevating charges by one degree. Use of weapons, harm to victims, or offenses committed in the presence of children can also enhance penalties. Certain offenses carry mandatory minimum sentences that cannot be suspended or reduced. Understanding these enhancements is essential when evaluating plea offers and defense strategies.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Beyond criminal penalties, felony convictions create lasting consequences including employment barriers (many employers refuse to hire individuals with felony convictions), professional license restrictions, housing difficulties, educational impact, permanent loss of gun rights under federal law, voting restrictions until restoration, immigration consequences for non-citizens, and permanent felony records accessible to employers and others. These consequences persist long after completing sentences.
              </p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Legal Process for Felony Charges</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the felony court process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Arrest and Initial Court Proceedings</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                After arrest, you will be arraigned where charges are formally read, bail is set, and you enter a plea. Felony charges typically result in high bail amounts due to the serious nature of the offense. An attorney can argue for reduced bail, release on recognizance, or house arrest. The initial plea (typically not guilty) preserves your rights and allows time for investigation and defense preparation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Grand Jury Indictment</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most felony cases require grand jury indictment where prosecutors present evidence to a grand jury to obtain formal charges. An attorney cannot be present during grand jury proceedings, but can challenge indictments if they are defective or based on insufficient evidence. Understanding the grand jury process is important for felony defense.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery and Investigation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                During discovery, prosecutors must provide all evidence including police reports, witness statements, forensic evidence, and documentation. An experienced attorney will thoroughly review this evidence, conduct independent investigation, examine forensic evidence, interview witnesses, and identify weaknesses in the prosecution's case. This investigation may reveal evidence supporting defenses, constitutional violations, or insufficient evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Plea Negotiations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most felony cases are resolved through plea negotiations rather than trial. An experienced attorney can negotiate with prosecutors to reduce charges (higher degree to lower degree, felony to misdemeanor), negotiate favorable plea agreements that minimize penalties, or arrange for charges to be dismissed upon completion of conditions. These negotiations require understanding of local court practices, case strengths, and sentencing structures.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Felony Defense Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced felony defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Protection of Rights:</strong> Ensure your constitutional rights are protected from the moment of arrest, including right to remain silent, right to counsel, and protection against illegal searches</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, evidence, witness statements, forensic evidence, and all discovery materials to identify weaknesses, constitutional violations, or evidence supporting your defense</li>
              <li><strong>Strategic Defense Development:</strong> Develop and execute defense strategies including lack of intent, insufficient evidence, constitutional violations, mistaken identity, or false allegations based on thorough investigation</li>
              <li><strong>Evidence Challenges:</strong> Challenge improperly obtained evidence through illegal searches, flawed investigations, unreliable witnesses, or coerced statements through pretrial motions</li>
              <li><strong>Expert Consultation:</strong> Consult with forensic experts, medical professionals, or other specialists to challenge prosecution evidence and support your defense</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges (higher degree to lower degree, felony to misdemeanor), negotiate favorable plea agreements, or arrange dismissals upon completion of conditions</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination, expert testimony, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
              <li><strong>Sentencing Advocacy:</strong> Present mitigating evidence, argue for minimum sentences, advocate for alternative sentencing options, and work to minimize consequences if conviction occurs</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Common Defenses to Felony Charges</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Constitutional Defenses</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Violations of your constitutional rights can result in suppression of evidence or dismissal of charges. These include illegal searches and seizures (Fourth Amendment), coerced confessions or violations of right to remain silent (Fifth Amendment), or denial of right to counsel (Sixth Amendment). An attorney can identify constitutional violations and file motions to suppress evidence or dismiss charges.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Factual Defenses</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Factual defenses challenge the prosecution's version of events. These include alibi (you were elsewhere), self-defense, defense of others, lack of intent, mistaken identity, or insufficient evidence. These defenses require investigation, evidence gathering, and effective presentation to the court or jury.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Procedural Defenses</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Procedural defenses challenge how the case was handled. These include statute of limitations (charges filed too late), double jeopardy (being tried twice for the same offense), or prosecutorial misconduct. These defenses can result in dismissal of charges.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated felony defense representation in Columbus, Franklin County, and throughout Ohio. We understand that felony charges require immediate attention and experienced defense. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes while protecting your rights and freedom.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing felony charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC for a free consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to your situation. Time is critical in felony cases—early intervention by experienced counsel can significantly impact the outcome, potentially resulting in dismissed charges, reduced penalties, or favorable plea agreements. Do not delay in seeking experienced legal representation to protect your rights, freedom, and future.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

