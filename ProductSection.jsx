'use client';

import { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye, Check } from 'lucide-react';

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState('bestsellers');
  const [wishlist, setWishlist] = useState([]);
  const [addedItems, setAddedItems] = useState({});

  // قائمة المنتجات للتجربة - استبدلها بمصدر بيانات حقيقي لاحقًا
  const products = [
    {
      id: 1,
      title: 'ثريا كريستال مستطيلة فاخرة 95×33 سم',
      category: 'ثريات كريستال',
      price: 713.0,
      oldPrice: 854.0,
      discount: '17%',
      rating: 5.0,
      reviewsCount: 14,
      image:
        'https://images.unsplash.com/photo-1543198181-e6193202a9ae?auto=format&fit=crop&w=600&q=80',
      hasOptions: false,
      isNew: true,
    },
    {
      id: 2,
      title: 'ثريا ليد مودرن بتصميم حلقي ذهبي',
      category: 'ثريات مودرن',
      price: 634.8,
      oldPrice: 699.0,
      discount: '9%',
      rating: 4.9,
      reviewsCount: 8,
      image:
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
      hasOptions: true,
      isNew: false,
    },
    {
      id: 3,
      title: 'ثريا مودرن فضية أنيقة مقاس 60 سم',
      category: 'ثريات مودرن',
      price: 339.24,
      oldPrice: 592.8,
      discount: '43%',
      rating: 5.0,
      reviewsCount: 22,
      image:
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80',
      hasOptions: true,
      isNew: false,
    },
    {
      id: 4,
      title: 'ابليك جداري خارجي 8 عيون إضاءة دافئة',
      category: 'إنارة خارجية',
      price: 27.0,
      oldPrice: 49.0,
      discount: '45%',
      rating: 4.8,
      reviewsCount: 31,
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd4e?auto=format&fit=crop&w=600&q=80',
      hasOptions: false,
      isNew: true,
    },
  ];

  const tabs = [
    { id: 'bestsellers', label: 'الأكثر مبيعاً' },
    { id: 'new', label: 'وصل حديثاً' },
    { id: 'discounts', label: 'أعلى الخصومات' },
  ];

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const handleAddToCart = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <section dir="rtl" lang="ar" className="w-full bg-stone-950 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* العناوين والفلترة السريعة */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-800 pb-4 mb-8 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-50">أحدث المنتجات والعروض</h2>
            <p className="text-xs text-stone-400 mt-1">
              اختر من بين تشكيلة واسعة من الإنارات العصرية بأسعار الجملة
            </p>
          </div>

          {/* تبويبات الفرز */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-stone-900 shadow-md'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => {
            const isLiked = wishlist.includes(product.id);
            const isAdded = addedItems[product.id];

            return (
              <div
                key={product.id}
                className="bg-stone-900 border border-stone-800 hover:border-amber-500/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* الصورة والشارات */}
                <div className="relative aspect-square overflow-hidden bg-stone-800">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
                    {product.discount && (
                      <span className="bg-red-500 text-white text-xs font-extrabold px-2 py-0.5 rounded-md shadow">
                        وفر {product.discount}
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-amber-500 text-stone-900 text-xs font-extrabold px-2 py-0.5 rounded-md shadow">
                        جديد
                      </span>
                    )}
                  </div>

                  <div className="absolute top-2 left-2 flex flex-col gap-1.5 z-10">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="إضافة للمفضلة"
                      className={`p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
                        isLiked
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-stone-950/60 text-stone-300 hover:bg-stone-950/90 hover:text-red-400'
                      }`}
                    >
                      <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                    </button>
                    <button
                      aria-label="عرض سريع"
                      className="p-2 rounded-full bg-stone-950/60 backdrop-blur-md text-stone-300 hover:bg-stone-950/90 hover:text-amber-400 transition-all shadow-sm opacity-0 group-hover:opacity-100"
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>

                {/* تفاصيل المنتج */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-1.5">
                      <div className="flex text-amber-400">
                        <Star size={12} fill="currentColor" />
                      </div>
                      <span className="text-xs font-bold text-stone-300">{product.rating}</span>
                      <span className="text-xs text-stone-500">({product.reviewsCount})</span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-stone-200 line-clamp-2 leading-relaxed mb-3 hover:text-amber-400 transition-colors">
                      <a href="#">{product.title}</a>
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-base sm:text-lg font-black text-amber-400">
                        {product.price.toFixed(2)} <span className="text-xs font-normal">ر.س</span>
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-stone-500 line-through">
                          {product.oldPrice.toFixed(2)} ر.س
                        </span>
                      )}
                    </div>

                    {product.hasOptions ? (
                      <button className="w-full bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1">
                        خيارات متعددة
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        disabled={isAdded}
                        className={`w-full text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm ${
                          isAdded ? 'bg-green-600 text-white' : 'bg-amber-500 hover:bg-amber-400 text-stone-900'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check size={16} /> تمت الإضافة
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={16} /> أضف للسلة
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
