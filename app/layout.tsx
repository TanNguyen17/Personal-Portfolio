import type { Metadata } from "next";
import { Syne, Space_Grotesk } from 'next/font/google'
import "./globals.css";

const syne = Syne({
  weight: ['400', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: "Manh Tan | Portfolio",
  description: "Digital portfolio of Manh Tan Nguyen — Software Engineer & Innovator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-space selection:bg-green/30 selection:text-white">
        <link rel="icon" href="/logo.png" sizes="32x32" className="rounded-full" />
        {children}
      </body>
    </html>
  );
}
