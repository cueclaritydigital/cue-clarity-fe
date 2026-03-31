import { defineField, defineType } from "sanity";
import { FiMessageSquare } from "react-icons/fi";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: FiMessageSquare,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description: "E.g. 'Class 12 Student', 'Software Engineer', 'Parent'",
    }),
    defineField({
      name: "company",
      title: "Company / Institution",
      type: "string",
      description: "Optional — school, college or company name",
    }),
    defineField({
      name: "avatar",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "quote",
      title: "Testimonial",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(20).max(400),
    }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      description: "1 to 5 stars",
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
      options: {
        list: [
          { title: "⭐ 1", value: 1 },
          { title: "⭐⭐ 2", value: 2 },
          { title: "⭐⭐⭐ 3", value: 3 },
          { title: "⭐⭐⭐⭐ 4", value: 4 },
          { title: "⭐⭐⭐⭐⭐ 5", value: 5 },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "service",
      title: "Service Used",
      type: "string",
      description: "Which CueClarity service did this person use?",
      options: {
        list: [
          { title: "Career Counselling", value: "Career Counselling" },
          { title: "Study Abroad", value: "Study Abroad" },
          { title: "Industrial Training", value: "Industrial Training" },
          {
            title: "Workforce Development",
            value: "Workforce Development",
          },
          { title: "Mental Health", value: "Mental Health" },
          { title: "Khud Ki Kahani", value: "Khud Ki Kahani" },
          { title: "Other", value: "Other" },
        ],
      },
    }),
    defineField({
      name: "videoUrl",
      title: "Video Testimonial URL",
      type: "url",
      description: "Optional — link to a YouTube or video testimonial",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show this testimonial in highlighted / hero positions",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [
        { field: "featured", direction: "desc" },
        { field: "order", direction: "asc" },
      ],
    },
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "avatar",
      featured: "featured",
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: `${featured ? "★ " : ""}${title}`,
        subtitle: subtitle || "No role",
        media,
      };
    },
  },
});
