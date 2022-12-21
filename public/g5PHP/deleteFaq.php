<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "DELETE FROM tibamefe_cgd103g5.faq 
	WHERE faq_no = :faq_no";
	$updateFaq = $pdo->prepare($sql);
    $updateFaq->bindValue(":faq_no", $_POST["faq_no"]);
	$updateFaq->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();   
}
$result=$msg;
echo json_encode($result);
?>