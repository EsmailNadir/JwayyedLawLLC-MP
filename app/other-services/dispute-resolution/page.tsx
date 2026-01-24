import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dispute Resolution Lawyer in Columbus, OH | Mediation & Arbitration | Jwayyed Law LLC',
  description: 'Experienced Columbus dispute resolution attorney helping you resolve conflicts. Skilled representation for mediation and arbitration in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['dispute resolution lawyer Columbus OH', 'mediation attorney Ohio', 'arbitration lawyer', 'Franklin County dispute resolution attorney'],
  openGraph: {
    title: 'Dispute Resolution Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/dispute-resolution',
  },
  alternates: { canonical: '/other-services/dispute-resolution' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Dispute Resolution', href: '/other-services/dispute-resolution' },
];

export default function DisputeResolutionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Dispute Resolution Lawyer in Columbus, OH"
        description="Experienced legal assistance with dispute resolution. Helping you resolve conflicts through mediation and arbitration."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Dispute Resolution in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dispute resolution in Columbus or throughout Ohio offers alternative methods to resolve conflicts without litigation, including mediation and arbitration. At Jwayyed Law LLC, we provide experienced assistance with dispute resolution under Ohio Revised Code. Our attorney understands alternative dispute resolution and can help you resolve conflicts efficiently.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Dispute Resolution Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/other-services/dispute-resolution/mediation" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Mediation</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Facilitated negotiation to resolve disputes</p>
              </Link>
              <Link href="/other-services/dispute-resolution/arbitration" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Arbitration</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Private dispute resolution with binding decisions</p>
              </Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated dispute resolution assistance in Columbus, Franklin County, and throughout Ohio. We understand that disputes can be resolved more efficiently through alternative dispute resolution. Our attorney works diligently to facilitate mediation, represent parties in arbitration, and help you resolve conflicts without litigation.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

