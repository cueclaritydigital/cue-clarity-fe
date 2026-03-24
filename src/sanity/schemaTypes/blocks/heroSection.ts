import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
    
    // PRIMARY BUTTON
    defineField({
      name: "primaryButton",
      title: "Primary Button",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Button Text", type: "string" }),
        defineField({
          name: "actionType",
          title: "Action Type",
          type: "string",
          options: {
            list: [
              { title: "Redirection (Link)", value: "link" },
              { title: "Internal Action (e.g., Book Call)", value: "action" }
            ],
            layout: "radio",
          },
          initialValue: "link",
        }),
        defineField({
          name: "link",
          title: "URL / Route",
          type: "string", // String is better than 'url' here to allow relative paths like '/contact'
          description: "Enter a full URL or a relative path.",
          hidden: ({ parent }) => parent?.actionType !== "link",
        }),
        defineField({
          name: "action",
          title: "Action Identifier",
          type: "string",
          description: "Select the frontend action this button should trigger.",
          options: {
            list: [
              { title: "Open Booking Modal", value: "book_call" },
              { title: "Scroll to Content", value: "scroll_down" },
              { title: "Whats App", value: "scroll_down" }
            ],
          },
          hidden: ({ parent }) => parent?.actionType !== "action",
        }),
      ],
    }),

    // SECONDARY BUTTON (Optional)
    defineField({
      name: "secondaryButton",
      title: "Secondary Button (Optional)",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Button Text", type: "string" }),
        defineField({
          name: "actionType",
          title: "Action Type",
          type: "string",
          options: {
            list: [
              { title: "Redirection (Link)", value: "link" },
              { title: "Internal Action", value: "action" }
            ],
            layout: "radio",
          },
          initialValue: "link",
        }),
        defineField({
          name: "link",
          title: "URL / Route",
          type: "string",
          hidden: ({ parent }) => parent?.actionType !== "link",
        }),
        defineField({
          name: "action",
          title: "Action Identifier",
          type: "string",
          options: {
            list: [
              { title: "Open Booking Modal", value: "book_call" },
              { title: "Scroll to Content", value: "scroll_down" },
              { title: "Whats App", value: "scroll_down" }
            ],
          },
          hidden: ({ parent }) => parent?.actionType !== "action",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Hero Section" }),
  },
});