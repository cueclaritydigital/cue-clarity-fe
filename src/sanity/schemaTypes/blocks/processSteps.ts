import { defineArrayMember, defineField, defineType } from "sanity";

export const processSteps = defineType({
  name: "processSteps",
  title: "Process Steps",
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
      initialValue: "cream",
    }),
    defineField({
      name: "layout",
      title: "Layout Style",
      type: "string",
      options: {
        list: [
          { title: "Horizontal Steps (default)", value: "horizontal" },
          { title: "Vertical Timeline", value: "vertical" },
        ],
        layout: "radio",
      },
      initialValue: "horizontal",
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
