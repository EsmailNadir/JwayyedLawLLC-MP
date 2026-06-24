import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jwayyed Law LLC',
  description: 'Privacy policy for jjlawohio.com. Learn how Jwayyed Law LLC collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-8">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 4, 2026</p>

      <div className="prose prose-gray max-w-none font-['DM_Sans',_'Helvetica_Neue',_sans-serif] space-y-6 text-gray-700">

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">Who We Are</h2>
          <p>Jwayyed Law LLC ("we," "us," or "our") operates jjlawohio.com. Our office is located at 100 E. Campus View Blvd, Suite 250, Columbus, OH 43235. You can reach us at (614) 285-5482 or jwayyedlawllc@outlook.com.</p>
        </section>

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
          <p>When you contact us through our website, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>The content of your message</li>
          </ul>
          <p className="mt-3">We also collect standard server log data (IP address, browser type, pages visited) through our hosting provider. We use Google Analytics (GA4) to understand how visitors use our site. GA4 collects anonymized usage data. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#b87333] hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.</p>
        </section>

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
          <p>We use the information you provide solely to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your inquiry or consultation request</li>
            <li>Communicate with you about your legal matter</li>
            <li>Comply with our legal and ethical obligations as attorneys</li>
          </ul>
          <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">Attorney-Client Privilege Notice</h2>
          <p>Submitting a contact form, sending an email, or leaving a voicemail does not create an attorney-client relationship. Do not submit confidential information through this website unless and until a formal representation agreement has been signed by both parties. For confidential communications, please contact us by phone.</p>
        </section>

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">Data Retention</h2>
          <p>We retain contact information for as long as necessary to respond to your inquiry and as required by our professional obligations under the Ohio Rules of Professional Conduct.</p>
        </section>

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">Cookies</h2>
          <p>Our website uses cookies and similar technologies for analytics (Google Analytics) and live chat (Tidio). You can control cookie settings through your browser. Disabling cookies may affect some site functionality.</p>
        </section>

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
          <p>We use the following third-party services that may collect data according to their own privacy policies:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google Analytics (analytics.google.com) — usage analytics</li>
            <li>Tidio (tidio.com) — live chat</li>
            <li>Calendly (calendly.com) — appointment scheduling</li>
            <li>Formspree (formspree.io) — contact form processing</li>
          </ul>
        </section>

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of personal information we hold about you by contacting us at jwayyedlawllc@outlook.com.</p>
        </section>

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. The "last updated" date at the top of this page reflects the most recent revision.</p>
        </section>

        <section>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
          <p>If you have questions about this privacy policy, contact us at:</p>
          <p className="mt-2">
            Jwayyed Law LLC<br />
            100 E. Campus View Blvd, Suite 250<br />
            Columbus, OH 43235<br />
            (614) 285-5482<br />
            jwayyedlawllc@outlook.com
          </p>
        </section>

      </div>
    </main>
  );
}
