<script setup>
import { onMounted, ref, onBeforeUpdate } from 'vue';
import digiNumComponentVue from './digiNumComponent.vue';
import { log, $$, $all, getW } from '../composables/useCommon';
import gsap from 'gsap';
import { useDashBoardMove, niddleSpin, deg} from '../composables/useDashBoardMove';
let w = null, innerW = null, numW = null, ww;

onMounted(() => {
    ww = window.innerWidth;
    w = getW('.dashBoard');
    innerW = getW('.innerScale')+1.5;
    numW = getW('.numberScales');
    scaleSum();
    window.addEventListener('resize', () => {
        w = getW('.dashBoard');
        innerW = getW('.innerScale')+1.5;
        numW = getW('.numberScales');
        ww = window.innerWidth;
        scaleSum();
    });
    niddleSpin(props.units.id, props.units.value, props.units.ratio);
});
onBeforeUpdate(() => {
    $all(`.num`).forEach(e => e.classList.remove('warn'));
    $all(`.point`).forEach(e => e.classList.remove('warn'));
});
const r = 2 * Math.PI / 12;
const Y = (e, width = w) => Math.sin(e) * -width + 'px';
const X = (e, width = w) => Math.cos(e) * width + 'px';
const rToD = (e) => e * 180 / Math.PI;
const groupStyling = (e, prop = "background", val = "#f00") => $all(e).forEach(e => e.style[prop] = val)
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
    scale(`.numberScale1`, Y(-r, numW), X(-r, numW), 'auto', 0);
    for(let i=0; i<=7; i++){
        scale(`.longScale${i+2}`, Y(r*i), X(r*i), 'auto', rToD(-r*i));
        scale(`.numberScale${i+2}`, Y(r*i, numW), X(r*i, numW), 'auto', 0);
        if(i<2){
            groupStyling(`.longScale${i+1}`);
            groupStyling(`.numberScale${i+1}`, "color");
        }
    }
    for(let i=1; i<=5; i++){
        scale(`.shortScale${i}`, Y(-r/6*(6-i)), X(-r/6*(6-i)), 'auto', rToD(r/6*(6-i)));
    }
    for(let i=6; i<=47; i++){
        scale(`.shortScale${i}`, Y(r/6*(i-6)), X(r/6*(i-6)), 'auto', rToD(-r/6*(i-6)));
        if(i<17){
            groupStyling(`.shortScale${i-5}`, "background", "#f008");
        }
    }
};

const props = defineProps(["units"]);
</script>
<template>
    <div :class="`dashBoard dashBoard${props.units.id}`">
        <div v-for="n in 47" :key="n" :class="`shortScale shortScale${n}`"></div>
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
            <!-- <p :class="`boardP boardP${props.units.id}`">{{ deg[props.units.id] }}</p> -->
            <div class="digiBoard">
                <digi-num-component-Vue :num="String(deg[props.units.id])" :id="props.units.id+'0'" :uid="props.units.id"/>
                <digi-num-component-Vue :num="String(deg[props.units.id])" :id="props.units.id+'1'" :uid="props.units.id"/>
                <digi-num-component-Vue :num="String(deg[props.units.id])" :id="props.units.id+'2'" :uid="props.units.id"/>
                <digi-num-component-Vue :num="String(deg[props.units.id])" :id="props.units.id+'3'" :uid="props.units.id"/>
            </div>
            <span :class="`boardSpan boardSpan${props.units.id}`">{{ props.units.unit }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
.skewX{
    transform: skewX(-15deg);
    font-style: italic;
    transition: all .5s;
}
.dashBoard{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    background: radial-gradient(#CED3DC66, transparent 70%);
    transform-style: preserve-3d;
    transform-origin: 0% center;
    transform: perspective(1000px);
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
        background: #CED3DC;
        position: absolute;
        margin: calc(50% - 1px) auto auto 46%;
    }
    .shortScale{
        width: 8%;
        height: 2px;
        background: #CED3DC88;
        position: absolute;
        margin: calc(50% - 1px) auto auto 46%;
        clip-path: polygon(0 0, 60% 0, 60% 100%, 0 100%);
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
            text-shadow: 0 0 10px $dark-grey;
            transform-style: preserve-3d;
            transform: perspective(1000px);
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
        box-shadow: 0 3px 10px 2px $black inset;
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
            @include l($l-breakpoint){
                outline: 1px solid red;
                width: 70%;
                height: 10px;
                top: calc(50% - 5px);
                background: linear-gradient($black, #f00);
                clip-path: polygon(0 50%, 5% 0, 95% 30%, 100% 50%, 95% 70%, 5% 100%);
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
            @include l($l-breakpoint){
                display: none;
            }
        }
    }
    .board{
        width: 100%;
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
            text-shadow: 0 0 10px $dark-grey;
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
        .digiBoard{
            display: flex;
            justify-content: center;
            align-items: end;
            background: radial-gradient(#0008 , transparent 50%);
            margin: 5px auto;
        }
        span{
            display: block;
            font-size: 12px;
            transform-style: preserve-3d;
            transform: perspective(1000px);
            color: $light-black;
            text-shadow: 0 0 10px $dark-grey;
            @include s($s-breakpoint){
                font-size: 16px;
            }
        }
    }
}

</style>