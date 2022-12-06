<script setup>
import { onMounted, ref, onUpdated } from 'vue';
import { droneModels, propellorModels, motorModels, controllerModels } from './js/CustomizeGlb';
import * as CUS from './js/CustomizeThree';
import dashBoardComponent from '@/components/dashBoardComponent.vue';
import { niddleSpin } from '../composables/useDashBoardMove';
import { bodyInit } from '../composables/useOnunmounted';
bodyInit();

let ww = window.innerWidth;
const units = ref({
    maxSpeed: {
        'id': 1,
        title: 'Max Speed',
        unit: 'km/h',
        value: 0,
        ratio: 1.5,
        scale: {
            1: 160,
            2: 140,
            3: 120,
            4: 100,
            5: 80,
            6: 60,
            7: 40,
            8: 20,
            9: 0,
        },
    },
    maxload: {
        'id': 2,
        title: 'Max Load',
        unit: 'kg',
        value: 0,
        ratio: 6,
        scale: {
            1: 40,
            2: 35,
            3: 30,
            4: 25,
            5: 20,
            6: 15,
            7: 10,
            8: 5,
            9: 0,
        },
    },
    rotatingSpeed: {
        'id': 3,
        title: 'Rotating Speed',
        unit: 'x1000 rpm',
        value: 0,
        ratio: 30,
        scale: {
            1: 8,
            2: 7,
            3: 6,
            4: 5,
            5: 4,
            6: 3,
            7: 2,
            8: 1,
            9: 0,
        },
    },
    totalWeight: {
        'id': 4,
        title: 'Total Weight',
        unit: 'kg',
        value: 0,
        ratio: 30,
        scale: {
            1: 8,
            2: 7,
            3: 6,
            4: 5,
            5: 4,
            6: 3,
            7: 2,
            8: 1,
            9: 0,
        },
    },
    accelerateTime: {
        'id': 5,
        title: '100km/h',
        unit: 's',
        value: 0,
        ratio: 30,
        scale: {
            1: 8,
            2: 7,
            3: 6,
            4: 5,
            5: 4,
            6: 3,
            7: 2,
            8: 1,
            9: 0,
        },
    },
    accelerate: {
        'id': 6,
        title: 'Accelerate',
        unit: 'm/s^2',
        value: 0,
        ratio: 10,
        scale: {
            1: 24,
            2: 21,
            3: 18,
            4: 15,
            5: 12,
            6: 9,
            7: 6,
            8: 3,
            9: 0,
        },
    },
})
const step = ref({
    1: {id: 1,
        text: 'Body',
        show: true,
        sBtn: false,
        pBtn: true,
    },
    2: {id: 2,
        text: 'Propellor',
        show: false,
        sBtn: true,
        pBtn: true,
    },
    3: {id: 3,
        text: 'Motor',
        show: false,
        sBtn: true,
        pBtn: true,
    },
    4: {id: 4,
        text: 'Controller',
        show: false,
        sBtn: true,
        pBtn: false,
    },
});
const flow = ref(1);
const btnStatus = ref(false);
const buyBtn = ref(false);
const undo = () => {
    btnStatus.value = false;
    step.value[flow.value].show = false;
    switch (flow.value) {
        case 2:
            bodyChosen.value = 0;
            CUS.removeBody();
            CUS.removePropellor();
            niddleSpin(4, 0, units.value.totalWeight.ratio);
        case 3:
            motorChosen.value.kgm = 0;
            motorChosen.value.rpm = 0;
            niddleSpin(1, 0, units.value.maxSpeed.ratio);
            niddleSpin(2, 0, units.value.maxload.ratio);
            niddleSpin(3, 0, units.value.rotatingSpeed.ratio);
            niddleSpin(5, 0, units.value.accelerateTime.ratio);
            niddleSpin(6, 0, units.value.accelerate.ratio);
        case 4:
            kgmcChosen.value = 0;
            niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm), units.value.maxSpeed.ratio);
            niddleSpin(5, accelerateTime(motorChosen.value.kgm), units.value.accelerateTime.ratio);
            niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm)), units.value.accelerate.ratio);
            buyBtn.value = false;
    }
    flow.value--;
    step.value[flow.value].show = true;
};
const nextStep = () => {
    if(flow.value===3){
        buyBtn.value = true;
    }
    if(btnStatus.value){
        step.value[flow.value].show = false;
        flow.value++;
        btnStatus.value = false;
        step.value[flow.value].show = true;
    }else{
        alert('可以先選嗎?');
    }
};
onMounted(()=> {
    canvasRe();
    window.addEventListener('resize', ()=> {
        ww = window.innerWidth;
        canvasRe();
    });
    CUS.sceneInit();
    CUS.animation();
});

