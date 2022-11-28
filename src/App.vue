<script setup>
import { onMounted } from 'vue';
import mouseComponentsVue from './components/mouseComponents.vue';
import * as MOUSE from '@/composables/useMouseMove';
onMounted(() => {
    const ww = window.innerWidth;
    if (ww>1024) {
        MOUSE.useMouseMove();
    };
});
</script>

<template>
  <mouse-components-vue />
  <router-view></router-view>
</template>

<style scoped>
</style>
