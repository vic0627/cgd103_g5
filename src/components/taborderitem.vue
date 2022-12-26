<script setup>
import { reactive, onMounted, ref, h } from "vue";
import {
  zhTW,
  NPagination,
  NTable,
  NDataTable,
  NButton,
  NModal,
} from "naive-ui";
import axios from "axios";
const showModal = ref(false);
const newNmno = ref("");
const newStatus = ref("");
//資料放進表格
const createColumns = ({ selectId }) => {
  return [
    {
      title: "訂單編號",
      key: "orders_no",
    },
    {
      title: "會員編號",
      key: "mem_no",
    },
    {
      title: "購買日期",
      key: "purchase_date",
    },
    {
      title: "訂單狀態",
      key: "orders_status",
    },
    {
      title: "運送地點",
      key: "orders_location",
    },
    {
      title: "總金額",
      key: "orders_price",
    },
    {
      title: "優惠編號",
      key: "disc_no",
    },
    {
      title: "編輯訂單狀態",
      key: "actions",
      render(row, index) {
        return h(
          NButton,
          {
            size: "medium",
            color: "#077AF9",
            onClick: () => selectId(row, index),
            // onClick: () => modal(row)
          },
          { default: () => "編輯" }
        );
      },
    },
  ];
};
const column = createColumns({
  selectId(rowData, index) {
    if (rowData.orders_status === "訂單完成") {
      showModal.value = false;
      alert("不可修改");
    } else {
      showModal.value = true;
      newNmno.value = rowData.orders_no;
      newStatus.value = rowData.orders_status;
    }
  },
});
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
  },
});
const pagination = paginationReactive;
//取得資料庫資料
const NmOrderRows = ref([]);
const getNmOrder = () => {
  //取得商品資料
  axios
    .get("http://localhost/CGD103-G5/public/g5PHP/getNmOrder.php")
    .then((res) => {
      NmOrderRows.value = res.data;
    })
    .then((res) => {
      for (let i = 0; i < NmOrderRows.value.length; i++) {
        if (NmOrderRows.value[i].disc_no === null) {
          NmOrderRows.value[i].disc_no = "無優惠編號";
        }
      }
    });
};
onMounted(() => {
  getNmOrder();
});
//修改資料庫資料
const updateStatus = () => {
  const newNm = {
    orders_no: Number(newNmno.value),
    orders_status: newStatus.value,
  };
  fetch("http://localhost/CGD103-G5/public/g5PHP/updateNm_status.php", {
    method: "POST",
    body: new URLSearchParams(newNm),
  }).then((res) => {
    console.log(res);
    // res.data[0]
  });
  showModal.value = false;
  getNmOrder();
};
</script>
<template>
  <div class="top">
    <h2>
      一般訂單查詢
      <outComponents />
    </h2>
    <form method="post">
      <div class="table">
        <n-data-table
          :columns="column"
          :data="NmOrderRows"
          :pagination="pagination"
          :bordered="true"
          :single-line="false"
        />
        <n-modal v-model:show="showModal" preset="dialog" title="編輯訂單狀態">
          <label for="orders_status"> 修改狀態 : </label>
          <!-- <input type="text" name="admin_acc" placeholder="修改狀態" v-model="newAdmin_acc"> -->
          <select name="orders_status" id="" v-model="newStatus">
            <option value="待處理">待處理</option>
            <option value="處理中">處理中</option>
            <option value="運送中">運送中</option>
            <option value="訂單完成">訂單完成</option>
          </select>
          <n-button
            @click="
              showModal = true;
              updateStatus();
            "
            type="error"
          >
            確認
          </n-button>
        </n-modal>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import "@/sass/style.scss";
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
.search_box {
  display: flex;
  justify-content: right;
  margin: 30px 15px;
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
