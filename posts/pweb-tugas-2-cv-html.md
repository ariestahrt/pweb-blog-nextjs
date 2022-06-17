---
title: '[Tugas] Pertemuan 2 - CV HTML'
date: '8 September 2021'
excerpt: 'Excerpt'
cover_image: ''
tags: 'Kuliah,Tugas'
---

Pada pertemuan kedua kelas PWEB D, diberikan tugas untuk membuat CV dengan menggunakan HTML. Hasilnya dapat dilihat pada link berikut [**CV HTML**](/cv-pure-html/index.html). 
![Gambar CV](/img/cv-pure-html.png)

Dengan potongan kode program sebagai berikut:

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Latihan Membuat CV</title>
    <style>
        * {
            font-family: arial, sans-serif;
        }
        table {
            border-collapse: collapse;
            width: 100%;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }

        tr:nth-child(odd) {
            background-color: #ffffff;
        }
    </style>
</head>

<body bgcolor="#fff" link="red" background="background.jpg" style="width: 800px; margin-left: auto; margin-right: auto;" >
    <div >
        <h1 style="text-align: center">Latihan Membuat CV</h1>
        <h2>Biodata Saya:</h2>
        <img src="ariesta.jpg" width="100px" alt="Penampakan Wajah Saya" style=" display: block; margin-left: auto; margin-right: auto; width: 100px; margin-bottom: 10px;" />
        <table>
            <tr>
                <td><b>Nama Lengkap</b></td>
                <td>I Kadek Agus Ariesta Putra</td>
            </tr>
            <tr>
                <td><b>Tempat, Tanggal Lahir</b></td>
                <td>Manggis, 3 April 2001</td>
            </tr>
            <tr>
                <td><b>Jenis Kelamin</b></td>
                <td>Laki-laki</td>
            </tr>
            <tr>
                <td><b>Agama</b></td>
                <td>Hindu</td>
            </tr>
            <tr>
                <td><b>Alamat Tinggal</b></td>
                <td>Jalan Keputih Tegal Bhakti 1 No 15, Sukolilo, Surabaya</td>
            </tr>
            <tr>
                <td><b>Status</b></td>
                <td>Belum Menikah</td>
            </tr>
            <tr>
                <td><b>Pekerjaan</b></td>
                <td>Mahasiswa</td>
            </tr>
            <tr>
                <td><b>Kewarganegaraan</b></td>
                <td>Indonesia</td>
            </tr>
        </table>
        <h2>Riwayat Jenjang Pendidikan Formal</h2>
        <table>
            <tr>
                <th>Jenjang Pendidikan</th>
                <th>Keterangan</th>
                <th>Tahun</th>
            </tr>
            <tr>
                <td>Sekolah Dasar</td>
                <td>SD Negeri 4 Antiga</td>
                <td>2007-2013</td>
            </tr>
            <tr>
                <td>Sekolah Menengah Pertama</td>
                <td>SMP Negeri 3 Manggis</td>
                <td>2013-2016</td>
            </tr>
            <tr>
                <td>Sekolah Menengah Atas</td>
                <td>SMA Negeri 2 Semarapura</td>
                <td>2016-2019</td>
            </tr>
            <tr>
                <td>Perguruan Tinggi</td>
                <td>S1 - Teknik Informatika ITS</td>
                <td>2019-Sekarang</td>
            </tr>
        </table>
        <h2>Informasi Kontak</h2>
        <table>
            <tr>
                <td><b>Nomor HP</b></td>
                <td>+6282247526882</td>
            </tr>
            <tr>
                <td><b>E-mail</b></td>
                <td><a href="mailto:ariesta@nyakit.in">ariesta@nyakit.in</a></td>
            </tr>
        </table>
        <h2>Pengalaman</h2>
        <table>
            <tr>
                <th>Tempat</th>
                <th>Keterangan</th>
                <th>Tahun</th>
            </tr>
            <tr>
                <td>Bayucaraka ITS</td>
                <td>Software Enginer</td>
                <td>2020-Sekarang</td>
            </tr>
            <tr>
                <td>Departemen Informatika ITS</td>
                <td>Asisten Struktur Data</td>
                <td>2021</td>
            </tr>
        </table>
    </div>
</body>
</html>
```
