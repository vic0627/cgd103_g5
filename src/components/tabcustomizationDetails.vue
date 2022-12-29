<script setup>
import { reactive, onMounted, ref, computed } from 'vue';
import { zhTW, NPagination,NTable,NDataTable } from 'naive-ui';
import { log, BIND_URL } from '@/composables/useCommon';

const page = ref(2);
const pageSize = ref(3);
const createColumns = () => {
  return [
    {
      title: '明細編號',
      key: 'item_no',
      sorter: (a, b) => b.item_no - a.item_no,
    },
    {
      title: '訂單編號',
      key: 'orders_no',
      defaultSortOrder: false,
      sorter: (a, b) => b.orders_no - a.orders_no,
    },
    {
      title: '商品編號',
      key: 'products_no',
      defaultSortOrder: false,
      sorter: (a, b) => b.products_no - a.products_no,
    },
    {
      title: '數量',
      key: 'item_quantity',
      defaultSortOrder: false,
      sorter: (a, b) => b.item_quantity - a.item_quantity,
    },
    {
      title: '單價',
      key: 'item_price',
      defaultSortOrder: false,
      sorter: (a, b) => b.item_price - a.item_price,
    },
    {
      title: '折扣後價格',
      key: 'item_sub',
      defaultSortOrder: false,
      sorter: (a, b) => b.item_sub - a.item_sub,
    },
    {
      title: '折扣數',
      key: 'item_discount',
      defaultSortOrder: false,
      sorter: (a, b) => b.item_discount - a.item_discount,
    },
  ];
};
const column = createColumns({});
const pagination = reactive({
  page: 1,
  pageSize: 10,
  onChange: (page) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});
const cmDetailsRows = ref([]);
const fetchItem = () => {
  fetch(`${BIND_URL('postCust.php','g5PHP')}`, {
    method: "POST",
    body: new URLSearchParams({ sql: "select * from tibamefe_cgd103g5.cm_order_item" }),
  })
  .then(res => res.json())
  .then(json => {
    cmDetailsRows.value = json;
  })
};
onMounted(() => {
  fetchItem();
});
const search = ref('');
const returnOrder = computed(() => {
  let cache = cmDetailsRows.value;
  if(search.value!==''){
    cache = cache.filter(i => String(i[select[selectVal.value].val]).includes(search.value))
    if(search.value=='all'){
      cache = cmDetailsRows.value;
    }
  }else{
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: '明細編號',
    val: 'item_no',
  },
  {
    id: 1,
    title: '訂單編號',
    val: 'orders_no',
  },
  {
    id: 2,
    title: '商品編號',
    val: 'products_no',
  },
];
const selectVal = ref('0');
const testVal = (e) => {
  selectVal.value = e.target.value;
};
</script>
<template>
<div class="top">
  <h2>
    客製化訂單明細查詢
    <outComponents />
  </h2>
  <div class="search_box">
    <p>依</p>
    <select name="searchMethods" id="searchMethods" @change="testVal">
      <option v-for="i in select" :key="i.id" :value="i.id">{{ i.title }}</option>
    </select>
    <p>查詢</p>
    <label for="search" class="label">
      <input type="search" id="search" name="search" v-model="search" :placeholder="`請輸入${select[selectVal].title}`">
    </label>
    <p>輸入"all"可查詢所有項目</p>
  </div>
  <div class="table">
    <n-data-table
      :columns="column"
      :data="returnOrder"
      :pagination="pagination"
      :bordered="true"
      :single-line="false"
    />
  </div>
</div>

</template>
<style scoped lang="scss">
@import '@/sass/style.scss';
.top {
  width: 85%;
  height: 100%;
  display: block;
  overflow-y: auto;
}
.table {
  width: 85%;
  margin: auto;
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
.search_box{
  display: flex;
  justify-content: right;
  width: 85%;
  margin: 30px auto;
  p{
    color: #000;
  }
  label {
    margin-right: 10px;
    font-size: 20px;
    color: rgb(26, 26, 26);
    input{
      margin-left: 10px;
      height: 35px;
      border: 1px solid rgb(124, 124, 124);
      border-radius: 5px;
      padding-left: 10px;
      font-size: 18px;
      &:focus{
        color: #06519d;
        border: 1px solid #1671cd;
        outline: none;
          &::placeholder{
          opacity: 0;
          }
      }
      &::placeholder{
        padding-left: 5px;
        color: rgba(181, 181, 181, 0.749);
      }
    }
  }
}
</style>