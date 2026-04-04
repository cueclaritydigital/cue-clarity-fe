import FadeInView from "@/components/animate/FadeInView";
import { client } from "@/sanity/client";
import GalleryGrid, { type SanityGalleryAlbum } from "./GalleryGrid";

export default async function GallerySection() {
  const query = `*[_type == "galleryAlbum" && isPublished == true] | order(order asc) {
    _id,
    title,
    description,
    "coverUrl": coverImage.asset->url,
    "photos": photos[] {
      _key,
      "src": image.asset->url,
      alt,
      caption
    }
  }`;
  const albums: SanityGalleryAlbum[] = await client.fetch(
    query,
    {},
    { next: { revalidate: 60 } },
  );

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

        <GalleryGrid albums={albums} />
      </div>
    </section>
  );
}
