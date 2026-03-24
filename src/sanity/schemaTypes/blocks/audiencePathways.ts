import { defineArrayMember, defineField, defineType } from "sanity";

export const audiencePathways = defineType({
  name: "audiencePathways",
  title: "Audience Pathways",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
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
            defineField({ name: "audience", title: "Audience Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({
              name: "bullets",
              title: "Key Points",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: { title: "audience" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Audience Pathways" }),
  },
});
