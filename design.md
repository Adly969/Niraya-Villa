# Design System - Niraya Karangasem Villas

---

## 1. Design Direction

Arah desain: **Luxury Tropical Calm.**

Desain tidak berusaha "terlihat mewah" dengan dekorasi berlebihan. Kemewahan ditunjukkan melalui:
- Whitespace yang lega
- Foto berkualitas tinggi sebagai elemen utama
- Tipografi serif elegan untuk heading
- Palet warna earth tone yang hangat dan kohesif
- Copywriting minimalis dan puitis

Referensi mood visual: villa butik di Ubud yang difoto untuk majalah Condé Nast Traveler.

---

## 2. Visual Mood

| Elemen | Inspirasi Visual |
|--------|-----------------|
| Tekstur | Batu vulkanik, kayu jati, anyaman bambu |
| Cahaya | Cahaya matahari sore yang hangat, bayangan daun tropis |
| Air | Kolam renang infinity, pantulan langit biru |
| Alam | Persawahan, pegunungan, pantai berpasir hitam Amed |
| Budaya | Ukiran Bali, bunga kamboja, penjor, kain tenun |
| Suasana | Tenang, sunyi, intim, jauh dari keramaian |

---

## 3. Color Palette

### Warna Utama

| Nama | Hex | Fungsi |
|------|-----|--------|
| Primary Cream | `#F7F1E8` | Background utama halaman |
| Deep Olive | `#3F4A36` | Warna teks sekunder, icon, border halus |
| Charcoal Brown | `#2A211A` | Warna teks utama, heading gelap |
| Sand Gold | `#C6A15B` | Aksen, border highlight, icon aktif, badge harga |
| Soft White | `#FFFFFF` | Background card, form, navbar setelah scroll |
| Muted Beige | `#E7D8C5` | Background section alternatif, card hover |
| Text Dark | `#1F1B16` | Body text utama |

### Panduan Penggunaan

- **Background halaman:** `#F7F1E8` (Primary Cream)
- **Section alternatif:** `#E7D8C5` (Muted Beige) untuk variasi ritme visual
- **Teks utama:** `#1F1B16` (Text Dark) — semua body text
- **Heading:** `#2A211A` (Charcoal Brown)
- **Aksen/highlight:** `#C6A15B` (Sand Gold) — underline heading, border card, badge
- **Button primary:** Background `#2A211A`, teks `#F7F1E8`
- **Button secondary:** Border `#2A211A`, background transparent, teks `#2A211A`
- **Overlay hero:** `rgba(26, 18, 10, 0.55)` untuk readability di atas foto

### Yang Tidak Digunakan
Tidak ada warna neon, biru cerah, merah mencolok, atau gradien ramai. Palette ini dibuat untuk terasa hangat dan organik.

---

## 4. Typography

### Font Family

| Tipe | Font | Fallback |
|------|------|----------|
| Heading | Playfair Display | Georgia, serif |
| Body | Inter | DM Sans, sans-serif |

Import via Google Fonts:
```
Playfair Display — weights: 400, 500, 700
Inter — weights: 300, 400, 500
```

### Type Scale

| Tag | Font | Desktop | Mobile | Weight | Line Height |
|-----|------|---------|--------|--------|-------------|
| H1 | Playfair Display | 64px | 40px | 500 | 1.2 |
| H2 | Playfair Display | 44px | 30px | 500 | 1.25 |
| H3 | Playfair Display | 28px | 22px | 500 | 1.3 |
| Body | Inter | 16px | 15px | 400 | 1.7 |
| Caption | Inter | 13px | 12px | 300 | 1.5 |
| Button | Inter | 14px | 14px | 500 | — |
| Price | Playfair Display | 20px | 18px | 500 | — |
| Label/Tag | Inter | 11px | 11px | 500, uppercase | — |

### Aturan Tipografi
- Letter-spacing heading: `-0.02em` (lebih tight, terasa premium)
- Letter-spacing label/tag/caption uppercase: `0.12em`
- Tidak ada teks yang bold berlebihan di body
- Heading tidak perlu italic kecuali pada kutipan atau testimonial

---

## 5. Layout System

### Container
- Max width: `1280px`
- Horizontal padding: `80px` (desktop), `24px` (mobile)
- Center aligned

### Grid System

| Breakpoint | Kolom | Gap |
|------------|-------|-----|
| Desktop (≥1024px) | 12 kolom | 24px |
| Tablet (768–1023px) | 2 kolom | 20px |
| Mobile (<768px) | 1 kolom | 16px |

### Spacing System (base unit: 8px)

| Token | Nilai | Penggunaan |
|-------|-------|------------|
| xs | 8px | Gap kecil antar elemen inline |
| sm | 16px | Padding card internal |
| md | 24px | Gap antar komponen |
| lg | 40px | Padding section vertikal (mobile) |
| xl | 80px | Padding section vertikal (desktop) |
| 2xl | 120px | Padding section hero |

