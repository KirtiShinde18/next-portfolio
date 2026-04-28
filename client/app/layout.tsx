import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import PublicNavbar from "./_components/PublicNavbar";
import Footer from "./_components/Footer";
import { ToastContainer } from "react-toastify";
// import "react-toastify/ReactToastify.css"
import "react-toastify/dist/ReactToastify.css"
import ReduxProvider from "@/redux/ReduxProvider";
import { ThemeProvider } from "next-themes";
import Loader from "./_components/Loader";



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
      lang="en"  suppressHydrationWarning
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // className={syne.className}
      className={`${syne.className}`}
    >

      <body className="min-h-full flex flex-col">

        <Loader />   {/* 🌸 loader */}

        {/* <div>mode : {process.env.NEXT_PUBLIC_ENV}</div> */}
      <ThemeProvider>

        <ReduxProvider>
          <ToastContainer/>

          {/* <PublicNavbar/> */}
          {children}
          <Footer/>
        </ReduxProvider>
      </ThemeProvider>

        </body>
    </html>
  );
}
