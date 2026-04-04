"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiClock, FiX } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import StaggerInView from "@/components/animate/StaggerInView";
import FadeInView from "@/components/animate/FadeInView";
import { fadeUp } from "@/lib/animations/variants";

export type SanityVideoTestimonial = {
  _id: string;
  title: string;
  subtitle?: string;
  category: string;
  youtubeId: string;
  duration?: string;
  thumbnailUrl?: string;
};

export default function VideoGrid({
  videos,
}: {
  videos: SanityVideoTestimonial[];
}) {
  const [activeVideo, setActiveVideo] = useState<SanityVideoTestimonial | null>(
    null,
  );

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <StaggerInView className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
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
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <FiX size={16} />
            </button>

            {/* 16:9 iframe wrapper */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 px-1">
              <p className="text-white font-semibold text-base leading-snug">
                {activeVideo.title}
              </p>
              {activeVideo.subtitle && (
                <p className="text-gray-400 text-sm mt-1">
                  {activeVideo.subtitle}
                </p>
              )}
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
  video: SanityVideoTestimonial;
  onPlay: () => void;
}) {
  const thumbnailUrl =
    video.thumbnailUrl ??
    `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <article className="group rounded-xl overflow-hidden h-full flex flex-col border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
      {/* Thumbnail */}
      <div
        className="relative aspect-video bg-blue-950 cursor-pointer"
        onClick={onPlay}
      >
        <Image
          src={thumbnailUrl}
          alt={`Preview thumbnail for: ${video.title}`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105 z-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-400 text-blue-950">
            {video.category}
          </span>
        </div>

        {/* Duration badge */}
        {video.duration && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
            <FiClock size={11} className="text-white/60" />
            <span className="font-medium text-white/60 text-[11px]">
              {video.duration}
            </span>
          </div>
        )}

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center z-3">
          <span className="w-20 h-20 rounded-full flex items-center justify-center bg-[#FF0000] shadow-[0_0_48px_rgba(250,204,21,0.35)] scale-90 group-hover:scale-100 transition-transform duration-300">
            <FaPlay size={32} className="ml-1 text-white" />
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-5 flex flex-col flex-1 bg-white/[0.03] z-2">
        <h3 className="font-bold text-lg leading-snug tracking-tight text-white">
          {video.title}
        </h3>
        {video.subtitle && (
          <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
            {video.subtitle}
          </p>
        )}
      </div>
    </article>
  );
}
