"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion"; // Variants import qilindi
import {
  Wifi, BarChart3, Users, Zap, CheckCircle2,
  ArrowRight, Smartphone, X, ChevronRight, Menu
} from "lucide-react";

// --- GLOBAL ANIMATION VARIANTS (Fixed Types) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// 1. NAVIGATION
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }} animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? "py-3" : "py-6"
        }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6`}>
        <div className={`rounded-full transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-900/5 px-6 py-3"
          : "bg-transparent px-0 py-0"
          }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-blue-600/30 shadow-lg">
                <Wifi size={20} strokeWidth={3} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">LUTSENTE</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500 uppercase tracking-wide">
              <a href="#features" className="hover:text-blue-600 transition-colors">Imkoniyatlar</a>
              <a href="#how-it-works" className="hover:text-blue-600 transition-colors">Jarayon</a>
              <a href="#pricing" className="hover:text-blue-600 transition-colors">Tariflar</a>
            </div>

            {/* CTA Button */}
            <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Bog'lanish
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// 2. HERO SECTION
const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 overflow-hidden max-w-[100vw]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-bold mb-8 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          Biznesingizni keyingi bosqichga olib chiqing
        </motion.div>

        <motion.h1
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
        >
          Wi‑Fi — bu shunchaki <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> biznes aktivi.</span>
        </motion.h1>

        <motion.p
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-lg md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Mijozlar kontaktlarini yig‘ing, xulq-atvorni tahlil qiling va takroriy sotuvlarni
          murakkab texnikalarsiz oshiring.
        </motion.p>

        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 rounded-2xl text-white font-bold text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all text-center">
            Bepul konsultatsiya
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white rounded-2xl text-slate-900 font-bold text-lg border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all text-center">
            Tizim haqida
          </a>
        </motion.div>
      </div>

      {/* Hero Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-16 md:mt-24 max-w-5xl mx-auto px-2"
      >
        <div className="relative bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-[0_50px_100px_-20px_rgba(59,130,246,0.1)] p-4 md:p-8 overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col justify-between h-48">
              <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4"><Users size={20} /></div>
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">2,540</div>
                <div className="text-sm font-bold text-slate-500">Oylik tashriflar</div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col justify-between h-48">
              <div className="h-10 w-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4"><BarChart3 size={20} /></div>
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">85%</div>
                <div className="text-sm font-bold text-slate-500">Qayta kelgan mijozlar</div>
              </div>
            </div>
            {/* Card 3 - Visual */}
            <div className="bg-slate-900 p-6 rounded-3xl text-white relative overflow-hidden h-48 flex items-end">
              <div className="absolute top-0 right-0 p-6 opacity-10"><Wifi size={80} /></div>
              <div>
                <div className="text-lg font-bold mb-1">Lutsente PRO</div>
                <div className="text-sm opacity-60">Status: Aktiv</div>
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
        <div className="mb-16 md:mb-20 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Ma'lumotlarga asoslangan <br /><span className="text-blue-600">qarorlar qabul qiling.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">Lutsente — bu shunchaki Wi-Fi emas. Bu sizning biznesingiz uchun to‘liq analitika markazi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {/* Card 1: Large (Span 2 cols, 2 rows on Desktop) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-[32px] p-8 md:p-10 border border-slate-100 flex flex-col justify-between relative overflow-hidden group min-h-[350px]"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">LTV va Mijozlar Qaytishi</h3>
              <p className="text-slate-500 text-lg max-w-md">Qancha mijoz qaytayotgani, tashriflar chastotasi va eng daromadli kunlarni aniq raqamlarda ko'ring.</p>
            </div>
            {/* Abstract Graphic */}
            <div className="absolute bottom-0 right-0 w-full md:w-[80%] h-[50%] bg-white rounded-t-[32px] md:rounded-tl-[32px] border-t border-l border-slate-100 p-6 shadow-sm translate-y-4 md:translate-y-8 md:translate-x-8">
              <div className="flex items-end gap-2 md:gap-4 h-full pb-4 md:pb-8 justify-between px-2">
                {[40, 70, 50, 90, 65, 85, 60].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg opacity-90" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-900 text-white rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden min-h-[300px]"
          >
            <div className="relative z-10">
              <Zap className="mb-4 text-yellow-400" size={32} />
              <h3 className="text-xl font-bold mb-2">Tezkor Avtorizatsiya</h3>
              <p className="text-slate-400 text-sm leading-relaxed">SMS yoki ijtimoiy tarmoqlar orqali 5 soniyada ulanish.</p>
            </div>
            <div className="absolute top-1/2 right-[-20%] w-40 h-40 bg-blue-500 blur-[80px] rounded-full opacity-40" />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-blue-50 rounded-[32px] p-8 border border-blue-100 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Mijozlar Bazasi</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Har bir ulanish — bu sizning bazangizga yangi qonuniy kontakt.</p>
            </div>
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mt-4">
              Batafsil <ChevronRight size={16} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 4. HOW IT WORKS
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-black mb-16 md:mb-20 uppercase tracking-widest text-slate-900">Jarayon Mexanikasi</h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            { step: "01", title: "Ulanish", desc: "Mehmon Wi-Fi tarmog'ini tanlaydi va brending qilingan sahifaga tushadi.", icon: <Wifi /> },
            { step: "02", title: "Kontakt", desc: "SMS yoki ijtimoiy tarmoq orqali avtorizatsiya. Siz real kontaktni olasiz.", icon: <Smartphone /> },
            { step: "03", title: "Marketing", desc: "Yig'ilgan baza orqali mijozni qaytarish uchun SMS yoki reklama yuborasiz.", icon: <CheckCircle2 /> }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: i * 0.2 }}
              className="relative group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">{item.desc}</p>

              <div className="absolute top-6 right-8 text-6xl font-black text-slate-100 opacity-50 select-none group-hover:text-blue-50 transition-colors">
                {item.step}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. PRICING
