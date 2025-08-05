# Bab 3: Repository Pertama

## Pengantar

Saatnya terjun langsung! Di bab ini kita akan membuat repository Git pertama Anda dan mulai memahami konsep fundamental Git secara praktis.

Yang akan kita pelajari:
- 📁 **Membuat repository** dari folder kosong
- 🔍 **Memahami struktur** folder `.git`
- 📝 **Menggunakan contoh kasus** sederhana: catatan harian
- 💻 **Praktik dengan VS Code** dan Git CLI
- 🎯 **Memahami workflow** dasar Git

<div class="callout tip">
💡 **Mindset**: Anggap Git seperti sistem "Save Game" untuk project Anda. Repository adalah folder game, dan setiap commit adalah checkpoint yang bisa Anda load kapan saja.
</div>

## Apa itu Repository?

**Repository** (atau **repo**) adalah folder project yang di-"awasi" oleh Git. Di dalam repository, Git akan:

- 📸 **Merekam snapshot** dari semua file
- 📜 **Menyimpan histori** perubahan
- 🏷️ **Menandai versi** dengan commit messages
- 🌳 **Mengelola branches** untuk development paralel

### Anatomi Repository

```
my-project/              ← Working Directory
├── .git/               ← Git Database (JANGAN DIUBAH MANUAL!)
│   ├── config          ← Repository configuration
│   ├── objects/        ← Git objects (commits, trees, blobs)
│   ├── refs/           ← Branch dan tag references
│   └── HEAD            ← Pointer ke current branch
├── file1.txt           ← Your actual files
├── file2.md            ← Your actual files
└── .gitignore          ← Files to ignore (optional)
```

<div class="callout warning">
⚠️ **PENTING**: Jangan pernah mengedit file di dalam folder `.git` secara manual! Git yang akan mengelolanya. Kalau rusak, repository bisa corrupt.
</div>

## Persiapan: Contoh Kasus Catatan Harian

Untuk latihan, kita akan membuat sistem **catatan harian** sederhana. Ini perfect untuk belajar Git karena:
- ✅ File-file kecil (markdown)
- ✅ Perubahan sering terjadi (setiap hari)
- ✅ Mudah dipahami isinya
- ✅ Relatable untuk semua orang

### Struktur Project yang Akan Dibuat

```
catatan-harian/
├── .git/                    ← Git repository
├── README.md               ← Penjelasan project
├── 2024/                   ← Folder per tahun
│   ├── januari/
│   │   ├── 01-januari.md
│   │   └── 02-januari.md
│   └── februari-2024.md
├── templates/              ← Template untuk catatan
│   └── template-harian.md
└── .gitignore             ← Files yang diabaikan Git
```

## Langkah 1: Membuat Folder Project

<div class="steps">

<div class="step">
**Buat Folder Project**

Buat folder untuk project catatan harian Anda:

<div class="code-with-label">
<div class="code-label">Terminal/Command Prompt</div>

```bash
# Pindah ke folder Documents (atau lokasi lain yang Anda sukai)
cd ~/Documents

# Buat folder project
mkdir catatan-harian

# Masuk ke folder project
cd catatan-harian
```
</div>

**Via VS Code:**
1. Buka VS Code
2. `File` → `Open Folder`
3. Buat folder baru bernama `catatan-harian`
4. Pilih folder tersebut

<div class="image-placeholder">
[Gambar: Screenshot VS Code dialog "Open Folder" dengan folder catatan-harian]
</div>
</div>

<div class="step">
**Verifikasi Lokasi**

Pastikan Anda berada di folder yang benar:

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
pwd
# Output: /Users/username/Documents/catatan-harian (macOS/Linux)
# Output: C:\Users\username\Documents\catatan-harian (Windows)
```
</div>

Di VS Code, Anda akan melihat folder `catatan-harian` terbuka di Explorer panel.
</div>

</div>

## Langkah 2: Inisialisasi Repository

<div class="steps">

<div class="step">
**Initialize via Git CLI**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git init
```
</div>

Output yang diharapkan:
```
Initialized empty Git repository in /Users/username/Documents/catatan-harian/.git/
```

<div class="callout info">
💡 **What just happened?** Git membuat folder tersembunyi `.git` yang berisi database untuk menyimpan histori project Anda.
</div>
</div>

<div class="step">
**Initialize via VS Code**

**Alternatif cara via VS Code:**

1. Buka **Command Palette**: `Ctrl+Shift+P`
2. Ketik "Git: Initialize Repository"
3. Pilih current folder

<div class="image-placeholder">
[Gambar: Screenshot VS Code Command Palette dengan "Git: Initialize Repository" highlighted]
</div>

Atau:

1. Buka **Source Control panel** (`Ctrl+Shift+G`)
2. Klik tombol **"Initialize Repository"**

