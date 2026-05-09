import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Second OVI Defense Attorney Columbus Ohio | Jwayyed Law',
  description: 'Second OVI in Columbus? Mandatory 10 days jail, vehicle immobilization, 1–7 year suspension under HB 37. Franklin County Municipal Court. (614) 285-5482.',
  keywords: ['second OVI Columbus Ohio', 'second offense DUI Columbus', 'Columbus second OVI lawyer', '2nd OVI defense Columbus', 'second OVI penalty Ohio 2025'],
  openGraph: {
    title: 'Second OVI Defense Attorney Columbus Ohio | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/second-ovi-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/second-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Second OVI — Columbus', href: '/locations/franklin-county/second-ovi-columbus' },
];

const faqs = [
  {
    question: 'What are the mandatory penalties for a second OVI in Columbus?',
    answer: 'A second low-tier OVI within 10 years in Columbus carries: mandatory minimum 10 consecutive days in jail (alternative: 5 days jail + 18 days continuous electronic alcohol monitoring); fines of $715–$1,625; license suspension of 1–7 years; 90-day vehicle immobilization; and 90-day license plate impound. High-tier second OVI (BAC 0.17%+) carries mandatory minimum 20 consecutive days (alternative: 10 days + 36 days monitoring). The 10-year look-back is counted from the prior OVI sentence date.',
  },
  {
    question: 'Does a second Columbus OVI still go to Franklin County Municipal Court?',
    answer: 'Yes. A second OVI within 10 years remains a misdemeanor and is processed at Franklin County Municipal Court, 375 S. High Street. Only a fourth or subsequent OVI within 10 years (or third within 10 years in some circumstances) escalates to a felony requiring Franklin County Court of Common Pleas. Our firm appears regularly at Franklin County Municipal Court and handles the higher complexity of second-OVI proceedings including vehicle immobilization challenges.',
  },
  {
    question: 'What is continuous electronic alcohol monitoring as an alternative to jail for a second OVI in Columbus?',
    answer: 'For a second low-tier OVI, Ohio law permits the court to impose 5 days in jail plus 18 days of continuous electronic alcohol monitoring (CEAM) as an alternative to the 10-day mandatory jail minimum. CEAM typically involves a SCRAM ankle bracelet that continuously tests for alcohol through perspiration. This house arrest alternative allows defendants to continue employment and family responsibilities during the monitoring period. Our firm evaluates whether this alternative is appropriate and whether the court is likely to grant it.',
  },
  {
    question: 'Can a 90-day vehicle immobilization for a second Columbus OVI be challenged?',
    answer: 'Yes. Under ORC 4511.195, vehicle immobilization can be challenged if immobilization would cause an undue hardship to innocent family members who depend on the vehicle for employment or medical care. Ohio courts have discretion in appropriate hardship cases to modify or waive the immobilization requirement. Our firm evaluates hardship grounds in every second-OVI vehicle immobilization case and files the appropriate motion where a credible hardship argument exists.',
  },
  {
    question: 'What is the ALS for a second Columbus OVI?',
    answer: 'The Administrative License Suspension applies to second OVI arrests just as to first offenses. You have 30 days from arrest to appeal at Franklin County Municipal Court. For a second OVI ALS, the suspension may be longer and the hard suspension period before limited privileges may be extended. Our firm treats every second-OVI ALS appeal with the same emergency urgency as a first offense — the 30-day deadline is absolute.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus second OVI?',
    answer: 'Second OVI cases in Columbus involve enhanced mandatory minimums, vehicle immobilization, and longer suspensions — making the stakes significantly higher than a first offense. Jwayyed Law LLC defends second OVI charges at Franklin County Municipal Court with the same thorough defense analysis as any other OVI case. Prior conviction challenges, constitutional stop analysis, field sobriety and breathalyzer challenges, and continuous monitoring alternatives are all part of our second-OVI defense toolkit. Call (614) 285-5482.',
  },
];

