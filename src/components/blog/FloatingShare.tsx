"use client";

import { FiHeart, FiShare2, FiBookmark } from "react-icons/fi";

export default function FloatingShare() {
  return (
    <div className="hidden lg:flex flex-col gap-3 sticky top-32">
      <button
        type="button"
        aria-label="Like this article"
        className="w-11 h-11 rounded-full border border-gray-100 bg-white/70 backdrop-blur-xl text-gray-400 flex items-center justify-center hover:bg-gray-50 hover:text-blue-950 transition-colors"
      >
        <FiHeart size={18} />
      </button>

      <button
        type="button"
        aria-label="Share this article"
        className="w-11 h-11 rounded-full border border-gray-100 bg-white/70 backdrop-blur-xl text-gray-400 flex items-center justify-center hover:bg-gray-50 hover:text-blue-950 transition-colors"
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
        className="w-11 h-11 rounded-full border border-gray-100 bg-white/70 backdrop-blur-xl text-gray-400 flex items-center justify-center hover:bg-gray-50 hover:text-blue-950 transition-colors"
      >
        <FiBookmark size={18} />
      </button>
    </div>
  );
}
