import Navbar from "@/components/Navbar";
import { Check, X, BarChart3, Users, Zap, ShieldCheck, PieChart, Repeat } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 1. HERO SECTION - TZ  */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full animate-fade-in">
            Aksiya: Atigi 499 000 so'mga sayt!
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Wi-Fi — biznes o'sishi va <br />
            <span className="text-blue-600">mijozlarni qaytarish</span> vositasi
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed">
            Mijozlar kontaktlarini yig'ing, ularning xulq-atvorini tahlil qiling va takroriy sotuvlarni murakkab texnik echimlarsiz amalga oshiring[cite: 7, 15].
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-2xl shadow-blue-200">
              Bepul konsultatsiya
            </button>
            <button className="bg-white border-2 border-slate-100 text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition">
              Tariflarni ko'rish
            </button>
          </div>
        </div>
      </section>

      {/* 2. ANALYTICS SECTION - TZ [cite: 9] */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              {/* Dashboard simulation */}
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100">
                <div className="flex justify-between items-end gap-2 h-48 mb-6">
                  {[60, 40, 80, 50, 90, 70, 85].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="w-full bg-blue-500 rounded-t-lg transition-all duration-500 group-hover:bg-blue-600" />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="text-sm text-blue-600 font-bold uppercase">Qayta kelganlar</div>
                    <div className="text-2xl font-black text-slate-800">72%</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="text-sm text-green-600 font-bold uppercase">Yangi mijozlar</div>
                    <div className="text-2xl font-black text-slate-800">+124</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border md:block hidden animate-bounce-slow">
                <PieChart className="text-blue-600 w-8 h-8" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-black mb-6 leading-tight">Takroriy mijozlar analitikasi va LTV o'sishi [cite: 8, 9]</h2>
              <p className="text-lg text-slate-600 mb-8">
                Lutsente shunchaki ulanishlarni emas, balki mijozlarning real qiymatini ko'rsatadi:
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Repeat className="w-5 h-5" />, text: "Qancha mijoz qayta tashrif buyurmoqda" },
                  { icon: <BarChart3 className="w-5 h-5" />, text: "Tashriflar chastotasi va o'rtacha vaqti" },
                  { icon: <Zap className="w-5 h-5" />, text: "Eng foydali kunlar va soatlarni aniqlash" },
                  { icon: <Users className="w-5 h-5" />, text: "Yangi va doimiy mijozlar orasidagi farq" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium text-slate-700">{item.text} [cite: 9]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS - TZ [cite: 10, 11, 12, 13] */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 italic">Biznesingiz qanday rivojlanadi?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Ulanish",
                desc: "Mehmon Wi-Fi tarmog'ini tanlaydi va avtomatik tarzda sahifaga o'tadi[cite: 11]."
              },
              {
                step: "02",
                title: "Avtorizatsiya",
                desc: "Ijtimoiy tarmoqlar orqali ulanadi. Siz esa qonuniy kontakt va ma'lumot olasiz[cite: 12]."
              },
              {
                step: "03",
                title: "Qayta Sotuv",
                desc: "Tizim tahlil qiladi va siz mijozlarni aksiyalar bilan qaytarasiz[cite: 13, 15]."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 transition">
                <div className="text-6xl font-black text-slate-50 mb-6">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING TABLE - PDF  */}
      <section id="pricing" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Tarif rejalarimiz [cite: 1]</h2>
            <p className="text-slate-400">Biznesingiz hajmi uchun mos keluvchi yechimni tanlang</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* START */}
            <PricingCard
              name="Start"
              price="450 000"
              users="2000"
              features={{
                "Restoran brendi va ranglari": true,
                "Raqamli avtorizatsiya": true,
                "Foydalanuvchilar statistikasi": true,
                "Qayta kelgan mijozlar analitikasi": false,
                "Video/Banner reklamalar": false,
                "Batafsil hisobotlar": false,
                "Filiallar boshqaruvi": false,
              }}
            />
            {/* PRO */}
            <PricingCard
              name="PRO"
              price="700 000"
              users="4000"
              recommended
              features={{
                "Restoran brendi va ranglari": true,
                "Raqamli avtorizatsiya": true,
                "Foydalanuvchilar statistikasi": true,
                "Qayta kelgan mijozlar analitikasi": true,
                "Video/Banner reklamalar": true,
                "Batafsil hisobotlar": true,
                "Filiallar boshqaruvi": false,
              }}
            />
            {/* ULTRA */}
            <PricingCard
              name="Ultra"
              price="1 200 000"
              users="6000"
              features={{
                "Restoran brendi va ranglari": true,
                "Raqamli avtorizatsiya": true,
                "Foydalanuvchilar statistikasi": true,
                "Qayta kelgan mijozlar analitikasi": true,
                "Video/Banner reklamalar": true,
                "Batafsil hisobotlar": true,
                "Filiallar boshqaruvi": true,
              }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>© 2024 Lutsente. Barcha huquqlar himoyalangan.</p>
      </footer>
    </>
  );
}

// Pricing Card Component
function PricingCard({ name, price, users, features, recommended = false }: any) {
  return (
    <div className={`relative p-10 rounded-[2.5rem] border ${recommended ? "border-blue-500 bg-white/5 scale-105" : "border-white/10"}`}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">ENG MASHHUR</div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name} [cite: 2]</h3>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-black">{price}</span>
        <span className="text-slate-400">uzs / oy [cite: 2]</span>
      </div>
      <div className="mb-8 p-4 bg-white/5 rounded-2xl text-center">
        <div className="text-sm text-slate-400 italic">Aktiv foydalanuvchilar:</div>
        <div className="text-xl font-bold">{users} gacha [cite: 3]</div>
      </div>
      <ul className="space-y-4 mb-10">
        {Object.entries(features).map(([f, enabled]: any) => (
          <li key={f} className="flex items-center gap-3 text-sm">
            {enabled ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-white/20" />}
            <span className={enabled ? "text-white" : "text-white/30"}>{f} [cite: 3]</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-2xl font-bold transition ${recommended ? "bg-blue-600 hover:bg-blue-700" : "bg-white/10 hover:bg-white/20"}`}>
        Tanlash
      </button>
    </div>
  );
}