// 1. Extend the global Window interface to recognize 'dataLayer'
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

// 2. Add a generic type to eventData so it accepts any object
export const pushEvent = <T extends Record<string, any>>(
  eventData: T,
): void => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      env: process.env.NODE_ENV, // 'development' | 'production' | 'test'
      ...eventData,
    });
  }
};
