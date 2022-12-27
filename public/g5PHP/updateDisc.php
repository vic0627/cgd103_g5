<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5_vic.php");
	$sql = "UPDATE tibamefe_cgd103g5.discount_set SET disc_no = :disc_no, disc_title = :disc_title, disc_txt = :disc_txt, disc_start = :disc_start, disc_end = :disc_end, disc_off = :disc_off, disc_code = :disc_code WHERE disc_no = :disc_no";
	$Disc = $pdo->prepare($sql);
    $Disc->bindValue(":disc_no", $_POST["disc_no"]);
    $Disc->bindValue(":disc_title", $_POST["disc_title"]);
    $Disc->bindValue(":disc_txt", $_POST["disc_txt"]);
    $Disc->bindValue(":disc_start", $_POST["disc_start"]);
    $Disc->bindValue(":disc_end", $_POST["disc_end"]);
    $Disc->bindValue(":disc_off", $_POST["disc_off"]);
    $Disc->bindValue(":disc_code", $_POST["disc_code"]);
	$Disc->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();   
}
$result=$msg;
echo json_encode($result);
?>