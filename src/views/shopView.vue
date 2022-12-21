<script setup>
import $ from "jquery";
import { ref, reactive, onMounted, computed, onUpdated } from "vue";
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import { bodyInit } from "../composables/useOnunmounted";
import {accessories,bundle_A,bundle_B} from "./js/Shop";

bodyInit();

const cartItem = ref({});
//點按addCartBtn()的function
const set = (key, val) =>{
  sessionStorage.setItem(key, val);
}

// const items = 
const addProd = (id) => {
    if(sessionStorage['cartItem'] == null){
      sessionStorage['cartItem'] = '';
    }
    if(sessionStorage[id]){
      alert('You have checked.')
     
    }else{
      set(`${products.value[id-1].id}`,`{"id":"${products.value[id-1].id}","name":"${products.value[id-1].title}","price":${products.value[id-1].Original_Price}}`);
      
      let get = JSON.parse(sessionStorage.getItem(id));
      sessionStorage['cartItem'] +=`${get.id}, `;

      console.log("id:",get.id);     
    }
};


//連結php抓資料庫資料
const bundleRows_beginner = ref([]);
const bundleRows_veteran = ref([]);
const prodRows = ref([]);
const assRows = ref([]);
const products = ref([]);


const getShopInfo = () =>{
  fetch("http://localhost/cgd103_g5_v2/public/g5PHP/getShop.php")
    .then(res => res.json())
    .then(json => {
        bundleRows_beginner.value = json.filter(i => i.cat_no === 3 && i.prd_name.includes('simple'));
        bundleRows_veteran.value = json.filter(i => i.cat_no === 3 && i.prd_name.includes('pro'));
        prodRows.value = json.filter(i => i.cat_no === 1);
        assRows.value = json.filter(i => i.cat_no === 2);
      return {
        bundleRows_beginner,
        bundleRows_veteran,
        prodRows,
        assRows,
      }
    })
    .then(output => {
      for(let i=0; i<output.prodRows.value.length; i++){
        products.value[i] = {
          id: output.prodRows.value[i].prd_no,
          title: output.prodRows.value[i].prd_name,
          Original_Price: output.prodRows.value[i].prd_price,
          Discount_Price: output.prodRows.value[i].prd_price*.8,
          new: true,
          sale: false,
        };
      }
    })
}

// fuselage searchBar
const search = ref(""); 
const source = ref([]);
const source1 = ref([]);
const productList = computed(()=>{
  let cache = products.value;
    if(search.value != ""){
      cache = cache.filter(item=>item.title.toLowerCase().includes(search.value.toLowerCase()));
    }
    return cache;
})
const getSource = ()=>{
  const result = JSON.stringify(products);
  source.value = JSON.parse(result);
}

// accessories searchBar

