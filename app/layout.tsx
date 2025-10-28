import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "iPhone 17 Pro Max | Visionary Power Video Experience",
  description:
    "Dive into the cinematic reveal of the iPhone 17 Pro Max — a fusion of titanium craftsmanship, A19 Neural engine performance, and the new FusionQuad camera system.",
  keywords: [
    "iPhone 17 Pro Max",
    "Apple",
    "smartphone video",
    "flagship phone",
    "cinematic reveal"
  ],
  openGraph: {
    title: "iPhone 17 Pro Max | Visionary Power Video Experience",
    description:
      "Watch the immersive promotional video and explore the defining innovations of Apple's iPhone 17 Pro Max.",
    url: "https://agentic-48846f2c.vercel.app",
    siteName: "iPhone 17 Pro Max Experience",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone 17 Pro Max | Visionary Power Video Experience",
    description:
      "Immerse yourself in the next era of iPhone with an original cinematic showcase of the 17 Pro Max.",
    site: "@factory_ai"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>{children}</body>
    </html>
  );
}
