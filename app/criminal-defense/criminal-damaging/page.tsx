import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Criminal Damaging Lawyer in Ohio | Property Damage Defense | Jwayyed Law LLC',
  description: 'Experienced Ohio criminal damaging defense attorney protecting your rights. Skilled representation for criminal damaging and endangering charges under ORC 2909.06 (2026 Ohio law). Schedule consultation: (614) 285-5482',
  keywords: [
    'criminal damaging lawyer Ohio',
    'criminal damaging ORC 2909.06',
    'criminal endangering defense attorney',
    'property damage defense Ohio',
    'second degree misdemeanor Ohio',
    'Ohio criminal damaging lawyer',
    'criminal damaging penalties Ohio',
    'property crime defense attorney'
  ],
  openGraph: {
    title: 'Criminal Damaging Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Experienced criminal damaging defense representation throughout Ohio. Schedule consultation available.',
    url: 'https://www.jjlawohio.com/criminal-defense/criminal-damaging',
  },
  alternates: {
    canonical: '/criminal-defense/criminal-damaging',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Criminal Damaging', href: '/criminal-defense/criminal-damaging' },
];

const faqs = [
  {
    question: 'What is criminal damaging under Ohio law?',
    answer: 'Criminal damaging or endangering under Ohio Revised Code 2909.06 (current 2026) occurs when a person knowingly causes physical harm to property of another or creates a substantial risk of physical harm to property by fire, explosion, flood, or other means. It is generally a second-degree misdemeanor, punishable by up to 90 days in jail and fines up to $750. The offense can be elevated to a felony depending on the value of property damaged or the circumstances.',
  },
  {
    question: 'What are the penalties for criminal damaging in Ohio?',
    answer: 'Under current 2026 Ohio law, criminal damaging under ORC 2909.06 is typically a second-degree misdemeanor: up to 90 days in jail, fines up to $750, restitution, court costs, and a permanent criminal record. If the property damage exceeds certain thresholds or involves specific types of property (e.g., government property, safety equipment), charges may be elevated to a felony under ORC 2909.05 (vandalism) or other provisions, with significantly higher penalties.',
  },
  {
    question: 'What is the difference between criminal damaging and criminal mischief in Ohio?',
    answer: 'Criminal damaging (ORC 2909.06) involves knowingly causing physical harm to property or creating a substantial risk of physical harm (e.g., by fire, explosion, flood). It is typically a second-degree misdemeanor. Criminal mischief (ORC 2909.07) involves tampering with, defacing, or improperly handling property and is typically a third-degree misdemeanor. Criminal damaging is the more serious charge and carries greater penalties under 2026 Ohio law.',
  },
  {
    question: 'Can criminal damaging charges be expunged from my record in Ohio?',
    answer: 'Yes, misdemeanor criminal damaging convictions may be eligible for record sealing under Ohio Revised Code 2953.32 (current 2026). Eligibility depends on the waiting period, completion of sentence, and your criminal history. An experienced attorney can evaluate your eligibility and guide you through the expungement application process.',
  },
  {
    question: 'What should I do if I am charged with criminal damaging in Ohio?',
    answer: 'If charged with criminal damaging in Ohio, exercise your right to remain silent and contact an experienced criminal defense attorney immediately. Do not make statements to police without your attorney present. Preserve any evidence that may support your defense. An attorney can protect your rights, challenge evidence, negotiate with prosecutors, and work toward dismissal or reduced charges.',
  },
];

