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