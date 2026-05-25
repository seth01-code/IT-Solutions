import type { Metadata } from "next";
import { Syne, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

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
  title: "NovaTech – Powering Cape Town's Digital Future",
  description:
    "NovaTech builds fast, secure, and scalable digital solutions — from hardware repairs and custom web apps to enterprise cloud infrastructure and cybersecurity.",
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
        {children}
      </body>
    </html>
  );
}
