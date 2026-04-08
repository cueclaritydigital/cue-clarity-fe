import Link from "next/link";
import type { RelatedServiceCTA } from "@/lib/data/blog";

export default function InlineCTA({ service }: { service: RelatedServiceCTA }) {
  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-yellow-400/30 bg-gradient-to-r from-blue-950 to-blue-900 shadow-lg">
      <div className="px-6 py-7 sm:px-8 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-1">
            Related Service
          </p>
          <h3
            className="text-lg font-extrabold text-white leading-snug mb-1"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            {service.title}
          </h3>
          <p className="text-sm text-white/60">
            Ready to take the next step? Our counsellors are here to help.
          </p>
        </div>
        <Link
          href={service.href}
          className="flex-shrink-0 inline-block px-5 py-3 rounded-xl font-extrabold text-sm bg-yellow-400 text-blue-950 hover:bg-yellow-300 transition-colors whitespace-nowrap"
        >
          {service.cta} →
        </Link>
      </div>
    </div>
  );
}
