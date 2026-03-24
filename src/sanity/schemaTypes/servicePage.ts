import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const servicePage = defineType({
  name: "servicePage",
  title: "Service Page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO Metadata",
      type: "seoMetadata",
    }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "array",
      of: [
        defineArrayMember({ type: "heroSection" }),
        defineArrayMember({ type: "textWithImage" }),
        defineArrayMember({ type: "cardsGrid" }),
        defineArrayMember({ type: "processSteps" }),
        defineArrayMember({ type: "audiencePathways" }),
        defineArrayMember({ type: "statsBanner" }),
        defineArrayMember({ type: "faqSection" }),
        defineArrayMember({ type: "comparisonSection" }),
        defineArrayMember({ type: "ctaSection" }),
        defineArrayMember({ type: "expertBio" }),
        defineArrayMember({ type: "testimonialSlider" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare: ({ title, slug }) => ({
      title: title || "Untitled Service",
      subtitle: slug ? `/services/${slug}` : "",
    }),
  },
});
