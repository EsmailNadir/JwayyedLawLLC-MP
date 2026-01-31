import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Murder & Homicide Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus murder and homicide defense attorney protecting your rights. Skilled representation for murder, manslaughter, and related charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['murder lawyer Columbus OH', 'homicide defense attorney Ohio', 'manslaughter attorney', 'Franklin County murder lawyer'],
  openGraph: {
    title: 'Murder & Homicide Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/murder-homicide-charges',
  },
  alternates: { canonical: '/criminal-defense/murder-homicide-charges' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Murder & Homicide Charges', href: '/criminal-defense/murder-homicide-charges' },
];

const faqs = [
  {
    question: 'What is the difference between murder and manslaughter in Ohio?',
    answer: 'Murder under Ohio Revised Code 2903.02 involves purposely causing the death of another with prior calculation and design, or causing death while committing or attempting to commit a felony. Aggravated murder involves murder with additional aggravating circumstances and carries the death penalty or life imprisonment. Manslaughter (ORC 2903.03) involves recklessly causing death, carrying lesser penalties than murder.',
  },
  {
    question: 'What are the penalties for murder in Ohio?',
    answer: 'Murder in Ohio is an unclassified felony punishable by 15 years to life imprisonment or life imprisonment with parole eligibility after 15 years. Aggravated murder can result in the death penalty or life imprisonment without parole. Manslaughter is a first-degree felony (F-1) punishable by 3-11 years indefinite imprisonment (for offenses after March 22, 2019, maximum equals minimum plus 50%) and fines up to $20,000. Prior convictions or aggravating circumstances enhance penalties significantly.',
  },
  {
    question: 'Can murder charges be reduced in Ohio?',
    answer: 'Murder charges may be reduced to manslaughter or lesser offenses through defenses including self-defense, lack of intent, insufficient evidence, or mistaken identity. Negotiations with prosecutors may result in reduced charges in some cases. An experienced murder defense attorney can evaluate your case, develop defense strategies, negotiate with prosecutors, and work toward the best possible outcome.',
  },
  {
    question: 'What defenses are available to murder charges in Ohio?',
    answer: 'Common murder defenses include self-defense, defense of others, lack of intent, insufficient evidence, mistaken identity, or false allegations. An attorney can challenge evidence, develop defense strategies, negotiate with prosecutors, and defend your case at trial when necessary. Murder charges require immediate attention—contact an attorney immediately to protect your rights.',
  },
  {
    question: 'What should I do if I am charged with murder in Ohio?',
    answer: 'If charged with murder in Ohio, exercise your rights immediately. Do not discuss the case with anyone except your attorney. Contact an experienced murder defense attorney right away. Avoid contact with witnesses or co-defendants. Do not make statements to police or prosecutors without your attorney present. An attorney can protect your rights, develop defense strategies, and work toward the best possible outcome.',
  },
];

