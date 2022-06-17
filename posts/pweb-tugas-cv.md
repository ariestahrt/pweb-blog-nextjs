---
title: '[Tugas] Pertemuan 1 - CV'
date: '6 September 2021'
excerpt: 'Excerpt'
cover_image: ''
tags: 'Kuliah,Tugas'
---

Pada pertemuan pertama PWEB D, diberikan tugas untuk membuat CV. Kemudian saya membuat CV dengan menggunakan CSS framework [**Tailwind CSS**](https://tailwindcss.com/). Hasilnya dapat dilihat pada halaman [**CV**](/cv/index.html). 
![Gambar CV](/img/cv.png)

Dengan potongan kode program sebagai berikut:

## HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>CV</title>
<script type="module" crossorigin src="assets/index.16c45ea0.js"></script>
  <link rel="stylesheet" href="assets/index.0f5c6ecb.css">
</head>

<body class="font-sans antialiased w-full">
  <div class="container mx-auto max-w-screen-xl">
    <main id="wrapper" class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl">
      <div id="sidebar" class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-purple-300 via-blue-300 to-white">
        <div class="px-2 mb-12">
          <img src="assets/ariesta.fb652711.jpg" alt="Profile Picture"
            class="rounded-full w-48 mx-auto mb-2" />
          <h1 class="text-center text-3xl font-semibold mb-2">I Kadek Agus Ariesta Putra</h1>
          <h2 class="text-center text-xl font-light">Teknik Informatika</h2>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Kontak</h2>
          <div class="flex items-center my-3">
            <img src="assets/mail-outline.d2a90dfa.svg" class="inline w-6 mr-4" alt="Mail icon" />
            <a href="mailto:ariesta@nyakit.in">ariesta@nyakit.in</a>
          </div>
          <div class="flex items-center my-3">
            <img src="assets/call-outline.8e5cd959.svg" class="inline w-6 mr-4" alt="Phone icon" />
            <a href="tel:">0822 4752 6882</a>
          </div>
          <div class="flex items-center my-3">
            <img src="assets/home-outline.8a86be06.svg" class="inline w-6 pb-1 mr-4" alt="House icon" />
            <div>
              <p>Karangasem</p>
              <p>Bali</p>
            </div>
          </div>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Personal</h2>
          <div class="flex items-center my-3">
            <img src="assets/egg-outline.2487a4a9.svg" class="inline w-6 mr-4" alt="Egg Icon" />
            <span>Lahir pada 3 April 2001 (20 Tahun)</span>
          </div>
          <div class="flex items-center my-3">
            <img src="assets/people-outline.a72bfed3.svg" class="inline w-6 mr-4" alt="Two Persons Icon" />
            <span>Belum menikah</span>
          </div>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">On the Web</h2>
          <div class="flex items-center my-3">
            <img src="assets/logo-github.e5a3483e.svg" class="inline w-6 mr-4" alt="GitHub Logo" />
            <a href="https://github.com/ariestahrt" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div class="flex items-center my-3">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgNzkuMTY0NTI3LCAyMDIwLzEwLzE1LTE3OjQ4OjMyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA5LTA2VDIxOjI1OjM5KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA5LTA2VDIxOjI1OjM5KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wOS0wNlQyMToyNTozOSswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4Nzc4YWJjNC05YWYxLWM0NGYtODQ4Ni01NzcxNmE5YmJiZjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmYWI0NTBlNy0xZThhLWM2NDMtYmEzMC1iYjhiZmQ4MjJmZjMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NDdiMTE5OS0yYTdjLWIzNGUtYjg1MS1iZjhlMmIwYTBlNzciIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0N2IxMTk5LTJhN2MtYjM0ZS1iODUxLWJmOGUyYjBhMGU3NyIgc3RFdnQ6d2hlbj0iMjAyMS0wOS0wNlQyMToyNTozOSswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Nzc4YWJjNC05YWYxLWM0NGYtODQ4Ni01NzcxNmE5YmJiZjMiIHN0RXZ0OndoZW49IjIwMjEtMDktMDZUMjE6MjU6MzkrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7eYBUKAAAF9ElEQVR4nO3dP2tbZxTH8SNjMvXcwa4hdYwJN1sa6qWjA2kWjZmcSRqUdxCkSS9AXgx9AyEEsmXsEMhskT0hzWZhjCtC3Xjo0zH0dqhNQ3FypKs/9xzu9wOCEhLzoOfLDytOpYaIFAI4pqqyUvUhgEkQKkIgVIRAqAiBUBECoSIEQkUIhIoQCBUhECpCIFSEQKgIgVARAqEiBEJFCISKEAgVIRAqQiBUhECoCIFQEQKhIgRCRQiEihAIFSEQKkIgVIRAqAiBUBECoSIEQkUIhIoQCBUhECpCIFSEQKgIYbXqA1Tkoap+3NnZeXvz5s0/L3/x+Pg4e/PmzQ8ppXUReVHh+XCFokaPvTzPbxdFIdYjz/PbIrLn4My1f6hqIVUfYomPiSO9fOzu7n4rxFr5Q1WLWn2PenR09H6a3394ePiHqn5c1HkwudqEWja4nZ2dt/M+C6ZXm1A3NjY+VH0GlFebUMtaXV39u+ozgFBNnz594jlygEswsKg+EKqBRfWBSzCwqD4QqoFF9YFLMLCoPhCqgUX1gUswsKg+EKqBRfWBSzCwqD4QqoFF9YFLMLCoPhCqgUX1gUswsKg+EKqBRfWBSzCwqD4QqoFF9YFLMLCoPhCqgUX1gUswsKg+EKqBRfWBSzCwqD4QqoFF9YFLMLCoPhCqgUX1gUswsKg+EKqBRfWhru84PbEKFrUnIqKq55e/kFJau/jPgyWfxZXK36h1GY9p38T3f2/mu4wzdvM8bw4Gg5WrzjEYDFbyPG+KSLfq53LZj1q943TZUO/du7e24LN1VbXzpUCvClZVO1U/n8t8EGq1i9oVkW6r1Vqf9kyDwWBFarSshFrdonbzPG+WOc9nH4bRrPo5Xdajdu/hX8acX/X3VPVRq9V6dnR09GqWL7S5ufnbvA4VAa/6DXN81d/b3d19dXh4+G5OX69WWFTDHBa1p6qPBoPBz0RaHotqmGFReyIirVbr2fPnz/kIoBkRqqHkovbyPH836/eh+A+hGqZc1J6qnj948OAXVnS+CNUwxaLyYmmBeDFlmGBRebG0BCyqwVhUvhddEhbV8LVFVdVzIl0OQjXw71F94BIM/At/HwjVwKL6wCUYrEXd39/nOVwCnmTD1xY1pfT05cuXt2f5+u12e32WP18XhGqwFnU4HDbLrOr+/v5KlmWd169f/1j+dPVBqIYJvkc96Pf7j6f5mnfv3r3T7/cfp5SeznC0WiFUw6Sv+huNRtda1na7vZ5lWWc4HDal5v9H6bT4yZRhwlf9ByIi/X5fnjx5cuVPqm7dutUcjUZ3hEBLIVTDlH+PejAajXqNRuOOqp5vbGyMRUQuAhUh0tII1VDi71EPRERSSpJSWsCJ6onvUQ38ZMoHQjXwkykfuAQDi+oDoRpYVB+4BAOL6gOhGlhUH7gEA4vqA6EaWFQfuAQDi+oDoRpYVB+4BAOL6gOhGlhUH7gEA4vqA6EaWFQfuAQDi+oDoRpYVB+4BAOL6gOhGlhUH7gEA4vqA6EaWFQfuAQDi+oDoRpYVB+4BAOL6gOhGlhUH7gEA4vqA6EaWFQfuAQDi+oDoRpYVB+4BAOL6gOhGlhUH7gEA4vqA6EaWFQfanMJZ2dn16s+w1XOzs42y/y58Xh8Y95n8aw2oaaUSn2e03A4/GneZ/lcSmmtzMf/fPZ267VR1OixVxSFTPpQ1fsisrfIM6lqoaqdKc/VEZGug+dzKQ9VLWqzqJcajcZeu92+9rXf0263r2VZdv9ihV8s8jwX7/W/lmVZx/oUv8uP/0kprUnNPriiIf9WWzcPRUTyPP91e3v7w9bW1l+np6ffnJycXB+NRt9f/J6FBvoFvctPU9ne3j7Z2tr6/fj4+LvxeHyjzp+soqq1DRWBqGp9XkwhNkJFCISKEAgVIRAqQiBUhECoCIFQEQKhIgRCRQiEihAIFSEQKkIgVIRAqAiBUBECoSIEQkUIhIoQCBUhECpCIFSEQKgIgVARAqEiBEJFCISKEAgVIRAqQiBUhECoCIFQEQKhIgRCRQiEihD+AYRbH9wWXM+XAAAAAElFTkSuQmCC" class="inline w-6 mr-4" alt="Hackerone Logo" />
            <a href="https://hackerone.com/ariestahrt" target="_blank" rel="noopener noreferrer">HackerOne</a>
          </div>
          <div class="flex items-center my-3">
            <img src="assets/logo-linkedin.cb874d74.svg" class="inline w-6 mr-4" alt="LinkedIn Logo" />
            <a href="https://www.linkedin.com/in/ariestaputra/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div class="flex items-center my-3">
            <img src="assets/globe-outline.4c58bb35.svg" class="inline w-6 mr-4" alt="Globe icon" />
            <a href="https://ariesta.nyakit.in/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </div>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Bahasa Pemrograman & Software</h2>
          <ul class="list-none">
            <li>
              <label for="js-skill">JavaScript</label>
              <progress id="js-skill" max="100" value="70"></progress>
            </li>
            <li>
              <label for="nextjs-skill">Next.js</label>
              <progress id="nextjs-skill" max="100" value="40"></progress>
            </li>
            <li>
              <label for="css-skill">C++</label>
              <progress id="css-skill" max="100" value="80"></progress>
            </li>
            <li>
              <label for="csharp-skill">C#</label>
              <progress id="csharp-skill" max="100" value="80"></progress>
            </li>
            <li>
              <label for="design-skill">Figma</label>
              <progress id="design-skill" max="100" value="62"></progress>
            </li>
          </ul>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Pendidikan</h2>
          <h3 class="font-semibold">Teknik Informatika</h3>
          <p>2019 - Sekarang | Institut Teknologi Sepuluh Nopember</p>
        </div>

      </div>
      <div class="content w-full p-12">
        <div id="profile" class="prose">
          <h2 class="section-headline">Profil</h2>
          <p>
            Nama Saya I Kadek Agus Ariesta Putra usia saya saat ini adalah 20 tahun. Saya sedang menempuh pendidikan di Institut Teknologi Sepuluh Nopember jurusan Teknik Informatika. Berikut adalah lebih lanjut tentang saya.
          </p>
        </div>
        <hr class="mt-8 mb-12" />
        <div id="experience" class="prose">
          <h2 class="section-headline">Pengalaman</h2>
          <div>
            <h3>Bayucaraka UAV Research Team</h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Feb.&nbsp;2020 - Sekarang
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                Software Enginer
              </div>
            </section>
          </div>
          <div>
            <h3>Asisten Struktur Data</h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Maret.&nbsp;2021 - Juli 2021
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                Asisten
              </div>
            </section>
          </div>
        </div>
        <hr class="mt-8 mb-12" />
        <div id="projects" class="prose">
          <h2 class="section-headline">Portofolio</h2>
          <div class="mb-16">
            <h3 >Baze Game</h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Deskripsi:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full text-justify">
                Sebuah game puzzle yang dibuat secara kerja sama tim untuk memenuhi tugas mata kuliah Pemrograman Berorientasi Objek.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Code on:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <a href="https://github.com/anandasatriaadi/BazeGame" target="_blank"
                  rel="noopener noreferrer">GitHub</a>
              </div>
            </section>

            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Built with:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <span class="rounded-xl bg-gray-300 px-3">Java</span>
              </div>
            </section>
          </div>
        </div>
        <hr class="mt-8 mb-12" />
        <div id="projects" class="prose">
          <h2 class="section-headline">Hobi dan Ketertarikan</h2>
          <div class="mb-16">
            <h4 id="expand-knowledge-headline">
              Saya memiliki hobi dan tertarik akan hal-hal berikut:
            </h4>
            <ul>
              <li>Software Development</li>
              <li>Network Security</li>
              <li>Competitive Programming</li>
              <li>Video Editing</li>
              <li>Tutoring</li>
              <li>Databases</li>
              <li>Backend Development</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

## CSS
Code css disini merupakan kode yang telah dioptimasi dari tailwind css
```css
/*! tailwindcss v2.1.2 | MIT License | https://tailwindcss.com*/


/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

html {
	line-height: 1.15;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	-webkit-text-size-adjust: 100%
}

body {
	font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
	margin: 0
}

hr {
	color: inherit;
	height: 0
}

abbr[title] {
	-webkit-text-decoration: underline dotted;
	text-decoration: underline dotted
}

b,
strong {
	font-weight: bolder
}

code,
kbd,
pre,
samp {
	font-family: ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
	font-size: 1em
}

small {
	font-size: 80%
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline
}

sub {
	bottom: -.25em
}

sup {
	top: -.5em
}

table {
	border-color: inherit;
	text-indent: 0
}

button,
input,
optgroup,
select,
textarea {
	font-family: inherit;
	font-size: 100%;
	line-height: 1.15;
	margin: 0
}

button,
select {
	text-transform: none
}

[type=button],
button {
	-webkit-appearance: button
}

legend {
	padding: 0
}

progress {
	vertical-align: baseline
}

summary {
	display: list-item
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
	margin: 0
}

button {
	background-color: transparent;
	background-image: none
}

button:focus {
	outline: 1px dotted;
	outline: 5px auto -webkit-focus-ring-color
}

fieldset,
ol,
ul {
	margin: 0;
	padding: 0
}

ol,
ul {
	list-style: none
}

html {
	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
	line-height: 1.5
}

body {
	font-family: inherit;
	line-height: inherit
}

*,
:after,
:before {
	border: 0 solid #e5e7eb;
	box-sizing: border-box
}

hr {
	border-top-width: 1px
}

img {
	border-style: solid
}

textarea {
	resize: vertical
}

input::-moz-placeholder,
textarea::-moz-placeholder {
	color: #9ca3af;
	opacity: 1
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
	color: #9ca3af;
	opacity: 1
}

input::placeholder,
textarea::placeholder {
	color: #9ca3af;
	opacity: 1
}

button {
	cursor: pointer
}

table {
	border-collapse: collapse
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: inherit;
	font-weight: inherit
}

a {
	color: inherit;
	text-decoration: inherit
}

button,
input,
optgroup,
select,
textarea {
	color: inherit;
	line-height: inherit;
	padding: 0
}

code,
kbd,
pre,
samp {
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
}

audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
	display: block;
	vertical-align: middle
}

img,
video {
	height: auto;
	max-width: 100%
}

.container {
	width: 100%
}

@media (min-width:640px) {
	.container {
		max-width: 640px
	}
}

@media (min-width:768px) {
	.container {
		max-width: 768px
	}
}

@media (min-width:1024px) {
	.container {
		max-width: 1024px
	}
}

@media (min-width:1280px) {
	.container {
		max-width: 1280px
	}
}

@media (min-width:1536px) {
	.container {
		max-width: 1536px
	}
}

.prose {
	color: #374151;
	max-width: 65ch
}

.prose a {
	color: #111827;
	font-weight: 500;
	text-decoration: underline
}

.prose strong {
	color: #111827;
	font-weight: 600
}

.prose ol[type=a] {
	--list-counter-style: lower-alpha
}

.prose ol[type=I] {
	--list-counter-style: upper-roman
}

.prose ol[type=i] {
	--list-counter-style: lower-roman
}

.prose ol[type="1"] {
	--list-counter-style: decimal
}

.prose ol>li {
	padding-left: 1.75em;
	position: relative
}

.prose ol>li:before {
	color: #6b7280;
	content: counter(list-item, var(--list-counter-style, decimal)) ".";
	font-weight: 400;
	left: 0;
	position: absolute
}

.prose ul>li {
	padding-left: 1.75em;
	position: relative
}

.prose ul>li:before {
	background-color: #d1d5db;
	border-radius: 50%;
	content: "";
	height: .375em;
	left: .25em;
	position: absolute;
	top: .6875em;
	width: .375em
}

.prose hr {
	border-color: #e5e7eb;
	border-top-width: 1px;
	margin-bottom: 3em;
	margin-top: 3em
}

.prose blockquote {
	border-left-color: #e5e7eb;
	border-left-width: .25rem;
	color: #111827;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 1.6em;
	margin-top: 1.6em;
	padding-left: 1em;
	quotes: "\201C""\201D""\2018""\2019"
}

.prose blockquote p:first-of-type:before {
	content: open-quote
}

.prose blockquote p:last-of-type:after {
	content: close-quote
}

.prose h1 {
	color: #111827;
	font-size: 2.25em;
	font-weight: 800;
	line-height: 1.1111111;
	margin-bottom: .8888889em;
	margin-top: 0
}

.prose h2 {
	color: #111827;
	font-size: 1.5em;
	font-weight: 700;
	line-height: 1.3333333;
	margin-bottom: 1em;
	margin-top: 2em
}

.prose h3 {
	font-size: 1.25em;
	line-height: 1.6;
	margin-bottom: .6em;
	margin-top: 1.6em
}

.prose h3,
.prose h4 {
	color: #111827;
	font-weight: 600
}

.prose h4 {
	line-height: 1.5;
	margin-bottom: .5em;
	margin-top: 1.5em
}

.prose figure figcaption {
	color: #6b7280;
	font-size: .875em;
	line-height: 1.4285714;
	margin-top: .8571429em
}

.prose code {
	color: #111827;
	font-size: .875em;
	font-weight: 600
}

.prose code:after,
.prose code:before {
	content: "`"
}

