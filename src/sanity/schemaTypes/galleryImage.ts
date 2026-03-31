import { defineField, defineType } from "sanity";
import { FiImage } from "react-icons/fi";

export const galleryImageType = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  icon: FiImage,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Describe the image for accessibility and SEO",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Optional short caption shown on hover",
    }),
    defineField({
      name: "span",
      title: "Grid Span",
      type: "string",
      description: "Controls how the image spans the masonry grid",
      options: {
        list: [
          { title: "Normal (1×1)", value: "normal" },
          { title: "Tall (1×2)", value: "tall" },
          { title: "Wide (2×1)", value: "wide" },
        ],
        layout: "radio",
      },
      initialValue: "normal",
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
    select: { title: "alt", subtitle: "span", media: "image" },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Gallery Image",
        subtitle: `Span: ${subtitle || "normal"}`,
        media,
      };
    },
  },
});
