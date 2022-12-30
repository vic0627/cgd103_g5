<?php 
session_start();//查看session
require_once("./cors_cookie.php");
header("Content-Type:application/json;charset=utf-8");
try{
    if( isset($_SESSION["Account"])==true){//session內有memId代表登入中
        require_once("./connect_cgd103g5.php");

        //客製化訂單消費總金額
        $sql1 = "SELECT SUM(orders_price) FROM cm_order WHERE mem_no = :mem_no";
        $member1 = $pdo->prepare($sql1);
        $member1->bindValue(":mem_no", $_SESSION["MemberNo"]);
        $member1->execute();
        $memRow1 = $member1->fetch(PDO::FETCH_ASSOC);
        // echo json_encode($memRow1["SUM(orders_price)"]);

        //一般訂單消費總金額
        $sql2 ="SELECT SUM(total_price) FROM nm_orders WHERE mem_no= :mem_no";
        $member2 = $pdo->prepare($sql2);
        $member2->bindValue(":mem_no", $_SESSION["MemberNo"]);
        $member2->execute();
        $memRow2 = $member2->fetch(PDO::FETCH_ASSOC);
        // echo json_encode($memRow2["SUM(total_price)"]);


        //加總後更新會員表
        $sql3 ="UPDATE `member` SET `mem_points` = (coalesce (:point1,0) + coalesce (:point2,0)) WHERE mem_no =:mem_no";
        $member3 = $pdo->prepare($sql3);
        $member3->bindValue(":point1", $memRow1["SUM(orders_price)"]);
        $member3->bindValue(":point2", $memRow2["SUM(total_price)"]);
        $member3->bindValue(":mem_no", $_SESSION["MemberNo"]);
        $member3->execute();
        $memRow3 = $member3->fetch(PDO::FETCH_ASSOC);



        //判斷會員消費總金額，進行升等
        $sql4 = "SELECT `mem_points` FROM `member` WHERE mem_no=:mem_no";
        $member4 = $pdo->prepare($sql4);
        $member4->bindValue(":mem_no", $_SESSION["MemberNo"]);
        $member4->execute();
        $memRow4 = $member4->fetch(PDO::FETCH_ASSOC);
        if($memRow4["mem_points"]>=3000 && $memRow4["mem_points"]<10000){
            $sql5 = "UPDATE `member` SET `mem_grade` = '2' WHERE `member`.`mem_no` = :mem_no";
            $member5 = $pdo->prepare($sql5);
            $member5->bindValue(":mem_no", $_SESSION["MemberNo"]);
            $member5->execute();
        }else if($memRow4["mem_points"]>=10000){
            $sql6 = "UPDATE `member` SET `mem_grade` = '3' WHERE `member`.`mem_no` = :mem_no";
            $member6 = $pdo->prepare($sql6);
            $member6->bindValue(":mem_no", $_SESSION["MemberNo"]);
            $member6->execute();
        }

        //取得該會員資料
        $sql7 = "select * from `member` as a  left join `member_grade` as b ON a.`mem_grade` = b.`grade_id` where mem_acc = :mem_acc ";
        $member7 = $pdo->prepare($sql7);
        $member7->bindValue(":mem_acc", $_SESSION["Account"]);
        $member7->execute();
        $memRow7 = $member7->fetch(PDO::FETCH_ASSOC);
        echo json_encode($memRow7);//送出該會員的資料




    }else{ //尚未登入
        echo "{}";//回傳空字串，保持登出狀態
    }
}catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
  	$result=$msg;
	echo json_encode($result);
}


?>