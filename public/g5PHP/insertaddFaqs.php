<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_ting.php");
	$sql = "insert into tibamefe_cgd103g5.faq values( null, :faq_des, :faq_ans)";
	$faq = $pdo->prepare($sql);
	// $faqRows = $faq->fetchAll(PDO::FETCH_ASSOC);
    $faq->bindValue(":faq_des",$_POST["faq_des"]);
    $faq->bindValue(":faq_ans",$_POST["faq_ans"]);
    $faq->execute();

	// echo json_encode($faqRows);

    $msg = "success";
} catch (PDOException $e) {
	//echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "錯誤行號 : ", $e->getLine(), "<br>";
	// echo "系統錯誤, 請通知系統維護人員<br>";
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>