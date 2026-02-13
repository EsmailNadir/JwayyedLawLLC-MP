import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Arbitration Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio arbitration attorney helping you resolve conflicts. Skilled representation for arbitration services in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['arbitration lawyer Columbus OH', 'arbitration attorney Ohio', 'arbitration services', 'Franklin County arbitration attorney'],
  openGraph: {
    title: 'Arbitration Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/arbitration',
  },
  alternates: { canonical: '/other-services/arbitration' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Dispute Resolution', href: '/other-services/dispute-resolution' },
  { label: 'Arbitration', href: '/other-services/arbitration' },
];

export default function ArbitrationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Arbitration Lawyer"
        description="Experienced legal assistance with arbitration. Helping you resolve conflicts through private dispute resolution with binding decisions."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Arbitration in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Arbitration in Columbus, Cincinnati, Dayton, or throughout Ohio is a form of alternative dispute resolution where a neutral arbitrator makes a binding decision to resolve conflicts. At Jwayyed Law LLC, we provide experienced arbitration representation under Ohio Revised Code Chapter 2711 (current as of 2026). Our attorney can represent parties in arbitration proceedings including business disputes, employment matters, consumer disputes, and other conflicts where arbitration is required or chosen over litigation.
            </p>

            <LocationsWeServe title="Other Services" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated arbitration representation throughout Ohio. We understand that arbitration can resolve disputes more efficiently than litigation while providing binding decisions. Our attorney works diligently to represent your interests effectively in arbitration proceedings.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

