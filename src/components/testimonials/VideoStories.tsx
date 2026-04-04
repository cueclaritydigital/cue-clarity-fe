import { client } from "@/sanity/client";
import FadeInView from "@/components/animate/FadeInView";
import VideoGrid, { type SanityVideoTestimonial } from "./VideoGrid";

const query = `*[_type == "videoTestimonial" && isPublished == true] | order(order asc) {
  _id,
  title,
  subtitle,
  category,
  youtubeId,
  duration,
  "thumbnailUrl": thumbnail.asset->url
}`;

export default async function VideoStories() {
  const videos: SanityVideoTestimonial[] = await client.fetch(
    query,
    {},
    { next: { revalidate: 60 } },
  );

  if (!videos.length) return null;

  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-blue-950">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section header */}
        <FadeInView className="mb-16">
          <span className="text-yellow-400 text-base font-bold tracking-widest uppercase">
            Video Chronicles
          </span>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl heading-font text-white">
              Hear It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                In Their Words.
              </span>
            </h2>
            <p className="max-w-sm md:text-right text-sm text-gray-400 leading-relaxed">
              Unscripted, unfiltered career journeys from our most impactful
              mentees — click any card to watch.
            </p>
          </div>
        </FadeInView>

        <VideoGrid videos={videos} />
      </div>
    </section>
  );
}
