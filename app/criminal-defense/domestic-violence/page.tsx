import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Domestic Violence Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus domestic violence defense attorney protecting your rights. Skilled representation for domestic violence charges, protection orders, and related offenses in Ohio. Schedule consultation: (614) 285-5482',
  keywords: [
    'domestic violence lawyer Columbus OH',
    'domestic violence defense attorney Ohio',
    'domestic violence attorney',
    'protection order defense',
    'domestic violence charges Ohio',
    'Ohio domestic violence lawyer',
    'Franklin County domestic violence attorney'
  ],
  openGraph: {
    title: 'Domestic Violence Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    description: 'Experienced domestic violence defense representation in Columbus and throughout Ohio. Schedule consultation available.',
    url: 'https://www.jjlawohio.com/criminal-defense/domestic-violence',
  },
  alternates: {
    canonical: '/criminal-defense/domestic-violence',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Domestic Violence', href: '/criminal-defense/domestic-violence' },
];

const faqs = [
  {
    question: 'What constitutes domestic violence in Ohio?',
    answer: 'Under Ohio Revised Code 2919.25, domestic violence involves causing physical harm to a family or household member, attempting to cause physical harm, or recklessly causing serious physical harm. Family or household members include spouses, former spouses, parents, children, persons related by blood or marriage, persons living together as spouses, or persons who have a child together. Domestic violence can be charged as a misdemeanor or felony depending on the severity and prior convictions.',
  },
  {
    question: 'What are the penalties for domestic violence in Ohio?',
    answer: 'Domestic violence penalties in Ohio depend on prior convictions. A first offense is typically a first-degree misdemeanor punishable by up to 180 days in jail and fines up to $1,000. Second and subsequent offenses are charged as fourth-degree felonies punishable by 6-18 months imprisonment and fines up to $5,000. If the offense causes serious physical harm, it may be charged as a felony regardless of prior convictions. A domestic violence conviction also results in firearm restrictions under federal law.',
  },
  {
    question: 'Can I get a domestic violence charge dropped in Ohio?',
    answer: 'While victims cannot directly drop domestic violence charges in Ohio (the state prosecutes), an experienced defense attorney can work to have charges dismissed or reduced. This may involve challenging evidence, proving false allegations, demonstrating self-defense, or negotiating with prosecutors. An attorney can also help address protection orders and work toward case resolution that minimizes long-term consequences.',
  },
  {
    question: 'What happens if I violate a protection order in Ohio?',
    answer: 'Violating a protection order or civil protection order in Ohio under ORC 2919.27 is a first-degree misdemeanor for a first violation, punishable by up to 180 days in jail and fines up to $1,000. A second violation within five years is a fifth-degree felony punishable by 6-12 months imprisonment and fines up to $2,500. Subsequent violations or violations involving weapons or prior felony convictions carry enhanced penalties. Violating a protection order can also result in separate criminal charges if it involves additional crimes.',
  },
  {
    question: 'How can a domestic violence defense attorney help my case?',
    answer: 'A domestic violence defense attorney can investigate your case, challenge evidence including witness credibility, develop defense strategies including self-defense or false allegations, negotiate with prosecutors for reduced charges or dismissal, address protection orders, protect your rights during court proceedings, and work to minimize long-term consequences. Time is critical—contact an attorney immediately to protect your rights and begin building your defense.',
  },
];

