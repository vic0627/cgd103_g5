<script setup>
import headerComponentsVue from '@/components/headerComponents.vue';
import { ref, onMounted, createApp } from 'vue';




const aa = ref({
    name:"hihi",
    age : ["apple","water"],
    
});
console.log("aa:",aa.value.name);

const nestedData = ref({
  product: {
    M1: "Macbook Air M1 2020",
    M2: "Macbook Air M2 2022",
  },
  retina: {
    M1: "13.3 吋",
    M2: "13.6 吋",
  },
  chips: {
    M1: "Apple M1 晶片",
    M2: "Apple M2 晶片",
  },
});

const greeting = ref("123123");


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
    <div>{{greeting}}</div>

    <button @click="increment">{{ state.count }}</button>


    <div class="wrapper">
        <div
            v-for="(categoryContent, categoryName) in nestedData"
            :key="categoryName"
            
        >
            <p>{{ categoryName }}</p>
            <div v-for="(content, chip) in categoryContent" :key="content">
                <p>{{ content }}</p>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';


*{
    color: white;
}

</style>



