export type Language = 'id' | 'en' | 'ar' | 'tr';

export interface UserProgress {
  progress: {
    material1: boolean;
    material2: boolean;
    material3: boolean;
  };
  quizScore: number | null;
  quizCompleted: boolean;
  quizTime: number | null; // in seconds
  completedAt: string | null;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface KeyFigure {
  name: string;
  role: string;
  significance: string;
}

export interface KeyRegion {
  name: string;
  modernLocation: string;
  historicalRole: string;
}

export interface AcademicReference {
  author: string;
  title: string;
  publisher: string;
  year: string;
  linkOrNote?: string;
}

export interface MaterialSection {
  title: string;
  content: string[];
  keyHighlight?: string;
}

export interface MaterialData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  era: string;
  coverAccent: string;
  intro: string;
  timeline: TimelineEvent[];
  sections: MaterialSection[];
  didYouKnow: string[];
  keyFigures: KeyFigure[];
  keyRegions: KeyRegion[];
  summaryPoints: string[];
  academicReferences: AcademicReference[];
  historicalDebateNote?: string;
}

export interface MapNode {
  id: string;
  name: string;
  regionType: 'hub' | 'port' | 'scholarly' | 'sultanate';
  x: number; // percentage on SVG (0-100)
  y: number; // percentage on SVG (0-100)
  period: string;
  role: string;
  fastFact: string;
  keyCommoditiesOrIdeas: string[];
  connections: string[]; // node IDs
}

export interface MapConnection {
  from: string;
  to: string;
  type: 'maritime' | 'overland' | 'scholarly';
  label: string;
}

export interface CrosswordClue {
  number: number;
  direction: 'across' | 'down';
  clue: string;
  answer: string;
  row: number; // 0-indexed
  col: number; // 0-indexed
  category: 'tokoh' | 'kerajaan' | 'wilayah' | 'peristiwa' | 'konsep';
}

export interface CrosswordCell {
  row: number;
  col: number;
  char: string;
  acrossClueNumber?: number;
  downClueNumber?: number;
  clueNumberLabel?: number;
}
