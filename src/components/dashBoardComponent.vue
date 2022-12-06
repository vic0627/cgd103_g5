<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { log, $$ } from '../composables/useCommon';
import gsap from 'gsap';
import { useDashBoardMove, niddleSpin, deg} from '../composables/useDashBoardMove';
let w = null, innerW = null, numW = null, ww;

onMounted(() => {
    ww = window.innerWidth;
    w = Number(window.getComputedStyle($$('.dashBoard'),null).getPropertyValue("width").split('px')[0])/2;
    innerW = Number(window.getComputedStyle($$('.innerScale'),null).getPropertyValue("width").split('px')[0])/2+1.5;
    numW = Number(window.getComputedStyle($$('.numberScales'),null).getPropertyValue("width").split('px')[0])/2;
    scaleSum();
    window.addEventListener('resize', () => {
        w = Number(window.getComputedStyle($$('.dashBoard'),null).getPropertyValue("width").split('px')[0])/2;
        innerW = Number(window.getComputedStyle($$('.innerScale'),null).getPropertyValue("width").split('px')[0])/2+1.5;
        numW = Number(window.getComputedStyle($$('.numberScales'),null).getPropertyValue("width").split('px')[0])/2;
        ww = window.innerWidth;
        scaleSum();
    })
    niddleSpin(props.units.id, props.units.value, props.units.ratio);
    useDashBoardMove(props.units.id, ww, w);
});
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
        scale(`.numberScale${i+2}`, Y(r*i, numW), X(r*i, numW), 'auto', 0);
    }
    for(let i=1; i<=5; i++){
        scale(`.shortScale${i}`, Y(-r/6*(6-i)), X(-r/6*(6-i)), 'auto', rToD(r/6*(6-i)));
    }
    for(let i=6; i<=47; i++){
        scale(`.shortScale${i}`, Y(r/6*(i-6)), X(r/6*(i-6)), 'auto', rToD(-r/6*(i-6)));
    }
    scale(`.numberScale1`, Y(-r, numW), X(-r, numW), 'auto', 0);
};

const props = defineProps(["units"]);
</script>
<template>
    <div :class="`dashBoard dashBoard${props.units.id}`">
        <div class="shortScale" v-for="n in 47" :key="n" :class="`shortScale shortScale${n}`"></div>
        <div v-for="n in 9" :key="n" :class="`longScale longScale${n}`"></div>
        <div :class="`numberScales numberScales${props.units.id}`">
            <p v-for="n in 9" :key="n" :class="`numberScale numberScale${n}`">{{ props.units.scale[n] }}</p>
        </div>
        <div :class="`innerScale innerScale${props.units.id}`">
            <div :class="`niddle niddle${props.units.id}`" id="niddle">
                <span :class="`dot dot${props.units.id}`"></span>
            </div>
        </div>
        <div class="board">
            <h5 :class="`boardTitle boardTitle${props.units.id}`">{{ props.units.title }}</h5>
            <p :class="`boardP boardP${props.units.id}`">{{ deg[props.units.id] }}</p>
            <span :class="`boardSpan boardSpan${props.units.id}`">{{ props.units.unit }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
.dashBoard{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    @include s($s-breakpoint){
        width: 200px;
        height: 200px;
    }
    @include m($m-breakpoint){
        width: 250px;
        height: 250px;
    }
    @include l($l-breakpoint){
        width: 300px;
        height: 300px;
    }
    .longScale{
        width: 8%;
        height: 2px;
        background: #CED3DCcc;
        position: absolute;
        margin: calc(50% - 1px) auto auto 46%;
        transform-style: preserve-3d;
        transform: perspective(1000px) translateZ(-20px);
    }
    .shortScale{
        width: 8%;
        height: 2px;
        background: #CED3DC88;
        position: absolute;
        margin: calc(50% - 1px) auto auto 46%;
        clip-path: polygon(0 0, 60% 0, 60% 100%, 0 100%);
        transform-style: preserve-3d;
        transform: perspective(1000px);
    }
    .numberScales{
        position: absolute;
        width: 78%;
        height: 78%;
        top: 50%;
        left: 50%;
        margin-left: -39%;
        margin-top: -39%;
        transform-style: preserve-3d;
        transform: perspective(1000px) translateZ(-20px);
        .numberScale{
            display: none;
            position: absolute;
            text-align: center;
            width: 32px;
            height: 16px;
            line-height: 1;
            margin-left: calc(50% - 16px);
            margin-top: calc(50% - 8px);
            color: $light-black;
            @include m($m-breakpoint){
                display: block;
            }
            @include l($l-breakpoint){
                height: 18px;
                margin-top: calc(50% - 9px);
            }
        }
    }
    .innerScale{
        width: 60%;
        height: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: calc(-30% - 2px);
        margin-top: calc(-30% - 2px);
        border: 2px solid #CED3DCcc;
        border-bottom: none;
        border-radius: 50%;
        transform-style: preserve-3d;
        transform: perspective(1000px) translateZ(-20px);
        .niddle{
            width: 52.5%;
            height: 5px;
            transform-origin: 0 center;
            transform: rotate(150deg);
            position: absolute;
            top: calc(50% - 2.5px);
            left: 50%;
            @include m($m-breakpoint){
                width: 51.5%;
            }
        }
        span{
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #f00;
            box-shadow: 0 0 25px 5px #f00;
            margin: 0 0 0 auto;
            transform-style: preserve-3d;
            transform: perspective(1000px) translateZ(20px);
        }
    }
    .board{
        width: 100%;
        height: 50%;
        margin: auto;
        text-align: center;
        padding-top: 30%;
        h5{
            text-shadow: 0 0 10px $dark-grey;
            transform-style: preserve-3d;
            transform: perspective(1000px) translateZ(-50px);
        }
        p{
            font: $caption-h1;
            width: 90px;
            height: 36px;
            line-height: 1;
            overflow: hidden;
            margin: 5px auto;
            transform-style: preserve-3d;
            transform: perspective(1000px);
            @include s($s-breakpoint){
                font: $caption-s-h1;
                line-height: 1;
            }
            @include m($m-breakpoint){
                font: $caption-m-h1;
                line-height: 1;
                width: 120px;
                height: 48px;
            }
            @include l($l-breakpoint){
                font: $caption-l-h1;
                line-height: 1;
                width: 150px;
                height: 60px;
            }
        }
        span{
            display: block;
            font-size: 12px;
            transform-style: preserve-3d;
            transform: perspective(1000px);
            color: $light-black;
            @include s($s-breakpoint){
                font-size: 16px;
            }
        }
    }
}
</style>