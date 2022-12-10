<script setup>
import { ref } from 'vue';
import dashBoardComponent from '@/components/dashBoardComponent.vue';
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
});
</script>

<template>
    <div class="dashBoards">
        <h2>Dash Board</h2>
        <dash-board-component class="dashBoard" v-for="i in units" :key="i.id" :units="i"/>
    </div>
</template>

<style lang="scss" scoped>
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
.dashBoards{
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 2px solid $light-black;
    border-radius: 20px;
    box-shadow: 0 0 10px 1px $light-black;
    backdrop-filter: blur(3px);
    @include s($s-breakpoint){
        width: 550px;
    }
    @include m($m-breakpoint){
        width: 100%;
        box-shadow: none;
        border: none;
        border-radius: 0;
    }
    h2{
        margin-top: 10px;
        width: 100%;
        text-align: center;
        @include s($s-breakpoint){
            margin: 10px 0;
        }
        @include m($m-breakpoint){
            display: none;
        }
    }
    .dashBoard{
        margin: 20px 0;
        @include s($s-breakpoint){
            margin: 10px 0;
        }
        @include m($m-breakpoint){
            margin: 40px 2%;
        }
        @include l($l-breakpoint){
            margin: 40px 5%;
        }
    }
}
</style>