<script setup>
import { reactive, onMounted,ref } from 'vue';
import { zhTW, NPagination,NTable,NDataTable } from 'naive-ui';
const columns = [
  {
    title: "編號",
    key: "number"
  },
  {
    title: "訂單編號",
    key: "onum"
  },
  {
    title: "日期",
    key: "date"
  },
  {
    title: "品項",
    key: "item"
  },
  {
    title: "狀態",
    key: "status"
  },
  {
    title: "訂貨人",
    key: "name"
  },
  {
    title: "合計",
    key: "total"
  },
];
const column = [
  {
    title: "編號",
    key: "admin_no"
  },
  {
    title: "訂單編號",
    key: "authority"
  },
  {
    title: "日期",
    key: "admin_acc"
  },
  {
    title: "品項",
    key: "admin_psw"
  },
  {
    title: "狀態",
    key: "status"
  },
  {
    title: "訂貨人",
    key: "name"
  },
  {
    title: "合計",
    key: "total"
  },
];
const data = reactive([
    {
        number:1,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:2,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:3,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:4,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:5,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:6,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:7,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:8,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:9,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:10,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
    {
        number:11,
        onum:"ajfajsajff",
        date: "2022/12/12",
        item: "EFPV 5",
        status: "處理中",
        name:"劉蹭餒",
        total: "2,499",
    },
]);
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

const adminRows = ref([]);
		const getAdmin = () => {
			//取得商品資料
			let xhr = new XMLHttpRequest();
			xhr.onload = function(){
				if(xhr.status == 200){ //OK
				  adminRows.value = JSON.parse(xhr.responseText);
				}
			}
			xhr.open("get", "/dist/g5PHP/getAdmin.php", true);
			xhr.send(null);
		}
	onMounted(()=>{
		getAdmin();
  });
</script>
<template>
<div class="top">
<h2>
    一般訂單明細查詢
    <outComponents />
  </h2>
  <div class="table">
    <n-data-table :columns="column" :data="adminRows" :pagination="pagination"  :bordered="true" :single-line="false" />
  </div>
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