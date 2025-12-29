"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Cast, BarChart3, Users, Zap, CheckCircle2,
  ArrowRight, Smartphone, X, Menu,
  PieChart, MessageSquare, Phone, Instagram, Linkedin, Send
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// 1. NAVIGATION (Mobile & Desktop)
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Imkoniyatlar", href: "#features" },
    { name: "Jarayon", href: "#how-it-works" },
    { name: "Tariflar", href: "#pricing" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-3" : "py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`rounded-2xl transition-all duration-500 ${scrolled
            ? "bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-lg shadow-violet-900/5 px-6 py-3"
            : "bg-transparent px-0 py-0"
            }`}>
            <div className="flex justify-between items-center">
              {/* Logo - Changed Icon to 'Cast' for uniqueness */}
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-violet-600/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Cast size={20} strokeWidth={2.5} />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-violet-700 transition-colors">LUTSENTE</span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-bold text-slate-600 uppercase tracking-wide hover:text-violet-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-violet-600 after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <a
                  href="tel:+998956677577"
                  className="hidden md:flex items-center gap-2 text-slate-600 font-bold hover:text-violet-700 transition"
                >
                  <Phone size={18} />
                  <span>+998 95 667 75 77</span>
                </a>
                <a
                  href="#contact"
                  className="hidden md:inline-flex bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Bog'lanish
                </a>
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900 py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:+998956677577" className="text-xl font-bold text-slate-600 py-2">
                +998 95 667 75 77
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-violet-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl mt-4"
              >
                Bepul konsultatsiya
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// 2. HERO SECTION
const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 overflow-hidden w-full">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-violet-100/50 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-100 text-violet-700 text-sm font-bold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600"></span>
          </span>
          Biznesingizni yangi bosqichga olib chiqing
        </motion.div>

        <motion.h1
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8"
        >
          Wi-Fi tarmog‘ini <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600"> daromad manbaiga</span> aylantiring.
        </motion.h1>

        <motion.p
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-lg md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Mijozlar bazasini yig‘ing, tashriflar statistikasini kuzating va takroriy savdolarni
          murakkab texnikalarsiz oshiring.
        </motion.p>

        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-violet-600 rounded-2xl text-white font-bold text-lg shadow-xl shadow-violet-500/30 hover:bg-violet-700 hover:scale-105 transition-all text-center">
            Tizimni sinab ko'rish
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto px-10 py-5 bg-white rounded-2xl text-slate-900 font-bold text-lg border border-slate-200 hover:border-violet-200 hover:bg-violet-50 transition-all text-center group">
            Batafsil <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Hero Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="mt-20 max-w-5xl mx-auto perspective-1000"
      >
        <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_40px_120px_-20px_rgba(124,58,237,0.15)] p-4 md:p-8 overflow-hidden">
          {/* Dashboard Header Simulation */}
          <div className="flex justify-between items-center mb-8 px-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>
            <div className="h-2 w-32 bg-slate-100 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Visits */}
            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-between h-48 hover:border-violet-200 transition-colors group">
              <div className="h-10 w-10 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:text-white transition-all"><Users size={20} /></div>
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">2,540</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Oylik tashriflar</div>
              </div>
            </div>
            {/* Card 2: Return Rate */}
            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-between h-48 hover:border-emerald-200 transition-colors group">
              <div className="h-10 w-10 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all"><PieChart size={20} /></div>
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">85%</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Qaytish ko'rsatkichi</div>
              </div>
            </div>
            {/* Card 3: Live Status */}
            <div className="bg-slate-900 p-6 rounded-[2rem] text-white relative overflow-hidden h-48 flex items-end shadow-xl">
              <div className="absolute top-0 right-0 p-6 opacity-10"><Cast size={80} /></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold mb-3 backdrop-blur-md">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> LIVE
                </div>
                <div className="text-xl font-bold mb-1">Lutsente PRO</div>
                <div className="text-sm opacity-60">Marketing kampaniyasi aktiv</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// 3. FEATURES (Bento Grid)
