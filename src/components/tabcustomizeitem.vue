<script setup>
import { reactive, onMounted, ref, h, computed, onUpdated } from "vue";
import { zhTW, NPagination, NTable, NDataTable, NButton, NModal } from "naive-ui";
import { log, BIND_URL } from "../composables/useCommon";
const createColumns = ({ update, dele }) => {
  return [
    {
      title: "商品編號",
      key: "prd_no",
      sorter: (row1, row2) => row2.prd_no - row1.prd_no,
    },
    {
      title: "商品名稱",
      key: "prd_name",
      filterOptions: [
        {
          label: 'body',
          value: 'body'
        },
        {
          label: 'propellor',
          value: 'propellor'
        },
        {
          label: 'motor',
          value: 'motor'
        },
        {
          label: 'controller',
          value: 'controller'
        }
      ],
      filter (value, row) {
        return ~row.prd_name.indexOf(value)
      }
    },
    {
      title: "售價",
      key: "prd_price",
      defaultSortOrder: false,
      sorter: (a, b) => b.prd_price - a.prd_price,
    },
    {
      title: "重量",
      key: "weight",
      defaultSortOrder: false,
      sorter: (a, b) => b.weight - a.weight,
    },
    {
      title: "轉速",
      key: "rpm",
      defaultSortOrder: false,
      sorter: (a, b) => b.rpm - a.rpm,
    },
    {
      title: "扭力",
      key: "kgm",
      defaultSortOrder: false,
      sorter: (a, b) => b.kgm - a.kgm,
    },
    {
      title: "扭力常數",
      key: "kgmc",
      defaultSortOrder: false,
      sorter: (a, b) => b.kgmc - a.kgmc,
    },
    {
      title: "圖片路徑",
      key: "prd_glb",
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
    {
      title: "刪除",
      key: "actions",
      render(row) {
        return h(NButton,{
          size: "small",
          color: "#F25A2A",
          onClick: () => dele(row),
        },
        { default: () => "刪除" });
      },
    },
  ];
};
const dele = ref(false)
const column = createColumns({
  update(e) {
    lightBoxShow.value = true;
    dele.value = false;
    lightBoxText.value = '編輯商品';
    for(let i=0; i<units.length; i++){
      udPack.value[units[i].key] = e[units[i].key];
    }
  },
  dele(e) {
    lightBoxShow.value = true;
    dele.value = true;
    lightBoxText.value = '刪除商品';
    for(let i=0; i<units.length; i++){
      udPack.value[units[i].key] = e[units[i].key];
    }
  },
});
const lightBoxText = ref('')
const units = [
    {
      title: "商品編號",
      key: "prd_no",
    },
    {
      title: "商品名稱",
      key: "prd_name",
    },
    {
      title: "售價",
      key: "prd_price",
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
    {
      title: "圖片路徑",
      key: "prd_glb",
    },
];
const udPack = ref({
  prd_no: null,
  prd_name: null,
  prd_price: null,
  weight: null,
  rpm: null,
  kgm: null,
  kgmc: null,
  prd_glb: null,
});

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

const custRows = ref([]);
const getCust = () => {
  //fetch("http://localhost/cgd103_g5/public/g5PHP/postCust.php", {
  fetch(`${BIND_URL('postCust.php','g5PHP')}`, {
    method: "POST",
    body: new URLSearchParams({ sql: "select * from tibamefe_cgd103g5.customize where prd_no > 0 order by prd_no" }),
  })
  .then(res => res.json())
  .then(json => {
    custRows.value = json;
  });
};
onMounted(() => {
  getCust();
});
const fixValue = (val, func, i = 0) => {
  if(val==='' || val===null){
    return null;
  }else{
    return func(val).toFixed(i);
  }
}
const fixCmItem = (sql, method) => {
  const alterForm = {
    prd_no: fixValue(udPack.value.prd_no, parseInt),
    prd_name: udPack.value.prd_name,
    prd_price: fixValue(udPack.value.prd_price, Number, 2),
    weight: fixValue(udPack.value.weight, parseInt),
    rpm: fixValue(udPack.value.rpm, parseInt),
    kgm: fixValue(udPack.value.kgm, parseInt),
    kgmc: fixValue(udPack.value.kgmc, Number, 2),
    prd_glb: udPack.value.prd_glb,
    sql,
    method,
  }
  fetch(`${BIND_URL('manageCust.php','g5PHP')}`, {
    method: "POST",
    body: new URLSearchParams(alterForm),
  })
  .catch(err=>log(err))
  .then(res => {
    showModal.value = false;
    getCust();
  })
};

let add = false;
const addBox = () => {
  lightBoxShow.value = true;
  dele.value = false;
  add = true;
  lightBoxText.value = '新增客製化商品';
  for(let i=0; i<units.length; i++){
    udPack.value[units[i].key] = '';
  }
};
const confirm = () => {
  if(add){
    fixCmItem("insert into tibamefe_cgd103g5.customize values( :prd_no, :prd_name, :prd_price, :weight, :rpm, :kgm, :kgmc, :prd_glb)", "insert");
  }else if(dele.value){
    fixCmItem("DELETE FROM tibamefe_cgd103g5.customize WHERE prd_no = :prd_no", "delete");
  }else if(dele.value===false){
    fixCmItem("UPDATE tibamefe_cgd103g5.customize SET prd_name = :prd_name,prd_price = :prd_price,weight = :weight,rpm = :rpm,kgm = :kgm,kgmc = :kgmc,prd_glb = :prd_glb WHERE prd_no = :prd_no", "update");
  };
  add = false;
  lightBoxShow.value = false;
  showModal.value = false;
};
const search = ref('');
const returnOrder = computed(() => {
  let cache = custRows.value;
  if(search.value!==''){
    cache = cache.filter(i => String(i[select[selectVal.value].val]).includes(search.value))
    if(search.value=='all'){
      cache = custRows.value;
    }
  }else{
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: '商品編號',
    val: 'prd_no',
  },
  {
    id: 1,
    title: '商品名稱',
    val: 'prd_name',
  },
];
const selectVal = ref('0');
const testVal = (e) => {
  selectVal.value = e.target.value;
};
const lightBoxShow = ref(false), showModal = ref(false);

const lightBoxClose = () => {
	lightBoxShow.value = false;
};
</script>
<template>
  <div class="top">
    <h2>
      客製化商品管理
      <outComponents />
    </h2>
    <div class="options">
      <div class="addBox">
        <n-button @click="addBox" type="error" class="btnCheck">
          新增商品
        </n-button>
      </div>
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
    <n-modal
      v-model:show="lightBoxShow"
      preset="dialog"
      :title="lightBoxText"
    >
      <label v-for="i in units" :key="i" :for="i.key">
        <p class="modalText">{{ i.title }}:</p>
        <input type="text" :name="i.key" :disabled="udPack[i.key]===null || dele" v-model="udPack[i.key]">
      </label>
      <n-button @click="showModal = true" type="error" class="btnCheck">
        確認{{ lightBoxText }}
      </n-button>
    </n-modal>
    <n-modal
      v-model:show="showModal"
      preset="dialog"
      title="確認"
    >
      <p class="modalText">確定要{{lightBoxText}}嗎?</p>
      <n-button type="error" class="btnCheck" @click="confirm">
        確定
      </n-button>
    </n-modal>
  </div>
</template>
<style scoped lang="scss">
@import "@/sass/style.scss";
@import "@/sass/component/_lightBox.scss";
.top {
  width: 85%;
  height: 100%;
  display: block;
  overflow-y: auto;
  .lightBox{
    @include lightBox();
    .lightBoxContent{
      padding: 40px;
      h3{
        text-align: center;
      }
      label{
        display: flex;
        width: 100%;
        margin: 20px auto;
        color: #fff;
        p{
          width: 40%;
          text-align: right;
          margin-right: 20px;
        }
      }
    }
  }
}
label{
  display: block;
  
}
.modalText{
  color: #000;
}
.btnCheck{
  margin: 30px 0 10px;
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
.options{
  display: flex;
  justify-content: space-around;
  align-items: center;
  .addBox{
    width: 20%;
  }
}
.search_box {
  display: flex;
  justify-content: right;
  width: 50%;
  P {
    color: #000;
  }
  label {
    margin-right: 10px;
    font-size: 20px;
    color: rgb(26, 26, 26);
    input {
      margin-left: 10px;
      height: 35px;
      border: 1px solid rgb(124, 124, 124);
      border-radius: 5px;
      padding-left: 10px;
      font-size: 18px;
      &:focus {
        color: #06519d;
        border: 1px solid #1671cd;
        outline: none;
        &::placeholder {
          opacity: 0;
        }
      }
      &::placeholder {
        padding-left: 5px;
        color: rgba(181, 181, 181, 0.749);
      }
    }
  }
  .btn {
    button {
      width: 50px;
      text-align: center;
      border: none;
      background: #597897;
      border-radius: 5px;
      padding: 5px;
      transition: background 0.5s;
      cursor: pointer;
      &:hover {
        background: $blue;
      }
      img {
        width: 20px;
        height: 20px;
        margin-top: 2px;
      }
    }
  }
}

.tables {
  width: 100%;
  margin: auto;
  table {
    width: 95%;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    border: 1px solid #c0c0c0;
    tr {
      border: 1px solid #c0c0c0;
      &:hover td {
        background: rgba(89, 120, 151, 0.11);
      }
      th {
        padding: 20px 10px;
        background-color: #597897;
        color: #fff;
        border: 1px solid #c0c0c0;
        border-top: 1px solid #597897;
      }
      td {
        border: 1px solid #c0c0c0;
        padding: 20px 10px;
        overflow: hidden;
        a {
          color: #273747;
          span {
            color: #273747;
          }
          .block {
            &:hover {
              border-bottom: 1px solid #273747;
            }
          }
          .red {
            color: #f25a2a;
            &:hover {
              border-bottom: 1px solid #f25a2a;
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
