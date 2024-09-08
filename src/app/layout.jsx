"use client"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackTop from "@/components/BackTop";


export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <head>
          <title>Hekto</title>
        </head>
        <body>
          <Header />
          <Navbar />
          {children}
          <BackTop />
          <Footer />
        </body>
      </html>
  );
}
