"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Wifi, BarChart3, Users, Zap, CheckCircle2,
  ArrowRight, Smartphone, X, ChevronRight, Menu,
  PieChart, Mail, MessageSquare
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
            ? "bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-lg shadow-blue-900/5 px-6 py-3"
            : "bg-transparent px-0 py-0"
            }`}>
            <div className="flex justify-between items-center">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-blue-600/30 shadow-lg group-hover:scale-105 transition-transform">
                  <Wifi size={20} strokeWidth={3} />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">LUTSENTE</span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-bold text-slate-500 uppercase tracking-wide hover:text-blue-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="hidden md:inline-flex bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
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
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl mt-4"
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
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-bold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          Wi-Fi — shunchaki internet emas
        </motion.div>

        <motion.h1
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8"
        >
          Mijozlarni qaytaruvchi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> marketing mashinasi.</span>
        </motion.h1>

        <motion.p
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-lg md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Mehmonlar kontaktlarini yig‘ing, xulq-atvorni tahlil qiling va takroriy sotuvlarni
          murakkab texnikalarsiz oshiring.
        </motion.p>

        <motion.div
          initial="hidden" animate="visible" variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-blue-600 rounded-2xl text-white font-bold text-lg shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all text-center">
            Tizimni sinab ko'rish
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto px-10 py-5 bg-white rounded-2xl text-slate-900 font-bold text-lg border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all text-center group">
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
        <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_40px_120px_-20px_rgba(30,58,138,0.15)] p-4 md:p-8 overflow-hidden">
          {/* Dashboard Header Simulation */}
          <div className="flex justify-between items-center mb-8 px-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="h-2 w-32 bg-slate-100 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Visits */}
            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-between h-48 hover:border-blue-200 transition-colors">
              <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4"><Users size={20} /></div>
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">2,540</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Oylik tashriflar</div>
              </div>
            </div>
            {/* Card 2: Return Rate */}
            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-between h-48 hover:border-green-200 transition-colors">
              <div className="h-10 w-10 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4"><PieChart size={20} /></div>
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">85%</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Qaytish ko'rsatkichi</div>
              </div>
            </div>
            {/* Card 3: Live Status */}
            <div className="bg-slate-900 p-6 rounded-[2rem] text-white relative overflow-hidden h-48 flex items-end shadow-xl">
              <div className="absolute top-0 right-0 p-6 opacity-10"><Wifi size={80} /></div>
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
              Raqamlar bilan ishlaydigan <br /><span className="text-blue-600">haqiqiy biznes instrument.</span>
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
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm mb-8 text-blue-600">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight">Qayta kelgan mijozlar <br /> va LTV o'sishi</h3>
              <ul className="space-y-4 text-slate-600 font-medium text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-blue-600" /> Yangi va eski mijozlar farqi</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-blue-600" /> Tashriflarning aniq chastotasi</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-blue-600" /> Eng daromadli kun va soatlar</li>
              </ul>
            </div>
            {/* Visual Abstract Chart */}
            <div className="absolute bottom-0 right-0 w-full md:w-[60%] h-[50%] bg-white rounded-tl-[3rem] border-t border-l border-slate-100 p-8 shadow-sm translate-y-4 md:translate-y-8 md:translate-x-8 group-hover:translate-x-4 transition-transform duration-500">
              <div className="flex items-end gap-3 h-full pb-8 justify-between px-2">
                {[35, 60, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-xl opacity-90" />
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
            <div className="absolute top-1/2 right-[-30%] w-64 h-64 bg-blue-500 blur-[80px] rounded-full opacity-40 animate-pulse" />
          </motion.div>

          {/* Card 3: Contact Collection */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-blue-600 text-white rounded-[3rem] p-10 border border-blue-500 flex flex-col justify-between min-h-[340px] relative overflow-hidden"
          >
            {/* Decor */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                <Smartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Real Kontaktlar Bazasi</h3>
              <p className="text-blue-100 text-sm leading-relaxed font-medium">
                Har bir ulanish — bu sizning bazangizga yangi qonuniy telefon raqam. Endi reklamangiz aniq nishonga tegadi.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mt-6 group cursor-pointer">
              Batafsil o'qish <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Mexanika</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">Mijoz qanday qilib <br /> bazaga tushadi?</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {[
            { step: "01", title: "Ulanish", desc: "Mehmon tarmoqni tanlaydi va muassasangiz logotipi tushirilgan maxsus sahifaga o'tadi.", icon: <Wifi /> },
            { step: "02", title: "Kontakt qoldirish", desc: "Internetga kirish uchun mijoz SMS yoki ijtimoiy tarmoq orqali o'zini tasdiqlaydi.", icon: <Smartphone /> },
            { step: "03", title: "Marketing & Qaytish", desc: "Tizim kontaktni saqlaydi. Siz esa aksiyalar yuborib, mijozni yana qaytarasiz.", icon: <MessageSquare /> }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium text-base">{item.desc}</p>

              <div className="absolute top-6 right-8 text-7xl font-black text-slate-100 opacity-50 select-none group-hover:text-blue-50 transition-colors">
                {item.step}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 5. PRICING (Strictly based on PDF)
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
        "Menyu/Instagramga yo'naltirish",
        "Batafsil hisobot va analitika"
      ],
      unavailable: [
        "Bir nechta filiallar boshqaruvi",
        "Kengaytirilgan avtomatlashtirish"
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
        "Email/SMS xabarnomalar",
        "Avtomatik xabarlar",
        "So'rovnomalar"
      ],
      unavailable: []
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Investitsiya rejalari</h2>
          <p className="text-slate-500 text-lg font-medium">Yashirin to'lovlarsiz. Biznesingiz hajbiga mos tarifni tanlang.</p>
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
                  ? 'bg-slate-900 text-white shadow-2xl shadow-blue-900/30 z-10 lg:scale-105 border-slate-900 ring-4 ring-blue-500/20'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-blue-200 hover:shadow-xl'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Eng ommabop
                </div>
              )}

              <div className="mb-8 text-center border-b border-dashed border-opacity-20 pb-8 border-current">
                <h3 className={`text-lg font-bold mb-2 uppercase tracking-widest ${plan.popular ? 'text-blue-400' : 'text-slate-500'}`}>{plan.name}</h3>
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
                    <div className={`mt-0.5 p-0.5 rounded-full flex-shrink-0 ${plan.popular ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'}`}><CheckCircle2 size={14} /></div>
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

              <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-lg ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-900/40' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}`}>
                Tarifni tanlash
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl relative overflow-hidden">
          {/* Decor blob */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Biznesingizni <span className="text-blue-600">o'stirishga</span> tayyormisiz?</h2>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
              Mutaxassislarimiz 15 daqiqa ichida biznesingizni o'rganib chiqib, qaysi tarif sizga ko'proq foyda keltirishini hisoblab berishadi.
            </p>
          </div>

          <form className="space-y-6 relative z-10 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="text-xs font-bold uppercase text-slate-400 ml-4 mb-2 block tracking-wider">Ismingiz</label>
                <input type="text" className="w-full p-5 bg-white rounded-2xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm" placeholder="Ism Familya" />
              </div>
              <div className="group">
                <label className="text-xs font-bold uppercase text-slate-400 ml-4 mb-2 block tracking-wider">Telefon raqamingiz</label>
                <input type="text" className="w-full p-5 bg-white rounded-2xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm" placeholder="+998 90 123 45 67" />
              </div>
            </div>
            <div className="group">
              <label className="text-xs font-bold uppercase text-slate-400 ml-4 mb-2 block tracking-wider">Muassasa nomi</label>
              <input type="text" className="w-full p-5 bg-white rounded-2xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition font-semibold text-slate-900 placeholder:text-slate-300 shadow-sm" placeholder="Restoran, Kafe yoki Mehmonxona nomi" />
            </div>
            <button className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1">
              Ariza qoldirish
            </button>
            <p className="text-center text-xs text-slate-400 font-medium mt-4">
              *Ma'lumotlaringiz sir saqlanadi va uchinchi shaxslarga berilmaydi.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

// 7. FOOTER
const Footer = () => (
  <footer className="py-12 bg-white text-center border-t border-slate-100">
    <div className="flex items-center justify-center gap-2 mb-4 opacity-80">
      <Wifi size={24} className="text-blue-600" />
      <span className="text-2xl font-black text-slate-900 tracking-tight">LUTSENTE</span>
    </div>
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