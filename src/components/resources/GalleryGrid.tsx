"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaImages,
} from "react-icons/fa";

/* ── Types ─────────────────────────────────── */
export type SanityPhoto = {
  _key: string;
  src: string;
  alt: string;
  caption?: string;
};

export type SanityGalleryAlbum = {
  _id: string;
  title: string;
  description?: string;
  coverUrl: string;
  photos: SanityPhoto[];
};

const PAGE_SIZE = 9;
const PLACEHOLDER =
  "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775324985/Gemini_Generated_Image_gkq2nkgkq2nkgkq2_y4rfsl.webp";

/* ── Pagination helper ──────────────────────── */
function Pagination({
  page,
  totalPages,
  onGoTo,
}: {
  page: number;
  totalPages: number;
  onGoTo: (p: number) => void;
}) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        type="button"
        onClick={() => onGoTo(page - 1)}
        disabled={page === 0}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        <FaChevronLeft size={12} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onGoTo(i)}
          aria-label={`Page ${i + 1}`}
          aria-current={i === page ? "page" : undefined}
          className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
            i === page
              ? "bg-yellow-400 text-white"
              : "border border-gray-200 text-gray-500 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onGoTo(page + 1)}
        disabled={page === totalPages - 1}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        <FaChevronRight size={12} />
      </button>
    </div>
  );
}

/* ── Image modal ────────────────────────────── */
function PhotoModal({
  photo,
  onClose,
}: {
  photo: SanityPhoto;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
    >
      {/* Image card — stop click propagation */}
      <div
        className="relative w-full max-w-3xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button anchored to the card */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-5 -right-5 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 shadow-xl hover:bg-yellow-400 hover:text-white transition-colors"
          aria-label="Close image"
        >
          <FaTimes size={20} />
        </button>

        <div
          className="relative w-full rounded-2xl overflow-hidden bg-gray-100"
          style={{ height: "60vh" }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-contain"
            priority
          />
        </div>
        {(photo.caption || photo.alt) && (
          <p className="mt-4 text-center text-sm text-white/70 max-w-xl leading-relaxed">
            {photo.caption ?? photo.alt}
          </p>
        )}
      </div>
    </div>
  );
}

/* ── Album grid ─────────────────────────────── */
function AlbumView({
  albums,
  onSelect,
}: {
  albums: SanityGalleryAlbum[];
  onSelect: (album: SanityGalleryAlbum) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {albums.map((album) => (
        <button
          key={album._id}
          type="button"
          onClick={() => onSelect(album)}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 text-left"
          aria-label={`Open album: ${album.title}`}
          style={{
            backgroundImage: `url(${PLACEHOLDER})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src={album.coverUrl}
            alt={album.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105"
            loading="lazy"
          />
          {/* Dark overlay always visible at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Photo count badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
            <FaImages size={10} />
            {album.photos?.length ?? 0}
          </div>

          {/* Title + description */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8">
            <p className="text-white font-bold text-base leading-snug">
              {album.title}
            </p>
            {album.description && (
              <p className="text-white/65 text-xs mt-1 leading-relaxed line-clamp-2">
                {album.description}
              </p>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

/* ── Photo grid (inside album) ──────────────── */
function PhotoView({
  album,
  onBack,
}: {
  album: SanityGalleryAlbum;
  onBack: () => void;
}) {
  const [page, setPage] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<SanityPhoto | null>(null);

  const totalPages = Math.ceil((album.photos?.length ?? 0) / PAGE_SIZE);
  const pagePhotos = (album.photos ?? []).slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

  function goTo(p: number) {
    setPage(p);
    const el = document.getElementById("gallery");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Back button + album title */}
      <div className="flex items-center gap-3 mb-8">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-yellow-600 transition-colors"
          aria-label="Back to albums"
        >
          <FaArrowLeft size={13} />
          All Albums
        </button>
        <span className="text-gray-300">/</span>
        <span className="text-gray-800 font-bold text-sm">{album.title}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {pagePhotos.map((photo, i) => (
          <button
            key={photo._key}
            type="button"
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label={`Open image: ${photo.alt}`}
            style={{
              backgroundImage: `url(${PLACEHOLDER})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-all duration-700 grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-xs text-white/90 font-semibold leading-snug text-left">
              {photo.alt}
            </p>
          </button>
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onGoTo={goTo} />

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}

/* ── Root export ────────────────────────────── */
export default function GalleryGrid({
  albums,
}: {
  albums: SanityGalleryAlbum[];
}) {
  const [selectedAlbum, setSelectedAlbum] = useState<SanityGalleryAlbum | null>(
    null,
  );

  if (!albums.length) return null;

  return selectedAlbum ? (
    <PhotoView album={selectedAlbum} onBack={() => setSelectedAlbum(null)} />
  ) : (
    <AlbumView albums={albums} onSelect={setSelectedAlbum} />
  );
}
