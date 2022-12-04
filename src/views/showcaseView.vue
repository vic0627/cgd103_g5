<script setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import * as PRO from './js/ShopInfoThree';
import { useMousePosition, x, y } from '@/composables/useMousePosition';
import { fpv } from './js/ShopInfoItem';
import { body } from './js/CustomizeThree';
useMousePosition();
let ww = window.innerWidth, wh = window.innerHeight;
let wrap, canvas, conatinerInfo, infoList, conatinerClose, closeH3, bgText, ws, co, cc0, cc1, cc2, cc3, cc4, infoListTotalH = 0, el, wl;
const wW = ref(window.innerWidth);
onMounted(()=> {
    wrap = $$('.productInfoWrap');
    canvas = $$('#product3d');
    conatinerInfo = $$('.containerInfo');
    infoList = document.querySelectorAll('.infoList');
    for(let i=0; i<infoList.length-1; i++){
        infoListTotalH += infoList[i].offsetHeight;
    }
    scrollSum();
    allFloat();
    window.addEventListener('resize', ()=> {
        ww = window.innerWidth, wh = window.innerHeight;
    })
    PRO.sceneInit();
    PRO.animation();
    window.addEventListener('mousemove', ()=> {
        pointLightMove();
    });
    
    wrap.addEventListener('scroll', ()=> {
        el = $$('.specOl').getBoundingClientRect();
        wl = $$('.productInfoWrap').getBoundingClientRect();
        let sumWs = ws-co-cc0-cc1-cc2-cc3-cc4;
        scrollModel();
        log(sumWs)
        if(el.top==0 || el.y==0 || el.bottom==$$('.specOl').offsetHeight || sumWs>=0){
            $$('.specOl').style.pointerEvents = 'auto';
        }else{
            $$('.specOl').style.pointerEvents = 'none';
        }
    });
    $$('.specOl').addEventListener('scroll', ()=> {
        scrollSum();
    });
    const scrollModel = () => {
        conatinerInfo = document.querySelectorAll('.conatinerInfo');
        conatinerClose = document.querySelectorAll('.containerClose');
        closeH3 = $$('#closeH3');
        bgText = document.querySelectorAll('.bgText');
        ws = wrap.scrollTop;
        co = canvas.offsetHeight;
        cc0 = conatinerClose[0].offsetHeight;
        cc1 = conatinerClose[1].offsetHeight;
        cc2 = conatinerClose[2].offsetHeight;
        cc3 = conatinerClose[3].offsetHeight;
        cc4 = conatinerClose[4].offsetHeight;
        if(ws!=0){
            gsap.to('.controlPanel', {
                opacity: 0,
                duration: .3,
            })
        }else{
            gsap.to('.controlPanel', {
                opacity: 1,
                duration: .3,
            })
        }
        if(ws<co){
            gsap.to('.infoTitle', {
                top: 20+(10/co)*ws+'%',
                opacity: 1-(2/co)*ws,
                scale: 1+(.2/co)*ws,
                duration: 0,
            })
            gsap.to('.infoText', {
                top: 60-(20/co)*ws+'%',
                opacity: 1-(2/co)*ws,
                scale: 1+(.2/co)*ws,
                duration: 0,
            })
            gsap.to('.controlPanel', {
                opacity: 1-(2/co)*ws,
                duration: 0,
            })
            gsap.to('#closeH3', {
                opacity: 0,
                duration: 0,
            })
            gsap.to(PRO.camera, {
                fov: 60-(10/co)*ws,
                duration: 0,
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
                opacity: Math.sin((3*Math.PI/cc0)*(ws-co)),
                duration: 0,
            })
        }
        if(ws>=co && ws<co+cc0){
            gsap.to(bgText[0], {
                opacity: Math.sin(Math.PI/(cc0)*(ws-co)),
                top: (120/cc0)*(ws-co)+'%',
                duration: 0,
            })
            gsap.to('.closeText0', {
                opacity: (1.8/cc0)*(ws-co),
                duration: 0,
            })
            gsap.to('.closeText1', {
                opacity: 0,
                duration: .3,
            })
            PRO.pointLight.intensity = 0;
        }
        if(ws>=co+cc0 && ws<co+cc0+cc1){
            gsap.to('.closeText1', {
                bottom: 50-(50/cc1)*(ws-co-cc0)+'%',
                duration: 0,
            })
            gsap.to(PRO.camera, {
                fov: 50+(40/cc1)*(ws-co-cc0),
                duration: 0,
            })
        }
        if(PRO.modelObj && ws>=co+cc0 && ws<co+cc0+cc1/10){
            PRO.actionExplode.stop();
            PRO.glitchTrigger();
            PRO.pointLight.intensity = 2;
            setTimeout(()=> {
                $$('.closeText1').style.opacity = 1;
            }, 500);
            gsap.to(PRO.modelObj.position, {
                x: .3,
                y: .72,
                z: 2.2,
                duration: .1,
            })
            gsap.to(PRO.modelObj.rotation, {
                x: 0,
                y: -.15*Math.PI,
                z: 0,
                duration: .1,
            })
            gsap.to('body', {
                background: 'linear-gradient(109.69deg, #12181E 16.49%, #13181F 26.68%, #151A23 36.59%, #181D24 41.08%, #1D2229 48.97%, #21282E 55.3%, #242B32 61.38%, #262D35 68.74%, #262D35 75.3%, #262D35 80.67%, #263038 86.99%)',
                duration: 0,
            })
        }
        if(PRO.modelObj && ws>=co+cc0+cc1/10 && ws<co+cc0+cc1/5){
            gsap.to('.closeText1', {
                opacity: 0,
                duration: .3,
            })
            gsap.to(PRO.modelObj.position, {
                x: .3,
                y: .5,
                z: 2.2,
                duration: .1,
            })
            gsap.to('body', {
                background: '#000',
                duration: 0,
            })
            PRO.actionExplode.play();
            PRO.actionExplode.paused = true;
        }
        if(PRO.modelObj && ws>=co+cc0+cc1 && ws<=co+cc0+cc1+cc2){
            gsap.to(PRO.actionExplode, {
                time: (PRO.clipExplode.duration/cc2)*(ws-co-cc0-cc1),
                duration: .3,
            })
            gsap.to(PRO.modelObj.position, {
                x: .3-(.3/cc2)*(ws-co-cc0-cc1),
                y: .5-(1.5/cc2)*(ws-co-cc0-cc1),
                z: 2.2-(2.2/cc2)*(ws-co-cc0-cc1),
                duration: 0,
            })
            gsap.to(PRO.modelObj.rotation, {
                x: Math.sin((2*Math.PI/cc2)*(ws-co-cc0-cc1)),
                y: (-.15*Math.PI)+(-1.85*Math.PI/cc2)*(ws-co-cc0-cc1),
                z: 0,
                duration: 0,
            })
            gsap.to(bgText[1], {
                opacity: Math.sin(Math.PI/(cc2)*(ws-co-cc0-cc1)),
                top: (120/cc2)*(ws-co-cc0-cc1)+'%',
                duration: 0,
            })
            gsap.to('.closeText2', {
                opacity: (1.8/cc2)*(ws-co-cc0-cc1),
                duration: 0,
            })
            if(ws>=co+cc0+cc1+cc2/2){
                gsap.to(PRO.camera, {
                    fov: 90-(30/cc2)*(ws-co-cc0-cc1),
                    duration: 0,
                })
            }
        }
        if(PRO.modelObj && ws>co+cc0+cc1+cc2 && ws<co+cc0+cc1+cc2+cc3/4){
            PRO.actionStep.stop();
            PRO.actionExplode.time = PRO.clipExplode.duration;
            PRO.actionExplode.play();
            PRO.actionExplode.paused = true;
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
            gsap.to(PRO.modelObj.position, {
                x: 0,
                y: -.75,
                z: 0,
                duration: 0,
            })
            PRO.actionStep.time = 80;
            PRO.actionStep.play();
            PRO.actionStep.paused = true;
        }
        if(PRO.modelObj && ws>=co+cc0+cc1+cc2+cc3 && ws<=co+cc0+cc1+cc2+cc3+cc4/2){
            gsap.to(PRO.modelObj.position, {
                x: 0,
                y: -.75+(-.25*Math.PI/cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
                z: 0,
                duration: 0,
            })
            gsap.to(PRO.modelObj.rotation, {
                x: (.65*Math.PI/cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
                y: (-.75*Math.PI/cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
                z: (.35*Math.PI/cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
                duration: .3,
            })
            gsap.to(PRO.actionStep, {
                time: 84+((PRO.clipStep.duration-85)/cc4/2)*(ws-co-cc0-cc1-cc2-cc3),
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
            gsap.to(PRO.modelObj.position, {
                x: 0,
                y: -1,
                z: 0,
                duration: .3,
            })
            gsap.to(PRO.modelObj.rotation, {
                x: .5-(.35/cc4/2)*(ws-co-cc0-cc1-cc2-cc3+cc4/2),
                y: -.6+(.6/cc4/2)*(ws-co-cc0-cc1-cc2-cc3+cc4/2),
                z: .3-(.65/cc4/2)*(ws-co-cc0-cc1-cc2-cc3+cc4/2),
                duration: .3,
            })
        }else{
            PRO.actionHover.stop();
        }
    };

    
});

const log = e => console.log(e);

const $$ = e => document.querySelector(e);


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

let xxx, zzz;
const scrollList = (e, delay = 0, dur = .1) => {
    let os = $$('.specOl').scrollTop - (delay * $$('.specOl').offsetHeight);
    xxx = Math.sin(os / $$('.specOl').offsetHeight * Math.PI);
    zzz = Math.cos(os / $$('.specOl').offsetHeight * Math.PI);
    let xrwd;
    if(ww<576){
        xrwd = 0;
    }else{
        xrwd = xxx;
    }
    if(zzz<0){
        $$(e).style['z-index'] = '-1';
        gsap.to($$(e).firstChild, {
            filter: `blur(${-zzz*3}px) grayscale(80%)`,
            duration: .3,
        })
    }else{
        $$(e).style['z-index'] = '2';
        gsap.to($$(e).firstChild, {
            filter: `blur(0px) grayscale(80%)`,
            duration: .3,
        })
    }
    gsap.to(e, {
        top: 50*($$('.specOl').scrollTop / $$('.specOl').offsetHeight)+'%',
        rotateX: xrwd*10,
        rotateY: 180*(os / $$('.specOl').offsetHeight),
        rotateZ: -zzz*10,
        left: 50+xxx*40+'%',
        scale: (zzz+1)/2+.5,
        duration: dur,
    })
    

    gsap.to($$(e).lastChild, {
        left: 0,
        opacity: 0,
        duration: .3,
    })
    gsap.to($$(e).lastChild.previousSibling, {
        left: 0,
        opacity: 0,
        duration: .3,
        delay: .3,
    })

    if(PRO.modelObj){
        gsap.to(PRO.modelObj.rotation, {
            x: .15,
            y: -($$('.specOl').scrollTop / $$('.specOl').offsetHeight),
            z: -.35,
            duration: 1,
        })
        gsap.to(PRO.modelObj.position, {
            x: 0,
            y: -1-($$('.specOl').scrollTop / $$('.specOl').offsetHeight / 5),
            z: 0,
            duration: 1,
        })
    }
    
};
const scrollSum = () => {
    scrollList('.specLi1')
    scrollList('.specLi2', .6)
    scrollList('.specLi3', 1.2)
    scrollList('.specLi4', 1.8)
    scrollList('.specLi5', 2.4)
    scrollList('.specLi6', 3)
    scrollList('.specLi7', 3.6)
    scrollList('.specLi8', 4.2)
    scrollList('.specLi9', 4.8)
    scrollList('.specLi10', 5.4)
};
const toImg = (e) => {
    //let topPercent = (Number(e.target.parentNode.style.top.split('%')[0])/100);
    //let movPercent = (window.innerHeight*topPercent);
    if(e.target.style['z-index'] > 0){
        e.target.style['z-index'] = 3;
        gsap.to(e.target, {
            left: 50+'%',
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 2,
            duration: .3,
        })
        gsap.to(e.target.firstChild, {
            filter: `blur(0px) grayscale(0%)`,
            duration: .3,
        })

        gsap.to(e.target.firstChild.nextSibling, {
            left: -15+'%',
            opacity: 1,
            duration: .3,
            delay: .3,
        })
        gsap.to(e.target.lastChild, {
            left: -10+'%',
            opacity: 1,
            duration: .3,
            delay: .6,
        })
    }
};
let timelines = {};
for(let i=1; i<=10; i++){
    timelines[i] = new gsap.timeline({repeat:-1});
};
const float = (i,e) => {
    let rand = Math.random()+1;
    timelines[i].to(e, {
        y: -20,
        ease: 'none',
        duration: rand,
    })
    timelines[i].to(e, {
        y: 0,
        ease: 'none',
        duration: rand,
    })
}
const allFloat = () => {
    for(let i=1; i<=10; i++){
        float(i, `.specLi${i}`);
    }
};
</script>

<template>
    <section class="productInfoWrap">
        <canvas id="product3d" class="product3d"></canvas>
        <ol  class="containerInfo">
            <h2 class="infoTitle">{{ fpv.title }}</h2>
            <p class="infoText">{{ fpv.subTitle }}</p>
            <router-link to="/" class="btn" data-title="learn more">
                <span>learn more</span>
            </router-link>
            <div class="controlPanel">
                <span v-for="n in 4" :key="n" :class="`control control${n}`" @click="controls(n)"></span>
            </div>
        </ol>
        <div :class="`containerClose containerClose${i.id}`" v-for="i in fpv.closer" :key="i">
            <h3 v-if="i.id===0" id="closeH3" class="closeH3">Take a Closer Look</h3>
            <p v-if="i.id===0 || i.id===2 || i.id===4" :class="`bgText bgText${i.id}`">{{ i.title }}</p>
            <div :class="`closeText closeText${i.id}`">
                <h4>{{ i.title }}</h4>
                <p>{{ i.text }}</p>
                <p v-if="wW > 1024 && i.id == 1" class="closeMouseMove">Try to move your mouse around to discover!</p>
            </div>
        </div>
        <div class="containerSpec">
            <ol class="specOl">
                <li v-for="n in 10" :class="`specLi${n}`" @click.capture="toImg">
                    <img :src="fpv.special.item[n].src">
                    <h4 :class="`specH4${n}`">{{ fpv.special.item[n].title }}</h4>
                    <p :class="`specP${n}`">{{ fpv.special.item[n].text }}</p>
                </li>
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
    }
    .controlPanel{
        margin: 0 auto;
        width: 140px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 25%;
        z-index: 1;
        @include m($m-breakpoint) {
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
        margin: 0 auto;
        width: 100%;
        height: 100%;
        .infoTitle{
            width: 80%;
            margin: 0 auto;
            text-align: center;
            position: sticky;
            top: 20%;
            z-index: -1;
            line-height: 1;
            text-shadow: 0 -3px 3px $black;
            @include m($m-breakpoint) {
                width: 90%;
                font-size: 200px;
                top: 25%;
            }
        }
        p{
            text-align: center;
            position: sticky;
            top: 60%;
            width: 80%;
            margin: 0 auto;
            @include m($m-breakpoint) {
                font-size: 70px;
            }
        }
        .infoList1{
            height: 200%;
        }
        .infoText1{
            line-height: 1;
            text-align: center;
            top: 65%;
            text-shadow: 0 -3px 3px $black;
            @include m($m-breakpoint) {
                font-size: 70px;
            }
        }
    }
    .btn{
        @include secondBtn(150px);
        display: none;
        position: absolute;
        bottom: 0;
        right: 0;
        @include m($m-breakpoint) {
            right: 165px;
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
            width: 80%;
            position: absolute;
            bottom: 25%;
            text-shadow: 0 3px 3px $black;
            opacity: 0;
            @include m($m-breakpoint) {
                width: 50%;
            }
        }
        .closeText0{
            left: 0;
        }
        .closeText1{
            text-align: center;
            bottom: 50%;
            left: 0;
            right: 0;
            margin: 0 auto;
            .closeMouseMove{
                font: $caption-m-h4;
            }
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
    .containerClose:nth-child(2n){
        width: 100%;
        max-width: 100%;
        height: 100vh;
        scroll-snap-align: center;
        overflow: hidden;
    }
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
.containerSpec{
    width: 100%;
    height: 100%;
    overflow: hidden;
    ol{
        width: 100%;
        height: 100%;
        overflow-y: auto;
        position: relative;
    }
    li{
        width: 25%;
        height: 10%;
        list-style: none;
        margin-left: -12.5%;
        position: relative;
        transform: perspective(1000px);
        transform-style: preserve-3d;
        cursor: pointer;
        @media screen and (min-width: 576px) {
            width: 25%;
            height: 18.75%;
            margin-left: -12.5%;
        }
        @media screen and (min-width: 1023px) {
            width: 400px;
            height: 300px;
            margin-left: -200px;
        }
        img{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-position-x: 0;
            transform-origin: 0 100%;
            pointer-events: none;
        }
        h4{
            color: #fff;
            position: absolute;
            top: 10%;
            left: 0;
            width: 0px;
            opacity: 0;
            pointer-events: none;
            font-size: 0;
            @media screen and (min-width: 576px) {
                width: 200px;
                font-size: 16px;
            }
            @media screen and (min-width: 1023px) {
                width: 400px;
                font-size: 20px;
            }
        }
        p{
            color: #eee;
            position: absolute;
            top: 50%;
            left: 0;
            width: 0px;
            font-size: 0;
            line-height: 1.2;
            opacity: 0;
            pointer-events: none;
            @media screen and (min-width: 576px) {
                top: 50%;
                width: 200px;
                font-size: 12px;
            }
            @media screen and (min-width: 1023px) {
                top: 30%;
                width: 300px;
                font-size: 16px;
            }
        }
    }
    li:nth-child(1){
        margin-top: 35vh;
    }
    li:nth-child(10){
        margin-bottom: 100vh;
        @media screen and (min-width: 576px) {
            margin-bottom: 300vh;
        }
    }
}


</style>