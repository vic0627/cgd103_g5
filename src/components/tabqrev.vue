<script setup>
import { reactive, onMounted,ref } from 'vue';

const table = ref([
  {
    number:5,
    q:"How to become a member of EFPV?",
    a:"Click the member center icon in the upper right corner of the homepage to register/login.",
  },
  {
    number:4,
    q:"How to contact us?",
    a:"123",
  },
  {
    number:3,
    q:"How to contact us?",
    a:"123",
  },
  {
    number:2,
    q:"How to contact us?",
    a:"123",
  },
  {
    number:1,
    q:"How to contact us?",
    a:"123",
  },

])

</script>
<template>
<div class="top">
  <h2>
    FAQ問題-修改 / 刪除
    <outComponents />
  </h2>
  <div class="search_box">
    <label for="search" class="label">查詢編號<input type="search" id="search" name="search" placeholder="請輸入編號"></label>
    <div class="btn">
      <button class="magBox"><img src="../assets/images/About/search.png" alt="search"></button>
    </div>
  </div>
  <div>
    <table>
      <tr>
        <th>編號</th>
        <th>問題</th>
        <th>回覆</th>
        <th>修改</th>
      </tr>
      <tr v-for="item in table" :key="item">
        <td>{{item.number}}</td>
        <td>{{item.q}}</td>
        <td>{{item.a}}</td>
        <td><a href="#">編輯 <span>/</span> 刪除</a></td>
      </tr>
    </table>
  </div>
</div>

  
</template>
<style scoped lang="scss">
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
.search_box{
  display: flex;
  justify-content: right;
  margin: 30px 15px;
  label {
    margin-right: 10px;
    font-size: 20px;
    color: rgb(26, 26, 26);
    input{
      margin-left: 10px;
      height: 35px;
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
  .btn {
    button{
      width: 50px;
      text-align: center;
      border: none;
      background:#597897;
      border-radius: 5px;
      padding: 5px;
      transition: background 0.5s;
      cursor: pointer;
      &:hover{
        background: $blue;
      }
      img{
        width: 20px;
        height: 20px;
        margin-top: 2px;
      }
    }
  }
}
</style>