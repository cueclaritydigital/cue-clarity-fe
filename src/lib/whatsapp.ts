// ── WhatsApp CTA Utility ─────────────────────────────────────────────────────
// Single source of truth for the WhatsApp conversion channel.
// Every CTA on the site calls getWhatsAppURL() so the number, message template,
// and UTM strategy stay consistent site-wide.

const WHATSAPP_NUMBER = "918652222525"; // country code, no "+"

type Segment =
  | "student"
  | "parent"
  | "professional"
  | "institution"
  | "general";

const MESSAGE_TEMPLATES: Record<Segment, string> = {
  student:
    "Hi CueClarity! I\u2019m a student looking for career guidance. Could you help me find the right path?",
  parent:
    "Hi CueClarity! I\u2019m a parent seeking career counselling for my child. Can we schedule a consultation?",
  professional:
    "Hi CueClarity! I\u2019m a working professional exploring a career transition. I\u2019d love to learn more.",
  institution:
    "Hi CueClarity! I represent an educational institution and I\u2019m interested in your programs.",
  general:
    "Hi CueClarity! I\u2019d like to learn more about your career counselling services.",
};

/**
 * Build a WhatsApp click-to-chat URL.
 * @param segment  – audience persona (defaults to "general")
 * @param utm      – optional UTM source tag appended to the message
 */
export function getWhatsAppURL(
  segment: Segment = "general",
  utm?: string,
): string {
  let text = MESSAGE_TEMPLATES[segment];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export type { Segment };
