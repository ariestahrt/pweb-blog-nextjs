---
title: '[Tugas] Pertemuan Minggu 14 - Query'
date: '9 Desember 2021'
excerpt: 'Excerpt'
cover_image: ''
tags: 'Kuliah,Tugas'
---

Pada pertemuan ke-14 kelas PWEB D, diberikan tugas untuk menambahkan fitur upload foto pada CRUD (Create Read Update Delete) sistem informasi pendaftaran sekolah.
Untuk kode program php, saya buatkan API di hosting pribadi saya yaitu [**https://ariesta.club/**](https://ariesta.club/).

Hasilnya adalah sebagai berikut : [**Tugas Pertemuan 14**](/pertemuan-14-query/index.html)

Halaman **/index.html**
![Halaman Utama](/img/query/home.png)

Halaman **/daftar.html**
![Daftar](/img/query/daftar.png)

Halaman **/pendaftar.html**
![Pendaftar](/img/query/pendaftar.png)

Adapun kode front-end adalah sebagai berikut:

## index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Utama</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
    <header>
        <center><h3>Menu Pendaftaran Siswa Baru</h3></center>
        <br/>
        <br/>
    </header>
        
    <center>
        <img src="ppdb.jpg" width="400px"/>
        <br/>
        <br/>
        <br/>
        <nav>
            <a href="daftar.html" class="btn btn-primary">Daftar Baru</a></li>
            <a href="pendaftar.html" class="btn btn-success">Pendaftar</a></li>
        </nav>
    </center>
</body>
</html>
```

## daftar.html
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar SMK Ngodong</title>
</head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://codeseven.github.io/toastr/build/toastr.min.css"/>
<link rel="text/javascript" href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"/>
<style>
    body {
        font-family: 'Lato', sans-serif
    }

    h1 {
        margin-bottom: 40px
    }

    label {
        color: #333
    }

    .btn-send {
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        width: 80%;
        margin-left: 3px
    }

    .help-block.with-errors {
        color: #ff5050;
        margin-top: 5px
    }

    .card {
        margin-left: 10px;
        margin-right: 10px
    }
</style>

<body>
    <div class="container">
        <div class=" text-center mt-5 ">
            <h1>Formulir Daftar SMK Coding</h1>
        </div>
        <div class="row ">
            <div class="col-lg-7 mx-auto">
                <div class="card mt-2 mx-auto p-4 bg-light">
                    <div class="card-body bg-light">
                        <div class="container">
                            <form id="form-daftar" role="form" method="POST" action="daftar.php">
                                <div class="controls">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group"> <label for="form_nama">Nama Lengkap *</label>
                                                <input id="form_nama" type="text" name="nama" class="form-control" placeholder="Nama lengkap anda *" required="required" data-error="Nama diperlukan." />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group"> <label for="form_foto">Pas Foto *</label>
                                                <input id="form_foto" type="file" accept="image/png, image/jpg, image/jpeg" name="foto" class="form-control" placeholder="Pilih file" required="required" data-error="Pas foto diperlukan." />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="form_kelamin">Pilih jenis kelamin *</label>
                                                <select id="form_kelamin" name="kelamin" class="form-control" required="required" data-error="Tolong pilih jenis kelamin.">
                                                    <option value="" selected disabled>Jenis Kelamin</option>
                                                    <option value="L">Laki-laki</option>
                                                    <option value="P">Perempuan</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="form_agama">Pilih Agama *</label>
                                                <select id="form_agama" name="agama" class="form-control" required="required" data-error="Tolong pilih agama.">
                                                    <option value="" selected disabled>Pilih agama</option>
                                                    <option value="Hindu">Hindu</option>
                                                    <option value="Buda">Buda</option>
                                                    <option value="Islam">Islam</option>
                                                    <option value="Kristen">Kristen</option>
                                                    <option value="Katolik">Katolik</option>
                                                    <option value="Kong Hu Cu">Kong Hu Cu</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group"> <label for="form_sekolah">Sekolah Asal *</label>
                                                <input id="form_sekolah" type="text" name="sekolah" class="form-control" placeholder="Sekolah asal anda *" required="required" data-error="Sekolah asal diperlukan." />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="form_alamat">Alamat lengkap *</label>
                                                <textarea id="form_alamat" name="alamat" class="form-control"
                                                    placeholder="Alamat lengkap *" rows="4" required="required"
                                                    data-error="Tolong isi alamat lengkap anda!"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <button id="submit-btn" type="button" class="btn btn-success pt-2 btn-block" value="Daftar">Daftar</input>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script> -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script type="text/javascript">
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    $('#submit-btn').on('click', () => {
        var form = $('#form-daftar')[0];
        var fd = new FormData(form);
        var files = $('#form_foto')[0].files;

        let datas = {
            nama: $('#form_nama').val(),
            kelamin: $('#form_kelamin').find(':selected').val(),
            agama: $('#form_agama').find(':selected').val(),
            sekolah: $('#form_sekolah').val(),
            alamat: $('#form_alamat').val(),
            file: files[0]
        }

        let ERROR = false;
        var files = $('#form_foto')[0].files;
        if(files.length == 0 ){
            ERROR = true;
        }
        if(datas.nama.length == 0) { ERROR = true }
        if(datas.kelamin.length == 0) { ERROR = true }
        if(datas.agama.length == 0) { ERROR = true }
        if(datas.sekolah.length == 0) { ERROR = true }
        if(datas.alamat.length == 0) { ERROR = true }

        // console.log(datas);
        if(!ERROR){
            fd.append('nama', datas.nama);
            fd.append('kelamin', datas.kelamin);
            fd.append('agama', datas.agama);
            fd.append('sekolah', datas.sekolah);
            fd.append('alamat', datas.alamat);
            fd.append('file', files[0]);
            
            
            $.ajax({
                type: 'POST',
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                url: "https://ariesta.club/pweb/minggu14/daftar.php",
                data: fd,
                success: function(resultData) {
                    let result = JSON.parse(resultData);
                    if(result.error == 0){
                        toastr["success"](result.status);
                    }else{
                        toastr["error"](result.status);
                    }
                }
            });
        }else{
            alert("Terjadi kesalahan, mohon input tidak boleh ada yang kosong!");
        }
    });
</script>
</html>
```

## pendaftar.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Daftar pendaftar</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://codeseven.github.io/toastr/build/toastr.min.css"/>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<style>
body {
	color: #566787;
	background: #f5f5f5;
	font-family: 'Varela Round', sans-serif;
	font-size: 13px;
}
.table-responsive {
    margin: 30px 0;
}
.table-wrapper {
	background: #fff;
	padding: 20px 25px;
	border-radius: 3px;
	min-width: 1000px;
	box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.table-title {        
	padding-bottom: 15px;
	background: #435d7d;
	color: #fff;
	padding: 16px 30px;
	min-width: 100%;
	margin: -20px -25px 10px;
	border-radius: 3px 3px 0 0;
}
.table-title h2 {
	margin: 5px 0 0;
	font-size: 24px;
}
.table-title .btn-group {
	float: right;
}
.table-title .btn {
	color: #fff;
	float: right;
	font-size: 13px;
	border: none;
	min-width: 50px;
	border-radius: 2px;
	border: none;
	outline: none !important;
	margin-left: 10px;
}
.table-title .btn i {
	float: left;
	font-size: 21px;
	margin-right: 5px;
}
.table-title .btn span {
	float: left;
	margin-top: 2px;
}
table.table tr th, table.table tr td {
	border-color: #e9e9e9;
	padding: 12px 15px;
	vertical-align: middle;
}
table.table tr th:first-child {
	width: 60px;
}
table.table tr th:last-child {
	width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
	background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
	background: #f5f5f5;
}
table.table th i {
	font-size: 13px;
	margin: 0 5px;
	cursor: pointer;
}	
table.table td:last-child i {
	opacity: 0.9;
	font-size: 22px;
	margin: 0 5px;
}
table.table td a {
	font-weight: bold;
	color: #566787;
	display: inline-block;
	text-decoration: none;
	outline: none !important;
}
table.table td a:hover {
	color: #2196F3;
}
table.table td a.edit {
	color: #FFC107;
}
table.table td a.delete {
	color: #F44336;
}
table.table td i {
	font-size: 19px;
}
table.table .avatar {
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 10px;
}
.pagination {
	float: right;
	margin: 0 0 5px;
}
.pagination li a {
	border: none;
	font-size: 13px;
	min-width: 30px;
	min-height: 30px;
	color: #999;
	margin: 0 2px;
	line-height: 30px;
	border-radius: 2px !important;
	text-align: center;
	padding: 0 6px;
}
.pagination li a:hover {
	color: #666;
}	
.pagination li.active a, .pagination li.active a.page-link {
	background: #03A9F4;
}
.pagination li.active a:hover {        
	background: #0397d6;
}
.pagination li.disabled i {
	color: #ccc;
}
.pagination li i {
	font-size: 16px;
	padding-top: 6px
}
.hint-text {
	float: left;
	margin-top: 10px;
	font-size: 13px;
}    
/* Custom checkbox */
.custom-checkbox {
	position: relative;
}
.custom-checkbox input[type="checkbox"] {    
	opacity: 0;
	position: absolute;
	margin: 5px 0 0 3px;
	z-index: 9;
}
.custom-checkbox label:before{
	width: 18px;
	height: 18px;
}
.custom-checkbox label:before {
	content: '';
	margin-right: 10px;
	display: inline-block;
	vertical-align: text-top;
	background: white;
	border: 1px solid #bbb;
	border-radius: 2px;
	box-sizing: border-box;
	z-index: 2;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	content: '';
	position: absolute;
	left: 6px;
	top: 3px;
	width: 6px;
	height: 11px;
	border: solid #000;
	border-width: 0 3px 3px 0;
	transform: inherit;
	z-index: 3;
	transform: rotateZ(45deg);
}
.custom-checkbox input[type="checkbox"]:checked + label:before {
	border-color: #03A9F4;
	background: #03A9F4;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
	border-color: #fff;
}
.custom-checkbox input[type="checkbox"]:disabled + label:before {
	color: #b8b8b8;
	cursor: auto;
	box-shadow: none;
	background: #ddd;
}
/* Modal styles */
.modal .modal-dialog {
	max-width: 400px;
}
.modal .modal-header, .modal .modal-body, .modal .modal-footer {
	padding: 20px 30px;
}
.modal .modal-content {
	border-radius: 3px;
	font-size: 14px;
}
.modal .modal-footer {
	background: #ecf0f1;
	border-radius: 0 0 3px 3px;
}
.modal .modal-title {
	display: inline-block;
}
.modal .form-control {
	border-radius: 2px;
	box-shadow: none;
	border-color: #dddddd;
}
.modal textarea.form-control {
	resize: vertical;
}
.modal .btn {
	border-radius: 2px;
	min-width: 100px;
}	
.modal form label {
	font-weight: normal;
}
img {
    max-width: 100px;
}
</style>
<script>
$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});
</script>
</head>
<body>
<div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2>Daftar <b>Pendaftar</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="daftar.html" class="btn btn-success">
                            <i class="material-icons">&#xE147;</i>
                            <span>Tambah baru</span>
                        </a>
						<!-- <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Hapus</span></a>						 -->
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll">
								<label for="selectAll"></label>
							</span>
						</th>
						<th>ID Pendaftaran</th>
						<th>Foto</th>
						<th>Nama</th>
						<th>Jenis Kelamin</th>
						<th>Agama</th>
						<th>Asal Sekolah</th>
						<th>Alamat</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody id="table-siswa">
					<!-- <tr>
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1">
								<label for="checkbox1"></label>
							</span>
						</td>
						<td>Om Ganteng</td>
						<td>L</td>
						<td>Hindu</td>
						<td>SMA N 2 Semarapura</td>
						<td>Jalan-jalan</td>
						<td>
							<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr> -->

				</tbody>
			</table>
			<!-- <div class="clearfix">
				<div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
				<ul class="pagination">
					<li class="page-item disabled"><a href="#">Previous</a></li>
					<li class="page-item"><a href="#" class="page-link">1</a></li>
					<li class="page-item"><a href="#" class="page-link">2</a></li>
					<li class="page-item active"><a href="#" class="page-link">3</a></li>
					<li class="page-item"><a href="#" class="page-link">4</a></li>
					<li class="page-item"><a href="#" class="page-link">5</a></li>
					<li class="page-item"><a href="#" class="page-link">Next</a></li>
				</ul>
			</div> -->
		</div>
	</div>        
