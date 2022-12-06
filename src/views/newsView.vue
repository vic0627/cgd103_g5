<script>
import { onMounted, registerRuntimeCompiler, reactive } from "vue";
import navComponentsVue from "@/components/navComponents.vue";
import {bodyInt} from '../composables/useOnunmounted';
bodyInt();

// import {useMotion} from '@vueuse/motion';

export default {
  data: () => ({
    activeTab: "tab-1",
  }),
  methods: {
    setActiver(tab) {
      this.activeTab = tab;
    },
    isActive(tab) {
      return this.activeTab === tab;
    },
  },
};
</script>
<script setup>
import newsComponentsVue from "@/components/newsComponents.vue";
</script>

<template>
  <!-- 01 banner start -->
  <navComponentsVue class="newsheader" />
  <div class="news">
    <div class="news_banner_box">
      <div class="banner">
        <img src="../assets/images/About/news_banner.jpg" alt="banner" />
        <div class="banner_word">
          <div class="banner_title">
            <h2>Explore sky horizon</h2>
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

.newsheader {
  color: $blue;
}
.news {
  width: 100%;
  padding-top: 40px;
  .news_banner_box {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner_word {
    position: absolute;
    top: 50%;
    text-align: center;
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
  .banner_right_txt {
    display: none;
  }
}
@include m($m-breakpoint) {
  .banner {
    position: relative;
    height: 550px;
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
    }
    .banner_right_txt {
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
      }
    }
  }
}
@include l($l-breakpoint) {
  .banner {
    position: relative;
    height: 800px;
    img {
      width: 100%;
      height: 800px;
      object-position: center 18%;
      object-fit: cover;
    }
    .banner_word {
      width: 700px;
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
      position: absolute;
      top: 30%;
      right: 3%;
      display: block;
      box-sizing: border-box;
      p {
        text-transform: uppercase;
        width: 100%;
        font-size: 2.5rem;
        -webkit-box-reflect: below 1px
          linear-gradient(transparent, rgba(0, 0, 0, 0.329));
        outline: none;
        line-height: 0.7em;
        animation: animate 60s linear infinite;
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

.label {
  width: 100%;
  .label_box {
    width: 100%;
    margin: auto;
    max-width: 1200px;
    .label_title {
      width: 100%;
      margin: 25px 0;
      text-align: center;
    }
    .filter_box {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      .filter {
        width: 250px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .item {
          display: flex;
          color: #fff;
          cursor: pointer;
          background-color: $blue;
          width: 70px;
          margin: 15px;
          padding: 10px;
          justify-content: center;
          border-radius: 5px;
          font-size: 13px;
          transition: 0.5s all;
          font-family: "Poppins", sans-serif;
          &:hover {
            background-color: rgb(6, 13, 204);
          }
          &.active {
            background-color: rgb(6, 13, 204);
          }
        }
      }
      @include m($m-breakpoint) {
        .filter {
          width: 700px;
        }
      }

      @include l($l-breakpoint) {
        .filter {
          width: 700px;
          .item {
            width: 120px;
          }
        }
      }
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
