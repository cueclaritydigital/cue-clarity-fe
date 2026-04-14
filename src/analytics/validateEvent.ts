import { AnalyticsEvent } from "./events";

export function validateEvent(event: AnalyticsEvent): boolean {
  if (!event.event) return false;

  switch (event.event) {
    case "cta_click":
      return !!event.cta_name;

    case "form_submit":
      return !!event.form_name;

    case "whatsapp_click":
      return !!event.source;

    case "page_view":
      return !!event.page;

    default:
      return false;
  }
}
