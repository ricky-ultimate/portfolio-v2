import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Riches Ogigi",
  description: "Full Stack Software Engineer specialising in backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0e0e0e] text-white">
        {children}
      </body>
    </html>
  );
}
