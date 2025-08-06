# Bab 7: Membatalkan Perubahan

## Pengantar

Dalam dunia programming, kesalahan adalah hal yang wajar. Yang penting adalah bagaimana kita mengatasi dan memulihkan kondisi sebelumnya. Git menyediakan berbagai cara untuk membatalkan perubahan, mulai dari yang sederhana hingga yang lebih advanced.

Di bab ini kita akan belajar:
- 🔄 **Membatalkan perubahan** di working directory
- ↩️ **Unstage file** dari staging area
- 🚫 **Membatalkan commit** yang sudah dibuat
- ⚠️ **Perbedaan reset, revert, dan checkout**
- 🛡️ **Recovery dari kesalahan** yang umum terjadi
- 💻 **Praktik dengan VS Code** dan Git CLI

<div class="callout warning">
⚠️ **Peringatan**: Beberapa operasi pembatalan bersifat destructive dan tidak bisa di-undo. Selalu backup penting sebelum melakukan operasi yang berisiko!
</div>

## Skenario Umum yang Membutuhkan Pembatalan

### 1. **Typo di Working Directory**
- Mengedit file tapi belum di-commit
- Ingin kembali ke versi terakhir yang di-commit

### 2. **Salah Stage File**
- Tidak sengaja menambah file ke staging area
- Ingin mengeluarkan dari staging tanpa hilang

### 3. **Commit Message Salah**
- Sudah commit tapi pesan tidak sesuai
- Ingin mengubah pesan commit terakhir

### 4. **Commit Salah Total**
- Commit changes yang seharusnya tidak di-commit
- Ingin membatalkan commit sepenuhnya

### 5. **Branch Salah**
- Bekerja di branch yang salah
- Ingin memindah perubahan ke branch yang benar

<div class="callout tip">
💡 **Filosofi Git**: Git dirancang untuk mempertahankan history. Sebagian besar operasi pembatalan sebenarnya adalah membuat state baru yang mengembalikan kondisi sebelumnya.
</div>

## Level 1: Membatalkan Perubahan di Working Directory

### Skenario: Mengembalikan File ke Kondisi Terakhir di-Commit

**Kasus**: Anda mengedit file `catatan-harian.md` tapi tidak suka perubahannya dan ingin kembali ke versi sebelumnya.

### Praktik dengan VS Code

<div class="steps">

<div class="step">
**Melihat File yang Berubah**

1. Buka **Source Control panel** (`Ctrl+Shift+G`)
2. File yang berubah akan muncul di section "Changes"
3. Klik pada file untuk melihat diff (perubahan)

<div class="image-placeholder">
[Gambar: Screenshot VS Code Source Control showing modified files with diff view]
</div>
</div>

<div class="step">
**Discard Changes via Source Control**

1. Klik kanan pada file di "Changes"
2. Pilih **"Discard Changes"**
3. VS Code akan meminta konfirmasi
4. Klik "Discard Changes" untuk konfirmasi

<div class="image-placeholder">
[Gambar: Screenshot VS Code discard changes context menu and confirmation dialog]
</div>
</div>

<div class="step">
**Alternative: Discard via Command Palette**

1. `Ctrl+Shift+P` → ketik "Git: Discard All Changes"
2. Atau "Git: Discard Changes" untuk file specific
3. Konfirmasi action

</div>

</div>

### Praktik dengan Git CLI

<div class="code-with-label">
<div class="code-label">Git CLI - Discard File Changes</div>

```bash
git checkout -- catatan-harian.md
```
</div>

**Atau di Git versi baru (2.23+):**

<div class="code-with-label">
<div class="code-label">Git CLI - Restore File</div>

```bash
git restore catatan-harian.md
```
</div>

**Untuk semua file sekaligus:**

<div class="code-with-label">
<div class="code-label">Git CLI - Discard All Changes</div>

```bash
git checkout -- .
# atau
git restore .
```
</div>

### Contoh Praktis

