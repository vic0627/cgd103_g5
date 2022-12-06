<script setup>
import { onMounted, ref, onUpdated } from 'vue';
import { droneModels, propellorModels, motorModels, controllerModels } from './js/CustomizeGlb';
import * as CUS from './js/CustomizeThree';
import dashBoardComponent from '@/components/dashBoardComponent.vue';
import { niddleSpin } from '../composables/useDashBoardMove';

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
        customize3d.height = 360;
    }else if(ww<1023){
        customize3d.width = 500;
        customize3d.height = 500;
    }else{
        customize3d.width = 500;
        customize3d.height = 500;
    };
};
const maxSpeed = (rpm, kgm, kgmc = 1) => ((rpm * kgm * kgmc) / (units.value.totalWeight.value * 1000) * 10).toFixed(1);
const accelerateTime = (kgm, kgmc = 1) => (Math.pow(kgm * kgmc, 2) / 40).toFixed(1);
const accelerate = (accelerateTime) => (100 / 3.6 / accelerateTime).toFixed(1);

const bodyChosen = ref(0);

const bodyChoose = (id, n) => {
    CUS.body(id, n);
    units.value.totalWeight.value = (0 + droneModels.value[`body0${id}`].weight)/1000;
    bodyChosen.value = droneModels.value[`body0${id}`].weight;
    niddleSpin(4, units.value.totalWeight.value, units.value.totalWeight.ratio)
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
    niddleSpin(4, units.value.totalWeight.value, units.value.totalWeight.ratio)
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
};
const kgmcChosen = ref(0);
const controllerChoose = (id) => {
    kgmcChosen.value = controllerModels.value[`controller0${id}`].kgmc;
    niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm, kgmcChosen.value), units.value.maxSpeed.ratio);
    niddleSpin(5, accelerateTime(motorChosen.value.kgm, kgmcChosen.value), units.value.accelerateTime.ratio);
    niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm, kgmcChosen.value)), units.value.accelerate.ratio);
};
</script>

<template>
    <section class="customize">
        <canvas id="customize3d"></canvas>
        <div class="dashBoards">
            <dash-board-component class="dashBoard" :units="units.maxSpeed"/>
            <dash-board-component class="dashBoard" :units="units.maxload"/>
            <dash-board-component class="dashBoard" :units="units.rotatingSpeed"/>
            <dash-board-component class="dashBoard" :units="units.totalWeight"/>
            <dash-board-component class="dashBoard" :units="units.accelerateTime"/>
            <dash-board-component class="dashBoard" :units="units.accelerate"/>
        </div>
        
        <div class="customizeControl">
            <div v-for="e in droneModels" :key="e" class="bodySelect">
                <h3>{{ e.name }}</h3>
                <div class="colorControls">
                    <div class="colorControl" v-for="n in droneModels[`body0${e.id}`].color" :key="n" @click="bodyChoose(e.id, n)"></div>
                </div>
            </div>
            <div v-for="e in propellorModels" :key="e" class="propellorSelect">
                <h3>{{ e.name }}</h3>
                <div class="colorControls">
                    <div class="colorControl" v-for="n in propellorModels[`propellor0${e.id}`].color" :key="n" @click="propellorChoose(e.id, n)"></div>
                </div>
            </div>
            <div class="motorSelect">
                <h3>Motor</h3>
                <div class="motorControls">
                    <p class="motorControl" v-for="n in motorModels" :key="n.id" @click="motorChoose(n.id)">{{ n.name }}</p>
                </div>
            </div>
            <div class="controllerSelect">
                <h3>Controller</h3>
                <div class="ControllerControls">
                    <p class="ControllerControl" v-for="n in controllerModels" :key="n.id" @click="controllerChoose(n.id)">{{ n.name }}</p>
                </div>
            </div>
            <div class="removeButtons">
                <button @click="CUS.removePropellor">removePropellor</button>
                <button @click="CUS.removeBody">removeBody</button>
                <button @click="CUS.removeAll">removeAll</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
*{
    /* outline: 1px solid red; */
}
.dashBoards{
    display: flex;
    flex-wrap: wrap;
    .dashBoard{
        margin: 40px;
    }
}
.customize{
    
}
#customize3d{
    outline: 1px solid red;
}
    .colorControls{
        
        .colorControl{
            display: inline-block;
            margin: 0 10px;
            border-radius: 50%;
            border: 2px solid #fff;
            width: 15px;
            height: 15px;
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
</style>