.prose a code {
	color: #111827
}

.prose pre {
	background-color: #1f2937;
	border-radius: .375rem;
	color: #e5e7eb;
	font-size: .875em;
	line-height: 1.7142857;
	margin-bottom: 1.7142857em;
	margin-top: 1.7142857em;
	overflow-x: auto;
	padding: .8571429em 1.1428571em
}

.prose pre code {
	background-color: transparent;
	border-radius: 0;
	border-width: 0;
	color: inherit;
	font-family: inherit;
	font-size: inherit;
	font-weight: 400;
	line-height: inherit;
	padding: 0
}

.prose pre code:after,
.prose pre code:before {
	content: none
}

.prose table {
	font-size: .875em;
	line-height: 1.7142857;
	margin-bottom: 2em;
	margin-top: 2em;
	table-layout: auto;
	text-align: left;
	width: 100%
}

.prose thead {
	border-bottom-color: #d1d5db;
	border-bottom-width: 1px;
	color: #111827;
	font-weight: 600
}

.prose thead th {
	padding-bottom: .5714286em;
	padding-left: .5714286em;
	padding-right: .5714286em;
	vertical-align: bottom
}

.prose tbody tr {
	border-bottom-color: #e5e7eb;
	border-bottom-width: 1px
}

.prose tbody tr:last-child {
	border-bottom-width: 0
}

