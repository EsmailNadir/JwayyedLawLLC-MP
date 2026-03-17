import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Civil Protection Orders Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio civil protection orders attorney protecting your rights. Skilled representation for protection orders in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['civil protection orders lawyer Columbus OH', 'protection order attorney Ohio', 'CPO lawyer', 'Franklin County protection order attorney'],
  openGraph: {
    title: 'Civil Protection Orders Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/civil-protection-orders',
  },
  alternates: { canonical: '/civil/civil-protection-orders' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Civil Protection Orders', href: '/civil/civil-protection-orders' },
];

const faqs = [
  {
    question: `What is a civil protection order (CPO) in Ohio?`,
    answer: `A civil protection order (CPO) under ORC 3113.31 is a court order issued in the Domestic Relations Division of the Common Pleas Court that protects victims of domestic violence from family or household members. A CPO can prohibit contact, require the respondent to vacate a shared residence, address temporary custody and support, and require surrender of firearms. CPOs are civil orders, but violation of a CPO under ORC 2919.27 is a criminal offense. Franklin County CPO petitions are filed in the Franklin County Common Pleas Court, Domestic Relations Division.`,
  },
  {
    question: `What is the difference between a CPO and a CSPO in Ohio?`,
    answer: `Ohio has two main types of civil protection orders. A CPO (civil protection order) under ORC 3113.31 applies to domestic violence situations involving family or household members — spouses, former spouses, people who share a child, or people who have cohabited. A CSPO (civil stalking protection order) under ORC 2903.214 is available to any person who has been a victim of menacing by stalking or sexually oriented offenses, regardless of whether the parties have a domestic relationship. CSPOs are filed in the General Division of the Common Pleas Court rather than the Domestic Relations Division. Both types of orders can impose no-contact and stay-away requirements.`,
  },
  {
    question: `What can a civil protection order require in Ohio?`,
    answer: `Under ORC 3113.31, a CPO can include a wide range of terms: prohibiting the respondent from contacting, threatening, or harassing the petitioner and household members; requiring the respondent to vacate and stay away from the petitioner's residence, workplace, and school; granting temporary exclusive occupancy of a shared residence to the petitioner; awarding temporary custody of children; requiring temporary support payments; and ordering the respondent to surrender firearms and other deadly weapons. Courts tailor CPO terms to the specific circumstances of each case.`,
  },
  {
    question: `How long does a civil protection order last in Ohio?`,
    answer: `Ohio's CPO process involves two stages. An ex parte (emergency) temporary CPO can be issued by a judge or magistrate on the same day the petition is filed, without the respondent present, if the court finds immediate and present danger. The ex parte CPO lasts up to 10 days — until a full hearing is held. At the full hearing, both parties may present evidence. If granted after the full hearing, a CPO can last up to five years and is renewable. A CSPO under ORC 2903.214 follows a similar timeline and can also be issued for up to five years.`,
  },
  {
    question: `What happens if a respondent violates a civil protection order?`,
    answer: `Violating a civil protection order under ORC 2919.27 is a first-degree misdemeanor for a first offense, carrying up to 180 days in jail and a $1,000 fine. A second violation within five years is elevated to a fifth-degree felony (6 to 12 months in prison, $2,500 fine). Violations involving weapons or prior felony domestic violence convictions carry enhanced penalties. Violations can also result in contempt of court proceedings in the civil case. If you believe a respondent has violated your CPO, contact law enforcement immediately and document the violation.`,
  },
  {
    question: `Can a civil protection order be contested or vacated in Ohio?`,
    answer: `Yes. A respondent has the right to contest a CPO at the full hearing scheduled within 10 days of the ex parte order. At the hearing, both sides may present evidence, testimony, and cross-examine witnesses. The petitioner must prove their case by a preponderance of the evidence. If the court denies the CPO at the full hearing, the ex parte order expires. After a CPO is issued, either party may later file a motion to modify or terminate the order if circumstances have changed. An attorney can help respondents mount a defense or help petitioners maintain and enforce their orders.`,
  },
  {
    question: `Can I get a protection order for stalking in Ohio?`,
    answer: `Yes. If you have been a victim of menacing by stalking under ORC 2903.211 — even by someone who is not a family or household member — you can petition for a Civil Stalking Protection Order (CSPO) under ORC 2903.214. A CSPO can prohibit all contact, require the respondent to stay away from your home, workplace, and school, and can last up to five years. CSPOs are filed in the General Division of the Common Pleas Court. An attorney can help you document the pattern of conduct required to obtain a CSPO and represent you at the hearing.`,
  },
  {
    question: `Do I need an attorney for a civil protection order proceeding?`,
    answer: `While you are not required to have an attorney, protection order proceedings move on a very compressed timeline — sometimes within 24 to 48 hours for an ex parte hearing — and the outcome can significantly affect your life, custody arrangements, and housing. Whether you are seeking a CPO or defending against one, experienced legal representation helps ensure that evidence is properly presented, legal arguments are made effectively, and your rights are protected. Jwayyed Law LLC represents clients on both sides of CPO proceedings throughout Ohio.`,
  },
];

