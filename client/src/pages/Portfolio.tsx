import { 
  Code2, Smartphone, Megaphone, ArrowUpLeft, MessageCircle, 
  Sparkles, CheckCircle2, Globe, Server, Layers, Send 
} from "lucide-react";

const PROJECTS = [
  {
    id: "almoallim",
    title: "منصة المعلم التعليمية",
    category: "SaaS / نظام تعليمي",
    description: "منصة سحابية متكاملة للمدرسين والطلاب لإدارة المجموعات، الحضور، الحصص، والملازم مع لوحة تحكم مجانية للمعلمين.",
    tags: ["React", "Supabase", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "tawajuh",
    title: "متجر توهّج للإنارة الفاخرة",
    category: "إي كوميرس / متجر إلكتروني",
    description: "متجر إنارة معمارية فاخر مدمج بـ Supabase، يتضمن مقاطع ريلز حية، تصفية متطورة للأقسام، ونظام تقسيط تمارا وتابي.",
    tags: ["React", "Supabase", "Wouter", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=600&auto=format&fit=crop",
    link: "https://tawajuh-lighting-store.vercel.app"
  },
  {
    id: "aldoktor",
    title: "الدكتور لإعداد الرسائل العلمية",
    category: "منصة خدمات أكاديمية",
    description: "منصة متخصصة لتنسيق وإعداد الرسائل والأبحاث العلمية الموجهة للباحثين في مصر والخليج العربي.",
    tags: ["Full-Stack", "Web Development", "UI/UX"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "raheem-express",
    title: "رحيم لخدمات التوصيل",
    category: "تطبيق لوجستي / توصيل",
    description: "منصة وتطبيق لتنظيم عمليات التوصيل والدعم اللوجستي المحلي للشركات والمتاجر بكفاءة عالية.",
    tags: ["Flutter", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=600&auto=format&fit=crop",
    link: "#"
  }
];

const SERVICES = [
  {
    icon: Code2,
    title: "تطوير مواقع و منصات SaaS",
    description: "بناء منصات الويب وتطبيقات السحاب باستخدام React, Node.js, Express, و Supabase بآداء فائق السرعة."
  },
  {
    icon: Smartphone,
    title: "تطبيقات الموبايل",
    description: "تطوير تطبيقات هاتف ذكية متعددة المنصات (Android & iOS) باستخدام Flutter وتكامل سلس مع قواعد البيانات."
  },
  {
    icon: Megaphone,
    title: "التصميم والتسويق الرقمي",
    description: "تصميم واجهات المستخدم الفاخرة UI/UX، وإدارة الحملات الإعلانية والهويات البصرية الكاملة للمتاجر."
  }
];

export default function Portfolio() {
  const whatsappUrl = "https://wa.me/201115413154?text=" + encodeURIComponent("السلام عليكم، اطلعت على معرض أعمالك وأود الاستفسار عن تنفيذ مشروع جديد.");

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#c5a059] selection:text-black" dir="rtl">
      {/* 1. الهيدر العلوي */}
      <header className="sticky top-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-neutral-800/80 px-4 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c5a059] text-black font-black text-lg flex items-center justify-center shadow-lg">
              ف
            </div>
            <div>
              <h1 className="font-extrabold text-sm text-white leading-tight">فرج اللول (أبو رحيم)</h1>
              <p className="text-[10px] text-[#c5a059] font-bold tracking-wider">FULL-STACK DEVELOPER</p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] text-black font-extrabold text-xs px-4 py-2 rounded-xl hover:opacity-90 transition shadow-md active:scale-95"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">تواصل واتساب</span>
          </a>
        </div>
      </header>

      {/* 2. قسم التعريف الرئيسي (Hero) */}
      <section className="py-12 sm:py-20 px-4 max-w-6xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold">
          <Sparkles size={14} />
          <span>برمجة تطبيقات • منصات SaaS • متاجر إلكترونية</span>
        </div>

        <h2 className="text-2xl sm:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
          أحول الأفكار والخدمات إلى <span className="text-[#c5a059]">منصات رقمية متكاملة</span> وتجارب حية
        </h2>

        <p className="text-xs sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed font-medium">
          مطور برمجيات كامل ومصمم متاجر وتطبيقات بخبرة عميقة في تسليم حلول برمجية سريعة، آمنة، ومصممة لخدمة بيئة الأعمال العربية.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c5a059] text-black font-black text-xs sm:text-sm px-6 py-3 rounded-xl hover:bg-[#b38f48] transition shadow-lg active:scale-95"
          >
            <Send size={16} />
            <span>ابدأ مشروعك الآن</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl hover:text-white hover:border-neutral-700 transition"
          >
            <span>استعرض الأعمال</span>
          </a>
        </div>
      </section>

      {/* 3. شريط الخبرات التقنية */}
      <section className="py-4 bg-[#141414] border-y border-neutral-800/80 mb-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-neutral-400">
          <span className="flex items-center gap-2"><Globe size={16} className="text-[#c5a059]" /> React & Node.js</span>
          <span className="flex items-center gap-2"><Server size={16} className="text-[#c5a059]" /> Supabase & MongoDB</span>
          <span className="flex items-center gap-2"><Smartphone size={16} className="text-[#c5a059]" /> Flutter Apps</span>
          <span className="flex items-center gap-2"><Layers size={16} className="text-[#c5a059]" /> Full-stack SaaS</span>
        </div>
      </section>

      {/* 4. قسم معرض الأعمال (Projects) */}
      <section id="projects" className="py-10 px-4 max-w-6xl mx-auto space-y-8">
        <div className="text-right space-y-1">
          <span className="text-xs font-extrabold text-[#c5a059]">سجل الإنجازات</span>
          <h3 className="text-xl sm:text-3xl font-black text-white">مشاريع تم بناؤها وتطويرها</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#141414] border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#c5a059]/60 transition duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold text-[#c5a059] border border-[#c5a059]/30">
                    {project.category}
                  </div>
                </div>

                <div className="p-5 space-y-2.5 text-right">
                  <h4 className="text-lg font-black text-white">{project.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 justify-start">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold bg-neutral-900 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#c5a059] hover:underline"
                  >
                    <span>معاينة التطبيق المباشر</span>
                    <ArrowUpLeft size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. قسم الخدمات المقدمة */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-8 border-t border-neutral-800/80">
        <div className="text-center space-y-1">
          <span className="text-xs font-extrabold text-[#c5a059]">مجالات الاختصاص</span>
          <h3 className="text-xl sm:text-3xl font-black text-white">كيف يمكنني مساعدتك في تنمية عملك؟</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 text-right space-y-3 hover:border-neutral-700 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                  <Icon size={24} />
                </div>
                <h4 className="text-base font-black text-white">{service.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. بنر التواصل والاتفاق */}
      <section className="my-12 px-4 max-w-6xl mx-auto">
        <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 sm:p-10 text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-3xl font-black text-white">هل لديك فكرة مشروع جاهزة للتنفيذ؟</h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
              تواصل معي مباشرة لنناقش التفاصيل الفنية ونبدأ في تحويل فكرتك إلى تطبيق أو متجر متكامل بأعلى جودة.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c5a059] text-black font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl hover:bg-[#b38f48] transition shadow-lg active:scale-95"
          >
            <MessageCircle size={18} />
            <span>اطلب استشارة مجانية عبر واتساب</span>
          </a>
        </div>
      </section>

      {/* 7. الفوتر */}
      <footer className="py-6 px-4 border-t border-neutral-800/80 text-center text-xs text-neutral-500 font-bold">
        <p>© 2026 جميع الحقوق محفوظة — فرج اللول (أبو رحيم)</p>
      </footer>
    </main>
  );
}

