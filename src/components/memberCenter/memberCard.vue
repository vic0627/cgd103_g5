<script setup>
import { onMounted ,ref} from 'vue';

const meminfo = ref("");
onMounted(() =>{
    function getMemberInfoSS(){
              let xhr = new XMLHttpRequest();
              xhr.onload = function(){
                  let member = JSON.parse(xhr.responseText);
                  // console.log("SS:"+member);
                  if(member.memId){//有帳密資料
                      // $id("memName").innerText = member.memName;
                      // $id("spanLogin").innerText = "登出"; 
                  meminfo.value = [member.memName,member.email];
                  // console.log(mem.value)         
                  }
              }
              xhr.open("get","/dist/g5PHP/getMemberInfo.php",true);//查看使用者是否有登入
              xhr.send(null);
          }
    
    getMemberInfoSS();

})
</script>

<template>
    <div class="meminfo">
        <div class="circle">
            <img src="@/assets/images/member/head.jpeg" alt="">
        </div>
        <div class="memcard">
            <p>{{meminfo[0]}}</p>
            <p class="p2">{{ meminfo[1] }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
.meminfo{
    box-sizing: border-box;
    // flex-grow: 1;
    width: 50%;
    background: linear-gradient(-200deg, #E6BA79 0.51%, rgba(173, 99, 12, 0.83) 98.54%);
    border-radius: 10px;
    padding: 10px;
    .circle{
        aspect-ratio: 1/1;
        position: relative;
        top: 10px;
        left: 10px;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        background: linear-gradient(135.57deg, #4591D8 15.58%, #6723C7 82.75%);
        img{
            position: relative;
            top: 5px;
            left: 5px;
            width: 140px;
            height: 140px;
            border-radius: 50%;
        }
    }
    .memcard{
        flex-grow: 1;
        text-align: right;
        p{
            // display: block;
            // margin: 80px 30px 0;
            color: #fff;
            font-size: 30px;
            font-weight: 800;
        }
        .p2{
            color: #333;
            // margin-top: 10px;
            font-size: 20px;
        }
    }
}
</style>