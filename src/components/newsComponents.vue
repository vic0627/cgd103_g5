<script setup>
import { computed, onMounted, reactive, ref, onUpdated } from "vue";
import { bodyInit } from "../composables/useOnunmounted";
import { lastNews } from "../composables/object";
import $ from "jquery";
const newsRows = ref([]);
const getNews = () => {
  //取得消息資料
  fetch("http://localhost/cgd103_g5/public/g5PHP/postCust.php", {
    method: "POST",
    body: new URLSearchParams({ sql: "select * from tibamefe_cgd103g5.news" }),
  })
    .then((res) => res.json())
    .then((json) => {
      newsRows.value = json;
      console.log(newsRows.value);
    });
};
onMounted(() => {
  getNews(newsRows.value);
});
onUpdated(() => {});
bodyInit();
const compuNews = computed(() => {
  let cache = newsRows.value;
  switch (filter.value) {
    case 0:
      break;
    case 1:
      cache = cache.filter((e) => e.news_tag.includes("Travel"));
      break;
    case 2:
      cache = cache.filter((e) => e.news_tag.includes("FPV"));
      break;
    case 3:
      cache = cache.filter((e) => e.news_tag.includes("Photoshot"));
      break;
    case 4:
      cache = cache.filter((e) => e.news_tag.includes("Customed"));
      break;
  }
  return cache;
});
// const view = ref(1);
const vsc = ref(false);
const filter = ref(0);
const changeView = (index) => {
  filter.value = index;
};
</script>

<template>
  <div class="tab-tag">
    <button class="tag" @click="changeView(0)">ALL</button>
    <button class="tag" @click="changeView(1)">Travel</button>
    <button class="tag" @click="changeView(2)">FPV</button>
    <button class="tag" @click="changeView(3)">Photoshot</button>
    <button class="tag" @click="changeView(4)">Customed</button>
  </div>

  <div class="label">
    <div class="output_content_box cards">
      <div class="content">
        <div class="contentBox">
          <div
            name="tad"
            mode="out-in"
            v-for="newsRow in compuNews"
            :key="newsRow"
          >
            <div class="card">
              <router-link class="anchor" to="/articleView"
                ><img
                  :src="`/dist/assets/${newsRow.news_photo}.jpg`"
                  :alt="newsRows.news_no"
              /></router-link>
              <div class="item_box">
                <div class="item">{{ newsRow.news_tag }}</div>
              </div>
              <div class="title">
                <p>{{ newsRow.news_title }}</p>
              </div>
              <router-link class="article" to="/articleView"
                ><button>Read more &rarr;</button></router-link
              >
            </div>
          </div>
          <Transition name="tad" mode="out-in">
            <div class="card" v-if="filter === 1 && item.news_no === 1">
              <!-- <router-link class="anchor" to="/articleView"
                ><img :src="item.src" :alt="item.news_no"
              /></router-link> -->
              <div class="item_box">
                <div class="item">{{ newsRow[0].news_tag }}</div>
              </div>
              <div class="title">
                <p>{{ newsRow[0].news_title }}</p>
              </div>
              <router-link class="article" to="/articleView"
                ><button>Read more &rarr;</button></router-link
              >
            </div>
          </Transition>
          <Transition name="tad" mode="out-in">
            <div class="card" v-if="filter === 2 && item.news_no === 2">
              <!-- <router-link class="anchor" to="/articleView"
                ><img :src="item.src" :alt="item.id"
              /></router-link> -->
              <div class="item_box">
                <div class="item">{{ newsRow[0].news_tag }}</div>
              </div>
              <div class="title">
                <p>{{ newsRow[0].news_title }}</p>
              </div>
              <router-link class="article" to="/articleView"
                ><button>Read more &rarr;</button></router-link
              >
            </div>
          </Transition>
          <Transition name="tad" mode="out-in">
            <div class="card" v-if="filter === 3 && item.news_no === 3">
              <!-- <router-link class="anchor" to="/"
                ><img :src="item.src" :alt="item.id"
              /></router-link> -->
              <div class="item_box">
                <div class="item">{{ newsRow[0].news_tag }}</div>
              </div>
              <div class="title">
                <p>{{ newsRow[0].news_title }}</p>
              </div>
              <router-link class="article" to="/articleView"
                ><button>Read more &rarr;</button></router-link
              >
            </div>
          </Transition>
          <Transition name="tad" mode="out-in">
            <div class="card" v-if="filter === 4 && item.news_no === 4">
              <!-- <router-link class="anchor" to="/articleView"
                ><img :src="item.src" :alt="item.id"
              /></router-link> -->
              <div class="item_box">
                <div class="item">{{ newsRow[0].news_tag }}</div>
              </div>
              <div class="title">
                <p>{{ newsRow[0].news_title }}</p>
              </div>
              <router-link class="article" to="/articleView"
                ><button>Read more &rarr;</button></router-link
              >
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/sass/style.scss";
@import "@/css/reset.css";
.tad-enter-active {
  animation: tad-in 1.5s;
}
.tad-leave-active {
  animation: tad-in 0.5s reverse;
}
@keyframes tad-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