</div>
<!-- Edit Modal HTML -->
<div id="editEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Edit Pendaftar</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
                    <input id="form_id" type="hidden" name="id" value=""/>
					<div class="form-group">
						<label>Nama Lengkap</label>
                        <input id="form_nama" type="text" name="nama" class="form-control" placeholder="Nama lengkap anda *" required="required" data-error="Nama diperlukan." />
					</div>
					<div class="form-group">
						<label>Pas Foto</label>
						<input id="form_foto" type="file" accept="image/png, image/jpg, image/jpeg" name="foto" class="form-control" placeholder="Pilih file" required="required" data-error="Pas foto diperlukan." />
					</div>
					<div class="form-group">
						<label>Jenis Kelamin</label>
                        <select id="form_kelamin" name="kelamin" class="form-control" required="required" data-error="Tolong pilih jenis kelamin.">
                            <option value="" selected disabled>Jenis Kelamin</option>
                            <option value="L">Laki-laki</option>
                            <option value="P">Perempuan</option>
                        </select>
					</div>
					<div class="form-group">
						<label>Agama</label>
                        <select id="form_agama" name="agama" class="form-control" required="required" data-error="Tolong pilih agama.">
                            <option value="" selected disabled>Pilih agama</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Buda">Buda</option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen">Kristen</option>
                            <option value="Katolik">Katolik</option>
                            <option value="Kong Hu Cu">Kong Hu Cu</option>
                        </select>
                    </div>
					<div class="form-group">
						<label>Asal Sekolah</label>
                        <input id="form_sekolah" type="text" name="sekolah" class="form-control" placeholder="Sekolah asal anda *" required="required" data-error="Sekolah asal diperlukan." />
					</div>					
					<div class="form-group">
						<label>Alamat</label>
                        <textarea id="form_alamat" name="alamat" class="form-control"
                        placeholder="Alamat lengkap *" rows="4" required="required"
                        data-error="Tolong isi alamat lengkap anda!"></textarea>
                    </div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Batal">
					<input id="submit-btn" type="button" class="btn btn-info" value="Simpan">
				</div>
			</form>
		</div>
	</div>
