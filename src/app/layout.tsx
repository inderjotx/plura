import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { Poppins } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/global/navbar";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({ subsets: ["latin"], style: "normal", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Plural",
  description: "One site to maintain your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
