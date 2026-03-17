import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Morrow County, Ohio | Mt. Gilead | Jwayyed Law LLC',
  description: 'Personal injury attorney serving Morrow County, Mt. Gilead, Cardington, Marengo, and surrounding Ohio communities. Car accidents, slip and fall, injury claims. Call (614) 285-5482.',
  keywords: ['personal injury Morrow County', 'injury lawyer Mt. Gilead Ohio', 'Morrow County accident attorney', 'car accident lawyer Cardington Ohio', 'slip and fall Morrow County'],
  openGraph: {
    title: 'Personal Injury Lawyer in Morrow County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/morrow-county/personal-injury-morrow-county',
  },
  alternates: { canonical: '/locations/morrow-county/personal-injury-morrow-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
  { label: 'Personal Injury - Morrow County', href: '/locations/morrow-county/personal-injury-morrow-county' },
];

const faqs = [
  {
    question: `What is Ohio's statute of limitations for personal injury claims?`,
    answer: `Under Ohio Revised Code 2305.10, most personal injury claims must be filed within two years from the date the cause of action accrues — typically the date of injury. If you were hurt in Morrow County and fail to file within this period, you forfeit your right to recover compensation. Medical malpractice has a shorter one-year statute with a four-year repose period. Contact an attorney as soon as possible after any injury so critical deadlines are not missed.`,
  },
  {
    question: `How does Ohio's comparative negligence rule affect my recovery?`,
    answer: `Ohio Revised Code 2315.33 establishes modified comparative fault. If you are found to be 50% or more at fault for the accident, you cannot recover any damages. If your fault percentage is less than 50%, your damages are reduced proportionally. Rural roads in Morrow County — including US 42 and SR 95 — can create complex accident scenarios involving farm equipment, animals, or poor road conditions. Our attorney investigates thoroughly to accurately establish fault and protect your right to full recovery.`,
  },
  {
    question: `What damages can I recover after an injury in Morrow County?`,
    answer: `Ohio allows recovery of economic damages — including past and future medical expenses, lost wages, loss of future earning capacity, and property damage — and non-economic damages such as pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium for a spouse. In cases involving gross negligence, recklessness, or malicious conduct, punitive damages may also be available. Our attorney evaluates your case comprehensively to ensure every category of damages is identified and pursued.`,
  },
  {
    question: `Are agriculture-related personal injury claims handled differently in Ohio?`,
    answer: `Agricultural injury claims in Morrow County can arise from collisions with farm equipment on rural roads, accidents on private farmland, livestock on highways, or defective agricultural products. Ohio premises liability and negligence law generally applies, though the status of the injured person on the property (invitee, licensee, or trespasser) affects the duty of care owed. ORC 955.28 governs dog bite strict liability. Our attorney evaluates the specific circumstances of each rural injury claim and advises you on your legal options.`,
  },
  {
    question: `What should I do after an accident on rural roads in Morrow County?`,
    answer: `After any accident in Morrow County: (1) call 911 and get medical attention — farm roads and rural highways often mean delayed emergency response, so document where you are precisely; (2) photograph all vehicles, the roadway, any signage, and your injuries; (3) get contact information from witnesses; (4) report the accident to law enforcement; (5) do not give recorded statements to the opposing insurer without speaking to an attorney first; and (6) contact Jwayyed Law LLC promptly to protect your legal rights.`,
  },
  {
    question: `What is uninsured motorist coverage and does it apply to rural accidents?`,
    answer: `Yes. Uninsured and underinsured motorist (UM/UIM) coverage applies statewide, including on Morrow County's rural roads. Under Ohio law including ORC 3345.21, if the at-fault driver has no insurance or insufficient coverage, your own UM/UIM policy compensates you up to your policy limits. Rural counties can have higher rates of uninsured drivers. If you were hit by an uninsured driver in Mt. Gilead, Cardington, or elsewhere in Morrow County, a UM/UIM claim against your own insurer may be critical to your recovery.`,
  },
  {
    question: `How does a contingency fee arrangement work for personal injury cases?`,
    answer: `Jwayyed Law LLC handles personal injury cases on a contingency fee basis. You pay no attorney fees unless we obtain a recovery for you through settlement or trial. The fee is a predetermined percentage of the recovery and is deducted at the time the case concludes. This means injured individuals in Morrow County — regardless of their financial situation — can access skilled legal representation from the day of the accident without any upfront payment or hourly cost.`,
  },
  {
    question: `Where are personal injury lawsuits filed in Morrow County?`,
    answer: `Personal injury lawsuits in Morrow County are filed at the Morrow County Common Pleas Court, located at 48 E. High St, Mt. Gilead, OH 43338. Smaller claims may be handled in the Morrow County Court. Our attorney is familiar with Ohio's rural court systems and will ensure your case is filed in the proper venue, served correctly, and pursued diligently through to resolution.`,
  },
];

export default function PersonalInjuryMorrowCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Morrow County, Ohio"
        description="Serving Mt. Gilead, Cardington, Marengo, Edison, and surrounding communities."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Personal Injury Representation in Morrow County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Morrow County is a rural Ohio county north of Columbus, home to Mt. Gilead, Cardington, Marengo, and Edison. Its character — agricultural land, rural state routes, and smaller communities — means that personal injury cases here can involve unique circumstances: farm equipment collisions, livestock on roadways, poorly maintained rural roads, and limited emergency services response times that affect injury severity. Jwayyed Law LLC represents Morrow County injury victims in all types of personal injury matters, fighting to recover the compensation they deserve under Ohio law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2305.10 gives most personal injury claimants exactly two years from the date of injury to file a lawsuit. This deadline does not move simply because you are still treating with doctors or negotiating with an insurance company. Missing the deadline is almost always fatal to a personal injury case. Our attorney prioritizes acting quickly — securing evidence, documenting your damages, and building a comprehensive claim from the start — to put you in the strongest possible legal position.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              US 42 and SR 95 are primary corridors through Morrow County and see a meaningful number of serious accidents, including rear-end collisions, side-swipes, and crashes involving farm machinery crossing roads during planting and harvest seasons. Ohio&apos;s modified comparative negligence rule under ORC 2315.33 allows recovery as long as you are less than 50% at fault. Our attorney carefully reviews accident reports, road conditions, sight-line issues, and vehicle data to establish liability and protect your right to recover in full.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond vehicle accidents, Morrow County personal injury cases can involve premises liability at local businesses in Mt. Gilead and Cardington, dog bite injuries under ORC 955.28, workplace accidents where a third party bears liability, and wrongful death claims. Every case is evaluated on its individual facts and pursued with the same level of dedication, regardless of the size of the claim or the county in which it arises.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Personal injury cases in Morrow County are filed at the Morrow County Common Pleas Court, 48 E. High St, Mt. Gilead, OH 43338. Jwayyed Law LLC handles these cases on a contingency fee basis — no attorney fees unless we win your case. Contact us at{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> or call (614) 285-5482. Learn more about our{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury practice</Link> serving clients across Ohio.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
