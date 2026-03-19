import Image from "next/image";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/data/resources";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-padding px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--primary-black)" }}
      aria-labelledby="gallery-heading"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.06] blur-[120px] pointer-events-none bg-[var(--primary-yellow)]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <FadeInView>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[var(--primary-yellow)]" />
                <span
                  className="type-eyebrow"
                  style={{
                    color: "var(--primary-yellow)",
                    fontSize: "var(--text-base)",
                  }}
                >
                  In the Field
                </span>
              </div>
              <h2
                id="gallery-heading"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  lineHeight: 0.95,
                  letterSpacing: "var(--tracking-tight)",
                  color: "var(--primary-white)",
                  textTransform: "uppercase",
                }}
              >
                Counselling in
                <br />
                <span style={{ color: "var(--primary-yellow)" }}>Action</span>
              </h2>
            </div>
            <p
              className="max-w-xs sm:text-right"
              style={{
                fontSize: "var(--text-sm)",
                color: "rgba(253,251,237,0.55)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              Real sessions, real workshops, real moments of clarity — a glimpse
              into how CueClarity works.
            </p>
          </div>
        </FadeInView>

        {/* Gallery grid — CSS grid with span hints */}
        <StaggerInView className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <FadeInView
              key={img.id}
              variants={fadeUp}
              className={buildSpanClass(img)}
            >
              <GalleryCard image={img} priority={i === 0} />
            </FadeInView>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}

/** Map span hints to Tailwind grid span classes */
function buildSpanClass(img: GalleryImage): string {
  if (img.span === "tall") return "row-span-2";
  if (img.span === "wide") return "col-span-2";
  return "";
}

function GalleryCard({
  image,
  priority,
}: {
  image: GalleryImage;
  priority?: boolean;
}) {
  return (
    <div className="group relative w-full h-full overflow-hidden rounded-[var(--radius-lg)]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 33vw, 50vw"
        className="object-cover transition-all duration-700 grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105"
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />

      {/* Overlay — fades in on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Caption */}
      <p
        className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        style={{
          fontSize: "var(--text-xs)",
          color: "rgba(255,255,255,0.9)",
          lineHeight: "var(--leading-snug)",
          fontWeight: 600,
        }}
      >
        {image.alt}
      </p>
    </div>
  );
}
