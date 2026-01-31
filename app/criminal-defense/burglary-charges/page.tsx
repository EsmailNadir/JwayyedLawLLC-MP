import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Burglary Charges Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus burglary defense attorney protecting your rights. Skilled representation for burglary and breaking and entering charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['burglary lawyer Columbus OH', 'burglary defense attorney Ohio', 'breaking and entering attorney', 'Franklin County burglary lawyer'],
  openGraph: {
    title: 'Burglary Charges Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/burglary-charges',
  },
  alternates: { canonical: '/criminal-defense/burglary-charges' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Burglary Charges', href: '/criminal-defense/burglary-charges' },
];

const faqs = [
  {
    question: 'What constitutes burglary in Ohio?',
    answer: 'Burglary under Ohio Revised Code 2911.12 involves trespassing in an occupied structure or separately secured portion with intent to commit any criminal offense inside. Burglary is a felony charge regardless of value stolen. Aggravated burglary involves causing or attempting physical harm, using a deadly weapon, or committing burglary when someone is present. Burglary does not require theft - any intent to commit a crime inside constitutes burglary.',
  },
  {
    question: 'What are the penalties for burglary in Ohio?',
    answer: 'Burglary in Ohio under ORC 2911.12 is a second-degree felony (F-2) when another person is present or likely to be present (2-8 years indefinite imprisonment) or a third-degree felony (F-3) when no person is present (9-36 months). Aggravated burglary (ORC 2911.11) is a first-degree felony (F-1) punishable by 3-11 years indefinite imprisonment. For F-1 and F-2 offenses committed after March 22, 2019, Ohio uses indefinite sentencing where the maximum equals the minimum plus 50%. Prior burglary convictions enhance penalties. Burglary convictions carry substantial prison time and permanent felony records affecting employment and opportunities.',
  },
  {
    question: 'What is the difference between burglary and breaking and entering in Ohio?',
    answer: 'Burglary (ORC 2911.12) involves trespassing with intent to commit a crime inside. Breaking and entering (ORC 2911.13) involves trespassing without privilege to do so, but does not require intent to commit a crime inside. Breaking and entering is typically a fifth-degree felony (6-12 months, $2,500 fine), while burglary is a more serious second-degree felony. Both are felony charges with substantial penalties.',
  },
  {
    question: 'Can burglary charges be reduced in Ohio?',
    answer: 'Burglary charges may be reduced through various defenses including lack of intent, lack of trespass, insufficient evidence, or mistaken identity. Negotiations with prosecutors may result in reduced charges such as breaking and entering or criminal trespass. An experienced burglary defense attorney can evaluate your case, develop defense strategies, negotiate with prosecutors, and work toward the best possible outcome.',
  },
  {
    question: 'What defenses are available to burglary charges in Ohio?',
    answer: 'Common burglary defenses include lack of intent to commit a crime inside, lack of trespass (authorization or privilege to enter), mistaken identity, insufficient evidence, or false allegations. An attorney can challenge evidence, develop defense strategies, negotiate with prosecutors, and defend your case at trial when necessary. Time is critical—contact an attorney immediately to protect your rights.',
  },
];

