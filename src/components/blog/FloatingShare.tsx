"use client";

import { FiHeart, FiShare2, FiBookmark } from "react-icons/fi";

export default function FloatingShare() {
  return (
    <div className="hidden lg:flex flex-col gap-4 sticky top-32">
      <button
        type="button"
        aria-label="Like this article"
        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--secondary-white)]"
        style={{
          backgroundColor: "var(--surface-card)",
          border: "1px solid var(--secondary-white)",
          color: "var(--muted-text)",
        }}
      >
        <FiHeart size={18} />
      </button>

      <button
        type="button"
        aria-label="Share this article"
        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--secondary-white)]"
        style={{
          backgroundColor: "var(--surface-card)",
          border: "1px solid var(--secondary-white)",
          color: "var(--muted-text)",
        }}
        onClick={() => {
          if (navigator.share) {
            navigator.share({ url: window.location.href });
          } else {
            navigator.clipboard.writeText(window.location.href);
          }
        }}
      >
        <FiShare2 size={18} />
      </button>

      <button
        type="button"
        aria-label="Bookmark this article"
        className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--secondary-white)]"
        style={{
          backgroundColor: "var(--surface-card)",
          border: "1px solid var(--secondary-white)",
          color: "var(--muted-text)",
        }}
      >
        <FiBookmark size={18} />
      </button>
    </div>
  );
}
