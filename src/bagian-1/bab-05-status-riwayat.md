# Bab 5: Melihat Status dan Riwayat

## Pengantar

Setelah mulai melakukan tracking perubahan dengan commit, kemampuan selanjutnya yang perlu dikuasai adalah **melihat status** repository dan **riwayat perubahan**. Ini seperti kemampuan untuk melihat "apa yang sedang terjadi" dan "apa yang sudah terjadi" dalam project Anda.

Di bab ini kita akan belajar:
- 🔍 **Memeriksa status** repository saat ini
- 📜 **Melihat log commit** dan histori perubahan
- 🔄 **Melihat perbedaan** antar versi file
- 📊 **Menggunakan VS Code** untuk visualisasi yang lebih baik

<div class="callout tip">
💡 <strong>Analogi</strong>: Bayangkan Git seperti kamera CCTV untuk project Anda. Status menunjukkan apa yang terjadi "sekarang", sedangkan log menunjukkan "rekaman" semua kejadian sebelumnya.
</div>

## Contoh Kasus: Review Catatan Mingguan

Untuk praktik, kita akan menggunakan skenario dimana Anda sudah menulis catatan harian selama seminggu dan ingin:
1. **Cek status** - file mana yang sudah diubah hari ini
2. **Review histori** - melihat catatan apa saja yang sudah ditulis
3. **Compare changes** - melihat perbedaan antara catatan kemarin dan hari ini

## 1. Memeriksa Status Repository

### Apa itu Git Status?

`git status` menunjukkan kondisi repository saat ini:
- File mana yang **belum di-track** (untracked)
- File mana yang **sudah diubah** tapi belum di-stage (modified)
- File mana yang **sudah di-stage** tapi belum di-commit (staged)
- File mana yang **sudah clean** (tidak ada perubahan)

### Praktik dengan VS Code

<div class="steps">

<div class="step">
<strong>Buka Source Control Panel</strong>

1. Tekan `Ctrl+Shift+G` atau klik icon Source Control di sidebar
2. Panel akan menunjukkan berbagai kategori:
   - **Changes**: File yang sudah diubah tapi belum di-stage
   - **Staged Changes**: File yang siap untuk di-commit
   - **Merge Changes**: File yang ada konflik (nanti di bab lanjutan)

<div class="image-placeholder">
[Gambar: Screenshot VS Code Source Control panel menunjukkan berbagai status file]
</div>
</div>

<div class="step">
<strong>Interpretasi Status Indicators</strong>

Di VS Code, setiap file punya indikator warna dan huruf:
- **U** (hijau): Untracked - file baru yang belum pernah di-commit
- **M** (orange): Modified - file yang sudah ada tapi diubah
- **A** (hijau): Added - file baru yang sudah di-stage
- **D** (merah): Deleted - file yang dihapus
- **R** (hijau): Renamed - file yang diganti nama

</div>

</div>

### Praktik dengan Git CLI

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git status
```
</div>

**Output yang mungkin muncul:**
```
On branch main
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)
        new file:   2024/02-januari-2024.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes to working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        templates/weekly-template.md
```

<div class="callout info">
💡 <strong>Penjelasan Status:</strong>
   <ul>
      <li><strong>Changes to be committed</strong>: File yang sudah di-stage, siap commit</li>
      <li><strong>Changes not staged</strong>: File yang diubah tapi belum di-stage</li>
      <li><strong>Untracked files</strong>: File baru yang belum pernah di-add</li>
   </ul>
</div>

### Status Singkat (Short Status)

Untuk output yang lebih kompak:

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git status --short
# atau
git status -s
```
</div>

**Output singkat:**
```
A  2024/02-januari-2024.md
 M README.md
?? templates/weekly-template.md
```

**Keterangan format:**
- **A** = Added (staged)
- **M** = Modified
- **??** = Untracked

## 2. Melihat Log Commit

### Konsep Git Log

Git log menampilkan histori semua commit yang pernah dibuat, mulai dari yang terbaru. Setiap commit menunjukkan:
- **Hash commit**: ID unik untuk commit (SHA-1)
- **Author**: Siapa yang membuat commit
- **Date**: Kapan commit dibuat
- **Message**: Pesan yang diberikan saat commit

