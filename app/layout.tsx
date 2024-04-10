import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/utils/shadcn"
import "@/styles/globals.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EORC-20",
  description: "EOS Inscriptions EORC-20 standard token",
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-[url('/img/bg.png')]",
          fontSans.variable
        )}
      >
        <div className="container mx-auto py-5">
          <Image src={'/img/logo.png'} width={170} height={60} className="pb-5" alt="logo" />
          {children}
        </div>
      </body>
    </html>
  )
}