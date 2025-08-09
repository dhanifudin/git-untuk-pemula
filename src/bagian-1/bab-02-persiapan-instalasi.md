# Bab 2: Persiapan dan Instalasi

## Pengantar

Sebelum bisa menggunakan Git, kita perlu menyiapkan "senjata" terlebih dahulu. Bab ini akan memandu Anda step-by-step untuk:

- 🔧 **Install Git** di sistem operasi Anda
- 💻 **Setup VS Code** dengan Git extension
- ⚙️ **Konfigurasi awal** Git dengan identitas Anda
- 🛠️ **Install GitHub CLI** untuk automasi
- 🎯 **Verifikasi** bahwa semua sudah berjalan dengan baik

<div class="callout tip">
💡 <strong>Pro Tip</strong>: Jangan skip langkah verifikasi! Lebih baik spend 5 menit extra untuk memastikan setup benar daripada stuck berjam-jam nanti karena konfigurasi salah.
</div>

## Instalasi Git

### Windows

<div class="steps">

<div class="step">
**Download Git for Windows**

1. Buka [git-scm.com/download/win](https://git-scm.com/download/win)
2. Download akan otomatis dimulai
3. Jalankan file installer yang terdownload

<div class="image-placeholder">
[Gambar: Screenshot halaman download Git untuk Windows]
</div>
</div>

<div class="step">
**Jalankan Installer**

Ikuti wizard installer dengan settings berikut:
- ✅ **Select Components**: Centang semua default options
- ✅ **Choosing the default editor**: Pilih "Use Visual Studio Code as Git's default editor"
- ✅ **PATH environment**: Pilih "Git from the command line and also from 3rd-party software"
- ✅ **HTTPS transport backend**: Pilih "Use the OpenSSL library"
- ✅ **Line ending conversions**: Pilih "Checkout Windows-style, commit Unix-style line endings"
- ✅ **Terminal emulator**: Pilih "Use MinTTY"
- ✅ **Default behavior of git pull**: Pilih "Default (fast-forward or merge)"

<div class="image-placeholder">
[Gambar: Screenshot installer Git Windows dengan options yang recommended]
</div>
</div>

<div class="step">
**Verifikasi Instalasi**

Buka **Command Prompt** atau **PowerShell** dan jalankan:

<div class="code-with-label">
<div class="code-label">Command Prompt / PowerShell</div>

```cmd
git --version
```
</div>

Output yang diharapkan:
```
git version 2.41.0.windows.1
```
</div>

</div>

### macOS

<div class="steps">

<div class="step">
**Opsi 1: Homebrew (Recommended)**

Jika sudah punya Homebrew:

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
brew install git
```
</div>

Jika belum punya Homebrew, install dulu:

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
</div>
</div>

<div class="step">
**Opsi 2: Download dari Website**

1. Buka [git-scm.com/download/mac](https://git-scm.com/download/mac)
2. Download file .dmg
3. Jalankan installer dan ikuti petunjuk

<div class="image-placeholder">
[Gambar: Screenshot halaman download Git untuk macOS]
</div>
</div>

<div class="step">
**Verifikasi Instalasi**

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
git --version
```
</div>

Output yang diharapkan:
```
git version 2.41.0
```
</div>

</div>

### Linux (Ubuntu/Debian)

<div class="steps">

<div class="step">
**Install via Package Manager**

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
sudo apt update
sudo apt install git
```
</div>
</div>

<div class="step">
**Verifikasi Instalasi**

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
git --version
```
</div>

Output yang diharapkan:
```
git version 2.34.1
```
</div>

</div>

### Linux (CentOS/RHEL/Fedora)

<div class="steps">

<div class="step">
**Install via Package Manager**

Untuk CentOS/RHEL:
<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
sudo yum install git
```
</div>

Untuk Fedora:
<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
sudo dnf install git
```
</div>
</div>

</div>

## Setup Visual Studio Code

### Install VS Code

<div class="steps">

<div class="step">
**Download VS Code**

1. Buka [code.visualstudio.com](https://code.visualstudio.com)
2. Download sesuai OS Anda
3. Install dengan settings default

<div class="image-placeholder">
[Gambar: Screenshot halaman download VS Code]
</div>
</div>

<div class="step">
**Install Git Extension (Opsional)**

VS Code sudah punya built-in Git support, tapi extension tambahan bisa membantu:

1. Buka VS Code
2. Tekan `Ctrl+Shift+X` (Windows/Linux) atau `Cmd+Shift+X` (macOS)
3. Search dan install extensions berikut:
   - **GitLens** (sangat recommended)
   - **Git History**
   - **Git Graph**

<div class="image-placeholder">
[Gambar: Screenshot VS Code Extensions marketplace dengan GitLens highlighted]
</div>
</div>

</div>

## Konfigurasi Awal Git

Setelah Git terinstall, kita perlu setup identitas Anda. Informasi ini akan digunakan di setiap commit yang Anda buat.

### Setup User Identity

<div class="steps">

<div class="step">
**Set Username dan Email**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git config --global user.name "Nama Lengkap Anda"
git config --global user.email "email@anda.com"
```
</div>

**Contoh:**
<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git config --global user.name "Budi Santoso"
git config --global user.email "budi.santoso@gmail.com"
```
</div>

<div class="callout warning">
⚠️ <strong>Penting</strong>: Gunakan email yang sama dengan yang akan Anda gunakan untuk GitHub account nanti!
</div>
</div>

<div class="step">
**Set Default Branch Name**

Git versi terbaru menggunakan `main` sebagai default branch name:

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git config --global init.defaultBranch main
```
</div>
</div>

<div class="step">
**Set Default Editor**

Jika belum set saat instalasi:

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git config --global core.editor "code --wait"
```
</div>

Ini akan membuat VS Code sebagai default editor untuk Git operations.
</div>

</div>

### Konfigurasi Tambahan (Opsional)

<div class="steps">

<div class="step">
**Line Ending Configuration**

Untuk Windows users (handle CRLF vs LF):

<div class="code-with-label">
<div class="code-label">Git CLI - Windows</div>

```bash
git config --global core.autocrlf true
```
</div>

Untuk macOS/Linux users:

<div class="code-with-label">
<div class="code-label">Git CLI - macOS/Linux</div>

```bash
git config --global core.autocrlf input
```
</div>
</div>

<div class="step">
**Color Output**

Aktifkan colored output untuk readability:

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git config --global color.ui auto
```
</div>
</div>

</div>

### Verifikasi Konfigurasi

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git config --list --global
```
</div>

Output yang diharapkan:
```
user.name=Budi Santoso
user.email=budi.santoso@gmail.com
init.defaultbranch=main
core.editor=code --wait
core.autocrlf=true
color.ui=auto
```

## Install GitHub CLI

GitHub CLI (`gh`) adalah tool resmi dari GitHub untuk berinteraksi dengan GitHub dari command line.

### Windows

<div class="steps">

<div class="step">
**Via Winget (Windows 10+)**

<div class="code-with-label">
<div class="code-label">PowerShell</div>

```powershell
winget install --id GitHub.cli
```
</div>
</div>

<div class="step">
**Via Download Manual**

1. Buka [cli.github.com](https://cli.github.com)
2. Download Windows installer
3. Jalankan dan ikuti petunjuk

<div class="image-placeholder">
[Gambar: Screenshot halaman download GitHub CLI]
</div>
</div>

</div>

### macOS

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
brew install gh
```
</div>

### Linux

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
# Ubuntu/Debian
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```
</div>

### Verifikasi GitHub CLI

<div class="code-with-label">
<div class="code-label">Terminal</div>

```bash
gh --version
```
</div>

Output yang diharapkan:
```
gh version 2.32.1 (2023-07-18)
```

<div class="callout info">
💡 <strong>Note</strong>: Kita akan setup authentication ke GitHub di bab selanjutnya saat mulai bekerja dengan remote repositories.
</div>

## Test Setup dengan VS Code

Mari test apakah VS Code sudah terintegrasi dengan Git dengan baik.

<div class="steps">

<div class="step">
**Buka VS Code**

Jalankan VS Code dan perhatikan interface-nya.
</div>

<div class="step">
**Check Git Integration**

1. Buka **Command Palette**: `Ctrl+Shift+P` (Windows/Linux) atau `Cmd+Shift+P` (macOS)
2. Ketik "git" dan lihat apakah ada commands yang muncul
3. Anda seharusnya melihat options seperti:
   - Git: Clone
   - Git: Initialize Repository
   - Git: Stage All Changes
   - dll.

<div class="image-placeholder">
[Gambar: Screenshot VS Code Command Palette showing Git commands]
</div>
</div>

<div class="step">
**Check Source Control Panel**

1. Klik icon **Source Control** di sidebar kiri (atau `Ctrl+Shift+G`)
2. Anda seharusnya melihat panel Git yang kosong dengan tombol "Initialize Repository"

<div class="image-placeholder">
[Gambar: Screenshot VS Code Source Control panel sebelum ada repository]
</div>
</div>

</div>

## Troubleshooting Common Issues

### Git Command Not Found

**Problem**: `git: command not found` atau `'git' is not recognized`

**Solutions**:
- **Windows**: Restart Command Prompt/PowerShell, atau reboot sistem
- **macOS/Linux**: Check PATH dengan `echo $PATH`, pastikan Git location ada di PATH
- Reinstall Git dengan opsi "Add to PATH"

### VS Code Can't Find Git

**Problem**: VS Code menampilkan "Git not found"

**Solutions**:
1. Restart VS Code setelah install Git
2. Manual set Git path di VS Code settings:
   - `Ctrl+,` → search "git path"
   - Set `git.path` ke lokasi git executable

### Permission Issues (Linux/macOS)

**Problem**: Permission denied saat konfigurasi

**Solutions**:
```bash
# Fix git config permissions
sudo chown -R $(whoami) ~/.gitconfig

# Make sure git is executable
which git
ls -la $(which git)
```

### Line Ending Issues

**Problem**: Warning tentang CRLF/LF conversion

**Solutions**:
- Sudah di-handle di konfigurasi awal
- Jika masih muncul, jalankan ulang line ending config di atas

<div class="callout danger">
🚨 <strong>Stuck?</strong> Jangan panik! Join ke Discord/Telegram community atau cari di Stack Overflow dengan error message spesifik Anda. 99% masalah instalasi sudah pernah dialami orang lain.
</div>

## Ringkasan

Setelah menyelesaikan bab ini, Anda seharusnya memiliki:

✅ **Git terinstall** di sistem dengan versi terbaru  
✅ **VS Code terinstall** dengan Git integration aktif  
✅ **User identity** terkonfigurasi (name & email)  
✅ **Default settings** yang optimal untuk Git workflow  
✅ **GitHub CLI** terinstall dan siap pakai  
✅ **Troubleshooting knowledge** untuk masalah umum  

## Latihan Mandiri

Sebelum lanjut ke bab berikutnya, pastikan Anda bisa menjalankan commands berikut tanpa error:

<div class="code-with-label">
<div class="code-label">Checklist Commands</div>

```bash
# 1. Check Git version
git --version

# 2. Check Git configuration
git config --list --global

# 3. Check GitHub CLI
gh --version

# 4. Open VS Code from terminal
code --version
```
</div>

**Bonus Challenge**: 
- Buka VS Code dan eksplorasi Source Control panel
- Coba ketik "git" di Command Palette dan lihat options yang tersedia
- Check apakah GitLens extension (jika diinstall) sudah aktif

---

**Next**: Di [Bab 3](./bab-03-repository-pertama.md), kita akan membuat repository Git pertama Anda dan mulai tracking files! 🎯