### Praktik dengan VS Code

<div class="steps">

<div class="step">
<strong>Melihat Git History</strong>

1. **Via Command Palette**:
   - `Ctrl+Shift+P` → ketik "Git: View History"
   - Atau install extension **Git History** untuk fitur lebih lengkap

2. **Via GitLens Extension** (jika terinstall):
   - Klik tab **"Source Control"** → **"Commits"**
   - Atau klik icon jam di status bar

<div class="image-placeholder">
[Gambar: Screenshot VS Code Git history view dengan list commits]
</div>
</div>

<div class="step">
<strong>Eksplorasi Commit Details</strong>

Klik pada salah satu commit untuk melihat:
- **Files changed**: File apa saja yang berubah
- **Diff view**: Perubahan detail line-by-line
- **Commit metadata**: Author, date, message

</div>

</div>

### Praktik dengan Git CLI

<div class="code-with-label">
<div class="code-label">Git CLI - Basic Log</div>

```bash
git log
```
</div>

**Output standar:**
```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
Author: Budi Santoso <budi.santoso@gmail.com>
Date:   Tue Jan 2 14:30:25 2024 +0700

    Menambahkan catatan harian tanggal 2 Januari

commit b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0a1
Author: Budi Santoso <budi.santoso@gmail.com>
Date:   Mon Jan 1 09:15:10 2024 +0700

    Initial commit: Setup repository catatan harian
```

### Log Format yang Lebih Kompak

<div class="code-with-label">
<div class="code-label">Git CLI - One Line</div>

```bash
git log --oneline
```
</div>

**Output singkat:**
```
a1b2c3d Menambahkan catatan harian tanggal 2 Januari
b2c3d4e Initial commit: Setup repository catatan harian
```

### Log dengan Graph (Visualisasi Branch)

<div class="code-with-label">
<div class="code-label">Git CLI - Graph</div>

```bash
git log --graph --oneline --all
```
</div>

**Output dengan visualisasi:**
```
* a1b2c3d Menambahkan catatan harian tanggal 2 Januari
* b2c3d4e Initial commit: Setup repository catatan harian
```

### Log untuk File Tertentu

<div class="code-with-label">
<div class="code-label">Git CLI - File History</div>

```bash
git log --oneline README.md
```
</div>

### Log dengan Statistik Perubahan

<div class="code-with-label">
<div class="code-label">Git CLI - Stat</div>

```bash
git log --stat
```
</div>

**Output dengan info file changes:**
```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
Author: Budi Santoso <budi.santoso@gmail.com>
Date:   Tue Jan 2 14:30:25 2024 +0700

    Menambahkan catatan harian tanggal 2 Januari

 2024/02-januari-2024.md | 25 +++++++++++++++++++++++++
 1 file changed, 25 insertions(+)
```

## 3. Melihat Perbedaan File (Diff)

### Konsep Git Diff

`git diff` menunjukkan perbedaan perubahan antara:
- **Working directory** vs **Staging area**
- **Staging area** vs **Last commit**
- **Dua commit** yang berbeda
- **Dua branch** yang berbeda

### Praktik dengan VS Code

<div class="steps">

<div class="step">
<strong>Melihat Changes pada File</strong>

1. Di **Source Control panel**, file yang diubah akan muncul di "Changes"
2. **Klik pada nama file** untuk membuka **diff view**
3. VS Code akan menampilkan **side-by-side comparison**:
   - **Kiri**: Versi sebelumnya
   - **Kanan**: Versi yang diubah
   - **Highlight**: Baris yang ditambah (hijau) dan dihapus (merah)

<div class="image-placeholder">
[Gambar: Screenshot VS Code diff view showing side-by-side file comparison]
</div>
</div>

<div class="step">
<strong>Navigate Changes</strong>

Gunakan arrows di bagian atas diff view untuk:
- **Previous change** (panah atas)
- **Next change** (panah bawah)

</div>

<div class="step">
<strong>Inline Diff View</strong>

Klik icon **"Toggle Inline View"** untuk melihat diff dalam satu panel:
- Baris yang dihapus ditampilkan dengan background merah
- Baris yang ditambah dengan background hijau

</div>

</div>

