<template>
  <router-link class="out" id="spanOut" to="/backendlogin" >登出
 &rarr;</router-link>
</template>

<style lang="scss" scoped>
@import "@/sass/style.scss";

.out {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
}
</style>

<script setup>
  const props = defineProps(['page01'])

  
</script>
