<script setup>
import { ref, reactive,onMounted } from 'vue';
import $ from 'jquery';
import {bodyInit} from '@/composables/useOnunmounted';

bodyInit();

const props = defineProps(['nextStep','step']);

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
    <section class="detail_box">
            <template  v-for="info in customer2" :key="info.custNo">
                <h3>Confirm Detail</h3>
                <div class="input_box">
                    <input type="checkbox" name="checkbox" id="copyMemInfo" value="">
                    <label for="copyMemInfo">same as membership information</label>
                </div>
                <table class="confirm_detail">
                    <tr>
                        <td class="title">First Name</td>
                        <td>{{info.FirstName}}</td>
                        <td class="title">Last Name</td>
                        <td>{{info.LastName}}</td>
                    </tr>
                    <tr>
                        <td class="title">Phone</td>
                        <td colspan="3">{{info.Phone}}</td>
                    </tr>
                    <tr>
                        <td class="title">Order List</td>
                        <td>{{info.OrderList}}</td>
                        <td colspan="2">BUY {{info.OrderQty}} Units</td>
                    </tr>
                    <tr>
                        <td class="title">Address</td>
                        <td colspan="3">{{info.Address}}</td>
                    </tr>
                </table>
                <h3>Payment</h3>
                <table class="payment">
                    <tr>
                        <td class="title">First Name</td>
                        <td>{{info.FirstName}}</td>
                        <td class="title">Last Name</td>
                        <td>{{info.LastName}}</td>
                    </tr>
                    <tr>
                        <td class="title">Credit Card No.</td>
                        <td colspan="3">{{info.CreditCardNo}}</td>
                    </tr>
                </table>
            </template>
            <div class="buttons">
                <button @click="props.nextStep()">
                    <a class="btnPrimary" data-title="Pay Now">Pay Now</a>
                </button>
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
        height: 1000px;
        background-color: rgba(142, 142, 142, 0.19);
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0px;
        padding: 10px;
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
            margin: 20px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-collapse: separate;
            border-spacing: 0;
            overflow: hidden;
            tr{
                border: 1px solid #ccc;
                line-height: 40px;
                &:nth-child(even){
                    background-color: #98989880;
                }
                td{
                    text-align: left;
                    padding: 5px ;
                    color: rgb(228, 229, 225);
                    font-size: 20px;                   
                    &.title{
                        color: #333;      
                    }
                }
            }
        }
        .payment{
            background-color: #98989880;
            max-width: 100%;
            margin: 20px ;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-collapse: separate;
            border-spacing: 0;
            overflow: hidden;
            @include m($m-breakpoint){
                max-width: 100%;
            }
            tr{
                border: 1px solid #ccc;
                line-height: 30px;
                &:nth-child(even){
                    background-color: #98989880;
                }
                td{
                    &.title{
                        color: #333;
                    }
                    text-align: left;
                    padding: 10px;
                    color: rgb(228, 229, 225);
                    font-size: 20px;
                }
            }
        }

    }
    .buttons{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        button{
            background: transparent;
            border: none;
            .btnPrimary{
                @include primaryBtn(100px);
                color: $fff;               
                font-size: 20px;
            }
        }
    }

       
</style>