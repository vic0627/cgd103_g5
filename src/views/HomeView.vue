<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
import navComponentsVue from '@/components/navComponents.vue';
onMounted(()=> {
//   const actionBtn = document.querySelector('.nav-btn-js');
//   actionBtn.addEventListener('click', () => {
//     if (!revealerNav.isRevealed()) {
//       revealerNav.reveal();
//       actionBtn.setAttribute('data-open', true);
//     } else {
//       revealerNav.hide();
//       actionBtn.setAttribute('data-open', false);
//     }
//   });
//   const customIcon = {
//     icon1: "@/assets/images/home/cusIcon1.png",
//     icon2: "@/assets/images/home/cusIcon2.png",
//     icon3: "@/assets/images/home/cusIcon3.png"
// };
});

// const customIcon = {
//     icon1: "@/assets/images/home/cusIcon1.png",
//     icon2: "@/assets/images/home/cusIcon2.png",
//     icon3: "@/assets/images/home/cusIcon3.png"
// };

    
</script>


<template>
    <navComponentsVue />

    <div class="home1">
        <h2>Mavic 2 Zoom</h2>
        <p>24~28 mm Optical Zoom Camers Ulitimate Flexibility</p>
        <div class="home1-btn">
            <a href="#" class="btn" id="btn1" data-title="Learn"  @mouseenter="MOUSE.mouseFocus()" @mouseleave="MOUSE.mouseRe()">
                <span>Learn</span>
            </a>
            <mouseComponentsVue />
            <a href="#" class="btn" id="btn2" data-title="Buy now"  @mouseenter="MOUSE.mouseFocus()" @mouseleave="MOUSE.mouseRe()">
                <span>Buy now</span>
            </a>
            <!-- <mouseComponentsVue /> -->
        </div>
        <div class="drone">
            <img src="../assets/images/home/drone5.png" alt="">
        </div>
    </div>

    <section>
        <div class="home-custom">
            <img src="@/assets/images/home/customize.jpeg" alt="customize">
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
                    <a href="#" class="btn" id="btn1" data-title="Learn"  @mouseenter="MOUSE.mouseFocus()" @mouseleave="MOUSE.mouseRe()">
                        <span>Learn</span>
                    </a>
                </div>
            </div>
          
        </div>
    </section>

    <section>
        <div class="homeAcc">
            <h2>ACCESSORIES</h2>
            <p>See how we bring user feedbackinto our own product journey</p>
        </div>
        <div class="home-Acc">
            <div class="homeAccWrap1">
                <div class="mainAcc">
                    <div class="homeAccWrap1-pic">
                        <img src="@/assets/images/home/homeAcc1.png" alt="">
                    </div>
                    <div class="homeAccWrap1-txt">
                        <h4>Stay Flying Longer-Up to 60mins</h4>
                        <p>You can preview your design in real time.</p>
                        <div class="accBtn">
                        <a href="#" class="btn" id="btn1" data-title="Learn"  @mouseenter="MOUSE.mouseFocus()" @mouseleave="MOUSE.mouseRe()">
                            <span>Learn</span>
                        </a>
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
                        <img src="@/assets/images/home/homeAcc3.png" alt="">  
                    </div>
                    <div class="homeAccWrap2-txt">
                        <h6>Drone Remote controller</h6>
                        <p>You can preview your design in real time.</p>
                    </div>
                    <div class="accBtn">
                        <a href="#" class="btn" id="btn1" data-title="Learn"  @mouseenter="MOUSE.mouseFocus()" @mouseleave="MOUSE.mouseRe()">
                            <span>Learn</span>
                        </a>
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
                        <img src="@/assets/images/home/homeAcc3.png" alt="">  
                    </div>
                    <div class="homeAccWrap2-txt">
                        <h6>Drone Remote controller</h6>
                        <p>You can preview your design in real time.</p>
                    </div>
                    <div class="accBtn">
                        <a href="#" class="btn" id="btn1" data-title="Learn"  @mouseenter="MOUSE.mouseFocus()" @mouseleave="MOUSE.mouseRe()">
                            <span>Learn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="homeAbout">
            <h2>ABOUT US</h2>
            <img src="@/assets/images/home/g5_logo_grey.png" alt="">
            <h3>RACING AND FREESTYLE</h3>
            <p>We are highly motivated to present GOOD SLEEP to as many people aspossible. Our task is not just selling pillows.We are fully committed to provide fulfilling sleep. Good sleep bringshappiness, energy, and smiles. It is a simple fact.</p>
            <!-- <div class="homeAbout-pic">
                <img src="@/assets/images/home/homeAbout.jpg" alt="">
            </div> -->
            <div class="aboutBtn">
                <a href="#" class="btn" id="btn1" data-title="Learn"  @mouseenter="MOUSE.mouseFocus()" @mouseleave="MOUSE.mouseRe()">
                    <span>Learn</span>
                </a>
            </div>
        </div>
    </section>

    <section>
        <div class="homeGame">
            <div class="homeGame-txt">
                <h2>GAME</h2>
                <h3>RACING AND FREESTYLE</h3>
                <div class="gameBtn">
                    <a href="#" class="btn" id="btn1" data-title="Learn"  @mouseenter="MOUSE.mouseFocus()" @mouseleave="MOUSE.mouseRe()">
                        <span>Learn</span>
                    </a>
                </div>
            </div>
            <video autoplay="" muted="" loop="" playsinline="">
                <source src="@/assets/images/home/banner.mp4" type="video/mp4">
            </video>
        </div>
    </section>

    <section>
        <div class="contestTitle">
            <h2>CONTEST</h2>
        </div>
        <div class="homeContest">
            <div class="homeContest-pic">
                <img src="@/assets/images/home/contest.png" alt="">
            </div>
            <div class="homeContest-txt">
                <h5>DRL Vegas Championship Race</h5>
                <p>Thursday, Nov 17th 2022</p>
                 <a href="#" class="btn" id="btn1" data-title="Learn"  @mouseenter="MOUSE.mouseFocus()" @mouseleave="MOUSE.mouseRe()">
                <span>Learn</span>
                </a>
            </div>
           
        </div>
    </section>

    <section class="newsSection">
        <div class="contestTitle">
            <h2>NEWS</h2>
        </div>
        <Carousel v-model="value" loop id="homeNews">
            <CarouselItem id="newSlider">
                <img src="../assets/images/home/dji1.jpg" :alt="news">         
            </CarouselItem>
            <CarouselItem id="newSlider">
                <img src="../assets/images/home/dji2.jpg" :alt="news">         
            </CarouselItem> 
            <CarouselItem id="newSlider">
                <img src="../assets/images/home/dji3.jpg" :alt="news">         
            </CarouselItem>
            <CarouselItem id="newSlider">
                <img src="../assets/images/home/dji4.jpg" :alt="news">         
            </CarouselItem> 
        </Carousel>
    </section>
