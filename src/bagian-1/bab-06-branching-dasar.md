# Bab 6: Branching Dasar

## Pengantar

Branching adalah salah satu fitur paling powerful dalam Git yang memungkinkan Anda bekerja pada multiple "timeline" development secara paralel. Bayangkan Anda bisa membuat versi alternatif dari project, bereksperimen dengan fitur baru, tanpa merusak kode yang sudah stabil.

Di bab ini kita akan belajar:
- 🌳 **Konsep branching** dan mengapa penting
- 🔧 **Membuat dan pindah branch** dengan mudah
- 🔀 **Merge branch** sederhana tanpa konflik
- 💻 **Praktik dengan VS Code** dan Git CLI
- 📝 **Contoh kasus** branch untuk draft dan final catatan

<div class="callout tip">
💡 <strong>Analogi</strong>: Branch seperti parallel universe dalam komik Marvel. Anda bisa membuat timeline alternatif, bereksperimen dengan skenario berbeda, lalu memutuskan mana yang ingin dijadikan "canon" di timeline utama.
</div>

## Konsep Dasar Branching

### Apa itu Branch?

**Branch** adalah pointer yang bergerak ke commit terbaru dalam sebuah "jalur" development. Secara default, Git membuat branch bernama `main` (atau `master` di versi lama).

```
main:     A---B---C (HEAD)
```

Ketika Anda membuat branch baru, Git membuat pointer baru dari posisi saat ini:

```
main:     A---B---C
               \
feature:        D---E (HEAD)
```

### Keuntungan Branching

#### 1. **Isolated Development**
- Eksperimen tanpa merusak kode stabil
- Multiple features bisa dikembangkan bersamaan
- Easy rollback jika ada masalah

#### 2. **Organized Workflow**
- `main` branch untuk kode stabil
- `feature` branch untuk fitur baru
- `bugfix` branch untuk perbaikan

#### 3. **Collaboration Made Easy**
- Tim bisa bekerja di branch berbeda
- Merge ketika fitur sudah selesai
- Conflict resolution yang terstruktur

### Kapan Menggunakan Branch?

✅ **Buat branch baru untuk:**
- Eksperimen fitur baru
- Fix bug yang kompleks
- Refactoring besar
- Versi development vs production

❌ **Tidak perlu branch untuk:**
- Typo fixes sederhana
- Update dokumentasi kecil
- Perubahan konfigurasi minor

## Contoh Kasus: Branch untuk Draft dan Final Catatan

Untuk memahami branching, kita akan menggunakan skenario praktis:

**Skenario**: Anda menulis catatan harian dan ingin:
1. **`main` branch**: Berisi catatan final yang sudah dipoles
2. **`draft` branch**: Tempat menulis draft kasar sebelum dipoles
3. **`weekly-summary` branch**: Untuk membuat rangkuman mingguan

## Langkah 1: Melihat Branch yang Ada

### Praktik dengan VS Code

<div class="steps">

<div class="step">
<strong>Branch Indicator di Status Bar</strong>

Di bagian bawah kiri VS Code, Anda akan melihat nama branch saat ini (biasanya `main`). Ini menunjukkan branch yang sedang aktif.

<div class="image-placeholder">
[Gambar: Screenshot VS Code status bar showing current branch name]
</div>
</div>

<div class="step">
<strong>Branch Selector</strong>

Klik pada nama branch di status bar untuk membuka **branch selector** yang menampilkan:
- Branch yang tersedia
- Option untuk create branch baru
- Option untuk checkout branch lain

<div class="image-placeholder">
[Gambar: Screenshot VS Code branch selector dropdown menu]
</div>
</div>

</div>

### Praktik dengan Git CLI

<div class="code-with-label">
<div class="code-label">Git CLI - List Branches</div>

```bash
git branch
```
</div>

**Output:**
```
* main
```

Tanda `*` menunjukkan branch yang sedang aktif.

Untuk melihat semua branch (termasuk remote):

<div class="code-with-label">
<div class="code-label">Git CLI - All Branches</div>

```bash
git branch -a
```
</div>

## Langkah 2: Membuat Branch Baru

### Praktik dengan VS Code

<div class="steps">

<div class="step">
<strong>Via Branch Selector</strong>

1. Klik nama branch di status bar
2. Pilih **"Create new branch"**
3. Ketik nama branch baru: `draft`
4. Tekan Enter

VS Code akan otomatis:
- Membuat branch baru
- Switch ke branch tersebut
- Update status bar dengan nama branch baru

<div class="image-placeholder">
[Gambar: Screenshot VS Code create new branch dialog]
</div>
</div>

<div class="step">
<strong>Via Command Palette</strong>

1. `Ctrl+Shift+P` → ketik "Git: Create Branch"
2. Masukkan nama branch: `draft`
3. Pilih starting point (biasanya current branch)

