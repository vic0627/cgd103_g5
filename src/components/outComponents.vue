<script setup>
import { ref, onMounted} from 'vue';
import { BIND_URL } from '../composables/useCommon';
onMounted(()=>{
  document.getElementById('btnLogout').onclick = newOut;
  function newOut(){
  alert("登出後台");
  fetch(`${BIND_URL('adminloginout.php','g5PHP')}`,{
    method:"get",
  })
  .then((res)=> res.text())
  .then((text)=> console.log(text))
  .catch(error=>console.log(error));}
  sessionStorage.clear();
})
const props = defineProps(['page01'])
</script>

<template>
  <router-link class="out"  to="/backendlogin" ><button type="submit" id="btnLogout" >登出 &rarr;</button></router-link>
</template>

<style lang="scss" scoped>
@import "@/sass/style.scss";
#btnLogout{
  background: transparent;
  border:none;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}

</style>

