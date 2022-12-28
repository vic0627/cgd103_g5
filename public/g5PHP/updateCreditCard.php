<?php 
 session_start();//查看session
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	if( isset($_SESSION["Account"])==true){
		//辨認是否登入
		require_once("./connect_cgd103g5.php");
		//用前台榜的值來更新會員裡的信用卡欄位
		$sql = "UPDATE `member`  SET  credit_no = :credit_no where mem_acc = :mem_acc";

		$cdn = $pdo->prepare($sql);

		//辦認哪一位會員
		$cdn-> bindValue(":mem_acc", $_SESSION["Account"]);
		$cdn->bindValue(":credit_no",$_POST["credit_no"]);
		$cdn->execute();
		
		// $memRow = $cdn->fetch(PDO::FETCH_ASSOC);
		// echo json_encode($memRow);
		$msg = "success";
	}else{
		echo "{}";
	}
	} catch (PDOException $e) {
		$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
		$result=$msg;
		echo json_encode($result);
	}
?>