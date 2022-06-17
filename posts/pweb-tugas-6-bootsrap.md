---
title: '[Tugas] Pertemuan 6 - Bootstrap'
date: '19 Oktober 2021'
excerpt: 'Excerpt'
cover_image: ''
tags: 'Kuliah,Tugas'
---

Pada pertemuan ke-tujuh kelas PWEB D, diberikan tugas untuk membuat halaman login dan halaman contact-us dengan menggunakan [**Bootstrap**](https://getbootstrap.com/). Hasilnya dapat dilihat pada link berikut [**Form Login**](/pertemuan-6-bootstrap/login.html) dan [**Form Contact Us**](/pertemuan-6-bootstrap/contact-us.html).

![Halaman Login](/img/halaman-login.png)

![Halaman Contact-us](/img/halaman-contact-us.png)

Dengan potongan kode program :

## HTML | LOGIN.HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Login</title>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'>
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="https://cdn.icon-icons.com/icons2/936/PNG/512/font-symbol-of-letter-a_icon-icons.com_73556.png"/>
</head>

<body>
    <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <div class="d-flex flex-column">
                            <img class="mx-auto mb-3" width="100px" height="100px"
                                src="https://www.its.ac.id/wp-content/uploads/2020/07/Lambang-ITS-2-300x300.png" />
                            <h3 class="text-center">Login</h3>
                            <span class="text-center">Login dulu guys.</span>
                        </div>

                        <form id="form-login" method="post" action="https://intip.in/An1sa">

                            <div class="col-md-12">
                                <input id="username" class="form-control" type="text" name="username" required placeholder="Username"/>
                            </div>

                            <div class="col-md-12">
                                <input id="password" class="form-control" type="password" name="password" required placeholder="Password"/>
                            </div>

                            <div class="form-button mt-3 text-center">
                                <button type="submit" id="submit_btn" class="form-control btn btn-outline-light w-25">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
</body>

</html>
```

## HTML | CONTACT-US.HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'>
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="https://cdn.icon-icons.com/icons2/936/PNG/512/font-symbol-of-letter-a_icon-icons.com_73556.png"/>
</head>

<body>
    <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <div class="d-flex flex-column">
                            <img class="mx-auto mb-3" width="100px" height="100px"
                                src="https://www.its.ac.id/wp-content/uploads/2020/07/Lambang-ITS-2-300x300.png" />
                            <h3 class="text-center">Contact Us</h3>
                            <span class="text-center">Kirim pesan kepada kami.</span>
                        </div>

                        <form id="form-login" method="post" action="https://intip.in/An1sa">
                            <div class="col-md-12">
                                <input id="nama" class="form-control" type="text" name="nama" required placeholder="Nama"/>
                            </div>

                            <div class="col-md-12">
                                <input id="email" class="form-control" type="email" name="email" required placeholder="Email"/>
                            </div>

                            <div class="col-md-12 mt-3">
                                <textarea required id="pesan" name="pesan" class="form-control">Pesan anda disini...</textarea>
                            </div>

                            <div class="form-button mt-3 text-center">
                                <button type="submit" id="submit_btn" class="form-control btn btn-outline-light w-25">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
</body>

</html>
```

Kode program CSS tambahan selain menggunakan bootstrap adalah sebagai berikut:

## CSS | STYLE.CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');

*, body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
}

html, body {
    height: 100%;
    /* background-color: #013880; */
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

    /* background-image: url('./RC.png'); */
    overflow: hidden;
}


.form-holder {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 100vh;
}

.form-holder .form-content {
    position: relative;
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 60px;
}

.form-content .form-items {
    border: 3px solid #fff;
    padding: 40px;
    display: inline-block;
    width: 100%;
    min-width: 540px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-align: left;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.form-content h3 {
    color: #fff;
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
}

.form-content h3.form-title {
    margin-bottom: 30px;
}

.form-content p {
    color: #fff;
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 30px;
}


.form-content label, .was-validated .form-check-input:invalid~.form-check-label, .was-validated .form-check-input:valid~.form-check-label{
    color: #fff;
}

.form-content input[type=text], .form-content input[type=password], .form-content input[type=email], .form-content select {
    width: 100%;
    padding: 9px 20px;
    text-align: left;
    border: 0;
    outline: 0;
    border-radius: 6px;
    background-color: #fff;
    font-size: 15px;
    font-weight: 300;
    color: #8D8D8D;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-top: 16px;
}


.btn-primary{
    background-color: #6C757D;
    outline: none;
    border: 0px;
     box-shadow: none;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active{
    background-color: #495056;
    outline: none !important;
    border: none !important;
     box-shadow: none;
}

.form-content textarea {
    position: static !important;
    width: 100%;
    padding: 8px 20px;
    border-radius: 6px;
    text-align: left;
    background-color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: 300;
    color: #8D8D8D;
    outline: none;
    resize: none;
    height: 120px;
    -webkit-transition: none;
    transition: none;
    margin-bottom: 14px;
}

.form-content textarea:hover, .form-content textarea:focus {
    border: 0;
    background-color: #ebeff8;
    color: #8D8D8D;
}

.mv-up{
    margin-top: -9px !important;
    margin-bottom: 8px !important;
}

.invalid-feedback{
    color: #d12a38;
}

.valid-feedback{
   color: #1fa868;
}
```