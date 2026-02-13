import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Petty Theft Lawyer in Ohio | Misdemeanor Theft Defense Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio petty theft defense attorney protecting your rights. Skilled representation for theft and shoplifting charges under ORC 2913.02. Schedule consultation: (614) 285-5482',
  keywords: [
    'petty theft lawyer Ohio',
    'shoplifting defense attorney',
    'petty theft ORC 2913.02',
    'misdemeanor theft Ohio',
    'theft charges attorney',
    'shoplifting charges lawyer',
    'Ohio theft defense lawyer',
    'petty theft penalties Ohio',
    'first offense theft attorney'
  ],
  openGraph: {
    title: 'Petty Theft Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Experienced petty theft defense representation throughout Ohio. Schedule consultation available.',
    url: 'https://www.jjlawohio.com/criminal-defense/petty-theft',
  },
  alternates: {
    canonical: '/criminal-defense/petty-theft',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Petty Theft', href: '/criminal-defense/petty-theft' },
];

const faqs = [
  {
    question: 'What is petty theft under Ohio law?',
    answer: 'Petty theft under Ohio Revised Code 2913.02 is a theft offense involving property or services valued at less than $1,000. It is classified as a first-degree misdemeanor punishable by up to 180 days in jail and fines up to $1,000. Theft occurs when a person knowingly obtains or exerts control over the property or services of another without consent, by deception, by threat, or by intimidation. Petty theft includes shoplifting, taking someone\'s personal property, and obtaining services without paying.',
  },
  {
    question: 'What are the penalties for petty theft in Ohio?',
    answer: 'Petty theft (under $1,000) is a first-degree misdemeanor carrying up to 180 days in jail, fines up to $1,000, restitution to the victim, court costs, and a permanent criminal record. If the value is under $150, it is generally a minor misdemeanor with a maximum fine of $150 and no jail time. Penalties can be enhanced based on prior theft convictions, the type of property stolen, or the victim\'s status. Additional consequences include difficulty finding employment, housing rejections, and professional licensing issues.',
  },
  {
    question: 'Is shoplifting the same as petty theft in Ohio?',
    answer: 'Shoplifting is a common form of petty theft in Ohio and is charged under the same theft statute, ORC 2913.02. Shoplifting involves knowingly concealing, taking, or exerting control over store merchandise without paying the full retail value. Ohio does not have a separate shoplifting statute. The severity of the charge depends on the value of merchandise: under $150 is generally a minor misdemeanor, $150-$999 is a first-degree misdemeanor, and $1,000 or more elevates to felony theft charges.',
  },
  {
    question: 'Can petty theft charges be expunged from my record in Ohio?',
    answer: 'Yes, petty theft convictions may be eligible for expungement or record sealing under Ohio Revised Code 2953.32. As a misdemeanor offense, you may apply to have the record sealed after the applicable waiting period, provided you meet eligibility requirements. However, theft convictions can be particularly damaging on background checks because they suggest dishonesty. Record sealing can help mitigate these long-term consequences by hiding the conviction from most background searches. An experienced attorney can evaluate your eligibility.',
  },
  {
    question: 'What should I do if I am charged with petty theft or shoplifting in Ohio?',
    answer: 'If charged with petty theft or shoplifting in Ohio, exercise your right to remain silent immediately. Do not make statements to police, store security, or loss prevention officers without an attorney present. Do not sign any admission of guilt or civil demand letters. Contact an experienced criminal defense attorney immediately. Preserve any evidence that may support your defense, such as receipts, text messages, or witness information. An attorney can protect your rights, challenge the evidence, and work toward the best possible outcome including potential dismissal.',
  },
];