.prose tbody td {
	padding: .5714286em;
	vertical-align: top
}

.prose {
	font-size: 1rem;
	line-height: 1.75
}

.prose p {
	margin-bottom: 1.25em;
	margin-top: 1.25em
}

.prose figure,
.prose img,
.prose video {
	margin-bottom: 2em;
	margin-top: 2em
}

.prose figure>* {
	margin-bottom: 0;
	margin-top: 0
}

.prose h2 code {
	font-size: .875em
}

.prose h3 code {
	font-size: .9em
}

.prose ol,
.prose ul {
	margin-bottom: 1.25em;
	margin-top: 1.25em
}

.prose li {
	margin-bottom: .5em;
	margin-top: .5em
}

.prose>ul>li p {
	margin-bottom: .75em;
	margin-top: .75em
}

.prose>ul>li>:first-child {
	margin-top: 1.25em
}

.prose>ul>li>:last-child {
	margin-bottom: 1.25em
}

.prose>ol>li>:first-child {
	margin-top: 1.25em
}

.prose>ol>li>:last-child {
	margin-bottom: 1.25em
}

.prose ol ol,
.prose ol ul,
.prose ul ol,
.prose ul ul {
	margin-bottom: .75em;
	margin-top: .75em
}

.prose h2+*,
.prose h3+*,
.prose h4+*,
.prose hr+* {
	margin-top: 0
}

