import { GameFormData } from '../types/generator';

export function generateEducationalGamePrompt(data: GameFormData): string {
  const languageTitle = 
    data.language === 'id' 
      ? 'Bahasa Indonesia (Ramah Anak, Jelas, & Edukatif)' 
      : data.language === 'en' 
        ? 'English (Kid-Friendly, Clear & Engaging)' 
        : 'Bilingual (Bahasa Indonesia & English with dual labels/audio cues)';

  // Format mechanics details
  const mechanicsDescriptions: Record<string, string> = {
    'Drag & Drop': '- **Mekanik Drag & Drop**: Pemain menggeser kartu/objek ilustrasi dari area sumber lalu melepaskannya ke dalam kotak kategori atau slot target yang tepat dengan animasi snap-in magnetis.',
    'Matching / Menjodohkan': '- **Mekanik Matching / Menjodohkan**: Pemain menghubungkan dua kartu atau menarik garis interaktif antara konsep sebelah kiri dan pasangan yang sesuai di sebelah kanan.',
    'Matching': '- **Mekanik Matching / Menjodohkan**: Pemain menghubungkan dua kartu atau menarik garis interaktif antara dua konsep yang cocok.',
    'Balloon Pop': '- **Mekanik Balloon Pop**: Balon warna-warni melayang ke atas membawa opsi jawaban; pemain harus mengetuk/mengklik balon yang berisi jawaban tepat sebelum meletus atau melayang keluar layar.',
    'Catch Game': '- **Mekanik Catch Game**: Pemain menggerakkan wadah/keranjang (kiri-kanan) untuk menangkap item jawaban yang benar yang jatuh perlahan dari atas, sambil menghindari jebakan/jawaban salah.',
    'Shooting Target': '- **Mekanik Shooting Target**: Sasaran lingkaran berputar atau bergerak; pemain mengarahkan kursor/jari dan membidik sasaran dengan fakta/solusi yang benar.',
    'Fishing Game': '- **Mekanik Fishing Game**: Umpan pancing diturunkan untuk menarik kartu soal bertema ikan atau peti harta karun bawah laut yang membuka tantangan baru.',
    'Kuis Pilihan Ganda': '- **Mekanik Kuis Pilihan Ganda**: Soal interaktif dilengkapi 3-4 kartu opsi tombol dengan efek hover membal (bouncy), ikon lucu, dan audio feedback instan.',
    'Benar / Salah': '- **Mekanik Benar / Salah**: Kartu pernyataan disajikan cepat dengan tombol jempol ke atas (Benar) dan jempol ke bawah (Salah) untuk menguji pemahaman konsep.',
    'Benar/Salah': '- **Mekanik Benar / Salah**: Kartu pernyataan disajikan cepat dengan tombol Benar dan Salah.',
    'Isian Kotak Huruf': '- **Mekanik Isian Kotak Huruf**: Kotak huruf rumpang di mana anak melengkapi huruf yang hilang untuk membentuk kata konsep pembelajaran.',
    'Word Search': '- **Mekanik Word Search**: Kotak matriks huruf di mana pemain menyeret jari/mouse untuk menandai kata kunci sains/istilah yang tersembunyi secara mendatar, menurun, atau diagonal.',
    'Teka-Teki Silang': '- **Mekanik Teka-Teki Silang**: Grid kotak interaktif dengan petunjuk nomor mendatar & menurun, dilengkapi keyboard virtual ramah anak.',
    'Susun Huruf (Word Scramble)': '- **Mekanik Susun Huruf (Word Scramble)**: Huruf-huruf diacak dan pemain menyusunnya kembali menjadi istilah yang tepat dengan animasi sentuh halus.',
    'Reveal Picture Grid 3×3': '- **Mekanik Reveal Picture Grid 3×3**: Ubin misteri 3×3 yang terbuka satu per satu setiap kali menjawab pertanyaan dengan benar hingga mengungkap gambar utuh.',
    'Memory Flip 5-Level': '- **Mekanik Memory Flip 5-Level**: Kartu tertutup yang dibalik untuk mencari pasangan gambar/definisi yang sama dengan tingkatan kesulitan bertahap.',
    'Puzzle Drag & Drop': '- **Mekanik Puzzle Drag & Drop**: Potongan gambar konsep atau diagram yang disusun kembali pada bingkai yang tepat.',
    'Coding Detektif Cilik': '- **Mekanik Coding Detektif Cilik**: Blok perintah logika visual (maju, belok kanan, belok kiri, lompat) untuk memandu karakter menyelesaikan rute materi.',
    'Susun Urutan / Daur Hidup': '- **Mekanik Susun Urutan / Daur Hidup**: Pemain menyusun urutan kronologis atau siklus alami (misal: siklus air, daur hidup hewan, tahapan sejarah) dari awal hingga akhir.',
    'Labirin Edukatif': '- **Mekanik Labirin Edukatif**: Menavigasi karakter melewati jalan labirin sambil mengumpulkan kunci jawaban yang sesuai dengan soal tantangan.',
    'Quiz Adventure': '- **Mekanik Quiz Adventure**: Peta petualangan berpulau/berlevel di mana setiap pos rintangan berisi pertanyaan materi berjenjang.',
    'Wheel of Questions': '- **Mekanik Wheel of Questions**: Roda putar warna-warni yang berputar dan berhenti di kategori soal acak berhadiah poin ganda.',
    'Escape Room Edukatif': '- **Mekanik Escape Room Edukatif**: Memecahkan teka-teki logika materi untuk mendapatkan digit kode angka pembuka pintu rahasia.',
    'Tebak Gambar': '- **Mekanik Tebak Gambar**: Menampilkan siluet atau petunjuk visual bertahap dari suatu objek sains/sejarah untuk ditebak namanya oleh anak.'
  };

  const selectedMechanicsText = data.gameTypes.length > 0
    ? data.gameTypes.map(type => mechanicsDescriptions[type] || `- **${type}**: Mekanik interaktif disesuaikan dengan kurikulum anak.`).join('\n')
    : '- **Kuis Interaktif Interaktif**: Permainan kuis responsif berbasis kartu edukasi.';

  // Target AI implementation technical instructions
  const aiTechSpecs: Record<string, string> = {
    'Google AI Studio': `### REKOMENDASI IMPLEMENTASI (GOOGLE AI STUDIO):
- Buat Single Page Application (SPA) utuh dan langsung jalan (zero external runtime dependencies).
- Gunakan React 19 + TypeScript + Tailwind CSS modern.
- Seluruh state permainan (skor, level index, timer, nyawa/kesempatan, animasi feedback) dikelola di client state.
- Sediakan efek suara sintetis web audio API (beeps, success chord, pop sound) agar mandiri tanpa file audio eksternal yang rentan 404.
- Terapkan animasi CSS/Tailwind dengan transisi membal lembut dan selebrasi visual confetti.`,

    'Gemini': `### REKOMENDASI IMPLEMENTASI (GEMINI WEB APP PROMPT):
- Tuliskan kode lengkap HTML5, CSS3, dan JavaScript murni atau React Component yang terstruktur rapi.
- Buat tata letak mobile-responsive (optimal di layar sentuh tablet/smartphone dan desktop).
- Pisahkan logika data pertanyaan (JSON array) dari komponen antarmuka agar mudah disunting oleh guru.`,

    'Lovable': `### REKOMENDASI IMPLEMENTASI (LOVABLE AI):
- Buat komponen modular Vite + React + TypeScript dengan Lucide Icons dan Tailwind CSS.
- Terapkan desain komponen berbasis Card, Button, dan Progress bar dengan sudut rounded-3xl ramah anak.
- Pastikan interaksi drag/touch bekerja mulus menggunakan pointer events standar.`,

    'Claude': `### REKOMENDASI IMPLEMENTASI (CLAUDE ARTIFACTS):
- Hasilkan single-file React component yang mandiri, elegan, dan siap dijalankan langsung di Claude Artifacts.
- Gunakan library Lucide-React untuk ikon dan Tailwind CSS untuk styling.
- Pastikan tidak ada dependensi eksternal yang memerlukan instalasi server backend.`,

    'Canva': `### REKOMENDASI IMPLEMENTASI (CANVA INTERACTIVE / WIDGET):
- Rancang antarmuka kuis interaktif yang dapat disematkan (embeddable) dengan ukuran rasio 16:9 atau 4:3.
- Buat tombol berukuran besar dengan kontras tinggi yang ramah untuk proyektor kelas atau papan tulis interaktif.`,

    'v0 by Vercel': `### REKOMENDASI IMPLEMENTASI (v0.DEV):
- Gunakan Next.js React component dengan Tailwind CSS dan primitif shadcn/ui.
- Manfaatkan komponen Dialog, Progress, Card, Badge, dan Button dengan varian pastel ramah anak.`
  };

  const techSpec = aiTechSpecs[data.targetAI] || `### REKOMENDASI IMPLEMENTASI:
- Buat kode aplikasi interaktif yang bersih, responsif, modular, dan siap dijalankan langsung.`;

  // Sample dummy questions customized to the topic and grade
  const dummyQuestions = generateDummySample(data);
  const brandName = data.brandName?.trim() || 'EduSmart Creator Lab';
  const visualStyle = data.visualStyle?.trim() || '3D Felt Toys Pastel';

  return `# PROMPT SPESIFIKASI: GAME & KUIS EDUKASI INTERAKTIF RAMAH ANAK
Target Builder: ${data.targetAI}
Brand / Creator: ${brandName}
${data.brandNotes ? `Catatan Branding: ${data.brandNotes}\n` : ''}Dibuat Melalui: AI Educational Game Generator

---

BRAND IDENTITY:
Display the text "${brandName}" as a simple creator credit/badge.

IMPORTANT:
"${brandName}" is ONLY a text brand name.
Do NOT search for, import, or use a Canva Brand Kit.
Do NOT request a Brand Kit.
Do NOT require a brand website.
Do NOT automatically import logos, colors, fonts, or other brand assets.

Use the visual style specified in this prompt:
${visualStyle}, warm pastel colors, rounded UI, child-friendly typography.

---

## 📌 PERAN & INSTRUKSI UTAMA
Bertindaklah sebagai Senior Frontend Game Developer & Ahli Pedagogi Edukasi Anak (EduTech Specialist). Tugas Anda adalah merancang dan membuat kode aplikasi game edukasi interaktif yang menyenangkan, intuitif, dan ramah anak berdasarkan spesifikasi detail di bawah ini.

---

## A. SPESIFIKASI UTAMA
1. **Topik / Materi Pembelajaran**: ${data.topic || 'Materi Edukasi Interaktif'}
${data.subTopic ? `2. **Subtopik / Konsep Kunci**: ${data.subTopic}\n` : ''}3. **Jenjang & Tingkatan Kelas**: ${data.educationLevel} (${data.educationCategory} ${data.gradeClass})
4. **Target Usia Anak**: ${data.targetAge || 'Rentang usia sekolah'}
5. **Bahasa Pengantar**: ${languageTitle}
6. **Jumlah Soal / Tantangan**: ${data.questionCount} Soal/Babak bertingkat
7. **Platform Target AI**: ${data.targetAI}
8. **Identitas Brand / Creator**: ${data.brandName || 'EduSmart Creator Lab'}

---

## B. MEKANIK & JENIS GAME EDUKASI
Gabungkan mekanik permainan berikut agar anak tidak cepat bosan dan terlibat aktif secara multisensori:
${selectedMechanicsText}

---

## C. STRUKTUR & ALUR PERMAINAN (GAMEPLAY LOOP)
1. **Layar Awal (Start Screen / Welcome)**:
   - Judul game bertema: "${data.topic || 'Petualangan Belajar'}".
   - Branding identitas: Disematkan badge elegan "${data.brandName || 'EduSmart Creator Lab'}" di bagian header.
   - Maskot karakter lucu yang menyapa anak dengan balon dialog bersahabat.
   - Tombol besar "Mulai Petualangan! 🎮" dengan efek hover/pulse mengundang klik.

2. **Layar Permainan (Gameplay Screen)**:
   - **Header Atas**: Indikator Level / Soal berjalan (Contoh: "Tantangan 3 dari ${data.questionCount}"), Skor bintang terkumpul (⭐), dan ${data.gameFeatures.includes('Timer opsional') ? 'Timer visual (dapat dipause agar santai)' : 'Indikator progres santai tanpa tekanan batas waktu'}.
   - **Tombol Bantuan (Hint)**: ${data.gameFeatures.some(f => f.toLowerCase().includes('hint')) ? 'Sediakan tombol lampu bohlam (💡 Hint) yang memberikan petunjuk clue cerdas secara interaktif saat anak kebingungan.' : 'Dukungan visual petunjuk terintegrasi.'}
   - **Panggung Utama (Play Stage)**: Area interaktif utama untuk materi soal (grafis jelas, font besar, kontras warna ramah mata).
   - **Zona Interaksi**: Tombol opsi, kartu drag & drop, atau elemen tangkap yang berukuran besar (touch-friendly min 48px).

3. **Umpan Balik Instan (Instant Feedback)**:
   - **Bila Benar**: Efek partikel/selebrasi kecil, karakter tersenyum gembira, suara ding/chime bernada tinggi menyenangkan, dan penambahan skor bintang (+100 poin).
   - **Bila Belum Tepat**: Respon positif dan membesarkan hati (bukan suara buzzer mengecewakan), karakter memberi semangat "Ayo coba sekali lagi! 💪", serta penjelasan edukatif singkat tentang konsep yang benar.

4. **Layar Kemenangan & Evaluasi (Victory / Results Screen)**:
   - Selebrasi confetti warna-warni.
   - Perolehan Bintang (1 - 3 Bintang tergantung skor).
   - Pesan apresiasi positif yang membangun kepercayaan diri anak.
   - Ringkasan materi yang telah dipelajari ("Hebat! Hari ini kamu sudah menguasai ${data.topic}").
   - Watermark / credit rapi dari: ${data.brandName || 'EduSmart Creator Lab'}.
   - Tombol "Main Lagi 🔄" dan "Tinjau Kunci Jawaban 📖".

---

## D. TUJUAN PEDAGOGIS & CAPAIAN PEMBELAJARAN
Game ini dirancang untuk mencapai capaian kognitif berdasarkan Taksonomi Pembelajaran:
${data.learningGoals.map(goal => `- **Capaian [${goal}]**: Mengasah kemampuan anak untuk ${getPedagogicalDetail(goal, data.topic)}.`).join('\n')}

---

## E. GAYA VISUAL & PENGALAMAN BERMAIN
- **Tema Visual**: **${data.visualStyle}**
- **Karakteristik Estetika**:
  - Warna-warna pastel hangat, ceria, dan menenangkan (hindari warna neon yang menyilaukan mata anak).
  - Sudut membulat lebar (rounded-2xl / rounded-3xl) pada setiap kartu dan tombol untuk memberi rasa aman dan bersahabat.
  - Tipografi sans-serif modern yang bulat, tebal, dan sangat mudah dibaca (disarankan Plus Jakarta Sans / Quicksand / Nunito).
  - Elemen visual berukuran cukup besar dengan jarak padding yang lega agar mudah disentuh pada layar tablet atau smartphone.

---

## F. FITUR TERPILIH & SISTEM REWARD
${data.gameFeatures.map(feat => `- **${feat}**: Diterapkan secara mulus dalam antarmuka untuk meningkatkan motivasi belajar anak.`).join('\n')}

---

## G. REKOMENDASI TEKNIS IMPLEMENTASI
${techSpec}

---

## H. CONTOH DUMMY DATA SOAL (${data.questionCount} SOAL TEMA "${data.topic.toUpperCase()}")
Berikut adalah struktur data JSON siap pakai yang harus diintegrasikan ke dalam kode game:

\`\`\`json
${JSON.stringify(dummyQuestions, null, 2)}
\`\`\`

---

## I. INSTRUKSI KHUSUS & BRAND IDENTITY
- **Brand Credit**: Tampilkan teks "${brandName}" sebagai credit/badge kreator sederhana.
- **PENTING (Tanpa Brand Kit/Website)**: "${brandName}" adalah nama merek teks murni. Jangan meminta/mencari Canva Brand Kit, website resmi, atau file logo eksternal. Gunakan aset visual bawaan styling prompt ini.
- **Konsistensi Visual**: ${visualStyle}, warm pastel colors, rounded UI, child-friendly typography.
${data.brandNotes ? `- **Catatan Branding Tambahan**: ${data.brandNotes}\n` : ''}${data.specialInstructions ? `- **Instruksi Khusus Tambahan**: ${data.specialInstructions}\n` : ''}- Pastikan navigasi bebas hambatan, tidak ada tombol yang rusak atau tidak responsif, dan teks instruksi menggunakan kalimat positif yang mudah dipahami anak.

---
*Silakan buatkan kode aplikasi game edukasi ini secara lengkap, teruji, dan siap dijalankan sekarang juga!*`;
}

