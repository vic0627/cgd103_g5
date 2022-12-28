<?php 
session_start();//查看session
require_once("./cors_cookie.php");
header("Content-Type:application/json;charset=utf-8");
try{
    if( isset($_SESSION["Account"])==true){//session內有memId代表登入中
        require_once("./connect_cgd103g5.php");
        $sql = "select a.item_no , a.orders_no, a.prd_no,a.item_quantity,a.item_price,a.item_sub,a.item_discount from `nm_order_item` as a  left join `nm_orders` as b ON a.`orders_no` = b.`orders_no` join `member` c ON b.`mem_no` = c.`mem_no` where mem_acc = ? and orders_no = :order_no";
        $member = $pdo->prepare($sql);
        $member->bindeValue(":orders_no",$_GET["currenty"]);
        $member->bindValue(1, $_SESSION["Account"]);
        $member->execute();
        $memRows = $member->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($memRows);//送出該會員的資料
    }else{ //尚未登入
        echo "{}";//回傳空字串，保持登出狀態
    }
}catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
  	$result=$msg;
	echo json_encode($result);
}


?>