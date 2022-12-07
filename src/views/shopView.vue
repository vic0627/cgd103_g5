<script setup>
import $ from "jquery";
import { ref, reactive, onMounted, computed } from "vue";
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import { bodyInit } from "../composables/useOnunmounted";

bodyInit();
const steps = reactive([
  {
    id: "1",
    text: "Choose your favorite color",
    diff: "color",
  },
  {
    id: "2",
    text: "Choose your favorite wing",
    diff: "wing",
  },
  {
    id: "3",
    text: "Choose your favorite speed",
    diff: "speed",
  },
  {
    id: "4",
    text: "Finish your exclusive FVP",
    diff: "own FVP",
  },
]);
const products = reactive([
  {
    id: 1,
    name: "p1",
    title: "Mavic 1 Green",
    Original_Price: "USD$900",
    src1: [
      "../../public/images/shop/body_01_green_1.png",
      "../../public/images/shop//body_01_green_2.png",
      "../../public/images/shop/body_01_green_3.png",
    ],
    new: true,
    sale: false,
  },
  {
    id: 2,
    name: "p2",
    title: "Mavic 2 White",
    Original_Price: "USD$900",
    src2: [
      "../../public/images/shop/body_01_white_1.png",
      "../../public/images/shop//body_01_white_2.png",
      "../../public/images/shop/body_01_white_3.png",
    ],
    new: false,
    sale: false,
  },
  {
    id: 3,
    name: "p3",
    title: "Mavic 3 Red",
    Original_Price: "USD$900",
    Discount_Price: "USD$888",
    src3: [
      "../../public/images/shop/body_01_red_1.png",
      "../../public/images/shop//body_01_red_2.png",
      "../../public/images/shop/body_01_red_3.png",
    ],
    sale: true,
    new: false,
  },
  {
    id: 4,
    name: "p4",
    title: "Mavic 4 Black",
    Original_Price: "USD$900",
    src4: [
      "../../public/images/shop/body_01_black_1.png",
      "../../public/images/shop//body_01_black_2.png",
      "../../public/images/shop/body_01_black_3.png",
    ],
    new: true,
    sale: false,
  },
  {
    id: 5,
    name: "p5",
    title: "Mavic 5 Blue",
    Original_Price: "USD$900",
    src5: [
      "../../public/images/shop/body_01_blue_1.png",
      "../../public/images/shop//body_01_blue_2.png",
      "../../public/images/shop/body_01_blue_3.png",
    ],
    new: false,
    sale: false,
  },
  {
    id: 6,
    name: "p6",
    title: "Charl 1 Red",
    Original_Price: "USD$900",
    Discount_Price: "USD$888",
    src6: [
      "../../public/images/shop/body_02_red_1.png",
      "../../public/images/shop//body_02_red_2.png",
      "../../public/images/shop/body_02_red_3.png",
    ],
    sale: true,
    new: false,
  },
  {
    id: 7,
    name: "p7",
    title: "Charl 2 White",
    Original_Price: "USD$900",
    src7: [
      "../../public/images/shop/body_02_white_1.png",
      "../../public/images/shop//body_02_white_2.png",
      "../../public/images/shop/body_02_white_3.png",
    ],
    new: true,
    sale: false,
  },
  {
    id: 8,
    name: "p8",
    title: "Charl 3 Green",
    Original_Price: "USD$900",
    src8: [
      "../../public/images/shop/body_02_green_1.png",
      "../../public/images/shop//body_02_green_2.png",
      "../../public/images/shop/body_02_green_3.png",
    ],
    new: false,
    sale: false,
  },
  {
    id: 9,
    name: "p9",
    title: "Charl 4 Blue",
    Original_Price: "USD$900",
    Discount_Price: "USD$888",
    src9: [
      "../../public/images/shop/body_02_blue_1.png",
      "../../public/images/shop//body_02_blue_2.png",
      "../../public/images/shop/body_02_blue_3.png",
    ],
    sale: true,
    new: false,
  },
  {
    id: 10,
    name: "p10",
    title: "Charl 5 Black",
    Original_Price: "USD$900",
    src10: [
      "../../public/images/shop/body_02_black_1.png",
      "../../public/images/shop//body_02_black_2.png",
      "../../public/images/shop/body_02_black_3.png",
    ],
    new: false,
    sale: false,
  },
  {
    id: 11,
    name: "p11",
    title: "Chac 1 Red",
    Original_Price: "USD$900",
    Discount_Price: "USD$888",
    src11: [
      "../../public/images/shop/body_03_red_1.png",
      "../../public/images/shop//body_03_red_2.png",
      "../../public/images/shop/body_03_red_3.png",
    ],
    sale: true,
    new: false,
  },
  {
    id: 12,
    name: "p12",
    title: "Chac 2 White",
    Original_Price: "USD$900",
    Discount_Price: "USD$888",
    src12: [
      "../../public/images/shop/body_03_white_1.png",
      "../../public/images/shop//body_03_white_2.png",
      "../../public/images/shop/body_03_white_3.png",
    ],
    sale: true,
    new: false,
  },
  {
    id: 13,
    name: "p13",
    title: "Chac 3 Black",
    Original_Price: "USD$900",
    Discount_Price: "USD$888",
    src13: [
      "../../public/images/shop/body_03_black_1.png",
      "../../public/images/shop//body_03_black_2.png",
      "../../public/images/shop/body_03_black_3.png",
    ],
    sale: true,
    new: false,
  },
  {
    id: 14,
    name: "p14",
    title: "Chac 4 Blue",
    Original_Price: "USD$900",
    Discount_Price: "USD$888",
    src14: [
      "../../public/images/shop/body_03_blue_1.png",
      "../../public/images/shop//body_03_blue_2.png",
      "../../public/images/shop/body_03_blue_3.png",
    ],
    sale: true,
    new: false,
  },
]);
const accessories = reactive([
  {
    id: 1,
    name: "a1",
    title: "Round propeller black",
    Original_Price: "USD$300",
    src1: [
      "../../public/images/shop/propellor_01_black_1.png",
      "../../public/images/shop/propellor_01_black_2.png",
    ],
    new: true,
  },
  {
    id: 2,
    name: "a2",
    title: "Round propeller blue",
    Original_Price: "USD$300",
    Discount_Price: "USD$200",
    src2: [
      "../../public/images/shop/propellor_01_blue_1.png",
      "../../public/images/shop/propellor_01_blue_2.png",
    ],
    sale: true,
  },
  {
    id: 3,
    name: "a3",
    title: "Round propeller green",
    Original_Price: "USD$300",
    Discount_Price: "USD$200",
    src3: [
      "../../public/images/shop/propellor_01_green_1.png",
      "../../public/images/shop/propellor_01_green_2.png",
    ],
    sale: true,
  },
  {
    id: 4,
    name: "a4",
    title: "Round propeller red",
    Original_Price: "USD$300",
    src4: [
      "../../public/images/shop/propellor_01_red_1.png",
      "../../public/images/shop/propellor_01_red_2.png",
    ],
    new: true,
  },
  {
    id: 5,
    name: "a5",
    title: "Round propeller white",
    Original_Price: "USD$300",
    src5: [
      "../../public/images/shop/propellor_01_white_1.png",
      "../../public/images/shop/propellor_01_white_2.png",
    ],
    new: true,
  },

  {
    id: 6,
    name: "a6",
    title: "Rect propeller black",
    Original_Price: "USD$300",
    src6: [
      "../../public/images/shop/propellor_02_black_1.png",
      "../../public/images/shop/propellor_02_black_2.png",
    ],
    new: true,
  },
  {
    id: 7,
    name: "a2",
    title: "Rect propeller blue",
    Original_Price: "USD$300",
    Discount_Price: "USD$200",
    src7: [
      "../../public/images/shop/propellor_02_blue_1.png",
      "../../public/images/shop/propellor_02_blue_2.png",
    ],
    sale: true,
  },
  {
    id: 8,
    name: "a8",
    title: "Rect propeller green",
    Original_Price: "USD$300",
    Discount_Price: "USD$200",
    src8: [
      "../../public/images/shop/propellor_02_green_1.png",
      "../../public/images/shop/propellor_02_green_2.png",
    ],
    sale: true,
  },
  {
    id: 9,
    name: "a9",
    title: "Rect propeller red",
    Original_Price: "USD$300",
    src9: [
      "../../public/images/shop/propellor_02_red_1.png",
      "../../public/images/shop/propellor_02_red_2.png",
    ],
    new: true,
  },
  {
    id: 10,
    name: "a10",
    title: "Rect propeller white",
    Original_Price: "USD$300",
    src10: [
      "../../public/images/shop/propellor_02_white_1.png",
      "../../public/images/shop/propellor_02_white_2.png",
    ],
    new: true,
  },

  {
    id: 11,
    name: "a11",
    title: "Tri propeller black",
    Original_Price: "USD$300",
    src11: [
      "../../public/images/shop/propellor_03_black_1.png",
      "../../public/images/shop/propellor_03_black_2.png",
    ],
    new: true,
  },
  {
    id: 12,
    name: "a12",
    title: "Tri propeller blue",
    Original_Price: "USD$300",
    Discount_Price: "USD$200",
    src12: [
      "../../public/images/shop/propellor_03_blue_1.png",
      "../../public/images/shop/propellor_03_blue_2.png",
    ],
    sale: true,
  },
  {
    id: 13,
    name: "a13",
    title: "Tri propeller green",
    Original_Price: "USD$300",
    Discount_Price: "USD$200",
    src13: [
      "../../public/images/shop/propellor_03_green_1.png",
      "../../public/images/shop/propellor_03_green_2.png",
    ],
    sale: true,
  },
  {
    id: 14,
    name: "a14",
    title: "Tri propeller red",
    Original_Price: "USD$300",
    src14: [
      "../../public/images/shop/propellor_03_red_1.png",
      "../../public/images/shop/propellor_03_red_2.png",
    ],
    new: true,
  },
]);
const bundle_A = reactive([
  {
    name: "A1",
    title: "Simple Bundle",
    price: "USD$1200",
    src: "/images/shop/bundle_01.png",
  },
  {
    name: "A2",
    title: "Simple Bundle",
    price: "USD$1200",
    src: "/images/shop/bundle_01.png",
  },
  {
    name: "A3",
    title: "Simple Bundle",
    price: "USD$1200",
    src: "/images/shop/bundle_01.png",
  },
  {
    name: "A4",
    title: "Simple Bundle",
    price: "USD$1200",
    src: "/images/shop/bundle_01.png",
  },
]);
const bundle_B = reactive([
  {
    name: "b1",
    title: "Pro Bundle",
    price: "USD$1400",
    src: "../../public/images/shop/bundle_02.jpg",
  },
  {
    name: "b2",
    title: "Pro Bundle",
    price: "USD$1400",
    src: "../../public/images/shop/bundle_02.jpg",
  },
  {
    name: "b3",
    title: "Pro Bundle",
    price: "USD$1400",
    src: "../../public/images/shop/bundle_02.jpg",
  },
  {
    name: "b4",
    title: "Pro Bundle",
    price: "USD$1400",
    src: "../../public/images/shop/bundle_02.jpg",
  },
]);

