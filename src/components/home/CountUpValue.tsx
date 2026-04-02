"use client";

import { useEffect, useRef, useState } from "react";

/** Parse "5,000+" → { prefix: "", num: 5000, suffix: "+" } */
function parseValue(val: string): {
  prefix: string;
  num: number;
  suffix: string;
} {
  const cleaned = val.replace(/,/g, "");
  const match = cleaned.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { prefix: "", num: 0, suffix: val };
  return { prefix: match[1], num: parseInt(match[2], 10), suffix: match[3] };
}

/**
 * Renders a stat value that counts up from 0 when scrolled into view.
 * SSG-safe: initial SSR output matches the final value (no hydration mismatch).
 * The count-up only runs on the client via useEffect + IntersectionObserver.
 */
export function CountUpValue({ value }: { value: string }) {
  const { prefix, num, suffix } = parseValue(value);

  // Initialize with the real value so SSR HTML and first client render match.
  const [display, setDisplay] = useState(value);
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!spanRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        hasAnimated.current = true;
        observer.disconnect();

        const duration = 1600;
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * num);
          setDisplay(prefix + current.toLocaleString() + suffix);
          if (progress < 1) requestAnimationFrame(tick);
        };

        // Reset to 0 then start animation
        setDisplay(prefix + "0" + suffix);
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(spanRef.current);
    return () => observer.disconnect();
  }, [num, suffix, prefix]);

  return <span ref={spanRef}>{display}</span>;
}
