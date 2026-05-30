import type { Metadata } from "next";
import { Syne, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "./Preloader";
import { Toaster } from "sonner";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axonsys.com"),

  title: {
    default: "Axonsys – Windows IT Support & Infrastructure",
    template: "%s | Axonsys",
  },

  description:
    "Axonsys delivers professional Windows IT support, cybersecurity, system maintenance, remote access, and network solutions for businesses across the United States.",

  keywords: [
    "Windows IT support",
    "IT infrastructure",
    "cybersecurity",
    "remote IT support",
    "system maintenance",
    "network support",
    "Axonsys",
  ],

  authors: [{ name: "Axonsys" }],
  creator: "Axonsys",

  alternates: {
    canonical: "https://axonsys.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://axonsys.com",
    siteName: "Axonsys",
    title: "Axonsys – Windows IT Support & Infrastructure",
    description:
      "Professional Windows IT support, cybersecurity, and system maintenance for businesses across the United States.",

    images: [
      {
        url: "/og-image.png", // IMPORTANT (put in /public)
        width: 1200,
        height: 630,
        alt: "Axonsys IT Support & Infrastructure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Axonsys – Windows IT Support & Infrastructure",
    description:
      "Professional Windows IT support, cybersecurity, and system maintenance for businesses across the United States.",
    images: ["/og-image.png"],
    creator: "@axonsys",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        <Preloader />
        {children}
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
      </body>
    </html>
  );
}