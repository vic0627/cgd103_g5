<?php 
//  header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5.php");
	$sql = "INSERT INTO tibamefe_cgd103g5.competition_registration (comp_no,mem_no)
    VALUES (:comp_no,:mem_no)";
	$insertRace = $pdo->prepare($sql);
	
    // $race->bindValue(":cpt_no",$_POST["cpt_no"]);
    // $insertRace->bindValue(":regis_no",$_POST["regis_no"]);
    $insertRace->bindValue(":comp_no",$_POST["comp_no"]); //
    $insertRace->bindValue(":mem_no",$_POST["mem_no"]); //
    // $insertRace->bindValue(":regis_date",$_POST["regis_date"]);
    $insertRace->execute();
    $msg = "success";
} catch (PDOException $e) {
	//echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "錯誤行號 : ", $e->getLine(), "<br>";
	// echo "系統錯誤, 請通知系統維護人員<br>";
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>