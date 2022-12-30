<?php 
session_start();//看session
require_once("./cors_cookie.php");
header("Content-Type:application/json;charset=utf-8");
try{//session內有memId代表登入中
	require_once("./connect_cgd103g5.php");
	$sql = "select mem_discount from tibamefe_cgd103g5.member_grade where grade_id = :mem_grade;";
	$points = $pdo->prepare($sql);
	$points->bindValue(':mem_grade', $_POST["mem_grade"]);
	$points->execute();
	$pointsVal = $points->fetch(PDO::FETCH_ASSOC);
	echo json_encode($pointsVal);
	//變json字串後回傳
}catch (PDOException $e) { //尚未登入
	$result = ["msg"=>"系統錯誤, 請通知系統維護人員"];
	echo json_encode($result);//回傳空字串，保持登出狀態
}

?>