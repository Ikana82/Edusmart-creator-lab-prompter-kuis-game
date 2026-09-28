import { Language } from '../types/generator';

export const translations = {
  id: {
    brandSubtitle: 'EduSmart Creator Lab',
    brandTag: 'AI EDUCATIONAL GAME GENERATOR',
    heroTitle: 'Buat Kuis & Game Edukasi Jadi Mudah!',
    heroDesc: 'Rangkai parameter kurikulum, mekanik interaktif, dan gaya visual menjadi prompt AI profesional dalam hitungan detik. Siap digunakan di Google AI Studio, Claude, Lovable, dan Gemini.',
    presetButton: 'Gunakan Template Siap Pakai',
    resetButton: 'Reset Formulir',

    // Product focus banner
    focusBannerTitle: 'Fokus produk ini: Kuis & Game Edukasi',
    focusBannerDesc: 'Workflow ini dibuat khusus untuk menghasilkan game edukasi. Pilih pengaturan di bawah, lalu generate prompt siap pakai.',

    // Sections
    section1Title: 'Jenis Game & Bahasa',
    section1Desc: 'Tentukan mekanik interaktif dan bahasa pengantar yang digunakan siswa.',
    gameTypesLabel: 'Pilih Mekanik Game (Bisa pilih lebih dari satu):',
    languageLabel: 'Bahasa Pengantar Permainan:',
    langOptions: {
      id: 'Bahasa Indonesia 🇮🇩',
      en: 'English 🇬🇧',
      bilingual: 'Bilingual (ID & EN) 🌐'
    },

    section2Title: 'Materi / Tema Pembelajaran',
    section2Desc: 'Topik utama yang akan dipelajari dan diujikan kepada siswa.',
    popularTopicsLabel: 'PILIH MATERI POPULER',
    popularTopicsSub: 'Klik materi populer di bawah untuk mengisi cepat:',
    customTopicHeader: 'KETIK MATERI / TEMA SENDIRI',
    topicInputLabel: 'Judul / Topik Pembelajaran Utama:',
    topicPlaceholder: 'Contoh: Gaya Magnet IPAS Kelas 4 SD',
    subTopicLabel: 'Rincian Materi / Konsep Kunci (Opsional):',
    subTopicPlaceholder: 'Contoh: Sifat kutub utara & selatan, benda magnetis, sifat tarik-menarik',

    section3Title: 'Peserta Didik & Tujuan Pembelajaran',
    section3Desc: 'Parameter ini membantu AI menyesuaikan bahasa, tingkat berpikir, dan tingkat kesulitan.',
    levelLabel: 'JENJANG',
    classLabel: 'KELAS / TINGKATAN',
    ageLabel: 'USIA ANAK',
    agePlaceholder: 'Contoh: 9-10 tahun',
    questionCountLabel: 'JUMLAH SOAL',
    goalsLabel: 'TUJUAN PEMBELAJARAN',

    section4Title: 'Gaya Visual & Pengalaman Bermain',
    section4Desc: 'Pilih tema estetika ramah anak dan elemen interaksi yang menyenangkan.',
    visualStyleLabel: 'Gaya Visual & Seni Grafis:',
    gameFeaturesLabel: 'Fitur & Elemen Permainan:',

    section5Title: 'Target AI & Branding Creator',
    section5Desc: 'Pengaturan arsitektur teknis, platform target AI, dan identitas brand pembuat.',
    targetAILabel: 'Target AI Builder',
    targetAIDesc: 'Pilih platform yang akan menerima prompt produksi. Kamu tetap bisa menyalin prompt ke platform lain.',
    brandLabel: 'Brand atau Creator',
    brandPlaceholder: 'Contoh: EduSmart Creator Lab',
    brandNotesLabel: 'Catatan Branding (Opsional)',
    brandNotesPlaceholder: 'Contoh: Gunakan identitas EduSmart Creator Lab secara konsisten: cute, pastel, bersih, ramah guru dan anak, dengan branding kecil yang elegan pada halaman pembuka.',
    instructionsLabel: 'Instruksi Khusus & Catatan Tambahan (Opsional):',
    instructionsPlaceholder: 'Contoh: Berikan suara narasi ramah anak, pastikan tombol besar dan mudah disentuh, sertakan tombol ulangi kuis jika skor di bawah 70...',

    // Floating bar & stats
    stickyGenerate: '✨ Generate Prompt',
    stickyPromptReady: 'Prompt Siap Dibuat',
    selectedCount: 'mekanik dipilih',
    completeness: 'Kelengkapan',

    // Modal
    modalTitle: '🎉 Prompt Game Edukasi Siap Digunakan!',
    modalSubtitle: 'Salin teks di bawah ini dan tempelkan langsung ke target AI pilihan Anda.',
    copyButton: '📋 Salin Prompt',
    copiedText: 'Tersalin ke Clipboard! ✨',
    downloadButton: '💾 Unduh Prompt (.md)',
    closeButton: '🔄 Buat Ulang / Tutup',
    rawView: 'Teks Biasa',
    formattedView: 'Tampilan Rapi',
    promptLength: 'Karakter',
    wordCount: 'Kata',
    targetTag: 'Target Builder',
    
    // Notifications
    resetConfirm: 'Apakah Anda yakin ingin mengosongkan semua isian formulir?',
    copiedToast: 'Prompt berhasil disalin ke clipboard!',
    fillTopicAlert: 'Silakan isi topik pembelajaran terlebih dahulu sebelum generate prompt!'
  },
  en: {
    brandSubtitle: 'EduSmart Creator Lab',
    brandTag: 'AI EDUCATIONAL GAME GENERATOR',
    heroTitle: 'Create Interactive Educational Games Effortlessly!',
    heroDesc: 'Assemble curriculum parameters, interactive game mechanics, and visual themes into a high-grade AI prompt in seconds. Ready for Google AI Studio, Claude, Lovable, and Gemini.',
    presetButton: 'Use Ready-to-Play Templates',
    resetButton: 'Reset Form',

    // Product focus banner
    focusBannerTitle: 'Product Focus: Educational Quizzes & Games',
    focusBannerDesc: 'This workflow is specifically built to generate educational games. Select settings below, then generate ready-to-use prompts.',

    // Sections
    section1Title: 'Game Types & Language',
    section1Desc: 'Define the interactive mechanics and instructional language for students.',
    gameTypesLabel: 'Select Game Mechanics (Multi-select enabled):',
    languageLabel: 'Instructional Language:',
    langOptions: {
      id: 'Bahasa Indonesia 🇮🇩',
      en: 'English 🇬🇧',
      bilingual: 'Bilingual (ID & EN) 🌐'
    },

    section2Title: 'Learning Material & Topic',
    section2Desc: 'The core syllabus or thematic content to be taught and tested.',
    popularTopicsLabel: 'SELECT POPULAR TOPICS',
    popularTopicsSub: 'Click popular topics below to quick-fill:',
    customTopicHeader: 'TYPE CUSTOM TOPIC / THEME',
    topicInputLabel: 'Main Topic / Subject Title:',
    topicPlaceholder: 'e.g. Magnetic Forces Science Grade 4',
    subTopicLabel: 'Subtopics / Key Concepts (Optional):',
    subTopicPlaceholder: 'e.g. North and south poles, magnetic materials, attraction and repulsion',

    section3Title: 'Target Learners & Pedagogical Goals',
    section3Desc: 'These parameters help AI adapt language, thinking level, and difficulty.',
    levelLabel: 'EDUCATION LEVEL',
    classLabel: 'GRADE / CLASS LEVEL',
    ageLabel: 'TARGET AGE',
    agePlaceholder: 'e.g. 9-10 years old',
    questionCountLabel: 'NUMBER OF QUESTIONS',
    goalsLabel: 'LEARNING OBJECTIVES',

    section4Title: 'Visual Style & Play Experience',
    section4Desc: 'Choose kid-friendly aesthetics and engaging gamification features.',
    visualStyleLabel: 'Visual & Art Style:',
    gameFeaturesLabel: 'Game Features & Mechanics:',

    section5Title: 'Target AI & Creator Branding',
    section5Desc: 'Technical implementation settings, target AI platform, and creator brand identity.',
    targetAILabel: 'Target AI Builder',
    targetAIDesc: 'Choose the platform to receive the production prompt. You can still paste the prompt into any other AI.',
    brandLabel: 'Brand or Creator',
    brandPlaceholder: 'e.g. EduSmart Creator Lab',
    brandNotesLabel: 'Branding Notes (Optional)',
    brandNotesPlaceholder: 'e.g. Consistently apply EduSmart Creator Lab identity: cute, pastel, clean, kid & teacher friendly...',
    instructionsLabel: 'Manual Instructions & Notes (Optional):',
    instructionsPlaceholder: 'e.g. Include voice narration for early readers, make touch buttons large, offer retry mechanism if score is below 70...',

    // Floating bar & stats
    stickyGenerate: '✨ Generate Prompt',
    stickyPromptReady: 'Prompt Ready to Build',
    selectedCount: 'mechanics chosen',
    completeness: 'Completeness',

    // Modal
    modalTitle: '🎉 Educational Game Prompt is Ready!',
    modalSubtitle: 'Copy the text below and paste it directly into your AI builder.',
    copyButton: '📋 Copy Prompt',
    copiedText: 'Copied to Clipboard! ✨',
    downloadButton: '💾 Download (.md)',
    closeButton: '🔄 Re-edit / Close',
    rawView: 'Raw Text',
    formattedView: 'Formatted View',
    promptLength: 'Characters',
    wordCount: 'Words',
    targetTag: 'Target Builder',

    // Notifications
    resetConfirm: 'Are you sure you want to reset all form values?',
    copiedToast: 'Prompt successfully copied to clipboard!',
    fillTopicAlert: 'Please fill in the learning topic before generating the prompt!'
  }
};

