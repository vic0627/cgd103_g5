<script setup>
import {ref,onMounted} from 'vue';
const titles = ref(["商品編號","商品名稱","商品分類","售價(美元)","顏色"]);
onMounted(()=>{

function doFirst(){    
  // 先跟 HTML 畫面產生關連，再建事件聆聽功能
  document.getElementById('theFile').onchange = fileChange
}

window.addEventListener('load',doFirst)

})
function fileChange(){
  let file = document.getElementById('theFile').files[0]
  console.log('input')
  // ==========
  let readFile = new FileReader()
  readFile.readAsDataURL(file)
  
  readFile.addEventListener('load',()=>{
      let image = document.getElementById('image')
      image.src = readFile.result
      image.style.maxWidth = '500px'
      image.style.maxHeight = '500px'
  })
}
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
        <option value="">1-機身</option>
        <option value="">2-零件</option>
        <option value="">3-組合</option>
      </select>
    </div>
    <div class="imgBox">
      <p>
        <img id="image">
      </p>
      <input type="file"  id="theFile" @change="fileChange">
      <div class="btn">
        <input type="submit" value="取消新增" id="canCel">
        <input type="submit" value="確定新增" id="conFirm">
      </div>
    </div>
   
  </div>
 
</div>
  

</template>
<style scoped lang="scss" >
@import '@/sass/style.scss';

.top {
  width: 100%;
  display: block;
  overflow: scroll;
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
  height: 100vh;
  margin: 50px;

  overflow: scroll;
  .proCol{
    display: flex;

    h3{
      font-size: 30px;
      color: rgb(26, 26, 26);
    }
    input{
      width: 50%;
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
      width: 50%;
      height: 40px;
      border-radius: 5px;
      margin-top: 10px;
      margin-left: 50px;
      border: 1px solid rgb(124, 124, 124);
      font-size: 20px;
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
.imgBox{
  margin-top: 25px;
}
#image{
  width: 50%;
  height:490px;
  border-radius: 5px;
  border: 1px solid rgb(124, 124, 124);
}
#theFile {
  border:none;
}
</style>