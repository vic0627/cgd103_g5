<script>
import $ from 'jquery';
import { ref, onMounted } from 'vue';
import all from '../components/allproductComponents.vue';

const imgs = ref(
    ["id: 1, src:'../src/assets/images/shop/accs01.png'",
    "id: 2, src:'../src/assets/images/shop/accs02.png'",
    "id: 3, src:'../src/assets/images/shop/accs03.png'",
    "id: 4, src:'../src/assets/images/shop/accs04.png'"]
)
export default {
    components:{
        all
    }
}
onMounted(()=>{

    controls();

    GethashID();

    resize();
})

//slide func
function controls(){
    $(this).addClass('selected').siblings('.btn').removeClass('selected');
    $('.step_container').animate({
        top: -(($('.step_container').height() * $(this).index() )-80* $(this).index())
    },450);
    runAnim();
}

const runAnim = ()=>{
    const button = document.querySelectorAll('.btn');

    if(button){
        for(var i = 0;i< button.length ; i++){
            button[i].addEventListener('click',controls,false);
        }
    }
}

//tab func
// function GethashID(hashIDName){
//     if(hashIDName){
//         $('.tab li').find('a').each(function(){
//             var idName = $(this).attr('href');
//             if(idName == hashIDName){
//                 var parentElm = $(this).parent();
//                 $('.tab li').removeClass("active");
//                 $(parentElm).addClass("active");
//                 $('.area').removeClass("is-active");
//                 $(hashIDName).addClass("is-active")
//             }
//         });
//     }
// }



// $('.tab a').on('click',function(){
//     var idName = $(this).attr('href');
//     GethashID(idName);
//     return false;
// })
// $(window).on('load',function(){
//     $('.tab li:first-of-type').addClass("active");
//     $('.area:first-of-type').addClass("is-active");
//     var hashName = location.hash;
//     GethashID(hashName);
// })
</script>

