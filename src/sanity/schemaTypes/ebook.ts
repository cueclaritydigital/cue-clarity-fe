import { defineField, defineType } from "sanity";
import { FiBook } from "react-icons/fi";

export const ebookType = defineType({
  name: "ebook",
  title: "E-book",
  type: "document",
  icon: FiBook,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "E.g. 'For Students & Parents'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "edition",
      title: "Edition / Volume",
      type: "string",
      description: "E.g. '2025 Edition' or 'Volume 02'",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "accentColorFrom",
      title: "Gradient Start Color",
      type: "string",
      description: "CSS color value for card gradient start (e.g. #29326e)",
    }),
    defineField({
      name: "accentColorTo",
      title: "Gradient End Color",
      type: "string",
      description: "CSS color value for card gradient end",
    }),
    defineField({
      name: "downloadFile",
      title: "Download File",
      type: "file",
      description: "Upload the PDF file for download",
    }),
    defineField({
      name: "downloadUrl",
      title: "External Download URL",
      type: "url",
      description:
        "Use this instead of uploading a file if the PDF is hosted externally",
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
    select: { title: "title", subtitle: "subtitle", media: "coverImage" },
  },
});
