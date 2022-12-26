<script setup>
import { reactive, onMounted, ref, defineComponent, h, computed } from "vue";
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import point1 from "../assets/images/race/point1.jpg";
import point2 from "../assets/images/race/point2.jpg";
import point3 from "../assets/images/race/point3.jpg";
import point4 from "../assets/images/race/point4.jpg";
import contest01 from "../assets/images/race/contest01.png";
import contest02 from "../assets/images/race/contest02.png";

import { bodyInit } from "../composables/useOnunmounted";
bodyInit();

const count = ref(1);
const areaText = ref({
  1: {
    id: 1,
    title: "Taiwan",
    src: point1,
    text: "Home to the world’s greatest collections of Chinese art and antiquities.Once reserved for the private pleasure of emperors, today these treasures can be enjoyed.These collections are from mainland China, and the ROC government bring them to Taiwan in 1949.",
  },
  2: {
    id: 2,
    title: "Japan",
    src: point2,
    text: "Situated in the city’s oldest neighborhood, Wanhua.Longshan Temple is the spiritual heart of Taipei.It’s a place where generations of locals have come to seek good fortune, health, and even guidance on who to marry.",
  },
  3: {
    id: 3,
    title: "China",
    src: point3,
    text: "Home to the world’s greatest collections of Chinese art and antiquities.Once reserved for the private pleasure of emperors, today these treasures can be enjoyed.These collections are from mainland China, and the ROC government bring them to Taiwan in 1949.",
  },
  4: {
    id: 4,
    title: "Korea",
    src: point4,
    text: "Situated in the city’s oldest neighborhood, Wanhua.Longshan Temple is the spiritual heart of Taipei.It’s a place where generations of locals have come to seek good fortune, health, and even guidance on who to marry.",
  },
});
const changeCount = (id) => {
  count.value = id;
};

// const race = ref({
//   1: {
//     id: 1,
//     nation: "Taiwan",
//     startDate: "2022-01-01",
//     src: contest01,
//     endDate: "2022-01-31",
//     raceName: "Drone Race 01",
//   },
//   2: {
//     id: 2,
//     nation: "World",
//     startDate: "2022-02-01",
//     src: contest02,
//     endDate: "2022-02-28",
//     raceName: "Drone Race 02",
//   },
//   3: {
//     id: 3,
//     nation: "Taiwan",
//     startDate: "2022-03-01",
//     src: contest01,
//     endDate: "2022-03-31",
//     raceName: "Drone Race 03",
//   },
//   4: {
//     id: 4,
//     nation: "World",
//     startDate: "2022-04-01",
//     src: contest02,
//     endDate: "2022-04-30",
//     raceName: "Drone Race 04",
//   },
//   5: {
//     id: 5,
//     nation: "Taiwan",
//     startDate: "2022-05-01",
//     src: contest01,
//     endDate: "2022-05-31",
//     raceName: "Drone Race 05",
//   },
//   6: {
//     id: 6,
//     nation: "World",
//     startDate: "2022-06-01",
//     src: contest02,
//     endDate: "2022-06-30",
//     raceName: "Drone Race 06",
//   },
//   7: {
//     id: 7,
//     nation: "Taiwan",
//     startDate: "2022-07-01",
//     src: contest01,
//     endDate: "2022-07-31",
//     raceName: "Drone Race 07",
//   },
//   8: {
//     id: 8,
//     nation: "World",
//     startDate: "2022-08-01",
//     src: contest02,
//     endDate: "2022-08-31",
//     raceName: "Drone Race 08",
//   },
//   9: {
//     id: 9,
//     nation: "Taiwan",
//     startDate: "2022-09-01",
//     src: contest01,
//     endDate: "2022-09-30",
//     raceName: "Drone Race 09",
//   },
//   10: {
//     id: 10,
//     nation: "World",
//     startDate: "2022-10-01",
//     src: contest02,
//     endDate: "2022-10-31",
//     raceName: "Drone Race 10",
//   },
//   11: {
//     id: 11,
//     nation: "Taiwan",
//     startDate: "2022-11-01",
//     src: contest01,
//     endDate: "2022-11-30",
//     raceName: "Drone Race 11",
//   },
//   12: {
//     id: 12,
//     nation: "World",
//     startDate: "2022-12-01",
//     src: contest02,
//     endDate: "2022-12-31",
//     raceName: "Drone Race 12",
//   },
// });

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

const props = defineProps(["tab"]);
const raceRows = ref([]);
const getProducts = () => {
  //取得比賽資料
  fetch("http://localhost/cgd103_g5/public/g5PHP/getRace.php")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      raceRows.value = json;
    });
};
onMounted(() => {
  getProducts();
});

