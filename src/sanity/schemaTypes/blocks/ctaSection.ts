import { defineField, defineType } from "sanity";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtext",
      title: "Subtext",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "buttonUrl",
      title: "Button URL",
      type: "url",
      validation: (rule) =>
        rule.uri({ allowRelative: true, scheme: ["http", "https", "tel"] }),
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "CTA Section" }),
  },
});
