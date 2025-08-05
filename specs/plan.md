# Rencana Buku: Git untuk Pemula

## Overview
Buku "Git untuk Pemula" mengadopsi konsep "X for Dummies" dengan pendekatan praktis dan mudah dipahami untuk programmer pemula. Buku dibagi menjadi 3 kategori besar sesuai dengan tingkat kompleksitas penggunaan Git.

## Target Pembaca
- Programmer awam dan orang yang baru belajar pemrograman
- Membutuhkan panduan step-by-step yang mudah diikuti
- Belum familiar dengan version control system

## Struktur Buku

### Bagian I: Penggunaan Git Secara Lokal (Tanpa Git Repository atau Remote)

#### Bab 1: Pengenalan Git
- Apa itu version control dan mengapa diperlukan
- Sejarah singkat Git
- Analogi sederhana: Git seperti sistem backup dokumen
- Perbedaan Git dengan sistem lain
- **Contoh kasus**: Mengapa programmer perlu Git

#### Bab 2: Persiapan dan Instalasi
- Instalasi Git di berbagai OS
- Setup VS Code dengan Git extension
- Konfigurasi awal Git (user.name, user.email)
- Pengenalan interface Git di VS Code
- **VS Code**: Git panel dan status bar
- **Git CLI**: `git config --global user.name "Nama"`
- **Placeholder gambar**: Screenshot VS Code dengan Git extension terinstall

#### Bab 3: Repository Pertama
- Konsep repository lokal
- Inisialisasi repository baru
- Struktur folder .git
- **Contoh kasus**: Membuat repository untuk catatan markdown harian
- **VS Code**: Initialize Repository button
- **Git CLI**: `git init`
- **Placeholder gambar**: Folder structure sebelum dan sesudah git init

#### Bab 4: Tracking Perubahan
- Konsep working directory, staging area, repository
- Diagram alur kerja Git
- Menambah file ke staging area
- Membuat commit pertama
- **Contoh kasus**: Tracking perubahan pada file catatan.md
- **VS Code**: Stage changes, commit message box
- **Git CLI**: `git add filename`, `git commit -m "message"`
- **Placeholder gambar**: Diagram working directory → staging → repository

#### Bab 5: Melihat Status dan Riwayat
- Memeriksa status repository
- Melihat log commit
- Melihat perubahan file (diff)
- **Contoh kasus**: Review perubahan mingguan pada catatan
- **VS Code**: Git history panel, diff viewer
- **Git CLI**: `git status`, `git log`, `git diff`
- **Placeholder gambar**: VS Code Git history view

#### Bab 6: Branching Dasar
- Konsep branching untuk development
- Membuat dan pindah branch
- Merge branch sederhana
- **Contoh kasus**: Branch untuk draft dan final catatan
- **VS Code**: Branch selector, create branch
- **Git CLI**: `git branch nama-branch`, `git checkout nama-branch`
- **Placeholder gambar**: Branch visualization diagram

#### Bab 7: Membatalkan Perubahan
- Unstage perubahan
- Discard perubahan di working directory
- Revert commit
- **Contoh kasus**: Membatalkan perubahan yang salah pada catatan
- **VS Code**: Discard changes, unstage buttons
- **Git CLI**: `git reset`, `git checkout -- filename`, `git revert`

### Bagian II: Penggunaan Git Secara Remote

#### Bab 8: Pengenalan GitHub
- Apa itu GitHub dan fungsinya
- Perbedaan Git dan GitHub
- Membuat akun GitHub
- Membuat repository pertama di GitHub
- **Contoh kasus**: Backup catatan ke cloud
- **VS Code**: GitHub integration
- **GitHub CLI**: `gh repo create`
- **Placeholder gambar**: GitHub interface untuk create repository

#### Bab 9: Menghubungkan Repository Lokal ke Remote
- Konsep remote repository
- Menambah remote origin
- Push pertama ke GitHub
- **Contoh kasus**: Upload catatan lokal ke GitHub
- **VS Code**: Publish to GitHub
- **Git CLI**: `git remote add origin URL`, `git push -u origin main`
- **GitHub CLI**: `gh repo create --source=. --push`

#### Bab 10: Clone dan Workflow Remote
- Clone repository dari GitHub
- Pull dan push workflow
- Fetch vs pull
- **Contoh kasus**: Akses catatan dari device berbeda
- **VS Code**: Clone repository command
- **Git CLI**: `git clone URL`, `git pull`, `git push`
- **GitHub CLI**: `gh repo clone`

#### Bab 11: Mengelola Website dengan GitHub Pages
- Setup GitHub Pages
- Deployment otomatis
- **Contoh kasus**: Website pribadi sederhana (HTML/CSS/JS)
- **VS Code**: Edit dan publish website files
- **Git CLI**: Push ke branch gh-pages
- **GitHub CLI**: `gh repo edit --enable-pages`
- **Placeholder gambar**: GitHub Pages settings page

### Bagian III: Kolaborasi dengan Git

#### Bab 12: Fork Repository (Studi Kasus)
- Konsep fork untuk kontribusi
- Workflow fork → clone → edit → push → pull request
- **Studi kasus**: Kontribusi ke repository open source
- **VS Code**: Work with forked repository
- **Git CLI**: Standard git workflow
- **GitHub CLI**: `gh repo fork`, `gh pr create`
- **Placeholder gambar**: Fork workflow diagram

