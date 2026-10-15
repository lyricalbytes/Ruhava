

import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false; 

import ScrollFix from "@/components/ScrollFix";


const tenor = localFont({
  src: '../fonts/TenorSans-Regular.ttf',
  variable: "--font-tenor",
  display: 'swap',
});


/* Used Lato as it was available and set weight to 400 as it was mentioned in css file */
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});

const dancing = localFont({
   src: '../fonts/Sacramento-Regular.ttf', // path to your font file
  variable: '--font-dancing',            // defines a CSS variable
  weight: '400',                     // specifies the range of weights supported
  display: 'swap',
});

/* Defining optimised custom next/font replacing @font-face */
// const larken = localFont({
//   src: [
//     { path: "../fonts/Larken-Bold.otf", weight: "700" },
//     { path: "../fonts/Larken-Regular.otf", weight: "400" },
//   ],
//   variable: "--font-larken",
// });

const larken = localFont({
  src: [
    { path: "../fonts/PlayfairDisplay-Bold.ttf", weight: "700" },
    { path: "../fonts/PlayfairDisplay-Regular.ttf", weight: "400" },
  ],
  variable: "--font-larken",
});



export const metadata: Metadata = {
  title: "RUHAVA Official Website - India : Fragrance | RUHAVA",
  description: "Luxury Fragrance Brand",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${larken.variable} ${lato.variable} ${tenor.variable} ${dancing.variable} antialiased`}>
         
         {/* Wrap app with CartProvider */}
        <CartProvider>
          {children}
        </CartProvider>

        <ScrollFix />
      </body>
    </html>
  );
}



  
