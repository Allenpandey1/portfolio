import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allen Pandey - Computer Science Student | Full-Stack Developer",
  description: "Computer Science student at UNT specializing in full-stack development with Python, TypeScript, React, and Next.js. Building scalable web applications.",
  keywords: "Allen Pandey, Computer Science, Full-Stack Developer, Python, TypeScript, React, Next.js, UNT",
  author: "Allen Pandey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

