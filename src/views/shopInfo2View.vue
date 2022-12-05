<script setup>
import { onMounted, registerRuntimeCompiler, ref } from "vue";
import { log } from "@/composables/useCommon.js";
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
// import $ from "@/views/js/shopInfo2.js";

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
  1: "../assets/images/showcase/color_test_01.png",
  2: "../assets/images/showcase/color_test_02.png",
  3: "../assets/images/showcase/color_test_03.png",
  4: "../assets/images/showcase/color_test_04.png",
});
const count = ref(1);

const btnRight = () => {
  if (count.value < 4) {
    count.value++;
  } else {
    count.value = 4;
  }
};
const btnLeft = () => {
  if (count.value > 1) {
    count.value--;
  } else {
    count.value = 1;
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

  <!-- 商品大圖 -->
  <div id="mainPic">
    <img :src="`src/assets/images/showcase/color_test_0${count}.png`" />
    <div class="button" id="left" @click="btnLeft">&lt;</div>
    <div class="button" id="right" @click="btnRight">&gt;</div>
  </div>

  <!-- 換色 -->
  <div class="colorSwitch">
    <div class="colorSwitch_photo">
      <div class="color_img">
        <img src="../assets/images/showcase/color_test_01.png" alt="color" />
      </div>

      <div class="color_img">
        <img src="../assets/images/showcase/color_test_02.png" alt="color" />
      </div>

      <div class="color_img">
        <img src="../assets/images/showcase/color_test_03.png" alt="color" />
      </div>

      <div class="color_img">
        <img src="../assets/images/showcase/color_test_04.png" alt="color" />
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

  <!-- 購買連結 -->
  <nav id="purchaseBar" :class="navShow ? 'navOn' : 'navOff'">
    <div class="purchaseBar_ship">
      <img src="" alt="ship" />
      <p>Delivered on 12/16</p>
    </div>

    <div class="pnp">
      <span>$2,899 </span>
      <router-link class="purchaseBar_btn" id="" to="/" data-title="Buy now"
        ><span>Buy now</span></router-link
      >
    </div>
  </nav>
  <footerComponentsVue />
</template>

<style lang="scss">
@import "@/sass/style.scss";

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
      padding: 5px 0;
    }
    span {
      display: inline;
    }
  }

  @include l($m-breakpoint) {
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
  margin: 90px 0px 0px 100px;
  display: none;
  span {
  }
  @include m($m-breakpoint) {
    display: block;
  }
}

// 商品大圖
#mainPic {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  img {
    width: 70vw;
    height: 35vh;
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
    left: 20px;
  }
  #right {
    right: 0px;
  }

  @include m($m-breakpoint) {
    justify-content: flex-start;

    margin-top: 20px;
    img {
      width: 400px;
      height: 400px;
      margin-left: 140px;
    }
    .button {
      top: 150px;
    }
    #left {
      left: 100px;
    }
    #right {
      left: 560px;
    }
  }

  @include l($m-breakpoint) {
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
// 換色
.colorSwitch {
  margin-top: 300px;
  background-color: transparent;

  display: flex;
}
.colorSwitch_photo {
  // margin: 0 0 0 150px;
  position: relative;
  left: 100px;
  height: 600px;
  // position: absolute;
  .color_img {
    width: 250px;
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
  margin-left: 50px;
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

#purchaseBar {
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  position: fixed;

  padding: 15px;
  bottom: 0px;

  background: rgba(200, 230, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);

  .purchaseBar_ship {
    display: none;
    img {
    }
  }
  span {
    line-height: 30px;
    font-size: 18px;
    font-weight: 500;
  }
  .purchaseBar_btn {
    //btn樣式代改
    margin: 0 40px 0 15px;
  }
}
</style>
