<script setup>
import { onMounted, reactive } from 'vue';
import $ from 'jquery';
onMounted(() => {});
const circles = defineProps ({
    circle1:{
        type: String,
        default:''
    },
    circle2:{
        type: String,
        default:''
    },
    circle3:{
        type: String,
        default:''
    },
}) 

</script>

<template>
    <div class="circle1" v-if="circles.circle1===1">
      <img src="../assets/images/home/2.png" alt="">
    </div>
    <div class="circle2" v-if="circles.circle2===2">
      <img src="../assets/images/home/3.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
.circle1 {
    position: absolute;
    z-index: -1;
    left: 50%;
    bottom: 30%;
    img {
      width: 100%;
    }
    @include l($l-breakpoint){
        left: 55%;
        bottom: -30%;
        rotate: -5deg;
        img {
          width: 100%;
        }
    }
}
.circle2 {
    position: absolute;
    z-index: -1;
    left: 65%;
    bottom: -212%;
    img {
      width: 100%;
    }
    @include l($l-breakpoint){
        left: 65%;
        bottom: -257%;
        rotate: -5deg;
        img {
          width: 100%;
        }
    }
}
</style>