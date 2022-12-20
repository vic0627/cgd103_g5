function $id(id) {
	return document.getElementById(id);
}
//------------全域變數
let admin = {};


function sendForm() {
	//使用Ajax 回server端,取回登入者姓名, 放到頁面上 
	let xhr = new XMLHttpRequest();

	xhr.onload = function () {
		admin = JSON.parse(xhr.responseText);
		if (admin.acc) {
			$id("admin_acc").innerText = admin.acc;
		}

	}

	xhr.open("post", "../../../dist/g5PHP/getbackLogin.php", true);

	//12.2新增的內容
	let formData = new FormData(document.getElementById("myForm"))
	xhr.send(formData);

	//將登入表單上的資料清空，並隱藏起來
	$id('lightBox').style.display = 'none';
	$id('admin_acc').value = '';
	$id('admin_pw').value = '';

}

