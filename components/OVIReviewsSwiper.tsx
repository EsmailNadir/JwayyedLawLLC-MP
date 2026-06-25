'use client';

import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const oviReviews = [
  // newest
  { name: "Devaughn Poore-Garnett", rating: 5, platform: "Google", text: "If you're in need of an attorney that cares about your case and the best results, JJ is your guy. I was facing my 3rd OVI offense in 10 years which could come with felony charges. Just a simple drive home to Circleville and then bam!" },
  { name: "Rapsidy Lee", rating: 5, platform: "Google", text: "Hired Jwayyed for an OVI crash with a high blood test. He was very proactive in getting things we needed done. I was let off with no jail time or probation!" },
  { name: "Kyce Ally", rating: 5, platform: "Google", text: "Got me a speeding ticket reduced in Fairlawn." },
  { name: "Yousef", rating: 5, platform: "Google", text: "Helped me formulate my business." },
  { name: "Derrick Nelson", rating: 5, platform: "Google", text: "JJ is very professional and will get the results you need!" },
  { name: "Jack White", rating: 5, platform: "Google", text: "JJ was a great lawyer to work with during my stressful time. He took my case in Mount Vernon which was over an hour from his office. He reached out and kept in contact updating me on the case and really went to bat for me when it looked like things weren't going well." },
  { name: "Brooke Wear", rating: 5, platform: "Google", text: "I recently got pulled over in Circleville texting while driving — my second one in a year. JJ got it reduced to absolutely no points & was willing to drive to Circleville for my case — actually he drove twice. His prices were amazing!" },
  { name: "Amanda Hauke", rating: 5, platform: "Google", text: "Very prompt response! Great value. Took on my employment/civil case quickly. I had what I needed fast, and I felt very supported. Thank you, JJ!" },
  { name: "Amanda Gardner", rating: 5, platform: "Google", text: "My Criminal Case Success Story because of Jwayyed Law!! I had an active warrant in Wilmington, a driver's license block, and was facing potential jail time." },
  { name: "Creation Sensation", rating: 5, platform: "Google", text: "I highly recommend Jwayyed Law LLC to anyone facing an OVI or other criminal charges. After being involved in an accident in Vandalia, I was facing serious concerns about my case. Attorney JJ was aggressive in his representation and took the time to understand my situation." },
  { name: "Samantha Mannon", rating: 5, platform: "Google", text: "Called and he answered right away about a civil litigation consultation. Professional and kind." },
  { name: "DeShawn Byrd", rating: 5, platform: "Google", text: "I highly recommend Jwayyed Law LLC. I hired Mr. Jwayyed only 3 days before my court date for an OVI case in Vandalia involving a breath test and positive urine sample, and he helped me tremendously. He was able to get my case reduced." },
  { name: "Sarah Odeh", rating: 5, platform: "Google", text: "Absolutely recommend Jwayyed Law LLC! From the moment I called, the team was professional, responsive, and genuinely cared about helping me. They explained everything clearly, stayed on top of communication, and made the entire legal process manageable." },
  { name: "Mohammad Mohammad", rating: 5, platform: "Google", text: "Jwayyed helped me tremendously with starting my business. He assisted me with everything from understanding business formation, reviewing and editing the lease, getting my EIN, setting up operating agreements and legal paperwork." },
  { name: "Brent Swaro", rating: 5, platform: "Google", text: "Highly recommend, put my mind at ease. Thank you very much." },
  { name: "Ronald Captain", rating: 5, platform: "Google", text: "Great lawyer — I have a CDL, he saved my CDL, I didn't have to pay a reinstatement fee, he got my OVI reduced and he saved my job. I recommend him a 1000 times over." },
  { name: "Saeed Ally", rating: 5, platform: "Google", text: "After an accident, our insurance company totaled our car and came back with an offer that was nowhere near market value. On top of that, they kept jerking us around with delays, excuses, and constant back and forth. It honestly felt like we were fighting a losing battle — until we called JJ." },
  { name: "Usayd Ally", rating: 5, platform: "Google", text: "I had an accident recently and was really worried because I already had prior points on my record. I decided to call JJ, and that turned out to be the best decision I could've made. He handled everything professionally and kept me informed throughout the process." },
  { name: "Angela Atkinson", rating: 5, platform: "Google", text: "Excellent last-minute legal help. I contacted this attorney at the very last minute when I had court and did not have representation. He stepped in quickly, was professional, prepared, and truly fought for me." },
  { name: "Euro Impulse", rating: 5, platform: "Google", text: "JJ and his team are highly professional and knowledgeable when it comes to business law. He breaks down complex legal matters in a clear, practical way and is always responsive throughout the process. If you need someone reliable to protect and guide your business to avoid litigation, 100% Jwayyed is your guy!!" },
  { name: "Dante A", rating: 5, platform: "Google", text: "He was super friendly and gave me a great free consultation and legal advice. Definitely knowledgeable and knows what he's doing — highly recommend." },
  { name: "Susan Reid", rating: 5, platform: "Google", text: "Great attorney! He helped my fiancee! Answered calls and had great communication during the process!" },
  { name: "Elizabeth Cockerham", rating: 5, platform: "Google", text: "I had a great experience working with Jwayyed on my case. He was professional, knew what he was doing, and took the time to clearly explain the process to me. He made a stressful situation much more manageable and answered any questions I had." },
  { name: "Stephanie Prenatt", rating: 5, platform: "Google", text: "JJ and his staff were incredibly helpful, they saved us almost $10,000 in fines and court costs, and most importantly my license was reinstated." },
  { name: "Dan Smith", rating: 5, platform: "Google", text: "JJ was an incredibly nice attorney who understood my situation and worked to get me the best results possible." },
  { name: "Daniel Smith", rating: 5, platform: "Google", text: "JJ did an exceptional job representing me at court. You couldn't ask for a better attorney. I highly recommend him!" },
  { name: "Itaf Ally", rating: 5, platform: "Google", text: "An excellent overall experience." },
  { name: "aleasha waldron", rating: 5, platform: "Google", text: "Jay went above and beyond to try and ensure the best possible outcome. The courts wanted to lock me up but Jay got it down to just a fine! Thank you so much! If you want the best then call JJay!!" },
  { name: "Fatima Verdi", rating: 5, platform: "Google", text: "Really great experience, everything was done seamlessly and with great communication. I would highly recommend Jwayyed Law to anyone and I cannot thank them enough!" },
  { name: "Bruce Burns", rating: 5, platform: "Google", text: "Jwayyed Law was amazing, really saved me. Always answered my calls even after hours. I'd definitely use him again. Got my charges dropped significantly. Thank you." },
  { name: "Kathryn", rating: 5, platform: "Google", text: "I had an excellent experience working with Jwayyed and would highly recommend his services to anyone in need of strong, reliable legal representation. From the beginning, he demonstrated an understanding of my situation and kept the cost reasonable." },
  { name: "Damn Quanboi", rating: 5, platform: "Google", text: "I was getting a runaround from other attorneys that rushed me, but this guy sat on the phone with me for almost 2 hours on a Sunday to get me caught up with all my cases — even though I couldn't pay him. I needed help & he 100% helped me find every case that I needed handled." },
  { name: "Wes Potts", rating: 5, platform: "Google", text: "This law firm is excellent. I am an owner of a S-Corp, and as such I am prevented from representing my business in court. That part was frustrating, however Jwayyed Law handled my small claims case with complete professionalism." },
  { name: "Damilola Celina Fashina", rating: 5, platform: "Google", text: "I'm very grateful for the support and expertise my lawyer provided during my DUI case. From the beginning, they were clear, patient, and confident in handling my situation. Thanks to their hard work, my charge was dropped." },
  { name: "Jayden Wells", rating: 5, platform: "Google", text: "Great guy, came all the way from Columbus to get my ticket taken care of. 10/10." },
  { name: "Sweet Tee", rating: 5, platform: "Google", text: "Was very professional, responded to every email and text quickly. Willing to travel from Columbus to Fairfield Ohio. Rates were reasonable and worked with us on making payments. Very knowledgeable and able to get everything reduced. Was worth every penny. I would recommend his services to everyone." },
  { name: "AJ H", rating: 5, platform: "Google", text: "Jwayyed Law is the best in the land. Very professional, precise and outright grounded. Very trusted and reputable source. You can put full faith with this one. No regrets!" },
  { name: "Fantom M", rating: 5, platform: "Google", text: "Absolutely incredible!! I can't recommend him enough. He's truly the best lawyer out there — a lifesaver!" },
  { name: "Terry", rating: 5, platform: "Google", text: "Super nice guy. Didn't hesitate to text, email or call back right away. Was very polite and knowledgeable about the law. Worked his magic before court even started. Definitely took care of business. Very reasonable rate as well. Would definitely recommend him. If I ever needed an attorney again I wouldn't hesitate to call him." },
  { name: "Steelo Fre", rating: 5, platform: "Google", text: "Really did a great job on my CDL ticket. I would recommend you go with Jwayyed for any court case — very reasonable on price." },
  { name: "Lori", rating: 5, platform: "Google", text: "I was not in the position to dish out thousands of dollars for an attorney when I truly needed one. Jwayyed Law made me feel at ease, less ashamed, and walked me through step by step everything that would be happening. I was scared and he made the whole process so much less overwhelming." },
  { name: "Youssef Saifi", rating: 5, platform: "Google", text: "I am very grateful to Jwayyed Law LLC for their excellent work on my case. From the beginning, they were professional, responsive, and gave me confidence during a stressful situation." },
  { name: "Nader Zidan", rating: 5, platform: "Google", text: "Outstanding experience from start to finish — Jwayyed explained everything clearly and handled the legal planning documents with care. The process was smooth and organized. I felt confident and supported the whole way and would highly recommend their services." },
  { name: "Allison Tharan", rating: 5, platform: "Google", text: "Amazing job!! Would refer to anyone needing the help. I got an OVI and was looking at jail time, a big fine, and was about to lose my license. He got it dropped to a reckless operation, the fine reduced to 1/3 of what it was going to be, no jail time and got my license back. Best lawyer in the land!!" },
  { name: "Jay Mayberry", rating: 5, platform: "Google", text: "Highly recommend Jwayyed — got my second OVI dropped down to a reckless op. Very knowledgeable and professional." },
  { name: "Luke Lewis", rating: 5, platform: "Google", text: "I can't recommend Attorney Jwayyed enough. My incident happened on a Saturday night into Sunday morning, and I called him around 7 PM that Sunday. He answered right away and spent about 40 minutes on the phone with me, explaining everything clearly and putting my mind at ease." },
  { name: "Derek Ramsey", rating: 5, platform: "Google", text: "I was traveling to the University of Cincinnati for my daughter's freshman move-in weekend. JJ not only knew the law but he knew everyone in the system and could communicate effectively on my behalf. Most importantly, he calmed my nerves. Today I do not have an OVI on my record. I did not spend any more time in jail. I did not lose my license. I am blessed and forever grateful." },
  { name: "Mazi B", rating: 5, platform: "Google", text: "I had a case for an OVI, and Jwayyed was my attorney. I was super nervous at first but he guided me through it all, helped me understand all our options. A couple weeks later he let me know that he would be trying to drop my charges." },
  { name: "Manmohan Judge", rating: 5, platform: "Google", text: "I am a CDL holder. I got cited for an accident when the other vehicle hit mine. My employer did not believe it and put me on leave, turning my world upside down. I was lucky to find JJ. He fought for me. Answered the phone and texts at all hours." },
  { name: "Whitney Yoder", rating: 5, platform: "Google", text: "He represented me and got my charges dismissed due to mistreatment of law enforcement." },
  { name: "Gabriel", rating: 5, platform: "Google", text: "Most attorneys take your money & leave you out to dry, I can assure you this is most certainly not the case with Mr. JJ! I knew I was facing an uphill battle & quite frankly didn't know of a strategy we could possibly put forward. This man completely took me off guard with the angles he attacked from. You really can't find better to entrust the fate of your case to. He has a heart & will fight for you like you're his family." },
  { name: "Mustang Guru", rating: 5, platform: "Google", text: "If he could cover 50 states he would be the only guy I choose. This attorney got a serious CDL violation down to a moving violation in the matter of one business day. Very straightforward, friendly and tactical with cases. If you're in Ohio it's worth the money — saved me from a suspension." },
  { name: "Josh Gibson", rating: 5, platform: "Google", text: "JWAYYED, this gentleman here came through like a hurricane. As he tore my traffic case apart and dissected key evidence to dropping and reducing the charges I had. With my lengthy criminal record from past mistakes I had no bargain coming. JJ got my speed ticket tossed out and the OVI dropped from a M1 to M4. I highly recommend!" },
  { name: "Lisa", rating: 5, platform: "Google", text: "Professional Player who knows the Law! Will use again if I need to but hopefully will not be needed!! Will refer to others who might need a lawyer!!" },
  { name: "A.R.S.", rating: 5, platform: "Google", text: "I honestly can't say enough good things about this team. From start to finish, they were dedicated, responsive, and genuinely cared about helping me through every step of the process." },
  { name: "Ace Lomax", rating: 5, platform: "Google", text: "Great guy will fight for your freedom — best experience ever. Thank you again, God bless." },
  { name: "Adnan Bashir", rating: 5, platform: "Google", text: "I had an excellent experience working with Jwayyed Law LLC. From the very first consultation, they were professional, knowledgeable, and genuinely cared about my case. They took the time to explain everything clearly and made me feel confident throughout the process." },
  { name: "Omar Heif", rating: 5, platform: "Google", text: "Cool guys." },
  { name: "Ayesha Momin", rating: 5, platform: "Google", text: "Great!" },
  { name: "Rushdi Ziad", rating: 5, platform: "Google", text: "Working with Mr. Jwayyed was one of the best decisions I could have made. I was dealing with a ticket that had me really stressed, but he took over and handled everything with skill and professionalism. He was always quick to respond, explained every step clearly, and made sure I understood my options. The ticket was taken care of, and I couldn't be more relieved." },
  { name: "Mike Clement", rating: 5, platform: "Google", text: "I recently received a traffic ticket in Akron, and Jwayyed was instrumental in helping me avoid additional points on my license. From the start, he was very professional, responsive, and clearly knowledgeable about local traffic laws. He worked quickly to negotiate a reduced charge, which ultimately saved me from increased insurance rates and license penalties." },
  { name: "Heba El-Hosseiny", rating: 5, platform: "Google", text: "My experience with Jwayyed was incredible. He was attentive in the discovery phase of my case and made sure to keep me in the loop on all actions that were taken on my behalf. Communication with him was very timely and he made himself available whenever I needed." },
  { name: "Yazen Karajat", rating: 5, platform: "Google", text: "Jwayyed Jwayyed is a rare kind of attorney — fierce in advocacy, compassionate with clients, and deeply committed to justice. He represented my younger sister in a high school case centered around her right to express her Palestinian identity." },
  { name: "Nott Billyy", rating: 5, platform: "Google", text: "Jwayyed is the real deal. Had a traffic ticket in CLE and didn't expect much, but a friend told me Jwayyed. Super easy to work with, chill but professional, and actually gets results." },
  { name: "Yasmine A", rating: 5, platform: "Google", text: "I was visiting from Virginia and had a traffic altercation while in the Cleveland area. A friend suggested I reach out to Jwayyed. He was really helpful and easy to talk to. He made a stressful situation a lot less scary and took care of everything I needed." },
  { name: "Tammy Watts", rating: 5, platform: "Google", text: "I reached out to Mr. Jwayyed after an unfortunate incident my son and I experienced at a local shopping mall. He was very thorough, diligent, and responsive. He listened, outlined step-by-step how we would proceed, and always kept me informed throughout the process." },
  { name: "Basil Jaradah", rating: 5, platform: "Google", text: "I had the chance to work with Mr Jwayyed, he finished the project in a timely manner, and remained professional all the time, was thorough and picked up on the little details that I could have missed. Can't say enough good things — highly recommended." },
  { name: "Abe Rashed", rating: 5, platform: "Google", text: "I brought Jwayyed a very complex issue. He was not the first attorney I went to and that proved to be a mistake. He was able to quickly identify the problems with my situation. He kept me up to date on everything he did. From research, to working the case, etc. He got me a better result than the first attorney I had spoken to had promised." },
  { name: "Ahmed Kahook", rating: 5, platform: "Google", text: "Back in June of 2023, I reached out to Jwayyed for his law services to help deal with a business issue. He went above and beyond to get us a quick resolution. He always had my family's best interests in mind, replied to all my emails more promptly than most people answer text messages, and called once a week to check in. I couldn't have asked for a better person to represent us." },
];

const MAX_REVIEW_LENGTH = 230;
const REVIEW_START_LENGTH = 120;
const REVIEW_END_LENGTH = 80;

function truncateReview(text: string): string {
  if (text.length <= MAX_REVIEW_LENGTH) return text;
  const start = text.slice(0, REVIEW_START_LENGTH).trimEnd();
  const end = text.slice(-REVIEW_END_LENGTH).trimStart();
  return `${start}… ${end}`;
}

export default function OVIReviewsSwiper() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
    >
      {oviReviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="relative bg-white rounded-xl border border-slate-200 p-6 sm:p-7 h-[320px] flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#b87333]" aria-hidden="true" />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b87333] text-[#b87333]" />
                ))}
              </div>
              <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-slate-500">
                {review.platform}
              </span>
            </div>
            <blockquote className="font-['Playfair_Display',_'Georgia',_serif] text-base sm:text-[1.05rem] text-slate-700 leading-relaxed flex-1 min-h-0 overflow-hidden">
              &ldquo;{truncateReview(review.text)}&rdquo;
            </blockquote>
            <cite className="text-sm font-semibold text-slate-900 not-italic border-t border-slate-200 pt-4 mt-4 flex-shrink-0">
              — {review.name}
            </cite>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
