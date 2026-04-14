"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAnalytics } from "./useAnalytics";

export const PageTracker = () => {
  const pathname = usePathname();
  const { track } = useAnalytics();

  useEffect(() => {
    track({
      event: "page_view",
      page: pathname,
    });
  }, [pathname]);

  return null;
};
