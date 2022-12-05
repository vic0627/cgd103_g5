<script>
import tabhome from "../../components/tabHome.vue";
import tabqrev from "../../components/tabqrev.vue"; //FAQ
import tabqadd from "../../components/tabqadd.vue"; //FAQ
import tabnewrevs from "../../components/tabnewrevs.vue"; //NEWS
import tabnewadds from "../../components/tabnewadds.vue"; //NEWS
import tabraceform from "../../components/tabraceform.vue"; //RACE
import tabracecategory from "../../components/tabracecategory.vue"; //RACE

export default {
  components: {
    tabhome,
    tabqrev,
    tabqadd,
    tabnewrevs,
    tabnewadds,
    tabraceform,
    tabracecategory,
  },
};
</script>
<script setup>
import { ref, computed, markRaw } from "vue";
const backendCategory = ref({
  home: {
    title: "後臺首頁",
    tab: "home",
  },
  product: {
    title: "商品管理",
    show: false,
    text: {
      a: {
        cn: "商品查詢",
        tab: "productsearch",
      },
      b: {
        cn: "優惠設定",
        tab: "discount",
      },
    },
  },
  orderItem: {
    title: "訂單管理",
    show: false,
    text: {
      a: {
        cn: "訂單查詢",
        tab: "orderitem",
      },
    },
  },
  FAQ: {
    title: "FAQ管理",
    show: false,
    text: {
      a: {
        cn: "修改問題",
        tab: "qrev",
      },
      b: {
        cn: "新增問題",
        tab: "qadd",
      },
    },
  },
  news: {
    title: "最新消息管理",
    show: false,
    text: {
      a: {
        cn: "消息內容修改",
        tab: "newrevs",
      },
      b: {
        cn: "消息內容新增",
        tab: "newadds",
      },
    },
  },
  game: {
    title: "遊戲管理",
    show: false,
    text: {
      a: {
        cn: "遊戲資訊查詢",
        tab: "gamesearch",
      },
    },
  },
  race: {
    title: "賽事管理",
    show: false,
    text: {
      a: {
        cn: "賽事類別",
        tab: "racecategory",
      },
      b: {
        cn: "報名資料查詢",
        tab: "raceform",
      },
    },
  },
  account: {
    title: "帳號管理",
    show: false,
    text: {
      a: {
        cn: "管理員修改",
        tab: "accountfix",
      },
      b: {
        cn: "管理員新增",
        tab: "accountadd",
      },
    },
  },
});

const currentTab = ref("home");

const currentTabComponent = computed(() => `tab${currentTab.value}`);

const changeTab = (e) => {
  currentTab.value = e;
};

const changeShow = (e) => {
  if (e.show === false) {
    e.show = true;
  } else {
    e.show = false;
  }
};

const log = (e) => console.log(e);
</script>

<template>
  <div class="backend">
    <aside class="asideNav">
      <div v-for="e in backendCategory" :key="e">
        <h2 v-if="e.tab === 'home'">
          <img
            src="../../assets/images/About/g5_logo_grey.png"
            alt="logoPic"
            @click="changeTab(e.tab)"
          />
        </h2>
        <h3 v-else @click="changeShow(e)">{{ e.title }}</h3>
        <ol v-if="e.show === true">
          <li v-for="i in e.text" :key="i" @click="changeTab(i.tab)">
            {{ i.cn }}
          </li>
        </ol>
      </div>
    </aside>
    <component :is="currentTabComponent" class="manage" />
  </div>
</template>

<style lang="scss" scoped>
outComponents {
  width: 100px;
}
.backend {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fff;
}
.asideNav {
  width: 15%;
  height: 100vh;
  overflow: auto;
  text-align: center;
  background-color: #597897;
  h2 {
    margin: 20px;
    cursor: pointer;
    img {
      width: 150px;
    }
  }
  h3 {
    font-size: 26px;
    cursor: pointer;
    color: #000;
    background-color: #fff;
    margin: 0 20px 20px 20px;
  }
  ol {
    li {
      margin: 10px 0;
      cursor: pointer;
      color: #fff;
      text-decoration: transparent;
      &:hover {
        text-decoration: underline #fff;
      }
    }
  }
}
.manage {
  width: 85%;
  flex-grow: 3;
}
</style>
