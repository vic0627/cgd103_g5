<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_Lily.php");
	// $sql =  "select * tibamefe_cgd103g5.products where product_category='3'";
	//beginner
    $sql1 = "select * from tibamefe_cgd103g5.products";
	$shop1 = $pdo->prepare($sql1);
	$shop1->execute();
	$bundleRow1 = $shop1->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($bundleRow1);
    //veteran
    // $sql2 = "select p.prd_name,p.price from products p join product_category c on (p.cat_no=c.cat_no) where p.cate='3' and p.prd_name like 'bundle_pro_%'";
	// $shop2 = $pdo->prepare($sql2);
	// $shop2->execute();
	// $bundleRow2 = $shop2->fetchAll(PDO::FETCH_ASSOC);
	// echo json_encode($bundleRow2);

} catch (PDOException $e) {
	//echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "錯誤行號 : ", $e->getLine(), "<br>";
	// echo "系統錯誤, 請通知系統維護人員<br>";
	$result = ["msg"=>"系統錯誤, 請通知系統維護人員"];
	echo json_encode($result);
}
?>