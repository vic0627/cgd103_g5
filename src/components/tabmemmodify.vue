<script setup>
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal, } from 'naive-ui';
import { reactive, onMounted,ref ,defineComponent,h,computed} from 'vue';

//data-table
const createColumns = ({selectId})=>{
    return [
  {
    title: "會員編號",
    key: "mem_no"
  },
  {
    title: "帳號(信箱)",
    key: "mem_acc"
  },
  {
    title: "名",
    key: "mem_first_name",
  },
  {
    title: "姓",
    key: "mem_last_name",
  },
  {
    title: "信箱",
    key: "mem_email",
  },
  {
    title: "電話",
    key: "phone",
  },
  {
      title: "資訊總覽",
      key: "actions",
      render(row, index) {
        return h(
          NButton,
          {
            size: "medium",
            color: "#077AF9",
            onClick: () => selectId(row,index),
            // onClick: () => modal(row)
          },
          { default: () => "查看" }
        );
      }
    },
  ]
};
//解析內容跟事件
const column = createColumns({
  selectId(rowData,index) {
    showModal.value = true;
    newMem_no.value = bmemRows.value[index].mem_no;
    newMem_acc.value = bmemRows.value[index].mem_acc;
    newMem_first_name.value = bmemRows.value[index].mem_first_name;
    newMem_last_name.value = bmemRows.value[index].mem_last_name;
    newMem_email.value = bmemRows.value[index].mem_email;
  },
  showmodal(rowData,index){
    showModal2.value = true
    newMem_no.value = bmemRows.value[index].mem_no;
  }
})
//取得資料庫資料
const bmemRows = ref([]);
	const getProducts = () => {
	//取得商品資料
    fetch("http://localhost/g5/public/g5PHP/getBmem.php")
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        bmemRows.value = json;
    })
	}
onMounted(()=>{
	getProducts();
});

// 搜尋

const search = ref('');
const returnMem = computed(() => {
  let cache = bmemRows.value;
  if(search.value!==''){
    cache = cache.filter(i => String(i[select[selectVal.value].val]).includes(search.value))
    if(search.value=='all'){
      cache = bmemRows.value;
    }
  }else{
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: '會員編號',
    val: 'mem_no',
  },
  {
    id: 1,
    title: '帳號',
    val: 'mem_acc',
  },
  {
    id: 2,
    title: '名',
    val: 'mem_first_name',
  },
  {
    id: 3,
    title: '姓',
    val: 'mem_last_name',
  },
  {
    id: 4,
    title: '電話',
    val: 'phone',
  },
  {
    id: 5,
    title: '信箱',
    val: 'email',
  },
];
const selectVal = ref('0');
const testVal = (e) => {
  selectVal.value = e.target.value;
};


</script>
<template>
<div class="tops">
    <h2>
      會員帳號管理
      <outComponents />
    </h2>
    <!-- 搜尋 -->
    <div class="search_box">
      <p>依</p>
      <select name="searchMethods" id="searchMethods" @change="testVal">
        <option v-for="i in select" :key="i.id" :value="i.id">{{ i.title }}</option>
      </select>
      <p>查詢</p>
      <label for="search" class="label">
        <input type="search" id="search" name="search" v-model="search" :placeholder="`請輸入All或${select[selectVal].title}`">
      </label>
    </div>

    <!-- 表格 -->
    <div class="tables" id="products" align="center">
    <form action="" method="post">
      <n-data-table :columns="column" :data="returnMem" :pagination="pagination"  :bordered="true" :single-line="false" />
      <!-- <n-modal
        v-model:show="showModal"
        preset="dialog"
        title="確認"
        content="你確定嗎?"
      >
            <label for="faq_des"> 修改問題 : </label>
            <textarea name="faq_des" v-model="newFaq_des" rows="10" cols="50" placeholder="請輸入問題" maxlength="200"></textarea>
            <textarea name="faq_ans" v-model="newFaq_ans" rows="10" cols="50" placeholder="請輸入回答" maxlength="300" ></textarea>
            <n-button @click="showModal = true; updateFaq(index)" type="error">
              確認
            </n-button>
      </n-modal>
      <n-modal
          v-model:show="showModal2"
          preset="dialog"
          title="確認"
          content="你確定嗎?"
        >
      <n-button @click="showModal2 = true; deleteFaq(index)" type="error">
        刪除
      </n-button>
      </n-modal> -->
  </form>
  </div>

 
 
</div>

    
    
</template>
<style  scoped lang="scss">
@import '@/sass/style.scss';

// 最上方的標題欄
.tops {
  width: 85%;
  display: block;
  overflow-y: auto;
  height: 100%;
  overflow: auto;
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

.tables {
  width: 95%;
  margin: auto;
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

</style>