Mari praktik dengan file konkret:

<div class="steps">

<div class="step">
**Buat Perubahan Test**

Edit file `catatan-harian.md`:

```markdown
# Catatan Harian - Test

## Hari ini saya belajar Git

Ini adalah perubahan yang tidak saya suka dan ingin dibatalkan!

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```
</div>

<div class="step">
**Check Status**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git status
```
</div>

**Output:**
```
On branch main
Changes not staged for commit:
  modified:   catatan-harian.md
```
</div>

<div class="step">
**Restore Original Content**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git restore catatan-harian.md
```
</div>

File kembali ke kondisi commit terakhir!
</div>

</div>

## Level 2: Unstage File dari Staging Area

### Skenario: Mengeluarkan File dari Staging Area

**Kasus**: Anda sudah `git add` beberapa file, tapi salah satu file tidak ingin di-commit sekarang.

### Praktik dengan VS Code

<div class="steps">

<div class="step">
**Melihat Staged Files**

File yang sudah di-stage akan muncul di section "Staged Changes" di Source Control panel.

<div class="image-placeholder">
[Gambar: Screenshot VS Code showing staged changes section]
</div>
</div>

<div class="step">
**Unstage via Source Control**

1. Klik ikon **"-"** di samping file di "Staged Changes"
2. File akan pindah kembali ke "Changes"
3. Perubahan masih ada, hanya tidak di-stage

</div>

</div>

### Praktik dengan Git CLI

<div class="code-with-label">
<div class="code-label">Git CLI - Unstage File</div>

```bash
git reset HEAD catatan-harian.md
```
</div>

**Atau di Git versi baru:**

<div class="code-with-label">
<div class="code-label">Git CLI - Restore Staged</div>

```bash
git restore --staged catatan-harian.md
```
</div>

**Untuk semua staged files:**

<div class="code-with-label">
<div class="code-label">Git CLI - Unstage All</div>

```bash
git reset HEAD .
# atau
git restore --staged .
```
</div>

### Contoh Step-by-Step

<div class="steps">

<div class="step">
**Stage Multiple Files**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
# Buat beberapa file
echo "Content A" > file-a.md
echo "Content B" > file-b.md
echo "Content C" > file-c.md

# Stage semua
git add .
```
</div>
</div>

<div class="step">
**Check Staged Status**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git status
```
</div>

**Output:**
```
Changes to be committed:
  new file:   file-a.md
  new file:   file-b.md
  new file:   file-c.md
```
</div>

<div class="step">
**Unstage One File**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git restore --staged file-b.md
```
</div>
</div>

<div class="step">
**Verify Result**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git status
```
</div>

**Output:**
```
Changes to be committed:
  new file:   file-a.md
  new file:   file-c.md

Untracked files:
  file-b.md
```
</div>

</div>

## Level 3: Membatalkan Commit

### Skenario A: Mengubah Commit Message Terakhir

**Kasus**: Anda sudah commit tapi typo di commit message.

<div class="code-with-label">
<div class="code-label">Git CLI - Amend Commit</div>

```bash
git commit --amend -m "Pesan commit yang benar"
```
</div>

**Untuk mengubah message secara interaktif:**

<div class="code-with-label">
<div class="code-label">Git CLI - Interactive Amend</div>

```bash
git commit --amend
```
</div>

Ini akan membuka editor untuk mengubah commit message.

### Skenario B: Menambah File ke Commit Terakhir

**Kasus**: Lupa menambahkan file ke commit terakhir.

<div class="steps">

<div class="step">
**Add Missing File**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git add file-yang-terlupa.md
```
</div>
</div>

<div class="step">
**Amend Commit**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git commit --amend --no-edit
```
</div>

Flag `--no-edit` artinya tidak mengubah commit message.
</div>

</div>

### Skenario C: Membatalkan Commit Sepenuhnya

**Kasus**: Commit terakhir benar-benar salah dan ingin dihapus.

