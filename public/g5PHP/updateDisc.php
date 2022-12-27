<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "UPDATE tibamefe_cgd103g5.discount_set 
	SET disc_no = :disc_no, disc_title = :disc_title, disc_txt = :disc_txt, disc_start = :disc_start, disc_end = :disc_end, disc_off = :disc_off, disc_code = :disc_code, 
	WHERE disc_no = :disc_no";
	$updateDisc = $pdo->prepare($sql);
    $updateDisc->bindValue(":disc_no", $_POST["disc_no"]);
    $updateDisc->bindValue(":disc_title", $_POST["disc_title"]);
    $updateDisc->bindValue(":disc_txt", $_POST["disc_txt"]);
    $updateDisc->bindValue(":disc_start", $_POST["disc_start"]);
    $updateDisc->bindValue(":disc_end", $_POST["disc_end"]);
    $updateDisc->bindValue(":disc_off", $_POST["disc_off"]);
    $updateDisc->bindValue(":disc_code", $_POST["disc_code"]);
	$updateDisc->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();   
}
$result=$msg;
echo json_encode($result);
?>