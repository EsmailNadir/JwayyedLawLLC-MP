import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Pickaway County, Ohio | Circleville | Jwayyed Law LLC',
  description: 'Personal injury attorney serving Pickaway County, Circleville, Ashville, Commercial Point, and surrounding Ohio communities. Car accidents, US 23 injury claims. Call (614) 285-5482.',
  keywords: ['personal injury Pickaway County', 'injury lawyer Circleville Ohio', 'Pickaway County accident attorney', 'car accident US 23 Ohio', 'personal injury Ashville Ohio'],
  openGraph: {
    title: 'Personal Injury Lawyer in Pickaway County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/pickaway-county/personal-injury-pickaway-county',
  },
  alternates: { canonical: '/locations/pickaway-county/personal-injury-pickaway-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Pickaway County', href: '/courts/pickaway-county' },
  { label: 'Personal Injury - Pickaway County', href: '/locations/pickaway-county/personal-injury-pickaway-county' },
];

const faqs = [
  {
    question: `What is Ohio's statute of limitations for personal injury claims?`,
    answer: `Ohio Revised Code 2305.10 establishes a two-year statute of limitations for most personal injury claims, running from the date the cause of action accrues — typically the injury date. If you were hurt in Pickaway County and fail to file within two years, your case will be time-barred. Medical malpractice has a one-year limitation with a four-year repose period. Do not assume your claim can wait — contact an attorney promptly to preserve your legal rights.`,
  },
  {
    question: `US 23 through Pickaway County has a high accident rate — how does that affect my case?`,
    answer: `US 23 is one of Ohio's most dangerous highways and runs directly through Pickaway County, connecting Columbus to Circleville and communities further south. High speeds, heavy traffic, and frequent turning movements create significant accident risks. If you were hurt on US 23 in Pickaway County, your case may involve commercial vehicles, distracted drivers, or road design defects. Our attorney investigates these accidents thoroughly, working to establish clear liability and a complete damages picture under Ohio law including ORC 2315.33 on comparative fault.`,
  },
  {
    question: `What damages can I recover after a Pickaway County personal injury?`,
    answer: `Ohio law permits recovery of economic damages — past and future medical expenses, lost wages, loss of earning capacity, and property damage — as well as non-economic damages including pain and suffering, emotional distress, loss of enjoyment of life, and spouse's loss of consortium. In egregious cases involving intentional or malicious harm, punitive damages may be awarded. Our attorney builds a comprehensive damages assessment that reflects not just your current costs but the long-term impact of your injuries on your life and financial security.`,
  },
  {
    question: `How does Ohio's modified comparative negligence rule work?`,
    answer: `Under ORC 2315.33, Ohio uses a modified comparative fault system. If you are 50% or more at fault for the accident, you cannot recover any damages at all. If you are less than 50% at fault, your recovery is reduced by your fault percentage. For example, if you are 25% at fault and your total damages are $80,000, you recover $60,000. Insurance companies routinely argue that plaintiffs are more at fault than the evidence supports. Our attorney aggressively disputes inflated fault attributions to protect your recovery.`,
  },
  {
    question: `What should I do after an accident in Circleville or on US 23?`,
    answer: `After any accident in Pickaway County: (1) get emergency medical care — do not delay, even if injuries seem minor; (2) photograph the scene, vehicles, road conditions, and your injuries from multiple angles; (3) write down or record the names and contact information of all witnesses; (4) file a police report; (5) avoid making statements about fault at the scene or to any insurance adjuster before speaking with an attorney; and (6) call Jwayyed Law LLC at (614) 285-5482 as soon as possible to begin building your case.`,
  },
  {
    question: `Does uninsured/underinsured motorist coverage apply in Pickaway County accidents?`,
    answer: `Yes. Ohio law, including ORC 3345.21, allows you to seek compensation from your own auto insurance under UM/UIM coverage when the at-fault driver has no insurance or insufficient insurance to cover your damages. This coverage is especially relevant in rural Ohio where uninsured motorist rates can be elevated. If you carry UM/UIM coverage and are hit by an uninsured driver on US 23 or elsewhere in Pickaway County, our attorney can help you pursue your own insurer for full and fair compensation.`,
  },
  {
    question: `Do I need to pay attorney fees to start a personal injury case?`,
    answer: `No. Jwayyed Law LLC handles personal injury cases on a contingency fee basis — meaning you pay no attorney fees unless and until we recover money for you. The fee is a percentage of the recovery, deducted when the case concludes by settlement or verdict. This arrangement makes skilled legal representation accessible to injury victims in Pickaway County and across Ohio regardless of their current financial situation. There are no hourly fees or upfront retainers for personal injury representation.`,
  },
  {
    question: `Where are personal injury lawsuits filed in Pickaway County?`,
    answer: `Personal injury cases in Pickaway County are filed at the Pickaway County Common Pleas Court, located at 207 S. Court St, Circleville, OH 43113. Smaller claims may go to the Circleville Municipal Court or Pickaway County Court depending on the amount in controversy. Jwayyed Law LLC understands Ohio's court filing requirements and will ensure your case is initiated in the correct venue, preserving all rights and procedural protections available to you.`,
  },
];

export default function PersonalInjuryPickawayCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Pickaway County, Ohio"
        description="Serving Circleville, Ashville, Commercial Point, South Bloomfield, Williamsport, and surrounding communities."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Personal Injury Representation in Pickaway County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Pickaway County sits directly south of Columbus on US 23, a corridor that carries substantial commuter and commercial traffic between the capital city and the communities of Circleville, Ashville, Commercial Point, South Bloomfield, and Williamsport. This mix of rural character and rapidly increasing suburban growth creates real accident risks, particularly along US 23 — one of Ohio&apos;s highest-accident-rate highways. Jwayyed Law LLC represents personal injury victims throughout Pickaway County, pursuing the full compensation they deserve after car accidents, slip and fall incidents, and other negligence-caused injuries.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2305.10 provides a two-year statute of limitations for most personal injury claims. Waiting too long — even while still receiving medical treatment or negotiating with an insurer — can cost you your entire case. Our attorney begins protecting your claim from day one: preserving accident scene evidence, gathering police reports, identifying witnesses, and documenting the complete scope of your damages before evidence fades and witnesses become difficult to locate.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s modified comparative negligence rule under ORC 2315.33 is a critical factor in every personal injury case. Insurance companies defending US 23 accident claims in Pickaway County often argue that the injured party contributed to the crash — pointing to speed, following distance, or other driver behaviors. Our attorney reviews all available evidence to challenge these arguments, including accident reconstruction analysis, vehicle data, and road condition documentation, to ensure any fault attributed to you is minimized.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond highway accidents, Pickaway County personal injury claims include slip and fall cases at retail establishments in Circleville, premises liability incidents related to the county&apos;s mix of agricultural and commercial properties, dog bite injuries under ORC 955.28, and workplace accidents involving third-party negligence. We also represent families in wrongful death cases when a negligently caused injury proves fatal. Every matter is handled individually and pursued with full commitment.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Pickaway County personal injury cases are filed at the Pickaway County Common Pleas Court, 207 S. Court St, Circleville, OH 43113. Jwayyed Law LLC handles personal injury cases on a contingency fee basis — you pay no fees unless we win. Contact us at{' '}
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
