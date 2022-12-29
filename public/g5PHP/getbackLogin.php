<?php 
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
        echo "{錯誤}";
    }else {
        // 登入成功 去資料庫取資料
        $adminRow = $admin->fetch(PDO::FETCH_ASSOC);

        //登入成功,將登入者的資料寫入session
        $_SESSION["admin_acc"] = $adminRow["admin_acc"];
        $_SESSION["admin_pw"] = $adminRow["admin_pw"];

        //送出登入者的資料
        $result = ["admin_acc"=>$_SESSION["admin_acc"], "admin_pw"=>$_SESSION["admin_pw"]];

        echo json_encode($adminRow);
    }
} catch (PDOException $e) {
    $msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
    $result=$msg;
    echo json_encode($result);
}
?>