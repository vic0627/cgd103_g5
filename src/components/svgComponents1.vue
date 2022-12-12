<script setup>
import { onMounted, reactive } from "vue";
import $ from "jquery";
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
    circle4:{
        type: String,
        default:''
    },
    circle5:{
        type: String,
        default:''
    },
}) 

</script>

<template>
    <div class="circle1" v-if="circles.circle1 === 1">
        <!-- <img src="../assets/images/home/2.png" alt=""> -->
    </div>
    <div class="circle2" v-if="circles.circle2 === 2">
        <img src="../assets/images/home/3.png" alt="">
    </div>
    <div class="circle3" v-if="circles.circle3 === 3">
        <img src="../assets/images/home/6.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
.circle1 {  
    width: 100%;
    background-image: url('../assets/images/home/2.png');
    position: absolute;
    height: 500px;
    background-size: 50%;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    z-index: -1;
    left: 20%;
    bottom: 10%;
    img {
      width: 100%;
    }
    @include l($l-breakpoint){
        width: 500px;
         height: 60%;
        left: 55%;
        bottom: 40%;
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
    bottom: -197%;
    img {
      width: 100%;
    }
    @include l($l-breakpoint){
        left: 65%;
        bottom: -258%;
        rotate: -5deg;
        img {
          width: 100%;
        }
    }
}
.circle3 {
    position: absolute;
    z-index: -1;
    left: -10%;
    width: 60%;
    bottom: -295%;
    img {
      width: 100%;
    }
    @include l($l-breakpoint){
        left: 0%;
        width: 400px;
        bottom: -390%;
        rotate: -5deg;
        img {
          width: 100%;
        }
    }
}
</style>
