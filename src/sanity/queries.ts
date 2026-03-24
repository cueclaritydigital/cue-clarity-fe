import { groq } from "next-sanity";

// ── Service Page ─────────────────────────────────────────────────────────────

export const servicePageQuery = groq`
  *[_type == "servicePage" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    seo {
      metaTitle,
      metaDescription,
      targetKeywords,
      openGraphImage { asset->{url}, alt }
    },
    pageBuilder[]{
      _key,
      _type,
      ...,
      backgroundImage { asset->{url}, alt },
      image { asset->{url}, alt }
    }
  }
`;

export const allServiceSlugsQuery = groq`
  *[_type == "servicePage" && defined(slug.current)]{
    "slug": slug.current
  }
`;
