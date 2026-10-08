import type { Metadata } from "next";
import "./globals.css";

// Metadata describes the application in the browser.
export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "A React and Next.js interactive web application",
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