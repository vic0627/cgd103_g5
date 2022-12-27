<script setup>
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import menuVue from "@/components/memberCenter/menu.vue";
import memberCardVue from "@/components/memberCenter/memberCard.vue";
import memberLevelVue from "@/components/memberCenter/memberLevel.vue";
// import $ from 'jquery';
import { reactive, onMounted, ref, defineComponent, h, computed } from "vue";
import { log } from "../composables/useCommon";

const racebook = ref({
  regis_no: "",
  comp_no: "",
  regis_date: "",
  // orders_status: "",
  // mem_no: "",
});
const nmorders = ref([]);
const getMemberNm = () => {
  fetch("/dist/g5PHP/getRacing.php", {
    method: "get",
  })
    .then((res) => {
      return res.json();
    })
    .then((mem) => {
      console.log(mem);
      console.log(nmorders.value);
      nmorders.value = mem;
    });
};
onMounted(() => {
  getMemberNm();
});
</script>

<template>
  <navComponentsVue />
  <div class="main">
    <menuVue />
    <div class="maincontent">
      <section class="maininfo">
        <memberCardVue />
        <memberLevelVue />
      </section>
      <section class="profiles-list">
        <h1>My Racing</h1>
        <table v-for="(item, index) in nmorders" :key="index">
          <thead>
            <th>Registration Number</th>
            <th>Race No.</th>
            <th>Registration Date</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>{{ nmorders[index].regis_no }}</span>
              </td>
              <td>{{ nmorders[index].comp_no }}</td>
              <td>{{ nmorders[index].regis_date }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
  <footerComponentsVue />
</template>

<style scoped lang="scss">
@import "@/sass/style.scss";
header {
  top: 0;
}
table {
  text-align: center;
  width: 100%;
  margin: 30px auto;
}
tr {
  border-top: 1px solid #777;
}
th {
  background: #bbb;
  padding: 20px;
}
td {
  vertical-align: middle;
  background: #fff;
}
td {
  height: 80px;
}
tr:hover {
  background: #333;
}
table thead th:first-child {
  border-radius: 10px 0 0 0;
}
table thead th:last-child {
  border-radius: 0 10px 0 0;
}
table tbody tr:last-child td:first-child {
  border-radius: 0 0 0 10px;
}
table tbody tr:last-child td:last-child {
  border-radius: 0 0 10px 0;
}

span {
  color: rgb(43, 223, 255);
}
section {
  margin: 0;
}
input {
  display: block;
}
.main {
  max-width: 1200px;
  width: 100%;
  margin: 90px auto;
  display: flex;
  justify-content: start;
  gap: 10px;

  .maincontent {
    width: 75%;
    margin: 0;
    .maininfo {
      display: flex;
      gap: 10px;
    }
    .profiles-list {
      width: 100%;
      margin: 10px 0;
      background-color: #333;
      border-radius: 10px;
      border: 1px solid #333;
      padding: 70px 30px;
      box-sizing: border-box;
    }
  }
}
</style>
