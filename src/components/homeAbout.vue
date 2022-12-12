<script setup>
import { ref, onMounted, reactive,onUnmounted } from 'vue';
import $ from 'jquery';
import {gsap, TweenMax,Elastic,Sine,TimelineLite,TweenLite,Circ,Back,TimelineMax} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger.js';

onMounted(()=> {
    function animation() {
    gsap.registerPlugin(ScrollTrigger);
  var title1 = new TimelineMax();
  title1.staggerFromTo(".about", 3, {
    // scrollTrigger:{
    //     trigger: ".about",
    //     scrub: 0.5
    // },
    ease: Back.easeOut.config(1.7),
    opacity: 0,
    bottom: -120},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}
animation();
});


</script>
<template>
    <section class="about">
        <h2>ABOUT US</h2>
        <div class="about-txt">
            <div class="about-title">
                <h2 class="title">“ We will change the world</h2>
                <h2 class="title">with our major trust</h2>
                <h2 class="title">and brave action.”</h2>
            </div>
            <div class="about-p">
                <div class="content">
                    <h4>RACING AND FREESTYLE</h4>
                    <p>We are highly motivated to present GOOD SLEEP to as many people aspossible. Our task is not just selling pillows.We are fully committed to provide fulfilling sleep. Good sleep bringshappiness, energy, and smiles. It is a simple fact.</p>
                    <div class="aboutBtn">
                <router-link to="/about" class="btnFirst" id="btn1" data-title="Learn">
                    <span>Learn</span>
                </router-link>
            </div>
                </div>
            </div>
            
        </div>
        <div class="about-pic">
            <img src="../assets/images/home/about.jpg" alt="">
        </div>
    </section>
    
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';



    .about {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        justify-content: flex-end;
        position: relative;
        @include l($l-breakpoint){
            width: 1200px;
            justify-content: center;
        }
        
    }
    h2 {
        // text-align: center;
        width: 100%;
        // padding-bottom: 50px;
    }
    .about > h2 {
        text-align: center;
        padding-bottom: 20px;
        @include l($l-breakpoint){
            padding-bottom: 50px;   
        }
    }
    .about-txt {
        width: 97.5%;
        position: relative;
        @include l($l-breakpoint){
            width: 47.5%;
            display: flex;
        }
        .about-title {
            // position: absolute;
            left: 0;
            // top: 10%;
            width: 100%;
            @include s($s-breakpoint){
                width: 80%;
                margin: auto;
            }
            @include l($l-breakpoint){
            position: absolute;
                width: 1000px;
                left: 10%;
            }            
            h2 {
                margin: 20px;
                font-size: 28px;
                @include m($m-breakpoint){
                    font-size: 40px;
                }
                @include l($l-breakpoint){
                    font-size: 64px;
                }
            }   
        }
        .about-p {
            // height: 100%;
            // margin: 60px 10px;
            // position: absolute;
            // bottom: 0;
            display: flex;
            align-items: flex-end;
            h4 {
                margin: 30px 0;
            }
            p {
                word-spacing: 5px;
            }
        }
    }
    .about-pic {
        width: 70%;
        position: absolute;
        z-index: -1;
        top: 10%;
        @include l($l-breakpoint){
            width: 47.5%;
            position: relative;
        }
        img {
            width: 100%;
            border-radius: $img-radius;
            object-fit: cover;
            @include s($s-breakpoint){
                width: 60%;
            }
            @include l($l-breakpoint){
                width: 100%;
            }
        }
    }
    .about-title h2:nth-child(2){
        direction: rtl;
    }
</style>
