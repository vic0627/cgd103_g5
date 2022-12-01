<script setup>
import { ref, onMounted, reactive } from 'vue';
import $ from 'jquery';
import Parallax from 'parallax-js';
import navComponentsVue from '@/components/navComponents.vue';
import svglineComponentsVue from '@/components/svglineComponents.vue';


onMounted(()=> {

    const scene = document.getElementById('scene');
    // 第二个参数传入配置对象
    const parallaxInstance = new Parallax(scene, {
    relativeInput: true
    });


});
const raceContent = reactive([
    {
        "id": 1,
        "title": "SkyPixel 8th style free",
        "image": "/images/about/img_05.jpg",
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "image": "/images/about/img_06.jpg",
    },
    {
        "id": 3,
        "title": "SMens Cotton Jacket",
        "image": "/images/about/img_07.jpg",
    },
])
const view = ref(1);
const changeView = (index) => {
    view.value = index
}

</script>


<template>
    <navComponentsVue />

    <div class="home1">
        <h2>Mavic 2 Zoom</h2>
        <p>24~28 mm Optical Zoom Camers Ulitimate Flexibility</p>
        <div class="home1-btn">
            <a href="#" class="btnFirst" id="btn1" data-title="Learn">
                <span>Learn</span>
            </a>
            <a href="#" class="btnSecond" id="btn2" data-title="Buy now">
                <span>Buy now</span>
            </a>       
        </div>
        <div id="scene">
            <div class="drone layer" data-depth="0.1">
                <img src="../assets/images/home/fly2.png" alt="">
            </div>
        </div>
    </div>

    <svglineComponentsVue />
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
                    <a href="#" class="btn" id="btn1" data-title="Learn">
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
                        <h5>Stay Flying Longer-Up to 60mins</h5>
                        <p>You can preview your design in real time.</p>
                        <div class="accBtn">
                        <a href="#" class="btn" id="btn1" data-title="Learn">
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
                        <a href="#" class="btn" id="btn1" data-title="Learn">
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
                        <a href="#" class="btn" id="btn1" data-title="Learn">
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
            <img src="../assets/images/home/g5_logo_grey.png" alt="">
            <h3>RACING AND FREESTYLE</h3>
            <p>We are highly motivated to present GOOD SLEEP to as many people aspossible. Our task is not just selling pillows.We are fully committed to provide fulfilling sleep. Good sleep bringshappiness, energy, and smiles. It is a simple fact.</p>
            <!-- <div class="homeAbout-pic">
                <img src="@/assets/images/home/homeAbout.jpg" alt="">
            </div> -->
            <div class="aboutBtn">
                <a href="#" class="btn" id="btn1" data-title="Learn">
                    <span>Learn</span>
                </a>
            </div>
        </div>
    </section>

    <section>
        <div class="homeGame">
            <div class="homeGame-txt">
                <h2>GAME</h2>
                <h6>RACING AND FREESTYLE</h6>
                <div class="gameBtn">
                    <a href="#" class="btn" id="btn1" data-title="Learn">
                        <span>Learn</span>
                    </a>
                </div>
            </div>
            <video autoplay="" muted="" loop="" playsinline="">
                <source src="@/assets/video/home/banner.mp4" type="video/mp4">
            </video>
        </div>
    </section>

    <section>
        <div class="contestTitle">
            <h2>CONTEST</h2>
        </div>
        <div class="homeRace">
            <div class="homeContest" v-if="view === 1">
                <div class="homeContest-pic">
                    <img src="@/assets/images/home/contest.png" alt="">
                </div>
                <div class="homeContest-txt">
                    <h5>DRL Vegas Championship Race</h5>
                    <p>Thursday, Nov 17th 2022</p>
                        <a href="#" class="btn" id="btn1" data-title="Learn">
                    <span>Learn</span>
                    </a>
                </div>
            </div>
            <div class="homeContest" v-else-if="view === 2">
                <div class="homeContest-pic">
                    <img src="/images/about/img_06.jpg" alt="">
                </div>
                <div class="homeContest-txt">
                    <h5>Miami 3-0-Fly Finals</h5>
                    <p>Sunday, Mar 26th 2023</p>
                        <a href="#" class="btn" id="btn1" data-title="Learn">
                    <span>Learn</span>
                    </a>
                </div>
            </div>
            <div class="homeContest" v-else-if="view === 3">
                <div class="homeContest-pic">
                    <img src="/images/about/img_07.jpg" alt="">
                </div>
                <div class="homeContest-txt">
                    <h5>SIM Series - Alpine Valley</h5>
                    <p>Tuesday, Dec 6th 2022</p>
                        <a href="#" class="btn" id="btn1" data-title="Learn">
                    <span>Learn</span>
                    </a>
                </div>
            </div>
            <div class="buttonDiv">
                <button @click="changeView(1)" class="raceChange"><p>DRL</p></button>
                <button @click="changeView(2)" class="raceChange"><p>Miami</p></button>
                <button @click="changeView(3)" class="raceChange"><p>SIM series</p></button>
            </div>
        </div>
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
    display: flex;
    align-content: center;
    height: 600px;
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
        height: 100%;
        border-radius: $img-radius;
    }
    }
    .custom-txt {
        position: relative;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: $img-radius;
        .homeAccWrap2-pic {
            width: 95%;
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
    height: 600px;  
    @include flexCenter($center);
    video {
        width: 100%;
        height: 600px;
        object-fit: cover;
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
            object-fit: cover;
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
        width:1200px
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
        .raceChange {
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding-top: 10px;
            padding:  10px 20px 5px;
            position: relative;
            border-bottom: 3px solid #8a8a8a;
            position: relative;
            transition: all .3s cubic-bezier(.2, 0, 0, 1);
            z-index: 1;
            p {
                &:hover {
                    color: $blue;
                }
                &:focus  {
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
                transition: all .3s cubic-bezier(.2, 0, 0, 1);
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
    // .buttonDiv {
    //     border-bottom: 3px solid #ccc
    // }
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