const search = ref("");
const array = ref([]);

const product = computed(() => {
  if (search.value != "") {
    array.value = array.value.filter((item) =>
      item.title.includes(search.value)
    );
  }
});
// switch bundle_A / bundle_B
const view = ref(1);
const viewChange = (index) => {
  view.value = index;
};
// switch pic in products
// 給初值 count
const count = ref({
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
});
//左側按鈕
const prevPic = (id) => {
  if (count.value[id] > 0) {
    count.value[id]--;
  } else {
    count.value[id] = 0;
  }
};
//右側按鈕-機身
const nextPic = (id) => {
  if (count.value[id] < 2) {
    count.value[id]++;
  } else {
    count.value[id] = 2;
  }
};
//右側按鈕-零件
const nextAsscPic = (id) => {
  if (count.value[id] < 1) {
    count.value[id]++;
  } else {
    count.value[id] = 1;
  }
};

$(document).ready(() => {
  $(".show").click(() => {
    $(".category").css("display", "flex").slideDown();
    $(".show").hide();
  });
  $(".hide").click(() => {
    $(".category").css("display", "none").slideUp();
    $(".show").show();
  });
  $(".show").blur(() => {
    $(".show").toggle();
  });
});
</script>

<template>
  <navComponentsVue :shop="`#077AF9`" />
  <!-- banner start-->
  <section class="banner">
    <h2>
      <span>NEW ARRIVAL</span><br />
      <span>EFVP Mavic 3 Classic</span>
    </h2>
    <div class="img_box">
      <img src="../assets/images/shop/new.jpg" alt="newProduct" />
      <img src="../assets/images/shop/new2.jpg" alt="newProduct" />
    </div>
    <div class="buttons">
      <router-link
        class="anchors btnSecond"
        data-title="More"
        to="/shopInfo"
      >
        <span>More</span>
      </router-link>
    </div>
  </section>
  <!-- banner end-->

  <!-- step start-->
  <section class="step_wrapper" id="customize">
    <h2><span>CUSTOMIZE STEP</span></h2>
    <p>Create Your Unique Style</p>
    <div class="step_container">
      <div v-for="num in steps" class="slide" :key="num">
        <p>STEP {{ num.id }}</p>
        <p>{{ num.text }}</p>
      </div>
    </div>
    <div class="buttons">
      <router-link
        class="anchors btnSecond"
        data-title="More"
        to="/shopInfo"
        ><span>More</span></router-link
      >
    </div>
  </section>
  <!-- step end-->

  <!-- category start-->
  <section class="category_box">
    <p class="show">category</p>
    <img
      class="show"
      src="../../public/images/shop/fvp_icon.png"
      alt="fvp_icon"
    />
    <section class="category">
      <span class="hide">X</span>
      <a class="c c1" href="#customize">
        <h5>CUSTOMIZE</h5>
      </a>
      <a class="c c2" href="#fuselage">
        <h5>FUSRLAGE</h5>
      </a>
      <a class="c c3" href="#accessories">
        <h5>ACCESSORIES</h5>
      </a>
      <a class="c c4" href="#bundle">
        <h5>BUNDLE</h5>
      </a>
    </section>
  </section>
  <!-- category end-->

  <!-- fuselage start-->
  <section class="fuselage" id="fuselage">
    <h2><span>FUSRLAGE</span></h2>
    <p>Select All FUSRLAGE Product You favoraite</p>
    <div class="search_box">
      <label for="search"></label>
      <input
        type="text"
        name="search"
        placeholder="search"
        id="search"
        v-model="search"
        @input="product"
      />
      <button type="submit" value="submit">Go</button>
    </div>
    <div class="card_slider">
      <div class="card_slider_items">
        <div v-for="item in products" class="card_slider_item" :key="item.name">
          <img
            v-if="item.new == true"
            class="new"
            src="../assets/images/shop/new_icon.png"
            alt="new_icon"
          />
          <img
            v-if="item.sale == true"
            class="sale"
            src="../assets/images/shop/sale_icon.PNG"
            alt="sale_icon"
          />
          <div class="product_box">
            <div class="img_box">
              <button class="prev" id="prevBtn" @click="prevPic(item.id)">
                ↼
              </button>
              <img
                :src="item[`src${item.id}`][count[item.id]]"
                alt="product_img"
              />
              <button class="next" id="nextBtn" @click="nextPic(item.id)">
                ⇀
              </button>
            </div>
            <div class="detail_box">
              <h5 class="title">{{ item.title }}</h5>
              <p v-if="item.sale != true" class="price">
                {{ item.Original_Price }}
              </p>
              <p v-if="item.sale == true" class="price d">
                {{ item.Original_Price }}
              </p>
              <p v-if="item.Discount_Price != ''" class="price discount">
                {{ item.Discount_Price }}
              </p>
              <div class="buttons">
                <router-link
                  class="anchor btnPrimary"
                  to="/cart"
                  data-title="BUY NOW"
                  ><span>BUY NOW</span></router-link
                >
                <router-link
                  class="anchors btnSecond"
                  data-title="More"
                  to="/shopInfo"
                  ><span>More</span></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- fuselage end-->

  <!--accessories  start-->
  <section class="accessories" id="accessories">
    <h2><span>ACCESSORIES</span></h2>
    <p>More Various Then You Think</p>
    <div class="search_box">
      <label for="search"></label>
      <input type="text" name="search" placeholder="search" id="search" />
      <button type="submit" value="submit">Go</button>
    </div>
    <div class="card_slider">
      <div class="card_slider_items">
        <div v-for="i in accessories" class="card_slider_item" :key="i.name">
          <img
            v-if="i.new == true"
            class="new"
            src="../assets/images/shop/new_icon.png"
            alt="new_icon"
          />
          <img
            v-if="i.sale == true"
            class="sale"
            src="../assets/images/shop/sale_icon.PNG"
            alt="sale_icon"
          />
          <div class="product_box">
            <div class="img_box">
              <button class="prev" id="prevBtn" @click="prevPic(i.id)">
                ↼
              </button>
              <img :src="i[`src${i.id}`][count[i.id]]" alt="product_img" />
              <button class="next" id="nextBtn" @click="nextAsscPic(i.id)">
                ⇀
              </button>
            </div>
            <div class="detail_box">
              <h5 class="title">{{ i.title }}</h5>
              <p v-if="i.sale != true" class="price">{{ i.Original_Price }}</p>
              <p v-if="i.sale == true" class="price d">
                {{ i.Original_Price }}
              </p>
              <p v-if="i.Discount_Price != ''" class="price discount">
                {{ i.Discount_Price }}
              </p>
              <div class="buttons">
                <router-link
                  class="anchor btnPrimary"
                  to="/cart"
                  data-title="BUY NOW"
                  ><span>BUY NOW</span></router-link
                >
                <router-link
                  class="anchors btnSecond"
                  data-title="More"
                  to="/shopInfo"
                  ><span>More</span></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--accessories  end-->

  <!-- bundle start-->
  <section class="bundle" id="bundle">
    <h2><span>BUNDLE</span></h2>
    <p>Make You More Professional</p>
    <div class="wrapper">
      <button href="beginner" @click="viewChange(1)">beginner</button>
      <button href="veteran" @click="viewChange(2)">veteran</button>
    </div>

    <div class="area active">
      <div class="card_container">
        <template v-if="view === 1">
          <div
            v-for="beginner in bundle_A"
            class="card"
            :key="beginner.name"
            id="beginner"
          >
            <div class="pic">
              <img :src="beginner.src" alt="beginner" />
            </div>
            <h5>
              <span>{{ beginner.title }}</span>
            </h5>
            <p class="price">{{ beginner.price }}</p>
            <div class="buttons">
              <router-link class="anchor btnPrimary" to="/cart" data-title="BUY"
                ><span>BUY</span></router-link
              >
              <router-link
                class="anchors btnSecond"
                data-title="More"
                to="/shopInfo"
                ><span>More</span></router-link
              >
            </div>
          </div>
        </template>
        <template v-else-if="view === 2">
          <div
            v-for="veteran in bundle_B"
            class="card"
            :key="veteran.name"
            id="veteran"
          >
            <div class="pic">
              <img :src="veteran.src" alt="veteran" />
            </div>
            <h5>
              <span>{{ veteran.title }}</span>
            </h5>
            <p class="price">{{ veteran.price }}</p>
            <div class="buttons">
              <router-link
                class="anchor btnPrimary"
                to="/cart"
                data-title="BUY NOW"
                ><span>BUY NOW</span></router-link
              >
              <router-link
                class="anchors btnSecond"
                data-title="More"
                to="/shopInfo"
                ><span>More</span></router-link
              >
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- bundle end-->

  <!-- ad -->
  <section class="ad">
    <h2>FEEL <span>FREEDOM</span> IN THE SKY</h2>
    <p><span>VDAF</span> visual focus technology</p>
  </section>

  <footerComponentsVue />
