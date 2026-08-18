'use client';

import { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Award,
  Truck,
  ShieldCheck,
  RefreshCw,
  LampCeiling,
  Gem,
  LampWallUp,
  Home,
  Plug,
  Sun,
} from 'lucide-react';

export default function HeroSection() {
  // بيانات البانرات المتحركة
  const slides = [
    {
      id: 1,
      title: 'عالم الثريات المودرن',
      subtitle: 'خصومات تصل إلى 40% على أرقى تشكيلات الإنارة الفاخرة',
      buttonText: 'تسوق الآن',
      bgGradient: 'from-amber-900/90 to-black/80',
      imageUrl:
        'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'حلول الإنارة الذكية والليد',
      subtitle: 'وفّر حتى 60% من استهلاك الكهرباء بتصاميم عصرية',
      buttonText: 'اكتشف المزيد',
      bgGradient: 'from-stone-900/90 to-amber-950/80',
      imageUrl:
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  // شبكة التصنيفات السريعة - أيقونات lucide بدل الإيموجي لثبات الهوية البصرية
  const quickCategories = [
    { name: 'ثريات مودرن', icon: LampCeiling, count: '120+ منتج' },
    { name: 'ثريات كريستال', icon: Gem, count: '85+ منتج' },
    { name: 'إنارة جدارية', icon: LampWallUp, count: '200+ منتج' },
    { name: 'إنارة خارجية', icon: Home, count: '90+ منتج' },
    { name: 'أفياش ومفاتيح', icon: Plug, count: '150+ منتج' },
    { name: 'الطاقة الشمسية', icon: Sun, count: '45+ منتج' },
  ];

  const trustBadges = [
    { icon: Truck, title: 'شحن سريع', subtitle: 'توصيل آمن لجميع المناطق' },
    { icon: ShieldCheck, title: 'ضمان سنتين', subtitle: 'على كافة الأجهزة والإنارات' },
    { icon: Award, title: 'جودة أصلية', subtitle: 'منتجات مطابقة للمواصفات' },
    { icon: RefreshCw, title: 'استبدال واسترجاع', subtitle: 'سياسة مرنة خلال 14 يوماً' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // التبديل التلقائي للبانرات
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section dir="rtl" lang="ar" className="w-full bg-stone-950 py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* البانر الرئيسي Slider */}
        <div className="relative w-full h-80 sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl mb-8 group">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
              <div
                className={`absolute inset-0 bg-gradient-to-l ${slide.bgGradient} flex flex-col justify-center px-8 md:px-16 text-white`}
              >
                <span className="bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full w-max mb-3 shadow">
                  عرض حصري
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 leading-tight text-stone-50">
                  {slide.title}
                </h1>
                <p className="text-stone-300 text-sm sm:text-lg mb-6 max-w-lg">{slide.subtitle}</p>
                <div>
                  <button className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-7 py-3 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* أزرار التنقل */}
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-stone-950/50 hover:bg-stone-950/80 text-stone-100 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
            aria-label="البانر السابق"
          >
            <ChevronRight size={22} />
          </button>
          <button
            onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-stone-950/50 hover:bg-stone-950/80 text-stone-100 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
            aria-label="البانر التالي"
          >
            <ChevronLeft size={22} />
          </button>

          {/* مؤشرات السلايدر */}
          <div className="absolute bottom-5 right-1/2 translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`عرض الشريحة ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide ? 'w-6 bg-amber-400' : 'w-1.5 bg-stone-50/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* مميزات المتجر السريعة (Trust Badges) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 bg-stone-900 p-4 sm:p-6 rounded-xl border border-stone-800">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-800 text-amber-400 flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-100">{badge.title}</h4>
                  <p className="text-xs text-stone-400">{badge.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* شبكة التصنيفات السريعة (Quick Categories) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-50">تصفح حسب القسم</h2>
            <a href="#" className="text-xs font-bold text-amber-400 hover:text-amber-300">
              عرض الكل
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {quickCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <a
                  key={cat.name}
                  href="#"
                  className="bg-stone-900 p-4 rounded-xl border border-stone-800 hover:border-amber-500 hover:shadow-lg transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-400 mb-2 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-stone-200 group-hover:text-amber-400 transition-colors">
                    {cat.name}
                  </span>
                  <span className="text-xs text-stone-500 mt-1">{cat.count}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
