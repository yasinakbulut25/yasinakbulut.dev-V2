<?php

try {

    $host = 'localhost';
    $dbname = 'kodsatir1_yasin';
    $user = 'kodsatir1_yasinakbulut';
    $password = 'TPofA3wKL0UQ';
    
    $db = new PDO("mysql:host=$host;dbname=$dbname; charset=utf8mb4;", "$user", "$password");

}catch(PDOException $mesaj){

    echo $mesaj -> getMessage();

}
?>