<div class="image-placeholder">
[Gambar: Screenshot VS Code Source Control panel dengan tombol "Initialize Repository"]
</div>
</div>

<div class="step">
**Verifikasi Inisialisasi**

Check apakah folder `.git` sudah terbuat:

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
# List all files including hidden ones
ls -la

# Atau di Windows
dir /a
```
</div>

Anda seharusnya melihat folder `.git` di list.

**Di VS Code:**
- Source Control panel sekarang aktif
- Status bar di bawah menunjukkan branch name (biasanya `main`)
- Explorer akan menunjukkan icon Git di samping folder name

<div class="image-placeholder">
[Gambar: Screenshot VS Code showing active Git repository dengan status bar dan Source Control panel]
</div>
</div>

</div>

## Langkah 3: Membuat File Pertama

Mari buat beberapa file untuk mulai tracking dengan Git.

<div class="steps">

<div class="step">
**Buat README.md**

<div class="code-with-label">
<div class="code-label">Via VS Code</div>

1. Klik **New File** di Explorer panel
2. Beri nama `README.md`
3. Isi dengan konten berikut:
</div>

**Konten README.md:**
```markdown
# Catatan Harian

Repository untuk menyimpan catatan harian pribadi dalam format Markdown.

## Struktur Folder

- `2024/` - Catatan per tahun
- `templates/` - Template untuk catatan baru

## Cara Penggunaan

1. Copy template dari folder `templates/`
2. Buat file baru dengan format `DD-MMMM.md`
3. Tulis catatan harian Anda
4. Commit perubahan ke Git

## Timeline

- **Januari 2024**: Project dimulai
- **Target**: Konsisten menulis setiap hari

---

*"The best time to plant a tree was 20 years ago. The second best time is now."*
```

<div class="image-placeholder">
[Gambar: Screenshot VS Code editor dengan konten README.md dan file explorer showing README.md]
</div>
</div>

<div class="step">
**Buat Template File**

Buat folder dan file template:

<div class="code-with-label">
<div class="code-label">Via VS Code</div>

1. Klik **New Folder** → beri nama `templates`
2. Di dalam folder `templates`, buat file `template-harian.md`
</div>

**Konten template-harian.md:**
```markdown
# [Tanggal] - [Hari]

## Mood Hari Ini
- 😊 Bahagia
- 😐 Biasa saja  
- 😔 Sedih
- 😤 Stres
- 🤔 Bingung

## Kegiatan Utama
- [ ] Pagi: 
- [ ] Siang: 
- [ ] Sore: 
- [ ] Malam: 

## Pembelajaran Hari Ini
> Apa yang saya pelajari hari ini?

## Hal yang Disyukuri
1. 
2. 
3. 

## Target Besok
- [ ] 
- [ ] 

## Catatan Tambahan
> Refleksi bebas tentang hari ini...

---
*Ditulis pada: [Tanggal dan Waktu]*
```
</div>

<div class="step">
**Buat Catatan Pertama**

Mari buat catatan pertama sebagai contoh:

<div class="code-with-label">
<div class="code-label">Via VS Code</div>

1. Buat folder `2024`
2. Di dalam `2024`, buat file `01-januari-2024.md`
</div>

**Konten 01-januari-2024.md:**
```markdown
# 01 Januari 2024 - Senin

## Mood Hari Ini
- 😊 Bahagia - Excited untuk project Git baru!

## Kegiatan Utama
- [x] Pagi: Belajar Git untuk pemula
- [x] Siang: Setup repository pertama
- [ ] Sore: Praktik commit pertama
- [ ] Malam: Review dan planning besok

## Pembelajaran Hari Ini
> Hari ini saya belajar cara membuat repository Git pertama. Ternyata Git itu seperti mesin waktu untuk kode!

## Hal yang Disyukuri
1. Punya waktu untuk belajar teknologi baru
2. Dokumentasi Git yang lengkap dan mudah dipahami
3. VS Code yang user-friendly untuk Git

## Target Besok
- [ ] Belajar cara commit dan push
- [ ] Praktik branching sederhana

## Catatan Tambahan
> Repository pertama sudah jadi! Next step adalah belajar cara track changes dan membuat commit. Semoga konsisten nulis catatan setiap hari.

---
*Ditulis pada: 1 Januari 2024, 14:30*
```
</div>

</div>

## Langkah 4: Melihat Status Repository

Sekarang kita punya beberapa file. Mari lihat bagaimana Git melihat situasi ini.

<div class="steps">

<div class="step">
**Check Status via Git CLI**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git status
```
</div>

Output yang diharapkan:
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
        templates/
        2024/

