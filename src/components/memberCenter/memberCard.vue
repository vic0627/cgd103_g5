<script setup>
import { onMounted ,ref} from 'vue';
import { log, $$, $all, getW, BIND_URL }from "../composables/useCommon" ;

// const meminfo = ref("");

const memberinfo =ref({
    mem_first_name : "",
    mem_last_name : "",
    mem_email : "",
    mem_grade : "",
    mem_points : "",
});
onMounted(() =>{
    // getMemberInfoSS();

    function getMemberInfoSS(){
              let xhr = new XMLHttpRequest();
              xhr.onload = function(){
                  let member = JSON.parse(xhr.responseText);
                  // console.log("SS:"+member);
                  if(member.Account){//有帳密資料
                      // $id("memName").innerText = member.memName;
                      // $id("spanLogin").innerText = "登出"; 
                  meminfo.value = [member.FirstName,member.email];
                  // console.log(mem.value)         
                  }
              }
            //   xhr.open("get","/dist/g5PHP/getMemberInfo.php",true);//查看使用者是否有登入
              xhr.open("get",`${BIND_URL('getMemberInfo.php',g5PHP)}`,true);
              xhr.send(null);
          }


    getMemLevel();
    
    function getMemLevel(){
        // fetch('/dist/g5PHP/getMemLevel.php',{
        fetch(`${BIND_URL('getMemLevel.php',g5PHP)}`,{
                method: "get",
            })
            .then((res) => res.json())//將php response的內容轉成json格式
            .then(mem =>{//該json
                console.log(mem);
                if(mem.mem_acc){//回傳帳號為true時
                    //取得需要的會員資料
                    memberinfo.value.mem_first_name = mem.mem_first_name;
                    memberinfo.value.mem_last_name = mem.mem_last_name;
                    memberinfo.value.mem_email = mem.mem_email;
                    memberinfo.value.mem_grade = mem.mem_grade;
                    memberinfo.value.mem_points = mem.mem_points;
                    switch(mem.mem_grade){
                        case "1"://銅
                            console.log("1.you are level :"+mem.mem_grade);
                            document.querySelector(".meminfo").style["background"] = "linear-gradient(107.48deg, #E6BA79 0.51%, rgba(173, 99, 12, 0.83) 98.54%)";
                            document.querySelector(".mememail").style["color"] = "#253253";
                            document.querySelector(".mempoint").style["color"] = "#ffd700";
                            break;
                        case "2"://銀
                            console.log("2.you are level :"+mem.mem_grade);
                            // document.querySelector(".meminfo").style["background"] = "linear-gradient(107.48deg, rgba(208, 205, 196, 0.6) 0.51%, rgba(96, 96, 96, 0.53) 98.54%)";
                            document.querySelector(".meminfo").style["background"] = "rgba(208, 205, 196, 0.6)";
                            document.querySelector(".mememail").style["color"] = "#fff";
                            document.querySelector(".mempoint").style["color"] = "#ffd700";
                            break;
                        case "3"://金
                            console.log("3.you are level :"+mem.mem_grade);
                            document.querySelector(".meminfo").style["background"] = "linear-gradient(-200deg, #f9f48f, #fbc65d, #e8b443, #e4b445)";
                            document.querySelector(".mememail").style["color"] = "#253253";
                            document.querySelector(".mempoint").style["color"] = "rgb(31 76 185)";
                            break;
                    }
                }
            })
            .catch(error =>console.log(error));
    }



});
</script>

<template>
    <div class="meminfo">
        <div class="circle">
            <img src="@/assets/images/member/head.jpeg" alt="">
        </div>
        <div class="memcard">
            <p class="memename">{{memberinfo.mem_first_name}} {{memberinfo.mem_last_name}}</p>
            <p class="mememail">{{memberinfo.mem_email}}</p>
            <p class="mempoint">POINTS:{{memberinfo.mem_points}}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
.meminfo{
    box-sizing: border-box;
    // flex-grow: 1;
    // width: 50%;
    // background: #888;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: flex-end;

    
    .memcard{
        // flex-grow: 1;
        text-align: right;
        .memename{
            color: #fff;
            font-size: 25px;
            font-weight: 700;

        }
        .mememail{
            color: #fff;
            font-size: 20px;
            font-weight: 800;
        }
        .mempoint{
            color: rgb(31 76 185);
            font-size: 20px;
            font-weight: 700;
        }
    }
}
.circle{
        aspect-ratio: 1/1;
        // position: relative;
        position: absolute;
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
@include m($m-breakpoint) {//手機到平板
}
@include l($l-breakpoint) {//平板以上電腦
}
</style>