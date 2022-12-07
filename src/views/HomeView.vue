<script setup>
import { ref, onMounted, reactive } from 'vue';
import $ from 'jquery';
import Parallax from 'parallax-js';
import {bodyInit} from '../composables/useOnunmounted';
import navComponentsVue from '@/components/navComponents.vue';
import svglineComponentsVue from '@/components/svglineComponents.vue';
import svgComponents1Vue from '@/components/svgComponents1.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import slider from '@/components/homeNews.vue';
bodyInit();
onMounted(() => {
  const scene = document.getElementById("scene");
  // 第二个参数传入配置对象
  const parallaxInstance = new Parallax(scene, {
    relativeInput: true,
  });
});
const raceContent = reactive([
  {
    id: 1,
    title: "SkyPixel 8th style free",
    image: "/images/about/img_05.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    image: "/images/about/img_06.jpg",
  },
  {
    id: 3,
    title: "SMens Cotton Jacket",
    image: "/images/about/img_07.jpg",
  },
]);
const view = ref(1);
const changeView = (index) => {
    view.value = index
}
const isOpen = ref(true)
</script>

<template>
    <navComponentsVue :className="blue"/>

    <div class="home1">
        <h2>Mavic 2 Zoom</h2>
        <p>24~28 mm Optical Zoom Camers Ulitimate Flexibility</p>
        <div class="home1-btn">
            <router-link to="/shopInfo" class="btnFirst" id="btn1" data-title="Learn">
            <span>Learn</span></router-link>
            <router-link to="/showcase" class="btnSecond" id="btn2" data-title="Buy now">
            <span>Buy now</span></router-link>
        </div>
        <div id="scene">
            <div class="drone layer" data-depth="0.1">
                <img src="../assets/images/home/fly2.png" alt="">
            </div>
            <!-- <svgComponents1Vue class="layer" data-depth="0.5" /> -->
        </div>
        <div class="scroll">
            <p>Scroll down</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(238, 238, 238, 1);transform: ;msFilter:;"><path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path><path d="M11 6h2v6h-2z"></path></svg>
        </div>
        <!-- <svglineComponentsVue /> -->
        <!-- <svgComponents1Vue /> -->
    </div>
<svglineComponentsVue :class="{svgWidth : isOpen}"/>
<svgComponents1Vue />
    <section>
        <div class="home-custom">
            <div class="custom-pic">
                <img src="../assets/images/home/customize.jpeg" alt="customize">
            </div>
            <div class="custom-txt">
                <div class="homeCustom">
                    <h2>CUSTOMIZE</h2>
                    <p>You can preview your design in real time to experience the ultimate personalized service</p>
                </div>
                <div class="custIcon">
                    <div class="custIcon-wrap">
                        <img src="@/assets/images/home/cusIcon1.png" alt="">
                        <p>Speed destroy personal</p>
                        <p>King is come back</p>
                    </div>
                    <div class="custIcon-wrap">
                        <img src="@/assets/images/home/cusIcon2.png" alt="">
                        <p>Speed destroy personal</p>
                        <p>King is come back</p>
                    </div>
                    <div class="custIcon-wrap">  
                        <img src="@/assets/images/home/cusIcon3.png" alt="">
                        <p>Speed destroy personal</p>
                        <p>King is come back</p>
                    </div>
                </div>
                <div class="customBtn">
                    <router-link to="/custom" class="btnFirst" id="btn1" data-title="Learn">
                        <span>Learn</span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- <svglineComponentsVue :class="{position : isOpen}"  /> -->
    <section>
        <div class="homeAcc">
            <h2>ACCESSORIES</h2>
            <p>See how we bring user feedbackinto our own product journey</p>
        </div>
        <div class="home-Acc">
            <div class="homeAccWrap1">
                <div class="mainAcc">
                    <div class="homeAccWrap1-pic">
                        <img src="../assets/images/home/body_03_black_1.png" alt="">
                    </div>
                    <div class="homeAccWrap1-txt">
                        <h5>Stay Flying Longer-Up to 60mins</h5>
                        <p>You can preview your design in real time.</p>
                        <div class="accBtn">
                        <router-link to="/shop" class="btnFirst" id="btn1" data-title="Learn">
                            <span>Learn</span>
                        </router-link>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div class="homeAccWrap2">
                <div class="accSection accSection-pic1">
                </div>
            </div>
            <div class="homeAccWrap2">
                 <div class="accSection">
                    <div class="homeAccWrap2-pic">
                        <img src="../assets/images/home/propellor_02_black_1.png" alt="">  
                    </div>
                    <div class="homeAccWrap2-txt">
                        <h6>Drone Remote controller</h6>
                        <p>You can preview your design in real time.</p>
                        <router-link to="/shop" class="btnFirst" id="btn1" data-title="Learn">
                            <span>Learn</span>
                        </router-link>
                    </div>
                </div>
            </div>        
          
            <div class="homeAccWrap2">
                <div class="accSection accSection-pic2">
                </div>
            </div>
            <div class="homeAccWrap2">
                <div class="accSection">
                    <div class="homeAccWrap2-pic">
                        <img src="../assets/images/home/body_01_blue_1.png" alt="">  
                    </div>
                    <div class="homeAccWrap2-txt">
                        <h6>Drone Remote controller</h6>
                        <p>You can preview your design in real time.</p>
                        <router-link to="/shop" class="btnFirst" id="btn1" data-title="Learn">
                            <span>Learn</span>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </section>
