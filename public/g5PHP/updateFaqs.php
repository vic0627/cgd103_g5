<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_ting.php");
	$sql = "UPDATE tibamefe_cgd103g5.faq 
	SET  faq_des = :faq_des,faq_ans = :faq_ans
	WHERE faq_no = :faq_no";
	$faq = $pdo->prepare($sql);
	// $faqRows = $faq->fetchAll(PDO::FETCH_ASSOC);
	$faq->bindValue(":faq_no",$_POST["faq_no"]);
    $faq->bindValue(":faq_des",$_POST["faq_des"]);
    $faq->bindValue(":faq_ans",$_POST["faq_ans"]);
    $faq->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>