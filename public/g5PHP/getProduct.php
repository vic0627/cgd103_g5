<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_ram.php");
	$sql = "select * from tibamefe_cgd103g5.products";
	$prod = $pdo->prepare($sql);
	$prod->execute();
	$prodRows = $prod->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (PDOException $e) {
	$result = ["msg"=>"系統錯誤, 請通知系統維護人員"];
	echo json_encode($result);
}
?>