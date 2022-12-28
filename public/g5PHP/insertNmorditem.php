<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
    // if( isset($_SESSION["Account"])==true){//session內有memId代表登入中
        // $result = ["Account"=>$_SESSION["Account"],"FirstName"=>$_SESSION["FirstName"],"email"=>$_SESSION["email"]];//打包session
        // echo json_encode($result);//變json字串後回傳
        try{
            require_once("./connect_cgd103g5.php");
            $sql = "INSERT INTO tibamefe_cgd103g5.nm_order_item (orders_no,prd_no,item_quantity,item_price,item_sub,item_discount)
            VALUES (:orders_no,:prd_no,:item_quantity,:item_price,:item_sub,:item_discount)"; 
            $insertOrder = $pdo->prepare($sql);
            $insertOrder->bindValue(":orders_no", $_POST["orders_no"]);
            $insertOrder->bindValue(":prd_no", $_POST["prd_no"]);
            $insertOrder->bindValue(":item_quantity", $_POST["item_quantity"]);
            $insertOrder->bindValue(":item_price", $_POST["item_price"]);
            $insertOrder->bindValue(":item_sub", $_POST["item_sub"]);
            $insertOrder->bindValue(":item_discount", $_POST["item_discount"]);
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

