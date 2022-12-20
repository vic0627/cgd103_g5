<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_Lily.php");
	$sql = "insert into  tibamefe_cgd103g5.products values (null,:prd_name,null,:prd_price,null,null,:color,null)";
	$products = $pdo->prepare($sql);
    $products->bindValue(":prd_name", $_POST["prd_name"]);
    // $products->bindValue(":cat_no", $_POST["cat_no"]);
    $products->bindValue(":prd_price", $_POST["prd_price"]);
    $products->bindValue(":color", $_POST["color"]);


	$products->execute();
    $msg = "success";

} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>