<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "UPDATE tibamefe_cgd103g5.customize 
	SET prd_name = :prd_name, prd_price = :prd_price, weight = :weight, rpm = :rpm, kgm = :kgm, kgmc = kgmc, prd_glb = prd_glb;  
	WHERE prd_no = :prd_no";
	$updateCust = $pdo->prepare($sql);
    $updateCust->bindValue(":prd_no", $_POST["prd_no"]);
    $updateCust->bindValue(":prd_name", $_POST["prd_name"]);
    $updateCust->bindValue(":prd_price", $_POST["prd_price"]);
    $updateCust->bindValue(":weight", $_POST["weight"]);
    $updateCust->bindValue(":rpm", $_POST["rpm"]);
    $updateCust->bindValue(":kgm", $_POST["kgm"]);
    $updateCust->bindValue(":kgmc", $_POST["kgmc"]);
    $updateCust->bindValue(":prd_glb", $_POST["prd_glb"]);
	$updateCust->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();   
}
$result=$msg;
echo json_encode($result);
?>