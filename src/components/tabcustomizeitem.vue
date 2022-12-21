<script setup>
import { reactive, onMounted, ref } from "vue";
import { zhTW, NPagination, NTable, NDataTable } from "naive-ui";
const columns = [
  {
    title: "商品編號",
    key: "prdNo",
  },
  {
    title: "商品名稱",
    key: "prdName",
  },
  {
    title: "售價",
    key: "prdPrice",
  },
  {
    title: "重量",
    key: "weight",
  },
  {
    title: "轉速",
    key: "rpm",
  },
  {
    title: "扭力",
    key: "kgm",
  },
  {
    title: "扭力常數",
    key: "kgmc",
  },
];
const data = reactive([
  {
    prdNo: 11111111,
    prdName: "body01black",
    prdPrice: "500",
    weight: "3000",
    rpm: "/",
    name: "/",
    kgm: "/",
  },
  {
    prdNo: 11111112,
    prdName: "body01blue",
    prdPrice: "500",
    weight: "3000",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111113,
    prdName: "body01green",
    prdPrice: "500",
    weight: "3000",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111114,
    prdName: "body01red",
    prdPrice: "500",
    weight: "3000",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111115,
    prdName: "body01white",
    prdPrice: "500",
    weight: "3000",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111121,
    prdName: "body02black",
    prdPrice: "600",
    weight: "3300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111122,
    prdName: "body02blue",
    prdPrice: "600",
    weight: "3300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111123,
    prdName: "body02green",
    prdPrice: "600",
    weight: "3300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111124,
    prdName: "body02red",
    prdPrice: "600",
    weight: "3300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111125,
    prdName: "body02white",
    prdPrice: "600",
    weight: "3300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111131,
    prdName: "body03black",
    prdPrice: "700",
    weight: "3600",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111132,
    prdName: "body03blue",
    prdPrice: "700",
    weight: "3600",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111133,
    prdName: "body03green",
    prdPrice: "700",
    weight: "3600",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111134,
    prdName: "body03red",
    prdPrice: "700",
    weight: "3600",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111135,
    prdName: "body03white",
    prdPrice: "700",
    weight: "3600",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111211,
    prdName: "propellor01black",
    prdPrice: "200",
    weight: "300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111212,
    prdName: "propellor01blue",
    prdPrice: "200",
    weight: "300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111213,
    prdName: "propellor01green",
    prdPrice: "200",
    weight: "300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111214,
    prdName: "propellor01red",
    prdPrice: "200",
    weight: "300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111215,
    prdName: "propellor01white",
    prdPrice: "200",
    weight: "300",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111221,
    prdName: "propellor02black",
    prdPrice: "300",
    weight: "350",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111222,
    prdName: "propellor02blue",
    prdPrice: "300",
    weight: "350",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111223,
    prdName: "propellor02green",
    prdPrice: "300",
    weight: "350",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111224,
    prdName: "propellor02red",
    prdPrice: "300",
    weight: "350",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111225,
    prdName: "propellor02white",
    prdPrice: "300",
    weight: "350",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111231,
    prdName: "propellor03black",
    prdPrice: "400",
    weight: "400",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111232,
    prdName: "propellor03blue",
    prdPrice: "400",
    weight: "400",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111233,
    prdName: "propellor03green",
    prdPrice: "400",
    weight: "400",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111234,
    prdName: "propellor03red",
    prdPrice: "400",
    weight: "400",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11111235,
    prdName: "propellor03white",
    prdPrice: "400",
    weight: "400",
    rpm: "/",
    kgm: "/",
    kgmc: "/",
  },
  {
    prdNo: 11121111,
    prdName: "motor01",
    prdPrice: "1200",
    weight: "/",
    rpm: "5300",
    kgm: "8",
    kgmc: "/",
  },
  {
    prdNo: 11121112,
    prdName: "motor02",
    prdPrice: "1400",
    weight: "/",
    rpm: "4800",
    kgm: "9",
    kgmc: "/",
  },
  {
    prdNo: 11121113,
    prdName: "motor03",
    prdPrice: "1600",
    weight: "/",
    rpm: "4400",
    kgm: "10",
    kgmc: "/",
  },
  {
    prdNo: 11121121,
    prdName: "controller01",
    prdPrice: "800",
    weight: "/",
    rpm: "/",
    kgm: "/",
    kgmc: "1.0",
  },
  {
    prdNo: 11121122,
    prdName: "controller02",
    prdPrice: "1100",
    weight: "/",
    rpm: "/",
    kgm: "/",
    kgmc: "1.1",
  },
  {
    prdNo: 11121123,
    prdName: "controller03",
    prdPrice: "1200",
    weight: "/",
    rpm: "/",
    kgm: "/",
    kgmc: "0.9",
  },
]);
const paginationReactive = reactive({
  page: 1,
  pageSize: 10,
  onChange: (page) => {
    paginationReactive.page = page;
  },
  onUpdatePageSize: (pageSize) => {
    paginationReactive.pageSize = pageSize;
    paginationReactive.page = 1;
  },
});
const pagination = paginationReactive;
</script>
<template>
  <div class="top">
    <h2>
      客製化品項查詢
      <outComponents />
    </h2>
    <div class="table">
      <n-data-table
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :bordered="false"
        :single-line="false"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/sass/style.scss";
.top {
  width: 100%;
  display: block;
}
.table {
  width: 95%;
  margin: auto;

  ::v-deep(.n-data-table-wrapper) {
    height: 560px;
  }
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
