import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuantumGPT",
  description: "Every answer is true in some universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen items-center justify-center gap-3 md:gap-12 bg-black text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
