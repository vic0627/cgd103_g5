<script setup></script>

<template>
  <main>
    <!-- banner -->
    <section class="banner">
      <div class="test">
        <!-- <img src="../assets/images/race/banner01.jpg" alt="banner" /> -->
      </div>

      <div>
        <!-- <img src="../assets/images/race/banner02.jpg" alt="banner" /> -->
      </div>

      <div>
        <!-- <img src="../assets/images/race/banner03.jpg" alt="banner" /> -->
      </div>

      <div>
        <!-- <img src="../assets/images/race/banner04.jpg" alt="banner" /> -->
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
.test {
  background-image: url(../assets/images/race/banner01.jpg);
}
section {
  margin: 0;
  //banner
  .banner {
    width: 100vw;
    height: 650px;
    overflow: hidden;
    position: relative;
    background-color: black;
    dev {
      width: 100%;
      background-position: center center;
    }
  }
}
</style>