#### Option 1: Soft Reset (Recommended)

<div class="code-with-label">
<div class="code-label">Git CLI - Soft Reset</div>

```bash
git reset --soft HEAD~1
```
</div>

**Hasil:**
- Commit dibatalkan
- File tetap di staging area
- Changes tidak hilang

#### Option 2: Mixed Reset (Default)

<div class="code-with-label">
<div class="code-label">Git CLI - Mixed Reset</div>

```bash
git reset HEAD~1
# sama dengan
git reset --mixed HEAD~1
```
</div>

**Hasil:**
- Commit dibatalkan
- File keluar dari staging area
- Changes masih ada di working directory

#### Option 3: Hard Reset (Dangerous!)

<div class="code-with-label">
<div class="code-label">Git CLI - Hard Reset</div>

```bash
git reset --hard HEAD~1
```
</div>

**Hasil:**
- Commit dibatalkan
- File keluar dari staging area
- **Changes hilang sepenuhnya!**

<div class="callout danger">
🚨 **HATI-HATI**: `--hard` akan menghapus semua changes. Pastikan tidak ada pekerjaan penting yang belum disave di tempat lain!
</div>

### Penjelasan HEAD Notation

- `HEAD`: Commit saat ini
- `HEAD~1`: 1 commit sebelumnya
- `HEAD~2`: 2 commit sebelumnya
- `HEAD~n`: n commit sebelumnya

## Level 4: Revert - Membatalkan dengan History

### Konsep Revert vs Reset

| | **Reset** | **Revert** |
|---|-----------|-----------|
| **History** | Mengubah history | Membuat commit baru |
| **Safety** | Bisa berbahaya | Aman untuk shared repos |
| **Visibility** | Commit "hilang" | Commit tetap terlihat |
| **Use case** | Private branches | Public/shared branches |

### Praktik Git Revert

<div class="code-with-label">
<div class="code-label">Git CLI - Revert Commit</div>

```bash
git revert HEAD
```
</div>

**Untuk revert commit tertentu:**

<div class="code-with-label">
<div class="code-label">Git CLI - Revert Specific</div>

```bash
git revert a1b2c3d
```
</div>

**Untuk revert tanpa auto-commit:**

<div class="code-with-label">
<div class="code-label">Git CLI - Revert No Commit</div>

```bash
git revert --no-commit HEAD
```
</div>

### Contoh Revert Workflow

<div class="steps">

<div class="step">
**Setup: Buat Beberapa Commit**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
echo "Version 1" > version.md
git add version.md
git commit -m "Add version 1"

echo "Version 2" > version.md
git add version.md
git commit -m "Update to version 2"

echo "Version 3 - Buggy" > version.md
git add version.md
git commit -m "Update to version 3 with bugs"
```
</div>
</div>

<div class="step">
**Check History**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git log --oneline
```
</div>

**Output:**
```
a1b2c3d (HEAD -> main) Update to version 3 with bugs
b2c3d4e Update to version 2
c3d4e5f Add version 1
```
</div>

<div class="step">
**Revert Buggy Commit**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git revert HEAD
```
</div>

Editor akan terbuka dengan default message:
```
Revert "Update to version 3 with bugs"

This reverts commit a1b2c3d.
```

Save dan close editor.
</div>

<div class="step">
**Check Result**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git log --oneline
```
</div>

**Output:**
```
d4e5f6g (HEAD -> main) Revert "Update to version 3 with bugs"
a1b2c3d Update to version 3 with bugs
b2c3d4e Update to version 2
c3d4e5f Add version 1
```

File `version.md` sekarang kembali ke "Version 2", tapi history tetap lengkap!
</div>

</div>

## Level 5: Recovery dari Kesalahan

### Skenario: Accidentally Hard Reset

**Masalah**: Tidak sengaja melakukan `git reset --hard` dan kehilangan pekerjaan.

**Solusi**: Git Reflog!