const cacheId = ref("");

//判斷比賽名稱
const selectRace = (id, row) => {
  cacheId.value = id;
  let nid;
  if (row === accessories.value) {
    nid = id - products.value.length * 2;
  } else if (row === bundle_A.value) {
    nid = id - accessories.value.length * 4 + 1;
  } else if (row === bundle_B.value) {
    nid = id - accessories.value.length * 4 - 2;
  } else {
    nid = id - 1;
  }

  if (sessionStorage["racename"] == null) {
    sessionStorage["racename"] = "";
  }

  set(id, `{"id":"${row[nid].id}","title":"${row[nid].title}"}`);

  let getRace = JSON.parse(sessionStorage.getItem(id));
  sessionStorage["racename"] = `{"title" : "${getRace.title}"}`;
};
</script>

<template>
  <navComponentsVue :race="`#077AF9`" />
  <!-- banner -->
  <section>
    <div class="banner">
      <div class="banner_img banner_img1"></div>

      <div class="banner_img banner_img2"></div>

      <div class="banner_img banner_img3"></div>

      <div class="banner_img banner_img4"></div>

      <div class="banner_title">
        <h2>RACE</h2>
      </div>
    </div>
  </section>

  <!-- race list -->

  <section class="recentMatches">
    <div class="raceList_title">
      <h2>RECENT MATCHES</h2>
    </div>

    <div class="racegg">
      <div class="raceList">
        <div
          :class="`raceBox  `"
          v-for="(raceRow, index) in raceRows.slice(0, 12)"
          :key="index"
        >
          <div class="top"></div>
          <div
            class="boxBgi_w"
            :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.9)),`"
          ></div>

          <!-- url(${race[e.id].src}) -->

          <div class="listWord">
            <div class="nation">
              <span class="nation_t">{{ raceRow.cpt_aboard }}</span>
            </div>
            <div class="date">
              <span class="span">{{ raceRow.cpt_start }}</span>
              <br />
              <span class="span">|</span>
              <br />
              <span class="span">{{ raceRow.cpt_end }}</span>
            </div>
            <div class="competitionName">
              <h4>{{ raceRow.cpt_name }}</h4>
            </div>
            <div class="learn">
              <router-link class="btn" id="btn1" to="/apply" data-title="Learn"
                ><span>Learn</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- background img -->
  <section class="backgroundImage">
    <div class="image"></div>
  </section>

  <!-- Aerial point  -->
  <section class="aerialPoint">
    <div class="aerialPoint_title">
      <h2>AERIAL POINT</h2>
    </div>

    <div class="pointBox">
      <div class="pointBgi">
        <div
          class="bgi"
          :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${areaText[count].src})`"
        ></div>
      </div>
      <div class="bigtext">
        <div class="text text1">
          <h3>{{ areaText[count].title }}</h3>
          <p>{{ areaText[count].text }}</p>
        </div>
      </div>
      <div class="practiseCard">
        <div
          :class="`card card${e.id}`"
          v-for="e in areaText"
          :key="e.id"
          @click="changeCount(e.id)"
        >
          <div class="cardTitle">
            <h3>{{ areaText[e.id].title }}</h3>
          </div>

          <div class="cardPic">
            <img :src="areaText[e.id].src" alt="aerialPoint" />
          </div>

          <div class="cardContent">
            <p>{{ areaText[e.id].text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footerComponentsVue />
</template>

<style lang="scss" scoped>
@import "../sass/style.scss";
@import "../sass/component/_btn.scss";

header {
  position: sticky;
  top: 0;
}

// banner

section {
  margin: 0;
}

.banner {
  margin: 0;
  width: 100%;
  height: 176px;
  position: relative;
  overflow: hidden;
  @include m($m-breakpoint) {
    height: 462px;
  }
  @include l($l-breakpoint) {
    height: 550px;
  }
  .banner_img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    opacity: 0;
    animation: round 20s linear infinite;
    position: absolute;
  }
  .banner_img1 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
      url("../assets/images/race/banner01.jpg");
  }
  .banner_img2 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
      url("../assets/images/race/banner02.jpg");
    animation-delay: 5s;
  }
  .banner_img3 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
      url("../assets/images/race/banner03.jpg");
    animation-delay: 10s;
  }
  .banner_img4 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
      url("../assets/images/race/banner04.jpg");
    animation-delay: 15s;
  }

  @keyframes round {
    20% {
      opacity: 1;
    }

    30% {
      opacity: 1;
    }
    40% {
      opacity: 0;
    }

    50% {
      transform: scale(1.1);
    }
  }
  .banner_title {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
    @include l($l-breakpoint) {
      top: 50px;
    }
  }
}

