import type { Metadata } from "next";
import { spaceGrotesk } from "./fonts";

import "./globals.css";
import { SmoothScroll } from "@/components";
import { meta } from "@/constant/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(meta.site.url),
  title: meta.site.title,
  description: meta.site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: meta.site.title,
    description: meta.site.description,
    images: [
      {
        url: meta.site.bannerImage,
        width: 2248,
        height: 1264,
        alt: meta.site.description,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} bg-background font-space-grotesk text-white antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