</div>
<!-- Delete Modal HTML -->
<div id="deleteEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Hapus Pendaftar</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Apakah anda yakin?</p>
					<p class="text-warning"><small>Tindakan ini tidak dapat dikembalikan.</small></p>
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Batal">
					<input onclick="triggerDelete()" type="button" class="btn btn-danger" value="Hapus">
				</div>
			</form>
		</div>
	</div>
</div>
</body>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

<script>
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    let DELETE_ID = null;
    $(document).ready( () =>{
        $.ajax({
            type: 'GET',
            url: "https://ariesta.club/pweb/minggu14/list.php",
            success: function(resultData) {
                resultData.split("\n").forEach(element => {
                    let data = JSON.parse(element);
                    if(!data) return;

                    $('#table-siswa').append(`
                    <tr>
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1">
								<label for="checkbox1"></label>
							</span>
						</td>
						<td>${data.id}</td>
						<td><img src="https://ariesta.club/pweb/minggu14/${data.url_foto}" /></td>
						<td>${data.nama}</td>
						<td>${data.kelamin}</td>
						<td>${data.agama}</td>
						<td>${data.sekolah}</td>
						<td>${data.alamat}</td>
						<td>
							<a href="#editEmployeeModal" onclick="readData(${data.id})" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" onclick="setDeleteID(${data.id})" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
                    `)
                });
            }
        });
    });

    const readData = (id) => {
        $.ajax({
            type: 'GET',
            url: "https://ariesta.club/pweb/minggu14/read.php?id="+id,
            success: function(resultData) {
                let data = JSON.parse(resultData);
                $('#form_id').val(data.id);
                $('#form_nama').val(data.nama);
                $('#form_kelamin option[value='+data.kelamin+']').attr('selected','selected');
                $('#form_agama option[value='+data.agama+']').attr('selected','selected');
                $('#form_sekolah').val(data.sekolah);
                $('#form_alamat').val(data.alamat);
            }
        });
    }

    const setDeleteID = (id) => {
        DELETE_ID = id;
    }

    const triggerDelete = () => {
        $.ajax({
            type: 'GET',
            url: "https://ariesta.club/pweb/minggu14/delete.php?id="+DELETE_ID,
            success: function(resultData) {
				let result = JSON.parse(resultData);
				if(result.error == 0){
					toastr["success"](result.status);
				}else{
					toastr["error"](result.status);
				}
                location.reload();
            }
        });
    }

    $('#submit-btn').on('click', () => {
        var form = $('#form-daftar')[0];
        var fd = new FormData(form);
        var files = $('#form_foto')[0].files;

        let datas = {
			id: $('#form_id').val(),
            nama: $('#form_nama').val(),
            kelamin: $('#form_kelamin').find(':selected').val(),
            agama: $('#form_agama').find(':selected').val(),
            sekolah: $('#form_sekolah').val(),
            alamat: $('#form_alamat').val(),
            file: files[0]
        }

        let ERROR = false;
        var files = $('#form_foto')[0].files;
        if(files.length == 0 ){
            ERROR = true;
        }
        if(datas.nama.length == 0) { ERROR = true }
        if(datas.kelamin.length == 0) { ERROR = true }
        if(datas.agama.length == 0) { ERROR = true }
        if(datas.sekolah.length == 0) { ERROR = true }
        if(datas.alamat.length == 0) { ERROR = true }

        // console.log(datas);
        if(!ERROR){
			fd.append('id', datas.id);
            fd.append('nama', datas.nama);
            fd.append('kelamin', datas.kelamin);
            fd.append('agama', datas.agama);
            fd.append('sekolah', datas.sekolah);
            fd.append('alamat', datas.alamat);
            fd.append('file', files[0]);
            
            $.ajax({
                type: 'POST',
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                url: "https://ariesta.club/pweb/minggu14/update.php",
                data: fd,
                success: function(resultData) {
					let result = JSON.parse(resultData);
					if(result.error == 0){
						toastr["success"](result.status);
					}else{
						toastr["error"](result.status);
					}
					// setTimeout(() => {}, 500);
                    // location.reload();
                }
            });
        }else{
            alert("Terjadi kesalahan, mohon input tidak boleh ada yang kosong!");
        }
    });