const Pricing = () => {
  const plans = [
    { name: "Start", price: "450 000", users: "2000", features: ["Brending sahifasi", "SMS avtorizatsiya", "Statistika"], unavailable: ["Qayta kelganlar tahlili", "Reklama bannerlari"] },
    { name: "PRO", price: "700 000", users: "4000", popular: true, features: ["Brending sahifasi", "SMS avtorizatsiya", "Qayta kelganlar tahlili", "Video/Banner reklama", "Batafsil hisobot"], unavailable: ["Filiallar boshqaruvi"] },
    { name: "Ultra", price: "1 200 000", users: "6000+", features: ["Barcha imkoniyatlar", "Filiallar boshqaruvi", "To'liq avtomatlashtirish", "Personal menejer"], unavailable: [] }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Investitsiya rejalari</h2>
          <p className="text-slate-500 text-lg">Yashirin to'lovlarsiz. Biznesingiz hajbiga mos.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-8 md:p-10 rounded-[32px] border transition-all duration-300 flex flex-col 
                ${plan.popular
                  ? 'bg-slate-900 text-white shadow-2xl shadow-blue-900/20 z-10 lg:scale-105 border-slate-900'
                  : 'bg-white text-slate-900 border-slate-200'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Tavsiya etiladi
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-2 uppercase tracking-widest ${plan.popular ? 'text-blue-400' : 'text-slate-400'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-black tracking-tight">{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.popular ? 'opacity-60' : 'text-slate-400'}`}>so'm/oy</span>
                </div>
              </div>

              <div className={`p-4 rounded-2xl mb-8 text-center text-sm font-bold ${plan.popular ? 'bg-white/10' : 'bg-slate-50 text-slate-700'}`}>
                <Users size={16} className="inline mr-2 mb-1" /> {plan.users} ta aktiv mijoz
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm font-semibold">
                    <div className={`mt-0.5 p-0.5 rounded-full flex-shrink-0 ${plan.popular ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'}`}><CheckCircle2 size={14} /></div>
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
                {plan.unavailable.map(f => (
                  <li key={f} className={`flex items-start gap-3 text-sm font-semibold ${plan.popular ? 'opacity-30' : 'text-slate-300'}`}>
                    <div className="mt-0.5 p-0.5 rounded-full bg-slate-100 text-slate-400 flex-shrink-0"><X size={14} /></div>
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Tanlash
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. CONTACT FORM
const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-slate-50 rounded-[40px] p-8 md:p-14 border border-slate-100 shadow-2xl relative overflow-hidden">
          {/* Decor blob */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-100 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Bepul konsultatsiya</h2>
            <p className="text-slate-500 font-medium">Mutaxassislarimiz 15 daqiqa ichida biznesingiz uchun mos yechimni topib berishadi.</p>
          </div>

          <form className="space-y-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400 ml-3">Ismingiz</label>
                <input type="text" className="w-full p-4 bg-white rounded-2xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition font-medium text-slate-900 placeholder:text-slate-300" placeholder="Ism Familya" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400 ml-3">Telefon</label>
                <input type="text" className="w-full p-4 bg-white rounded-2xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition font-medium text-slate-900 placeholder:text-slate-300" placeholder="+998" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400 ml-3">Kompaniya nomi</label>
              <input type="text" className="w-full p-4 bg-white rounded-2xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition font-medium text-slate-900 placeholder:text-slate-300" placeholder="Restoran nomi" />
            </div>
            <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:bg-blue-600 transition-all duration-300 mt-4">
              Ariza qoldirish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// 7. FOOTER
const Footer = () => (
  <footer className="py-12 bg-white text-center border-t border-slate-100">
    <div className="text-2xl font-black text-slate-900 mb-2 tracking-tight">LUTSENTE</div>
    <p className="text-slate-400 text-sm font-medium">© 2025. Barcha huquqlar himoyalangan.</p>
  </footer>
);

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900">
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