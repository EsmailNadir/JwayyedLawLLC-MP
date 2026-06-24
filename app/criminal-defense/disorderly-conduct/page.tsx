import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Disorderly Conduct Defense Ohio | Jwayyed Law LLC',
  description: 'Charged with disorderly conduct in Ohio? Jwayyed Law LLC defends R.C. 2917.11 charges across Franklin County and central Ohio. Call (614) 285-5482.',
  keywords: [
    'disorderly conduct lawyer Ohio',
    'disorderly conduct defense attorney Columbus',
    'disorderly conduct ORC 2917.11',
    'Franklin County disorderly conduct lawyer',
    'public intoxication Ohio attorney',
    'disorderly conduct minor misdemeanor Ohio',
    'disorderly conduct M4 Ohio',
  ],
  openGraph: {
    title: 'Disorderly Conduct Defense Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/disorderly-conduct',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/criminal-defense/disorderly-conduct' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Disorderly Conduct', href: '/criminal-defense/disorderly-conduct' },
];

const faqs = [
  {
    question: 'What is disorderly conduct under Ohio law?',
    answer: 'Ohio Revised Code 2917.11 prohibits conduct that recklessly causes inconvenience, annoyance, or alarm to another person. Common violations include fighting or threatening harm, making unreasonable noise, using offensively coarse language in circumstances likely to provoke violence, and creating a physically offensive condition with no legitimate purpose. Division (B) separately prohibits engaging in offensive conduct or creating a risk of physical harm while voluntarily intoxicated in a public place. The base offense is a minor misdemeanor (no jail, up to $150 fine), escalating to an M4 in certain circumstances.',
  },
  {
    question: 'When does disorderly conduct escalate to a fourth-degree misdemeanor in Ohio?',
    answer: 'Disorderly conduct escalates from a minor misdemeanor to a fourth-degree misdemeanor (up to 30 days jail, $250 fine) in four circumstances under R.C. 2917.11: (1) the offender persists after a reasonable warning by law enforcement to stop; (2) the offense occurs in the vicinity of a school or school safety zone; (3) the offense occurs in the presence of emergency personnel responding to an emergency; or (4) the offender has three or more prior convictions under the public intoxication subsection (R.C. 2917.11(B)). The escalation is a separate legal determination that our firm challenges on a case-by-case basis.',
  },
  {
    question: 'Does a disorderly conduct conviction go on my record?',
    answer: 'Yes. Both minor misdemeanor and M4 disorderly conduct convictions create a permanent public criminal record under Ohio law — accessible through background checks used by employers, landlords, and professional licensing boards. Even a $150 minor misdemeanor conviction is worth contesting if there is a viable path to dismissal, diversion, or avoidance. Many first-time disorderly conduct cases in Ohio resolve without a conviction through first-offender diversion programs.',
  },
  {
    question: 'Can disorderly conduct be expunged in Ohio?',
    answer: 'Most disorderly conduct convictions are eligible for expungement under Ohio Revised Code 2953.32 after applicable waiting periods — 1 year from final discharge for minor misdemeanor and M4 convictions. Once sealed, the record is removed from public background check databases. However, expungement is a future option after conviction, not an alternative to fighting the charge. Our firm pursues dismissal or diversion first, and evaluates expungement as a fallback for any conviction that results.',
  },
  {
    question: 'What defenses apply to disorderly conduct charges in Ohio?',
    answer: 'Key defenses to Ohio disorderly conduct charges include: challenging whether the conduct was actually "reckless" versus merely careless or impulsive; contesting whether the conduct caused actual inconvenience, annoyance, or alarm to a specific person (rather than abstract offense); First Amendment challenges to charges based on speech or expressive conduct; challenging the sufficiency of any "warning" relied on for the M4 escalation; and evaluating whether the defendant\'s conduct falls within an exception or de minimis standard. Our firm reviews all evidence — body-cam footage, police reports, witness statements — before advising on any defense.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a disorderly conduct charge in Ohio?',
    answer: 'Jwayyed Law LLC defends disorderly conduct charges throughout Ohio, including Franklin County, Columbus, and surrounding communities. While disorderly conduct appears minor, a conviction creates a permanent criminal record. Many first-time cases can be dismissed or diverted — outcomes an experienced attorney is better positioned to achieve than a self-represented defendant. Our firm appears in mayor\'s courts, Franklin County Municipal Court, and municipal courts throughout central Ohio. Call (614) 285-5482 to discuss your case.',
  },
];

