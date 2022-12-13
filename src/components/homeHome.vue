<script setup>
import { ref, onMounted, reactive } from 'vue';
import $ from 'jquery';
import {gsap, TweenMax,Elastic,Sine,TimelineLite,TweenLite,Circ,Back,} from 'gsap';
import Parallax from 'parallax-js';
onMounted(()=> {
const scene = document.getElementById("scene");
  // 第二个参数传入配置对象
  const parallaxInstance = new Parallax(scene, {
    relativeInput: true,
  });

var myTween=TweenMax.fromTo('.text', 2, 
    {x: 3000,},
    {x: -300,});

var line = $('.line');

var tl = new TimelineLite({
			onComplete: function(){
				tl.pause(1);
			}
		});
TweenLite.defaultEase = Circ.easeInOut;
var time = 0.9;
var y = 100;
	tl.add ( TweenMax.staggerFromTo (
		line, time,
			{
				opacity: 0,
				y:y,
                scale: 0.4,
			},
			{	
				opacity: 1,
				y: 0,
                scale: 1,
			},
		2 ))
	tl.add ( TweenMax.staggerTo (
		line, time,
			{
				delay: time,
				opacity: 0,
				y: -y,
			},
		2 ), 1.3)
});



// gsap.registerPlugin(SplitText);
</script>
<template>
    <div class="home">
        <div class="text"><h1>Ulitimate Flexibility</h1></div>
        <div id="scene">
            <div class="drone layer" data-depth="0.1">
                <img src="../assets/images/home/fly2.png" alt="">
            </div>
            <!-- <svgComponents1Vue class="layer" data-depth="0.5" /> -->
        </div>
        <div class="home-title line">
            <h2>EFPV EGALE 5</h2>
        </div>
       <div class="home-title line">
            <h2>A Camera for Capturing the Best</h2>
        </div>
        <div class="home-title line">
            <h2>Upgraded Transmission System</h2>
        </div>
        <div class="home-title line">
            <h2>A Pro Codec for Pro Creation</h2>
        </div>
        <div class="home1-btn">
            <router-link to="/showcase" class="btnFirst" id="btn1" data-title="Learn">
            <span>Learn</span></router-link>
            <router-link to="/shopInfo" class="btnSecond" id="btn2" data-title="Buy">
            <span>Buy</span></router-link>
        </div>
    </div>
     <!-- <div class="scroll">
            <p>Scroll down</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(238, 238, 238, 1);transform: ;msFilter:;"><path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path><path d="M11 6h2v6h-2z"></path></svg>
        </div> -->
        
</template>

<style scoped lang="scss">
@import "@/sass/style.scss";
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;1,100&display=swap');
.home1-btn {
    position: absolute;
    width: 100%;
    // left: 39%;
    top: 80%;
    #btn1{
        @include secondBtn(100px);
        margin: 10px;
    }
    #btn2 {
        @include primaryBtn(100px);
        margin: 10px;
    }
    @include l($l-breakpoint){
        font-size: 80px;
        // left: 39%;
        bottom: 30%;
    }
}
.text h1 {
    font-size: 300px;
    letter-spacing: 20px;
    color: #ccc;
    font-family: "poppins";

}

.home {
    padding-top: 80px;
    margin: 0 auto;
    overflow-x: hidden;
    position: relative;
    width: 100vw;
    @include l($l-breakpoint){
        padding-top: 160px;
    }
    // background: #12181E;
    .text {
        width: 5000px;
            h1 {
            color: transparent;
            -webkit-text-stroke: 5px #46464B;
            // outline-color: #46464B;。
            font-weight: bold;
            // filter: blur(1px);
        }
    }
}
#scene {
    width: 90%;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin:auto;
    top: 40%;
    @include l($l-breakpoint){
        // padding-top: 180px;
        position: relative;
    }
    .drone {
        text-align: center;
        display: flex;
        justify-content: center;
            img {
                width: 90%;
                @include l($l-breakpoint){
                    width: 100%;
                }
            }
    }
}
 .home-title {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 53%;
        @include l($l-breakpoint){
            top:58%;
        }
        h2 {
            font-size: 32px;
            background: -webkit-linear-gradient(98.29deg, #077AF9 10.1%, #9C4DD6 82.53%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: #978170;
            font-weight: 600;
            text-align: center;
            letter-spacing: 2px;
            @include l($l-breakpoint){
                font-size: 80px;
            }
        }   
    }

    
.line {
	position: absolute;
	opacity: 0; 
}
</style>
