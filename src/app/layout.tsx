import type { Metadata } from "next";
import {
  Oswald,
  Plus_Jakarta_Sans,
  Newsreader,
  Manrope,
} from "next/font/google";
import "./globals.css";
import { organizationSchema, siteNavigationSchema } from "@/lib/schema";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default:
      "CueClarity | Expert Career Counselling for Students & Professionals",
    template: "%s | CueClarity",
  },
  icons: {
    icon: "./icon.png", // Path to your icon in /public
    apple: "./icon.png",
  },
  description:
    "Discover the right career path with expert mentors. CueClarity helps students, parents, and professionals unlock global opportunities through personalized guidance.",
  keywords: [
    "career counselling",
    "career counseling",
    "student mentoring",
    "college guidance",
    "international education",
    "career assessment",
    "psychometric test",
  ],
  metadataBase: new URL("https://cueclarity.com"),
  openGraph: {
    title: "CueClarity — Find Your Direction",
    description:
      "Expert career counselling that transforms uncertainty into clarity.",
    type: "website",
    siteName: "CueClarity",
  },
  twitter: {
    card: "summary_large_image",
    title: "CueClarity — Find Your Direction",
    description:
      "Expert career counselling that transforms uncertainty into clarity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${jakarta.variable} ${newsreader.variable} ${manrope.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteNavigationSchema),
          }}
        />
      </head>
      <body
        className="font-[family-name:var(--font-jakarta)] antialiased"
        style={{
          color: "var(--primary-black)",
          backgroundColor: "var(--primary-white)",
          lineHeight: "var(--leading-normal)",
        }}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
