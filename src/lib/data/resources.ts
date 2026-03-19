export type Ebook = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  edition: string;
  accentFrom: string;
  accentTo: string;
  downloadUrl: string;
};

export type ResourceVideo = {
  id: string;
  title: string;
  subtitle: string;
  youtubeId: string;
  duration: string;
  category: string;
  thumbnail: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
};

export const EBOOKS: Ebook[] = [
  {
    id: "eb1",
    title: "The Career Clarity Playbook",
    subtitle: "For Students & Parents",
    description:
      "A science-backed, 52-page guide that walks you from confusion to a concrete, confident career roadmap. Covers psychometric frameworks, stream selection, and goal mapping.",
    edition: "2025 Edition",
    accentFrom: "var(--primary-blue)",
    accentTo: "var(--blob-glow)",
    downloadUrl: "#",
  },
  {
    id: "eb2",
    title: "Study Abroad Blueprint",
    subtitle: "International Education Guide",
    description:
      "Everything you need to plan, fund, and land your international education — from shortlisting universities to visa prep. 38 structured pages.",
    edition: "Volume 02",
    accentFrom: "var(--primary-yellow)",
    accentTo: "var(--accent-yellow)",
    downloadUrl: "#",
  },
  {
    id: "eb3",
    title: "The Career Pivot Guide",
    subtitle: "For Professionals",
    description:
      "Switching industries after 5+ years? This 44-page playbook breaks down skills mapping, resume positioning, and networking strategies for a confident mid-career shift.",
    edition: "Volume 03",
    accentFrom: "#059669",
    accentTo: "#34D399",
    downloadUrl: "#",
  },
  {
    id: "eb4",
    title: "Parent's Handbook",
    subtitle: "How to Guide Without Pressuring",
    description:
      "A counsellor's guide for parents — how to have productive career conversations with your child, recognise their aptitude, and support without controlling.",
    edition: "Special Edition",
    accentFrom: "#D97706",
    accentTo: "#F59E0B",
    downloadUrl: "#",
  },
];

export const RESOURCE_VIDEOS: ResourceVideo[] = [
  {
    id: "rv1",
    title: "5 Signs You're in the Wrong Career",
    subtitle: "Recognise the early warning signals before burnout takes over.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "9:14",
    category: "Career Planning",
    thumbnail:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773250202/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.png",
  },
  {
    id: "rv2",
    title: "Engineering vs Commerce: How to Choose",
    subtitle:
      "A structured framework for Class 10 students navigating stream selection.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "12:30",
    category: "Student Guidance",
    thumbnail:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773857945/Gemini_Generated_Image_fdp1q8fdp1q8fdp1_fded7r.webp",
  },
  {
    id: "rv3",
    title: "The Science Behind Career Assessments",
    subtitle:
      "What psychometric tests actually measure — and their real limitations.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "7:55",
    category: "Assessment",
    thumbnail:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773250202/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.png",
  },
  {
    id: "rv4",
    title: "Studying Abroad on a Budget",
    subtitle:
      "Scholarships, loans, and countries that offer world-class education affordably.",
    youtubeId: "dQw4w9WgXcQ",
    duration: "14:22",
    category: "Study Abroad",
    thumbnail:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773857945/Gemini_Generated_Image_fdp1q8fdp1q8fdp1_fded7r.webp",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    alt: "CueClarity career counselling group workshop session with students",
    span: "tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=800&auto=format&fit=crop",
    alt: "One-on-one career counselling session between mentor and student",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    alt: "School seminar on career options hosted by CueClarity",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    alt: "Professional career workshop in a corporate boardroom",
    span: "wide",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    alt: "Students filling out psychometric assessment forms",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
    alt: "International education seminar — study abroad planning session",
  },
];