export default function DomesticViolencePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Domestic Violence Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for domestic violence charges and protection orders. Protecting your rights and fighting for the best possible outcome."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Understanding Domestic Violence Charges in Ohio
            </h2>
            
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Domestic violence charges in Columbus or throughout Ohio carry serious criminal penalties and long-term consequences that extend far beyond potential jail time. At Jwayyed Law LLC, we provide experienced defense representation for individuals facing domestic violence charges under Ohio Revised Code 2919.25. Our attorney understands Ohio domestic violence laws, protection order procedures, and the severe impact these charges can have on your life, career, and relationships.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Domestic violence charges in Ohio involve allegations of physical harm, attempted harm, or threats against family or household members. These charges can arise from domestic disputes, misunderstandings, false allegations, or situations requiring self-defense. Under Ohio law, domestic violence is prosecuted aggressively, and convictions carry enhanced penalties, firearm restrictions, and permanent criminal records that affect employment, housing, and custody matters.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's domestic violence laws are strict, and prosecutors aggressively pursue these charges due to the serious nature of domestic violence. Understanding the specific elements prosecutors must prove (family or household member relationship, physical harm or threat, intent), available defenses, and the court process is essential for building an effective defense. Early intervention by an experienced domestic violence defense attorney can significantly impact the outcome, potentially resulting in reduced charges, dismissed cases, or favorable plea agreements that minimize consequences.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for domestic violence charges begins with arrest and initial court appearances, often involving immediate protection orders that can remove you from your home, restrict contact with family members, and affect custody. These orders are issued quickly and can have immediate devastating effects. An attorney can challenge protection orders, address violations, and work to modify or terminate orders when appropriate while simultaneously defending the criminal charges.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Domestic Violence Laws in Ohio
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">First-Degree Misdemeanor Domestic Violence (ORC 2919.25)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                A first offense of knowingly causing or attempting to cause physical harm to a family or household member is charged as a first-degree misdemeanor. This is punishable by up to 180 days in jail, fines up to $1,000, and mandatory counseling or treatment programs. A conviction results in a permanent criminal record and federal firearm restrictions.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Felony Domestic Violence (ORC 2919.25)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If you have a prior domestic violence conviction or if the offense causes serious physical harm, charges are elevated to a fourth-degree felony. This is punishable by 6-18 months imprisonment, fines up to $5,000, and more severe long-term consequences. Prior convictions significantly enhance penalties under Ohio's domestic violence laws.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Protection Orders in Ohio</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Domestic violence charges often involve temporary or permanent protection orders issued under Ohio Revised Code 3113.31. These orders can restrict contact, remove you from your home, affect custody, and limit firearms. Violating a protection order is a separate criminal offense with additional penalties.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Legal Process for Domestic Violence Charges
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the criminal court process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Arrest and Protection Orders</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                After arrest, you will be arraigned where charges are formally read, bail is set, and you enter a plea. Domestic violence charges often result in immediate temporary protection orders that can remove you from your home, restrict contact with family members, affect custody, and limit firearms. These orders are issued quickly and can have immediate devastating effects. An attorney can challenge protection orders, address violations, and work to modify or terminate orders when appropriate.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery and Investigation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                During discovery, prosecutors must provide all evidence including police reports, medical records, witness statements, 911 recordings, and documentation. An experienced attorney will thoroughly review this evidence, conduct independent investigation, interview witnesses, review medical records, examine 911 recordings, and identify weaknesses in the prosecution's case. This investigation may reveal evidence supporting defenses, false allegations, or insufficient evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Plea Negotiations and Diversion Programs</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most domestic violence cases are resolved through plea negotiations rather than trial. An experienced attorney can negotiate with prosecutors to reduce charges (felony to misdemeanor), negotiate favorable plea agreements that minimize penalties, explore eligibility for diversion programs for first-time offenders, or arrange for charges to be dismissed upon completion of conditions including counseling. First-time offenders may qualify for diversion programs that avoid conviction entirely.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Penalties and Consequences of Domestic Violence Convictions
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code Chapter 2929, domestic violence convictions carry severe penalties that extend far beyond jail time:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Criminal Penalties</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li><strong>First-Degree Misdemeanor:</strong> Up to 180 days in jail, fines up to $1,000, mandatory counseling or treatment programs</li>
                <li><strong>Fourth-Degree Felony:</strong> 6-18 months imprisonment, fines up to $5,000, mandatory post-release control</li>
                <li><strong>Prior Convictions:</strong> Significantly enhance penalties, often elevating charges to felonies</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Firearm Restrictions</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Federal law under 18 U.S.C. 922(g)(9) prohibits firearm possession for those convicted of domestic violence, even for misdemeanor convictions. This is a permanent restriction that cannot be restored. Firearm restrictions apply immediately upon conviction and affect hunting, sport shooting, and self-defense rights.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Protection Orders</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Domestic violence charges often involve temporary or permanent protection orders that can restrict contact, remove you from your home, affect custody, and limit firearms. Violating a protection order is a separate criminal offense with additional penalties. Protection orders can last for years and significantly impact your life and relationships.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Beyond criminal penalties, domestic violence convictions create lasting consequences including employment barriers (many employers refuse to hire individuals with domestic violence convictions), professional license restrictions, housing difficulties, permanent loss of gun rights under federal law, immigration consequences for non-citizens, and most significantly, impact on family court custody determinations. Domestic violence convictions are heavily considered in custody cases and can result in loss of custody or restricted visitation.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How a Domestic Violence Defense Attorney Can Help
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced domestic violence defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Protection of Rights:</strong> Ensure your constitutional rights are protected from the moment of arrest, including right to remain silent, right to counsel, and protection against illegal searches</li>
              <li><strong>Protection Order Defense:</strong> Challenge protection orders immediately, address violations, work to modify or terminate orders when appropriate, and protect your rights to contact family members and return to your home</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, medical records, witness statements, 911 recordings, and all evidence to identify weaknesses, false allegations, or evidence supporting your defense</li>
              <li><strong>Strategic Defense Development:</strong> Develop and execute defense strategies including self-defense, false allegations, lack of intent, mistaken identity, or insufficient evidence based on thorough investigation</li>
              <li><strong>Evidence Challenges:</strong> Challenge improperly obtained evidence, flawed investigations, unreliable witnesses, coerced statements, or insufficient evidence through pretrial motions</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges (felony to misdemeanor), negotiate favorable plea agreements, secure alternative sentencing options including diversion programs, or arrange dismissals upon completion of conditions</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination of witnesses, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
              <li><strong>Record Sealing:</strong> Help eligible clients seal misdemeanor domestic violence records after case resolution and required waiting periods under Ohio Revised Code Chapter 2953</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Defenses to Domestic Violence Charges
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Self-Defense</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Under Ohio Revised Code 2901.05, you may use reasonable force to defend yourself if you reasonably believe you are in imminent danger of physical harm. In domestic situations, self-defense requires demonstrating that you were not the initial aggressor and that your actions were necessary and proportional to the threat faced.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">False Allegations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Unfortunately, domestic violence allegations are sometimes made falsely for various reasons including custody disputes, revenge, financial gain, or manipulation. An attorney can investigate, gather evidence of false statements, identify inconsistencies in allegations, and expose false allegations to protect your rights.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Lack of Intent</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Domestic violence requires knowingly causing harm. If an incident was accidental, unintentional, or you lacked knowledge that your actions would cause harm, this defense may apply. Evidence of accident, mistake, or lack of intent can result in reduced or dismissed charges.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Insufficient Evidence</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Prosecutors must prove domestic violence beyond a reasonable doubt. If evidence is weak, inconsistent, or insufficient, charges may be dismissed or reduced. An attorney can challenge evidence quality, witness credibility, and prosecution arguments to protect your rights.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Jwayyed Law LLC for Domestic Violence Defense
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated domestic violence defense representation in Columbus, Franklin County, and throughout Ohio. We understand that domestic violence charges can arise from complex family situations, misunderstandings, false allegations, or legitimate self-defense. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes while protecting your rights and reputation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We handle all types of domestic violence cases, from first-time misdemeanor charges to serious felony offenses with prior convictions. Our firm also assists with protection order matters, including challenging orders, addressing violations, and working to modify or terminate orders when appropriate. We maintain open communication with clients, ensuring you understand the charges, potential consequences, and defense strategies throughout your case.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies including whether to pursue diversion programs, negotiate pleas, or proceed to trial.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing domestic violence charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC immediately for a schedule consultation. We will review your case, explain your rights, discuss potential defenses including protection order challenges, evaluate eligibility for diversion programs, and develop a strategy tailored to your situation. Time is critical in domestic violence cases—protection orders can be issued immediately, and early intervention by experienced counsel can significantly impact the outcome, potentially resulting in dismissed charges, reduced penalties, or eligibility for treatment programs. Do not delay in seeking experienced legal representation to protect your rights, freedom, and future.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Related Practice Areas</h4>
              <div className="flex flex-wrap gap-3 font-['Inter',_'Arial',_sans-serif]">
                <Link href="/criminal-defense/assault-charges" className="text-orange-500 hover:underline">Assault Defense</Link>
                <Link href="/criminal-defense/protection-orders" className="text-orange-500 hover:underline">Protection Orders</Link>
                <Link href="/criminal-defense/expungement-record-sealing" className="text-orange-500 hover:underline">Record Sealing</Link>
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

