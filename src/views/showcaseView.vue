<script setup>
import { onMounted, registerRuntimeCompiler } from "vue";
</script>

<template>
  <main>
    <!-- buyItBar? -->
    <section class="buy">
      <p>FPV PRO 2</p>
      <div class="buttons">
        <a class="btnPrimary" data-title="Purchase">
          <span>Purchase</span>
        </a>
      </div>
    </section>

    <!-- nameAnimate -->
    <div class="name">
      <h2>FPV PRO 2</h2>
    </div>

    <!-- banner3d -->
    <div class="ddd">
      <p>reserved</p>
    </div>

    <!-- 簡介 -->
    <!-- 最新產品的概述 -->
    <article class="introduction">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod
        molestias culpa sapiente ullam porro ad quas unde perspiciatis voluptas
        voluptatem aliquid ipsa reiciendis in rem? Necessitatibus, dolore
        officia! Laboriosam?
      </p>
    </article>

    <!-- body -->
    <!-- 換顏色 描述機殼尺寸 輕量化 耐撞 材質等 -->
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
    <article class="body_desc">
      <!-- 機殼描述 -->
      <p>
        Lorem ipsum dolor sit amet<br />
        <br />
        consectetur adipisicing elit. Quo nam itaque ad ex ipsam ipsa maxime
        voluptates natus. Alias deleniti saepe odio soluta ratione tempora at
        delectus repudiandae ab. Nobis?
      </p>
    </article>
    <article class="body_end">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eligendi
        quae quas, ipsam soluta.
      </p>
    </article>

    <!-- 飛控 -->
    <!-- 更好極限操作 反映速度 方開可懸停-->
    <!-- 預想是放個圖跟簡介 詳述在內頁(像iphone像右滑過的按鈕那樣)-->

    <!-- 馬達 -->
    <!-- 更強力 轉速及速度上限 可達到的載重 -->
    <!-- 輪播 -->

    <!-- 圖傳 -->
    <!-- 攝影清晰 收訊穩定 回傳速度 左旋少人用-->
    <!-- 四張圖下滑時打開 分別是上面四像不同的優勢 -->

    <!-- 電池 -->
    <!-- 競速及一般飛行的兩種續航力 充電速度 -->

    <!-- GPS -->
    <!-- 可定位 自動返航等 -->

    <!-- 外接相機 -->
    <!-- 輕量 畫質 電力-->
    <!-- 放影片 -->
  </main>
</template>

<style lang="scss" scoped>
@import "@/sass/style.scss";
@import "@/sass/component/_btn.scss";

// <!-- buyItBar? -->
.buy {
  width: 70vw;
  margin-left: 15vw;
  padding: 0 10px;

  border-bottom: 1px solid #999;

  display: flex;
  justify-content: space-between;
}
// <!-- nameAnimate -->
.name {
  h2 {
    position: relative;
    text-align: center;

    font-size: 70px;
    font-weight: 500;
    letter-spacing: 1.5;

    opacity: 0;
    animation: nameAnimation 1.5s;
    animation-delay: 1s;
  }
  @keyframes nameAnimation {
    0% {
      display: block;
      top: 100px;
      opacity: 0;
    }
    80% {
      top: 0;
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}

// <!-- banner3d -->
.ddd {
  height: 70vh;
  p {
    text-align: center;
    font-size: 50px;
    line-height: 70vh;
  }
}
// <!-- 簡介 -->
.introduction {
  margin: 350px 0 0 15vw;
  width: 800px;
  p {
    font-size: 50px;
    line-height: 70px;

    font-weight: 800;

    background: -webkit-linear-gradient(
      323.14deg,
      #007ffb 10.04%,
      #9c4dd5 70.95%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
// <!-- body -->
.colorSwitch {
  margin-top: 300px;
  background-color: transparent;

  display: flex;
}
.colorSwitch_photo {
  // margin: 0 0 0 150px;
  position: relative;
  left: 500px;
  height: 600px;
  // position: absolute;
  .color_img {
    width: 500px;
    height: 400px;
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
  margin-left: 300px;

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

.body_desc {
  width: 500px;
  margin: auto;
  margin-top: -70px;
  display: flex;
  p {
    font-size: 30px;
    line-height: 42px;
  }
}

.body_end {
  width: 70vw;

  margin: auto;
  margin-top: 70px;

  border-top: #999 solid 1px;
  padding: 15px 0;

  display: flex;
  justify-content: flex-end;
  p {
    width: 400px;
  }
}
// <!-- 飛控 -->

// <!-- 機身 -->

// <!-- 馬達 -->

// <!-- 圖傳 -->

// <!-- 電池 -->

// <!-- GPS -->

// <!-- 外接相機 -->
</style>
