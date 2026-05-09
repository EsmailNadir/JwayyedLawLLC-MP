import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Marijuana Possession Attorney | Jwayyed Law',
  description: 'Marijuana possession charge in Columbus? Amounts above legal limits under R.C. 2925.11. Franklin County Municipal Court. Jwayyed Law LLC. (614) 285-5482.',
  keywords: ['Columbus marijuana possession lawyer', 'cannabis possession Columbus Ohio', 'weed charge Columbus attorney', 'marijuana defense Franklin County', 'Columbus drug possession marijuana'],
  openGraph: {
    title: 'Columbus Marijuana Possession Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/marijuana-possession-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/marijuana-possession-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Marijuana Possession — Columbus', href: '/locations/franklin-county/marijuana-possession-columbus' },
];

const faqs = [
  {
    question: 'How much marijuana can I legally possess in Columbus?',
    answer: 'Under Ohio\'s adult-use marijuana law (Issue 2 / H.B. 86, effective December 7, 2023), adults 21 and over may legally possess up to 2.5 ounces (approximately 71 grams) of marijuana flower and up to 15 grams of marijuana extract or concentrate in Columbus. Home cultivation of up to six plants is also permitted. Possession above these limits — or any possession by persons under 21 — remains a criminal offense under R.C. 2925.11.',
  },
  {
    question: 'What are the penalties for marijuana possession above the legal limit in Columbus?',
    answer: 'Possession of marijuana above the adult-use limit in Columbus is charged under R.C. 2925.11. Possession of more than 2.5 ounces (70.87g) up to 100 grams is a minor misdemeanor, carrying a fine up to $150 with no jail time. Possession of 100–199 grams is a fourth-degree misdemeanor (up to 30 days jail, $250 fine). Possession of 200–999 grams (at or above the bulk amount) is a fifth-degree felony. Possession of 1,000–4,999 grams is a third-degree felony. Possession of 5,000–19,999 grams is a second-degree felony. Possession of 20,000 grams or more is a first-degree felony. All felony charges are processed at Franklin County Court of Common Pleas.',
  },
  {
    question: 'Can a Columbus marijuana possession conviction be expunged?',
    answer: 'Yes. Marijuana possession convictions are eligible for expungement under R.C. 2953.32, as expanded by H.B. 96 (effective September 30, 2025). The waiting period is six months after final discharge for a minor misdemeanor and one year for a fourth-degree misdemeanor or felony. Under H.B. 96, many prior marijuana convictions that are no longer criminal offenses due to legalization may qualify for expedited relief. Our firm handles expungement petitions at Franklin County Court of Common Pleas.',
  },
  {
    question: 'Does adult-use legalization affect older marijuana convictions in Columbus?',
    answer: 'Ohio\'s H.B. 86 does not automatically expunge or vacate prior marijuana convictions. However, H.B. 96 (effective 2025) expanded expungement eligibility and created a pathway for relief on certain prior convictions for conduct that is no longer criminal. A Columbus resident with a prior marijuana possession conviction should consult with Jwayyed Law LLC about whether H.B. 96 creates an expungement opportunity — particularly for convictions involving amounts now within the legal possession limit.',
  },
  {
    question: 'What if I\'m under 21 and found with any amount of marijuana in Columbus?',
    answer: 'Persons under 21 do not have the benefit of Ohio\'s adult-use possession allowances. Any marijuana possession by a person under 21 in Columbus is a criminal offense under R.C. 2925.11, subject to the standard penalty structure. Additionally, an underage marijuana possession conviction counts in the same criminal record context as other drug offenses — affecting employment, housing, and educational opportunities. Immediate defense is important even for small amounts.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus marijuana possession charge?',
    answer: 'Even in the adult-use era, Columbus marijuana charges — for amounts above the legal limit, for persons under 21, or for conduct at issue in school zones and other restricted areas — require experienced criminal defense. Jwayyed Law LLC challenges the constitutional validity of any search that produced the marijuana, evaluates whether the weight determination was accurate, and pursues every available avenue including Intervention in Lieu of Conviction (ILC) and expungement. Call (614) 285-5482.',
  },
];

export default function ColumbusMarijuanaPossessionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus Marijuana Possession Defense Attorney"
        description="Marijuana possession charge in Columbus? Adult-use law doesn't cover all situations. Jwayyed Law LLC at Franklin County Municipal Court and Common Pleas. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Marijuana Possession Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s adult-use marijuana law changed the legal landscape for Columbus cannabis users — but it did not eliminate marijuana possession charges. Adults 21 and over may legally possess up to 2.5 ounces of marijuana and 15 grams of concentrate; possession above those limits remains a criminal offense under R.C. 2925.11, as does any possession by persons under 21. Columbus also has a significant student population at OSU and other universities where drug charges can have serious academic and professional consequences. Jwayyed Law LLC defends marijuana possession charges at Franklin County Municipal Court (for misdemeanor amounts) and Franklin County Court of Common Pleas (for felony amounts). Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to discuss your case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Ohio&apos;s Adult-Use Law Covers — and What It Does Not
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Issue 2 and H.B. 86 (effective December 7, 2023) established the framework for adult recreational marijuana use in Ohio. Under this law, adults 21 and over in Columbus may: possess up to 2.5 ounces of marijuana flower or up to 15 grams of marijuana extract; purchase marijuana from a licensed dispensary; and cultivate up to six plants at their primary residence for personal use. The plants must not be visible from a public place and must be cultivated in an enclosed, locked space.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              What the adult-use law does not cover: possession above the 2.5-ounce limit; any possession by persons under 21; use in public places, schools, or workplaces (adult-use is home-only); operating a motor vehicle under the influence of marijuana; possession on federal property (National Guard facilities, post offices, VA hospitals within Columbus); and sale or distribution without a license. A Columbus driver stopped on I-670 with four ounces of marijuana in the car has three times the legal possession amount — a potential felony.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Marijuana Possession Charges and Penalty Tiers in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The penalty for marijuana possession in Columbus under R.C. 2925.11 depends on the quantity. Possession of more than 2.5 ounces (70.87g) up to 100 grams is a minor misdemeanor — a $150 fine with no jail time. However, it is still a criminal conviction. Possession of 100–199 grams is a fourth-degree misdemeanor (M4), carrying up to 30 days in jail and a $250 fine. Possession of 200 grams to 999 grams reaches the bulk amount threshold and becomes an F5 felony (aggravated possession), carrying 6–12 months in prison and fines up to $2,500. Possession of 1,000–4,999 grams is an F3 felony, carrying 9–36 months. Possession of 5,000–19,999 grams is an F2. Possession of 20,000 grams or more is an F1 — the most serious felony designation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The weight determination is critical: all marijuana possession charges depend on the total weight of the substance. If the weight determination is inaccurate — through weighing errors, inclusion of packaging, or combining separate items — the charge degree may be reducible. Our firm scrutinizes the laboratory testing weight report in every marijuana possession case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Fourth Amendment Challenges and Search Issues
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The most powerful defense in many Columbus marijuana possession cases is a Fourth Amendment challenge to the search that produced the marijuana. Prior to adult-use legalization, the odor of marijuana alone gave Columbus police probable cause to search a vehicle. Post-legalization, the constitutional status of marijuana odor as probable cause is an evolving area of law: if marijuana is legal to possess in the amounts found, does its odor justify a search? Courts in several states have held that the odor of marijuana alone does not support probable cause post-legalization. Ohio courts are still developing this doctrine.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm challenges every Columbus marijuana case on stop validity and search authorization grounds. If the traffic stop lacked reasonable suspicion, or if the search was conducted without valid consent, probable cause, or a warrant, the marijuana evidence can be suppressed — and a suppressed search typically results in dismissal of the charge.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Intervention in Lieu of Conviction and Expungement Options
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For Columbus defendants facing marijuana possession charges — particularly first-time defendants — Intervention in Lieu of Conviction (ILC) under R.C. 2951.041 may be available. ILC is a diversion program that, upon successful completion, results in dismissal of the charge without a conviction. ILC is available for drug possession charges where the offense was driven by substance use. The defendant must complete treatment, drug testing, and any other court-ordered conditions. ILC eligibility is not automatic — the prosecutor must consent and the court must approve. Our firm evaluates ILC as the primary alternative to a conviction-entry plea in every marijuana possession case where the client qualifies.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For those who already have a marijuana conviction, H.B. 96 (effective September 30, 2025) expanded Ohio&apos;s expungement eligibility under R.C. 2953.32. Prior minor misdemeanor marijuana possession convictions may now be eligible for expungement after a six-month waiting period from final discharge. Our firm handles expungement petitions at Franklin County Court of Common Pleas and advises clients on whether their prior marijuana conviction qualifies for sealing under the current law.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Even in the adult-use era, Columbus marijuana charges require experienced defense counsel.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
