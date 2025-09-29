import type { Metadata } from "next";
import { Lato, Geist } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";

/* Used Lato and Geist from google as it was available and set weight to 400 as it was mentioned in css file */
// const lato = Lato({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-lato",
// });

// const giest = Geist({
//   subsets: ["latin"],
//   variable: "--font-giest",
// });

/* Defining custom font instead of @font-face */
// const larken = localFont({
//   src: [
//     { path: "../fonts/Larken-Bold.otf", weight: "700" },
//     { path: "../fonts/Larken-Regular.otf", weight: "400" },
//   ],
//   variable: "--font-larken",
// });

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
      <body
        // className={`${larken.variable} ${giest.variable} ${lato.variable} antialiased`}
      >
        {/* Made a separate Header and Footer file in the components folder to separate logic */}
        {children}
      </body>
    </html>
  );
}