function getPedagogicalDetail(goal: string, topic: string): string {
  const map: Record<string, string> = {
    'Mengingat': `mengingat kembali istilah, definisi, dan fakta-fakta kunci seputar ${topic}`,
    'Memahami': `memahami konsep esensial, menjelaskan makna, dan membedakan atribut terkait ${topic}`,
    'Menerapkan': `mengaplikasikan pengetahuan materi ${topic} ke dalam contoh kasus nyata`,
    'Menganalisis': `membedakan komponen, mengidentifikasi pola, dan menemukan hubungan sebab-akibat pada ${topic}`,
    'Memecahkan masalah': `menemukan solusi logis saat dihadapkan pada rintangan teka-teki ${topic}`,
    'Memecahkan Masalah': `menemukan solusi logis saat dihadapkan pada rintangan teka-teki ${topic}`,
    'Literasi & komunikasi': `mengembangkan kemampuan membaca kritis dan mengartikulasikan ide seputar ${topic}`,
    'Literasi & Numerasi': `mengembangkan kemampuan membaca kritis dan ketepatan berhitung melalui konteks ${topic}`
  };
  return map[goal] || `menguasai materi ${topic} dengan percaya diri dan bermakna`;
}

function generateDummySample(data: GameFormData) {
  const isEn = data.language === 'en';
  
  if (data.topic.toLowerCase().includes('magnet')) {
    return [
      {
        id: 1,
        mechanic: 'Drag & Drop',
        question: isEn 
          ? 'Sort the following objects into the correct category!' 
          : 'Kelompokkan benda-benda berikut ke dalam kategori yang tepat!',
        categories: isEn ? ['Magnetic Objects', 'Non-Magnetic Objects'] : ['Benda Magnetis', 'Benda Non-Magnetis'],
        items: [
          { name: isEn ? 'Iron Nail' : 'Paku Besi', category: isEn ? 'Magnetic Objects' : 'Benda Magnetis', icon: '🔩' },
          { name: isEn ? 'Wooden Ruler' : 'Penggaris Kayu', category: isEn ? 'Non-Magnetic Objects' : 'Benda Non-Magnetis', icon: '📏' },
          { name: isEn ? 'Paper Clip' : 'Klip Kertas Logam', category: isEn ? 'Magnetic Objects' : 'Benda Magnetis', icon: '📎' },
          { name: isEn ? 'Plastic Eraser' : 'Penghapus Karet', category: isEn ? 'Non-Magnetic Objects' : 'Benda Non-Magnetis', icon: '🧼' }
        ],
        hint: isEn ? 'Look for items containing metal, iron or steel!' : 'Cari benda yang terbuat dari logam besi atau baja!',
        explanation: isEn 
          ? 'Objects made of iron or steel are magnetic and can be attracted by a magnet.' 
          : 'Benda berbahan besi atau baja dapat ditarik oleh magnet (feromagnetik).'
      },
      {
        id: 2,
        mechanic: 'Matching / Menjodohkan',
        question: isEn 
          ? 'What happens when two magnet poles face each other?' 
          : 'Pasangkan sifat kutub magnet dengan akibat yang terjadi!',
        pairs: [
          { itemA: isEn ? 'North Pole + North Pole' : 'Kutub Utara + Kutub Utara', itemB: isEn ? 'Repel each other' : 'Saling Tolak-Menolak' },
          { itemA: isEn ? 'North Pole + South Pole' : 'Kutub Utara + Kutub Selatan', itemB: isEn ? 'Attract each other' : 'Saling Tarik-Menarik' },
          { itemA: isEn ? 'South Pole + South Pole' : 'Kutub Selatan + Kutub Selatan', itemB: isEn ? 'Repel each other' : 'Saling Tolak-Menolak' }
        ],
        hint: isEn ? 'Poles of the same name push away!' : 'Kutub yang senama selalu saling menjauh!',
        explanation: isEn 
          ? 'Like poles repel each other, while opposite poles attract.' 
          : 'Kutub yang senama akan tolak-menolak, sedangkan kutub tidak senama akan saling tarik-menarik.'
      },
      {
        id: 3,
        mechanic: 'Balloon Pop',
        question: isEn 
          ? "Pop the balloon containing the name of Earth's strongest natural magnetic rock!" 
          : 'Pecahkan balon yang bertuliskan nama batuan alam yang memiliki sifat magnet!',
        options: isEn ? ['Lodestone / Magnetit', 'Granite', 'Limestone', 'Pumice'] : ['Magnetit (Lodestone)', 'Batu Granit', 'Batu Kapur', 'Batu Apung'],
        correctAnswer: isEn ? 'Lodestone / Magnetit' : 'Magnetit (Lodestone)',
        hint: isEn ? 'It starts with letter M or L!' : 'Namanya berawalan huruf M dan sering disebut batu magnet alam!',
        explanation: isEn 
          ? 'Lodestone (magnetite) is a naturally magnetized piece of the mineral magnetite.' 
          : 'Batuan magnetit adalah mineral alami yang memiliki medan magnet permanen di alam.'
      }
    ];
  }

  // Generic fallback
  return [
    {
      id: 1,
      mechanic: data.gameTypes[0] || 'Kuis Pilihan Ganda',
      question: isEn 
        ? `What is the core concept of ${data.topic || 'this lesson'}?` 
        : `Manakah konsep utama yang tepat mengenai ${data.topic || 'materi ini'}?`,
      options: isEn 
        ? ['Key foundational concept A (Correct)', 'Distractor concept B', 'Distractor concept C', 'Distractor concept D']
        : ['Konsep dasar esensial A (Benar)', 'Pilihan pengecoh B', 'Pilihan pengecoh C', 'Pilihan pengecoh D'],
      correctAnswerIndex: 0,
      hint: isEn ? 'Pay attention to the core rule taught in the lesson.' : 'Perhatikan aturan dasar yang dibahas dalam materi.',
      explanation: isEn 
        ? `Great job! Understanding the core principle of ${data.topic} helps you master the stage.` 
        : `Tepat sekali! Memahami prinsip esensial materi ini adalah langkah awal yang sangat baik.`
    },
    {
      id: 2,
      mechanic: data.gameTypes[1] || 'Matching / Menjodohkan',
      question: isEn 
        ? `Match each term of ${data.topic} to its correct definition:` 
        : `Pasangkan istilah pada ${data.topic} dengan keterangannya yang sesuai:`,
      pairs: [
        { itemA: isEn ? 'Concept Component 1' : 'Komponen 1', itemB: isEn ? 'Definition / Function 1' : 'Fungsi / Pengertian 1' },
        { itemA: isEn ? 'Concept Component 2' : 'Komponen 2', itemB: isEn ? 'Definition / Function 2' : 'Fungsi / Pengertian 2' },
        { itemA: isEn ? 'Concept Component 3' : 'Komponen 3', itemB: isEn ? 'Definition / Function 3' : 'Fungsi / Pengertian 3' },
      ],
      hint: isEn ? 'Connect the keyword with its matching function.' : 'Hubungkan kata kunci dengan fungsi pasangannya.',
      explanation: isEn 
        ? 'Well done! All pairs were matched correctly.' 
        : 'Hebat! Semua pasangan konsep telah terhubung dengan tepat.'
    },
    {
      id: 3,
      mechanic: data.gameTypes[2] || 'Benar / Salah',
      question: isEn 
        ? `True or False: Is this statement accurately describing ${data.topic}?` 
        : `Benar atau Salah: Pernyataan kunci seputar ${data.topic} ini bernilai BENAR?`,
      correctAnswer: 'Benar',
      hint: isEn ? 'This statement reflects textbook guidelines.' : 'Pernyataan ini mengacu pada panduan buku paket.',
      explanation: isEn 
        ? 'Correct! This fact is well-established in the curriculum.' 
        : 'Benar! Fakta ini sesuai dengan prinsip kurikulum yang diajarkan.'
    }
  ];
}
