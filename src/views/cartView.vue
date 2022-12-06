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

bodyInit();
const step = ref(1);
const nextStep = () => {
    step.value++
}
const customer1 = reactive(
    [
        {
            "custNo":1,
            "FirstName":"LILY",
            "LastName":"LIU",
            "Phone":"0911111111",
            "OrderList":"EFPV Avata advance bundle",
            "OrderQty":2,
            "Address":"50 Hagiwara Tea Garden Dr, San Francisco, CA", 
            "CreditCardNo":"01111 1111 1111 1111",
            "isFirstClassMember": true 
        },
    ]
)
const customer2 = reactive(
    [
        {
            "custNo":2,
            "FirstName":"John",
            "LastName":"Tseng",
            "Phone":"0911114444",
            "OrderList":"EFPV Avata pro bundle",
            "OrderQty":4,
            "Address":"30 Hagiwara Tea Garden Dr, San Francisco, CA", 
            "CreditCardNo":"0222 2222 2222 2222"  
        },
    ]
)
</script>
<template>
    <navComponentsVue />
    <section class="member_detail">
        <h2>SHOPPING CART</h2> 
        <OrderStepVue :step="step"/>  
        <Step1 v-if="step===1" :next-step="nextStep"></Step1>  
        <Step2 v-if="step===2" :next-step="nextStep"></Step2>
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
        width: 100%;
        text-align: center;
        margin: 100px auto;
    }
    
}

       
</style>