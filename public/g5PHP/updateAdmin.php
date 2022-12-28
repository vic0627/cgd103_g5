<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5.php");
	$sql = "UPDATE tibamefe_cgd103g5.administrator 
	SET admin_acc = :admin_acc 
	WHERE admin_no = :admin_no";
	$updateAdmin = $pdo->prepare($sql);
    $updateAdmin->bindValue(":admin_no", $_POST["admin_no"]);
    $updateAdmin->bindValue(":admin_acc", $_POST["admin_acc"]);
	$updateAdmin->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();   
}
$result=$msg;
echo json_encode($result);
?>