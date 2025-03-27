import type { Metadata } from "next";
import "./globals.css";
import { Righteous } from "next/font/google";
import { Press_Start_2P } from "next/font/google";

export const metadata: Metadata = {
  title: "Confluence 2025",
  description: "Official Website for Confluence'25",
  icons: {
    icon: "/confluenceLogo2.png",
  },
};

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={righteous.className}>{children}</body>
    </html>
  );
}
