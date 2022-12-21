<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_felix.php");
	$sql = "select * from tibamefe_cgd103g5.nm_order_item";
	$admin = $pdo->prepare($sql);
	$admin->execute();
	$adminRows = $admin->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($adminRows);
} catch (PDOException $e) {
	$result = ["msg"=>"系統錯誤, 請通知系統維護人員"];
	echo json_encode($result);
}
?>