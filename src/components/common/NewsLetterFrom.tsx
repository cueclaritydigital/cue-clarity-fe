"use client";
import { useState } from "react";
import { FiMail, FiSend, FiCheck } from "react-icons/fi";

function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Replace with your actual subscription API call
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 bg-[var(--primary-yellow)]/10 border border-[var(--primary-yellow)]/25 rounded-2xl px-5 py-4 w-fit">
        <span className="w-8 h-8 rounded-full bg-[var(--primary-yellow)] flex items-center justify-center flex-shrink-0">
          <FiCheck size={15} className="text-[var(--primary-black)]" />
        </span>
        <div>
          <p className="text-[var(--primary-white)] text-sm font-semibold">
            You're in!
          </p>
          <p className="text-[var(--primary-white)]/50 text-xs mt-0.5">
            Check your inbox for a welcome note.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${compact ? "w-full" : "max-w-sm"}`}>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center bg-white/[0.05] border border-white/[0.1] rounded-full p-1.5  transition-colors">
          <span className="pl-3 text-[var(--primary-white)]/30 flex-shrink-0">
            <FiMail size={15} />
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-transparent text-[var(--primary-white)] placeholder-[var(--primary-white)]/25 text-sm px-3 py-2 outline-none focus-visible:outline-none min-w-0 border-none focus:outline-none"
            style={{ outline: "none" }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex-shrink-0 flex items-center gap-2 bg-[var(--primary-yellow)] hover:bg-[var(--accent-yellow)] disabled:opacity-60 text-[var(--primary-black)] text-sm font-bold px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_4px_20px_rgba(255,193,20,0.3)]"
          >
            {status === "loading" ? (
              <span className="w-4 h-4 border-2 border-[var(--primary-black)]/30 border-t-[var(--primary-black)] rounded-full animate-spin" />
            ) : compact ? (
              <FiSend size={14} />
            ) : (
              <>
                Subscribe <FiSend size={12} />
              </>
            )}
          </button>
        </div>
      </form>
      <p className="text-[var(--primary-white)]/25 text-xs pl-4">
        Join 2,000+ subscribers · unsubscribe anytime
      </p>
    </div>
  );
}

export default NewsletterForm;
