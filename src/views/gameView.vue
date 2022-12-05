<script setup>
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