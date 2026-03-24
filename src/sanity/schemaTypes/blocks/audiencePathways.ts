import { defineArrayMember, defineField, defineType } from "sanity";

export const audiencePathways = defineType({
  name: "audiencePathways",
  title: "Audience Pathways",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Cream", value: "cream" },
          { title: "Navy Blue", value: "blue" },
          { title: "Black", value: "black" },
        ],
        layout: "radio",
      },
      initialValue: "white",
    }),
    defineField({
      name: "pathways",
      title: "Pathways",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "pathway",
          fields: [
            defineField({ name: "emoji", title: "Emoji / Icon", type: "string" }),
            defineField({ name: "audience", title: "Audience Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({ name: "bullets", title: "Key Points", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "href", title: "Link URL (optional)", type: "string" }),
          ],
          preview: { select: { title: "audience" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Audience Pathways" }),
  },
});
