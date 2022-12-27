<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "insert into tibamefe_cgd103g5.discount_set values( null, :disc_title, :disc_txt, :disc_start, :disc_end, :disc_off, :disc_code)";
	$disc = $pdo->prepare($sql);
    $disc->bindValue(":disc_title", $_POST["disc_title"]);
    $disc->bindValue(":disc_txt", $_POST["disc_txt"]);
    $disc->bindValue(":disc_start", $_POST["disc_start"]);
    $disc->bindValue(":disc_end", $_POST["disc_end"]);
    $disc->bindValue(":disc_off", $_POST["disc_off"]);
    $disc->bindValue(":disc_code", $_POST["disc_code"]);
	$disc->execute();
    $msg = "success";
	// $adminRows = $disc->fetchAll(PDO::FETCH_ASSOC);
	// echo json_encode($adminRows);
} catch (PDOException $e) {
	//echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "錯誤行號 : ", $e->getLine(), "<br>";
	// echo "系統錯誤, 請通知系統維護人員<br>";
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>