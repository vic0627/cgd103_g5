<script setup>
import { ref, reactive,onMounted } from 'vue';
import $ from 'jquery';
import navComponentsVue from '@/components/navComponents.vue';
import OrderStepVue from '../components/orderStep.vue';

</script>
<template>   
    <section class="complete_order">
        <h2>SHOPPING CART</h2>
        <OrderStepVue /> 
        <div class="check_icon">
            <img src="../assets/images/shop/checkIcon.png" alt="checkIcon">
        </div>
        <div class="some_words">
            <h3>Congratulation</h3>
            <h4>Wish you like our product~</h4>
            <h5>Wish see you again</h5>
        </div>
    </section>

</template>

<style scoped lang="scss">
    .complete_order{
        max-width: 800px;
        // height: 100vh;
        margin: 0 auto;
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
                width: 50%;
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

</style>