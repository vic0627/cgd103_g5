<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_ting.php");
    $sql = "select * from `administrator` where admin_acc=:admin_acc and admin_pw=:admin_pw"; 
	$admin = $pdo->prepare($sql);
    $admin->bindValue(":admin_acc", $_POST["admin_acc"]);
    $admin->bindValue(":admin_pw", $_POST["admin_pw"]);
	$admin->execute();

    if($admin->rowCount()==0){
        // 查無此人
        echo "{}";
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
	$result = ["msg"=>"系統錯誤, 請通知系統維護人員"];
	echo json_encode($result);
    echo $e->getMessage();
}
?>