"use client";

import { useState } from "react";
import Image from "next/image";
import { FiPlay, FiClock, FiX, FiExternalLink } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import { RESOURCE_VIDEOS, type ResourceVideo } from "@/lib/data/resources";

export default function VideoInsights() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section
      id="videos"
      className="section-padding px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--primary-black)" }}
      aria-labelledby="videos-heading"
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[var(--primary-blue)] opacity-20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-[var(--primary-yellow)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <FadeInView>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-[var(--primary-yellow)]" />
            <span
              className="type-eyebrow"
              style={{
                color: "var(--primary-yellow)",
                fontSize: "var(--text-base)",
              }}
            >
              Video Insights
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2
              id="videos-heading"
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
              Watch &amp;{" "}
              <span style={{ color: "var(--primary-yellow)" }}>Learn.</span>
            </h2>
            <a
              href="https://www.youtube.com/@cueclarity"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-bold shrink-0 hover:gap-3 transition-all duration-200"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--primary-yellow)",
              }}
            >
              Visit our YouTube <FiExternalLink size={14} />
            </a>
          </div>
        </FadeInView>

        {/* 2-col on md, 1-col on sm */}
        <StaggerInView className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {RESOURCE_VIDEOS.map((video) => (
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

        {/* Mobile YT link */}
        <div className="md:hidden mt-8 text-center">
          <a
            href="https://www.youtube.com/@cueclarity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold"
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--primary-yellow)",
            }}
          >
            Visit our YouTube channel <FiExternalLink size={14} />
          </a>
        </div>
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
  video: ResourceVideo;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
}) {
  return (
    <article
      className="group rounded-2xl overflow-hidden h-full flex flex-col"
      style={{ boxShadow: "var(--shadow-xl)" }}
    >
      {/* Video area */}
      <div className="relative aspect-video bg-[var(--primary-black)] shrink-0">
        {isPlaying ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
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
            <Image
              src={video.thumbnail}
              alt={`Video preview: ${video.title}`}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-black)]/80 via-[var(--primary-black)]/20 to-transparent" />

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

            {/* Duration */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
              <FiClock size={11} style={{ color: "rgba(253,251,237,0.65)" }} />
              <span
                style={{ color: "rgba(253,251,237,0.65)", fontSize: "11px" }}
                className="font-medium"
              >
                {video.duration}
              </span>
            </div>

            {/* Play button */}
            <button
              onClick={onPlay}
              aria-label={`Play: ${video.title}`}
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

      {/* Card footer */}
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
          className="mt-2 flex-1"
          style={{
            fontSize: "var(--text-xs)",
            color: "rgba(253,251,237,0.5)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {video.subtitle}
        </p>
      </div>
    </article>
  );
}
