import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Toma.H Portfolio",
  description: "原透真のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased before:w-full before:h-screen before:fixed before:block before:top-0 before:left-0 before:-z-10 before:bg-[url("/white_back.jpg")] before:bg-cover before:bg-center before:bg-no-repeat `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
