<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
try {
	require_once("./connect_cgd103g5_adam.php");
	$sql = "UPDATE tibamefe_cgd103g5.competition_info 
	SET  cpt_name = :cpt_name,cpt_start = :cpt_start,cpt_end = :cpt_end,cpt_aboard = :cpt_aboard,cpt_photo = :cpt_photo,cpt_txt = :cpt_txt
	WHERE cpt_no = :cpt_no";
	$race = $pdo->prepare($sql);
	$race->bindValue(":cpt_name",$_POST["cpt_name"]);
    $race->bindValue(":cpt_start",$_POST["cpt_start"]);
    $race->bindValue(":cpt_end",$_POST["cpt_end"]);
    $race->bindValue(":cpt_aboard",$_POST["cpt_aboard"]);
    $race->bindValue(":cpt_photo",$_POST["cpt_photo"]);
    $race->bindValue(":cpt_txt",$_POST["cpt_txt"]);
    $race->execute();
    $msg = "success";
} catch (PDOException $e) {
	$msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
}
$result=$msg;
echo json_encode($result);
?>