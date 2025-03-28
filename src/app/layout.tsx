import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SocialLinks from "@/components/SocialLinks";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Secure Matrix- Your trusted partner in security solutions",
  description: "Secure Matrix - Your trusted partner in security solutions",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className="font-poppins">
        {children}
        <SocialLinks />
      </body>
    </html>
  );
}
