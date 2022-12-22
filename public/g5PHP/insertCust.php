<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "insert into tibamefe_cgd103g5.administrator values( null, :prd_name, :prd_price, :weight, :rpm, :kgm, :kgmc, prd_glb)";
	$admin = $pdo->prepare($sql);
    $admin->bindValue(":prd_name", $_POST["prd_name"]);
    $admin->bindValue(":prd_price", $_POST["prd_price"]);
    $admin->bindValue(":weight", $_POST["weight"]);
    $admin->bindValue(":rpm", $_POST["rpm"]);
    $admin->bindValue(":kgm", $_POST["kgm"]);
    $admin->bindValue(":kgmc", $_POST["kgmc"]);
    $admin->bindValue(":prd_glb", $_POST["prd_glb"]);
	$admin->execute();
    $msg = "success";
	// $adminRows = $admin->fetchAll(PDO::FETCH_ASSOC);
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