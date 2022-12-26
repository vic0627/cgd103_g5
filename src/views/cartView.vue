<script setup>
import { ref, reactive,onMounted } from 'vue';
import $ from 'jquery';
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import OrderStepVue from '@/components/step/orderStep.vue';
import Step1 from '@/components/step/Step1.vue';
import Step2 from '@/components/step/Step2.vue';
import Step3 from '@/components/step/Step3.vue';
import {bodyInit} from '../composables/useOnunmounted';
import router from '@/router';
onMounted(() =>{
  function getMemberInfoSS(){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                let member = JSON.parse(xhr.responseText);
                // console.log("SS:"+member);
                if(member.Account){//有帳密資料
                    // $id("memName").innerText = member.memName;
                    // $id("spanLogin").innerText = "登出"; 
                // meminfo.value = [member.memName,member.email];
                // console.log(mem.value)         
                }else{
                  alert("Please log in before checkout!");
                  // location.href="http://localhost:8888/dist/home";
                  router.push('/signin');
                }
            }
            xhr.open("get","/dist/g5PHP/getMemberInfo.php",true);//查看使用者是否有登入
            xhr.send(null);
        }
  getMemberInfoSS();

})
bodyInit();
const step = ref(1);
const prevStep = () => {
    step.value--
}
const nextStep = () => {
    step.value++
}
</script>
<template>
    <navComponentsVue />
    <section class="member_detail">
        <h2>SHOPPING CART</h2> 
        <OrderStepVue :step="step"/>  
        <Step1 v-if="step===1" :next-step="nextStep"></Step1>  
        <Step2 v-if="step===2" :next-step="nextStep" :prev-step="prevStep" ></Step2>
        <Step3 v-if="step===3"></Step3>
    </section>
    <footerComponentsVue />
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
@import '@/sass/component/_btn.scss';

.member_detail{
    max-width: 1200px;
    margin: 0 auto;  
    text-align: center;
    overflow: hidden;
    font: $caption-p;
    h2{
        text-align: center;
        margin: 100px auto 0;
        padding-left: 40px;
    }
    
}

       
</style>