<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { camera, sceneInit, windowResize, animation, directionalLight, toBack, toFront } from './js/LandingThree';
import { useMousePosition, x, y } from '@/composables/useMousePosition';
import mouseComponentsVue from '../components/mouseComponents.vue';
import * as MOUSE from '@/composables/useMouseMove';

const ww =window.innerWidth, wh = window.innerHeight;
useMousePosition();

const forestage = ref([..."forestage"]);
const backstage = ref([..."backstage"]);

onMounted(() => {
    sceneInit();
    windowResize();
    animation();
    if (ww>1024) {
        window.addEventListener('mousemove', mouse3d);
        MOUSE.useMouseMove();
    };
    gsap.to(camera.position, {
        x: 0,
        y: .5,
        z: 1.2,
        duration: 3,
    });
    gsap.to(camera.rotation, {
        x: 0,
        y: Math.PI/-10,
        z: 0,
        duration: 3,
    });
    show('#frontTitle');
    show('#frontButtons');
    
});
const show = (e) => {
    gsap.from(e, {
        display: 'none',
        opacity: 0,
        duration: .5,
        delay: 2.5,
    })
};
const mousePlay = (e) => {
    if (ww>1024) {
        let mouseX = (x-e.target.offsetLeft-e.target.parentNode.offsetLeft-24)*-1;
        let mouseY = (y-e.target.parentNode.offsetTop-27.5)*-1;
        let spanT = gsap.timeline();
        spanT.to(e.target, {
            x: mouseX,
            y: mouseY,
            rotateX: 1.5*mouseY+'deg',
            rotateY: -1.5*mouseX+'deg',
            duration:.3,
        });
        spanT.to(e.target, {
            x: 0,
            y: 0,
            rotateX: 0+'deg',
            rotateY: 0+'deg',
            duration:1,
        });
    };
};
const mouse3d = () => {
    if (ww>1024) {
        let dlX = x*(5/ww)-2.5,
            dlY = 1-(y*(2/wh));
        gsap.to(directionalLight.position, {
            x: dlX,
            y: dlY,
            duration: .5,
        });
        let cX = (x-ww/2)/30000,
            cY = (wh-y-wh/2)/30000;
        if(directionalLight.intensity==0.5){
            gsap.to(camera.position, {
                x: cX,
                y: .5+cY,
                duration: 1,
            });
        }else if(directionalLight.intensity==0){
            gsap.to(camera.position, {
                x: cX*2,
                z: 1.5+cY*2,
                duration: 1,
            });
        };
    };
}
</script>

<template>
    <mouseComponentsVue />
    <canvas id="land3d"></canvas>
    <h2 id="frontTitle">
        <span @mousemove="mousePlay" class="spanH2" v-for="i in forestage" :key="i">{{ i }}</span>
    </h2>
    <div class="buttons" id="frontButtons">
        <a data-title="To Backstage" class="btnSecond" @click="toBack" @mouseenter="MOUSE.mouseFocus"
        @mouseleave="MOUSE.mouseRe">
            <span>To Backstage</span>
        </a>
        <router-link to="/home" data-title="Enter" class="btnMain"  @mouseenter="MOUSE.mouseEnhance"
        @mouseleave="MOUSE.mouseRe">
            <span>Enter</span>
        </router-link>
    </div>
    <h2 id="backTitle">
        <span @mousemove="mousePlay" class="spanH2" v-for="i in backstage" :key="i">{{ i }}</span>
    </h2>
    <div class="buttons" id="backButtons">
        <a data-title="To Frontstage" class="btnSecond" @click="toFront"  @mouseenter="MOUSE.mouseFocus"
        @mouseleave="MOUSE.mouseRe">
            <span>To Frontstage</span>
        </a>
        <router-link to="/" data-title="Enter" class="btnMain"  @mouseenter="MOUSE.mouseEnhance"
        @mouseleave="MOUSE.mouseRe">
            <span>Enter</span>
        </router-link>
    </div>
</template>


<style scoped lang="scss">
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
@import '@/sass/component/_btn.scss';

#land3d{
    width: 100%;
    height: 100vh;
    touch-action: none;
}
h2{
    position: absolute;
    text-align: center;
    min-width: 360px;
    max-width: 1200px;
    top: 20%;
    left: 0;
    right: 0;
    margin: 0 auto;
}
h2 ~ h2, .buttons ~ .buttons{
    display: none;
    opacity: 0;
}
.spanH2{
    display: inline-block;
    width: 32px;
    font: $caption-h2;
    color: transparent;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #fff;
    -webkit-box-reflect: below 5px linear-gradient(transparent, #eee);
    @include m($m-breakpoint) {
        width: 48px;
        font: $caption-l-h2;
    }
}

.buttons{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column-reverse;
    min-width: 360px;
    max-width: 1200px;
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    margin: 0 auto;
    @include m($m-breakpoint) {
        flex-direction: row;
    }
}
.btnMain{
    @include primaryBtn(130px);
    margin: 40px;
    @include m($m-breakpoint) {
        margin: 0;
    }
}
.btnSecond{
    @include secondBtn(160px);
}
</style>
