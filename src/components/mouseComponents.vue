<script setup>
const ww = window.innerWidth;
</script>

<template>
    <div id="mouse" v-if="ww>1024"></div>
</template>

<style lang="scss" scoped>
    #mouse{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        box-shadow: 0 0 20px 4px #fff;
        backdrop-filter: invert(100%);
        position: fixed;
        z-index: 99;
        pointer-events: none;
        transform-style: preserve-3d;      
    }
</style>