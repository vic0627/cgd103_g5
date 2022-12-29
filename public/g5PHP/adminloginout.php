<?php
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try{
    session_start();
    if(isset($_SESSION["admin_name"])){
        session_unset();//將session內的資料全刪，但檔案還在
        echo "登出成功";
    }
    
}catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
	  $result=$msg;
	echo json_encode($result);
}
?>