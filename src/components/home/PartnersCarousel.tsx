const PARTNERS = [
  "IIT Bombay",
  "BITS Pilani",
  "Christ University",
  "Symbiosis International",
  "Manipal Academy",
  "Amity University",
  "SP Jain",
  "NMIMS Mumbai",
  "Ashoka University",
  "FLAME University",
];

export default function PartnersCarousel() {
  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 bg-[var(--primary-white)] border-y border-blue-950/5">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-base font-bold tracking-widest uppercase text-gray-400 mb-8 block">
          Associated with 200+ Institutions
        </span>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-oswald font-bold text-lg uppercase tracking-wide text-blue-950/25 hover:text-blue-950/70 transition-colors duration-300 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
