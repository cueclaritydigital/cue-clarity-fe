import { defineField, defineType } from "sanity";
import { FiVideo } from "react-icons/fi";

export const videoTestimonialType = defineType({
  name: "videoTestimonial",
  title: "Video Testimonial",
  type: "document",
  icon: FiVideo,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Short title shown on the card (e.g. the video headline)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      description: "One-line description shown below the title",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Badge shown on the thumbnail",
      options: {
        list: [
          { title: "Student Testimonial", value: "Student Testimonial" },
          { title: "Parent Testimonial", value: "Parent Testimonial" },
          {
            title: "Professional Testimonial",
            value: "Professional Testimonial",
          },
          { title: "Study Abroad", value: "Study Abroad" },
          { title: "Entrepreneurship", value: "Entrepreneurship" },
          { title: "Career Transition", value: "Career Transition" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "youtubeId",
      title: "YouTube Video ID",
      type: "string",
      description:
        "Just the video ID, not the full URL. E.g. 'w_WK5fQ43jA' from youtube.com/watch?v=w_WK5fQ43jA or youtube.com/shorts/w_WK5fQ43jA",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Display duration shown on the card, e.g. '0:38' or '5:12'",
    }),
    defineField({
      name: "thumbnail",
      title: "Custom Thumbnail",
      type: "image",
      options: { hotspot: true },
      description:
        "Optional — if left empty, YouTube's auto-generated thumbnail is used",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 99,
    }),
    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      description: "Only published testimonials appear on the website",
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
      category: "category",
      media: "thumbnail",
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
});
