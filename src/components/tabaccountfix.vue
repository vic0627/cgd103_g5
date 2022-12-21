<script setup>
import { reactive, onMounted,ref,h } from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal, } from 'naive-ui';
import axios from 'axios';
//取得資料庫資料
const adminRows = ref([]);
		const getAdmin = () => {
			//取得管理員資料
       axios.get("http://localhost/CGD103-G5/public/g5PHP/getAdmin.php")
      .then(res=> {
        // console.log(res.data)
        adminRows.value = res.data
      })
}
// const 
	onMounted(()=>{
		getAdmin();
  });
  
// const column = [
//   {
//     title: "管理員編號",
//     key: "admin_no"
//   },
//   {
//     title: "管理員姓名",
//     key: "admin_name"
//   },
//   {
//     title: "管理員帳號",
//     key: "admin_acc"
//   },
//   {
//     title: "管理員權限",
//     key: "authority"
//   },
//   {
//       title: "Action",
//       key: "actions",
//       render(row) {
//         return h(
//           NButton,
//           {
//             size: "medium",
//             color: "#077AF9",
//             onClick: () => sendMail(row)
//           },
//           { default: () => "編輯" }
//         );
//       }
//     }
// ];  
const newAdmin_no = ref('');
const newAdmin_acc = ref('');
const showModal = ref(false);
const showModal2 = ref(false);
const paginationReactive = reactive({
      page: 2,
      pageSize: 10,
    //   showSizePicker: true,
    //   pageSizes: [3, 5, 7],
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
const changeValue = (user)=>{
  console.log(adminRows.value[user].admin_no);
  newAdmin_acc.value = adminRows.value[user].admin_acc;
  newAdmin_no.value = adminRows.value[user].admin_no;
}
//更新資料
const updateAdmin = (user)=>{
  const newAdmin = {
    admin_no: Number(newAdmin_no.value),
    admin_acc: newAdmin_acc.value, 
  }
  fetch("http://localhost/CGD103-G5/public/g5PHP/updateAdmin.php", {
    method: "POST",
    body: new URLSearchParams(newAdmin),
  }).then(res=>{
    console.log(res)
    res.json()
  })
  showModal.value = false;
  getAdmin();
}
const deleteAdmin = ()=>{
  const deleteAcc = {
    admin_no: Number(newAdmin_no.value)
  }
  fetch("http://localhost/CGD103-G5/public/g5PHP/deleteAdmin.php",{
    method: "POST",
    body: new URLSearchParams(deleteAcc),
  }).then(res=>{
    res.json()
    getAdmin();
  })
  showModal2.value = false;
}

</script>
<template>
<div class="top">
  <h2>
    管理員管理
    <outComponents />
  </h2>
  <div class="search_box">
    <label for="search" class="label">查詢編號<input type="search" id="search" name="search" placeholder="請輸入編號"></label>
    <div class="btn">
      <button class="magBox"><img src="../assets/images/About/search.png" alt="search"></button>
    </div>
  </div>
  <form method="post">
    <n-table>
      <thead>
        <tr>
          <th>編號</th>
          <th>帳號</th>
          <th>管理員姓名</th>
          <th>管理員級別</th>
          <!-- <th>編輯</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in adminRows" :key="index" :pagination="x">
          <td>{{index+1}}</td>
          <td>{{item.admin_acc}}</td>
          <td>{{item.admin_name}}</td>
          <td>{{item.authority}}</td>
          <td>{{item.admin_psw}}</td>
          <td>
            <n-button @click="showModal = true; changeValue(index)" type="info">
              編輯
            </n-button>
              <n-modal
                v-model:show="showModal"
                preset="dialog"
                title="確認"
                content="你確定嗎?"
              >
            <!-- <input type="text" name="admin_no" placeholder="修改" v-model="newAdmin_no"> -->
            <label for="admin_acc"> 修改帳號 : </label>
            <input type="text" name="admin_acc" placeholder="修改帳號" v-model="newAdmin_acc">
            <n-button @click="showModal = true; updateAdmin(index)" type="error">
              確認
            </n-button>
           </n-modal>
          </td>
          <td>
            <n-button @click="showModal2 = true;changeValue(index)" type="error">
              刪除
            </n-button>
            <n-modal
                v-model:show="showModal2"
                preset="dialog"
                title="確認"
                content="你確定嗎?"
              >
            <n-button @click="showModal2 = true; deleteAdmin(index)" type="error">
              刪除
            </n-button>
           </n-modal>
          </td>
        </tr>
         <!-- <n-pagination  :page="1" :page-count="2" /> -->
      </tbody>
    </n-table>
  </form>
   <!-- <div class="table">
    <n-data-table :columns="column" :data="adminRows" :pagination="pagination"  :bordered="true" :single-line="false" />
  </div>
   <n-modal :show="showModal">
    
   </n-modal> -->
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
</style>