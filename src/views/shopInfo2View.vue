<script setup>
import { onMounted, registerRuntimeCompiler, ref } from "vue";
import { log } from "@/composables/useCommon.js";
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import { bodyInit } from "../composables/useOnunmounted";
import Accordion from "../components/accordionComponents.vue";

bodyInit();
// //bottomBar第二版

onMounted(() => {
  let lastPos = 0;
  const nav = document.getElementById("purchaseBar");
  log(nav);
  // 監聽scroll事件
  document.addEventListener("scroll", function () {
    let currentPos = window.scrollY;
    //   往下滑
    if (currentPos > lastPos) {
      nav.style.bottom = "-120px"; //讓nav bar消失
    } else {
      nav.style.bottom = "0px"; //讓nav bar出現
    }
    lastPos = currentPos; //再記住現在位置，跟未來的位置做比較
  });
});

//商品大圖
const shopInfoItem = ref({
  1: "src/assets/images/shopInfo/body_03_1.png",
  2: "src/assets/images/shopInfo/body_03_2.png",
  3: "src/assets/images/shopInfo/body_03_3.png",
  // 4: "../assets/images/showcase/color_test_04.png",
});
const count = ref(1);

const btnRight = () => {
  if (count.value < 3) {
    count.value++;
  } else {
    count.value = 1;
  }
};
const btnLeft = () => {
  if (count.value > 1) {
    count.value--;
  } else {
    count.value = 3;
  }
};
</script>

<template>
  <navComponentsVue />
  <!-- 跑馬燈 -->
  <article class="saleBar">
    <p>X'MAS SALE! 15%off on all products. <span>12/11-12/25</span></p>
  </article>

  <div class="ham">
    <router-link class="anchor" to="/"><span>Store </span></router-link>
    <span> / </span>
    <router-link class="anchor" to="/"><span> Drone</span></router-link>
  </div>

  主介面
  <div class="main">
    <!-- 商品大圖 -->
    <div id="mainPic">
      <img :src="`src/assets/images/shopInfo/body_03_${count}.png`" />
      <div class="button" id="left" @click="btnLeft">&lt;</div>
      <div class="button" id="right" @click="btnRight">&gt;</div>
    </div>

    <!-- 主要敘述 -->
    <article class="mainDesc">
      <h2>EFVP Mavic 4 Classic</h2>
      <p>USD $1,599</p>
      <ul>
        <li>5.1K/50fps Professional Imagery</li>
        <li>Hasselblad Natural Colour Solution</li>
        <li>46-Min Max Flight Time</li>
        <li>Omnidirectional Obstacle Sensing</li>
        <li>15km HD Video Transmission</li>
        <li>Advanced RTH</li>
        <li>Night Mode for Video Recording</li>
      </ul>
      <div class="more">
        <router-link to="/showcase" data-title="Learn more" class="btnMain">
          <span>Learn more > </span>
        </router-link>
      </div>
    </article>
  </div>

  <!-- 區隔大標 -->
  <h2 class="tcl">Take a Closer Look</h2>

  <!-- 換色 -->
  <div class="shows">
    <div class="colorSwitch">
      <div class="colorSwitch_photo">
        <div class="color_img">
          <img src="src/assets/images/shopInfo/body_03_2.png" alt="color" />
        </div>

        <div class="color_img">
          <img
            src="src/assets/images/shopInfo/body_03_blue_2.png"
            alt="color"
          />
        </div>

        <div class="color_img">
          <img
            src="src/assets/images/shopInfo/body_03_white_2.png"
            alt="color"
          />
        </div>

        <div class="color_img">
          <img src="src/assets/images/shopInfo/body_03_red_2.png" alt="color" />
        </div>
      </div>
      <div class="colorSwitch_word">
        <section>
          <span>Black</span>
          <span>Navy</span>
          <span>White</span>
          <span>Red</span>
        </section>
      </div>
    </div>

    <div class="battery">
      <img src="src/assets/images/shopInfo/battery.jpg" alt="battery" />
      <h4>46-Min Extended Flight Time</h4>
      <p>
        Increasing flight time by almost 50% compared to Mavic 2 Pro, Mavic 3
        Classic delivers up to 46 minutes in the air for care-free creation.
      </p>
    </div>

    <div class="far">
      <img src="src/assets/images/shopInfo/far.jpg" alt="far" />
      <h4>O3+ Transmission, 15km Range</h4>
      <p>
        With a transmission distance of up to 15 km, fly farther and more stably
        with peace of mind and a smooth 1080p/60fps live feed.
      </p>
    </div>

    <div class="accessories">
      <img src="src/assets/images/shopInfo/accessories.jpg" alt="accessories" />
      <h4>Extensive Accessories</h4>
      <p>
        DJI RC features a built-in 5.5-inch HD display for clear viewing in
        strong light, professional-grade ND filters for landscape photography,
        and more, to make results truly stand out.
      </p>
    </div>

    <div class="sensing">
      <img src="src/assets/images/shopInfo/sensing.jpg" alt="sensing" />
      <h4>Omnidirectional Sensing</h4>
      <p>
        Mavic 3 Classic continually senses objects in all directions and
        bypasses them quickly and smoothly for safe, confident flights.
      </p>
    </div>
  </div>
  <!-- FAQ -->
  <section class="faqs">
    <h2>Let’s Answer Your Questions</h2>
    <Accordion />
  </section>

  <!-- 購買連結 -->
  <nav id="purchaseBar" :class="navShow ? 'navOn' : 'navOff'">
    <div class="purchaseBar_ship">
      <img src="" alt="ship" />
      <p>Delivered on 12/16</p>
    </div>

    <div class="pnp">
      <span>$1,599 </span>
      <router-link class="purchaseBar_btn" id="" to="/" data-title="Buy now"
        ><span>Buy now</span></router-link
      >
    </div>
  </nav>
  <footerComponentsVue />
