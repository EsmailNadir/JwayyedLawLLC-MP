import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Marijuana Possession Defense Attorney | Ohio | Jwayyed Law',
  description: 'Marijuana possession charge in Ohio? Know what is legal and what is still criminal under Issue 2 and HB 86. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: [
    'marijuana possession lawyer Ohio',
    'marijuana defense attorney Columbus',
    'Ohio marijuana possession law 2025',
    'Ohio Issue 2 marijuana possession',
    'marijuana possession ORC 2925.11',
    'Franklin County marijuana lawyer',
    'Ohio adult use marijuana possession',
  ],
  openGraph: {
    title: 'Marijuana Possession Defense Attorney | Ohio | Jwayyed Law',
    url: 'https://www.jjlawohio.com/criminal-defense/marijuana-possession',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/criminal-defense/marijuana-possession' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Marijuana Possession', href: '/criminal-defense/marijuana-possession' },
];

const faqs = [
  {
    question: 'Is marijuana legal in Ohio?',
    answer: 'For adults 21 and older, Ohio Issue 2 (effective December 7, 2023) and implementing legislation House Bill 86 established a legal adult-use marijuana framework. Adults may possess up to 2.5 ounces of marijuana and up to 15 grams of marijuana concentrate without criminal liability. Home cultivation of up to 6 plants per adult is also legal. These limits are not criminal. However, marijuana possession above these amounts remains illegal, possession by persons under 21 remains fully illegal, and public consumption and operating a vehicle while impaired by marijuana remain prohibited.',
  },
  {
    question: 'What marijuana possession amounts are still criminal in Ohio?',
    answer: 'Under R.C. 2925.11(C)(3), marijuana possession above the adult-use legal limit follows this structure: possession of 2.5–10 ounces (above the legal limit but below the bulk amount) is a minor misdemeanor (no jail, $150 fine); possession of 200 grams (bulk amount) or more is a fourth-degree misdemeanor (up to 30 days jail, $250 fine); possession between bulk and 5 times bulk is a fifth-degree felony; 5–50 times bulk is F4; 50–1,000 times bulk is F3; and above 1,000 times bulk is F2. Marijuana concentrate is treated separately with its own quantity thresholds.',
  },
  {
    question: 'Does marijuana legalization in Ohio affect pending charges?',
    answer: 'Ohio Issue 2 and HB 86 apply prospectively to new conduct. They do not automatically vacate prior convictions or dismiss pending charges. However, if you have a pending charge for marijuana possession within the new legal limits (2.5 oz or less for adults 21+), the conduct is no longer criminal and the charge should be dismissed. If you have a prior conviction for possession of an amount now within the legal limit, Ohio law as of 2026 does not provide for automatic vacatur, but expungement may be available for eligible prior convictions under ORC 2953.32.',
  },
  {
    question: 'Can I be fired or lose a professional license for marijuana possession in Ohio?',
    answer: 'Ohio Issue 2 does not affect private employer drug testing policies. Employers may still test for marijuana and discipline or terminate employees who test positive, even for legal adult-use amounts. Federal contractors and employees in safety-sensitive positions (commercial drivers, federal workers) remain subject to federal marijuana prohibition regardless of state law. Ohio professional licensing boards may still consider marijuana-related criminal convictions in license investigations — only conduct within the legal limits (below 2.5 oz, adults 21+) is free from state prosecution.',
  },
  {
    question: 'Can a marijuana possession conviction in Ohio be expunged?',
    answer: 'Yes. Marijuana possession convictions — including minor misdemeanor and M4 marijuana convictions — are generally eligible for expungement under Ohio Revised Code 2953.32 after applicable waiting periods. The expanded eligibility under HB 96 (effective September 30, 2025) broadened the categories of drug offenses eligible for sealing. Prior convictions for amounts now legal under Issue 2 may be particularly strong candidates for expungement. Our firm evaluates expungement eligibility and handles the petition process.',
  },
  {
    question: 'What if I was charged with marijuana OVI in Ohio?',
    answer: 'Ohio\'s adult-use marijuana law does not legalize marijuana-impaired driving. R.C. 4511.19 prohibits operating a vehicle while under the influence of marijuana (or any controlled substance). Ohio has per se limits for marijuana metabolites and THC concentration in blood testing. A marijuana OVI charge carries the same mandatory minimum penalties as alcohol OVI under HB 37. These cases are challenging to defend because the science of marijuana impairment testing is less established than breath alcohol testing — our firm challenges the per se limits and the evidence of actual impairment in every marijuana OVI case.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a marijuana possession charge in Ohio?',
    answer: 'Jwayyed Law LLC provides experienced marijuana possession defense throughout Ohio, including Franklin County and surrounding communities. We understand Ohio\'s current adult-use framework and know how to identify when a charge should not have been filed because the possession was within legal limits. For charges that are valid, we pursue diversion and ILC options for eligible defendants and challenge the legality of the search that produced the evidence. Call (614) 285-5482 to discuss your case.',
  },
];

