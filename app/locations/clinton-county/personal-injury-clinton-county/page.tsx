import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Clinton County, Ohio | Wilmington | Jwayyed Law LLC',
  description: 'Personal injury attorney serving Clinton County, Wilmington, Sabina, Blanchester, and surrounding Ohio communities. Car accidents, slip and fall, injury claims. Call (614) 285-5482.',
  keywords: ['personal injury Clinton County', 'injury lawyer Wilmington Ohio', 'Clinton County accident attorney', 'car accident lawyer Wilmington Ohio', 'slip and fall Clinton County'],
  openGraph: {
    title: 'Personal Injury Lawyer in Clinton County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/clinton-county/personal-injury-clinton-county',
  },
  alternates: { canonical: '/locations/clinton-county/personal-injury-clinton-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Clinton County', href: '/courts/clinton-county' },
  { label: 'Personal Injury - Clinton County', href: '/locations/clinton-county/personal-injury-clinton-county' },
];

const faqs = [
  {
    question: `What is the deadline to file a personal injury claim in Ohio?`,
    answer: `Ohio Revised Code 2305.10 sets the statute of limitations for most personal injury claims at two years from the date the cause of action accrues — generally the date of injury. If you were hurt in Clinton County and fail to file within this period, the court will dismiss your case and you will be barred from recovery. Some exceptions exist, such as for minors or latent injuries, but you should not rely on an exception — contact an attorney promptly after any injury.`,
  },
  {
    question: `How does comparative negligence work in an Ohio car accident case?`,
    answer: `Ohio follows modified comparative negligence under ORC 2315.33. If you are 50% or more at fault for the accident, you cannot recover any damages. If your fault is less than 50%, your recovery is reduced proportionally by your percentage of fault. Rural roads in Clinton County — including US 68 and SR 73 — can involve complex accident scenarios where fault is disputed. Having an attorney who thoroughly investigates the crash and challenges the other side's version of events is essential to maximizing your recovery.`,
  },
  {
    question: `What damages can I recover after an accident in Clinton County?`,
    answer: `Ohio personal injury law allows recovery of economic damages — including past and future medical expenses, lost income, loss of future earning capacity, and property damage — as well as non-economic damages such as pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium. In cases involving reckless or intentional misconduct, punitive damages may also be available. An attorney evaluates the full scope of your damages, not just immediate medical bills, to ensure you seek everything you are owed.`,
  },
  {
    question: `Are agricultural and farm-related injuries covered under personal injury law?`,
    answer: `Yes. Clinton County's rural and agricultural environment means farm-related injuries do occur — equipment accidents, animal incidents on roadways, and hazardous property conditions on farmland can all give rise to personal injury claims. The legal standards may differ depending on whether the injury occurred on a public road, private property open to visitors, or purely private agricultural land. Premises liability law and negligence principles under Ohio common law govern most of these situations, and our attorney can evaluate whether you have a viable claim.`,
  },
  {
    question: `What should I do right after an accident in Wilmington or Clinton County?`,
    answer: `After any accident in Clinton County, you should: (1) seek medical attention immediately — even if you feel okay, some injuries like whiplash or internal trauma are not immediately apparent; (2) document the scene with photos and gather witness contact information; (3) file a police report for any vehicle accident; (4) notify your insurance company but do not give a recorded statement to the at-fault party's insurer without speaking to an attorney first; and (5) contact Jwayyed Law LLC to schedule a consultation before the statute of limitations runs.`,
  },
  {
    question: `Does uninsured motorist coverage apply if I am hit by an uninsured driver in Clinton County?`,
    answer: `Yes. If you carry uninsured or underinsured motorist (UM/UIM) coverage under your own auto insurance policy, you may be able to recover compensation from your own insurer when the at-fault driver lacks sufficient coverage. Ohio law, including ORC 3345.21 and related provisions, governs how UM/UIM claims are handled. Insurers do not always make the process easy, and claims can be disputed. An attorney can help you understand your policy, document your damages, and negotiate a fair UM/UIM settlement.`,
  },
  {
    question: `How does a contingency fee arrangement work, and do I have to pay upfront?`,
    answer: `At Jwayyed Law LLC, personal injury cases are typically handled on a contingency fee basis. This means you pay no attorney fees unless we achieve a recovery for you through settlement or verdict. The attorney's fee is calculated as a percentage of the recovery and is deducted at the time of settlement or judgment. This arrangement ensures that injured people in Clinton County and throughout Ohio can access quality legal counsel without worrying about upfront costs or hourly billing.`,
  },
  {
    question: `Where are personal injury lawsuits filed in Clinton County?`,
    answer: `Personal injury cases in Clinton County with claims above the small claims threshold are filed at the Clinton County Common Pleas Court, located at 46 S. South St, Wilmington, OH 45177. Smaller claims may be filed in the Wilmington Municipal Court. Jwayyed Law LLC is experienced in Ohio's court system and will ensure your case is filed in the correct court and jurisdiction to protect your legal rights.`,
  },
];

export default function PersonalInjuryClintonCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Clinton County, Ohio"
        description="Serving Wilmington, Sabina, Blanchester, Clarksville, Port William, and surrounding communities."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Personal Injury Representation in Clinton County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When you are injured because of someone else&apos;s negligence in Clinton County, Ohio, you should not have to face the legal and financial aftermath alone. Jwayyed Law LLC represents injury victims throughout Clinton County — including Wilmington, Sabina, Blanchester, Clarksville, and Port William — in personal injury matters ranging from car accidents to premises liability. The rural southwestern Ohio landscape served by US 68 and SR 73 corridors sees its share of serious collisions, and our attorney is prepared to fight for the full compensation you deserve under Ohio law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2305.10 imposes a two-year statute of limitations on most personal injury claims, beginning from the date of injury. Acting quickly is critical not only to preserve your legal rights but also to secure evidence before it is lost or destroyed. Accident reconstruction experts, surveillance footage, witness recollections, and medical records all become harder to obtain as time passes. Our attorney begins investigating your case as soon as you retain us, building the strongest possible foundation for your claim.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s modified comparative negligence statute, ORC 2315.33, can significantly affect your recovery. In rural counties like Clinton, insurance adjusters sometimes argue that drivers contributed to accidents by speeding on country roads or failing to account for agricultural equipment and animals. We carefully review all evidence to challenge inflated fault assessments. As long as your share of fault is below 50%, you retain the right to recover — and we work to ensure your damages are calculated fairly and comprehensively.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Clinton County&apos;s agricultural character means that farm-related injury scenarios, animal-vehicle collisions, and rural road hazards are not uncommon. Beyond traffic accidents, we handle slip and fall claims at local businesses, premises liability cases, dog bite injuries under ORC 955.28, and workplace injuries where third-party negligence is involved. Every case receives individualized attention and thorough legal analysis tailored to the specific facts.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Personal injury lawsuits in Clinton County are filed at the Clinton County Common Pleas Court, 46 S. South St, Wilmington, OH 45177. Jwayyed Law LLC handles personal injury cases on a contingency fee basis — no fees unless we recover for you. Contact us at{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> or call (614) 285-5482 for a consultation. Learn more about our{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury services</Link> throughout Ohio.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
