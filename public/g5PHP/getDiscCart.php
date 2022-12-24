<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_felix.php");
	$sql = "select disc_code, disc_off, disc_no from tibamefe_cgd103g5.discount_set";
	$disc = $pdo->prepare($sql);
	$disc->execute();
	$discRows = $disc->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($discRows);
} catch (PDOException $e) {
	$result = ["msg"=>"系統錯誤, 請通知系統維護人員"];
	echo json_encode($result);
}
?>