<template>
     <!-- banner -->
    <section class="banner">
        <h2>
            <span>NEW ARRIVAL</span><br>
            <span>EFVP Mavic 3 Classic</span>
        </h2>
        <div class="img_box">
            <img src="../assets/images/shop/new.jpg" alt="newProduct">
        </div>
        <a class="buttons">
            <span class="btnPrimary" >Learn More</span>
        </a>
    </section>
    <!-- step -->
    <section class="step_wrapper">
            <h2><span>CUSTOMIZE STEP</span></h2>
        <div class="step_container">
            <div class="slide active">
                1. Choose your own color and wing
            </div>
            <div class="slide">
                2. Choose your own color and wing
            </div>
            <div class="slide">
                3. Choose your own color and wing
            </div>
            <div class="slide">
                4. Choose your own color and wing
                <a class="btnSecond">Learn More</a>
            </div>
        </div>
            <!-- controller -->
            <nav class="controls" >
                <button type="" class="btn">step 1</button>
                <button type="" class="btn">step 2</button>
                <button type="" class="btn">step 3</button>
                <button type="" class="btn">step 4</button>
            </nav>
    </section>
    <!-- category -->
    <section class="category">
        <a class="c c1" href="#all_product">
            <h4>ALL PRODUCT</h4>
        </a>
        <a class="c c1" href="#accessories">
            <h4>ACCESSORIES</h4>
        </a>
        <a class="c c1" href="#bundle">
            <h4>BUNDLE</h4>
        </a>
    </section>
    <!-- all product -->
    <section class="all_product" id="all_product">
        <all />
    </section>

    <!-- video -->
    <section class="video">
        <h2><span>FEEL FREEDOM IN THE SKY</span></h2>
        <p><span>VDAF</span> visual focus technology</p>
    </section>
    <!--accessories  -->
    <section class="accessories" id="accessories">
        <h2><span>ACCESSORIES</span></h2>
        <div class="card_slider">
            <div class="card_slider_items">
                <div class="card_slider_item">
                    <div class="poly"><span>NEW</span></div>
                    <div class="tra"></div>
                    <div class="product_box">
                        <div class="img_box">
                            <img src="../assets/images/shop/accs01.png" alt="">
                            <div class="spotlightFront"></div>
                            <div class="spotlightBack"></div>                        
                        </div>
                        <div class="detail_box">
                            <div class="title">EFVP Mavic 3 Classic</div>
                            <div class="price">USD$999</div>
                            <div class="buttons">
                                <a class="btnPrimary" >BUY NOW</a>
                                <a class="btnSecond" >Learn More</a>
                            </div>                    
                        </div>
                    </div>
                </div>
                <div class="card_slider_item">
                    <div class="product_box">
                        <div class="img_box">
                            <img src="../assets/images/shop/accs02.png" alt="">
                            <div class="spotlightFront"></div>
                            <div class="spotlightBack"></div>                        
                        </div>
                        <div class="detail_box">
                            <div class="title">EFVP Mavic 3 Classic</div>
                            <div class="price">USD$999</div>
                            <div class="buttons">
                                <a class="btnPrimary" >BUY NOW</a>
                                <a class="btnSecond" >Learn More</a>
                            </div>                    
                        </div>
                    </div>
                </div>
                <div class="card_slider_item">
                    <div class="product_box">
                        <div class="img_box">
                            <img src="../assets/images/shop/accs03.png" alt="">
                            <div class="spotlightFront"></div>
                            <div class="spotlightBack"></div>                        
                        </div>
                        <div class="detail_box">
                            <div class="title">EFVP Mavic 3 Classic</div>
                            <div class="price">USD$999</div>
                            <div class="buttons">
                                <a class="btnPrimary" >BUY NOW</a>
                                <a class="btnSecond" >Learn More</a>
                            </div>                    
                        </div>
                    </div>
                </div>
                <div class="card_slider_item">
                    <div class="product_box">
                        <div class="img_box">
                            <img src="../assets/images/shop/accs01.png" alt="">
                            <div class="spotlightFront"></div>
                            <div class="spotlightBack"></div>                        
                        </div>
                        <div class="detail_box">
                            <div class="title">EFVP Mavic 3 Classic</div>
                            <div class="price">USD$999</div>
                            <div class="buttons">
                                <a class="btnPrimary" >BUY NOW</a>
                                <a class="btnSecond" >Learn More</a>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- bundle -->
    <section class="bundle" id="bundle">
        <h2><span>BUNDLE</span></h2>
        <div class="wrapper">
            <ul class="tab">
                <li><a href="#beginner">beginner</a></li>
                <li><a href="#veteran">veteran</a></li>
            </ul>
        </div>

        <div id="beginner" class="area active">
            <div class="card_container">
                <div class="card">
                    <div class="pic">
                        <img src="../assets/images/shop/bundle_01.png" alt="">
                    </div>
                    <h3><span>EFVP Mavic bundle</span></h3>
                    <p class="price">USD$333</p>
                    <a class="buttons">
                        <span class="btnPrimary" >BUY NOW</span>
                    </a>
                </div>
            </div>
        </div>
        <div id="veteran" class="area">
            <div class="card_container">
                <div class="card">
                    <div class="pic">
                        <img src="../assets/images/shop/bundle_01.png" alt="">
                    </div>
                    <h3><span>EFVP Mavic bundle</span></h3>
                    <p class="price">USD$333</p>
                    <a class="buttons">
                        <span class="btnPrimary" >BUY NOW</span>
                    </a>
                </div>
            </div>
        </div>    
    </section>

</template>

<style scoped lang="scss">
@import '@/sass/style.scss';

