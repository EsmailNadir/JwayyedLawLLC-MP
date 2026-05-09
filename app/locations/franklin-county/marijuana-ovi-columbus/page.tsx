import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus Marijuana OVI Defense Attorney | Jwayyed Law',
  description: 'Marijuana OVI in Columbus? Per se limits under R.C. 4511.19, no impairment required. Franklin County Municipal Court. Jwayyed Law LLC. (614) 285-5482.',
  keywords: ['Columbus marijuana OVI lawyer', 'cannabis DUI Columbus Ohio', 'marijuana drug OVI Columbus', 'weed OVI Columbus attorney', 'Franklin County marijuana impaired driving defense'],
  openGraph: {
    title: 'Columbus Marijuana OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/marijuana-ovi-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/marijuana-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Marijuana OVI — Columbus', href: '/locations/franklin-county/marijuana-ovi-columbus' },
];

const faqs = [
  {
    question: 'What are the per se marijuana limits for OVI in Columbus?',
    answer: 'Under R.C. 4511.19(A)(1)(j), Ohio\'s per se marijuana OVI limits are: 2 nanograms per milliliter (ng/mL) of marijuana (THC) in whole blood, or 10 ng/mL in urine. Ohio also sets per se limits for marijuana metabolites: 15 ng/mL of marijuana metabolite in blood and 35 ng/mL in urine — but the Ohio Supreme Court has ruled that mere presence of a metabolite without parent THC does not establish per se impairment, a critical distinction in defending metabolite-only charges.',
  },
  {
    question: 'Is marijuana OVI a separate charge from alcohol OVI in Columbus?',
    answer: 'Marijuana OVI is charged under the same R.C. 4511.19 statute as alcohol OVI — it is not a separate charge. A Columbus driver can be charged with OVI based on marijuana impairment under R.C. 4511.19(A)(1)(a) (the general impairment provision) or under the per se concentration provisions of R.C. 4511.19(A)(1)(j) if a blood or urine test shows THC or metabolite above the threshold. Both carry the same criminal penalties as a standard first-offense alcohol OVI.',
  },
  {
    question: 'Can I be charged with marijuana OVI even if I wasn\'t impaired at the time of driving?',
    answer: 'Yes. Ohio\'s per se marijuana OVI provisions do not require proof of actual impairment — only that the per se threshold concentration was present in blood or urine at the time of testing. THC can remain detectable in blood for hours and in urine for days to weeks after use, long after any psychoactive effect has worn off. This creates a significant risk for regular cannabis users who may test above the per se limit while not actually impaired when driving. Challenging the timing and accuracy of the test is central to per se marijuana OVI defense.',
  },
  {
    question: 'How is marijuana OVI detected in Columbus?',
    answer: 'Unlike alcohol OVI, there is no roadside breathalyzer for marijuana. Columbus Division of Police uses Drug Recognition Experts (DREs) — officers trained in a 12-step protocol to identify drug-impaired drivers. If a DRE evaluation suggests marijuana impairment, a blood or urine test is typically requested. Blood testing is more reliable for detecting current THC impairment; urine testing can show metabolites from use days or weeks prior. The DRE evaluation protocol itself can be challenged — each of the 12 steps has certification requirements.',
  },
  {
    question: 'Does Ohio\'s adult-use marijuana law protect me from marijuana OVI in Columbus?',
    answer: 'No. Ohio\'s adult-use marijuana law (Issue 2, effective December 7, 2023, implemented through H.B. 86) permits adults 21 and over to possess and use marijuana — but it does not change the OVI laws. It remains illegal to operate a vehicle under the influence of marijuana or with THC above the per se limit, just as it remains illegal to drive with alcohol above the limit. Legal recreational use does not create a defense to marijuana OVI.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus marijuana OVI?',
    answer: 'Marijuana OVI defense requires specialized knowledge of per se concentration science, DRE evaluation protocols, and the retrograde elimination issues unique to cannabis. The per se limits are highly controversial — the 2 ng/mL blood threshold may be present in habitual users even when not impaired. Jwayyed Law LLC challenges DRE evaluation compliance, blood test chain of custody, and the timing disconnect between test results and actual driving. Call (614) 285-5482 — the 30-day ALS appeal deadline applies.',
  },
];

