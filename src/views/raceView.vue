<script setup></script>

<template>
  <main>
    <!-- banner -->
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
        <h2>CONTEST</h2>
      </div>

      <div class="test"></div>
    </div>

    <!-- race list -->

    <section class="raceList">
      <div class="box">
        <p>123</p>
      </div>
    </section>
    <!-- background img -->
    <section class="backgroundImage"></section>
    <!-- practise point -->
    <section class="practisePoint"></section>
  </main>
</template>

<style lang="scss" scoped>
@import "../sass/style.scss";
@import "../sass/component/_btn.scss";
section {
  margin: 0;
}

// banner
.banner {
  margin: 0;
  position: relative;
  // position: absolute;
  .banner_img {
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-animation: round 20s linear infinite;
    animation: round 20s linear infinite;
    img {
      width: 100%;
      position: absolute;
      //   position: relative;
    }
  }
  .banner_title {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0%);
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

//background img
// .backgroundImage {
// }
</style>
