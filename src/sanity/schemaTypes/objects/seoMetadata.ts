import { defineField, defineType } from "sanity";

export const seoMetadata = defineType({
  name: "seoMetadata",
  title: "SEO Metadata",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Page title for search engines (50–60 characters ideal).",
      validation: (rule) => rule.max(70).warning("Keep under 70 characters."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Short description shown in search results (150–160 characters ideal).",
      validation: (rule) =>
        rule.max(170).warning("Keep under 170 characters."),
    }),
    defineField({
      name: "targetKeywords",
      title: "Target Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Primary keywords this page should rank for.",
    }),
    defineField({
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
      description: "Shared image for social previews (1200×630 recommended).",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
  ],
});