//race list

h2 {
  margin: 50px 0;
}

.raceList_title {
  text-align: center;
}

.racegg {
  @include l($l-breakpoint) {
    height: 600px;
    position: relative;
    overflow: hidden;
  }
}

.raceList {
  max-width: 100%;
  height: 600px;
  margin: 0 20px;
  display: flex;
  overflow: scroll;
  position: static;
  @include l($l-breakpoint) {
    margin: 0;
    width: calc(350px * 12);
    overflow: visible;
    position: absolute;
    &:hover {
      animation-play-state: paused;
    }
    // animation: scroll 8s linear infinite;
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-338px * 6));
      }
    }
  }
  .raceBox {
    min-width: 100%;
    position: relative;
    @include l($l-breakpoint) {
      min-width: 102.7px;
      transition: 0.8s;
      flex: 1;
      &:hover {
        transition: 0.8s;
        flex: 1 1 15%;
      }
      &:hover .listWord {
        transition: 0.8s;
        display: block;
      }
      &:hover .top {
        transition: 0.8s;
        display: none;
      }
    }
    .boxBgi_w {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
        url(../assets/images/race/contest02.png);
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }

    .top {
      display: none;
      @include l($l-breakpoint) {
        display: block;
      }
      &::after {
        font-family: sans-serif;
        letter-spacing: 0.6rem;
        writing-mode: vertical-lr;
        // text-orientation: upright;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        position: absolute;
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        transition: 0.5s;
        opacity: 1;
        color: azure;
        content: "Drone Race";
      }
    }

    .listWord {
      min-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      @include l($l-breakpoint) {
        display: none;
      }
      .nation {
        .nation_t {
          color: $brown;
        }

        .nation_w {
          color: $ored;
        }
        .nation_t,
        .nation_w {
          top: -10px;
          font-size: 40px;
          line-height: 5rem;
          font-weight: bold;
        }
      }
      .span {
        font-size: 30px;
        line-height: 4rem;
        font-weight: bold;
      }
      h4 {
        font-size: 40px;
        margin: 35px 0;
        font-weight: bold;
      }
      .learn {
        display: flex;
        justify-content: center;
      }
    }
  }
}

// background img

.backgroundImage {
  width: 100%;
  height: 600px;
  display: none;
  @include l($l-breakpoint) {
    display: block;
  }
  .image {
    background-image: url("../assets/images/race/background image.png");
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
}

//Aerial point

.aerialPoint_title {
  text-align: center;
  margin-bottom: 50px;
}

.pointBox {
  display: flex;
  width: 100%;

  .pointBgi {
    @include l($l-breakpoint) {
      // height: 100%;
      // position: relative;
    }

    .bgi {
      @include l($l-breakpoint) {
        width: 100%;
        height: 740px;
        background-size: cover;
        background-position: center center;
        position: absolute;
        z-index: 1;
      }
    }
  }
  .bigtext {
    display: none;
    margin-top: 40px;
    @include l($l-breakpoint) {
      width: 350px;
      display: block;
      border: 1px solid rgb(220, 220, 220);
      background-color: rgba(220, 220, 220, 0.1);
      border-radius: 20px;
      margin: 50px 20px 0 20px;
      z-index: 2;

      .text {
        padding: 50px 20px;
        h2 {
          text-align: center;
          margin-bottom: 30px;
        }
      }
    }
  }
  .practiseCard {
    margin: 0 20px;
    z-index: 2;
    @include l($l-breakpoint) {
      margin-top: 100px;
      display: flex;
      overflow: hidden;
    }
    .card {
      border-radius: 20px;
      margin-bottom: 40px;
      @include l($l-breakpoint) {
        padding: 20px;
        height: 500px;
        border: 1px solid rgb(220, 220, 220);
        margin-bottom: 0;
        margin: 0 15px;
        background-color: rgba(220, 220, 220, 0.1);
        cursor: pointer;
        &:hover {
          background-color: rgba(220, 220, 220, 0.2);
        }
      }
      .cardPic {
        @include l($l-breakpoint) {
          max-width: 300px;
        }
        img {
          width: 100%;
          margin: 20px 0;
        }
      }
      .cardContent {
        @include l($l-breakpoint) {
          max-width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
footer {
  position: sticky;
  z-index: 90;
  margin-top: 50px;
}
</style>
