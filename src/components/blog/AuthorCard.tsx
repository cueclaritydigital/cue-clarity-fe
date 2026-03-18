import FadeInView from "@/components/animate/FadeInView";

export default function AuthorCard() {
  return (
    <FadeInView>
      <div
        className="mt-14 p-6 sm:p-8 rounded-xl lg:rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5"
        style={{ backgroundColor: "var(--secondary-white)" }}
      >
        {/* Avatar */}
        <div
          className="w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center text-2xl font-black"
          style={{
            backgroundColor: "var(--primary-blue)",
            color: "var(--primary-white)",
          }}
        >
          CC
        </div>

        <div className="text-center sm:text-left">
          <p
            className="font-extrabold text-lg"
            style={{ color: "var(--primary-black)" }}
          >
            CueClarity Team
          </p>
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--primary-yellow)" }}
          >
            Career Counselling Experts
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted-text)" }}
          >
            CueClarity&rsquo;s team of certified counsellors and psychometric
            experts have guided 2,000+ students, parents, and professionals
            towards meaningful career paths.
          </p>
        </div>
      </div>
    </FadeInView>
  );
}
