<script setup>
import { reactive, onMounted, ref, defineComponent, h } from "vue";
import {
  zhTW,
  NPagination,
  NTable,
  NDataTable,
  NButton,
  NModal,
} from "naive-ui";
const no = ref("");
const name = ref("");
const start = ref("");
const end = ref("");
const aboard = ref("");
const photo = ref("");
const txt = ref("");
const newcpt_no = ref("");
const newcpt_name = ref("");
const newcpt_start = ref("");
const newcpt_end = ref("");
const newcpt_aboard = ref("");
const newcpt_photo = ref("");
const newcpt_txt = ref("");
const showModal = ref(false);
const showModal2 = ref(false);

//data-table
const createColumns = ({ selectId, showmodal }) => {
  return [
    {
      title: "賽事編號",
      key: "cpt_no",
    },
    {
      title: "賽事名稱",
      key: "cpt_name",
    },
    {
      title: "開始日期",
      key: "cpt_start",
    },
    {
      title: "結束日期",
      key: "cpt_end",
    },
    {
      title: "國內外",
      key: "cpt_aboard",
    },
    {
      title: "圖片路徑",
      key: "cpt_photo",
    },
    {
      title: "賽事說明",
      key: "cpt_txt",
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
            onClick: () => selectId(row, index),
            // onClick: () => modal(row)
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
            color: "#077AF9",
            onClick: () => selectId(row, index),
            onClick: () => showmodal(),
          },
          { default: () => "刪除" }
        );
      },
    },
  ];
};
//解析內容跟事件
const column = createColumns({
  selectId(rowData, index) {
    showModal.value = true;
    newcpt_no.value = raceRows.value[index].cpt_no;
    newcpt_name.value = raceRows.value[index].cpt_name;
    newcpt_start.value = raceRows.value[index].cpt_start;
    newcpt_end.value = raceRows.value[index].cpt_end;
    newcpt_aboard.value = raceRows.value[index].cpt_aboard;
    newcpt_photo.value = raceRows.value[index].cpt_photo;
    newcpt_txt.value = raceRows.value[index].cpt_txt;
  },
  showmodal() {
    showModal2.value = true;
  },
});
//分頁js
const paginationReactive = reactive({
  page: 1,
  pageSize: 5,
  onChange: (page) => {
    paginationReactive.page = page;
  },
  onUpdatePageSize: (pageSize) => {
    paginationReactive.pageSize = pageSize;
    paginationReactive.page = 1;
  },
});
const pagination = paginationReactive;

const props = defineProps(["tab"]);
//取得資料庫資料
const raceRows = ref([]);
const getProducts = () => {
  //取得商品資料
  fetch("http://localhost/cgd103_g5/public/g5PHP/getRace.php")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      raceRows.value = json;
    });
};
onMounted(() => {
  getProducts();
});

//更新資料
const updateRace = (user) => {
  const newRace = {
    cpt_no: Number(newcpt_no.value),
    cpt_name: newcpt_name.value,
    cpt_start: newcpt_start.value,
    cpt_end: newcpt_end.value,
    cpt_aboard: newcpt_aboard.value,
    cpt_photo: newcpt_photo.value,
    cpt_txt: newcpt_txt.value,
  };
  fetch("http://localhost/cgd103_g5/public/g5PHP/updateRace.php", {
    method: "POST",
    body: new URLSearchParams(newcpt),
  }).then((res) => {
    console.log(res);
    res.json();
  });
  showModal.value = false;
  getProducts();
};

// 刪除資料
const deleteRace = () => {
  const deleteRace = {
    cpt_no: Number(newcpt_no.value),
  };
  fetch("http://localhost/cgd103_g5/public/g5PHP/deleteRace.php", {
    method: "POST",
    body: new URLSearchParams(deleteRace),
  }).then((res) => {
    res.json();
  });
  showModal2.value = false;
  getProducts();
};
</script>

<template>
  <div class="top">
    <h2>
      FAQ列表
      <outComponents />
    </h2>
    <div class="bigbox">
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
    </div>

    <div class="tables" id="products" align="center">
      <form action="" method="post">
        <n-data-table
          :columns="column"
          :data="raceRows"
          :pagination="pagination"
          :bordered="true"
          :single-line="false"
        />
        <n-modal
          v-model:show="showModal"
          preset="dialog"
          title="確認"
          content="你確定嗎?"
        >
          <label for="faq_des"> 修改比賽 : </label>
          <textarea
            name="faq_des"
            v-model="newFaq_des"
            rows="10"
            cols="50"
            placeholder="請輸入問題"
            maxlength="200"
          ></textarea>
          <textarea
            name="faq_ans"
            v-model="newFaq_ans"
            rows="10"
            cols="50"
            placeholder="請輸入回答"
            maxlength="300"
          ></textarea>
          <n-button
            @click="
              showModal = true;
              updateRace(index);
            "
            type="error"
          >
            確認
          </n-button>
        </n-modal>
        <n-modal
          v-model:show="showModal2"
          preset="dialog"
          title="確認"
          content="你確定嗎?"
        >
          <n-button
            @click="
              showModal2 = true;
              deleteFaq(index);
            "
            type="error"
          >
            刪除
          </n-button>
        </n-modal>
      </form>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/sass/style.scss";
textarea {
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

.bigbox {
  width: 97%;
  margin: 15px auto;
  display: flex;
  justify-content: right;
  .add {
    width: 150px;
    margin: 15px;
    input {
      width: 150px;
      font-size: 20px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background: #597897;
      cursor: pointer;
      color: #fff;
      transition: background 0.5s;
      &:hover {
        background: $blue;
      }
    }
  }
  .search_box {
    display: flex;
    // justify-content: right;
    margin: 15px;
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
}

.tables {
  width: 100%;
  margin: auto;
  table {
    width: 95%;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    tr {
      &:hover td {
        background: rgba(89, 120, 151, 0.11);
      }
      th {
        padding: 20px 10px;
        background-color: #597897;
        color: #fff;
        border: 1px solid #ebebeb;
        border-top: 1px solid #597897;
      }
      td {
        border: 1px solid #ebebeb;
        padding: 20px 10px;
        overflow: hidden;
      }
    }
  }
}

.modal-mask {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
