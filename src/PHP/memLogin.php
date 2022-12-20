<?php
session_start();//開始session
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
try{
  require_once("./connect_cgd103g5.php");
  $sql = "select * from `member` where mem_acc=:memId and mem_pw=:memPsw"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_POST["memId"]);
  $member->bindValue(":memPsw", $_POST["memPsw"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);

    //登入成功,將登入者的欄位資料寫入session
    // session_start();
    $_SESSION["memNo"] = $memRow["mem_no"];
    $_SESSION["memId"] = $memRow["mem_acc"];
    $_SESSION["memName"] = $memRow["mem_first_name"];
    $_SESSION["email"] = $memRow["mem_email"];



    $result = ["memNo"=>$_SESSION["memNo"], "memId"=>$_SESSION["memId"],"memName"=>$_SESSION["memName"]];//打包session

    echo json_encode($result);//送出session內的資料
    
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>