*{
    // outline: 1px solid black;
}
//banner
.banner{
    width: 100%;
    height: 500px;
    position: relative;
    
    h2{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        padding: 20px 0;
        margin: 0 auto;
        span{
            &:first-child{
                font-weight: bold;
            }
            font-size: $caption-s-h2;
            max-width: 200px;
            color: #444;
            @include m($m-breakpoint) {
                font: $caption-m-h2;
                font-weight: normal;
            }
            @include l($l-breakpoint) {
                font: $caption-l-h2;
                font-weight: normal;
            }
        }
    }
    .img_box{
        max-height: 500px;
        img{
            width: 100%;
            height: 100vh;
            object-fit: cover;
        }
    }
    .buttons{
        width: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        background-color: transparent;
        border: none;
        .btnPrimary{
            font: $caption-s-span;
            @include primaryBtn(100px);
                margin: 20px;
            @include m($m-breakpoint) {
                margin: 0;
            }
        }
    }
}
//step
.step_wrapper{
    width: 100%;
    height: 500px;
    background-image: url('../assets/images/shop/bgImg1.PNG');
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    background-position: center;
    position: relative;
    margin: 50px 0 0 0;
    h2{
    width: 100%;
    text-align: center;
    margin: 0 auto;
    span{
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
    .step_container{
        position: relative;
        // top: 20px;
        max-width: 1000px;
        max-height: 500px;
        margin: 0 auto;
        // overflow: hidden;
        .slide{
            background-color: #44444480;
            box-shadow: 4px 10px 10px #fff;
            max-width: 1200px;
            height: 400px;
            padding: 7rem 0 0 0 ;
            margin: 10px 30px ;
            box-sizing: border-box;
            color: $txt-color;
            text-align: center;
            font: $caption-s-h4;
            z-index: 10;
            &:last-child{
                .btnSecond{
                    @include secondBtn(100px);
                    margin: 100px;
                }    
            }
        }
    }
    .controls{
        position: absolute;
        bottom: 60px;
        right: 40px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        button{
            background-color: transparent;
            border: none;
            color: #cccccc80;
            &:before{
                content: "| ";
                opacity:0.5;
            }
            margin: 10px 0;
        }
        .selected{
            color: $fff;
            transform: scale(1.8);
            opacity:1;
        }
    }
}
// category
.category{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 100px 0;
    overflow: hidden;
    .c{
        padding: 10px;
        text-align: center;
        h4{
            width: 300px;
            background-color: #12181E;
            border-radius: 50px;
            box-shadow: 0 0 15px $blue;
        }
    }
}
//all product
.all_product{
    width: 100%;
}
//AD
.video{
    width: 100%;
    height: 500px;
    object-position: center;
    background: url(../assets/video/shop/fvp_video.gif);
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(1.0);
    h2{
        width: 100%;
        height: 350px;
        position: relative;
        margin:0 auto;
        // background-color: #44444480;
        span{  
            font: $caption-s-h4;  
            // color: #444; 
            font-weight: bold; 
            width: 324px;
            height: 0;
            position: absolute;
            top: 100px;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
    }
    p{
        // width: 100%;
        text-align: center;
        margin-top: -50px;
        // margin-left: 10px;
        color: $fff;
        span{
            overflow: hidden;
            font-size: $caption-s-h2;
            color: $brown;
            font-weight: bold;
        }
    }
}
//accessories
.accessories{
    width: 100%;
    h2{
        width: 100%;
        text-align: center;
        margin: 0 auto;
    span{
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
    .card_slider{
        max-width: 1200px;
        height: 850px;
        overflow: hidden;
        margin: 0 auto;
        .card_slider_items{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            grid-template-rows: repeat(3,1fr);
            // max-width: 320px;

            .card_slider_item{
                // max-width: 360px;
                padding: 10px;
                margin: 10px;
                background-color: #232A3E;
                box-sizing: border-box;
                position: relative;
                &:first-child{
                    grid-column:1/2 ;
                    grid-row:1/3 ;
                }
                &:nth-child(2){
                    grid-column:2/4 ;
                    grid-row:1/2 ;
                    .product_box{
                        display: flex;
                        flex-direction:row;
                    }
                }
                &:nth-child(3){
                    grid-column:2/3 ;
                    grid-row:2/3 ;
                }
                &:nth-child(4){
                    grid-column:3/4 ;
                    grid-row:2/3 ;
                }
                .poly{
                    position: absolute;
                    top: -10px;
                    width: 80px;
                    height: 100px;
                    background-color: $ored;
                    border-top-left-radius:20px ;
                    border-top-right-radius:20px ;
                    border-bottom-left-radius:20px ;
                    border-bottom-right-radius:20px ;
                    span{
                        color: #f5f5f5;
                        position: relative;
                        top: 20px;
                        left: 15px;
                        font:$caption-s-span ;
                    }
                } 
                .tra{
                    position: absolute;
                    top: -3px;
                    left: 0px;
                    width: 0;
                    border-left: 50px solid transparent;
                    border-right: 50px solid transparent;
                    border-top:  50px solid #232A3E;
;
                    border-bottom:50px solid transparent ;
                    color: #000;
                    transform: rotate(180deg);          
                }
                .product_box{
                    // max-width: 360px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .img_box{
                        
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        img{
                            width: 50%;
                            transition: all .5s;
                            animation-name: move;
                            animation-duration: 5s;
                            animation-timing-function: linear;
                            animation-iteration-count: infinite;
                            animation-delay: 0;
                            @keyframes move {
                                0%{
                                    transform: translateY(0px);
                                }
                                25%{
                                    transform: translateY(-10px);
                                }
                                50%{
                                    transform: translateY(-20px);
                                }
                                75%{
                                    transform: translateY(-10px);
                                }
                                100%{
                                    transform: translateY(0px);
                                }
                            }
                        }
                        .spotlightFront{
                            width: 50%;
                            height: 50px;
                            box-shadow: 0 10px 10px #e6e9f0;
                            border-radius: 50%;
                            transform: skewY(-10deg) ;
                            transition: all .3;
                        }
                        .spotlightBack{
                                width: 340px;
                                height: 0px;
                                box-shadow: 10px 0 10px #e6e9f0;
                                border-radius: 50%;
                                margin-bottom: 40px;
                        }
                    }
                    .detail_box{
                        .title{
                            font:$caption-s-h3 ;
                            color: $caption-color;
                            text-align: center;
                        }
                        .price{
                            font:$caption-s-p ;
                            color: $txt-color;
                            text-align: center;
                        }
                        .buttons{
                            display: flex;
                            justify-content: center;
                            .btnPrimary{
                                font: $caption-s-span;
                                @include primaryBtn(100px);
                                    margin: 20px;
                                @include m($m-breakpoint) {
                                    margin: 10px;
                                }
                            }
                            .btnSecond{
                                font: $caption-s-span;
                                @include secondBtn(100px);
                                    margin: 20px;
                                @include m($m-breakpoint) {
                                    margin: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
//bundle
.bundle{
    h2{
    width: 100%;
    text-align: center;
    margin: 0 auto;
    span{
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
    .wrapper{
        width:100%;
        max-width: 960px;
        margin:30px auto;
        // background:#fefefe;
        .tab{
            display: flex;
            flex-wrap: wrap;
            margin-top: -20px;
            margin-left: 20px;
            li{
                margin-bottom:-28px;
                &.active{
                    a{
                        background-color: #000;
                    }
                }
                a{
                    display: block;
                    background: #ddd;
                    margin: 0 2px;
                    padding: 10px 20px;
                    color: #232A3E;
                }
            }
        }
    }
    .area{
        width: 100%;
        // display: none;
        opacity: 1;
        margin: 0 auto;
        padding: 20px 0;
        background-color: #232A3E;
        &.is-active{
            display: block;
            animation-name:displayAnime;
            animation-duration: 2s;
            animation-fill-mode: forwards;
                @keyframes displayAnime {
                    from{
                        opacity: 0;
                    }
                    to{
                        opacity: 1;
                    }
    
                }
            }
        .card_container{
            max-width: 1200px;
            height: 400px;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            overflow: hidden;
            .card{
                max-width: 300px;
                height: 200px;
                .pic{
                    width: 300px;
                    height: 200px;
                    img{
                        width: 100%;
                    }
                }
                h3{
                    width: 100%;
                    margin-top: 20px;
                    text-align: center;
                    span{
                    }
                }
                .price{
                    margin-top:10px;
                    text-align: center;
                }
                .buttons{
                    display: flex;
                    justify-content: center;
                    .btnPrimary{
                        font: $caption-s-span;
                        @include primaryBtn(100px);
                            margin: 20px;
                        @include m($m-breakpoint) {
                            margin: 10px;
                        }
                    }
                }
            }
    
        }
    }
}
</style>