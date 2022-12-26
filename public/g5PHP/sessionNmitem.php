<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
    // if( isset($_SESSION["Account"])==true){//session內有memId代表登入中
        // $result = ["Account"=>$_SESSION["Account"],"FirstName"=>$_SESSION["FirstName"],"email"=>$_SESSION["email"]];//打包session
        // echo json_encode($result);//變json字串後回傳
        try{
            require_once("./connect_cgd103g5_felix.php");
            $sql = "INSERT INTO tibamefe_cgd103g5.nm_orders (mem_no,mem_grade,orders_price,discount_price,total_price,orders_location,credit_no,disc_no)
            VALUES (:mem_no,:mem_grade,:orders_price,:discount_price,:total_price,:orders_location,:credit_no,:disc_no)"; 
            $insertOrder = $pdo->prepare($sql);
            $insertOrder->bindValue(":mem_no", $_POST["mem_no"]);
            $insertOrder->bindValue(":mem_grade", $_POST["mem_grade"]);
            $insertOrder->bindValue(":orders_price", $_POST["orders_price"]);
            $insertOrder->bindValue(":discount_price", $_POST["discount_price"]);
            $insertOrder->bindValue(":total_price", $_POST["total_price"]);
            $insertOrder->bindValue(":orders_location", $_POST["orders_location"]);
            $insertOrder->bindValue(":credit_no", $_POST["credit_no"]);
            $insertOrder->bindValue(":disc_no", $_POST["disc_no"]);
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

