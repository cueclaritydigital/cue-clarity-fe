import { FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";

export default function RFQ() {
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-blue-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 blur-[150px] rounded-full" />
        <div className="absolute top-[-80px] right-[-60px] w-[400px] h-[400px] bg-yellow-400/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center flex flex-col items-center">
        <span className="text-yellow-400 text-base font-bold tracking-widest uppercase mb-6 block">
          Take The First Step
        </span>

        <h2 className="heading-font text-white text-5xl sm:text-6xl lg:text-7xl mb-6">
          Ready to Stop Guessing <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
            And Start Growing?
          </span>
        </h2>

        <p className="text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
          Stop scrolling and start planning. Message us on WhatsApp for a free
          15-minute discovery call with our expert counsellors — and get a
          glimpse of your true potential.
        </p>

        {/* WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={getWhatsAppURL("general", "rfq")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-yellow-400 text-blue-950 px-10 py-4 rounded-full font-bold text-base tracking-wide hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px shadow-[0_6px_24px_rgba(255,193,20,0.4)] w-full sm:w-auto"
          >
            <FaWhatsapp size={20} />
            Chat With Us — It&apos;s Free
          </a>
        </div>

        {/* Trust micro-copy */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-medium text-white/50">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-yellow-400" />
            No hidden costs
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-yellow-400" />
            100% Confidential
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-yellow-400" />
            Zero obligations
          </div>
        </div>
      </div>
    </section>
  );
}
