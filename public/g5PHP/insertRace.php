<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "insert into tibamefe_cgd103g5.competition_info values( null, :cpt_name, :cpt_start, :cpt_end, :cpt_aboard, :cpt_photo, :cpt_txt)";
	$race = $pdo->prepare($sql);
	
    // $race->bindValue(":cpt_no",$_POST["cpt_no"]);
    $race->bindValue(":cpt_name",$_POST["cpt_name"]);
    $race->bindValue(":cpt_start",$_POST["cpt_start"]);
    $race->bindValue(":cpt_end",$_POST["cpt_end"]);
    $race->bindValue(":cpt_aboard",$_POST["cpt_aboard"]);
    $race->bindValue(":cpt_photo",$_POST["cpt_photo"]);
    $race->bindValue(":cpt_txt",$_POST["cpt_txt"]);
    $race->execute();

	

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