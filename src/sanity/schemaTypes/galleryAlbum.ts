import { defineArrayMember, defineField, defineType } from "sanity";
import { FiImage } from "react-icons/fi";

export const galleryAlbumType = defineType({
  name: "galleryAlbum",
  title: "Gallery Album",
  type: "document",
  icon: FiImage,
  fields: [
    defineField({
      name: "title",
      title: "Album Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Album Description",
      type: "string",
      description: "Optional short description shown on the album card",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      description: "Shown as the album thumbnail in the gallery",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
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
              description:
                "Optional caption shown below the image in the popup",
            }),
          ],
          preview: {
            select: { title: "alt", media: "image" },
            prepare({ title, media }) {
              return { title: title || "Photo", media };
            },
          },
        }),
      ],
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
    select: {
      title: "title",
      subtitle: "description",
      media: "coverImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Gallery Album",
        subtitle: subtitle || "",
        media,
      };
    },
  },
});