export default function PettyTheftPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Petty Theft Lawyer in Ohio"
        description="Experienced legal defense for petty theft, shoplifting, and misdemeanor theft charges. Protecting your rights and fighting for the best possible outcome."
      />

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Petty Theft Charges in Ohio
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Facing petty theft charges throughout Ohio can have devastating consequences on your record, career, and future. At Jwayyed Law LLC, we provide experienced defense representation for individuals charged with petty theft and shoplifting under Ohio Revised Code 2913.02. Our attorney understands Ohio theft laws, potential defenses, and the particularly damaging impact theft charges can have on your employment and reputation.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Petty theft in Ohio involves knowingly obtaining or exerting control over the property or services of another without consent, where the value of the property or services is less than $1,000. This includes shoplifting from retail stores, taking personal property, using services without paying, and other forms of theft. Even though petty theft is a misdemeanor offense, a theft conviction on your record carries a stigma that can follow you for years, particularly in employment situations where honesty and trustworthiness are valued.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Ohio's theft laws are codified in Ohio Revised Code Chapter 2913 and cover a broad range of conduct. The penalties for theft offenses are primarily determined by the value of the property stolen, with additional enhancements based on the type of property, the victim's status, and the defendant's prior record. Understanding the specific elements prosecutors must prove and the available defenses is essential for building an effective defense strategy.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The legal process for petty theft charges involves arraignment, discovery, pretrial negotiations, and potentially trial. Many petty theft cases are resolved through pretrial negotiations, particularly for first-time offenders. An experienced attorney can negotiate for diversion programs, reduced charges, or dismissals that protect your record and future.
            </p>

            <LocationsWeServe title="Criminal Defense" criminalDisclaimer />

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Petty Theft Under Ohio Law
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Shoplifting / Retail Theft</h4>
              <p className="text-gray-700 mb-4">
                Shoplifting is the most common form of petty theft and involves knowingly concealing store merchandise, removing merchandise from a store without paying, altering price tags, transferring merchandise to different containers, or otherwise depriving a retail establishment of the full retail value of merchandise. Ohio does not have a separate shoplifting statute; these offenses are charged under the general theft statute ORC 2913.02.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Theft of Personal Property</h4>
              <p className="text-gray-700 mb-4">
                Taking another person's personal property without their consent constitutes theft. This includes taking items from another person's home, vehicle, workplace, or other location. The offense is charged based on the value of the property taken. Items valued under $1,000 are charged as petty theft, a misdemeanor offense.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Theft of Services</h4>
              <p className="text-gray-700 mb-4">
                Theft of services involves knowingly obtaining services without paying or with the intent to avoid payment. This can include dining and leaving without paying (dine and dash), obtaining utility services through illegal connections, receiving professional services through deception, or using transportation without paying the required fare.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Theft by Deception</h4>
              <p className="text-gray-700 mb-4">
                Theft by deception occurs when a person obtains property or services through false representation, misleading conduct, or concealment of material facts. This can overlap with fraud-related offenses but is charged as petty theft when the value is under $1,000. Examples include using false identification to obtain goods or misrepresenting facts to receive property or services.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Petty Theft Penalties by Value in Ohio
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Ohio theft penalties are primarily determined by the value of the property or services stolen. Understanding the penalty structure is essential when facing theft charges:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Minor Misdemeanor (Value Under $150)</h4>
              <p className="text-gray-700 mb-4">
                When the value of stolen property is less than $150 and the offender has no prior theft convictions, the offense is a minor misdemeanor. Penalties include a maximum fine of $150, no jail time, court costs, and restitution. While no jail time is imposed, a conviction still creates a criminal record. However, this is the least severe classification and may be eligible for quick resolution.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">First-Degree Misdemeanor (Value $150 - $999)</h4>
              <p className="text-gray-700 mb-4">
                When the value of stolen property is between $150 and $999, the offense is a first-degree misdemeanor carrying up to 180 days in jail, fines up to $1,000, restitution to the victim, court costs, probation with conditions, community service, and a permanent criminal record. This penalty level also applies to minor misdemeanor thefts when the offender has a prior theft conviction.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Enhanced Penalties Based on Prior Convictions</h4>
              <p className="text-gray-700 mb-4">
                Prior theft convictions significantly enhance penalties under Ohio law. A second theft offense of property under $150 becomes a first-degree misdemeanor. Multiple prior theft convictions can elevate even minor thefts to felony charges. The court considers all prior theft-related convictions when determining the appropriate charge level, making it critical to aggressively defend even first-time theft charges to avoid future enhancement.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Special Category Enhancements</h4>
              <p className="text-gray-700 mb-4">
                Certain types of theft carry enhanced penalties regardless of value. Theft from an elderly person or disabled adult under ORC 2913.02(B)(3) is elevated in degree. Theft of a firearm is a felony regardless of value. Theft of a motor vehicle is a felony. Theft of drugs is enhanced. These special categories reflect the legislature's determination that certain thefts warrant more severe punishment.
              </p>
            </div>

            <h4 className="font-semibold text-gray-900 mt-6 mb-4">Civil Liability for Shoplifting</h4>
            <p className="text-gray-700 mb-4">
              In addition to criminal penalties, Ohio law allows retail merchants to pursue civil damages against shoplifters under ORC 2307.61. Merchants can seek the retail value of the merchandise, a civil penalty of up to $150, and attorney fees. Parents of minor children who shoplift may also be held civilly liable. These civil demands are separate from criminal penalties and can add significant financial consequences.
            </p>

            <h4 className="font-semibold text-gray-900 mt-6 mb-4">Collateral Consequences of Theft Convictions</h4>
            <p className="text-gray-700 mb-6">
              Theft convictions carry particularly severe collateral consequences because they reflect on a person's honesty and trustworthiness. Employment opportunities are significantly limited as most employers conduct background checks and many will not hire individuals with theft convictions, particularly for positions involving handling money, merchandise, or sensitive information. Professional licensing in fields such as accounting, finance, law, healthcare, and education may be denied or revoked. Housing applications are frequently rejected. Financial institutions may refuse to open accounts. Security clearances will be denied. For non-citizens, theft convictions can trigger deportation as crimes involving moral turpitude. These consequences persist long after completing sentences and paying fines.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Criminal Court Process for Petty Theft Charges
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Understanding the criminal court process helps you prepare for what lies ahead. The process for misdemeanor petty theft charges typically involves several stages:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Citation, Arrest, or Summons and Arraignment</h4>
              <p className="text-gray-700 mb-4">
                Petty theft charges may begin with a citation at the scene, a formal arrest, or a summons to appear in court. At arraignment, charges are formally read, bail or bond conditions are set, and you enter a plea. For misdemeanor theft charges, defendants are often released on their own recognizance. An attorney can argue for favorable release conditions and begin building your defense immediately. Entering a not guilty plea preserves all your rights and allows time for investigation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery and Investigation</h4>
              <p className="text-gray-700 mb-4">
                During discovery, prosecutors must provide all evidence including police reports, loss prevention reports, surveillance footage, witness statements, and any statements you may have made. An experienced attorney will thoroughly review this evidence, analyze surveillance footage for inconsistencies, challenge the valuation of property, verify the chain of custody, and identify weaknesses in the prosecution's case. This investigation may reveal evidence supporting defenses such as lack of intent, mistaken identification, or consent.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Pretrial Negotiations and Diversion Programs</h4>
              <p className="text-gray-700 mb-4">
                Most petty theft cases are resolved through pretrial negotiations. An experienced attorney can negotiate with prosecutors for dismissal, placement in a theft diversion program, reduction to a minor misdemeanor, or plea agreements that minimize consequences. Many Ohio courts offer diversion or intervention programs for first-time theft offenders that result in dismissal upon completion of program requirements. These programs typically involve theft prevention education, community service, restitution, and a probationary period.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Trial</h4>
              <p className="text-gray-700 mb-4">
                If your case proceeds to trial, your attorney will present evidence supporting your defense, cross-examine prosecution witnesses, challenge surveillance evidence, dispute property valuations, and advocate for acquittal. The prosecution must prove every element beyond a reasonable doubt, including that you knowingly obtained or exerted control over the property without consent and with the purpose to deprive the owner. An experienced attorney can effectively challenge these elements.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How a Criminal Defense Attorney Can Help
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              An experienced petty theft defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
              <li><strong>Immediate Protection of Rights:</strong> Ensure your constitutional rights are protected, advise you on interactions with law enforcement and loss prevention, and prevent self-incriminating statements</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, loss prevention reports, surveillance footage, witness statements, and all evidence to identify weaknesses and build your defense</li>
              <li><strong>Surveillance Evidence Analysis:</strong> Carefully analyze surveillance footage for inconsistencies, gaps, poor quality, or evidence that contradicts the prosecution's narrative</li>
              <li><strong>Value Disputes:</strong> Challenge the valuation of property to potentially reduce charges from first-degree misdemeanor to minor misdemeanor, or from misdemeanor to lower classifications</li>
              <li><strong>Diversion Program Advocacy:</strong> Identify and advocate for diversion or intervention programs that result in dismissal of charges upon successful completion</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to dismiss charges, reduce charges, secure alternative sentencing, or arrange favorable plea agreements</li>
              <li><strong>Trial Advocacy:</strong> Provide effective trial representation challenging every element of the prosecution's case including intent, identification, and property ownership</li>
              <li><strong>Civil Demand Response:</strong> Advise you on responding to civil demand letters from retailers and protect your interests in both criminal and civil proceedings</li>
              <li><strong>Post-Conviction Relief:</strong> Help eligible clients with record sealing and expungement applications under ORC 2953.32 to clear criminal records</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Defenses to Petty Theft Charges
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Lack of Intent</h4>
              <p className="text-gray-700 mb-4">
                Theft requires that the defendant acted "knowingly" with the purpose to deprive the owner of property. If the taking was accidental, the result of confusion or forgetfulness (such as forgetting an item in your cart or pocket), or you lacked the intent to permanently deprive the owner, this defense may apply. Many shoplifting charges involve situations where individuals genuinely forgot to pay for an item or were distracted.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Consent or Claim of Right</h4>
              <p className="text-gray-700 mb-4">
                If you had a good faith belief that you had permission to take the property or a legitimate claim of ownership or right to the property, this defense may negate the theft charge. This applies in situations involving shared property, property you believed was abandoned, or property you had a reasonable belief you were entitled to possess.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Mistaken Identity</h4>
              <p className="text-gray-700 mb-4">
                In retail theft cases, identification can be unreliable, particularly when based solely on surveillance footage. If you were not the person who committed the alleged theft, challenges to the identification evidence may result in acquittal or dismissal. An attorney can analyze surveillance footage quality, challenge witness identifications, and present alibi evidence.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Insufficient Evidence</h4>
              <p className="text-gray-700 mb-4">
                The prosecution must prove every element of theft beyond a reasonable doubt. If the evidence is insufficient to establish that you knowingly took property without consent and with the purpose to deprive the owner, the charges should be dismissed. Surveillance footage may be unclear, witness testimony may be inconsistent, and the chain of custody may be flawed.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Value Dispute</h4>
              <p className="text-gray-700 mb-4">
                While not a complete defense, challenging the value of the property can reduce the severity of charges and penalties. If the prosecution overstates the value of property, a successful challenge can reduce a first-degree misdemeanor to a minor misdemeanor, significantly reducing potential penalties. An attorney can obtain independent valuations and challenge the prosecution's valuation methodology.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Expungement Eligibility for Petty Theft Convictions
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code 2953.32, individuals convicted of petty theft may be eligible to have their records sealed or expunged. Given the particularly damaging impact of theft convictions on employment and reputation, record sealing is an important option for eligible individuals. As a misdemeanor offense, petty theft convictions are generally eligible for record sealing after the applicable waiting period, provided you meet eligibility requirements. Record sealing effectively hides the conviction from most background checks, helping restore employment opportunities and reduce the stigma associated with theft convictions. An experienced attorney can evaluate your eligibility and guide you through the application process.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Jwayyed Law LLC for Petty Theft Defense
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated petty theft defense representation throughout Ohio. We understand that theft charges can arise from misunderstandings, momentary lapses in judgment, or situations where intent is lacking. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes that protect your record and future.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We handle all types of theft cases, from minor shoplifting charges to more serious misdemeanor theft offenses. Our firm maintains open communication with clients, ensuring you understand the charges, potential consequences, and defense strategies. We work to protect your rights, challenge evidence, negotiate with prosecutors for diversion programs and reduced charges, and defend your case at trial when necessary.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and effective advocacy. We understand the court systems and prosecutor policies throughout Ohio, including which courts offer diversion programs for first-time offenders. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              If you are facing petty theft or shoplifting charges anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to your situation. Time is critical in criminal cases -- early intervention by experienced counsel can significantly impact the outcome, particularly in securing diversion program placement. Do not delay in seeking experienced legal representation to protect your rights and future.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Related Practice Areas</h4>
              <div className="flex flex-wrap gap-3">
                <Link href="/criminal-defense/criminal-mischief" className="text-accent hover:underline">Criminal Mischief</Link>
                <Link href="/criminal-defense/criminal-trespass" className="text-accent hover:underline">Criminal Trespass</Link>
                <Link href="/criminal-defense/obstruction-of-official-business" className="text-accent hover:underline">Obstruction of Official Business</Link>
                <Link href="/criminal-defense/expungement-record-sealing" className="text-accent hover:underline">Expungement & Record Sealing</Link>
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
