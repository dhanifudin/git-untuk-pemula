# Git untuk Pemula

[![Deploy mdBook](https://github.com/dhanifudin/git-untuk-pemula/actions/workflows/deploy.yml/badge.svg)](https://github.com/dhanifudin/git-untuk-pemula/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://dhanifudin.github.io/git-untuk-pemula/)

Panduan lengkap Git untuk programmer pemula dengan pendekatan praktis dan mudah dipahami.

## 📖 Baca Online

Buku ini tersedia online di: **[dhanifudin.github.io/git-untuk-pemula](https://dhanifudin.github.io/git-untuk-pemula/)**

## 🎯 Target Pembaca

- Programmer pemula yang baru belajar coding
- Students yang perlu Git untuk tugas dan project
- Self-taught developers yang ingin structured learning
- Tim kecil yang ingin mulai menggunakan version control
- Anyone yang pernah kehilangan kode dan ingin itu tidak terulang lagi! 😅

## 📚 Struktur Buku

### 🏠 Bagian I: Git Lokal (7 bab)
Mulai dari dasar-dasar Git tanpa perlu internet atau server remote.

### 🌐 Bagian II: Git Remote (4 bab)
Naik level dengan menggunakan GitHub untuk backup dan sharing.

### 👥 Bagian III: Kolaborasi (5 bab)
Berkolaborasi dengan developer lain seperti pro.

## 🛠️ Teknologi

- **mdBook** - Static site generator untuk dokumentasi
- **GitHub Actions** - CI/CD untuk auto-deployment
- **GitHub Pages** - Free hosting untuk website statis

## 🚀 Development

### Prerequisites

- [Rust](https://rustup.rs/) (untuk mdBook)
- [mdBook](https://rust-lang.github.io/mdBook/guide/installation.html)

### Setup Local

```bash
# Clone repository
git clone https://github.com/dhanifudin/git-untuk-pemula.git
cd git-untuk-pemula

# Install mdBook (jika belum ada)
cargo install mdbook

# Build buku
mdbook build

# Serve locally untuk development
mdbook serve --open
```

Buku akan tersedia di `http://localhost:3000`

### Live Reload

Untuk development dengan live reload:

```bash
mdbook serve --open
```

File akan otomatis rebuild saat ada perubahan.

## 📝 Contributing

Contributions welcome! Silakan:

1. Fork repository ini
2. Buat branch untuk feature/fix Anda
3. Commit perubahan
4. Push ke branch Anda
5. Buat Pull Request

### Structure Konten

```
src/
├── SUMMARY.md              # Table of contents
├── pengantar.md           # Pengantar buku
├── bagian-1/              # Git Lokal
│   ├── bab-01-*.md
│   └── ...
├── bagian-2/              # Git Remote
│   ├── bab-08-*.md
│   └── ...
├── bagian-3/              # Kolaborasi
│   ├── bab-12-*.md
│   └── ...
├── penutup.md
└── referensi.md
```

## 🎨 Customization

### Custom CSS

Edit `theme/custom.css` untuk styling tambahan:
- Callout boxes (.callout)
- Code blocks dengan label
- Step-by-step guides
- Image placeholders

### mdBook Configuration

Edit `book.toml` untuk:
- Metadata buku
- Output settings
- Plugin configuration
- Theme customization

## 📈 Deployment

### Automatic Deployment

Setiap push ke `main` branch akan otomatis:
1. Build mdBook
2. Deploy ke GitHub Pages
3. Update website live

### Manual Deployment

```bash
# Build locally
mdbook build

# Deploy ke gh-pages branch (jika setup manual)
git subtree push --prefix book origin gh-pages
```

## 📄 License

Project ini menggunakan [MIT License](LICENSE).

## 🤝 Support

Jika ada pertanyaan atau butuh bantuan:
- Open [GitHub Issue](https://github.com/dhanifudin/git-untuk-pemula/issues)
- Email: [your-email@domain.com]
- Twitter: [@yourhandle]

---

**Happy Learning Git! 🚀**

*"The best time to learn Git was yesterday. The second best time is now."*
