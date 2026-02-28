import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import ScrollToTitleOnMobile from "./components/ScrollToTitleOnMobile";
import { Analytics } from "@vercel/analytics/next";
import CursorGlow from "./components/CursorGlow";
import { ThemeProvider } from "./components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} dark`}>
      <body className="font-sans bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider>
          <CursorGlow />
          <Navbar />
          <ScrollToTitleOnMobile />
          <div className="pt-24">
            {children}
          </div>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
