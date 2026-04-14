"use client";

import { validateEvent } from "./validateEvent";
import { pushToDataLayer } from "./pushEvent";
import { AnalyticsEvent } from "./events";

export const useAnalytics = () => {
  const track = (event: AnalyticsEvent) => {
    // ❌ Validate event
    if (!validateEvent(event)) {
      console.warn("Invalid analytics event:", event);
      return;
    }

    // ✅ Enrich event with context
    const enrichedEvent = {
      ...event,
      page: window.location.pathname,
      env: process.env.NODE_ENV,
      timestamp: Date.now(),
    };

    // 🚀 Push to GTM
    pushToDataLayer(enrichedEvent);
  };

  return { track };
};
