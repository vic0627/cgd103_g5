<script setup>
import { ref, reactive,onMounted } from 'vue';
import $ from 'jquery';
import {BIND_URL } from "../../composables/useCommon";
import {bodyInit} from '@/composables/useOnunmounted';

bodyInit();

const props = defineProps(['prevStep','nextStep','step']);
const memberInfo = ref({
    mem_no: "",
    mem_grade : "",
    mem_first_name : "",
    mem_last_name : "",
    phone : "",
    mem_gender : "",
    mem_email : "",
    city : "",
    address : "",
    credit_no : ""
});
function getMemberInfo (){
    fetch(`${BIND_URL('getMemInfo.php','g5PHP')}`,{
        method:"get",
        credentials: 'include',
    })
    .then((res)=>res.json())
    .then(mem => {
            console.log(mem);
            memberInfo.value.mem_no = mem.mem_no;
            memberInfo.value.mem_grade = mem.mem_grade;
            memberInfo.value.mem_first_name = mem.mem_first_name;
            memberInfo.value.mem_last_name = mem.mem_last_name;
            memberInfo.value.phone = mem.phone;
            memberInfo.value.mem_gender = mem.mem_gender;
            memberInfo.value.city = mem.city;
            memberInfo.value.address = mem.address;
            memberInfo.value.credit_no = mem.credit_no;
    })
    .catch(error =>console.log(error));
    }
const sums = ref('');
const final = ref('');
const discount_price = ref('');
const disc_no = ref('');
const fee = ref('');
const lightBoxShow = ref(false);
onMounted(()=>{
    getMemberInfo();
})
/////
const submitOrder = ()=>{
    if(sessionStorage['cartList'].includes('111')){
        sums.value = sessionStorage.getItem('sums');
        final.value = sessionStorage.getItem('final');
        discount_price.value = sessionStorage.getItem('discount');
        // disc_no.value = sessionStorage.getItem('disc_no');
        fee.value = sessionStorage.getItem('fee');
        const payload = {
            mem_no: Number(memberInfo.value.mem_no),
            mem_grade: Number(memberInfo.value.mem_grade),
            orders_price: Number(sums.value),
            discount_price: Number(discount_price.value),
            total_price: Number(final.value),
            orders_location: String(memberInfo.value.address),
            fee: Number(fee.value),
            credit_no: String(memberInfo.value.credit_no),
        };
        fetch(`${BIND_URL('sessionCmOrder.php','g5PHP')}`, {
            method: "POST",
            body: new URLSearchParams(payload),
        }).then(res=>{
            res.text();
        }).then(res=>{
            // getmaxOrder();
        })
    }else{
        sums.value = sessionStorage.getItem('sums');
        final.value = sessionStorage.getItem('final');
        discount_price.value = sessionStorage.getItem('discount');
        // disc_no.value = sessionStorage.getItem('disc_no');
        const payload = {
            mem_no: Number(memberInfo.value.mem_no),
            mem_grade: Number(memberInfo.value.mem_grade),
            orders_price: Number(sums.value),
            discount_price: Number(discount_price.value),
            total_price: Number(final.value),
            orders_location: String(memberInfo.value.address),
            credit_no: String(memberInfo.value.credit_no),
        };
        fetch(`${BIND_URL('sessionNmOrder.php','g5PHP')}`, {
            method: "POST",
            body: new URLSearchParams(payload),
        }).then(res=>{
            res.text();
        })
    }
}
const lightBoxClose = () => {
    lightBoxShow.value = false;
};
const confirmPay =()=>{
    lightBoxShow.value = false;
    submitOrder();   
}
</script>
<template>   
    <section class="detail_box">
    <h3>Confirm Detail</h3>
            <table class="confirm_detail">
                <tr>
                    <td class="title">First Name</td>
                    <td>{{memberInfo.mem_first_name}}</td>
                    <td class="title">Last Name</td>
                    <td>{{memberInfo.mem_last_name}}</td>
                </tr>
                <tr>
                    <td class="title">Phone</td>
                    <td >{{memberInfo.phone}}</td>
                    <td class="title">Gender</td>
                    <td>{{memberInfo.mem_gender}}</td>
                </tr>
                <tr>
                    <td class="title">Member Grade</td>
                    <td colspan="3">{{memberInfo.mem_grade}}</td>
                </tr>
                <tr>
                    <td class="title">City</td>
                    <td colspan="3">{{memberInfo.city}}</td>
                </tr>
                <tr>
                    <td class="title">Address</td>
                    <td colspan="3">{{memberInfo.address}}</td>
                </tr>
                <tr>
                    <td class="title">Credit Card No.</td>
                    <td colspan="3">{{memberInfo.credit_no}}</td>
                </tr>
            </table>
            <div class="buttons">
                <div class="btnSecond" data-title="Back" @click="props.prevStep()"><span>Back</span></div>
                <div class="btnPrimary" data-title="Pay" @click="lightBoxShow.value = true"><span>Pay</span></div>
                <!-- props.nextStep();submitOrder() -->
            </div>
    </section>     
    <form action="post">
        <input type="hidden" v-model="memberInfo.mem_no" name="mem_no">
        <input type="hidden" v-model="memberInfo.mem_grade" name="mem_grade">
        <input type="hidden" v-model="sums" name="orders_price">
        <input type="hidden" v-model="discount_price" name="discount_price">
        <input type="hidden" v-model="final" name="total_price">
        <input type="hidden" v-model="memberInfo.orders_location" name="orders_location">
        <input type="hidden" v-model="memberInfo.credit_no" name="credit_no">
        <input type="hidden" v-model="fee" name="fee">
    </form> 
    <div class="lightBox" v-if="lightBoxShow">
                <div class="lightBoxContent">
                    <div class="close" @click="lightBoxClose"></div>
                    <div class="clearAll">
                        <h2>Confirm payment</h2>
                        <p>Confirm the information is correct,if correct, the order will be save.</p>
                        <div class="btnFirst" id="btn1" data-title="Confirm" @click="confirmPay();props.nextStep();">
                        <span>Confirm</span>
                        </div>
                    </div>
                </div>
            </div>     
