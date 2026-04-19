import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ScrollSmootherProvider from "@/components/ScrollSmootherProvider";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sahel's Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#040120]  `}
        suppressHydrationWarning={true}
      >
        <ScrollSmootherProvider>
         
          {children}
          <Footer />
          
        </ScrollSmootherProvider>
      </body>
    </html>
  );
}
