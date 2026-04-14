"use client";

import React from "react";
import Link from "next/link";
import { useAnalytics } from "@/analytics/useAnalytics";

type CTAProps = {
  children: React.ReactNode;

  // navigation
  href?: string;
  external?: boolean;
  rel?: string;
  target?: string;

  // analytics
  event: "cta_click" | "whatsapp_click" | "form_submit";
  eventData?: Record<string, any>;

  // UI
  className?: string;

  // optional custom click
  onClick?: () => void;
};

export const CTA: React.FC<CTAProps> = ({
  children,
  href,
  external = false,
  event,
  eventData = {},
  className,
  onClick,
  rel,
  target,
}) => {
  const { track } = useAnalytics();

  const handleClick = (e: React.MouseEvent) => {
    // Track event
    track({
      event,
      ...eventData,
    } as any);

    // custom handler
    if (onClick) onClick();

    // handle external links safely (important for WhatsApp)
    if (href && external) {
      e.preventDefault();

      setTimeout(() => {
        window.open(href, "_blank");
      }, 120);
    }
  };

  // 🔹 External link
  if (href && external) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        rel={rel}
        target={target}
      >
        {children}
      </a>
    );
  }

  // 🔹 Internal link
  if (href) {
    return (
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
    );
  }

  // 🔹 Button fallback
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};
