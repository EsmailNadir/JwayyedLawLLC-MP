import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Estate Planning Lawyer in Ohio',
  description:
    'Ohio estate planning: wills, living trusts, powers of attorney, living wills and TOD deeds, and the Ohio statutes behind each one.',
  keywords: ['estate planning lawyer Columbus OH', 'estate planning attorney Ohio', 'Ohio estate planning lawyer', 'Ohio probate process', 'wills trusts lawyer', 'Franklin County estate planning attorney'],
  openGraph: {
    title: 'Estate Planning Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Wills, living trusts, powers of attorney and TOD deeds under Ohio law.',
    url: 'https://www.jjlawohio.com/other-services/estate-planning',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/estate-planning' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
];

const faqs = [
  {
    question: 'Do I need a will in Ohio?',
    answer:
      'No law requires one, but if you die without a will (intestate), Ohio law decides who inherits. Under ORC 2105.06 your assets go to your closest relatives in a set order: surviving spouse and children, then parents, then siblings, and so on. That order may not match your wishes, especially if you want to leave property to a friend, a charity or a non-traditional family member. A valid will under ORC Chapter 2107 lets you name beneficiaries, choose an executor, set up trusts for minor children and name a guardian for them.',
  },
  {
    question: 'What happens if I die without a will in Ohio?',
    answer:
      "Your estate passes under the intestate succession statutes in ORC Chapter 2105. Under ORC 2105.06, your spouse's share depends on your children. If all your children are also your spouse's children, the spouse typically inherits the entire estate. If you have children from a prior relationship, the estate is divided between the spouse and those children. With no surviving spouse, the estate goes to your children equally, or to your parents if you have no children. Those assets still go through Ohio probate, which can be slow and expensive.",
  },
  {
    question: 'What is a living trust and how does it differ from a will?',
    answer:
      'A revocable living trust is a document you create during your lifetime that holds title to your assets and directs their distribution after your death without probate. A will takes effect only at death and goes through the probate court. A living trust works immediately and lets assets pass to your beneficiaries privately, without court supervision. Ohio trusts are governed by ORC Chapter 5801, the Ohio Uniform Trust Code (OUTC). A "pour-over will" usually goes with the trust to move any assets left outside it into the trust at death. Trust-based planning can lower probate costs, keep matters private and make it easier to manage assets if you become incapacitated.',
  },
  {
    question: 'What is a durable power of attorney in Ohio?',
    answer:
      'A durable power of attorney (POA) under ORC Chapter 1337 authorizes a person you trust (your agent) to manage your finances. "Durable" means it stays in effect if you become incapacitated. Without one, your family may have to petition the probate court for a guardianship or conservatorship to handle your finances, which is a costly, slow court process. Ohio\'s Revised Uniform Power of Attorney Act (RUPOAA), at ORC 1337.21 et seq., sets the signing requirements and scope. A separate healthcare power of attorney lets your agent make medical decisions if you cannot.',
  },
  {
    question: 'What documents does a complete Ohio estate plan include?',
    answer:
      'Typically: (1) a Last Will and Testament under ORC Chapter 2107; (2) a revocable living trust under ORC Chapter 5801, if it fits; (3) a durable financial power of attorney under ORC 1337.21 et seq.; (4) a healthcare power of attorney naming someone to make medical decisions; (5) a living will (advance healthcare directive) stating your wishes for end-of-life care; (6) a POLST (Physician Orders for Life-Sustaining Treatment) if you have a serious illness; (7) updated beneficiary designations on life insurance, retirement accounts and POD/TOD accounts; and (8) transfer-on-death deeds for real estate under ORC 5302.22, where they fit. Each document does a different job.',
  },
  {
    question: 'What is a TOD deed in Ohio?',
    answer:
      "A transfer-on-death (TOD) affidavit, sometimes called a TOD deed, is authorized by ORC 5302.22. It lets an Ohio property owner name a beneficiary who inherits the real estate at the owner's death without probate. It does not limit the owner's rights while alive: the owner can sell, mortgage or change the beneficiary at any time. At death, the beneficiary records an affidavit of survivorship and a certified death certificate to take title. A TOD deed is a simple, low-cost way to keep real estate out of probate, and it suits plain situations such as leaving a home to an adult child.",
  },
  {
    question: 'When should I update my estate plan?',
    answer:
      'After any major life event: marriage or divorce; the birth or adoption of a child or grandchild; the death of a named beneficiary, executor or agent; a significant change in assets, such as buying or selling a home or business; a move to another state; a change in tax law; or any change in who you want to inherit or make decisions for you. Even without a major event, review the plan every three to five years so the documents still reflect your wishes and current Ohio law.',
  },
  {
    question: 'How much does estate planning cost in Ohio?',
    answer:
      'It depends on how complex your situation is. A basic will may cost a few hundred dollars in attorney fees. A plan with a revocable living trust, durable power of attorney, healthcare power of attorney and advance directive generally costs more, because there is more drafting and analysis. Plans involving business succession, special needs trusts or advanced tax planning cost more still. Jwayyed Law LLC discusses fees during the initial consultation, so you know the cost before you proceed.',
  },
];

const SERVICES = [
  { href: '/other-services/estate-planning-wills', title: 'Estate planning and wills', subtitle: 'Will preparation under ORC Chapter 2107' },
  { href: '/trusts', title: 'Trusts', subtitle: 'Revocable living trusts and trust administration under ORC Chapter 5801' },
  { href: '/other-services/powers-of-attorney', title: 'Powers of attorney', subtitle: 'Financial and healthcare powers of attorney under ORC 1337.21 et seq.' },
  { href: '/other-services/guardianships', title: 'Guardianships', subtitle: 'Establishing and administering guardianships under ORC Chapter 2111' },
];