</template>

<style lang="scss">
@import "@/sass/style.scss";
@import "@/sass/component/_btn.scss";

// 跑馬燈
.saleBar {
  width: 100vw;
  padding: 7px 0;

  background-color: #077af9;

  position: relative;
  opacity: 0;
  top: 30px;

  animation: downBar 1s 1s forwards;

  p {
    text-align: center;

    font-size: 12px;
    word-spacing: 2px;
    letter-spacing: 1px;
  }

  span {
    display: none;
  }

  @include m($m-breakpoint) {
    p {
      font-size: 16px;
      word-spacing: 4px;
      letter-spacing: 2px;
      padding: 2px 0;
    }
    span {
      display: inline;
    }
  }

  @include l($l-breakpoint) {
    padding: 3px 0;
  }
}
@keyframes downBar {
  30% {
    opacity: 0;
  }
  100% {
    top: 70px;
    opacity: 1;
    @include m($m-breakpoint) {
      position: sticky;
      z-index: 100;
    }
  }
}

//ham
.ham {
  margin: 110px 0px 0px 100px;
  display: none;
  span {
  }
  @include m($m-breakpoint) {
    display: block;
  }
}

// 主介面
.main {
  display: flex;
  flex-direction: column;
  // border-bottom: #999 1px solid;

  &:after {
    content: "";
    border-bottom: #999 solid 1px;
    margin-left: 10vw;
    width: 80vw;
  }
  @include m($m-breakpoint) {
    flex-direction: row;

    &:after {
      display: none;
    }
  }
  // 商品大圖
  #mainPic {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    position: relative;
    img {
      width: 60vw;
      height: 30vh;
    }
    .button {
      width: 50px;
      height: 50px;
      font-size: 50px;
      color: whitesmoke;
      position: absolute;

      top: 10vh;
    }
    #left {
      left: 25px;
    }
    #right {
      right: 5px;
    }

    @include m($m-breakpoint) {
      justify-content: flex-start;

      margin-top: 20px;
      img {
        width: 360px;
        height: 360px;
        margin-left: 160px;
        margin-top: 50px;
      }
      .button {
        top: 170px;
      }
      #left {
        left: 100px;
      }
      #right {
        left: 560px;
      }
    }

    @include l($l-breakpoint) {
      img {
      }
      .button {
      }
      #left {
      }
      #right {
      }
    }
  }

  //商品敘述
  .mainDesc {
    padding: 30px;
    h2 {
      font-size: 26px;
      font-weight: 500;
    }
    p {
      padding: 10px 0;
      font-size: 24px;
      font-weight: 500;
    }
    ul {
      margin-left: 30px;
      li {
        list-style-type: disc;
        // list-style-position: inside;

        padding: 3px;
      }
    }
    .more {
      margin-top: 10px;

      display: flex;
      justify-content: flex-end;
      .btnMain {
        span {
          color: #077af9;
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
  @include l($l-breakpoint) {
    .mainDesc {
      margin-left: 120px;
      h2 {
      }
      p {
      }
      ul {
        li {
        }
      }
    }
  }
}

// tcl

h2 {
  text-align: center;
  font-size: 40px;

  margin-top: 80px;
  margin-bottom: 50px;
}

// 圖區
.shows {
  height: 450px;
  overflow-y: auto;
  display: flex;

  // 換色
  .colorSwitch {
    margin-top: 150px;
    background-color: transparent;

    display: flex;
    flex-direction: column;
    h3 {
      text-align: center;
    }
    .colorSwitch_photo {
      // margin: 0 0 0 150px;
      position: relative;
      left: 100px;
      top: -60px;
      // position: absolute;
      .color_img {
        width: 230px;
        height: 250px;
        top: 0;
        left: 0;

        position: absolute;
        opacity: 0;

        filter: alpha(opacity=0);
        -webkit-animation: round 24s linear infinite;
        animation: round 24s linear infinite;
        img {
          width: inherit;
          height: inherit;

          background-color: transparent;
          top: 0;
        }
      }
    }
    @-webkit-keyframes round {
      4% {
        opacity: 1;
        filter: alpha(opacity=100);
      }
      20% {
        opacity: 1;
        filter: alpha(opacity=100);
      }
      24% {
        opacity: 0;
        filter: alpha(opacity=0);
      }
    }
    @keyframes round {
      4% {
        opacity: 1;
        filter: alpha(opacity=100);
      }
      20% {
        opacity: 1;
        filter: alpha(opacity=100);
      }
      24% {
        opacity: 0;
        filter: alpha(opacity=0);
      }
    }
    .color_img:nth-child(1) {
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
    .color_img:nth-child(2) {
      -webkit-animation-delay: 6s;
      animation-delay: 6s;
    }
    .color_img:nth-child(3) {
      -webkit-animation-delay: 12s;
      animation-delay: 12s;
    }
    .color_img:nth-child(4) {
      -webkit-animation-delay: 18s;
      animation-delay: 18s;
    }

    .colorSwitch_word {
      display: flex;
      flex-direction: column;
      margin-left: 35px;
      margin-top: -120px;

      span {
        display: block;
        margin-bottom: 30px;

        font-size: 26px;
        font-weight: 400;
        color: #999;
        -webkit-animation: wordRound 24s linear infinite;
        animation: wordRound 24s linear infinite;

        @-webkit-keyframes wordRound {
          4% {
            color: whitesmoke;
            font-weight: 500;
          }
          35% {
            color: #999;
          }
        }
        @keyframes wordRound {
          4% {
            color: whitesmoke;
            font-weight: 500;
          }
          35% {
            color: #999;
          }
        }
      }
      span:nth-child(1) {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }
      span:nth-child(2) {
        -webkit-animation-delay: 6s;
        animation-delay: 6s;
      }
      span:nth-child(3) {
        -webkit-animation-delay: 12s;
        animation-delay: 12s;
      }
      span:nth-child(4) {
        -webkit-animation-delay: 18s;
        animation-delay: 18s;
      }
    }


  .battery {
    position: relative;

    margin: 20px;

    width: 300px;
    margin-left: 200px;

    img {
      width: 300px;
      height: 400px;
      border-radius: 5px;
      object-fit: cover;
      background-color: black;
      filter: opacity(0.5);
    }
    h4 {
      position: absolute;
      top: 0;
      margin: 0;
      padding: 20px;
      text-shadow: #222 2px 2px 4px;
    }
    p {
      position: absolute;
      top: 100px;
      padding: 20px;
      text-shadow: #222 2px 2px 4px;
    }
  }
  .far {
    position: relative;
    margin: 20px;

    width: 300px;

    img {
      width: 300px;
      height: 400px;
      border-radius: 5px;
      object-fit: cover;
      background-color: black;
      filter: opacity(0.5);
    }
    h4 {
      position: absolute;
      top: 0;
      margin: 0;
      padding: 20px;
      text-shadow: #222 2px 2px 4px;
    }
    p {
      position: absolute;
      top: 100px;
      padding: 20px;
      text-shadow: #222 2px 2px 4px;
    }
  }
  .accessories {
    position: relative;

    margin: 20px;

    width: 300px;

    img {
      width: 300px;
      height: 400px;
      border-radius: 5px;
      object-fit: cover;
      background-color: black;
      filter: opacity(0.5);
    }
    h4 {
      position: absolute;
      top: 0;
      margin: 0;
      padding: 20px;
      text-shadow: #222 2px 2px 4px;
    }
    p {
      position: absolute;
      top: 100px;
      padding: 20px;
      text-shadow: #222 2px 2px 4px;
    }
  }
  .sensing {
    position: relative;

    margin: 20px;
    padding-right: 20px;
    width: 300px;

    img {
      width: 300px;
      height: 400px;
      border-radius: 5px;
      object-fit: cover;
      background-color: black;
      filter: opacity(0.5);
    }
    h4 {
      position: absolute;
      top: 0;
      margin: 0;
      padding: 20px;
      text-shadow: #222 2px 2px 4px;
    }
    p {
      position: absolute;
      top: 100px;
      padding: 20px;
      text-shadow: #222 2px 2px 4px;
    }
  }

  @include l($l-breakpoint) {
      margin-top: 200px;
      margin-left: 200px;

    margin-top: 100px;

    .colorSwitch_photo {
      left: 100px;
      top: -60px;
  }
    margin: auto;
    justify-content: center;
    width: 80vw;

    height: 200vh;

    flex-wrap: wrap;
    overflow-y: unset;

    .battery {
      width: 37vw;
      h4 {
        line-height: 45px;
      }
      img {
        height: 300px;
        width: 37vw;
      }
    }
    .far {
      width: 36vw;
      h4 {
        line-height: 45px;
      }
      img {
        height: 300px;
        width: 36vw;
      }
    }
    .accessories {
      width: 36vw;
      h4 {
        line-height: 45px;
      }
      img {
        height: 300px;
        width: 36vw;
      }
    }
    .sensing {
      width: 76vw;
      h4 {
        line-height: 45px;
      }
      img {
        height: 300px;
        width: 76vw;
      }
    }
  }
}

// FAQ
.faqs {
  h2 {
    text-align: center;
  }
}
//purchasewBar
#purchaseBar {
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;

  margin: 0;
  padding: 15px 30px;
  bottom: 0px;

  background: rgba(200, 230, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);

  .purchaseBar_ship {
    img {
      display: none;
    }
  }
  .pnp {
    display: flex;
    flex-direction: column;
    span {
      line-height: 30px;
      font-size: 18px;
      font-weight: 500;
      margin: 5px 0;
    }
    .purchaseBar_btn {
      background: linear-gradient(0deg, #1890ff, #40a9ff);
      border-radius: 5px;

      margin: 0;
      width: 80vw;
      text-align: center;
      @include l($l-breakpoint) {
      }
    }
  }
  @include l($l-breakpoint) {
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 60px;
    .pnp {
      flex-direction: row;
      .purchaseBar_btn {
        width: 100px;
        line-height: 40px;
        padding: 0 15px;

        margin: 0 120px 0 60px;
      }
    }
  }
}
</style>
