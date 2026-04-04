"use client";

import { useState } from "react";
import Image from "next/image";
import { FiPlay, FiClock, FiX } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import { VIDEO_STORIES, type VideoStory } from "@/lib/data/success-stories";

export default function VideoStories() {
  const [playingId, setPlayingId] = useState<string | null>(null);

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

        {/* Video grid */}
        <StaggerInView className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {VIDEO_STORIES.map((video) => (
            <FadeInView key={video.id} variants={fadeUp} className="h-full">
              <VideoCard
                video={video}
                isPlaying={playingId === video.id}
                onPlay={() => setPlayingId(video.id)}
                onStop={() => setPlayingId(null)}
              />
            </FadeInView>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  isPlaying,
  onPlay,
  onStop,
}: {
  video: VideoStory;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
}) {
  return (
    <article className="group rounded-3xl overflow-hidden h-full flex flex-col border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
      {/* Aspect-ratio container */}
      <div className="relative aspect-video bg-blue-950">
        {isPlaying ? (
          <>
            <iframe
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
            {/* Stop button */}
            <button
              onClick={onStop}
              aria-label="Stop video"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-blue-950/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-950 transition-colors"
            >
              <FiX size={14} />
            </button>
          </>
        ) : (
          <>
            {/* Thumbnail */}
            <Image
              src={video.thumbnail}
              alt={`Preview thumbnail for: ${video.title}`}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-400 text-blue-950">
                {video.category}
              </span>
            </div>

            {/* Duration badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
              <FiClock size={11} className="text-white/60" />
              <span className="font-medium text-white/60 text-[11px]">
                {video.duration}
              </span>
            </div>

            {/* Play button */}
            <button
              onClick={onPlay}
              aria-label={`Play video: ${video.title}`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="w-16 h-16 rounded-full flex items-center justify-center bg-yellow-400 shadow-[0_0_48px_rgba(250,204,21,0.35)] scale-90 group-hover:scale-100 transition-transform duration-300">
                <FiPlay size={22} className="ml-1 text-blue-950" />
              </span>
            </button>
          </>
        )}
      </div>

      {/* Card footer */}
      <div className="p-5 flex flex-col flex-1 bg-white/[0.03]">
        <h3 className="font-bold text-lg leading-snug tracking-tight text-white">
          {video.title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
          {video.subtitle}
        </p>
      </div>
    </article>
  );
}
