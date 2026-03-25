import { defineArrayMember, defineField, defineType } from "sanity";

export const cardsGrid = defineType({
  name: "cardsGrid",
  title: "Cards Grid",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
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
      initialValue: "white",
    }),
    defineField({
      name: "variant",
      title: "Card Variant",
      type: "string",
      options: {
        list: [
          { title: "Default (Icon + Title + Desc)", value: "default" },
          { title: "Problem (pain points)", value: "problem" },
          { title: "Benefit (outcome cards)", value: "benefit" },
          { title: "Feature (numbered)", value: "feature" },
        ],
        layout: "radio",
      },
      initialValue: "default",
    }),
    defineField({
      name: "layout",
      title: "Grid Layout",
      type: "string",
      options: {
        list: [
          { title: "2 Columns", value: "2col" },
          { title: "3 Columns (default)", value: "3col" },
          { title: "4 Columns", value: "4col" },
        ],
        layout: "radio",
      },
      initialValue: "3col",
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer (optional)",
      type: "text",
      rows: 2,
      description:
        "Shown below the cards as a highlighted notice e.g. ⚠ The Reality: ...",
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "card",
          fields: [
            defineField({
              name: "iconName",
              title: "Icon",
              type: "string",
              description: "Pick a react-icons/fi icon",
              options: {
                list: [
                  { title: "Target", value: "FiTarget" },
                  { title: "Heart", value: "FiHeart" },
                  { title: "Users", value: "FiUsers" },
                  { title: "Award", value: "FiAward" },
                  { title: "Briefcase", value: "FiBriefcase" },
                  { title: "Book", value: "FiBook" },
                  { title: "Book Open", value: "FiBookOpen" },
                  { title: "Map", value: "FiMap" },
                  { title: "Zap", value: "FiZap" },
                  { title: "Phone", value: "FiPhone" },
                  { title: "Trending Up", value: "FiTrendingUp" },
                  { title: "Check Circle", value: "FiCheckCircle" },
                  { title: "Arrow Right", value: "FiArrowRight" },
                  { title: "Star", value: "FiStar" },
                  { title: "Globe", value: "FiGlobe" },
                  { title: "Compass", value: "FiCompass" },
                  { title: "Clipboard", value: "FiClipboard" },
                  { title: "Layers", value: "FiLayers" },
                  { title: "Smile", value: "FiSmile" },
                  { title: "Shield", value: "FiShield" },
                ],
                layout: "dropdown",
              },
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "href",
              title: "Link URL (optional)",
              type: "string",
            }),
          ],
          preview: { select: { title: "title", subtitle: "emoji" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading", variant: "variant" },
    prepare: ({ title, variant }) => ({
      title: title || "Cards Grid",
      subtitle: variant ?? "",
    }),
  },
});
