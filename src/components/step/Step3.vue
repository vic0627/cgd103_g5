<script setup>
import { ref, reactive,onMounted } from 'vue';
import {bodyInit} from '@/composables/useOnunmounted';

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
// const cartList = computed(() => cartItem.value);
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
//傳訂單明細
const submitOrdItem = ()=> {
    orders_no.value = sessionStorage.getItem('order_no');
    item_discount.value = sessionStorage.getItem('discount');
    item_sub.value =sessionStorage.getItem('final');
    console.log(orders_no.value);
    for(let i=0;i<cartItem.value.length;i++){
        const payload = {
            orders_no: Number(orders_no.value),
            prd_no: Number(cartItem.value[i].id),
            item_quantity: Number(cartItem.value[i].amount),
            item_price: Number(cartItem.value[i].price),
            item_sub: Number(item_sub.value),
            item_discount: Number(item_discount.value),
        };
        fetch("/dist/g5PHP/insertNmorditem.php", {
            method: "POST",
            body: new URLSearchParams(payload),
        }).then(res=>{
            res.text();
        })
    }
}
onMounted(()=>{
    session();
    submitOrdItem();
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
    <form action="post">     
        <input type="hidden" v-model="orders_no" name="orders_no">
        <input type="hidden" v-model="prd_no" name="prd_no">
        <input type="hidden" v-model="item_quantity" name="item_quantity">
        <input type="hidden" v-model="item_price" name="item_price">
        <input type="hidden" v-model="item_sub" name="item_sub">
        <input type="hidden" v-model="item_discount" name="item_discount">
    </form>
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