export const GAME_TYPE_OPTIONS = [
  { id: 'Drag & Drop', icon: '🧲', labelId: 'Drag & Drop', descId: 'Geser & cocokkan elemen ke zona target' },
  { id: 'Matching / Menjodohkan', icon: '🧩', labelId: 'Matching / Menjodohkan', descId: 'Tarik garis atau hubungkan dua konsep yang cocok' },
  { id: 'Balloon Pop', icon: '🎈', labelId: 'Balloon Pop', descId: 'Pecahkan balon jawaban yang benar sebelum melayang' },
  { id: 'Catch Game', icon: '🧺', labelId: 'Catch Game', descId: 'Tangkap item jawaban yang jatuh ke keranjang' },
  { id: 'Shooting Target', icon: '🎯', labelId: 'Shooting Target', descId: 'Bidik target sasaran dengan jawaban tepat' },
  { id: 'Fishing Game', icon: '🎣', labelId: 'Fishing Game', descId: 'Pancing ikan atau harta berisi kartu edukasi' },
  { id: 'Kuis Pilihan Ganda', icon: '📝', labelId: 'Kuis Pilihan Ganda', descId: 'Pertanyaan interaktif dengan 3-4 opsi pilihan' },
  { id: 'Benar / Salah', icon: '✅', labelId: 'Benar / Salah', descId: 'Tebak kebenaran pernyataan cepat & seru' },
  { id: 'Isian Kotak Huruf', icon: '🔤', labelId: 'Isian Kotak Huruf', descId: 'Lengkapi huruf rumpang pada kotak interaktif' },
  { id: 'Word Search', icon: '🔍', labelId: 'Word Search', descId: 'Temukan kata kunci tersembunyi di kotak huruf' },
  { id: 'Teka-Teki Silang', icon: '✏️', labelId: 'Teka-Teki Silang', descId: 'Isi kotak mendatar & menurun sesuai petunjuk' },
  { id: 'Susun Huruf (Word Scramble)', icon: '🔡', labelId: 'Susun Huruf (Word Scramble)', descId: 'Susun huruf acak menjadi kosa kata yang benar' },
  { id: 'Reveal Picture Grid 3×3', icon: '🖼️', labelId: 'Reveal Picture Grid 3×3', descId: 'Buka ubin misteri setiap kali menjawab benar' },
  { id: 'Memory Flip 5-Level', icon: '🃏', labelId: 'Memory Flip 5-Level', descId: 'Buka dan ingat letak kartu gambar berpasangan' },
  { id: 'Puzzle Drag & Drop', icon: '🧩', labelId: 'Puzzle Drag & Drop', descId: 'Rangkai potongan gambar atau balok susun' },
  { id: 'Coding Detektif Cilik', icon: '💻', labelId: 'Coding Detektif Cilik', descId: 'Susun blok algoritma sederhana maju, belok, ambil' },
  { id: 'Susun Urutan / Daur Hidup', icon: '🔄', labelId: 'Susun Urutan / Daur Hidup', descId: 'Urutkan tahapan metamorfosis, siklus air, atau sejarah' },
  { id: 'Labirin Edukatif', icon: '🌀', labelId: 'Labirin Edukatif', descId: 'Bantu karakter menelusuri labirin menuju jawaban' },
  { id: 'Quiz Adventure', icon: '🗺️', labelId: 'Quiz Adventure', descId: 'Petualangan pulau / peta level menjawab rintangan' },
  { id: 'Wheel of Questions', icon: '🎡', labelId: 'Wheel of Questions', descId: 'Putar roda keberuntungan untuk memilih soal' },
  { id: 'Escape Room Edukatif', icon: '🗝️', labelId: 'Escape Room Edukatif', descId: 'Pecahkan kode teka-teki untuk membuka gembok pintu' },
  { id: 'Tebak Gambar', icon: '👀', labelId: 'Tebak Gambar', descId: 'Tebak objek dari siluet, bagian dekat, atau bayangan' },
];

