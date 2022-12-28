<?php 
session_start();//查看session
require_once("./cors_cookie.php");
header("Content-Type:application/json;charset=utf-8");
try{
    if( isset($_SESSION["Account"])==true){//session內有memId代表登入中
        // require_once("./connect_cgd103g5_Lily.php");
        require_once("./connect_cgd103g5.php");
        $sql = "select * from `member` as a  left join `member_grade` as b ON a.`mem_grade` = b.`grade_id` where mem_acc = ? ";
        $member = $pdo->prepare($sql);
        $member->bindValue(1, $_SESSION["Account"]);
        $member->execute();
        $memRow = $member->fetch(PDO::FETCH_ASSOC);
        echo json_encode($memRow);//送出該會員的資料
    }else{ //尚未登入
        echo "{}";//回傳空字串，保持登出狀態
    }
}catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
  	$result=$msg;
	echo json_encode($result);
}


?>