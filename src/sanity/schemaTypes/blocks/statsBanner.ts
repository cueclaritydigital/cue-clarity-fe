import { defineArrayMember, defineField, defineType } from "sanity";

export const statsBanner = defineType({
  name: "statsBanner",
  title: "Stats Banner",
  type: "object",
  fields: [
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [
            defineField({ name: "number", title: "Number", type: "string", validation: (rule) => rule.required(), description: "e.g. '2500+', '98%'" }),
            defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { number: "number", label: "label" },
            prepare: ({ number, label }) => ({
              title: `${number ?? ""} — ${label ?? "Stat"}`,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { s0: "stats.0.number", s1: "stats.1.number" },
    prepare: ({ s0, s1 }) => ({
      title: [s0, s1].filter(Boolean).join(", ") || "Stats Banner",
    }),
  },
});
