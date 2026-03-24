import { defineArrayMember, defineField, defineType } from "sanity";

export const processSteps = defineType({
  name: "processSteps",
  title: "Process Steps",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "step",
          fields: [
            defineField({ name: "stepNumber", title: "Step Number", type: "number" }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: {
            select: { title: "title", number: "stepNumber" },
            prepare: ({ title, number }) => ({
              title: number ? `${number}. ${title}` : title || "Step",
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Process Steps" }),
  },
});