export default function MurderHomicideChargesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Murder & Homicide Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for murder, manslaughter, and related charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Murder and Homicide Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Murder and homicide charges in Columbus or throughout Ohio carry the most severe penalties including life imprisonment or the death penalty. At Jwayyed Law LLC, we provide experienced defense representation for all homicide charges under Ohio Revised Code Chapter 2903. Our attorney understands Ohio homicide laws, sentencing structures, and defense strategies necessary to protect your rights and achieve favorable outcomes.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Homicide charges in Ohio range from manslaughter to aggravated murder, each carrying serious felony penalties. Aggravated murder can result in the death penalty or life imprisonment without parole. Murder convictions carry mandatory prison time and permanent felony records. Prior convictions or aggravating circumstances enhance penalties significantly, making experienced defense representation essential.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's homicide laws are among the strictest in the nation, and prosecutors aggressively pursue these charges. Understanding the specific elements prosecutors must prove (intent, causation, prior calculation and design for murder), available defenses, and the severe consequences is essential for building an effective defense. Early intervention by an experienced murder defense attorney can significantly impact the outcome, potentially resulting in reduced charges (murder to manslaughter), dismissed cases, or favorable plea agreements that avoid the death penalty or life imprisonment.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for homicide charges begins with arrest and initial court appearances, followed by grand jury indictment, discovery, pretrial motions, plea negotiations, and potentially trial. Homicide cases are heard in Common Pleas Court, which has more formal procedures than Municipal Court. Capital cases (aggravated murder with death penalty) require specialized defense representation and extensive resources. An attorney can navigate these complex procedures and work toward the best possible outcome.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Homicide Penalties and Consequences</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code Chapter 2929, homicide convictions carry the most severe penalties in Ohio law:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Murder (ORC 2903.02)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Murder is an unclassified felony punishable by 15 years to life imprisonment or life imprisonment with parole eligibility after 15 years. Murder involves purposely causing the death of another with prior calculation and design, or causing death while committing or attempting to commit a felony. Prior convictions or aggravating circumstances enhance penalties.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Aggravated Murder (ORC 2903.01)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Aggravated murder is an unclassified felony punishable by death penalty or life imprisonment without parole. Aggravated murder involves murder with additional aggravating circumstances such as murder of a police officer, murder during commission of another felony, or murder for hire. Capital cases require specialized defense representation and extensive resources.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Manslaughter (ORC 2903.03)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Manslaughter is a first-degree felony (F-1) punishable by 3-11 years indefinite imprisonment (for offenses after March 22, 2019, maximum equals minimum plus 50%) and fines up to $20,000. Manslaughter involves recklessly causing the death of another, carrying lesser penalties than murder. Voluntary manslaughter involves causing death under extreme emotional distress or provocation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Beyond criminal penalties, homicide convictions create lasting consequences including permanent felony records, loss of gun rights, employment barriers, professional license restrictions, housing difficulties, immigration consequences for non-citizens, and in capital cases, the ultimate penalty of death. These consequences are severe and permanent.
              </p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Legal Process for Homicide Charges</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the homicide court process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Arrest and Initial Court Proceedings</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                After arrest, you will be arraigned where charges are formally read, bail is set, and you enter a plea. Homicide charges typically result in no bail or extremely high bail amounts due to the serious nature of the offense. An attorney can argue for bail, release on recognizance, or house arrest. The initial plea (typically not guilty) preserves your rights and allows time for investigation and defense preparation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Grand Jury Indictment</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                All homicide cases require grand jury indictment where prosecutors present evidence to a grand jury to obtain formal charges. An attorney cannot be present during grand jury proceedings, but can challenge indictments if they are defective or based on insufficient evidence. Understanding the grand jury process is critical for homicide defense.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery and Investigation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                During discovery, prosecutors must provide all evidence including police reports, witness statements, forensic evidence, autopsy reports, and documentation. An experienced attorney will thoroughly review this evidence, conduct independent investigation, examine forensic evidence, interview witnesses, and identify weaknesses in the prosecution's case. This investigation may reveal evidence supporting defenses, self-defense, or insufficient evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Plea Negotiations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Many homicide cases are resolved through plea negotiations rather than trial. An experienced attorney can negotiate with prosecutors to reduce charges (murder to manslaughter, aggravated murder to murder), negotiate favorable plea agreements that avoid the death penalty or life imprisonment, or arrange for charges to be dismissed upon completion of conditions. These negotiations require understanding of local court practices, case strengths, and sentencing structures.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Murder Defense Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced murder defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Protection of Rights:</strong> Ensure your constitutional rights are protected from the moment of arrest, including right to remain silent, right to counsel, and protection against illegal searches</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, evidence, witness statements, forensic evidence, autopsy reports, and all discovery materials to identify weaknesses, self-defense evidence, or evidence supporting your defense</li>
              <li><strong>Strategic Defense Development:</strong> Develop and execute defense strategies including self-defense, defense of others, lack of intent, insufficient evidence, mistaken identity, or false allegations based on thorough investigation</li>
              <li><strong>Evidence Challenges:</strong> Challenge improperly obtained evidence through illegal searches, flawed investigations, unreliable witnesses, or coerced statements through pretrial motions</li>
              <li><strong>Expert Consultation:</strong> Consult with forensic experts, medical professionals, or other specialists to challenge prosecution evidence and support your defense</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges (murder to manslaughter, aggravated murder to murder), negotiate favorable plea agreements that avoid the death penalty or life imprisonment, or arrange dismissals upon completion of conditions</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination, expert testimony, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
              <li><strong>Capital Case Defense:</strong> For capital cases, provide specialized defense representation including mitigation investigation, expert testimony, and extensive resources to avoid the death penalty</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Common Defenses to Homicide Charges</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Self-Defense</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Under Ohio Revised Code 2901.05, you may use reasonable force, including deadly force, to defend yourself if you reasonably believe you are in imminent danger of death or great bodily harm. Self-defense requires demonstrating that you were not the initial aggressor and that your actions were necessary and proportional to the threat faced. Evidence of threats, prior violence, or imminent danger can support this defense.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Lack of Intent</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Murder requires purposely causing death with prior calculation and design. If you lacked intent, caused death accidentally, or lacked prior calculation and design, the charge may be reduced to manslaughter or dismissed. Evidence of accident, mistake, or lack of intent can result in reduced or dismissed charges.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Mistaken Identity</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If you were misidentified as the person who committed the homicide, this defense may apply. Alibi evidence, witness statements, or forensic evidence can support mistaken identity defenses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Insufficient Evidence</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Prosecutors must prove homicide beyond a reasonable doubt. If evidence is weak, inconsistent, or insufficient to prove all elements (intent, causation, prior calculation and design), charges may be dismissed or reduced. An attorney can challenge evidence quality, witness credibility, and prosecution arguments to protect your rights.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated murder and homicide defense representation in Columbus, Franklin County, and throughout Ohio. We understand that homicide charges require immediate attention and experienced defense. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes while protecting your rights and freedom.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies including whether to pursue plea negotiations or proceed to trial.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing homicide charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC immediately to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to your situation. Time is critical in homicide cases—early intervention by experienced counsel can significantly impact the outcome, potentially resulting in dismissed charges, reduced penalties (murder to manslaughter), or favorable plea agreements that avoid the death penalty or life imprisonment. Do not delay in seeking experienced legal representation to protect your rights, freedom, and life.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

