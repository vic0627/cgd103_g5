<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "select * from tibamefe_cgd103g5.faq";
	$faq = $pdo->prepare($sql);
	$faq->execute();
	$faqRows = $faq->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($faqRows);
} catch (PDOException $e) {
	//echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "錯誤行號 : ", $e->getLine(), "<br>";
	// echo "系統錯誤, 請通知系統維護人員<br>";
	$result = ["msg"=>"系統錯誤, 請通知系統維護人員"];
	echo json_encode($result);
}
?>