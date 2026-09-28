export type Language = 'id' | 'en';

export type GameLanguageOption = 'id' | 'en' | 'bilingual';

export type TargetAIBuilder = 
  | 'Google AI Studio' 
  | 'Gemini' 
  | 'Lovable' 
  | 'Claude' 
  | 'Canva' 
  | 'v0 by Vercel'
  | 'Lainnya';

export type VisualStyle = 
  | '3D Felt Toys Pastel'
  | 'Cute Cartoon'
  | 'Flat Illustration'
  | 'Nature Kids'
  | 'Space Adventure'
  | 'Pixel Retro Arcade';

export interface GameFormData {
  gameTypes: string[];
  language: GameLanguageOption;
  topic: string;
  subTopic?: string;
  educationCategory: string; // e.g. 'SD', 'SMP', 'SMA', 'TK', 'MTs', 'MA', 'SMK', 'Umum'
  gradeClass: string; // e.g. 'Kelas 4' or '4'
  educationLevel: string; // Combined display, e.g. 'SD Kelas 4'
  targetAge: string;
  questionCount: number;
  learningGoals: string[];
  visualStyle: VisualStyle;
  gameFeatures: string[];
  specialInstructions: string;
  targetAI: TargetAIBuilder;
  brandName: string;
  brandNotes?: string;
}

export interface PresetTemplate {
  id: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  icon: string;
  data: GameFormData;
}
