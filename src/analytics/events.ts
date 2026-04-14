export type AnalyticsEvent =
  | {
      event: "cta_click";
      cta_name: string;
      section?: string;
    }
  | {
      event: "form_submit";
      form_name: string;
    }
  | {
      event: "whatsapp_click";
      source: string;
    }
  | {
      event: "page_view";
      page: string;
    };
