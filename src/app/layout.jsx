import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { store } from "./redux/Store";
import Providers from "./redux/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hekto",
  description: "Develop By Rifat Ibna Toukir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers> */}
          <Header />
          <Navbar />
          {children}
          <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