#### Bab 13: Kolaborasi dengan Hak Akses Tulis Langsung (Studi Kasus)
- Menambah collaborator ke repository
- Direct push workflow
- Branch protection rules
- **Studi kasus**: Pengembangan website tim (2-3 orang)
- **VS Code**: Collaborative development workflow
- **Git CLI**: `git push`, `git pull`
- **GitHub CLI**: `gh repo edit --add-collaborator`
- **Placeholder gambar**: Collaborators settings page

#### Bab 14: Organisasi (Studi Kasus)
- GitHub Organizations
- Teams dan permissions
- Advanced workflow untuk tim besar
- **Studi kasus**: Project organisasi komunitas
- **VS Code**: Work within organization repository
- **Git CLI**: Standard workflow dengan multiple remotes
- **GitHub CLI**: `gh org list`, team management commands
- **Placeholder gambar**: Organization structure diagram

#### Bab 15: Pull Request dan Code Review
- Workflow pull request
- Code review process
- Merge strategies
- **Contoh kasus**: Review perubahan pada website tim
- **VS Code**: PR creation dan review
- **Git CLI**: Branch workflow untuk PR
- **GitHub CLI**: `gh pr create`, `gh pr review`
- **Placeholder gambar**: Pull request interface

#### Bab 16: Mengatasi Merge Conflicts
- Apa itu merge conflict
- Resolusi conflict manual
- Tools untuk conflict resolution
- **Contoh kasus**: Conflict pada file HTML yang sama
- **VS Code**: Built-in merge conflict resolver
- **Git CLI**: Manual conflict resolution
- **Placeholder gambar**: VS Code conflict resolution interface

## Format Penulisan Setiap Bab

### Struktur Standar
1. **Pengantar** - Mengapa topik ini penting dalam konteks nyata
2. **Konsep Dasar** - Teori singkat dengan analogi sederhana
3. **Contoh Kasus** - Implementasi praktis sesuai level kompleksitas
4. **Langkah-langkah VS Code** - Tutorial dengan screenshot
5. **Equivalent Git CLI** - Perintah command line yang setara
6. **GitHub CLI Integration** - Perintah gh yang relevan (jika ada)
7. **Troubleshooting** - Masalah umum dan solusinya
8. **Latihan Mandiri** - Praktik untuk pembaca
9. **Ringkasan** - Poin-poin penting yang harus diingat

### Gaya Penulisan
- Bahasa Indonesia formal tetapi tidak kaku
- Menggunakan analogi dari kehidupan sehari-hari
- Step-by-step yang sangat jelas dan detail
- Konsisten dalam penamaan dan terminology

### Ilustrasi dan Gambar
- **Code blocks** untuk semua perintah Git CLI dengan syntax highlighting
- **Placeholder gambar** untuk setiap screenshot yang dibutuhkan:
  - Format: `[Gambar: Deskripsi gambar yang dibutuhkan]`
  - Contoh: `[Gambar: Screenshot VS Code showing Git status panel with modified files]`
- **Diagram** untuk konsep-konsep penting seperti Git workflow
- **Callout boxes** untuk tips, warnings, dan best practices

## Contoh Kasus Bertingkat

### Level 1: Catatan Sederhana (Markdown)
- **Bagian I**: Catatan harian, journaling, dokumentasi pribadi
- File: `catatan-harian.md`, `todo-list.md`, `resep.md`
- Fokus: Basic Git operations

### Level 2: Website Pribadi (HTML/CSS/JS)
- **Bagian II & III**: Portfolio website, blog sederhana
- File: `index.html`, `style.css`, `script.js`, `about.html`
- Fokus: Remote repository, deployment, collaboration

### Studi Kasus Kolaborasi
1. **Fork Repository**: Kontribusi dokumentasi ke project open source
2. **Direct Collaboration**: Tim kecil mengembangkan website company profile
3. **Organization**: Komunitas developer yang mengelola multiple projects

## Teknologi dan Tools

### Development Environment
- **mdBook** untuk build system dan publikasi
- **GitHub Pages** untuk hosting website buku
- **GitHub Actions** untuk automated deployment

### Tools yang Dibahas
- **VS Code** sebagai editor utama dengan Git integration
- **Git CLI** untuk semua equivalent commands  
- **GitHub CLI (gh)** untuk GitHub-specific operations
- **Browser** untuk akses GitHub interface

## Deliverables
1. **Buku digital** dalam format mdBook (HTML)
2. **Source repository** dengan semua markdown files
3. **Contoh projects** untuk setiap studi kasus
4. **Template files** yang bisa digunakan pembaca
5. **Checklists** untuk setiap workflow yang dipelajari

## Success Criteria
Setelah membaca buku ini, pembaca dapat:
1. **Menggunakan Git lokal** untuk project pribadi
2. **Menggunakan GitHub** untuk backup dan sharing
3. **Berkolaborasi** dalam tim menggunakan GitHub workflow
4. **Memahami** equivalent commands antara VS Code dan Git CLI
5. **Menggunakan GitHub CLI** untuk automasi task umum

## Timeline Estimasi
- **Fase 1**: Bagian I (Git Lokal) - 3 minggu
- **Fase 2**: Bagian II (Git Remote) - 2 minggu  
- **Fase 3**: Bagian III (Kolaborasi) - 3 minggu
- **Fase 4**: Review dan Polish - 1 minggu
- **Total**: 9 minggu
