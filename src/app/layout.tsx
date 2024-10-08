import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/navbar";
import Horizontalscroll from "./components/horizontal-scroll";
import Footer from "./components/footer";

const glacialIndifference = localFont({
  src: "./fonts/GlacialIndifference.woff",
  variable: "--font-glacial-indifference",
});

export const metadata: Metadata = {
  title: "Napoleon - The Right Talent Matched to the Best Roles",
  description: "Meaningful Connections Through Human-Curated Matchmaking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${glacialIndifference.variable} font-glacial `}>
      <Horizontalscroll />
      <body className="min-h-screen w-full bg-background text-gray-900 antialiased flex flex-col">
        <Header />
        <main className=" w-full min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
