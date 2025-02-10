import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// styles
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// common
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import ReduxProvider from "@/providers/ReduxProvider";
import Sidebar from "@/common/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devankar Portfolio Website",
  description: "I'm devankar. it's my portfolio!",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <Navbar />
          {children}
          <Sidebar />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
