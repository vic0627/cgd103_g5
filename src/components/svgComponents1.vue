<script setup>
import { onMounted, reactive } from 'vue';
import $ from 'jquery';
onMounted(() => {});
// defineProps ({
//     line:{
//         type: string,
//         default:''
//     }
// }) 

</script>

<template>
    <div class="circle">
      <img src="../assets/images/home/2.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
.circle {
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
</style>