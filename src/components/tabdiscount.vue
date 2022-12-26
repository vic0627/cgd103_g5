<script setup>
import { reactive, onMounted, ref, h, computed } from "vue";
import {
  zhTW,
  NPagination,
  NTable,
  NDataTable,
  NButton,
  NModal,
} from "naive-ui";
import axios from "axios";
const newDisc_no = ref("");
const newDisc_title = ref("");
const newDisc_txt = ref("");
const newDisc_start = ref("");
const newDisc_end = ref("");
const newDisc_off = ref("");
const newDisc_code = ref("");
const showModal = ref(false);
const showModal2 = ref(false);
//資料放進表格
const createColumns = ({ selectId, showmodal }) => {
  return [
    {
      title: "優惠編號",
      key: "disc_no",
    },
    {
      title: "優惠名稱",
      key: "disc_title",
    },
    {
      title: "優惠描述",
      key: "disc_txt",
    },
    {
      title: "優惠開始日",
      key: "disc_start",
    },
    {
      title: "優惠截止日",
      key: "disc_end",
    },
    {
      title: "折扣數",
      key: "disc_off",
    },
    {
      title: "折扣代碼",
      key: "disc_code",
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
            onClick: () => selectId(row, index),
          },
          { default: () => "編輯" }
        );
      },
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
            onClick: () => showmodal(row, index),
          },
          { default: () => "刪除" }
        );
      },
    },
  ];
};
const column = createColumns({});
//取得資料庫資料
const discRows = ref([]);
const getDisc = () => {
  //取得管理員資料
  axios
    .get("http://localhost/cgd103_g5/public/g5PHP/getDisc.php")
    .then((res) => {
      discRows.value = res.data;
    });
};
onMounted(() => {
  getDisc();
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
  },
});
const pagination = paginationReactive;

//更新資料
const updateDisc = (user) => {
  const newDisc = {
    disc_no: Number(newDisc_no.value),
    disc_title: newDisc_title.value,
    disc_txt: newDisc_txt.value,
    disc_start: newDisc_start.value,
    disc_end: newDisc_end.value,
    disc_off: newDisc_off.value,
    disc_code: newDisc_code.value,
  };
  fetch("http://localhost/cgd103_g5/public/g5PHP/updateDisc.php", {
    method: "POST",
    body: new URLSearchParams(newDisc),
  })
    .then((res) => {
      res.json();
    })
    .then((res) => {
      showModal.value = false;
      getDisc();
    });
};
//刪除資料庫
const deleteDisc = () => {
  const deleteDis = {
    disc_no: Number(newDisc_no.value),
  };
  fetch("http://localhost/CGD103-G5/public/g5PHP/deleteDisc.php", {
    method: "POST",
    body: new URLSearchParams(deleteDis),
  })
    .then((res) => {
      res.json();
      console.log(res);
    })
    .then((res) => {
      showModal2.value = false;
      getAdmin();
    });
};
</script>
<template>
  <div class="top">
    <h2>
      優惠管理
      <outComponents />
    </h2>
    <div class="search_box">
      <label for="search" class="label"
        >查詢編號<input
          type="search"
          id="search"
          name="search"
          placeholder="請輸入編號"
      /></label>
      <div class="btn">
        <button class="magBox">
          <img src="../assets/images/About/search.png" alt="search" />
        </button>
      </div>
    </div>
    <form method="post" class="table">
      <n-data-table
        :columns="column"
        :data="adminRows"
        :pagination="pagination"
        :bordered="true"
        :single-line="false"
      />

      <n-modal v-model:show="showModal" preset="dialog" title="確認編輯">
        <div class="modal">
          <div class="input">
            <label for="disc_title"> 編輯名稱 : </label>
            <input type="text" name="disc_title" v-model="newDisc_title" />
          </div>
          <div class="input">
            <label for="disc_txt"> 編輯名稱 : </label>
            <input type="text" name="disc_txt" v-model="newDisc_txt" />
          </div>
          <div class="input">
            <label for="disc_start"> 編輯名稱 : </label>
            <input type="text" name="disc_start" v-model="newDisc_start" />
          </div>
          <div class="input">
            <label for="disc_end"> 編輯名稱 : </label>
            <input type="text" name="disc_end" v-model="newDisc_end" />
          </div>
          <div class="input">
            <label for="disc_off"> 編輯名稱 : </label>
            <input type="text" name="disc_off" v-model="newDisc_off" />
          </div>
          <div class="input">
            <label for="disc_code"> 編輯名稱 : </label>
            <input type="text" name="disc_code" v-model="newDisc_code" />
          </div>
          <div class="button">
            <n-button
              @click="
                showModal = true;
                updateDisc(index);
              "
              type="error"
              class="btnModal"
            >
              確認
            </n-button>
          </div>
        </div>
      </n-modal>
      <n-modal v-model:show="showModal2" preset="dialog" title="確認">
        <div class="modal">
          <h6>確認刪除帳號</h6>
          <p>系統將永久移除您的管理員帳號</p>
          <div class="button">
            <n-button @click="showModal2 = false" type="info" class="btnModal">
              返回
            </n-button>
            <n-button
              @click="
                showModal2 = true;
                deleteDisc();
              "
              type="error"
              class="btnModal"
            >
              刪除
            </n-button>
          </div>
        </div>
      </n-modal>
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
