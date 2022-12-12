<script setup>
import { ref, onMounted, reactive } from 'vue';
import $ from 'jquery';
import {gsap, TweenLite } from 'gsap';
onMounted(()=> {
let pic = document.querySelector('.slide');
  $(".p-1").click(function(){
    $(pic).slideToggle(500);
});
$(".p-2").click(function(){
    $('.slide1').slideToggle(500);
});
$(".p-3").click(function(){
    $('.slide2').slideToggle(500);
});
$(".p-4").click(function(){
    $('.slide3').slideToggle(500);
});

});


</script>

<template>
<section class="wrapper">
    <div class="project-list">
        
        <h2>News</h2>
        <div class="project p-1">
            <div class="project-title"><h3>Motionland</h3></div>
            <div class="project-categ"><p>2022/11/27</p></div>
            <div class="slide">
                <div class="slide-wrap">
                    <div class="slide-txt">
                        <p>qwfqf;wmfqf</p>
                        <p>eqfjqfqjlwq</p>
                    </div>
                    <div class="slide-pic">
                        <img src="../assets/images/home/dji1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="project p-2">
            <div class="project-title"><h3>Focus Reactive</h3></div>
            <div class="project-categ"><p>2022/09/18</p></div>
            <div class="slide1">
                <div class="slide-wrap">
                    <div class="slide-txt">
                        <p>qwfqf;wmfqf</p>
                        <p>eqfjqfqjlwq</p>
                    </div>
                    <div class="slide-pic">
                        <img src="../assets/images/home/dji1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="project p-3">
            <div class="project-title"><h3>Aspect</h3></div>
            <div class="project-categ"><p>2022/08/12</p></div>
            <div class="slide2">
                <div class="slide-wrap">
                    <div class="slide-txt">
                        <p>qwfqf;wmfqf</p>
                        <p>eqfjqfqjlwq</p>
                    </div>
                    <div class="slide-pic">
                        <img src="../assets/images/home/dji1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="project p-4">
            <div class="project-title"><h3>Logo Mark</h3></div>
            <div class="project-categ"><p>2022/07/23</p></div>
            <div class="slide3">
                <div class="slide-wrap">
                    <div class="slide-txt">
                        <p>qwfqf;wmfqf</p>
                        <p>eqfjqfqjlwq</p>
                    </div>
                    <div class="slide-pic">
                        <img src="../assets/images/home/dji1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
@import '@/css/reset.css';
.project-title h1 {
  font-weight: 300;
}


.project-categ {
  font-weight: lighter;
}
.wrapper {
  width: 80%;
  margin: 180px auto;
  height: 100%;
  padding-top: 70px;
}
.project-list {
    text-align: center;
    h2 {
        margin: 10px;
    }
}
.project {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-basis: 1;
  position: relative;
  z-index: 2;
  color: white;
  cursor: pointer;
  mix-blend-mode: difference;
  
}
.slide,.slide2,.slide3,.slide1 {
    display: none;
    .slide-wrap {
    width: 100%;
    display: flex;
    .slide-pic {
        width: 40%;
        img {
            border-radius: $img-radius;
            width: 100%;
        }
    }
    .slide-txt {
        width: 60%;
        margin: auto;
    }
}
}


.project-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
