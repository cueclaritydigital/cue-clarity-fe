import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("CueClarity Content")
    .items([
      S.listItem()
        .title("Blog Posts")
        .icon(() => "✍️")
        .child(
          S.documentTypeList("blogPost")
            .title("Blog Posts")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
        ),
      S.divider(),
      S.listItem()
        .title("E-books")
        .icon(() => "📚")
        .child(
          S.documentTypeList("ebook")
            .title("E-books")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Videos")
        .icon(() => "▶️")
        .child(
          S.documentTypeList("resourceVideo")
            .title("Resource Videos")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Gallery")
        .icon(() => "🖼️")
        .child(
          S.documentTypeList("galleryImage")
            .title("Gallery Images")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.divider(),
      S.listItem()
        .title("Testimonials")
        .icon(() => "⭐")
        .child(
          S.documentTypeList("testimonial")
            .title("Testimonials")
            .defaultOrdering([
              { field: "featured", direction: "desc" },
              { field: "order", direction: "asc" },
            ]),
        ),
      S.listItem()
        .title("Video Testimonials")
        .icon(() => "🎬")
        .child(
          S.documentTypeList("videoTestimonial")
            .title("Video Testimonials")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
    ]);
