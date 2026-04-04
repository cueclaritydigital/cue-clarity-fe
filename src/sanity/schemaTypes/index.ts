import { type SchemaTypeDefinition } from "sanity";
import { blogPostType } from "./blogPost";
import { ebookType } from "./ebook";
import { galleryAlbumType } from "./galleryAlbum";
import { resourceVideoType } from "./resourceVideo";
import { testimonialType } from "./testimonial";
import { videoTestimonialType } from "./videoTestimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogPostType,
    ebookType,
    resourceVideoType,
    galleryAlbumType,
    testimonialType,
    videoTestimonialType,
  ],
};