</script>
</html>
```


Dan kode back-end yang saya pasang di ariesta.club adalah:

## config.php
```php
<?php

$server = "localhost";
$user = "root";
$password = "";
$nama_database = "pweb9";

$db = mysqli_connect($server, $user, $password, $nama_database);

if (!$db) {
    die("Gagal terhubung dengan database: " . mysqli_connect_error());
}
```

## daftar.php
Fitur yang ditambahkan adalah pembatasan ukuran file yang di-upload yaitu maksimal 3 MB. Dan randomize nama file yang disimpan.

```php
<?php

include("config.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nama = str_replace("'", "\'", $_POST['nama']);
    $kelamin = str_replace("'", "\'", $_POST['kelamin']);
    $agama = str_replace("'", "\'", $_POST['agama']);
    $sekolah = str_replace("'", "\'", $_POST['sekolah']);
    $alamat = str_replace("'", "\'", $_POST['alamat']);
    $url_foto = "";

    if(isset($_FILES['file']['name'])){

        if($_FILES['file']['size'] > 3*1048576) { //3 MB (size is also in bytes)
            die(json_encode([
                "error" => 500,
                "status" => "File too large (> 3 MB)"
            ]));
            exit;
        }

        /* Getting file name */
        $filename = $_FILES['file']['name'];
        
        /* Location */
        $location = "img/".$filename;
        $imageFileType = pathinfo($location,PATHINFO_EXTENSION);
        $imageFileType = strtolower($imageFileType);
        $location = "img/".md5(time()).$imageFileType;

        /* Valid extensions */
        $valid_extensions = array("jpg","jpeg","png");
     
        $response = 0;
        /* Check file extension */
        if(in_array(strtolower($imageFileType), $valid_extensions)) {
           /* Upload file */
           if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
              $response = $location;
              $url_foto = $location;
           }
        }else{
            die(json_encode([
                "error" => 500,
                "status" => "Invalid file type"
            ]));
            exit;
        }     
    }

    $sql = "INSERT INTO calon_siswa (nama, jenis_kelamin, agama, sekolah_asal, alamat, url_foto) VALUE ('$nama', '$kelamin', '$agama', '$sekolah', '$alamat', '$url_foto')";
    $query = mysqli_query($db, $sql);
    if ($query) {
        die(json_encode([
            "error" => 0,
            "status" => "OK"
        ]));
    } else {
        die(json_encode([
            "error" => 500,
            "status" => "Internal Server Error"
        ]));
    }
}else{
    die("Method not allowed");
}
```

## read.php
```php
<?php

