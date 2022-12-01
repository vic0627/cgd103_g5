<script setup>
// import { onMounted, reactive } from 'vue';
// import $ from 'jquery';
// onMounted(() => {});
 

</script>

<template>
    <svg class="line" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient y2="0" x2="1" y1="0" x1="0" id="svg_10">
                <stop offset="0" stop-opacity="0.99609" stop-color="#077af9"/>
                <stop offset="1" stop-opacity="0.99609" stop-color="#9c4dd6"/>
            </linearGradient>
        </defs>
        <g>
        <title>Layer 1</title>
        <path stroke="url(#svg_10)" style="vector-effect: non-scaling-stroke;" transform="translate(-6 16) translate(28 -40) translate(-98 -41) translate(53 97.9532) scale(1.32612 1.32612) translate(-53 -97.9532)" id="svg_9" d="m53,176.2c81,-76 197,-108 207,-44c10,64 -36,224 57,236c93,12 210,-72 205,-130" opacity="NaN" stroke-opacity="0.5" stroke-dasharray="5,5" stroke-width="5" fill="url(#svg_5)"/>
        </g>
    </svg>  

</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
.line {
    position: absolute;
    z-index: -1;
    left: -10%;
    bottom: -20%;
    rotate: 30deg;
}
</style>