export default function MarijuanaPossessionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Marijuana Possession Defense Attorney in Ohio"
        description="Know what is legal and what is still criminal under Ohio's adult-use marijuana law. Jwayyed Law LLC defends marijuana possession charges across Ohio. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Marijuana Possession Defense in Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s marijuana laws changed significantly in 2023. Issue 2, effective December 7, 2023, and implementing legislation House Bill 86 established a legal adult-use framework for marijuana in Ohio — allowing adults 21 and older to possess up to 2.5 ounces and cultivate up to 6 plants at home without criminal liability. But the law did not make all marijuana possession legal, and Ohio law enforcement continues to make marijuana-related arrests. Possession above the legal limit, possession by persons under 21, and marijuana-impaired driving all remain criminal. Additionally, charges filed before the new law took effect or charges involving amounts above legal limits still require defense. Jwayyed Law LLC provides experienced marijuana possession defense throughout Ohio. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to discuss your situation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The most important first step in any marijuana possession case is confirming exactly what the defendant possessed, the quantity, and whether the conduct fell within the adult-use framework. If the possession was within legal limits — under 2.5 oz, adult 21 or older, not in a vehicle on a public road or near a school — the charge should be dismissed. Our firm identifies these situations immediately and challenges any charge that is based on conduct now protected by Ohio law.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Is Legal Under Ohio&apos;s Adult-Use Framework
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Issue 2 and House Bill 86, adults 21 and older may legally: possess up to <strong>2.5 ounces</strong> of marijuana; possess up to <strong>15 grams</strong> of marijuana concentrate; cultivate up to <strong>6 plants</strong> at home (no more than 12 plants per residence); purchase marijuana at licensed dispensaries; and gift marijuana to other adults in permissible amounts. These activities do not expose the person to criminal prosecution under Ohio law. Local municipalities may not criminalize these activities either — state law preempts local ordinance in this area.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              However, several important limitations remain. Public consumption of marijuana — smoking, vaping, or consuming in a public space — is prohibited and subject to civil penalties. Consumption in a motor vehicle is prohibited. Operating a vehicle while impaired by marijuana is illegal under R.C. 4511.19, the same OVI statute that governs alcohol. Persons under 21 are not covered by the adult-use framework and face the standard criminal possession laws. And federal law still classifies marijuana as a Schedule I controlled substance — Ohio&apos;s legalization provides no protection on federal property, for federal employees, or for those subject to federal licensing requirements.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Marijuana Possession Remains Criminal in Ohio
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 2925.11(C)(3) governs marijuana possession above the adult-use legal limits. Possession of 2.5–10 ounces is a minor misdemeanor (no jail, $150 fine). Possession of 200 grams or more (the &ldquo;bulk amount&rdquo; for marijuana) is a fourth-degree misdemeanor (up to 30 days jail, $250 fine). Aggravated possession — bulk to 5× bulk — is a fifth-degree felony. Higher quantities escalate to F4, F3, and F2. Marijuana concentrate is governed by separate quantity thresholds. Possession of any amount by a person under 21 is criminal under the juvenile marijuana offense provisions.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategies for Marijuana Possession Charges
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For marijuana possession charges in Ohio, the defense begins with determining whether the charge should have been filed at all. If the possession was within adult-use legal limits (2.5 oz or less, adult 21+), the charge is legally defective and should be dismissed. If the charge involves above-limit possession, the suppression analysis becomes critical: Was the search that produced the marijuana lawfully conducted? Ohio courts have held that the smell of marijuana, while potentially relevant, cannot by itself justify a search in the post-legalization environment — because marijuana possession in legal amounts has a &ldquo;fair probability&rdquo; of being lawful. Our firm tracks current Ohio case law on this evolving issue and argues suppression where applicable.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For defendants facing felony marijuana possession, Ohio&apos;s Intervention in Lieu of Conviction (ILC) program under ORC 2951.041 may provide a path to complete treatment and achieve a full dismissal. Franklin County Municipal Court also operates the HART Court recovery docket for substance-involved defendants. These diversion paths are far superior to any plea, and our firm evaluates eligibility at the outset of every marijuana possession case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Legality analysis:</strong> Determining whether the possession was within Ohio&apos;s adult-use legal limits and the charge should be dismissed</li>
              <li><strong>Suppression motions:</strong> Challenging whether the smell of marijuana alone justified the search under post-legalization Ohio case law</li>
              <li><strong>ILC and diversion:</strong> Pursuing treatment-based dismissal for eligible defendants</li>
              <li><strong>Quantity challenges:</strong> Contesting the lab-reported weight used to determine the degree of offense</li>
              <li><strong>Marijuana OVI defense:</strong> Challenging per se THC limits and the evidence of actual impairment in marijuana OVI cases</li>
              <li><strong>Expungement planning:</strong> Advising on ORC 2953.32 eligibility for any conviction, including prior convictions that may now be within legal limits</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing a marijuana possession charge in{' '}
              <Link href="/courts/franklin-county" className="text-[#b87333] underline hover:opacity-80">Franklin County</Link>{' '}
              or anywhere in Ohio, contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Ohio&apos;s marijuana laws are still evolving — having an attorney who understands the current framework is critical to your defense.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <LocationsWeServe title="Areas We Serve" />
      <ContactCTA />
    </>
  );
}
