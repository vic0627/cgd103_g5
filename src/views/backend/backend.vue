<script>
import tabhome from '../../components/tabHome.vue';
export default {
  components: {
    tabhome
  },
}
</script>

<script setup>
import { ref, computed, markRaw } from 'vue';
const backendCategory = ref({
    home: {
        title: '後臺首頁',
        tab: 'home',
    },
    product: {
        title: '商品管理',
        show: false,
        text: {
            a: {
              cn: '商品查詢',
              tab: 'productsearch'
            },
            b: {
              cn: '優惠設定',
              tab: 'discount'
            },
        },
    },
    orderItem: {
        title: '訂單管理',
        show: false,
        text: {
            a: {
              cn: '訂單查詢',
              tab: 'orderitem'
            },
        },
    },
    FAQ: {
        title: 'FAQ管理',
        show: false,
        text: {
            a: {
              cn: '修改問題',
              tab: 'qfix'
            },
            b: {
              cn: '新增問題',
              tab: 'qadd'
            },
        },
    },
    news: {
        title: '最新消息管理',
        show: false,
        text: {
            a: {
              cn: '消息內容修改',
              tab: 'newsfix'
            },
            b: {
              cn: '消息內容新增',
              tab: 'newsadd'
            },
        },
    },
    game: {
        title: '遊戲管理',
        show: false,
        text: {
            a: {
              cn: '遊戲資訊查詢',
              tab: 'gamesearch'
            },
        },
    },
    race: {
        title: '賽事管理',
        show: false,
        text: {
            a: {
              cn: '賽事類別',
              tab: 'racetype'
            },
            b: {
              cn: '報名資料查詢',
              tab: 'racesearch'
            },
        },
    },
    account: {
        title: '帳號管理',
        show: false,
        text: {
            a: {
              cn: '管理員修改',
              tab: 'accountfix'
            },
            b: {
              cn: '管理員新增',
              tab: 'accountadd'
            },
        },
    },
});

const currentTab = ref('home');

const currentTabComponent = computed(() => `tab${currentTab.value}`);

const changeTab = (e) => {
  currentTab.value = e;
};

const changeShow = (e) => {
  if(e.show===false){
    e.show = true;
  }else{
    e.show = false;
  };
};

const log = (e) => console.log(e);
</script>

<template>
  <div class="backend">
    <aside class="asideNav">
        <div v-for="e in backendCategory" :key="e">
            <h2 v-if="e.tab==='home'" @click="changeTab(e.tab)">{{ e.title }}</h2>
            <h3 v-else @click="changeShow(e)">{{ e.title }}</h3>
            <ol v-if="e.show===true">
                <li v-for="i in e.text" :key="i" @click="changeTab(i.tab)">{{ i.cn }}</li>
            </ol>
        </div>
    </aside>
    <component :is="currentTabComponent" class="manage"/>
  </div>
</template>

<style lang="scss" scoped>
.backend{
  width: 100%;
  height: 100vh;
  display: flex;
}
.asideNav{
  width: 15%;
  height: 100vh;
  overflow: auto;
  text-align: center;
  h2{
    margin: 40px 0;
    cursor: pointer;
  }
  h3{
    font-size: 32px;
    cursor: pointer;
  }
  ol{
    li{
      margin: 10px 0;
      cursor: pointer;
    }
  }
}
.manage{
  width: 85%;
  flex-grow: 3;
}
</style>
