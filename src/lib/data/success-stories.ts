export type VideoStory = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
};

export type WrittenStory = {
  id: string;
  name: string;
  role: string;
  location: string;
  headline: string;
  quote: string;
  initial: string;
  rating: number;
  spotlight?: boolean;
};

export const VIDEO_STORIES: VideoStory[] = [
  {
    id: "vs1",
    title: "Best Career Counseling in India? Real Student Review | CueClarity",
    subtitle: "A science-backed assessment revealed a hidden product mindset.",
    category: "Student Testimonial",
    duration: "0:38",
    thumbnail:
      "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775311549/3_dunbvi.png",
    videoUrl: "https://www.youtube.com/embed/w_WK5fQ43jA?autoplay=1",
  },
  {
    id: "vs2",
    title: "Arjun's Leap: Engineering to Founder",
    subtitle: "The mentorship framework that turned burnout into a business.",
    category: "Entrepreneurship",
    duration: "11:15",
    thumbnail:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773857945/Gemini_Generated_Image_fdp1q8fdp1q8fdp1_fded7r.webp",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: "vs3",
    title: "Rhea's Abroad Dream: Class 12 to UK University",
    subtitle: "How clarity on strengths unlocked a fully-funded Masters seat.",
    category: "International Education",
    duration: "6:30",
    thumbnail:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773250202/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
];

export const WRITTEN_STORIES: WrittenStory[] = [
  {
    id: "ws1",
    name: "Ananya Mehta",
    role: "Software Engineer → Product Manager",
    location: "Bangalore",
    headline:
      "3 sessions. A crystal-clear roadmap. My dream PM role in 4 months.",
    quote:
      "I had the skills but never knew how to position them. CueClarity's assessment revealed my true strengths and gave me a concrete plan I could actually follow. The whole process felt personalised — not generic advice.",
    initial: "A",
    rating: 5,
  },
  {
    id: "ws2",
    name: "Julian Banks",
    role: "Middle Manager → VP of Strategy",
    location: "Mumbai",
    headline: "The mentorship clarity alone is worth a lifetime of investment.",
    quote:
      "Navigating the pivot from middle management to a senior leadership role required more than new skills — it required a perspective shift. My CueClarity mentor gave me the exact roadmap and the confidence to ask for what I was worth.",
    initial: "J",
    rating: 5,
    spotlight: true,
  },
  {
    id: "ws3",
    name: "Meera Sharma",
    role: "Parent of Class 10 Student",
    location: "Delhi",
    headline: "Gave us the clarity no other counsellor even attempted.",
    quote:
      "As a parent, I was anxious about my son's future. The structured assessments were honest, the guidance was empathetic, and the plan they laid out gave both of us real confidence — not just vague options.",
    initial: "M",
    rating: 5,
  },
  {
    id: "ws4",
    name: "Priya Nair",
    role: "Marketing Manager → Founder",
    location: "Mumbai",
    headline:
      "Finally understood why I was unhappy — and what would make me thrive.",
    quote:
      "The psych assessment was uncanny. It revealed exactly why my current role drained me, and pointed me toward a path I'd never even considered. Within six months, I launched my own consultancy. Life-changing.",
    initial: "P",
    rating: 5,
  },
  {
    id: "ws5",
    name: "Sanya Kapoor",
    role: "Class 12 Student → Architecture",
    location: "Mumbai",
    headline:
      "One session shifted my parents' perspective — and my entire future.",
    quote:
      "My parents kept pushing engineering. One honest session with CueClarity helped me — and them — understand why architecture was where I would genuinely thrive. Now I'm in my second year at CEPT.",
    initial: "S",
    rating: 5,
  },
  {
    id: "ws6",
    name: "Rahul Desai",
    role: "Finance Professional → Data Scientist",
    location: "Hyderabad",
    headline: "Switched careers after 8 years. They made it feel possible.",
    quote:
      "I was too scared to leave a stable finance job. The clarity session pinpointed exactly which skills I already had that transferred seamlessly into data science. Best decision I've ever made.",
    initial: "R",
    rating: 5,
  },
];

export const METRICS = [
  { value: "5,000+", label: "Careers Transformed" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "500+", label: "Seminars Delivered" },
  { value: "200+", label: "Partner Institutions" },
];