export default function CriminalDamagingPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Damaging Lawyer in Ohio"
        description="Experienced legal defense for criminal damaging and endangering charges. Protecting your rights and fighting for the best possible outcome."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Criminal Damaging Charges in Ohio
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Facing criminal damaging charges throughout Ohio can result in jail time, substantial fines, restitution, and a permanent criminal record. At Jwayyed Law LLC, we provide experienced defense representation for individuals charged with criminal damaging or endangering under Ohio Revised Code 2909.06. Our attorney understands current 2026 Ohio property crime laws, potential defenses, and the impact these charges can have on your life.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Criminal damaging or endangering involves knowingly causing physical harm to the property of another or creating a substantial risk of physical harm to property by fire, explosion, flood, or other means. Under 2026 Ohio law, this is typically charged as a second-degree misdemeanor, but circumstances can elevate the charge to a felony. A conviction can affect employment, housing, and professional licensing.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The legal process for criminal damaging charges involves arraignment, discovery, pretrial negotiations, and potentially trial. An experienced attorney can challenge evidence, negotiate with prosecutors, and work toward favorable outcomes including dismissal, reduced charges, or alternative sentencing.
            </p>

            <LocationsWeServe title="Criminal Defense" criminalDisclaimer />

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Criminal Damaging Under Ohio Law (ORC 2909.06)
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Elements of the Offense (2026 Ohio Law)</h4>
              <p className="text-gray-700 mb-4">
                Under ORC 2909.06, the state must prove that you knowingly caused physical harm to property of another, or knowingly created a substantial risk of physical harm to such property by fire, explosion, flood, or other means. &quot;Physical harm&quot; means any tangible or material damage. The offense is typically a second-degree misdemeanor under current Ohio law.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">When Charges Are Elevated to Felony</h4>
              <p className="text-gray-700 mb-4">
                If the value of property damaged exceeds certain thresholds, or if the damage involves government property, critical infrastructure, or creates risk of serious harm, prosecutors may charge vandalism under ORC 2909.05 or other felony offenses. Felony penalties under 2026 Ohio sentencing law include prison time and significantly higher fines.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Penalties and Consequences (2026 Ohio Law)
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Second-Degree Misdemeanor</h4>
              <p className="text-gray-700 mb-4">
                Standard criminal damaging under ORC 2909.06 is a second-degree misdemeanor under current Ohio law: up to 90 days in jail, fines up to $750, restitution to the property owner, court costs, probation, and a permanent criminal record. The court may order payment for repair or replacement of damaged property.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Restitution and Civil Liability</h4>
              <p className="text-gray-700 mb-4">
                Courts routinely order restitution. Property owners may also pursue civil lawsuits for damages. The combination of criminal penalties and civil liability can result in significant financial consequences.
              </p>
            </div>

            <h4 className="font-semibold text-gray-900 mt-6 mb-4">Collateral Consequences</h4>
            <p className="text-gray-700 mb-6">
              A criminal damaging conviction can limit employment opportunities, affect housing applications, and impact professional licensing. These consequences persist long after completing the sentence. Record sealing under ORC 2953.32 (2026) may be available after the applicable waiting period.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Defenses
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Lack of Intent</h4>
              <p className="text-gray-700 mb-4">
                The offense requires that you acted &quot;knowingly.&quot; If the damage was accidental or you did not know the property belonged to another, this defense may apply.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Consent or Authorization</h4>
              <p className="text-gray-700 mb-4">
                If the property owner consented to the conduct, or you reasonably believed you had authorization, this can be a complete defense.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Mistaken Identity / Insufficient Evidence</h4>
              <p className="text-gray-700 mb-4">
                The state must prove every element beyond a reasonable doubt. An attorney can challenge identification, evidence of intent, and the sufficiency of the case.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Jwayyed Law LLC
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated criminal damaging defense representation throughout Ohio. We understand current 2026 Ohio law and work diligently to investigate cases, develop defenses, and achieve favorable outcomes. We protect your rights, negotiate with prosecutors, and represent you at trial when necessary.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              If you are facing criminal damaging charges anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to your situation. Time is critical—early intervention can significantly impact the outcome.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Related Practice Areas</h4>
              <div className="flex flex-wrap gap-3">
                <Link href="/criminal-defense/criminal-mischief" className="text-accent hover:underline">Criminal Mischief</Link>
                <Link href="/criminal-defense/criminal-trespass" className="text-accent hover:underline">Criminal Trespass</Link>
                <Link href="/criminal-defense/petty-theft" className="text-accent hover:underline">Petty Theft</Link>
                <Link href="/criminal-defense/expungement-record-sealing" className="text-accent hover:underline">Expungement & Record Sealing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
