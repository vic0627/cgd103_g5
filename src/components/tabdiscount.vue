<script setup>
import { reactive, onMounted, ref } from "vue";

const table = ref([
  {
    no: 1,
    title: "X'MAS SALE !",
    txt: "HAHA IT'S CHRISTMAS.",
    time: "2022/12/06 - 2022/12/25",
    discount: "0.85",
  },
  {
    no: 2,
    title: "過年",
    txt: "123",
    time: "2022/12/06 - 2022/12/25",
    discount: "0.85",
  },
  {
    no: 3,
    title: "清明節",
    txt: "123",
    time: "2022/12/06 - 2022/12/25",
    discount: "0.85",
  },
  {
    no: 4,
    title: "中秋節",
    txt: "123",
    time: "2022/12/06 - 2022/12/25",
    discount: "0.85",
  },
  {
    no: 5,
    title: "田聖節",
    txt: "123",
    time: "2022/12/06 - 2022/12/25",
    discount: "0.85",
  },
]);
</script>
<template>
  <div class="top">
    <h2>
      優惠設定
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
    <div class="tables">
      <table>
        <tr>
          <th>編號</th>
          <th>標題</th>
          <th>內容</th>
          <th>時間</th>
          <th>折扣</th>
          <th>修改</th>
        </tr>
        <tr v-for="item in table" :key="item">
          <td>{{ item.no }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.txt }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.discount }}</td>
          <td>
            <a href="#"
              ><span class="block">編輯</span> <span>/</span>
              <span class="red">刪除</span></a
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/sass/style.scss";
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
</style>
