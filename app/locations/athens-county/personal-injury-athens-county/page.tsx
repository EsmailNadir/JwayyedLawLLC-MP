import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Athens County, Ohio',
  description: 'Personal injury attorney serving Athens County, Athens, Nelsonville, and surrounding Ohio communities. Car accidents, slip and fall, and injury claims.',
  keywords: ['personal injury Athens County', 'injury lawyer Athens Ohio', 'Athens County accident attorney', 'car accident lawyer Athens Ohio', 'slip and fall Athens County'],
  openGraph: {
    title: 'Personal Injury Lawyer in Athens County, Ohio',
    url: 'https://www.jjlawohio.com/locations/athens-county/personal-injury-athens-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/locations/athens-county/personal-injury-athens-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Athens County', href: '/courts/athens-county' },
  { label: 'Personal Injury - Athens County', href: '/locations/athens-county/personal-injury-athens-county' },
];

const faqs = [
  {
    question: `What is the statute of limitations for personal injury claims in Ohio?`,
    answer: `Under Ohio Revised Code 2305.10, the statute of limitations for most personal injury claims in Ohio is two years from the date the cause of action accrues — typically the date of injury. If you were hurt in Athens County and wait too long to file, you may lose your right to recover compensation entirely. Medical malpractice has a one-year statute with a four-year repose period. Contact an attorney promptly after any injury to protect your rights.`,
  },
  {
    question: `How does Ohio's comparative negligence law affect my personal injury case?`,
    answer: `Ohio follows a modified comparative negligence rule under ORC 2315.33. If you are found to be 50% or more at fault for your own injury, you cannot recover any damages. If you are less than 50% at fault, your damages are reduced proportionally. For example, if you are found 20% at fault and your total damages are $100,000, you recover $80,000. Insurance companies often try to inflate your percentage of fault — having an experienced attorney advocate for you is critical.`,
  },
  {
    question: `What damages can I recover after a personal injury in Athens County?`,
    answer: `Ohio law allows injury victims to recover economic damages such as past and future medical expenses, lost wages, loss of earning capacity, and property damage. You may also recover non-economic damages including pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium for a spouse. In cases involving egregious conduct, punitive damages may also be available. An attorney can evaluate the full value of your claim based on your specific circumstances.`,
  },
  {
    question: `What should I do after a car accident in Athens County?`,
    answer: `After a car accident in Athens County or anywhere in Ohio, you should: (1) call 911 and get medical attention even if you feel fine — injuries often appear hours or days later; (2) document the scene with photos of vehicles, road conditions, and injuries; (3) exchange insurance and contact information with the other driver; (4) avoid admitting fault or making recorded statements to insurance adjusters before speaking with an attorney; and (5) contact Jwayyed Law LLC to discuss your legal options as soon as possible.`,
  },
  {
    question: `Does Jwayyed Law LLC handle personal injury cases for Ohio University students?`,
    answer: `Yes. Ohio University brings thousands of students and visitors to Athens each year, and injuries can happen on campus, at local businesses, in rental properties, or on area roads. We represent injured students, faculty, staff, and visitors in Athens County. Whether your injury occurred at an off-campus party, in a vehicle accident on US 33, or due to a landlord's negligence, we can evaluate your claim and advise you of your rights under Ohio law.`,
  },
  {
    question: `What is uninsured or underinsured motorist (UM/UIM) coverage, and why does it matter?`,
    answer: `Ohio Revised Code 3345.21 and related provisions govern uninsured and underinsured motorist coverage in Ohio. If you are hit by a driver with no insurance or insufficient insurance to cover your injuries, your own UM/UIM policy may compensate you for medical bills, lost wages, and other damages. Pursuing a UM/UIM claim involves its own legal process, and insurers do not always offer fair settlements. An attorney can help you navigate the claim and negotiate on your behalf.`,
  },
  {
    question: `How does a contingency fee arrangement work for personal injury cases?`,
    answer: `At Jwayyed Law LLC, personal injury cases are typically handled on a contingency fee basis — meaning you owe no attorney fees unless we recover compensation for you. If we win your case through settlement or verdict, the attorney's fee is a percentage of the recovery. This arrangement ensures that injured people in Athens County and throughout Ohio can access quality legal representation regardless of their financial situation. We discuss fee arrangements openly during your initial consultation.`,
  },
  {
    question: `Where are personal injury cases filed in Athens County?`,
    answer: `Personal injury lawsuits in Athens County are filed at the Athens County Common Pleas Court, located at 1 S. Court St, Athens, OH 45701. Smaller claims may be handled in the Athens Municipal Court or Athens County Court depending on the amount in controversy. Jwayyed Law LLC is experienced in navigating Ohio's court system and will file your case in the appropriate venue to maximize your recovery.`,
  },
];

export default function PersonalInjuryAthensCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Athens County, Ohio"
        description="Serving Athens, Nelsonville, The Plains, Albany, and surrounding communities with experienced injury representation."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Personal Injury Representation in Athens County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you were injured in Athens County due to someone else&apos;s negligence, you deserve skilled legal representation to pursue the compensation you are owed. Athens County sits in the heart of Appalachian southeastern Ohio, and its roads — including US 33, US 50, and SR 56 — can be dangerous corridors for accidents. Jwayyed Law LLC represents injury victims throughout Athens County, including Athens, Nelsonville, The Plains, Albany, and the communities surrounding Ohio University. We understand the local courts, the applicable Ohio statutes, and what it takes to build a strong personal injury case on your behalf.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2305.10 gives most personal injury claimants two years from the date of injury to file suit. Missing this deadline forfeits your right to recovery, regardless of how strong your case is. Whether your injury was caused by a car accident, a slip and fall on a dangerous property, a dog attack, a workplace incident, or another party&apos;s negligence, it is important to speak with an attorney as early as possible. Evidence is preserved more effectively, witnesses are easier to locate, and your rights are better protected when action is taken promptly.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s modified comparative negligence rule, codified in ORC 2315.33, means that your recovery may be reduced if you are found partially at fault. Insurance companies frequently argue that injured victims bear a share of blame in order to reduce or deny claims. Our attorney carefully investigates each case, gathers evidence, and builds arguments to minimize any fault attributed to you. If you were less than 50% at fault, you are entitled to recover — and we fight to protect that right.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Athens County area presents unique injury scenarios. Ohio University&apos;s presence means pedestrian and bicycle accidents are common near campus, and injuries in rental housing — from negligent landlords who fail to maintain safe conditions — are an ongoing concern. Rural roads and agricultural areas around Nelsonville and Albany carry risks of serious collisions and equipment-related injuries. We handle the full range of personal injury matters and tailor our approach to the specific facts of your case and the local community context.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Personal injury cases in Athens County are filed at the Athens County Common Pleas Court at 1 S. Court St, Athens, OH 45701. Jwayyed Law LLC handles cases on a contingency fee basis — you pay no attorney fees unless we recover compensation for you. To discuss your injury claim, contact us at{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> or call (614) 285-5482. You can also learn more about our{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury practice</Link> and how we serve clients across Ohio.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
