import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const haffer = localFont({
  src: [
    {
      path: "./fonts/Haffer/Haffer-TRIAL-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Haffer/Haffer-TRIAL-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Haffer/Haffer-TRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Haffer/Haffer-TRIAL-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Haffer/Haffer-TRIAL-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Haffer/Haffer-TRIAL-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Haffer/Haffer-TRIAL-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-haffer",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIORA",
  description: "Siora is a new luxury residential development in Dubai",
  icons: {
    icon: "/icons/monogram.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} ${haffer.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
