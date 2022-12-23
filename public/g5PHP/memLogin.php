<?php
session_start();//開始session
// $json = file_get_contents("php://input");
// $datas = json_decode($json,true);
$datas = json_decode($_POST["datas"],true);//將前端datas送過來的json字串還原成 關聯式陣列
header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json;charset=utf-8");
try{
  require_once("./connect_cgd103g5.php");
  $sql = "select * from `member` where mem_acc=:memId and mem_pw=:memPsw"; 
  $member = $pdo->prepare($sql);
  // $member->bindValue(":memId", $_POST["username"]);
  // $member->bindValue(":memPsw", $_POST["password"]);
  $member->bindValue(":memId", $datas["username"]);//綁定datas
  $member->bindValue(":memPsw", $datas["password"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);

    //登入成功,將登入者的欄位資料寫入session
    // session_start();
    $_SESSION["Account"] = $memRow["mem_acc"];
    $_SESSION["FirstName"] = $memRow["mem_first_name"];
    $_SESSION["LastName"] = $memRow["mem_last_name"];
    $_SESSION["email"] = $memRow["mem_email"];



    $result = ["Account"=>$_SESSION["Account"],"FirstName"=>$_SESSION["FirstName"],"email"=>$_SESSION["email"]];//打包session
    echo json_encode($result);//送出session內的資料
    
  }
}catch (PDOException $e) {
  $msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
  $result=$msg;
  echo json_encode($result);
 }
 

?>

