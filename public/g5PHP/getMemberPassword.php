<?php 
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
try{
    require_once("./connect_cgd103g5.php");
    $sql = "select * from tibamefe_cgd103g5.member where mem_acc = :mem_acc";
    $member = $pdo->prepare($sql);
    $member->bindValue(":mem_acc", $_GET["mem_acc"]);
    $member->execute();
    if($member->rowCount()==0){//session內有memId代表登入中
        echo '{"mem_pw": "查無此帳號"}';//送出該會員的資料
    }else{
      $memRow = $member->fetch(PDO::FETCH_ASSOC);
  
      $result = ["mem_pw"=>$memRow["mem_pw"]];
      
      echo json_encode($result);//送出json字串
    }
}catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
  	$result=$msg;
	echo json_encode($result);
}


?>
