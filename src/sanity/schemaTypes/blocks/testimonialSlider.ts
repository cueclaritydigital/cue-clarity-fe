import { defineArrayMember, defineField, defineType } from "sanity";

export const testimonialSlider = defineType({
  name: "testimonialSlider",
  title: "Testimonial Slider",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Cream", value: "cream" },
          { title: "Black", value: "black" },
        ],
        layout: "radio",
      },
      initialValue: "white",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "testimonial",
          fields: [
            defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (rule) => rule.required() }),
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "role", title: "Role / Designation", type: "string" }),
          ],
          preview: {
            select: { title: "name", subtitle: "role" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { t0: "testimonials.0.name", t1: "testimonials.1.name" },
    prepare: ({ t0, t1 }) => ({
      title: [t0, t1].filter(Boolean).join(", ") || "Testimonial Slider",
    }),
  },
});
