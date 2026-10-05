import { Language } from '../types';

export interface TranslationStrings {
  brandName: string;
  tagline: string;
  siteDescription: string;
  nav: {
    home: string;
    learning: string;
    map: string;
    crossword: string;
    sources: string;
  };
  hero: {
    titleMain: string;
    titleSub: string;
    subtitle: string;
    ctaStart: string;
    ctaMap: string;
    highlightNetwork: string;
    conceptPill: string;
  };
  dashboard: {
    greeting: string;
    progressTitle: string;
    completed: string;
    outOf: string;
    btnContinue: string;
    btnExploreMap: string;
    materialStatusCompleted: string;
    materialStatusUnread: string;
    quizLockedTitle: string;
    quizLockedDesc: string;
    quizUnlockedTitle: string;
    quizUnlockedDesc: string;
    btnStartQuiz: string;
  };
  materials: {
    chapterPrefix: string;
    readTime: string;
    markAsCompleted: string;
    completedBadge: string;
    nextMaterial: string;
    prevMaterial: string;
    backToDashboard: string;
    timelineHeading: string;
    keyFiguresHeading: string;
    keyRegionsHeading: string;
    didYouKnowHeading: string;
    summaryHeading: string;
    academicSourcesHeading: string;
    historicalDebateTitle: string;
    goToQuizCTA: string;
  };
  map: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterMaritime: string;
    filterOverland: string;
    clickNodeHint: string;
    nodeDrawerPeriod: string;
    nodeDrawerRole: string;
    nodeDrawerFastFact: string;
    nodeDrawerKeyConnections: string;
    closeDrawer: string;
    networkNotice: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    rulesNote: string;
    acrossHeading: string;
    downHeading: string;
    btnCheckAnswers: string;
    btnSubmit: string;
    btnReset: string;
    timerLabel: string;
    resultTitle: string;
    resultScoreLabel: string;
    resultTimeLabel: string;
    resultCorrectAnswers: string;
    resultReviewCTA: string;
    btnLearnAgain: string;
    incompleteAlert: string;
    confirmSubmit: string;
    categoryLabels: {
      tokoh: string;
      kerajaan: string;
      wilayah: string;
      peristiwa: string;
      konsep: string;
    };
  };
  sources: {
    title: string;
    subtitle: string;
    methodologyNote: string;
    material1Sources: string;
    material2Sources: string;
    material3Sources: string;
  };
  footer: {
    aboutTitle: string;
    aboutDesc: string;
    quickLinks: string;
    legalNote: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationStrings> = {
  id: {
    brandName: 'Indonesia–Turki: Jejak Hubungan',
    tagline: 'Sejarah, Pendidikan, dan Kerja Sama Bilateral',
    siteDescription: 'Media pembelajaran interaktif tentang sejarah hubungan Indonesia dan Turki, diplomasi, pendidikan, budaya, dan kerja sama bilateral.',
    nav: {
      home: 'Beranda',
      learning: 'Belajar',
      map: 'Linimasa',
      crossword: 'TTS',
      sources: 'Sumber Sejarah',
    },
    hero: {
      titleMain: 'Hubungan Indonesia–Turki',
      titleSub: 'Dari Jejak Sejarah ke Kemitraan Modern',
      subtitle: 'Pelajari perjalanan hubungan Indonesia dan Turki, mulai dari hubungan historis Aceh–Utsmaniyah hingga diplomasi, pendidikan, budaya, dan kerja sama bilateral masa kini.',
      ctaStart: 'Mulai Belajar',
      ctaMap: 'Lihat Linimasa',
      highlightNetwork: 'Enam Tonggak Hubungan Indonesia–Turki',
      conceptPill: 'Sejarah dan Kerja Sama Bilateral',
    },
    dashboard: {
      greeting: 'Halo',
      progressTitle: 'Progres Pembelajaran',
      completed: 'Selesai',
      outOf: 'dari',
      btnContinue: 'Lanjut Belajar',
      btnExploreMap: 'Jelajahi Linimasa',
      materialStatusCompleted: 'Sudah Selesai',
      materialStatusUnread: 'Belum Dibaca',
      quizLockedTitle: 'Teka-Teki Silang Terkunci',
      quizLockedDesc: 'Pelajari tiga materi tentang sejarah bilateral, pendidikan, budaya, dan hubungan antarmasyarakat sebelum mengerjakan TTS.',
      quizUnlockedTitle: 'Teka-Teki Silang Terbuka!',
      quizUnlockedDesc: 'Uji pemahamanmu tentang sejarah dan perkembangan hubungan Indonesia–Turki.',
      btnStartQuiz: 'Kerjakan TTS Sekarang',
    },
    materials: {
      chapterPrefix: 'Materi',
      readTime: 'Waktu baca 6 menit',
      markAsCompleted: 'Tandai Materi Selesai',
      completedBadge: 'Materi Selesai Dibaca',
      nextMaterial: 'Materi Berikutnya',
      prevMaterial: 'Materi Sebelumnya',
      backToDashboard: 'Kembali ke Dasbor',
      timelineHeading: 'Kronologi Peristiwa',
      keyFiguresHeading: 'Tokoh-Tokoh Penting',
      keyRegionsHeading: 'Wilayah & Pusat Peradaban',
      didYouKnowHeading: 'Tahukah Kamu?',
      summaryHeading: 'Apa yang Perlu Diingat?',
      academicSourcesHeading: 'Referensi Akademik',
      historicalDebateTitle: 'Catatan Kritis Sejarawan',
      goToQuizCTA: 'Semua materi telah selesai! Lanjut ke evaluasi TTS.',
    },
    map: {
      title: 'Linimasa Hubungan Indonesia–Turki',
      subtitle: 'Enam tonggak penting dari hubungan historis Aceh–Utsmaniyah hingga kerja sama bilateral pada 2025.',
      filterAll: 'Semua Jaringan',
      filterMaritime: 'Jalur Maritim Samudra',
      filterOverland: 'Jalur Darat & Keilmuan',
      clickNodeHint: 'Klik salah satu simpul wilayah pada peta untuk membaca sejarah perannya.',
      nodeDrawerPeriod: 'Periode Signifikan',
      nodeDrawerRole: 'Peran dalam Jaringan',
      nodeDrawerFastFact: 'Fakta Singkat',
      nodeDrawerKeyConnections: 'Koneksi Utama',
      closeDrawer: 'Tutup',
      networkNotice: 'Peta ini menggambarkan jejaring multijalur yang terhubung selama berabad-abad, bukan perjalanan fisik satu arah.',
    },
    quiz: {
      title: 'Uji Ingatanmu: Teka-Teki Silang',
      subtitle: 'Seberapa jauh kamu memahami perjalanan sejarah yang baru saja kamu pelajari?',
      rulesNote: 'Ketik huruf pada kotak silang. Klik nomor soal atau petunjuk untuk berpindah soal. Nilai dihitung dari jumlah jawaban yang benar.',
      acrossHeading: 'Mendatar',
      downHeading: 'Menurun',
      btnCheckAnswers: 'Periksa Jawaban Sementara',
      btnSubmit: 'Kirim Jawaban & Hitung Nilai',
      btnReset: 'Kosongkan Grid',
      timerLabel: 'Waktu Pengerjaan',
      resultTitle: 'Hasil Evaluasi TTS',
      resultScoreLabel: 'Skor Akhir',
      resultTimeLabel: 'Waktu Selesai',
      resultCorrectAnswers: 'Jawaban Benar',
      resultReviewCTA: 'Tinjau Rincian Soal',
      btnLearnAgain: 'Pelajari Lagi Materi',
      incompleteAlert: 'Masih ada beberapa kotak yang belum terisi. Yakin ingin mengirim sekarang?',
      confirmSubmit: 'Kirimkan jawaban Anda?',
      categoryLabels: {
        tokoh: 'Tokoh',
        kerajaan: 'Kerajaan / Kesultanan',
        wilayah: 'Wilayah / Kota',
        peristiwa: 'Peristiwa',
        konsep: 'Konsep Sejarah',
      },
    },
    sources: {
      title: 'Sumber Sejarah & Rujukan Akademik',
      subtitle: 'Disusun berdasarkan riset historiografi modern, karya sejarawan terkemuka, dan literatur akademik tepercaya.',
      methodologyNote: 'Penyusunan narasi sejarah pada aplikasi ini menghindari simplifikasi linear dan menyajikan proses islamisasi sebagai dinamika jejaring bertahap yang melibatkan perdagangan, pelayaran, keilmuan, dan hubungan antarmasyarakat.',
      material1Sources: 'Sumber Materi 1: Sejarah Hubungan Indonesia–Turki',
      material2Sources: 'Sumber Materi 2: Pendidikan dan Akademik',
      material3Sources: 'Sumber Materi 3: Budaya, Masyarakat, dan Keislaman',
    },
    footer: {
      aboutTitle: 'Hubungan Indonesia–Turki',
      aboutDesc: 'Pelajari sejarah bersama, pertukaran pendidikan, dialog budaya, dan kerja sama yang terus berkembang antara Indonesia dan Turki.',
      quickLinks: 'Tautan Cepat',
      legalNote: 'Media pembelajaran interaktif terbuka untuk pelajar SMA dan peminat sejarah.',
      copyright: '© 2026 Hubungan Indonesia–Turki. Media edukasi tentang sejarah dan kerja sama bilateral.',
    },
  },

  en: {
    brandName: 'Indonesia–Türkiye Relations',
    tagline: 'History, Education, and Bilateral Cooperation',
    siteDescription: 'An interactive learning resource about Indonesia–Türkiye relations, diplomacy, education, culture, and bilateral cooperation.',
    nav: {
      home: 'Home',
      learning: 'Learn',
      map: 'Timeline',
      crossword: 'Crossword',
      sources: 'Historical Sources',
    },
    hero: {
      titleMain: 'Indonesia–Türkiye Relations',
      titleSub: 'From Historical Ties to Modern Partnership',
      subtitle: 'Explore the relationship between Indonesia and Türkiye, from historical Aceh–Ottoman ties to contemporary diplomacy, education, culture, and bilateral cooperation.',
      ctaStart: 'Start Learning',
      ctaMap: 'Explore Interactive Map',
      highlightNetwork: 'Six Milestones in Indonesia–Türkiye Relations',
      conceptPill: 'History and Bilateral Cooperation',
    },
    dashboard: {
      greeting: 'Welcome',
      progressTitle: 'Learning Progress',
      completed: 'Completed',
      outOf: 'of',
      btnContinue: 'Continue Reading',
      btnExploreMap: 'Explore Timeline',
      materialStatusCompleted: 'Completed',
      materialStatusUnread: 'Not Read Yet',
      quizLockedTitle: 'Crossword Locked',
      quizLockedDesc: 'Complete all 3 historical modules to unlock the crossword evaluation.',
      quizUnlockedTitle: 'Crossword Unlocked!',
      quizUnlockedDesc: 'Test your understanding of Indonesia–Türkiye history and bilateral cooperation.',
      btnStartQuiz: 'Solve Crossword Now',
    },
    materials: {
      chapterPrefix: 'Module',
      readTime: '6 min read',
      markAsCompleted: 'Mark as Completed',
      completedBadge: 'Completed',
      nextMaterial: 'Next Module',
      prevMaterial: 'Previous Module',
      backToDashboard: 'Back to Dashboard',
      timelineHeading: 'Chronological Timeline',
      keyFiguresHeading: 'Prominent Historical Figures',
      keyRegionsHeading: 'Key Centers & Geography',
      didYouKnowHeading: 'Did You Know?',
      summaryHeading: 'Key Takeaways to Remember',
      academicSourcesHeading: 'Academic References',
      historicalDebateTitle: 'Historians’ Critical Perspective',
      goToQuizCTA: 'All modules completed! Proceed to Crossword evaluation.',
    },
    map: {
      title: 'Indonesia–Türkiye Relations Timeline',
      subtitle: 'Six milestones from historical Aceh–Ottoman ties to contemporary bilateral cooperation in 2025.',
      filterAll: 'All Networks',
      filterMaritime: 'Indian Ocean Maritime Routes',
      filterOverland: 'Overland & Scholarly Corridors',
      clickNodeHint: 'Click any regional node on the map to explore its historical role.',
      nodeDrawerPeriod: 'Significant Era',
      nodeDrawerRole: 'Civilizational Role',
      nodeDrawerFastFact: 'Fast Fact',
      nodeDrawerKeyConnections: 'Primary Linkages',
      closeDrawer: 'Close',
      networkNotice: 'This map represents a multi-branched, centuries-long network rather than a single linear migration.',
    },
    quiz: {
      title: 'Memory Check: Crossword Puzzle',
      subtitle: 'How deeply do you understand the historical journey you just explored?',
      rulesNote: 'Type letters into the crossword boxes. Click clues to highlight corresponding words. Scores are computed from correct answers.',
      acrossHeading: 'Across',
      downHeading: 'Down',
      btnCheckAnswers: 'Check Progress',
      btnSubmit: 'Submit Answers & Calculate Score',
      btnReset: 'Clear Grid',
      timerLabel: 'Elapsed Time',
      resultTitle: 'Crossword Evaluation Result',
      resultScoreLabel: 'Final Score',
      resultTimeLabel: 'Time Taken',
      resultCorrectAnswers: 'Correct Answers',
      resultReviewCTA: 'Review Question Details',
      btnLearnAgain: 'Review Modules',
      incompleteAlert: 'Some cells remain blank. Are you sure you want to submit now?',
      confirmSubmit: 'Submit your crossword now?',
      categoryLabels: {
        tokoh: 'Historical Figure',
        kerajaan: 'Kingdom / Sultanate',
        wilayah: 'Region / City',
        peristiwa: 'Event',
        konsep: 'Historical Concept',
      },
    },
    sources: {
      title: 'Historical Sources & Academic References',
      subtitle: 'References for learning about Indonesia–Türkiye history, education, culture, and bilateral cooperation.',
      methodologyNote: 'This resource distinguishes historical Aceh–Ottoman ties from modern diplomatic relations and summarizes cooperation in education, culture, and people-to-people exchange.',
      material1Sources: 'Sources for Module 1: Indonesia–Türkiye Relations',
      material2Sources: 'Sources for Module 2: Education and Academia',
      material3Sources: 'Sources for Module 3: Culture, Society, and Religious Cooperation',
    },
    footer: {
      aboutTitle: 'Indonesia–Türkiye Relations',
      aboutDesc: 'Learn about the shared history, educational exchange, cultural dialogue, and growing cooperation between Indonesia and Türkiye.',
      quickLinks: 'Quick Links',
      legalNote: 'An interactive historical learning resource for students and inquisitive minds.',
      copyright: '© 2026 Indonesia–Türkiye Relations. An educational resource on bilateral history and cooperation.',
    },
  },

  ar: {
    brandName: 'العلاقات الإندونيسية التركية',
    tagline: 'التاريخ والتعليم والتعاون الثنائي',
    siteDescription: 'مورد تعليمي تفاعلي عن العلاقات الإندونيسية التركية والدبلوماسية والتعليم والثقافة والتعاون الثنائي.',
    nav: {
      home: 'الرئيسية',
      learning: 'الدروس',
      map: 'الخط الزمني',
      crossword: 'الكلمات المتقاطعة',
      sources: 'المصادر التاريخية',
    },
    hero: {
      titleMain: 'العلاقات الإندونيسية التركية',
      titleSub: 'من الروابط التاريخية إلى الشراكة الحديثة',
      subtitle: 'تعرّف على تاريخ العلاقات بين إندونيسيا وتركيا، من الروابط التاريخية بين آتشيه والعثمانيين إلى الدبلوماسية والتعليم والثقافة والتعاون الثنائي اليوم.',
      ctaStart: 'ابدأ التعلم',
      ctaMap: 'استكشف الخريطة التفاعلية',
      highlightNetwork: 'ست محطات في العلاقات الإندونيسية التركية',
      conceptPill: 'التاريخ والتعاون الثنائي',
    },
    dashboard: {
      greeting: 'أهلاً بك',
      progressTitle: 'تقدم التعلم',
      completed: 'مكتمل',
      outOf: 'من أصل',
      btnContinue: 'متابعة القراءة',
      btnExploreMap: 'استكشاف الخط الزمني',
      materialStatusCompleted: 'تمت قراءته',
      materialStatusUnread: 'غير مقروء بعد',
      quizLockedTitle: 'الكلمات المتقاطعة مقفلة',
      quizLockedDesc: 'أكمل جميع المواد التعليمية الثلاث أولاً لفتح اختبار الكلمات المتقاطعة.',
      quizUnlockedTitle: 'الكلمات المتقاطعة متاحة الآن!',
      quizUnlockedDesc: 'اختبر ذاكرتك وفهمك للمحطات التاريخية من الأناضول إلى جنوب شرق آسيا.',
      btnStartQuiz: 'ابدأ حل الكلمات المتقاطعة',
    },
    materials: {
      chapterPrefix: 'المادة',
      readTime: 'وقت القراءة: 6 دقائق',
      markAsCompleted: 'تحديد كمكتمل',
      completedBadge: 'مكتمل',
      nextMaterial: 'المادة التالية',
      prevMaterial: 'المادة السابقة',
      backToDashboard: 'العودة للوحة التحكم',
      timelineHeading: 'التسلسل الزمني التاريخي',
      keyFiguresHeading: 'شخصيات بارزة',
      keyRegionsHeading: 'مراكز حضارية وجغرافية',
      didYouKnowHeading: 'هل تعلم؟',
      summaryHeading: 'نقاط جوهرية للتذكر',
      academicSourcesHeading: 'المراجع الأكاديمية',
      historicalDebateTitle: 'ملاحظة نقدية للمؤرخين',
      goToQuizCTA: 'أتممت كافة المواد! تفضل بالاختبار النهائي.',
    },
    map: {
      title: 'الخط الزمني للعلاقات الإندونيسية التركية',
      subtitle: 'ست محطات من الروابط التاريخية بين آتشيه والعثمانيين إلى التعاون الثنائي المعاصر في عام 2025.',
      filterAll: 'كافة المسارات',
      filterMaritime: 'طرق المحيط الهندي البحرية',
      filterOverland: 'المسارات البرية وشبكات العلماء',
      clickNodeHint: 'انقر على أي عقدة جغرافية في الخريطة لاستعراض دورها التاريخي.',
      nodeDrawerPeriod: 'الفترة التاريخية',
      nodeDrawerRole: 'الدور في الشبكة الحضارية',
      nodeDrawerFastFact: 'معلومة سريعة',
      nodeDrawerKeyConnections: 'الروابط الرئيسية',
      closeDrawer: 'إغلاق',
      networkNotice: 'تجسد هذه الخريطة شبكة تاريخية متفرعة امتدت لقرون عديدة، وليست مساراً أحادي الاتجاه.',
    },
    quiz: {
      title: 'اختبر معلوماتك: الكلمات المتقاطعة',
      subtitle: 'إلى أي مدى تفهم تاريخ العلاقات الإندونيسية التركية والتعاون الثنائي؟',
      rulesNote: 'اكتب الحروف في الشبكة. انقر على السؤال لتحديد الكلمة المطلوبة. تُحسب النتيجة بناءً على الإجابات الصحيحة.',
      acrossHeading: 'أفقياً',
      downHeading: 'عمودياً',
      btnCheckAnswers: 'فحص الإجابات',
      btnSubmit: 'تسليم الإجابات واحتساب النتيجة',
      btnReset: 'مسح الشبكة',
      timerLabel: 'الوقت المستغرق',
      resultTitle: 'نتيجة اختبار الكلمات المتقاطعة',
      resultScoreLabel: 'الدرجة النهائية',
      resultTimeLabel: 'زمن الإنجاز',
      resultCorrectAnswers: 'الإجابات الصحيحة',
      resultReviewCTA: 'مراجعة تفاصيل الأسئلة',
      btnLearnAgain: 'مراجعة المواد التعليمية',
      incompleteAlert: 'لا تزال بعض الخلايا فارغة. هل تود الإرسال على أي حال؟',
      confirmSubmit: 'هل تود تسليم النتيجة الآن؟',
      categoryLabels: {
        tokoh: 'شخصية تاريخية',
        kerajaan: 'مملكة / سلطنة',
        wilayah: 'منطقة / حاضرة',
        peristiwa: 'حدث تاريخي',
        konsep: 'مفهوم تاريخي',
      },
    },
    sources: {
      title: 'المصادر التاريخية والمراجع الأكاديمية',
      subtitle: 'مستقاة مراجع حول تاريخ العلاقات الإندونيسية التركية والتعليم والثقافة والتعاون الثنائي.',
      methodologyNote: 'يميز هذا المورد بين الروابط التاريخية لآتشيه والعثمانيين والعلاقات الدبلوماسية الحديثة، ويلخص التعاون في التعليم والثقافة والتواصل بين الشعبين.',
      material1Sources: 'مصادر الوحدة الأولى: العلاقات الإندونيسية التركية',
      material2Sources: 'مصادر الوحدة الثانية: التعليم والأوساط الأكاديمية',
      material3Sources: 'مصادر الوحدة الثالثة: الثقافة والمجتمع والتعاون الديني',
    },
    footer: {
      aboutTitle: 'العلاقات الإندونيسية التركية',
      aboutDesc: 'تعرّف على التاريخ المشترك والتبادل التعليمي والحوار الثقافي وتنامي التعاون بين إندونيسيا وتركيا.',
      quickLinks: 'روابط سريعة',
      legalNote: 'منصة تعليمية مفتوحة لطلاب المرحلة الثانوية والمهتمين بالتاريخ.',
      copyright: '© 2026 العلاقات الإندونيسية التركية. مورد تعليمي حول التاريخ والتعاون الثنائي.',
    },
  },

  tr: {
    brandName: 'Endonezya–Türkiye İlişkileri',
    tagline: 'Tarih, Eğitim ve İkili İş Birliği',
    siteDescription: 'Endonezya–Türkiye ilişkileri, diplomasi, eğitim, kültür ve ikili iş birliği hakkında etkileşimli bir öğrenme kaynağı.',
    nav: {
      home: 'Ana Sayfa',
      learning: 'Dersler',
      map: 'Zaman Çizelgesi',
      crossword: 'Bulmaca',
      sources: 'Tarihi Kaynaklar',
    },
    hero: {
      titleMain: 'Endonezya–Türkiye İlişkileri',
      titleSub: 'Tarihî Bağlardan Modern Ortaklığa',
      subtitle: 'Endonezya ve Türkiye arasındaki ilişkileri; tarihî Açe–Osmanlı bağlarından günümüz diplomasisi, eğitim, kültür ve ikili iş birliğine uzanan yönleriyle keşfedin.',
      ctaStart: 'Öğrenmeye Başla',
      ctaMap: 'Etkileşimli Haritayı İncele',
      highlightNetwork: 'Endonezya–Türkiye İlişkilerinde Altı Önemli Dönüm Noktası',
      conceptPill: 'Tarih ve İkili İş Birliği',
    },
    dashboard: {
      greeting: 'Hoş geldin',
      progressTitle: 'Öğrenme İlerlemesi',
      completed: 'Tamamlandı',
      outOf: '/',
      btnContinue: 'Okumaya Devam Et',
      btnExploreMap: 'Zaman Çizelgesini İncele',
      materialStatusCompleted: 'Tamamlandı',
      materialStatusUnread: 'Henüz Okunmadı',
      quizLockedTitle: 'Çengel Bulmaca Kilitli',
      quizLockedDesc: 'Bulmacayı açmak için lütfen 3 tarihi dersin tümünü tamamlayın.',
      quizUnlockedTitle: 'Çengel Bulmaca Açıldı!',
      quizUnlockedDesc: 'Endonezya–Türkiye ilişkileri ve ikili iş birliği hakkındaki bilginizi sınayın.',
      btnStartQuiz: 'Bulmacayı Çöz',
    },
    materials: {
      chapterPrefix: 'Bölüm',
      readTime: '6 dk okuma süresi',
      markAsCompleted: 'Bölümü Tamamla',
      completedBadge: 'Tamamlandı',
      nextMaterial: 'Sonraki Bölüm',
      prevMaterial: 'Önceki Bölüm',
      backToDashboard: 'Panele Dön',
      timelineHeading: 'Kronolojik Zaman Çizelgesi',
      keyFiguresHeading: 'Önemli Tarihi Şahsiyetler',
      keyRegionsHeading: 'Bölgeler ve Medeniyet Merkezleri',
      didYouKnowHeading: 'Biliyor muydunuz?',
      summaryHeading: 'Akılda Tutulması Gerekenler',
      academicSourcesHeading: 'Akademik Kaynakça',
      historicalDebateTitle: 'Tarihçilerin Eleştirel Notu',
      goToQuizCTA: 'Tüm bölümleri tamamladınız! Bulmaca değerlendirmesine geçebilirsiniz.',
    },
    map: {
      title: 'Endonezya–Türkiye İlişkileri Zaman Çizelgesi',
      subtitle: 'Açe–Osmanlı arasındaki tarihî bağlardan 2025 yılındaki çağdaş ikili iş birliğine uzanan altı dönüm noktası.',
      filterAll: 'Tüm Ağlar',
      filterMaritime: 'Hint Okyanusu Deniz Rotaları',
      filterOverland: 'Kara Yolları ve İlim Koridorları',
      clickNodeHint: 'Tarihi rolünü okumak için haritadaki herhangi bir bölge noktasına tıklayın.',
      nodeDrawerPeriod: 'Önemli Dönem',
      nodeDrawerRole: 'Ağdaki Rolü',
      nodeDrawerFastFact: 'Kısa Bilgi',
      nodeDrawerKeyConnections: 'Başlıca Bağlantılar',
      closeDrawer: 'Kapat',
      networkNotice: 'Bu harita tek yönlü bir göçü değil, yüzyıllar süren çok kollu medeniyet ağlarını temsil eder.',
    },
    quiz: {
      title: 'Hafızanı Yokla: Çengel Bulmaca',
      subtitle: 'Öğrendiğiniz tarihi yolculuğu ne kadar iyi kavradınız?',
      rulesNote: 'Harfleri kutulara girin. Soruyu vurgulamak için ipuçlarına tıklayın. Puan doğru yanıtlara göre hesaplanır.',
      acrossHeading: 'Soldan Sağa',
      downHeading: 'Yukarıdan Aşağıya',
      btnCheckAnswers: 'Yanıtları Kontrol Et',
      btnSubmit: 'Yanıtları Gönder ve Puanı Hesapla',
      btnReset: 'Izgarayı Temizle',
      timerLabel: 'Geçen Süre',
      resultTitle: 'Bulmaca Sonuç Raporu',
      resultScoreLabel: 'Nihai Puan',
      resultTimeLabel: 'Tamamlama Süresi',
      resultCorrectAnswers: 'Doğru Yanıtlar',
      resultReviewCTA: 'Soru Detaylarını İncele',
      btnLearnAgain: 'Dersleri Tekrar İncele',
      incompleteAlert: 'Bazı kutular henüz boş. Yine de göndermek istediğinize emin misiniz?',
      confirmSubmit: 'Bulmaca yanıtlarınızı göndermek istiyor musunuz?',
      categoryLabels: {
        tokoh: 'Tarihi Şahsiyet',
        kerajaan: 'Krallık / Saltanat',
        wilayah: 'Bölge / Şehir',
        peristiwa: 'Tarihi Olay',
        konsep: 'Tarih Kavramı',
      },
    },
    sources: {
      title: 'Tarihi Kaynaklar ve Akademik Referanslar',
      subtitle: 'Çağdaş tarih yazımı, saygın üniversite yayınları ve uzman tarihçilerin eserleri doğrultusunda hazırlanmıştır.',
      methodologyNote: 'Bu kaynak, tarihî Açe–Osmanlı bağlarını modern diplomatik ilişkilerden ayırır; eğitim, kültür ve halklar arası iş birliğini özetler.',
      material1Sources: '1. Bölüm Kaynakları: Endonezya–Türkiye İlişkileri',
      material2Sources: '2. Bölüm Kaynakları: Eğitim ve Akademi',
      material3Sources: '3. Bölüm Kaynakları: Kültür, Toplum ve Dinî İş Birliği',
    },
    footer: {
      aboutTitle: 'Endonezya–Türkiye İlişkileri',
      aboutDesc: 'Endonezya ve Türkiye arasındaki ortak tarihi, eğitim değişimini, kültürel diyaloğu ve gelişen iş birliğini keşfedin.',
      quickLinks: 'Hızlı Bağlantılar',
      legalNote: 'Lise öğrencileri ve tarih meraklıları için açık, etkileşimli eğitim kaynağı.',
      copyright: '© 2026 Endonezya–Türkiye İlişkileri. İkili tarih ve iş birliği üzerine eğitim kaynağı.',
    },
  },
};
