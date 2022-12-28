<script setup>
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import menuVue from "@/components/memberCenter/menu.vue";
import memberCardVue from "@/components/memberCenter/memberCard.vue";
import memberLevelVue from "@/components/memberCenter/memberLevel.vue";
// import $ from 'jquery';
import { reactive, onMounted, ref, defineComponent, h, computed } from "vue";
import { log } from "../composables/useCommon";
import { BIND_URL } from "../composables/useCommon";

const racebook = ref({
  regis_no: "",
  comp_no: "",
  regis_date: "",
  // orders_status: "",
  // mem_no: "",
});
const nmorders = ref([]);
const getMemberNm = () => {
  fetch(`${BIND_URL("getRacing.php", "g5PHP")}`, {
    method: "get",
    credentials: "include",
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
                {{ nmorders[index].regis_no }}
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
  color: #000;
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
  display: block;
  color: #fff;
  .sidenav {
    width: 100%;
    box-sizing: border-box;
  }
  .maincontent {
    width: 100%;
    margin: 0;
    .maininfo {
      display: flex;
      flex-direction: column;
      width: 100%;
      .meminfo {
        aspect-ratio: 16/9;
      }
      .memgrade {
        aspect-ratio: 16/9;
      }
    }
    .profiles-list {
      width: 100%;
      margin: 10px 0;
      background-color: #333;
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
@include s($s-breakpoint) {
  //>575px
  .main {
    .sidenav {
      display: block;
    }
    .maincontent {
      .profiles-list {
        padding: 50px;
      }
      .maininfo {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        .meminfo {
          aspect-ratio: 0;
        }
        .memgrade {
          aspect-ratio: 0;
        }
      }
    }
  }
}
@include m($m-breakpoint) {
  //>1023px
  .main {
    display: flex;
    .sidenav {
      width: 30%;
    }
    .maincontent {
      width: 70%;
      .profiles-list {
        padding: 70px 100px;
      }
    }
  }
}
</style>
