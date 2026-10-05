import { CrosswordClue, Language } from '../types';

export interface CrosswordDefinition {
  rows: number;
  cols: number;
  clues: CrosswordClue[];
}

export const LATIN_CROSSWORD_CLUES: Record<Language, CrosswordClue[]> = {
  id: [
    { number: 1, direction: 'across', clue: 'Negara yang menjadi mitra Indonesia dalam hubungan diplomatik dan kerja sama pendidikan, budaya, serta keislaman.', answer: 'TURKI', row: 1, col: 1, category: 'konsep' },
    { number: 2, direction: 'down', clue: 'Ibu kota Indonesia, tempat Kedutaan Besar Turki dibuka pada 10 April 1957.', answer: 'JAKARTA', row: 1, col: 7, category: 'wilayah' },
    { number: 3, direction: 'across', clue: 'Kesultanan di ujung utara Sumatra yang menjalin hubungan historis dengan Utsmaniyah pada abad ke-16.', answer: 'ACEH', row: 4, col: 1, category: 'kerajaan' },
    { number: 4, direction: 'across', clue: 'Program pendidikan yang memadukan hafalan Al-Qur’an dan pendalaman ilmu keislaman.', answer: 'TAHFIZ', row: 7, col: 1, category: 'konsep' },
    { number: 5, direction: 'across', clue: 'Jenis hubungan yang dideklarasikan Indonesia dan Turki pada 2011.', answer: 'STRATEGIS', row: 10, col: 1, category: 'konsep' },
  ],
  en: [
    { number: 1, direction: 'across', clue: 'The country partnering with Indonesia in diplomacy, education, culture, and religious cooperation.', answer: 'TURKI', row: 1, col: 1, category: 'konsep' },
    { number: 2, direction: 'down', clue: 'Indonesia’s capital, where the Turkish Embassy opened on 10 April 1957.', answer: 'JAKARTA', row: 1, col: 7, category: 'wilayah' },
    { number: 3, direction: 'across', clue: 'The sultanate in northern Sumatra with historical ties to the Ottomans in the 16th century.', answer: 'ACEH', row: 4, col: 1, category: 'kerajaan' },
    { number: 4, direction: 'across', clue: 'An educational program combining Quran memorization with Islamic studies.', answer: 'TAHFIZ', row: 7, col: 1, category: 'konsep' },
    { number: 5, direction: 'across', clue: 'The type of partnership declared by Indonesia and Türkiye in 2011.', answer: 'STRATEGIS', row: 10, col: 1, category: 'konsep' },
  ],
  ar: [
    { number: 1, direction: 'across', clue: 'الدولة الشريكة لإندونيسيا في العلاقات الدبلوماسية والتعليم والثقافة والتعاون الديني.', answer: 'TURKI', row: 1, col: 1, category: 'konsep' },
    { number: 2, direction: 'down', clue: 'عاصمة إندونيسيا التي افتتحت فيها السفارة التركية في 10 أبريل 1957.', answer: 'JAKARTA', row: 1, col: 7, category: 'wilayah' },
    { number: 3, direction: 'across', clue: 'سلطنة في شمال سومطرة ارتبطت تاريخياً بالعثمانيين في القرن السادس عشر.', answer: 'ACEH', row: 4, col: 1, category: 'kerajaan' },
    { number: 4, direction: 'across', clue: 'برنامج تعليمي يجمع حفظ القرآن ودراسة العلوم الإسلامية.', answer: 'TAHFIZ', row: 7, col: 1, category: 'konsep' },
    { number: 5, direction: 'across', clue: 'نوع الشراكة التي أعلنتها إندونيسيا وتركيا عام 2011.', answer: 'STRATEGIS', row: 10, col: 1, category: 'konsep' },
  ],
  tr: [
    { number: 1, direction: 'across', clue: 'Endonezya’nın diplomasi, eğitim, kültür ve dinî iş birliği yürüttüğü ülke.', answer: 'TURKI', row: 1, col: 1, category: 'konsep' },
    { number: 2, direction: 'down', clue: 'Türk Büyükelçiliğinin 10 Nisan 1957’de açıldığı Endonezya başkenti.', answer: 'JAKARTA', row: 1, col: 7, category: 'wilayah' },
    { number: 3, direction: 'across', clue: '16. yüzyılda Osmanlılarla tarihî bağ kuran Kuzey Sumatra sultanlığı.', answer: 'ACEH', row: 4, col: 1, category: 'kerajaan' },
    { number: 4, direction: 'across', clue: 'Kur’an ezberini İslami çalışmalarla birleştiren eğitim programı.', answer: 'TAHFIZ', row: 7, col: 1, category: 'konsep' },
    { number: 5, direction: 'across', clue: 'Endonezya ve Türkiye’nin 2011’de ilan ettiği ortaklık türü.', answer: 'STRATEGIS', row: 10, col: 1, category: 'konsep' },
  ],
};

export const CROSSWORD_GRID_DIMENSIONS = {
  rows: 13,
  cols: 12,
};
