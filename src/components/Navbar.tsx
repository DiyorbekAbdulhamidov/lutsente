"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-blue-600">LUTSENTE</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Imkoniyatlar</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition">Qanday ishlaydi?</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Tariflar</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
          Bog'lanish
        </button>
      </div>
    </nav>
  );
}