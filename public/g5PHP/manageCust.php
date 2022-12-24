<?php 
 header('Access-Control-Allow-Origin:*');
//  header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
 header("Content-Type:application/json;charset=utf-8");

 try {
	function giveNull ($val) {
		if($val==="null"){
		   return NULL;
		}else{
		   return $val;
		};
	};
	$prd_no = giveNull($_POST["prd_no"]);
	$prd_name = giveNull($_POST["prd_name"]);
	$prd_price = giveNull($_POST["prd_price"]);
	$weight = giveNull($_POST["weight"]);
	$rpm = giveNull($_POST["rpm"]);
	$kgm = giveNull($_POST["kgm"]);
	$kgmc = giveNull($_POST["kgmc"]);
	$prd_glb = giveNull($_POST["prd_glb"]);
	$method = $_POST["method"];
	require_once("./connect_cgd103g5_vic.php");
	$sql = $_POST["sql"];
	$admin = $pdo->prepare($sql);
	if($method==="update" || $method==="insert"){
		$admin->bindParam(":prd_no", $prd_no);
		$admin->bindParam(":prd_name", $prd_name);
		$admin->bindParam(":prd_price", $prd_price);
		$admin->bindParam(":weight", $weight);
		$admin->bindParam(":rpm", $rpm);
		$admin->bindParam(":kgm", $kgm);
		$admin->bindParam(":kgmc", $kgmc);
		$admin->bindParam(":prd_glb", $prd_glb);
		
	}else if($method==="delete"){
		$admin->bindParam(":prd_no", $prd_no);
	}
    $admin->execute();
	$msg = $method." success";
} catch (PDOException $e) {
	//echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "錯誤行號 : ", $e->getLine(), "<br>";
	// echo "系統錯誤, 請通知系統維護人員<br>";
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>