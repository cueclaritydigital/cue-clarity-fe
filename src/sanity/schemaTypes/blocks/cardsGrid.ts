import { defineArrayMember, defineField, defineType } from "sanity";

export const cardsGrid = defineType({
  name: "cardsGrid",
  title: "Cards Grid",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "card",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string", description: "Icon name (e.g. react-icons identifier)." }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: {
            select: { title: "title" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Cards Grid" }),
  },
});
