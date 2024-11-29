
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Providers } from "./Providers";
import Whatsapp from "@/components/layout/Whatsapp";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="es">
 

      <body className={inter.className}>

          <Navbar />
          {/* <Whatsapp/> */}
          {children}
          <SpeedInsights/>
          <Analytics/>
          <Footer />
    
      </body>

    </html>
  );
}
