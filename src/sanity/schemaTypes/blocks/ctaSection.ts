import { defineField, defineType } from "sanity";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "subtext", title: "Subtext", type: "text", rows: 3 }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "Black (default)", value: "black" },
          { title: "Navy Blue", value: "blue" },
          { title: "Yellow", value: "yellow" },
        ],
        layout: "radio",
      },
      initialValue: "black",
    }),
    defineField({
      name: "primaryCtaText",
      title: "Primary Button Text",
      type: "string",
    }),
    defineField({
      name: "primaryCtaUrl",
      title: "Primary Button URL",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaText",
      title: "Secondary Button Text (optional)",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaUrl",
      title: "Secondary Button URL (optional)",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Limited / Urgency Quote (optional)",
      type: "text",
      rows: 2,
      description:
        "Shown below buttons as a highlighted urgency note e.g. ⏳ Limited slots available...",
    }),
    defineField({
      name: "image",
      title: "Image (optional)",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "CTA Section" }),
  },
});
