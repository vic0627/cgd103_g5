<script setup>
import { onMounted } from 'vue';
import { droneModels, propellorModels } from './js/CustomizeGlb';
import * as CUS from './js/CustomizeThree';
import dashBoardComponent from '@/components/dashBoardComponent.vue';

let ww = window.innerWidth;

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
        customize3d.width = 800;
        customize3d.height = 800;
    };
};

</script>

<template>
    <section class="customize">
        <canvas id="customize3d"></canvas>
        <dash-board-component class="dashBoard"/>
        <div class="customizeControl">
            <div v-for="e in droneModels" :key="e.id" class="bodySelect">
                <h3>{{ e.name }}</h3>
                <div class="colorControls">
                    <div class="colorControl" v-for="n in droneModels[`body0${e.id}`].color" :key="n" @click="CUS.body(e.id, n)"></div>
                </div>
            </div>
            <div v-for="e in propellorModels" :key="e" class="propellorSelect">
                <h3>{{ e.name }}</h3>
                <div class="colorControls">
                    <div class="colorControl" v-for="n in propellorModels[`propellor0${e.id}`].color" :key="n" @click="CUS.propellor(e.id, n)"></div>
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
.dashBoard{
    margin-left: 400px;
}
.customize{
    
}
    #customize3d{
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