<svglineComponentsVue :line2="2"/>
<svgComponents1Vue :circle2="2"/>
    <section class="aboutSection">
        <div class="homeAbout">
            <h2>ABOUT US</h2>
            <div class="about-pic">
                <img src="../assets/images/home/g5_logo_grey.png" alt="">
            </div>
            <div class="about-txt">
                <h3>RACING AND FREESTYLE</h3>
                <p>We are highly motivated to present GOOD SLEEP to as many people aspossible. Our task is not just selling pillows.We are fully committed to provide fulfilling sleep. Good sleep bringshappiness, energy, and smiles. It is a simple fact.</p>
            </div>
            <!-- <div class="homeAbout-pic">
                <img src="../assets/images/home/about.png" alt="">
            </div> -->
            <div class="aboutBtn">
                <router-link to="/about" class="btnFirst" id="btn1" data-title="Learn">
                    <span>Learn</span>
                </router-link>
            </div>
        </div>
    </section>

    <section>
        <div class="homeGame">
            <div class="homeGame-txt">
                <h2>GAME</h2>
                <h6>RACING AND FREESTYLE</h6>
                <div class="gameBtn">
                    <router-link to="/game" class="btnFirst" id="btn1" data-title="Learn">
                        <span>Learn</span>
                    </router-link>
                </div>
            </div>
            <video autoplay="" muted="" loop="" playsinline="">
                <source src="@/assets/video/home/banner.mp4" type="video/mp4">
            </video>
        </div>
    </section>

    <section class="contest">
        <div class="contestTitle">
            <h2>CONTEST</h2>
        </div>
        <div class="homeRace">
            <transition name="tad" mode="out-in">
                <div class="homeContest" v-if="view === 1">
                    <div class="homeContest-pic">
                        <img src="@/assets/images/home/contest.png" alt="">
                    </div>
                    <div class="homeContest-txt">
                        <div class="contest-vue">
                            <h5>DRL Vegas Championship Race</h5>
                            <p>Thursday, Nov 17th 2022</p>
                            <router-link to="/race" class="btnFirst" id="btn1" data-title="Learn">
                                <span>Learn</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            <!-- </transition> -->
            <!-- <transition name="tad" mode="out-in"> -->
                <div class="homeContest" v-else-if="view === 2">
                    <div class="homeContest-pic">
                        <img src="/images/about/img_06.jpg" alt="">
                    </div>
                    <div class="homeContest-txt">
                        <div class="contest-vue">
                            <h5>Miami 3-0-Fly Finals</h5>
                            <p>Sunday, Mar 26th 2023</p>
                            <router-link to="/race" class="btnFirst" id="btn1" data-title="Learn">
                                <span>Learn</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            <!-- </transition>
            <transition name="tad" mode="out-in"> -->
                <div class="homeContest" v-else-if="view === 3">
                    <div class="homeContest-pic">
                        <img src="/images/about/img_07.jpg" alt="">
                    </div>
                    <div class="homeContest-txt">
                        <div class="contest-vue">
                        <h5>SIM Series - Alpine Valley</h5>
                        <p>Tuesday, Dec 6th 2022</p>
                        <router-link to="/race" class="btnFirst" id="btn1" data-title="Learn">
                            <span>Learn</span>
                        </router-link>
                    </div>
                </div>
            </div>
      </transition>
      <div class="buttonDiv">
        <button @click="changeView(1)" class="raceChange"><p>DRL</p></button>
        <button @click="changeView(2)" class="raceChange"><p>Miami</p></button>
        <button @click="changeView(3)" class="raceChange">
          <p>SIM series</p>
        </button>
      </div>
    </div>
  </section>
  <slider />
  <footerComponentsVue />
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
@import '@/css/reset.css';


