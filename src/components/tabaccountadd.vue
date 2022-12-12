<script setup>

</script>
<template>
<div class="top">
  <h2>
    管理員管理-新增
    <outComponents />
  </h2>
  <div class="faq">
    <div class="question">
      <h3>管理員姓名</h3>
      <input type="text" placeholder="請輸入姓名" id="quesTion">
    </div>
    <div class="question">
      <h3>管理員帳號</h3>
      <input type="text" placeholder="請輸入帳號" id="quesTion">
    </div>
    <div class="answer">
      <h3>管理員密碼</h3>
      <input type="text" placeholder="請輸入密碼" id="ansWer">
    </div>
  </div>
  <div class="btn">
    <input type="submit" value="取消新增" id="canCel">
    <input type="submit" value="確定新增" id="conFirm">
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