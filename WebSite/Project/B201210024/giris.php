<?php
    $eposta = $_POST["eposta"];
    $sifre = $_POST["sifre"];
   
    if($_SERVER["REQUEST_METHOD"] == "POST"){    
        if(empty($_POST["eposta"])) {
            $emailErr = "Bir mail adresi girilmelidir";
        }else{
            $email = test_input($_POST["eposta"]);
            // check if e-mail address is well-formed
            if (!filter_var($eposta, FILTER_VALIDATE_EMAIL)){
             
             header("Location:./giris.html");
            }elseif($eposta == "b191210051@sakarya.edu.tr" && $sifre == "b191210051"){
              header("Location:./hakkımda.html");
                echo "Hoşgeldin"." ".$sifre ;
            }else{
             header("Location:./giris.html");
            }
        }
    }
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    /*if(!empty($_POST)) {
        $email = $_POST("email");
        $parola = $_POST("sifre");

        $hataKontrol = false;

        if($email == "") {
            echo "Kullanıcı Adı Boş Olamaz!";
            $hataKontrol = true;
        }
        elseif(strlen($email) < 5) {
            $hataKontrol = true;
            echo "Kullanıcı Adı 5 Karakterden Küçük Olamaz!";
        }
        elseif($parola == "") {
            $hataKontrol = true;
            echo "Lütfen Şifre Giriniz!";
        }
        elseif(strlen($parola) < 5) {
            $hataKontrol = true;
            echo "Şifre 5 Karakterden Küçük Olamaz!";
        }
        else {
            include "bagla.php";
        }

    }*/
?>