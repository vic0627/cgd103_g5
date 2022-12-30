<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5.php");
	$sql = "UPDATE tibamefe_cgd103g5.administrator 
	SET admin_acc = :admin_acc , admin_name = :admin_name , admin_pw = :admin_pw
	WHERE admin_no = :admin_no";
	$updateAdmin = $pdo->prepare($sql);
    $updateAdmin->bindValue(":admin_no", $_POST["admin_no"]);
    $updateAdmin->bindValue(":admin_acc", $_POST["admin_acc"]);
    $updateAdmin->bindValue(":admin_name", $_POST["admin_name"]);
	$updateAdmin->bindValue(":admin_pw", $_POST["admin_pw"]);
	$updateAdmin->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();   
}
$result=$msg;
echo json_encode($result);
?>