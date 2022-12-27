<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "insert into tibamefe_cgd103g5.news values( null, :news_title, :news_txt, :news_time, :news_photo, :news_tag)";
	$news = $pdo->prepare($sql);
	
    // $news->bindValue(":cpt_no",$_POST["cpt_no"]);
    $news->bindValue(":news_title",$_POST["news_title"]);
    $news->bindValue(":news_txt",$_POST["news_txt"]); //
    $news->bindValue(":news_time",$_POST["news_time"]); //
    $news->bindValue(":news_photo",$_POST["news_photo"]);
    $news->bindValue(":news_tag",$_POST["news_tag"]);
    $news->execute();

	

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