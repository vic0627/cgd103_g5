<script setup>
import { ref, onMounted, reactive } from 'vue';
import $ from 'jquery';
import cartItemComponentsVue from '@/components/cartItemComponents.vue';
import {bodyInit} from '@/composables/useOnunmounted';

bodyInit();

const props = defineProps(['nextStep','step']);

const title = reactive([
    {"name": "Product"},{"name": "Price"},{"name":"Quantity"},{"name":"Delete"}
]);
// let total = ref(0);
//數量加減//價格變動
const addCount = (index) => {
    // console.log(cartIte;
    return cartItem[index].count ++;
}
const reduceCount = (index) => {
    if(cartItem[index].count > 1){
        return cartItem[index].count --;  
    }
}
//刪除商品
const cart = ref(false); 
const Delete = (index)=> {
    cartItem[index].exist = cart.value;
    console.log(cartItem[index].exist)
}

const cartItem = reactive([
    {
        "id":1,
        "name":"Maciv 2 ZOOM",
        "description":"dsuigr fhfe djs",
        "image": "/images/cart/body_01_black _1.png",
        "price": 275,
        "count": 1,
        "exist":true,
    },
    {
        "id":2,
        "name":"Maciv 2 ZOOM",
        "description":"fwgqg qwqffw",
        "image": "/images/cart/body_03_white_1.png",
        "price": 159,
        "count": 1,
        "exist":true,
    },
])

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

let total = reactive(0);

//discount 
const discount = ref('');
const sale = ()=> {
    discount.value = '';
}
</script>
<template>
    <section>
        <div class="shopCart">
            <div class="cartFor" v-for="(item,index) in cartItem" :key="index">
                <div class="cartItem" v-show="item.exist === true">
                    <div class="cartProduct">
                        <div class="cartProduct-pic">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="cartProduct-txt">
                            <h5>{{item.name}}</h5>
                            <p>{{item.description}}</p>
                        </div>
                    </div>
                    <div class="amount-price">
                        <div class="cartQuantity">
                            <button class="qtyBtn" @click="reduceCount(index)">-</button>
                            <input type="text" min="1" v-model="item.count" class="input">
                            <button class="qtyBtn" @click="addCount(index)">+</button>
                        </div>
                        <div class="cartPrice">
                            <h6>${{item.price*item.count}}</h6>
                        </div>
                    </div>
                    <div class="cartDelete">
                        <button @click="Delete(index)" class="delete-btn"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="discount">
            <p>Discount code :</p>
            <input type="text" v-model="discount">
            <button class="discount-btn" @click="sale">Confirm</button>
        </div>
    </section> 

    <section>
        <div class="summary">
             <div class="summaryPrice">
                <h3>Summary</h3>
            </div>
            <div class="summaryPrice">
                <p>Order price</p>
                <p>$3,000.00</p>
            </div>
            <div class="summaryPrice">
                <p>Shipping</p>
                <p>$0.00</p>
            </div>
            <div class="summaryPrice">
                <p>Discount Price</p>
                <p>$300/10%</p>
            </div>
            <!-- <hr> -->
            <div class="summaryPrice">
                <p>Total Price</p>
                <p>{{total}}</p>
                <!-- <p>$2,700.00</p> -->
            </div>
            <div class="cartBtn">
                <router-link to="/shop" class="btnFirst" id="btn1" data-title="Shopping">
                    <span>Shopping</span>
                </router-link>
                <a class="btnSecond" id="btn2" data-title="Next">
                <button @click="props.nextStep()" class="button">Next</button>
                </a>
            
            </div>   
        </div>
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
                <router-link to="/shop">See more products</router-link>
            </div>
        </div>
        
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
.cart{
    padding-top: 130px;
    width: 100%;
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
    background-color: rgba(#8E8E8E, 17%);
    padding: 10px;
}

.discount {
    width: 90%;
    margin: 0 auto;
    p {
        display: inline-block;
    }
    .discount-btn {
        background: $blue;
        margin-left: 10px;
        color: #eeeeee;
        padding: 5px 15px;
        border-radius: 5px;
    }
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
        width: 90%;
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
        // &::before {
        //     content: "";
        //     width: 110%;
        //     height: 110%;
        //     position: absolute;
        //     z-index: -1;
        //     left: -5%;
        //     top: -10%;
        //     border-radius: 50%;
        //     background: #1B2026;
        // }
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
    .shopCart,.discount,.summary  {
        width: 1200px;
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
    border-bottom: 1px solid #eeeeee;
    .cartProduct {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .cartProduct-pic {
            width: 100%;
            display: flex;
            justify-content: center;
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
    .cartQuantity,.cartPrice,.cartDelete {
        display: flex;
        align-items: center;
        width: 40%;
    }
  
}
.cartProduct-txt, .cartPrice, .cartDelete, .cartQuantity {
    width: 100%;
    text-align: left;
    margin: 10px;
}
.cartDelete {
    .delete-btn {
            border-radius: 50%;
            width: 30px;
            height: 30px;
            background: transparent;
            border: 2px solid #eeeeee;
            position: relative;
            cursor: pointer;
            &::before {
                content: 'x';
                position: absolute;
                top: -10%;
                left: 30%;
                color: #eeeeee;
                font-size: 20px;
                font-family: "poppins";
            }
        }
}
@include l($l-breakpoint) {
    .cartItem {
    width: 1200px;
    margin: 20px auto;
    padding-bottom: 20px;
    background-color: transparent;
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
        
    }
}
}
</style>