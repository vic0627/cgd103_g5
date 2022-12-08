<script setup>
import { ref, onMounted, reactive, onUnmounted } from "vue";
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";

import { bodyInit } from "../composables/useOnunmounted";
bodyInit();

const count = ref(1);
const areaText = ref({
  1: {
    id: 1,
    title: "Taiwan",
    src: "/src/assets/images/race/point1.jpg",
    text: "Home to the world’s greatest collections of Chinese art and antiquities.Once reserved for the private pleasure of emperors, today these treasures can be enjoyed.These collections are from mainland China, and the ROC government bring them to Taiwan in 1949.",
  },
  2: {
    id: 2,
    title: "Japan",
    src: "/src/assets/images/race/point2.jpg",
    text: "Situated in the city’s oldest neighborhood, Wanhua.Longshan Temple is the spiritual heart of Taipei.It’s a place where generations of locals have come to seek good fortune, health, and even guidance on who to marry.",
  },
  3: {
    id: 3,
    title: "China",
    src: "/src/assets/images/race/point3.jpg",
    text: "Chiang Kai-shek Memorial Hall honors the memory of former president of the Republic of China.Memorial Square is also one of the city’s most important cultural sites, and some democracy activists had held here.The National Concert Hall, a stunning example of neo-classical Chinese architecture.",
  },
  4: {
    id: 4,
    title: "Korea",
    src: "/src/assets/images/race/point1.jpg",
    text: "Situated in the city’s oldest neighborhood, Wanhua.Longshan Temple is the spiritual heart of Taipei.It’s a place where generations of locals have come to seek good fortune, health, and even guidance on who to marry.",
  },
});
const changeCount = (id) => {
  count.value = id;
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
        <div class="raceBox raceBox_w">
          <div class="boxBgi_w"></div>
          <div class="listWord">
            <div class="nation">
              <span class="nation_w">World</span>
            </div>

            <div class="date">
              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">01</span>

              <br />

              <span class="span">|</span>

              <br />

              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">10</span>
            </div>

            <div class="competitionName">
              <h4>Competition Name</h4>
            </div>

            <div class="learn">
              <router-link class="btn" id="btn1" to="/apply" data-title="Learn"
                ><span>Learn</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="raceBox raceBox_t">
          <div class="boxBgi_t"></div>
          <div class="listWord">
            <div class="nation">
              <span class="nation_t">Taiwan</span>
            </div>

            <div class="date">
              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">01</span>

              <br />

              <span class="span">|</span>

              <br />

              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">10</span>
            </div>

            <div class="competitionName">
              <h4>Competition Name</h4>
            </div>

            <div class="learn">
              <router-link class="btn" id="btn1" to="/apply" data-title="Learn"
                ><span>Learn</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="raceBox raceBox_w">
          <div class="boxBgi_w"></div>
          <div class="listWord">
            <div class="nation">
              <span class="nation_w">World</span>
            </div>

            <div class="date">
              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">01</span>

              <br />

              <span class="span">|</span>

              <br />

              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">10</span>
            </div>

            <div class="competitionName">
              <h4>Competition Name</h4>
            </div>

            <div class="learn">
              <router-link class="btn" id="btn1" to="/apply" data-title="Learn"
                ><span>Learn</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="raceBox raceBox_t">
          <div class="boxBgi_t"></div>
          <div class="listWord">
            <div class="nation">
              <span class="nation_t">Taiwan</span>
            </div>

            <div class="date">
              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">01</span>

              <br />

              <span class="span">|</span>

              <br />

              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">10</span>
            </div>

            <div class="competitionName">
              <h4>Competition Name</h4>
            </div>

            <div class="learn">
              <router-link class="btn" id="btn1" to="/apply" data-title="Learn"
                ><span>Learn</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="raceBox raceBox_w">
          <div class="boxBgi_w"></div>
          <div class="listWord">
            <div class="nation">
              <span class="nation_w">World</span>
            </div>

            <div class="date">
              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">01</span>

              <br />

              <span class="span">|</span>

              <br />

              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">10</span>
            </div>

            <div class="competitionName">
              <h4>Competition Name</h4>
            </div>

            <div class="learn">
              <router-link class="btn" id="btn1" to="/apply" data-title="Learn"
                ><span>Learn</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="raceBox raceBox_t">
          <div class="boxBgi_t"></div>
          <div class="listWord">
            <div class="nation">
              <span class="nation_t">Taiwan</span>
            </div>

            <div class="date">
              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">01</span>

              <br />

              <span class="span">|</span>

              <br />

              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">10</span>
            </div>

            <div class="competitionName">
              <h4>Competition Name</h4>
            </div>

            <div class="learn">
              <router-link class="btn" id="btn1" to="/apply" data-title="Learn"
                ><span>Learn</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="raceBox raceBox_w">
          <div class="boxBgi_w"></div>
          <div class="listWord">
            <div class="nation">
              <span class="nation_w">World</span>
            </div>

            <div class="date">
              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">01</span>

              <br />

              <span class="span">|</span>

              <br />

              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">10</span>
            </div>

            <div class="competitionName">
              <h4>Competition Name</h4>
            </div>

            <div class="learn">
              <router-link class="btn" id="btn1" to="/apply" data-title="Learn"
                ><span>Learn</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="raceBox raceBox_t">
          <div class="boxBgi_t"></div>
          <div class="listWord">
            <div class="nation">
              <span class="nation_t">Taiwan</span>
            </div>

            <div class="date">
              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">01</span>

              <br />

              <span class="span">|</span>

              <br />

              <span class="span">2022</span>

              <span class="span">01</span>

              <span class="span">10</span>
            </div>

            <div class="competitionName">
              <h4>Competition Name</h4>
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
          :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(/src/assets/images/race/point${count}.jpg)`"
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
            <img
              :src="`src/assets/images/race/point${e.id}.jpg`"
              alt="aerialPoint"
            />
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

  @include m($m-breakpoint) {
    height: 462px;
  }
  @include l($l-breakpoint) {
    height: 550px;
  }
  .banner_img {
    width: 100%;
    opacity: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    filter: alpha(opacity=0);
    -webkit-animation: round 20s linear infinite;
    animation: round 20s linear infinite;
    position: absolute;
  }
  .banner_img1 {
    background-image: url("../assets/images/race/banner01.jpg");
  }
  .banner_img2 {
    background-image: url("../assets/images/race/banner02.jpg");
  }
  .banner_img3 {
    background-image: url("../assets/images/race/banner03.jpg");
  }
  .banner_img4 {
    background-image: url("../assets/images/race/banner04.jpg");
  }
  .banner_title {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@-webkit-keyframes round {
  5% {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  25% {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  50% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
}
@keyframes round {
  5% {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  25% {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  50% {
    opacity: 0;
    filter: alpha(opacity=0);
  }
}

.banner_img:nth-child(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

.banner_img:nth-child(2) {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}

.banner_img:nth-child(3) {
  -webkit-animation-delay: 10s;
  animation-delay: 10s;
}

.banner_img:nth-child(4) {
  -webkit-animation-delay: 15s;
  animation-delay: 15s;
}

//race list

h2 {
  margin: 50px 0;
}

.raceList_title {
  text-align: center;
  // padding-bottom: 50px;
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
    width: calc(300px * 8);
    overflow: visible;
    position: absolute;
    &:hover {
      animation-play-state: paused;
    }
    animation: scroll 8s linear infinite;
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-300px * 2));
      }
    }
  }
  .raceBox {
    min-width: 100%;
    position: relative;
    @include l($l-breakpoint) {
      min-width: 300px;
      &:hover {
      }
    }
    .boxBgi_w {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
        url("../assets/images/race/point1.jpg");
      backdrop-filter: blur(5px);
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }
    .boxBgi_t {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
        url("../assets/images/race/contest02.png");
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }
    .listWord {
      min-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
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
        height: 100%;
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
