import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { RelatedServiceLink } from "@/lib/data/services";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

export default function RelatedServices({
  services,
}: {
  services: RelatedServiceLink[];
}) {
  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden bg-gray-50">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-80px] w-[420px] h-[420px] bg-yellow-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-[-60px] w-[360px] h-[360px] bg-blue-200/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-[1200px] mx-auto z-10">
        <FadeInView className="mb-10">
          <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase block mb-3">
            Explore More
          </span>
          <h2 className="heading-font text-3xl sm:text-4xl text-blue-950">
            Related Services
          </h2>
        </FadeInView>

        <StaggerInView
          className={`grid gap-5 grid-cols-1 sm:grid-cols-2 ${
            services.length >= 3 ? "lg:grid-cols-3" : ""
          }`}
        >
          {services.map((svc) => (
            <FadeInView key={svc.href} variants={fadeUp}>
              <Link
                href={svc.href}
                className="group relative flex flex-col rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full"
              >
                {/* Inner glow top-right */}
                <div className="absolute top-[-40px] right-[-40px] w-40 h-40 bg-yellow-400/30 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex flex-col flex-1">
                  <h3 className="heading-font text-lg text-blue-950 transition-[font-size] duration-300 group-hover:text-xl mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">
                    {svc.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-950">
                    Learn More
                    <FiArrowRight
                      size={14}
                      className="translate-x-0  origin-left transition-transform duration-300"
                    />
                  </span>
                </div>
              </Link>
            </FadeInView>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}
