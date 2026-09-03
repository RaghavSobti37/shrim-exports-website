import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Shrim Export',
    template: '%s | Shrim Export',
  },
  description:
    'Connecting international buyers with carefully sourced agricultural products from India — quality, transparency and buyer-specific requirements.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
