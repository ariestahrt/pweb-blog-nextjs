---
title: '[EAS] Final Project'
date: '22 Desember 2021'
excerpt: 'Excerpt'
cover_image: ''
tags: 'Kuliah,Tugas'
---

- Nama : I Kadek Agus Ariesta Putra
- NRP : 05111940000105
- Kelas : PWEB D

Assalamu'alaikum warahmatullahi wabarakatuh, Salam sejahtera bagi kita semuanya, Om Swastiastu, Namo Buddhaya, Salam kebajikan. Perkuliahan PWEB D saya telah sampai di penghujung pertemuan. Saya mendapatkan EAS berupa penugasan membuat Sistem Informasi Peserta Didik. Dengan deskripsi soal sebagai berikut [Soal EAS PWEB 2021](http://fajarbaskoro.blogspot.com/2021/12/eas-pemrograman-web-2021.html?m=1):

## 1. Definisikan fitur dari aplikasi yang akan dibangun

Sistem yang saya kembangkan disini berfokus pada **Online Classroom / E-Learning**.
Pada aplikasi yang saya kembangkan akan memiliki 3 Aktor utama dengan use-case masing-masing adalah sebagai berikut:

### Admin
Admin dapat melakukan:

1. Admin dapat melakukan pergantian informasi profil/akun
2. Admin dapat melakukan Create, Read, Update, dan Delete terhadap Pengguna/Users.
3. Admin dapat melakukan Create, Read, Update, dan Delete terhadap course di aplikasi.

### Siswa
Siswa dapat melakukan:
1. Siswa dapat melakukan pergantian informasi profil/akun
2. Siswa dapat melihat daftar course yang sedang diikuti
3. Siswa dapat melihat materi pelajaran dari course yang diikuti

### Guru
Guru dapat melakukan:
1. Guru dapat melakukan Update course yang dimiliki
2. Guru dapat menambahkan siswa ke course yang ada
3. Guru dapat memasukkan materi pelajaran ke course
4. Guru dapat memberikan nilai akhir berupa raport

## 2. Rancang aplikasi menggunakan Figma

Adapun rancangan aplikasi saya di Figma dapat dilihat pada link berikut:
[https://www.figma.com/file/D1IiqSLb1DZMw5Lu6jzqW5/EAS-PWEB?node-id=0%3A1](https://www.figma.com/file/D1IiqSLb1DZMw5Lu6jzqW5/EAS-PWEB?node-id=0%3A1)

### Rancang Desain Halaman Login
![Login](/img/eas/login.jpg)

### Rancang Desain Halaman Course untuk Siswa
![View Course](/img/eas/view-course.jpg)

### Rancang Desain Halaman CRUD Users untuk Admin
![View Users](/img/eas/view-users.jpg)

## 3. Implementasikan aplikasi. Boleh dikerjakan secara kelompok, didokumentasikan, dan dibuat video demo/ presentasinya di youtube. Semua hasil pekerjaan disatukan di blognya masing-masing.

Implementasi kode program dapat dilihat pad [**Github Tadika Classroom**](https://github.com/ariestahrt/EAS-PWEB-Tadika-Classroom).

Live preview hasil dapat dilihat pada link berikut [**https://tadikamesra.nyakit.in/**](https://tadikamesra.nyakit.in/index.html) dan video demo [**Video Demo**](https://www.youtube.com/watch?v=57QMjyFfZLQ). Adapun fitur-fitur yang saya implementasikan adalah sebagai berikut:

### 1. Fitur Login
![Login](/img/eas/implementasi/login.png)

### 2. Fitur Admin melakukan CRUD users
![crud-users](/img/eas/implementasi/crud-users.png)

### 3. Fitur Admin/Guru melakukan CRUD course
![crud-course](/img/eas/implementasi/crud-course.png)

### 4. Fitur Admin/Guru melakukan assign course ke siswa
![assign-siswa-course](/img/eas/implementasi/assign-siswa-course.png)

### 5. Fitur siswa melihat daftar course yang sedang diikuti
![siswa-dashboard](/img/eas/implementasi/siswa-dashboard.png)
