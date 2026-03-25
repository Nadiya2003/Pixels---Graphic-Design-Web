import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "PIXELS | Graphic Design Competition",
  description: "The premier graphic design competition organized by the Rotaract Club of University of Kelaniya. Join the elite ranks of creative visionaries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased selection:bg-art-blue/30`}>
        {children}
      </body>
    </html>
  );
}
