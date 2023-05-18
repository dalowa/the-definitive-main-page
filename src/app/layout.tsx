import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Definitive Page",
  description: "Dalowa's project",
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <title>Next.js</title>
      </head> */}
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
