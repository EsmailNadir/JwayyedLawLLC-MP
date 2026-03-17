import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Franklin County, Ohio | Columbus | Jwayyed Law LLC',
  description: 'Personal injury attorney serving Franklin County, Columbus, Dublin, Westerville, Hilliard, Gahanna, Grove City, and surrounding Ohio communities. Car accidents, slip and fall. Call (614) 285-5482.',
  keywords: ['personal injury Franklin County', 'injury lawyer Columbus Ohio', 'Franklin County accident attorney', 'car accident lawyer Columbus Ohio', 'personal injury Dublin Ohio'],
  openGraph: {
    title: 'Personal Injury Lawyer in Franklin County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/personal-injury-franklin-county',
  },
  alternates: { canonical: '/locations/franklin-county/personal-injury-franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Personal Injury - Franklin County', href: '/locations/franklin-county/personal-injury-franklin-county' },
];

const faqs = [
  {
    question: `What is the statute of limitations for personal injury claims in Franklin County?`,
    answer: `Ohio Revised Code 2305.10 establishes a two-year statute of limitations for most personal injury claims, beginning on the date the cause of action accrues — typically the date of injury. If you were hurt in Columbus or anywhere in Franklin County, you must file your lawsuit within two years or lose your right to any recovery. Medical malpractice carries a one-year statute with a four-year repose period. Contact Jwayyed Law LLC promptly after any injury to ensure these critical deadlines are protected.`,
  },
  {
    question: `Does the firm handle personal injury cases in Franklin County even though it also does criminal work there?`,
    answer: `Yes. Jwayyed Law LLC handles personal injury cases throughout Franklin County, including Columbus, Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, Worthington, Bexley, and Upper Arlington. The firm serves personal injury clients in Franklin County without limitation. Franklin County is where the firm is based, and personal injury representation here is a core part of our practice.`,
  },
  {
    question: `What types of damages are recoverable after a Columbus-area personal injury?`,
    answer: `Ohio law allows recovery of economic damages — past and future medical expenses, lost income, loss of future earning capacity, and property damage — and non-economic damages such as pain and suffering, emotional distress, loss of enjoyment of life, and spouse's loss of consortium. In cases involving malicious, reckless, or intentional misconduct, punitive damages may also be awarded by a jury. Our attorney evaluates every component of your damages — including long-term care needs and impact on your professional life — to build a claim that reflects your full losses.`,
  },
  {
    question: `How does Ohio's comparative negligence law apply in Franklin County accident cases?`,
    answer: `Under ORC 2315.33, Ohio's modified comparative fault rule reduces your recovery by your percentage of fault, and bars recovery entirely if you are 50% or more at fault. In high-traffic Columbus corridors — I-270, I-71, I-670, and US 33 — accidents often involve multiple vehicles and disputed fault. Insurance companies defending Columbus-area accident claims routinely try to push fault onto injured claimants. Our attorney investigates thoroughly, gathers evidence, and fights to ensure your fault allocation is accurate and your recovery is maximized.`,
  },
  {
    question: `What are common personal injury scenarios in Franklin County?`,
    answer: `Franklin County's large population and dense road network generate a wide spectrum of personal injury cases. Car and truck accidents on Columbus interstates and city streets are extremely common. Slip and fall cases at commercial properties, shopping centers, apartment complexes, and restaurants throughout the Columbus suburbs are frequent. Pedestrian and bicycle accidents, dog bites under ORC 955.28, rideshare accidents, construction zone injuries, and wrongful death matters are all cases we handle for Franklin County clients.`,
  },
  {
    question: `What should I do after a car accident in Columbus or the Columbus suburbs?`,
    answer: `After a car accident in Franklin County: (1) seek immediate medical care, even for seemingly minor injuries — symptoms like concussion or internal injury often develop after the adrenaline subsides; (2) photograph the vehicles, road, signage, and your injuries; (3) collect witness names, phone numbers, and emails; (4) file a police report; (5) do not give a recorded statement to the other driver's insurer before speaking with an attorney; and (6) contact Jwayyed Law LLC as quickly as possible. Fast action preserves your claim and evidence.`,
  },
  {
    question: `What is UM/UIM coverage, and why does it matter in the Columbus area?`,
    answer: `Uninsured/underinsured motorist (UM/UIM) coverage, governed by Ohio law including ORC 3345.21, compensates you from your own auto policy when the at-fault driver has no insurance or insufficient insurance to cover your injuries. Columbus has a significant uninsured driver population. If you are hit by an uninsured driver anywhere in Franklin County, your own UM/UIM policy may be the most important source of recovery. Our attorney helps Franklin County clients pursue UM/UIM claims and ensure their own insurer pays what is owed.`,
  },
  {
    question: `Where are personal injury lawsuits filed in Franklin County?`,
    answer: `Personal injury cases in Franklin County are generally filed at the Franklin County Common Pleas Court, located at 369 S. High St, Columbus, OH 43215. Smaller claims may be filed in the Franklin County Municipal Court or in one of the area's many municipal courts depending on the amount and location. Jwayyed Law LLC is based in Columbus and is thoroughly familiar with Franklin County's court system, procedures, and local rules, ensuring your case is handled efficiently from filing to resolution.`,
  },
];

export default function PersonalInjuryFranklinCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Franklin County, Ohio"
        description="Serving Columbus, Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, Worthington, Bexley, Upper Arlington, and surrounding communities."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Personal Injury Representation in Franklin County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County is Ohio&apos;s most populous county and the home of Jwayyed Law LLC. Columbus and its surrounding suburbs — Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, Worthington, Bexley, and Upper Arlington — generate a high volume and wide variety of personal injury matters each year. Our attorney represents injury victims throughout Franklin County in car accidents, truck accidents, slip and fall, premises liability, pedestrian injuries, bicycle accidents, dog bites, and wrongful death cases. If someone&apos;s negligence injured you in Franklin County, we will fight to hold them accountable.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2305.10 gives personal injury claimants two years from the date of injury to file suit. This is a firm deadline — courts almost never extend it. While an insurance adjuster may tell you there is no hurry, the reality is that evidence degrades, witnesses move on, and your legal options narrow as time passes. Our attorney begins working immediately upon retention, preserving your claim and documenting your damages from the outset.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Ohio comparative negligence statute, ORC 2315.33, makes fault allocation one of the most important battlegrounds in any personal injury case. In Columbus&apos;s busy interstate and surface street network — I-270, I-71, I-670, and US 33 — accident liability can be genuinely complex. Insurers defending accident claims in Franklin County routinely try to attribute fault to injured parties to reduce or deny claims. Our attorney investigates every case rigorously, gathering physical evidence, traffic data, and witness testimony to accurately establish who was responsible and to what degree.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Slip and fall and premises liability cases are extremely common in the Columbus area given the number of commercial properties, apartment complexes, restaurants, and retail establishments. Property owners have a duty to maintain safe conditions for lawful visitors. When they fail — leaving ice unaddressed, failing to repair broken flooring, or creating other hazardous conditions — they are legally responsible for injuries that result. Our attorney evaluates premises liability claims carefully, including reviewing property inspection records and prior incident reports.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Franklin County personal injury cases are filed at the Franklin County Common Pleas Court, 369 S. High St, Columbus, OH 43215. As a Columbus-based firm, Jwayyed Law LLC is uniquely positioned to handle Franklin County personal injury matters efficiently. We work on a contingency fee basis — no fees unless we recover for you. Contact us at{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> or call (614) 285-5482. Learn more about our{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury practice</Link> throughout Ohio.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
