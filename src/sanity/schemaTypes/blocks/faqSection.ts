import { defineArrayMember, defineField, defineType } from "sanity";

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 4, validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: "question" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "FAQ Section" }),
  },
});
