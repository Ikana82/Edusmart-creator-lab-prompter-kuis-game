import { PresetTemplate } from '../types/generator';

export const PRESET_TEMPLATES: PresetTemplate[] = [
  {
    id: 'ipas-magnet-sd',
    title: {
      id: '🧲 IPAS Sains SD: Petualangan Gaya Magnet',
      en: '🧲 Primary Science: Magnetic Force Adventure'
    },
    description: {
      id: 'Drag & Drop dan Balloon Pop untuk menguji benda magnetis vs non-magnetis dan kutub magnet.',
      en: 'Drag & Drop and Balloon Pop to test magnetic vs non-magnetic materials and poles.'
    },
    icon: '🧲',
    data: {
      gameTypes: ['Drag & Drop', 'Balloon Pop', 'Kuis Pilihan Ganda'],
      language: 'id',
      topic: 'Gaya Magnet IPAS Kelas 4 SD',
      subTopic: 'Sifat kutub utara & selatan, gaya tarik-menarik dan tolak-menolak, benda feromagnetis vs paramagnetis',
      educationCategory: 'SD',
      gradeClass: 'Kelas 4',
      educationLevel: 'SD Kelas 4',
      targetAge: '9-10 tahun',
      questionCount: 8,
      learningGoals: ['Memahami', 'Menerapkan', 'Menganalisis'],
      visualStyle: '3D Felt Toys Pastel',
      gameFeatures: ['Progress bar / level', 'Suara & efek', 'Animasi feedback', 'Hint / Petunjuk bantuan', 'Bintang / skor'],
      specialInstructions: 'Buat karakter maskot robot magnet kecil bernama "Maggy" yang berekspresi tersenyum saat jawaban benar.',
      targetAI: 'Google AI Studio',
      brandName: 'EduSmart Creator Lab',
      brandNotes: 'Gunakan identitas EduSmart Creator Lab secara konsisten: cute, pastel, bersih, ramah guru dan anak, dengan branding kecil yang elegan pada halaman pembuka.'
    }
  },
  {
    id: 'bahasa-indonesia-sinonim-majas',
    title: {
      id: '📖 Bahasa Indonesia: Sinonim, Antonim & Majas',
      en: '📖 Indonesian: Synonyms, Antonyms & Figures of Speech'
    },
    description: {
      id: 'Matching, Susun Huruf & Isian Kotak Huruf mengasah perbendaharaan kata dan gaya bahasa.',
      en: 'Matching, Word Scramble & Letter Box for vocabulary and figures of speech.'
    },
    icon: '📖',
    data: {
      gameTypes: ['Matching / Menjodohkan', 'Isian Kotak Huruf', 'Susun Huruf (Word Scramble)', 'Kuis Pilihan Ganda'],
      language: 'id',
      topic: 'Sinonim, Antonim & Majas Bahasa Indonesia',
      subTopic: 'Persamaan kata, lawan kata, majas personifikasi dan metafora dalam kalimat cerita',
      educationCategory: 'SD',
      gradeClass: 'Kelas 5',
      educationLevel: 'SD Kelas 5',
      targetAge: '10-11 tahun',
      questionCount: 10,
      learningGoals: ['Mengingat', 'Memahami', 'Literasi & komunikasi'],
      visualStyle: 'Cute Cartoon',
      gameFeatures: ['Progress bar / level', 'Animasi feedback', 'Hint / Petunjuk bantuan', 'Bintang / skor', 'Pembahasan jawaban'],
      specialInstructions: 'Berikan kalimat contoh kontekstual yang dekat dengan kehidupan siswa sehari-hari.',
      targetAI: 'Gemini',
      brandName: 'EduSmart Creator Lab',
      brandNotes: 'Gunakan identitas EduSmart Creator Lab secara konsisten: warna pastel lembut, tipografi ramah anak.'
    }
  },
  {
    id: 'tata-surya-space',
    title: {
      id: '🚀 Tata Surya & Karakteristik Planet',
      en: '🚀 Solar System & Planetary Science'
    },
    description: {
      id: 'Shooting Target & Puzzle menjelajahi 8 planet dengan urutan jarak dari matahari.',
      en: 'Shooting Target & Puzzle exploring all 8 planets and their distance from the sun.'
    },
    icon: '🚀',
    data: {
      gameTypes: ['Shooting Target', 'Puzzle Drag & Drop', 'Benar / Salah'],
      language: 'id',
      topic: 'Tata Surya & Planet',
      subTopic: 'Planet dalam vs planet luar, karakteristik Merkurius hingga Neptunus, rotasi dan revolusi bumi',
      educationCategory: 'SMP',
      gradeClass: 'Kelas 7',
      educationLevel: 'SMP Kelas 7',
      targetAge: '12-13 tahun',
      questionCount: 10,
      learningGoals: ['Mengingat', 'Memahami', 'Menganalisis', 'Memecahkan masalah'],
      visualStyle: 'Space Adventure',
      gameFeatures: ['Progress bar / level', 'Timer opsional', 'Suara & efek', 'Animasi feedback', 'Hint / Petunjuk bantuan', 'Bintang / skor'],
      specialInstructions: 'Tambahkan fakta sains unik ("Tahukah Kamu?") di setiap akhir level tantangan.',
      targetAI: 'Lovable',
      brandName: 'EduSmart Creator Lab',
      brandNotes: 'Gunakan identitas EduSmart Creator Lab secara konsisten.'
    }
  },
  {
    id: 'matematika-pecahan-puzzle',
    title: {
      id: '🍕 Matematika Penjumlahan & Perkalian Ceria',
      en: '🍕 Math Operations: Fun Addition & Multiplication'
    },
    description: {
      id: 'Drag & Drop dan Catch Game untuk operasi hitung matematika cepat dan seru.',
      en: 'Drag & Drop and Catch Game for fun and fast math problem-solving.'
    },
    icon: '🍕',
    data: {
      gameTypes: ['Drag & Drop', 'Catch Game', 'Kuis Pilihan Ganda'],
      language: 'id',
      topic: 'Penjumlahan & Perkalian',
      subTopic: 'Perkalian 1-10 dengan objek visual konkrit dan pembagian dasar',
      educationCategory: 'SD',
      gradeClass: 'Kelas 3',
      educationLevel: 'SD Kelas 3',
      targetAge: '8-9 tahun',
      questionCount: 8,
      learningGoals: ['Memahami', 'Menerapkan', 'Memecahkan masalah'],
      visualStyle: '3D Felt Toys Pastel',
      gameFeatures: ['Progress bar / level', 'Animasi feedback', 'Hint / Petunjuk bantuan', 'Bintang / skor'],
      specialInstructions: 'Tampilkan ilustrasi buah/benda yang dihitung satu per satu jika anak meminta petunjuk.',
      targetAI: 'Claude',
      brandName: 'EduSmart Creator Lab',
      brandNotes: 'Gunakan tema EduSmart Creator Lab.'
    }
  }
];
