<script setup>
import { reactive, onMounted,ref ,defineComponent,h,computed} from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal, } from 'naive-ui';
const des = ref("");
const ans = ref("");
const no = ref("");
const newFaq_des = ref("");
const newFaq_no = ref('');
const newFaq_ans = ref('');
const showModal = ref(false);
const showModal2 = ref(false);

//data-table
const createColumns = ({selectId})=>{
    return [
  {
    title: "編號",
    key: "faq_no"
  },
  {
    title: "問題",
    key: "faq_des"
  },
  {
    title: "回答",
    key: "faq_ans",
  },
  {
      title: "編輯",
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
          { default: () => "編輯" }
        );
      }
    },
    {
      title: "刪除",
      key: "actions",
      render(row, index) {
        return h(
          NButton,
          {
            size: "medium",
            color: "#FF4E4E",
            onClick: () => showmodal(row,index),
          },
          { default: () => "刪除" }
        );
      }
    },
    
  ]
};
//解析內容跟事件
const column = createColumns({
  selectId(rowData,index) {
    showModal.value = true;
    newFaq_des.value = faqRows.value[index].faq_des;
    newFaq_no.value = faqRows.value[index].faq_no;
    newFaq_ans.value = faqRows.value[index].faq_ans;
  },
  showmodal(rowData,index){
    showModal2.value = true
    newFaq_no.value = faqRows.value[index].faq_no;
  }
})

//分頁js
const paginationReactive = reactive({
      page: 2,
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

const props = defineProps(["tab"])
//取得資料庫資料
const faqRows = ref([]);
		const getProducts = () => {
			//取得商品資料
      fetch("http://localhost/g5/public/g5PHP/getFaqs.php")
      .then(res => res.json())
      .then(json => {
        console.log(json)
        faqRows.value = json;
      })
		}
	onMounted(()=>{
		getProducts();
  });

//更新資料
const updateFaq = (user)=>{
  const newFaq = {
    faq_no: Number(newFaq_no.value),
    faq_des: newFaq_des.value, 
    faq_ans: newFaq_ans.value
  }
  fetch("http://localhost/g5/public/g5PHP/updateFaqs.php", {
    method: "POST",
    body: new URLSearchParams(newFaq),
  }).then(res=>{
    console.log(res)
    res.json()
  })
  showModal.value = false
  getProducts();
}

// 刪除資料
const deleteFaq = ()=>{
  const delFaq = {
    faq_no: Number(newFaq_no.value)
  }
  fetch("http://localhost/g5/public/g5PHP/deleteFaq.php",{
    method: "POST",
    body: new URLSearchParams(delFaq),
  }).then(res=>{
    res.json()
  })
  showModal2.value = false
  getProducts();
}


// 搜尋

const search = ref('');
const returnFaq = computed(() => {
  let cache = faqRows.value;
  if(search.value!==''){
    cache = cache.filter(i => String(i[select[selectVal.value].val]).includes(search.value))
    if(search.value=='All'){
      cache = faqRows.value;
    }
  }else{
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: '問題編號',
    val: 'faq_no',
  },
  {
    id: 1,
    title: '問題',
    val: 'faq_des',
  },
  {
    id: 2,
    title: '回答',
    val: 'faq_ans',
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
      FAQ列表
      <outComponents />
    </h2>
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

 
  <div class="tables" id="products" align="center">
    <form action="" method="post">
      <n-data-table :columns="column" :data="returnFaq" :pagination="pagination"  :bordered="true" :single-line="false" />
      <n-modal
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
      </n-modal>
  </form>
  </div>
</div>


</template>
<style scoped lang="scss">

@import '@/sass/style.scss';

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

textarea{
  margin-top: 10px;
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


.tables {
  width: 95%;
  margin: auto;
  ::v-deep(n-data-table-td){
    border-bottom: 1 solid #111;
    background-color: #222;
}
}

.modal-mask{
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper{
  display: table-cell;
  vertical-align: middle;
}
</style>