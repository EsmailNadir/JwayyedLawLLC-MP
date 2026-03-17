import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Montgomery County, Ohio | Dayton | Jwayyed Law LLC',
  description: 'Personal injury attorney serving Montgomery County, Dayton, Kettering, Huber Heights, Miamisburg, Vandalia, and surrounding communities. Car accidents, slip and fall. Call (614) 285-5482.',
  keywords: ['personal injury Montgomery County', 'injury lawyer Dayton Ohio', 'Montgomery County accident attorney', 'car accident lawyer Dayton Ohio', 'personal injury Kettering Ohio'],
  openGraph: {
    title: 'Personal Injury Lawyer in Montgomery County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/personal-injury-montgomery-county',
  },
  alternates: { canonical: '/locations/montgomery-county/personal-injury-montgomery-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'Personal Injury - Montgomery County', href: '/locations/montgomery-county/personal-injury-montgomery-county' },
];

const faqs = [
  {
    question: `What is the statute of limitations for personal injury in Ohio?`,
    answer: `Ohio Revised Code 2305.10 provides that most personal injury claims must be filed within two years from the date the cause of action accrues — generally the date of injury. If you were hurt in Montgomery County, Dayton, or anywhere else in Ohio and miss this two-year deadline, your case will be dismissed. Medical malpractice carries a one-year statute with a four-year repose period. Contact an attorney promptly after any injury to preserve your right to pursue a claim.`,
  },
  {
    question: `How does Ohio's comparative negligence law apply to Dayton-area car accidents?`,
    answer: `Ohio's modified comparative fault rule, ORC 2315.33, allows you to recover damages if you are less than 50% at fault for the accident. If you are 50% or more at fault, you recover nothing. If you are partially at fault but under that threshold, your recovery is reduced proportionally. In the high-traffic I-75 and I-70 corridors in Dayton and Kettering, multi-vehicle accidents often involve disputed fault. Our attorney conducts a thorough investigation to accurately establish liability and challenge any overstatement of your fault.`,
  },
  {
    question: `What damages are available in a Montgomery County personal injury case?`,
    answer: `Ohio law allows recovery of economic damages — past and future medical bills, lost wages, loss of future earning capacity, and property damage — and non-economic damages including pain and suffering, emotional distress, loss of enjoyment of life, and consortium claims. In cases involving reckless, malicious, or grossly negligent conduct, punitive damages may also be available. Our attorney analyzes all categories of damages thoroughly to ensure your recovery reflects the full impact of your injuries, both now and in the future.`,
  },
  {
    question: `What are the most common personal injury scenarios in Montgomery County?`,
    answer: `Montgomery County's dense urban and suburban population generates a wide variety of personal injury cases. Car and truck accidents on I-75, I-70, and US 35 are frequent and often severe. Slip and fall accidents at commercial properties, shopping centers, and restaurants in Dayton, Kettering, and Huber Heights are also common. Workplace injuries involving third-party equipment or contractors, dog bites, pedestrian and bicycle accidents, and wrongful death claims are all matters we handle for clients throughout the county.`,
  },
  {
    question: `What should I do right after an injury in the Dayton area?`,
    answer: `After any injury in Montgomery County: (1) get medical treatment immediately — do not wait to see if pain resolves on its own; (2) document everything — take photos of the scene, your injuries, and any conditions that caused the accident; (3) collect witness contact information; (4) file a police report for any traffic accident; (5) do not give recorded statements to the at-fault party's insurer without counsel; and (6) call Jwayyed Law LLC at (614) 285-5482 to discuss your legal options before the statute of limitations expires.`,
  },
  {
    question: `What is UM/UIM coverage, and why does it matter in Montgomery County?`,
    answer: `Uninsured/underinsured motorist (UM/UIM) coverage compensates you when the at-fault driver has no insurance or insufficient insurance to cover your damages. Under Ohio law including ORC 3345.21, your own auto insurer steps in up to your UM/UIM policy limits. Given the volume of traffic and the number of uninsured drivers on Dayton-area roads, UM/UIM coverage provides a critical safety net. Our attorney helps injury victims pursue UM/UIM claims when the at-fault driver is uninsured or underinsured.`,
  },
  {
    question: `Do I need to pay upfront for a personal injury attorney?`,
    answer: `No. Jwayyed Law LLC represents personal injury clients on a contingency fee basis. You pay no attorney fees unless we recover compensation for you. The fee is a percentage of the final recovery — deducted at settlement or judgment. This model ensures that people injured in Montgomery County can access skilled legal representation without any financial barrier. We discuss the fee structure openly at your initial consultation so you always know exactly how it works.`,
  },
  {
    question: `Where are personal injury cases filed in Montgomery County?`,
    answer: `Personal injury lawsuits in Montgomery County are filed at the Montgomery County Common Pleas Court, located at 41 N. Perry St, Dayton, OH 45422. Smaller dollar claims may be filed in Dayton Municipal Court or other area municipal courts. Our attorney navigates Montgomery County's court system efficiently and will file your case in the appropriate venue to ensure your claim proceeds without procedural complications.`,
  },
];

export default function PersonalInjuryMontgomeryCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Montgomery County, Ohio"
        description="Serving Dayton, Kettering, Trotwood, Huber Heights, Englewood, Miamisburg, Vandalia, and surrounding communities."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Personal Injury Representation in Montgomery County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County is one of Ohio&apos;s most populous urban counties, anchored by Dayton and surrounded by Kettering, Trotwood, Huber Heights, Englewood, Miamisburg, and Vandalia. The intersecting interstates — I-75, I-70, and US 35 — make Montgomery County a major transportation hub where serious accidents occur regularly. Jwayyed Law LLC represents personal injury victims throughout the county in car accidents, truck accidents, slip and fall, premises liability, workplace injury claims, and wrongful death matters. If you were hurt due to someone else&apos;s negligence, our attorney will fight for the full compensation you deserve under Ohio law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2305.10 gives personal injury victims two years from the date of injury to file suit. This deadline is non-negotiable — miss it and your case is dismissed, regardless of its merits. Our attorney works to begin your case immediately, identifying liable parties, preserving evidence, and building a complete picture of your damages. In busy, high-volume accident environments like the Dayton metro area, swift action is especially important as evidence can disappear quickly.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s modified comparative negligence rule under ORC 2315.33 means fault matters enormously in personal injury cases. Insurance companies defending accident claims in Montgomery County often attempt to assign you a share of blame — arguing you were speeding, following too closely, or otherwise contributed to the crash. Our attorney proactively investigates every case to counter these arguments with solid evidence, ensuring your share of fault is not inflated and your recovery is not unfairly diminished.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County&apos;s urban density brings significant slip and fall and premises liability activity as well. Retail establishments, restaurants, parking lots, and commercial properties throughout Dayton, Kettering, and Miamisburg must maintain safe conditions for visitors. When they fail to do so, injury victims can hold property owners accountable. We also handle dog bite claims under ORC 955.28, workplace third-party negligence cases, bicycle and pedestrian accident claims, and catastrophic injury matters.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Personal injury cases in Montgomery County are filed at the Montgomery County Common Pleas Court, 41 N. Perry St, Dayton, OH 45422. We represent clients on a contingency fee basis — you pay nothing unless we win. Contact us at{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> or call (614) 285-5482. Learn more about our{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury practice</Link> across Ohio.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
