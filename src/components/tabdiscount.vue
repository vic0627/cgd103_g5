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
const no = ref("");
const title = ref("");
const txt = ref("");
const start = ref("");
const end = ref("");
const off = ref("");
const code = ref("");
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
const createColumns = ({ selectId, showModal2 }) => {
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
            color: "#FF4E4E",
            onClick: () => showModal2(row, index),
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
    newDisc_no.value = discRows.value[index].disc_no;
    newDisc_title.value = discRows.value[index].disc_title;
    newDisc_txt.value = discRows.value[index].disc_txt;
    newDisc_start.value = discRows.value[index].disc_start;
    newDisc_end.value = discRows.value[index].disc_end;
    newDisc_off.value = discRows.value[index].disc_off;
    newDisc_code.value = discRows.value[index].disc_code;
  },
  showModal2(rowData, index) {
    showModal2.value = true;
    newDisc_no.value = discRows.value[index].disc_no;
  },
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

const props = defineProps(["tab"]);
//取得資料庫資料
const discRows = ref([]);
const getDisc = () => {
  //取得商品資料
  fetch(`${BIND_URL("getDisc.php", "g5PHP")}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      discRows.value = json;
    });
};
onMounted(() => {
  getDisc();
});

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
  fetch(`${BIND_URL("updateDisc.php", "g5PHP")}`, {
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
// 搜尋

const search = ref("");
const returnDisc = computed(() => {
  let cache = discRows.value;
  if (search.value !== "") {
    cache = cache.filter((i) =>
      String(i[select[selectVal.value].val]).includes(search.value)
    );
    if (search.value == "all") {
      cache = discRows.value;
    }
  } else {
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: "優惠編號",
    val: "disc_no",
  },
  {
    id: 1,
    title: "優惠名稱",
    val: "disc_title",
  },
];
const selectVal = ref("0");
const testVal = (e) => {
  selectVal.value = e.target.value;
};

//刪除資料庫
const deleteDisc = (user) => {
  const delDisc = {
    disc_no: Number(newDisc_no.value),
  };
  fetch(`${BIND_URL("deleteDisc.php", "g5PHP")}`, {
    method: "POST",
    body: new URLSearchParams(delDisc),
  })
    .then((res) => {
      res.json();
      console.log(res);
    })
    .then((res) => {
      showModal2.value = false;
      getDisc();
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
      <p>依</p>
      <select name="searchMethods" id="searchMethods" @change="testVal">
        <option v-for="i in select" :key="i.id" :value="i.id">
          {{ i.title }}
        </option>
      </select>
      <p>查詢</p>
      <label for="search" class="label">
        <input
          type="search"
          id="search"
          name="search"
          v-model="search"
          :placeholder="`請輸入all或${select[selectVal].title}`"
        />
      </label>
    </div>

    <div class="tables" id="products" align="center">
      <form method="post" class="table">
        <n-data-table
          :columns="column"
          :data="returnDisc"
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
          <label for="faq_des"> 修改優惠 : </label>
          <textarea
            name="disc_no"
            v-model="newDisc_no"
            rows="1"
            cols="50"
            placeholder="請輸入編號"
            maxlength="200"
          ></textarea>
          <textarea
            name="disc_title"
            v-model="newDisc_title"
            rows="1"
            cols="50"
            placeholder="請輸入名稱"
            maxlength="300"
          ></textarea>
          <textarea
            name="disc_txt"
            v-model="newDisc_txt"
            rows="1"
            cols="50"
            placeholder="請輸入敘述"
            maxlength="300"
          ></textarea>
          <textarea
            name="disc_start"
            v-model="newDisc_start"
            rows="1"
            cols="50"
            placeholder="請輸入開始日期"
            maxlength="300"
          ></textarea>
          <textarea
            name="disc_end"
            v-model="newDisc_end"
            rows="1"
            cols="50"
            placeholder="請輸入結束日期"
            maxlength="300"
          ></textarea>
          <textarea
            name="disc_off"
            v-model="newDisc_off"
            rows="1"
            cols="50"
            placeholder="請輸入折扣數"
            maxlength="300"
          ></textarea>
          <textarea
            name="disc_code"
            v-model="newDisc_code"
            rows="10"
            cols="50"
            placeholder="請輸入優惠碼"
            maxlength="300"
          ></textarea>
          <n-button
            @click="
              showModal = true;
              updateDisc(index);
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
              deleteDisc(index);
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

.search_box {
  display: flex;
  justify-content: right;
  margin: 30px 15px;
  p {
    color: #000;
  }
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
}

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

.tables {
  width: 95%;
  margin: auto;
  ::v-deep(n-data-table-td) {
    border-bottom: 1 solid #111;
    background-color: #222;
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
