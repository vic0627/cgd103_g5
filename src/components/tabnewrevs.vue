<script>
import outComponents from "../components/outComponents.vue";
export default {
  components: {
    outComponents
  }
};
</script>
<template>
  <div>
    <h2>
      修改內容
      <outComponents />
    </h2>
  </div>
</template>
<style scoped>
div {
  width: 100%;
  height: 100vh;
}
h2 {
  font-size: 40px;
  color: #fff;
  margin: 10px 10px;
  padding: 10px 10px;
  background-color: #597897;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>