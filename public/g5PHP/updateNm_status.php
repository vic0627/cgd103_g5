<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5_felix.php");
	$sql = "UPDATE tibamefe_cgd103g5.nm_orders 
	SET orders_status = :orders_status 
	WHERE orders_no = :orders_no";
	$updateAdmin = $pdo->prepare($sql);
    $updateAdmin->bindValue(":orders_no", $_POST["orders_no"]);
    $updateAdmin->bindValue(":orders_status", $_POST["orders_status"]);
	$updateAdmin->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();   
}
$result=$msg;
echo json_encode($result);
?>