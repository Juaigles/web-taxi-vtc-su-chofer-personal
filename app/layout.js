import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Providers } from "./Providers";
import Whatsapp from "@/components/layout/Whatsapp";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {/* <Whatsapp/> */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
