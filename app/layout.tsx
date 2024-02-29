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
        <main className="flex min-h-screen md:min-h-[calc(100vh-32px)] flex-col items-center justify-center gap-3 md:gap-12">
          {children}
        </main>
      </body>
    </html>
  );
}