</template>

<style lang="scss">

@import '@/sass/style.scss';
@import '@/css/reset.css';

$center: center;
$left: left;
$l-w:1200px;
@mixin titleStyle($center){
    text-align: $center;
}
@mixin divCenter($l-w, $center){
    width: $l-w;
    margin: 20px auto;
    text-align: $center;
}
@mixin flexCenter($center){
    display: flex;
    justify-content: $center;
}

.drone{
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
.home-custom {
    width: 90%;
    margin: 0 auto;
    position: relative;
    // height: 400px;
    &::before {
        content: "";
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        border-radius: $img-radius;
    }
    img {
        width: 100%;
        border-radius: $img-radius;
    }
    .custom-txt {
        position: absolute;
        top: 5%;
        left: 0;
        z-index: 2;
        @include divCenter(100%, $center);
        .homeCustom {
            @include titleStyle(($center))
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
                margin-top: 10px
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
        background: linear-gradient(98.29deg, #077AF9 10.1%, #9C4DD6 82.53%);
        border-radius: $img-radius;
        margin: 20px;
    }
    .homeAccWrap1-txt {
        width: 95%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .homeAccWrap1-pic {
        width: 95%;
        display: flex;
        justify-content: center;
        img {
            width: 80%;
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
        
        border-radius: $img-radius;
        .homeAccWrap2-pic {
            width: 95%;
            img {
                width: 100%;
                object-fit: cover;
            }
        }
        .accBtn {
            @include flexCenter($left)
        }
        .homeAccWrap2-txt {
            width: 95%;
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
    h2,h3,p {
        margin: 20px 0;
    }
    .aboutBtn {
        @include flexCenter($center);
    }
    .homeAbout-pic {
        position: absolute;
        top: 0;
        right: -90%;
        z-index: -1;
        img {
            width: 40%;
            border-radius: 50%;
            // background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
            box-shadow: inset 0px 0px 60px 80px #12181E;
            &::before {
                background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
                position: absolute;
            
            }
        }
     
    }
}

//GAME
.homeGame {
    text-align: center;
    position: relative;
    width: 90%;
    margin: 0 auto;
    @include flexCenter($center);
    video {
        width: 100%;
        border-radius: $img-radius;
    }
    .gameBtn {
        @include flexCenter($center)
    }
    .homeGame-txt {
        position: absolute;
        @include divCenter(90%, $center);
        z-index: 2;
    }
}

//CONTEST
.contestTitle {
    @include titleStyle($center);
}
.homeContest{
    width: 100%;
    position:relative;
    .homeContest-pic {
        width: 100%;
        padding-top: 20px;
        img {
            width: 100%;
            border-radius: $img-radius;
        }
    }
    .homeContest-txt {
        padding: 20px;
        width: 100%;
        background: #0F1F3D;
        border-radius: $img-radius;
        position: absolute;
        z-index: 2;
        bottom: -20%;
        left: 0;
    }
}
//NEWS
.newsSection {
    margin-top: 130px;
}
#newSlider {
    display: flex;
    justify-content: center;
    img {
        width: 90%;
        object-fit: cover;
        border-radius: $img-radius;
    }
}

@include l($l-breakpoint) {
    //cusotom
    .custom-txt {
        @include divCenter($l-w, $center);
        .homeCustom {
            @include titleStyle($center);   
        }
    }
    //acc
    .homeAcc {
        @include divCenter($l-w, $left);
        width:1200px
    }
    .homeAbout {
        @include divCenter(900px, $center);
    }
    .homeAccWrap1 {
        width: 66.66666%;
        .mainAcc {
            display: flex;
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



    //game
    .homeGame {
        @include divCenter($l-w, $center);
    }
    //contest
    .homeContest {
        @include divCenter($l-w, $left);
        .homeContest-pic {
            width: 60%;
        }
        .homeContest-txt {
            width: 50%;
            left: 50%;
            bottom: -10%;
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
