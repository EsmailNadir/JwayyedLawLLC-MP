import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Limited Driving Privileges Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus limited driving privileges attorney helping you get back on the road. Skilled representation for limited driving privileges after OVI suspension in Ohio. Free consultation: (614) 285-5482',
  keywords: ['limited driving privileges lawyer Columbus OH', 'driving privileges attorney Ohio', 'work privileges attorney', 'Franklin County limited privileges lawyer'],
  openGraph: {
    title: 'Limited Driving Privileges Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/limited-driving-privileges',
  },
  alternates: { canonical: '/ovi-dui-defense/limited-driving-privileges' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Limited Driving Privileges', href: '/ovi-dui-defense/limited-driving-privileges' },
];

const faqs = [
  {
    question: 'What are limited driving privileges in Ohio?',
    answer: 'Limited driving privileges under Ohio Revised Code 4511.191 allow individuals with suspended licenses to drive for specific purposes including work, school, treatment, medical appointments, and necessary activities. Limited privileges typically require ignition interlock devices and restrict driving to specific times, locations, and purposes. Eligibility depends on offense type, prior record, and court approval.',
  },
  {
    question: 'Who is eligible for limited driving privileges in Ohio?',
    answer: 'Eligibility for limited driving privileges in Ohio depends on several factors including offense type, prior convictions, completion of requirements, and court approval. First OVI offenders are generally more likely to receive limited privileges than repeat offenders. Some offenses or prior convictions may disqualify you from limited privileges. An attorney can help determine eligibility and apply for privileges.',
  },
  {
    question: 'How do I apply for limited driving privileges in Ohio?',
    answer: 'To apply for limited driving privileges in Ohio, file a motion with the court that suspended your license or the court handling your OVI case. The motion must specify the purposes for which you need to drive (work, school, treatment, etc.). Limited privileges typically require ignition interlock devices, proof of insurance, and payment of fees. An attorney can help prepare and file the motion.',
  },
  {
    question: 'What restrictions apply to limited driving privileges?',
    answer: 'Limited driving privileges restrictions in Ohio typically include: Driving only for specified purposes (work, school, treatment, medical appointments, necessary activities), installation of ignition interlock device, restrictions on times and locations, compliance with all conditions, and immediate revocation for any violations. Violations can result in additional penalties and loss of privileges.',
  },
  {
    question: 'Can limited driving privileges be revoked?',
    answer: 'Yes, limited driving privileges can be revoked for violations including driving outside authorized purposes, times, or locations, failing to maintain ignition interlock device, OVI convictions, or other violations. Revocation can result in additional penalties and loss of ability to obtain privileges in the future. An attorney can help understand restrictions and avoid violations.',
  },
];

export default function LimitedDrivingPrivilegesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Limited Driving Privileges Lawyer in Columbus, OH"
        description="Experienced legal assistance with limited driving privileges after OVI suspension. Helping you get back on the road legally."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Limited Driving Privileges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Limited driving privileges in Columbus or throughout Ohio allow individuals with suspended licenses to drive for specific purposes including work, school, treatment, and necessary activities. At Jwayyed Law LLC, we provide experienced assistance with limited driving privileges under Ohio Revised Code 4511.191. Our attorney understands the requirements and process necessary to obtain limited privileges and help you get back on the road legally.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Limited Driving Privileges Requirements</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Eligibility based on offense type and prior record</li>
                <li>Completion of required waiting periods</li>
                <li>Proof of insurance and payment of fees</li>
                <li>Installation of ignition interlock device</li>
                <li>Court approval and compliance with all conditions</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an Attorney Can Help with Limited Privileges</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Eligibility Evaluation:</strong> Determine your eligibility for limited privileges</li>
              <li><strong>Motion Preparation:</strong> Prepare and file motion for limited privileges</li>
              <li><strong>Court Representation:</strong> Represent you at hearings and address objections</li>
              <li><strong>Compliance Assistance:</strong> Help understand and comply with privilege conditions</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated assistance with limited driving privileges in Columbus, Franklin County, and throughout Ohio. We understand that driving is essential for work and daily life. Our attorney works diligently to help eligible clients obtain limited privileges, navigate the process, and get back on the road legally while complying with all conditions.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

