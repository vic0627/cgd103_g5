<script setup>
import { ref, onMounted, reactive, computed, onUpdated } from 'vue';
import { BIND_URL,$$,log } from "../../composables/useCommon";
import router from '../../router';
// 抓後台管理帳密資料
const admin_pw = ref("");
const admin_acc = ref("");
let adminRows;
const getAdmin = () => {
  fetch(`${BIND_URL('getbackLogin.php','g5PHP')}`, {
    method: "POST",
    body: new URLSearchParams({
      admin_acc: admin_acc.value,
      admin_pw: admin_pw.value,
    }),
  })
  .then(result=>adminRows = result.json())
  .then(e => {
    if(e.admin_no==undefined){
      alert("帳號或密碼錯誤!")
    }else{
      sessionStorage.setItem("admin", `{"admin_name": "${e.admin_name}", "authority": "${e.authority}"}`);
      router.push("/backend");
    }
  })
}
function verifypsw(val) {
    let regex_psw = /^[0-9a-fA-F]{3,10}$/;
    let type;
    if(val==admin_acc.value){
      type = "帳號";
    }else{
      type = "密碼";
    }
    if (val != "") {
      if (regex_psw.test(val) == false) {
        $$(".mess").textContent = `${type}格式錯誤`;
        $$(".mess").style["color"] = "red";
      } else if (regex_psw.test(val)) {
        $$(".mess").textContent = " 正確";
        $$(".mess").style["color"] = "lightgreen";
        return true;
      }
    } else {
      $$(".mess").textContent =
        "欄位請輸入符合大小寫英數格式";
      $$(".mess").style["color"] = "#888";
    }
    return false;
}
// 點按顯示密碼
function shows() {
  if ($$('#admin_pw').type === "password") {
    $$('#admin_pw').type = "text";
  } else {
    $$('#admin_pw').type = "password";
  }
}
</script>

<template>
   <div class="container">
      <div class="box">
        <form  id="myForm" >
          <h2>後台登入</h2>
          <div class="form-group">
            <label for="admin_acc">管理員帳號</label>
            <input type="text" id="admin_acc" class="acc" name="admin_acc"  maxlength="10" minlength="3" required placeholder="請輸入3-10位含大小寫英數帳號" v-model="admin_acc" @input="verifypsw(admin_acc)">
          </div>
                <div class="form-group">
                    <label for="admin_pw">管理員密碼</label>
                    <input type="password" id="admin_pw" name="admin_pw" class="admin_pw" maxlength="10" minlength="3" required placeholder="請輸入3-10位含大小寫英數密碼" v-model="admin_pw" @input="verifypsw(admin_pw)">
                    <div class="down">
                        <label class="in">
                        <input type="checkbox" id="check" @click="shows" class="pw"><span>顯示密碼</span>
                        </label>
                        <p class="message mess"></p>
                    </div>
                </div>
                <button type="button" class="btn"  id="btnLogin" @click="getAdmin">登入</button>
            </form>
            <div class="links">
                <router-link to="/" class="leave link" >離開後台</router-link>
                <router-link to="/home" class="home link" >前往首頁</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: #5e8ca7;
  .box {
    width: 500px;
    padding: 20px;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
}
.down {
  display: flex;
  justify-content: space-between;
}
.in {
  margin-top: 5px;
}
p {
  color: #000;
}
span {
  font-size: 18px;
  color: #000;
  vertical-align: middle;
}
h2 {
  text-align: center;
  font-size: 30px;
  color: #5e8ca7;
}
.btn {
  width: 100%;
  text-align: center;
  border-radius: 5px;
  background-color: #5e8ca7;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  height: 40px;
  font-size: 20px;
  margin-top: 15px;
  border: none;
  line-height: 25px;
  transition: background 0.5s;
  &:hover {
    background: #06519d;
  }
}
.links {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.link {
  color: #5e8ca7;
  font-size: 22px;
  margin: 10px 0;
  padding: 5px;
  transition: background 0.5s;
  &:hover {
    background: #fff;
    color: #1671cd;
    border-radius: 5px;
  }
}
#check {
  width: 20px;
  height: 18px;
  padding: 0;
  margin: 0 5px;
  vertical-align: middle;
}
input {
  width: 95%;
  height: 20px;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(140, 140, 140);
  border-radius: 5px;
  &:focus {
    color: #06519d;
    border: 1px solid #1671cd;
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    padding-left: 5px;
    color: rgba(181, 181, 181, 0.749);
  }
}
</style>