.prose thead th:first-child {
	padding-left: 0
}

.prose thead th:last-child {
	padding-right: 0
}

.prose tbody td:first-child {
	padding-left: 0
}

.prose tbody td:last-child {
	padding-right: 0
}

.prose>:first-child {
	margin-top: 0
}

.prose>:last-child {
	margin-bottom: 0
}

.bg-gray-300 {
	--tw-bg-opacity: 1;
	background-color: rgba(209, 213, 219, var(--tw-bg-opacity))
}

.bg-gradient-to-b {
	background-image: linear-gradient(to bottom, var(--tw-gradient-stops))
}

.from-purple-300 {
	--tw-gradient-from: #c4b5fd;
	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(196, 181, 253, 0))
}

.via-blue-300 {
	--tw-gradient-stops: var(--tw-gradient-from), #93c5fd, var(--tw-gradient-to, rgba(147, 197, 253, 0))
}

.to-white {
	--tw-gradient-to: #fff
}

.rounded-xl {
	border-radius: .75rem
}

.rounded-full {
	border-radius: 9999px
}

.inline {
	display: inline
}

.flex {
	display: flex
}

.table {
	display: table
}

.flex-col {
	flex-direction: column
}

.items-center {
	align-items: center
}

.font-sans {
	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji
}

