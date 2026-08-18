'use client';

import { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  Truck,
  ShieldCheck,
  Percent,
  ChevronDown,
  Phone,
} from 'lucide-react';

// أقسام المتجر الرئيسية - عدّل القائمة أو اربطها بمصدر بيانات لاحقًا
const categories = [
  { name: 'ثريات', href: '#' },
  { name: 'إنارة جدارية', href: '#' },
  { name: 'أفياش ومفاتيح', href: '#' },
  { name: 'إنارة خارجية', href: '#' },
  { name: 'كشافات LED', href: '#' },
  { name: 'إكسسوارات إنارة', href: '#' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div dir="rtl" lang="ar" style={{ fontFamily: "'Tajawal','Almarai',sans-serif" }}>
      {/* في Next.js استبدل هذا بـ next/font لتحميل الخطوط بشكل صحيح (SSR + أداء أفضل) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&family=Almarai:wght@400;700&display=swap');
        @keyframes lightSweep {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        .light-sweep {
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #b45309, #fcd34d, #b45309);
          background-size: 200% 100%;
          animation: lightSweep 6s linear infinite;
        }
      `}</style>

      <header className={`sticky top-0 z-50 ${scrolled ? 'shadow-2xl' : ''}`}>
        {/* خط علوي رفيع بلون نحاسي متوهج - العنصر المميز للهوية */}
        <div className="light-sweep" />

        {/* الشريط العلوي: المميزات */}
        <div className="bg-stone-950 text-stone-300 text-xs sm:text-sm border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-x-6 sm:gap-x-10 flex-wrap">
            <span className="flex items-center gap-x-1.5">
              <Percent className="w-3.5 h-3.5 text-amber-400" />
              أسعار الجملة للموزعين
            </span>
            <span className="hidden sm:flex items-center gap-x-1.5">
              <Truck className="w-3.5 h-3.5 text-amber-400" />
              شحن سريع لكل المحافظات
            </span>
            <span className="flex items-center gap-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              ضمان سنتين على جميع المنتجات
            </span>
          </div>
        </div>

        {/* الترويسة الوسطى: اللوجو + البحث + الأزرار */}
        <div className="bg-stone-900">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-x-4">
            {/* زر القائمة للجوال */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-stone-200 p-1 -ml-1"
              aria-label="فتح القائمة"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* اللوجو */}
            <a href="#" className="flex items-center gap-x-2 shrink-0">
              <span className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-stone-900 font-black text-lg">
                ن
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-stone-50 font-black text-lg sm:text-xl tracking-tight">
                  نور الشرق
                </span>
                <span className="text-amber-300 text-xs tracking-widest">LIGHTING HOUSE</span>
              </span>
            </a>

            {/* شريط البحث - ديسكتوب */}
            <div className="hidden md:flex flex-1 max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="ابحث عن ثريا، سبوت لايت، مفتاح..."
                className="w-full bg-stone-800 border border-stone-700 rounded-full py-2.5 pr-4 pl-11 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
              />
              <button
                className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center transition"
                aria-label="بحث"
              >
                <Search className="w-4 h-4 text-stone-900" />
              </button>
            </div>

            {/* الأزرار: الحساب، المفضلة، السلة */}
            <div className="flex items-center gap-x-1 sm:gap-x-2 mr-auto lg:mr-0">
              <button className="md:hidden text-stone-200 p-2 hover:text-amber-400 transition" aria-label="بحث">
                <Search className="w-5 h-5" />
              </button>
              <a href="#" className="hidden sm:flex flex-col items-center text-stone-300 hover:text-amber-400 transition px-2">
                <User className="w-5 h-5" />
                <span className="text-xs mt-0.5">حسابي</span>
              </a>
              <a href="#" className="relative flex flex-col items-center text-stone-300 hover:text-amber-400 transition px-2">
                <Heart className="w-5 h-5" />
                <span className="hidden sm:block text-xs mt-0.5">المفضلة</span>
                <span className="absolute -top-1 -left-1 bg-amber-500 text-stone-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </a>
              <a href="#" className="relative flex flex-col items-center text-stone-300 hover:text-amber-400 transition px-2">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:block text-xs mt-0.5">السلة</span>
                <span className="absolute -top-1 -left-1 bg-amber-500 text-stone-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </a>
            </div>
          </div>

          {/* شريط البحث - جوال */}
          <div className="md:hidden px-4 pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن ثريا، سبوت لايت، مفتاح..."
                className="w-full bg-stone-800 border border-stone-700 rounded-full py-2.5 pr-4 pl-11 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            </div>
          </div>
        </div>

        {/* قائمة التصنيفات - ديسكتوب */}
        <nav className="hidden lg:block bg-stone-950 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center gap-x-8">
              {categories.map((cat) => (
                <li key={cat.name} className="group relative">
                  <a
                    href={cat.href}
                    className="flex items-center gap-x-1 py-3 text-sm text-stone-300 group-hover:text-amber-400 transition-colors"
                  >
                    {cat.name}
                  </a>
                  <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-amber-400 group-hover:w-full transition-all duration-300" />
                </li>
              ))}
              <li className="mr-auto">
                <a href="#" className="flex items-center gap-x-1 py-3 text-sm font-bold text-amber-400">
                  <Percent className="w-4 h-4" />
                  عروض اليوم
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* قائمة الجوال المنسدلة */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 bg-stone-900 shadow-2xl p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="text-stone-50 font-black text-lg">نور الشرق</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-stone-300 hover:text-amber-400"
                aria-label="إغلاق القائمة"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-y-1">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a
                    href={cat.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 px-2 rounded-lg text-stone-200 hover:bg-stone-800 hover:text-amber-400 transition border-b border-stone-800"
                  >
                    {cat.name}
                    <ChevronDown className="w-4 h-4 -rotate-90 text-stone-500" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-4 flex items-center gap-x-2 justify-center bg-amber-500 text-stone-900 font-bold py-2.5 rounded-full"
            >
              <Percent className="w-4 h-4" /> عروض اليوم
            </a>
            <div className="mt-6 pt-6 border-t border-stone-800 flex items-center gap-x-2 text-stone-400 text-sm">
              <Phone className="w-4 h-4 text-amber-400" />
              <span dir="ltr">19XXX</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
