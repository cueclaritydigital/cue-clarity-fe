import { defineArrayMember, defineField, defineType } from "sanity";

export const statsBanner = defineType({
  name: "statsBanner",
  title: "Stats Banner",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
    defineField({ name: "description", title: "Context Description (optional)", type: "text", rows: 2 }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "Navy Blue (default)", value: "blue" },
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
        ],
        layout: "radio",
      },
      initialValue: "blue",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [
            defineField({ name: "number", title: "Number", type: "string", validation: (rule) => rule.required(), description: "e.g. '5000+', '90%'" }),
            defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "sublabel", title: "Sub-label (optional)", type: "string" }),
          ],
          preview: {
            select: { number: "number", label: "label" },
            prepare: ({ number, label }) => ({ title: `${number ?? ""} — ${label ?? "Stat"}` }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { s0: "stats.0.number", s1: "stats.1.number" },
    prepare: ({ s0, s1 }) => ({ title: [s0, s1].filter(Boolean).join(", ") || "Stats Banner" }),
  },
});
