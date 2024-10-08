
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "webdevelopment qna",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[95%] mx-auto bg-gray-300">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
