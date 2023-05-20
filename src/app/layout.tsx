import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import { Inter, Bebas_Neue, DM_Mono, Righteous } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const Bebas_Neve = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",

  variable: "--font-bebas",
});

const DM_mono = DM_Mono({
  subsets: ["latin"],
  weight: "400",

  variable: "--font-dm",
});

const Rightos = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-right",
});

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
      <body
        className={`${inter.className} ${Bebas_Neve.variable} ${DM_mono.variable} ${Rightos.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
