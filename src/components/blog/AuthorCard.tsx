import FadeInView from "@/components/animate/FadeInView";

export default function AuthorCard() {
  return (
    <FadeInView>
      <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* Avatar */}
        <div className="w-20 h-20 flex-shrink-0 rounded-full bg-blue-950 text-white flex items-center justify-center text-2xl font-black">
          CC
        </div>

        <div className="text-center sm:text-left">
          <p className="font-extrabold text-lg text-blue-950">
            CueClarity Team
          </p>
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-yellow-500">
            Career Counselling Experts
          </p>
          <p className="text-sm leading-relaxed text-gray-500">
            CueClarity&rsquo;s team of certified counsellors and psychometric
            experts have guided 2,000+ students, parents, and professionals
            towards meaningful career paths.
          </p>
        </div>
      </div>
    </FadeInView>
  );
}