</template>

<style scoped lang="scss">
@import "@/sass/style.scss";
@import "@/sass/base/_color.scss";
@import "@/sass/base/_common.scss";
@import "@/sass/base/_font.scss";
@import "@/sass/mixin/_mixin.scss";
@import "@/sass/component/_btn.scss";

//banner
.banner {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, fr);
  grid-template-rows: repeat(3, fr);
  margin-top: 0;
  h2 {
    grid-column: 1/1;
    grid-row: 1/1;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    right: 0;
    background-color: #ffffff80;
    @include m($m-breakpoint) {
      background-color: #12181e80;
    }
    span {
      &:first-child {
        font-weight: bold;
      }
      font-size: $caption-s-h2;
      max-width: 200px;
      color: #444;
      font-weight: normal;
      @include m($m-breakpoint) {
        color: $fff;
        font: $caption-m-h2;
        font-weight: normal;
      }
      @include l($l-breakpoint) {
        font: $caption-l-h2;
        font-weight: normal;
      }
    }
  }

  .img_box {
    @include m($m-breakpoint) {
      display: flex;
      width: 50%;
    }
    img {
      width: 100%;
      object-fit: cover;
      vertical-align: bottom;
    }
  }
  // .buttons{
  //     width: 100%;
  //     grid-column: 1/1;
  //     grid-row: 3/3;
  //     .btnPrimary{
  //         margin: 0 auto;
  //         position: relative;
  //         top: -50px;
  //         @include primaryBtn (150px);
  //     }

  // }
}
//step
.step_wrapper {
  width: 100%;
  position: relative;
  padding: 20px 0;

  h2 {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    span {
      font-size: $caption-s-h2;
      max-width: 200px;
      color: $fff;
      @include m($m-breakpoint) {
        font: $caption-m-h2;
      }
      @include l($l-breakpoint) {
        font: $caption-l-h2;
      }
    }
  }
  p {
    &:first-child {
      font: $caption-s-h4;
      color: $ored;
      @include m($m-breakpoint) {
        font: $caption-m-h4;
      }
    }
    width: 100%;
    text-align: center;
    span {
      font-weight: light;
    }
  }

  .step_container {
    position: relative;
    margin: 0 auto;
    gap: 1rem;
    padding: 2rem;
    // overflow: hidden;
    &::before {
      content: url(../assets/images/shop/drone.png);
      position: absolute;
      top: -50%;
      left: 0;
      z-index: -1;
      transition: all 1s;
      animation-name: fly;
      animation-duration: 5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-delay: 0;
      @keyframes fly {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(420deg);
        }
      }
    }

    @include m($m-breakpoint) {
      gap: 2rem;
      display: flex;
      justify-content: center;
    }
    .slide {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      width: 100%;
      line-height: 50px;
      padding: 20px;
      margin: 20px auto;
      background: linear-gradient(98.29deg, #077af9 10.1%, #9c4dd6 82.53%);
      font: $caption-s-p;
      color: $txt-color;
      box-sizing: border-box;
      text-align: center;
      z-index: -1;
      border-radius: 20px;
      &:hover {
        background: #000;
        box-shadow: 0 0 30px $blue;
        transition: all 0.5s;
      }
      @include m($m-breakpoint) {
        display: flex;
        flex-wrap: wrap;
        max-width: 300px;
      }
    }
  }
}
//buttons
.buttons {
  width: 100%;
  .btnPrimary {
    @include primaryBtn(130px);
    border: none;
    position: relative;
    margin: 20px auto;
    top: 0;
    text-align: center;
    @include m($m-breakpoint) {
    }
  }
  .btnSecond {
    position: relative;
    margin: 20px auto;
    top: 0;
    @include secondBtn(130px);
  }
}
//category
.category_box {
  position: fixed;
  top: 50px;
  z-index: 2;
  p {
    cursor: pointer;
    z-index: 2;
    position: relative;
    top: 30px;
    left: -80px;
    font-size: 14px;
    color: #9c4dd6;
    text-shadow: 5px 5px 10px;
    margin-left: 5px;
    font-weight: 900;
    transform: rotate(-90deg);
    @include m($m-breakpoint) {
      left: -75px;
      top: 45px;
      margin-top: 15px;
      margin-left: 10px;
      z-index: 2;
    }
  }
  img {
    cursor: pointer;
    z-index: 2;
    width: 20%;
    transform: rotate(-90deg);
    margin-left: 5px;
    @include m($m-breakpoint) {
      width: 30%;
      margin-left: 0;
    }
  }
  .category {
    width: 100%;
    display: none;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 20px;
    z-index: 2;
    background-color: #232a3e;
    .hide {
      color: #9c4dd6;
      font-size: 40px;
    }
    .c {
      text-align: center;
      display: flex;
      h5 {
        padding: 10px;
        max-width: 300px;
        border-radius: 20px;
        margin: 20px;
        &:hover {
          background-color: #000;
          box-shadow: 0 0 10px $blue;
          transition: all 0.5s;
        }
        @include m($m-breakpoint) {
          margin: 10px;
        }
      }
    }
  }
}

