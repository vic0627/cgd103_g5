<?php 
session_start();//看session
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
if( isset($_SESSION["memId"])==true){//session內有memId代表登入中
	$result = ["memNo"=>$_SESSION["memNo"], "memId"=>$_SESSION["memId"],"memName"=>$_SESSION["memName"],"email"=>$_SESSION["email"]];//打包session
	echo json_encode($result);//變json字串後回傳
}else{ //尚未登入
	echo "{}";//回傳空字串，保持登出狀態
}

?>