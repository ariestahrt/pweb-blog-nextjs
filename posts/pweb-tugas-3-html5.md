---
title: '[Tugas] Pertemuan 3 - HTML5'
date: '20 September 2021'
excerpt: 'Excerpt'
cover_image: ''
tags: 'Kuliah,Tugas'
---

Pada pertemuan ketiga kelas PWEB D, diberikan tugas untuk membangun web dengan html5. Hasilnya dapat dilihat pada link berikut [**Web Warung Wayan**](/pertemuan-3-html5/index.html).
![Gambar Web](/img/warung-wayan.jpg)

Dengan potongan kode program sebagai berikut:

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=auto, initial-scale=1.0">
    <title>Warung Wayan</title>
    <style type="text/css">
        header, section, footer, aside, nav, article, figure, figcaption {display: block;}
        body{
            color : #666;
            background-color: beige;
            background-image: url("images/brick-wall.jpg");
            background-position: center;
            font-family:'Arial, Helvetica, sans-serif';
            margin: 0 px;
        }
        .wrapper {
            width: 940px;
            margin: 20px auto 20px auto;
            border: 2px solid #000;
            background-color: #fff;
        }
        header {
            height: 160px;
            background-color: none;
        }
        nav, footer{
            clear: both;
            color: #fff;
            background-color: rgb(160, 108, 46);
            height: 30px;
        }
        nav ul {
            margin: 0px;
            padding: 5px 0px 5px 30px;
        }
        nav li {
            display: inline;
            margin: 40px;
        }
        nav li a {
            color: #fff;
        }
        nav li a:hover, nav li a.current {
            color: #000;
        }
        section.courses {
            float: left;
            width: 659px;
            border-right: 1px solid #eeeeee;
        }
        article{
            clear: both;
            overflow: auto;
            width: 100%;
        }
        hgroup {
            margin-top: 40px;
        }
        figure{
            float: left;
            width: 290px;
            height: 220px;
            padding: 5px;
            margin: 20px;
            border: 1px solid #eeeeee;
        }
        figcaption{
            font-size: 90%;
            text-align: left;
        }
        aside {
            width: 230px;
            float: left;
            padding: 0px 0px 0px 20px;
        }
        aside section a {
            display: block;
            padding: 10px;
            border-bottom: 1px solid #eeeeee;
        }
        * {
            color: #de6581;
            text-decoration: none;
        }
        h1, h2, h3 {
            font-weight: normal;
            color : #000;
        }
        h2 {
            margin: 10px 0px 5px 0px;
            padding: 0px;
        }
        h3 {
            margin: 0px 0px 10px 0px;
        }
        aside h2{
            margin: 30px 0px 10px 0px;
        }
        footer {
            font-size: 80%;
            padding: 7px 0px 0px 20px;
        }
        p {
            color : #666;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <header>
            <h1 style="margin-left: 20px;"><b>Warung Wayan</b> | Warung khas Bali</h1>
            <nav>
                <ul>
                    <li><a href="#" class="current">Beranda</a></li>
                    <li><a href="#" class="current">Daftar Masakan</a></li>
                    <li><a href="#" class="current">Katering</a></li>
                    <li><a href="#" class="current">Tentang</a></li>
                    <li><a href="#" class="current">Kontak</a></li>
                </ul>
            </nav>
        </header>
        <section class="courses">
            <article>
                <figure>
                    <img src="images/lawar-ayam.jpg" width="290px" alt="Penampakan gambar lawar"/>
                    <figcaption>Lawar Bali</figcaption>
                </figure>
                <hgroup>
                    <h2 >Lawar Bali</h2>
                    <h3>Makanan Bali</h3>
                    <p >Lawar bali adalah makanan paling enak di bali.</p>
                </hgroup>
            </article>
            <article>
                <figure>
                    <img src="images/ayam-betutu.jpeg" width="290px" alt="Penampakan gambar lawar"/>
                    <figcaption>Ayam Betutu</figcaption>
                </figure>
                <hgroup>
                    <h2>Ayam Betutu</h2>
                    <h3>Makanan Bali</h3>
                    <p>Ayam Betutu adalah makanan paling enak kedua di bali.</p>
                </hgroup>
            </article>
        </section>
        <aside>
            <section class="popular">
                <h2>Masakan Populer</h2>
                <a href="#">Babi guling</a>
                <a href="#">Sambal matah</a>
                <a href="#">Lawar bali</a>
            </section>
            <section class="contact-details">
                <h2>Kontak</h2>
                <p>Pak Wayan (0822 5772 6882)<br/>
                </p>
            </section>
        </aside>
        <footer>
            &copy; 2021 Warung Wayan
        </footer>
    </div>
</body>
</html>
```
