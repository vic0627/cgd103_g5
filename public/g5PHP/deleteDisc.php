<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5.php");
	$sql = "DELETE FROM tibamefe_cgd103g5.discount_set  
	WHERE disc_no = :disc_no";
	$Disc = $pdo->prepare($sql);
	$Disc->bindValue(":disc_no", $_POST["disc_no"]);
	$Disc->execute();
	$msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();   
}
$result=$msg;
echo json_encode($result);
?>