### Section Padding

| Breakpoint | Padding Top/Bottom |
|------------|-------------------|
| Desktop | 80–120px |
| Tablet | 60px |
| Mobile | 48px |

### Border Radius

| Komponen | Radius |
|----------|--------|
| Card villa/destinasi | 12px |
| Gallery item | 8px |
| Button | 4px |
| Input form | 6px |
| Badge/tag | 2px |
| Floating WhatsApp | 50% (circle) |

### Shadow

```css
/* Card shadow */
box-shadow: 0 2px 16px rgba(42, 33, 26, 0.08);

/* Card hover shadow */
box-shadow: 0 8px 32px rgba(42, 33, 26, 0.14);

/* Navbar scroll shadow */
box-shadow: 0 1px 12px rgba(42, 33, 26, 0.10);

/* Form card shadow */
box-shadow: 0 4px 24px rgba(42, 33, 26, 0.10);
```

---

## 6. Component Style

### 6.1 Navbar
- **Default (top halaman):** Background transparent, teks putih
- **Setelah scroll 80px:** Background `#FFFFFF`, teks `#2A211A`, shadow halus
- **Tinggi:** 72px desktop, 60px mobile
- **Layout:** Logo kiri, menu tengah (hidden mobile), button "Book Now" kanan
- **Transition:** `background 0.3s ease`, `box-shadow 0.3s ease`
- **Mobile:** Hamburger icon muncul, menu jadi drawer dari kanan atau dropdown

### 6.2 Hero Section
- **Height:** 95vh (minimum 600px)
- **Background:** Full-cover image villa/pool
- **Overlay:** `rgba(26, 18, 10, 0.50)`
- **Konten:** Center-aligned (H1 + subheading + 2 button)
- **H1 color:** `#F7F1E8`
- **Subheading color:** `rgba(247, 241, 232, 0.80)`
- **Mobile:** Text lebih kecil, button stacked vertikal

### 6.3 Button Primary
```
Background: #2A211A
Text: #F7F1E8
Padding: 14px 32px
Border radius: 4px
Font: Inter 500, 14px, uppercase, letter-spacing 0.08em
Hover: background #3F4A36, transition 0.25s
```

### 6.4 Button Secondary
```
Background: transparent
Border: 1.5px solid #2A211A
Text: #2A211A
Padding: 13px 31px
Hover: background #2A211A, text #F7F1E8
```

### 6.5 Villa Card
```
Background: #FFFFFF
Border radius: 12px
Overflow: hidden
Image height: 260px (object-fit: cover)
Content padding: 24px
Shadow: card shadow (default)
Hover: translateY(-4px) + hover shadow
Elemen: foto, badge harga (Sand Gold), nama villa, kapasitas, fasilitas list, CTA button
```

### 6.6 Destination Card
```
Background: foto full cover (overlay gradient bottom)
Border radius: 12px
Height: 280px
Teks (di atas overlay): nama destinasi (H3 putih), jarak dari villa (caption putih 70%)
Hover: scale(1.02), transition 0.3s
```

### 6.7 Feature Card (Highlights)
```
Background: transparent atau #FFFFFF
Padding: 24px
Icon: 28px, warna Sand Gold
Title: H3 Charcoal Brown
Description: Body 14px, Text Dark 75%
Tidak ada shadow — cukup whitespace
```

### 6.8 Gallery Item
```
Border radius: 8px
Overflow: hidden
Hover: scale(1.03) pada image, overlay hitam 20%
Cursor: pointer (opsional: buka modal)
```

### 6.9 Booking Form
```
Background: #FFFFFF
Border radius: 12px
Padding: 32px
Shadow: form card shadow

Input field:
  - Border: 1px solid #E7D8C5
  - Border radius: 6px
  - Padding: 12px 16px
  - Focus border: #C6A15B (Sand Gold)
  - Background: #FAFAF8

Label: Inter 12px, uppercase, letter-spacing 0.10em, warna Deep Olive
```

### 6.10 Testimonial Card
```
Background: #FFFFFF
Border radius: 12px
Padding: 28px
Shadow: card shadow
Elemen: bintang (Sand Gold), kutipan (italic, Playfair Display 16px), nama tamu (Inter bold), asal negara (caption)
```

### 6.11 Footer
```
Background: #2A211A (Charcoal Brown)
Text: #E7D8C5 (Muted Beige)
Padding: 64px vertikal
3 kolom: brand + tagline | nav links | kontak
Bottom bar: copyright, warna #E7D8C5 50%
```