export default function EstatePlanningPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Estate planning in Ohio"
        description="Without a will, ORC 2105.06 decides who inherits your property. An estate plan sets out who receives what, who manages it, and who decides for you if you cannot."
      />

      <Section
        title="What an Ohio estate plan covers"
        intro={
          <p>
            An estate plan is a set of documents that provides for your family and carries out your wishes, both after your death and
            during your lifetime if you become incapacitated.
          </p>
        }
      >
        <p>
          Jwayyed Law LLC prepares estate plans for individuals and families in Columbus, Cincinnati, Dayton and throughout Ohio. The
          law that governs each document sits mostly in Title 21 of the Ohio Revised Code, with trusts and powers of attorney in their
          own chapters.
        </p>
        <FactTable
          title="The Ohio statutes behind an estate plan"
          rows={[
            { label: 'Intestate succession', value: 'ORC Chapter 2105 (descent and distribution).' },
            { label: 'Wills', value: 'ORC Chapter 2107.' },
            { label: 'Fiduciaries', value: 'ORC Chapter 2109.' },
            { label: 'Executors and administrators', value: 'ORC Chapter 2113.' },
            { label: 'Guardianships', value: 'ORC Chapter 2111, for incapacitated adults and minors.' },
            { label: 'Trusts', value: 'ORC Chapter 5801, the Ohio Uniform Trust Code (OUTC).' },
            {
              label: 'Powers of attorney',
              value: 'ORC Chapter 1337, including the Revised Uniform Power of Attorney Act (RUPOAA) at ORC 1337.21 et seq.',
            },
            { label: 'Transfer-on-death affidavit', value: 'ORC 5302.22.' },
          ]}
        />
      </Section>

      <Section title="The will" tone="ice">
        <p>
          Under ORC 2107.03, a valid Ohio will must be in writing, signed by the testator (the person making the will), and attested
          and subscribed in the testator&rsquo;s conscious presence by two or more competent witnesses.
        </p>
        <p>
          The will directs how your probate assets are distributed, names the executor who administers the estate, sets up trusts for
          minor or disabled beneficiaries, and names a guardian for any minor children. Without one, ORC 2105.06 controls who inherits.
          That matters most with a blended family, a non-traditional relationship, or a wish to leave something to a charity or a
          friend. See <Link href="/other-services/estate-planning-wills">wills and estate planning documents</Link> for more.
        </p>
      </Section>

      <Section title="The revocable living trust">
        <p>
          A living trust, governed by ORC Chapter 5801, is created during your lifetime to hold title to your assets. Assets held in
          trust are not part of the probate estate, so they pass to your beneficiaries after death without court supervision and
          without the time and expense of probate.
        </p>
        <PointGrid
          points={[
            {
              title: 'Pour-over will',
              body: 'Used alongside the trust to move any assets not transferred into it during your lifetime into the trust at death.',
            },
            {
              title: 'Incapacity',
              body: 'If you can no longer manage your affairs, your successor trustee steps in immediately, with no court involvement.',
            },
          ]}
        />
      </Section>

      <Section title="Planning for incapacity" tone="ice">
        <p>
          Without these documents, your family may need a guardianship in the probate court under ORC Chapter 2111 to gain legal
          authority to act for you. That process is costly and slow.
        </p>
        <PointGrid
          points={[
            {
              title: 'Durable financial power of attorney',
              body: (
                <>
                  Under ORC 1337.21 et seq., your agent can pay bills, manage investments and handle real estate, even if you become
                  incapacitated. See <Link href="/other-services/powers-of-attorney">powers of attorney</Link>.
                </>
              ),
            },
            { title: 'Healthcare power of attorney', body: 'Lets your agent make medical decisions for you.' },
            { title: 'Living will', body: 'An advance healthcare directive recording your wishes about life-sustaining treatment and other end-of-life care.' },
            {
              title: 'Ohio POLST',
              body: 'For a serious illness: Physician Orders for Life-Sustaining Treatment turn your wishes into medical orders that follow you through care settings.',
            },
          ]}
        />
        <p>
          If a guardianship is already needed, see <Link href="/other-services/guardianships">guardianships</Link>.
        </p>
      </Section>

      <Section title="Assets that pass outside the probate process">
        <p>
          Many assets pass automatically through beneficiary designations, titling or transfer-on-death features. Your documents,
          beneficiary designations and asset titles need to line up, or an asset can end up outside the plan.
        </p>
        <FactTable
          title="Non-probate transfers"
          rows={[
            { label: 'Life insurance, IRAs, 401(k)s, annuities', value: 'Pass to the named beneficiaries at death without probate.' },
            { label: 'Bank accounts', value: 'Can be set up as payable-on-death (POD) accounts.' },
            { label: 'Brokerage accounts', value: 'Can carry transfer-on-death designations.' },
            {
              label: 'Real estate',
              value: 'A TOD affidavit under ORC 5302.22 names a beneficiary who inherits at death, while you keep full ownership and control during your lifetime.',
            },
            { label: 'Joint ownership', value: 'Joint and survivorship ownership is another option.' },
          ]}
        />
      </Section>

      <Section title="Estate planning services" tone="ice">
        <LinkGrid links={SERVICES} columns={2} />
        <Callout title="Schedule a consultation">
          Call Jwayyed Law LLC at (614) 285-5482 to schedule a consultation with an Ohio estate planning lawyer. The firm drafts a plan to fit your
          family and assets, from a will and power of attorney to a trust-based plan.
        </Callout>
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
