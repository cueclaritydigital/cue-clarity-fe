import Image from "next/image";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/data/resources";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[var(--primary-white)]"
      aria-labelledby="gallery-heading"
    >
      {/* Ambient glows */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-blue-200/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-yellow-200/15 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <FadeInView>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-yellow-400" />
                <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
                  In the Field
                </span>
              </div>
              <h2
                id="gallery-heading"
                className="heading-font text-[var(--primary-blue)] text-4xl sm:text-5xl lg:text-6xl"
              >
                Counselling in
                <br />
                <span className="text-yellow-500">Action</span>
              </h2>
            </div>
            <p className="max-w-xs sm:text-right text-sm text-gray-500 leading-relaxed">
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
    <div className="group relative w-full h-full overflow-hidden rounded-2xl">
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
      <p className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-xs text-white/90 font-semibold leading-snug">
        {image.alt}
      </p>
    </div>
  );
}