</div>

</div>

### Praktik dengan Git CLI

<div class="code-with-label">
<div class="code-label">Git CLI - Create Branch</div>

```bash
git branch draft
```
</div>

**Hanya membuat branch** tanpa pindah ke sana.

### Branch dan Switch Sekaligus

<div class="code-with-label">
<div class="code-label">Git CLI - Create and Switch</div>

```bash
git checkout -b draft
# atau di Git versi baru (2.23+)
git switch -c draft
```
</div>

**Membuat branch dan langsung pindah** ke branch tersebut.

### Verifikasi Branch Baru

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git branch
```
</div>

**Output sekarang:**
```
* draft
  main
```

## Langkah 3: Bekerja di Branch Baru

Sekarang Anda berada di branch `draft`. Semua perubahan yang dibuat akan tersimpan di branch ini.

<div class="steps">

<div class="step">
<strong>Buat File Draft</strong>

Di branch `draft`, buat file baru:

**File: `2024/06-januari-2024-draft.md`**
```markdown
# 06 Januari 2024 - Draft Kasar

## Brain dump hari ini
- Belajar Git branching - masih bingung tapi seru
- Meeting panjang yang membosankan 
- Makan siang enak tapi mahal
- Coding sampai malam, bug nya susah banget

## TODO besok
- Fix bug di project
- Baca dokumentasi Git lebih detail
- Olahraga (hopefully!)

## Random thoughts
Kenapa branching Git kayak parallel universe? Mind blown! 🤯

---
*Draft version - belum final*
```
</div>

<div class="step">
**Commit di Branch Draft**

<div class="code-with-label">
<div class="code-label">VS Code</div>

1. Stage file via Source Control panel
2. Commit message: "Draft catatan 6 Januari"
3. Commit
</div>

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git add 2024/06-januari-2024-draft.md
git commit -m "Draft catatan 6 Januari"
```
</div>
</div>

</div>

## Langkah 4: Pindah Antar Branch

### Switch ke Main Branch

<div class="steps">

<div class="step">
<strong>Via VS Code</strong>

1. Klik nama branch di status bar
2. Pilih `main` dari dropdown
3. VS Code akan switch ke main branch

Perhatikan bahwa file draft yang tadi dibuat **tidak akan terlihat** di main branch!

<div class="image-placeholder">
[Gambar: Screenshot VS Code file explorer showing different files in main vs draft branch]
</div>
</div>

<div class="step">
<strong>Via Git CLI</strong>

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git checkout main
# atau di Git versi baru
git switch main
```
</div>
</div>

</div>

### Buat Konten di Main Branch

Di main branch, buat versi final dari catatan:

**File: `2024/06-januari-2024.md`**
```markdown
# 06 Januari 2024 - Senin

## Mood Hari Ini
- 🤔 Curious - Belajar konsep baru dalam Git

## Kegiatan Utama
- [x] Pagi: Meeting team standup
- [x] Siang: Belajar Git branching dan workflow
- [x] Sore: Deep dive ke dokumentasi Git
- [x] Malam: Praktik hands-on dengan branch

## Pembelajaran Hari Ini
> Hari ini saya memahami konsep branching dalam Git. Ternyata branching memungkinkan development paralel yang sangat berguna untuk eksperimen dan kolaborasi tim.

## Hal yang Disyukuri
1. Konsep Git mulai clear dan masuk akal
2. Tim yang supportive dalam proses belajar
3. Dokumentasi yang komprehensif tersedia

## Target Besok
- [ ] Praktik merge branch
- [ ] Pelajari conflict resolution
- [ ] Eksplorasi advanced Git workflow

## Catatan Tambahan
> Branching adalah game-changer! Sekarang bisa eksperimen tanpa takut merusak kode utama.

---
*Ditulis pada: 6 Januari 2024, 21:30*
```

Commit file ini di main branch:

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git add 2024/06-januari-2024.md
git commit -m "Catatan final 6 Januari 2024"
```
</div>

## Langkah 5: Visualisasi Branch

### Lihat Git History dengan Branch

<div class="code-with-label">
<div class="code-label">Git CLI - Graph View</div>

```bash
git log --graph --oneline --all
```
</div>

**Output:**
```
* a1b2c3d (HEAD -> main) Catatan final 6 Januari 2024
| * b2c3d4e (draft) Draft catatan 6 Januari
|/
* c3d4e5f Initial commit dengan README
```

**Interpretasi:**
- `HEAD -> main`: Anda sedang di main branch
- `(draft)`: Ada commit di draft branch
- `|/`: Visualisasi percabangan

### VS Code Git Graph

Jika menggunakan extension **Git Graph**:
1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "Git Graph: View Git Graph"
3. Explore visual representation of branches