include("config.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $id = str_replace("'", "\'", $_GET['id']);
    $sql = "SELECT * FROM calon_siswa WHERE id=$id";
    $query = mysqli_query($db, $sql);

    while ($siswa = mysqli_fetch_array($query)) {
        echo json_encode([
            "id" => $siswa["id"],
            "url_foto" => $siswa["url_foto"],
            "nama" => $siswa["nama"],
            "kelamin" => $siswa["jenis_kelamin"],
            "agama" => $siswa["agama"],
            "sekolah" => $siswa["sekolah_asal"],
            "alamat" => $siswa["alamat"],
            "nama" => $siswa["nama"],
            
        ]);
        echo "\n";
        break;
    }
}else{
    die("Method not allowed");
}
```

## update.php
```php
<?php

include("config.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $id = str_replace("'", "\'", $_POST['id']);
    $nama = str_replace("'", "\'", $_POST['nama']);
    $kelamin = str_replace("'", "\'", $_POST['kelamin']);
    $agama = str_replace("'", "\'", $_POST['agama']);
    $sekolah = str_replace("'", "\'", $_POST['sekolah']);
    $alamat = str_replace("'", "\'", $_POST['alamat']);
    $url_foto = "";

    if(isset($_FILES['file']['name'])){

        if($_FILES['file']['size'] > 3*1048576) { //3 MB (size is also in bytes)
            die(json_encode([
                "error" => 500,
                "status" => "File too large (> 3 MB)"
            ]));
            exit;
        }

        /* Getting file name */
        $filename = $_FILES['file']['name'];
        
        /* Location */
        $location = "img/".$filename;
        $imageFileType = pathinfo($location,PATHINFO_EXTENSION);
        $imageFileType = strtolower($imageFileType);
        $location = "img/".md5(time()).$imageFileType;

        /* Valid extensions */
        $valid_extensions = array("jpg","jpeg","png");
     
        $response = 0;
        /* Check file extension */
        if(in_array(strtolower($imageFileType), $valid_extensions)) {
           /* Upload file */
           if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
              $response = $location;
              $url_foto = $location;
           }
        }else{
            die(json_encode([
                "error" => 500,
                "status" => "Invalid file type"
            ]));
            exit;
        }     
    }
    
    // Get old file url
    $sql = "SELECT * FROM calon_siswa WHERE id=$id";
    $query = mysqli_query($db, $sql);

    $old_url_foto = "";
    while ($siswa = mysqli_fetch_array($query)) {
        $old_url_foto = $siswa["url_foto"];
        break;
    }
    
    if(file_exists($old_url_foto)){
        unlink($old_url_foto);
    }

    $sql = "UPDATE calon_siswa SET nama='$nama', jenis_kelamin='$kelamin', agama='$agama', sekolah_asal='$sekolah', alamat='$alamat', url_foto='$location' WHERE id=$id";
    // die($sql);
    $query = mysqli_query($db, $sql);
    if ($query) {
        die(json_encode([
            "error" => 0,
            "status" => "OK"
        ]));
    } else {
        die(json_encode([
            "error" => 500,
            "status" => "Internal Server Error"
        ]));
    }
}else{
    die("Method not allowed");
}
```

## delete.php
```php
<?php

include("config.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $id = str_replace("'", "\'", $_GET['id']);

    $sql = "DELETE FROM calon_siswa WHERE id=$id";
    $query = mysqli_query($db, $sql);
    if ($query) {
        die(json_encode([
            "error" => 0,
            "status" => "OK"
        ]));
    } else {
        die(json_encode([
            "error" => 500,
            "status" => "Internal Server Error"
        ]));
    }
}else{
    die("Method not allowed");
}
```

## list.php
```php
<?php

include("config.php");

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $sql = "SELECT * FROM calon_siswa";
    $query = mysqli_query($db, $sql);

    while ($siswa = mysqli_fetch_array($query)) {
        echo json_encode([
            "id" => $siswa["id"],
            "url_foto" => $siswa["url_foto"],
            "nama" => $siswa["nama"],
            "kelamin" => $siswa["jenis_kelamin"],
            "agama" => $siswa["agama"],
            "sekolah" => $siswa["sekolah_asal"],
            "alamat" => $siswa["alamat"],
            "nama" => $siswa["nama"],
            
        ]);
        echo "\n";
    }
}else{
    die("Method not allowed");
}
```