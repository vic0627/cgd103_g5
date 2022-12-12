<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';
import * as PRO from './js/ShopInfoThree';
import { useMousePosition, x, y } from '@/composables/useMousePosition';
import { fpv } from './js/ShopInfoItem';
useMousePosition();

onMounted(()=> {
    const wrap = document.querySelector('.productInfoWrap');
    const canvas = document.querySelector('#product3d');
    const conatinerInfo = document.querySelector('.containerInfo');
    const conatinerClose = document.querySelectorAll('.containerClose');
    const closeH3 = document.querySelector('#closeH3');
    const bgText = document.querySelectorAll('.bgText');
    let ww = window.innerWidth, wh = window.innerHeight;
    window.addEventListener('resize', ()=> {
        ww = window.innerWidth, wh = window.innerHeight;
    })
    PRO.sceneInit();
    PRO.animation();
    window.addEventListener('mousemove', ()=> {
        pointLightMove();
    });
    wrap.addEventListener('scroll', ()=> {
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
        if(ws>co*.1){
            gsap.to(conatinerInfo, {
                y: -20,
                opacity: 0,
                duration: .5,
            })
            gsap.to('.controlPanel', {
                y: -20,
                opacity: 0,
                duration: .5,
            })
        }else{
            gsap.to(conatinerInfo, {
                y: 0,
                opacity: 1,
                duration: .5,
            })
            gsap.to('.controlPanel', {
                y: 0,
                opacity: 1,
                duration: .5,
            })
        }
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
            gsap.to('#closeH3', {
                y: (2500/cc0)*(ws-co),
                opacity: Math.sin(Math.PI/(cc0/Math.PI)*(ws-co)),
                duration: 0,
            })
        }
        if(ws<co){
            gsap.to('#closeH3', {
                opacity: 0,
                duration: 0,
            })
        }
        if(ws>=co && ws<co+cc0){
            gsap.to(bgText[0], {
                opacity: (2/cc0)*(ws-co),
                top: (120/cc0)*(ws-co)+'%',
                duration: 0,
            })
            gsap.to('.closeText0', {
                opacity: (1.8/cc0)*(ws-co),
                duration: 0,
            })
        }
        if(PRO.modelObj && ws>=co+cc0 && ws<co+cc0+cc1/10){
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
            gsap.to('body', {
                background: 'linear-gradient(109.69deg, #12181E 16.49%, #13181F 26.68%, #151A23 36.59%, #181D24 41.08%, #1D2229 48.97%, #21282E 55.3%, #242B32 61.38%, #262D35 68.74%, #262D35 75.3%, #262D35 80.67%, #263038 86.99%)',
                duration: .3,
            })
        }
        if(PRO.modelObj && ws>=co+cc0+cc1/10 && ws<co+cc0+cc1/5){
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
            gsap.to('body', {
                background: '#000',
                duration: .3,
            })
            PRO.actionExplode.play();
            PRO.actionExplode.paused = true;
        }
        if(PRO.modelObj && ws>=co+cc0+cc1 && ws<=co+cc0+cc1+cc2){
            gsap.to(PRO.actionExplode, {
                time: (PRO.clipExplode.duration/cc2/2)*(ws-co-cc0-cc1),
                duration: .3,
            })
            gsap.to(bgText[1], {
                opacity: (2/cc2)*(ws-co-cc0-cc1),
                top: (120/cc2)*(ws-co-cc0-cc1)+'%',
                duration: 0,
            })
            gsap.to('.closeText2', {
                opacity: (1.8/cc2)*(ws-co-cc0-cc1),
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
                top: 60/(cc4/2)*(ws-co-cc0-cc1-cc2-cc3)+'%',
                duration: 0,
            })
            gsap.to('.closeText4', {
                opacity: (1.8/cc4)*(ws-co-cc0-cc1-cc2-cc3),
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

const pointLightMove = () => {
    let ww = window.innerWidth, wh = window.innerHeight;
    if (ww>1024) {
        let pX = x*(2/ww)-1,
            pY = 1-(y*(.5/wh));
        gsap.to(PRO.pointLight.position, {
            x: pX,
            y: pY,
            duration: .5,
        });
    }
};

</script>

<template>
    <section class="productInfoWrap">
        <canvas id="product3d" class="product3d"></canvas>
        <div class="controlPanel">
            <span v-for="n in 4" :key="n" :class="`control control${n}`" @click="controls(n)"></span>
        </div>
        <div class="containerInfo">
            <h2>{{ fpv.title }}</h2>
            <h3>US ${{ fpv.price }}</h3>
            <ol>
                <li v-for="i in fpv.specification" :key="i">
                    <p>{{ i }}</p>
                </li>
            </ol>
            <router-link to="/showcase" class="btn" data-title="learn more">
                <span>learn more</span>
            </router-link>
        </div>
        <div :class="`containerClose containerClose${i.id}`" v-for="i in fpv.closer" :key="i">
            <h3 v-if="i.id===0" id="closeH3" class="closeH3">Take a Closer Look</h3>
            <p v-if="i.id===0 || i.id===2 || i.id===4" :class="`bgText bgText${i.id}`">{{ i.title }}</p>
            <div v-if="i.id===1 || i.id===3" :class="`productImg productImg${i.id}`">
                <img :src="i.src" :alt="`productImg${i.id}`">
            </div>
            <div :class="`closeText closeText${i.id}`">
                <h4>{{ i.title }}</h4>
                <p>{{ i.text }}</p>
            </div>
        </div>
        <div class="containerBox">
            <h3>{{ fpv.box.title }}</h3>
            <div class="boxImage">
            </div>
            <ol class="boxList">
                <li v-for="i in fpv.box.item" :key="i">{{ i.name }}</li>
            </ol>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
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
        backdrop-filter: blur(1px);
    }
    .controlPanel{
        position: absolute;
        bottom: 40%;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 140px;
        z-index: 1;
        @include m($m-breakpoint) {
            bottom: 35%;
        }
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
    .containerInfo{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 90%;
        max-width: 1200px;
        height: 85%;
        scroll-snap-align: start;
        @include m($m-breakpoint) {
            height: 90%;
        }
        h2{
            margin: 70px 0 10px;
        }
        h3{
           margin: 10px 0;
        }
        ol{
            position: absolute;
            width: 100%;
            bottom: 10%;
            @include m($m-breakpoint) {
                width: 350px;
                right: 0;
            }
            li{
                text-align: right;
                width: 100%;
                @include m($m-breakpoint) {
                    text-align: left;
                }
            }
        }
        .btn{
            @include secondBtn(150px);
            position: absolute;
            bottom: 0;
            right: 0;
            @include m($m-breakpoint) {
                right: 165px;
            }
        }
    }
    .containerClose{
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        height: 100vh * 2;
        position: relative;
        scroll-snap-align: end;
        h3{
            text-shadow: 0 -3px 3px $black;
            text-align: center;
            opacity: 0;
        }
        .closeText{
            width: 50%;
            position: absolute;
            bottom: 25%;
            text-shadow: 0 3px 3px $black;
            opacity: 0;
        }
        .closeText0{
            left: 0;
        }
        .closeText2{
            text-align: center;
            right: 0;
            left: 0;
            margin: 0 auto;
        }
        .closeText4{
            right: 0;
            text-align: right;
        }
    }
    .containerClose:nth-child(2n+1){
        width: 100%;
        max-width: 100%;
        height: 100vh;
        background: $black;
        border-radius: 20px;
        scroll-snap-align: center;
        overflow: hidden;
    }
}
.productImg{
    width: 100%;
    height: 100%;
}
.productImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.bgText{
    font-size: 60px;
    line-height: 1;
    text-transform: uppercase;
    color: #DC9E7A33;
    -webkit-text-stroke: 1px $brown;
    -webkit-box-reflect: below 0px linear-gradient(transparent, #DC9E7A88);
    word-break: break-all;
    opacity: 0;
    text-align: center;
    position: absolute;
    width: 100%;
    max-width: 1200px;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    @include m($m-breakpoint) {
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        font-size: 120px;
        text-shadow: 0 0 100px $brown;
        word-break: keep-all;
        text-align: right;
    }
}
.bgText2{
    color: #9C4DD633;
    -webkit-text-stroke: 1px $purple;
    -webkit-box-reflect: below 0px linear-gradient(transparent, #9C4DD688);
    @include m($m-breakpoint) {
        text-shadow: 0 0 100px $purple;
        text-align: center;
    }
}
.bgText4{
    color: #F25A2A33;
    -webkit-text-stroke: 1px $ored;
    -webkit-box-reflect: below 0px linear-gradient(transparent, #F25A2A88);
    @include m($m-breakpoint) {
        text-shadow: 0 0 100px $ored;
        text-align: left;
    }
}


</style>