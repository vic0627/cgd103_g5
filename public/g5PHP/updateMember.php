<?php
// session_start();//開始session
header('Access-Control-Allow-Origin:*');
// header("Content-Type:application/json;charset=utf-8");
// $datas = json_decode($_POST["formData"],true);
// echo $_POST["mem_acc"];
try{
	require_once("./connect_cgd103g5.php");
	// $sql = "select * from `member` where mem_acc = ? ";
	// $memberC = $pdo->prepare($sql);
	// $memberC->bindValue(1, $_POST["mem_acc"]);
	// $memberC->execute();
    $sql = "UPDATE `member` SET `mem_first_name` =:mem_first_name, `mem_last_name` = :mem_last_name, `city` = :city, `address` = :address, `phone` = :phone WHERE `member`.`mem_acc` = :mem_acc";
    $member = $pdo->prepare($sql);
    $member->bindValue(":mem_acc", $_POST["mem_acc"]);
    $member->bindValue(":mem_first_name", $_POST["mem_first_name"]);
    $member->bindValue(":mem_last_name", $_POST["mem_last_name"]);
    $member->bindValue(":city", $_POST["city"]);
    $member->bindValue(":address", $_POST["address"]);
    $member->bindValue(":phone", $_POST["phone"]);
    $member->execute();

    $msg = "congratulations!~~update success"; 
    $result=$msg;
    echo json_encode($result);
	
}catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
  	$result=$msg;
	echo json_encode($result);
}

?>