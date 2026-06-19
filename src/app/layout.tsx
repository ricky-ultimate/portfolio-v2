import type { Metadata } from "next";
import localFont from "next/font/local";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import "./globals.css";

const caskaydia = localFont({
  src: "../../public/fonts/Caskaydia Cove Nerd Font Complete.ttf",
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Riches Ogigi",
  description: "Full Stack Software Engineer specialising in backend systems.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caskaydia.variable} h-full`}>
      <body
        className="min-h-screen flex flex-col bg-[#0e0e0e] text-white px-6 py-8 sm:px-12 sm:py-12 md:px-20 md:py-12 lg:px-30 lg:py-15"
        style={{ fontFamily: "var(--font-primary), monospace" }}
      >
        <PageHeader />
        <div className="flex flex-col flex-1">{children}</div>
        <PageFooter />
      </body>
    </html>
  );
}
