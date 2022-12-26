<?php 
session_start();//看session
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
if( isset($_SESSION["admin_acc"])==true){//session內有代表登入中
	$result = ["admin_acc"=>$_SESSION["admin_acc"],"admin_pw"=>$_SESSION["admin_pw"],"admin_name"=>$_SESSION["admin_name"]];//打包session
	echo json_encode($result);
	//變json字串後回傳
}else{ //尚未登入
	echo "{}";//回傳空字串，保持登出狀態
}

?>