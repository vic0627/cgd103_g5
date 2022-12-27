<?php
// session_start();//開始session
header('Access-Control-Allow-Origin:*');
// header("Content-Type:application/json;charset=utf-8");
// $datas = json_decode($_POST["formData"],true);
// echo $_POST["mem_acc"];
try{
	require_once("./connect_cgd103g5_Lily.php");
	// require_once("./connect_cgd103g5_felix.php");
	$sql = "select * from `member` where mem_acc = ? ";
	$memberC = $pdo->prepare($sql);
	$memberC->bindValue(1, $_POST["mem_acc"]);
	$memberC->execute();
	
	
	if( $memberC->rowCount() != 0){ //此帳號已存在, 不可用
		echo "already have account!";
	}else{ //此帳號可使用
		// echo "此帳號可使用";
		// require_once("./connect_cgd103g5.php");
		$sql = "INSERT INTO `member` (`mem_acc`, `mem_pw`, `mem_first_name`, `mem_last_name`, `mem_gender`, `mem_email`, `city`, `address`, `phone`) VALUES (:mem_acc,:mem_pw,:mem_first_name,:mem_last_name,:mem_gender,:mem_email,:city,:address,:phone);";
		$member = $pdo->prepare( $sql );
		$member->bindValue(":mem_acc", $_POST["mem_acc"]);
		$member->bindValue(":mem_pw", $_POST["mem_pw"]);
		$member->bindValue(":mem_first_name", $_POST["mem_first_name"]);
		$member->bindValue(":mem_last_name", $_POST["mem_last_name"]);
		$member->bindValue(":mem_gender", $_POST["mem_gender"]);
		$member->bindValue(":mem_email", $_POST["mem_email"]);
		$member->bindValue(":city", $_POST["city"]);
		$member->bindValue(":address", $_POST["address"]);
		$member->bindValue(":phone", $_POST["phone"]);
		$member->execute();


		
		// $memRow = $memberC->fetch(PDO::FETCH_ASSOC);
		//登入成功,將登入者的欄位資料寫入session
		// // $_SESSION["memNo"] = $_POST["mem_no"];
		// $_SESSION["Account"] = $_POST["mem_acc"];
		// $_SESSION["FirstName"] = $_POST["mem_first_name"];
		// $_SESSION["LastName"] = $_POST["mem_last_name"];
		// $_SESSION["email"] = $_POST["mem_email"];

		// header("http://localhost:8888/dist/signin");//OK

        $msg = "congratulations!~~you can log in now!"; 
		$result=$msg;
		echo json_encode($result);
		
		
		
		
		
	} 
}catch(PDOException $e){
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
  	$result=$msg;
	echo json_encode($result);
}

?>