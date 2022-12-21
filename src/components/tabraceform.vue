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
  axios
    .get("http://localhost/cgd103_g5/public/g5PHP/getBook.php")
    .then((res) => {
      // console.log(res)
      bookRows.value = res.data;
    });
};
onMounted(() => {
  getBook();
});
</script>
<template>
  <div class="top">
    <h2>
      報名資料查詢
      <outComponents />
    </h2>
    <div class="table">
      <n-data-table
        :columns="column"
        :data="bookRows"
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
