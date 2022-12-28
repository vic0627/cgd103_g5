<?php 
session_start();//看session
require_once("./cors_cookie.php");
header("Content-Type:application/json;charset=utf-8");
if( isset($_SESSION["Account"])==true){//session內有memId代表登入中
	$result = ["Account"=>$_SESSION["Account"],"Password"=>$_SESSION["Password"],"FirstName"=>$_SESSION["FirstName"],"email"=>$_SESSION["email"]];//打包session
	echo json_encode($result);
	//變json字串後回傳
}else{ //尚未登入
	echo "{}";//回傳空字串，保持登出狀態
}

?>