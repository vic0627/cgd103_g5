<?php 
session_start(); 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5.php");
    $sql = "SELECT * FROM tibamefe_cgd103g5.administrator WHERE admin_acc = :acc AND admin_pw = :pw;"; 
	$admin = $pdo->prepare($sql);
    $admin->bindValue(":acc", $_POST["admin_acc"]);
    $admin->bindValue(":pw", $_POST["admin_pw"]);
	$admin->execute();
    if($admin->rowCount()==0){
        // 查無此人
        echo "{}";
    }else {
        // 登入成功 去資料庫取資料
        $adminRow = $admin->fetch(PDO::FETCH_ASSOC);
        //登入成功,將登入者的資料寫入session
        $_SESSION["admin_no"] = $adminRow["admin_no"];
        $_SESSION["admin_name"] = $adminRow["admin_name"];
        $_SESSION["authority"] = $adminRow["authority"];

        $result = ["admin_no"=>$_SESSION["admin_no"],"admin_name"=>$_SESSION["admin_name"],"authority"=>$_SESSION["authority"]];
        echo json_encode($result);
    }
} catch (PDOException $e) {
	$result = ["msg"=>"系統錯誤, 請通知系統維護人員"];
	echo json_encode($result);
    echo $e->getMessage();
}
?>