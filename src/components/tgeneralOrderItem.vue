<script setup>
import { reactive, onMounted,ref,h } from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal } from 'naive-ui';
import axios from 'axios';
const createColumns = ({
  selectId})=>{
    return [
  {
    title: "明細編號",
    key: "item_no"
  },
  {
    title: "訂單編號",
    key: "orders_no"
  },
  {
    title: "商品編號",
    key: "products_no"
  },
  {
    title: "數量",
    key: "item_quantity"
  },
  {
    title: "單價",
    key: "item_"
  },
  {
    title: "折扣後價格",
    key: "disc_no"
  },
  {
    title: "折扣數",
    key: "orders_price"
  },
  {

  }
  ]
};  
const showModal = ref(false);
const newStatus = ref('');
const column = createColumns({
  selectId(rowData) {
    showModal.value = true;
    newStatus.value = row.orders_no;
    console.log(newStatus.value)
  }
})
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

const NmOrderRows = ref([]);
		const getNmOrder = () => {
			//取得商品資料
      axios.get("http://localhost/CGD103-G5/public/g5PHP/getNmOrder.php")
      .then(res=> {
        // console.log(res)
        NmOrderRows.value = res.data
      })
		}
	onMounted(()=>{
		getNmOrder();
  })
</script>
<template>
<div class="top">
<h2>
    一般訂單明細查詢
    <outComponents />
  </h2>
  <div class="table">
    <n-data-table :columns="column" :data="NmOrderRows" :pagination="pagination"  :bordered="true" :single-line="false" />
    <n-modal
        v-model:show="showModal"
        preset="dialog"
        title="確認"
        content="你確定嗎?"
      >
      <label for="admin_acc"> 修改帳號 : </label>
      <input type="text" name="admin_acc" placeholder="修改帳號" v-model="newAdmin_acc">
      <n-button @click="showModal = true; updateAdmin(index)" type="error">
        確認
      </n-button>
    </n-modal>
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