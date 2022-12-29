<script setup>
import { BIND_URL } from "../composables/useCommon";
import { reactive, onMounted, ref, defineComponent, h, computed } from "vue";
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
  ];
};
//解析內容跟事件
const column = createColumns({
  selectId(rowData, index) {
    showModal.value = true;
    newcpt_no.value = rowData.cpt_no;
    newcpt_name.value = rowData.cpt_name;
    newcpt_start.value = rowData.cpt_start;
    newcpt_end.value = rowData.cpt_end;
    newcpt_aboard.value = rowData.cpt_aboard;
    newcpt_photo.value = rowData.cpt_photo;
    newcpt_txt.value = rowData.cpt_txt;
  },
  showmodal(rowData, index) {
    // showModal2.value = true;
    newcpt_no.value = rowData.cpt_no;
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
  fetch(`${BIND_URL("getRace.php", "g5PHP")}`)
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
  const newcpt = {
    cpt_no: Number(newcpt_no.value),
    cpt_name: newcpt_name.value,
    cpt_start: newcpt_start.value,
    cpt_end: newcpt_end.value,
    cpt_aboard: newcpt_aboard.value,
    cpt_photo: newcpt_photo.value,
    cpt_txt: newcpt_txt.value,
  };
  fetch(`${BIND_URL("updateRace.php", "g5PHP")}`, {
    method: "POST",
    body: new URLSearchParams(newcpt),
  }).then((res) => {
    console.log(res);
    res.json();
  });
  showModal.value = false;
  getProducts();
};

// 搜尋

const search = ref("");
const returnRace = computed(() => {
  let cache = raceRows.value;
  if (search.value !== "") {
    cache = cache.filter((i) =>
      String(i[select[selectVal.value].val]).includes(search.value)
    );
    if (search.value == "all") {
      cache = raceRows.value;
    }
  } else {
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: "賽事編號",
    val: "cpt_no",
  },
  {
    id: 1,
    title: "賽事名稱",
    val: "cpt_name",
  },
];
const selectVal = ref("0");
const testVal = (e) => {
  selectVal.value = e.target.value;
};

// 刪除資料
// const deleteRace = () => {
//   const delRace = {
//     cpt_no: Number(newcpt_no.value),
//   };
//   fetch("http://localhost/cgd103_g5/public/g5PHP/deleteRace.php", {
//     method: "POST",
//     body: new URLSearchParams(delRace),
//   }).then((res) => {
//     res.json();
//   });
//   showModal2.value = false;
//   getProducts();
// };
</script>

<template>
  <div class="top">
    <h2>賽事列表<outComponents /></h2>

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
          :placeholder="`請輸入${select[selectVal].title}`"
        />
      </label>
      <p>輸入"all"可查詢所有項目</p>
    </div>

    <!-- <div class="bigbox">
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
    </div> -->

    <div class="tables" id="products" align="center">
      <form action="" method="post">
        <n-data-table
          :columns="column"
          :data="returnRace"
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
          <label for="faq_des"> 修改比賽資訊 : </label>
          <textarea
            name="cpt_no"
            v-model="newcpt_no"
            rows="1"
            cols="50"
            placeholder="請輸入編號"
            maxlength="200"
          ></textarea>
          <textarea
            name="cpt_name"
            v-model="newcpt_name"
            rows="1"
            cols="50"
            placeholder="請輸入名稱"
            maxlength="300"
          ></textarea>
          <textarea
            name="cpt_start"
            v-model="newcpt_start"
            rows="1"
            cols="50"
            placeholder="請輸入日期"
            maxlength="300"
          ></textarea>
          <textarea
            name="cpt_end"
            v-model="newcpt_end"
            rows="1"
            cols="50"
            placeholder="請輸入日期"
            maxlength="300"
          ></textarea>
          <textarea
            name="cpt_aboard"
            v-model="newcpt_aboard"
            rows="1"
            cols="50"
            placeholder="請輸入地點"
            maxlength="300"
          ></textarea>
          <textarea
            name="cpt_photo"
            v-model="newcpt_photo"
            rows="1"
            cols="50"
            placeholder="請輸入照片"
            maxlength="300"
          ></textarea>
          <textarea
            name="cpt_txt"
            v-model="newcpt_txt"
            rows="10"
            cols="50"
            placeholder="請輸入內容"
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
              deleteRace(index);
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
  width: 85%;
  height: 100%;
  display: block;
  overflow-y: auto;
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
