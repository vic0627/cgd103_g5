<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "UPDATE tibamefe_cgd103g5.news
	SET news_no =  :news_no, news_title = :news_title, news_txt = :news_txt, news_time = :news_time, news_photo = :news_photo, news_tag = :news_tag
  WHERE cpt_no = :cpt_no";

	$news = $pdo->prepare($sql);
    $news->bindValue(":news_no",$_POST["news_no"]);
	$news->bindValue(":news_title",$_POST["news_title"]);
    $news->bindValue(":news_txt",$_POST["news_txt"]);
    $news->bindValue(":news_time",$_POST["news_time"]);
    $news->bindValue(":news_photo",$_POST["news_photo"]);
    $news->bindValue(":news_tag",$_POST["news_tag"]);
    $news->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>