import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import PublicNavbar from "./_components/PublicNavbar";
import Footer from "./_components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import ReduxProvider from "@/redux/ReduxProvider";



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
  description: "Portfolio Website Using Next.js ",
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
      // className={syne.className}
      className={`${syne.className}`}
    >

      <body className="min-h-full flex flex-col">

        {/* <div>mode : {process.env.NEXT_PUBLIC_ENV}</div> */}

        <ReduxProvider>
          <ToastContainer/>

          <PublicNavbar/>
          {children}
          <Footer/>
        </ReduxProvider>

        </body>
    </html>
  );
}