.tad-enter-active {
  animation: tad-in 1s;
}
.tad-leave-active {
  animation: tad-in 0.5s reverse;
}
@keyframes tad-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
//line.circle
.svgWidth {
  width: 300px;
  height: 300px;
}
.position {
  left: 95%;
  bottom: -70%;
}

$center: center;
$left: left;
$l-w: 1200px;
@mixin titleStyle($center) {
  text-align: $center;
}
@mixin divCenter($l-w, $center) {
  width: $l-w;
  margin: 20px auto;
  text-align: $center;
}
@mixin flexCenter($center) {
  display: flex;
  justify-content: $center;
}

.drone {
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  img {
    width: 80%;
    position: relative;
    z-index: 2;
  }
}
//CUSTOMIZE
section {
  width: 100%;
  margin: 40px auto;
}
.home1 {
  position: relative;
  overflow: hidden;
}
.scroll {
  width: 100%;
  position: relative;
  p {
    font-size: 12px;
  }
}
.home-custom {
  width: 90%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-content: center;
  height: 600px;
  overflow: hidden;
  .custom-pic {
    width: 100%;
    position: absolute;
    // height: 500px;
    img {
      width: 100%;
      border-radius: $img-radius;
      object-fit: cover;
      height: 500px;
    }
    &::before {
      content: "";
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 99.5%;
      border-radius: $img-radius;
    }
  }
  .custom-txt {
    position: relative;
    z-index: 2;
    @include divCenter(100%, $center);
    .homeCustom {
      @include titleStyle(($center));
    }
    .customBtn {
      @include flexCenter($center);
    }
    .custIcon {
      @include flexCenter(space-evenly);
      margin: 50px auto;
      width: 90%;
      .custIcon-wrap {
        width: 33.33333%;
        img {
          width: 20%;
        }
        p {
          margin-top: 10px;
        }
      }
    }
  }
}

