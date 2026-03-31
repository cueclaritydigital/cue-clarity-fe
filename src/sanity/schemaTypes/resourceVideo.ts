import { defineField, defineType } from "sanity";
import { FiYoutube } from "react-icons/fi";

export const resourceVideoType = defineType({
  name: "resourceVideo",
  title: "Resource Video",
  type: "document",
  icon: FiYoutube,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle / Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "youtubeId",
      title: "YouTube Video ID",
      type: "string",
      description:
        "Just the ID, not the full URL. E.g. 'dQw4w9WgXcQ' from youtube.com/watch?v=dQw4w9WgXcQ",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Display duration, e.g. '9:14'",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Career Planning", value: "Career Planning" },
          { title: "Student Guidance", value: "Student Guidance" },
          { title: "Assessment", value: "Assessment" },
          { title: "Study Abroad", value: "Study Abroad" },
          { title: "For Parents", value: "For Parents" },
          { title: "Workforce Development", value: "Workforce Development" },
        ],
      },
    }),
    defineField({
      name: "thumbnail",
      title: "Custom Thumbnail",
      type: "image",
      options: { hotspot: true },
      description:
        "Optional — YouTube auto-generates one, but you can override it here",
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
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "thumbnail" },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `Category: ${subtitle}` : "No category",
        media,
      };
    },
  },
});
