<?php
//require_once("./cors_cookie.php");

//----------------cors_cookie.php

$Origin = isset($_SERVER['HTTP_ORIGIN'])?$_SERVER['HTTP_ORIGIN']:"*"; 
// 如果$origin为*号时,则跨域访问不支持cookie的发送

header("Access-Control-Allow-Origin: {$Origin}");  

// 允许请求的类型
header("Access-Control-Allow-Methods:POST,GET,OPTIONS"); 

// 跨域访问是否允许带cookie的发送
header("Access-Control-Allow-Credentials:true");


//----------------
//2.在前台的程式中JS內, fetch加入
//----------------
// fetch(url, {
//               method:"post",
//               credentials: 'include',<<---------------加這一行
//               body:.....
//        })

//XMLHttpRequest
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://example.com/', true);
// xhr.withCredentials = true;  <<---------------加這一行
// xhr.send(null);


?>