<div class="image-placeholder">
[Gambar: Screenshot Git Graph extension showing branch visualization]
</div>

## Langkah 6: Merge Branch Sederhana

Setelah puas dengan eksperimen di draft branch, saatnya menggabungkan perubahan ke main branch.

### Konsep Merge

**Merge** adalah proses menggabungkan perubahan dari satu branch ke branch lain. Ada beberapa tipe merge:

1. **Fast-forward**: Ketika main branch tidak berubah sejak branch dibuat
2. **3-way merge**: Ketika kedua branch memiliki commit baru
3. **Squash merge**: Menggabungkan multiple commits jadi satu

### Skenario: Merge Draft Content

Mari kita merge beberapa ide bagus dari draft ke main branch.

<div class="steps">

<div class="step">
<strong>Persiapan: Pastikan di Main Branch</strong>

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git checkout main
git status
```
</div>
</div>

<div class="step">
<strong>Copy Insights dari Draft</strong>

Sebelum merge otomatis, mari ambil beberapa insights dari draft secara manual:

Edit `2024/06-januari-2024.md` dan tambahkan section:

```markdown
## Insights dari Draft
> "Branching adalah game-changer untuk development workflow!"

## Random Thoughts
- Git branching seperti parallel universe development
- Sangat membantu untuk eksperimen tanpa risiko
```

Commit perubahan ini:

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git add 2024/06-januari-2024.md
git commit -m "Menambahkan insights dari draft branch"
```
</div>
</div>

</div>

### Merge via VS Code

<div class="steps">

<div class="step">
<strong>Via Command Palette</strong>

1. Pastikan Anda di main branch
2. `Ctrl+Shift+P` → "Git: Merge Branch"
3. Pilih branch yang ingin di-merge: `draft`
4. VS Code akan melakukan merge

<div class="image-placeholder">
[Gambar: Screenshot VS Code merge branch dialog]
</div>
</div>

<div class="step">
<strong>Review Merge Result</strong>

Setelah merge, check:
- File history di Source Control
- Apakah ada conflicts (akan dibahas di bab lanjutan)
- Commit history yang updated

</div>

</div>

### Merge via Git CLI

<div class="code-with-label">
<div class="code-label">Git CLI - Basic Merge</div>

```bash
# Pastikan di main branch
git checkout main

# Merge draft branch
git merge draft
```
</div>

**Output jika successful:**
```
Merge made by the 'ort' strategy.
 2024/06-januari-2024-draft.md | 15 +++++++++++++++
 1 file changed, 15 insertions(+)
```

### Verifikasi Merge

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git log --graph --oneline
```
</div>

**Output setelah merge:**
```
*   d4e5f6g (HEAD -> main) Merge branch 'draft'
|\
| * b2c3d4e (draft) Draft catatan 6 Januari
* | a1b2c3d Menambahkan insights dari draft branch
|/
* c3d4e5f Initial commit dengan README
```

## Langkah 7: Clean Up Branch

Setelah merge berhasil, branch draft tidak diperlukan lagi.

### Delete Branch

<div class="code-with-label">
<div class="code-label">Git CLI - Delete Branch</div>

```bash
git branch -d draft
```
</div>

**Output:**
```
Deleted branch draft (was b2c3d4e).
```

### Verifikasi

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git branch
```
</div>

**Output:**
```
* main
```

<div class="callout warning">
⚠️ <strong>Hati-hati</strong>: <code>git branch -d</code> hanya menghapus branch yang sudah di-merge. Untuk force delete, gunakan <code>git branch -D</code>.
</div>

## Praktik Lanjutan: Weekly Summary Branch

Mari praktik skenario yang lebih kompleks:

<div class="steps">

<div class="step">
<strong>Buat Branch Weekly Summary</strong>

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git checkout -b weekly-summary
```
</div>
</div>

<div class="step">
<strong>Buat File Summary</strong>

**File: `weekly/week-1-january-2024.md`**
```markdown
# Week 1 - January 2024 Summary

## Overview
Minggu pertama tahun 2024 fokus pada learning Git fundamentals.

## Daily Highlights
- **06 Jan**: Breakthrough moment dengan Git branching
- **05 Jan**: First successful commit workflow
- **04 Jan**: Repository setup dan basic commands

## Key Learnings
1. Git branching memungkinkan parallel development
2. Workflow edit → stage → commit sudah smooth
3. VS Code integration sangat membantu visualisasi

## Challenges
- Masih perlu practice dengan merge conflicts
- Belum explore remote repository workflow
- Command line masih occasional struggle

## Goals for Next Week
- [ ] Practice dengan GitHub remote workflow
- [ ] Learn collaborative Git workflow
- [ ] Master conflict resolution

## Statistics
- **Commits this week**: 8
- **Branches created**: 2
- **Files tracked**: 12