export default function BurglaryChargesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Burglary Charges Lawyer in Columbus, OH"
        description="Experienced legal defense for burglary and breaking and entering charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Burglary Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Burglary charges in Columbus or throughout Ohio carry serious felony penalties that can result in substantial prison time. At Jwayyed Law LLC, we provide experienced defense representation for burglary charges under Ohio Revised Code 2911.12. Our attorney understands Ohio burglary laws, sentencing structures, and defense strategies necessary to protect your rights and achieve favorable outcomes.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Burglary in Ohio involves trespassing in an occupied structure with intent to commit any criminal offense inside. Unlike theft, burglary does not require actual theft - any intent to commit a crime inside constitutes burglary. Aggravated burglary involves causing harm, using weapons, or committing burglary when someone is present, carrying even more severe penalties.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's burglary laws are strict, and prosecutors aggressively pursue these charges due to the serious nature of entering occupied structures. Understanding the specific elements prosecutors must prove (trespass, intent to commit a crime, occupied structure), available defenses, and the court process is essential for building an effective defense. Early intervention by an experienced burglary defense attorney can significantly impact the outcome, potentially resulting in reduced charges, dismissed cases, or favorable plea agreements that minimize consequences.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for burglary charges begins with arrest and initial court appearances, followed by discovery, pretrial motions, plea negotiations, and potentially trial. Each stage requires strategic decision-making and experienced legal representation. Burglary charges are always felonies, making experienced representation crucial. An attorney can challenge evidence, develop defenses, and work toward the best possible outcome.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Burglary Penalties and Consequences</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code Chapter 2929, burglary convictions carry severe penalties that extend far beyond prison time:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Burglary (ORC 2911.12)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Burglary is a second-degree felony (F-2) punishable by 2-8 years indefinite imprisonment (for offenses after March 22, 2019, maximum equals minimum plus 50%), fines up to $15,000, court costs, mandatory post-release control supervision, and a permanent felony record. Prior burglary convictions enhance penalties. The felony record is permanent and accessible to employers, landlords, and others conducting background checks.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Aggravated Burglary (ORC 2911.11)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Aggravated burglary is a first-degree felony (F-1) punishable by 3-11 years indefinite imprisonment (for offenses after March 22, 2019, maximum equals minimum plus 50%), fines up to $20,000, court costs, mandatory post-release control for up to 3 years, and a permanent serious felony record. Aggravated burglary involves causing or attempting physical harm, using a deadly weapon, or committing burglary when someone is present. These convictions have lifelong consequences including permanent loss of gun rights, severe employment restrictions, and significant barriers to housing and education.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Beyond criminal penalties, burglary convictions create lasting consequences including employment barriers (many employers refuse to hire individuals with burglary convictions), professional license restrictions, housing difficulties, educational impact, permanent loss of gun rights under federal law, immigration consequences for non-citizens, and permanent felony records accessible to employers and others. These consequences persist long after completing sentences.
              </p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Legal Process for Burglary Charges</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the criminal court process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Arrest and Initial Court Proceedings</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                After arrest, you will be arraigned where charges are formally read, bail is set, and you enter a plea. Burglary charges typically result in high bail amounts due to the serious nature of the offense. An attorney can argue for reduced bail, release on recognizance, or house arrest. The initial plea (typically not guilty) preserves your rights and allows time for investigation and defense preparation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery and Investigation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                During discovery, prosecutors must provide all evidence including police reports, witness statements, surveillance footage, forensic evidence, and documentation. An experienced attorney will thoroughly review this evidence, conduct independent investigation, examine surveillance footage, interview witnesses, review forensic evidence, and identify weaknesses in the prosecution's case. This investigation may reveal evidence supporting defenses, lack of intent, or insufficient evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Plea Negotiations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most burglary cases are resolved through plea negotiations rather than trial. An experienced attorney can negotiate with prosecutors to reduce charges (aggravated burglary to burglary, burglary to breaking and entering or criminal trespass), negotiate favorable plea agreements that minimize penalties, or arrange for charges to be dismissed upon completion of conditions. These negotiations require understanding of local court practices and case strengths.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Burglary Defense Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced burglary defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Protection of Rights:</strong> Ensure your constitutional rights are protected from the moment of arrest, including right to remain silent, right to counsel, and protection against illegal searches</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, evidence, witness statements, surveillance footage, forensic evidence, and all discovery materials to identify weaknesses or evidence supporting your defense</li>
              <li><strong>Strategic Defense Development:</strong> Develop and execute defense strategies including lack of intent to commit a crime inside, lack of trespass (authorization or privilege to enter), mistaken identity, insufficient evidence, or false allegations based on thorough investigation</li>
              <li><strong>Evidence Challenges:</strong> Challenge improperly obtained evidence, flawed investigations, unreliable witnesses, or insufficient evidence through pretrial motions</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges (aggravated to simple burglary, burglary to breaking and entering), negotiate favorable plea agreements, or arrange dismissals upon completion of conditions</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
              <li><strong>Sentencing Advocacy:</strong> Present mitigating evidence, argue for minimum sentences, and work to minimize consequences if conviction occurs</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Common Defenses to Burglary Charges</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Lack of Intent</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Burglary requires intent to commit a criminal offense inside the structure. If you lacked intent to commit a crime, entered for a lawful purpose, or made an honest mistake, this defense may apply. Evidence of lack of intent, lawful purpose, or mistake can result in reduced or dismissed charges.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Lack of Trespass</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If you had authorization, permission, or privilege to enter the structure, burglary charges may not apply. This defense requires evidence of actual consent, invitation, or legal right to enter. Evidence of authorization can result in dismissed charges.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Mistaken Identity</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If you were misidentified as the person who committed burglary, this defense may apply. Surveillance footage, witness statements, or alibi evidence can support mistaken identity defenses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Insufficient Evidence</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Prosecutors must prove burglary beyond a reasonable doubt. If evidence is weak, inconsistent, or insufficient to prove all elements (trespass, intent, occupied structure), charges may be dismissed or reduced. An attorney can challenge evidence quality, witness credibility, and prosecution arguments to protect your rights.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated burglary defense representation in Columbus, Franklin County, and throughout Ohio. We understand that burglary charges require immediate attention and experienced defense. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes while protecting your rights and freedom.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing burglary charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to your situation. Time is critical in burglary cases—early intervention by experienced counsel can significantly impact the outcome, potentially resulting in dismissed charges, reduced penalties, or favorable plea agreements. Do not delay in seeking experienced legal representation to protect your rights, freedom, and future.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

