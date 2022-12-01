<script setup>
import { onMounted } from 'vue';
import * as CUS from './js/CustomizeThree';

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
        <div class="customizeControl">
            <div v-for="e in 3" :key="e" class="bodySelect">
                <h3>body{{e}}</h3>
                <div class="colorControls">
                    <div :class="`colorControl colorControl${n}`" v-for="n in 5" :key="n" @click="CUS.body(e,n)"></div>
                </div>
            </div>
            <div v-for="e in 3" :key="e" class="propellorSelect">
                <h3>propellor{{e}}</h3>
                <div class="colorControls">
                    <div :class="`colorControl colorControl${n}`" v-for="n in 5" :key="n" @click="CUS.propellor(e,n)"></div>
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
.customize{
    display: flex;
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
        .colorControl1{
            background: black;
        }
        .colorControl2{
            background: blue;
        }
        .colorControl3{
            background: green;
        }
        .colorControl4{
            background: red;
        }
        .colorControl5{
            background: white;
        }
    }
</style>