const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Raqamlar bilan ishlaydigan <br /><span className="text-violet-600">haqiqiy biznes instrument.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Lutsente shunchaki Wi-Fi tarqatmaydi. U tashrif buyuruvchilarni sodiq mijozga aylantiruvchi to'liq analitika markazidir.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[340px]">
          {/* Card 1: LTV & Analytics */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 flex flex-col justify-between relative overflow-hidden group min-h-[400px]"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm mb-8 text-violet-600">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight">Qayta kelgan mijozlar <br /> va LTV o'sishi</h3>
              <ul className="space-y-4 text-slate-600 font-medium text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-violet-600" /> Yangi va eski mijozlar farqi</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-violet-600" /> Tashriflarning aniq chastotasi</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-violet-600" /> Tashriflar eng tig'iz bo'lgan vaqtlar</li>
              </ul>
            </div>
            {/* Visual Abstract Chart */}
            <div className="absolute bottom-0 right-0 w-full md:w-[60%] h-[50%] bg-white rounded-tl-[3rem] border-t border-l border-slate-100 p-8 shadow-sm translate-y-4 md:translate-y-8 md:translate-x-8 group-hover:translate-x-4 transition-transform duration-500">
              <div className="flex items-end gap-3 h-full pb-8 justify-between px-2">
                {[35, 60, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-violet-600 to-fuchsia-400 rounded-t-xl opacity-90" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Fast Auth */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-900 text-white rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden min-h-[340px]"
          >
            <div className="relative z-10">
              <Zap className="mb-6 text-yellow-400" size={32} />
              <h3 className="text-2xl font-bold mb-3">Tezkor Avtorizatsiya</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Mijozni kutishga majbur qilmang. SMS yoki ijtimoiy tarmoqlar orqali 5 soniyada ulanish.
              </p>
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 right-[-30%] w-64 h-64 bg-violet-500 blur-[80px] rounded-full opacity-40 animate-pulse" />
          </motion.div>

          {/* Card 3: Contact Collection */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-violet-600 text-white rounded-[3rem] p-10 border border-violet-500 flex flex-col justify-between min-h-[340px] relative overflow-hidden"
          >
            {/* Decor */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                <Smartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Real Kontaktlar Bazasi</h3>
              <p className="text-violet-100 text-sm leading-relaxed font-medium">
                Har bir ulanish — bu sizning bazangizga yangi qonuniy telefon raqam. Endi reklamangiz aniq nishonga tegadi.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 4. HOW IT WORKS (iPhone 17 Pro Max Mockup)
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-violet-600 font-bold tracking-widest uppercase text-sm mb-2 block">Jarayon</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">Mijoz qanday qilib <br className="hidden md:block" /> bazaga tushadi?</h2>
          <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto">Biz Wi-Fi ulash bilan shug‘ullanmaymiz. Biz mavjud tarmog‘ingizga maxsus dasturiy ta'minot o‘rnatamiz.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Steps */}
          <div className="w-full lg:w-1/2 space-y-8">
            {[
              {
                step: "01",
                title: "Wi-Fi ga ulanish",
                desc: "Mijoz muassasangizdagi bepul Wi-Fi tarmog'ini tanlaydi. Parol so'ralmaydi, ochiq tarmoq bo'ladi.",
                icon: <Cast className="w-6 h-6" />
              },
              {
                step: "02",
                title: "Avtorizatsiya sahifasi",
                desc: "Telefonda avtomatik ravishda brending qilingan 'Xush kelibsiz' sahifasi ochiladi (o'ng tomondagi kabi).",
                icon: <Smartphone className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Kontakt qoldirish",
                desc: "Mijoz telefon raqamini kiritadi va SMS kod orqali internetga ulanadi. Siz esa real mijoz bazasiga ega bo'lasiz.",
                icon: <CheckCircle2 className="w-6 h-6" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6 relative group"
              >
                {/* Connector Line */}
                {i !== 2 && (
                  <div className="absolute left-[28px] top-16 bottom-[-32px] w-0.5 bg-slate-200 group-hover:bg-violet-200 transition-colors" />
                )}

                <div className="relative z-10 w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-violet-600 shadow-sm group-hover:bg-violet-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: iPhone 17 Pro Max Mockup (Pure CSS) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative mx-auto"
            >
              {/* iPhone 17 Body Frame */}
              <div className="relative border-gray-900 bg-gray-900 border-[12px] rounded-[3.5rem] h-[650px] w-[320px] shadow-2xl shadow-violet-900/30 overflow-hidden ring-4 ring-slate-200/50">

                {/* Side Buttons (Volume/Power) */}
                <div className="absolute -left-[16px] top-28 h-12 w-[4px] bg-gray-800 rounded-l-md"></div>
                <div className="absolute -left-[16px] top-44 h-16 w-[4px] bg-gray-800 rounded-l-md"></div>
                <div className="absolute -right-[16px] top-36 h-24 w-[4px] bg-gray-800 rounded-r-md"></div>

                {/* Screen Area */}
                <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative flex flex-col">

                  {/* Dynamic Island (The Pill) */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-black/50 blur-xl absolute -z-10" />
                  </div>

                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-8 pt-4 pb-2 text-slate-900 text-[12px] font-bold z-10">
                    <span className="pl-2">9:41</span>
                    <div className="flex gap-1.5 pr-2">
                      <Cast size={14} />
                      <div className="w-5 h-3 bg-slate-900 rounded-[3px] relative overflow-hidden">
                        <div className="bg-white w-[1px] h-full absolute right-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="flex-1 flex flex-col items-center pt-8 px-6 bg-gradient-to-b from-slate-50 to-white">

                    {/* Lutsente Logo on Screen */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mb-8 flex flex-col items-center"
                    >
                      <div className="w-20 h-20 bg-violet-600 rounded-[2rem] flex items-center justify-center text-white mb-4 shadow-lg shadow-violet-200">
                        <Cast size={40} strokeWidth={2.5} />
                      </div>
                      <span className="text-2xl font-black text-slate-900 tracking-tighter">LUTSENTE</span>
                    </motion.div>

                    <div className="w-full bg-white rounded-3xl p-6 shadow-xl shadow-slate-100 border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Xush kelibsiz!</h3>
                      <p className="text-center text-slate-400 text-xs mb-6 px-2 font-medium">
                        Bepul Wi-Fi tarmog'iga ulanish uchun avtorizatsiyadan o'ting
                      </p>

                      {/* Toggle Tabs */}
                      <div className="bg-slate-100 p-1 rounded-xl flex w-full mb-5">
                        <div className="w-1/2 bg-white text-slate-900 shadow-sm rounded-lg py-2.5 text-xs font-extrabold text-center cursor-pointer transition-all">
                          Telefon raqam
                        </div>
                        <div className="w-1/2 text-slate-400 py-2.5 text-xs font-bold text-center cursor-pointer hover:text-slate-600 transition-all">
                          Ijtimoiy tarmoq
                        </div>
                      </div>

                      {/* Phone Input */}
                      <div className="w-full space-y-4 mb-6">
                        <div className="relative group">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-slate-200 pr-2">
                            {/* Uzbekistan Flag */}
                            <div className="w-6 h-4 rounded-[3px] overflow-hidden border border-slate-100 relative shadow-sm">
                              <div className="absolute top-0 w-full h-1/3 bg-[#0099B5]" />
                              <div className="absolute top-1/3 w-full h-1/3 bg-white flex items-center justify-center">
                                <div className="w-full h-[1px] bg-[#CE1126] opacity-30"></div>
                              </div>
                              <div className="absolute bottom-0 w-full h-1/3 bg-[#1EB53A]" />
                            </div>
                            <span className="text-xs font-bold text-slate-700">+998</span>
                          </div>
                          <input
                            type="text"
                            disabled
                            placeholder="90 123 45 67"
                            className="w-full bg-slate-50 border border-slate-200 group-hover:border-violet-300 transition-colors rounded-xl py-3.5 pl-28 pr-4 text-sm font-bold text-slate-900 outline-none"
                          />
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-violet-600 text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-violet-200 active:scale-95 transition-transform flex items-center justify-center gap-2">
                        <MessageSquare size={16} /> SMS kodini olish
                      </button>
                    </div>

                    <p className="text-[10px] text-center text-slate-300 mt-auto mb-6 max-w-[200px] leading-tight font-medium">
                      Lutsente tomonidan himoyalangan
                    </p>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 5. PRICING (Updated with anchor tag for scroll)
const Pricing = () => {
  const plans = [
    {
      name: "Start",
      price: "450 000",
      users: "2000",
      features: [
        "Restoran brendi va ranglari",
        "SMS orqali avtorizatsiya",
        "Foydalanuvchilar statistikasi",
        "Kunlik/Oylik trafik cheklovi"
      ],
      unavailable: [
        "Qayta kelganlar analitikasi",
        "Video/Banner reklama",
        "Email/SMS xabarnomalar",
        "So'rovnomalar"
      ]
    },
    {
      name: "PRO",
      price: "700 000",
      users: "4000",
      popular: true,
      features: [
        "Restoran brendi va ranglari",
        "SMS orqali avtorizatsiya",
        "Qayta kelganlar analitikasi",
        "Video/Banner reklama",
        "Email/SMS xabarnomalar",
        "Avtomatik xabarlar",
        "So'rovnomalar",
        "Batafsil hisobot va analitika"
      ],
      unavailable: [
        "Bir nechta filiallar boshqaruvi",
        "Shaxsiy menejer"
      ]
    },
    {
      name: "Ultra",
      price: "1 200 000",
      users: "6000+",
      features: [
        "Barcha PRO funksiyalar",
        "Bir nechta filiallar boshqaruvi",
        "Kengaytirilgan avtomatlashtirish",
        "Personal menejer",
        "To'liq API integratsiya",
        "Prioritetli qo'llab-quvvatlash"
      ],
      unavailable: []
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Tariflar</h2>
          <p className="text-slate-500 text-lg font-medium">Yashirin to'lovlarsiz. Biznesingiz hajmiga mos tarifni tanlang.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 md:p-10 rounded-[3rem] border transition-all duration-300 flex flex-col 
                ${plan.popular
                  ? 'bg-slate-900 text-white shadow-2xl shadow-violet-900/30 z-10 lg:scale-105 border-slate-900 ring-4 ring-violet-500/20'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-violet-200 hover:shadow-xl'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Eng ommabop
                </div>
              )}

              <div className="mb-8 text-center border-b border-dashed border-opacity-20 pb-8 border-current">
                <h3 className={`text-lg font-bold mb-2 uppercase tracking-widest ${plan.popular ? 'text-violet-400' : 'text-slate-500'}`}>{plan.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter">{plan.price}</span>
                  <div className="flex flex-col items-start leading-none ml-1 opacity-60">
                    <span className="text-xs font-bold">SO'M</span>
                    <span className="text-xs font-bold">OYIGA</span>
                  </div>
                </div>
                <div className={`inline-block px-4 py-2 rounded-xl text-sm font-bold ${plan.popular ? 'bg-white/10' : 'bg-slate-100 text-slate-700'}`}>
                  <Users size={16} className="inline mr-2 -mt-1" /> {plan.users} ta aktiv mijoz
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm font-semibold">
                    <div className={`mt-0.5 p-0.5 rounded-full flex-shrink-0 ${plan.popular ? 'bg-violet-500 text-white' : 'bg-violet-100 text-violet-600'}`}><CheckCircle2 size={14} /></div>
                    <span className="leading-snug opacity-90">{f}</span>
                  </li>
                ))}
                {plan.unavailable.map(f => (
                  <li key={f} className={`flex items-start gap-3 text-sm font-semibold ${plan.popular ? 'opacity-30' : 'text-slate-300'}`}>
                    <div className="mt-0.5 p-0.5 rounded-full bg-slate-100 text-slate-400 flex-shrink-0 opacity-50"><X size={14} /></div>
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-lg block text-center ${plan.popular ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-900/40' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}`}
              >
                Tanlash
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. CONTACT FORM (Responsive Fixed)
// 6. CONTACT FORM (Bot integratsiyasi bilan)
// 6. CONTACT FORM (Telegram linki bilan)
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: ""
  });

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    const message = `
🚀 <b>YANGI ARIZA: LUTSENTE</b>

👤 <b>Ism:</b> ${formData.name.toUpperCase()}
📞 <b>Tel:</b> ${formData.phone}
🏢 <b>Muassasa:</b> ${formData.business.toUpperCase()}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", business: "" });
      } else {
        alert("Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
      }
    } catch (error) {
      console.error("Xato:", error);
      alert("Internet aloqasini tekshiring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-100/50 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Biznesingizni <span className="text-violet-600">o'stirishga</span> tayyormisiz?
            </h2>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={sendToTelegram}
                className="space-y-6 relative z-10 max-w-2xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-xs font-bold uppercase text-slate-400 ml-4 mb-2 block tracking-wider">Ismingiz</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-5 bg-white rounded-2xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-violet-600 outline-none transition font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm"
                      placeholder="Ali Valiyev"
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs font-bold uppercase text-slate-400 ml-4 mb-2 block tracking-wider">Telefon raqamingiz</label>
                    <input
                      required
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-5 bg-white rounded-2xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-violet-600 outline-none transition font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="text-xs font-bold uppercase text-slate-400 ml-4 mb-2 block tracking-wider">Muassasa nomi</label>
                  <input
                    required
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full p-5 bg-white rounded-2xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-violet-600 outline-none transition font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm"
                    placeholder="Restoran, Kafe nomi"
                  />
                </div>

                <button
                  disabled={loading}
                  className={`w-full py-6 text-white rounded-2xl font-black text-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${loading ? 'bg-slate-400' : 'bg-slate-900 hover:bg-violet-600 shadow-violet-200'}`}
                >
                  {loading ? "YUBORILMOQDA..." : "ARIZA QOLDIRISH"}
                </button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 relative z-10"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">RAHMAT!</h3>
                <p className="text-slate-500 font-medium mb-8">Arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-violet-600 transition-colors"
                >
                  Qaytish
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative flex py-8 items-center max-w-2xl mx-auto">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Yoki</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Kontakt tugmalari (Phone & Telegram) */}
          <div className="max-w-2xl mx-auto space-y-4">
            <a
              href="tel:+998956677577"
              className="w-full py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:border-violet-600 hover:text-violet-600 transition-all group shadow-sm"
            >
              <Phone size={20} className="text-slate-400 group-hover:text-violet-600" />
              <span>Qo'ng'iroq qilish: <b className="ml-1">+998 95 667 75 77</b></span>
            </a>

            <a
              href="https://t.me/e_mythe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 bg-[#0088cc] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#0077b5] transition-all shadow-lg shadow-sky-200 group"
            >
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Telegram orqali yozish</span>
            </a>
          </div>

          <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-8">
            * Ma'lumotlaringiz xavfsizligi kafolatlanadi
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-white text-center border-t border-slate-100">
    <div className="flex flex-col items-center justify-center gap-6 mb-8">
      {/* Brand */}
      <div className="flex items-center gap-2 opacity-80">
        <div className="w-8 h-8 bg-violet-600 rounded-xl flex items-center justify-center text-white">
          <Cast size={16} strokeWidth={2.5} />
        </div>
        <span className="text-2xl font-black text-slate-900 tracking-tight">LUTSENTE</span>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
          <Send size={18} className="-ml-0.5 mt-0.5" /> {/* Telegram */}
        </a>
        <a href="https://www.instagram.com/lutsente/" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-pink-600 hover:text-white transition-all duration-300">
          <Instagram size={18} />
        </a>
        <a href="https://www.linkedin.com/company/lutsente/" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-700 hover:text-white transition-all duration-300">
          <Linkedin size={18} />
        </a>
      </div>

      {/* Phone */}
      <a href="tel:+998956677577" className="text-xl font-bold text-slate-600 hover:text-violet-600 transition">
        +998 95 667 75 77
      </a>
    </div>
    <p className="text-slate-400 text-sm font-medium">© 2025. Barcha huquqlar himoyalangan.</p>
  </footer>
);

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-violet-100 selection:text-violet-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}