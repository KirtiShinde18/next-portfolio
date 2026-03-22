import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import PublicNavbar from "./_components/PublicNavbar";
import Footer from "./_components/Footer";


const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirti Shinde",
  description: "A collection of my web development projects showcasing my experience in frontend and backend development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      className={syne.className}
    >
      <body className="min-h-full flex flex-col">

        {/* <div>mode : {process.env.NEXT_PUBLIC_ENV}</div> */}
        <PublicNavbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
