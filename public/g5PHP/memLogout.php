<?php 
session_start();
if(isset($_SESSION["memId"])){
    session_unset();//將session內的資料全刪，但檔案還在
}
?>