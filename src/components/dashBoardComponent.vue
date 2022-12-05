<script setup>
import { onMounted, ref } from 'vue';
import { log, $$ } from '../composables/useCommon';
import gsap from 'gsap';
let w = null, innerW = null;
const deg = ref(0)
onMounted(() => {
    w = Number(window.getComputedStyle($$('.dashBoard'),null).getPropertyValue("width").split('px')[0])/2;
    innerW = Number(window.getComputedStyle($$('.innerScale'),null).getPropertyValue("width").split('px')[0])/2+1.5;
    scaleSum();
    window.addEventListener('click', () => {
        niddleSpin(100)
    })
})
const r = 2 * Math.PI / 12;
const Y = (e, width = w) => Math.sin(e) * -width + 'px';
const X = (e, width = w) => Math.cos(e) * width + 'px';
const rToD = (e) => e * 180 / Math.PI;

const scale = (e, top, left, right, rotate, duration = 0) => {
    gsap.to(e, {
        top,
        left,
        right,
        rotate,
        duration,
    })
};

const scaleSum = () => {
    scale('.longScale1', Y(-r), X(-r), 'auto', rToD(r));
    for(let i=0; i<=7; i++){
        scale(`.longScale${i+2}`, Y(r*i), X(r*i), 'auto', rToD(-r*i));
    }
    for(let i=1; i<=5; i++){
        scale(`.shortScale${i}`, Y(-r/6*(6-i)), X(-r/6*(6-i)), 'auto', rToD(r/6*(6-i)));
    }
    for(let i=6; i<=47; i++){
        scale(`.shortScale${i}`, Y(r/6*(i-6)), X(r/6*(i-6)), 'auto', rToD(-r/6*(i-6)));
    }
};

const niddleSpin = (d) => {
    gsap.to(deg, {
        value: d,
        duration: .3,
    })
    let accDeg = d * 1.5;
    gsap.to('.niddle', {
        rotate: accDeg+150,
        duration: .3
    })
    if(d>=100){
        let tl = new gsap.timeline({repeat: -1, delay: .3});
        tl.to($$('.board p'), {
            color: `#f00`,
            duration: .3,
        })
        tl.to($$('.board p'), {
            color: `#fff`,
            duration: .3,
            delay: .3,
        })
    }
}

const obj = {
    title: 'Max Speed',
    unit: 'km/h',
}
</script>
<template>
    <div class="dashBoard">
        <div class="shortScale" v-for="n in 47" :key="n" :class="`shortScale shortScale${n}`"></div>
        <div v-for="n in 9" :key="n" :class="`longScale longScale${n}`"></div>
        <div class="innerScale">
            <div class="niddle">
                <span class="dot"></span>
            </div>
        </div>
        <div class="board">
            <h5>{{ obj.title }}</h5>
            <p>{{ deg }}</p>
            <span>{{ obj.unit }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dashBoard{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: relative;
    .longScale{
        width: 8%;
        height: 2px;
        background: #fff;
        position: absolute;
        margin: calc(50% - 1px) auto auto 46%;
    }
    .shortScale{
        width: 8%;
        height: 2px;
        background: #c0c0c0;
        position: absolute;
        margin: calc(50% - 1px) auto auto 46%;
        clip-path: polygon(0 0, 60% 0, 60% 100%, 0 100%);
    }
    .innerScale{
        width: 60%;
        height: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: calc(-30% - 2px);
        margin-top: calc(-30% - 2px);
        border: 2px solid #c0c0c0;
        border-radius: 50%;
        clip-path: polygon(0 0, 100% 0, 100% 75%, 0 75%);
        .niddle{
            width: 51.5%;
            height: 5px;
            transform-origin: 0 center;
            transform: rotate(150deg);
            position: absolute;
            top: calc(50% - 2.5px);
            left: 50%;
        }
        span{
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #f00;
            box-shadow: 0 0 25px 5px #f00;
            margin: 0 0 0 auto;
        }
    }
    .board{
        width: 50%;
        height: 50%;
        margin: auto;
        text-align: center;
        padding-top: 40%;
        p{
            font-size: 50px;
            width: 100px;
            height: 50px;
            line-height: 1;
            overflow: hidden;
            margin: 5px auto;
        }
        span{
            display: block;
            font-size: 16px;
        }
    }
}
</style>