<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';
import mouseComponentsVue from '../components/mouseComponents.vue';
import * as MOUSE from '@/composables/useMouseMove';
import * as PRO from './js/ShopInfoThree';
import img1 from '@/assets/images/shopInfo/shop1.jpg';
import img2 from '@/assets/images/shopInfo/shop2.jpg';

gsap.registerPlugin(ScrollTrigger);
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
            src: img1,
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
            src: img2,
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
    const wrap = document.querySelector('.productInfoWrap');
    const canvas = document.querySelector('#product3d');
    const conatinerInfo = document.querySelector('.containerInfo');
    const conatinerClose = document.querySelectorAll('.containerClose');
    const bgText = document.querySelectorAll('.bgText');
    let ww = window.innerWidth, wh = window.innerHeight;
    window.addEventListener('resize', ()=> {
        ww = window.innerWidth, wh = window.innerHeight;
    })
    PRO.sceneInit();
    PRO.animation();
    
    wrap.addEventListener('scroll', ()=> {
        /* console.log(wrap.scrollTop); */
        scrollModel();
    });
    const scrollModel = () => {
        const ws = wrap.scrollTop,
            co = canvas.offsetHeight,
            cc0 = conatinerClose[0].offsetHeight,
            cc1 = conatinerClose[1].offsetHeight,
            cc2 = conatinerClose[2].offsetHeight,
            cc3 = conatinerClose[3].offsetHeight,
            cc4 = conatinerClose[4].offsetHeight;
        if(PRO.modelObj && ws>=co && ws<co+cc0/2){
            gsap.to(PRO.modelObj.position, {
                x: .3/(cc0/2)*(ws-co),
                y: .72/(cc0/2)*(ws-co),
                z: 2.2/(cc0/2)*(ws-co),
                duration: .3,
            })
            gsap.to(PRO.modelObj.rotation, {
                x: 0,
                y: -.15*Math.PI/(cc0/2)*(ws-co),
                z: 0,
                duration: .3,
            })
            gsap.to(bgText[0], {
                opacity: 1/(cc0/2)*(ws-co),
                top: 75/(cc0/2)*(ws-co)+'%',
                duration: 0,
            })
            gsap.to('body', {
                background: '#000',
                duration: .3,
            })
            gsap.to('.control1', {
                background: '#fff',
                duration: .3,
            })
            gsap.to('.control2', {
                background: '#fff',
                duration: .3,
            })
            gsap.to('.control3', {
                background: '#fff',
                duration: .3,
            })
            gsap.to('.control4', {
                background: '#fff',
                duration: .3,
            })
        }
        if(PRO.modelObj && ws>=co+cc0 && ws<co+cc0+cc1/4){
            PRO.actionExplode.stop();
            gsap.to(PRO.modelObj.position, {
                x: .3,
                y: .72,
                z: 2.2,
                duration: 0,
            })
            gsap.to(PRO.modelObj.rotation, {
                x: 0,
                y: -.15*Math.PI,
                z: 0,
                duration: 0,
            })
        }
        if(PRO.modelObj && ws>=co+cc0+cc1/4 && ws<co+cc0+cc1/2){
            gsap.to(PRO.modelObj.position, {
                x: 0,
                y: -1,
                z: 0,
                duration: 0,
            })
            gsap.to(PRO.modelObj.rotation, {
                x: 0,
                y: 0,
                z: 0,
                duration: 0,
            })
            PRO.actionExplode.play();
            PRO.actionExplode.paused = true;
        }
        if(PRO.modelObj && ws>=co+cc0+cc1 && ws<co+cc0+cc1+cc2){
            gsap.to(PRO.actionExplode, {
                time: (PRO.clipExplode.duration/cc2/2)*(ws-co-cc0-cc1),
                duration: .3,
            })
            gsap.to(bgText[1], {
                opacity: 1/(cc2/2)*(ws-co-cc0-cc1),
                top: 75/(cc2/2)*(ws-co-cc0-cc1)+'%',
                duration: 0,
            })
        }
        if(PRO.modelObj && ws>co+cc0+cc1+cc2 && ws<co+cc0+cc1+cc2+cc3/4){
            PRO.actionExplode.play();
            PRO.actionExplode.paused = true;
            PRO.actionStep.stop();
            gsap.to(PRO.modelObj.position, {
                x: 0,
                y: -1,
                z: 0,
                duration: 0,
            })
            gsap.to(PRO.modelObj.rotation, {
                x: 0,
                y: 0,
                z: 0,
                duration: 0,
            })
        }else if(PRO.modelObj && ws>co+cc0+cc1+cc2+cc3/4 && ws<co+cc0+cc1+cc2+cc3/2){
            PRO.actionExplode.stop();
            PRO.actionStep.time = 85;
            PRO.actionStep.play();
            PRO.actionStep.paused = true;
        }
        if(PRO.modelObj && ws>=co+cc0+cc1+cc2+cc3 && ws<=co+cc0+cc1+cc2+cc3+cc4/2){
            gsap.to(PRO.modelObj.position, {
                x: 0,
                y: -1,
                z: 0,
                duration: .3,
            })
            gsap.to(PRO.modelObj.rotation, {
                x: (.65*Math.PI/cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
                y: (-.75*Math.PI/cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
                z: (.35*Math.PI/cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
                duration: .3,
            })
            gsap.to(PRO.actionStep, {
                time: 85+((PRO.clipStep.duration-85)/cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
                duration: .3,
            })
            gsap.to(bgText[2], {
                opacity: 1/(cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
                top: 75/(cc4/2)*(ws-co-cc0-cc1-cc2-cc3)+'%',
                duration: 0,
            })
        }
        if(PRO.modelObj && ws>=co+cc0+cc1+cc2+cc3+cc4/2){
            PRO.actionHover.play();
        }else{
            PRO.actionHover.stop();
        }
    };
});

const log = (e) => {
    console.log(e);
};

const controls = (e) => {
    if(e===1){
        gsap.to(PRO.modelObj.rotation, {
            x: .15*Math.PI,
            y: .15*Math.PI,
            z: 0,
            duration: .3,
        })
        gsap.to(PRO.modelObj.position, {
            x: 0,
            y: 0,
            z: -1,
            duration: .3,
        })
        gsap.to('.control1', {
            background: '#9c4dd6',
            duration: .3,
        })
        gsap.to('.control2', {
            background: '#fff',
            duration: .3,
        })
        gsap.to('.control3', {
            background: '#fff',
            duration: .3,
        })
        gsap.to('.control4', {
            background: '#fff',
            duration: .3,
        })
    }else if(e===2){
        gsap.to(PRO.modelObj.rotation, {
            x: .15*Math.PI,
            y: -.75*Math.PI,
            z: 0,
            duration: .3,
        })
        gsap.to(PRO.modelObj.position, {
            x: 0,
            y: 0,
            z: -1,
            duration: .3,
        })
        gsap.to('.control1', {
            background: '#fff',
            duration: .3,
        })
        gsap.to('.control2', {
            background: '#9c4dd6',
            duration: .3,
        })
        gsap.to('.control3', {
            background: '#fff',
            duration: .3,
        })
        gsap.to('.control4', {
            background: '#fff',
            duration: .3,
        })
    }else if(e===3){
        gsap.to(PRO.modelObj.rotation, {
            x: .5*Math.PI,
            y: Math.PI,
            z: 0,
            duration: .3,
        })
        gsap.to(PRO.modelObj.position, {
            x: 0,
            y: 0,
            z: -1,
            duration: .3,
        })
        gsap.to('.control1', {
            background: '#fff',
            duration: .3,
        })
        gsap.to('.control2', {
            background: '#fff',
            duration: .3,
        })
        gsap.to('.control3', {
            background: '#9c4dd6',
            duration: .3,
        })
        gsap.to('.control4', {
            background: '#fff',
            duration: .3,
        })
    }else{
        gsap.to(PRO.modelObj.rotation, {
            x: -.5*Math.PI,
            y: 0,
            z: 0,
            duration: .3,
        })
        gsap.to(PRO.modelObj.position, {
            x: 0,
            y: 0,
            z: 0,
            duration: .3,
        })
        gsap.to('.control1', {
            background: '#fff',
            duration: .3,
        })
        gsap.to('.control2', {
            background: '#fff',
            duration: .3,
        })
        gsap.to('.control3', {
            background: '#fff',
            duration: .3,
        })
        gsap.to('.control4', {
            background: '#9c4dd6',
            duration: .3,
        })
    }
}



</script>

<template>
    <section class="productInfoWrap">
        <canvas id="product3d" class="product3d"></canvas>
        <div class="controlPanel">
            <span v-for="n in 4" :key="n" :class="`control control${n}`" @click="controls(n)"></span>
        </div>
        <div class="containerInfo">
            <h2>{{ fpv.title }}</h2>
            <p>US ${{ fpv.price }}</p>
            <ol>
                <li v-for="i in fpv.specification" :key="i">{{ i }}</li>
            </ol>
            <router-link to="/" class="btn" data-title="learn more">
                <span>learn more</span>
            </router-link>
        </div>
        <div :class="`containerClose containerClose${i.id}`" v-for="i in fpv.closer" :key="i">
            <h3 v-if="i.id===0">Take a Closer Look</h3>
            <p v-if="i.id===0 || i.id===2 || i.id===4" :class="`bgText bgText${i.id}`">{{ i.title }}</p>
            <div v-if="i.id===1 || i.id===3" :class="`productImg productImg${i.id}`">
                <img :src="i.src" :alt="`productImg${i.id}`">
            </div>
            <div :class="`closeText${i.id}`">
                <h4>{{ i.title }}</h4>
                <p>{{ i.text }}</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/sass/base/_color.scss';
@import '@/sass/component/_btn.scss';
.productInfoWrap{
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-y: auto;
    /* scroll-snap-type: y mandatory; */
    margin: 0;
    touch-action: pan-y;
    canvas.product3d{
        position: sticky;
        top: 0;
        left: 0;
    }
    .containerInfo{
        position: absolute;
        top: 0;
        left: 0;
    }
    .containerClose{
        width: 100%;
        height: 100vh * 2;
        position: relative;
        overflow: hidden;
        /* scroll-snap-align: center; */
    }
    .containerClose:nth-child(2n+1){
        height: 100vh;
        background: $black;
        border-radius: 20px;
    }
}
.productImg{
    width: 400px;
    height: 300px;
}
.productImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.bgText{
    font-size: 120px;
    line-height: 1;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: 1px $grey;
    -webkit-box-reflect: below 0px linear-gradient(transparent, #CED3DC88);
    opacity: 0;
    text-align: center;
    position: absolute;
    width: 1200px;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
}
.controlPanel{
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 140px;
    .control{
        display: inline-block;
        width: 15px;
        height: 15px;
        background: $fff;
        border-radius: 50%;
        margin: 0 10px;
        cursor: pointer;
    }
}
.btn{
    @include secondBtn(150px);
}
</style>