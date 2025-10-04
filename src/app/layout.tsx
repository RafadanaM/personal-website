import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Muhammad Rafadana Mountheira",
  description:
    "Muhammad Rafadana Mountheira (Rafadana), a web software engineer with 2 years of experience that main works React and similar tools.",
  authors: {
    name: "Muhammad Rafadana Mountheira",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png ",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png ",
        sizes: "16x16",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: "Rafadana Mountheira",
    description:
      "Muhammad Rafadana Mountheira (Rafadana), a web software engineer with 2 years of experience that main works React and similar tools",
    url: "rafadana.com",
  },
  keywords: ["Rafadana", "Muhammad Rafadana Mountheira", "Rafa"],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0f1e",
  colorScheme: "normal",
};

export default function IndexLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
