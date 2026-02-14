export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  featured: boolean;
  image: string;
  gradient: string;
  content: string;
}

export const categories = [
  'All Articles',
  'Criminal Defense',
  'OVI/DUI',
  'Personal Injury',
  'Business Law',
  'Ohio Courts',
] as const;

export type Category = (typeof categories)[number];

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-to-do-pulled-over-ovi-ohio',
    title: 'What to Do If You\'re Pulled Over for OVI in Ohio',
    excerpt: 'Being stopped on suspicion of OVI can be intimidating. Know your rights and the critical steps that could protect your future before, during, and after a traffic stop in Ohio.',
    category: 'OVI/DUI',
    author: 'Jwayyed Law LLC',
    date: '2026-02-10',
    featured: true,
    image: '/assets/dui-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>Few moments are as nerve-wracking as seeing flashing lights in your rearview mirror, especially if you have had anything to drink. What you do in the minutes that follow can shape the outcome of your case for months or even years. Ohio treats Operating a Vehicle Impaired (OVI) seriously, but that does not mean you are without options. Here is a step-by-step look at how to handle an OVI stop in Ohio.</p>

      <h2>Pull Over Safely and Stay Calm</h2>
      <p>Signal, slow down, and find a safe spot on the right side of the road. Turn off your engine, turn on your interior light if it is dark, and keep your hands visible on the steering wheel. Officers note your driving behavior even before they approach the window, so avoid sudden lane changes or erratic braking. The officer will document everything from the moment the cruiser's dash camera starts recording, so controlled, calm movements work in your favor.</p>

      <h2>Be Polite, but Know What You Must Provide</h2>
      <p>Under Ohio law, you are required to provide your driver's license, registration, and proof of insurance when asked. You should hand those documents over without argument. Beyond that, you have the right to remain silent. You do not have to answer questions about where you have been, how much you have had to drink, or where you are headed. A polite "I would prefer not to answer questions without my attorney present" is a lawful and appropriate response.</p>

      <h2>Field Sobriety Tests Are Voluntary</h2>
      <p>Ohio officers frequently request Standardized Field Sobriety Tests (SFSTs) such as the walk-and-turn, one-leg stand, and horizontal gaze nystagmus test. Many drivers do not realize these tests are voluntary. You can decline them without an automatic license suspension. However, declining may still lead to an arrest if the officer believes there is probable cause based on other observations such as odor of alcohol, slurred speech, or bloodshot eyes.</p>

      <h2>Chemical Tests and Ohio's Implied Consent Law</h2>
      <p>Ohio operates under an implied consent statute, meaning that by driving on Ohio roads, you have already agreed to submit to a chemical test (breath, blood, or urine) if lawfully arrested for OVI. Refusing a chemical test after arrest triggers an automatic Administrative License Suspension (ALS) of one year for a first refusal, two years for a second, and three years for a third within ten years. The refusal itself can also be used as evidence against you at trial. This is different from the field sobriety tests at the roadside, which carry no automatic penalty for refusal.</p>

      <h2>What Happens After an Arrest</h2>
      <p>If you are arrested, you will be taken to the station for booking and a chemical test. You will receive paperwork regarding your Administrative License Suspension, and you have a limited window — typically five days from the date of the initial appearance — to appeal the suspension or request limited driving privileges. Missing this deadline can cost you months of driving ability, so acting quickly is essential.</p>

      <h2>Document Everything You Can Remember</h2>
      <p>As soon as possible after the stop, write down everything you remember: what the officer said, what tests were requested, whether you consented, road and weather conditions, and any witnesses. These details fade quickly but can become powerful tools in your defense. Note the exact location of the stop and whether there were any dashboard or body camera recordings.</p>

      <h2>Contact an Attorney Immediately</h2>
      <p>An experienced OVI attorney can review the legality of the stop itself, the administration of any field sobriety tests, the calibration records of breathalyzer equipment, and whether your constitutional rights were respected throughout the process. Defenses exist at every stage, from challenging probable cause to questioning the accuracy of chemical testing. The sooner you get legal counsel involved, the stronger your position.</p>

      <p>If you have been stopped or charged with OVI in Ohio, Jwayyed Law LLC is ready to review your case and help you understand your options. Every case is different, and early legal guidance can make a significant difference in the outcome.</p>
    `,
  },
  {
    slug: 'ohio-castle-doctrine-self-defense-laws',
    title: 'Understanding Ohio\'s Castle Doctrine and Self-Defense Laws',
    excerpt: 'Ohio law provides strong protections for individuals defending themselves in their homes. Learn where the Castle Doctrine applies, its limits, and what changed with Stand Your Ground.',
    category: 'Criminal Defense',
    author: 'Jwayyed Law LLC',
    date: '2026-02-03',
    featured: true,
    image: '/assets/criminallaw-blog2.jpg',
    gradient: 'from-[#2d3436] via-[#1a1a2e] to-[#b87333]/50',
    content: `
      <p>Ohio recognizes the right of individuals to protect themselves, their families, and their property. The state's self-defense laws have evolved significantly in recent years, particularly with the passage of Senate Bill 175, which introduced Stand Your Ground protections. Understanding these laws can help you know where you stand legally if you ever face a situation where force becomes necessary.</p>

      <h2>What Is the Castle Doctrine?</h2>
      <p>The Castle Doctrine is a legal principle rooted in the idea that your home is your castle — a place where you should not be forced to retreat from a threat. In Ohio, this concept is codified under Ohio Revised Code Section 2901.05 and Section 2901.09. Under the Castle Doctrine, if someone unlawfully enters or attempts to enter your residence, you are presumed to have a reasonable fear of imminent death or great bodily harm. This presumption can justify the use of deadly force without a duty to retreat.</p>
      <p>The protection extends to your occupied vehicle as well. If someone attempts to forcibly and unlawfully remove you from your car, the same presumption of reasonable fear applies.</p>

      <h2>Ohio's Stand Your Ground Law</h2>
      <p>Before April 2021, Ohio required individuals to retreat before using deadly force in self-defense when outside their homes, provided retreat was safely possible. Senate Bill 175 removed that duty to retreat in any place where the person has a lawful right to be. This means that if you are legally present in a parking lot, a public sidewalk, a friend's home, or any other location where you have a right to be, you are not required to retreat before defending yourself with proportional force.</p>
      <p>Importantly, Stand Your Ground did not change the fundamental requirements of self-defense. You must still reasonably believe that deadly force is necessary to prevent death or great bodily harm. The law did not create a license to use force in situations where a reasonable person would not feel genuinely threatened.</p>

      <h2>Key Requirements for a Self-Defense Claim</h2>
      <p>Whether you invoke the Castle Doctrine or Stand Your Ground, Ohio law requires several elements to be present for a valid self-defense claim:</p>
      <ul>
        <li><strong>You were not the initial aggressor.</strong> If you started or escalated the confrontation, self-defense protections typically do not apply.</li>
        <li><strong>You had a reasonable belief of imminent danger.</strong> The threat must be immediate, not hypothetical or based on a past encounter.</li>
        <li><strong>The force used was proportional.</strong> Deadly force is only justified in response to a threat of death or serious bodily harm. Using a firearm in response to a verbal argument, for example, would likely not meet this standard.</li>
        <li><strong>You were in a place where you had a legal right to be.</strong> Trespassers cannot generally claim Stand Your Ground protections.</li>
      </ul>

      <h2>Where the Castle Doctrine Does Not Apply</h2>
      <p>The presumption of reasonable fear under the Castle Doctrine does not apply in every home invasion scenario. If the person entering your home is a lawful resident or co-tenant, such as a spouse or roommate, the presumption does not automatically apply. Similarly, if you are engaged in illegal activity at the time of the incident, the Castle Doctrine protections may not be available to you. Law enforcement officers executing a lawful warrant or performing official duties are also excluded from Castle Doctrine scenarios.</p>

      <h2>The Burden of Proof</h2>
      <p>One significant change in Ohio law is the shift in the burden of proof for self-defense. Prior to 2019, Ohio was one of the few states where the defendant bore the burden of proving self-defense by a preponderance of the evidence. Ohio Revised Code Section 2901.05 now places the burden on the prosecution to disprove a claim of self-defense beyond a reasonable doubt, once the defendant has presented sufficient evidence to raise the issue. This shift brought Ohio in line with the majority of other states and provides meaningful protection for individuals who legitimately acted in self-defense.</p>

      <h2>When to Seek Legal Counsel</h2>
      <p>Even clear-cut self-defense situations can lead to criminal charges. Prosecutors may question whether the threat was truly imminent, whether the level of force was reasonable, or whether you could have avoided the confrontation entirely. If you have used force in self-defense, it is critical to contact an attorney before speaking with investigators. Statements made in the immediate aftermath of an incident can be taken out of context and used against you.</p>

      <p>If you are facing charges related to the use of force in Ohio, Jwayyed Law LLC can evaluate the facts of your situation and help build a defense that protects your rights under Ohio's self-defense statutes.</p>
    `,
  },
  {
    slug: 'steps-after-car-accident-ohio',
    title: 'Steps to Take After a Car Accident in Ohio',
    excerpt: 'The actions you take in the hours and days after a car accident can determine whether you receive fair compensation. Here is a clear guide for Ohio drivers.',
    category: 'Personal Injury',
    author: 'Jwayyed Law LLC',
    date: '2026-01-27',
    featured: false,
    image: '/assets/personalinjury-blog.jpg',
    gradient: 'from-[#1a1a2e] to-[#2d6a4f]/50',
    content: `
      <p>Car accidents happen fast, but the aftermath can stretch out for months. Whether you have been rear-ended on I-70 or involved in a multi-vehicle collision on I-71, the steps you take immediately after an accident in Ohio can directly affect your ability to recover compensation for injuries, vehicle damage, and other losses.</p>

      <h2>1. Check for Injuries and Move to Safety</h2>
      <p>Your first priority is safety. Check yourself and your passengers for injuries. If anyone is hurt, call 911 immediately. If your vehicle is drivable and it is safe to do so, move it out of active traffic lanes. Turn on your hazard lights. Ohio law requires drivers involved in an accident to stop at the scene, so do not leave — but get yourself out of danger.</p>

      <h2>2. Call Law Enforcement</h2>
      <p>Under Ohio Revised Code Section 4509.06, you are required to file an accident report if the crash involves injury, death, or property damage exceeding $1,000. In most cases, the responding officer will create a crash report at the scene. This report becomes an important piece of evidence for any insurance claim or lawsuit. Ask the officer for the report number before they leave.</p>

      <h2>3. Exchange Information with the Other Driver</h2>
      <p>Collect the other driver's name, address, phone number, driver's license number, insurance company and policy number, and the vehicle's license plate number. If there are passengers, try to get their names as well. Be polite but avoid discussing fault at the scene — even a simple "I'm sorry" can be used against you later in an insurance negotiation or courtroom.</p>

      <h2>4. Document the Scene</h2>
      <p>Use your phone to take photographs and video of the damage to all vehicles, the surrounding road conditions, traffic signs, skid marks, debris, weather conditions, and any visible injuries. Capture wide shots that show the overall scene and close-ups of specific damage. If there are witnesses, ask for their names and contact information. This documentation can be invaluable if the other driver's story changes later.</p>

      <h2>5. Seek Medical Attention Promptly</h2>
      <p>Even if you feel fine, see a doctor within 24 to 48 hours. Some injuries — whiplash, concussions, internal bleeding, herniated discs — do not produce immediate symptoms. A medical record linking your injuries to the accident strengthens your claim. Insurance companies routinely argue that delayed treatment means the injury was not caused by the collision, so prompt medical evaluation creates a documented connection between the crash and your condition.</p>

      <h2>6. Notify Your Insurance Company</h2>
      <p>Report the accident to your insurance company as soon as reasonably possible. Most policies require prompt notification. Provide basic facts but avoid giving a recorded statement to the other driver's insurance company without first consulting an attorney. Adjusters are trained to minimize payouts, and early statements can be used to limit your recovery.</p>

      <h2>7. Keep Records of Everything</h2>
      <p>Start a file with all accident-related documents: the police report, medical bills, prescription receipts, repair estimates, rental car receipts, and any correspondence with insurance companies. Keep a written log of how your injuries affect your daily life — missed workdays, inability to exercise, difficulty sleeping, and pain levels. These records help quantify both economic and non-economic damages.</p>

      <h2>8. Be Cautious on Social Media</h2>
      <p>Insurance companies and defense attorneys monitor social media accounts. A photo of you at a family gathering or a post about a weekend activity can be used to argue that your injuries are not as severe as you claim. Consider limiting your social media activity while your case is pending and avoid posting anything related to the accident.</p>

      <h2>9. Understand Ohio's Statute of Limitations</h2>
      <p>Ohio imposes a two-year statute of limitations for personal injury claims, running from the date of the accident. If you do not file a lawsuit within this window, you lose the right to seek compensation through the courts. For property damage claims, the deadline is also two years. While two years may seem like a long time, building a strong case takes months, so early action is important.</p>

      <h2>10. Consult a Personal Injury Attorney</h2>
      <p>An attorney can evaluate whether the other driver was at fault, calculate the full value of your claim including future medical expenses and lost earning capacity, negotiate with insurance companies on your behalf, and take your case to trial if a fair settlement cannot be reached.</p>

      <p>If you have been injured in a car accident in Ohio, Jwayyed Law LLC can help you understand your options and fight for the compensation you deserve.</p>
    `,
  },
  {
    slug: 'ohio-new-expungement-laws-clear-record',
    title: 'How Ohio\'s New Expungement Laws Could Clear Your Record',
    excerpt: 'Recent changes to Ohio\'s expungement statutes have expanded eligibility significantly. Find out whether your criminal record qualifies for sealing under the updated law.',
    category: 'Criminal Defense',
    author: 'Jwayyed Law LLC',
    date: '2026-01-20',
    featured: false,
    image: '/assets/criminallaws-blog.jpg',
    gradient: 'from-[#2d3436] to-[#1a1a2e]',
    content: `
      <p>A criminal record can follow you long after you have served your sentence, paid your fines, and moved on with your life. It can affect employment opportunities, housing applications, professional licensing, and even educational prospects. Ohio has recognized this reality, and recent changes to the state's expungement and record-sealing laws have opened the door for many more people to seek a fresh start.</p>

      <h2>What Is Expungement in Ohio?</h2>
      <p>In Ohio, the term "expungement" is often used interchangeably with "record sealing," though technically Ohio's statute provides for sealing rather than destruction of records. When your record is sealed under Ohio Revised Code Section 2953.32, your conviction is removed from public background check databases. Sealed records are not accessible to most employers, landlords, or members of the public. However, law enforcement and certain licensing agencies can still access them under limited circumstances.</p>

      <h2>Recent Expansions of Eligibility</h2>
      <p>Ohio has significantly broadened expungement eligibility in recent years. Key changes include:</p>
      <ul>
        <li><strong>Number of eligible convictions increased.</strong> You can now apply to seal up to two felony convictions, four misdemeanor convictions, or a combination of two felonies and four misdemeanors. Previously, the limits were much more restrictive.</li>
        <li><strong>Certain fourth- and fifth-degree felonies are eligible.</strong> Many non-violent felonies that were previously ineligible can now be sealed, including certain drug offenses and property crimes.</li>
        <li><strong>Waiting periods reduced.</strong> The mandatory waiting period after completing your sentence has been shortened. For eligible misdemeanors, the waiting period is one year. For eligible felonies, the waiting period is three years.</li>
        <li><strong>Additional offenses now eligible.</strong> Some offenses that were categorically excluded in the past, including certain theft offenses and minor drug charges, are now eligible for sealing.</li>
      </ul>

      <h2>What Cannot Be Expunged</h2>
      <p>Not all convictions are eligible for sealing in Ohio. The following categories remain ineligible:</p>
      <ul>
        <li>First- and second-degree felonies (with limited exceptions)</li>
        <li>Convictions involving violence against a minor</li>
        <li>Most sex offenses requiring registration</li>
        <li>Offenses involving a mandatory prison term</li>
        <li>Certain domestic violence convictions</li>
        <li>OVI/DUI convictions (these are specifically excluded under Ohio law)</li>
      </ul>
      <p>It is worth noting that not guilty findings, dismissed charges, and cases where no bill was returned by a grand jury can generally be sealed regardless of the offense type.</p>

      <h2>The Expungement Process</h2>
      <p>Filing for expungement in Ohio involves several steps. You must file an application with the court that handled your original case, pay the filing fee (typically $50), and provide documentation showing you have completed your sentence and any supervision. The prosecutor has the opportunity to object, and a hearing may be scheduled where the judge considers factors such as your criminal history, the nature of the offense, your rehabilitation efforts, and the interest of the community in maintaining public records.</p>

      <h2>How a Sealed Record Affects Your Life</h2>
      <p>Once your record is sealed, you can legally answer "no" when asked on most job applications whether you have been convicted of a crime. Most standard background checks will not reveal the sealed conviction. This can be transformative for individuals who have struggled to find employment, secure housing, or pursue educational opportunities because of a past mistake.</p>

      <h2>Why Legal Representation Matters</h2>
      <p>While the expungement process may seem straightforward, having an attorney handle your application ensures that all paperwork is properly completed, deadlines are met, and your case is presented effectively to the court. If the prosecutor objects, an attorney can argue on your behalf at the hearing and present evidence of your rehabilitation. Errors in the application or missing documentation can delay or derail the process entirely.</p>

      <p>If you believe your record may be eligible for sealing under Ohio's updated laws, Jwayyed Law LLC can evaluate your case, determine your eligibility, and guide you through the entire process.</p>
    `,
  },
  {
    slug: 'starting-business-ohio-llc-vs-corporation',
    title: 'Starting a Business in Ohio: LLC vs. Corporation',
    excerpt: 'Choosing between an LLC and a corporation is one of the first major decisions for any Ohio entrepreneur. Understand the key differences in taxes, liability, and flexibility.',
    category: 'Business Law',
    author: 'Jwayyed Law LLC',
    date: '2026-01-13',
    featured: false,
    image: '/assets/businesslaw-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#b87333]/30 to-[#2d3436]',
    content: `
      <p>When you decide to start a business in Ohio, one of the first and most consequential choices you will face is selecting the right entity structure. The two most common options are a Limited Liability Company (LLC) and a Corporation. Both offer liability protection for their owners, but they differ significantly in how they are taxed, managed, and regulated. Understanding these differences before you file your paperwork with the Ohio Secretary of State can save you time, money, and headaches down the road.</p>

      <h2>Limited Liability Companies (LLCs) in Ohio</h2>
      <p>An LLC is a flexible business structure that combines the liability protection of a corporation with the tax simplicity of a sole proprietorship or partnership. Ohio LLCs are governed by Ohio Revised Code Chapter 1706, the Ohio Revised Uniform Limited Liability Company Act.</p>
      <p><strong>Key features of an Ohio LLC:</strong></p>
      <ul>
        <li><strong>Pass-through taxation.</strong> By default, LLCs are not taxed at the entity level. Profits and losses pass through to the members' personal tax returns. This avoids the "double taxation" that can apply to corporations.</li>
        <li><strong>Management flexibility.</strong> LLCs can be member-managed or manager-managed, and the operating agreement can be structured to fit the specific needs of the business. There are no requirements for annual meetings, boards of directors, or corporate minutes.</li>
        <li><strong>Fewer formalities.</strong> Ohio LLCs are subject to fewer ongoing compliance requirements compared to corporations. There is no requirement to hold annual meetings or maintain corporate minutes, though it is still good practice to document major decisions.</li>
        <li><strong>Formation cost.</strong> Filing Articles of Organization with the Ohio Secretary of State costs $99 as of 2026. The biennial report is currently free.</li>
      </ul>

      <h2>Corporations in Ohio</h2>
      <p>A corporation is a more formal business structure that creates a separate legal entity from its owners (shareholders). Ohio corporations are governed by Ohio Revised Code Chapter 1701.</p>
      <p><strong>Key features of an Ohio corporation:</strong></p>
      <ul>
        <li><strong>Taxation options.</strong> A C-Corporation is taxed at the entity level, and shareholders are taxed again on dividends (double taxation). However, a corporation can elect S-Corporation status with the IRS to achieve pass-through taxation, provided it meets eligibility requirements such as having no more than 100 shareholders and only one class of stock.</li>
        <li><strong>Ownership through stock.</strong> Corporations issue shares of stock, making it straightforward to transfer ownership, bring in investors, or offer equity compensation to employees.</li>
        <li><strong>Formal governance structure.</strong> Corporations must have a board of directors, hold annual meetings, keep corporate minutes, and follow bylaws. This formality can be an advantage for larger businesses or those seeking outside investment, as it provides a clear governance framework.</li>
        <li><strong>Formation cost.</strong> Filing Articles of Incorporation with the Ohio Secretary of State costs $99 as of 2026.</li>
      </ul>

      <h2>Key Differences to Consider</h2>
      <p><strong>Taxation:</strong> For most small businesses, the pass-through taxation of an LLC is simpler and avoids double taxation. If you anticipate significant growth or plan to reinvest profits into the business, a C-Corporation's flat tax rate may be advantageous. An S-Corporation election gives you the corporate structure with pass-through taxation but imposes restrictions on ownership.</p>
      <p><strong>Raising capital:</strong> If you plan to seek venture capital or eventually go public, a corporation is the standard structure that investors expect. LLCs can also bring in investors, but the membership interest structure is less familiar to institutional investors and can be more complex to negotiate.</p>
      <p><strong>Operational flexibility:</strong> LLCs offer more freedom to structure management, profit distribution, and decision-making. Corporations require adherence to formal governance procedures regardless of size.</p>
      <p><strong>Self-employment taxes:</strong> LLC members who actively participate in the business generally pay self-employment tax on their share of the profits. S-Corporation shareholders who work in the business must pay themselves a reasonable salary (subject to payroll taxes) but can take additional profits as distributions that are not subject to self-employment tax.</p>

      <h2>Which Is Right for Your Business?</h2>
      <p>There is no one-size-fits-all answer. A solo consultant or small service business may benefit most from an LLC's simplicity and flexibility. A tech startup seeking outside investment may need the corporate structure that venture capital firms expect. A growing business with multiple owners may find that an S-Corporation election provides the best balance of liability protection, tax efficiency, and operational structure.</p>

      <p>If you are starting a business in Ohio and need guidance on choosing the right entity structure, Jwayyed Law LLC can help you evaluate your options and set up your business on a solid legal foundation.</p>
    `,
  },
  {
    slug: 'what-to-expect-first-court-appearance-ohio',
    title: 'What to Expect at Your First Court Appearance in Ohio',
    excerpt: 'Your first time in an Ohio courtroom does not have to be overwhelming. Learn what happens at an arraignment, how to prepare, and what decisions you will face.',
    category: 'Ohio Courts',
    author: 'Jwayyed Law LLC',
    date: '2026-01-06',
    featured: false,
    image: '/assets/courthouse-blog.jpg',
    gradient: 'from-[#2d6a4f]/40 via-[#1a1a2e] to-[#2d3436]',
    content: `
      <p>If you have been charged with a criminal offense in Ohio, your first court appearance — usually called an arraignment — is likely causing anxiety. Knowing what to expect can help you feel more prepared and make better decisions during a proceeding that moves faster than most people anticipate.</p>

      <h2>What Is an Arraignment?</h2>
      <p>An arraignment is a formal court hearing where the charges against you are read, you are informed of your constitutional rights, and you are asked to enter a plea. In Ohio, arraignments for misdemeanors typically happen within a few days of arrest or citation. Felony arraignments may occur after a grand jury returns an indictment, or at a preliminary hearing stage in some courts.</p>

      <h2>Before You Arrive at Court</h2>
      <p>Dress professionally — business casual at minimum. Courts take appearance seriously, and first impressions matter to judges. Arrive early to allow time to pass through security, find the correct courtroom, and check in with the clerk. Bring your citation or any paperwork you received at the time of your arrest. Turn off your cell phone before entering the courtroom. Many Ohio courts will confiscate phones or hold them in contempt if they ring during proceedings.</p>

      <h2>What Happens During the Arraignment</h2>
      <p>The judge or magistrate will call your case, read the charges, and explain the potential penalties. You will be informed of your right to an attorney. If you cannot afford an attorney, the court will determine whether you qualify for a public defender based on your income and assets. You will then be asked to enter a plea:</p>
      <ul>
        <li><strong>Not Guilty:</strong> This is the most common plea at arraignment. Entering a not guilty plea does not mean you are going to trial — it simply preserves your rights and gives you and your attorney time to review the evidence and explore options. Most attorneys will advise you to plead not guilty at arraignment.</li>
        <li><strong>Guilty:</strong> A guilty plea at arraignment means you are accepting the charges and the judge may sentence you immediately or set a sentencing date. You should generally not plead guilty at arraignment without first consulting an attorney.</li>
        <li><strong>No Contest (Nolo Contendere):</strong> This plea has the same practical effect as a guilty plea for criminal purposes, but the conviction cannot be used against you as an admission in a subsequent civil lawsuit.</li>
      </ul>

      <h2>Bond and Conditions of Release</h2>
      <p>The judge will also address bond (bail) at the arraignment. For many misdemeanor offenses, you may be released on your own recognizance (OR bond), meaning you promise to return for future court dates without posting money. For more serious charges, the judge may set a cash bond, surety bond, or a combination. The judge will also set conditions of release, which may include no-contact orders, drug and alcohol testing, travel restrictions, or electronic monitoring.</p>

      <h2>What Comes After the Arraignment</h2>
      <p>After entering a not guilty plea, your case will be set for a pretrial conference. This is a meeting between the defense attorney and the prosecutor to discuss the evidence, potential plea negotiations, and whether the case might resolve without a trial. Most cases involve multiple pretrial dates before any trial is scheduled.</p>
      <p>During this period, your attorney will request discovery — the evidence the prosecution intends to use against you, including police reports, witness statements, body camera footage, and laboratory results. Reviewing this evidence is critical to building a defense strategy and identifying weaknesses in the prosecution's case.</p>

      <h2>Should You Hire an Attorney Before the Arraignment?</h2>
      <p>Ideally, yes. Having an attorney at your arraignment ensures that you enter the correct plea, that your bond conditions are fair, and that no rights are waived inadvertently. In some courts, particularly municipal courts handling high-volume misdemeanor dockets, arraignments move quickly and there is limited time to ask questions or raise concerns. An attorney who is familiar with the specific court and its judges can advocate for favorable bond conditions and set the tone for the rest of your case.</p>

      <p>If you are facing criminal charges and have an upcoming arraignment in any Ohio court, Jwayyed Law LLC can represent you from the very first hearing and guide you through every stage of the process.</p>
    `,
  },
  {
    slug: 'ohio-slip-and-fall-laws-property-owners',
    title: 'Ohio Slip and Fall Laws: What Property Owners Owe You',
    excerpt: 'Slip and fall injuries can result in significant medical bills and lost wages. Understand Ohio\'s premises liability rules and what you need to prove to recover damages.',
    category: 'Personal Injury',
    author: 'Jwayyed Law LLC',
    date: '2025-12-30',
    featured: false,
    image: '/assets/personalinjury-blog2-jpg.jpg',
    gradient: 'from-[#2d3436] via-[#b87333]/20 to-[#1a1a2e]',
    content: `
      <p>Slip and fall accidents may sound minor, but they can cause devastating injuries — broken bones, head trauma, herniated discs, and torn ligaments that require surgery and months of rehabilitation. In Ohio, property owners have a legal duty to maintain their premises in a reasonably safe condition. When they fail to do so, and someone is injured as a result, the property owner may be held liable under Ohio's premises liability laws.</p>

      <h2>The Duty of Care in Ohio</h2>
      <p>Ohio law distinguishes between three categories of people who enter a property, and the duty of care owed by the property owner depends on which category applies:</p>
      <ul>
        <li><strong>Invitees:</strong> People who enter the property for a business purpose, such as customers in a store or patients in a medical office. Property owners owe invitees the highest duty of care — they must regularly inspect the premises, discover hazards, and either fix them or provide adequate warning.</li>
        <li><strong>Licensees:</strong> Social guests and others who enter with the owner's permission for their own purposes. Property owners must warn licensees of known hidden dangers but are not required to actively inspect for hazards.</li>
        <li><strong>Trespassers:</strong> People who enter without permission. Property owners generally owe trespassers no duty of care, with narrow exceptions for child trespassers under the attractive nuisance doctrine.</li>
      </ul>

      <h2>What You Must Prove</h2>
      <p>To succeed in a slip and fall claim in Ohio, you generally need to establish four elements:</p>
      <ul>
        <li><strong>Duty:</strong> The property owner owed you a duty of care based on your status (invitee, licensee, or trespasser).</li>
        <li><strong>Breach:</strong> The property owner failed to meet that duty by allowing a dangerous condition to exist. This could be a wet floor without warning signs, an uneven sidewalk, ice on a walkway, poor lighting in a stairwell, or torn carpeting.</li>
        <li><strong>Causation:</strong> The dangerous condition directly caused your fall and your injuries. This is where medical records connecting your injuries to the specific incident become critical.</li>
        <li><strong>Damages:</strong> You suffered actual damages — medical bills, lost wages, pain and suffering, or diminished quality of life.</li>
      </ul>

      <h2>The "Open and Obvious" Defense</h2>
      <p>Ohio courts have long recognized the "open and obvious" doctrine, which can bar recovery if the hazard that caused your fall was so apparent that a reasonable person would have noticed it and avoided it. For example, a large pothole in a well-lit parking lot might be considered open and obvious. However, this defense is not absolute. Courts consider factors such as whether the injured person was distracted by something the property owner controlled, whether the hazard was in an expected walking path, and whether attendant circumstances made the hazard less noticeable than it might otherwise have been.</p>

      <h2>Comparative Negligence in Ohio</h2>
      <p>Ohio follows a modified comparative negligence rule under Ohio Revised Code Section 2315.33. If you are partially at fault for your fall — for example, you were looking at your phone while walking — your damages will be reduced by your percentage of fault. However, if you are found to be 51% or more at fault, you are barred from recovering any damages at all. This makes it important to document the hazardous condition and demonstrate that the property owner's negligence was the primary cause of your injury.</p>

      <h2>Ohio's Statute of Limitations</h2>
      <p>You have two years from the date of your slip and fall to file a personal injury lawsuit in Ohio. If you miss this deadline, the court will almost certainly dismiss your case regardless of its merits. This two-year clock makes it important to consult with an attorney promptly after an incident.</p>

      <h2>Steps to Protect Your Claim</h2>
      <p>If you have been injured in a slip and fall, take these steps: report the incident to the property owner or manager immediately and request a copy of the incident report. Photograph the hazardous condition before it is cleaned up or repaired. Get contact information from any witnesses. Seek medical treatment right away, even if your injuries seem minor initially. Keep all medical records and bills organized.</p>

      <p>If you have been injured in a slip and fall accident in Ohio, Jwayyed Law LLC can evaluate your claim, determine who may be liable, and help you pursue full and fair compensation for your injuries.</p>
    `,
  },
  {
    slug: 'protecting-rights-during-traffic-stop-ohio',
    title: 'Protecting Your Rights During a Traffic Stop in Ohio',
    excerpt: 'A routine traffic stop can escalate quickly if you do not understand your rights. Learn what officers can and cannot do during a stop, and how to protect yourself legally.',
    category: 'Criminal Defense',
    author: 'Jwayyed Law LLC',
    date: '2025-12-23',
    featured: false,
    image: '/assets/criminallaw-blog3.jpg',
    gradient: 'from-[#1a1a2e] to-[#2d3436]/80',
    content: `
      <p>Traffic stops are the most common interaction between citizens and law enforcement. While most stops are routine and resolve quickly, they can also lead to searches, arrests, and criminal charges. Understanding your rights during a traffic stop in Ohio can help you protect yourself legally while staying safe.</p>

      <h2>Why You Were Pulled Over</h2>
      <p>An officer must have reasonable suspicion of a traffic violation or criminal activity to initiate a traffic stop. Common reasons include speeding, running a red light or stop sign, a broken tail light, expired registration, an improper lane change, or erratic driving that suggests impairment. If the officer did not have a valid reason for the stop, any evidence obtained as a result may be suppressed in court under the exclusionary rule. This is why documenting the circumstances of your stop is important.</p>

      <h2>What You Are Required to Do</h2>
      <p>Ohio law requires you to provide your driver's license, vehicle registration, and proof of insurance when requested by an officer during a traffic stop. You are also required to step out of the vehicle if the officer orders you to do so — the U.S. Supreme Court established this in Pennsylvania v. Mimms and Maryland v. Wilson. Refusing to exit the vehicle when ordered can result in additional charges.</p>

      <h2>What You Are Not Required to Do</h2>
      <p>You have the right to remain silent beyond providing your identification documents. You do not have to answer questions about where you are going, where you have been, whether you have been drinking, or whether there is anything illegal in your vehicle. You can politely decline to answer by saying, "I am choosing to exercise my right to remain silent." You also have the right to refuse consent to a search of your vehicle.</p>

      <h2>Vehicle Searches and the Fourth Amendment</h2>
      <p>The Fourth Amendment protects you from unreasonable searches and seizures. During a traffic stop, an officer can search your vehicle without a warrant in certain circumstances:</p>
      <ul>
        <li><strong>Consent:</strong> If you voluntarily agree to a search, the officer does not need any other justification. You can and should politely decline by saying, "I do not consent to a search."</li>
        <li><strong>Plain view:</strong> If contraband or evidence of a crime is visible in plain sight from outside the vehicle, the officer can seize it and search further.</li>
        <li><strong>Probable cause:</strong> If the officer has probable cause to believe the vehicle contains evidence of a crime — such as the smell of marijuana or visible drug paraphernalia — they can search without your consent.</li>
        <li><strong>Search incident to arrest:</strong> If you are arrested, the officer can search the area within your immediate reach inside the vehicle.</li>
        <li><strong>Inventory search:</strong> If your vehicle is impounded, law enforcement can conduct an inventory search of its contents as a matter of policy.</li>
      </ul>

      <h2>The Duration of the Stop</h2>
      <p>A traffic stop should last only as long as necessary to address the reason for the stop. The U.S. Supreme Court ruled in Rodriguez v. United States (2015) that officers cannot extend a traffic stop beyond its original purpose without reasonable suspicion of additional criminal activity. If an officer detains you for an extended period to wait for a drug-sniffing dog, for example, that extension may be unconstitutional unless the officer has independent reasonable suspicion.</p>

      <h2>Recording the Stop</h2>
      <p>Ohio is a one-party consent state for recordings. You have the right to record your interaction with police during a traffic stop, as long as you do not physically interfere with the officer's duties. If you choose to record, hold your phone in a visible location and inform the officer that you are recording. Many officers also have body cameras and dash cameras that record the encounter from their perspective.</p>

      <h2>If You Receive a Citation</h2>
      <p>Signing a traffic citation is not an admission of guilt — it is simply an acknowledgment that you received the citation and a promise to appear in court or respond by the date listed. Refusing to sign the citation can result in arrest. If you believe the citation was issued unfairly, the appropriate place to contest it is in court, not on the side of the road.</p>

      <h2>When to Contact an Attorney</h2>
      <p>If a traffic stop results in a search, seizure of your property, an arrest, or criminal charges, contact an attorney as soon as possible. An attorney can review whether the stop was legally justified, whether any search was conducted properly, and whether your rights were respected throughout the encounter.</p>

      <p>If you are facing charges arising from a traffic stop in Ohio, Jwayyed Law LLC can review the details of your stop and help protect your constitutional rights.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      if (a.category === category && b.category !== category) return -1;
      if (b.category === category && a.category !== category) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: Category): BlogPost[] {
  if (category === 'All Articles') return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}
