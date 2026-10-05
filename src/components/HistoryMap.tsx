import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HistoryMapProps { currentLang: Language; isRTL: boolean; }
const events: Record<Language, { year: string; title: string; body: string }[]> = {
  id: [
    { year: 'Abad ke-16', title: 'Aceh dan Kesultanan Utsmaniyah', body: 'Kesultanan Aceh meminta bantuan kepada Kesultanan Utsmaniyah untuk menghadapi ekspansi Portugis di kawasan Selat Malaka. Hubungan ini merupakan memori sejarah, bukan hubungan diplomatik Indonesia–Turki modern.' },
    { year: '1950', title: 'Hubungan diplomatik resmi', body: 'Setelah Indonesia merdeka, Turki termasuk negara awal yang mengakui kemerdekaan Indonesia. Hubungan diplomatik resmi dibentuk pada 1950.' },
    { year: '1957', title: 'Kedutaan Besar Turki di Jakarta', body: 'Kedutaan Besar Turki dibuka di Jakarta pada 10 April 1957, memperkuat hubungan diplomatik kedua negara.' },
    { year: '2011', title: 'Kemitraan strategis', body: 'Indonesia dan Turki meningkatkan hubungan menjadi kemitraan strategis melalui deklarasi bersama di Jakarta.' },
    { year: '2022', title: 'Dewan Kerja Sama Strategis Tingkat Tinggi', body: 'Kedua negara membentuk dewan kerja sama strategis tingkat tinggi untuk memperkuat koordinasi kerja sama bilateral.' },
    { year: '2025', title: 'Pertemuan pertama dewan strategis', body: 'Pertemuan pertama dewan berlangsung di Indonesia, memperluas pengelolaan kerja sama lintas sektor termasuk pendidikan, kebudayaan, dan hubungan antarmasyarakat.' },
  ],
  en: [
    { year: '16th century', title: 'Aceh and the Ottoman Empire', body: 'The Sultanate of Aceh sought Ottoman assistance to counter Portuguese expansion around the Strait of Malacca. This is a historical connection, not modern Indonesia–Türkiye diplomatic relations.' },
    { year: '1950', title: 'Formal diplomatic relations', body: 'After Indonesia gained independence, Türkiye was among the early countries to recognize it. Formal diplomatic relations were established in 1950.' },
    { year: '1957', title: 'Turkish Embassy in Jakarta', body: 'The Turkish Embassy opened in Jakarta on 10 April 1957, strengthening diplomatic relations between the two countries.' },
    { year: '2011', title: 'Strategic partnership', body: 'Indonesia and Türkiye elevated their relationship to a strategic partnership through a joint declaration in Jakarta.' },
    { year: '2022', title: 'High-level strategic cooperation council', body: 'The two countries established a high-level strategic cooperation council to strengthen coordination on bilateral cooperation.' },
    { year: '2025', title: 'First strategic council meeting', body: 'The council held its first meeting in Indonesia, expanding coordination across sectors including education, culture, and people-to-people relations.' },
  ],
  ar: [
    { year: 'القرن السادس عشر', title: 'آتشيه والدولة العثمانية', body: 'طلبت سلطنة آتشيه مساعدة العثمانيين لمواجهة التوسع البرتغالي قرب مضيق ملقا. وتمثل هذه الصلة رابطاً تاريخياً وليست علاقات دبلوماسية حديثة بين إندونيسيا وتركيا.' },
    { year: '1950', title: 'العلاقات الدبلوماسية الرسمية', body: 'بعد استقلال إندونيسيا، كانت تركيا من أوائل الدول التي اعترفت بها. وأُقيمت العلاقات الدبلوماسية الرسمية عام 1950.' },
    { year: '1957', title: 'السفارة التركية في جاكرتا', body: 'افتُتحت السفارة التركية في جاكرتا في 10 أبريل 1957، مما عزز العلاقات الدبلوماسية بين البلدين.' },
    { year: '2011', title: 'الشراكة الاستراتيجية', body: 'رفعت إندونيسيا وتركيا مستوى علاقاتهما إلى شراكة استراتيجية عبر إعلان مشترك في جاكرتا.' },
    { year: '2022', title: 'مجلس التعاون الاستراتيجي رفيع المستوى', body: 'أنشأ البلدان مجلساً رفيع المستوى للتعاون الاستراتيجي لتعزيز تنسيق التعاون الثنائي.' },
    { year: '2025', title: 'الاجتماع الأول للمجلس الاستراتيجي', body: 'عُقد الاجتماع الأول للمجلس في إندونيسيا، مع توسيع التنسيق في التعليم والثقافة والعلاقات بين الشعبين.' },
  ],
  tr: [
    { year: '16. yüzyıl', title: 'Açe ve Osmanlı Devleti', body: 'Açe Sultanlığı, Malakka Boğazı çevresindeki Portekiz yayılmasına karşı Osmanlılardan yardım istedi. Bu tarihî bir bağdır; modern Endonezya–Türkiye diplomatik ilişkileriyle aynı değildir.' },
    { year: '1950', title: 'Resmî diplomatik ilişkiler', body: 'Endonezya bağımsızlığını kazandıktan sonra Türkiye, ülkeyi tanıyan ilk ülkeler arasında yer aldı. Resmî diplomatik ilişkiler 1950’de kuruldu.' },
    { year: '1957', title: 'Cakarta’daki Türkiye Büyükelçiliği', body: 'Türkiye Büyükelçiliği 10 Nisan 1957’de Cakarta’da açılarak iki ülke arasındaki diplomatik ilişkileri güçlendirdi.' },
    { year: '2011', title: 'Stratejik ortaklık', body: 'Endonezya ve Türkiye, Cakarta’da imzalanan ortak bildiriyle ilişkilerini stratejik ortaklık düzeyine yükseltti.' },
    { year: '2022', title: 'Üst Düzey Stratejik İş Birliği Konseyi', body: 'İki ülke, ikili iş birliğinin koordinasyonunu güçlendirmek için üst düzey stratejik iş birliği konseyi kurdu.' },
    { year: '2025', title: 'Konseyin ilk stratejik toplantısı', body: 'Konsey ilk toplantısını Endonezya’da gerçekleştirdi; eğitim, kültür ve halklar arası ilişkiler dâhil farklı alanlardaki koordinasyon genişletildi.' },
  ],
};

export const HistoryMap: React.FC<HistoryMapProps> = ({ currentLang, isRTL }) => {
  const t = translations[currentLang];
  const heading = { id: 'Önemli tarihsel dönüm noktaları', en: 'Historical milestones', ar: 'محطات تاريخية مهمة', tr: 'Önemli tarihsel dönüm noktaları' }[currentLang];
  return <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14" dir={isRTL ? 'rtl' : 'ltr'}>
    <div className="max-w-2xl mb-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 mb-3">{heading}</p><h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-emerald-950 mb-3">{t.map.title}</h1><p className="text-stone-600 leading-relaxed">{t.map.subtitle}</p></div>
    <ol className="relative border-s-2 border-emerald-900/20 ms-3 space-y-8">{events[currentLang].map((event) => <li key={event.year} className="relative ps-7 sm:ps-9"><span className="absolute -start-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#FBF9F5] bg-emerald-800 ring-2 ring-emerald-800/15" aria-hidden="true"/><article className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm"><p className="text-sm font-bold tracking-wide text-amber-700 mb-2">{event.year}</p><h2 className="text-lg sm:text-xl font-semibold text-emerald-950 mb-2">{event.title}</h2><p className="text-sm sm:text-base leading-relaxed text-stone-600">{event.body}</p></article></li>)}</ol>
  </section>;
};
