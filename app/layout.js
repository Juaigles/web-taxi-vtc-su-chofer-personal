
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Providers } from "./Providers";
import Whatsapp from "@/components/layout/Whatsapp";
import Wasap from "@/components/banners/Wasap";
import ReCaptchaProvider from "@/components/banners/ReCaptchaProvider";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="es">
 

      <body className={inter.className}>

          <Navbar />
          <Wasap/>
        <ReCaptchaProvider>

          {children}
         
        </ReCaptchaProvider>
          <SpeedInsights/>
          <Analytics/>
          <Footer />
    
      </body>

    </html>
  );
}
