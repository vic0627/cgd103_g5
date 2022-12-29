<script setup>
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal, } from 'naive-ui';
import { reactive, onMounted,ref ,defineComponent,h,computed} from 'vue';
import {BIND_URL } from "../composables/useCommon";

// Model + 會員總資訊
const showModal = ref(false);
const newMem_no = ref('');
const newMem_acc = ref('');
const newMem_pw = ref('');
const newMem_first_name = ref('');
const newMem_last_name = ref('');
const newMem_email = ref('');
const newMem_phone = ref('');
const newMem_city = ref('');
const newMem_address = ref('');
const newMem_credit_no = ref('');
const newMem_grade = ref('');
const newMem_gender = ref('');






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

// 查看資訊
const lookMem = (user)=>{
  const newMem = {
    mem_no: Number(newMem_no.value),
    mem_email: newMem_email.value, 
    // mem_ans: newFaq_ans.value
  }
  fetch(`${BIND_URL('getBmem.php','g5PHP')}`, {
    method: "POST",
    body: new URLSearchParams(newMem),
  }).then(res=>{
    res.json()
  }).then(res=>{
    showModal.value = false
    getProducts();
  }
)}

//解析內容跟事件
const column = createColumns({
  selectId(rowData,index) {
    showModal.value = true;
    newMem_no.value = bmemRows.value[index].mem_no;
    newMem_acc.value = bmemRows.value[index].mem_acc;
    newMem_first_name.value = bmemRows.value[index].mem_first_name;
    newMem_last_name.value = bmemRows.value[index].mem_last_name;
    newMem_email.value = bmemRows.value[index].mem_email;
    newMem_gender.value = bmemRows.value[index].mem_gender;
    newMem_pw.value = bmemRows.value[index].mem_pw;
    newMem_phone.value = bmemRows.value[index].phone;
    newMem_city.value = bmemRows.value[index].city;
    newMem_address.value = bmemRows.value[index].address;
    newMem_credit_no.value = bmemRows.value[index].credit_no;
    newMem_grade.value = bmemRows.value[index].mem_grade;
    
  },
  showmodal(rowData,index){
    showModal.value = true
    newMem_no.value = bmemRows.value[index].mem_no;
    newMem_pw.value = bmemRows.value[index].mem_pw;
    newMem_acc.value = bmemRows.value[index].mem_acc;
  }
})
//取得資料庫資料
const bmemRows = ref([]);
	const getProducts = () => {
	//取得商品資料
    fetch(`${BIND_URL('getBmem.php','g5PHP')}`)
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        bmemRows.value = json;
    })
	}
onMounted(()=>{
	getProducts();
});

//分頁js
// const paginationReactive = reactive({
//       page: 2,
//       pageSize: 10,
//       onChange: (page) => {
//         paginationReactive.page = page;
//       },
//       onUpdatePageSize: (pageSize) => {
//         paginationReactive.pageSize = pageSize;
//         paginationReactive.page = 1;
//       }
//     });
// const  pagination = paginationReactive;

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
      <n-modal
        v-model:show="showModal"
        preset="dialog"
        title="資訊總覽"
        content="">
      <div class="box">
        <div class="word">
          <label for="mem_no"><div class="text"> 會員編號 : </div></label>
          <input type="text" name="mem_no" v-model="newMem_no" disabled class="inputs">
        </div>
        <div class="word">
          <label for="mem_acc"> <div class="text"> 帳號<span class="gender">(信箱)</span>  : </div></label>
          <input type="text" name="mem_acc" v-model="newMem_acc" disabled class="inputs">
        </div>
        <div class="word">
          <label for="mem_pw"> <div class="text"> 密碼 : </div></label>
          <input type="text" name="mem_pw" v-model="newMem_pw" disabled class="inputs">
        </div>
        <div class="word">
          <label for="mem_first_name"> <div class="text"> 名: </div> </label>
          <input type="text" name="mem_first_name" v-model="newMem_first_name" disabled class="inputs">
        </div>
        <div class="word">
          <label for="mem_last_name"><div class="text"> 姓 : </div> </label>
          <input type="text" name="mem_last_name" v-model="newMem_last_name" disabled class="inputs">
        </div>
        <div class="word">
          <label for="mem_gender"> <div class="text"> 性別 :<span class="gender">(1男2女)</span> :  </div> </label>
          <input type="text" name="mem_gender" v-model="newMem_gender" disabled class="inputs">
        </div>
        <div class="word">
          <label for="mem_email"> <div class="text"> 信箱 : </div></label>
          <input type="text" name="mem_email" v-model="newMem_email" disabled class="inputs">
        </div>
        <div class="word">
          <label for="phone" > <div class="text"> 電話 : </div></label>
          <input type="text" name="phone" v-model="newMem_phone" disabled class="inputs">
        </div>
        <div class="word">
          <label for="city"> <div class="text"> 縣市 : </div> </label>
          <input type="text" name="city" v-model="newMem_city" disabled class="inputs">
        </div>
        <label for="address" class="word"> <div class="text"> 詳細地址 : </div></label>
          <textarea type="text" name="address" v-model="newMem_address"  cols="150" disabled class="inputs"></textarea>
        <div class="word">
          <label for="credit_no"> <div class="text">信用卡號 : </div> </label>
          <input type="text" name="credit_no" v-model="newMem_credit_no" disabled class="inputs">
        </div>
        <div class="word">
          <label for="mem_grade"> <div class="text"> 會員等級 : </div></label>
          <input type="text" name="mem_grade" v-model="newMem_grade" disabled class="inputs">
        </div>
      </div>
      <!-- <n-button @click="showModal = true; lookMem(index)" type="error">
        查看
      </n-button> -->
      </n-modal>
  </form>
  </div>
</div>

    
    
</template>
<style  scoped lang="scss">
@import '@/sass/style.scss';
.gender{
  color: #999;
  font-size: 12px;
}


.text {
  font-size:18px;
  margin-right: 10px;
}
.word{
  display: flex;
  margin-top: 15px;
}
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
textarea{
  width: 100%;
  font-family: inherit;
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
.inputs{
  border:none;
  background: none;
  font-size: 20px;
  
}

</style>