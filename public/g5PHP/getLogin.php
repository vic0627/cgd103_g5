<?php 
session_start(); 
//  header('Access-Control-Allow-Origin:*');
//  header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_ting.php");
	$sql = "select * from tibamefe_cgd103g5.administrator where admin_acc = :admin_acc and admin_pw = :admin_pw";
	$admin = $pdo->prepare($sql);
	$admin->bindValue(":admin_acc",$_POST["admin_acc"]);
	$admin->bindValue(":admin_pw",$_POST["admin_pw"]);
	$admin->execute();
	if($admin->rowCount() == 0){
		echo "{}";
		// $msg = "帳密錯誤"; 
		// $result=$msg;
		// echo json_encode($result);
		// header("http://localhost:5173/dist/backendlogin")
	}else{
		$adminRows = $admin->fetch(PDO::FETCH_ASSOC);
		// echo json_encode($adminRows);
		$_SESSION["admin_acc"]= $adminRows["admin_acc"];
		$_SESSION["admin_pw"]= $adminRows["admin_pw"];
		$_SESSION["admin_name"]= $adminRows["admin_name"];
		$result = ["admin_acc"=>$_SESSION["admin_acc"],"admin_pw"=>$_SESSION["admin_pw"],"admin_name"=>$_SESSION["admin_name"]];//打包session
    echo json_encode($result);//送出session內的資料
	}
	

	
} catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
	  $result=$msg;
	echo json_encode($result);
}
?>