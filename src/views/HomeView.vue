<script setup>
import { ref, onMounted, reactive } from 'vue';
import $ from 'jquery';
import Parallax from 'parallax-js';
import router from '@/router';
import {bodyInit} from '../composables/useOnunmounted';
import navComponentsVue from '@/components/navComponents.vue';
import svglineComponentsVue from '@/components/svglineComponents.vue';
import svgComponents1Vue from '@/components/svgComponents1.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import slider from '@/components/homeNews.vue';
import about from '@/components/homeAbout.vue';
import home from '@/components/homeHome.vue';
bodyInit();
onMounted(() => {
  const scene = document.getElementById("scene");
  // 第二个参数传入配置对象
  const parallaxInstance = new Parallax(scene, {
    relativeInput: true,
  });
});
const view = ref(1);
const changeView = (index) => {
    view.value = index;
    let btn = document.querySelectorAll('.raceChange')
    let point = document.querySelectorAll('.raceChange p')
    if(index === 1){
      $(point[index-1]).css("color","#077AF9");
      $(point[1]).css("color","#eeeeee");
      $(point[2]).css("color","#eeeeee");
      $(btn[index-1]).css("border-bottom","3px solid #077AF9");
      $(btn[1]).css("border-bottom","3px solid #8a8a8a");
      $(btn[2]).css("border-bottom","3px solid #8a8a8a");
    }else if(index === 2){
      $(point[index-1]).css("color","#077AF9");
      $(point[0]).css("color","#eeeeee");
      $(point[2]).css("color","#eeeeee");
      $(btn[index-1]).css("border-bottom","3px solid #077AF9");
      $(btn[0]).css("border-bottom","3px solid #8a8a8a");
      $(btn[2]).css("border-bottom","3px solid #8a8a8a");
    }else if(index === 3){
      $(point[index-1]).css("color","#077AF9");
      $(point[0]).css("color","#eeeeee");
      $(point[1]).css("color","#eeeeee");
      $(btn[index-1]).css("border-bottom","3px solid #077AF9");
      $(btn[0]).css("border-bottom","3px solid #8a8a8a");
      $(btn[1]).css("border-bottom","3px solid #8a8a8a");
    }
}
const acc = ref([
  {
    "id": "11",
    "cat_no": "1",
    "title": "body03black",
    "price": 1100,
    "img": "body_03_black_1.png",
  },
  {
    "id": "22",
    "cat_no": "2",
    "title": "propellor02blue",
    "price": 250,
    "img": "propellor_02_blue_1.png",
  },
  {
    "id": "2",
    "cat_no": "1",
    "title": "body01blue",
    "price": 900,
    "img": "body_01_blue_1.png",
  },
])
const isOpen = ref(true)
const submitPrd = (index)=>{
  if(sessionStorage['prodInfo'] == null){
    sessionStorage['prodInfo']='';
  }
  sessionStorage.setItem("prodInfo",`{"id":"${acc.value[index].id}","cat_no":"${acc.value[index].cat_no}","title":"${acc.value[index].title}","price":${acc.value[index].price},"img":"${acc.value[index].img}"}`);
}
</script>

<template>
    <navComponentsVue :className="blue"/>
    <home />
