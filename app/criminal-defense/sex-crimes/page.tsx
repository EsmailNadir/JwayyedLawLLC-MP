import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Sex Crimes Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus sex crimes defense attorney protecting your rights. Skilled representation for sexual assault, rape, and related charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['sex crimes lawyer Columbus OH', 'sexual assault attorney Ohio', 'rape defense lawyer', 'Franklin County sex crimes attorney'],
  openGraph: {
    title: 'Sex Crimes Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/sex-crimes',
  },
  alternates: { canonical: '/criminal-defense/sex-crimes' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Sex Crimes', href: '/criminal-defense/sex-crimes' },
];

const faqs = [
  {
    question: 'What constitutes sexual assault in Ohio?',
    answer: 'Sexual assault in Ohio under Ohio Revised Code 2907.02 involves engaging in sexual conduct with another person without consent. Rape involves engaging in sexual conduct with another person by force or threat of force. Sexual assault and rape are serious felony charges carrying substantial prison time, mandatory sex offender registration, and permanent criminal records affecting employment, housing, and opportunities.',
  },
  {
    question: 'What are the penalties for sex crimes in Ohio?',
    answer: 'Sex crime penalties in Ohio depend on the specific offense and circumstances. Rape (ORC 2907.02) is a first-degree felony punishable by 3-11 years indefinite imprisonment and fines up to $20,000. Sexual battery (ORC 2907.03) is a third-degree felony punishable by 9-36 months imprisonment and fines up to $10,000. Prior convictions, use of force, or offenses involving minors carry enhanced penalties including mandatory life imprisonment in some cases.',
  },
  {
    question: 'What is Ohio\'s sex offender registration requirement?',
    answer: 'Ohio\'s sex offender registration law (ORC Chapter 2950) requires individuals convicted of sex crimes to register with the sheriff\'s office. Registration requirements depend on offense severity and classification as Tier I, Tier II, or Tier III offender. Registration can last for 15 years, 25 years, or life depending on classification. Registration affects where you can live, work, and your ability to be around minors.',
  },
  {
    question: 'Can sex crime charges be reduced in Ohio?',
    answer: 'Sex crime charges may be reduced through various defenses including lack of force, consent, mistaken identity, false allegations, or insufficient evidence. Negotiations with prosecutors may result in reduced charges in some cases. An experienced sex crimes defense attorney can evaluate your case, develop defense strategies, negotiate with prosecutors, and work toward the best possible outcome.',
  },
  {
    question: 'What defenses are available to sex crime charges in Ohio?',
    answer: 'Common sex crime defenses include consent, lack of force or threat, mistaken identity, false allegations, insufficient evidence, or alibi. An attorney can challenge evidence, develop defense strategies, negotiate with prosecutors, and defend your case at trial when necessary. Sex crime charges require immediate attention—contact an attorney immediately to protect your rights.',
  },
];

