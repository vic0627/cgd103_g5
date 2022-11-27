<script setup></script>

<template>
  <main>
    <!-- banner -->
    <section class="banner">
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
      <div class="banner_word">
        <h2>CONTEST</h2>
      </div>
    </section>

    <!-- race list -->
    <!-- background img -->
    <!-- practise point -->
  </main>
</template>

<style lang="scss" scoped>
@import "../sass/style.scss";
@import "../sass/component/_btn.scss";

.banner {
  margin: 0;
  .banner_img {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
  }
  .banner_word {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
}
</style>
