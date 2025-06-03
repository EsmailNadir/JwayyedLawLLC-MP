import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full bg-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        
        <div className="flex-1 max-w-xl text-center md:text-left mb-8 md:mb-0">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Protecting Your <br /> Rights in Ohio
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            Experienced Legal Counsel in Criminal, <br />
            Traffic, and Civil Law.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Link href="/contact">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all duration-200 font-medium">
            Schedule Appointment
            </button>
        </Link>
        
            <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-300 transition-all duration-200 font-medium">
              Meet Attorney Jwayyed
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end h-full">
          <div className="w-full max-w-[460px]">
            <Image
              src="/assets/jwayyeds-homepage.webp"
              alt="Attorney Jwayyed"
              width={920}
              height={640}
              className="rounded-lg shadow-lg object-cover w-full max-h-[540px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}