const canvasRe = () => {
    if(ww<575){
        customize3d.width = ww;
        customize3d.height = 300;
    }else if(ww<1023){
        customize3d.width = 400;
        customize3d.height = 400;
    }else{
        customize3d.width = 500;
        customize3d.height = 500;
    };
};
const maxSpeed = (rpm, kgm, kgmc = 1) => parseInt((rpm * kgm * kgmc) / (units.value.totalWeight.value * 1000) * 10);
const accelerateTime = (kgm, kgmc = 1) => (Math.pow(kgm * kgmc, 2) / 40).toFixed(1);
const accelerate = (accelerateTime) => (100 / 3.6 / accelerateTime).toFixed(1);

const bodyChosen = ref(0);

const bodyChoose = (id, n) => {
    CUS.body(id, n);
    units.value.totalWeight.value = (0 + droneModels.value[`body0${id}`].weight)/1000;
    bodyChosen.value = droneModels.value[`body0${id}`].weight;
    niddleSpin(4, units.value.totalWeight.value, units.value.totalWeight.ratio);
    btnStatus.value = true;
};
const propellorChoose = (id, n) => {
    CUS.propellor(id, n);
    let propellorSum;
    if(id===1){
        propellorSum = propellorModels.value[`propellor0${id}`].weight * 2;
    }else{
        propellorSum = propellorModels.value[`propellor0${id}`].weight * 4;
    }
    units.value.totalWeight.value = (bodyChosen.value + propellorSum)/1000;
    niddleSpin(4, units.value.totalWeight.value, units.value.totalWeight.ratio);
    btnStatus.value = true;
};
const motorChosen = ref({
    rpm: 0,
    kgm: 0,
})
const motorChoose = (id) => {
    motorChosen.value.rpm = motorModels.value[`motor0${id}`].rpm;
    motorChosen.value.kgm = motorModels.value[`motor0${id}`].kgm;
    niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm), units.value.maxSpeed.ratio);
    niddleSpin(2, motorChosen.value.kgm, units.value.maxload.ratio);
    niddleSpin(3, motorChosen.value.rpm / 1000, units.value.rotatingSpeed.ratio);
    niddleSpin(5, accelerateTime(motorChosen.value.kgm), units.value.accelerateTime.ratio);
    niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm)), units.value.accelerate.ratio);
    btnStatus.value = true;
};
const kgmcChosen = ref(0);
const controllerChoose = (id) => {
    kgmcChosen.value = controllerModels.value[`controller0${id}`].kgmc;
    niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm, kgmcChosen.value), units.value.maxSpeed.ratio);
    niddleSpin(5, accelerateTime(motorChosen.value.kgm, kgmcChosen.value), units.value.accelerateTime.ratio);
    niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm, kgmcChosen.value)), units.value.accelerate.ratio);
    btnStatus.value = true;
};
</script>

