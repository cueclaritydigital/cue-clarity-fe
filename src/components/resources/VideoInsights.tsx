import { FiExternalLink } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import { client } from "@/sanity/client";
import VideoInsightsGrid, {
  type SanityResourceVideo,
} from "./VideoInsightsGrid";

const query = `*[_type == "resourceVideo" && isPublished == true] | order(order asc) {
  _id,
  title,
  subtitle,
  youtubeId,
  duration,
  category,
  "thumbnailUrl": thumbnail.asset->url
}`;

export default async function VideoInsights() {
  const videos: SanityResourceVideo[] = await client.fetch(
    query,
    {},
    { next: { revalidate: false } },
  );

  if (!videos.length) return null;

  return (
    <section
      id="videos"
      className="py-24 px-4 sm:px-6 relative overflow-hidden bg-blue-950"
      aria-labelledby="videos-heading"
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-200/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-yellow-200/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <FadeInView>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-yellow-400" />
            <span className="text-yellow-400 text-base font-bold tracking-widest uppercase">
              Video Insights
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2
              id="videos-heading"
              className="heading-font text-white text-4xl sm:text-5xl lg:text-6xl"
            >
              Watch &amp; <span className="text-yellow-400">Learn.</span>
            </h2>
            <a
              href="https://www.youtube.com/@cueclarity"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-bold text-sm text-yellow-400 shrink-0 hover:gap-3 transition-all duration-200"
            >
              Visit our YouTube <FiExternalLink size={14} />
            </a>
          </div>
        </FadeInView>

        <VideoInsightsGrid videos={videos} />

        {/* Mobile YT link */}
        <div className="md:hidden mt-8 text-center">
          <a
            href="https://www.youtube.com/@cueclarity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-sm text-yellow-400"
          >
            Visit our YouTube channel <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
