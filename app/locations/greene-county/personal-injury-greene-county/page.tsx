import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Greene County, Ohio | Xenia & Fairborn | Jwayyed Law LLC',
  description: 'Personal injury attorney serving Greene County, Xenia, Fairborn, Beavercreek, and surrounding Ohio communities. Car accidents, slip and fall, injury claims. Call (614) 285-5482.',
  keywords: ['personal injury Greene County', 'injury lawyer Xenia Ohio', 'Greene County accident attorney', 'car accident lawyer Fairborn Ohio', 'personal injury Beavercreek Ohio'],
  openGraph: {
    title: 'Personal Injury Lawyer in Greene County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/greene-county/personal-injury-greene-county',
  },
  alternates: { canonical: '/locations/greene-county/personal-injury-greene-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Personal Injury - Greene County', href: '/locations/greene-county/personal-injury-greene-county' },
];

const faqs = [
  {
    question: `What is the statute of limitations for personal injury claims in Ohio?`,
    answer: `Under Ohio Revised Code 2305.10, most personal injury claims in Ohio must be filed within two years of the date the cause of action accrues — typically the injury date. If you were hurt in Greene County and miss this deadline, you forfeit your right to recover, regardless of how strong your case is. Medical malpractice claims have a one-year statute with a four-year statute of repose. Contact Jwayyed Law LLC promptly after any injury so we can evaluate your claim and ensure deadlines are met.`,
  },
  {
    question: `How does Ohio's modified comparative negligence law affect my injury claim?`,
    answer: `Ohio Revised Code 2315.33 establishes a modified comparative fault system. If you are 50% or more responsible for the accident, you cannot recover anything. If you are less than 50% at fault, your damages are reduced in proportion to your fault percentage. Insurers frequently raise comparative fault arguments in Greene County accidents — particularly on US 35 and SR 675 — to reduce settlements. Our attorney aggressively disputes inflated fault attributions and builds the strongest possible case for your recovery.`,
  },
  {
    question: `What types of damages are available in a Greene County personal injury case?`,
    answer: `Ohio law allows injured victims to recover economic damages — past and future medical expenses, lost wages, loss of earning capacity, and property damage — as well as non-economic damages including pain and suffering, emotional distress, and loss of enjoyment of life. Spouses may recover for loss of consortium. In cases involving willful, reckless, or malicious conduct, courts may award punitive damages. Our attorney evaluates every category of damages and fights to ensure your settlement or verdict reflects the true cost of your injuries.`,
  },
  {
    question: `Are there unique accident risks near Wright-Patterson Air Force Base in Greene County?`,
    answer: `Yes. The area surrounding Wright-Patterson AFB in Fairborn and Beavercreek experiences heavy traffic from military personnel, contractors, and civilian workers. US 35 and SR 444 near the base see elevated accident rates. Additionally, contractors and workers on base property may face unique premises liability and third-party negligence scenarios. If you were injured in the WPAFB area or the surrounding communities, our attorney can evaluate whether civil claims are available under Ohio law or federal tort law depending on the circumstances.`,
  },
  {
    question: `What should I do after a car accident in Greene County?`,
    answer: `After an accident in Greene County: (1) seek immediate medical attention — delays in treatment can harm both your health and your legal claim; (2) document the scene with photos of damage, road conditions, and visible injuries; (3) get witness names and contact information; (4) file a police report; (5) avoid giving a recorded statement to the at-fault driver's insurance company before speaking with an attorney; and (6) contact Jwayyed Law LLC to begin protecting your rights and documenting your damages as soon as possible.`,
  },
  {
    question: `Does UM/UIM coverage protect me if the other driver has no insurance?`,
    answer: `Yes. Uninsured and underinsured motorist (UM/UIM) coverage, governed by Ohio law including ORC 3345.21, compensates you from your own policy when the at-fault driver carries no insurance or insufficient insurance to cover your injuries and losses. Many Ohio drivers are uninsured. If you are hit by an uninsured driver in Xenia, Fairborn, Beavercreek, or elsewhere in Greene County, a UM/UIM claim through your own insurer may be your primary path to recovery. We help clients navigate and maximize these claims.`,
  },
  {
    question: `How do contingency fees work for personal injury cases?`,
    answer: `Jwayyed Law LLC handles personal injury cases on a contingency fee basis. You pay no attorney fees unless and until we obtain a recovery for you through settlement or trial. The fee is a percentage of the gross recovery and is deducted when the case concludes. This structure allows injured clients in Greene County to hire skilled legal representation with no upfront cost, ensuring access to justice regardless of your financial situation at the time of injury.`,
  },
  {
    question: `Where are personal injury lawsuits filed in Greene County?`,
    answer: `Personal injury cases in Greene County are filed at the Greene County Common Pleas Court, 45 N. Detroit St, Xenia, OH 45385. Smaller claims may be filed in one of the county's municipal courts. Our attorney is familiar with Greene County's courts and legal community, and will file your case in the appropriate venue and aggressively pursue your claim from start to finish.`,
  },
];

export default function PersonalInjuryGreeneCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Greene County, Ohio"
        description="Serving Xenia, Fairborn, Beavercreek, Centerville, Yellow Springs, and surrounding communities."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Personal Injury Representation in Greene County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County, Ohio is home to Xenia (the county seat), Fairborn, Beavercreek, Yellow Springs, and Centerville — a diverse mix of communities near Wright-Patterson Air Force Base and the greater Dayton metropolitan area. Jwayyed Law LLC represents personal injury victims throughout Greene County in car accidents, slip and fall cases, premises liability matters, and other negligence claims. If you were injured due to another party&apos;s fault in Greene County, our attorney is prepared to pursue the full compensation you are entitled to under Ohio law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2305.10 gives most injury victims two years from the date of injury to file a personal injury lawsuit. This window is firm and unforgiving — missing it typically bars your claim entirely. Our attorney begins working immediately to preserve evidence, secure witness statements, and document the full extent of your damages. Early action protects your claim and positions you for the strongest possible negotiating stance with insurance companies.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              US 35 and SR 675 are major accident corridors in Greene County, carrying heavy traffic between Xenia, Fairborn, and Beavercreek. Accidents on these routes can be severe and often involve questions of shared fault. Ohio&apos;s modified comparative negligence rule under ORC 2315.33 allows recovery as long as you are less than 50% at fault — with damages reduced proportionally by your percentage of fault. Our attorney builds a thorough evidentiary record to minimize any fault attributed to you and maximize your recovery.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              In addition to highway and road accidents, Greene County presents slip and fall and premises liability risks at retail establishments, restaurants, parking lots, and public spaces throughout Beavercreek and the Fairborn commercial corridor. We also handle dog bite injuries under ORC 955.28, workplace injuries involving third-party negligence, wrongful death claims, and motorcycle and bicycle accidents. Each case is approached with detailed factual investigation and an understanding of Ohio&apos;s injury statutes.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Personal injury cases in Greene County are filed at the Greene County Common Pleas Court, 45 N. Detroit St, Xenia, OH 45385. Jwayyed Law LLC works on a contingency fee basis — you pay no fees unless we recover for you. Contact us at{' '}
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
