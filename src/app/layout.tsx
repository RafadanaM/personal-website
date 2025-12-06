import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import localFont from "next/font/local";
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
const font = localFont({
  src: [
    {
      path: "../../public/fonts/ITC Avant Garde Gothic CE Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC Avant Garde Gothic Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC Avant Garde Gothic Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "---font-itc-avant-garde",
  display: "swap",
  preload: true,
});
export default function IndexLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en" className={`${font.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
