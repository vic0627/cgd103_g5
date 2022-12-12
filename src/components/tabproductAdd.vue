<script setup>
import {ref} from 'vue';
const titles = ref(["商品編號","商品名稱","商品分類","售價","重量","轉速","扭力","顏色"]);

</script>
<template>
<div class="top">
  <h2>
   商品新增
    <outComponents />
  </h2>
  <div class="proAdd">
    <div class="proCol" v-for="name in titles" :key="name">
      <h3>{{name}}</h3>
      <input v-if="name != '商品分類'" type="text" placeholder="請輸入" id="proCol">
      <select v-if="name == '商品分類'" name="" id="">
        <option value="">機身</option>
        <option value="">零件</option>
        <option value="">組合</option>
      </select>
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
.proAdd{
  width: 100%;
  margin: 50px;
  .proCol{
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
    select{
      width: 800px;
      height: 40px;
      border-radius: 5px;
      margin-top: 10px;
      margin-left: 50px;
      border: 1px solid rgb(124, 124, 124);
      font-size: 20px;
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