// const search1 = ref("");
const productList_A = computed(()=>{
  let cache1 = products.value;
  if(search1.value != ""){
      cache1 = cache1.filter(i=>i.title.toLowerCase().includes(search1.value.toLowerCase()));
  }
  return cache1;
})
const getSource1 = ()=>{
  const result1 = JSON.stringify(accessories);
  source1.value = JSON.parse(result1);
}
onMounted(()=>{
  getSource();
  getSource1();
  getShopInfo();
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
        <span>EFPV Mavic 3 Classic</span>
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
    <div class="step_container box">
        <div class="slide percent p25">
            <svg>
                <circle cx="100" cy="100" r="100"></circle>
                <circle cx="100" cy="100" r="100"></circle>
            </svg>
            <div class="number">
                <p>Step 1</p>
            </div>
            <div class="text">Choose your favorite color</div>
        </div>
        <div class="slide percent p50">
            <svg>
                <circle cx="100" cy="100" r="100"></circle>
                <circle cx="100" cy="100" r="100"></circle>
            </svg>
            <div class="number">
                <p>Step 2</p>
            </div>
            <div class="text">Choose your favorite propellor</div>
        </div>
        <div class="slide percent p75">
            <svg>
                <circle cx="100" cy="100" r="100"></circle>
                <circle cx="100" cy="100" r="100"></circle>
            </svg>
            <div class="number">
                <p>Step 3</p>
            </div>
            <div class="text">Choose your favorite motor</div>
        </div>
        <div class="slide percent p100">
            <svg>
                <circle cx="100" cy="100" r="100"></circle>
                <circle cx="100" cy="100" r="100"></circle>
            </svg>
            <div class="number">
                <p>Step 4</p>
            </div>
            <div class="text">Finish your exclusive FVP</div>
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
      src="/src/assets/images/shop/fvp_icon.png"
      alt="fvp_icon"
    />
    <section class="category">
      <span class="hide">✖</span>
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
      <input  type="text"  name="search"  placeholder="search"  id="search"  v-model="search">
    </div>
    <div class="card_slider">
      <div class="card_slider_items">
        <div v-for="prodRow in productList" class="card_slider_item" :key="prodRow.id">
          <div v-if="prodRow.sale == true" class="sale"><span>Sale</span></div>
            <div class="product_box">
              <div class="img_box">
                <button class="prev" id="prevBtn" @click="prevPic(prodRow.id)">
                  ‹
                </button>
                <img :src="`/cgd103_g5_v2/src/assets/images/shop/${prodRow.images}`" alt="product_img"/>
                <button class="next" id="nextBtn" @click="nextPic(prodRow.id)">
                  ›
                </button>
              </div>
              <div class="detail_box">
                <h5 class="title">{{ prodRow.title}}</h5>
                <p v-if="prodRow.sale == true" class="price discount">
                  $USD{{prodRow.Discount_Price}}
                </p>
                <p v-if="prodRow.sale == false" class="price">
                  $USD{{prodRow.Original_Price}}
                </p>
                <div class="buttons">
                  <router-link
                    class="anchors btnSecond"
                    data-title="More"
                    to="/shopInfo"
                    ><span>More</span>
                  </router-link>
                  <input 
                    type="button"
                    class="btn"
                    @click="addProd(prodRow.id)"
                    value="Add"
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
      <input type="text" name="search1" placeholder="search" id="search1" v-model="search1"/>
    </div>
    <div class="card_slider">
      <div class="card_slider_items">
        <div v-for="assRow in assRows" class="card_slider_item" :key="assRow.pro_no">
          <div v-if="assRow.sale == true" class="sale"><span>Sale</span></div>
          <div class="product_box">
            <div class="img_box">
              <button class="prev" id="prevBtn" @click="prevPic(i.id)">
                ‹
              </button>
              <img :src="`/cgd103_g5_v2/src/assets/images/shop/${assRow.images}`" alt="product_img" />
              <button class="next" id="nextBtn" @click="nextAsscPic(i.id)">
                ›
              </button>
            </div>
            <div class="detail_box">
              <h5 class="title">{{assRow.prd_name}}</h5>
              <p v-if="assRow.sale == true" class="price discount">
                  $USD{{assRow.sale_price}}
                </p>
              <p v-if="assRow.sale == false" class="price">
                $USD{{assRow.prd_price}}
              </p>
              <div class="buttons">
                <router-link
                  class="anchors btnSecond"
                  data-title="More"
                  to="/shopInfo"
                  ><span>More</span>
                </router-link>
                <input 
                    type="button"
                    class="btn"
                    @click="addProd(prodRow.id)"
                    value="Add"
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
      <button  @click="viewChange(1)">Beginner</button>
      <button  @click="viewChange(2)">Veteran</button>
    </div>
    <div class="area active">
      <div class="card_container">
        <template v-if="view === 1">
          <div
            v-for="bundleRow1 in bundleRows_beginner"
            class="card"
            :key="bundleRow1"
            id="beginner"
          >
          <div v-if="bundleRow1.sale_price != 0 " class="sale"><span>Sale</span></div>
            <div class="pic">
              <img :src="`/cgd103_g5_v2/src/assets/images/shop/${bundleRow1.images}`" alt="beginner" />
            </div>
            <h5>
              <span>{{bundleRow1.prd_name}}</span>
            </h5>
            <p v-if="bundleRow1.sale_price == 0 " class="price">$USD{{bundleRow1.sale_price}}</p>
             <p v-if="bundleRow1.sale_price != 0" class="price discount">$USD{{bundleRow1.prd_price }}</p>
            
            <div class="buttons">
              <router-link
                class="anchors btnSecond"
                data-title="More"
                to="/shopInfo"
                ><span>More</span></router-link
              >
              <input 
                  type="button"
                  class="btn"
                  @click="addProd(prodRow.id)"
                  value="Add"
              >
            </div>
          </div>
        </template>
      <template v-else-if="view === 2">
          <div
            v-for="bundleRow2 in bundleRows_veteran"
            class="card"
            :key="bundleRow2"
            id="veteran"
          >
          <div v-if="bundleRow2.sale_price != 0 " class="sale"><span>Sale</span></div>
            <div class="pic">
              <img :src="`/src/assets/images/${bundleRow2.image}`" alt="veteran" />
            </div>
            <h5>
              <span>{{bundleRow2.prd_name}}</span>
            </h5>
            <p v-if="bundleRow2.sale_price != 0" class="price discount">$USD{{bundleRow2.sale_price}}</p>
            <p v-else-if="bundleRow2.sale_price == 0 " class="price">$USD{{bundleRow2.prd_price}}</p>
            <div class="buttons">
              <router-link
                class="anchors btnSecond"
                data-title="More"
                to="/shopInfo"
                ><span>More</span></router-link
              >
              <router-link
                class="anchor btnPrimary"
                to="/cart"
                data-title="Add"
                ><span>Add</span></router-link
              >
            </div>
          </div>
        </template>
      </div> 
    </div> 
  </section>

  <!-- ad start-->
  <section class="ad">
    <h2>FEEL <span>FREEDOM</span> IN THE SKY</h2>
    <p><span>VDAF</span> visual focus technology</p>
  </section>
  <!-- ad end-->

  <footerComponentsVue />
</template>

<style scoped lang="scss">
@import "@/sass/style.scss";
//banner
.banner {
  width: 100%;
  position: relative;
  margin-top: 0;
  h2 {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 40%;
    right: 0;
    background-color: #ffffff80;
    @include m($m-breakpoint) {
      background-color: #12181e80;
    }
    .buttons{
      position: relative;
      top: -30%;
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
}
//step
.cart{
  font-size: 20px;
  position: fixed;
  top: 100px;
  left: 50px;
  width: 100px;
  height: 50px;
  background-color: #ccc;
  color: #232a3e;
}
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
    width:100%;
    @include m($m-breakpoint) {
      gap: 10px;
      width: 1023px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
    @include l($l-breakpoint) {
      width: 1200px;
    }
    .slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      margin:  auto;
      font: $caption-s-p;
      color: $txt-color;
      box-sizing: border-box;
      z-index: -1;
      @include m($m-breakpoint) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 500px;
      }
      @include l($l-breakpoint) {
        width: 250px;
      }
    }
    .percent{      
        position: relative;
        svg{
          position: relative;
          width: 220px;
          height: 220px;
          circle{
            width: 150px;
            height: 150px;
            fill: none;
            stroke-width: 10;
            transform: translate(5px,5px);
            stroke-dasharray: 440;
            stroke-dashoffset: 440;
            &:nth-child(1){
              stroke-dashoffset:0;
              stroke: #ffffff80;
            }
          }
        }
        .number{
          position: absolute;
          top: 50px;
        }
        .text{
          position: absolute;
          top: 100px;
          text-shadow: 5px 5px  10px #f5f5f5;
        }
    }
    
    .p25 svg circle:nth-child(2){
      stroke-dashoffset:330;
      stroke: #03a9f4;
    }
    .p50 svg circle:nth-child(2){
      stroke-dashoffset:220;
      stroke: #03a9f4;
    }
    .p75 svg circle:nth-child(2){
      stroke-dashoffset:110;
      stroke: #03a9f4;
    }
    .p100 svg circle:nth-child(2){
      stroke-dashoffset:0;
      stroke: #03a9f4;
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
  .btn{
    font-size: 20px;
    width: 100px;
    height: 50px;
    background-color: $blue;
    border-radius: 10px;
    color: #fff;
    border: none;
  }
}
//category
.category_box {
  position: fixed;
  top: 50px;
  z-index: 12;
  p {
    cursor: pointer;
    z-index: 12;
    position: relative;
    top: 50px;
    left: -80px;
    font-size: 16px;
    color: $ored;
    margin-left: 5px;
    font-weight: 900;
    transform: rotate(-90deg);
    @include m($m-breakpoint) {
      left: -75px;
      top: 65px;
      margin-top: 15px;
      margin-left: 10px;
      z-index: 12;
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
    background-color: #5f6678;
    box-shadow: 0 0 10px rgb(9, 8, 8);

    .hide {
      color: $ored;
      font-size: 40px;
      margin-right: 100px;
    }
    .c {
      text-align: center;
      display: flex;
      h5 {
        font-size: 20px;
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
    margin: 0 auto;
    .card_slider_items {
      display: flex;
      align-items: center;
      flex-wrap: wrap; 
      margin: 0 auto;
      @include m($m-breakpoint){
        width: 1023px;
      }
      @include l($l-breakpoint){
        width: 1200px;
      }
      .card_slider_item {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:calc(100% - 20px);
        padding: 10px 0;
        margin: 10px;
        background-color: #232a3e;
        border-radius: 10px;
        box-shadow: 0 0 10px #324e68;
        @include s($s-breakpoint){
          width: 265px;
        }
        @include m($m-breakpoint){
          width: 320px;
        }
          @include l($l-breakpoint){
          width: 280px;
        }
        .new{
          z-index: 10;
          position: absolute;
          top: -10px;
          right: 0;
          width: 50px;
          height: 80px;
          background-color: rgb(255, 78, 78);
          clip-path: polygon(100% 0, 100% 100%, 50% 51%, 0% 100%, 0 46%, 0% 0%);
          font:$caption-p;
          color: #f5f5f5;
          span{
            position: relative;
            top: 10px;
            left: 5px;
          }
        }
        .sale {
          z-index: 10;
          position: absolute;
          top: -10px;
          right: 0;
          width: 50px;
          height: 80px;
          background-color: rgb(244, 178, 25);
          clip-path: polygon(100% 0, 100% 100%, 50% 51%, 0% 100%, 0 46%, 0% 0%);
          font:$caption-p;
          color: #f5f5f5;
          span{
            position: relative;
            top: 10px;
            left: 5px;
          }
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
              color: rgb(101, 140, 152);
              font-size: 40px;
            }
            img {
              width: 220px;
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
            margin: 10px;
            &::before {
              display: inline-block;
              content: " ";
              width: 100%;
              height: 20px;
              box-shadow: 2px 5px 10px #e6e9f0;
              border-radius: 50%;
            }
            .title{
              margin: 20px 0;
            }
            .title,
            .price {
              text-align: left;
            }
            .price {
              text-align: left;
              height: 30px;
            }
            .price.d {
              text-decoration: line-through;
              font-size: 14px;
            }
            .price.discount {
              color: $ored;
            }
          }
        }
      }
    }
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
    margin: 0 auto;
    .card_slider_items {
      display: flex;
      align-items: center;
      flex-wrap: wrap; 
      margin: 0 auto;
      @include m($m-breakpoint){
        width: 1023px;
      }
      @include l($l-breakpoint){
        width: 1200px;
      }
      .card_slider_item {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:calc(100% - 20px);
        padding: 10px 0;
        margin: 10px;
        background-color: #232a3e;
        border-radius: 10px;
        box-shadow: 0 0 10px #324e68;
        @include s($s-breakpoint){
          width: 265px;
        }
        @include m($m-breakpoint){
          width: 320px;
        }
          @include l($l-breakpoint){
          width: 280px;
        }
        .sale {
          position: absolute;
          top: -10px;
          right: 0;
          width: 50px;
          height: 80px;
          background-color: rgb(244, 178, 25);
          clip-path: polygon(100% 0, 100% 100%, 50% 51%, 0% 100%, 0 46%, 0% 0%);
          font:$caption-p;
          color: #f5f5f5;
          span{
            position: relative;
            top: 10px;
          }
        }
        .product_box {
          box-sizing: border-box;
          @include m($m-breakpoint) {
          }
          .img_box {
            width: 100%;
            height: 200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            button {
              background-color: transparent;
              border: none;
              color: rgb(101, 140, 152);
              font-size: 40px;
            }
            img {
              width:220px;
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
            margin: 10px;
            &::before {
              display: inline-block;
              content: " ";
              width: 80%;
              height: 20px;
              box-shadow: 2px 5px 10px #e6e9f0;
              border-radius: 50%;
            }
            .sale {
              position: absolute;
              top: -10px;
              right: 0;
              width: 50px;
              height: 80px;
              background-color: rgb(244, 178, 25);
              clip-path: polygon(100% 0, 100% 100%, 50% 51%, 0% 100%, 0 46%, 0% 0%);
              font:$caption-p;
              color: #f5f5f5;
              span{
                position: relative;
                top: 10px;
              }
            }
            .title{
              height: 40px;
              line-height: 30px;
              margin: 20px 0;
            }
            .title,
            .price {
              text-align: left;
            }
            .price {
              text-align: left;
              height: 30px;
            }
            .price.d {
              text-decoration: line-through;
              font-size: 14px;
            }
            .price.discount {
              color: $ored;
            }

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
      border-radius: 10px;
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
      align-items: center;
      flex-wrap: wrap; 
      margin: 0 auto;
      @include m($m-breakpoint){
        width: 1023px;
      }
      @include l($l-breakpoint){
        width: 1200px;
      }
      .sale {
              position: absolute;
              top: -10px;
              right: 0;
              width: 50px;
              height: 80px;
              background-color: rgb(244, 178, 25);
              clip-path: polygon(100% 0, 100% 100%, 50% 51%, 0% 100%, 0 46%, 0% 0%);
              font:$caption-p;
              color: #f5f5f5;
              span{
                position: relative;
                top: 10px;
                left: 5px;
              }
            }
      .card {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:calc(100% - 20px);
        margin: 10px;
        background-color: #232a3e;
        border-radius: 10px;
        box-shadow: 0 0 10px #324e68;
        @include s($s-breakpoint){
          width: 265px;
        }
        @include m($m-breakpoint){
          width: 320px;
        }
          @include l($l-breakpoint){
          width: 280px;
        }
        .pic {
          width: 100%;
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
            margin: 10px;
          }
        }
        .price.discount {
          color: $ored;
        }
        .price {
          margin: 10px;
          // margin-top: 10px;
          height: 30px;
          text-align: left;
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
