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
import axios from "axios";
const createColumns = ({ sendMail, showModal }) => {
  return [
    {
      title: "報名編號",
      key: "regis_no",
    },
    {
      title: "賽事編號",
      key: "comp_no",
    },
    {
      title: "會員編號",
      key: "mem_no",
    },
    {
      title: "報名日期",
      key: "regis_date",
    },
  ];
};
const modal = ref(false);
const column = createColumns({
  showModal() {
    modal.value == true;
  },
});

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

const bookRows = ref([]);
const getBook = () => {
  //取得商品資料
  axios.get(`${BIND_URL("getBook.php", "g5PHP")}`).then((res) => {
    // console.log(res)
    bookRows.value = res.data;
  });
};
onMounted(() => {
  getBook();
});

// 搜尋

const search = ref("");
const returnRace = computed(() => {
  let cache = bookRows.value;
  if (search.value !== "") {
    cache = cache.filter((i) =>
      String(i[select[selectVal.value].val]).includes(search.value)
    );
    if (search.value == "All") {
      cache = bookRows.value;
    }
  } else {
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: "報名編號",
    val: "regis_no",
  },
  {
    id: 1,
    title: "賽事編號",
    val: "comp_no",
  },
  {
    id: 1,
    title: "會員編號",
    val: "mem_no",
  },
];
const selectVal = ref("0");
const testVal = (e) => {
  selectVal.value = e.target.value;
};
</script>
<template>
  <div class="top">
    <h2>
      報名資料查詢
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
          :placeholder="`請輸入${select[selectVal].title}`"
        />
      </label>
      <p>輸入"all"可查詢所有項目</p>
    </div>
    <div class="table">
      <n-data-table
        :columns="column"
        :data="returnRace"
        :pagination="pagination"
        :bordered="true"
        :single-line="false"
      />
    </div>
    <n-modal
      preset="dialog"
      title="确认"
      content="你确认?"
      positive-text="确认"
      negative-text="算了"
      @positive-click="submitCallback"
      @negative-click="cancelCallback"
    />
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
