import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Delaware County, Ohio | Delaware & Powell | Jwayyed Law LLC',
  description: 'Personal injury attorney serving Delaware County, Delaware, Powell, Westerville, Dublin, and Lewis Center. Car accidents, slip and fall, injury claims. Call (614) 285-5482.',
  keywords: ['personal injury Delaware County', 'injury lawyer Delaware Ohio', 'Delaware County accident attorney', 'car accident lawyer Powell Ohio', 'personal injury Westerville Ohio'],
  openGraph: {
    title: 'Personal Injury Lawyer in Delaware County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/delaware-county/personal-injury-delaware-county',
  },
  alternates: { canonical: '/locations/delaware-county/personal-injury-delaware-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'Personal Injury - Delaware County', href: '/locations/delaware-county/personal-injury-delaware-county' },
];

const faqs = [
  {
    question: `What is the statute of limitations for personal injury claims in Ohio?`,
    answer: `Under Ohio Revised Code 2305.10, the statute of limitations for most personal injury claims in Ohio is two years from the date the cause of action accrues — typically the date of injury. If you were hurt in Delaware County, you must file your lawsuit within this window or lose your right to recover. Exceptions exist for discovery of latent injuries and for minors, but you should not assume an exception applies to your case. Contact an attorney promptly to protect your rights.`,
  },
  {
    question: `US 23 and SR 36/37 are major accident corridors in Delaware County — how can you help?`,
    answer: `US 23, SR 36, and SR 37 carry heavy traffic through Delaware County as commuters travel between Columbus and the rapidly growing communities of Powell, Lewis Center, Delaware, and Sunbury. Accidents on these roads are common and can be serious. Our attorney investigates traffic accidents thoroughly — reviewing police reports, witness statements, traffic camera footage, and physical evidence — to establish liability and maximize your recovery under Ohio law, including ORC 2315.33 on comparative negligence.`,
  },
  {
    question: `What damages can I recover after an injury in Delaware County?`,
    answer: `Ohio law permits recovery of economic damages, including past and future medical expenses, lost wages, loss of earning capacity, and property damage. You may also recover non-economic damages such as pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium for a spouse. In exceptional cases involving egregious conduct, punitive damages are also available. Our attorney will assess the full value of your claim, accounting for both immediate costs and long-term impacts of your injury.`,
  },
  {
    question: `What should I do immediately after a car accident in Delaware County?`,
    answer: `After any accident in Delaware County: (1) call 911 and get medical care — adrenaline can mask pain from serious injuries; (2) photograph the vehicles, road conditions, skid marks, and your injuries; (3) collect names and contact information of witnesses; (4) do not admit fault or apologize at the scene; (5) notify your insurer but decline to give a recorded statement to the other driver's insurance until you speak with an attorney; and (6) contact Jwayyed Law LLC as soon as possible to begin documenting your case.`,
  },
  {
    question: `How does Ohio's comparative negligence rule affect my personal injury case?`,
    answer: `Ohio uses a modified comparative fault system under ORC 2315.33. If you are found to be 50% or more responsible for the accident, you receive nothing. If you are less than 50% at fault, your damages are reduced proportionally. For example, if you are 15% at fault and your damages total $200,000, you recover $170,000. Insurance companies frequently try to assign you more fault than is warranted — having an attorney who thoroughly investigates and disputes inflated fault attributions can make a significant difference in your recovery.`,
  },
  {
    question: `What is uninsured/underinsured motorist (UM/UIM) coverage and do I need it?`,
    answer: `UM/UIM coverage protects you when an at-fault driver carries no insurance or insufficient insurance to cover your damages. Under ORC 3345.21 and related Ohio provisions, your own auto insurer pays your damages up to your UM/UIM policy limits when the responsible driver cannot. Given the volume of uninsured drivers in Ohio, this coverage is critically important. If you are involved in an accident with an uninsured motorist in Delaware County, our attorney can help you pursue your own UM/UIM policy claim effectively.`,
  },
  {
    question: `Do I have to pay attorney fees upfront to hire Jwayyed Law LLC?`,
    answer: `No. Jwayyed Law LLC handles personal injury cases on a contingency fee basis. You owe no attorney fees unless we secure a recovery for you through settlement or trial verdict. The attorney's fee is a percentage of the total recovery, deducted at the time the case resolves. This arrangement means injured individuals and families in Delaware County can access skilled legal representation immediately, without worrying about hourly costs or upfront retainers.`,
  },
  {
    question: `Where are personal injury lawsuits filed in Delaware County?`,
    answer: `Personal injury lawsuits in Delaware County are filed at the Delaware County Common Pleas Court, located at 91 N. Sandusky St, Delaware, OH 43015. Smaller dollar claims may be handled at the Delaware Municipal Court or Delaware County Court depending on the amount. Our attorney is familiar with the Delaware County court system and will file your case in the appropriate venue to ensure your claim proceeds efficiently.`,
  },
];

export default function PersonalInjuryDelawareCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Delaware County, Ohio"
        description="Serving Delaware, Powell, Westerville, Dublin, Lewis Center, Sunbury, and surrounding communities."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Personal Injury Representation in Delaware County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County is one of Ohio&apos;s fastest-growing counties, with rapidly expanding communities along US 23, SR 36, and SR 37 bringing increased traffic, new construction zones, and unfortunately more accidents. Jwayyed Law LLC represents personal injury victims throughout Delaware County — including Delaware, Powell, Westerville, Dublin, Lewis Center, and Sunbury — in matters ranging from car accidents and truck collisions to slip and fall and premises liability claims. If you were injured due to someone else&apos;s negligence, our attorney is prepared to help you pursue the full compensation you deserve under Ohio law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code 2305.10, you generally have two years from the date of injury to file a personal injury lawsuit in Ohio. This deadline is strict. Even if you are still treating with doctors, still negotiating with an insurance company, or still uncertain about the full extent of your injuries, the clock is running. Our attorney begins working your case immediately upon retention to preserve evidence, interview witnesses, and document damages before opportunities are lost.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The comparative negligence statute, ORC 2315.33, governs how fault is allocated in Ohio personal injury cases. In Delaware County car accidents — particularly on busy commuter routes like US 23 through Lewis Center and Powell — insurance companies often try to share blame with the injured party to reduce their exposure. Our attorney carefully investigates the facts, retains experts when appropriate, and challenges any effort to overstate your contribution to the accident, ensuring you receive a fair recovery.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County&apos;s suburban growth also means construction zone accidents, defective sidewalks, dangerous parking lots, and premises liability incidents at retail and commercial properties occur frequently. We handle all categories of personal injury claims, including car and truck accidents, motorcycle crashes, slip and fall, dog bite injuries under ORC 955.28, and wrongful death matters. Every case is handled with individual attention and a focus on securing maximum compensation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Personal injury cases in Delaware County are filed at the Delaware County Common Pleas Court, 91 N. Sandusky St, Delaware, OH 43015. We handle cases on a contingency fee basis — no fees unless we win. Contact us at{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> or call (614) 285-5482. You can also review our{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury practice overview</Link> for more information.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
