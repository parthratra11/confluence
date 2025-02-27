import type { Metadata } from "next";
import "./globals.css";
import { Righteous } from "next/font/google";

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
