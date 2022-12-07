<script setup>
import { onMounted, registerRuntimeCompiler, reactive,ref } from "vue";

import newsComponentsVue from "@/components/newsComponents.vue";
import {bodyInit} from '../composables/useOnunmounted';
bodyInit();
</script>

<template>
  <!-- 01 banner start -->
  <nav-component/>
  <nav-component :news="`#077AF9`"/>
  <div class="news">
    <div class="news_banner_box">
      <div class="banner">
        <img src="../assets/images/About/news_banner.jpg" alt="banner" />
        <div class="banner_word">
          <div class="banner_title">
            <h2 :class="newsheader">Explore sky horizon</h2>
          </div>
          <div class="banner_txt">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati, enim debitis nesciunt eligendi recusandae porro.
            </p>
          </div>
          <!-- btn 等勝翔上傳簡單版的btn 再引用 -->
        </div>
        <div class="banner_right_txt">
          <p>Travel the world with a drone</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 01 banner end -->

<!-- 02 tag start -->
<newsComponentsVue />

</template>

<style lang="scss" scoped>
@import "@/sass/style.scss";
// @import '@/css/reset.css';

.news {
  width: 100%;
  padding-top: 40px;
  .news_banner_box {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner{
    width: 100%;
    position: relative;
    height: 550px;
    @include l($l-breakpoint) {
      width: 100%;
      position: relative;
      height: 800px;
    }
    img{
      width: 100%;
      height: 500px;
      object-fit: cover;
      @include l($l-breakpoint){
        height: 800px;
        object-position: center 25%;
      }
    }
    .banner_word {
      position: absolute;
      top: 50%;
      text-align: center;
      @include l($l-breakpoint){
        width: 700px;
        position: absolute;
        top: 50%;
        left: 5%;
        text-align: left;
      }
    .banner_title {
      margin-bottom: 30px;
      h2 {
        text-transform: uppercase;
        width: 100%;
        -webkit-box-reflect: below 1px
          linear-gradient(transparent, rgba(0, 0, 0, 0.329));
        outline: none;
        line-height: 0.8em;
        animation: animate-s 30s linear infinite;
      }
    }
  }
}
  .banner_right_txt {
    display: none;
  }
}
@include m($m-breakpoint) {
  .banner {
    width: 100%;
    position: relative;
    height: 550px;
    img{
      width: 100%;
      height: 500px;
    }
    .banner_word {
      width: 500px;
      position: absolute;
      top: 50%;
      left: 5%;
      text-align: left;
      .banner_title {
        margin-bottom: 30px;
        h2 {
          position: relative;
          text-transform: uppercase;
          width: 100%;
          -webkit-box-reflect: below 1px
            linear-gradient(transparent, rgba(0, 0, 0, 0.329));
          outline: none;
          line-height: 0.7em;
          animation: animate 30s linear infinite;
        }
      }
    }
    .banner_right_txt {
      display: block;
      position: absolute;
      top: 30%;
      right: 2%;
      box-sizing: border-box;
      p {
        position: relative;
        text-transform: uppercase;
        width: 100%;
        font-size: 1.2rem;
        -webkit-box-reflect: below 1px
          linear-gradient(transparent, rgba(0, 0, 0, 0.329));
        outline: none;
        line-height: 0.7em;
        animation: animate 60s linear infinite;
        @include l($l-breakpoint){
          font-size: 2rem;
        }
      }
      
    }
  }
}

@keyframes animate {
  0%,
  18%,
  3.%,
  50.1%,
  60%,
  65.1%,
  80%,
  90%,
  90% {
    color: rgb(206, 206, 206);
    text-shadow: none;
  }
  18.1%,
  20.1%,
  30%,
  50%,
  60.1%,
  80.1%,
  90%,
  100% {
    color: rgb(215, 215, 215);
    text-shadow: 0 0 10px $blue, 0 0 40px $blue, 0 0 80px $blue, 0 0 160px $blue;
  }
}
@keyframes animate-s {
  0% {
    color: rgb(206, 206, 206);
    text-shadow: none;
  }
  100% {
    color: rgb(215, 215, 215);
    text-shadow: 0 0 10px $blue, 0 0 40px $blue, 0 0 80px $blue, 0 0 160px $blue;
  }
}

</style>
