import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Other Legal Services | Estate Planning, Probate, Immigration, Dispute Resolution | Jwayyed Law LLC',
  description: 'Comprehensive legal services including estate planning, probate, immigration, and dispute resolution in Columbus, Ohio. Free consultation: (614) 285-5482',
  keywords: ['estate planning Columbus OH', 'probate attorney Ohio', 'immigration lawyer Columbus', 'dispute resolution attorney'],
  openGraph: {
    title: 'Other Legal Services | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services',
  },
  alternates: { canonical: '/other-services' },
};

const breadcrumbItems = [{ label: 'Other Services', href: '/other-services' }];

export default function OtherServicesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Other Legal Services"
        description="Comprehensive legal services including estate planning, probate, immigration, and dispute resolution."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Additional Legal Services</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we provide comprehensive legal services beyond criminal defense, OVI/DUI defense, personal injury, civil litigation, and business law. Our additional services include estate planning, probate administration, immigration services, and dispute resolution.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Link href="/other-services/estate-planning" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-semibold text-gray-900 mb-3">Estate Planning</h3>
                <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Wills, trusts, powers of attorney, and guardianships to protect your legacy.</p>
                <ul className="space-y-2 text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  <li>• Estate Planning & Wills</li>
                  <li>• Trusts</li>
                  <li>• Powers of Attorney</li>
                  <li>• Guardianships</li>
                </ul>
              </Link>
              <Link href="/other-services/probate" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-semibold text-gray-900 mb-3">Probate</h3>
                <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Probate administration, will contests, and estate disputes.</p>
                <ul className="space-y-2 text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  <li>• Probate Administration</li>
                  <li>• Will Contests</li>
                  <li>• Estate Disputes</li>
                </ul>
              </Link>
              <Link href="/other-services/immigration" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-semibold text-gray-900 mb-3">Immigration</h3>
                <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Immigration services to help you navigate the legal system.</p>
                <ul className="space-y-2 text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  <li>• Immigration Services</li>
                  <li>• Green Cards</li>
                  <li>• Citizenship & Naturalization</li>
                  <li>• Deportation Defense</li>
                </ul>
              </Link>
              <Link href="/other-services/dispute-resolution" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Alternative dispute resolution through mediation and arbitration.</p>
                <ul className="space-y-2 text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  <li>• Mediation</li>
                  <li>• Arbitration</li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