export default function CivilProtectionOrdersPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Civil Protection Orders Lawyer"
        description="Experienced legal representation for civil protection orders. Protecting your rights whether you are seeking or defending against a protection order."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Civil Protection Orders in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Civil protection orders in Columbus, Cincinnati, Dayton, or throughout Ohio are powerful court tools that can protect victims of domestic violence and stalking — or, if you are a respondent, fundamentally alter your housing, custody arrangements, and firearms rights. Ohio provides two primary frameworks: the CPO under ORC 3113.31 for family and household members, and the Civil Stalking Protection Order (CSPO) under ORC 2903.214 for non-family victims of menacing by stalking or sexually oriented offenses. As part of our <Link href="/civil" className="text-[#b87333] underline hover:text-[#a06828]">civil litigation practice</Link>, Jwayyed Law LLC represents clients on both sides of protection order proceedings with a thorough understanding of the procedures and stakes involved. For more information, read our <Link href="/our-law-firm/blog/ohio-civil-protection-order-guide" className="text-[#b87333] underline hover:text-[#a06828]">guide to Ohio civil protection orders</Link>.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The CPO Process in Franklin County and Ohio</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              In Franklin County, CPO petitions under ORC 3113.31 are filed in the Domestic Relations Division of the Franklin County Common Pleas Court. The process begins when the petitioner files a verified petition describing the domestic violence or threat of domestic violence. A judge or magistrate will review the petition the same day and may issue an ex parte (emergency) temporary CPO without notice to the respondent if the court finds immediate and present danger of domestic violence. The ex parte CPO lasts up to 10 days, during which the respondent is served and a full hearing is scheduled. At the full hearing, both parties present their evidence and the court determines whether to issue a full CPO lasting up to five years. Protection orders often intersect with <Link href="/criminal-defense/domestic-violence" className="text-[#b87333] underline hover:text-[#a06828]">domestic violence criminal charges</Link>, and coordinating your civil and criminal defense strategies is important.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">What a CPO Can and Cannot Do</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A CPO is among the most far-reaching civil orders available in Ohio. Under ORC 3113.31, the court may order the respondent to have no contact with the petitioner or household members, vacate a shared residence and grant exclusive occupancy to the petitioner, stay away from the petitioner's home, workplace, school, and children's school, surrender firearms and other deadly weapons to law enforcement, pay temporary support, and comply with temporary custody arrangements. However, a CPO is not permanent — it lasts up to five years and must be renewed to remain in effect. It is also important to understand that a CPO is a civil order; it does not result in a criminal conviction on the respondent's record unless the respondent later violates it.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Defending Against a Civil Protection Order</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you have been served with an ex parte CPO, you have the right to contest it at the full hearing. The respondent may challenge the petitioner's allegations, present witnesses, cross-examine the petitioner, and introduce documentary evidence. The petitioner bears the burden of proving by a preponderance of the evidence that domestic violence occurred or was threatened. Common defenses include demonstrating that the alleged conduct did not meet the legal definition of domestic violence under ORC 3113.31, that allegations were exaggerated or false, or that a mutual protection order rather than a one-sided CPO is appropriate. Acting quickly and retaining counsel before the full hearing is critical — the hearing often occurs within 10 days of the ex parte order being served. <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">Contact Jwayyed Law LLC</Link> immediately if you have been served with a protection order.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Enforcement and Violations</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Once a CPO is issued, violation is taken seriously by Ohio courts and law enforcement. Under ORC 2919.27, a first violation is a first-degree misdemeanor; subsequent violations or violations involving weapons can be charged as felonies. Law enforcement officers are authorized to arrest a respondent for a CPO violation without a warrant if there is probable cause to believe a violation occurred. Petitioners who believe the respondent has violated the order should contact law enforcement immediately and document all violations. An attorney can also file a motion for contempt in the civil case, which can result in fines or incarceration.
            </p>

            <LocationsWeServe title="Civil" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Civil Protection Orders Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Protection Order Petitions:</strong> File CPO or CSPO petitions and pursue emergency ex parte orders when necessary</li>
              <li><strong>Protection Order Defense:</strong> Contest ex parte orders and defend at full hearings</li>
              <li><strong>Hearing Representation:</strong> Present evidence, examine witnesses, and argue your case at the full hearing</li>
              <li><strong>Modification and Termination:</strong> Seek modification or termination of existing orders when circumstances change</li>
              <li><strong>Violation Enforcement:</strong> Assist petitioners in documenting and pursuing violation charges</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Related Civil Litigation Services</h3>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/civil/landlord-tenant-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Landlord-Tenant Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Eviction defense, security deposit claims, and habitability issues</span>
              </Link>
              <Link href="/civil/defamation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Defamation</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Protect your reputation against false and harmful statements</span>
              </Link>
              <Link href="/civil/appeals" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Appeals</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Challenge unfavorable court decisions in Ohio appellate courts</span>
              </Link>
              <Link href="/criminal-defense/domestic-violence" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Domestic Violence Defense</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Criminal defense for domestic violence charges in Ohio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
