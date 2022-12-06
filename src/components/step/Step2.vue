<script setup>
import { ref, reactive,onMounted } from 'vue';
import $ from 'jquery';
import navComponentsVue from '@/components/navComponents.vue';

const props = defineProps(['nextStep','step']);
// console.log(props.step);
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
                <p>Confirm Detail</p>
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
                <p>Payment</p>
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
                <a class="btnPrimary" data-title="Pay Now">
                    <button @click="props.nextStep()">
                        Pay Now
                    </button>
                </a>
            </div>
    </section>           
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
@import '@/sass/component/_btn.scss';

    .detail_box{
        max-width: 800px;
        height: 800px;
        background-color: rgba(142, 142, 142, 0.19);
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 20px auto;
        padding: 0 10px;
        border-radius: 10px;
        .input_box{
            width: 100%;
            display: flex;
            justify-content: center;
            input{
                margin: 0 10px;
            }
            label{
                color: #ccc;
            }
        }
        .confirm_detail{
            background-color: rgba(217, 217, 217, 0.32);
            max-width: 800px;
            margin: 20px auto;
            table-layout: fixed;
            tr{
                border: 1px solid #ccc;
                // line-height: 30px;
                &:nth-child(even){
                        background-color: #98989880;
                    }
                td{
                    &.title{
                        color: #333;   
                        
                    }
                    text-align: left;
                    // border: 1px solid #ccc;
                    padding: 5px ;
                    color: rgb(228, 229, 225);                   
                    font-size: 20px;
                }
            }
        }
        .payment{
            background-color: #98989880;
            max-width: 500px;
            // padding: 20px;
            margin: 20px auto;
            @include m($m-breakpoint){
                width:65% ;
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
        .btnPrimary{
            @include primaryBtn(100px);
            button{
                background-color: transparent;
                color: $fff;
                border: none;
            }
        }
    }

       
</style>