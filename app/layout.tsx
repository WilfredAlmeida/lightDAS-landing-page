import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light DAS",
  description: "Lightweight DAS for Solana",
  icons: {
    icon: '/logo.svg',
  },
};
// favicon.ico
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
    
        {children}
        </body>
    </html>
  );
}