.font-light {
	font-weight: 300
}

.font-semibold {
	font-weight: 600
}

.text-lg {
	font-size: 1.125rem
}

.text-lg,
.text-xl {
	line-height: 1.75rem
}

.text-xl {
	font-size: 1.25rem
}

.text-3xl {
	font-size: 1.875rem;
	line-height: 2.25rem
}

.list-none {
	list-style-type: none
}

.my-3 {
	margin-bottom: .75rem;
	margin-top: .75rem
}

.mx-auto {
	margin-left: auto;
	margin-right: auto
}

.mb-2 {
	margin-bottom: .5rem
}

.mr-4 {
	margin-right: 1rem
}

.mb-4 {
	margin-bottom: 1rem
}

.mb-6 {
	margin-bottom: 1.5rem
}

.mt-8 {
	margin-top: 2rem
}

.mb-12 {
	margin-bottom: 3rem
}

.mb-16 {
	margin-bottom: 4rem
}

.max-w-screen-xl {
	max-width: 1280px
}

.p-8 {
	padding: 2rem
}

.p-12 {
	padding: 3rem
}

.px-2 {
	padding-left: .5rem;
	padding-right: .5rem
}

.px-3 {
	padding-left: .75rem;
	padding-right: .75rem
}

.pb-1 {
	padding-bottom: .25rem
}

