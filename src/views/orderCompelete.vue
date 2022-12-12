<script setup>
import { ref, reactive,onMounted } from 'vue';
import $ from 'jquery';
import navComponentsVue from '@/components/navComponents.vue';

const customer1 = reactive(
    {
    "custNo":1,
    "FirstName":"LILY",
    "LastName":"LIU",
    "Phone":"0911111111",
    "OrderList":"EFPV Avata advance bundle",
    "OrderQty":2,
    "Address":"50 Hagiwara Tea Garden Dr, San Francisco, CA"    
    }
)
</script>
<template>
    <h2>SHOPPING CART</h2>

</template>

<style scoped lang="scss">


</style>