"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackTop from "@/components/BackTop";
import { Provider } from "react-redux";
import store from "@/store/index"


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