export default function SexCrimesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Sex Crimes Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for sexual assault, rape, and related charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Sex Crimes Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Sex crimes charges in Columbus or throughout Ohio carry the most severe penalties including substantial prison time, mandatory sex offender registration, and permanent criminal records that affect employment, housing, and opportunities. At Jwayyed Law LLC, we provide experienced defense representation for all sex crimes charges under Ohio Revised Code Chapter 2907. Our attorney understands Ohio sex crimes laws, sentencing structures, and defense strategies necessary to protect your rights and achieve favorable outcomes.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Sex crimes in Ohio range from sexual battery to rape, each carrying serious felony penalties. Prior convictions, use of force, or offenses involving minors result in enhanced penalties including mandatory life imprisonment in some cases. Sex crime convictions require mandatory sex offender registration, which can last for life and significantly impact your ability to work, live, and function in society.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's sex crimes laws are among the strictest in the nation, and prosecutors aggressively pursue these charges. Understanding the specific elements prosecutors must prove (lack of consent, force or threat, intent), available defenses, and the severe consequences is essential for building an effective defense. Early intervention by an experienced sex crimes defense attorney can significantly impact the outcome, potentially resulting in reduced charges, dismissed cases, or favorable plea agreements that minimize consequences.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for sex crimes charges begins with arrest and initial court appearances, followed by grand jury indictment (for most felonies), discovery, pretrial motions, plea negotiations, and potentially trial. Sex crime cases are heard in Common Pleas Court, which has more formal procedures than Municipal Court. Mandatory sex offender registration requirements apply immediately upon conviction, making experienced representation crucial from the start.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Sex Crime Penalties and Consequences</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code Chapter 2929, sex crime convictions carry severe penalties that extend far beyond prison time:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Rape (ORC 2907.02)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Rape is a first-degree felony (F-1) punishable by 3-11 years indefinite imprisonment (for offenses after March 22, 2019, maximum equals minimum plus 50%), fines up to $20,000, mandatory post-release control, and mandatory sex offender registration. Prior convictions, use of force, or offenses involving minors carry enhanced penalties including mandatory life imprisonment in some cases.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Sexual Battery (ORC 2907.03)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Sexual battery is a third-degree felony punishable by 9-36 months imprisonment, fines up to $10,000, mandatory post-release control, and mandatory sex offender registration. Prior convictions or offenses involving minors carry enhanced penalties.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Sex Offender Registration</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Under Ohio Revised Code Chapter 2950, sex crime convictions require mandatory sex offender registration. Registration requirements depend on offense severity and classification as Tier I (15 years), Tier II (25 years), or Tier III (life). Registration affects where you can live, work, and your ability to be around minors. Registration information is publicly accessible and can last for life.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Beyond criminal penalties, sex crime convictions create lasting consequences including employment barriers (many employers refuse to hire registered sex offenders), housing restrictions (cannot live near schools, parks, or daycares), professional license restrictions, permanent loss of gun rights, immigration consequences for non-citizens, and public registration accessible to employers and others. These consequences persist long after completing sentences.
              </p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Legal Process for Sex Crimes Charges</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the criminal court process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Arrest and Initial Court Proceedings</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                After arrest, you will be arraigned where charges are formally read, bail is set, and you enter a plea. Sex crime charges typically result in high bail amounts or no bail due to the serious nature of the offense. An attorney can argue for reduced bail, release on recognizance, or house arrest. The initial plea (typically not guilty) preserves your rights and allows time for investigation and defense preparation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Grand Jury Indictment</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most sex crime cases require grand jury indictment where prosecutors present evidence to a grand jury to obtain formal charges. An attorney cannot be present during grand jury proceedings, but can challenge indictments if they are defective or based on insufficient evidence. Understanding the grand jury process is important for sex crime defense.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery and Investigation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                During discovery, prosecutors must provide all evidence including police reports, witness statements, forensic evidence, medical records, and documentation. An experienced attorney will thoroughly review this evidence, conduct independent investigation, examine forensic evidence, interview witnesses, and identify weaknesses in the prosecution's case. This investigation may reveal evidence supporting defenses, false allegations, or insufficient evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Plea Negotiations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most sex crime cases are resolved through plea negotiations rather than trial. An experienced attorney can negotiate with prosecutors to reduce charges (rape to sexual battery, higher degree to lower degree), negotiate favorable plea agreements that minimize penalties, or arrange for charges to be dismissed upon completion of conditions. These negotiations require understanding of local court practices, case strengths, and sentencing structures.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Sex Crimes Defense Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced sex crimes defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Protection of Rights:</strong> Ensure your constitutional rights are protected from the moment of arrest, including right to remain silent, right to counsel, and protection against illegal searches</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, evidence, witness statements, forensic evidence, medical records, and all discovery materials to identify weaknesses, false allegations, or evidence supporting your defense</li>
              <li><strong>Strategic Defense Development:</strong> Develop and execute defense strategies including consent, lack of force or threat, mistaken identity, false allegations, or insufficient evidence based on thorough investigation</li>
              <li><strong>Evidence Challenges:</strong> Challenge improperly obtained evidence through illegal searches, flawed investigations, unreliable witnesses, or coerced statements through pretrial motions</li>
              <li><strong>Expert Consultation:</strong> Consult with forensic experts, medical professionals, or other specialists to challenge prosecution evidence and support your defense</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges (higher degree to lower degree), negotiate favorable plea agreements, or arrange dismissals upon completion of conditions</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination, expert testimony, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
              <li><strong>Sentencing Advocacy:</strong> Present mitigating evidence, argue for minimum sentences, advocate for alternative sentencing options, and work to minimize consequences if conviction occurs</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Common Defenses to Sex Crime Charges</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Consent</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Consent is a defense to sex crime charges if the alleged victim consented to sexual conduct. Consent must be voluntary and informed. Evidence of consent, communication, or relationship history can support this defense. An attorney can investigate and present evidence of consent.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Lack of Force or Threat</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Rape requires force or threat of force. If no force or threat was used, the charge may be reduced to sexual battery or dismissed. Evidence of lack of force, lack of threat, or consensual conduct can result in reduced or dismissed charges.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Mistaken Identity</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If you were misidentified as the person who committed the sex crime, this defense may apply. Alibi evidence, witness statements, or forensic evidence can support mistaken identity defenses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">False Allegations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Unfortunately, sex crime allegations are sometimes made falsely for various reasons including revenge, custody disputes, financial gain, or manipulation. An attorney can investigate, gather evidence of false statements, identify inconsistencies in allegations, and expose false allegations to protect your rights.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated sex crimes defense representation in Columbus, Franklin County, and throughout Ohio. We understand that sex crime charges require immediate attention and experienced defense. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes while protecting your rights and future.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing sex crime charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC immediately to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to your situation. Time is critical in sex crime cases—early intervention by experienced counsel can significantly impact the outcome, potentially resulting in dismissed charges, reduced penalties, or favorable plea agreements. Do not delay in seeking experienced legal representation to protect your rights, freedom, and future.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

