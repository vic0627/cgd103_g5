<?php 
 header('Access-Control-Allow-Origin:*');
 header("Content-Type:application/json;charset=utf-8");
const MY_DIR = "../images";
try{
    switch($_FILES["image"]["error"] ){
	case UPLOAD_ERR_OK : 		
		if( file_exists(MY_DIR) == false){
			mkdir(MY_DIR); //make directory
		}
		$from = $_FILES["image"]["tmp_name"];

		$fileExt = pathinfo($_FILES["image"]["name"],PATHINFO_EXTENSION);
		$fileName = uniqid() . ".$fileExt"; //決定檔案名稱
		$to = MY_DIR . "/{$fileName}";
		copy( $from, $to);
        $msg = 'success';
		break;

	case UPLOAD_ERR_INI_SIZE:
	    $msg = "上傳檔案太大,不能超過 ". ini_get("upload_max_filesize") ;	
	    break;
	case UPLOAD_ERR_FORM_SIZE:
	    $msg = "上傳檔案太大,不能超過 ".$_POST["MAX_FILE_SIZE"];			    
	    break;
    case UPLOAD_ERR_PARTIAL:
    	$msg = "上傳檔案不完整";
    	break;
    case UPLOAD_ERR_NO_FILE:
        $msg = "没有上傳檔案";
		$fileName = $_POST["image_origin"];
        break;
    default:
        $msg = "上傳檔案失敗，錯誤代碼: ".$_FILES["error"]."請通知系統開發人員";
    echo $msg;
    // if( $_FILES["image"]["error"] === 0 || $_FILES["image"]["error"] === 4){
    //     try{
    //         require_once("./connect_cgd103g5_Lily.php");
    //         //sql 指令
    //         $sql = "update products 
    //                 set	image = :image 
    //                 where psn = :psn";
    //         //編譯, 執行
    //         $products->bindValue(":image",$fileName);
    
    //         $products->execute();
    //         //有没有更改圖檔
    
    //         $msg = "異動成功";
    //     } catch (PDOException $e) {
    //         $msg = "錯誤行號 : ".$e->getLine().", 錯誤訊息 : ".$e->getMessage();
    //     }	
    // }
    //     echo json_encode(["msg"=>$msg]);
}
echo $msg;
}catch(PDOException $e){
    $msg = "error_line: ".$e->getLine().", error_msg: ".$e->getMessage();
    echo $msg;
}

?>