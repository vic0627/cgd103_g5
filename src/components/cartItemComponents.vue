<script setup>
import { ref, onMounted, reactive } from 'vue';
//數量加減
let count = ref(1);
const addCount = (index) => {
    // console.log(count);
    return count.value += 1;
}
const reduceCount = () => {
    if(count.value > 1){
        return count.value -= 1;
    }
}
//價格變動
const price = ref(150);
//刪除商品
const cart = ref(1); 
console.log(cart.value);
const Delete = (index)=> {
    cart.value = index;
    console.log(cart.value);
}

</script>

<template>
    <div class="cartItem" v-if="cart === 1">
        <div class="cartProduct">
            <div class="cartProduct-pic">
                <img src="../assets/images/home/fly.png" alt="">
            </div>
            <div class="cartProduct-txt">
                <h5>Maciv 2 ZOOM</h5>
                <p>dsuigr fhfe djs</p>
            </div>
        </div>
        <div class="amount-price">
            <div class="cartQuantity">
                <button @click="reduceCount">-</button>
                <input type="number" min="1" v-model="count">
                <button @click="addCount(index)">+</button>
            </div>
            <div class="cartPrice">
                <h6>${{price*count}}</h6>
            </div>
        </div>
        <div class="cartDelete">
            <button @click="Delete(2)" class="delete-btn"></button>
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
            input {
                width:20%;
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
