export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  role: 'Attorney' | 'Staff' | 'Intern';
  image: string;
  imageAlt?: string;
  imageObjectPosition?: string;
  shortBio: string;
  fullBio: string;
  profileLink: string;
  highlights?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'attorney-jwayyed',
    name: 'Attorney Jwayyed',
    title: 'Managing Attorney',
    role: 'Attorney',
    image: '/assets/IMG_5570.JPG',
    imageAlt: 'Attorney Jwayyed, Managing Attorney at Jwayyed Law LLC',
    shortBio:
      'Ohio attorney licensed since 2019. J.D., Capital University Law School. Former Municipal Prosecutor and former Assistant Law Director for the City of Circleville. OSBA Leadership Academy 2023. Serving clients statewide in OVI/DUI, criminal defense, estate planning, civil, and business law.',
    fullBio: `<p>Jwayyed Jwayyed is the founding and managing attorney of Jwayyed Law LLC. He earned his Juris Doctor from Capital University Law School and has been licensed to practice law in Ohio since 2019. He is bilingual in English and Arabic.</p>

<p>Before founding Jwayyed Law LLC, Attorney Jwayyed served as a Municipal Prosecutor, which showed him firsthand how the prosecution builds cases, weighs evidence and makes charging decisions. He also served as Assistant Law Director for the City of Circleville, Ohio, deepening his understanding of municipal law, local court procedures, and government operations. For clients facing criminal or OVI charges, that background means he knows the system from both sides.</p>

<p>In 2023, Attorney Jwayyed was selected for the Ohio State Bar Association (OSBA) Leadership Academy, a competitive program for emerging legal leaders in Ohio. The firm holds a 5.0-star rating from 130+ Google reviews.</p>

<p>Jwayyed Law LLC handles OVI/DUI defense, criminal defense (misdemeanor), personal injury, business law, estate planning, trusts, probate, and related matters throughout Ohio, including Franklin County, Columbus and the surrounding suburbs.</p>`,
    profileLink: '/our-law-firm/about-us',
    highlights: ['Licensed in Ohio since 2019', 'Former Municipal Prosecutor', 'Former Asst. Law Director, Circleville', 'OSBA Leadership Academy 2023', 'Capital University Law School J.D.', 'Licensed 2019'],
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