### Praktik dengan Git CLI

<div class="code-with-label">
<div class="code-label">Git CLI - Working Directory vs Staging</div>

```bash
git diff
```
</div>

**Output menunjukkan perubahan yang belum di-stage:**
```diff
diff --git a/README.md b/README.md
index 1234567..abcdefg 100644
--- a/README.md
+++ b/README.md
@@ -8,3 +8,7 @@
 ## Timeline
 
 - **Januari 2024**: Project dimulai
+- **Target**: Konsisten menulis setiap hari
+
+## Progress
+- ✅ Setup repository
```

**Interpretasi diff format:**
- **`---`**: File versi lama
- **`+++`**: File versi baru
- **`-`**: Baris yang dihapus (merah)
- **`+`**: Baris yang ditambah (hijau)

### Diff untuk Staged Changes

<div class="code-with-label">
<div class="code-label">Git CLI - Staging vs Last Commit</div>

```bash
git diff --cached
# atau
git diff --staged
```
</div>

### Diff Antara Dua Commit

<div class="code-with-label">
<div class="code-label">Git CLI - Compare Commits</div>

```bash
git diff HEAD~1 HEAD
# atau menggunakan commit hash
git diff a1b2c3d b2c3d4e
```
</div>

### Diff untuk File Tertentu

<div class="code-with-label">
<div class="code-label">Git CLI - Specific File</div>

```bash
git diff README.md
git diff HEAD~1 HEAD README.md
```
</div>

## Troubleshooting Common Issues

### Git Log Terlalu Panjang

**Problem**: Output `git log` terlalu panjang dan sulit dibaca

**Solutions**:
```bash
# Batasi jumlah commit yang ditampilkan
git log -5  # 5 commit terakhir

# Atau gunakan format oneline
git log --oneline -10
```

### Diff Output Sulit Dibaca

**Problem**: Output `git diff` membingungkan

**Solutions**:
```bash
# Gunakan diff tool eksternal (jika tersedia)
git difftool

# Atau gunakan VS Code sebagai diff tool
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'
```

### Cannot Exit Git Log

**Problem**: Stuck di dalam output `git log` yang panjang

**Solutions**:
- **Tekan `q`** untuk quit
- **Tekan `Space`** untuk scroll down
- **Tekan `Enter`** untuk scroll line by line
- **Tekan `h`** untuk help

<div class="callout info">
💡 <strong>Git menggunakan "less" pager</strong>: Sama seperti command `less` di Linux/macOS untuk navigasi file panjang.
</div>

## Latihan Mandiri

<div class="steps">

<div class="step">
<strong>Praktik Status dan Diff</strong>

1. Buat perubahan pada file `README.md`
2. Jalankan `git status` dan `git diff`
3. Stage perubahan dengan `git add`
4. Jalankan `git status` dan `git diff --cached`
5. Commit perubahan
</div>

<div class="step">
<strong>Praktik Log Exploration</strong>

1. Jalankan `git log` dengan berbagai format:
   - `git log`
   - `git log --oneline`
   - `git log --graph`
   - `git log --stat`
2. Bandingkan output dan pahami perbedaannya
</div>

</div>

## Ringkasan

Setelah menyelesaikan bab ini, Anda telah menguasai:

✅ **Memeriksa status repository** dengan `git status` (VS Code & CLI)  
✅ **Melihat log commit** dengan berbagai format dan filter  
✅ **Membaca git diff** untuk memahami perubahan file  
✅ **Navigasi histori** project dengan efisien  
✅ **Troubleshooting** masalah umum saat eksplorasi repository  

### Command Cheat Sheet

| Command | Fungsi |
|---------|--------|
| `git status` | Lihat status repository |
| `git status -s` | Status format singkat |
| `git log` | Lihat histori commit |
| `git log --oneline` | Log format compact |
| `git log --graph` | Log dengan visualisasi branch |
| `git diff` | Lihat perubahan working directory |
| `git diff --cached` | Lihat perubahan staging area |
| `git diff HEAD~1` | Compare dengan commit sebelumnya |

---

**Next**: Di [Bab 6](./bab-06-branching-dasar.md), kita akan belajar konsep branching untuk mengelola development paralel! 🌳
