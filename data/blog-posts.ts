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
  'Civil Litigation',
  'Business Law',
  'Estate Planning',
  'Trusts',
  'Ohio Courts',
] as const;

export type Category = (typeof categories)[number];

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-to-do-pulled-over-ovi-ohio',
    title: 'What to Do If You\'re Pulled Over for OVI in Ohio',
    excerpt: 'What you must hand over, what you can decline, and the 30-day ALS deadline that starts at arrest if you are stopped for OVI in Ohio.',
    category: 'OVI/DUI',
    author: 'Jwayyed Jwayyed',
    date: '2026-02-10',
    featured: true,
    image: '/assets/dui-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>An OVI stop is stressful, especially if you have had anything to drink. The lights, the officer at the window and the questions about where you have been all come at once. What you do in the next few minutes can shape your case for months or years. Ohio treats Operating a Vehicle Impaired (OVI) seriously, but you still have rights and choices during the stop. This article walks through an OVI stop in Ohio step by step and points out the decisions that matter most.</p>

      <h2>Pull over safely and stay calm</h2>
      <p>Once you see the lights, signal, slow down gradually and stop on the right side of the road away from traffic. Turn off the engine, switch on the interior light if it is dark, and keep your hands on the steering wheel. Do not reach for documents or your phone until the officer asks. Officers note how you drive before they reach the window, and the dash camera is probably already recording, so avoid sudden lane changes, hard braking or any movement that could look threatening or evasive.</p>
      <p>If you are on a busy road and feel unsafe, you can drive slowly to a nearby well-lit public place, such as a police station or a busy gas station. This is legal in Ohio; explain it to the officer when they approach. Stay in the vehicle unless the officer tells you to get out, keep your documents within reach, and stay as calm as you can.</p>

      <h2>Be polite, but know what you must provide</h2>
      <p>Ohio law requires you to hand over your driver&apos;s license, vehicle registration and proof of insurance when asked. Give them over without argument. Beyond those three documents, you have the right to remain silent. You do not have to say where you have been, how much you have had to drink, or whether there is alcohol in the vehicle.</p>
      <p>A polite way to say it: &quot;I would prefer not to answer questions without my attorney present.&quot; That is a lawful exercise of a constitutional right. Many people think they have to answer. They do not, and answering can hurt your case, because anything you say can be used against you. Even &quot;I had one beer&quot; establishes that you drank alcohol.</p>

      <h2>Field sobriety tests are voluntary</h2>
      <p>Ohio officers often ask for Standardized Field Sobriety Tests (SFSTs): the walk-and-turn, the one-leg stand and horizontal gaze nystagmus. These tests are <strong>completely voluntary</strong>. You can decline them, and declining does not trigger an automatic license suspension the way refusing a chemical test does.</p>
      <p>You may still be arrested if the officer has probable cause from other observations, such as an odor of alcohol, slurred speech or bloodshot eyes. Declining takes away one piece of evidence the prosecutor could use, and it means you cannot perform poorly because of fatigue, nerves or a medical condition. Scoring the tests is subjective, and sober people can &quot;fail&quot; them.</p>

      <h2>Chemical tests and Ohio&apos;s implied consent law</h2>
      <p>Here the rules change. Ohio has an implied consent statute, <a href="https://codes.ohio.gov/ohio-revised-code/section-4511.191" target="_blank" rel="noopener noreferrer">Ohio Revised Code 4511.191</a>. By driving on Ohio roads, you have agreed to a chemical test (breath, blood or urine) if you are lawfully arrested for OVI.</p>
      <p>Refusing a chemical test after arrest triggers an automatic Administrative License Suspension: one year for a first refusal, two years for a second, and three years for a third within ten years. The refusal can also be used as evidence against you at trial. On the other side, the prosecution will not have a BAC result. Your attorney can weigh both for your situation.</p>
      <p>If you consent, be specific: &quot;I consent to a breath test&quot; or &quot;I consent to a blood test.&quot;</p>

      <h2>What happens after an arrest</h2>
      <p>You will be taken to the station for booking and a chemical test, and you will receive paperwork about your Administrative License Suspension. You have <strong>30 days from the date of arrest</strong> to request an ALS hearing. The deadline is strict. Miss it and the suspension becomes automatic, whatever happens in the criminal case.</p>
      <p>The ALS runs separately from the criminal case. Even if the charges are dismissed, you can still lose your license if you did not request the hearing in time, so speak to an attorney right away.</p>

      <h2>Write down everything you remember</h2>
      <p>As soon as you are released, write it all down: the time and place of the stop, the officer&apos;s name and badge number, the reason they gave for stopping you, which tests you agreed to, road and weather conditions, any witnesses, and whether you saw body or dash cameras. These details fade fast and can matter to your defense. Your attorney can request the video.</p>

      <h2>Contact an attorney right away</h2>
      <p>An <a href="/ovi-dui-defense">OVI attorney</a> can review whether the stop was legal, how the field sobriety tests were given, the breath machine&apos;s calibration records, and whether your constitutional rights were respected. There are possible defenses at each of these stages, and the earlier a lawyer is involved, the more of them are still open.</p>

      <h2>If this is your first OVI</h2>
      <p>A first OVI can leave you unsure what to expect. Many first-time defendants receive alternatives to jail, such as the Driver Intervention Program or probation, especially when an attorney argues for them. Our <a href="/our-law-firm/case-results">case results</a> page shows outcomes from past cases.</p>

      <p>If you have been stopped or charged with OVI in Ohio, Jwayyed Law LLC can review your case and explain your options. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'ohio-castle-doctrine-self-defense-laws',
    title: 'Ohio\'s Castle Doctrine and Self-Defense Laws',
    excerpt: 'Where Ohio\'s Castle Doctrine applies, where it does not, and what Senate Bill 175 changed when Stand Your Ground took effect in April 2021.',
    category: 'Criminal Defense',
    author: 'Jwayyed Jwayyed',
    date: '2026-02-03',
    featured: true,
    image: '/assets/criminallaw-blog2.jpg',
    gradient: 'from-[#2d3436] via-[#1a1a2e] to-[#b87333]/50',
    content: `
      <p>Ohio recognizes your right to protect yourself, your family and your property from threats. Its self-defense laws have changed a great deal in recent years, most notably with Senate Bill 175, which brought Stand Your Ground protections statewide. Using force, even in self-defense, can have serious consequences, so it helps to know where you stand before you ever face that situation.</p>

      <h2>What is the Castle Doctrine?</h2>
      <p>The Castle Doctrine rests on the idea that your home is your castle, a place where you should not have to retreat from a threat. In Ohio it is codified in <a href="https://codes.ohio.gov/ohio-revised-code/section-2901.05" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2901.05</a> and Section 2901.09. If someone unlawfully enters or tries to enter your residence, you are presumed to have a reasonable fear of imminent death or great bodily harm. That presumption can justify deadly force without a duty to retreat, and it can be a complete defense to criminal charges.</p>
      <p>The protection also covers your occupied vehicle. If someone tries to forcibly and unlawfully remove you from your car, the same presumption of reasonable fear applies, and the prosecutor then has to disprove your claim beyond a reasonable doubt.</p>

      <h2>Ohio&apos;s Stand Your Ground law</h2>
      <p>Before April 2021, Ohio required you to retreat before using deadly force outside your home if you could do so safely. Senate Bill 175 removed that duty to retreat in any place where you have a lawful right to be. If you are legally in a parking lot, on a public sidewalk, at a friend&apos;s home or at work, you do not have to retreat before defending yourself with proportional force.</p>
      <p>Stand Your Ground did not change the basic requirements of self-defense. You must still reasonably believe that deadly force is necessary to prevent death or great bodily harm. The law does not allow force where a reasonable person would not feel threatened. Using a firearm in response to a verbal argument, for example, would almost certainly fail the legal standard.</p>

      <h2>What a valid self-defense claim requires</h2>
      <p>Whether you rely on the Castle Doctrine or Stand Your Ground, Ohio law requires several elements:</p>
      <ul>
        <li><strong>You were not the initial aggressor.</strong> If you started or escalated the confrontation, self-defense protections usually do not apply. If you first used non-deadly force and the other person escalated to deadly force, you may still be able to claim self-defense.</li>
        <li><strong>You reasonably believed the danger was imminent.</strong> The threat must be immediate, not hypothetical.</li>
        <li><strong>The force you used was proportional.</strong> Deadly force is justified only against a threat of death or serious bodily harm. Shooting someone over a punch would likely fail this test, unless you reasonably believed they could kill or seriously injure you.</li>
        <li><strong>You were somewhere you had a legal right to be.</strong> Trespassers generally cannot claim Stand Your Ground protections.</li>
      </ul>

      <h2>Where the Castle Doctrine does not apply</h2>
      <p>The main exceptions: (1) If the person entering is a lawful resident or co-tenant, such as a spouse, roommate or adult child who lives with you, the presumption does not automatically apply. (2) If you are engaged in illegal activity at the time, the protections may not be available. (3) Law enforcement officers executing a lawful warrant or performing official duties are excluded; the Castle Doctrine does not justify attacking them. (4) Visitors and guests you invited in are generally judged differently from home invaders.</p>

      <h2>The burden of proof and recent changes</h2>
      <p>Before 2019, Ohio was one of the few states where the defendant had to prove self-defense by a preponderance of the evidence. <a href="https://codes.ohio.gov/ohio-revised-code/section-2901.05" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2901.05</a> now puts the burden on the prosecution. Once you present enough evidence to raise self-defense, the prosecution must prove beyond a reasonable doubt that your actions were not justified.</p>

      <h2>When to talk to a lawyer</h2>
      <p>Even clear self-defense situations can lead to charges. Prosecutors may question whether the threat was imminent, whether the force was reasonable, whether you could have avoided the confrontation, or whether you started it. If you have used force in self-defense, contact an attorney before you speak with investigators. Statements made in shock can be taken out of context and used against you.</p>

      <p>If you are facing charges related to the use of force in Ohio, Jwayyed Law LLC can review the facts and build a defense under Ohio&apos;s self-defense statutes. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'steps-after-car-accident-ohio',
    title: 'Steps to Take After a Car Accident in Ohio',
    excerpt: 'What to do at the scene, at the doctor and with insurers after a car accident in Ohio, and the two-year deadline to file an injury lawsuit.',
    category: 'Personal Injury',
    author: 'Jwayyed Jwayyed',
    date: '2026-01-27',
    featured: false,
    image: '/assets/personalinjury-blog.jpg',
    gradient: 'from-[#1a1a2e] to-[#2d6a4f]/50',
    content: `
      <p>A car accident takes seconds, but the aftermath can last months or years. If you were rear-ended on I-70, caught in a multi-vehicle collision on I-71 or hit in a residential neighborhood, the steps you take right afterward affect your ability to recover compensation for injuries, vehicle damage, lost wages and other losses. Many people focus on getting the car repaired and skip steps that a personal injury claim depends on.</p>

      <h2>1. Check for injuries and move to safety</h2>
      <p>Safety comes first. Check yourself, your passengers and anyone else involved. Symptoms that seem minor, like a headache, slight neck stiffness or chest soreness, can signal a concussion, whiplash or internal bleeding. If anyone is hurt, call 911.</p>
      <p>If your vehicle can be driven and it is safe, move it out of the traffic lanes and turn on your hazard lights. If it cannot be moved safely, stay inside with your seatbelt on and wait for emergency services. Ohio law requires drivers involved in an accident to stop at the scene, so do not leave, but do get out of immediate danger.</p>

      <h2>2. Call law enforcement</h2>
      <p>Under <a href="https://codes.ohio.gov/ohio-revised-code/section-4509.06" target="_blank" rel="noopener noreferrer">Ohio Revised Code 4509.06</a>, you must file an accident report if the crash involves injury, death or property damage over $1,000. The responding officer will usually write a crash report at the scene, and that report becomes key evidence for an insurance claim or lawsuit. Before the officer leaves, get their name and the report number, and ask how to get a copy of the full report.</p>

      <h2>3. Exchange information with the other driver</h2>
      <p>Get the other driver&apos;s full name, address, phone number, driver&apos;s license number and expiration date, insurance company, policy number and license plate number, plus the names of any passengers. Write it down on the spot rather than relying on memory, and photograph the other driver&apos;s license and insurance card if you can.</p>
      <p>Be polite but do not discuss fault. Even &quot;I&apos;m sorry&quot; can be used against you later. Do not say &quot;I did not see you&quot; or &quot;I was not paying attention.&quot; Keep to the facts. If the other driver is hostile, do not engage; get back in your vehicle and wait for police.</p>

      <h2>4. Document the scene</h2>
      <p>Use your phone to photograph and film everything: damage to every vehicle (wide shots and close-ups), road conditions, traffic signs, skid marks, debris, the weather and any visible injuries. Capture where the vehicles ended up. Ask witnesses for their names and contact information, and note the time of day, the traffic level and anything else that may have contributed to the crash.</p>

      <h2>5. See a doctor promptly</h2>
      <p>Even if you feel fine, see a doctor within 24 to 48 hours. Whiplash, concussions, internal bleeding and herniated discs often show no symptoms at first, and adrenaline masks pain. A medical record that links your injuries to the accident makes your claim stronger, and insurers routinely argue that delayed treatment means the collision did not cause the injury. Write down what you tell the doctor, because it goes into their records.</p>

      <h2>6. Notify your insurance company</h2>
      <p>Report the accident to your insurer as soon as reasonably possible. Give the basics: date, time, location, the other drivers&apos; names and contact details, and the officer&apos;s name and report number. Do not give a detailed account of how the accident happened. <strong>Do not give a recorded statement to the other driver&apos;s insurance company without first talking to an attorney.</strong> If they call, say: &quot;I am consulting with an attorney about this matter and will have my attorney contact you.&quot;</p>

      <h2>7. Keep records of everything</h2>
      <p>Start a file for the police report, medical bills, prescription receipts, repair estimates, rental car receipts and letters from insurers. Keep a written log of how your injuries affect daily life: missed workdays, exercise you cannot do, trouble sleeping, pain levels and mood changes. Keep receipts for every accident-related expense.</p>

      <h2>8. Be careful on social media</h2>
      <p>Insurers and defense attorneys check social media. A photo of you at a family gathering can be used to argue that your injuries are less severe than you say. Post less while your case is pending, and set your accounts to private if you can.</p>

      <h2>9. Know Ohio&apos;s statute of limitations</h2>
      <p>Under <a href="https://codes.ohio.gov/ohio-revised-code/section-2305.10" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2305.10</a>, you have two years from the date of the accident to file a personal injury lawsuit. The deadline for property damage is also two years. Building a case takes months, so contact an attorney within weeks or months of the accident, not a few weeks before the deadline.</p>

      <h2>10. Talk to a personal injury attorney</h2>
      <p>An attorney can assess whether the other driver was at fault, calculate the full value of your claim including future medical costs and lost earning capacity, negotiate with the insurers, and take the case to trial if a fair settlement is not offered. Many personal injury attorneys work on a contingency fee basis.</p>

      <h2>Tip for accident victims</h2>
      <p>Even if your injuries seem minor, see a doctor within 24 to 48 hours. Adrenaline can mask pain, and insurers use gaps in treatment to argue the injury was not serious.</p>

      <p>If you were injured in a car accident in Ohio, Jwayyed Law LLC can explain your options and pursue the compensation the facts support. Our <a href="/our-law-firm/case-results">case results</a> page shows past settlements. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm works on a contingency fee basis.</p>
    `,
  },
  {
    slug: 'ohio-new-expungement-laws-clear-record',
    title: 'How Ohio\'s New Expungement Laws Could Clear Your Record',
    excerpt: 'Ohio has widened who can seal a criminal record. See which convictions qualify, the waiting periods, and what still cannot be sealed under the updated law.',
    category: 'Criminal Defense',
    author: 'Jwayyed Jwayyed',
    date: '2026-01-20',
    featured: false,
    image: '/assets/criminallaws-blog.jpg',
    gradient: 'from-[#2d3436] to-[#1a1a2e]',
    content: `
      <p>A criminal record can follow you long after you have served your sentence, paid your fines and moved on. Many employers reject applicants with a record. Landlords run background checks and often turn down people with convictions. A record can block professional licenses in teaching, nursing, social work and the trades, and it can affect custody decisions in family court and access to education.</p>
      <p>Ohio has responded. Recent changes to the state&apos;s expungement and record-sealing laws have widened eligibility, so many more people can now ask for a fresh start. If you have a record, you may qualify even if you were once told you did not.</p>

      <h2>What is expungement in Ohio?</h2>
      <p>In Ohio, &quot;expungement&quot; is often used to mean &quot;record sealing,&quot; although the statute provides for sealing rather than destroying records. When your record is sealed under <a href="https://codes.ohio.gov/ohio-revised-code/section-2953.32" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2953.32</a>, the conviction is removed from public background check databases. A standard background check by an employer or landlord will not show it, and most employers, landlords and members of the public cannot access it.</p>
      <p>There are exceptions. Law enforcement can still access sealed records in certain circumstances. Prosecutors can use them for charging decisions, and courts can use them at sentencing in a future case. Some licensing agencies, particularly in healthcare and childcare, can sometimes see them. For everyday purposes, though, a sealed record is out of public view and will not appear on a standard background check.</p>

      <h2>Who is newly eligible</h2>
      <p>Recent legislation has broadened eligibility in several ways:</p>
      <ul>
        <li><strong>More convictions can be sealed.</strong> You can now apply to seal up to two felony convictions, four misdemeanor convictions, or a combination of two felonies and four misdemeanors. The old limits were much tighter.</li>
        <li><strong>Certain fourth- and fifth-degree felonies are now eligible.</strong> Many non-violent felonies that used to be excluded, including certain drug offenses and property crimes, can now be sealed.</li>
        <li><strong>Waiting periods are shorter.</strong> For eligible misdemeanors, you wait one year after completing your sentence. For eligible felonies, the wait is typically three years after you complete your sentence and all supervision.</li>
        <li><strong>Some previously excluded offenses now qualify.</strong> Certain theft offenses and minor drug charges that were once categorically excluded can now be sealed.</li>
      </ul>

      <h2>What cannot be expunged</h2>
      <p>Some convictions still cannot be sealed in Ohio:</p>
      <ul>
        <li>First- and second-degree felonies (with limited exceptions)</li>
        <li>Convictions involving violence against a minor</li>
        <li>Most sex offenses that require sex offender registration</li>
        <li>Offenses that carry a mandatory prison term</li>
        <li>Many domestic violence convictions</li>
        <li>OVI/DUI convictions, which are specifically excluded under <a href="https://codes.ohio.gov/ohio-revised-code/section-2953.36" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2953.36</a> and generally cannot be expunged. If your OVI charge was dismissed or you were acquitted, that record can be sealed.</li>
      </ul>
      <p>Not guilty findings, dismissed charges and cases where a grand jury returned no bill can generally be sealed whatever the offense, without waiting periods or the other restrictions.</p>

      <h2>The expungement process</h2>
      <p>You file an application with the court that handled your original case. It needs your case number, the charges you want sealed, and proof that you have completed your sentence and any supervision, such as probation or parole.</p>
      <p>The filing fee typically ranges from $50 to $150, depending on the court. Some courts waive it for applicants who cannot afford to pay.</p>
      <p>After you file, the prosecutor has 30 days to object. If there is no objection, the judge may grant the application without a hearing. If the prosecutor objects, the court schedules a hearing where both sides argue to the judge. The judge weighs your criminal history, the nature of the offense, your rehabilitation and the community&apos;s interest in keeping the records public.</p>

      <h2>How a sealed record affects your life</h2>
      <p>Once your record is sealed, you can legally answer &quot;no&quot; on most job applications that ask whether you have been convicted of a crime, and most standard background checks will not show the conviction. Some situations still call for disclosure: certain professional licensing applications, background checks for jobs in sensitive fields, and questions asked under oath. Most landlords will not see a sealed conviction on a standard check. Licensing boards for fields such as nursing, teaching and law may ask about sealed convictions, so talk to an attorney about your specific situation.</p>

      <h2>Why a lawyer helps</h2>
      <p>An attorney makes sure the paperwork is complete, the deadlines are met and your case is presented clearly to the court. If the prosecutor objects, your attorney can argue at the hearing and present evidence of rehabilitation, such as employment records, character letters and treatment completion certificates. Knowing the judge and the local prosecutor&apos;s office helps too. Errors or missing documents can delay or derail the application.</p>

      <h2>If you were told no before</h2>
      <p>If you were told years ago that your record could not be expunged, the law has changed and many more people qualify now, so it is worth having an attorney check your eligibility again. Our <a href="/our-law-firm/case-results">case results</a> page includes past expungements.</p>

      <p>If your record may be eligible for sealing under Ohio&apos;s updated laws, Jwayyed Law LLC can check your eligibility and handle the application from filing to hearing. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm handles expungement petitions in all Ohio counties.</p>
    `,
  },
  {
    slug: 'starting-business-ohio-llc-vs-corporation',
    title: 'Starting a Business in Ohio: LLC vs. Corporation',
    excerpt: 'How an Ohio LLC and a corporation differ on taxes, liability, formalities and raising money, and which kinds of businesses tend to suit each.',
    category: 'Business Law',
    author: 'Jwayyed Jwayyed',
    date: '2026-01-13',
    featured: false,
    image: '/assets/businesslaw-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#b87333]/30 to-[#2d3436]',
    content: `
      <p>One of the first choices you make when starting a business in Ohio is the entity structure. It decides how you are taxed, how much personal liability protection you have, how much compliance work you take on, and how easily you can change the structure later. The two most common options are a Limited Liability Company (LLC) and a corporation. Both protect their owners from liability, but they are taxed, managed and regulated differently. Sorting this out before you file with the Ohio Secretary of State saves time and money. Many owners pick the wrong structure at first and face tax consequences or operating problems later.</p>

      <h2>Limited liability companies (LLCs) in Ohio</h2>
      <p>An LLC combines the liability protection of a corporation with the tax simplicity of a sole proprietorship or partnership. Forming one creates a separate legal entity for your business. Ohio LLCs are governed by <a href="https://codes.ohio.gov/ohio-revised-code/chapter-1706" target="_blank" rel="noopener noreferrer">Ohio Revised Code Chapter 1706</a>, the Ohio Revised Uniform Limited Liability Company Act.</p>
      <p><strong>Key features of an Ohio LLC:</strong></p>
      <ul>
        <li><strong>Pass-through taxation.</strong> By default, an LLC is not taxed at the entity level. Profits and losses pass through to the members&apos; personal tax returns, which avoids the &quot;double taxation&quot; that can apply to corporations.</li>
        <li><strong>Management flexibility.</strong> An LLC can be member-managed or manager-managed, and the operating agreement can be written to fit the business. Annual meetings, a board of directors and corporate minutes are not required.</li>
        <li><strong>Fewer formalities.</strong> Ohio LLCs have fewer ongoing compliance requirements than corporations. The operating agreement can be as detailed or as simple as you like, and it can set different profit shares, different voting rights and procedures for adding or removing members.</li>
        <li><strong>Formation cost.</strong> Filing Articles of Organization costs $99 as of 2026. The biennial report is currently free.</li>
        <li><strong>Liability protection.</strong> Your personal assets are generally shielded from business debts and lawsuits. If you personally guarantee a loan or commit fraud, creditors can still pursue your personal assets.</li>
      </ul>

      <h2>Corporations in Ohio</h2>
      <p>A corporation is a more formal structure that is a legal entity separate from its owners (shareholders). Ohio corporations are governed by Ohio Revised Code Chapter 1701, the Ohio General Corporation Law.</p>
      <p><strong>Key features of an Ohio corporation:</strong></p>
      <ul>
        <li><strong>Tax options.</strong> A C-Corporation is taxed at the entity level, and shareholders are taxed again on dividends (double taxation). A corporation can elect S-Corporation status with the IRS to get pass-through taxation if it meets the eligibility rules (for example, no more than 100 shareholders, all U.S. citizens or residents, and one class of stock).</li>
        <li><strong>Ownership through stock.</strong> Corporations issue shares, which makes it simple to transfer ownership, bring in investors or give employees equity.</li>
        <li><strong>Formal governance.</strong> A corporation must have a board of directors, hold annual meetings, keep minutes and follow its bylaws. That formality can help larger businesses and those seeking outside investment, because investors are often more comfortable with a corporation.</li>
        <li><strong>Formation cost.</strong> Filing Articles of Incorporation costs $99 as of 2026. Ongoing compliance costs are usually higher than for an LLC.</li>
      </ul>

      <h2>Key differences to consider</h2>
      <p><strong>Taxation:</strong> For most small businesses, an LLC&apos;s pass-through taxation is simpler and avoids double taxation. If you expect fast growth or a future sale, a C-Corporation&apos;s flat tax rate may be an advantage. An S-Corporation election gives you pass-through taxation but limits who can own the company.</p>
      <p><strong>Raising capital:</strong> If you plan to seek venture capital or go public, investors expect a corporation. Most institutional investors prefer it.</p>
      <p><strong>Operational flexibility:</strong> An LLC gives you more freedom in how you set up management, profit distribution and decision-making. A corporation has to follow formal governance procedures whatever its size.</p>
      <p><strong>Self-employment taxes:</strong> LLC members who actively work in the business generally pay self-employment tax on their share of profits. S-Corporation shareholders who work in the business must pay themselves a reasonable salary (subject to payroll taxes) but can take further profits as distributions that are not subject to self-employment tax. For some businesses the savings are significant.</p>

      <h2>Which is right for your business?</h2>
      <p>It depends on the business. A solo consultant or small service business often does best with an LLC&apos;s simplicity. A tech startup seeking outside investment may need a corporation. A growing business with several owners and solid profits might benefit from an S-Corporation election. Look at where you are now (how many owners, plans for investment, expected profit) and where you expect to be (how you plan to grow and when you might bring in new owners or investors).</p>

      <p>If you are starting a business in Ohio and need help choosing an entity, Jwayyed Law LLC can compare the options with you and handle the formation. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm handles <a href="/business">business law</a> matters in all Ohio counties.</p>
    `,
  },
  {
    slug: 'what-to-expect-first-court-appearance-ohio',
    title: 'What to Expect at Your First Court Appearance in Ohio',
    excerpt: 'What happens at an Ohio arraignment, how to prepare, which plea to consider, and how the judge decides bond and conditions of release.',
    category: 'Ohio Courts',
    author: 'Jwayyed Jwayyed',
    date: '2026-01-06',
    featured: false,
    image: '/assets/courthouse-blog.jpg',
    gradient: 'from-[#2d6a4f]/40 via-[#1a1a2e] to-[#2d3436]',
    content: `
      <p>If you have been charged with a crime in Ohio, your first court appearance, usually called an arraignment, is probably weighing on you. You may be wondering what will happen, what you will be asked, whether you will be arrested again, whether you will have to post bail, what to say, and whether you need a lawyer there. Knowing what to expect helps you make better decisions in a hearing that moves faster than most people expect. Many people are caught off guard by the pace and make choices they later regret.</p>

      <h2>What is an arraignment?</h2>
      <p>An arraignment is a formal hearing where the charges are read, you are told your constitutional rights, and you are asked to enter a plea. In Ohio, misdemeanor arraignments usually happen within a few days of the arrest or citation. Felony arraignments may come after a grand jury returns an indictment. It is your first official appearance before a judge, whose job at this stage is to explain your rights, answer immediate questions and set bail if needed. Guilt or innocence is usually not decided here; that comes later at trial or through negotiation.</p>

      <h2>Before you arrive at court</h2>
      <p>Dress at least business casual. Skip graphic t-shirts, ripped jeans and hats; the judge is forming an impression of you, and your clothes show respect for the court. Arrive early to get through security, find the right courtroom and check in with the clerk. Bring your citation or arrest paperwork and valid identification, and turn off your phone before you enter, because many Ohio courts will confiscate a phone or hold you in contempt if it rings. You can bring a notebook and pen, but ask the judge&apos;s permission before writing.</p>

      <h2>What happens during the arraignment</h2>
      <p>The judge calls your case, reads the charges, explains the possible penalties and tells you your constitutional rights: the right to an attorney, to a trial, to confront witnesses and to remain silent. The judge will ask whether you can afford an attorney. If you cannot, you can ask for a public defender. Then you will be asked to enter a plea.</p>

      <h2>Your plea options</h2>
      <ul>
        <li><strong>Not Guilty:</strong> The most common plea at arraignment. You are not admitting guilt, and the prosecution has to prove its case. It preserves your rights and gives you and your attorney time to review the evidence and look at options. Most attorneys advise pleading not guilty at arraignment because it buys time to hire a lawyer and negotiate with the prosecutor.</li>
        <li><strong>Guilty:</strong> You accept the charges. The judge may sentence you on the spot or set a sentencing date, and you usually cannot take the plea back. Do not plead guilty at arraignment without talking to an attorney first; negotiation may get you a better offer.</li>
        <li><strong>No Contest (Nolo Contendere):</strong> For criminal purposes this has the same practical effect as a guilty plea, but the conviction cannot be used as an admission against you in a later civil lawsuit. The judge must approve a no contest plea, and it is not always allowed.</li>
      </ul>

      <h2>Bond and conditions of release</h2>
      <p>After your plea, the judge addresses bond (bail). For many misdemeanors, especially if you have no record and ties to the community, you may be released on your own recognizance (OR bond), meaning you promise to return without posting money. For more serious charges, the judge may set a cash bond or a surety bond through a bail bondsman, who typically charges 10 to 15% of the bond amount. The judge also sets conditions of release, such as no-contact orders, drug and alcohol testing, travel restrictions or electronic monitoring. Violating them can bring new charges and revocation of your bail.</p>

      <h2>What comes after the arraignment</h2>
      <p>After a not guilty plea, the case is set for a pretrial conference, where the defense and the prosecutor discuss the evidence, plea negotiations and whether the case can be resolved without trial. Your attorney will request discovery: police reports, witness statements, body camera footage and lab results. That evidence is the basis of your defense strategy.</p>

      <h2>Should you hire an attorney before the arraignment?</h2>
      <p>Ideally, yes. An attorney at arraignment makes sure you enter the right plea, that your bond conditions are fair and workable, and that you do not waive rights by accident. In busy municipal courts, arraignments move quickly and leave little time for questions. An attorney who knows the court and its judges can argue for reasonable bond conditions and set the tone for the rest of the case. If you cannot afford an attorney, ask for a public defender at the arraignment.</p>

      <p>If you are facing criminal charges and have an arraignment coming up in any Ohio court, Jwayyed Law LLC can represent you from the first hearing through the end of the case. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'ohio-slip-and-fall-laws-property-owners',
    title: 'Ohio Slip and Fall Laws: What Property Owners Owe You',
    excerpt: 'What Ohio property owners owe visitors, the four things a slip and fall claim must prove, and how fault and the two-year deadline affect recovery.',
    category: 'Personal Injury',
    author: 'Jwayyed Jwayyed',
    date: '2025-12-30',
    featured: false,
    image: '/assets/personalinjury-blog2-jpg.jpg',
    gradient: 'from-[#2d3436] via-[#b87333]/20 to-[#1a1a2e]',
    content: `
      <p>Slip and fall accidents sound minor, but they can cause broken bones, head trauma, herniated discs and torn ligaments that need surgery and months of rehabilitation. In Ohio, property owners have a legal duty to keep their premises reasonably safe. When they fail to and someone is hurt as a result, the owner may be liable under Ohio&apos;s premises liability law.</p>

      <h2>The duty of care in Ohio</h2>
      <p>Ohio law sorts people who enter a property into three categories:</p>
      <ul>
        <li><strong>Invitees:</strong> People who enter for a business purpose or mutual benefit, such as store customers, patients at a medical office or diners at a restaurant. Owners owe invitees the highest duty of care. They must inspect the premises regularly, find hazards, and either fix them or give adequate warning. An owner who knew or should have known about a hazard and did nothing can be liable.</li>
        <li><strong>Licensees:</strong> Social guests who enter with permission for their own purposes. Owners must warn licensees of known hidden dangers but do not have to inspect for hazards.</li>
        <li><strong>Trespassers:</strong> People who enter without permission. Owners generally owe them no duty of care, with narrow exceptions for child trespassers under the attractive nuisance doctrine.</li>
      </ul>
      <p>In most slip and fall cases at a business, the injured person is an invitee.</p>

      <h2>What you must prove</h2>
      <p>A slip and fall claim in Ohio generally has to establish four elements:</p>
      <ul>
        <li><strong>Duty:</strong> The property owner owed you a duty of care based on your status.</li>
        <li><strong>Breach:</strong> The owner failed that duty by allowing a dangerous condition to exist without warning you. Examples include a wet floor with no warning sign, an uneven sidewalk, ice on a walkway, poor lighting in a stairwell, torn carpet or debris in a walking path.</li>
        <li><strong>Causation:</strong> The dangerous condition caused your fall and injuries. Medical records that connect your injuries to the incident are central here.</li>
        <li><strong>Damages:</strong> You suffered actual losses, such as medical bills, lost wages, pain and suffering, or a reduced quality of life.</li>
      </ul>

      <h2>The &quot;open and obvious&quot; defense</h2>
      <p>Ohio courts recognize the &quot;open and obvious&quot; doctrine, which can bar recovery if the hazard was so apparent that a reasonable person would have seen and avoided it. A large pothole in a well-lit parking lot might qualify. The defense has limits. Courts consider whether you were distracted (by a phone or a child, for example), whether the hazard was in an unexpected spot or in the normal walking path, whether attendant circumstances such as darkness, rain or a crowded space made it harder to notice, and whether the owner should have expected people to encounter it.</p>

      <h2>Comparative negligence in Ohio</h2>
      <p>Ohio follows a modified comparative negligence rule under <a href="https://codes.ohio.gov/ohio-revised-code/section-2315.33" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2315.33</a>. If you were partly at fault, for example because you were looking at your phone, your damages are reduced by your percentage of fault. If you are 51% or more at fault, you cannot recover anything. The property owner must be more than 50% at fault for you to recover, so document the hazard and show that the owner&apos;s negligence was the main cause of your injury.</p>

      <h2>Ohio&apos;s statute of limitations</h2>
      <p>You have two years from the date of the fall to file a personal injury lawsuit in Ohio under <a href="https://codes.ohio.gov/ohio-revised-code/section-2305.10" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2305.10</a>. If you miss it, the court will dismiss your case however strong it is. Talk to an attorney soon after the incident, because investigating, collecting medical records, finding witnesses and negotiating all take time before a suit is filed.</p>

      <h2>Steps to protect your claim</h2>
      <p>Report the incident to the owner or manager right away and ask for a copy of the incident report. Photograph the hazard before it is cleaned up, with wide shots and close-ups, and photograph your injuries. Get contact information from witnesses. Get medical treatment right away, even if the injuries seem minor, since adrenaline often masks pain. Keep your medical records and bills organized, and keep a written log of how the injury affects daily life: missed workdays, pain levels, trouble sleeping and mood changes.</p>

      <h2>Tip for slip and fall victims</h2>
      <p>Photograph the hazard before it is cleaned up, ask the manager to write an incident report and give you a copy, and get witnesses&apos; contact details. These steps are time-sensitive, so do them at the scene if you can.</p>

      <p>If you were injured in a slip and fall in Ohio, Jwayyed Law LLC can review your claim, identify who may be liable and pursue compensation for your losses. Our <a href="/our-law-firm/case-results">case results</a> page shows past outcomes. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm works on a contingency fee basis.</p>
    `,
  },
  {
    slug: 'protecting-rights-during-traffic-stop-ohio',
    title: 'Protecting Your Rights During a Traffic Stop in Ohio',
    excerpt: 'What Ohio law requires of you at a traffic stop, what you can decline, when police can search your car, and how long they can hold you.',
    category: 'Criminal Defense',
    author: 'Jwayyed Jwayyed',
    date: '2025-12-23',
    featured: false,
    image: '/assets/criminallaw-blog3.jpg',
    gradient: 'from-[#1a1a2e] to-[#2d3436]/80',
    content: `
      <p>Traffic stops are the most common contact between citizens and police in America. Most end quickly, but some escalate into searches, seizures, arrests and criminal charges. Knowing your rights during a traffic stop in Ohio helps you protect yourself legally while staying safe. Stay calm and respectful, and know where cooperating with police ends and protecting your rights begins. Many people waive important rights, or say things that hurt their case, because they do not know what the law actually requires of them.</p>

      <h2>Why you were pulled over</h2>
      <p>An officer needs reasonable suspicion of a traffic violation or criminal activity to make a stop. Reasonable suspicion is a lower standard than probable cause: the officer must be able to point to specific facts that suggest a violation. Common reasons include speeding, running a red light or stop sign, a broken tail light or other equipment problem, an improper lane change, weaving or erratic driving that suggests impairment, failure to signal under <a href="https://codes.ohio.gov/ohio-revised-code/section-4511.39" target="_blank" rel="noopener noreferrer">Ohio Revised Code 4511.39</a>, expired registration, or suspicion of other criminal activity.</p>
      <p>If the officer had no valid reason for the stop, for instance a hunch or profiling, evidence from the stop may be suppressed in court under the exclusionary rule. Note the circumstances of your stop. If you believe it was unjustified, your attorney can file a motion to suppress. If the motion is granted, the prosecution loses that evidence, and the charges are often dismissed.</p>

      <h2>The initial stop</h2>
      <p>When an officer turns on their lights, signal right away and pull over at the first safe spot. The officer will approach and usually ask for your driver&apos;s license, vehicle registration and proof of insurance. The law requires you to provide them.</p>

      <h2>What you are required to do</h2>
      <p>Ohio law requires you to: provide your driver&apos;s license when asked (failing to do so is a crime under <a href="https://codes.ohio.gov/ohio-revised-code/section-4507.35" target="_blank" rel="noopener noreferrer">Ohio Revised Code 4507.35</a>); provide your vehicle registration; provide proof of insurance (a physical card, a digital copy or a printed email); and get out of the vehicle if the officer orders you to. The U.S. Supreme Court held in Pennsylvania v. Mimms and Maryland v. Wilson that officers can order drivers and passengers out of a vehicle during a lawful stop. Refusing to get out when ordered can lead to charges for obstruction or resisting arrest.</p>

      <h2>What you are NOT required to do</h2>
      <p>Beyond the required documents, you have the right to remain silent. You do not have to say where you are going or where you have been, whether you have been drinking or using drugs, or whether there are weapons in the vehicle, or give any other detail beyond identification and vehicle information. You can say politely: &quot;Officer, I appreciate you doing your job, but I would prefer not to answer questions. I would like to speak to an attorney.&quot; Exercising this right is not a crime.</p>
      <p>You also have the right to refuse consent to a search. Say clearly: &quot;Officer, I do not consent to a search of my vehicle.&quot; Once you refuse, the officer cannot search on the basis of consent, though they may still search on probable cause, a warrant or another exception. Do not physically resist or obstruct the officer, even if you believe your rights are being violated. Comply, and raise it later through your attorney.</p>

      <h2>Vehicle searches and the Fourth Amendment</h2>
      <p>The Fourth Amendment protects you from unreasonable searches and seizures. An officer can search without a warrant in these situations:</p>
      <ul>
        <li><strong>Consent:</strong> If you agree voluntarily, no other justification is needed. Decline politely: &quot;I do not consent to a search of my vehicle.&quot;</li>
        <li><strong>Plain view:</strong> If contraband is visible from outside the vehicle, the officer can seize it and search further.</li>
        <li><strong>Probable cause:</strong> The smell of marijuana, visible drug paraphernalia or other signs can justify a search without consent. In Ohio, the smell of marijuana alone can be probable cause.</li>
        <li><strong>Search incident to arrest:</strong> If you are arrested, the officer can search the passenger compartment and your pockets.</li>
        <li><strong>Inventory search:</strong> If your vehicle is impounded, police can inventory its contents.</li>
      </ul>

      <h2>How long the stop can last</h2>
      <p>A traffic stop should last only as long as it takes to deal with the reason for it. In Rodriguez v. United States (2015), the U.S. Supreme Court ruled that officers cannot extend a stop beyond its original purpose without reasonable suspicion of other criminal activity. An officer cannot hold you for 30 minutes waiting for a drug-sniffing dog unless they have reasonable suspicion of drug activity. Evidence found during an illegally extended stop may be suppressed.</p>

      <h2>Recording the stop</h2>
      <p>Ohio is a one-party consent state. You have the right to record your interaction with police during a traffic stop as long as you do not physically interfere with the officer. Hold your phone where it can be seen and tell the officer: &quot;I am going to record this interaction for my protection.&quot; Many officers also have body and dash cameras, and you can request that footage later if your case goes to court.</p>

      <h2>If you are asked to do field sobriety tests</h2>
      <p>Field sobriety tests (walk-and-turn, one-leg stand, horizontal gaze nystagmus) are <strong>voluntary</strong>, and you have no legal obligation to do them. The officer may note that you declined. On the other hand, many people perform poorly because of nerves, medical conditions or uneven ground. Field sobriety tests are different from a breath or blood test; refusing those carries specific penalties under Ohio&apos;s implied consent law.</p>

      <h2>If you receive a citation</h2>
      <p>Signing a traffic citation is not an admission of guilt. It acknowledges that you received it and promises that you will appear in court. Refusing to sign can lead to arrest. If you think the citation is unfair, contest it in court, not at the roadside.</p>

      <h2>When to contact an attorney</h2>
      <p>Contact an attorney right away if the stop led to a search of you or your vehicle, property was seized, you were arrested, charges were filed, you were injured or believe the officer used excessive force, or you believe your constitutional rights were violated. An attorney can review whether the stop and any search were legal and, if your rights were violated, file a motion to suppress, which may lead to dismissal.</p>

      <h2>Out-of-state drivers</h2>
      <p>If you are stopped while driving through Ohio from another state, the same rights apply. Ohio and federal constitutional protections cover everyone in Ohio. Your out-of-state license is valid and must be provided when asked. If you are arrested in Ohio, you have the same rights as an Ohio resident, including the right to ask for an attorney.</p>

      <h2>What to do after a stop</h2>
      <p>Write down what you remember as soon as you can: the time, location and weather, the officer&apos;s name and badge number, and what was said. Note the agency, and the case number from your citation if you got one. Do not discuss the stop with anyone but your attorney, and do not post about it on social media. If you believe the officer used excessive force or violated your rights, you can file a complaint with the department&apos;s internal affairs division.</p>

      <p>If you are facing OVI/DUI, drug possession or other charges from a traffic stop in Ohio, Jwayyed Law LLC can review the details of the stop and whether your constitutional rights were respected. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'limited-driving-privileges-after-ovi-ohio',
    title: 'Limited Driving Privileges After OVI in Ohio: What You Need to Know',
    excerpt: 'After an OVI suspension in Ohio you may be able to drive for work, school or treatment. See the waiting periods, how to apply and common conditions.',
    category: 'OVI/DUI',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-10',
    featured: true,
    image: '/assets/criminal.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>Losing your license after an OVI arrest in Ohio makes ordinary life hard. Getting to work, caring for family and attending required treatment all depend on driving. Limited driving privileges (also called occupational or restricted licenses) let you drive for specific purposes during the suspension. Knowing how they work under Ohio law lets you plan ahead.</p>

      <h2>What are limited driving privileges?</h2>
      <p>Limited driving privileges let you drive during a suspension for approved reasons only: work, school or educational programs, medical appointments and treatment, court dates or meetings with your attorney, child care, and other essential household needs. The court issues a written order that says when, where and for what purposes you may drive, and you must follow it exactly. Driving for an unapproved purpose or outside the approved hours can bring a new charge for driving under suspension and a longer suspension.</p>

      <h2>When do you become eligible?</h2>
      <p>Under <a href="https://codes.ohio.gov/ohio-revised-code/section-4511.191" target="_blank" rel="noopener noreferrer">Ohio Revised Code 4511.191</a>, eligibility depends on the offense level and whether you took the test or refused it:</p>
      <ul>
        <li><strong>First OVI:</strong> Usually eligible 15 days after arrest (30 days if you refused the chemical test). The judge may waive the 15-day wait if you have no prior Physical Control conviction and can show hardship.</li>
        <li><strong>Second OVI:</strong> Eligible after 45 days (90 if you refused), and an ignition interlock device is required.</li>
        <li><strong>Third OVI:</strong> Eligible after 180 days (1 year if you refused), with ignition interlock required.</li>
      </ul>
      <p>These are the earliest dates you can apply. The judge has discretion and may set a longer wait based on your circumstances.</p>

      <h2>How to apply</h2>
      <p>You file a motion with the court that has jurisdiction over your OVI case. The motion explains why you need privileges, for example that you must drive to work and no public transportation is available. List the times you need to drive and the purposes (work 6am to 3pm Monday to Friday, and so on). Attach supporting documents: a letter from your employer confirming your hours and that public transportation is not an option, a class schedule, records of required treatment programs, or letters about medical appointments. An attorney can prepare the motion, attend the hearing and argue for the broadest privileges the law allows.</p>

      <h2>Common conditions</h2>
      <p>Courts often limit driving to specific hours, routes and purposes. You may have to use an ignition interlock device, a breathalyzer installed in your vehicle that you must blow into before the car will start. The written order lists every condition. Driving outside it, even one mile off the approved route or one hour outside the approved times, can lead to a driving under suspension charge with its own penalties.</p>

      <h2>Why legal help matters</h2>
      <p>The waiting periods, filing deadlines and court requirements are easy to get wrong. An <a href="/ovi-dui-defense">OVI attorney</a> knows how different judges handle these motions and can shape the argument for the court you are in. If you are facing an OVI suspension in Ohio, Jwayyed Law LLC can explain your options and apply for limited driving privileges that fit your schedule. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'ohio-als-appeal-30-day-deadline',
    title: 'Ohio ALS Appeal: Why the 30-Day Deadline Matters',
    excerpt: 'After an OVI arrest in Ohio you have 30 days to appeal your administrative license suspension. Miss it and you lose the right to challenge it.',
    category: 'OVI/DUI',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-08',
    featured: false,
    image: '/assets/law.jpg',
    gradient: 'from-[#2d3436] via-[#1a1a2e] to-[#b87333]/50',
    content: `
      <p>After an OVI arrest, you have only 30 days to appeal your administrative license suspension (ALS). The deadline is absolute. If you miss it, you lose the right to challenge the suspension at all, and your license stays suspended for the full period the law sets, whatever happens in your criminal case.</p>

      <h2>What happens at an ALS hearing?</h2>
      <p>The Administrative License Suspension is a civil process that runs separately from your criminal case. The hearing covers a few specific issues: whether the officer had reasonable grounds to believe you were operating while impaired, whether you were lawfully arrested, and whether the chemical test (breath or blood) was properly given and accurate. The officer usually testifies about the stop, your driving, signs of impairment and the arrest, and your attorney can cross-examine the officer and challenge those observations and procedures. If you win, your license is reinstated immediately. If you lose, the hearing still gives your attorney the officer&apos;s testimony and a look at the evidence, which can help your criminal defense. Even with a suspension in place, you may still be eligible for <a href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges</a>.</p>

      <h2>Why 30 days matters</h2>
      <p>The 30-day deadline under <a href="https://codes.ohio.gov/ohio-revised-code/section-4511.191" target="_blank" rel="noopener noreferrer">Ohio Revised Code 4511.191</a> is strict and has no exceptions, and courts generally do not extend it. If you miss it by even one day, your only option is to wait out the suspension and apply for limited driving privileges when you become eligible.</p>

      <h2>What you need to do</h2>
      <p>Contact an attorney as soon as you can after the arrest. An <a href="/ovi-dui-defense">OVI defense attorney</a> can file the appeal, ask for a stay of the suspension (which lets you keep driving until the hearing), and represent you at the BMV hearing. The criminal case and the ALS appeal run on separate tracks, and both need attention from day one. If you have been arrested for OVI in Ohio, call Jwayyed Law LLC at (614) 285-5482 or <a href="/contact">schedule a consultation</a> before the 30 days run out. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'dog-bite-laws-ohio-owner-liability',
    title: 'Dog Bite Laws in Ohio: Owner Liability and Your Rights',
    excerpt: 'When Ohio dog owners are strictly liable for a bite, what you can recover, the steps to take after an attack, and the two-year filing deadline.',
    category: 'Personal Injury',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-05',
    featured: false,
    image: '/assets/injury.jpg',
    gradient: 'from-[#1a1a2e] to-[#2d6a4f]/50',
    content: `
      <p>Dog bites can cause puncture wounds that need stitches, infections with serious complications, permanent scarring, and a lasting fear of dogs. In Ohio, dog owners can be held liable for injuries their dogs cause in specific circumstances, and you may be able to recover medical bills, lost wages, pain and suffering and other damages.</p>

      <h2>Ohio&apos;s dog bite statute</h2>
      <p>Under <a href="https://codes.ohio.gov/ohio-revised-code/section-955.28" target="_blank" rel="noopener noreferrer">Ohio Revised Code 955.28</a>, the owner, keeper or harborer of a dog is liable for injury or death the dog causes if two conditions are met: (1) the victim was in or on a public place, or lawfully in or on the owner&apos;s private property, and (2) the dog was not provoked. This is strict liability. You do not have to prove the owner knew the dog was dangerous or that it had bitten before, as the &quot;one bite&quot; rule in some states requires. If the statutory elements are met, the owner is liable.</p>

      <h2>What you can recover</h2>
      <p>You may be able to recover medical expenses (emergency room, surgery, antibiotics, follow-up care), lost wages, pain and suffering, compensation for scarring or disfigurement, counseling for fear of dogs, and other damages. If the injury causes a permanent disability, you can also recover for lost earning capacity. Ohio follows comparative negligence, so if you were partly at fault, for example by provoking the dog, your recovery may be reduced by your share of fault. If the dog owner is more than 50% at fault, you can still recover.</p>

      <h2>Steps to take after a bite</h2>
      <p>Get medical attention right away, even for a small bite, because dog bites carry bacteria that can cause serious infections. Get the owner&apos;s name, address and insurance information. Photograph your injuries, and the dog if you can. Report the bite to animal control and get a copy of the report. Collect witnesses&apos; contact information and keep your medical records and bills together. Then contact a <a href="/personal-injury">personal injury attorney</a> to review your claim; many work on contingency.</p>

      <h2>Ohio&apos;s statute of limitations</h2>
      <p>You have two years from the date of the injury to file a lawsuit. Evidence and witnesses can disappear over time, and insurers may dispute claims reported late, so start early.</p>

      <p>If you or a family member was injured by a dog in Ohio, Jwayyed Law LLC represents dog bite victims throughout the counties it serves. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm works on a contingency fee basis.</p>
    `,
  },
  {
    slug: 'forming-llc-ohio-step-by-step',
    title: 'Forming an LLC in Ohio: Step-by-Step Guide',
    excerpt: 'The five steps to form an Ohio LLC: choose a name, name a statutory agent, file $99 Articles of Organization, write an operating agreement, get an EIN.',
    category: 'Business Law',
    author: 'Jwayyed Jwayyed',
    date: '2026-02-28',
    featured: false,
    image: '/assets/contracts.webp',
    gradient: 'from-[#1a1a2e] via-[#b87333]/30 to-[#2d3436]',
    content: `
      <p>Forming an LLC in Ohio is straightforward, and doing it correctly from the start prevents problems later. Ohio LLCs are governed by <a href="https://codes.ohio.gov/ohio-revised-code/chapter-1706" target="_blank" rel="noopener noreferrer">Ohio Revised Code Chapter 1706</a> (the Ohio Revised Uniform Limited Liability Company Act). Here are the steps and why each one matters.</p>

      <h2>1. Choose a name</h2>
      <p>Your LLC name must be distinguishable from other Ohio business entities, so it cannot be confusingly similar to an existing business. It must include &quot;LLC,&quot; &quot;L.L.C.,&quot; &quot;Limited Liability Company&quot; or an abbreviation. You can check which names are available at <a href="https://businesssearch.ohiosos.gov/" target="_blank" rel="noopener noreferrer">businesssearch.ohiosos.gov</a>.</p>

      <h2>2. Designate a statutory agent</h2>
      <p>Every Ohio LLC must have a statutory agent: a person or business entity in Ohio who can receive legal papers for the LLC. The agent needs a physical Ohio address (not a P.O. Box), because lawsuits, regulatory notices and other official documents go there. Many small business owners act as their own statutory agent.</p>

      <h2>3. File Articles of Organization</h2>
      <p>File Articles of Organization with the Ohio Secretary of State. The filing fee is $99 (as of 2026). You can file online at businessfiling.ohiosos.gov, by mail or in person. The Articles usually list the LLC name, principal place of business, statutory agent, whether the LLC is member-managed or manager-managed, and the effective date. Once they are filed and approved, your LLC exists.</p>

      <h2>4. Create an operating agreement</h2>
      <p>Ohio does not require an operating agreement, and an LLC can run without one, but having one is strongly recommended. It is the internal governing document. It sets out ownership (membership interests), who makes decisions, how profits and losses are split, capital contributions, voting rights, how a member withdraws, and what happens if the LLC dissolves. An attorney can draft one for your business. Even a single-member LLC benefits, because the agreement records how the business runs and protects you if circumstances change.</p>

      <h2>5. Get an EIN and meet ongoing requirements</h2>
      <p>If you have employees or more than one member, you need an Employer Identification Number (EIN) from the IRS, which is free to apply for online at irs.gov. A single-member LLC with no employees may not need one, but having one is recommended. Ohio LLCs must file a biennial report with the Secretary of State (currently free) every two years.</p>

      <p>If you are starting a business in Ohio and need help with <a href="/business/llc-formation">LLC formation</a>, <a href="/business/contract-drafting-review">operating agreements</a> or other business matters, Jwayyed Law LLC can help. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'what-is-revocable-living-trust',
    title: 'What Is a Revocable Living Trust?',
    excerpt: 'A revocable living trust lets you control your assets during life and pass them on without probate. How it works, what it does not do, and who needs one.',
    category: 'Trusts',
    author: 'Jwayyed Jwayyed',
    date: '2026-02-25',
    featured: false,
    image: '/assets/estatePlanning.webp',
    gradient: 'from-[#2d3436] via-[#1a1a2e] to-[#b87333]/30',
    content: `
      <p>A revocable living trust is one of the most common estate planning tools in Ohio and across the country. You transfer assets into the trust during your lifetime, manage them as trustee, and direct how they pass to your beneficiaries after your death, often without probate.</p>

      <h2>How a revocable living trust works</h2>
      <p>You (the grantor or settlor) create the trust document and transfer assets into it. You usually serve as trustee during your life, so you keep full control: you can buy, sell and manage trust property just as if you owned it personally. Because the trust is revocable, you can change or end it at any time. If you become incapacitated or die, the successor trustee you named steps in to manage the assets. After your death, the successor trustee distributes them to your beneficiaries under the trust terms, usually without court involvement or probate.</p>

      <h2>Benefits of a revocable living trust</h2>
      <ul>
        <li><strong>Probate avoidance:</strong> Assets held in the trust generally skip probate, which can save time and avoid court costs and fees.</li>
        <li><strong>Privacy:</strong> A will is filed with the court; a trust is not, so your family&apos;s financial information stays private.</li>
        <li><strong>Flexibility:</strong> You can amend or revoke it as your life changes, for example after a marriage, a new child or a major purchase.</li>
        <li><strong>Incapacity planning:</strong> If you become mentally incapacitated, the successor trustee can manage trust assets without a guardianship proceeding, so your affairs continue without interruption.</li>
      </ul>

      <h2>What a living trust does not do</h2>
      <p>It does not reduce income or estate taxes, because revocable trusts are &quot;see-through&quot; for tax purposes. It does not protect assets from creditors during your life. And it covers only assets that have actually been transferred into it; an account or property you never titled in the trust&apos;s name may still go through probate.</p>

      <h2>Do you need one?</h2>
      <p>A revocable living trust is most useful if you have significant assets, own real estate in more than one state, or want to avoid probate and keep your affairs private. For a smaller estate, a simple will may be enough. An attorney can look at your situation and recommend the right tools.</p>

      <p>Jwayyed Law LLC provides <a href="/trusts/revocable-living-trusts">revocable living trust</a> planning and other <a href="/trusts">trust</a> and <a href="/other-services/estate-planning">estate planning</a> services throughout Ohio. Call (614) 285-5482 or visit our <a href="/contact">contact page</a> to schedule a consultation.</p>
    `,
  },
  {
    slug: 'first-dui-ohio-will-i-go-to-jail',
    title: 'First DUI in Ohio: Will I Go to Jail?',
    excerpt: 'Jail, fines and license suspension for a first OVI/DUI in Ohio, how BAC level changes the penalties, and the alternatives many courts allow.',
    category: 'OVI/DUI',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-15',
    featured: true,
    image: '/assets/Contractss.webp',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>If you have been arrested for a first OVI (DUI) in Ohio, you are probably asking whether you will go to jail. The answer depends on your case: your BAC level, the court where you are charged, the prosecutor, the judge, and how well your attorney can negotiate or challenge the evidence.</p>

      <h2>First OVI penalties in Ohio</h2>
      <p>Under <a href="https://codes.ohio.gov/ohio-revised-code/section-4511.19" target="_blank" rel="noopener noreferrer">Ohio Revised Code 4511.19</a>, a first OVI is a first-degree misdemeanor. The penalties depend on your BAC level:</p>
      <ul>
        <li><strong>Low-level (BAC 0.08% to 0.16%):</strong> The court may impose 3 days to 6 months in jail. Many courts allow alternatives instead, such as a 3-day Driver Intervention Program (DIP), electronic home monitoring or community service, or waive jail entirely if you install an ignition interlock device and comply with probation.</li>
        <li><strong>High-level (BAC 0.17% or higher):</strong> There is a mandatory minimum of 6 days in jail that cannot be waived. You may still be eligible for electronic home monitoring or a work-release program.</li>
        <li><strong>Refusal case:</strong> Penalties are higher than in a case with a test-confirmed BAC.</li>
      </ul>

      <h2>Jail alternatives</h2>
      <p>Many first-time offenders serve no jail time. Courts often offer the Driver Intervention Program (a 3-day alcohol education program) in place of jail, house arrest with electronic monitoring, community service (60 to 100 hours), or probation without jail. An attorney can negotiate with the prosecutor and ask the judge for alternatives that keep you out of jail while still meeting the court&apos;s goals of accountability and rehabilitation.</p>

      <h2>Consequences beyond jail</h2>
      <p>A first OVI also brings a license suspension (6 months to 3 years depending on BAC and refusal), fines of $565 to $1,075, court costs, license reinstatement fees ($315+), ignition interlock costs if ordered ($50 to $100 a month), and a required Driver Intervention Program or substance abuse counseling. You may be eligible for <a href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges</a> after 15 days (30 if you refused).</p>

      <h2>Why an attorney matters</h2>
      <p>An <a href="/ovi-dui-defense">OVI attorney</a> can challenge the traffic stop, question how the field sobriety and breath tests were given and how accurate they were, look for constitutional violations, negotiate for reduced charges or a better plea offer, and ask the judge for jail alternatives. The difference between representing yourself and having an attorney can be months of jail, thousands of dollars in fines and costs, and years of license suspension. If you are facing a first OVI charge in Ohio, call Jwayyed Law LLC at (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'how-much-does-dui-cost-ohio',
    title: 'How Much Does a DUI Cost in Ohio?',
    excerpt: 'An OVI/DUI in Ohio costs far more than the fine. Court costs, reinstatement, interlock, insurance increases and lost income, added up.',
    category: 'OVI/DUI',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-14',
    featured: false,
    image: '/assets/passport.jpg',
    gradient: 'from-[#2d3436] via-[#1a1a2e] to-[#b87333]/50',
    content: `
      <p>An OVI/DUI in Ohio costs far more than the court fine. People facing charges tend to focus on the court penalties and overlook the costs that build up over the following years. Seeing the full picture helps you plan and decide whether hiring an attorney is worth it.</p>

      <h2>Court fines and fees</h2>
      <p>For a first OVI under <a href="https://codes.ohio.gov/ohio-revised-code/section-4511.19" target="_blank" rel="noopener noreferrer">Ohio Revised Code 4511.19</a>, fines range from $565 to $1,075, depending on whether the BAC is low-level or high-level. On top of that come court costs, probation supervision fees ($15 to $50 a month), fees for mandatory programs like the Driver Intervention Program ($200 to $500), and fees for an alcohol assessment or treatment. Court-ordered costs alone can easily pass $2,000.</p>

      <h2>License reinstatement</h2>
      <p>When the suspension ends, you pay a $315 reinstatement fee to the Bureau of Motor Vehicles. If the court ordered an ignition interlock device, expect installation fees ($100 to $300) and monitoring fees ($50 to $100 a month) for 6 to 12 months. Some people also need SR-22 insurance, which costs much more than a regular policy.</p>

      <h2>Insurance impact</h2>
      <p>Insurance is usually the largest cost. An OVI conviction typically doubles, triples or even quadruples car insurance rates for 3 to 5 years, because drivers with an OVI are classed as &quot;high-risk.&quot; If your insurance was $1,200 a year and triples to $3,600, that is an extra $12,000 over five years.</p>

      <h2>Lost income</h2>
      <p>A suspension of months or years can cost you income if your job involves driving. Limited driving privileges help, but their restrictions may still cut your earnings. Even a few days in jail means lost pay and possibly a lost job.</p>

      <h2>Attorney fees and what they can save</h2>
      <p>An <a href="/ovi-dui-defense">OVI attorney</a> may charge a flat fee ($1,500 to $5,000) or an hourly rate. That is a real cost up front. Depending on the evidence, an attorney may get the charge reduced from OVI to reckless operation (avoiding the OVI label), negotiate a shorter suspension, keep you out of jail, or get the case dismissed. Saving 6 months of suspension, or avoiding a conviction that would double your insurance for five years, can be worth several times the fee.</p>

      <h2>Long-term costs</h2>
      <p>An OVI conviction affects job prospects for years. Many employers run background checks and view DUI convictions negatively, and some fields (transportation, healthcare, education) may close to you. Rental applications and professional licensing can be affected too. Adding up fines, suspension fees, insurance increases, lost income and the effect on employment, an OVI in Ohio can easily cost $15,000 to $30,000 or more over several years.</p>

      <p>If you are facing OVI charges in Ohio, Jwayyed Law LLC can walk you through the likely costs in your case and work to reduce them. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'charged-with-assault-what-happens-next',
    title: 'Charged with Assault in Ohio: What Happens Next?',
    excerpt: 'What happens at arraignment after an Ohio assault charge, the penalties for simple assault, common defenses, and what to do now.',
    category: 'Criminal Defense',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-12',
    featured: true,
    image: '/assets/law.webp',
    gradient: 'from-[#2d3436] via-[#1a1a2e] to-[#b87333]/50',
    content: `
      <p>An assault charge is stressful and confusing, and you may be panicked, angry or unsure what comes next. This article covers the arraignment, the possible penalties and how a criminal defense attorney can protect your rights.</p>

      <h2>Your first court appearance (arraignment)</h2>
      <p>At arraignment, the judge reads the charges, explains your rights and asks you to enter a plea. Most attorneys advise pleading not guilty at this stage. That preserves your rights and gives your lawyer time to review the evidence and negotiate with the prosecutor. Do not plead guilty at arraignment without talking to an attorney.</p>

      <h2>Simple assault in Ohio</h2>
      <p>Under <a href="https://codes.ohio.gov/ohio-revised-code/section-2903.13" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2903.13</a>, assault means knowingly causing physical harm to another person, or knowingly causing them to believe they are about to suffer physical harm. Simple assault is usually a first-degree misdemeanor, punishable by up to 180 days in jail and a fine of up to $1,000. Prior convictions, use of a weapon or other aggravating factors can raise the penalties considerably. Aggravated assault may be charged as a felony, particularly if someone is seriously injured.</p>

      <h2>Possible defenses</h2>
      <p><strong>Self-defense</strong> applies if you reasonably believed you needed force to protect yourself from imminent harm, and it is one of the most common defenses to an assault charge. <strong>Defense of others</strong>, meaning reasonable force to protect a family member or someone else, is also a valid defense. Others include lack of intent to cause harm, mistaken identity and insufficient evidence. An attorney can review the facts and decide which defenses fit your case.</p>

      <h2>What you should do</h2>
      <p>Do not discuss the case with anyone except your attorney, and do not post about it on social media. Contact a <a href="/criminal-defense/assault-charges">criminal defense attorney</a> as soon as possible, so they can request evidence, investigate and start preparing your defense. Jwayyed Law LLC represents clients charged with assault in Ohio. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'shoplifting-ohio-first-offense',
    title: 'Shoplifting in Ohio: First Offense and Consequences',
    excerpt: 'How Ohio grades shoplifting by value, the penalties for a first offense under $1,000, the long-term effect of a theft record, and possible defenses.',
    category: 'Criminal Defense',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-11',
    featured: false,
    image: '/assets/power.jpg',
    gradient: 'from-[#2d3436] to-[#1a1a2e]',
    content: `
      <p>Shoplifting and petty theft in Ohio can lead to criminal charges, fines and a permanent record. Even a first offense can affect your job prospects, housing and professional opportunities.</p>

      <h2>Theft classifications in Ohio</h2>
      <p>Shoplifting in Ohio is usually charged as theft under <a href="https://codes.ohio.gov/ohio-revised-code/section-2913.02" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2913.02</a>. The value of the property and your prior record decide whether it is a misdemeanor or a felony. Theft of property worth less than $1,000 is typically a first-degree misdemeanor (up to 180 days in jail and a fine of up to $1,000). Theft of $1,000 to $7,500 is a fifth-degree felony (6 to 12 months in prison), and the level rises with the amount. Theft over $100,000 carries several years in prison.</p>

      <h2>First-offense penalties</h2>
      <p>A first-degree misdemeanor theft (items under $1,000) carries up to 180 days in jail and a fine of up to $1,000. Many first-time offenders receive probation, community service or a diversion program instead of jail, especially when an attorney argues for those alternatives.</p>

      <h2>Long-term consequences</h2>
      <p>A theft conviction stays on your record. Many employers will not hire people with theft convictions, landlords often reject applicants with theft records, and licensing in fields like finance, healthcare, education and law can be affected. Record sealing may be possible once you complete your sentence and the waiting period passes.</p>

      <h2>Possible defenses</h2>
      <p>Defenses include lack of intent (you forgot to pay or misunderstood the store&apos;s checkout procedure, for example), mistaken identity (you were not the person who took the item), insufficient evidence, and collaboration by an unauthorized store employee. An attorney can review the evidence and tell you which apply.</p>

      <p>Expungement or <a href="/criminal-defense/expungement-record-sealing">record sealing</a> may be possible after you complete your sentence and meet the waiting period. If you have been charged with shoplifting or theft in Ohio, Jwayyed Law LLC can review your case and work toward the best result available. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>. The firm serves clients throughout Ohio, including Franklin County, Columbus and surrounding communities.</p>
    `,
  },
  {
    slug: 'slipped-fell-at-store-can-i-sue',
    title: 'I Slipped and Fell at a Store. Can I Sue?',
    excerpt: 'If you were hurt in a fall at an Ohio store or business, you may have a claim. What you need to prove, what to do right away, and the two-year deadline.',
    category: 'Personal Injury',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-09',
    featured: false,
    image: '/assets/nav-probate.webp',
    gradient: 'from-[#2d3436] via-[#b87333]/20 to-[#1a1a2e]',
    content: `
      <p>If you were hurt in a slip and fall at a store, restaurant, supermarket or other business in Ohio, you may have a personal injury claim against the business. The deciding question is whether the business&apos;s negligence caused the fall. If it did, you can recover compensation for medical bills, lost wages, pain and suffering and other damages.</p>

      <h2>What you must prove</h2>
      <p>In Ohio, property owners owe a duty of care to customers (invitees). You generally need to show that (1) a dangerous condition existed, such as a wet floor, tripping hazard, uneven surface, poor lighting or debris; (2) the owner knew or should have known about it, through reasonable inspection or complaints; (3) the owner failed to fix it or warn you adequately; and (4) the condition caused your injury and damages. The owner may argue the hazard was &quot;open and obvious,&quot; meaning you should have seen and avoided it. An attorney can answer that by showing the hazard was in an unexpected place, that something the store did distracted you, or that lighting, crowds or other conditions made it hard to see.</p>

      <h2>What to do right away</h2>
      <p>Report the fall to the manager and ask for an incident report. Photograph the exact spot where you fell and the hazard before it is cleaned up, and photograph your injuries. Get witnesses&apos; contact information. See a doctor within 24 to 48 hours, even if you feel fine, and keep all medical records and receipts.</p>

      <h2>Statute of limitations</h2>
      <p>You have two years from the date of the fall to file a lawsuit in Ohio. Evidence and witnesses can disappear, and the longer you wait, the harder it is to prove what caused the fall.</p>

      <p>Jwayyed Law LLC represents <a href="/personal-injury/slip-and-fall">slip and fall</a> victims throughout Ohio on a contingency fee basis. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'how-long-sue-after-injury-ohio',
    title: 'How Long Do I Have to Sue After an Injury in Ohio?',
    excerpt: 'Ohio gives you two years to file most personal injury, wrongful death and property damage claims. Miss the deadline and the court will dismiss your case.',
    category: 'Personal Injury',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-07',
    featured: true,
    image: '/assets/power.webp',
    gradient: 'from-[#1a1a2e] to-[#2d6a4f]/50',
    content: `
      <p>Ohio sets strict deadlines for filing personal injury lawsuits. If you miss the statute of limitations, you lose the right to sue, even with a strong case. The court will dismiss it and you will have no legal remedy.</p>

      <h2>Personal injury: two years</h2>
      <p>Under <a href="https://codes.ohio.gov/ohio-revised-code/section-2305.10" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2305.10</a>, you generally have two years from the date of the injury to file a personal injury lawsuit. This covers car accidents, slip and falls, dog bites, medical malpractice, workplace injuries and most other injury claims. Two years goes quickly, especially while you are recovering or in treatment.</p>

      <h2>Wrongful death: two years</h2>
      <p>Wrongful death claims also have a two-year deadline, which usually runs from the date of death.</p>

      <h2>Property damage: two years</h2>
      <p>Property damage claims, such as vehicle damage from an accident, also have a two-year statute of limitations.</p>

      <h2>Why to act early</h2>
      <p>Even with two years, contact an attorney early. Evidence disappears, witnesses forget, and businesses delete surveillance video. Building a case takes time, and insurers may have their own notice requirements. A <a href="/personal-injury">personal injury attorney</a> can make sure your claim is filed correctly and on time.</p>

      <p>If you have been injured in Ohio, Jwayyed Law LLC can review your case and track every deadline that applies. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'do-i-need-will-ohio',
    title: 'Do I Need a Will in Ohio?',
    excerpt: 'What happens if you die without a will in Ohio, what a will lets you decide, and who most needs one, including parents of minor children.',
    category: 'Estate Planning',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-04',
    featured: false,
    image: '/assets/LastWills.webp',
    gradient: 'from-[#2d3436] via-[#1a1a2e] to-[#b87333]/30',
    content: `
      <p>Most people benefit from having a will. Without one, Ohio law decides who inherits your property, and the result may not be what you would have chosen.</p>

      <h2>What happens without a will</h2>
      <p>Ohio&apos;s intestacy laws decide who inherits when there is no will. Your spouse and children usually inherit first, but the shares depend on your family structure. An unmarried partner receives nothing unless a will provides for them. The court appoints an administrator, often not the person you would have picked, to manage your estate.</p>

      <h2>What a will does</h2>
      <p>A will lets you decide who gets what, name an executor to manage your estate, and name guardians for minor children. You can update it as your life changes. A will does not avoid probate, but it makes sure your wishes are followed and can make probate simpler.</p>

      <h2>Who especially needs a will</h2>
      <p>Parents of minor children (to name guardians), people with significant assets, anyone who wants to leave something to someone other than the default heirs, and blended families. Even if your estate seems &quot;simple,&quot; a will settles questions your family would otherwise have to sort out.</p>

      <p>Jwayyed Law LLC helps clients with <a href="/other-services/estate-planning-wills">wills and estate planning</a> throughout Ohio. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'do-i-need-llc-for-business',
    title: 'Do I Need an LLC for My Business?',
    excerpt: 'What an LLC protects, when forming one in Ohio makes sense, and when a sole proprietorship may be enough for now.',
    category: 'Business Law',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-02',
    featured: false,
    image: '/assets/businessLaw.webp',
    gradient: 'from-[#1a1a2e] via-[#b87333]/30 to-[#2d3436]',
    content: `
      <p>Many small business owners ask whether they need an LLC. It depends on your situation, but if your business carries any risk of liability, an LLC is usually a sensible way to protect your personal assets.</p>

      <h2>What an LLC does</h2>
      <p>An LLC is a separate legal entity for your business. Your personal assets, such as your home, car and savings, are generally shielded from business debts and lawsuits, so if the business is sued, creditors generally cannot reach your personal property. An LLC can also make the business look more established and simplify tax reporting.</p>

      <h2>When an LLC makes sense</h2>
      <p>An LLC is often worth it if your business could be sued (consulting, contracting or retail, for example), you have partners, you own property or equipment used in the business, or you want a more professional footing. Ohio&apos;s filing fee is $99, and compliance is relatively simple.</p>

      <h2>When you might not need one</h2>
      <p>If you do occasional side work with little risk, you might start as a sole proprietor. Once you have real revenue or liability exposure, forming an LLC is usually the right move.</p>

      <p>Jwayyed Law LLC helps Ohio business owners with <a href="/business/llc-formation">LLC formation</a>, <a href="/business/contract-drafting-review">operating agreements</a> and related matters. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'will-vs-trust-ohio',
    title: "What's the Difference Between a Will and a Trust?",
    excerpt: 'Wills and trusts both pass assets to loved ones, but a will goes through probate and a trust usually does not. How each works and when to use both.',
    category: 'Estate Planning',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-01',
    featured: false,
    image: '/assets/trusts.webp',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/40',
    content: `
      <p>Wills and trusts both pass assets to loved ones, but they work differently and do different jobs.</p>

      <h2>What a will does</h2>
      <p>A will says who gets your property when you die. It names an executor to handle your estate and can name guardians for minor children. A will must go through probate, the court-supervised process of validating the will and distributing the assets. Probate can take months, and the will becomes part of the public record.</p>

      <h2>What a trust does</h2>
      <p>A trust holds assets for named beneficiaries. You transfer assets into it during your life, and when you die the trustee distributes them under the trust terms, usually without probate. A revocable living trust can be changed or revoked while you are alive. Trusts keep your affairs private and often distribute assets faster than probate.</p>

      <h2>Do you need both?</h2>
      <p>Many people have both. A &quot;pour-over&quot; will moves any assets you did not put in the trust into it at your death, and the will is also where you name guardians for children. An attorney can design a plan around your assets and goals.</p>

      <p>Jwayyed Law LLC provides <a href="/other-services/estate-planning">estate planning</a>, <a href="/trusts">trusts</a> and <a href="/other-services/estate-planning-wills">wills</a> throughout Ohio. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'ohio-probate-process-step-by-step',
    title: 'Ohio Probate: Step-by-Step Guide to Administering an Estate',
    excerpt: 'The steps of Ohio probate, from opening the estate and notifying creditors to the inventory, final account and distribution, and how to avoid it.',
    category: 'Estate Planning',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-16',
    featured: false,
    image: '/assets/realestate-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>When a loved one dies in Ohio, one of the first legal questions is whether the estate needs probate and, if so, what that involves. Probate is the court-supervised process of validating a will, identifying and appraising assets, paying debts and taxes, and distributing what remains to the heirs. It is governed by <a href="https://codes.ohio.gov/ohio-revised-code/title-21" target="_blank" rel="noopener noreferrer">Ohio Revised Code Title 21</a> and can take anywhere from a few months to more than a year, depending on how complex the estate is.</p>

      <h2>When is probate required in Ohio?</h2>
      <p>Not every asset goes through probate. Property titled only in the decedent's name, with no joint owner or named beneficiary, usually does. That includes real estate in the decedent's name alone, bank accounts without a payable-on-death designation, vehicles titled only to the deceased, and personal property of significant value. Assets that usually skip probate include life insurance payable to a named beneficiary, retirement accounts (IRA, 401(k)) with designated beneficiaries, jointly owned property with right of survivorship, and assets held in a living trust. If the probate estate is worth $35,000 or less (or $100,000 if the surviving spouse is the sole heir), a simplified <strong>summary release from administration</strong> may be available under <a href="https://codes.ohio.gov/ohio-revised-code/section-2113.03" target="_blank" rel="noopener noreferrer">ORC 2113.03</a>.</p>

      <h2>Step 1: Filing a petition and opening the estate</h2>
      <p>Probate is opened in the county where the decedent lived at the time of death. The executor named in the will (or an administrator if there is no will) files a petition with the probate court under <a href="https://codes.ohio.gov/ohio-revised-code/section-2113.01" target="_blank" rel="noopener noreferrer">ORC 2113.01</a>, and the original will must be filed with the court. The court then issues "Letters Testamentary" (with a will) or "Letters of Administration" (without one), which authorize the executor or administrator to act for the estate: opening accounts, managing property and dealing with creditors.</p>

      <h2>Step 2: Notifying creditors</h2>
      <p>Within a set time after appointment, the executor must publish a notice to creditors in a local newspaper once a week for three consecutive weeks under <a href="https://codes.ohio.gov/ohio-revised-code/section-2117.06" target="_blank" rel="noopener noreferrer">ORC 2117.06</a>. Known creditors must also get individual written notice. Creditors then have <strong>six months</strong> from the date of death (or 60 days from the notice, whichever is later) to present their claims, and claims filed after that are generally barred. The executor reviews each claim and approves or rejects it, and a rejected claim can be contested in court.</p>

      <h2>Step 3: Preparing the inventory and appraisal</h2>
      <p>Within three months of appointment, the executor must file a complete inventory of the probate assets with the court under <a href="https://codes.ohio.gov/ohio-revised-code/section-2115.02" target="_blank" rel="noopener noreferrer">ORC 2115.02</a>, listing each asset at fair market value as of the date of death. Real estate must be appraised by a court-appointed appraiser, and vehicles, business interests and collectibles may also need independent appraisals. Heirs and beneficiaries can object to the inventory if they think items are valued wrongly.</p>

      <h2>Step 4: Managing estate assets during administration</h2>
      <p>While the estate is open, the executor is a fiduciary, legally bound to act in the best interests of the estate and its beneficiaries. That means collecting all the assets, safeguarding property, paying valid debts and taxes (including any Ohio estate tax obligations, and federal estate tax if the estate exceeds the federal threshold), filing the decedent&apos;s final income tax returns, and possibly filing an estate income tax return. An executor who mismanages assets can be personally liable.</p>

      <h2>Step 5: Final account and distribution</h2>
      <p>Once debts, taxes and administrative expenses are paid, the executor prepares a final account under <a href="https://codes.ohio.gov/ohio-revised-code/section-2109.30" target="_blank" rel="noopener noreferrer">ORC 2109.30</a> showing all receipts, payments and the assets left to distribute. After the court approves the account, the executor distributes the remaining assets to the beneficiaries as the will directs (or under Ohio's intestacy statutes if there is no will). Each beneficiary signs a receipt, and the executor files a certificate of completion to close the estate.</p>

      <h2>How to avoid probate</h2>
      <p>Many Ohio families reduce what goes through probate by planning ahead. Common tools are a <a href="/trusts">revocable living trust</a>; payable-on-death or transfer-on-death designations on bank accounts and real estate (for real estate, Ohio's Transfer on Death Designation Affidavit under <a href="https://codes.ohio.gov/ohio-revised-code/section-5302.22" target="_blank" rel="noopener noreferrer">ORC 5302.22</a>); joint ownership with right of survivorship; and up-to-date beneficiary designations on retirement and insurance accounts. Planning now can spare your family months of court involvement and thousands in administration costs.</p>

      <p>If you are administering an estate or planning ahead, a <a href="/other-services/probate">probate attorney</a> can handle the filings and deadlines for you. Jwayyed Law LLC provides <a href="/other-services/estate-planning">estate planning</a> and probate administration throughout Ohio. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'what-is-expungement-ohio-2024',
    title: 'Ohio Expungement in 2024: Who Qualifies and How It Works',
    excerpt: 'Who can seal or expunge a record in Ohio, how long you must wait, how the application works, and what you can say about a sealed record.',
    category: 'Criminal Defense',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-17',
    featured: false,
    image: '/assets/criminallaw-blog2.jpg',
    gradient: 'from-[#2d3436] via-[#1a1a2e] to-[#b87333]/50',
    content: `
      <p>A criminal conviction, or even an arrest that did not lead to one, can create lasting barriers to jobs, housing, professional licenses and education. Ohio law offers a way forward through record sealing and expungement, but the two terms are often confused and the eligibility rules are detailed. The main statute is <a href="https://codes.ohio.gov/ohio-revised-code/section-2953.32" target="_blank" rel="noopener noreferrer">ORC 2953.32</a>.</p>

      <h2>Sealing vs. expungement: what is the difference?</h2>
      <p>In Ohio, "sealing" and "expungement" are often used interchangeably, but they mean different things in law. <strong>Sealing</strong> hides a record from the general public: most employers, landlords and members of the public cannot see it, but law enforcement and certain licensing boards may still have access. <strong>Expungement</strong> technically means the physical record is destroyed. In practice, most Ohio cases under ORC 2953.32 end in sealing rather than destruction. Either way, for most Ohioans the result is that the record does not appear on a standard background check.</p>

      <h2>Who is eligible?</h2>
      <p>Ohio has expanded eligibility considerably in recent years. Under <a href="https://codes.ohio.gov/ohio-revised-code/section-2953.36" target="_blank" rel="noopener noreferrer">ORC 2953.36</a>, some offenses are categorically ineligible: first- and second-degree felonies, most sex offenses that require registration, certain offenses involving victims under 18, domestic violence convictions, and OVI/DUI convictions. Eligible offenses generally include many misdemeanors, lower-level felonies (F3, F4, F5), and arrests that did not end in a conviction. Under the 2023 reforms, adults with any number of prior convictions may now be eligible, because Ohio removed the old "first-time offender" cap in many situations.</p>

      <h2>Mandatory waiting periods</h2>
      <p>You cannot apply as soon as your case ends. Ohio sets waiting periods that run from the date you complete your sentence, including probation or community control: <strong>1 year</strong> for most misdemeanors and <strong>3 years</strong> for most eligible felonies. Where there was no conviction (a dismissal, a not-guilty verdict or a no bill), you can often apply right away. A new conviction during the waiting period stops the clock.</p>

      <h2>The application process</h2>
      <p>You file an application (petition) in the court where the case started. It includes your personal information, the case number or numbers you want sealed, and a statement that you meet the eligibility requirements. The filing fee is typically $50 to $100, depending on the court. The court notifies the prosecutor&apos;s office, which has 60 days to object. If the prosecutor objects, the court schedules a hearing, where the judge weighs your interests against the government&apos;s interest in keeping the record. Judges look at the nature of the offense, your rehabilitation and your current circumstances.</p>

      <h2>What records are affected?</h2>
      <p>A sealing order covers the court&apos;s official records and requires law enforcement agencies, including the Ohio Bureau of Criminal Investigation, to seal their records of the case. The Ohio Bureau of Motor Vehicles and other state agencies that hold records of the conviction must comply too. Sealed records can still turn up in private background check databases that collected the information before the order. Check your background reports and dispute inaccurate entries with the reporting agencies under the Fair Credit Reporting Act.</p>

      <h2>Can you say you have no criminal record after sealing?</h2>
      <p>Under <a href="https://codes.ohio.gov/ohio-revised-code/section-2953.33" target="_blank" rel="noopener noreferrer">ORC 2953.33</a>, once a record is sealed you may legally answer "no" on most private job applications that ask about prior convictions. There are important exceptions. You must disclose a sealed record when applying for law enforcement jobs, for a license to practice law, for work with children or vulnerable adults, and on certain federal agency applications. Talk to an attorney before you decide how to answer a sensitive question.</p>

      <h2>Employer background checks after sealing</h2>
      <p>Ohio law bars most private employers from asking about sealed records or discriminating on the basis of them in most hiring decisions. Jobs with state or federal licensing requirements, positions working with children or vulnerable people, and law enforcement roles are exceptions. If a private employer finds a sealed record and refuses to hire you, you may have a claim under Ohio law. An attorney can advise you on your rights.</p>

      <p>If you think you may qualify for expungement or record sealing in Ohio, an <a href="/criminal-defense/expungement-record-sealing">expungement attorney</a> can check your eligibility and handle the application. Jwayyed Law LLC handles expungement petitions throughout Ohio. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'ohio-business-formation-llc-vs-corp',
    title: 'LLC vs. Corporation in Ohio: Which Is Right for Your Business?',
    excerpt: 'How an Ohio LLC and a corporation compare on liability, taxes, management, governing documents and cost, and which suits most small businesses.',
    category: 'Business Law',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-18',
    featured: false,
    image: '/assets/businesslaw-blog.jpg',
    gradient: 'from-[#b87333]/40 via-[#2d3436] to-[#1a1a2e]',
    content: `
      <p>When you formalize an Ohio business, one of the first decisions is its legal structure. Two of the most common are the <strong>Limited Liability Company (LLC)</strong> and the <strong>Corporation</strong>. Both protect you from liability, but they are taxed, managed and governed differently. Getting the choice right at the start saves money and complexity later and keeps your personal assets protected.</p>

      <h2>The legal framework in Ohio</h2>
      <p>Ohio LLCs are governed by <a href="https://codes.ohio.gov/ohio-revised-code/chapter-1705" target="_blank" rel="noopener noreferrer">Ohio Revised Code Chapter 1705</a> (and by the updated Ohio Limited Liability Company Act in ORC Chapter 1706 for LLCs formed after 2022). Ohio corporations are governed by <a href="https://codes.ohio.gov/ohio-revised-code/chapter-1701" target="_blank" rel="noopener noreferrer">ORC Chapter 1701</a>. Both require filing formation documents with the Ohio Secretary of State and paying a filing fee. As of 2025, the standard fee for articles of organization (LLC) is <strong>$99</strong>, and for articles of incorporation (corporation) it is also <strong>$99</strong>. Expedited processing costs extra.</p>

      <h2>Liability protection</h2>
      <p>Both LLCs and corporations provide <strong>limited liability protection</strong>: in most circumstances, your personal assets (home, savings, personal vehicle) are shielded from the business&apos;s debts and legal judgments. The protection depends on keeping yourself and the entity legally separate. Common mistakes that can pierce the corporate (or LLC) veil include mixing personal and business funds, skipping required formalities, and using the entity to defraud creditors. Set the entity up properly and keep up with compliance.</p>

      <h2>Taxation: the main difference</h2>
      <p>Tax treatment often decides the question. A standard Ohio LLC is a <strong>pass-through entity</strong> by default. The business pays no federal income tax itself; profits and losses pass through to the members, who report them on their personal returns, which avoids "double taxation." A C-Corporation is taxed on its profits at the corporate level, and shareholders then pay tax again on the dividends they receive. That is double taxation. An S-Corporation election lets a corporation be taxed much like a pass-through entity, subject to IRS eligibility rules (no more than 100 shareholders, only one class of stock, all shareholders U.S. citizens or residents, and others). An LLC can also elect S-Corp or C-Corp tax treatment with the IRS, which gives it more flexibility. Involve a CPA as well as your business attorney.</p>

      <h2>Management and governance</h2>
      <p>An LLC can be <strong>member-managed</strong> (all owners take part in management) or <strong>manager-managed</strong> (designated managers run day-to-day operations while other members stay passive investors). The operating agreement sets these arrangements, and it matters even though Ohio does not require it to be filed publicly. A corporation is more rigid: shareholders elect a <strong>board of directors</strong>, the board oversees management, and officers run daily operations. Corporations must hold annual meetings, keep formal minutes and follow their bylaws. That formality can weigh on a small business, but outside investors often prefer it.</p>

      <h2>Operating agreement vs. bylaws</h2>
      <p>An LLC&apos;s governing document is its <strong>operating agreement</strong>, a private contract among the members covering ownership percentages, how profits and losses are allocated, members&apos; rights and duties, voting procedures, and what happens when a member leaves or dies. Ohio does not require it to be filed, but every LLC with real operations should have a carefully drafted one. Without it, Ohio&apos;s default rules under ORC Chapter 1706 govern your LLC, and they may not match your intentions. A corporation is governed by its <strong>articles of incorporation</strong> (filed publicly) and its <strong>bylaws</strong> (internal operating rules). Both should be drafted to reflect what the shareholders intend and to protect the entity&apos;s liability shield.</p>

      <h2>Which structure is right for you?</h2>
      <p>For most small and medium-sized Ohio businesses, the <strong>LLC offers the best balance</strong> of simplicity, tax flexibility and liability protection, and its lighter governance rules make it easier to maintain. A corporation may be the better choice if you plan to raise equity investment, want to give employees stock options, or expect to go public. Many startups seeking venture capital form C-Corporations in Delaware (or Ohio) because investors prefer them. The right structure depends on your industry, growth plans, tax situation and how many people will own the business.</p>

      <p>Before you file anything, talk to an <a href="/business/llc-formation">Ohio business formation attorney</a> who can review your situation and draft the operating agreement or bylaws you need. Jwayyed Law LLC helps Ohio business owners with <a href="/business/llc-formation">LLC formation</a>, <a href="/business/contract-drafting-review">contract drafting</a> and other <a href="/business">business law matters</a> statewide. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'personal-injury-ohio-statute-of-limitations',
    title: 'Ohio Personal Injury Statute of Limitations: Two Years and the Exceptions',
    excerpt: 'Most Ohio injury claims must be filed within two years. The discovery rule, tolling for minors, government claims and the 10-year repose rule explained.',
    category: 'Personal Injury',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-19',
    featured: false,
    image: '/assets/personalinjury-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>If you were injured in Ohio, in a car accident, a slip and fall or through anyone else&apos;s negligence, the clock starts almost at once. Ohio sets strict deadlines, called <strong>statutes of limitations</strong>, for filing a lawsuit. Missing one usually means you permanently lose the right to seek compensation, however strong your case.</p>

      <h2>The general rule: two years under ORC 2305.10</h2>
      <p>For most personal injury claims in Ohio, the governing statute is <a href="https://codes.ohio.gov/ohio-revised-code/section-2305.10" target="_blank" rel="noopener noreferrer">Ohio Revised Code 2305.10</a>. It requires a civil action for bodily injury or injury to personal property to be brought within <strong>two years</strong> after the cause of action accrues. In a straightforward case, that is the date of the accident or injury, so the two years start the day you are hurt. The two-year deadline applies to car accidents, truck accidents, pedestrian knockdowns, motorcycle crashes, premises liability (slip and falls), dog bites and most other general negligence claims.</p>

      <h2>The discovery rule exception</h2>
      <p>Some injuries are not obvious right away. Ohio courts recognize the <strong>discovery rule</strong>: the statute of limitations does not start until the plaintiff knew, or with reasonable diligence should have known, that they were injured and that someone else&apos;s conduct likely caused it. It comes up most in toxic tort cases, exposure to hazardous substances, and some medical situations where the link between negligence and injury takes time to show. Courts apply it narrowly. Claiming ignorance is not enough; the question is when a reasonable person would have discovered the injury and its cause.</p>

      <h2>Exceptions for minors</h2>
      <p>Under <a href="https://codes.ohio.gov/ohio-revised-code/section-2305.16" target="_blank" rel="noopener noreferrer">ORC 2305.16</a>, the statute of limitations is <strong>tolled (paused)</strong> for minors until they turn 18. After that, they usually have the standard two years to file, so a child injured at age 10 would have until age 20 to bring a claim. Waiting that long is rarely wise, because evidence degrades, witnesses become unavailable and memories fade. A parent or guardian can bring the claim for the child before the child turns 18.</p>

      <h2>Claims against government entities</h2>
      <p>Special rules apply if a government employee caused your injury or it happened on government property. Under the <a href="https://codes.ohio.gov/ohio-revised-code/section-2744.04" target="_blank" rel="noopener noreferrer">Ohio Political Subdivision Tort Liability Act (ORC 2744)</a>, you must file suit within <strong>two years</strong>, and Ohio municipalities and other political subdivisions have significant immunity protections. Ohio does not require pre-suit notice in most cases, but naming the wrong government defendant can sink your claim. Claims against federal agencies and employees fall under the Federal Tort Claims Act, which requires an administrative claim within two years of the injury.</p>

      <h2>Statute of repose vs. statute of limitations</h2>
      <p>Ohio law also has <strong>statutes of repose</strong>. These are absolute cutoff dates that the discovery rule and tolling provisions do not affect. For example, Ohio&apos;s product liability statute of repose in <a href="https://codes.ohio.gov/ohio-revised-code/section-2305.10" target="_blank" rel="noopener noreferrer">ORC 2305.10(C)</a> requires a product liability action to be brought within <strong>10 years</strong> of the date the product was delivered to its first purchaser, whenever the injury happened or was discovered. Courts will not extend a statute of repose.</p>

      <h2>Tolling provisions</h2>
      <p>Apart from the minor and discovery rule exceptions, Ohio&apos;s statute of limitations can be tolled in a few situations: if the defendant fraudulently concealed the claim, if the defendant was absent from Ohio during the limitations period, and in some cases of legal disability. Ohio courts read these rules strictly, so do not rely on them without an attorney&apos;s advice.</p>

      <h2>What happens if you miss the deadline?</h2>
      <p>If you file after the statute of limitations has run, the defendant will move to dismiss on that ground, and Ohio courts almost always grant the motion, whatever the merits. You will recover nothing for your injuries, medical bills, lost wages, pain and suffering or other damages. That is why you should contact a <a href="/personal-injury">personal injury attorney</a> soon after an injury.</p>

      <p>Jwayyed Law LLC represents injured Ohioans in all types of personal injury cases, on a contingency fee basis. <a href="/contact">Contact the firm</a> or call (614) 285-5482 to discuss your case before your deadline.</p>
    `,
  },
  {
    slug: 'misdemeanor-vs-felony-ohio',
    title: 'Misdemeanor vs. Felony in Ohio: The Difference and the Penalties',
    excerpt: 'Ohio\'s misdemeanor and felony degrees, the maximum jail, prison and fines for each, and the collateral consequences that follow a conviction.',
    category: 'Criminal Defense',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-21',
    featured: false,
    image: '/assets/criminallaw-blog2.jpg',
    gradient: 'from-[#b87333]/40 via-[#2d3436] to-[#1a1a2e]',
    content: `
      <p>In Ohio, almost every criminal offense is classified as either a <strong>misdemeanor</strong> or a <strong>felony</strong>. The classification decides which court hears your case, the maximum punishment, the rights you keep afterward, and how the charge affects your life for years after the case closes.</p>

      <h2>Ohio&apos;s misdemeanor classes</h2>
      <p>Ohio misdemeanors are divided into four classes under <a href="https://codes.ohio.gov/ohio-revised-code/section-2929.24" target="_blank" rel="noopener noreferrer">ORC 2929.24</a>, plus the minor misdemeanor:</p>
      <ul>
        <li><strong>Minor Misdemeanor (MM):</strong> No jail; maximum fine of $150. Examples: jaywalking, first-time possession of a small amount of drug paraphernalia, low-level traffic offenses.</li>
        <li><strong>Fourth-Degree Misdemeanor (M4):</strong> Up to 30 days in jail; maximum fine of $250. Examples: some disorderly conduct charges, minor theft under $1,000 (first offense).</li>
        <li><strong>Third-Degree Misdemeanor (M3):</strong> Up to 60 days in jail; maximum fine of $500. Examples: some traffic offenses, certain low-level assault charges.</li>
        <li><strong>Second-Degree Misdemeanor (M2):</strong> Up to 90 days in jail; maximum fine of $750. Examples: certain criminal trespass charges, low-level criminal damaging.</li>
        <li><strong>First-Degree Misdemeanor (M1):</strong> Up to 180 days in jail; maximum fine of $1,000. Examples: OVI (first offense), domestic violence (first offense), assault, petty theft (repeat), criminal damaging, carrying concealed weapons (first offense).</li>
      </ul>
      <p>Misdemeanor cases are heard in municipal or county courts, depending on where the offense happened.</p>

      <h2>Ohio&apos;s felony classes</h2>
      <p>Felonies carry much heavier consequences. Under <a href="https://codes.ohio.gov/ohio-revised-code/section-2929.14" target="_blank" rel="noopener noreferrer">ORC 2929.14</a>, the sentencing ranges are:</p>
      <ul>
        <li><strong>Fifth-Degree Felony (F5):</strong> 6 to 12 months in prison; maximum fine of $2,500. Examples: receiving stolen property, fifth-degree felony theft ($1,000 to $7,500), possession of moderate amounts of controlled substances.</li>
        <li><strong>Fourth-Degree Felony (F4):</strong> 6 to 18 months in prison; maximum fine of $5,000. Examples: certain repeat domestic violence charges, unlawful sexual conduct, vehicular assault.</li>
        <li><strong>Third-Degree Felony (F3):</strong> 9 months to 3 years in prison (or 12 to 60 months for certain offenses); maximum fine of $10,000. Examples: some forms of felonious assault, aggravated assault, certain drug trafficking amounts.</li>
        <li><strong>Second-Degree Felony (F2):</strong> 2 to 8 years in prison; maximum fine of $15,000. Examples: aggravated arson, felonious assault causing serious harm, kidnapping in certain circumstances.</li>
        <li><strong>First-Degree Felony (F1):</strong> 3 to 11 years in prison (or up to life for some offenses); maximum fine of $20,000. Examples: aggravated murder (a death penalty specification is possible), rape, aggravated robbery, most major drug trafficking offenses.</li>
      </ul>
      <p>Felonies are prosecuted in the Court of Common Pleas in the county where the offense happened.</p>

      <h2>Collateral consequences</h2>
      <p>Beyond the sentence itself, misdemeanor and felony convictions carry <strong>collateral consequences</strong> that last long after the case ends. A felony conviction can cost you the right to vote while incarcerated (restored on release in Ohio under <a href="https://codes.ohio.gov/ohio-revised-code/section-2961.01" target="_blank" rel="noopener noreferrer">ORC 2961.01</a>); the right to possess firearms under federal law (18 U.S.C. § 922(g)(1)) and Ohio law; eligibility for some professional licenses (law, medicine, education and others); federal student loan eligibility (for drug convictions); access to public housing; and the ability to pass a background check for most jobs. Even a first-degree misdemeanor conviction can cause professional license problems, affect housing applications and show up on standard background checks for years.</p>

      <h2>How sealing eligibility differs</h2>
      <p>Record sealing rules differ between misdemeanors and felonies. Most misdemeanor convictions (except OVI and domestic violence) have a one-year waiting period and are easier to seal. Many felonies can be sealed too, but first- and second-degree felonies are categorically ineligible under <a href="https://codes.ohio.gov/ohio-revised-code/section-2953.36" target="_blank" rel="noopener noreferrer">ORC 2953.36</a>. F3 through F5 convictions may be eligible after a three-year waiting period, subject to other conditions. Our article on <a href="/our-law-firm/blog/what-is-expungement-ohio-2024">Ohio expungement</a> has the details.</p>

      <p>Whether you face a misdemeanor or a felony, the charge, the plea and the sentence all turn on decisions made early in the case. Jwayyed Law LLC provides <a href="/criminal-defense">criminal defense</a> representation throughout Ohio. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'ohio-power-of-attorney-guide',
    title: 'Ohio Power of Attorney: What You Need to Know',
    excerpt: 'How Ohio powers of attorney work: durable, financial and healthcare POAs, springing vs. immediate, choosing an agent, and how to revoke one.',
    category: 'Estate Planning',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-22',
    featured: false,
    image: '/assets/realestate-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>A power of attorney (POA) is a core part of any estate plan, yet people often skip it until a crisis makes it urgent. In Ohio, a POA authorizes the person you choose (your <strong>agent</strong> or <strong>attorney-in-fact</strong>) to make legally binding decisions for you. Depending on the type, those decisions can cover your finances, real estate, medical care or day-to-day personal affairs.</p>

      <h2>Ohio&apos;s durable power of attorney</h2>
      <p>Ohio&apos;s durable power of attorney for finances is governed by <a href="https://codes.ohio.gov/ohio-revised-code/chapter-1337" target="_blank" rel="noopener noreferrer">ORC Chapter 1337</a>. A <strong>durable</strong> POA stays in effect if the principal (the person granting authority) becomes incapacitated, which is the feature most people need. Without the "durable" designation, a standard POA ends automatically when the principal loses mental capacity, exactly when someone needs to act for you. Under <a href="https://codes.ohio.gov/ohio-revised-code/section-1337.09" target="_blank" rel="noopener noreferrer">ORC 1337.09</a>, a durable POA must be signed by the principal and notarized. Ohio also recommends (and many institutions require) signing in front of two witnesses who are not the agent or the agent&apos;s relatives.</p>

      <h2>Financial POA vs. healthcare POA</h2>
      <p>Ohio recognizes two main types. A <strong>financial (durable) POA</strong> lets your agent manage your bank accounts, pay bills, file taxes, manage investments, buy or sell real estate, run a business, and handle other financial and legal matters. A <strong>healthcare power of attorney</strong> (also called a healthcare proxy) lets your agent make medical decisions for you if you cannot communicate your wishes. Ohio governs the healthcare POA separately, and it usually belongs in an advance directive package with a <strong>living will</strong>, which states your wishes about life-sustaining treatment. The two documents do different jobs, and most people need both.</p>

      <h2>Springing vs. immediate POA</h2>
      <p>A <strong>springing POA</strong> takes effect only when a specified event happens, most often the principal&apos;s incapacity as certified by one or two physicians. The appeal is that your agent has no power until you need them. The drawback is delay: in an emergency, getting a physician&apos;s certification takes time. An <strong>immediate POA</strong> is effective once it is signed and notarized. Many estate planning attorneys now recommend an immediate durable POA naming a trusted agent, because it works without delay in a crisis. That makes choosing an agent you trust completely the key decision.</p>

      <h2>Who can serve as your agent?</h2>
      <p>Your agent must be at least 18 years old. Ohio law does not require the agent to be a relative, though most people choose a spouse, adult child, sibling or close friend. Your agent will have broad power and must act in your best interest as a fiduciary, so choose someone who is financially responsible, available and willing to serve, able to handle stressful decisions, and unlikely to have conflicts of interest. You can also name a successor agent to step in if your first choice cannot or will not serve.</p>

      <h2>How to revoke a power of attorney</h2>
      <p>As long as you have legal capacity, you can revoke a POA at any time. Put the revocation in writing, sign it, have it notarized and deliver it to your agent. If the POA was used with banks or other financial institutions, notify them directly. If it was used for real estate, record the revocation with the county recorder&apos;s office. It is also common to sign a new POA that expressly revokes earlier ones. Once you lose capacity, you can no longer revoke a POA, which is another reason to choose the agent carefully.</p>

      <h2>Why you need a POA even if you have a will</h2>
      <p>Many people assume a will covers everything. A will takes effect only at death and does nothing while you are alive but incapacitated. Without a durable POA, if illness, injury or cognitive decline leaves you incapacitated, your family may have no legal authority to pay your bills, manage your accounts or make decisions for you. They would have to petition the probate court for a <strong>guardianship</strong>, which is costly, slow and emotionally hard, and can take months while your affairs are on hold. A properly drafted POA costs a fraction of a guardianship and gives clear, immediate authority to someone you chose.</p>

      <p>Jwayyed Law LLC helps Ohio families put together estate plans that include durable powers of attorney, healthcare POAs, living wills and <a href="/other-services/estate-planning-wills">wills</a>. Contact the firm&apos;s <a href="/other-services/estate-planning">estate planning attorneys</a> at (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'what-happens-after-ovi-arrest-ohio',
    title: 'What Happens After an OVI Arrest in Ohio: The Timeline',
    excerpt: 'Each stage after an OVI arrest in Ohio, from booking and the license suspension to arraignment, plea talks, sentencing and BMV reinstatement.',
    category: 'OVI/DUI',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-23',
    featured: false,
    image: '/assets/dui-blog.jpg',
    gradient: 'from-[#2d3436] via-[#1a1a2e] to-[#b87333]/50',
    content: `
      <p>An OVI arrest in Ohio is disorienting, and most people have no idea what comes next. An Ohio OVI case runs on two parallel tracks, the administrative (BMV) proceeding over your driving privileges and the criminal prosecution, and both have to be handled at the same time. Here is the timeline after an OVI arrest in Ohio.</p>

      <h2>Immediately after arrest: booking and detention</h2>
      <p>After the arrest, you are taken to the local police station or county jail for booking: a photograph (mugshot), fingerprints, an inventory of your belongings and a records check. You are usually held until you are sober enough to be released, either on your own recognizance, after posting bond, or after a bail hearing if the circumstances call for detention. At some point you will be asked to take or refuse a chemical test (breath, blood or urine) under Ohio&apos;s implied consent law in <a href="https://codes.ohio.gov/ohio-revised-code/section-4511.191" target="_blank" rel="noopener noreferrer">ORC 4511.191</a>. That decision affects both the administrative and the criminal case.</p>

      <h2>The Administrative License Suspension (ALS)</h2>
      <p>The ALS is separate from the criminal case and starts immediately. If you failed a chemical test (a BAC of .08% or higher for adults, .04% for CDL holders operating a commercial vehicle, or .02% for drivers under 21) or refused it, the officer serves you with an ALS notice on behalf of the Ohio Bureau of Motor Vehicles. Your license is taken on the spot and you receive a temporary 15-day driving permit. You have <strong>30 days from the arrest date</strong> to appeal the ALS to the court handling your criminal case. Miss that deadline and you give up the right to contest the suspension. An attorney can file the appeal and ask for a stay of the ALS while it is pending, which may let you keep driving while the case is resolved.</p>

      <h2>Arraignment</h2>
      <p>Your first court appearance is the arraignment, usually within a few days to a week of the arrest. The judge formally reads the charges and you enter an initial plea, almost always "not guilty" at this stage. The court may also set bond conditions and address restrictions on your driving. Have an attorney present, or at least hired, by this point, because bond conditions that limit where you can go or require alcohol monitoring can be challenged here.</p>

      <h2>Pretrial hearings and discovery</h2>
      <p>After arraignment the case moves into the pretrial phase. Your attorney requests discovery from the prosecution: the police report, dash and body camera footage, breath or blood test results and calibration records, field sobriety test records and any witness statements. Much of this evidence is scientific or procedural and can be challenged. Breath machines must be properly calibrated and maintained, field sobriety tests must follow standardized protocols, and blood draws must follow specific procedures to avoid contamination. Your attorney may file pretrial motions to suppress unlawfully obtained evidence. If the stop lacked reasonable articulable suspicion, for example, everything gathered afterward may be inadmissible.</p>

      <h2>Plea negotiations</h2>
      <p>Most OVI cases end in a plea agreement rather than a trial. Your attorney weighs the strength of the prosecution&apos;s evidence and negotiates for reduced charges, lighter penalties or alternative sentencing. Common outcomes include a reduction from OVI to "physical control" (a lesser charge under <a href="https://codes.ohio.gov/ohio-revised-code/section-4511.194" target="_blank" rel="noopener noreferrer">ORC 4511.194</a>), a reduction to reckless operation, or an OVI plea with an agreed sentencing recommendation. How far the prosecutor will negotiate depends mostly on the quality of the evidence and your prior record.</p>

      <h2>Trial</h2>
      <p>If no acceptable plea is reached, the case goes to trial, before a judge (a bench trial) or a jury. Your attorney will challenge the stop, the field sobriety tests, the chemical test results and the officer&apos;s observations. The prosecution must prove beyond a reasonable doubt that you were operating a vehicle while impaired or with a prohibited BAC.</p>

      <h2>Sentencing and alternatives to jail</h2>
      <p>A first-offense OVI conviction under <a href="https://codes.ohio.gov/ohio-revised-code/section-4511.19" target="_blank" rel="noopener noreferrer">ORC 4511.19</a> carries a mandatory minimum of 3 days in jail (or a Driver Intervention Program in its place), up to 6 months in jail, a fine of $375 to $1,075, and a license suspension of 1 to 3 years. The <strong>Driver Intervention Program (DIP)</strong> is a 72-hour residential alcohol and drug education program that satisfies the mandatory jail minimum. An <strong>ignition interlock device (IID)</strong> may be required, or offered as a condition of limited driving privileges. Community service, probation and alcohol or drug counseling are common parts of the sentence. An <a href="/ovi-dui-defense">OVI attorney</a> can argue for the lightest sentence the facts allow.</p>

      <h2>BMV reinstatement after an OVI</h2>
      <p>When the suspension ends, you apply to the Ohio BMV to reinstate your license. You must pay the fees (typically $475 for a first OVI), complete any required remedial driving course or DIP, meet any SR-22 requirement (a high-risk insurance filing kept for three years), and satisfy any other court-ordered conditions. Driving under suspension is a separate crime under <a href="https://codes.ohio.gov/ohio-revised-code/section-4510.11" target="_blank" rel="noopener noreferrer">ORC 4510.11</a>, so do not drive until reinstatement is confirmed.</p>

      <p>If you have been arrested for OVI in Ohio, involve an attorney early, before the ALS deadline passes. Jwayyed Law LLC provides <a href="/ovi-dui-defense">OVI defense</a> representation across Ohio. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'ohio-civil-protection-order-guide',
    title: 'Civil Protection Orders in Ohio: What You Need to Know',
    excerpt: 'How Ohio domestic violence and stalking protection orders work, from the ex parte order to the full hearing, what an order can require, and how to contest one.',
    category: 'Civil Litigation',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-24',
    featured: false,
    image: '/assets/criminallaw-blog2.jpg',
    gradient: 'from-[#b87333]/40 via-[#2d3436] to-[#1a1a2e]',
    content: `
      <p>A civil protection order (CPO) in Ohio restricts one person&apos;s contact with another. It can affect where you live, whether you may have firearms, your relationship with your children and where you are allowed to go. This applies whether you are seeking protection or are the respondent named in a petition. The primary statute governing CPOs in Ohio is <a href="https://codes.ohio.gov/ohio-revised-code/section-2903.214" target="_blank" rel="noopener noreferrer">ORC 2903.214</a>.</p>

      <h2>Types of protection orders in Ohio</h2>
      <p>Ohio has several types of protection order, depending on the relationship between the parties and the conduct involved. The <strong>Domestic Violence Civil Protection Order (DVCPO)</strong>, governed by <a href="https://codes.ohio.gov/ohio-revised-code/section-3113.31" target="_blank" rel="noopener noreferrer">ORC 3113.31</a>, protects family or household members from domestic violence. The <strong>Civil Stalking Protection Order (CSPO)</strong>, governed by <a href="https://codes.ohio.gov/ohio-revised-code/section-2903.214" target="_blank" rel="noopener noreferrer">ORC 2903.214</a>, is available to anyone who is a victim of stalking, menacing by stalking or a sexually oriented offense, whatever the relationship. So a DVCPO requires a family or household relationship and a CSPO does not. Both come in temporary (ex parte) and full versions.</p>

      <h2>Temporary ex parte orders</h2>
      <p>A petitioner (the person seeking protection) can get a <strong>temporary ex parte protection order</strong> without the respondent being present or notified beforehand. The petitioner files in the domestic relations division of the Court of Common Pleas (for a DVCPO) or in municipal or common pleas court (for a CSPO), with a sworn statement describing the threat or conduct. If the judge finds an immediate and present danger based on the petition, a temporary order is issued the same day. It takes effect when a law enforcement officer serves it on the respondent. Temporary ex parte orders typically last 7 to 10 days, until a full hearing can be held.</p>

      <h2>The full hearing</h2>
      <p>Once the temporary order is issued, a full hearing is scheduled soon after (typically within 7 to 10 days for a DVCPO). Both parties may appear, present evidence, call witnesses and be represented by attorneys. The petitioner must prove by a <strong>preponderance of the evidence</strong> (more likely than not) that the respondent committed or threatened domestic violence (for a DVCPO) or stalking or menacing (for a CSPO). If the petitioner meets that burden, a full CPO may be issued for up to <strong>five years</strong>, and it can be renewed. If the petitioner does not appear or does not meet the burden, the case may be dismissed and the temporary order dissolved.</p>

      <h2>What a CPO can require</h2>
      <p>A full civil protection order can bar the respondent from contacting or communicating with the petitioner (and their children and household members); require the respondent to leave a shared residence even if they are on the lease or own the property; give the petitioner temporary custody of children; require the respondent to surrender firearms; bar the respondent from coming within a set distance of the petitioner&apos;s home, workplace or school; and award temporary support. The terms are set to fit each case.</p>

      <h2>Penalties for violating a CPO</h2>
      <p>Violating a civil protection order is a crime in Ohio. A first violation is a <strong>first-degree misdemeanor</strong> under <a href="https://codes.ohio.gov/ohio-revised-code/section-2919.27" target="_blank" rel="noopener noreferrer">ORC 2919.27</a>, punishable by up to 180 days in jail and a $1,000 fine. Later violations, or violations involving felony conduct, can be charged as fourth- or third-degree felonies. Police treat CPO violations seriously, and contact that seems minor, such as a text message or a social media like, can lead to arrest and prosecution.</p>

      <h2>Defending against a CPO</h2>
      <p>If a CPO petition has been filed against you, you have the right to contest it at the full hearing. An order can affect your housing, your parental rights, your job (especially in law enforcement, education or a licensed profession) and your firearm rights. An attorney can review the evidence, find weaknesses in the petitioner&apos;s allegations, cross-examine witnesses, present your evidence, and argue against the order or against how broad its terms are. If you do not appear at the full hearing, a default CPO is usually issued against you, so do not ignore the court date.</p>

      <p>Whether you need a protection order for your safety or are responding to one filed against you, Jwayyed Law LLC handles <a href="/civil">civil litigation</a> matters, including protection order proceedings, throughout Ohio. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'starting-ohio-nonprofit-organization',
    title: 'Starting a Nonprofit in Ohio: Legal Requirements and Steps',
    excerpt: 'The steps to form an Ohio nonprofit: board, $99 articles, bylaws, EIN, IRS 501(c)(3) status, Attorney General registration and ongoing filings.',
    category: 'Business Law',
    author: 'Jwayyed Jwayyed',
    date: '2026-03-25',
    featured: false,
    image: '/assets/businesslaw-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>A nonprofit organization in Ohio can support a community, advance a cause or provide charitable services. Legally, though, forming one is more involved than forming a for-profit business. It takes state incorporation, internal governance, IRS tax-exempt status and ongoing compliance. Getting each step right at the start prevents costly mistakes later.</p>

      <h2>Ohio nonprofit corporations: the legal framework</h2>
      <p>Ohio nonprofit corporations are governed by <a href="https://codes.ohio.gov/ohio-revised-code/chapter-1702" target="_blank" rel="noopener noreferrer">Ohio Revised Code Chapter 1702</a>, the Ohio Nonprofit Corporation Law. A nonprofit corporation is a legal entity separate from its founders, directors and officers. It can own property, sign contracts, sue and be sued, and receive charitable donations. It can be organized and run for charitable, educational, religious, scientific or other exempt purposes, but no part of its net earnings may benefit any private individual. That is what separates it from a for-profit entity.</p>

      <h2>Step 1: Define your mission and structure</h2>
      <p>Before filing anything, define the organization&apos;s purpose and how it will be governed: what problem it addresses, who benefits and how decisions get made. Ohio law requires a nonprofit corporation to have at least <strong>three directors</strong> (under ORC 1702.10). Directors oversee the organization, set policy, approve budgets and keep it on mission. They are not paid for board service, though staff may be. Choosing initial board members with relevant expertise, real commitment and no conflicts of interest is one of the most important early decisions.</p>

      <h2>Step 2: Draft and file articles of incorporation</h2>
      <p>To form an Ohio nonprofit corporation, you file <strong>Articles of Incorporation</strong> with the Ohio Secretary of State under <a href="https://codes.ohio.gov/ohio-revised-code/section-1702.04" target="_blank" rel="noopener noreferrer">ORC 1702.04</a>. The articles must include the organization&apos;s name (which must include "Corporation," "Inc.," "Company" or similar unless a waiver is obtained); the corporation&apos;s purpose; a statement that it is a nonprofit corporation; the name and address of a statutory agent in Ohio; and a statement on how assets are distributed at dissolution. The IRS requires that last item: assets must go to another exempt organization, not to private individuals. The filing fee is <strong>$99</strong> as of 2025. Ohio offers standard form articles, but articles drafted for your specific purpose and the IRS requirements are strongly recommended.</p>

      <h2>Step 3: Draft your bylaws</h2>
      <p>Bylaws are the nonprofit&apos;s internal operating rules. They are not filed with the state, but they govern how the organization runs, and the IRS requires them as part of the tax-exempt application. Bylaws should cover the number, terms, election and removal of directors; the roles of officers; meeting rules (frequency, quorum and voting); conflict of interest policies; how the bylaws can be amended; and how assets are distributed at dissolution. Well-drafted bylaws prevent internal disputes and show the IRS that the organization is set up for exempt purposes rather than private benefit.</p>

      <h2>Step 4: Get an EIN and open a bank account</h2>
      <p>After incorporation, your nonprofit needs an <strong>Employer Identification Number (EIN)</strong> from the IRS, even with no employees. You use it to open a bank account, file tax returns and complete the 501(c)(3) application, and you can get one free on the IRS website. Then open a bank account in the organization&apos;s name, and never mix organizational and personal funds.</p>

      <h2>Step 5: Apply for federal tax-exempt status (IRS Form 1023)</h2>
      <p>Tax-exempt status under <strong>IRS Section 501(c)(3)</strong> lets donors deduct their contributions and exempts the organization from federal income tax. Most nonprofits apply on <strong>Form 1023</strong> (the full application) or <strong>Form 1023-EZ</strong> (a shorter version for smaller organizations with projected annual gross receipts of $50,000 or less). The application asks for your articles of incorporation, bylaws, a detailed description of activities, financial data (projected budgets) and information about governance. IRS review can take several months. On approval, the IRS issues a determination letter confirming your 501(c)(3) status. Keep it permanently; you will need it for grant applications, donations and compliance.</p>

      <h2>Step 6: Register with the Ohio Attorney General</h2>
      <p>Ohio requires most charitable organizations that solicit donations from Ohioans to register with the <strong>Ohio Attorney General's Charitable Law Section</strong> under <a href="https://codes.ohio.gov/ohio-revised-code/section-1716.02" target="_blank" rel="noopener noreferrer">ORC 1716.02</a>. You file an initial registration form, pay a fee (currently $0 to $200 depending on gross receipts) and submit financial statements, then file annual renewal reports. Failing to register can bring penalties and put your ability to solicit legally in Ohio at risk.</p>

      <h2>Ongoing compliance obligations</h2>
      <p>To keep your 501(c)(3) status and good standing in Ohio, you must file IRS Form 990 every year (990-N, 990-EZ or 990, depending on revenue); file annual Ohio nonprofit biennial reports with the Secretary of State; renew your Attorney General charitable registration annually; hold regular board meetings and keep minutes; keep a conflict of interest policy; and avoid prohibited activities (excessive private benefit, substantial lobbying and political campaign activity). If you fail to file Form 990 for three consecutive years, the IRS automatically revokes your tax-exempt status.</p>

      <p>Jwayyed Law LLC helps Ohio nonprofit founders with <a href="/business">business formation</a>, governance documents and compliance planning. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
    `,
  },
  {
    slug: 'fra-suspension-ohio-what-it-is-how-to-fix',
    title: 'What Is an FRA Suspension in Ohio (and How to Fix It)?',
    excerpt: 'An Ohio FRA suspension comes from missing proof of insurance. What triggers it, the SR-22 and reinstatement fees, and how to seek driving privileges.',
    category: 'Criminal Defense',
    author: 'Jwayyed Jwayyed',
    date: '2026-06-23',
    featured: false,
    image: '/assets/dui-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>An FRA suspension is one of the most common license suspensions in Ohio, and one of the most confusing. It has nothing to do with DUI or criminal charges. It is triggered by failing to maintain proof of insurance under Ohio&apos;s Financial Responsibility Act (FRA), ORC Chapter 4509.</p>
      <h2>What triggers an FRA suspension</h2>
      <p>Ohio requires every driver to carry at least minimum liability insurance. An FRA suspension can be triggered when (1) you are in an accident and cannot show proof of insurance; (2) you do not answer a random BMV verification request; or (3) your insurance lapses and your insurer notifies the BMV. HB 29 (effective April 9, 2025) restructured the BMV&apos;s random verification program, so if you receive a verification request, answer it promptly.</p>
      <h2>Reinstatement requirements</h2>
      <p>To clear an FRA suspension, Ohio generally requires (1) proof of current insurance (an SR-22 certificate your insurer files with the BMV); (2) payment of reinstatement fees under ORC 4509.101: $40 for a first suspension, $300 for a second, and $600 for a third or later one; and (3) keeping the SR-22 in place for the required period (typically one year).</p>
      <h2>Limited driving privileges</h2>
      <p>During an FRA suspension, you may be eligible for limited driving privileges for work, school or medical appointments, and an attorney can petition the court or the BMV for them. Driving on a suspended license, including an FRA suspension, is a criminal offense in Ohio (Driving Under Suspension, ORC 4510.11).</p>
      <p>If you have an FRA suspension or a <a href="/criminal-defense/driving-under-suspension">driving under suspension charge</a>, Jwayyed Law LLC can help. The firm represents clients throughout Ohio, including Franklin County, in criminal and traffic matters. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
      <p><em>This article is for general educational purposes only and does not constitute legal advice. Ohio law as of 2026 including HB 29 (effective April 9, 2025). Consult an attorney for advice on your specific situation.</em></p>
    `,
  },
  {
    slug: 'what-to-expect-circleville-municipal-court-pickaway-county',
    title: 'What to Expect in Circleville Municipal Court (Pickaway County)',
    excerpt: 'Appearing in Circleville Municipal Court in Pickaway County: the cases it hears, arraignment and pretrial, what to bring and how to conduct yourself.',
    category: 'Criminal Defense',
    author: 'Jwayyed Jwayyed',
    date: '2026-06-23',
    featured: false,
    image: '/assets/courthouse-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>Circleville Municipal Court serves the City of Circleville and Pickaway County. If you have been charged with an OVI, a misdemeanor or a traffic offense in the Circleville area, your case will be heard there. Attorney Jwayyed Jwayyed previously served as Assistant Law Director for the City of Circleville and knows the court&apos;s procedures, judges and local practices.</p>
      <h2>Jurisdiction and location</h2>
      <p>Circleville Municipal Court is at 151 E. Franklin St., Circleville, OH 43113. It handles misdemeanor criminal offenses, OVI/DUI, traffic violations, and civil cases up to $15,000 under ORC 1901.17 and ORC 1901.20. Felony charges are bound over to Pickaway County Common Pleas Court.</p>
      <h2>What to expect at arraignment</h2>
      <p>At arraignment, the court formally reads the charges and asks for your plea: not guilty, guilty or no contest. In most cases a not guilty plea is the better choice, because it keeps your options open and gives your attorney time to review the evidence. The court will set release conditions (personal recognizance or bail) and schedule a pretrial conference.</p>
      <h2>Pretrial conference</h2>
      <p>At the pretrial, your attorney and the prosecutor exchange discovery (police reports, dashcam footage, test results) and discuss possible resolutions. Many cases resolve at or after this stage. If there is no agreement, the case goes to trial.</p>
      <h2>Practical tips</h2>
      <p>Arrive early, dress professionally, and bring your ID and any paperwork about the case. Do not discuss your case in the hallways. If you have a lawyer, let your attorney do the talking in court.</p>
      <p>Jwayyed Law LLC regularly appears at Circleville Municipal Court and in courts throughout Pickaway County. If you have been charged with an OVI or a misdemeanor in Circleville, call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
      <p><em>This article is for general educational purposes only and does not constitute legal advice. Court rules and procedures may change. Consult an attorney for advice on your specific case.</em></p>
    `,
  },
  {
    slug: 'ovi-charges-ohio-university-students-athens',
    title: 'OVI Charges for Ohio University Students: What Athens Defendants Should Know',
    excerpt: 'For Ohio University students, an OVI in Athens can also bring student conduct action and trouble with professional programs. What is at stake.',
    category: 'OVI/DUI',
    author: 'Jwayyed Jwayyed',
    date: '2026-06-23',
    featured: false,
    image: '/assets/dui-blog.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>Athens, Ohio is a college town, and OVI charges against Ohio University students are common at Athens Municipal Court. For a student, an OVI reaches beyond the criminal case. It can lead to academic consequences, affect financial aid and threaten future professional licenses.</p>
      <h2>Where your case will be heard</h2>
      <p>OVI arrests in Athens are usually handled at Athens Municipal Court, 8 E. Washington St., Athens, OH 45701. The court has jurisdiction over misdemeanor OVI charges arising in Athens County and hears a high volume of student cases each academic year.</p>
      <h2>The criminal consequences</h2>
      <p>A first OVI conviction in Ohio under ORC 4511.19 carries a mandatory minimum of 3 days in jail (or a 3-day driver intervention program), a fine of $375 to $1,075, a license suspension of 1 to 3 years, and points on your record. A BAC at or above 0.17 (high-tier OVI) brings higher mandatory minimums. An OVUAC charge (under 21, with a BAC of 0.02 to 0.079) carries different penalties that are still serious.</p>
      <h2>Academic and financial aid consequences</h2>
      <p>Ohio University&apos;s Student Code of Conduct prohibits operating a vehicle under the influence, and a criminal conviction can lead to a student conduct referral. Separately, federal financial aid (Pell Grants and subsidized loans) can be affected by drug-related convictions. OVI is not a drug offense, but each school applies its own standards. Professional programs such as nursing, education and law run background checks, and an OVI can complicate admission.</p>
      <h2>Administrative License Suspension (ALS)</h2>
      <p>If you refused a breath or blood test, or tested at 0.08 or above at the scene, an Administrative License Suspension takes effect immediately, separate from the criminal case. You have 30 days to appeal the ALS, so act quickly.</p>
      <p>Jwayyed Law LLC defends OVI charges at Athens Municipal Court and throughout Ohio, including Franklin County. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
      <p><em>This article is for general educational purposes only and does not constitute legal advice. Ohio law as of 2026. Consult an attorney for advice on your specific situation.</em></p>
    `,
  },
  {
    slug: 'estate-planning-new-parents-central-ohio',
    title: 'Estate Planning for New Parents in Central Ohio',
    excerpt: 'How central Ohio parents can name a guardian in a will, update beneficiary designations, consider a living trust and set up powers of attorney.',
    category: 'Estate Planning',
    author: 'Jwayyed Jwayyed',
    date: '2026-06-23',
    featured: false,
    image: '/assets/estatePlanning.jpg',
    gradient: 'from-[#1a1a2e] via-[#2d3436] to-[#b87333]/60',
    content: `
      <p>Having a child raises the stakes of an unfinished estate plan. Before, it was an inconvenience. Now it can mean a court deciding who raises your child. A basic estate plan, drafted and signed, settles that question, and it does not have to be complicated.</p>
      <h2>Naming a guardian</h2>
      <p>For new parents, the most important job of a will is naming a guardian for minor children. Under ORC 2111.12 and ORC 2111.121, a parent can nominate a guardian in a will. If both parents die without naming one, the Probate Court appoints a guardian, often after a contested hearing among relatives. Naming your choice does not guarantee the court will follow it, but it puts your preference on record, and courts take that seriously.</p>
      <h2>A will is not enough by itself</h2>
      <p>A will controls assets that pass through your estate, meaning property in your name alone with no beneficiary designation. It does not control life insurance, 401(k)s, IRAs or joint accounts with right of survivorship, so review and update the beneficiary designations on every financial account. If you name your estate as the beneficiary of a life insurance policy, the money goes through probate, which is slower and more expensive than a direct transfer to a named beneficiary.</p>
      <h2>Consider a revocable living trust</h2>
      <p>If you want to avoid probate and control when your children receive assets (for example, at age 25 rather than 18), a <a href="/trusts/revocable-living-trusts">revocable living trust</a> is worth considering. You keep full control during your lifetime, and assets held in the trust pass outside probate at your death.</p>
      <h2>Powers of attorney</h2>
      <p>A durable power of attorney names someone to handle your finances if you are incapacitated, and a healthcare power of attorney names someone to make medical decisions. They matter most for young parents, because an accident or illness that temporarily incapacitates you should not freeze your family&apos;s finances.</p>
      <p>Jwayyed Law LLC helps central Ohio families with <a href="/trusts">estate planning</a>, wills, trusts and powers of attorney throughout Ohio, including Franklin County. Call (614) 285-5482 or <a href="/contact">schedule a consultation</a>.</p>
      <p><em>This article is for general educational purposes only and does not constitute legal advice. Ohio law as of 2026 including ORC 2111.12 and ORC 2111.121. Consult an attorney for advice on your specific estate planning situation.</em></p>
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
