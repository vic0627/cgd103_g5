<script setup>
import { ref, onMounted, reactive } from 'vue';
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

</script>

<template>
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
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
.cartItem {
    width: 90%;
    border-bottom: 2px solid #ccc;
    margin: 30px auto;
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
    border-bottom: 2px solid #ccc;
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
