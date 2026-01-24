import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Juvenile Offenses Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus juvenile defense attorney protecting your child\'s rights. Skilled representation for juvenile criminal charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['juvenile lawyer Columbus OH', 'juvenile defense attorney Ohio', 'juvenile charges attorney', 'Franklin County juvenile lawyer'],
  openGraph: {
    title: 'Juvenile Offenses Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/juvenile-offenses',
  },
  alternates: { canonical: '/criminal-defense/juvenile-offenses' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Juvenile Offenses', href: '/criminal-defense/juvenile-offenses' },
];

const faqs = [
  {
    question: 'What is the difference between juvenile and adult court in Ohio?',
    answer: 'Juvenile court in Ohio handles cases involving individuals under 18 years old and focuses on rehabilitation rather than punishment. Juvenile proceedings are generally confidential, and dispositions (sentences) emphasize treatment, counseling, and community supervision rather than incarceration. However, serious offenses may result in transfer to adult court or secure detention. Juvenile records may be sealed in some cases.',
  },
  {
    question: 'What are the penalties for juvenile offenses in Ohio?',
    answer: 'Juvenile offense penalties in Ohio under Ohio Revised Code Chapter 2151 focus on rehabilitation and treatment. Dispositions may include probation, counseling, community service, placement in juvenile detention, or commitment to Department of Youth Services. Serious offenses may result in transfer to adult court, carrying adult penalties including prison time. Prior offenses and offense severity affect dispositions.',
  },
  {
    question: 'Can a juvenile be tried as an adult in Ohio?',
    answer: 'Yes, under Ohio Revised Code 2152.10, juveniles accused of serious offenses may be transferred to adult court through bindover proceedings. Factors include offense severity, prior record, age, and mental state. Juveniles tried as adults face adult penalties including prison time. An experienced juvenile defense attorney can challenge bindover proceedings and work to keep cases in juvenile court.',
  },
  {
    question: 'Can juvenile records be sealed in Ohio?',
    answer: 'Yes, under Ohio Revised Code 2151.356, juvenile records may be sealed or expunged in some cases after case resolution and required waiting periods. Sealed records are not available to the public or most employers. Eligibility depends on offense type, disposition, and prior record. An attorney can help determine eligibility and guide you through the sealing process.',
  },
  {
    question: 'What should I do if my child is charged with a juvenile offense?',
    answer: 'If your child is charged with a juvenile offense, exercise your rights immediately. Do not allow your child to discuss the case without an attorney present. Contact an experienced juvenile defense attorney right away. Juvenile proceedings move quickly and require immediate representation. An attorney can protect your child\'s rights and work toward the best possible outcome.',
  },
];

export default function JuvenileOffensesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Juvenile Offenses Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for juvenile criminal charges. Protecting your child's rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Juvenile Offenses in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Juvenile offenses in Columbus or throughout Ohio are handled in juvenile court, which focuses on rehabilitation rather than punishment. However, juvenile charges still carry serious consequences that can affect your child's future, education, and opportunities. At Jwayyed Law LLC, we provide experienced defense representation for juvenile charges under Ohio Revised Code Chapter 2151. Our attorney understands juvenile court procedures and defense strategies necessary to protect your child's rights.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Juvenile proceedings are generally confidential and focus on treatment and rehabilitation. However, serious offenses may result in transfer to adult court or secure detention. Juvenile dispositions may include probation, counseling, community service, or commitment to Department of Youth Services. Prior offenses and offense severity affect dispositions significantly.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Juvenile Court Process</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Juvenile Court Dispositions</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Probation and community supervision</li>
                <li>Counseling and treatment programs</li>
                <li>Community service</li>
                <li>Placement in juvenile detention</li>
                <li>Commitment to Department of Youth Services</li>
                <li>Transfer to adult court for serious offenses</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Juvenile Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Case Investigation:</strong> Review evidence and identify weaknesses in the prosecution's case</li>
              <li><strong>Defense Strategies:</strong> Develop defenses including lack of intent, insufficient evidence, or mistaken identity</li>
              <li><strong>Bindover Challenges:</strong> Challenge transfer to adult court proceedings to keep cases in juvenile court</li>
              <li><strong>Negotiation:</strong> Work with prosecutors to secure favorable dispositions emphasizing rehabilitation</li>
              <li><strong>Record Sealing:</strong> Help eligible juveniles seal records after case resolution</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated juvenile defense representation in Columbus, Franklin County, and throughout Ohio. We understand that juvenile charges require immediate attention and experienced defense to protect your child's future. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes emphasizing rehabilitation and treatment.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

