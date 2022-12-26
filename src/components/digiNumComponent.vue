<script setup>
import { ref, onBeforeUpdate, onUpdated, onMounted } from 'vue';
import gsap from 'gsap';
import { $$, $all, log } from '../composables/useCommon';
import { overLoad } from '../composables/useDashBoardMove';
const num = ref(0);
const props = defineProps(["num", "id", "uid"]);
const isPoint = ref(true), isNum = ref(true);
const color2 = '#ddd';
const color3 = '#e30';
const numStr = () => [...props.num];
const reId = () => [...props.id].pop();
const finNum = () => numStr()[reId()];

const mountNum = () => {
    if(finNum()==='.'){
        isPoint.value = true;
        isNum.value = false;
    }else if(finNum()===undefined){
        isPoint.value = false;
        isNum.value = false;
    }else{
        isPoint.value = false;
        isNum.value = true;
    };
};
mountNum();
onMounted(() => {
    mountNum();
    numRun();
})
onBeforeUpdate(() => {
    
});
onUpdated(() => {
    mountNum();
    numRun();
})
const numFloat = (e, background = 'transparent') => {
    if(!e){
        return;
    }else{
        gsap.to(e, {
            background,
            duration: .3,
        });
    };
};

const ifWarn = (i) => {
    if(overLoad.value[props.uid]){
        $all(`.num${i}${props.id}`).forEach(e => e.classList.add('warn'));
    }else{
        numFloat(`.num${i}${props.id}`, color2);
    }
};
const numRun = () => {
    switch (finNum()) {
        case '0':
            for(let i=1; i<=7; i++){
                if(i!==4){
                    ifWarn(i);
                }else{
                    numFloat(`.num${i}${props.id}`);
                };
            };
            break;
        case '1':
            for(let i=1; i<=7; i++){
                if(i===3||i===6){
                    ifWarn(i);
                }else{
                    numFloat(`.num${i}${props.id}`);
                };
            };
            break;
        case '2':
            for(let i=1; i<=7; i++){
                if(i===2||i===6){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    ifWarn(i);
                };
            };
            break;
        case '3':
            for(let i=1; i<=7; i++){
                if(i===2||i===5){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    ifWarn(i);
                };
            };
            break;
        case '4':
            for(let i=1; i<=7; i++){
                if(i===2||i===3||i===4||i===6){
                    ifWarn(i);
                }else{
                    numFloat(`.num${i}${props.id}`);
                };
            };
            break;
        case '5':
            for(let i=1; i<=7; i++){
                if(i===3||i===5){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    ifWarn(i);
                };
            };
            break;
        case '6':
            for(let i=1; i<=7; i++){
                if(i===3){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    ifWarn(i);
                };
            };
            break;
        case '7':
            for(let i=1; i<=7; i++){
                if(i===4||i===5||i===7){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    ifWarn(i);
                };
            };
            break;
        case '8':
            for(let i=1; i<=7; i++){
                ifWarn(i);
            };
            break;
        case '9':
            for(let i=1; i<=7; i++){
                if(i===5){
                    numFloat(`.num${i}${props.id}`);
                }else{
                    ifWarn(i);
                };
            };
            break;
        case '.':
            if(overLoad.value[props.uid]){
                $$(`.point${props.id}`).classList.add('warn');
            };
            break;
    }
};
</script>

<template>
    <div :class="`point point${props.id}`" v-if="isPoint"></div>
    <div class="numUnit" v-if="isNum">
        <span v-for="i in 7" :key="i" :class="`num num${i} num${i}${props.id} num_${props.uid}`"></span>
    </div>
</template>

<style lang="scss" scoped>
    .point{
        /* outline: 1px solid red; */
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #ddd;
        @media screen and (min-width:576px) {
            width: 6px;
            height: 6px;
        }
        @media screen and (min-width:767px) {
            width: 7px;
            height: 7px;
        }
        @media screen and (min-width:1023px) {
            width: 8px;
            height: 8px;
        }
        @media screen and (min-width:1200px) {
            width: 9px;
            height: 9px;
        }
    }
    .numUnit{
        /* outline: 1px solid red; */
        width: 30px;
        height: 40px;
        position: relative;
        @media screen and (min-width:576px) {
            width: 40px;
            height: 53.333333px;
        }
        @media screen and (min-width:1024px) {
            width: 50px;
            height: 66.666666px;
        }
        @media screen and (min-width:1200px) {
            width: 60px;
            height: 80px;
        }
        
        .num{
            background: #232020;
            display: block;
            border-radius: 30%;
            width: 60%;
            height: 10%;
            clip-path: polygon(0 50%, 10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%);
            position: absolute;
        }
        .num1{
            top: 5%;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
        .num4{
            top: 50%;
            left: 0;
            right: 0;
            margin: -6.5% auto 0;
        }
        .num7{
            bottom: 5%;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
        .num2, .num3, .num5, .num6{
            width: 45%;
            transform: rotate(90deg);
        }
        .num2{
            top: 25%;
            left: -5%;
        }
        .num3{
            top: 25%;
            right: -5%;
        }
        .num5{
            bottom: 25%;
            left: -5%;
        }
        .num6{
            bottom: 25%;
            right: -5%;
        }
    }
    .warn{
        animation: warn .6s ease-out infinite;
    }
    @keyframes warn {
        0%{background: #fff;}
        50%{background: #f00;}
        100%{background: #fff;}
    }
</style>