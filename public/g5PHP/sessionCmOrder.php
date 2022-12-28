<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
    try{
        require_once("./connect_cgd103g5.php");
        $sql = "INSERT INTO `cm_order` (`orders_no`, `mem_no`, `mem_grade`, `purchase_date`, `orders_status`, `orders_price`, `discount_price`, `total`, `orders_location`, `fee` ,`credit_no`) VALUES (NULL, :mem_no , :mem_grade , CURRENT_TIMESTAMP, '待處理', :orders_price, :discount_price, :total, :orders_location, :fee, :credit_no);"; 
        $insertOrder = $pdo->prepare($sql);
        $insertOrder->bindValue(":mem_no", $_POST["mem_no"]);
        $insertOrder->bindValue(":mem_grade", $_POST["mem_grade"]);
        $insertOrder->bindValue(":orders_price", $_POST["orders_price"]);
        $insertOrder->bindValue(":discount_price", $_POST["discount_price"]);
        $insertOrder->bindValue(":total", $_POST["total_price"]);
        $insertOrder->bindValue(":orders_location", $_POST["orders_location"]);
        $insertOrder->bindValue(":fee", $_POST["fee"]);
        $insertOrder->bindValue(":credit_no", $_POST["credit_no"]);
        $insertOrder->execute();
        $msg = "success";
    }catch (PDOException $e) {
        $msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
        $result=$msg;
        echo json_encode($result);
    }
    // }else{ //尚未登入
    //     echo "error";//回傳空字串，保持登出狀態
    // }  


?>

