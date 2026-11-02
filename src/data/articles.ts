export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  readMinutes: number;
  image: string;
  keywords: string;
  body: string[];
  popular?: boolean;
}

const img = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1200/630`;

export const articles: Article[] = [
  {
    slug: "keutamaan-shalat-tahajjud",
    title: "Keutamaan Shalat Tahajjud: Dalil, Waktu, dan Adabnya",
    excerpt:
      "Shalat Tahajjud adalah ibadah malam yang disebut langsung dalam Al-Qur'an. Simak dalil, waktu terbaik, serta adab agar qiyamul lail lebih khusyuk.",
    category: "Fiqh",
    categorySlug: "fiqh",
    author: "Ust. Ahmad Fauzi",
    date: "2026-01-12",
    readMinutes: 9,
    image: img("tahajjud"),
    keywords: "shalat tahajjud, qiyamul lail, dalil tahajjud, fiqh ibadah",
    popular: true,
    body: [
      "Shalat Tahajjud merupakan shalat sunnah yang dikerjakan pada malam hari setelah tidur. Allah Subhanahu wa Ta'ala menyebutnya secara khusus dalam Al-Qur'an: وَمِنَ ٱلَّيْلِ فَتَهَجَّدْ بِهِۦ نَافِلَةً لَّكَ عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا.",
      "Para ulama menjelaskan bahwa tahajjud memiliki kedudukan istimewa karena dikerjakan di waktu yang sunyi, ketika hati lebih mudah hadir dan lisan lebih terjaga dari riya. Imam an-Nawawi menegaskan bahwa shalat malam adalah kebiasaan para salihin.",
      "Waktu paling utama adalah sepertiga malam terakhir, yaitu saat Allah turun mendekat dan berfirman: 'Siapa yang berdoa kepada-Ku, akan Kuijabahi.' Namun bila berat, boleh dikerjakan di awal atau pertengahan malam setelah tidur.",
      "Adabnya: berwudhu dengan tenang, memulai dengan dua rakaat ringan, membaca surah yang dihafal dengan tartil, dan menutup dengan witir. Jangan memaksakan bacaan panjang hingga meninggalkan kekhusyukan.",
      "Semoga Allah menjadikan kita ahli qiyamul lail. Wallahu a'lam bish-shawab.",
    ],
  },
  {
    slug: "adab-menuntut-ilmu-santri",
    title: "Adab Menuntut Ilmu bagi Santri Pemula",
    excerpt:
      "Sebelum menghafal matan, seorang santri wajib menata adab. Inilah urutan adab menuntut ilmu menurut para ulama pesantren.",
    category: "Artikel Santri",
    categorySlug: "artikel-santri",
    author: "Ustzh. Siti Aminah",
    date: "2026-01-08",
    readMinutes: 7,
    image: img("adab-ilmu"),
    keywords: "adab menuntut ilmu, santri, pesantren, ta'lim muta'allim",
    popular: true,
    body: [
      "Kitab Ta'lim al-Muta'allim karya Syaikh az-Zarnuji membuka pembahasannya bukan dengan materi, melainkan dengan niat dan adab. Sebab ilmu adalah cahaya, dan cahaya tidak masuk ke dalam hati yang penuh kesombongan.",
      "Pertama, perbaiki niat: menuntut ilmu untuk menghilangkan kebodohan diri, bukan untuk mencari kedudukan. Kedua, hormati guru dan keluarganya, karena keberkahan ilmu mengalir melalui ridha mereka.",
      "Ketiga, jaga waktu. Santri yang tidur sepanjang pagi kehilangan barakah waktu subuh yang paling subur untuk menghafal. Keempat, sabar atas kesulitan dan tidak berpindah kitab sebelum tuntas.",
      "Kelima, amalkan apa yang dipelajari. Ilmu yang tidak diamalkan seperti pohon tanpa buah — melelahkan pemiliknya tanpa manfaat bagi orang lain.",
    ],
  },
  {
    slug: "tajwid-hukum-nun-sukun",
    title: "Tajwid Dasar: Hukum Nun Sukun dan Tanwin",
    excerpt:
      "Idgham, ikhfa, iqlab, izhar — empat hukum bacaan nun sukun yang wajib dikuasai setiap pembaca Al-Qur'an.",
    category: "Tajwid dan Tahsin al-Quran",
    categorySlug: "tajwid-dan-tahsin-al-quran",
    author: "Ust. Ridwan Hakim",
    date: "2026-01-05",
    readMinutes: 8,
    image: img("tajwid"),
    keywords: "tajwid, nun sukun, tanwin, ikhfa, idgham, tahsin quran",
    popular: true,
    body: [
      "Nun sukun (نْ) dan tanwin (ً ٍ ٌ) memiliki empat hukum bacaan yang bergantung pada huruf setelahnya. Menguasainya adalah pintu pertama tahsin Al-Qur'an.",
      "Izhar halqi terjadi bila bertemu salah satu huruf halq: ء ه ع ح غ خ. Dibaca jelas tanpa dengung. Ikhfa haqiqi terjadi bila bertemu 15 huruf selain huruf izhar, idgham, dan iqlab — dibaca samar dengan dengung dua harakat.",
      "Idgham bighunnah pada huruf ي ن م و, dan idgham bilaghunnah pada ل ر. Sedangkan iqlab terjadi bila bertemu huruf ب, di mana nun berubah menjadi mim dengan dengung.",
      "Latihan rutin dengan menyimak qari mutqin jauh lebih efektif daripada hanya membaca teori. Rekam bacaan sendiri, lalu bandingkan dengan murattal Syaikh Al-Husary.",
    ],
  },
  {
    slug: "kisah-salihin-imam-syafii",
    title: "Kisah Salihin: Keteguhan Imam asy-Syafi'i Menuntut Ilmu",
    excerpt:
      "Yatim sejak kecil, hafal Al-Qur'an di usia tujuh tahun. Inilah perjalanan Imam asy-Syafi'i yang menjadi teladan kesungguhan.",
    category: "Kisah Salihin",
    categorySlug: "kisah-salihin",
    author: "Ust. Ahmad Fauzi",
    date: "2026-01-02",
    readMinutes: 6,
    image: img("syafii"),
    keywords: "imam syafii, kisah salihin, sejarah ulama, madzhab syafii",
    body: [
      "Imam Muhammad bin Idris asy-Syafi'i lahir di Gaza tahun 150 H. Ayahnya wafat saat ia masih kecil, dan ibunya membesarkannya dalam keadaan sangat sederhana.",
      "Di usia tujuh tahun ia telah menghafal Al-Qur'an, dan di usia sepuluh hafal kitab al-Muwaththa' karya Imam Malik. Karena tidak mampu membeli kertas, ia menulis pelajarannya di tulang dan pecahan tembikar.",
      "Beliau menegaskan bahwa ilmu tidak akan didapat oleh orang yang malas dan tidak akan dimiliki oleh orang yang sombong. Perjalanannya ke berbagai negeri menjadi bukti kesungguhan seorang thalibul ilmi.",
      "Warisan beliau — ushul fiqh dan madzhab yang tersebar luas — adalah buah dari adab, kesabaran, dan doa seorang ibu.",
    ],
  },
  {
    slug: "kumpulan-doa-harian",
    title: "Kumpulan Doa Harian Lengkap dengan Artinya",
    excerpt:
      "Doa bangun tidur, masuk masjid, sebelum makan, hingga doa safar — lengkap teks Arab, latin, dan terjemahnya.",
    category: "Kumpulan Doa",
    categorySlug: "kumpulan-doa",
    author: "Ustzh. Siti Aminah",
    date: "2025-12-28",
    readMinutes: 10,
    image: img("doa-harian"),
    keywords: "kumpulan doa, doa harian, doa arab latin, dzikir",
    body: [
      "Doa adalah senjata seorang mukmin. Berikut kumpulan doa harian yang mudah dihafal, disusun dari hadits-hadits shahih.",
      "Doa bangun tidur: اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرُ — 'Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami, dan kepada-Nya kami dibangkitkan.'",
      "Doa masuk masjid: اَللّٰهُمَّ افْتَحْ لِيْ أَبْوَابَ رَحْمَتِكَ — 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.'",
      "Doa sebelum makan: بِسْمِ اللّٰهِ وَعَلَى بَرَكَةِ اللّٰهِ. Dan doa safar: سُبْحَانَ الَّذِيْ سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِيْنَ.",
      "Hafalkan sedikit demi sedikit, amalkan setiap hari, dan ajarkan kepada keluarga.",
    ],
  },
  {
    slug: "khutbah-jumat-taqwa",
    title: "Khutbah Jumat: Bekal Takwa di Era Digital",
    excerpt:
      "Naskah khutbah Jumat singkat dan padat tentang menjaga takwa di tengah derasnya arus informasi digital.",
    category: "Khutbah Jumat",
    categorySlug: "khutbah-jumat",
    author: "Ust. Ridwan Hakim",
    date: "2025-12-22",
    readMinutes: 5,
    image: img("khutbah"),
    keywords: "khutbah jumat, naskah khutbah, takwa, era digital",
    body: [
      "Ma'asyiral muslimin rahimakumullah. Marilah kita tingkatkan takwa kepada Allah, sebab takwa adalah sebaik-baik bekal menghadapi zaman yang terus berubah.",
      "Era digital menghadirkan kemudahan sekaligus ujian. Informasi mengalir tanpa henti, dan jempol kita menjadi penentu: menyebarkan kebenaran atau menebar kebohongan.",
      "Rasulullah shallallahu 'alaihi wa sallam bersabda: 'Barangsiapa beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam.' Hadits ini adalah rambu utama bermedia sosial.",
      "Maka jadikan gawai kita sarana dakwah, bukan ladang dosa. Perbanyak istighfar, jaga lisan, dan saring sebelum membagikan.",
    ],
  },
  {
    slug: "nahwu-dasar-isim-fiil",
    title: "Nahwu Dasar: Mengenal Isim, Fi'il, dan Huruf",
    excerpt:
      "Pembagian kata dalam bahasa Arab adalah kunci memahami Al-Qur'an. Mulai dari isim, fi'il, dan huruf.",
    category: "Nahwu",
    categorySlug: "nahwu",
    author: "Ust. Ahmad Fauzi",
    date: "2025-12-18",
    readMinutes: 7,
    image: img("nahwu"),
    keywords: "nahwu, isim, fiil, huruf, bahasa arab, gramatika",
    body: [
      "Dalam ilmu nahwu, kata dalam bahasa Arab terbagi menjadi tiga: isim (kata benda), fi'il (kata kerja), dan huruf (kata tugas).",
      "Isim adalah kata yang menunjukkan nama, tanpa terikat waktu — seperti كِتَابٌ (buku) dan مَسْجِدٌ (masjid). Fi'il terikat waktu: مَاضِي (lampau), مُضَارِع (sedang), dan أَمْر (perintah).",
      "Huruf tidak bermakna sempurna kecuali bersama kata lain, seperti فِي (di), مِنْ (dari), dan إِلَى (ke).",
      "Menguasai tiga pembagian ini memudahkan kita membaca kitab gundul dan memahami struktur ayat Al-Qur'an.",
    ],
  },
  {
    slug: "wawasan-qurani-kisah-nabi-yusuf",
    title: "Wawasan Qurani: Pelajaran dari Kisah Nabi Yusuf",
    excerpt:
      "Surah Yusuf disebut 'ahsanal qashash' — sebaik-baik kisah. Simak pelajaran sabar, iffah, dan pemaafan di dalamnya.",
    category: "Wawasan Qurani",
    categorySlug: "wawasan-qurani",
    author: "Ustzh. Siti Aminah",
    date: "2025-12-14",
    readMinutes: 9,
    image: img("yusuf"),
    keywords: "surah yusuf, kisah nabi yusuf, tafsir, wawasan qurani",
    popular: true,
    body: [
      "Allah menyebut kisah Nabi Yusuf sebagai ahsanal qashash, sebaik-baik kisah. Ia memuat pelajaran iman, kesabaran, dan kehormatan diri.",
      "Yusuf 'alaihissalam difitnah, dipenjara, dan dilupakan. Namun ia tidak pernah meninggalkan ihsan. Justru di penjara ia berdakwah tauhid kepada dua penghuni sel.",
      "Puncak kisahnya bukan jabatan bendahara Mesir, melainkan kalimat pemaafan kepada saudara-saudaranya: لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ — 'Tidak ada celaan atas kalian hari ini.'",
      "Dari sini kita belajar: kesabaran berbuah kehormatan, dan pemaafan adalah tanda jiwa yang besar.",
    ],
  },
];

export const popularArticles = articles.filter((a) => a.popular);

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function articlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.categorySlug === categorySlug);
}