export const POPULAR_TOPICS = [
  { topic: 'Belanja Pasar Ceria', icon: '🛒', subTopic: 'Uang kembalian, berhitung belanjaan buah & sayur' },
  { topic: 'Petualangan Hewan Lapar', icon: '🦁', subTopic: 'Karnivora, herbivora, omnivora dan makanannya' },
  { topic: 'Buah & Sayur Sehat', icon: '🍎', subTopic: 'Vitamin, serat, manfaat untuk kesehatan tubuh' },
  { topic: 'Mengenal Warna & Bentuk', icon: '🎨', subTopic: 'Bentuk 2D lingkaran segitiga, pencampuran warna primer' },
  { topic: 'Ekosistem & Rantai Makanan', icon: '🌿', subTopic: 'Produsen, konsumen 1, konsumen 2, dekomposer' },
  { topic: 'Tata Surya & Planet', icon: '🪐', subTopic: 'Urutan planet, orbit, matahari, asteroid dan komet' },
  { topic: 'Energi Terbarukan & Bumi', icon: '⚡', subTopic: 'Tenaga surya, angin, air, hemat energi listrik' },
  { topic: 'Hewan & Habitatnya', icon: '🐾', subTopic: 'Hewan darat, air, amfibi, kutub dan hutan hujan' },
  { topic: 'Anatomi Tubuh & Indra', icon: '🧍', subTopic: 'Panca indra manusia, fungsi mata hidung telinga' },
  { topic: 'Siklus Air & Hujan', icon: '💧', subTopic: 'Evaporasi, kondensasi, presipitasi, infiltrasi' },
  { topic: 'Eksperimen Asam Basa Lab', icon: '🧪', subTopic: 'Lakmus merah/biru, pH asam manis basa garam' },
  { topic: 'Penjumlahan & Perkalian', icon: '🔢', subTopic: 'Operasi hitung matematika cepat dan menyenangkan' },
  { topic: 'Geometri & Bangun Datar', icon: '📐', subTopic: 'Keliling, luas, simetri lipat, sudut siku-siku' },
  { topic: 'Regresi Linier & Statistik', icon: '📈', subTopic: 'Mean, median, modus, grafik diagram batang' },
  { topic: 'Detektif Cilik (Algoritma)', icon: '🔎', subTopic: 'Pola berpikir komputasional, rute langkah terpendek' },
  { topic: 'Literasi Uang & Belanja', icon: '🪙', subTopic: 'Mengenal pecahan rupiah, menabung, hemat dan cerdas' },
  { topic: 'English Vocabulary & Verbs', icon: '🇬🇧', subTopic: 'Daily actions, school objects, feelings and colors' },
  { topic: 'Sinonim & Antonim Kata', icon: '🇮🇩', subTopic: 'Persamaan kata (sinonim) & lawan kata (antonim) Bahasa Indonesia' },
  { topic: 'Majas & Gaya Bahasa', icon: '📖', subTopic: 'Majas personifikasi, metafora, hiperbola, asosiasi' },
  { topic: 'Geografi Nusantara & Pulau', icon: '🗺️', subTopic: 'Pulau-pulau besar Indonesia, selat, suku dan budaya' },
  { topic: 'Garuda Pancasila & PPKn', icon: '🇮🇩', subTopic: 'Simbol 5 sila Pancasila dan penerapan nilai luhur' },
  { topic: 'Huruf Hijaiyah & Harakat', icon: '🌙', subTopic: 'Fathah, kasrah, dhammah, tanwin, dan huruf sambung' },
  { topic: 'Asmaul Husna 99 Nama', icon: '⭐', subTopic: 'Arti dan teladan 99 nama baik Allah SWT' },
  { topic: 'Gaya Magnet IPAS Kelas 4 SD', icon: '🧲', subTopic: 'Kutub magnet, tolak menolak, tarik menarik, feromagnetik' }
];

