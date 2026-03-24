import { defineField, defineType } from "sanity";

export const expertBio = defineType({
  name: "expertBio",
  title: "Expert Bio",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title / Designation",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "blockContent",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "title", media: "image" },
  },
});
