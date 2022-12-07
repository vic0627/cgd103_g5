<script setup>
// import { ref, onMounted,reactive,computed,watch } from 'vue';
</script>

<template>
    <div class="meminfo">
        <div class="circle">
            <img src="@/assets/images/member/head.jpeg" alt="">
        </div>
        <div class="memcard">
            <p>SEVAGOTH PRIME</p>
            <p class="p2">mesaprime@gmail.com</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
.meminfo{
    display: flex;
    flex-grow: 1.5;
    // aspect-ratio: 16/9;
    // background-image: linear-gradient(135deg, rgb(156, 114, 15), gold);
    // background: linear-gradient(-200deg, #f9f48f, #fbc65d, #e8b443, #e4b445);
    background: linear-gradient(-200deg, #E6BA79 0.51%, rgba(173, 99, 12, 0.83) 98.54%);
    border-radius: 10px;
    .circle{
        aspect-ratio: 1/1;
        position: relative;
        top: 50px;
        left: 15px;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        background: linear-gradient(135.57deg, #4591D8 15.58%, #6723C7 82.75%);
        img{
            position: relative;
            top: 5px;
            left: 5px;
            width: 140px;
            height: 140px;
            border-radius: 50%;
        }
    }
    .memcard{
        flex-grow: 1;
        p{
            // display: block;
            margin: 80px 30px 0;
            color: #fff;
            font-size: 30px;
            font-weight: 800;
        }
        .p2{
            color: #333;
            margin-top: 10px;
            font-size: 20px;
        }
    }
}
</style>