# Bab 4: Tracking Perubahan

## Pengantar
Setelah repository pertama dibuat, langkah selanjutnya adalah mulai melacak perubahan pada file. Tracking perubahan adalah inti dari workflow Git, karena di sinilah Anda mulai "menyimpan" versi pekerjaan Anda.

## Konsep Dasar
Git membagi proses tracking perubahan menjadi tiga area utama:
1. **Working Directory**: Tempat Anda mengedit file.
2. **Staging Area (Index)**: Tempat Anda menyiapkan perubahan sebelum disimpan permanen.
3. **Repository**: Tempat perubahan yang sudah di-commit disimpan secara permanen.

> 💡 **Analogi**: Working Directory seperti meja kerja, Staging Area seperti keranjang belanja, Repository seperti gudang penyimpanan.

## Diagram Alur Kerja Git
[Gambar: Diagram working directory → staging → repository]

## Langkah-langkah Tracking Perubahan

### 1. Menambah File ke Staging Area
#### VS Code
- Buka **Source Control panel** (`Ctrl+Shift+G`).
- File yang diubah akan muncul di daftar "Changes".
- Klik ikon **+** di samping file untuk menambah ke staging area.
- File berpindah ke bagian "Staged Changes".

#### Git CLI
```bash
git add nama-file.md
```

### 2. Membuat Commit Pertama
#### VS Code
- Setelah file di-staging, masukkan pesan commit di kotak "Message".
- Klik tombol **Commit** (ikon centang atau tombol "Commit") untuk menyimpan perubahan ke repository.

#### Git CLI
```bash
git commit -m "Menambahkan catatan harian pertama"
```

### 3. Tracking Perubahan pada File catatan.md
**Contoh kasus:**
- Anda menulis catatan harian di `catatan-harian.md`.
- Setiap kali ada perubahan, lakukan proses:
  1. Edit file
  2. Stage perubahan
  3. Commit dengan pesan yang jelas

#### VS Code
- Edit file di editor
- Source Control panel akan mendeteksi perubahan
- Stage dan commit seperti langkah di atas

#### Git CLI
```bash
git add catatan-harian.md
git commit -m "Update catatan harian tanggal 6 Agustus 2025"
```

## Troubleshooting
- **Perubahan tidak muncul di Source Control panel?**
  - Pastikan file berada di dalam folder repository.
  - Pastikan repository sudah diinisialisasi (`git init`).
- **Commit gagal?**
  - Pastikan sudah menambahkan file ke staging area.
  - Pastikan pesan commit tidak kosong.

## Latihan Mandiri
1. Buat perubahan pada file `catatan-harian.md`.
2. Stage perubahan menggunakan VS Code dan Git CLI.
3. Commit perubahan dengan pesan yang jelas.
4. Cek hasil commit di Source Control panel dan dengan perintah `git log`.

## Ringkasan
- Git memisahkan perubahan ke working directory, staging area, dan repository.
- Proses tracking: edit → stage → commit.
- VS Code dan Git CLI bisa digunakan secara bergantian.
- Selalu gunakan pesan commit yang jelas dan deskriptif.

---
**Next:** Di Bab 5, kita akan belajar cara melihat status repository dan riwayat perubahan dengan `git status`, `git log`, dan `git diff`. 🚀
