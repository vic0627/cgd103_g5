<script setup>
import { onMounted } from 'vue';
import mouseComponentsVue from '../components/mouseComponents.vue';
import * as MOUSE from '@/composables/useMouseMove';
onMounted(()=> {
    MOUSE.useMouseMove();
})
</script>

<template>
    <h1>Shop Info</h1>
    <a
        href="#"
        class="btn"
        data-title="buy now"
        @mouseenter="MOUSE.mouseFocus()"
        @mouseleave="MOUSE.mouseRe()"
    >buy now</a>
    <mouseComponentsVue />
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
.btn{
    @include primaryBtn(120px);
    margin: 40px;
}
</style>