</template>

<style scoped lang="scss">
@import '@/css/reset.css';
@import '@/sass/style.scss';
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
@import '@/sass/component/_btn.scss';
.lightBox {
  @include lightBox();
  .lightBoxContent {
    max-height: 700px;
    .clearAll {
        text-align: left;
        margin: 30px;
        P {
            margin: 10px 0;
        }
        // button {
        //     background: transparent;
        // }
    }
  }
}
    .detail_box{
        background-color: rgba(142, 142, 142, 0.19);
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px;
        padding: 20px;
        border-radius: 10px;
        font-size: 20px;
        border-collapse: separate;
        border-spacing: 0;
        @include m($m-breakpoint){
            margin: 20px;
            height: 800px;
            font-size: 30px;
        }
        .input_box{
            input{
                margin: 0 10px;
            }
            label{
                color: #ccc;
            }
        }
        .confirm_detail{
            background-color: rgba(217, 217, 217, 0.32);
            box-sizing: border-box;
            padding: 10px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-collapse: separate;
            border-spacing: 0;
            overflow: hidden;
            tr{
                border: 1px solid rgb(125, 124, 124);
                height: 40px;
                th{
                    text-align: center;
                }
                td{
                    &:nth-child(odd){
                        width: 20px;
                    }
                    &:nth-child(even){
                        width: 250px;
                    }
                    border: 1px solid rgb(168, 168, 168);
                    text-align: left;
                    padding:20px ;
                    color: rgb(194, 194, 194);
                    font-size: 20px;                   
                    &.title{
                        width: 200px;
                        color: rgb(62, 62, 62);
                        // background-color: lighten($blue, 40%);     
                        font-weight: bold; 
                    }
                    &:not(.title){
                        text-align: center;
                    }
                }
            }
        }
    }
    .buttons{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        .btnPrimary{
            @include primaryBtn(100px);
            margin: 10px;
        }
        .btnSecond{
            @include secondBtn(100px);
            margin: 10px;
        }
    }

       
</style>