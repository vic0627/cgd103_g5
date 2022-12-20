<script setup>
import { ref, reactive,onMounted } from 'vue';
import $ from 'jquery';
import {bodyInit} from '@/composables/useOnunmounted';

bodyInit();

const props = defineProps(['prevStep','nextStep','step']);
const memRows = ref([]);
const getMemberInfo = () =>{
    //取得會員資料
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            memRows.value = JSON.parse(xhr.responseText);
        }
    }
    xhr.open("get","/dist/g5PHP/getMemInfo.php",true);
    xhr.send(null);
}
onMounted(()=>{
    getMemberInfo();
})
</script>
<template>   
    <section class="detail_box">
            <template  v-for="memRow in memRows" :key="memRow">
                <table class="confirm_detail">
                    <tr>
                        <th colspan="4">Confirm Detail</th>
                    </tr>
                    <tr>
                        <td class="title">Member Grade</td>
                        <td colspan="3">{{memRow.mem-grade }}</td>
                    </tr>
                    <tr>
                        <td class="title">First Name</td>
                        <td>{{memRow.mem_first_name}}</td>
                        <td class="title">Last Name</td>
                        <td>{{memRow.mem_last_name}}</td>
                    </tr>
                    <tr>
                        <td class="title">Phone</td>
                        <td >{{memRow.phone}}</td>
                        <td class="title">Gender</td>
                        <td>{{memRow.mem_gender}}</td>
                    </tr>
                    <tr>
                        <td class="title">Order List</td>
                        <td>EFPV Avata advance bundle BUY 4 Units</td>
                        <!-- <td colspan="2"></td> -->
                    </tr>
                    <tr>
                        <td class="title">City</td>
                        <td colspan="3">{{memRow.city}}</td>
                    </tr>
                    <tr>
                        <td class="title">Address</td>
                        <td colspan="3">{{memRow.address}}</td>
                    </tr>
                    <tr>
                        <td class="title">Credit Card No.</td>
                        <td colspan="3">{{memRow.credit_no}}</td>
                    </tr>
                </table>
            </template>
            <div class="buttons">
                <div class="btnSecond" data-title="Back" @click="props.prevStep()"><span>Back</span></div>
                <div class="btnPrimary" data-title="Pay" @click="props.nextStep()"><span>Pay</span></div>
            </div>
    </section>           
</template>

<style scoped lang="scss">
@import '@/css/reset.css';
@import '@/sass/style.scss';
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
@import '@/sass/component/_btn.scss';

    .detail_box{
        // height: 500px;
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
            // width: 100%;
            // display: flex;
            // justify-content: center;
            input{
                margin: 0 10px;
            }
            label{
                color: #ccc;
            }
        }
        .confirm_detail{
            background-color: rgba(217, 217, 217, 0.32);
            max-width: 100%;
            padding: 20px;
            margin: 20px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-collapse: separate;
            border-spacing: 0;
            overflow: hidden;
            tr{
                border: 1px solid rgb(125, 124, 124);
                line-height: 40px;
                &:nth-child(even){
                    background-color: #98989880;
                }
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
                    padding: 5px ;
                    color: rgb(228, 229, 225);
                    font-size: 20px;                   
                    &.title{
                        color: #333;     
                        font-weight: bold; 
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