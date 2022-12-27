<?php
session_start();//開始session
header('Access-Control-Allow-Origin:*');
try{
    if($_SESSION["Password"] != $_POST["mem_oldpsw"]){

        $msg = "Wrong old password,please enter again!~"; 
        $result=$msg;
        echo json_encode($result);
    }else{
        //更新密碼
        if($_POST["mem_oldpsw"]==$_POST["mem_newpsw"]){
            $msg = "Old&New password can not be the same ,please enter again!~"; 
            $result=$msg;
            echo json_encode($result);
        }else{
            require_once("./connect_cgd103g5.php");
            $sql = "UPDATE `member` SET `mem_pw` =:mem_pw WHERE `member`.`mem_acc` = :mem_acc";
            $member = $pdo->prepare($sql);
            $member->bindValue(":mem_pw", $_POST["mem_newpsw"]);
            $member->bindValue(":mem_acc", $_SESSION["Account"]);
            $member->execute();
    
            $_SESSION["Password"] = $_POST["mem_newpsw"];
    
            $msg = "Update successfully!~"; 
            $result=$msg;
            echo json_encode($result);
        }
    }
	
	
}catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
  	$result=$msg;
	echo json_encode($result);
}

?>