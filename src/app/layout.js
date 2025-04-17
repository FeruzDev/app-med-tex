import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Хирургия про",
  description: "ЭКСПЕРТ В ОБЛАСТИ ИННОВАЦИОННЫХ ЛАПАРОСКОПИЧЕСКИХ И РОБОТ-АССИСТИРОВАННОЙ ХИРУРГИИ. АБДОМИНАЛЬНАЯ ОНКОХИРУРГИЯ, КОЛОПРОКТОЛОГИЯ.",
};


import 'bootstrap/dist/css/bootstrap.min.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
