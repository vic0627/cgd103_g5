<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_Lily.php");
	$sql = "UPDATE `products` 
	SET  prd_name = :prd_name,prd_price = :prd_price,sale = :sale,sale_price = :sale_price,color = :color,images = :images
	WHERE prd_no = :prd_no ";

	$cat = $pdo->prepare($sql);
	$cat->bindValue(":prd_name",$_POST["prd_name"]);
	$cat->bindValue(":prd_no",$_POST["prd_no"]);
	$cat->bindValue(":prd_price",$_POST["prd_price"]);
	$cat->bindValue(":sale",$_POST["sale"]);
	$cat->bindValue(":sale_price",$_POST["sale_price"]);
	$cat->bindValue(":color",$_POST["color"]);
	$cat->bindValue(":images",$_POST["images"]);
    $cat->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>