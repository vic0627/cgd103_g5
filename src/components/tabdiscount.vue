<script setup>
import { ref, reactive, onMounted } from "vue";
import {
  zhTW,
  NPagination,
  NTable,
  NDataTable,
  NButton,
  NModal,
} from "naive-ui";
const cateRows = ref([]);

const getDisc = () => {
  fetch("http://localhost/cgd103_g5/public/g5PHP/getDisc.php")
    .then((res) => res.json())
    .then((json) => {
      discRows.value = json;
    });
};
getDisc();
onMounted(() => {});
const table = ref([
  "優惠編號",
  "優惠名稱",
  "優惠描述",
  "優惠開始日",
  "優惠截止日",
  "折扣數",
  "優惠代碼",
  "編輯",
  "刪除",
]);
const showModal = ref(false);
const showModal2 = ref(false);
const newNo = ref("");
const newTitle = ref("");
const newTxt = ref("");
const newStart = ref("");
const newEnd = ref("");
const newOff = ref("");
const newCode = ref("");
const selectId = (user) => {
  newNo.value = DiscRows.value[user].disc_no;
  newTitle.value = DiscRows.value[user].disc_title;
  newTxt.value = DiscRows.value[user].disc_txt;
  newStart.value = DiscRows.value[user].disc_start;
  newEnd.value = DiscRows.value[user].disc_end;
  newOff.value = DiscRows.value[user].disc_off;
  newCode.value = DiscRows.value[user].disc_code;
};
const updateDisc = () => {
  const newDisc = {
    disc_no: Number(newNo.value),
    disc_title: newTitle.value,
    disc_txt: newTxt.value,
    disc_start: newStart.value,
    disc_end: newEnd.value,
    disc_off: newOff.value,
    disc_code: newCode.value,
  };
  fetch("http://localhost/cgd103_g5/public/g5PHP/updateDisc.php", {
    method: "POST",
    body: new URLSearchParams(newDisc),
  }).then((res) => {
    console.log(res);
    res.json();
  });
  showModal.value = false;
  getDisc();
};
const deleteDisc = () => {
  const delDisc = {
    disc_no: Number(newNo.value),
  };
  fetch("http://localhost/cgd103_g5/public/g5PHP/deleteDisc.php", {
    method: "POST",
    body: new URLSearchParams(delDisc),
  }).then((res) => {
    console.log(res);
    res.json();
  });
  showModal2.value = false;
};
</script>
<template>
  <div class="top">
    <h2>
      優惠查詢
      <outComponents />
    </h2>
    <div class="tables">
      <n-data-table
        :columns="column"
        :data="discRows"
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
