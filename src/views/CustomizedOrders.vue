<script setup>
import headerComponentsVue from '@/components/headerComponents.vue';
import { ref, onMounted, createApp } from 'vue';



const aa = ref({
    name:"hihi",
    age : ["apple","water"],
    
});
console.log("aa:",aa.value.name);



const state = ref({
     count: 0 ,
});

function increment() {
  state.value.count++;
}
console.log("state:",state.value);



onMounted(()=> {

})


</script>

<template>
    <headerComponentsVue />
    <div>{{aa.name}}</div>
    <div>{{aa.age[0]}}</div>

    <button @click="increment">{{ state.count }}</button>
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';


*{
    color: white;
}

</style>