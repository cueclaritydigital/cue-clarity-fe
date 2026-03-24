import { defineArrayMember, defineField, defineType } from "sanity";

export const cardsGrid = defineType({
  name: "cardsGrid",
  title: "Cards Grid",
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
      name: "variant",
      title: "Card Variant",
      type: "string",
      options: {
        list: [
          { title: "Default (Icon + Title + Desc)", value: "default" },
          { title: "Problem (pain points)", value: "problem" },
          { title: "Benefit (outcome cards)", value: "benefit" },
          { title: "Feature (numbered)", value: "feature" },
        ],
        layout: "radio",
      },
      initialValue: "default",
    }),
    defineField({
      name: "layout",
      title: "Grid Layout",
      type: "string",
      options: {
        list: [
          { title: "2 Columns", value: "2col" },
          { title: "3 Columns (default)", value: "3col" },
          { title: "4 Columns", value: "4col" },
        ],
        layout: "radio",
      },
      initialValue: "3col",
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
            defineField({ name: "emoji", title: "Emoji / Icon", type: "string", description: "Paste an emoji e.g. 🎯" }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "href", title: "Link URL (optional)", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "emoji" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading", variant: "variant" },
    prepare: ({ title, variant }) => ({
      title: title || "Cards Grid",
      subtitle: variant ?? "",
    }),
  },
});
