import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Joseph Florina | Full-Stack, DevOps, AI, WordPress & 3D",
  description:
    "Portfolio of John Joseph Florina — Full-Stack, DevOps and AI Engineer with web, mobile, WordPress, cloud, automation, GitHub and Blender/3D work.",
  keywords: [
    "John Joseph Florina",
    "Full-Stack Developer",
    "DevOps Engineer",
    "AI Engineer",
    "Next.js",
    "React Native",
    "Expo",
    "GCP",
    "WordPress",
    "WooCommerce",
    "n8n",
    "Blender",
    "florinalabs",
  ],
  authors: [{ name: "John Joseph Florina" }],
  openGraph: {
    title: "John Joseph Florina | Full-Stack, DevOps, AI, WordPress & 3D",
    description:
      "Full-stack engineering, cloud/DevOps, AI automation, WordPress and Blender/3D portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