.tab-tag {
  width: 90%;
  margin: 60px auto 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @include l($l-breakpoint) {
    width: 1200px;
  }
}
.tag {
  border-radius: 10px;
  background: transparent;
  color: #eeeeee;
  border: 2px solid #eeeeee;
  padding: 10px 15px;
  margin: 10px;
  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background: $blue;
  }
  &:focus {
    background: $blue;
  }
}

.display {
  display: none;
  color: red;
}
.newsPage {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  // background: #fff;
  .card {
    width: 33.3333%;
    img {
      width: 100%;
    }
  }
}

.cards {
  width: 100%;
  .content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .contentBox {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .card {
      position: relative;
      width: 170px;
      height: 220px;
      margin: 5px;
      border-radius: 5px;
      transition: 0.5s all;
      background-color: #0f1f3d;
      overflow: hidden;
      &:hover {
        height: 190px;
        transform: scale(1.05);
      }
      &:hover button {
        opacity: 1;
      }
      img {
        width: 100%;
        height: 150px;
        border-radius: 5px 5px 0 0;
      }
      .item_box {
        display: flex;
        .item {
          display: flex;
          width: 50px;
          margin: 15px;
          padding: 10px;
          justify-content: center;
          color: rgb(190, 190, 190);
          border: 1px solid rgb(170, 170, 170);
          cursor: pointer;
          background-color: transparent;
          margin: 5px;
          padding: 3px;
          border-radius: 3px;
          font-size: 13px;
          transition: 0.5s all;
          font-family: "Poppins", sans-serif;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      p {
        margin: 5px 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      button {
        position: absolute;
        bottom: 0px;
        opacity: 0;
        width: 100%;
        height: 30px;
        background-color: $blue;
        color: #fff;
        font-size: 18px;
        align-items: center;
        border-radius: 5px;
        border: none;
        transition: 0.5s all;
        cursor: pointer;
        &:hover {
          background-color: #1f64e4;
        }
      }
    }
    @include m($m-breakpoint) {
      .card {
        width: 290px;
        height: 280px;
        margin: 10px;
        padding: 0;
        &:hover {
          height: 250px;
          transform: scale(1.05);
        }
        &:hover button {
          opacity: 1;
        }
        img {
          height: 200px;
          object-fit: cover;
        }
        .item_box {
          .item {
            width: 70px;
          }
        }
        button {
          position: absolute;
          bottom: -5px;
          opacity: 0;
          width: 100%;
          height: 48px;
          background-color: $blue;
          color: #fff;
          font-size: 18px;
          align-items: center;
          border-radius: 5px;
          border: none;
          transition: 0.5s all;
          cursor: pointer;
          &:hover {
            background-color: #1f64e4;
          }
        }
      }
    }
    @include l($l-breakpoint) {
      .card {
        width: 350px;
        height: 320px;
        &:hover {
          height: 260px;
          transform: scale(1.05);
        }
        img {
          height: 210px;
        }
      }
    }
  }
}
</style>
