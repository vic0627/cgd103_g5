<script setup>
import { ref, onMounted, reactive } from 'vue';
import $ from 'jquery';
import navComponentsVue from '@/components/navComponents.vue';
import cartItemComponentsVue from '@/components/cartItemComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';

const title = reactive([
    {"name": "Product"},{"name": "Price"},{"name":"Quantity"},{"name":"Delete"}
]);

// const isOpen = ref(true);


//discount 
const discount = ref('');
const sale = ()=> {
    discount.value = '';
}
</script>

<template>
    <navComponentsVue />
    <div class="cart">
        <div class="cartTitle">
            <h2>SHOPPING CART</h2>
        </div>
    </div>
    <section>
        <div class="shopCart">
            <cartItemComponentsVue />
            <cartItemComponentsVue />
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
            <!-- <h3>Summary</h3> -->
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
                <p>$2,700.00</p>
            </div>
            <div class="cartBtn">
                <a href="#" class="btnFirst" id="btn1" data-title="Keep Shopping">
                    <span>Keep Shopping</span>
                </a>
                <a href="#" class="btnSecond" id="btn2" data-title="Next">
                    <span>Next</span>
                </a>
            </div>   
        </div>
    </section>
        <div class="suggest-title">
            <h3>Guess You May Like</h3>
        </div>
        <div class="suggest">
            <div class="suggest-item">
                <h6>MAVIC PRO</h6>
                <div class="suggest-item-pic">
                    <img src="../assets/images/shop/body_01.png" alt="">
                </div>
                <div class="suggest-item-btn">
                    <a href="#" class="btnFirst" id="btn1" data-title="Add cart">
                    <span>Add cart</span>
                    </a>
                </div>
            </div>
            <div class="suggest-item">
                <h6>MAVIC PRO</h6>
                <div class="suggest-item-pic">
                    <img src="../assets/images/shop/body_02.png" alt="">
                </div>
                <div class="suggest-item-btn">
                    <a href="#" class="btnFirst" id="btn1" data-title="Add cart">
                    <span>Add cart</span>
                    </a>
                </div>
            </div>
            <div class="suggest-item">
                <h6>MAVIC PRO</h6>
                <div class="suggest-item-pic">
                    <img src="../assets/images/shop/body_03.png" alt="">
                </div>
                <div class="suggest-item-btn">
                    <a href="#" class="btnFirst" id="btn1" data-title="Add cart">
                    <span>Add cart</span>
                    </a>
                </div>
            </div>
            <div class="suggest-more">
                <router-link to="/shop">See more products</router-link>
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
    border-radius: $img-radius $img-radius 0 0;
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
</style>