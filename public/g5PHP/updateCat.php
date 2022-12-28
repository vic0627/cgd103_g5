<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5.php");
	$sql = "UPDATE tibamefe_cgd103g5.product_category 
	SET  cat_no = :cat_no,cat_id = :cat_id
	WHERE cat_no = :cat_no ";
	$cat = $pdo->prepare($sql);
	$cat->bindValue(":cat_no",$_POST["cat_no"]);
	$cat->bindValue(":cat_id",$_POST["cat_id"]);
    $cat->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>