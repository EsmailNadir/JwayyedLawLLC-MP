import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for jjlawohio.com. Learn how Jwayyed Law LLC collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: false },
};

const H2 = 'jw-display text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-tight text-navy-950 mt-14 first:mt-0';

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
      <PageHero
        title="Privacy policy"
        description="How Jwayyed Law LLC collects, uses and protects the information you share through jjlawohio.com."
        showCTA={false}
      />
      <section className="bg-white text-navy-950 py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid gap-10 lg:grid-cols-12">
          <p className="lg:col-span-4 text-[length:var(--step-small)] text-navy-950/65">Last updated: October 25, 2026</p>
          <article className="lg:col-span-8 jw-prose">
            <h2 className={H2}>Who we are</h2>
            <p>
              Jwayyed Law LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates jjlawohio.com. Our office is located
              at 100 E. Campus View Blvd, Suite 250, Columbus, OH 43235. You can reach us at (614) 285-5482 or
              jwayyedlawllc@outlook.com.
            </p>

            <h2 className={H2}>Information we collect</h2>
            <p>When you contact us through our website, we may collect:</p>
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>The type of matter you select and the content of your message</li>
            </ul>
            <p>
              We also collect standard server log data (IP address, browser type, pages visited) through our hosting provider. We use
              Google Analytics (GA4) to understand how visitors use our site. GA4 collects anonymized usage data. You can opt out of
              Google Analytics by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics opt-out browser add-on
              </a>
              .
            </p>

            <h2 className={H2}>How we use your information</h2>
            <p>We use the information you provide solely to:</p>
            <ul>
              <li>Respond to your inquiry or consultation request</li>
              <li>Communicate with you about your legal matter</li>
              <li>Comply with our legal and ethical obligations as attorneys</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

            <h2 className={H2}>Attorney-client privilege notice</h2>
            <p>
              Submitting a contact form, sending an email, or leaving a voicemail does not create an attorney-client relationship. Do
              not submit confidential information through this website unless and until a formal representation agreement has been
              signed by both parties. For confidential communications, please contact us by phone.
            </p>

            <h2 className={H2}>Data retention</h2>
            <p>
              We retain contact information for as long as necessary to respond to your inquiry and as required by our professional
              obligations under the Ohio Rules of Professional Conduct.
            </p>

            <h2 className={H2}>Cookies</h2>
            <p>
              Our website uses cookies and similar technologies for analytics (Google Analytics). You can control cookie settings
              through your browser. Disabling cookies may affect some site functionality.
            </p>

            <h2 className={H2}>Third-party services</h2>
            <p>We use the following third-party services that may collect data according to their own privacy policies:</p>
            <ul>
              <li>Google Analytics (analytics.google.com): usage analytics</li>
              <li>Formspree (formspree.io): contact form processing</li>
              <li>Cloudflare Turnstile (cloudflare.com): spam protection on the contact form</li>
              <li>OpenFreeMap (openfreemap.org): map tiles for the office map on the contact page, which receives your IP address when the map loads</li>
            </ul>

            <h2 className={H2}>Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of personal information we hold about you by contacting us at
              jwayyedlawllc@outlook.com.
            </p>

            <h2 className={H2}>Changes to this policy</h2>
            <p>
              We may update this privacy policy from time to time. The &ldquo;last updated&rdquo; date on this page reflects the most
              recent revision.
            </p>

            <h2 className={H2}>Contact us</h2>
            <p>If you have questions about this privacy policy, contact us at:</p>
            <p>
              Jwayyed Law LLC
              <br />
              100 E. Campus View Blvd, Suite 250
              <br />
              Columbus, OH 43235
              <br />
              (614) 285-5482
              <br />
              jwayyedlawllc@outlook.com
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
