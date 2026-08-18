'use client';

import { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export default function CartAndFooter({ isCartOpen = true, onCloseCart = () => {} }) {
  // منتجات السلة للتجربة
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'ثريا كريستال مستطيلة فاخرة 95×33 سم',
      price: 713.0,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1543198181-e6193202a9ae?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      title: 'ابليك جداري خارجي 8 عيون إضاءة دافئة',
      price: 27.0,
      quantity: 2,
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd4e?auto=format&fit=crop&w=300&q=80',
    },
  ]);

  const freeShippingThreshold = 1000;

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div dir="rtl" lang="ar" className="font-sans">
      {/* 1. درج السلة المنزلق */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* الخلفية المظلمة */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onCloseCart} />

          <div className="fixed inset-y-0 left-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-stone-900 shadow-2xl flex flex-col justify-between">
              {/* ترويسة السلة */}
              <div className="p-4 bg-stone-950 text-white flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={20} className="text-amber-400" />
                  <span className="font-bold text-base">سلة المشتريات</span>
                  <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded-full font-bold">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)} منتجات
                  </span>
                </div>
                <button
                  onClick={onCloseCart}
                  aria-label="إغلاق السلة"
                  className="p-1 hover:bg-stone-800 rounded-full transition-colors text-stone-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* مؤشر الشحن المجاني */}
              <div className="bg-stone-900 p-3 border-b border-stone-800">
                <div className="text-xs font-bold text-stone-300 mb-1 flex justify-between">
                  {remainingForFreeShipping > 0 ? (
                    <span>
                      أضف <strong className="text-amber-400">{remainingForFreeShipping.toFixed(2)} ر.س</strong> أخرى
                      للحصول على شحن مجاني!
                    </span>
                  ) : (
                    <span className="text-green-400 flex items-center gap-1">
                      <CheckCircle2 size={14} /> مبروك! لقد حصلت على شحن مجاني
                    </span>
                  )}
                </div>
                <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full transition-all duration-500"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* قائمة المنتجات بالسلة */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-stone-500 space-y-3">
                    <ShoppingBag size={48} strokeWidth={1} />
                    <p className="text-sm">سلتك فارغة حالياً</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 bg-stone-800 p-3 rounded-xl border border-stone-700 relative group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg bg-stone-900 shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-stone-200 line-clamp-1">{item.title}</h4>
                          <span className="text-xs font-black text-amber-400 mt-1 block">
                            {item.price.toFixed(2)} ر.س
                          </span>
                        </div>

                        {/* تحكم بالكمية */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center bg-stone-900 border border-stone-700 rounded-lg text-xs">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              aria-label="إنقاص الكمية"
                              className="p-1 hover:bg-stone-800 text-stone-300"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-2.5 font-bold text-stone-100">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              aria-label="زيادة الكمية"
                              className="p-1 hover:bg-stone-800 text-stone-300"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label="حذف المنتج"
                            className="text-stone-500 hover:text-red-400 transition-colors p-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* المجموع والتنفيذ */}
              {cartItems.length > 0 && (
                <div className="p-4 bg-stone-950 border-t border-stone-800 space-y-3">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-stone-400">
                      <span>المجموع الفرعي:</span>
                      <span className="font-bold text-stone-200">{subtotal.toFixed(2)} ر.س</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>ضريبة القيمة المضافة (15%):</span>
                      <span>مشمولة</span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-stone-50 pt-2 border-t border-stone-800">
                      <span>الإجمالي الكلي:</span>
                      <span className="text-amber-400 text-base">{subtotal.toFixed(2)} ر.س</span>
                    </div>
                  </div>

                  <button className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                    <span>متابعة الشراء والتسليم</span>
                    <ArrowLeft size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. الفوتر الاحترافي */}
      <footer className="bg-stone-950 text-stone-300 pt-12 pb-6 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* عن المتجر والتراخيص */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-500 text-stone-900 rounded-lg flex items-center justify-center font-bold text-lg">
                  ن
                </div>
                <span className="font-black text-xl text-stone-50">نور الشرق</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                وجهتك الأولى للإنارة الفاخرة والديكور الحديث بأسعار الجملة. نوفر أرقى تشكيلات الثريات والإضاءات
                الداخلية والخارجية وضمان يمتد لسنتين.
              </p>
              <div className="flex items-center gap-2 text-xs text-amber-400 bg-stone-900 p-2.5 rounded-lg border border-stone-800">
                <ShieldCheck size={18} />
                <span>موثق لدى المركز السعودي للأعمال</span>
              </div>
            </div>

            {/* روابط سريعة */}
            <div>
              <h4 className="text-sm font-bold text-stone-50 mb-4 border-r-2 border-amber-500 pr-2">روابط مهمة</h4>
              <ul className="space-y-2.5 text-xs text-stone-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">من نحن</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">سياسة الاستبدال والاسترجاع</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">الشروط والأحكام</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">سياسة الخصوصية</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">الأسئلة الشائعة</a>
                </li>
              </ul>
            </div>

            {/* تصنيفات المتجر */}
            <div>
              <h4 className="text-sm font-bold text-stone-50 mb-4 border-r-2 border-amber-500 pr-2">الأقسام الرئيسية</h4>
              <ul className="space-y-2.5 text-xs text-stone-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">ثريات مودرن</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">ثريات كريستال</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">إنارة جدارية داخلية</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">إنارة الحدائق والخارجية</a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">الأفياش والمفاتيح الذكية</a>
                </li>
              </ul>
            </div>

            {/* التواصل والدعم */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-stone-50 mb-4 border-r-2 border-amber-500 pr-2">خدمة العملاء</h4>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Phone size={14} className="text-amber-400" />
                <span dir="ltr">920000000</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Mail size={14} className="text-amber-400" />
                <span dir="ltr">support@nooralsharq.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <MapPin size={14} className="text-amber-400" />
                <span>المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* حقوق النشر وطرق الدفع */}
          <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <p>جميع الحقوق محفوظة © {new Date().getFullYear()} لـ نور الشرق للإنارة.</p>

            <div className="flex items-center gap-2 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
              <span className="text-xs text-stone-400 ml-1">وسائل الدفع:</span>
              <span className="font-bold text-amber-400">مدى</span>
              <span className="text-stone-700">|</span>
              <span className="font-bold text-blue-400">VISA</span>
              <span className="text-stone-700">|</span>
              <span className="font-bold text-stone-100">Apple Pay</span>
              <span className="text-stone-700">|</span>
              <span className="font-bold text-teal-400">تابي</span>
              <span className="text-stone-700">|</span>
              <span className="font-bold text-orange-400">تمارا</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
