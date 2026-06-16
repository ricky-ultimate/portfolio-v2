import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const caskaydia = localFont({
  src: "../../public/fonts/Caskaydia Cove Nerd Font Complete.ttf",
  variable: "--font-primary",
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
    <html lang="en" className={`${caskaydia.variable} h-full`}>
      <body
        className="min-h-full flex flex-col bg-[#0e0e0e] text-white px-30 py-15"
        style={{ fontFamily: "var(--font-primary), monospace" }}
      >
        {children}
      </body>
    </html>
  );
}