nothing added to commit but untracked files present (use "git add" to track)
```

<div class="callout info">
💡 **Penjelasan Status:**
- **On branch main**: Anda sedang di branch utama
- **No commits yet**: Belum ada commit (checkpoint) yang dibuat
- **Untracked files**: File-file ini belum di-track oleh Git
</div>
</div>

<div class="step">
**Check Status via VS Code**

Di VS Code, perhatikan:

1. **Source Control panel** (`Ctrl+Shift+G`) menunjukkan jumlah changes
2. **File Explorer** menunjukkan file dengan status:
   - **Untracked files**: Huruf "U" warna hijau di samping nama file

<div class="image-placeholder">
[Gambar: Screenshot VS Code Source Control panel showing untracked files dengan status indicators]
</div>
</div>

</div>

## Langkah 5: Memahami Git Workflow

Sebelum melanjutkan, mari pahami konsep **Three Trees** atau **Three States** dalam Git:

<div class="image-placeholder">
[Gambar: Diagram Git workflow showing Working Directory → Staging Area → Repository dengan arrows dan labels]
</div>

### 1. Working Directory (Working Tree)
- Folder project Anda dengan file-file aktual
- Tempat Anda mengedit file
- File changes yang belum di-stage

### 2. Staging Area (Index)
- Area temporary untuk menyiapkan commit
- File changes yang sudah di-add tapi belum di-commit
- Seperti "shopping cart" sebelum checkout

### 3. Repository (.git directory)
- Database Git yang menyimpan semua commits
- Histori lengkap project
- File changes yang sudah di-commit (permanent)

### Workflow Commands

```bash
# Working Directory → Staging Area
git add filename

# Staging Area → Repository
git commit -m "message"

# Check status di setiap tahap
git status
```

<div class="callout tip">
💡 **Analogi**: Bayangkan Anda sedang packing koper:
- **Working Directory**: Barang-barang di kamar (untracked)
- **Staging Area**: Barang yang sudah diletakkan di koper tapi belum dikunci (staged)
- **Repository**: Koper yang sudah dikunci dan ready to go (committed)
</div>

## Eksplorasi Folder .git

Mari kita intip isi folder `.git` untuk memahami bagaimana Git bekerja.

<div class="callout warning">
⚠️ **PERINGATAN**: Ini hanya untuk edukasi. Jangan pernah edit file di `.git` secara manual!
</div>

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
# List isi folder .git
ls -la .git/

# Atau di Windows
dir .git
```
</div>

File dan folder penting di `.git`:

```
.git/
├── config              ← Repository configuration
├── HEAD               ← Pointer ke current branch
├── branches/          ← Deprecated (legacy)
├── description        ← Repository description
├── hooks/            ← Git hooks (scripts)
├── info/             ← Global excludes
├── objects/          ← Git object database
├── refs/             ← References (branches, tags)
└── logs/             ← Reflog (history of ref changes)
```

### File Penting

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
# Lihat current branch
cat .git/HEAD

# Lihat config repository
cat .git/config
```
</div>

Output `.git/HEAD`:
```
ref: refs/heads/main
```

Output `.git/config`:
```
[core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
[user]
    name = Your Name
    email = your.email@example.com
```

## Troubleshooting Common Issues

### Repository Already Exists

**Problem**: Error `fatal: Existing git repository`

**Solution**: 
- Anda sudah punya `.git` folder
- Hapus `.git` jika ingin mulai fresh: `rm -rf .git`
- Atau pindah ke folder lain

### Permission Denied

**Problem**: Permission denied saat `git init`

**Solution**:
```bash
# Fix folder permissions
chmod 755 .
```

### VS Code Not Detecting Git

**Problem**: VS Code tidak menunjukkan Git integration

**Solutions**:
1. Restart VS Code
2. Reload window: `Ctrl+Shift+P` → "Developer: Reload Window"
3. Check bahwa folder `.git` ada
4. Check Git path di VS Code settings

## Ringkasan

Setelah menyelesaikan bab ini, Anda telah:

✅ **Membuat repository Git pertama** dengan `git init`  
✅ **Memahami struktur** working directory vs `.git` folder  
✅ **Mengenal Git workflow** (Working Directory → Staging → Repository)  
✅ **Membuat file project** dengan contoh kasus catatan harian  
✅ **Menggunakan VS Code** untuk Git operations  
✅ **Melihat status repository** dengan `git status`  

## Latihan Mandiri

Sebelum lanjut ke bab berikutnya:

1. **Experiment**: Buat folder project lain dan coba `git init`
2. **Explore**: Lihat isi folder `.git` dan coba pahami strukturnya
3. **Modify**: Edit salah satu file dan jalankan `git status` lagi
4. **Question**: Apa perbedaan status sebelum dan sesudah mengedit file?

**Challenge**:
- Buat repository untuk project lain (misalnya: resep-masakan, book-notes, dll)
- Praktek workflow yang sama: buat folder → `git init` → tambah files → `git status`

---

**Next**: Di [Bab 4](./bab-04-tracking-perubahan.md), kita akan mulai tracking perubahan dan membuat commit pertama! 🎯
