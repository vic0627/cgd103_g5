<?php
$dbname = "tibamefe_cgd103g5";
$user = "tibamefe_since2021";
$password = "vwRBSb.j&K#E";
//$user = "root";
//$password = "t/6vul3fu/6";
$port = "3306";
$dsn = "mysql:host=localhost;port=$port;dbname=$dbname;charset=utf8";

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_CASE => PDO::CASE_NATURAL,
];

//建立pdo物件
$pdo = new PDO($dsn, $user, $password, $options);
?>
