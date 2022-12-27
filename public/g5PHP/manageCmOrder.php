<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5_vic.php");
	$sql = "UPDATE tibamefe_cgd103g5.cm_order SET orders_status = :orders_status WHERE orders_no = :orders_no";
	$admin = $pdo->prepare($sql);
    $admin->bindParam(":orders_status", $_POST["orders_status"]);
	$admin->bindParam(":orders_no", $_POST["orders_no"]);
    $admin->execute();
	$msg = " success";
} catch (PDOException $e) {
	//echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "錯誤行號 : ", $e->getLine(), "<br>";
	// echo "系統錯誤, 請通知系統維護人員<br>";
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>