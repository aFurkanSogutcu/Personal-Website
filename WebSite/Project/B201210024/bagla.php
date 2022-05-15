<?php
    $_SERVER = "localhost";
    $kullanici = "root";
    $sifre = "1907ss1505";
    $db = "giris";

    $baglan = new mysqli($_SERVER,$kullanici,$sifre,$db);

    if($baglan -> connect_error) {
        die("Bağlantı Hatası : ".$baglan -> connect_error);
    }

?>