<svglineComponentsVue :class="{svgWidth : isOpen}"/>
<svgComponents1Vue />
    <section class="sect1">
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
                        <img src="../assets/images/home/cusIcon1.png" alt="icon1">
                        <p>Drone body is placed on the 3 different axes around the camera.</p>
                    </div>
                    <div class="custIcon-wrap">
                        <img src="../assets/images/home/cusIcon2.png" alt="icon2">
                        <p>Drone Propeller have two counter clockwise motor</p>
                        <!-- <p>King is come back</p> -->
                    </div>
                    <div class="custIcon-wrap">  
                        <img src="../assets/images/home/cusIcon3.png" alt="icon3">
                        <p>Drone Motor provides stability through equalizing the turning force.</p>
                    </div>
                </div>
                <div class="customBtn">
                    <router-link to="/custom" class="btnFirst" id="btn1" data-title="Learn">
                        <span>More</span>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- <svgComponents1Vue :circle1="1"/> -->
    </section>
    <!-- <svglineComponentsVue :line1="1"/> -->
    
    <section class="sect2">
        <div class="accWrap">
            <div class="homeAcc">
                <h2>ACCESSORIES</h2>
                <p>See how we bring user feedbackinto our own product journey</p>
            </div>
            <div class="home-Acc">
                <div class="homeAccWrap1">
                    <div class="mainAcc">
                        <div class="homeAccWrap1-pic">
                            <img src="../assets/images/home/body_03_black_1.png" alt="body">
                        </div>
                        <div class="homeAccWrap1-txt">
                            <h5>Stay Flying Longer-Up to 60mins</h5>
                            <p>You can preview your design in real time.</p>
                            <div class="accBtn">
                            <router-link to="/shopInfo" class="btnFirst" id="btn1" data-title="Learn" @click="submitPrd(0)">
                                <span>More</span>
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
                            <img src="../assets/images/home/accs02.png" alt="propellor">
                        </div>
                        <div class="homeAccWrap2-txt">
                            <h4>Propeller PPK </h4>
                            <p>Propeller PPK is a processing solution designed to minimize time in the field</p>
                            <router-link to="/shopInfo" class="btnFirst" id="btn1" data-title="Learn" @click="submitPrd(1)">
                                <span>More</span>
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
                            <img src="../assets/images/home/body_01_blue_1.png" alt="body2">
                        </div>
                        <div class="homeAccWrap2-txt">
                            <h4>Drone Body</h4>
                            <p>The Drone will allow photographers to take HD pictures that are sharp and crisp.</p>
                            <router-link to="/shopInfo" class="btnFirst" id="btn1" data-title="Learn" @click="submitPrd(2)">
                                <span>More</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <about />
    <section class="contest sect3">
        <div class="contestTitle">
            <h2>RACE</h2>
        </div>
        <div class="homeRace">
            <transition name="tad" mode="out-in">
                <div class="homeContest" v-if="view === 1">
                    <div class="homeContest-pic">
                        <img src="../assets/images/home/contest.png" alt="contest1">
                    </div>
                    <div class="homeContest-txt">
                        <div class="contest-vue">
                            <h5>DRL Vegas Championship Race</h5>
                            <p>Thursday, Nov 17th 2022</p>
                            <router-link to="/race" class="btnFirst" id="btn1" data-title="Learn">
                                <span>More</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="homeContest" v-else-if="view === 2">
                    <div class="homeContest-pic">
                        <img src="../assets/images/home/race_01.jpg" alt="race2">
                    </div>
                    <div class="homeContest-txt">
                        <div class="contest-vue">
                            <h5>Miami 3-0-Fly Finals</h5>
                            <p>Sunday, Mar 26th 2023</p>
                            <router-link to="/race" class="btnFirst" id="btn1" data-title="Learn">
                                <span>More</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="homeContest" v-else-if="view === 3">
                    <div class="homeContest-pic">
                        <!-- <img src="/images/about/img_07.jpg" alt=""> -->
                        <img src="../assets/images/home/race_02.jpg" alt="race3">
                    </div>
                    <div class="homeContest-txt">
                        <div class="contest-vue">
                        <h5>SIM Series - Alpine Valley</h5>
                        <p>Tuesday, Dec 6th 2022</p>
                        <router-link to="/race" class="btnFirst" id="btn1" data-title="Learn">
                            <span>More</span>
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
.sect1 {
    background-image: url('../assets/images/home/2.png');
    background-size: 60%;
    background-position: 70% top;
    background-repeat: no-repeat;
    background-origin: border-box;
    @include l($l-breakpoint){
        background-size: 40%;
        .home-custom {
            width: 1200px;
        }
    }
    .home-custom{  
        align-items: center;
    }
}
.sect2 {
    padding: 50px 0 100px;
    background-image: url('../assets/images/home/5.png');
    background-size: 80% , 40%;
    background-position: 100% 5%,85% 97%;
    background-repeat: no-repeat, no-repeat;
    background-origin: border-box;
    @include l($l-breakpoint){
        // width: 1200px;
        background-size: 50% , 25%;
        background-position: 100% 20%, 90% 100%;
    }
    .accWrap {
        width: 95%;
        margin: 0 auto;
        @include l($l-breakpoint){
            width: 1200px;
       }
    }
}
.sect3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    background-image: url('../assets/images/home/5.png');
    background-size: 60%;
    background-position: 70% 50%;
    background-repeat: no-repeat;
    @include l($l-breakpoint){
        background-size: 45%;
        background-position: 100% 40%;
        margin: 0 auto;       
    }
}

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
      height: 600px;
    }
    &::before {
      content: "";
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 99.7%;
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
        width: 30%;
        img {
          width: 40%;
        }
        p {
          margin-top: 10px;
        }
      }
    }
  }
}
@include l($l-breakpoint) {
.custIcon{
  .custIcon-wrap{
    img {
      width: 20%;
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
    // margin: 20px;
    @include flexCenter($center);
    flex-direction: column;
  }
  .homeAccWrap1-txt {
    width: 90%;
    padding: 10px;
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
    .homeAccWrap2-txt {
      width: 90%;
      padding: 10px;
    }
  }
  .accSection-pic1 {
    background-image: url("../assets/images/home/homeAcc2.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .accSection-pic2 {
    background-image: url("../assets/images/home/homeAcc5.jpg");
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
    img {
      width: 100%;
      border-radius: 50%;
    }
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
  width: 90%;
  position: relative;
  .homeContest-pic {
    width: 100%;
    padding-top: 20px;
    img {
      width: 100%;
      height: 100%;
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
    display: flex;
    justify-content: center;
  position: relative;
  .buttonDiv {
    width: 90%;
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
        font-size: 600;
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
    }
  }
}
.buttonDiv .raceChange:nth-child(1){
  border-bottom: 3px solid $blue;
}
.raceChange:nth-child(1){
    p{
    color: #077af9;
  }
}
//電腦版
@include m($m-breakpoint) {
  .mainAcc {
    margin: 10px;
  }
}
@include l($l-breakpoint) {
  //cusotom
    .home-custom {
        padding-top: 100px;
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
            .custIcon {
              .custIcon-wrap  {
                img {
                  width: 20%;
                }
              }
            }
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
      margin: 20px;
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
  //contest
  .homeRace {
    width: 100%;
    .buttonDiv {
        width: 1200px;
        bottom: -15%;
    }
  }

  .homeContest {
    width: 1200px;
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
}
</style>
