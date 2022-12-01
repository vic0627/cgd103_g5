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
        With powerful flight performance and a Hasselblad camera, Mavic 3
        Classic delivers the absolute essence of flagship imaging. Take it on
        any adventure to create unforgettable work.
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
        Newest carbon fiber chassis!<br />
        <br />
        Classic 5-inches chassis, easy to get started even if you are a rookie
        driver in drone or you were not the EFPV user. The chassis only cost 500
        gram so won't be a huge burden on your power system, also have a better
        operability, on the other hand, you would allow to choose a better
        camera like the one we bring to you!
      </p>
    </article>
    <article class="body_end">
      <p>
        With carbon fiber chassis, our drone would be safe in collide or any
        emergent situation, no way to destroy it and the controllers inside.
        <!-- 旁邊放盾牌的小icon -->
      </p>
    </article>

    飛控
    <!-- 預想是放個圖跟簡介 詳述在內頁(像iphone像右滑過的按鈕那樣)-->

    <!-- 10000Hz Electronic Speed Controllers -->

    <!-- dji -->
    <!-- Omnidirectional Obstacle Sensing 全向避障
    With APAS 5.0, when flying, Mavic 3 Classic continually senses objects in all directions and bypasses [3] them quickly and smoothly. Even new pilots can fly confidently and safely, and create smooth footage even in complicated scenarios. -->

    <!-- Extreme Precision 公寸級高精準度定位系統
    Decimeter-level high-precision positioning makes Mavic 3 Classic extremely stable when hovering. This not only ensures clearer long-exposure shots, but also helps record smoother timelapse videos. -->

    <!-- Cruise Control 定速巡航
    Control Mavic 3 Classic to fly in any direction without having to continually press the control sticks. This not only makes long-distance flight more effortless, but also helps reduce shakes during manual control for smoother camera movement. -->

    馬達
    <!-- 更強力 轉速及速度上限 可達到的載重 -->
    <!-- 輪播 -->
    <!-- 2800kV 36000rpm -->
    <!-- Stronger motors allow our drone to fly beyond the limit, it cost only 1.5s to accelerate over 100km/hr, and the max speed could be 160km/hr. -->

    圖傳
    <!-- 四張圖下滑時打開 分別是上面四像不同的優勢 -->
    <!-- 上面那行是參考iphone的畫面 但後來從dji之後可能有點不夠 妳橫的如果也想這樣拉我再補資料給妳 -->
    <!-- dji -->
    <!-- Powerful Video Transmission

    O3+ Transmission and Beyond
    With a transmission distance of up to 15 km, [4] fly farther and more stably with peace of mind. O3+ transmission can transmit a 1080p/60fps live feed. [5] This means the camera view is displayed at specifications close to what the camera actually records. It also makes Mavic 3 Classic more responsive to your control.

    1080p/60fps
    Live Feed

    15 km
    Transmission Distance -->

    電池
    <!-- 46-Min Max Flight Time in Normal mode & 68-Min in Sport mode -->

    <!-- Easy to charge your drone - using type-c connector so your don't need to bring another charger in your bag when you're enjoying your trip  -->
    <!-- Fast charging speed -cost only a half hour to full charge your drone, won't waste a lot time when you're in an urgent project -->

    GPS
    <!-- dji -->
    <!-- Advanced RTH 自動巡航
    Always end on a high note with Advanced RTH. This updated auto-return function enables Mavic 3 Classic to automatically determine the optimal route back to its home point and execute it quickly. Mavic 3 Classic can fly to a designated altitude and then find a safe and efficient route back to its home point, combining the advantages of Advanced RTH and traditional RTH, allowing users to choose the best option according to their environment. -->

    外接相機
    <!-- 相機這段大部分是dji抓的 前幾段有出現的Hasselblad是品牌名 可能要換一下 -->
    <!-- 這邊可以再去dji看一下 他主軸是放這個 下面還有很多資訊我沒全放 妳看妳哪邊用的到再去抓 -->
    <!-- 放影片 -->
    <!-- With powerful flight performance and a Hasselblad camera, Mavic 3 Classic delivers the absolute essence of flagship imaging. Take it on any adventure to create unforgettable work. -->

    <!-- Hasselblad Camera, Create to Inspire  -->

    <!-- The iconic Swedish brand Hasselblad designed and built the L2D-20c aerial camera just for the Mavic 3 Series, embedding a professional-grade 4/3 CMOS in an unbelievably compact space. Rigorous Hasselblad standards are applied to both hardware performance and software algorithms, bringing imaging quality to an entirely new level.  -->

    <!-- 4/3     CMOS Hasselblad Camera 
         5.1K    HD Video
         20MP    Effective Pixels 
         12-bit  RAW Image Color Depth 
         12.8    Stops Native Dynamic
         Range   f/2.8-f/11 Adjustable Aperture
         24mm    Equivalent Focal Length 
         VDAF    Vision Detection Auto Focus Technology -->

    <!-- Professional Imaging

         5.1K/50fps
         Record sharper details. Supersampling technology empowers the recording of 4K/60fps footage.

         4K/120fps
         Both high resolution and high frame rate effortlessly deliver HD slow-motion videos.

         10-bit D-Log
         Delivers natural color gradations with more highlight and shadow details retained for greater flexibility when editing.

         HLG
         Provides higher dynamic range that suits a variety of devices and provides footage that does not require color tuning in post.

         Night Shots
         This video mode optimizes footage in low-light scenarios such as sunsets and sunrises, reducing noise for cleaner shots. -->
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