//fuselage
.fuselage {
  width: 100%;

  h2,
  p {
    text-align: center;
  }
  .search_box {
    max-width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    input {
      height: 30px;
      background-color: transparent;
      color: #e6e9f0;
      border: 1px solid #fff;
      font-size: 24px;
    }
    button {
      background-color: transparent;
      color: #e6e9f0;
      border: 1px solid #fff;
      font-size: 24px;
    }
  }

  .card_slider {
    width: 100%;

    .card_slider_items {
      max-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;

      .card_slider_item {
        position: relative;
        max-width: 280px;
        padding: 10px 0;
        margin: 10px;
        background-color: #232a3e;
        border-radius: 10px;
        box-shadow: 0 0 10px #324e68;

        img.new,
        img.sale {
          position: absolute;
          z-index: 1;
          top: -10px;
          left: 0;
          width: 50px;
        }
        .product_box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .img_box {
            max-width: 300px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
              background-color: transparent;
              border: none;
              color: rgb(116, 122, 142);
              font-size: 30px;
            }
            img {
              width: 80%;
              object-fit: cover;
              object-position: center 10px;
              transition: all 0.5s;
              animation-name: move;
              animation-duration: 5s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              animation-delay: 0;
              @keyframes move {
                0% {
                  transform: translateY(5px);
                }
                25% {
                  transform: translateY(-10px);
                }
                50% {
                  transform: translateY(-20px);
                }
                75% {
                  transform: translateY(-10px);
                }
                100% {
                  transform: translateY(5px);
                }
              }
            }
          }
          .detail_box {
            &::before {
              display: inline-block;
              content: " ";
              width: 100%;
              height: 40px;
              box-shadow: 2px 5px 10px #e6e9f0;
              border-radius: 50%;
              margin-bottom: 10px;
            }
            margin: 20px;
            // padding: 20px 0;
            color: #f5f5f5;
            .title,
            .price {
              text-align: left;
            }
            .price {
              text-align: right;
              height: 30px;
            }
            .price.d {
              text-decoration: line-through;
            }
            .price.discount {
              color: red;
            }
          }
        }
      }
    }
  }
}
//accessories
.accessories {
  width: 100%;
  text-align: center;
  h2 {
    width: 100%;
    margin: 0 auto;
    span {
      font-size: $caption-s-h2;
      // max-width: 200px;
      color: $fff;
      @include m($m-breakpoint) {
        font: $caption-m-h2;
      }
      @include l($l-breakpoint) {
        font: $caption-l-h2;
      }
    }
  }
  .search_box {
    max-width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    input {
      height: 30px;
      background-color: transparent;
      color: #e6e9f0;
      border: 1px solid #fff;
      font-size: 24px;
    }
    button {
      background-color: transparent;
      color: #e6e9f0;
      border: 1px solid #fff;
      font-size: 24px;
    }
  }
  .card_slider {
    width: 100%;
    .card_slider_items {
      max-width: 1200px;
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      .card_slider_item {
        max-width: 280px;
        margin: 10px;
        background-color: #232a3e;
        border-radius: 10px;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        box-shadow: 0 0 10px #324e68;
        img.new,
        img.sale {
          position: absolute;
          top: -10px;
          left: 0;
          width: 50px;
        }
        .product_box {
          box-sizing: border-box;
          @include m($m-breakpoint) {
          }
          .img_box {
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
              background-color: transparent;
              border: none;
              color: rgb(116, 122, 142);
              font-size: 30px;
              // margin-left: -13px;
            }
            img {
              width: 80%;
              transition: all 0.5s;
              animation-name: move;
              animation-duration: 5s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              animation-delay: 0;
              @keyframes move {
                0% {
                  transform: translateY(0px);
                }
                25% {
                  transform: translateY(-10px);
                }
                50% {
                  transform: translateY(-20px);
                }
                75% {
                  transform: translateY(-10px);
                }
                100% {
                  transform: translateY(0px);
                }
              }
            }
          }
          .detail_box {
            &::before {
              display: inline-block;
              content: " ";
              width: 100%;
              height: 40px;
              box-shadow: 2px 5px 10px #e6e9f0;
              border-radius: 50%;
              margin-bottom: 10px;
            }
            .title,
            .price {
              // padding: 10px;
              text-align: left;
            }
            .price {
              text-align: right;
              height: 30px;
            }
            .price.d {
              text-decoration: line-through;
            }
            .price.discount {
              color: red;
            }

            // .buttons{
            //     display: flex;
            //     flex-wrap: wrap;
            //     justify-content: center;
            //     .btnPrimary{
            //         font: $caption-s-h5;
            //         @include primaryBtn(150px);
            //             margin: 20px;
            //         @include m($m-breakpoint) {
            //             margin: 10px;
            //         }
            //     }
            //     .btnSecond{
            //         font: $caption-s-h5;
            //         @include secondBtn(150px);
            //             margin: 20px;
            //         @include m($m-breakpoint) {
            //             margin: 10px;
            //         }
            //     }
            // }
          }
        }
      }
    }
  }
}
//bundle
.bundle {
  width: 100%;
  h2 {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    span {
      font-size: $caption-s-h2;
      max-width: 200px;
      color: $fff;
      @include m($m-breakpoint) {
        font: $caption-m-h2;
      }
      @include l($l-breakpoint) {
        font: $caption-l-h2;
      }
    }
  }
  p {
    width: 100%;
    text-align: center;
  }
  .wrapper {
    max-width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    button {
      &:focus {
        background-color: #000;
        box-shadow: 0 0 10px #077af9;
        color: #f5f5f5;
      }

      background-color: #324e68;
      color: #f5f5f5;
      border: none;
      margin: 10px;
      padding: 10px;
      border-radius: 50px;
      font-size: 20px;
      padding: 20px;
      max-width: 300px;
      background-color: #324e68;
    }
  }
  .area {
    z-index: -1;
    margin: 0 auto;
    .card_container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .card {
        max-width: 300px;
        margin: 10px;
        padding: 10px;
        background-color: #232a3e;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 0 0 10px #324e68;

        .pic {
          max-width: 100%;
          height: 250px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center -10px;
          }
        }
        h5 {
          span {
            display: block;
            width: 100%;
            color: #fff;
            // background-color: #44444480;
          }
        }
        .price {
          margin-top: 10px;
          text-align: right;
        }
        .buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          .btnPrimary {
            @include primaryBtn(80px);
            margin-left: 10px;
          }
          .btnSecond {
            @include secondBtn(80px);
            margin-left: 10px;
          }
        }
      }
    }
  }
}
//ad
.ad {
  width: 100%;
  height: 500px;
  object-position: center;
  background: url(../assets/images/shop/video.PNG);
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    width: 100%;
    // line-height: 500px;
    margin: 0 auto;
    text-align: center;
    color: #f5f5f5;
    span {
      color: $ored;
      font-size: 50px;
    }
  }
  p {
    text-align: center;
    color: $fff;
    font: $caption-h5;
    span {
      color: $ored;
      font-weight: light;
      font-size: 30px;
    }
  }
}
</style>
