<script setup>
import gsap from "gsap";
import { onMounted, ref, onBeforeUpdate, onUpdated } from 'vue';
import { log, $$, $all, getW } from '../composables/useCommon';
import { droneModels, propellorModels, motorModels, controllerModels } from './js/CustomizeGlb';
import * as CUS from './js/CustomizeThree';
import dashBoardGroupComponent from '../components/dashBoardGroupComponents.vue';
import { niddleSpin, useDashBoardMove } from '../composables/useDashBoardMove';
import { bodyInit } from '../composables/useOnunmounted';
bodyInit();
let w = null;
let ww = window.innerWidth;
onMounted(()=> {
    //fetchCustom();
    w = getW('.dashBoard');
    canvasRe();
    window.addEventListener('resize', ()=> {
        w = getW('.dashBoard');
        ww = window.innerWidth;
        canvasRe();
    });
    CUS.sceneInit();
    CUS.animation();
});
onBeforeUpdate(() => {
    $$('.loadBox').style.display = 'block';
    gsap.to('.loadProgress', {
        width: CUS.modelLoading.value + '%',
        duration: .1,
    })
    niddleSpin(4, units.value.totalWeight.value, units.value.totalWeight.ratio);
});
onUpdated(() => {
    if(CUS.modelLoading.value===0)$$('.loadBox').style.display = 'none';
});
const customItem = ref([]);
const fetchCustom = () => {
    fetch("http://localhost/dist/g5PHP/getCustomizeItem.php")
        .then(res => res.json())
        .then(json => {
            customItem.value = json;
            log(customItem.value);
        });
};
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
let acc;

const undo = () => {
    btnStatus.value = false;
    step.value[flow.value].show = false;
    switch (flow.value) {
        case 2:
            bodyChosen.value.type = 0;
            bodyChosen.value.color = 0;
            bodyChosen.value.weight = 0;
            propellorChosen.value.type = 0;
            propellorChosen.value.color = 0;
            propellorChosen.value.amount = 0;
            propellorChosen.value.weight = 0;
            CUS.removeAll();
            niddleSpin(4, 0, units.value.totalWeight.ratio);
            $all('.colorControl').forEach(c => c.classList.remove('chosen'));
            break;
        case 3:
            motorChosen.value.type = 0;
            motorChosen.value.kgm = 0;
            motorChosen.value.rpm = 0;
            niddleSpin(1, 0, units.value.maxSpeed.ratio);
            niddleSpin(2, 0, units.value.maxload.ratio);
            niddleSpin(3, 0, units.value.rotatingSpeed.ratio);
            niddleSpin(5, 0, units.value.accelerateTime.ratio);
            niddleSpin(6, 0, units.value.accelerate.ratio);
            $all('.motorControl').forEach(c => c.classList.remove('chosen'));
            break;
        case 4:
            kgmcChosen.value.kgmc = 0;
            kgmcChosen.value.type = 0;
            niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm), units.value.maxSpeed.ratio);
            if(maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm)>=100){
                acc = accelerate(motorChosen.value.kgm);
            }else{
                acc = 0;
            };
            niddleSpin(5, acc, units.value.accelerateTime.ratio);
            niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm)), units.value.accelerate.ratio);
            buyBtn.value = false;
            $all('.controllerControl').forEach(c => c.classList.remove('chosen'));
            break;
    }
    flow.value--;
    step.value[flow.value].show = true;
};
const nextStep = () => {
    if(btnStatus.value){
        step.value[flow.value].show = false;
        flow.value++;
        btnStatus.value = false;
        step.value[flow.value].show = true;
    }else{
        alert('可以先選嗎?');
    }
};

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

const bodyChosen = ref({
    type: 0,
    color: 0,
    weight: 0,
});

