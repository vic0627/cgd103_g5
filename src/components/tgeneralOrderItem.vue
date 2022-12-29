<script setup>
import { reactive, onMounted,ref,h } from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal } from 'naive-ui';
import axios from 'axios';
import {BIND_URL } from "../composables/useCommon";
const createColumns = ({
  selectId})=>{
    return [
  {
    title: "明細編號",
    key: "item_no",
    sorter: (row1, row2) => row2.item_no - row1.item_no,
  },
  {
    title: "訂單編號",
    key: "orders_no",
    sorter: (row1, row2) => row2.orders_no - row1.orders_no,
  },
  {
    title: "商品編號",
    key: "prd_no"
  },
  {
    title: "數量",
    key: "item_quantity"
  },
  {
    title: "單價",
    key: "item_price"
  },
  {
    title: "折扣後價格",
    key: "item_sub"
  },
  {
    title: "折扣數",
    key: "item_discount"
  },
  ]
};  
const showModal = ref(false);
const newStatus = ref('');
const column = createColumns({
  selectId(rowData) {
    showModal.value = true;
    newStatus.value = row.orders_no;
  }
});
//分頁js
const paginationReactive = reactive({
      page: 1,
      pageSize: 10,
      onChange: (page) => {
        paginationReactive.page = page;
      },
      onUpdatePageSize: (pageSize) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      }
    });
    const  pagination = paginationReactive;
//取得資料庫資料
const NmitemRows = ref([]);
		const getNmOrder = () => {
			//取得商品資料
      axios.get(`${BIND_URL('getNmitem.php','g5PHP')}`)
      .then(res=> {
        NmitemRows.value = res.data
      })
}
onMounted(()=>{
		getNmOrder();
})



// 搜尋

const search = ref('');
const returnNmorder = computed(() => {
  let cache = NmitemRows.value;
  if(search.value!==''){
    cache = cache.filter(i => String(i[select[selectVal.value].val]).includes(search.value))
    if(search.value=='all'){
      cache = NmitemRows.value;
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
];
const selectVal = ref('0');
const testVal = (e) => {
  selectVal.value = e.target.value;
};
  
</script>
<template>
<div class="top">
<h2>
    一般訂單明細查詢
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
    <n-data-table :columns="column" :data="returnNmorder" :pagination="pagination"  :bordered="true" :single-line="false" />
  </div>

</div>

</template>
<style scoped lang="scss">
@import '@/sass/style.scss';
.options{
  display: flex;
  justify-content: space-around;
  align-items: center;
  .addBox{
    width: 20%;
  }
}
.top {
  width: 100%;
  display: block;
}
.table {
  width: 95%;
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

.tables {
  width: 100%;
  margin: auto;
  table{
    width: 95%;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    border: 1px solid #C0C0C0;
    tr {
      border: 1px solid #C0C0C0;
      &:hover td{
        background: rgba(89, 120, 151, 0.11);
      }
      th {
        padding: 20px 10px;
        background-color:#597897;
        color: #fff;
        border: 1px solid #C0C0C0;
        border-top: 1px solid #597897;
      }
      td{
        border: 1px solid #C0C0C0;
        padding: 20px 10px;
        overflow: hidden;
        a{
          color: #273747;
          span{
            color: #273747;
          }
          .block{
            &:hover{
              border-bottom: 1px solid #273747;
            }
          }
          .red{
            color: #F25A2A;
            &:hover{
              border-bottom: 1px solid #F25A2A;
            }
          }
        }
      }
    }
  }
}


.top {
  width: 100%;
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
</style>