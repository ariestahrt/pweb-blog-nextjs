---
title: '[Tugas] Pertemuan 9 - Jquery'
date: '10 November 2021'
excerpt: 'Excerpt'
cover_image: ''
tags: 'Kuliah,Tugas'
---

Pada pertemuan ke-9 kelas PWEB D, diberikan tugas untuk latihan implementasi jquery dengan menambah html element pada suatu element select.
Hasilnya dapat dilihat pada link berikut [**Latihan Jquery Add Book**](/pertemuan-9-jquery/index.html).
dan [**Latihan Jquery Form Validation dan Ajax Request**](/pertemuan-9-jquery-validation/index.html).

Preview tampilan Add Book
![Add Book](/img/jquery-book.gif)

Preview tampilan Form Validation dan Ajax Request
![Form Validation](/img/jquery-validation.gif)

Dengan potongan kode program pada **Add Book** :

## HTML | INDEX.HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan Jquery</title>
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
                            <h3 class="text-center">Latihan Jquery</h3>
                            <p class="text-center">Isi buku yang akan ditambahkan ke opsi.</p>
                        </div>

                        <form id="form-vaksin" method="get" action="#">
                            <div class="col-md-12">
                                <input id="nama" class="form-control" type="text" name="name" placeholder="Nama buku"/>
                                <div id="nama-invalid-feedback" class="invalid-feedback">Nama tidak boleh kosong!</div>
                            </div>

                            <div class="col-md-12">
                                <input id="author" class="form-control" type="text" name="author" placeholder="Nama author"/>
                                <div id="nama-invalid-feedback" class="invalid-feedback">Author tidak boleh kosong!</div>
                            </div>

                            <div class="col-md-12">
                                <select id="daftar" class="form-select mt-3" required>
                                    <option selected disabled value="">Pilih Buku</option>
                                </select>
                            </div>

                            <div class="form-button mt-3">
                                <button id="add_btn" type="button" class="btn btn-primary">Tambah</button>
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
            $('#add_btn').on('click', function(){
                if($('#nama').val().length == 0){
                    alert("Buku tidak boleh kosong!");
                }else{
                    $('#daftar').append(`
                    <option value="`+ $('#nama').val() +` (`+$('#author').val()+`)">`+ $('#nama').val() +` (`+$('#author').val()+`)</option>
                    `);

                    $('#nama').val('');
                    $('#author').val('');
                }
            });
        })()
    </script>
</body>

</html>
```

Adapun fungsi jquery yang disematkan adalah sebagai berikut:

## FORM VALIDATION | INDEX.HTML

```html
<script type="text/javascript">
    (function () {
        $('#add_btn').on('click', function(){
            if($('#nama').val().length == 0){
                alert("Buku tidak boleh kosong!");
            }else{
                $('#daftar').append(`
                <option value="`+ $('#nama').val() +` (`+$('#author').val()+`)">`+ $('#nama').val() +` (`+$('#author').val()+`)</option>
                `);

                $('#nama').val('');
                $('#author').val('');
            }
        });
    })()
</script>
```

Dan potongan kode program pada **Form Validation** :

## HTML | INDEX.HTML

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
                                <select id="departemen" class="form-select mt-3" required>
                                    <option selected disabled value="">Pilih Departemen</option>
                                    <option value="FTEIC">FTEIC</option>
                                    <option value="FTK">FTK</option>
                                </select>
                                <div id="departemen-invalid-feedback" class="invalid-feedback">Tolong pilih departemen - jurusan!</div>
                            </div>

                            <div class="col-md-12">
                                <select id="jurusan" class="form-select mt-3" required>

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
            $('#departemen').on('change', function(){
                let selected_departement =$('#departemen').find(':selected').val();

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("jurusan").innerHTML = this.responseText;
                    }
                };

                xhttp.open("GET", selected_departement + '.HTML', true);
                xhttp.send();
            });
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