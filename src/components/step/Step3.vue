<script setup>
import { ref, reactive,onMounted } from 'vue';
import {bodyInit} from '@/composables/useOnunmounted';

bodyInit();


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