<script setup>
import { reactive, onMounted, ref, computed, h } from 'vue';
import { zhTW, NPagination, NDataTable, NButton, NModal } from 'naive-ui';
import { log, $$, BIND_URL } from '@/composables/useCommon';

const page = ref(2);
const pageSize = ref(3);
const createColumns = ({ update }) => {
  return [
    {
      title: '訂單編號',
      key: 'orders_no',
      sorter: (row1, row2) => row2.orders_no - row1.orders_no,
    },
    {
      title: '會員編號',
      key: 'mem_no',
      defaultSortOrder: false,
      sorter: (a, b) => b.mem_no - a.mem_no,
    },
    {
      title: '會員等級',
      key: 'mem_grade',
      defaultSortOrder: false,
      sorter: (a, b) => b.mem_grade - a.mem_grade,
    },
    {
      title: '訂單狀態',
      key: 'orders_status',
      filterOptions: [
        {
          label: '待處理',
          value: '待處理'
        },
        {
          label: '處理中',
          value: '處理中'
        },
        {
          label: '運送中',
          value: '運送中'
        },
        {
          label: '訂單完成',
          value: '訂單完成'
        }
      ],
      filter (value, row) {
        return ~row.orders_status.indexOf(value)
      }
    },
    {
      title: '購買日期',
      key: 'purchase_date',
      defaultSortOrder: false,
      sorter: (a, b) => b.purchase_date - a.purchase_date,
    },
    {
      title: '折扣金額',
      key: 'discount_price',
      defaultSortOrder: false,
      sorter: (a, b) => b.discount_price - a.discount_price,
    },
    {
      title: '實付金額',
      key: 'orders_price',
      defaultSortOrder: false,
      sorter: (a, b) => b.orders_price - a.orders_price,
    },
    {
      title: '總金額',
      key: 'total',
      defaultSortOrder: false,
      sorter: (a, b) => b.total - a.total,
    },
    {
      title: '運送地點',
      key: 'orders_location',
    },
    {
      title: '組裝費用',
      key: 'fee',
      defaultSortOrder: false,
      sorter: (a, b) => b.fee - a.fee,
    },
    {
      title: '信用卡號',
      key: 'credit_no',
    },
    {
      title: '優惠編號',
      key: 'disc_no',
    },
    {
      title: "編輯",
      key: "actions",
      render(row) {
        return h(NButton,{
          size: "small",
          color: "#077AF9",
          onClick: () => update(row),
        },
        { default: () => "編輯" });
      },
    },
  ];
};
const units = [
    {
      title: "訂單編號",
      key: "orders_no",
    },
    {
      title: "會員編號",
      key: "mem_no",
    },
    {
      title: "會員等級",
      key: "mem_grade",
    },
    {
      title: "訂單狀態",
      key: "orders_status",
    },
    {
      title: "購買日期",
      key: "purchase_date",
    },
    {
      title: "折扣金額",
      key: "discount_price",
    },
    {
      title: "實付金額",
      key: "orders_price",
    },
    {
      title: "總金額",
      key: "total",
    },
    {
      title: "運送地點",
      key: "orders_location",
    },
    {
      title: "組裝費用",
      key: "fee",
    },
    {
      title: "信用卡號",
      key: "credit_no",
    },
    {
      title: "優惠編號",
      key: "disc_no",
    },
];
const udPack = ref({
  orders_no: null,
  mem_no: null,
  mem_grade: null,
  orders_status: null,
  purchase_date: null,
  discount_price: null,
  orders_price: null,
  total: null,
  orders_location: null,
  fee: null,
  credit_no: null,
  disc_no: null,
});
const lightBoxText = ref('');
const column = createColumns({
  update(e) {
    lightBoxShow.value = true;
    lightBoxText.value = '編輯訂單狀態';
    for(let i=0; i<units.length; i++){
      udPack.value[units[i].key] = e[units[i].key];
    }
  },
});
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
const cmOrderRows = ref([]);
const fetchItem = () => {
  fetch(`${BIND_URL('postCust.php','g5PHP')}`, {
    method: "POST",
    body: new URLSearchParams({ sql: "select * from tibamefe_cgd103g5.cm_order" }),
  })
  .then(res => res.json())
  .then(json => {
    cmOrderRows.value = json;
  })
};
const fixOdStat = () => {
  fetch(`${BIND_URL('manageCmOrder.php','g5PHP')}`, {
    method: "POST",
    body: new URLSearchParams({ orders_no: udPack.value.orders_no, orders_status: udPack.value.orders_status }),
  })
  .catch(err=>log(err))
  .then(res => {
    showModal.value = false;
    fetchItem();
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
const lightBoxShow = ref(false), showModal = ref(false);
const modal = () => {
  if(udPack.value.orders_status==="待處理" ||
    udPack.value.orders_status==="處理中" ||
    udPack.value.orders_status==="運送中" ||
    udPack.value.orders_status==="訂單完成"){
      showModal.value = true;
    }else{
      alert("字串格式不符!請重新確認!");
    }
};
const confirm = () => {
  fixOdStat();
  lightBoxShow.value = false;
  showModal.value = false;
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
<n-modal
  v-model:show="lightBoxShow"
  preset="dialog"
  :title="lightBoxText"
>
  <label v-for="i in units" :key="i" :for="i.key" class="inputTable">
    <p class="modalText">{{ i.title }}:</p>
    <input type="text" :name="i.key" disabled v-model="udPack[i.key]" v-if="i.key!==`orders_status`">
    <select name="orders_status" v-if="i.key===`orders_status`" v-model="udPack.orders_status">
      <option value="待處理">待處理</option>
      <option value="處理中">處理中</option>
      <option value="運送中">運送中</option>
      <option value="訂單完成">訂單完成</option>
    </select>
  </label>
  <n-button @click="modal" type="error" class="btnCheck">
    確認
  </n-button>
</n-modal>
<n-modal
  v-model:show="showModal"
  preset="dialog"
  title="確認"
>
  <p class="modalText">確定要修改嗎?</p>
  <n-button type="error" class="btnCheck" @click="confirm">
    確定
  </n-button>
</n-modal>
  
</template>
<style scoped lang="scss">
@import '@/sass/style.scss';
.top {
  width: 85%;
  height: 100%;
  display: block;
  overflow-y: auto;
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
p{
    color: #000;
}
.inputTable{
  display: flex;
}
.search_box{
  display: flex;
  justify-content: right;
  width: 85%;
  margin: 30px auto;
  
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