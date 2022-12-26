<script setup>
import { ref, onMounted, reactive } from 'vue';
import $ from 'jquery';
import {gsap, TweenMax,Expo } from 'gsap';
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
//----------------------------
let $body = $('body'),
	$panel = $('.panel'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col');

function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$body.mousemove(function(e) {
		tilt(e.pageX, e.pageY) 
	});
};

function tilt(cx, cy) {
	let sxPos = (cx / 800*100 - 50)*2 ;
	let syPos = (cy / 1200*100 - 50)*2;
	TweenMax.to($pContent, 2, {
		rotationY: -0.03* sxPos,
		rotationX: 0.009 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -400",
		ease: Expo.easeOut
	});
	TweenMax.to($img, 2, {
		rotationY: -0.03 * sxPos,
		rotationX: 0.009 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -200",
		ease: Expo.easeOut
	});
}

$body.mouseleave(function() {
	tilt($body.width()/2, $body.height()/2);
})
initTilt();

console.clear();
});


</script>

<template>

<section class="container">
    <div class="wrap">
        <div class="panel">
            <div class="panel__img-col">
                <!-- <img src="../assets/images/home/dji2.jpg" alt="" class="panel__img"> -->
                <img src="@/dist/assests/dji2.jpg" alt="" class="panel__img">
            </div>
            <div class="panel__content-col">
                <div class="panel__content">
                    <div class="panel__text">
                        <h2 class="panel__title">NEWS</h2>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    
    <section class="wrapper">
        <div class="project-list">
            <!-- <h2>News</h2> -->
            <div class="project p-1">
                <div class="project-title"><h3>SkyPixel 8th</h3></div>
                <div class="project-categ"><p>2022/11/27</p></div>
                <div class="slide">
                    <router-link to="/articleView">
                    <div class="slide-wrap">
                        <div class="slide-txt">
                            <p>Frequently Asked Questions About Time Travel</p>
                        </div>
                        <div class="slide-pic">
                            <img src="@/dist/assests/news_01.jpg" alt="new01" class="panel__img">
                        </div>
                    </div>
                    </router-link>
                </div>
            </div>
            <div class="project p-2">
                <div class="project-title"><h3>Fjallraven</h3></div>
                <div class="project-categ"><p>2022/09/18</p></div>
                <div class="slide1">
                    <router-link to="/articleView">
                    <div class="slide-wrap">
                        <div class="slide-txt">
                            <p>Drones to track Walsall's off-road bikers</p>
                        </div>
                        <div class="slide-pic">
                            <img src="@/dist/assests/news_02.jpg" alt="new02" class="panel__img">
                        </div>
                    </div>
                    </router-link>
                </div>
            </div>
            <div class="project p-3">
                <div class="project-title"><h3>Mens Casual</h3></div>
                <div class="project-categ"><p>2022/08/12</p></div>
                <div class="slide2">
                    <router-link to="/articleView">
                    <div class="slide-wrap">
                        <div class="slide-txt">
                            <p>A quintessentially Irish way to travel</p>
                        </div>
                        <div class="slide-pic">
                            <img src="@/dist/assests/news_03.jpg" alt="new03" class="panel__img">
                        </div>
                    </div>
                    </router-link>
                </div>
            </div>
            <div class="project p-4">
                <div class="project-title"><h3>Peak District</h3></div>
                <div class="project-categ"><p>2022/07/23</p></div>
                <div class="slide3">
                    <router-link to="/articleView">
                    <div class="slide-wrap">
                        <div class="slide-txt">
                            <p>Adult social care reform, Energy credit balances, Revolut fraud victims</p>
                        </div>
                        <div class="slide-pic">
                            <img src="@/dist/assests/dji4.jpg" alt="new04" class="panel__img">
                        </div>
                    </div>
                    </router-link>
                </div>
                
            </div>
        </div>
    </section>
</section>

</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
@import '@/css/reset.css';
.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 150px;
}

h3 {
    font-size: 24px;
}


.wrapper {
  width: 90%;
  margin: 10px auto;
  height: 100%;
  padding-bottom: 70px;
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
//   mix-blend-mode: differ: ;ence;
  
}
.slide,.slide2,.slide3,.slide1 {
    display: none;
    &:hover {
        .slide-wrap  {
            .slide-pic{
                img {
                   transform: scale(1.1);
                    transition: all 0.5s linear;
                }
            }            
        }
    }
    .slide-wrap {
    width: 100%;
    display: flex;
    .slide-pic {
        border-radius: $img-radius;
        overflow: hidden;
        width: 40%;
        img {
             transition: all 0.5s linear;
            border-radius: $img-radius;
            width: 100%;
        }
    }
    .slide-txt {
        width: 60%;
        margin: auto;
        text-align: left;
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
//------------------------
.wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
    margin: auto;
}

.panel {
	position: relative;
	display: flex;
	width: 100%;
	max-width: 1200px;
	height: 300px;
	user-select: none;
	pointer-events: none;	
}

.panel__content-col {
	flex-basis: 10%; 
}

.panel__content {
	position: absolute;
	top: 40%;
	left: 55%;
	z-index: 2;
}

.panel__text {
	display: inline-block;
	text-align: right;
}

.panel__img-col {
	flex-basis: 90%;
  	box-shadow: 0px 20px 100.28px 8.72px rgba(0, 0, 0, 0.35);
    img {
     border-radius: 10px;
   }
}

.panel__img-col {
	width: 100%;
}

.panel__img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
@include l($l-breakpoint) {
    .container {
        width: 1200px;
        margin: 100px auto;
    }
    .wrap {
        width: 47.5%;
    }
    .wrapper {
        width: 47.5%;
    }
    .panel__content-col {
	flex-basis: 25%; 
    }
    .panel__img-col {
	flex-basis: 70%;
    }
}
</style>
