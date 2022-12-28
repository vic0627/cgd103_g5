<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");

 try {
	require_once("./connect_cgd103g5.php");
	$sql = "insert into tibamefe_cgd103g5.administrator values( null, :admin_name, :authority, :admin_acc, :admin_pw)";
	$admin = $pdo->prepare($sql);
    $admin->bindValue(":admin_name", $_POST["admin_name"]);
    $admin->bindValue(":authority", $_POST["authority"]);
    $admin->bindValue(":admin_acc", $_POST["admin_acc"]);
    $admin->bindValue(":admin_pw", $_POST["admin_pw"]);
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