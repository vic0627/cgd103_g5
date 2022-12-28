<script setup>
import { reactive, onMounted,ref,h, computed } from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal } from 'naive-ui';
import axios from 'axios';
const newAdmin_no = ref('');
const newAdmin_acc = ref('');
const newAdmin_name = ref('')
const showModal = ref(false);
const showModal2 = ref(false);
import {BIND_URL } from "../composables/useCommon";
//資料放進表格
const createColumns = ({
  selectId,showmodal})=>{
    return [
  {
    title: "編號",
    key: "admin_no",
  },
  {
    title: "管理員帳號",
    key: "admin_acc"
  },
  {
    title: "管理員姓名",
    key: "admin_name"
  },
  {
    title: "權限等級",
    key: "authority"
  },
  {
    title: "編輯 / 刪除",
    key: "actions",
    titleColSpan: 2,
    render(row, index) {
      return h(
        NButton,
        {
          size: "medium",
          color: "#077AF9",
          onClick: () => selectId(row,index),
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
          color: "#D03050",
          // onClick: () => selectId(row,index),
          onClick: () => showmodal(row,index)
        },
        { default: () => "刪除" }
      );
    }
  },
  ]
};
const column = createColumns({
  selectId(rowData,index) {
    if(adminRows.value[index].authority === "一般管理員"){
        showModal.value = true;
        newAdmin_acc.value = adminRows.value[index].admin_acc;
        newAdmin_no.value = adminRows.value[index].admin_no;
        newAdmin_name.value =adminRows.value[index].newAdmin_name;
    }else if(adminRows.value[index].authority === "最高管理員"){
        alert('最高管理員不可編輯')
    }
  
  },
  showmodal(user,index){
    if(adminRows.value[index].authority === "一般管理員"){
        newAdmin_no.value = adminRows.value[index].admin_no;
        showModal2.value = true
    }else if(adminRows.value[index].authority === "一般管理員"){
        alert('最高管理員不可刪除')
    }
  }
})
//取得資料庫資料
const adminRows = ref([]);
		const getAdmin = () => {
			//取得管理員資料
       axios.get(`${BIND_URL('getAdmin.php','g5PHP')}`)
      .then(res=> {
        adminRows.value = res.data
      })
}
	onMounted(()=>{
		getAdmin();
  });
//分頁js
const paginationReactive = reactive({
      page: 1,
      pageSize: 8,
      onChange: (page) => {
        paginationReactive.page = page;
      },
      onUpdatePageSize: (pageSize) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      }
    });
const  pagination = paginationReactive;
//抓管理員編號
// const selectId = (user)=>{
//   console.log(adminRows.value[user].admin_no);
//   newAdmin_acc.value = adminRows.value[user].admin_acc;
//   newAdmin_no.value = adminRows.value[user].admin_no;
//   console.log(user)
// }
//更新資料
const updateAdmin = (user)=>{
  const newAdmin = {
    admin_no: Number(newAdmin_no.value),
    admin_acc: newAdmin_acc.value, 
    admin_name: newAdmin_name.value
  }
  fetch(`${BIND_URL('updateAdmin.php','g5PHP')}`, {
    method: "POST",
    body: new URLSearchParams(newAdmin),
  }).then(res=>{
    res.json()
  }).then(res => {
    showModal.value = false;
    getAdmin();
  })
}
//刪除資料庫
const deleteAdmin = ()=>{
  const deleteAcc = {
    admin_no: Number(newAdmin_no.value)
  }
  fetch(`${BIND_URL('deleteAdmin.php','g5PHP')}`,{
    method: "POST",
    body: new URLSearchParams(deleteAcc),
  }).then(res=>{
    res.json()
  }).then(res => {
    showModal2.value = false;
    getAdmin();
  })
}
// 搜尋

const search = ref('');
const returnAdmin = computed(() => {
  let cache = adminRows.value;
  if(search.value!==''){
    cache = cache.filter(i => String(i[select[selectVal.value].val]).includes(search.value))
    if(search.value=='all'){
      cache = adminRows.value;
    }
  }else{
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: '編號',
    val: 'admin_no',
  },
  {
    id: 1,
    title: '管理員帳號',
    val: 'admin_acc',
  },
  {
    id: 2,
    title: '管理員姓名',
    val: 'admin_name',
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
    管理員管理
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
  <form method="post" class="table">
    <n-data-table :columns="column" :data="returnAdmin" :pagination="pagination" :bordered="true" :single-line="false" />
    
        <n-modal
          v-model:show="showModal"
          preset="dialog"
          title="確認編輯">
          <div class="modal">
            <div class="input">
              <label for="admin_acc"> 編輯帳號 : </label>
              <input type="text" name="admin_acc" v-model="newAdmin_acc">              
            </div>
            <div class="input">
              <label for="admin_name"> 編輯姓名 : </label>
              <input type="text" name="admin_name" v-model="newAdmin_name">              
            </div>
            <div class="button">
              <n-button @click="showModal = true; updateAdmin(index)" type="error" class="btnModal">
              確認
              </n-button>
            </div>
          </div>
           </n-modal>
            <n-modal
                v-model:show="showModal2"
                preset="dialog"
                title="確認">
            <div class="modal">
                <h6>確認刪除帳號</h6>
                <p>系統將永久移除您的管理員帳號</p>
                <div class="button">
                  <n-button @click="showModal2 = false" type="info" class="btnModal">
                    返回
                  </n-button>
                  <n-button @click="showModal2 = true; deleteAdmin()" type="error" class="btnModal">
                    刪除
                  </n-button>
                </div>
            </div>
           </n-modal>
  </form>
</div>

  
</template>
<style scoped lang="scss">
@import '@/sass/style.scss';
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
.options{
  display: flex;
  justify-content: space-around;
  align-items: center;
  .addBox{
    width: 20%;
  }
}
.search_box{
  display: flex;
  justify-content: right;
  margin: 30px 15px;
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
  .btn {
    button{
      width: 50px;
      text-align: center;
      border: none;
      background:#597897;
      border-radius: 5px;
      padding: 5px;
      transition: background 0.5s;
      cursor: pointer;
      &:hover{
        background: $blue;
      }
      img{
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
.modal {
  .input {
    display: block;
    margin-top: 30px;
  }
  .button {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .btnModal {

      margin-top: 30px;
    }
  }
}
h6 {
  color: #000000;
}
p {
  color: #000000;
}
</style>