<script setup>
import { onMounted } from 'vue';
import mouseComponentsVue from '../components/mouseComponents.vue';
import * as MOUSE from '@/composables/useMouseMove';
onMounted(()=> {
    MOUSE.useMouseMove();
});

</script>


<template>
<<<<<<< HEAD
</template>

<style>
=======
    <!-- <headerComponents/> -->
    <header class="home1">
        <h2>Mavic 2 Zoom</h2>
        <p>24~28 mm Optical Zoom Camers Ulitimate Flexibility</p>
        <div class="home1-btn">
            <a href="#" class="btn" id="btn1" data-title="Learn"  @mouseenter="MOUSE.mouseFocus()"
        @mouseleave="MOUSE.mouseRe()">
                <span>Learn</span>
            </a>
            <mouseComponentsVue />
            <a href="#" class="btn" id="btn2" data-title="Buy now"  @mouseenter="MOUSE.mouseFocus()"
        @mouseleave="MOUSE.mouseRe()">
                <span>Buy now</span>
            </a>
            <mouseComponentsVue />
        </div>
        <div class="img">
            <img src="../assets/images/home/drone5.png" alt="">
        </div>
        <!-- <h1><span>wqhfhfw</span></h1> -->
    </header>
</template>

<style lang="scss">
@import '@/sass/style.scss';

.img {
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    img {
        width: 60%;
         position: relative;
    z-index: 2;
    }
}
>>>>>>> Felix
</style>