### 6.12 Sticky WhatsApp Button
```
Position: fixed, bottom: 28px, right: 28px
Size: 56px x 56px
Background: #25D366 (WhatsApp green) ATAU #2A211A (brand dark)
Icon: WhatsApp SVG, putih, 28px
Border radius: 50%
Box shadow: 0 4px 16px rgba(0,0,0,0.20)
Hover: scale(1.08)
Tooltip: "Chat with Us" muncul saat hover (di sebelah kiri button)
Z-index: 999
```

---

## 7. Hero Section Design

- Tinggi: `95vh`, minimum `600px`
- Foto background: villa dengan private pool, warm lighting, langit biru/senja
- Overlay: gradient `rgba(26, 18, 10, 0.50)` dari atas ke bawah
- Konten: center-aligned secara vertikal dan horizontal
- H1: `Playfair Display 64px`, warna `#F7F1E8`, letter-spacing `-0.02em`
- Subheading: `Inter 18px`, warna `rgba(247, 241, 232, 0.80)`, max-width 560px
- 2 CTA button: Primary (Explore Villas) + Secondary outlined putih (Book via WhatsApp)
- Gap antar button: 16px, layout horizontal desktop, vertikal mobile
- Optional: mini booking card floating di bagian bawah hero

**Mobile Hero:**
- H1: 40px
- Subheading: 15px, max-width 90%
- Button stacked vertikal, full-width

---

## 8. Gallery Design

- Layout: Masonry 3 kolom (desktop), 2 kolom (tablet), 2 kolom (mobile)
- Kombinasi: beberapa foto besar (span 2 baris), beberapa foto normal
- Border radius: 8px per item
- Gap antar item: 12px
- Hover: `transform: scale(1.03)`, overlay `rgba(0,0,0,0.15)` transisi halus
- Jangan tampilkan caption atau overlay teks — biarkan foto berbicara sendiri
- Foto yang ditampilkan: pool, kamar, outdoor shower, breakfast, pemandangan, budaya

---

## 9. Booking Form Design

**Layout Desktop:** Card horizontal, semua field dalam 1 baris + tombol
**Layout Mobile:** Stacked vertikal, setiap field 1 baris

**Fields:**
1. Check-in (date picker visual)
2. Check-out (date picker visual)
3. Guests (dropdown: 1–6)
4. Villa Type (dropdown: Garden Pool / Family Tropical / Royal East Bali)
5. Button: "Check Availability"

**Form placement:** Dapat muncul di dua lokasi:
- Floating di bawah Hero (sticky mini version)
- Section tersendiri sebelum Testimonials

**Behavior tombol:** Karena dummy, klik tombol dapat:
- Menampilkan pesan: "Thank you! We'll contact you via WhatsApp shortly."
- Atau langsung redirect ke link WhatsApp dengan pesan pre-filled

---

## 10. Animation Guideline

### Yang Digunakan

| Animasi | Implementasi | Durasi |
|---------|-------------|--------|
| Fade up saat masuk viewport | `opacity: 0 → 1`, `translateY(20px → 0)` | 0.5s ease |
| Hero image slow zoom | `transform: scale(1.00 → 1.05)` pada load | 8s ease |
| Card hover lift | `translateY(0 → -4px)` + shadow | 0.25s ease |
| Button hover | Background color transition | 0.25s ease |
| Navbar transition | Background + shadow on scroll | 0.3s ease |
| Gallery hover | Scale + overlay | 0.3s ease |
| WhatsApp button hover | Scale(1.08) | 0.2s ease |

### Yang Tidak Digunakan
- Parallax scroll berat
- Animasi yang menghalangi scrolling
- Rotasi, flip, atau efek 3D
- Animasi berulang (looping) di luar hero
- Text typing effect
- Confetti atau particle effect

---

## 11. Image Direction

Semua foto harus terasa: **natural, warm, premium, dan tenang.**

### Jenis Foto yang Dibutuhkan

| No | Kategori | Keterangan |
|----|----------|------------|
| 1 | Hero | Pool villa dengan background alam/gunung, warm light |
| 2 | Kamar | Tempat tidur king, linen putih bersih, nuansa kayu |
| 3 | Outdoor | Kamar mandi terbuka dengan tanaman hijau sekitar |
| 4 | Kolam | Air jernih, kursi jemur, nuansa tropis |
| 5 | Sarapan | Fruit platter atau nasi goreng di tepi kolam |
| 6 | Pemandangan | Rice field atau Gunung Agung dari teras villa |
| 7 | Budaya | Tirta Gangga, Pura dengan backdrop alam |
| 8 | Pantai | Amed beach, hitam/pasir gelap, air biru tenang |
| 9 | Interior | Detail ukiran kayu, batu alam, kain lokal |
| 10 | Garden | Tropis lebat, bunga kamboja, suasana pagi |

