import { Language, MaterialData } from '../types';
import { localizeLessons } from './materialsLocalization';

const lessons: MaterialData[] = [
  {
    id: 1, slug: 'sejarah-indonesia-turki', title: 'Sejarah Hubungan Indonesia–Turki',
    subtitle: 'Dari Aceh dan Utsmaniyah menuju hubungan diplomatik modern', era: 'Abad ke-16–2025', coverAccent: 'from-emerald-950 via-teal-900 to-emerald-800',
    intro: 'Hubungan Indonesia–Turki bertumpu pada dua lapisan: ingatan sejarah yang menghubungkan Aceh dengan Kesultanan Utsmaniyah sejak abad ke-16, serta kerja sama modern antarpemerintah dan antarmasyarakat sejak hubungan diplomatik resmi dibuka pada 1950.',
    timeline: [
      { year: 'Abad ke-16', title: 'Aceh dan Utsmaniyah', description: 'Kesultanan Aceh meminta bantuan kepada Kesultanan Utsmaniyah untuk menghadapi ekspansi Portugis di kawasan Selat Malaka.' },
      { year: '1950', title: 'Hubungan diplomatik resmi', description: 'Hubungan diplomatik modern Indonesia–Turki resmi dibentuk setelah Indonesia merdeka.' },
      { year: '10 April 1957', title: 'Kedutaan Besar Turki di Jakarta', description: 'Kedutaan Besar Turki dibuka di Jakarta.' },
      { year: '2011', title: 'Kemitraan strategis', description: 'Kedua negara meningkatkan hubungan menjadi kemitraan strategis melalui deklarasi bersama di Jakarta.' },
      { year: '2022', title: 'Dewan kerja sama strategis', description: 'Dibentuk High Level Strategic Cooperation Council.' },
      { year: '2025', title: 'Pertemuan pertama dewan', description: 'Pertemuan pertama dewan berlangsung di Indonesia.' },
    ],
    sections: [
      { title: 'Dari Aceh dan Utsmaniyah', content: ['Akar historis hubungan ini lazim ditelusuri ke abad ke-16, ketika Kesultanan Aceh meminta bantuan kepada Kesultanan Utsmaniyah untuk menghadapi ekspansi Portugis di kawasan Selat Malaka.', 'Pada masa itu belum ada Republik Indonesia maupun Republik Turki seperti sekarang. Yang terhubung adalah Kesultanan Aceh dan Kekaisaran Utsmaniyah. Nilai utamanya adalah memori sejarah tentang solidaritas, jaringan dunia Islam, pertukaran gagasan, dan kedekatan antarmasyarakat.'], keyHighlight: 'Hubungan Aceh–Utsmaniyah merupakan akar historis, bukan hubungan diplomatik modern Indonesia–Turki.' },
      { title: 'Dari pengakuan hingga kemitraan strategis', content: ['Setelah Indonesia merdeka, Turki termasuk negara awal yang mengakui kemerdekaan Indonesia. Hubungan diplomatik resmi dibentuk pada 1950 dan Kedutaan Besar Turki dibuka di Jakarta pada 10 April 1957.', 'Pada 2011, hubungan ditingkatkan menjadi kemitraan strategis. Pada 2022 dibentuk High Level Strategic Cooperation Council, dan pertemuan pertamanya berlangsung di Indonesia pada 2025.'], keyHighlight: 'Hubungan bilateral berkembang dari hubungan diplomatik menjadi mekanisme kemitraan strategis lintas sektor.' },
      { title: 'Hubungan antarmasyarakat', content: ['Hubungan Indonesia–Turki tidak hanya berlangsung pada tingkat pemimpin negara. Pelajar, dosen, lembaga pendidikan Islam, komunitas diaspora, dan kegiatan kebudayaan turut mendukung hubungan kedua negara.', 'Kedekatan budaya, nilai keislaman, dan memori sejarah menjadi modal diplomasi publik untuk memperkuat rasa saling percaya.'] },
    ],
    didYouKnow: ['Kedutaan Besar Turki di Jakarta dibuka pada 10 April 1957.', 'Kemitraan strategis Indonesia–Turki dideklarasikan pada 2011.', 'Dewan Kerja Sama Strategis Tingkat Tinggi dibentuk pada 2022.'],
    keyFigures: [], keyRegions: [{ name: 'Aceh', modernLocation: 'Indonesia', historicalRole: 'Kesultanan yang menjalin hubungan historis dengan Utsmaniyah pada abad ke-16.' }, { name: 'Jakarta', modernLocation: 'Indonesia', historicalRole: 'Tempat deklarasi kemitraan strategis 2011 dan lokasi Kedutaan Besar Turki.' }],
    summaryPoints: ['Akar historis hubungan bermula dari kontak Aceh–Utsmaniyah pada abad ke-16.', 'Hubungan diplomatik resmi dibentuk pada 1950.', 'Kemitraan strategis berkembang melalui tonggak 2011, 2022, dan 2025.'],
    academicReferences: [{ author: 'Kedutaan Besar Republik Türkiye di Jakarta', title: 'Mission / Information Note', publisher: 'Ministry of Foreign Affairs of Türkiye', year: 'n.d.', linkOrNote: 'https://jakarta-emb.mfa.gov.tr/Mission/ShowInfoNote/411733' }],
    historicalDebateNote: 'Bedakan hubungan historis Kesultanan Aceh–Utsmaniyah dari hubungan diplomatik modern Republik Indonesia–Republik Türkiye.'
  },
  {
    id: 2, slug: 'pendidikan-akademik', title: 'Pendidikan dan Akademik', subtitle: 'Beasiswa, mobilitas pelajar, dan kemitraan perguruan tinggi', era: '2010–2025', coverAccent: 'from-teal-950 via-emerald-900 to-green-800',
    intro: 'Pendidikan merupakan jalur nyata hubungan Indonesia–Turki, dari beasiswa individual menuju kerja sama kelembagaan antarkampus dan riset.', timeline: [
      { year: '2010', title: 'Program Beasiswa Tahfiz', description: 'Kerja sama program tahfiz Al-Qur’an mulai berjalan.' },
      { year: '2023–2024', title: 'Beasiswa pendidikan', description: 'Sebanyak 75 beasiswa diberikan kepada mahasiswa Indonesia pada tahun akademik ini, menurut keterangan pemerintah Turki.' },
      { year: 'Juli 2025', title: 'Kelompok kerja pendidikan tinggi', description: 'Indonesia dan Turki mendorong pembentukan Joint Working Group on Higher Education.' },
      { year: '2025/2026', title: 'Program studi di Istanbul', description: 'Direncanakan pembukaan Program Studi Bahasa dan Sastra Indonesia di Istanbul University melalui kemitraan dengan Universitas Islam Malang.' }
    ],
    sections: [
      { title: 'Dari beasiswa ke kemitraan kampus', content: ['Pemerintah Turki menyatakan telah menyediakan lebih dari 1.200 beasiswa pendidikan bagi warga Indonesia; untuk tahun akademik 2023–2024, terdapat 75 beasiswa yang diberikan kepada mahasiswa Indonesia.', 'Beasiswa membuka peluang mempelajari beragam disiplin. Lulusan dapat menjadi penghubung profesional dan akademik antara kedua negara.', 'Dokumen strategi KBRI Ankara menyebut lebih dari 5.000 pelajar Indonesia tersebar di berbagai wilayah Turki. Angka ini merupakan gambaran perencanaan dan dapat berubah mengikuti mobilitas pelajar setiap tahun.'] },
      { title: 'Kerja sama perguruan tinggi', content: ['Pada Juli 2025, pemerintah Indonesia dan Turki mendorong pembentukan Joint Working Group on Higher Education untuk mengoordinasikan kerja sama pendidikan tinggi.', 'Fokusnya mencakup pertukaran mahasiswa dan dosen, dosen tamu, riset kolaboratif, program magang dan pendidikan jangka pendek, serta penguatan kerja sama vokasi dan hubungan kampus–industri.', 'Kemitraan yang dikembangkan mencakup UGM–Çankaya University dalam ekonomi dan bisnis, Universitas Muhammadiyah Yogyakarta–Marmara University, serta kerja sama pelatihan vokasi antara Akademi BKI dan Türk Loydu.'] },
      { title: 'Mengapa pendidikan penting?', content: ['Pendidikan berfungsi sebagai diplomasi jangka panjang. Jejaring alumni, dosen, peneliti, dan mahasiswa dapat bertahan lebih lama serta membentuk pemahaman langsung tentang bahasa, tata sosial, budaya akademik, dan cara pandang masing-masing negara.'] }
    ],
    didYouKnow: ['Pemerintah Turki menyatakan telah menyediakan lebih dari 1.200 beasiswa pendidikan bagi warga Indonesia.', 'Pada tahun akademik 2023–2024 terdapat 75 beasiswa bagi mahasiswa Indonesia.', 'Kerja sama pendidikan tinggi mencakup pertukaran, riset, vokasi, dan hubungan kampus–industri.'],
    keyFigures: [], keyRegions: [{ name: 'Istanbul University', modernLocation: 'Istanbul, Türkiye', historicalRole: 'Lokasi yang direncanakan untuk Program Studi Bahasa dan Sastra Indonesia pada tahun akademik 2025/2026.' }],
    summaryPoints: ['Beasiswa menghubungkan mahasiswa dan profesional kedua negara.', 'Kerja sama berkembang dari individu ke kemitraan kelembagaan.', 'Riset kolaboratif, pertukaran, dan pendidikan vokasi menjadi fokus kerja sama.'],
    academicReferences: [{ author: 'Direktorat Jenderal Pendidikan Tinggi', title: 'Menuju Kolaborasi Global: Indonesia dan Turki Bangun Kemitraan Pendidikan Tinggi', publisher: 'Kemdiktisaintek', year: '2025', linkOrNote: 'https://dikti.kemdikbud.go.id/news/article/menuju-kolaborasi-global-indonesia-dan-turki-bangun-kemitraan-pendidikan-tinggi' }, { author: 'Kedutaan Besar Republik Türkiye di Jakarta', title: 'Mission / Information Note', publisher: 'Ministry of Foreign Affairs of Türkiye', year: 'n.d.', linkOrNote: 'https://jakarta-emb.mfa.gov.tr/Mission/ShowInfoNote/411733' }]
  },
  {
    id: 3, slug: 'budaya-keislaman-masyarakat', title: 'Budaya, Masyarakat, dan Keislaman', subtitle: 'Diplomasi budaya, pesantren, tahfiz, dan hubungan antarmasyarakat', era: '2010–2025', coverAccent: 'from-amber-950 via-emerald-900 to-teal-800',
    intro: 'Pendidikan, budaya, dan keislaman memperkuat people-to-people relations melalui interaksi warga, bukan hanya dokumen pemerintah.', timeline: [
      { year: '2010', title: 'Program tahfiz Al-Qur’an', description: 'Kerja sama Direktorat Jenderal Pendidikan Islam dan UICCI mulai berjalan.' },
      { year: 'Mei 2025', title: 'Turkish Corner', description: 'Kementerian Agama RI dan Duta Besar Turki membahas pengembangan Turkish Corner di Masjid Istiqlal.' },
      { year: '2025', title: 'Dialog dan pertukaran keagamaan', description: 'Kedua pihak menjajaki pertukaran imam masjid dan khatib serta kerja sama pendidikan dan budaya.' }
    ],
    sections: [
      { title: 'Budaya sebagai jembatan', content: ['Hubungan budaya dibangun melalui promosi seni, kuliner, bahasa, festival mahasiswa, pameran, dan keterlibatan diaspora. Kegiatan seperti Indonesian Cultural Week, International Student Festivals, dan promosi kuliner memperkenalkan Indonesia kepada masyarakat Turki.', 'Minat masyarakat Indonesia terhadap sejarah Utsmaniyah, kaligrafi, arsitektur masjid, kuliner, bahasa Turki, dan karya budaya Turki menciptakan ruang pertukaran. Kedekatan budaya tidak berarti kedua negara identik; keduanya memiliki sejarah, bahasa, tradisi hukum, dan bentuk keberagamaan yang berbeda.'] },
      { title: 'Turkish Corner dan pameran', content: ['Pada Mei 2025, Kementerian Agama RI dan Duta Besar Turki membahas pengembangan Turkish Corner di Masjid Istiqlal sebagai simbol persahabatan dan ruang pengenalan budaya Turki.', 'Dalam pertemuan yang sama dibahas rencana pameran bertema Turki–Utsmaniyah untuk menjelaskan hubungan historis Aceh–Utsmaniyah sekaligus mengenalkan warisan budaya Turki kepada publik Indonesia.'] },
      { title: 'Keislaman dan pendidikan agama', content: ['Indonesia memiliki tradisi pesantren yang kuat dan organisasi keagamaan yang beragam. Turki memiliki warisan Utsmaniyah, pengalaman sejarah sekularisme republik, dan lembaga negara seperti Diyanet. Perbedaan ini dapat menjadi sumber pembelajaran timbal balik.', 'Program Beasiswa Tahfiz Al-Qur’an melibatkan Direktorat Jenderal Pendidikan Islam Kementerian Agama RI dan United Islamic Culture Centre of Indonesia (UICCI), pengelola jaringan Pesantren Sulaimaniyah. Program yang mulai berjalan pada 2010 dirancang untuk menggabungkan hafalan Al-Qur’an 30 juz, kajian ilmu keislaman, serta bahasa Arab dan Turki.', 'Data historis Kementerian Agama menyebut 832 santri tercatat dalam proses program hingga 2014, sementara 1.296 santri dari angkatan 2010–2015 disebut telah mengikuti program secara keseluruhan. Angka tersebut menggambarkan skala pada periode itu, bukan jumlah peserta aktif saat ini.', 'Dalam pembicaraan pada 2025, kedua pihak juga menjajaki pertukaran imam masjid dan khatib, di samping pertukaran dosen, mahasiswa, dan pelajar.'] },
      { title: 'Arti hubungan ini', content: ['Pendidikan menciptakan jejaring keahlian; kebudayaan membangun pengenalan dan simpati; kerja sama keagamaan menyediakan ruang dialog tentang ilmu, etika sosial, dan kehidupan Muslim di dunia modern.', 'Arah yang menjanjikan adalah kemitraan berdasarkan saling belajar, terbuka, setara, dan berorientasi pada kualitas pendidikan—bukan menjadikan satu negara sebagai salinan negara lain.'] }
    ],
    didYouKnow: ['Program Beasiswa Tahfiz Al-Qur’an mulai berjalan pada 2010.', 'Turkish Corner di Masjid Istiqlal dibahas pada Mei 2025.', 'Kerja sama keagamaan mencakup penjajakan pertukaran imam masjid dan khatib.'],
    keyFigures: [], keyRegions: [{ name: 'Masjid Istiqlal', modernLocation: 'Jakarta, Indonesia', historicalRole: 'Lokasi yang dibahas untuk pengembangan Turkish Corner.' }, { name: 'Pesantren Sulaimaniyah', modernLocation: 'Indonesia dan Türkiye', historicalRole: 'Jaringan pesantren yang dikelola UICCI dan terlibat dalam program tahfiz.' }],
    summaryPoints: ['Diplomasi budaya memperkuat pengenalan antarmasyarakat.', 'Program tahfiz memadukan hafalan, kajian Islam, dan bahasa.', 'Perbedaan pengalaman Indonesia dan Turki membuka ruang saling belajar.'],
    academicReferences: [{ author: 'Kementerian Agama Republik Indonesia', title: 'Terima Dubes Turki, Menag Bahas Kerja Sama Bidang Agama, Budaya hingga Pendidikan', publisher: 'Kemenag RI', year: '2025', linkOrNote: 'https://kemenag.go.id/internasional/terima-dubes-turki-menag-bahas-kerja-sama-bidang-agama-budaya-hingga-pendidikan-Hi38z' }, { author: 'Kementerian Agama Republik Indonesia', title: 'Menag Bekali Spirit Ratusan Santri Tahfidz Asal Indonesia di Turki', publisher: 'Kemenag RI', year: 'n.d.', linkOrNote: 'https://kemenag.go.id/nasional/menag-bekali-spirit-ratusan-santri-tahfidz-asal-indonesia-di-turki-oojb83' }]
  }
];

export const materialsData: Record<Language, MaterialData[]> = {
  id: lessons,
  en: localizeLessons(lessons, 'en'),
  ar: localizeLessons(lessons, 'ar'),
  tr: localizeLessons(lessons, 'tr'),
};