export const EDUCATION_CATEGORIES = [
  {
    id: 'TK',
    label: 'TK / PAUD',
    fullName: 'TK (Taman Kanak-Kanak / PAUD)',
    classes: [
      { id: 'TK A', label: 'TK A', age: '4-5 tahun' },
      { id: 'TK B', label: 'TK B', age: '5-6 tahun' },
    ]
  },
  {
    id: 'SD',
    label: 'SD (Sekolah Dasar)',
    fullName: 'SD (Sekolah Dasar)',
    classes: [
      { id: 'Kelas 1', label: 'Kelas 1', age: '6-7 tahun' },
      { id: 'Kelas 2', label: 'Kelas 2', age: '7-8 tahun' },
      { id: 'Kelas 3', label: 'Kelas 3', age: '8-9 tahun' },
      { id: 'Kelas 4', label: 'Kelas 4', age: '9-10 tahun' },
      { id: 'Kelas 5', label: 'Kelas 5', age: '10-11 tahun' },
      { id: 'Kelas 6', label: 'Kelas 6', age: '11-12 tahun' },
    ]
  },
  {
    id: 'SMP',
    label: 'SMP (Sekolah Menengah Pertama)',
    fullName: 'SMP (Sekolah Menengah Pertama)',
    classes: [
      { id: 'Kelas 7', label: 'Kelas 7', age: '12-13 tahun' },
      { id: 'Kelas 8', label: 'Kelas 8', age: '13-14 tahun' },
      { id: 'Kelas 9', label: 'Kelas 9', age: '14-15 tahun' },
    ]
  },
  {
    id: 'MTs',
    label: 'MTs (Madrasah Tsanawiyah)',
    fullName: 'MTs (Madrasah Tsanawiyah)',
    classes: [
      { id: 'Kelas 7', label: 'Kelas 7', age: '12-13 tahun' },
      { id: 'Kelas 8', label: 'Kelas 8', age: '13-14 tahun' },
      { id: 'Kelas 9', label: 'Kelas 9', age: '14-15 tahun' },
    ]
  },
  {
    id: 'SMA',
    label: 'SMA (Sekolah Menengah Atas)',
    fullName: 'SMA (Sekolah Menengah Atas)',
    classes: [
      { id: 'Kelas 10', label: 'Kelas 10', age: '15-16 tahun' },
      { id: 'Kelas 11', label: 'Kelas 11', age: '16-17 tahun' },
      { id: 'Kelas 12', label: 'Kelas 12', age: '17-18 tahun' },
    ]
  },
  {
    id: 'MA',
    label: 'MA (Madrasah Aliyah)',
    fullName: 'MA (Madrasah Aliyah)',
    classes: [
      { id: 'Kelas 10', label: 'Kelas 10', age: '15-16 tahun' },
      { id: 'Kelas 11', label: 'Kelas 11', age: '16-17 tahun' },
      { id: 'Kelas 12', label: 'Kelas 12', age: '17-18 tahun' },
    ]
  },
  {
    id: 'SMK',
    label: 'SMK (Sekolah Menengah Kejuruan)',
    fullName: 'SMK (Sekolah Menengah Kejuruan)',
    classes: [
      { id: 'Kelas 10', label: 'Kelas 10', age: '15-16 tahun' },
      { id: 'Kelas 11', label: 'Kelas 11', age: '16-17 tahun' },
      { id: 'Kelas 12', label: 'Kelas 12', age: '17-18 tahun' },
    ]
  },
  {
    id: 'Umum',
    label: 'Perguruan Tinggi / Umum',
    fullName: 'Perguruan Tinggi / Umum',
    classes: [
      { id: 'Mahasiswa', label: 'Mahasiswa / Remaja', age: '18-22 tahun' },
      { id: 'Umum', label: 'Umum / Dewasa', age: 'Semua usia' },
    ]
  }
];