const bodyChoose = (id, nid, src) => {
    CUS.body(id, src);
    units.value.totalWeight.value = (0 + droneModels.value[`body0${id}`].weight)/1000;
    bodyChosen.value.weight = droneModels.value[`body0${id}`].weight;
    bodyChosen.value.type = id;
    bodyChosen.value.color = nid;
    btnStatus.value = true;
    $all('.colorControl').forEach(c => c.classList.remove('chosen'));
    $$(`.bodyControl${id}${nid}`).classList.add('chosen');
};
const propellorChosen = ref({
   type: 0,
   color: 0,
   amount: 0,
   weight: 0, 
});
const propellorChoose = (id, nid, src) => {
    CUS.propellor(id, src);
    if(id===1){
        propellorChosen.value.weight = propellorModels.value[`propellor0${id}`].weight * 2;
        propellorChosen.value.amount = 2;
    }else{
        propellorChosen.value.weight = propellorModels.value[`propellor0${id}`].weight * 4;
        propellorChosen.value.amount = 4;
    }
    units.value.totalWeight.value = (bodyChosen.value.weight + propellorChosen.value.weight)/1000;
    propellorChosen.value.type = id;
    propellorChosen.value.color = nid;
    btnStatus.value = true;
    $all('.colorControl').forEach(c => c.classList.remove('chosen'));
    $$(`.propellorControl${id}${nid}`).classList.add('chosen');
};
const motorChosen = ref({
    type: 0,
    rpm: 0,
    kgm: 0,
})
const motorChoose = (id) => {
    motorChosen.value.rpm = motorModels.value[`motor0${id}`].rpm;
    motorChosen.value.kgm = motorModels.value[`motor0${id}`].kgm;
    motorChosen.value.type = id;
    niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm), units.value.maxSpeed.ratio);
    niddleSpin(2, motorChosen.value.kgm, units.value.maxload.ratio);
    niddleSpin(3, motorChosen.value.rpm / 1000, units.value.rotatingSpeed.ratio);
    if(maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm)>=100){
        acc = accelerate(motorChosen.value.kgm);
    }else{
        acc = 0;
    };
    niddleSpin(5, acc, units.value.accelerateTime.ratio);
    niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm)), units.value.accelerate.ratio);
    btnStatus.value = true;
    $all('.motorControl').forEach(c => c.classList.remove('chosen'));
    $$(`.motorControl${id}`).classList.add('chosen');
};
const kgmcChosen = ref({
    type: 0,
    kgmc: 0,
});
const controllerChoose = (id) => {
    kgmcChosen.value.kgmc = controllerModels.value[`controller0${id}`].kgmc;
    niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm, kgmcChosen.value.kgmc), units.value.maxSpeed.ratio);
    if(maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm, kgmcChosen.value.kgmc)>=100){
        acc = accelerateTime(motorChosen.value.kgm, kgmcChosen.value.kgmc);
    }else{
        acc = 0;
    };
    niddleSpin(5, acc, units.value.accelerateTime.ratio);
    niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm, kgmcChosen.value.kgmc)), units.value.accelerate.ratio);
    btnStatus.value = true;
    if(flow.value===4&&btnStatus.value){
        buyBtn.value = true;
    }
    $all('.controllerControl').forEach(c => c.classList.remove('chosen'));
    $$(`.controllerControl${id}`).classList.add('chosen');
};
let toggle = false;
const toggleBoard = () => {
    let left = -354, mrl = -177, mr = '0 0 20px';
    if(ww>=576 && ww<1024){
        left = -554;
        mrl = -277;
        mr = '0 60px 20px';
    }
    if(toggle){
        gsap.to('.boards', {
            right: 'auto',
            left,
            margin: 0,
            duration: .3,
        })
        gsap.to('.tag', {
            position: 'absolute',
            top: '20%',
            right: '-50px',
            width: 60,
            height: 130,
            writingMode: 'vertical-lr',
            lineHeight: '75px',
            fontSize: '16px',
            margin: '0 0 20px',
            duration: 0,
            delay: .3,
        })
        $$('.name').style.display = 'block';
        $all('.cross').forEach(e => {
            gsap.to(e, {
                rotate: 0,
                duration: 0,
                delay: .3,
            })
            e.style.display = 'none';
        });
        toggle = false;
    }else{
        gsap.to('.boards', {
            left: 50 + '%',
            marginLeft: mrl,
            duration: .3,
        });
        gsap.to('.tag', {
            position: 'relative',
            top: 0,
            right: 0,
            width: 60,
            height: 60,
            writingMode: 'inherit',
            lineHeight: 2,
            fontSize: '32px',
            margin: mr,
            duration: 0,
        })
        $$('.name').style.display = 'none';
        $all('.cross').forEach(e => e.style.display = 'block');
        gsap.to($all('.cross')[0], {
            rotate: '45deg',
            duration: .3,
            delay: .3,
        });
        gsap.to($all('.cross')[1], {
            rotate: '-45deg',
            duration: .3,
            delay: .3,
        });
        toggle = true;
    }
};
let toggleColorControl = ref({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
});
const toggleColor = (id) => {
    if(toggleColorControl.value[id]){
        gsap.to($$(`.colorControls${id}`), {
            marginTop: -60,
            marginBottom: 0,
            opacity: 0,
            duration: .3,
        });
        setTimeout(() => {
            toggleColorControl.value[id] = false;
        }, 300)
    }else{
        toggleColorControl.value[id] = true;
        /* if(toggleColorControl.value[id]){
            gsap.from($$(`.colorControls${id}`), {
                marginTop: -30,
                marginBottom: 0,
                opacity: 0,
                duration: .3,
            });
        }; */
    };
    
};

