<script setup>
import { onMounted } from 'vue';
import mouseComponentsVue from '../components/mouseComponents.vue';
import * as MOUSE from '@/composables/useMouseMove';
import * as PRO from './js/ShopInfoThree';

const fpv = {
    title: 'EFPV Eagle 5',
    price: '3,249',
    specification: {
        a: '4/3 CMOS Hasselblad Camera',
        b: '46 Minutes of Flight Time ',
        c: 'Omnidirectional Obstacle Sensing',
        d: '15km Max Transmission Range',
        e: 'Advanced Return to Home',
    },
    closer: {
        a: {
            id: 0,
            title: 'A Camera for Capturing the Best',
            text: 'The 4/3 CMOS Hasselblad camera can effectively suppress noise in low-light environments, delivering higher resolution and dynamic range.',
        },
        b: {
            id: 1,
            title: 'Extended Flight Time to See More',
            text: 'Up to 46 minutes of flight time lets you plan flight routes, compose your shots, and capture it all with ease.',
        },
        c: {
            id: 2,
            title: 'Upgraded Transmission System',
            text: 'The upgraded O3+ transmission system enables a 15km* max transmission range and a 1080p/60fps live feed for smooth, stable flights.',
        },
        d: {
            id: 3,
            title: 'Fly with Intelligent Safety',
            text: 'With omnidirectional obstacle sensing, Mavic 3 can detect obstacles in all directions and plan a safe flight route.',
        },
        e: {
            id: 4,
            title: 'A Pro Codec for Pro Creation',
            text: 'Eagle 5 supports Apple ProRes 422 HQ, Apple ProRes 422, and Apple ProRes 422 LT encoding and has a built-in 1TB SSD, facilitating professional creation in every way.',
        }
    },
    box: ['EFPV Eagle 5', 'Spare EFPV XS-U7 Control Sticks (Pair)', 'EFPV XS-U7 Cable (Lightning Connector)', 'EFPV Eagle 5 Intelligent Flight Battery', 'EFPV 65W Portable Charger', 'EFPV XS-U7 Remote Controller', 'EFPV XS-U7 Cable (USB-C Connector)', 'EFPV XS-U7 Cable (Standard Micro-USB Connector)', 'EFPV Eagle 5 Low-Noise Propellers (pair)', 'EFPV Eagle 5 Storage Cover']
}
onMounted(()=> {
    const product3d = document.querySelector('#product3d');
    const wrap = document.querySelector('.productInfoWrap');
    PRO.sceneInit();
    PRO.animation();
    wrap.addEventListener('scroll', ()=> {
        console.log(wrap.scrollTop);
    })
});

const log = (e) => {
    console.log(e);
};
</script>

<template>
    <section class="productInfoWrap">
        <canvas id="product3d" class="product3d"></canvas>
        <div class="containerInfo">
            <h2>{{ fpv.title }}</h2>
            <p>US ${{ fpv.price }}</p>
            <ol>
                <li v-for="i in fpv.specification" :key="i">{{ i }}</li>
            </ol>
        </div>
        <div class="containerClose" v-for="i in fpv.closer" :key="i">
            <h3 v-if="i.id===0">Take a Closer Look</h3>
            <h4>{{ i.title }}</h4>
            <p>{{ i.text }}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.productInfoWrap{
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: auto;
    margin: 0;
    canvas.product3d{
        position: sticky;
        top: 0;
        left: 0;
    }
    .containerClose{
        width: 100%;
        height: 100vh;
        position: relative;
    }
}


</style>