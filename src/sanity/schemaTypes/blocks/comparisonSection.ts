import { defineArrayMember, defineField, defineType } from "sanity";

export const comparisonSection = defineType({
  name: "comparisonSection",
  title: "Comparison Section",
  type: "object",
  fields: [
    defineField({
      name: "leftTitle",
      title: "Left Column Title",
      type: "string",
    }),
    defineField({
      name: "leftPoints",
      title: "Left Column Points",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "rightTitle",
      title: "Right Column Title",
      type: "string",
    }),
    defineField({
      name: "rightPoints",
      title: "Right Column Points",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: {
    select: { left: "leftTitle", right: "rightTitle" },
    prepare: ({ left, right }) => ({
      title: [left, right].filter(Boolean).join(" vs ") || "Comparison",
    }),
  },
});