<template>
    <nav-component />
    <section class="customize">
        <canvas id="customize3d" class="customize3d"></canvas>
        <h2 class="customizeTitle">Customize</h2>
        <div class="paths">
            <p>Select</p>
            <p>{{ step[flow].text }}</p>
        </div>
        <div class="customizeControl">
            <div v-for="e in droneModels" :key="e.id" class="bodySelect selection" v-show="step[1].show">
                <h3>{{ e.name }}</h3>
                <div class="colorControls">
                    <div class="colorControl" v-for="n in droneModels[`body0${e.id}`].color" :key="n" @click="bodyChoose(e.id, n)"></div>
                </div>
            </div>
            <div v-for="e in propellorModels" :key="e.id" class="propellorSelect selection" v-show="step[2].show">
                <h3>{{ e.name }}</h3>
                <div class="colorControls">
                    <div class="colorControl" v-for="n in propellorModels[`propellor0${e.id}`].color" :key="n" @click="propellorChoose(e.id, n)"></div>
                </div>
            </div>
            <div class="motorSelect selection" v-show="step[3].show">
                <h3>Motor</h3>
                <div class="motorControls funcControls">
                    <p class="motorControl funcControl" v-for="n in motorModels" :key="n.id" @click="motorChoose(n.id)">{{ n.name }}</p>
                </div>
            </div>
            <div class="controllerSelect selection" v-show="step[4].show">
                <h3>Controller</h3>
                <div class="ControllerControls funcControls">
                    <p class="ControllerControl  funcControl" v-for="n in controllerModels" :key="n.id" @click="controllerChoose(n.id)">{{ n.name }}</p>
                </div>
            </div>
            <div class="flowControls">
                <div class="undo" data-title="undo" v-show="step[flow].sBtn" @click="undo">
                    <span>undo</span>
                </div>
                <div class="nextStep" data-title="next" v-show="step[flow].pBtn" @click="nextStep">
                    <span>next</span>
                </div>
                <router-link class="nextStep buyBtn" data-title="Buy Now" v-show="buyBtn" to="/cart">
                    <span>Buy Now</span>
                </router-link>
            </div>
        </div>
        <div class="dashBoards">
            <h3>Drone Data</h3>
            <dash-board-component class="dashBoard" :units="units.maxSpeed"/>
            <dash-board-component class="dashBoard" :units="units.maxload"/>
            <dash-board-component class="dashBoard" :units="units.rotatingSpeed"/>
            <dash-board-component class="dashBoard" :units="units.totalWeight"/>
            <dash-board-component class="dashBoard" :units="units.accelerateTime"/>
            <dash-board-component class="dashBoard" :units="units.accelerate"/>
        </div>
    </section>
    <footer-component />
</template>

<style lang="scss" scoped>
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
@import '@/sass/component/_btn.scss';

.customize3d{
    margin: 0 auto;
    position: absolute;
    top: 170px;
    left: 0;
    right: 0;
    background: radial-gradient(#CED3DC33, transparent 70%);
    @include m($m-breakpoint) {
        right: 40%;
        left: 0;
    }
    @include l($l-breakpoint) {
        top: 190px;
    }
}
.dashBoards{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    @include s($s-breakpoint) {
        width: 575px;
        margin: 0 auto;
    }
    @include m($m-breakpoint) {
        width: 1000px;
        margin: 0 auto;
    }
    @include l($l-breakpoint) {
        width: 1200px;
        margin: 0 auto;
    }
    h3{
        margin-top: 20px;
        width: 100%;
        text-align: center;
        @include m($m-breakpoint) {
            margin-top: 60px;
        }
    }
    .dashBoard{
        margin: 20px;
    }
}
.customize{
    width: 100%;
    max-width: 1200px;
    position: relative;
    margin: 0 auto;
    padding-top: 80px;
    .customizeTitle{
        position: relative;
        z-index: 1;
        width: 90%;
        margin: 0 auto;
        text-align: left;
        @include l($l-breakpoint) {
            width: 1200px;
        }
    }
    .paths{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        width: 90%;
        position: absolute;
        width: 90%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 138px;
        @include l($l-breakpoint) {
            width: 1200px;
            top: 145px;
        }
        p{
            text-align: center;
            width: 100px;
        }
        p:nth-child(2){
            text-align: left;
            width: 100px;
            color: $brown;
        }
    }
}

.customizeControl{
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 360px;
    padding: 10px 0 20px;
    border-radius: 20px;
    border: 2px solid $brown;
    background: $black;
    width: 90%;
    @include s($s-breakpoint) {
        margin-top: 480px;
        width: 575px;
    }
    @include m($m-breakpoint) {
        margin: 60px auto 0 60%;
        width: 320px;
    }
    .selection{

        h3{
            text-align: center;
        }
        .funcControls{
            margin: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .funcControl{
                border: 2px solid $dark-grey;
                padding: 10px;
                border-radius: 20px;
                margin: 10px 40px;
            }
        }
    }
}
.colorControls{
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;
    .colorControl{
        border-radius: 50%;
        border: 2px solid #fff;
        width: 20px;
        height: 20px;
        background: #fff;
        cursor: pointer;
    }
    .colorControl:nth-child(1){
        background: black;
    }
    .colorControl:nth-child(2){
        background: blue;
    }
    .colorControl:nth-child(3){
        background: green;
    }
    .colorControl:nth-child(4){
        background: red;
    }
    .colorControl:nth-child(5){
        background: white;
    }
}
.flowControls{
    display: flex;
    justify-content: space-around;
    .undo{
        @include secondBtn(60px);
    }
    .nextStep{
        @include primaryBtn(60px);
    }
    .buyBtn{
        @include primaryBtn(100px);
    }
}

</style>