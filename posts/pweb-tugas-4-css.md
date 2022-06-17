---
title: '[Tugas] Pertemuan 4 - CSS'
date: '28 September 2021'
excerpt: 'Excerpt'
cover_image: ''
tags: 'Kuliah,Tugas'
---

Pada pertemuan keempat kelas PWEB D, diberikan tugas untuk membuat katalog produk. Hasilnya dapat dilihat pada link berikut [**Toko Karung Jantan**](/pertemuan-4-css/index.html).
![Gambar Web](/img/toko-karung-jantan.jpg)

Dengan potongan kode program sebagai berikut:

## HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toko Karung Jantan</title>
    <link rel="stylesheet" href="style.css" />
    <link rel=icon href="img/icon.png">
</head>

<body>
    <nav class="nav">
        <div class="nav-container">
            <div class="brand">
                <a href="#">
                    <span class="text">KarungJantan</span>
                </a>
            </div>
            <div class="link">
                <a href="#">
                    <span class="text">Tentang Kami</span>
                </a>
                <a href="#">
                    <span class="text">|</span>
                </a>
                <a href="#">
                    <span class="text">Login</span>
                </a>
            </div>
        </div>
    </nav>

    <div class="main">
        <div class="container">
            <div class="item">
                <div class="left-side">
                    <img src="img/shacket-jacket-green.jpeg" alt="baju1">
                </div>
                <div class="right-side">
                    <h3>SHACKET JACKET FOREST GREEN</h3>
                    <div class="desc">
                        <p>
                            <b>Warna</b> : Hijau<br />
                            <b>Material</b> : Polyester<br />
                        </p>
                        <p>
                            <ul>
                                <li>
                                    Bahan polyester yang dapat menyesuaikan iklim di indonesia, cuaca panas atau hujan tetap nyaman.
                                </li>
                                <li>
                                    2 kantong depan untuk menyimpan barang berukuran kecil, dengan penutup kantong yang membuat barang aman tanpa takut jatuh.
                                </li>
                                <li>
                                    Di design dengan style trendy, terlihat “fancy” yang membuat tampilanmu berkesan mewah.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <b>Size Chart</b> :<br />
                            S : 64 cm x 50 cm x 42 cm<br />
                            M : 66 cm x 52 cm x 44 cm<br />
                            L : 68 cm x 54 cm x 46 cm<br />
                        </p>
                        <p>
                            <b>Harga</b> : Rp. 249.000,00<br />
                        </p>
                        <br/>
                        <a class="btn" href="https://wa.me/+6282145806555">
                            <span class="btnBuy">BELI VIA WA</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left-side">
                    <img src="img/royal-ankle-tartan.jpeg" alt="baju1">
                </div>
                <div class="right-side">
                    <h3>ROYAL ANKLE TARTAN PANTS GREYISH BROWN</h3>
                    <div class="desc">
                        <p>
                            <b>Warna</b> : Greyish Brown<br />
                            <b>Material</b> : Yarn dyed fabric<br />
                        </p>
                        <p>
                            <ul>
                                <li>
                                    Menggunakan bahan ringan, sehingga nyaman digunakan.
                                </li>
                                <li>
                                    Menggunakan bahan stretch, sehingga lebih bebas dalam bergerak.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <b>Size Chart</b> :<br />
                            Waist x ½ Hip x Inseam x ½ Opening Leg<br />
                            28 : 81,28 cm x 45,72 cm x 69,85 cm x 15 cm<br />
                            29 : 83,82 cm x 46,99 cm x 69,85 cm x 15,5 cm<br />
                            30 : 86,36 cm x 48,26 cm x 69,85 cm x 16 cm<br />
                            31 : 88,9 cm x 49,53 cm x 69,85 cm x 16,5 cm<br />
                            32 : 91,4 cm x 50,8 cm x 69,85 cm x 17 cm<br />
                            33 : 93,98 cm x 52,07cm x 69,85 cm x 17,5 cm<br />
                            34 : 99,06 cm x 53,34 cm x69,85 cm x 18 cm<br />
                            36 : 104,14 cm x 55,88 cm x 69,85 cm x 19 cm<br />
                        </p>
                        <p>
                            <b>Harga</b> : Rp. 249.000,00<br />
                        </p>
                        <br/>
                        <a class="btn" href="https://wa.me/+6282145806555">
                            <span class="btnBuy">BELI VIA WA</span>
                        </a>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="footer-container">
            <div class="copyright">
                <a href="#">
                    <span class="text">© 2021 Ariesta</span>
                </a>
            </div>
            <div class="contact">
                <a href="#">
                    <span class="text">Contact us : karungjantan@nyakit.in</span>
                </a>
            </div>
        </div>
    </footer>
</body>
</html>
```

Dan kode program CSS adalah sebagai berikut:

## CSS

```css
* {
    text-decoration: none;
}

body {
    /* background: #666; */
    font-size: 1.2rem;
    /* color: hsla(0,0%,0%,0.8); */
    font-family: 'Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.nav .nav-container {
    max-width: 1000px;
    margin: auto;
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 2rem;
}

.nav .brand span{
    color: #333;
    font-weight: 600;
}

.nav .link span{
    color: #444;
    font-weight: 400;
    font-size: medium;
}

footer {
    /* position: fixed; */
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgb(202, 198, 198);
    /* display: flex; */
    align-items: center;
}

.footer .footer-container {
    max-width: 1000px;
    margin: auto;
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 2rem;
}

.footer .footer-container span {
    color: #444;
    font-weight: 400;
    font-size: medium;
}

.main {
    /* background: red; */
    margin: auto;
    margin-top: 100px;
}

.main .container {
    /* background: red; */
    left: 0;
    max-width: 1000px;
    margin: auto;
    align-items: center;
    padding: 0 2rem;
}

.item {
    padding-bottom: 50px;
    margin: auto;
}

img {
    width: auto;
    height: 500px;
}

.left-side {
    padding-right: 50px;
    width: auto;
    height: auto;
    float: left;
}

.right-side {
    text-align: justify;
    width: auto;
    height: 530px;
    /* float: left; */
    padding: 0px 10px;
    margin: auto;
}

.btn {
    text-align: center;
}

.btnBuy {
    padding: 14px 100px;
    font-weight: bold;
    background-color: #f3f3f3;
}

.btnBuy:hover {
    background-color: #333;
    color: #f3f3f3;
}

.desc {
    font-size: medium;
}

article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
}

* {
    box-sizing: border-box;
}
```