<div class="code-with-label">
<div class="code-label">Git CLI - Check Reflog</div>

```bash
git reflog
```
</div>

**Output sample:**
```
a1b2c3d HEAD@{0}: reset: moving to HEAD~1
b2c3d4e HEAD@{1}: commit: Important work
c3d4e5f HEAD@{2}: commit: Initial setup
```

**Recover lost commit:**

<div class="code-with-label">
<div class="code-label">Git CLI - Recover from Reflog</div>

```bash
git reset --hard HEAD@{1}
```
</div>

### Skenario: Deleted Branch by Mistake

**Masalah**: Tidak sengaja menghapus branch yang belum di-merge.

<div class="steps">

<div class="step">
**Find Branch in Reflog**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git reflog --all
```
</div>
</div>

<div class="step">
**Recreate Branch**

<div class="code-with-label">
<div class="code-label">Git CLI</div>

```bash
git checkout -b recovered-branch a1b2c3d
```
</div>

Dimana `a1b2c3d` adalah commit hash dari branch yang terhapus.
</div>

</div>

## Troubleshooting Scenarios

### 1. "Cannot Checkout Branch - Uncommitted Changes"

**Problem**: 
```
error: Your local changes to the following files would be overwritten by checkout
```

**Solutions**:

<div class="code-with-label">
<div class="code-label">Option 1: Commit Changes</div>

```bash
git add .
git commit -m "WIP: save current work"
git checkout other-branch
```
</div>

<div class="code-with-label">
<div class="code-label">Option 2: Stash Changes</div>

```bash
git stash push -m "temporary save"
git checkout other-branch
# Later: git stash pop
```
</div>

<div class="code-with-label">
<div class="code-label">Option 3: Force Checkout (Lose Changes)</div>

```bash
git checkout --force other-branch
```
</div>

### 2. "Detached HEAD State"

**Problem**: Accidentally checkout ke commit hash, sekarang di detached HEAD.

**Solution**:

<div class="code-with-label">
<div class="code-label">Git CLI - Return to Branch</div>

```bash
git checkout main
# atau branch manapun yang valid
```
</div>

**Jika ada changes di detached HEAD yang ingin disimpan:**

<div class="code-with-label">
<div class="code-label">Git CLI - Save Detached Work</div>

```bash
git checkout -b temp-branch
git checkout main
git merge temp-branch
```
</div>

### 3. "Merge Conflict Panic"

**Problem**: Merge conflict muncul dan bingung cara handle.

**Solution**:

<div class="code-with-label">
<div class="code-label">Git CLI - Abort Merge</div>

```bash
git merge --abort
```
</div>

Ini akan membatalkan merge dan kembali ke kondisi sebelum merge.

## Advanced: Interactive Rebase untuk History Cleanup

Untuk editing multiple commits, Git menyediakan interactive rebase:

<div class="code-with-label">
<div class="code-label">Git CLI - Interactive Rebase</div>

```bash
git rebase -i HEAD~3
```
</div>

**Editor akan terbuka dengan options:**
```
pick a1b2c3d Commit message 1
pick b2c3d4e Commit message 2
pick c3d4e5f Commit message 3