export const LEARNING_GOALS = [
  { 
    id: 'Mengingat', 
    label: 'Mengingat', 
    labelEn: 'Remembering', 
    descId: 'Mengenali & mengingat fakta, kosakata, atau definisi dasar (C1)', 
    descEn: 'Recall facts, basic vocabulary, and essential definitions (C1)' 
  },
  { 
    id: 'Memahami', 
    label: 'Memahami', 
    labelEn: 'Understanding', 
    descId: 'Menjelaskan ide materi dengan pemahaman sendiri (C2)', 
    descEn: 'Explain concepts and core ideas in student\'s own words (C2)' 
  },
  { 
    id: 'Menerapkan', 
    label: 'Menerapkan', 
    labelEn: 'Applying', 
    descId: 'Menggunakan pengetahuan dalam skenario tantangan baru (C3)', 
    descEn: 'Execute knowledge in interactive challenges or situations (C3)' 
  },
  { 
    id: 'Menganalisis', 
    label: 'Menganalisis', 
    labelEn: 'Analyzing', 
    descId: 'Menemukan pola, memilah hubungan sebab-akibat (C4)', 
    descEn: 'Distinguish patterns, categorize, and explore cause-and-effect (C4)' 
  },
  { 
    id: 'Memecahkan masalah', 
    label: 'Memecahkan masalah', 
    labelEn: 'Problem Solving', 
    descId: 'Menemukan solusi logis bertahap dari skenario soal', 
    descEn: 'Step-by-step logical reasoning to solve game obstacles' 
  },
  { 
    id: 'Literasi & komunikasi', 
    label: 'Literasi & komunikasi', 
    labelEn: 'Literacy & Communication', 
    descId: 'Melatih pemahaman teks, petunjuk bacaan, & kosakata', 
    descEn: 'Reading comprehension, interpreting instructions, and language' 
  },
  { 
    id: 'Mengevaluasi', 
    label: 'Mengevaluasi', 
    labelEn: 'Evaluating', 
    descId: 'Menilai kebenaran, memeriksa fakta, & membuat kesimpulan (C5)', 
    descEn: 'Appraise validity, verify facts, and make sound judgments (C5)' 
  },
  { 
    id: 'Mencipta / Berkreasi', 
    label: 'Mencipta / Berkreasi', 
    labelEn: 'Creating / Synthesizing', 
    descId: 'Merangkai ide baru atau menyusun struktur solusi kreatif (C6)', 
    descEn: 'Synthesize ideas and construct creative original solutions (C6)' 
  },
  { 
    id: 'Numerasi & Logika', 
    label: 'Numerasi & Logika', 
    labelEn: 'Numeracy & Logic', 
    descId: 'Melatih kemampuan berhitung, data, pola, & logika kuantitatif', 
    descEn: 'Numerical fluency, math patterns, and quantitative logic' 
  },
];