const set = (key, val) => {
    sessionStorage.setItem(key, val)
};

const addCart = () => {
    let prd_body;
    switch (bodyChosen.value.type) {
        case 1:
            prd_body = 'body01';
            break;
        case 2:
            prd_body = 'body02';
            break;
        case 3:
            prd_body = 'body03';
            break;
    }
    switch (bodyChosen.value.color) {
        case 1:
            prd_body += 'black';
            break;
        case 2:
            prd_body += 'blue';
            break;
        case 3:
            prd_body += 'green';
            break;
        case 4:
            prd_body += 'red';
            break;
        case 5:
            prd_body += 'white';
            break;
    }
    switch (propellorChosen.value.type) {
        case 1:
        case 2:
        case 3:
    }
    switch (propellorChosen.value.color) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
    }
    set('test', `{"id":"${bodyChosen.value.type}${bodyChosen.value.color}", "name":"${prd_body}", "amount":"1", "price":"${droneModels.value[`body0${bodyChosen.value.type}`].price}"}`)
};
</script>

<template>
    <nav-component :custom="`#077AF9`"/>
    <section class="customize">
        <canvas id="customize3d" class="customize3d"></canvas>
        <div class="loadBox">
            <div class="loadProgress"></div>
            <p class="loadNum">{{ CUS.modelLoading }}%</p>
        </div>
        <h2 class="customizeTitle">Customize</h2>
        <div class="paths">
            <p>Select</p>
            <p>{{ step[flow].text }}</p>
        </div>
        <div class="customizeControl">
            <div v-for="i in droneModels" :key="i.id" class="bodySelect selection" v-show="step[1].show">
                <div class="itemInfo" @click="toggleColor(i.id)">
                    <h3>{{ i.name }}</h3>
                    <p>Weight: {{ i.weight }}g</p>
                    <p>$ {{ i.price }}</p>
                </div>
                <div :class="`colorControls colorControls${i.id}`" v-if="toggleColorControl[i.id]">
                    <P>Color:</P>
                    <div :class="`colorControl bodyControl${i.id}${n.id}`" v-for="n in droneModels[`body0${i.id}`].color" :key="n.id" @click="bodyChoose(i.id, n.id, n.src)"></div>
                </div>
            </div>
            <div v-for="e in propellorModels" :key="e.id" class="propellorSelect selection" v-show="step[2].show">
                <div class="itemInfo" @click="toggleColor(e.id+3)">
                    <h3>{{ e.name }}</h3>
                    <p>Weight: {{ e.weight }}g</p>
                    <p>$ {{ e.price }}</p>
                </div>
                <div :class="`colorControls colorControls${e.id+3}`" v-if="toggleColorControl[e.id+3]">
                    <P>Color:</P>
                    <div :class="`colorControl propellorControl${e.id}${n.id}`" v-for="n in propellorModels[`propellor0${e.id}`].color" :key="n.id" @click="propellorChoose(e.id, n.id, n.src)"></div>
                </div>
            </div>
            <div class="motorSelect selection" v-show="step[3].show">
                <h3>Motor</h3>
                <div class="motorControls funcControls">
                    <p :class="`motorControl${n.id} motorControl funcControl`" v-for="n in motorModels" :key="n.id" @click="motorChoose(n.id)">{{ n.name }}</p>
                </div>
            </div>
            <div class="controllerSelect selection" v-show="step[4].show">
                <h3>Controller</h3>
                <div class="controllerControls funcControls">
                    <p :class="`controllerControl${n.id} controllerControl funcControl`" v-for="n in controllerModels" :key="n.id" @click="controllerChoose(n.id)">{{ n.name }}</p>
                </div>
            </div>
            <div class="flowControls">
                <div class="undo" data-title="Undo" v-show="step[flow].sBtn" @click="undo">
                    <span>Undo</span>
                </div>
                <div class="nextStep" data-title="Choose" v-show="step[flow].pBtn" @click="nextStep">
                    <span>Choose</span>
                </div>
                <router-link class="nextStep buyBtn" data-title="Buy" v-show="buyBtn" to="/cart" @click="addCart">
                    <span>Buy</span>
                </router-link>
            </div>
        </div>
    </section>
    <dash-board-group-component class="boards" :toggle-board="toggleBoard" />
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
.loadBox{
    width: 150px;
    height: 20px;
    position: absolute;
    top: 35%;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
    border: 2px solid $light-black;
    background: $black;
    display: none;
    @include m($m-breakpoint) {
        top: 40%;
        right: 40%;
        left: 0;
    }
    @include l($l-breakpoint) {
        top: 50%;
        width: 200px;
        height: 30px;
    }
    .loadProgress{
        width: 0%;
        height: 100%;
        border-radius: 15px;
        background: linear-gradient(to right, $blue, $purple);
    }
    .loadNum{
        text-align: center;
        position: absolute;
        top: 0;
        width: 100%;
    }
}
.boards{
    position: absolute;
    top: 15%;
    left: -354px;
    z-index: 1;
    @include s($s-breakpoint) {
        left: -554px;
    }
    @include m($m-breakpoint) {
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: -1;
    }
}
.customize{
    width: 100%;
    height: auto;
    max-width: 1200px;
    position: relative;
    margin: 0 auto;
    padding-top: 80px;
    @include m($m-breakpoint) {
        height: 100vh;
    }
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
            animation: path 1s linear infinite;
        }
    }
}
@keyframes path {
    0%{color: #eee;}
    50%{color: $purple;}
    100%{color: #eee;}
}

.customizeControl{
    box-sizing: border-box;
    margin: 360px auto 20%;
    padding: 30px 0;
    border-radius: 20px;
    border: 2px solid $grey;
    background: $black;
    width: 90%;
    @include s($s-breakpoint) {
        margin-top: 480px;
        width: 575px;
        background: #25242499;
    }
    @include m($m-breakpoint) {
        margin: 60px auto 0 60%;
        width: 320px;
    }
    .selection{
        width: 90%;
        margin: 0 auto 40px;
        position: relative;
        .itemInfo{
            position: relative;
            z-index: 1;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding: 15px;
            border-radius: 15px;
            background: linear-gradient(to right, $purple, $blue);
            h3{
                width: 100%;
            }
            p:nth-child(2){
                width: 70%;
            }
            p:nth-child(3){
                width: 30%;
                text-align: right;
            }
        }
        .funcControls{
            margin: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .funcControl{
                cursor: pointer;
                border: 2px solid $dark-grey;
                padding: 10px;
                border-radius: 20px;
                margin: 10px 40px;
            }
        }
    }
}
.colorControls{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    transition: all .3s;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 0 0 15px 15px;
    background: $black;
    border-bottom: 2px solid $light-black;
    border-left: 2px solid $light-black;
    border-right: 2px solid $light-black;
    p{
        width: 100%;
    }
    .colorControl{
        border-radius: 50%;
        border: 2px solid #fff;
        width: 20px;
        height: 20px;
        margin: 10px auto;
        background: #fff;
        cursor: pointer;
    }
    .colorControl:nth-child(2){
        background: black;
    }
    .colorControl:nth-child(3){
        background: blue;
    }
    .colorControl:nth-child(4){
        background: green;
    }
    .colorControl:nth-child(5){
        background: red;
    }
    .colorControl:nth-child(6){
        background: white;
    }
}
.chosen{
    box-shadow: 0 0 0 5px $ored;
    transition: all .3s;
}
.flowControls{
    display: flex;
    justify-content: space-around;
    .undo{
        @include secondBtn(60px);
    }
    .nextStep{
        @include primaryBtn(100px);
    }
    .buyBtn{
        @include primaryBtn(100px);
    }
}

</style>