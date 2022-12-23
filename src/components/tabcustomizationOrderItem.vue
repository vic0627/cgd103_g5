<script setup>
import { reactive, onMounted, ref, computed } from 'vue';
import { zhTW, NPagination, NDataTable } from 'naive-ui';
import { log, $$ } from '@/composables/useCommon';

const page = ref(2);
const pageSize = ref(3);
const createColumns = ({selectId}) => {
  return [
    {
      title: '訂單編號',
      key: 'orders_no',
    },
    {
      title: '會員編號',
      key: 'mem_no',
    },
    {
      title: '會員等級',
      key: 'mem_grade',
    },
    {
      title: '購買日期',
      key: 'purchase_date',
    },
    {
      title: '訂單狀態',
      key: 'orders_status',
    },
    {
      title: '付款方式',
      key: 'payment',
    },
    {
      title: '配送方式',
      key: 'transportation',
    },
    {
      title: '折扣金額',
      key: 'discount_price',
    },
    {
      title: '實付金額',
      key: 'orders_price',
    },
    {
      title: '總金額',
      key: 'total',
    },
    {
      title: '運送地點',
      key: 'orders_location',
    },
    {
      title: '組裝費用',
      key: 'fee',
    },
    {
      title: '信用卡持有人姓',
      key: 'credit_first_name',
    },
    {
      title: '信用卡持有人名',
      key: 'credit_last_name',
    },
    {
      title: '信用卡號',
      key: 'credit_no',
    },
    {
      title: '優惠編號',
      key: 'disc_no',
    },
  ];
};
const column = createColumns({
  selectId(rowData) {
    showModal.value = true;
    newStatus.value = row.orders_no;
  }
});
const pagination = reactive({
  page: 2,
  pageSize: 10,
  onChange: (page) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});
const cmOrderRows = ref([]);
const fetchItem = () => {
  fetch("http://localhost/cgd103_g5/public/g5PHP/getCustomizeOrderItem.php")
  .then(res => res.json())
  .then(json => {
    cmOrderRows.value = json;
  })
};
onMounted(() => {
  fetchItem();
});
const search = ref('');
const returnOrder = computed(() => {
  let cache = cmOrderRows.value;
  if(search.value!==''){
    cache = cache.filter(i => String(i[select[selectVal.value].val]).includes(search.value))
    if(search.value=='all'){
      cache = cmOrderRows.value;
    }
  }else{
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: '訂單編號',
    val: 'orders_no',
  },
  {
    id: 1,
    title: '會員編號',
    val: 'mem_no',
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
    客製化訂單查詢
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
  display: block;
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
  margin: 30px 15px;
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

.table {
  width: 85%;
  margin: 0 auto;
}
</style>