export default function ColumbusSecondOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Second OVI Defense in Columbus, Ohio"
        description="Second OVI in Columbus? 10-day mandatory minimum, vehicle immobilization, 1–7 year suspension. Jwayyed Law LLC at Franklin County Municipal Court. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Second OVI Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A second OVI within 10 years in Columbus carries substantially more serious mandatory penalties than a first offense — 10 consecutive days in jail minimum (with a 5-day + 18-day continuous monitoring alternative), fines of $715–$1,625, a 1–7 year license suspension, and mandatory 90-day vehicle immobilization. These are legal minimums that Franklin County Municipal Court cannot reduce below, regardless of circumstances. For Columbus residents facing a second OVI, the defense strategy must account for both the prior conviction and the enhanced consequences that flow from it. Jwayyed Law LLC defends second OVI charges at{' '}
              <Link href="/locations/franklin-county/ovi-dui-defense-columbus" className="text-[#b87333] underline hover:opacity-80">Franklin County Municipal Court</Link>.{' '}
              Call <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a> — the ALS appeal deadline is 30 days.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Second Columbus OVI — Mandatory Penalties Under HB 37
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A second low-tier OVI within 10 years (look-back from the prior OVI sentence date): mandatory 10 consecutive days in jail, or the alternative of 5 days jail + 18 days continuous electronic alcohol monitoring; fines of $715–$1,625; suspension of 1–7 years; 90-day vehicle immobilization; 90-day plate impound. High-tier second OVI (BAC 0.17%+): mandatory 20 days, or 10 days + 36 days monitoring; same fines and suspension. The 10-year look-back period under the HB 37 amendments counts from the sentence date of the prior OVI, not the arrest date.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Challenging the Prior OVI Conviction
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For a second OVI to carry the enhanced mandatory minimums, the prior OVI conviction must meet the statutory definition of a qualifying prior offense within the 10-year look-back period. Out-of-state OVI convictions, older OVI convictions where records are incomplete, and situations where the prior conviction was for a different offense (reckless operation rather than OVI) are all grounds to challenge whether the enhanced second-offense mandatory minimums apply. Our firm reviews the prior conviction record carefully in every second-OVI case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Vehicle Immobilization Hardship Challenges
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Revised Code 4511.195 requires 90-day vehicle immobilization for a second OVI conviction but provides a hardship exception when immobilization would cause undue hardship to innocent family members who rely on the vehicle for employment, medical care, or other essential needs. Columbus courts have granted hardship exceptions in cases where a working spouse or dependent family member would be unable to get to work or medical appointments without the vehicle. Our firm prepares hardship motions where the evidence supports the exception.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Defense Strategy — Attacking Both the Current Charge and the Prior Conviction
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A second OVI defense in Columbus operates on two fronts simultaneously. The first front is the current arrest: the constitutional validity of the traffic stop, the administration and accuracy of field sobriety tests, the calibration and maintenance of the breath test instrument (or the chain of custody for a blood draw), and any rising BAC arguments. All the same defenses available in a first OVI apply fully to a second offense — the prosecution must still prove every element of the charge beyond a reasonable doubt. Our firm does not cut the defense short because of a prior conviction.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The second front is the prior conviction. The enhanced second-offense mandatory minimums only apply if the prior OVI conviction was within the 10-year look-back and is a qualifying offense under R.C. 4511.19(G)(1)(b). If the prior was a plea to reckless operation rather than actual OVI, if the records are incomplete, or if the prior occurred in a jurisdiction whose OVI law does not qualify as a statutory equivalent under Ohio law, the current charge may be treated as a first offense — dramatically reducing the mandatory minimums. We request the complete prior conviction record in every second-OVI case before advising on strategy.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Collateral Consequences of a Second OVI Conviction in Columbus
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond the immediate criminal penalties, a second OVI conviction in Columbus has lasting effects on employment, insurance, and future legal exposure. Professional licenses in nursing, medicine, law, education, contracting, and other regulated fields require disclosure of OVI convictions, and a second conviction signals a pattern that licensing boards treat more seriously than a single offense. Auto insurance rates after a second OVI conviction typically increase significantly — many carriers will drop coverage entirely, forcing the defendant into the assigned risk pool with substantially higher premiums. For CDL holders, a second OVI means lifetime federal CDL disqualification and permanent career consequences.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The second conviction also sets the stage for the third — if a third OVI occurs within 10 years of the second, the mandatory minimum jumps to 30 consecutive days and vehicle forfeiture. Every conviction in the look-back window matters for the severity of any future offense. This long-term look-back consequence is why fighting the second charge aggressively — rather than accepting an inevitable plea — is always worth evaluating carefully.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>ALS appeal:</strong> 30-day deadline from arrest — filed immediately</li>
              <li><strong>Prior conviction challenge:</strong> Scrutinizing whether the prior OVI qualifies within the 10-year look-back</li>
              <li><strong>Constitutional stop and search analysis:</strong> Same thorough defense review as any OVI case</li>
              <li><strong>Continuous monitoring alternative:</strong> Evaluating the 5-day + 18-day CEAM option vs. 10-day straight jail</li>
              <li><strong>Vehicle immobilization hardship:</strong> Filing hardship motion where innocent family members are affected</li>
              <li><strong>Limited driving privileges:</strong> Petitioning for work/school/medical driving during the suspension</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC for a Columbus second OVI at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
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
