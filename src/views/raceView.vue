<script setup></script>

<template>
  <main>
    <!-- banner -->
    <section class="banner">
      <div>
        <img src="../assets/images/race/banner01.jpg" alt="banner" />
      </div>

      <div>
        <img src="../assets/images/race/banner02.jpg" alt="banner" />
      </div>

      <div>
        <img src="../assets/images/race/banner03.jpg" alt="banner" />
      </div>

      <div>
        <img src="../assets/images/race/banner04.jpg" alt="banner" />
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
  margin: 30px auto;
  width: 100%;
  //   height: 60px;
  position: relative;
  box-shadow: #666 0 0 5px;
  dev {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-animation: round 25s linear infinite;
    animation: round 25s linear infinite;
  }
}
</style>
