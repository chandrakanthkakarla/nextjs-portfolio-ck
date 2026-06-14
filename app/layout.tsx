import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import ScrollToTitleOnMobile from "./components/ScrollToTitleOnMobile";
import { Analytics } from "@vercel/analytics/next";
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
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-sans bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          <Navbar />
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
