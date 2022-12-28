<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5.php");
	$sql = "DELETE FROM tibamefe_cgd103g5.product_category 
	WHERE cat_no = :cat_no ";
	$dcat = $pdo->prepare($sql);
	$dcat->bindValue(":cat_no",$_POST["cat_no"]);
    $dcat->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>