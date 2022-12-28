<script setup>
import { ref, reactive,onMounted } from 'vue';
import {bodyInit} from '@/composables/useOnunmounted';
import axios from 'axios';
import {BIND_URL } from "../../composables/useCommon";
bodyInit();
const orders_no =ref('');
const prd_no =ref('');
const item_quantity =ref('');
const item_price = ref('');
const item_sub =ref('');
const item_discount =ref('');
const explode = ref('');
//
const cartItem = ref([]);
const session = ()=> {
    const strings = sessionStorage.getItem('cartList')
    const substrs = strings.substr(0, strings.length).split(',')
    getcartItem(substrs);
    cartItem.value = JSON.parse(`[${explode.value}]`);
}
const getcartItem = (substrs)=>{
  for(let i=0;i<substrs.length;i++){
    if(i===0){
      explode.value = sessionStorage.getItem(substrs[i])
    }else{
      explode.value += ',' + sessionStorage.getItem(substrs[i]);
    }
  }
}
//抓最新訂單編號之後再去呼叫傳送訂單明細
const maxOrder = ref('');
const getmaxOrder = ()=>{
    if(sessionStorage['cartList'].includes('111')){
        axios.get(`${BIND_URL('getmaxCm.php','g5PHP')}`)
        .then(res=> {
            maxOrder.value = res.data
            sessionStorage.setItem('order_no',maxOrder.value.order_no);
        }).then(res=>{
            submitOrdItem();
        })
    }else{
        axios.get(`${BIND_URL('getmaxNm.php','g5PHP')}`)
        .then(res=> {
            maxOrder.value = res.data
            sessionStorage.setItem('order_no',maxOrder.value.order_no);
        }).then(res=>{
            submitOrdItem();
        })
    }
}
//傳訂單明細
const submitOrdItem = ()=> {
    if(sessionStorage['cartList'].includes('111')){
        orders_no.value = sessionStorage.getItem('order_no');
        item_discount.value = sessionStorage.getItem('discount');
        item_sub.value =sessionStorage.getItem('final');
        for(let i=0;i<cartItem.value.length;i++){
            const payload = {
                orders_no: Number(orders_no.value),
                prd_no: Number(cartItem.value[i].id),
                item_quantity: Number(cartItem.value[i].amount),
                item_price: Number(cartItem.value[i].price),
                item_sub: Number(item_sub.value),
                item_discount: Number(item_discount.value),
            };
            fetch(`${BIND_URL('insertCmorditem.php','g5PHP')}`, {
                method: "POST",
                body: new URLSearchParams(payload),
            }).then(res=>{
                res.text();
            }).then(res=>{
                sessionStorage.clear();
            })
        }
    }else{
        orders_no.value = sessionStorage.getItem('order_no');
        item_discount.value = sessionStorage.getItem('discount');
        item_sub.value =sessionStorage.getItem('final');
        for(let i=0;i<cartItem.value.length;i++){
            const payload = {
                orders_no: Number(orders_no.value),
                prd_no: Number(cartItem.value[i].id),
                item_quantity: Number(cartItem.value[i].amount),
                item_price: Number(cartItem.value[i].price),
                item_sub: Number(item_sub.value),
                item_discount: Number(item_discount.value),
            };
            fetch(`${BIND_URL('insertNmorditem.php','g5PHP')}`, {
                method: "POST",
                body: new URLSearchParams(payload),
            }).then(res=>{
                res.text();
            }).then(res=>{
                sessionStorage.clear();
            })
        }
    }
}
onMounted(()=>{
    session();
    getmaxOrder();
})
</script>
<template> 
    <section class="complete_order">
        <div class="check_icon">
            <img src="@/assets/images/shop/checkIcon.png" alt="checkIcon">
        </div>
        <div class="some_words">
            <h3>Congratulation!!!</h3>
            <h4>Wish you like our products</h4>
            <h5>Wish see you again soon</h5>
        </div>
        <p class="back">
            <router-link class="anchor" to="/home">
                back to home
            </router-link>
        </p>
    </section>
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
    .complete_order{
        margin: 0 auto;
        padding: 10px;
        text-align: center;
        h2{
            width: 100%;
            margin: 20px;
            color: #f5f5f5;
        }
        .check_icon{
            max-width: 1200px;
            margin: 20px;
            padding: 20px;
            margin: 0 auto;
            background-color: rgba(142, 142, 142, 0.19);
            border-radius: 10px;
            img{
                width: 30%;
                padding: 20px;
            }
        }
        .some_words{
            max-width: 1200px;
            margin: 0 auto;
            background-color: rgba(142, 142, 142, 0.19);
            h3,h4,h5{
                padding: 20px;
            }
        }
    }
    .back{
        color: #f5f5f5;
        line-height: 200px;
        font-size: 24px;
        text-decoration: underline;
        @include m($m-breakpoint){
            font-size: 30px;
        }
    }

</style>