---
*Generated on: 6 January 2024*
```
</div>

<div class="step">
<strong>Commit dan Merge</strong>

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
# Commit di weekly-summary branch
git add weekly/week-1-january-2024.md
git commit -m "Weekly summary untuk minggu pertama Januari"

# Switch ke main dan merge
git checkout main
git merge weekly-summary

# Clean up
git branch -d weekly-summary
```
</div>
</div>

</div>

## Best Practices untuk Branching

### 1. **Naming Conventions**

```bash
# ✅ Good naming
git checkout -b feature/add-user-login
git checkout -b bugfix/fix-navbar-responsive
git checkout -b hotfix/security-patch-v1.2.1

# ❌ Bad naming
git checkout -b test
git checkout -b fix
git checkout -b asdf
```

### 2. **Branch Lifecycle**

```bash
# 1. Create dan switch
git checkout -b feature/new-feature

# 2. Work dan commit
git add .
git commit -m "Implement new feature"

# 3. Switch ke main
git checkout main

# 4. Merge
git merge feature/new-feature

# 5. Delete
git branch -d feature/new-feature
```

### 3. **Keep Main Clean**

- Main branch selalu dalam kondisi stabil
- Test di feature branch sebelum merge
- Gunakan descriptive commit messages

## Troubleshooting Common Issues

### Branch Switch Blocked

**Problem**: `error: Your local changes to the following files would be overwritten by checkout`

**Solutions**:
```bash
# Option 1: Commit changes dulu
git add .
git commit -m "WIP: temporary commit"

# Option 2: Stash changes (temporary save)
git stash
git checkout other-branch
git stash pop  # restore changes later
```

### Cannot Delete Branch

**Problem**: `error: The branch 'feature' is not fully merged`

**Solutions**:
```bash
# Pastikan sudah merge
git checkout main
git merge feature

# Atau force delete (hati-hati!)
git branch -D feature
```

### Lost in Branches

**Problem**: Tidak ingat branch mana yang aktif

**Solutions**:
```bash
# Lihat current branch
git branch

# Lihat all branches dengan last commit
git branch -v

# Lihat branch dengan recent activity
git for-each-ref --sort=-committerdate refs/heads/
```

## Latihan Mandiri

<div class="steps">

<div class="step">
<strong>Basic Branch Practice</strong>

1. Buat branch baru: `experiment`
2. Buat file baru di branch tersebut
3. Commit perubahan
4. Switch kembali ke main
5. Merge experiment branch
6. Delete branch setelah merge
</div>

<div class="step">
<strong>Advanced Branch Workflow</strong>

1. Buat dua branch: `feature-a` dan `feature-b`
2. Buat commits berbeda di masing-masing branch
3. Merge kedua branch ke main secara berurutan
4. Lihat hasil dengan `git log --graph`
</div>

<div class="step">
<strong>Real-world Scenario</strong>

1. Buat branch `blog-draft` untuk menulis artikel
2. Tulis draft kasar dengan typos dan informal language
3. Buat branch `blog-final` dari main
4. Copy konten dari draft, tapi polish dan edit
5. Merge `blog-final` ke main
6. Delete kedua branch
</div>

</div>

## Ringkasan

Setelah menyelesaikan bab ini, Anda telah menguasai:

✅ **Konsep fundamental branching** dan keuntungannya  
✅ **Membuat dan mengelola branch** dengan VS Code dan Git CLI  
✅ **Switch antar branch** dengan smooth  
✅ **Merge branch sederhana** tanpa konflik  
✅ **Branch lifecycle management** (create, work, merge, delete)  
✅ **Best practices** untuk naming dan workflow  
✅ **Troubleshooting** masalah umum dengan branching  

### Branch Command Cheat Sheet

| Command | Fungsi |
|---------|--------|
| `git branch` | List semua branch |
| `git branch -v` | List dengan last commit info |
| `git checkout -b name` | Create dan switch ke branch baru |
| `git switch -c name` | Create dan switch (Git 2.23+) |
| `git checkout main` | Switch ke main branch |
| `git merge feature` | Merge feature branch ke current |
| `git branch -d name` | Delete branch (safe) |
| `git branch -D name` | Force delete branch |

### Key Takeaways

🌟 **Branching is powerful**: Memungkinkan parallel development tanpa risiko  
🌟 **Main branch sacred**: Keep it clean dan stable  
🌟 **Descriptive names**: Branch names harus jelas dan meaningful  
🌟 **Regular cleanup**: Delete branches yang sudah tidak diperlukan  
🌟 **Practice makes perfect**: Semakin sering pakai, semakin natural  

---

**Next**: Di [Bab 7](./bab-07-membatalkan-perubahan.md), kita akan belajar cara membatalkan perubahan dan mengatasi kesalahan dalam Git! ↩️
