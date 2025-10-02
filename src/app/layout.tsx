import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/* Used Lato as it was available and set weight to 400 as it was mentioned in css file */
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});

/* Defining optimised custom next/font replacing @font-face */
const larken = localFont({
  src: [
    { path: "../fonts/Larken-Bold.otf", weight: "700" },
    { path: "../fonts/Larken-Regular.otf", weight: "400" },
  ],
  variable: "--font-larken",
});

export const metadata: Metadata = {
  title: "Ruhava",
  description: "Luxury Fragrance Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${larken.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
