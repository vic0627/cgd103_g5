<script setup>
import { onMounted } from 'vue';
import mouseComponentsVue from '../components/mouseComponents.vue';
import * as MOUSE from '@/composables/useMouseMove';

onMounted(()=> {
    MOUSE.useMouseMove();
    window.addEventListener('click', ()=> {
        MOUSE.mouseFocus();
    })
    window.addEventListener('keydown', ()=> {
        MOUSE.mouseRe();
    })
})
</script>

<template>
    <mouseComponentsVue />
</template>

<style lang="scss" scoped>

</style>