export default function DisorderlyConductPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Disorderly Conduct Defense Attorney in Ohio"
        description="Charged with disorderly conduct under R.C. 2917.11? Jwayyed Law LLC defends minor misdemeanor and M4 disorderly conduct charges across Franklin County and central Ohio. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Disorderly Conduct Defense in Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Disorderly conduct under Ohio Revised Code 2917.11 is one of the most broadly written misdemeanor statutes in Ohio&apos;s criminal code — covering everything from a shouting argument in a parking lot to aggressive behavior at a community event to public intoxication that creates a risk of harm. At its base, disorderly conduct is a minor misdemeanor: no jail, maximum $150 fine. But even a minor misdemeanor conviction creates a permanent public criminal record accessible through the background check systems used by employers, landlords, and professional licensing boards. And when the offense escalates to a fourth-degree misdemeanor — up to 30 days in jail and a $250 fine — the consequences become more serious. Jwayyed Law LLC defends disorderly conduct charges throughout Ohio, including Franklin County and surrounding communities. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to discuss your case.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Ohio&apos;s Disorderly Conduct Statute Prohibits
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              R.C. 2917.11(A) prohibits recklessly causing inconvenience, annoyance, or alarm to another by: fighting, threatening harm, or engaging in violent or turbulent behavior; making unreasonable noise; using offensively coarse language or gestures in circumstances likely to provoke a violent response; creating a physically offensive condition with no legitimate purpose; or engaging in other behavior that creates a risk of physical harm. Division (B) separately prohibits being voluntarily intoxicated in a public place and engaging in offensive conduct or creating a risk of physical harm while in that condition — a separate criminal act from merely being intoxicated.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statute&apos;s key limitation is the word &ldquo;reckless.&rdquo; Ohio law defines reckless conduct as conscious disregard of a substantial and unjustifiable risk — more culpable than negligence, but less culpable than knowing or purposeful conduct. Acts that are merely ill-advised, impulsive, or disruptive without the defendant consciously disregarding a risk of inconvenience or alarm do not satisfy the recklessness standard. Our firm evaluates whether the prosecution can establish recklessness — not just that the conduct occurred, but that the defendant consciously disregarded a substantial risk.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              M4 Escalation — When the Charge Becomes More Serious
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              R.C. 2917.11(C) escalates disorderly conduct from a minor misdemeanor to a fourth-degree misdemeanor (up to 30 days jail, $250 fine) in four situations. The most common is persistence after a law enforcement warning: if an officer warns a person to stop the disorderly conduct and the person continues, the minor misdemeanor becomes an M4. Whether that warning was clearly communicated, actually heard by the defendant, and whether the conduct continued after the warning are all factual questions that can defeat the escalation charge. School proximity and emergency scene presence escalations are similarly fact-specific.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Diversion and First-Offender Options
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Many first-time disorderly conduct charges in Ohio resolve without a conviction through diversion programs. Typical diversion conditions include brief community service, no new arrests during a probationary period, and payment of court costs. Successful completion results in dismissal. An experienced attorney is far more likely to identify and negotiate diversion availability than a self-represented defendant, and dismissal is always the preferred outcome over any plea — even a plea to a minor misdemeanor.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Diversion and dismissal:</strong> Pursuing conditional dismissal for first-time defendants</li>
              <li><strong>M4 escalation challenge:</strong> Contesting the &ldquo;persists after warning&rdquo; and other escalation elements</li>
              <li><strong>Recklessness analysis:</strong> Evaluating whether the prosecution can prove the mental state the statute requires</li>
              <li><strong>First Amendment challenges:</strong> Identifying speech and expression protections where applicable</li>
              <li><strong>Companion charge defense:</strong> Coordinating disorderly conduct defense alongside assault, OVI, or other related charges</li>
              <li><strong>Expungement planning:</strong> Advising on record-sealing eligibility under R.C. 2953.32</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing disorderly conduct charges in{' '}
              <Link href="/locations/franklin-county" className="text-[#b87333] underline hover:opacity-80">Franklin County</Link>,{' '}
              <Link href="/locations/delaware-county" className="text-[#b87333] underline hover:opacity-80">Delaware County</Link>, or anywhere in Ohio, contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              Even a minor misdemeanor conviction creates a permanent record — talk to an attorney before entering any plea.
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
