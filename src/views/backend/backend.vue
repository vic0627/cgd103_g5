<script>
import tabhome from "../../components/tabHome.vue";
import tabqrev from "../../components/tabqrev.vue"; //FAQ - 列表
import tabqadd from "../../components/tabqadd.vue"; //FAQ - 新增
import tabnewrevs from "../../components/tabnewrevs.vue"; //NEWS
import tabnewadds from "../../components/tabnewadds.vue"; //NEWS
import tabraceform from "../../components/tabraceform.vue"; //RACE
import tabracecategory from "../../components/tabracecategory.vue"; //RACE
import tabaddrace from "../../components/tabaddrace.vue"; //RACE
import tabaccountfix from "@/components/tabaccountfix.vue"; //account
import tabaccountadd from "@/components/tabaccountadd.vue"; //account
import tabproductsearch from "@/components/tabproductsearch.vue";
import tabproductCategoryManage from "@/components/tabProductCategoryManage.vue";
import tabproductAdd from "@/components/tabproductAdd.vue";
import taborderItem from "@/components/taborderItem.vue";
import tabcustomizationOrderItem from "@/components/tcustomizationOrderItem.vue";
import tabgeneralOrderItem from "@/components/tgeneralOrderItem.vue";
import tabcustomizationDetails from "@/components/tabcustomizationDetails.vue";
import tabdiscount from "@/components/tabdiscount.vue";
import tabdiscountadd from "@/components/tabdiscountadd.vue";
import tabcustomizeitem from "@/components/tabcustomizeitem.vue";
export default {
  components: {
    tabhome,
    tabqrev,
    tabqadd,
    tabnewrevs,
    tabnewadds,
    tabraceform,
    tabracecategory,
    tabaddrace,
    tabproductsearch,
    tabproductCategoryManage,
    tabaccountfix,
    tabaccountadd,
    taborderItem,
    tabgeneralOrderItem,
    tabcustomizationOrderItem,
    tabcustomizationDetails,
    tabproductAdd,
    tabdiscount,
    tabdiscountadd,
    tabcustomizeitem,
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
      c: {
        cn: "優惠新增",
        tab: "discountadd",
      },
      d: {
        cn: "商品新增",
        tab: "productAdd",
      },
      e: {
        cn: "商品分類管理",
        tab: "productCategoryManage",
      },
      f: {
        cn: "客製化品項查詢",
        tab: "customizeitem",
      },
    },
  },
  orderItem: {
    title: "訂單管理",
    show: false,
    text: {
      a: {
        cn: "一般訂單查詢",
        tab: "orderItem",
      },
      b: {
        cn: "一般訂單明細查詢",
        tab: "generalOrderItem",
      },
      c: {
        cn: "客製化訂單查詢",
        tab: "customizationOrderItem",
      },
      d: {
        cn: "客製化訂單明細查詢",
        tab: "customizationDetails",
      },
    },
  },
  FAQ: {
    title: "FAQ管理",
    show: false,
    text: {
      a: {
        cn: "FAQ列表",
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
  race: {
    title: "賽事管理",
    show: false,
    text: {
      a: {
        cn: "賽事類別",
        tab: "racecategory",
      },
      b: {
        cn: "賽事新增",
        tab: "addrace",
      },
      c: {
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
  member_account: {
    title: "會員管理",
    show: false,
    text: {
      a: {
        cn: "會員帳號管理",
        tab: "memmodify",
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
            src="../../assets/images/backend/backend_logo_3.png"
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
    <component :is="currentTabComponent" class="manage" :tab="changeTab" />
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
