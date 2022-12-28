<?php 
session_start();//session之前，要先啟用session_start()
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5.php");
    $sql = "select * from tibamefe_cgd103g5.products";
	$shop = $pdo->prepare($sql);
	$shop->execute();
	$bundleRow = $shop->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($bundleRow);

} catch (PDOException $e) {
	$result = ["msg"=>"系統錯誤, 請通知系統維護人員"];
	echo json_encode($result);
}
?>