export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  role: 'Attorney' | 'Staff' | 'Intern';
  image: string;
  shortBio: string;
  fullBio: string;
  profileLink: string;
  highlights?: string[];
}

export const roles = ['All', 'Attorneys', 'Staff', 'Interns'] as const;
export type RoleFilter = (typeof roles)[number];

export const teamMembers: TeamMember[] = [
  {
    slug: 'attorney-jwayyed',
    name: 'Attorney Jwayyed',
    title: 'Managing Attorney',
    role: 'Attorney',
    image: '/assets/attorney-main.jpg',
    shortBio:
      'Extensive experience in criminal defense, civil rights, and municipal law. Dedicated to fighting for justice and protecting client rights throughout Ohio.',
    fullBio: '',
    profileLink: '/our-law-firm/about-us',
    highlights: ['Criminal Defense', 'Civil Rights', 'Municipal Law'],
  },
  {
    slug: 'raneem-ali',
    name: 'Raneem Ali',
    title: 'Legal Assistant & Case Manager',
    role: 'Staff',
    image: '/assets/raneem-backround.png',
    shortBio:
      'Exceptional organizational skills and genuine commitment to client service. Manages client intake, scheduling, and case documentation with precision.',
    fullBio: `<p>Raneem Ali joined Jwayyed Law LLC in 2024, bringing exceptional organizational skills and a genuine commitment to client service. She plays a key role in ensuring smooth day-to-day operations, managing client intake, scheduling, and case documentation with precision. As the first point of contact for many clients, Raneem's warm and professional demeanor helps create a welcoming environment from the start.</p>

<p>Raneem graduated from The Ohio State University with a bachelor's degree in criminal justice and a minor in biological bases of behavior. She is bilingual in English and Arabic, enabling her to communicate effectively with a diverse range of clients. Her previous experience in immigration and discrimination law has deepened her passion for legal advocacy and strengthened her ability to support clients with empathy and cultural awareness.</p>

<p>She is currently preparing to attend law school and is focused on expanding her legal knowledge through hands-on experience. Her attention to detail, strong communication skills, and client-centered approach make her a reliable and dedicated member of the Jwayyed Law team.</p>`,
    profileLink: '/our-law-firm/our-attorneys/raneem-ali',
    highlights: ['OSU Criminal Justice', 'Bilingual: English & Arabic', 'Immigration & Discrimination Law'],
  },
  {
    slug: 'jonathan-cowan',
    name: 'Jonathan Cowan',
    title: 'Legal Intern',
    role: 'Intern',
    image: '/assets/Jon-cowan.jpg',
    shortBio:
      'Juris Doctor candidate at Capital University Law School with a twenty-year career in the United States Air Force. Brings discipline, global perspective, and courtroom advocacy skills.',
    fullBio: `<p>Jonathan Cowan is a Juris Doctor candidate at Capital University Law School, Class of 2026, with a background in litigation, public service, and leadership developed through a twenty-year career in the United States Air Force. Born in Evansville, Indiana, in 1985, he enlisted in 2003 and served as a project manager overseeing complex aerospace operations, leading large teams, and supporting missions worldwide, including deployments to Kuwait and Iraq. His military service included travel to more than thirty countries, shaping a global and disciplined approach to his legal career.</p>

<p>Jonathan earned a Bachelor of Science in Legal Studies with a minor in Political Science from Wilmington University before beginning law school in 2023. During his legal training, he has gained practical experience as a legal intern with the Franklin County Prosecutor's Civil Division and as a law clerk with a Columbus-area family law firm, where he drafted pleadings and motions, conducted legal research, and assisted with trial preparation. He is an active member of Capital University's Mock Trial Team and Moot Court programs, developing courtroom advocacy and oral argument skills, and holds a Legal Intern Certificate authorizing supervised court appearances.</p>

<p>Outside of his professional work, Jonathan enjoys following a wide range of sports and is an avid fantasy football enthusiast.</p>`,
    profileLink: '/our-law-firm/our-attorneys/jonathan-cowan',
    highlights: ['Capital University Law School', 'U.S. Air Force Veteran', 'Legal Intern Certificate'],
  },
  {
    slug: 'layan-khairi',
    name: 'Layan Khairi',
    title: 'Legal Intern',
    role: 'Intern',
    image: '/assets/LayanKhairi.jpg',
    shortBio:
      'Pursuing a B.S. in Finance at The Ohio State University with a minor in Law and Public Policy. Brings strong analytical skills and a client-focused approach to document review and case preparation.',
    fullBio: `<p>Layan Khairi joined Jwayyed Law LLC in 2026, bringing strong analytical skills and a thoughtful, client-focused approach to her work. She supports the team with document review and case preparation, contributing to the firm's commitment to thorough and strategic representation. Layan approaches each task with professionalism and attention to detail, ensuring that matters are handled efficiently and accurately.</p>

<p>Layan is currently pursuing a Bachelor of Science in Finance at The Ohio State University, along with a minor in Law and Public Policy, and is expected to graduate in 2029. Her academic background in finance provides her with a strong foundation in analytical skills and corporate structure, which align with her long-term goal of practicing corporate law. While she maintains an interest in multiple areas of the legal field, she is particularly drawn to corporate and business-related matters.</p>

<p>Bilingual in English and Arabic, Layan is able to communicate effectively with clients from diverse backgrounds. She is committed to developing the skills necessary to become a well-rounded attorney and is passionate about contributing meaningfully to the legal profession.</p>`,
    profileLink: '/our-law-firm/our-attorneys/layan-khairi',
    highlights: ['OSU Finance Major', 'Bilingual: English & Arabic', 'Law & Public Policy Minor'],
  },
  {
    slug: 'mateo-improvola',
    name: 'Mateo Improvola',
    title: 'Legal Intern',
    role: 'Intern',
    image: '/assets/mateo-improvola.png',
    shortBio:
      'Undergraduate at The Ohio State University majoring in Political Science with a minor in Criminology. Assists with case files, documentation, and client communication.',
    fullBio: `<p>Mateo Improvola joined Jwayyed Law LLC in 2026, where he supports the firm's day-to-day operations. In his role, Mateo assists with managing case files, assisting with legal matters, organizing documentation, and communicating with clients to help ensure matters move forward efficiently. He approaches each task with attention to detail and a strong commitment to client service.</p>

<p>Mateo is currently an undergraduate student at The Ohio State University, majoring in Political Science with a minor in Criminology. His academic studies complement his practical legal experience and reflect his deep interest in the justice system and legal advocacy. He also brings previous experience working in personal injury law, where he developed foundational skills in client communication and case support.</p>

<p>Bilingual in English and Spanish, Mateo is able to effectively assist a diverse client base. He is passionate about the law and committed to continuing his professional development as he prepares to attend law school and pursue a career as an attorney.</p>`,
    profileLink: '/our-law-firm/our-attorneys/mateo-improvola',
    highlights: ['OSU Political Science', 'Bilingual: English & Spanish', 'Criminology Minor'],
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}

export function getMembersByRole(filter: RoleFilter): TeamMember[] {
  if (filter === 'All') return teamMembers;
  const roleMap: Record<string, TeamMember['role']> = {
    Attorneys: 'Attorney',
    Staff: 'Staff',
    Interns: 'Intern',
  };
  return teamMembers.filter((m) => m.role === roleMap[filter]);
}