### Sumber Foto
- Unsplash (search: "bali villa pool", "tropical villa bali", "karangasem bali")
- Pexels (gratis, commercial use)

### Komposisi yang Dihindarkan
- Foto terlalu gelap atau terlalu over-edited
- Foto ramai/crowded
- Foto dengan watermark atau HDR berlebihan
- Foto indoor dengan cahaya artificial kuning kecoklatan (warm-yellow artificial)

---

## 12. Responsive Design

### Breakpoints

| Nama | Width | Behavior |
|------|-------|----------|
| Mobile | 375px | 1 kolom, semua stacked |
| Tablet | 768px | 2 kolom card, form horizontal parsial |
| Laptop | 1024px | Layout penuh mulai aktif |
| Desktop | 1440px | Max-width 1280px container |

### Perilaku Per Section di Mobile

| Section | Behavior Mobile |
|---------|----------------|
| Navbar | Hamburger menu, drawer/dropdown |
| Hero | H1 40px, button stacked vertikal |
| About | Stacked: foto atas, teks bawah |
| Highlights | Grid 2 kolom |
| Villa Types | 1 kolom, scroll vertikal |
| Destinations | Horizontal scroll (overflow-x) |
| Gallery | 2 kolom masonry |
| Booking Form | Stacked vertikal, input full-width |
| Testimonials | 1 kolom, swipe opsional |
| Footer | Stacked vertikal, center-aligned |

---

## 13. Accessibility

| Aspek | Standar |
|-------|---------|
| Color contrast | Minimum WCAG AA (4.5:1 untuk body text) |
| Alt text | Semua `<img>` wajib memiliki deskripsi relevan |
| Button size | Minimum 44x44px touch target di mobile |
| Form label | Setiap field memiliki `<label>` eksplisit |
| Keyboard nav | Navbar dan form navigable via Tab |
| Focus indicator | Tidak dihilangkan — styling custom yang elegan |
| Font size | Minimum 14px untuk body, 12px untuk caption |
| ARIA | Hamburger menu menggunakan `aria-expanded` |

---

## 14. SEO & Content Layout

### Struktur Heading

```
H1 — Hanya satu: Hero headline utama
  H2 — Setiap section utama
    H3 — Nama villa, nama destinasi, nama experience
      p  — Body text, deskripsi
```

Contoh:
```
H1: "Where East Bali Begins to Breathe"
H2: "A Private Retreat, Far from the Ordinary"   (About)
H2: "Choose Your Villa"                           (Villa Types)
  H3: "Garden Pool Villa"
  H3: "Family Tropical Villa"
  H3: "Royal East Bali Villa"
H2: "Explore Nearby"                             (Destinations)
H2: "The Niraya Experience"                       (Experience)
H2: "Book Your Stay"                             (Booking)
H2: "What Our Guests Say"                        (Testimonials)
```

---

## 15. Do and Don't

### Do ✅
- Gunakan whitespace lega — biarkan konten bernapas
- Pakai foto besar berkualitas tinggi sebagai elemen utama
- CTA WhatsApp harus selalu terlihat
- Warna konsisten sesuai palette — jangan improvisasi
- Prioritaskan tipografi yang rapi dan terbaca
- Heading cukup 1–2 warna, body text cukup 1 warna
- Gunakan grid yang konsisten di semua section
- Setiap section memiliki ritme visual yang bervariasi (light bg → dark bg)

### Don't ❌
- Jangan animasi berlebihan yang mengalihkan perhatian dari konten
- Jangan gunakan warna neon, gradien mencolok, atau shadow colorful
- Jangan lebih dari 2 font family
- Jangan padatkan layout — satu section, satu pesan
- Jangan buat desain yang terkesan seperti WordPress template
- Jangan gunakan border dekoratif berlebihan
- Jangan letakkan terlalu banyak CTA di satu section
- Jangan sembunyikan informasi penting di bawah fold tanpa visual teaser yang cukup

---

## 16. Final Output Expectation

Dokumen ini berfungsi sebagai **panduan desain dan produk lengkap** untuk membangun landing page Niraya Karangasem Villas. Setiap keputusan visual — warna, tipografi, spacing, komponen, animasi — telah dirancang untuk menghasilkan tampilan yang:

- **Premium:** Setara dengan standar visual hospitality internasional
- **Calm:** Tidak ramai, tidak norak, tidak berlebihan
- **Responsive:** Optimal di semua ukuran layar, prioritas mobile
- **Conversion-focused:** Setiap section mengarah pada satu tujuan: booking via WhatsApp
- **Portfolio-worthy:** Layak ditampilkan sebagai showcase kemampuan frontend dan desain UI/UX

Tahap selanjutnya: implementasi kode menggunakan HTML/CSS/JS vanilla atau React + Tailwind berdasarkan dokumen PRD dan Design System ini.