<?php 
session_start(); 
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
try {
	if(isset($_SESSION["admin_name"])){
		echo $_SESSION["admin_name"];
	}else{
		echo "{}";
	}
	
} catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
	  $result=$msg;
	echo json_encode($result);
}
?>