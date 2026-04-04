"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiX } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import StaggerInView from "@/components/animate/StaggerInView";
import FadeInView from "@/components/animate/FadeInView";
import { fadeUp } from "@/lib/animations/variants";

/** Accepts a full YouTube URL in any common format, or a bare video ID */
function extractYouTubeId(input: string): string {
  try {
    const url = new URL(input);
    // youtu.be/<id>
    if (url.hostname === "youtu.be") return url.pathname.slice(1).split("?")[0];
    // youtube.com/shorts/<id> or /embed/<id>
    const pathMatch = url.pathname.match(/\/(?:shorts|embed)\/([^/?&]+)/);
    if (pathMatch) return pathMatch[1];
    // youtube.com/watch?v=<id>
    const v = url.searchParams.get("v");
    if (v) return v;
  } catch {
    // Not a URL — treat as bare ID
  }
  return input;
}

export type SanityResourceVideo = {
  _id: string;
  title: string;
  subtitle: string;
  youtubeId: string;
  duration?: string;
  category?: string;
  thumbnailUrl?: string;
};

export default function VideoInsightsGrid({
  videos,
}: {
  videos: SanityResourceVideo[];
}) {
  const [activeVideo, setActiveVideo] = useState<SanityResourceVideo | null>(
    null,
  );

  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <StaggerInView className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {videos.map((video) => (
          <FadeInView key={video._id} variants={fadeUp} className="h-full">
            <VideoCard video={video} onPlay={() => setActiveVideo(video)} />
          </FadeInView>
        ))}
      </StaggerInView>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <FiX size={16} />
            </button>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(activeVideo.youtubeId)}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="mt-4 px-1">
              <p className="text-white font-semibold text-base leading-snug">
                {activeVideo.title}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {activeVideo.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function VideoCard({
  video,
  onPlay,
}: {
  video: SanityResourceVideo;
  onPlay: () => void;
}) {
  const thumbnailUrl =
    video.thumbnailUrl ??
    `https://i.ytimg.com/vi/${extractYouTubeId(video.youtubeId)}/maxresdefault.jpg`;

  return (
    <article className="group rounded-2xl overflow-hidden h-full flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      <div
        className="relative aspect-video bg-blue-950 shrink-0 cursor-pointer overflow-hidden"
        onClick={onPlay}
      >
        <Image
          src={thumbnailUrl}
          alt={`Video preview: ${video.title}`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

        {video.category && (
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-400 text-blue-950">
              {video.category}
            </span>
          </div>
        )}

        {video.duration && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
            <FiClock size={11} className="text-white/60" />
            <span className="text-white/60 text-[11px] font-medium">
              {video.duration}
            </span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-28 h-28 rounded-full flex items-center justify-center bg-[#FF0000] shadow-[0_0_48px_rgba(250,204,21,0.35)] scale-90 group-hover:scale-100 transition-transform duration-300">
            <FaPlay size={44} className="ml-1 text-white" />
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 bg-white/[0.04]">
        <h3 className="font-bold text-white text-lg leading-tight">
          {video.title}
        </h3>
        <p className="mt-2 flex-1 text-xs text-white/50 ">{video.subtitle}</p>
      </div>
    </article>
  );
}
