<script setup>
import {ref} from "vue";
const des = ref("");
const ans = ref("");
const add =()=>{
  const payload = {
    faq_des : des.value,
    faq_ans : ans.value
  };
  fetch("http://localhost/g5/public/g5PHP/insertaddFaqs.php",{
    method:'POST',
    body:new URLSearchParams(payload), 
  }
  ).then(res=>{
    res.text();
  })
  
}

</script>
<template>
<div class="top">
  <h2>
    FAQ-新增問題
    <outComponents />
  </h2>
  <form method="post">
    <div class="faq">
    <div class="question">
      <h3>常見問題</h3>
      <input type="text" placeholder="請輸入問題" id="quesTion" name="faq_des" v-model="des" required>
    </div>
    <div class="answer">
      <h3>回覆答案</h3>
      <input type="text" placeholder="請輸入答案" id="ansWer" name="faq_ans" v-model="ans" required>
    </div>
  </div>
</form>
  <div class="btn">
    <input type="button" value="確定新增" id="conFirm" @click="add()">
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