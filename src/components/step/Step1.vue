<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import {bodyInit} from '@/composables/useOnunmounted';
import { NAlert} from 'naive-ui';
import axios from 'axios';
bodyInit();
const explode = ref('');
const props = defineProps(['nextStep','step']);
const title = reactive([
    {"name": "Product"},{"name": "Price"},{"name":"Quantity"},{"name":"Delete"}
]);
const cartItem = ref([]);
const cusBtn = ref(true);
const cartList = computed(() => cartItem.value)
const session = ()=> {
    const strings = sessionStorage.getItem('cartList');
    if(strings==undefined)return;
    if(strings.includes('111')){
        cusBtn.value = false;
    }else{
        
    }
    let substrs = strings.substr(0, strings.length).split(',')
    getcartItem(substrs);
    cartItem.value = JSON.parse(`[${explode.value}]`);
}
//抓session裡面的存放的商品放進購物車
const getcartItem = (substrs)=>{
  for(let i=0;i<substrs.length;i++){
    if(i===0){
      explode.value = sessionStorage.getItem(substrs[i])
    }else{
      explode.value += ',' + sessionStorage.getItem(substrs[i]);
    }
  }
}
//判斷session裡面是否有東西 沒有就文字顯示沒東西
const storgeNull = reactive(sessionStorage.getItem('cartList'))
//數量加減//價格變動
const sums = ref(0);
const sum = computed(()=>{
    let total = ref(0);
        for(const items in cartList.value){
            total.value += cartList.value[items]['price']*cartList.value[items]['amount'];
        }
        sessionStorage.setItem('sums', total.value)
        sums.value = total.value
        return total;
})
//總價判斷是否有折扣 有就乘折扣  沒有就不乘折扣
const finalprice = ref(0);
const final = computed(()=>{
    let totalprice = ref(0);
        for(const items in cartList.value){
            if(discPercent.value != 0){
                totalprice.value += cartList.value[items]['price']*cartList.value[items]['amount']*discPercent.value;
            }else{
                totalprice.value += cartList.value[items]['price']*cartList.value[items]['amount']
            }
        }
        sessionStorage.setItem('final', totalprice.value)
        finalprice.value = totalprice.value
        return totalprice
})
const addCount = (index) => {
    cartList.value[index].amount +=1;
    sessionStorage.setItem(`${cartList.value[index].id}`,`{"id":"${cartList.value[index].id}","name":"${cartList.value[index].name}","amount":${cartList.value[index].amount},"price":${cartList.value[index].price},"img":"${cartList.value[index].img}"}`)
}
const reduceCount = (index) => {
    if(cartList.value[index].amount > 1){
        cartList.value[index].amount --; 
        sessionStorage.setItem(`${cartList.value[index].id}`,`{"id":"${cartList.value[index].id}","name":"${cartList.value[index].name}","amount":${cartList.value[index].amount},"price":${cartList.value[index].price},"img":"${cartList.value[index].img}"}`) 
    }
}
//刪除商品
const cart = ref(false); 
const Delete = (index)=> {
    //抓到按刪除鍵的key就刪除session資訊
    //必須先刪除cartList裡面的東西,再刪除個別的id,不然如果先移除id會抓不到key值
    sessionStorage['cartList'] = sessionStorage['cartList'].replace(`${cartList.value[index].id},`,``)
    sessionStorage.removeItem(cartList.value[index].id)
    cartList.value.splice(index,1);
}
//建議商品
const suggest = reactive([
    {
        "title": "MAVIC PRO 1",
        "image": "/images/cart/body_01_red_1.png",
    },
    {
        "title": "MAVIC PRO 2",
        "image": "/images/cart/body_02_blue_1.png",
    },
    {
        "title": "MAVIC PRO 3",
        "image": "/images/cart/body_03_black_1.png",
    },
])
//discount 
const discount = ref('');
const discPercent = ref('0');
const discConfirm = () => {
    for(let i=0;i<=discRows.value.length;i++){
        console.log(discRows.value[i].disc_code)
        if(discount.value === discRows.value[i].disc_code){
            discPercent.value = discRows.value[i].disc_off;
            sessionStorage.setItem('discount',discPercent.value)
            sessionStorage.setItem('disc_no',discRows.value[i].disc_no)
            discount.value = '';
            alert('恭喜折價');
            break;         
        }else{
            alert('無此優惠編號')
            discount.value = '';
            // discount.value = null;
            sessionStorage.setItem('discount',discPercent.value)
            sessionStorage.setItem('disc_no', discount.value)
            break;                    
        }
    } 
}
//下一步確認
const check = ()=> {
    if(sessionStorage.getItem('cartList') === null){
        alert("請購買商品")
    }
}
//取得資料庫資料
const discRows = ref([]);
    const getDisc = () => {
    fetch("http://localhost/CGD103-G5/public/g5PHP/getDiscCart.php")
    .then(res => res.json())
    .then(json => {
        discRows.value = json;
    }
    )
}
onMounted(()=>{
    getDisc();
    //mounted裡面不要使用const去做定義 有區域問題
    session();
});
const showBtn = () => {

};
</script>
<template>
    <section>
        <div class="shopCart">
            <div v-if="storgeNull == null">
                <div class="empty">
                    <h3>Your bag is empty.</h3>
                    <p>Sign in to see if you have any saved items. Or continue shopping.</p>
                </div>
            </div>
            <div class="cartFor" v-for="(item,index) in cartList" :key="index">
                <div class="cartItem">
                    <div class="cartProduct">
                        <div class="cartProduct-pic">
                            <img v-if="item.img != ''" :src="`/dist/assets/${item.img}`" alt="">
                        </div>
                        <div class="cartProduct-txt">
                            <h5>{{item.name}}</h5>
                        </div>
                    </div>
                    <div class="amount-price">
                        <div class="cartQuantity">
                            <button class="qtyBtn" @click="reduceCount(index)" v-if="cusBtn">-</button>
                            <input type="text" min="1" v-model="item.amount" class="input">
                            <button class="qtyBtn" @click="addCount(index);" v-if="cusBtn">+</button>
                        </div>
                        <div class="cartPrice">
                            <h6>${{item.price*item.amount}}</h6>
                        </div>
                    </div>
                    <div class="cartDelete">
                        <button @click="Delete(index)" class="delete-btn"></button>
                    </div>
                </div>
            </div>
            <div class="discount"  v-if="storgeNull != null">
                <p>Discount code :</p>
                <input type="text" v-model="discount">
                <button class="discount-btn" @click="discConfirm()">Confirm</button>
            </div>
        </div>
        <div class="total">
            <div class="summary">
                 <div class="summaryPrice">
                    <h3>Summary</h3>
                </div>
                <div class="summaryPrice">
                    <p>Order price</p>
                    <p>${{sum}}</p>
                </div>
                <div class="summaryPrice">
                    <p>Assembly cost</p>
                    <p>$0</p>
                </div>
                <div class="summaryPrice">
                    <p>Discount</p>
                    <p>{{discPercent}}</p>
                </div>
                <div class="summaryPrice">
                    <p>Total Price</p>
                    <p>${{final}}</p>
                </div>
                <div class="cartBtn">
                    <router-link to="/shop" class="btnFirst" id="btn1" data-title="Shop">
                        <span>Shop</span>
                    </router-link>
                    <!-- <button @click="props.nextStep();submitOrder()" class="button"><a class="btnSecond" id="btn2" data-title="Next">Next</a></button> -->
                    <button @click="props.nextStep();check()" class="button"><a class="btnSecond" id="btn2" data-title="Next">Next</a></button>
                </div>
            </div>
        </div>
    </section>
    <section>
    </section> 
        <div class="suggest-title">
            <h3>Guess You May Like</h3>
        </div>
        <div class="suggest">
            <div class="suggest-item" v-for="item in suggest" :key="item.title">
                <h6>{{item.title}}</h6>
                <div class="suggest-item-pic">
                    <img :src="item.image" :alt="item.title">
                </div>
                <div class="suggest-item-btn">
                    <router-link to="/cart" class="btnFirst" id="btn1" data-title="Add cart">
                        <span>Add cart</span>
                    </router-link>
                </div>
            </div>
            <div class="suggest-more">
                <router-link to="/shop"><button class="button-read" style="vertical-align:middle"><span>See more products</span></button></router-link>
            </div>
        </div>
        
    <footerComponentsVue />
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
@import '@/css/reset.css';
$center: center;
$left: left;
$l-w:1200px;
@mixin titleStyle($center){
    text-align: $center;
}
@mixin divCenter($l-w, $center){
    width: $l-w;
    margin: 20px auto;
    text-align: $center;
}
@mixin flexCenter($center){
    display: flex;
    justify-content: $center;
}
section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.alert {
    width: 300px;
}
.empty {
    text-align: left;
    margin: 20px;
}
.cart{
    padding-top: 130px;
    width: 100%;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: flex-start;
    .cartTitle {
        text-align: center;
    }
    .itemTitle {
            display: flex;
            width: 95%;  
            margin: 20px auto;
            justify-content: center;
            h4 {
                font-size: 18px;
            }
            .itemTitle-first {
                width: 25%;
                @include flexCenter($center);
            }
        }
}
.shopCart {
    margin: 0 auto;
    border-radius: $img-radius;
    width: 90%;
    height: 100%;
    background-color: transparent;
}
.discount {
    width: 90%;
    margin: 0 auto;
    text-align: left;
    padding: 20px;
    p {
        display: inline-block;
        font-size: 28px;
    }
    input {
        border-radius: 5px;
        margin: 0 5px;
        width: 150px;
    }
    .discount-btn {
        background: $blue;
        margin: 5px 10px;
        color: #eeeeee;
        padding: 5px 15px;
        border-radius: 5px;
        cursor: pointer;
        @include caption-s-title($caption-s-p, $txt-color, $spacing-h6);
        font-size: 18px;
    }
}
.total {
    width:85%;
}
.summary {
    margin: 0 auto;
    border-radius: $img-radius;
    width: 90%;
    padding: 20px;
    background-color: rgba(#8E8E8E, 17%);
    .summaryPrice {
        display: flex;
        width: 90%;
        justify-content: space-between;
        margin: 20px auto;
        &:nth-child(4) {
            padding-bottom: 20px;
            border-bottom: 3px solid #ccc;
        }
    }
    .cartBtn {
        display: flex;
        justify-content: space-between;
        width: 95%;
        margin: auto;
    }
    .button{
        background-color: transparent;
        color: $fff;
        border: none;
        font-size: 20px;
    }
}
.suggest-title {
    text-align: center;
    margin-top: 100px;
}
.suggest {
    width: 100%;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: $center;
    .suggest-item {
        width: 100%;
        margin: 10px 0;
        text-align: center;
        justify-content: center;
        position: relative;
        .suggest-item-pic {
            width: 100%;
            height: 300px;
            display: flex;
            justify-content: center;
            align-content: center;
            img {
                // height: 300px;
                width:70%;
                object-fit: contain;
                overflow: hidden;
            }
        }
        .suggest-item-btn {
            @include flexCenter($center);
        }
    }
} 
@include m($m-breakpoint){
    .suggest {
        width: 90%;
        .suggest-item {
           width: 50%;
           .suggest-item-pic {
            height: 400px;
           }
        }
    }
}
@include l($l-breakpoint){
    .total {
    width: 30%;
}

    .shopCart,.discount,.summary  {
        width: 1200px;
    }
    .shopCart {
        width: 70%;
    }
    .suggest {
        width: 1200px;
        .suggest-item {
           width: 33.3333%;
           .suggest-item-pic {
                height: 300px;
           }
        }
    }
   
}
//---------------------------------

.cartItem {
    width: 90%;
    margin: 30px auto;
    background-color: rgba(#8E8E8E, 17%);
    border-radius: 10px;
    // border-bottom: 1px solid #eeeeee;
    .cartProduct {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .cartProduct-pic {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 40px 10px 10px;
            img {
                width: 60%;
                object-fit: cover;
            }
        }
    }
    .amount-price {
        display: flex;
        width: 100%;
        .cartPrice,.cartQuantity {
            width: 50%;
        }
        .cartQuantity {
            .input {
                width:20%;
                background: transparent;
                border: none;
                font-size: 24px;
                color: #eeeeee;
                text-align: center;
            }
            .qtyBtn {
                background: transparent;
                border: none;
                color: #eeeeee;
                font-size: 40px;
            }
        }
        .cartPrice {
            display: flex;
            justify-content: flex-end;
        }
    }
    .cartQuantity,.cartPrice {
        display: flex;
        align-items: center;
        width: 40%;
    }
  
}
.cartProduct-txt, .cartPrice, .cartDelete, .cartQuantity {
    width: 100%;
    text-align: left;
    margin: 10px 20px;
}
.cartDelete {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    .delete-btn {
            border-radius: 50%;
            width: 30px;
            height: 30px;
            background: transparent;
            border: 2px solid #eeeeee;
            position: relative;
            cursor: pointer;
            &::before {
                content: '\2716';
                position: absolute;
                top: -5%;
                left: 22%;
                color: #eeeeee;
                font-size: 18px;
                font-family: "poppins";
            }
        }
}
@include l($l-breakpoint) {
    .cartItem {
    width: 1200px;
    margin: 20px auto;
    display: flex;
    // flex-wrap: wrap;
    position: relative;
    z-index: 2;
    .cartProduct {
        width: 700px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .cartProduct-pic {
            width: 40%;
            img {
                width: 90%;
                object-fit: cover;
            }
        }
        .cartProduct-txt {
            width: 40%;
        }
        
    }
    .amount-price {
        width: 350px;
        justify-content: space-evenly;
        .cartPrice,.cartQuantity {
            @include flexCenter($center);
        }
    }
    .cartDelete {
        width: 150px;
        padding-bottom: 0px;
    }
}

//------------------------
 .cartItem {
    width: 95%;
    margin: 20px auto;
    display: flex;
    // flex-wrap: wrap;
    position: relative;
    z-index: 2;
    .cartProduct {
        width: 700px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .cartProduct-pic {
            width: 40%;
            img {
                width: 90%;
                object-fit: cover;
            }
        }
        .cartProduct-txt {
            width: 40%;
        }
        
    }
    .amount-price {
        width: 350px;
        justify-content: space-evenly;
        .cartPrice,.cartQuantity {
            @include flexCenter($center);
        }
        .cartQuantity {
            width: 175px;
        }
        .cartPrice {
            width: 100px;
            h6 {
                font-size: 24px;
            }
        }
    }
    .cartDelete {
        width: 100px;
        padding-bottom: 0px;
    }
}
.total {
    padding-top: 20px;
}
.summary {
    width: 88%;
}
.button {
    width: 140px;
}
#btn1 {
    @include secondBtn(140px);
}
#btn2 {
    @include primaryBtn(100px);
}
}


/*button-read*/
.button-read {
    display: inline-block;
    border-radius: 4px;
    background-color: transparent;
    border: none;
    color: #3a3a3a;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    width: 300px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}

.button-read span {
    margin: auto;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.8s;
    /* text-decoration: underline; */
}

.button-read span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -30px;
    transition: 0.8s;
}

.button-read:hover span {
    padding-left: 25px;
}

.button-read:hover span:after {
    opacity: 1;
    right: -50;
}
</style>