export default function ColumbusMarijuanaOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus Marijuana OVI Defense Attorney"
        description="Marijuana OVI charge in Columbus? Per se limits don't require impairment at time of driving. Jwayyed Law LLC challenges DRE evaluations and blood tests. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Marijuana OVI Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s adult-use marijuana law (Issue 2, effective December 2023) made recreational cannabis legal for adults 21 and over in Columbus — but it did nothing to change Ohio&apos;s marijuana OVI laws. It remains a criminal offense to operate a vehicle in Columbus with THC above the per se limit in blood or urine, regardless of whether the cannabis was consumed legally. What makes marijuana OVI charges uniquely dangerous is Ohio&apos;s per se limit structure: a 2 nanogram per milliliter (ng/mL) threshold in whole blood that can be exceeded for hours after use, and urine metabolite thresholds that can be positive for days or weeks after the last use. A Columbus driver who used cannabis legally the day before — and was not impaired at the time of driving — can still be charged with marijuana OVI under the per se statute. Jwayyed Law LLC defends marijuana OVI charges at Franklin County Municipal Court. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              — the 30-day ALS appeal deadline applies.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio&apos;s Marijuana OVI Per Se Limits — R.C. 4511.19(A)(1)(j)
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under R.C. 4511.19(A)(1)(j), Ohio sets per se OVI limits for marijuana and marijuana metabolites. For whole blood: 2 ng/mL of marijuana (THC) and 15 ng/mL of marijuana metabolite. For urine: 10 ng/mL of marijuana and 35 ng/mL of marijuana metabolite. These per se limits operate identically to the alcohol BAC limit — a test result above the threshold supports an OVI charge without requiring additional proof of impairment.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The 2 ng/mL blood threshold for THC is scientifically controversial. Research on THC and driving impairment does not establish a clear dose-response relationship between blood THC concentration and driving impairment in the way that alcohol BAC does. Habitual cannabis users can have blood THC above 2 ng/mL even when not currently impaired — THC is lipophilic and accumulates in fatty tissue, releasing back into blood over time. The Ohio Supreme Court in <em>State v. Ilg</em> addressed the metabolite-only question, drawing a distinction between parent THC (which establishes recent use) and metabolites alone (which establish only past use). However, these defenses require careful scientific analysis of the specific test results in your case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Drug Recognition Expert (DRE) Evaluations in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Because there is no roadside breathalyzer for marijuana, Columbus Division of Police and Franklin County law enforcement rely on Drug Recognition Experts (DREs) when they suspect drug-impaired driving. DRE is a 12-step standardized evaluation protocol developed by the National Highway Traffic Safety Administration and the International Association of Chiefs of Police. A DRE officer examines the suspect&apos;s eyes, vital signs, muscle tone, and behavioral indicators and forms an opinion on what category of drugs is causing impairment.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              DRE evaluations are challengeable on multiple grounds. The DRE must be certified and must follow the 12-step protocol in sequence — deviations can undermine the opinion. The validity of DRE as a scientific method for detecting marijuana impairment specifically is disputed; courts have not uniformly accepted DRE testimony as established science. We obtain the DRE officer&apos;s certification records, the written DRE evaluation report, and any video of the evaluation, and analyze whether the protocol was followed and whether the officer&apos;s conclusions are supported by the observations recorded.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Blood and Urine Test Challenges in Columbus Marijuana OVI Cases
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              In a Columbus marijuana OVI, the chemical test is typically a blood draw performed at a hospital after arrest or at a law enforcement facility. Blood testing is more scientifically defensible for detecting current impairment than urine, which can show only metabolites. However, both blood and urine tests are challengeable on procedural and scientific grounds.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For blood tests, our firm examines the chain of custody from draw to analysis, the laboratory&apos;s certification status and accreditation, the specific testing methodology (gas chromatography-mass spectrometry is the gold standard), and the timing between the traffic stop and the blood draw. A significant delay between the stop and the blood draw is relevant to whether the THC concentration at the time of testing reflects the THC concentration at the time of driving. For urine tests, we challenge whether a metabolite-only result — showing only breakdown products of THC, not active THC — actually establishes impairment, consistent with the Ohio Supreme Court&apos;s metabolite jurisprudence.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Marijuana OVI and the Adult-Use Framework in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s adult-use marijuana law (Issue 2 / H.B. 86) permits Columbus adults 21 and over to possess up to 2.5 ounces of marijuana, 15 grams of concentrate, and cultivate up to six plants. Legal dispensaries now operate throughout Franklin County. This legal framework creates real-world complexity for drivers: a Columbus adult who uses cannabis legally at home in the evening may still have measurable blood THC the following morning — potentially above the 2 ng/mL per se limit — even though they are not actively impaired. The legal status of the cannabis consumed provides no defense to the OVI charge, but it is relevant to the defense narrative and to arguments about the disconnect between per se test results and actual impaired driving.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus drivers stopped near dispensary corridors — including areas along the I-270 outerbelt, High Street, and the Short North — may be subject to heightened law enforcement attention for marijuana impairment. Our firm is familiar with the Columbus Division of Police&apos;s OVI enforcement patterns and understands the specific factual issues that arise in marijuana OVI cases in this city.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Marijuana OVI Penalties and ALS in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A marijuana OVI conviction in Columbus carries the same criminal penalties as an alcohol OVI: mandatory minimum 3 days in jail or 3 days in a Driver Intervention Program for a first offense; fines of $565–$1,075; and a license suspension of 1–3 years under HB 37. The ALS is also imposed at arrest — 90 days for consent (test taken, per se limit exceeded) or 1 year for refusal. The ALS appeal must be filed in Franklin County Municipal Court within 30 days of the arrest date. Our firm files the ALS appeal immediately upon being retained, requests a stay of suspension, and challenges the per se test result as part of the overall defense.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Unlike alcohol OVI, a marijuana OVI conviction is not eligible for expungement under Ohio law. The R.C. 4511.19 ineligibility applies regardless of whether the underlying impairment was from marijuana, alcohol, or other substances. This makes fighting a marijuana OVI charge — rather than accepting a plea — especially important: the conviction will remain on the defendant&apos;s record permanently if not dismissed or reduced to an eligible offense.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              The 30-day ALS appeal deadline applies to marijuana OVI arrests — act immediately.
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
