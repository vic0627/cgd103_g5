<script setup>
import { reactive, onMounted,ref,h } from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton} from 'naive-ui';
import {BIND_URL } from "../composables/useCommon";
import axios from 'axios';
const props = defineProps(["tab"])

const name = ref('');
const authority = ref('一般管理員');
const account = ref('');
const password = ref('');
const adminRows = ref([]);
		const getAdmin = () => {
			//取得管理員資料
       axios.get(`${BIND_URL('getAdmin.php','g5PHP')}`,)
      .then(res=> {
        console.log(res.data)
        adminRows.value = res.data
      })
		}
//新增資料到資料庫
const submitData = ()=>{
  const payload = {
    admin_name: name.value,
    authority: authority.value,
    admin_acc: account.value,
    admin_pw: password.value,
  };
  
    for(let i=0;i<adminRows.value.length;i++){
      if(account.value === adminRows.value[i].admin_acc && password.value === adminRows.value[i].admin_pw){
        alert("帳號密碼已重複");
        break;    
      }else if (name.value === '' || account.value === '' || password.value === ''){
        alert("不可空白，請輸入帳號密碼")
        break;
      }else if(account.value != adminRows.value[i].admin_acc && password.value != adminRows.value[i].admin_pw){
        fetch(`${BIND_URL('insertAdmin.php','g5PHP')}`, {
          method: "POST",
          body: new URLSearchParams(payload),
        }).then(res=>{
          res.text();
        })
        alert("新增成功")
        props.tab("accountfix");
        break;
      }
    }
}
	onMounted(()=>{
		getAdmin();
  });
</script>
<template>
<div class="top">
  <h2>
    管理員管理-新增
    <outComponents />
  </h2>
  <form method="post">
    <div class="faq">
      <div class="question">
        <h3>管理員姓名</h3>
        <input type="text" placeholder="請輸入姓名" id=" admin_name" name="admin_name" v-model="name" required> 
      </div>
      <div class="question">
        <h3>管理員權限</h3>
        <input type="text" id="authority" name="authority" v-model="authority" disabled>
      </div>
      <div class="question">
        <h3>管理員帳號</h3>
        <input type="text" placeholder="請輸入帳號" id="admin_acc" name="admin_acc" v-model="account" required>
      </div>
      <div class="answer">
        <h3>管理員密碼</h3>
        <input type="password" placeholder="請輸入密碼" id="admin_pw" name="admin_pw" v-model="password" required>
      </div>
    </div>
  </form>
  <div class="btn">
    <input type="button" value="新增" id="conFirm" @click="submitData(),props.tab('accountfix')">
  </div>
</div>

</template>
<style scoped lang="scss" >
@import '@/sass/style.scss';

.top {
  width: 100%;
  display: block;
}
h2 {
  font-size: 40px;
  color: #fff;
  margin: 10px 10px;
  padding: 10px 10px;
  background-color: #597897;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.faq{
  width: 100%;
  margin: 50px;
  .question{
    display: flex;
    h3{
      font-size: 30px;
      color: rgb(26, 26, 26);
    }
    input{
      width: 800px;
      height: 40px;
      margin-top: 10px;
      margin-left: 50px;
      border: 1px solid rgb(124, 124, 124);
      border-radius: 5px;
      padding-left: 10px;
      font-size: 18px;
      &:focus{
        color: #06519d;
        border: 1px solid #1671cd;
        outline: none;
          &::placeholder{
          opacity: 0;
          }
      }
      &::placeholder{
        padding-left: 5px;
        color: rgba(181, 181, 181, 0.749);
      }
    }
  }
  .answer{
    display: flex;
    h3{
      font-size: 30px;
      color: rgb(26, 26, 26);
    }
    input{
      width: 800px;
      height: 40px;
      margin-top: 10px;
      padding-left: 10px;
      margin-left: 50px;
      font-size: 18px;
      border: 1px solid rgb(124, 124, 124);
      border-radius: 5px;
      &:focus{
        color: #06519d;
        border: 1px solid #1671cd;
        outline: none;
          &::placeholder{
          opacity: 0;
          }
      }
      &::placeholder{
        padding-left: 5px;
        color: rgba(181, 181, 181, 0.749);
      }
      
    }
  }
}
.btn {
  display: flex;
  margin: 50px;
  input{
    width: 150px;
    font-size: 20px;
    margin-right: 15px;
    padding: 10px;
    text-align: center;
    border: none;
  }
  #canCel{
    border-radius: 5px;
    border: 1px solid #999;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    transition: background 0.5s;
    &:hover{
      background: rgba(204, 204, 204, 0.326);
    }
  }
  #conFirm{
    border-radius: 5px;
    background-color: $blue;
    color: #fff;
    cursor: pointer;
    transition: background 0.5s;
    &:hover{
      background: #06519d;
    }
  }
}
</style>