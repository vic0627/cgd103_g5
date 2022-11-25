<script setup>
import { onMounted } from 'vue';
import mouseComponentsVue from '../components/mouseComponents.vue';
import * as MOUSE from '@/composables/useMouseMove';
import * as PRO from './js/ShopInfoThree';

let ww = window.innerWidth;

onMounted(()=> {
    canvasRe();
    console.log(product3d)
    window.addEventListener('resize', ()=> {
        ww = window.innerWidth;
        canvasRe();
    });
    PRO.sceneInit();
    PRO.animation(); 
});

const canvasRe = () => {
    if(ww<575){
        product3d.width = ww;
        product3d.height = 360;
    }else if(ww<1023){
        product3d.width = 500;
        product3d.height = 500;
    }else{
        product3d.width = 800;
        product3d.height = 800;
    };
};
</script>

<template>
    <canvas id="product3d"></canvas>
</template>

<style lang="scss" scoped>
    #product3d{
        outline: 1px solid red;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
</style>