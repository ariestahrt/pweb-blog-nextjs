---
title: '[Tugas] Pertemuan 5 - Javascript'
date: '13 Oktober 2021'
excerpt: 'Excerpt'
cover_image: ''
tags: 'Kuliah,Tugas'
---

Pada pertemuan ke-enam kelas PWEB D, diberikan tugas untuk membuat form validasi. Hasilnya dapat dilihat pada link berikut [**Form Validasi Vaksin**](/pertemuan-5-javascript/index.html).
![Gambar Web](/img/gif-form-validation.gif)

Kode program untuk validasi menggunakan javascript sebagai berikut:
## JS
```js
(function () {
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    $('#submit_btn').on('click', function(){
        let errorField = 0;
        let nama = $('#nama').val();
        let nrp = $('#nrp').val();
        let jurusan_val = $('#jurusan').find(':selected').val();
        let alamat = $('#alamat').val();
        let email = $('#email').val();
        let is_vaksin_selected = $('#belum_vaksin').is(":checked") || $('#vaksin_1').is(":checked") || $('#vaksin_2').is(":checked");

        if(nama.length == 0){
            errorField++;
            $('#nama-invalid-feedback').show();
        }else{
            $('#nama-invalid-feedback').hide();
        }

        if(nrp.length < 8){
            errorField++;
            $('#nrp-invalid-feedback').show();
        }else if(nrp.match(/^[0-9]+$/) == null){
            errorField++;
            $('#nrp-invalid-feedback').html("NRP harus berupa angka saja!");
            $('#nrp-invalid-feedback').show();
        }else{
            $('#nrp-invalid-feedback').html("NRP harus lebih dari 8 karakter!");
            $('#nrp-invalid-feedback').hide();
        }

        if(jurusan_val == 0){
            errorField++;
            $('#jurusan-invalid-feedback').show();
        }else{
            $('#jurusan-invalid-feedback').hide();
        }

        if(alamat.length == 0){
            errorField++;
            $('#alamat-invalid-feedback').show();
        }else{
            $('#alamat-invalid-feedback').hide();
        }

        if(!isEmail(email)){
            errorField++;
            $('#email-invalid-feedback').show();
        }else{
            $('#email-invalid-feedback').hide();
        }

        if(!is_vaksin_selected){
            errorField++;
            $('#vaksin-invalid-feedback').show();
        }else{
            $('#vaksin-invalid-feedback').hide();
        }
        
        if(errorField == 0){
            alert("Selamat, data anda benar!~");
            $("#form-vaksin").submit();
        }
    });

})()
```

Dengan potongan kode program lainnya sebagai berikut:

## HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validasi Vaksin</title>
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
                            <h3 class="text-center">Form Validasi Vaksin ITS</h3>
                            <p class="text-center">Tolong isi data di bawah.</p>
                        </div>

                        <form id="form-vaksin" method="get" action="https://intip.in/RiKA">

                            <div class="col-md-12">
                                <input id="nama" class="form-control" type="text" name="name" placeholder="Nama Lengkap"/>
                                <div id="nama-invalid-feedback" class="invalid-feedback">Nama tidak boleh kosong!</div>
                            </div>

                            <div class="col-md-12">
                                <input id="nrp" class="form-control" type="text" name="nrp" placeholder="NRP"/>
                                <div id="nrp-invalid-feedback" class="invalid-feedback">NRP minimal 8 karakter!</div>
                            </div>

                            <div class="col-md-12">
                                <input id="alamat" class="form-control" type="text" name="alamat" placeholder="Alamat saat ini"/>
                                <div id="alamat-invalid-feedback" class="invalid-feedback">Alamat tidak boleh kosong!</div>
                            </div>

                            <div class="col-md-12">
                                <input id="email" class="form-control" type="email" name="email" placeholder="Alamat e-mail"/>
                                <div id="email-invalid-feedback" class="invalid-feedback">Email tidak valid!</div>
                            </div>

                            <div class="col-md-12">
                                <select id="jurusan" class="form-select mt-3" required>
                                    <option selected disabled value="">Pilih Departemen - Jurusan</option>
                                    <option value="Teknik Informatika">FTEIC - Teknik Informatika</option>
                                    <option value="Teknik Komputer">FTEIC - Teknik Komputer</option>
                                    <option value="Sistem Informasi">FTEIC - Sistem Informasi</option>
                                </select>
                                <div id="jurusan-invalid-feedback" class="invalid-feedback">Tolong pilih departemen - jurusan!</div>
                            </div>

                            <div class="col-md-12 mt-3">
                                <label class="mb-3 mr-1" for="vaksin">Status Vaksinasi: </label>
                                
                                <input type="radio" class="btn-check" name="vaksin" id="belum_vaksin" autocomplete="off" required>
                                <label class="btn btn-sm btn-outline-secondary" for="belum_vaksin">Belum Vaksin</label>
                                
                                <input type="radio" class="btn-check" name="vaksin" id="vaksin_1" autocomplete="off" required>
                                <label class="btn btn-sm btn-outline-secondary" for="vaksin_1">Vaksin Pertama</label>
                                
                                <input type="radio" class="btn-check" name="vaksin" id="vaksin_2" autocomplete="off" required>
                                <label class="btn btn-sm btn-outline-secondary" for="vaksin_2">Vaksin Kedua</label>

                                <div id="vaksin-invalid-feedback" class="invalid-feedback mv-up">Tolong pilih status vaksin-nya!</div>
                            </div>
                            <div class="form-button mt-3">
                                <button id="submit_btn" type="button" class="btn btn-primary">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <script type="text/javascript">
        (function () {
            function isEmail(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
            }
            $('#submit_btn').on('click', function(){
                let errorField = 0;
                let nama = $('#nama').val();
                let nrp = $('#nrp').val();
                let jurusan_val = $('#jurusan').find(':selected').val();
                let alamat = $('#alamat').val();
                let email = $('#email').val();
                let is_vaksin_selected = $('#belum_vaksin').is(":checked") || $('#vaksin_1').is(":checked") || $('#vaksin_2').is(":checked");

                if(nama.length == 0){
                    errorField++;
                    $('#nama-invalid-feedback').show();
                }else{
                    $('#nama-invalid-feedback').hide();
                }

                if(nrp.length < 8){
                    errorField++;
                    $('#nrp-invalid-feedback').show();
                }else if(nrp.match(/^[0-9]+$/) == null){
                    errorField++;
                    $('#nrp-invalid-feedback').html("NRP harus berupa angka saja!");
                    $('#nrp-invalid-feedback').show();
                }else{
                    $('#nrp-invalid-feedback').html("NRP harus lebih dari 8 karakter!");
                    $('#nrp-invalid-feedback').hide();
                }

                if(jurusan_val == 0){
                    errorField++;
                    $('#jurusan-invalid-feedback').show();
                }else{
                    $('#jurusan-invalid-feedback').hide();
                }

                if(alamat.length == 0){
                    errorField++;
                    $('#alamat-invalid-feedback').show();
                }else{
                    $('#alamat-invalid-feedback').hide();
                }

                if(!isEmail(email)){
                    errorField++;
                    $('#email-invalid-feedback').show();
                }else{
                    $('#email-invalid-feedback').hide();
                }

                if(!is_vaksin_selected){
                    errorField++;
                    $('#vaksin-invalid-feedback').show();
                }else{
                    $('#vaksin-invalid-feedback').hide();
                }
                
                if(errorField == 0){
                    alert("Selamat, data anda benar!~");
                    $("#form-vaksin").submit();
                }
            });

        })()
    </script>
</body>

</html>
```

Kode program CSS adalah sebagai berikut:

## CSS

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
    background-color: #013880;
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