import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Yoki Inter
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lutsente — Biznes o‘sishi uchun aqlli Wi-Fi",
  description: "Mijozlar oqimini daromadga aylantiring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${font.className} antialiased bg-[#F8FAFC] text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white`}>
        {/* Orqa fondagi premium "Mesh" effekti */}
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-indigo-400/20 blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}