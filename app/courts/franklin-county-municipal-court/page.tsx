import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Franklin County Municipal Court Attorney | Civil & Business Representation | Jwayyed Law LLC',
  description: 'Experienced civil and business representation in Franklin County Municipal Court. Skilled representation for civil disputes, landlord-tenant matters, and evictions in Columbus, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Franklin County Municipal Court attorney', 'Columbus Municipal Court civil lawyer', 'eviction attorney Columbus', 'landlord tenant lawyer Columbus'],
  openGraph: {
    title: 'Franklin County Municipal Court Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/franklin-county-municipal-court',
  },
  alternates: { canonical: '/courts/franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Municipal Court', href: '/courts/franklin-county-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does your firm handle in Franklin County Municipal Court?',
    answer: 'Due to a conflict, our firm handles only civil, business, estate planning, and probate matters in Franklin County Municipal Court. We do not handle criminal defense, OVI/DUI, or traffic violations in Franklin County.',
  },
  {
    question: 'Where is Franklin County Municipal Court located?',
    answer: 'Franklin County Municipal Court has multiple locations including the main courthouse at 375 S. High Street, Columbus, OH 43215, and branch locations throughout Franklin County. The court handles cases from Columbus and surrounding communities. An attorney can help determine which location handles your case.',
  },
  {
    question: 'Do I need an attorney for Municipal Court civil matters?',
    answer: 'Municipal Court civil matters can significantly affect your rights and finances. While you can represent yourself, an experienced attorney can protect your rights, develop strategies, negotiate settlements, and achieve better outcomes. Civil disputes, eviction proceedings, and landlord-tenant matters all benefit from experienced legal representation.',
  },
  {
    question: 'How long do Municipal Court civil cases take?',
    answer: 'Municipal Court civil case duration varies depending on case complexity, court schedule, and whether the case goes to trial. Simple disputes may resolve quickly, while contested cases may take months. Most civil cases resolve through negotiations, but preparation and court appearances can take time. An attorney can provide a realistic timeline.',
  },
  {
    question: 'What civil matters can be filed in Municipal Court?',
    answer: 'Franklin County Municipal Court handles civil disputes up to $15,000 including contract disputes, property damage claims, landlord-tenant disputes, eviction proceedings, small claims, and other civil matters. An experienced attorney can help evaluate your case and determine the appropriate court and strategy.',
  },
];

export default function FranklinCountyMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Municipal Court Attorney"
        description="Experienced legal representation in Franklin County Municipal Court. Serving Columbus and throughout Franklin County."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Experienced legal representation in Franklin County Municipal Court. Serving Columbus and throughout Franklin County. Contact us at <a href="tel:6142855482" className="text-accent hover:underline">(614) 285-5482</a> or <Link href="/contact" className="text-accent hover:underline">schedule a consultation</Link>.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court is located at <strong>375 S. High Street, Columbus, OH 43215</strong>, with branch locations throughout the county. The court serves Columbus and surrounding communities.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed rounded-lg bg-amber-50 border border-amber-200 p-4">
              <strong>Disclaimer:</strong> Due to a conflict, Jwayyed Law LLC handles only <strong>civil</strong>, <strong>business</strong>, <strong>estate planning</strong>, and <strong>probate</strong> matters in Franklin County. We do not handle criminal defense, OVI/DUI, or traffic violations in Franklin County.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Court Services and Case Types</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court (2026) handles misdemeanor criminal cases, OVI/traffic matters, civil disputes (including amounts within the court&apos;s jurisdictional limit), landlord-tenant and eviction cases, and other matters within its jurisdiction. Our firm represents clients in this court only in civil, business, and estate planning–related matters as described below.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Civil matters:</strong> Civil disputes within the court&apos;s jurisdictional limit, including contract and property damage claims</li>
              <li><strong>Business matters:</strong> Business-related civil litigation and disputes within Municipal Court jurisdiction</li>
              <li><strong>Estate planning:</strong> We assist with estate planning; court involvement in this area may arise in related civil or probate matters within the court&apos;s scope</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated civil, business, and estate planning representation in Franklin County Municipal Court. We understand that these matters can significantly affect your rights and finances. Our attorney works diligently to navigate court procedures, develop strategies, negotiate settlements, and represent clients in court when necessary.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a civil, business, or estate planning matter in Franklin County Municipal Court, contact Jwayyed Law LLC at <a href="tel:6142855482" className="text-accent hover:underline">(614) 285-5482</a> or <Link href="/contact" className="text-accent hover:underline">schedule a consultation</Link>. We will review your case, explain court procedures, discuss your options, and develop a strategy tailored to your situation.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

