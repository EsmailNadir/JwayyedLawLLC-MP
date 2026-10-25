import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import OVIReviews from '@/components/OVIReviews';
import NCDDBadge from '@/components/NCDDBadge';
import { PointGrid, Section, Steps } from '@/components/practice';

/*
 * About Attorney Jwayyed. One idea carries the page, the same one the home
 * page opens with: he has stood on the other side of the courtroom. The
 * cities he prosecuted for are set large, as the record they are.
 *
 * Shared by /our-law-firm/about-us (canonical) and /about, which used to be
 * two drifting copies of the same page.
 */

const PROSECUTOR_ROLES = [
  { city: 'Columbus', role: 'City Prosecutor' },
  { city: 'Whitehall', role: 'City Prosecutor' },
  { city: 'Grove City', role: 'City Prosecutor' },
  { city: 'Bexley', role: 'City Prosecutor' },
  { city: 'Obetz', role: 'Prosecutor' },
  { city: 'New Albany', role: 'Prosecutor' },
  { city: 'Pickerington', role: "Mayor's Court Prosecutor" },
  { city: 'Circleville', role: 'Municipal Prosecutor and Assistant Law Director' },
];

export default function AboutView({ breadcrumbs }: { breadcrumbs: { label: string; href: string }[] }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        title="Attorney Jwayyed Jwayyed"
        description="A lifelong Ohioan and former prosecutor who now represents clients across Ohio. Licensed since 2019, Ohio Bar #0098678."
      />

      {/* Portrait and story */}
      <section className="bg-white text-navy-950 py-16 sm:py-24" aria-labelledby="story-heading">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid gap-12 lg:grid-cols-12 lg:items-start">
          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-ice">
              <Image
                src="/assets/IMG_5570.JPG"
                alt="Portrait of Attorney Jwayyed Jwayyed"
                fill
                priority
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-[length:var(--step-small)] text-navy-950/65">
              Jwayyed Jwayyed, founder of Jwayyed Law LLC
            </figcaption>
          </figure>
          <div className="lg:col-span-7 lg:pl-6">
            <h2 id="story-heading" className="jw-display text-[clamp(1.875rem,1.3rem+2vw,3rem)] leading-[1.08]">
              From Akron to the courtroom
            </h2>
            <div className="jw-prose mt-8">
              <p className="text-[length:var(--step-lead)] leading-snug">
                Jwayyed was born in Cincinnati and raised in Akron. He earned a bachelor&rsquo;s degree in Political Science from the
                University of Akron and his Juris Doctor from Capital University Law School in Columbus, where he concentrated in
                Alternative Dispute Resolution.
              </p>
              <p>
                In law school he interned at the Franklin County Public Defender&rsquo;s Office and at Safe Auto Insurance, working
                both public and private sides of the law. Since he was licensed in 2019 (Ohio Bar #0098678), he has worked at the
                Columbus City Attorney&rsquo;s Office and at Frost Brown Todd, a major regional law firm. He served as Municipal
                Prosecutor and Assistant Law Director for the City of Circleville, and as Legal Director for a civil rights
                organization, where his cases involved discrimination in employment and education. In 2023 he was selected for the
                Ohio State Bar Association (OSBA) Leadership Academy.
              </p>
              <p>
                He now leads his own practice, representing clients throughout central Ohio and across the state, including Franklin
                County, Columbus and its suburbs, in criminal defense, OVI/DUI, personal injury and his other{' '}
                <Link href="/services">practice areas</Link>.
              </p>
            </div>
            <div className="mt-10">
              <video
                src="/aboutme.mp4"
                className="w-full aspect-video object-cover bg-navy-950"
                controls
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="A short video introduction from Attorney Jwayyed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The other side of the courtroom */}
      <section className="jw-mark bg-navy-950 text-white py-20 sm:py-28" aria-labelledby="prosecutor-heading">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="prosecutor-heading" className="jw-display lg:col-span-7 text-[clamp(2.25rem,1.4rem+3vw,4rem)] leading-[1.04]">
              He has prosecuted for eight Ohio communities.
            </h2>
            <p className="lg:col-span-5 text-[length:var(--step-lead)] leading-snug text-white/80">
              He knows how a case is built against you, where it is weak, and what a prosecutor will accept. Now that knowledge
              works for the defense.
            </p>
          </div>
          <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {PROSECUTOR_ROLES.map((r) => (
              <li key={r.city} className="bg-navy-950 p-6 sm:p-8">
                <span className="block jw-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-none">{r.city}</span>
                <span className="block mt-3 text-[length:var(--step-small)] text-sky">Former {r.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section title="Career" tone="ice">
        <Steps
          steps={[
            { title: 'Law school', body: 'Interned at the Franklin County Public Defender’s Office and at Safe Auto Insurance.' },
            { title: 'Licensed in Ohio, 2019', body: 'Ohio Bar #0098678.' },
            { title: 'Columbus City Attorney’s Office', body: 'Followed by Frost Brown Todd, a major regional law firm.' },
            { title: 'Prosecutor and Assistant Law Director', body: 'Municipal Prosecutor and Assistant Law Director for the City of Circleville, and prosecutor for the communities above.' },
            { title: 'Legal Director, civil rights organization', body: 'Cases involving discrimination in employment and education.' },
            { title: 'OSBA Leadership Academy, 2023', body: 'One of 27 attorneys in the 2023 class.' },
            { title: 'Jwayyed Law LLC', body: 'His own practice, representing clients across Ohio.' },
          ]}
        />
        <p>
          Beyond court work, he assists clients with business contracts, landlord-tenant agreements, wills and basic estate planning.
          He also advises law enforcement agencies on legal matters and gives legal training on issues relevant to public service and
          policing.
        </p>
      </Section>

      {/* Recognition */}
      <section className="bg-white text-navy-950 py-16 sm:py-24" aria-labelledby="recognition-heading">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="recognition-heading" className="jw-display text-[clamp(1.875rem,1.3rem+2vw,3rem)] leading-[1.08] lg:sticky lg:top-28">
              Recognition
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div id="accolades" className="scroll-mt-28 grid gap-8 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] items-center bg-ice p-6 sm:p-10">
              <Image
                src="/assets/jwayyed-law-llc-plaque.png"
                alt="Jwayyed Law LLC, Best of 2026 award plaque from BusinessRate"
                width={1540}
                height={1900}
                sizes="224px"
                className="w-40 sm:w-full h-auto mx-auto"
              />
              <div>
                <h3 className="jw-serif text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-tight">Best of 2026, BusinessRate</h3>
                <p className="mt-3 text-navy-950/80 leading-relaxed">
                  Jwayyed Law LLC was named Best of 2026 by BusinessRate, powered by Google Reviews. The award recognizes top-rated
                  businesses in the Crosswoods area of Columbus, OH, and is based entirely on Google Reviews from clients.
                </p>
              </div>
            </div>
            <PointGrid
              points={[
                {
                  title: 'OSBA Leadership Academy, 2023',
                  body: 'Received the most nominations in the Academy’s history and was one of 27 attorneys in the 2023 class.',
                },
                {
                  title: 'CALI Award, 2017',
                  body: 'CALI Award for Excellence for the top grade in Interviewing and Counseling at Capital University Law School.',
                },
                { title: 'Education', body: 'Juris Doctor, Capital University Law School. B.A. in Political Science, University of Akron.' },
                { title: 'Memberships', body: 'Columbus Bar Association. Ohio State Bar Association. National College for DUI Defense.' },
              ]}
            />
            <div className="mt-2">
              <NCDDBadge variant="card" />
            </div>
            <figure className="mt-10 max-w-[20rem]">
              <video
                src="/videos/osba-speech.mp4"
                className="w-full aspect-[9/16] object-cover bg-navy-950"
                controls
                playsInline
                preload="metadata"
                aria-label="Attorney Jwayyed speaking at an Ohio State Bar Association event"
              />
              <figcaption className="mt-3 text-[length:var(--step-small)] text-navy-950/65">
                Speaking at an Ohio State Bar Association event.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Outside the office */}
      <section
        className="jw-mark jw-mark--navy bg-ice text-navy-950 py-16 sm:py-24"
        style={{ '--jw-mark-fade': 'radial-gradient(ellipse 55% 70% at 100% 100%, #000 10%, transparent 100%)', '--jw-mark-opacity': 0.06 } as React.CSSProperties}
        aria-labelledby="outside-heading"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid gap-8 lg:grid-cols-12">
          <h2 id="outside-heading" className="jw-display lg:col-span-4 text-[clamp(1.875rem,1.3rem+2vw,3rem)] leading-[1.08]">
            Outside the office
          </h2>
          <div className="lg:col-span-8 jw-prose">
            <p className="text-[length:var(--step-lead)] leading-snug">
              He enjoys spirited GOAT debates about Kobe, MJ and LeBron with his cousins, stays active through weightlifting and
              recreational sports, and listens to podcasts on law, culture and current events.
            </p>
            <p>
              A true Buckeye fan, he&rsquo;s a proud Buck Nut who tries to make at least one road game each season with his brother. He
              is active in his local community and values time with family and friends.
            </p>
            <p>
              <Link href="/our-law-firm/our-attorneys" className="inline-flex items-center gap-2 font-semibold">
                Attorney profile and practice areas
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      <OVIReviews />
      <ContactCTA />
    </>
  );
}