* {
	--tw-shadow: 0 0 transparent
}

.shadow-2xl {
	--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

* {
	--tw-ring-inset: var(--tw-empty, );
	/*!*/
	/*!*/
	--tw-ring-offset-width: 0px;
	--tw-ring-offset-color: #fff;
	--tw-ring-color: rgba(59, 130, 246, 0.5);
	--tw-ring-offset-shadow: 0 0 transparent;
	--tw-ring-shadow: 0 0 transparent
}

.text-center {
	text-align: center
}

.text-justify {
	text-align: justify
}

.italic {
	font-style: italic
}

.antialiased {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.w-6 {
	width: 1.5rem
}

.w-48 {
	width: 12rem
}

.w-full {
	width: 100%
}

@-webkit-keyframes spin {
	to {
		transform: rotate(1turn)
	}
}

@keyframes spin {
	to {
		transform: rotate(1turn)
	}
}

@-webkit-keyframes ping {
	75%,
	to {
		opacity: 0;
		transform: scale(2)
	}
}

@keyframes ping {
	75%,
	to {
		opacity: 0;
		transform: scale(2)
	}
}

@-webkit-keyframes pulse {
	50% {
		opacity: .5
	}
}

@keyframes pulse {
	50% {
		opacity: .5
	}
}

@-webkit-keyframes bounce {
	0%,
	to {
		-webkit-animation-timing-function: cubic-bezier(.8, 0, 1, 1);
		animation-timing-function: cubic-bezier(.8, 0, 1, 1);
		transform: translateY(-25%)
	}
	50% {
		-webkit-animation-timing-function: cubic-bezier(0, 0, .2, 1);
		animation-timing-function: cubic-bezier(0, 0, .2, 1);
		transform: none
	}
}

@keyframes bounce {
	0%,
	to {
		-webkit-animation-timing-function: cubic-bezier(.8, 0, 1, 1);
		animation-timing-function: cubic-bezier(.8, 0, 1, 1);
		transform: translateY(-25%)
	}
	50% {
		-webkit-animation-timing-function: cubic-bezier(0, 0, .2, 1);
		animation-timing-function: cubic-bezier(0, 0, .2, 1);
		transform: none
	}
}

.section-headline {
	--tw-border-opacity: 1;
	border-color: rgba(16, 185, 129, var(--tw-border-opacity));
	border-left-width: 8px;
	font-weight: 700;
	letter-spacing: .1em;
	padding-left: .5rem;
	text-transform: uppercase
}

@media (min-width:640px) {
	.section-headline {
		font-size: 1.25rem;
		line-height: 1.75rem
	}
}

progress {
	height: 10px;
	margin-bottom: .4rem;
	margin-top: .5rem;
	width: 100%
}

progress::-webkit-progress-bar {
	background-color: #d1d5db;
	border-radius: 10px;
	box-shadow: 0 2px 6px #555
}

progress::-webkit-progress-value {
	background-image: linear-gradient(36deg, #d1fae5, #818cf8);
	border-radius: 10px 0 0 10px
}

.section-headline {
	color: #10b981!important
}

#chrisko-headline:before {
	background-image: url(/dev-resume-template/assets/chrisko-icon.5a909a4c.png);
	background-position: 50%;
	background-size: contain;
	border-radius: 50%;
	bottom: -8px;
	content: "";
	display: inline-block;
	height: 30px;
	margin-right: 12px;
	position: relative;
	width: 30px
}

@media (min-width:640px) {
	.sm\:flex-row-reverse {
		flex-direction: row-reverse
	}
	.sm\:m-12 {
		margin: 3rem
	}
	.sm\:max-w-sm {
		max-width: 24rem
	}
}

@media (min-width:1024px) {
	.lg\:inline-block {
		display: inline-block
	}
	.lg\:align-top {
		vertical-align: top
	}
	.lg\:w-3\/12 {
		width: 25%
	}
	.lg\:w-8\/12 {
		width: 66.666667%
	}
}
```
