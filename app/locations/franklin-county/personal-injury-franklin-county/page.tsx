import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Franklin County, Ohio',
  description: 'Personal injury attorney serving Franklin County, Columbus, Dublin, Westerville, Hilliard, Gahanna, Grove City, and surrounding Ohio communities.',
  keywords: ['personal injury Franklin County', 'injury lawyer Columbus Ohio', 'Franklin County accident attorney', 'car accident lawyer Columbus Ohio', 'personal injury Dublin Ohio'],
  openGraph: {
    title: 'Personal Injury Lawyer in Franklin County, Ohio',
    url: 'https://www.jjlawohio.com/locations/franklin-county/personal-injury-franklin-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
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
              Franklin County is Ohio&apos;s most populous county and the home of Jwayyed Law LLC. Columbus and its surrounding suburbs — Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, Worthington, Bexley, and Upper Arlington — generate a high volume and wide variety of personal injury matters each year. Our attorney represents injury victims throughout Franklin County in car accidents, truck accidents, slip and fall, premises liability, pedestrian injuries, bicycle accidents, dog bites, and wrongful death cases. Ohio Revised Code 2305.10 gives personal injury claimants two years from the date of injury to file suit. This is a firm deadline — courts do not extend it. Our attorney begins working immediately upon retention, preserving evidence and documenting your damages from the outset. If someone&apos;s negligence injured you in Franklin County, contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Car and Truck Accidents in Columbus and the Columbus Suburbs
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus&apos;s highway network — I-270, I-71, I-70, I-670, US-33, and SR-315 — is among the busiest in the Midwest, with heavy commuter traffic, significant commercial trucking volume, and constant construction activity. High-speed rear-end collisions on I-270&apos;s outer belt, sideswipe accidents on I-71 interchanges, and intersection crashes throughout Columbus neighborhoods are all common injury scenarios. Suburban corridors in Dublin, Westerville, Hilliard, and Reynoldsburg generate a high volume of intersection and rear-end crashes, particularly on SR-161, US-23, and other heavily traveled suburban arterials.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Ohio comparative negligence statute, ORC 2315.33, makes fault allocation one of the most important battlegrounds in any Franklin County accident case. Insurers defending Columbus-area accident claims routinely try to attribute partial fault to injured claimants to reduce or eliminate compensation. Our attorney investigates every case rigorously — gathering police reports, traffic camera footage, electronic data from commercial vehicles, and accident reconstruction evidence — to accurately establish who was responsible and to what degree. When commercial trucks are involved, federal FMCSA regulations and hours-of-service logs provide additional avenues for establishing carrier and driver liability.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Slip and Fall and Premises Liability in Franklin County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County&apos;s large commercial base — shopping centers, restaurant strips, apartment complexes, office parks, and retail establishments throughout Columbus and its suburbs — generates a significant number of premises liability claims each year. Ohio property owners owe a duty of reasonable care to lawful visitors, and when they fail — leaving a wet floor unmarked, allowing ice and snow to accumulate on entranceways, failing to repair cracked pavement, or permitting broken fixtures to remain in service — they bear legal responsibility for resulting injuries under Ohio common law and ORC 2305.10.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Premises liability cases in Franklin County require rapid evidence collection. Surveillance footage is often overwritten within days of an incident. Prior incident reports that show the property owner was aware of the hazard can be crucial to establishing liability. Our attorney sends preservation letters immediately, requests all relevant inspection logs and maintenance records, and evaluates the property condition against the applicable standard of care. Whether the incident occurred at a Columbus grocery store, a Dublin office complex, a Hilliard apartment building, or a Westerville restaurant, early legal action preserves the evidence needed to build a strong claim.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Dog Bite Injuries in Franklin County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 955.28 establishes strict liability for dog owners in Franklin County — meaning an owner is liable for injuries caused by their dog regardless of whether the dog had previously bitten anyone or shown any dangerous propensity. The injured person does not need to prove the owner was negligent; the owner is liable simply because their dog caused the injury. ORC 955.28(B) provides for recovery of all damages caused by the dog, including medical expenses, lost wages, and pain and suffering. Franklin County&apos;s dense residential areas — particularly in Columbus neighborhoods, Westerville, Upper Arlington, and Grove City — produce a significant number of dog bite injury cases each year.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Uninsured and Underinsured Motorist Claims in the Columbus Area
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus has a significant uninsured driver population. When the at-fault driver in a Franklin County accident carries no insurance or insufficient insurance to cover your injuries, your own uninsured/underinsured motorist (UM/UIM) coverage becomes your most important source of recovery. Ohio law requires insurers to offer UM/UIM coverage, and many Columbus-area drivers carry it without realizing when or how it applies. Our attorney helps Franklin County injury clients identify and pursue UM/UIM claims against their own carriers — including filing arbitration when insurers refuse to pay full value — to ensure every available source of compensation is exhausted.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Where Personal Injury Cases Are Filed in Franklin County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Personal injury lawsuits in Franklin County are generally filed at the <strong>Franklin County Court of Common Pleas</strong>, located at 369 S. High Street, Columbus, OH 43215. Cases involving smaller damages may be filed in Franklin County Municipal Court or in one of the county&apos;s municipal courts depending on the amount at issue. As a Columbus-based firm, Jwayyed Law LLC is thoroughly familiar with Franklin County&apos;s court system, judges, local rules, and the insurance defense attorneys who handle these cases — giving our clients the advantage of local knowledge at every stage of litigation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Jwayyed Law LLC handles personal injury cases on a contingency fee basis — no fees unless we recover for you. If you were injured anywhere in Franklin County, contact us at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              Learn more about our{' '}
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
