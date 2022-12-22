<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
try{
  require_once("./connect_cgd103g5.php");

  $sql = "select * from `member` where mem_acc = ?";
  $member = $pdo->prepare($sql);
  $member->bindValue(1, $_POST["username"]);
  $member->execute();


  if( $member->rowCount() != 0){ //此帳號已存在, 不可用
    echo "此帳號已存在, 不可用";
  }else{ //此帳號可使用
    echo "此帳號可使用";
  } 
}catch(PDOException $e){
  echo "error";
}
?>