export const VISUAL_STYLES = [
  { id: '3D Felt Toys Pastel', icon: '🧸', labelId: '3D Felt Toys Pastel', descId: 'Tekstur flanel/rajut imut, warna pastel lembut dan hangat', labelEn: '3D Felt Toys Pastel', descEn: 'Soft felt toy textures, warm pastel palette' },
  { id: 'Cute Cartoon', icon: '🎨', labelId: 'Cute Cartoon Ceria', descId: 'Gaya kartun warna-warni bergaris tebal ramah anak', labelEn: 'Cute Cartoon', descEn: 'Vibrant comic lines, cheerful expressive characters' },
  { id: 'Flat Illustration', icon: '📐', labelId: 'Flat Illustration Minimalis', descId: 'Bentuk geometris bersih, palet modern dan rapi', labelEn: 'Flat Illustration', descEn: 'Clean geometric shapes, modern uncluttered layout' },
  { id: 'Nature Kids', icon: '🌿', labelId: 'Nature Kids & Flora', descId: 'Nuansa alam hijau sage, daun, hewan dan elemen bumi', labelEn: 'Nature Kids & Flora', descEn: 'Sage green, flora, wildlife and earthy gentle tones' },
  { id: 'Space Adventure', icon: '🚀', labelId: 'Space Adventure Galaxy', descId: 'Bintang kartun, planet lucu, latar belakang kosmik cerah', labelEn: 'Space Adventure', descEn: 'Playful stars, smiling planets, bright cosmic theme' },
  { id: 'Pixel Retro Arcade', icon: '👾', labelId: 'Pixel Retro Arcade', descId: 'Gaya 8-bit retro nostalgia namun tetap ramah anak', labelEn: 'Pixel Retro Arcade', descEn: 'Kid-friendly 8-bit retro aesthetic with bright tones' }
];

export const GAME_FEATURES = [
  { id: 'Progress bar / level', icon: '📊', labelId: 'Progress bar / level' },
  { id: 'Timer opsional', icon: '⏱️', labelId: 'Timer opsional' },
  { id: 'Suara & efek', icon: '📢', labelId: 'Suara & efek' },
  { id: 'Animasi feedback', icon: '✨', labelId: 'Animasi feedback' },
  { id: 'Hint / Petunjuk bantuan', icon: '💡', labelId: 'Hint / Petunjuk bantuan' },
  { id: 'Bintang / skor', icon: '⭐', labelId: 'Sistem bintang / skor' },
  { id: 'Pembahasan jawaban', icon: '📝', labelId: 'Pembahasan jawaban edukatif' },
];

export const TARGET_AI_BUILDERS = [
  { id: 'Google AI Studio', tag: 'Google AI Studio' },
  { id: 'Gemini', tag: 'Gemini' },
  { id: 'Lovable', tag: 'Lovable' },
  { id: 'Claude', tag: 'Claude' },
  { id: 'Canva', tag: 'Canva' },
  { id: 'Lainnya', tag: 'Lainnya' },
];
