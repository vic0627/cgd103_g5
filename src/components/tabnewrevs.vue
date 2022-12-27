<script setup>
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
const title = ref("");
const txt = ref("");
const time = ref("");
const photo = ref("");
const tag = ref("");
const news_no = ref("");
const news_title = ref("");
const news_txt = ref("");
const news_time = ref("");
const news_photo = ref("");
const news_tag = ref("");
const showModal = ref(false);
// const showModal2 = ref(false);

//data-table
const createColumns = ({ selectId, showmodal }) => {
  return [
    {
      title: "消息編號",
      key: "news_no",
    },
    {
      title: "標題",
      key: "news_title",
    },
    {
      title: "內文",
      key: "news_txt",
    },
    {
      title: "發布時間",
      key: "news_time",
    },
    {
      title: "圖片路徑",
      key: "news_photo",
    },
    {
      title: "標籤",
      key: "news_tag",
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
    // {
    //   title: "刪除",
    //   key: "actions",
    //   render(row, index) {
    //     return h(
    //       NButton,
    //       {
    //         size: "medium",
    //         color: "#077AF9",
    //         // onClick: () => selectId(),
    //         onClick: () => showmodal(row, index),
    //       },
    //       { default: () => "刪除" }
    //     );
    //   },
    // },
  ];
};
//解析內容跟事件
const column = createColumns({
  selectId(rowData, index) {
    showModal.value = true;
    newnews_no.value = newsRows.value[index].news_no;
    newnews_title.value = newsRows.value[index].news_title;
    newnews_txt.value = newsRows.value[index].news_txt;
    newnews_time.value = newsRows.value[index].news_time;
    newnews_photo.value = newsRows.value[index].news_photo;
    newnews_tag.value = newsRows.value[index].news_tag;
  },
  showmodal(rowData, index) {
    // showModal2.value = true;
    newnews_no.value = newsRows.value[index].newnews_no;
  },
});
//分頁js
const paginationReactive = reactive({
  page: 1,
  pageSize: 2,
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
const newsRows = ref([]);
const getNews = () => {
  //取得商品資料
  fetch("http://localhost/cgd103_g5/public/g5PHP/getNews.php")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      newsRows.value = json;
    });
};
onMounted(() => {
  getNews();
});

//更新資料
const updateNews = (user) => {
  const newnews = {
    news_no: Number(newnews_no.value),
    news_title: newnews_title.value,
    news_txt: newnews_txt.value,
    news_time: newnews_time.value,
    news_photo: newnews_photo.value,
    news_tag: newnews_tag.value,
  }
  fetch("http://localhost/cgd103_g5/public/g5PHP/updateNews.php", {
    method: "POST",
    body: new URLSearchParams(newnews),
  }).then((res) => {
    console.log(res);
    res.json();
  }).then(res => {
    showModal.value = false;
    getNews();
  })
};

// 搜尋

const search = ref("");
const returnNews = computed(() => {
  let cache = newsRows.value;
  if (search.value !== "") {
    cache = cache.filter((i) =>
      String(i[select[selectVal.value].val]).includes(search.value)
    );
    if (search.value == "All") {
      cache = newsRows.value;
    }
  } else {
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: "消息編號",
    val: "news_no",
  },
  {
    id: 1,
    title: "標題",
    val: "news_title",
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
    <h2>消息列表<outComponents /></h2>

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
          :placeholder="`請輸入All或${select[selectVal].title}`"
        />
      </label>
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
          :data="newsRows"
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
          <label for="faq_des"> 修改消息 : </label>
          <textarea
            name="news_no"
            v-model="newnews_no"
            rows="1"
            cols="50"
            placeholder="請輸入編號"
            maxlength="200"
          ></textarea>
          <textarea
            name="news_title"
            v-model="newnews_title"
            rows="1"
            cols="50"
            placeholder="請輸入名稱"
            maxlength="300"
          ></textarea>
          <textarea
            name="news_txt"
            v-model="newnews_txt"
            rows="1"
            cols="50"
            placeholder="請輸入內文"
            maxlength="300"
          ></textarea>
          <textarea
            name="news_photo"
            v-model="newnews_photo"
            rows="1"
            cols="50"
            placeholder="請輸入圖片"
            maxlength="300"
          ></textarea>
          <textarea
            name="news_tag"
            v-model="newnews_tag"
            rows="1"
            cols="50"
            placeholder="請輸入標籤"
            maxlength="300"
          ></textarea>
          <n-button
            @click="
              showModal = true;
              updateNews(index);
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
              deleteNews(index);
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
