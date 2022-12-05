<script setup>
import { ref } from 'vue';
import textComponent from '../components/test.vue';
import img1 from '@/assets/images/home/dji1.jpg';
import img2 from '@/assets/images/home/dji2.jpg';
import img3 from '@/assets/images/home/dji3.jpg';
import img4 from '@/assets/images/home/dji4.jpg';
const imgSrcImport = ref([
    img1, img2, img3, img4
])

const imgSrc = ref([
    '@/assets/images/home/dji1.jpg',
    '@/assets/images/home/dji2.jpg',
    '@/assets/images/home/dji3.jpg',
    '@/assets/images/home/dji4.jpg',
])

const alt = ref([
    '一', '二', '三'
])

const count = ref(0)
</script>

<template>
    <button @click="count--">--</button>
    <textComponent :alt="alt[count]" />
    <button @click="count++">++</button>
</template>

<style>
.box{
    width: 1000px;
    height: 1000px;
    /* background-image: url('../assets/images/home/contest.png'); */
}
</style>