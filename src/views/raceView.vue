<script setup>
import { ref, onMounted, reactive } from "vue";
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import { bodyInit } from "../composables/useOnunmounted";
bodyInit();

const bgi1 = document.querySelector(".bgi1");
const bgi2 = document.querySelector(".bgi2");
const bgi3 = document.querySelector(".bgi3");

const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

const change1 = () => {
  if ((text1 = true)) {
  }
};
</script>

<template>
  <navComponentsVue />
  <!-- banner -->
  <section>
    <div class="banner">
      <div class="banner_img">
        <img src="../assets/images/race/banner01.jpg" alt="banner" />
      </div>

      <div class="banner_img">
        <img src="../assets/images/race/banner02.jpg" alt="banner" />
      </div>

      <div class="banner_img">
        <img src="../assets/images/race/banner03.jpg" alt="banner" />
      </div>

      <div class="banner_img">
        <img src="../assets/images/race/banner04.jpg" alt="banner" />
      </div>

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
        <div class="bgi bgi1"></div>
        <div class="bgi bgi2"></div>
        <div class="bgi bgi3"></div>
      </div>
      <div class="bigtext">
        <div class="text text1">
          <h3>Taiwan</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            quos unde adipisci itaque quaerat architecto. Dolor eaque eum
            recusandae necessitatibus sed deserunt quae ullam quia mollitia qui
            architecto eveniet iusto nesciunt hic voluptates incidunt a ab,
            distinctio labore deleniti quisquam vitae. Laborum quidem illo
            explicabo pariatur praesentium necessitatibus repellendus aliquam.
          </p>
        </div>
        <div class="text text2">
          <h3>Taiwan</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            autem esse modi expedita non numquam officia pariatur, nostrum
            perferendis id eveniet quasi veritatis corporis. Nostrum eius vel
            dolore, inventore unde veniam facere ab odio ipsum eaque iste
            voluptas amet, qui aspernatur cupiditate. Reprehenderit mollitia
            laboriosam incidunt illo et nostrum ad.
          </p>
        </div>
        <div class="text text3">
          <h3>Taiwan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            natus accusamus accusantium at ipsum quo hic id minus, odit
            repudiandae dolore assumenda voluptatibus, expedita dicta
            aspernatur, necessitatibus illum asperiores voluptatum laborum
            possimus minima? Architecto eos ipsum similique accusamus cum ex
            doloremque possimus ea est. Et libero culpa molestiae sunt
            similique?
          </p>
        </div>
      </div>

      <div class="practiseCard">
        <div class="card card1" @click="change1">
          <div class="cardTitle">
            <h3>Taiwan</h3>
          </div>

          <div class="cardPic">
            <img src="../assets/images/race/point1.jpg" alt="aerialPoint" />
          </div>

          <div class="cardContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              quos unde adipisci itaque quaerat architecto. Dolor eaque eum
              recusandae necessitatibus sed deserunt quae ullam quia mollitia
              qui architecto eveniet iusto nesciunt hic voluptates incidunt a
              ab, distinctio labore deleniti quisquam vitae. Laborum quidem illo
              explicabo pariatur praesentium necessitatibus repellendus aliquam.
            </p>
          </div>
        </div>

        <div class="card card2" @click="change2">
          <div class="cardTitle">
            <h3>Taiwan</h3>
          </div>

          <div class="cardPic">
            <img src="../assets/images/race/point2.jpg" alt="aerialPoint" />
          </div>

          <div class="cardContent">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              autem esse modi expedita non numquam officia pariatur, nostrum
              perferendis id eveniet quasi veritatis corporis. Nostrum eius vel
              dolore, inventore unde veniam facere ab odio ipsum eaque iste
              voluptas amet, qui aspernatur cupiditate. Reprehenderit mollitia
              laboriosam incidunt illo et nostrum ad.
            </p>
          </div>
        </div>

        <div class="card card3" @click="change3">
          <div class="cardTitle">
            <h3>Taiwan</h3>
          </div>

          <div class="cardPic">
            <img src="../assets/images/race/point3.jpg" alt="aerialPoint" />
          </div>

          <div class="cardContent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              natus accusamus accusantium at ipsum quo hic id minus, odit
              repudiandae dolore assumenda voluptatibus, expedita dicta
              aspernatur, necessitatibus illum asperiores voluptatum laborum
              possimus minima? Architecto eos ipsum similique accusamus cum ex
              doloremque possimus ea est. Et libero culpa molestiae sunt
              similique?
            </p>
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
  @include l($l-breakpoint) {
    height: 690px;
  }
  .banner_img {
    width: 100%;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-animation: round 20s linear infinite;
    animation: round 20s linear infinite;
    img {
      width: 100%;
      position: absolute;
    }
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
    }
    .boxBgi_w {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
        url("../assets/images/race/contest01.png");
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
      .bgi {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        position: absolute;
        z-index: 1;
      }
      .bgi1 {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          url("../assets/images/race/point1.jpg");
      }
      .bgi2 {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          url("../assets/images/race/point2.jpg");
      }
      .bgi3 {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          url("../assets/images/race/point3.jpg");
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
        }
      }
      .text2,
      .text3 {
        display: none;
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
          width: 300px;
        }
        img {
          width: 100%;
          margin: 20px 0;
        }
      }
      .cardContent {
        @include l($l-breakpoint) {
          width: 300px;
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
</style>
