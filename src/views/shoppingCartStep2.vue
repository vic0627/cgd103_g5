<script setup>
import { ref, reactive,onMounted } from 'vue';
import $ from 'jquery';
import navComponentsVue from '@/components/navComponents.vue';

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
            "CreditCardNo":"01111 1111 1111 1111"  
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
    <section class="member_detail">
        <h2>SHOPPING CART</h2>  
        <p>Confirm Detail</p>
        <div class="check">
            <input type="checkbox" name="" id="copyMemInfo">
            <label for="copyMemInfo">same as membership infomation</label>
        </div>
        <template  v-for="info in customer2" :key="info.custNo">
            <table class="confirm_detail">
                <tr>
                    <td>First Name</td>
                    <td>{{info.FirstName}}</td>
                    <td>Last Name</td>
                    <td>{{info.LastName}}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td colspan="3">{{info.Phone}}</td>
                </tr>
                <tr>
                    <td>Order List</td>
                    <td>{{info.OrderList}}</td>
                    <td colspan="2">BUY {{info.OrderQty}} Units</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td colspan="3">{{info.Address}}</td>
                </tr>
            </table>
            <p>Payment</p>
            <table class="payment">
                <tr>
                    <td>First Name</td>
                    <td>{{info.FirstName}}</td>
                    <td>Last Name</td>
                    <td>{{info.LastName}}</td>
                </tr>
                <tr>
                    <td>Credit Card No.</td>
                    <td colspan="3">{{info.CreditCardNo}}</td>
                </tr>
            </table>
        </template>
    </section>
</template>

<style scoped lang="scss">
    .member_detail{
        max-width: 1200px;
        margin: 0 auto;  
        input,label{
            width: 100%;
            color: #f5f5f5;
            display: flex;
            flex-direction: column;
            justify-content: center; 
            
        }
        h2,p{
            width: 100%;
            text-align: center;
            margin: 20px auto;
        }
        .confirm_detail{
            background-color: #ffffff80;
            max-width: 800;
            padding: 20px auto;
            margin: 20px auto;
            // border: 1px solid brown;
            tr{
                // border: 1px solid brown;
                line-height: 50px;
                &:nth-child(even){
                        background-color: #00000080;
                    }
                td{
                    // border: 1px solid brown;
                    padding: 20px;
                    color: #f5f5f5;
                    font-size: 20px;
                }
            }
        }
        .payment{
            background-color: #ffffff80;
            max-width: 800px;
            padding: 20px auto;
            margin: 20px auto;
            // border: 1px solid brown;
            tr{
                // border: 1px solid brown;
                line-height: 50px;
                &:nth-child(even){
                        background-color: #00000080;
                    }
                td{
                    // border: 1px solid brown;
                    padding: 20px;
                    color: #f5f5f5;
                    font-size: 20px;
                }
            }
        }
    }

       
</style>