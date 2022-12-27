<script setup>
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import menuVue from "@/components/memberCenter/menu.vue";
import memberCardVue from "@/components/memberCenter/memberCard.vue";
import memberLevelVue from "@/components/memberCenter/memberLevel.vue";
// import $ from 'jquery';
import axios from "axios";
import { ref, onMounted, reactive, computed, watch } from "vue";
const NmOrder = ref({
  orders_no: "",
  purchase_date: "",
  total_price: "",
  orders_status: "",
  mem_no: "",
});
const nmorders = ref([]);
const getMemberNm = () => {
  fetch("/dist/g5PHP/getMemNmorder.php", {
    method: "get",
  })
    .then((res) => {
      return res.json();
    })
    .then((mem) => {
      console.log(mem);
      nmorders.value = mem;
      console.log(nmorders.value);
    });
};
const NmorderItem = ref([]);
const getMemberNmitem = () => {
  fetch("/dist/g5PHP/getMemNmitem.php", {
    method: "get",
  })
    .then((res) => {
      return res.json();
    })
    .then((mem) => {
      console.log(mem);
      // if(mem[])
      NmorderItem.value = mem;

      console.log(NmorderItem.value);
    });
};
const lightBoxShow = ref(false);
const lightBoxClose = () => {
  lightBoxShow.value = false;
};
//判斷哪個訂單編號的明細
const currenty = ref(0);
const lightBoxOpen = (index) => {
  lightBoxShow.value = true;
  getMemberNmitem();
  for (let i = 0; i < NmorderItem.value.length; i++) {
    if ((NmorderItem.value[i].orders_no = nmorders.value[index].orders_no)) {
      currenty.value = nmorders.value[index].orders_no;
      console.log(currenty.value);
      break;
    }
  }
  // if(currenty.value === )
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
        <h1>Normal Orders</h1>
        <table v-for="(item, index) in nmorders" :key="index">
          <thead>
            <th>Order No.</th>
            <th>Date</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Member No.</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <router-link to="" @click="lightBoxOpen(index)"
                  ><span>{{ nmorders[index].orders_no }}</span></router-link
                >
              </td>
              <td>{{ nmorders[index].purchase_date }}</td>
              <td>{{ nmorders[index].total_price }}</td>
              <td>{{ nmorders[index].orders_status }}</td>
              <td>{{ nmorders[index].mem_no }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div class="lightBox" v-if="lightBoxShow">
        <div class="lightBoxContent">
          <div class="close" @click="lightBoxClose"></div>
          <div v-for="(item, index) in NmorderItem" :key="index">
            <!-- v-show="NmorderItem[index].orders_no = currenty.value" -->
            <form action="get">
              <input type="hidden" name="currenty" v-model="currenty" />
            </form>
            <table>
              <thead>
                <th>Item No.</th>
                <th>Order No.</th>
                <th>Product No.</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Discount</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>{{ NmorderItem[index].item_no }}</span>
                  </td>
                  <td>{{ NmorderItem[index].orders_no }}</td>
                  <td>{{ NmorderItem[index].prd_no }}</td>
                  <td>{{ NmorderItem[index].item_quantity }}</td>
                  <td>{{ NmorderItem[index].item_sub }}</td>
                  <td>{{ NmorderItem[index].item_discount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerComponentsVue />
</template>

<style scoped lang="scss">
@import "@/sass/style.scss";
@import "@/sass/component/_lightBox.scss";
.lightBox {
  @include lightBox();
  .lightBoxContent {
    max-height: 1000px;
  }
}
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
  cursor: pointer;
  color: rgb(43, 223, 255);
}
//

section {
  margin: 0;
}
input {
  display: block;
}
.main{
    max-width: 1200px;
    width: 100%;
    margin: 90px auto;
    display: flex;
    justify-content: start;
    gap: 10px;
    // color: $text-color;

    .maincontent{
        width: 100%;
        margin: 0;
        .maininfo{
           display: block;
        }
        .profiles-list{
            width: 100%;
            margin:10px 0;
            background-color: #333;
            border-radius: 10px;
            padding: 20px;
            box-sizing: border-box;
        }
    }
  }
}

@include s($s-breakpoint) {
  //>575px
  .main {
    padding: 10px;
    .sidenav {
      display: block;
    }
    .maincontent {
      width: 75%;
      .profiles-list {
        padding: 50px;
      }
      .maininfo {
        // display: flex;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
      }
    }
  }
}
@include m($m-breakpoint) {
  //>1023px
  .main {
    .maincontent {
      .profiles-list {
        padding: 70px 100px;
      }
    }
  }
}
@include l($l-breakpoint) {
  //>1199px
}
</style>