# Commands:
# p, pick = use commit
# r, reword = use commit, but edit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# d, drop = remove commit
```

**Common use cases:**
- `reword`: Ubah commit message
- `squash`: Gabungkan commits
- `drop`: Hapus commit
- `edit`: Edit commit content

<div class="callout warning">
⚠️ **Interactive rebase mengubah history**. Jangan gunakan untuk commits yang sudah dipush ke shared repository!
</div>

## Best Practices untuk Pembatalan

### 1. **Think Before You Act**
- Selalu periksa `git status` dan `git log` sebelum operasi pembatalan
- Gunakan `git diff` untuk melihat perubahan
- Backup pekerjaan penting

### 2. **Choose the Right Tool**

| Situasi | Recommended Command |
|---------|-------------------|
| Discard working changes | `git restore <file>` |
| Unstage file | `git restore --staged <file>` |
| Change last commit message | `git commit --amend` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Undo commit (public repo) | `git revert HEAD` |

### 3. **Safety First**
- Gunakan `--soft` dan `--mixed` reset daripada `--hard`
- Prefer `revert` untuk shared repositories
- Test di branch terpisah untuk operasi berisiko

### 4. **Recovery Preparation**
- Familiarize dengan `git reflog`
- Backup repository berkala
- Document important commit hashes

## Latihan Mandiri

<div class="steps">

<div class="step">
**Basic Undo Practice**

1. Buat file baru dan edit
2. Stage file tersebut
3. Unstage file
4. Discard working changes
5. Verify file kembali ke kondisi original
</div>

<div class="step">
**Commit Undo Practice**

1. Buat dan commit file baru
2. Edit commit message dengan `--amend`
3. Reset commit dengan `--soft`
4. Re-commit dengan message berbeda
</div>

<div class="step">
**Advanced Recovery**

1. Buat branch baru dan commit
2. Switch ke main dan delete branch (simulate accident)
3. Use reflog untuk recover deleted branch
4. Verify recovery successful
</div>

</div>

## Flowchart: Choosing the Right Undo Command

```
START: What do you want to undo?
│
├─ Working Directory Changes
│  └─ git restore <file>
│
├─ Staged Changes
│  └─ git restore --staged <file>
│
├─ Last Commit Message
│  └─ git commit --amend
│
├─ Last Commit (Private Branch)
│  ├─ Keep changes: git reset --soft HEAD~1
│  ├─ Unstage changes: git reset HEAD~1
│  └─ Lose changes: git reset --hard HEAD~1
│
├─ Last Commit (Shared Branch)
│  └─ git revert HEAD
│
└─ Multiple Commits
   ├─ Private branch: git reset --soft HEAD~n
   └─ Shared branch: git revert HEAD~n..HEAD
```

## Ringkasan

Setelah menyelesaikan bab ini, Anda telah menguasai:

✅ **Membatalkan perubahan** di berbagai level Git workflow  
✅ **Memilih command yang tepat** untuk setiap situasi  
✅ **Recovery dari kesalahan** menggunakan reflog  
✅ **Best practices** untuk safe undo operations  
✅ **Troubleshooting** masalah umum dengan solusi praktis  
✅ **Interactive rebase** untuk advanced history editing  

### Undo Command Cheat Sheet

| Level | Command | Effect |
|-------|---------|--------|
| **Working Dir** | `git restore <file>` | Discard changes |
| **Staging** | `git restore --staged <file>` | Unstage file |
| **Last Commit** | `git commit --amend` | Edit message/add files |
| **Reset Soft** | `git reset --soft HEAD~1` | Undo commit, keep staged |
| **Reset Mixed** | `git reset HEAD~1` | Undo commit, unstage |
| **Reset Hard** | `git reset --hard HEAD~1` | Undo commit, lose all |
| **Revert** | `git revert HEAD` | New commit that undos |
| **Recovery** | `git reflog` | Find lost commits |

### Key Takeaways

🌟 **Safety first**: Always check status before destructive operations  
🌟 **Right tool**: Different situations need different approaches  
🌟 **History matters**: Consider whether repo is shared or private  
🌟 **Recovery possible**: Most "lost" work can be recovered via reflog  
🌟 **Practice makes perfect**: Try undo operations in safe environment  

---

**🎉 Selamat!** Anda telah menyelesaikan **Bagian I: Git Lokal**! 

Sekarang Anda sudah menguasai:
- Repository setup dan basic workflow
- Tracking dan commit changes
- Branching dan merging
- Status monitoring dan history
- Undo operations dan error recovery

**Next**: Di [Bagian II: Git Remote](../bagian-2/README.md), kita akan belajar bekerja dengan GitHub dan collaborative development! 🌐
