<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "DELETE FROM tibamefe_cgd103g5.news
	WHERE news_no = :news_no";
	$delNews = $pdo->prepare($sql);
    $delNews->bindValue(":news_no", $_POST["news_no"]);
	$delNews->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();   
}
$result=$msg;
echo json_encode($result);
?>