//ACCESSORIES
.homeAcc {
  @include divCenter(90%, $left);
}
.home-Acc {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.homeAccWrap1 {
  width: 100%;
  margin: 10px auto;
  .mainAcc {
    background: linear-gradient(98.29deg, #077af9 10.1%, #9c4dd6 82.53%);
    border-radius: $img-radius;
    margin: 20px;
    @include flexCenter($center);
    flex-direction: column;
  }
  .homeAccWrap1-txt {
    width: 90%;
    padding: 10px;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
  }
  .homeAccWrap1-pic {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    img {
      width: 80%;
      object-fit: contain;
    }
  }
}

.homeAccWrap2 {
  width: 47.5%;
  display: flex;
  margin: 10px auto;
  img {
    width: 100%;
    border-radius: $img-radius;
  }
  .accSection {
    background: #353547;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: $img-radius;
    .homeAccWrap2-pic {
      width: 80%;
      margin: 50px 0;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    // .accBtn {
    //     @include flexCenter($left);
    //     justify-content: flex-start;
    // }
    .homeAccWrap2-txt {
      width: 90%;
      padding: 10px;
    }
  }
  .accSection-pic1 {
    background-image: url("@/assets/images/home/homeAcc2.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .accSection-pic2 {
    background-image: url("@/assets/images/home/homeAcc5.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

//ABOUT US
.homeAbout {
  text-align: center;
  position: relative;
  h2,
  h3,
  p {
    margin: 20px 0;
  }
  .aboutBtn {
    @include flexCenter($center);
  }
  .about-txt {
    margin: 0 auto;
    width: 90%;
    p {
      line-height: 40px;
    }
  }
  .about-pic {
    margin: 50px;
    img {
      width: 80%;
      @include s($s-breakpoint) {
        width: 40%;
      }
    }
  }
  .homeAbout-pic {
    position: absolute;
    top: 20%;
    right: 0%;
    z-index: -1;
    width: 70%;
    height: 70%;
    // border-radius: 50%;
    img {
      width: 100%;
      border-radius: 50%;
      // background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
      // box-shadow: inset 0px 0px 60px 80px #12181E;
    }
  }
}

//GAME
.homeGame {
  text-align: center;
  position: relative;
  width: 90%;
  margin: 0 auto;
  height: 600px;
  @include flexCenter($center);
  video {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: $img-radius;
  }
  .gameBtn {
    @include flexCenter($center);
  }
  .homeGame-txt {
    position: absolute;
    @include divCenter(90%, $center);
    z-index: 2;
  }
}

//CONTEST
.contest {
  margin-top: 70px;
}
.contestTitle {
  @include titleStyle($center);
}
.homeContest {
  width: 100%;
  position: relative;
  .homeContest-pic {
    width: 100%;
    padding-top: 20px;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: $img-radius;
    }
  }
  .homeContest-txt {
    // margin: 10px;
    width: 100%;
    background: #0f1f3d;
    border-radius: $img-radius;
    position: absolute;
    z-index: 2;
    bottom: -20%;
    left: 0;
    .contest-vue {
      margin: 20px;
    }
  }
}
.homeRace {
  position: relative;
  .buttonDiv {
    position: absolute;
    bottom: -30%;
    margin-left: 10px;
    .raceChange {
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding-top: 10px;
      padding: 10px 20px 5px;
      position: relative;
      border-bottom: 3px solid #8a8a8a;
      position: relative;
      transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
      z-index: 1;
      p {
        &:hover {
          color: $blue;
        }
        &:focus {
          color: $blue;
        }
      }
      &::after {
        content: "";
        display: block;
        height: 3px;
        position: absolute;
        bottom: 0;
        right: 1.25rem;
        left: 1.25rem;
      }
      &:hover:after {
        background-color: $blue;
        transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        transform-origin: bottom center;
        z-index: -1;
        bottom: -3px;
        right: 0;
        left: 0;
      }
      &:focus::after {
        background-color: $blue;
        bottom: -3px;
        right: 0;
        left: 0;
      }
      &:focus p {
        color: $blue;
        transform: scale(1.02) 1s ease;
      }
    }
  }
}

//電腦版
@include l($l-breakpoint) {
  //cusotom
  .custom-pic {
    img {
      height: 600px;
    }
  }
  .custom-txt {
    @include divCenter($l-w, $center);
    .homeCustom {
      @include titleStyle($center);
    }
  }
  //acc
  .homeAcc {
    @include divCenter($l-w, $left);
    margin: 20px 40px;
    width: 1200px;
  }
  .homeAbout {
    @include divCenter(900px, $center);
  }
  .homeAccWrap1 {
    width: 66.66666%;
    .mainAcc {
      display: flex;
      flex-direction: row;
    }
    &-pic {
      img {
        width: 100%;
      }
    }
  }
  .homeAccWrap2 {
    width: 33.3333%;
    .accSection {
      margin: 20px;
    }
  }
  //about
  .aboutSection {
    margin: 120px auto;
    .about-pic img {
      width: 30%;
    }
  }

  //game
  .homeGame {
    height: 650px;
    @include divCenter($l-w, $center);
    video {
      height: 650px;
    }
  }
  //contest
  .homeRace {
    width: 100%;
    .buttonDiv {
      bottom: -15%;
    }
  }

  .homeContest {
    @include divCenter($l-w, $left);
    .homeContest-pic {
      width: 60%;
      height: 480px;
      overflow: hidden;
    }
    .homeContest-txt {
      width: 50%;
      left: 50%;
      bottom: -15%;
    }
  }

  //news
  #newSlider {
    img {
      width: 80%;
    }
  }

  section {
    width: 1200px;
  }
}
</style>
