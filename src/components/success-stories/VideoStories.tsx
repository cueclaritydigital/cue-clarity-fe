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
    <section
      className="section-padding px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--primary-black)" }}
    >
      {/* Ambient decoration */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[var(--primary-blue)] opacity-20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--primary-yellow)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <FadeInView>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-16 h-[2px] bg-[var(--primary-yellow)]" />
            <span
              className="type-eyebrow"
              style={{
                color: "var(--primary-yellow)",
                fontSize: "var(--text-base)",
              }}
            >
              Video Chronicles
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                lineHeight: 0.95,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--primary-white)",
                textTransform: "uppercase",
              }}
            >
              Hear It{" "}
              <span style={{ color: "var(--primary-yellow)" }}>
                In Their Words.
              </span>
            </h2>
            <p
              className="max-w-sm md:text-right"
              style={{
                color: "rgba(253,251,237,0.5)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
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
    <article
      className="group rounded-2xl overflow-hidden h-full flex flex-col"
      style={{ boxShadow: "var(--shadow-xl)" }}
    >
      {/* Aspect-ratio container — keeps layout stable whether thumbnail or iframe */}
      <div className="relative aspect-video bg-[var(--primary-black)]">
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
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[var(--primary-black)]/70 backdrop-blur-sm flex items-center justify-center text-[var(--primary-white)] hover:bg-[var(--primary-black)] transition-colors"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-black)] via-[var(--primary-black)]/20 to-transparent" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span
                className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "var(--primary-yellow)",
                  color: "var(--primary-black)",
                }}
              >
                {video.category}
              </span>
            </div>

            {/* Duration badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
              <FiClock size={11} style={{ color: "rgba(253,251,237,0.65)" }} />
              <span
                className="font-medium"
                style={{
                  color: "rgba(253,251,237,0.65)",
                  fontSize: "11px",
                }}
              >
                {video.duration}
              </span>
            </div>

            {/* Play button — centred */}
            <button
              onClick={onPlay}
              aria-label={`Play video: ${video.title}`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_48px_rgba(255,193,20,0.35)] scale-90 group-hover:scale-100 transition-transform duration-300"
                style={{ backgroundColor: "var(--primary-yellow)" }}
              >
                <FiPlay
                  size={22}
                  className="ml-1"
                  style={{ color: "var(--primary-black)" }}
                />
              </span>
            </button>
          </>
        )}
      </div>

      {/* Card footer — always visible */}
      <div
        className="p-5 flex flex-col flex-1"
        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      >
        <h3
          className="font-bold leading-snug"
          style={{
            fontFamily: "var(--font-oswald)",
            fontSize: "var(--text-lg)",
            letterSpacing: "var(--tracking-snug)",
            textTransform: "uppercase",
            color: "var(--primary-white)",
          }}
        >
          {video.title}
        </h3>
        <p
          className="mt-1.5 leading-relaxed"
          style={{
            fontSize: "var(--text-xs)",
            color: "rgba(253,251,237,0.5)",
          }}
        >
          {video.subtitle}
        </p>
      </div>
    </article>
  );
}
