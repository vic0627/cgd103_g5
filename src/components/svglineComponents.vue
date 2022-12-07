<script setup>
import { onMounted, reactive } from 'vue';
import $ from 'jquery';
onMounted(() => {
    
});
const lines =  defineProps ({
    line1:{
        type: String,
        default:''
    },
    line2:{
        type: String,
        default:''
    },
    line3:{
        type:String,
        default:''
    },
    line4:{
        type:String,
        default:''
    },
    line5:{
        type:String,
        default:''
    }
})
 

</script>

<template>
    <div class="line1" v-if="lines.line1===1">
        <img src="../assets/images/home/1.png" alt="">
    </div>

    <div class="line2" v-if="lines.line2===2">
        <img src="../assets/images/home/5.png" alt="">
    </div>

    <div class="line3" v-if="lines.line3===3">
        <img src="../assets/images/home/5.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
.line1 {
    // width: 600px;
    // height: 500px;
    position: absolute;
    width: 300px;
    height: 300px;
    z-index: -1;
    left: 0%;
    bottom: 30%;
    rotate: -10deg;
    img {
        width: 100%;
    }
    @include l($l-breakpoint){
        left: 0%;
        bottom: 25%;
        img {
            width: 130%;
        }
    }
}
.line2 {
    // width: 600px;
    // height: 500px;
    position: absolute;
    width: 100%;
    height: 300px;
    z-index: -1;
    left: 0%;
    bottom: -79%;
    // rotate: -70deg;
    img {
        width: 100%;
    }
    @include l($l-breakpoint){
        width: 50%;
        height: 500px;
        left: 35%;
        bottom: -180%;
        img {
            width: 130%;
        }
    }
}
.line3 {
    // width: 600px;
    // height: 500px;
    position: absolute;
    width: 100%;
    height: 300px;
    z-index: -1;
    left: -10%;
    bottom: -210%;
    // rotate: -70deg;
    img {
        width: 100%;
    }
    @include l($l-breakpoint){
        width: 600px;
        height: 500px;
        left: 0%;
        bottom: -270%;
        img {
            width: 130%;
        }
    }
}
</style>