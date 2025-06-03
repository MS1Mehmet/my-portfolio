
import type { Metadata } from "next";
import "./globals.css";
import { Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "Single Page Portfolio",
  description: "Created with Frontend Tribe",
};

const oxanium = Oxanium({
  weight: ["400", "500", "600"],  
  subsets: ["latin"],  
  display: "swap",
  variable: "--font-oxanium", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oxanium.variable} flex flex-col g-screen overscroll-none font-sans antialiased text-stone-200`}>
      
        {children}
      </body>
    </html>
  );
}