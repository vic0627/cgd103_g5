<script setup>
import { onMounted, registerRuntimeCompiler } from "vue";
// import navComponentsVue from "@/components/navComponents.vue";
// import $ from "@/views/js/shopInfo2.js";

//bottomBar第一版

//抓top值
// data() {
//   return {
//     top:''
//   }
// },

// //抓瀏覽器滾輪
// mounted() {
//   window.addEventListener('scroll', () => {
//     this.top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
//   })
// },

// //監聽top變化
// watch:{
//   top(newValue, oldValue){
//     //等新值大於100時再做變化
//     if(newValue > 100) {
//       if(newValue > oldValue){
//         this.navShow = false
//         console.log('向下滾動')
//       }else{
//         this.navShow = true
//         console.log('向上滾動')
//       }
//     }
//   }
// }

//----------------

// //bottomBar第二版

// let lastPos = 0;
// const nav = document.getElementById("#purchaseBar");

// // 監聽scroll事件
// document.addEventListener("scroll", function () {
//   let currentPos = window.scrollY;
//   //   往下滑
//   if (currentPos > lastPos) {
//     nav.style.bottom = "-120px"; //讓nav bar消失
//   } else {
//     nav.style.bottom = "0px"; //讓nav bar出現
//   }
//   lastPos = currentPos; //再記住現在位置，跟未來的位置做比較
// });

//商品大圖

// let app = new Vue({
//   el: "#app",
//   data: {
//     pics: [
//       "../assets/images/showcase/color_test_01.png",
//       "../assets/images/showcase/color_test_02.png",
//       "../assets/images/showcase/color_test_03.png",
//       "../assets/images/showcase/color_test_04.png",
//     ],
//     order: 0,
//   },
//   methods: {
//     btnLeft: function () {
//       this.order--;
//     },
//     btnRight: function () {
//       this.order++;
//     },
//   },
// });
</script>

<template>
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
  <!-- <div id="app">
    <img :src="'./img/' + pics[order]" />
    <div class="button" id="left" v-show="order != 0" @click="btnLeft">
      &lt;
    </div>
    <div
      class="button"
      id="right"
      v-show="order < pics.length - 1"
      @click="btnRight"
    >
      &gt;
    </div>
  </div> -->

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
</template>

<style lang="scss">
@import "@/sass/style.scss";

// 跑馬燈
.saleBar {
  width: 100vw;
  padding: 7px 0;

  background: rgba(200, 230, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);

  position: relative;
  top: -55px;
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
}

@keyframes downBar {
  100% {
    top: 0;
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

.ham {
  margin: 20px 0px 0px 100px;
  span {
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
