<script setup>
import $ from 'jquery';
import { ref,reactive, onMounted } from 'vue';



const products = reactive([
    {
        "name" : 'p1', 
        "title":'EFVP Mavic 1 Classic',
        "price":'USD$999',
        "src":'/images/shop/body_01.png'
    },
    {
        "name" : 'p2', 
        "title":'EFVP Mavic 2 Classic',
        "price":'USD$888',
        "src":'/images/shop/body_02.png'
        
    },
    {
        "name" : 'p3', 
        "title":'EFVP Mavic 3 Classic',
        "price":'USD$777',
        "src":'/images/shop/body_03.png'
        
    },
    {
        "name" : 'p4', 
        "title":'EFVP Mavic 4 Classic',
        "price":'USD$666',
        "src":'/images/shop/body_01.png'
        
    }
])
const steps = reactive([
    {
        "id" : "1",
        "text" : "Choose your favorite color"
    },
    {
        "id" : "2",
        "text" : "Choose your favorite wing"
    },
    {
        "id" : "3",
        "text" : "Choose your favorite speed"
    },

])
const accessories = reactive([
    {
        "name" : 'a1', 
        "title":'EFVP propeller1',
        "price":'USD$333',
        "src":'/images/shop/accs01.png'
    },
    {
        "name" : 'a2', 
        "title":'EFVP propeller2',
        "price":'USD$333',
        "src":'/images/shop/accs02.png'
    },
    {
        "name" : 'a3', 
        "title":'EFVP propeller3',
        "price":'USD$333',
        "src":'/images/shop/accs03.png'
    },
    {
        "name" : 'a4', 
        "title":'EFVP propeller4',
        "price":'USD$333',
        "src":'/images/shop/accs04.png'
    },
])
const bundle = reactive([
    {
        "name" : 'b1', 
        "title":'EFVP bundle pro',
        "price":'USD$1200',
        "src":'/images/shop/bundle_01.png'
    },
    {
        "name" : 'b1', 
        "title":'EFVP bundle pro',
        "price":'USD$1200',
        "src":'/images/shop/bundle_01.png'
    },
    {
        "name" : 'b1', 
        "title":'EFVP bundle pro',
        "price":'USD$1200',
        "src":'/images/shop/bundle_01.png'
    },
    {
        "name" : 'b1', 
        "title":'EFVP bundle pro',
        "price":'USD$1200',
        "src":'/images/shop/bundle_01.png'
    },

])
onMounted(()=>{

    
})

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
            <img src="../assets/images/shop/new2.jpg" alt="newProduct">
        </div>
        <div class="buttons">
            <a class="btnPrimary" data-title="Learn More">
                <span>Learn More</span>
            </a>
        </div>
    </section>
    <!-- step -->
    <section class="step_wrapper">
            <h2><span>CUSTOMIZE STEP</span></h2>
            <p>Create Your Special Style</p>
        <div class="step_container">
            <div v-for="num in steps" class="slide" :key="num">
                <p>STEP {{num.id}}</p>
                <p>{{num.text}}</p>
            </div>
        </div>
            <div class="buttons">
                <a class="btnPrimary" data-title="Learn More">
                    <span>Learn More</span>
                </a>
            </div>
    </section>
    <!-- category -->
    <section class="category">
        <a class="c c1" href="#all_product">
            <h5>ALL PRODUCT</h5>
        </a>
        <a class="c c2" href="#accessories">
            <h5>ACCESSORIES</h5>
        </a>
        <a class="c c3" href="#bundle">
            <h5>BUNDLE</h5>
        </a>
    </section>
    <!-- all product -->
    <section class="all_product" id="all_product">
        <h2><span>ALL PRODUCT</span></h2>
        <p>Select All You Need</p>
        <div class="card_slider">
            <!-- <div class="poly"><span>NEW</span></div> -->
            <div class="tra"></div>
            <div class="card_slider_items">
                <div v-for= "item in products" class="card_slider_item" :key="item.name">
                    <div class="product_box">
                        <div class="img_box">
                            <img :src="item.src" alt="">
                            <div class="spotlightFront"></div>
                            <div class="spotlightBack"></div>
                        </div>
                        <div class="detail_box">
                            <h5 class="title">{{item.title}}</h5>
                            <p class="price">{{item.price}}</p>
                            <div class="buttons">
                                <a class="btnPrimary" data-title="BUY NOW">BUY NOW</a>
                                <a class="btnSecond" data-title="Learn More" >Learn More</a>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- video -->
    <section class="video">
        <h2>FEEL <span>FREEDOM</span> IN THE SKY</h2>
        <p><span>VDAF</span> visual focus technology</p>
    </section>
    <!--accessories  -->
    <section class="accessories" id="accessories">
        <h2><span>ACCESSORIES</span></h2>
        <p>More Various Then You Think</p>
        <div class="card_slider">
        <!-- <div class="poly"><span>NEW</span></div> -->
        <div class="tra"></div>
            <div class="card_slider_items">
                <div v-for="i in accessories" class="card_slider_item"  :key="i.name">
                    <div class="product_box">
                        <div class="img_box">
                            <img :src="i.src" alt="">
                            <div class="spotlightFront"></div>
                            <div class="spotlightBack"></div>                        
                        </div>
                        <div class="detail_box">
                            <div class="title">{{i.title}}</div>
                            <div class="price">{{i.price}}</div>
                            <div class="buttons">
                                <a class="btnPrimary" data-title="BUY NOW" >BUY NOW</a>
                                <a class="btnSecond" data-title="Learn More" >Learn More</a>
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
                <li><a @click="changePage" href="#beginner">beginner</a></li>
                <li><a @click="changePage" href="#veteran">veteran</a></li>
            </ul>
        </div>

        <div id="beginner" class="area active">
            <div class="card_container">
                <div v-for="i in bundle" class="card" :key="i.name">
                    <div class="pic">
                        <img :src="i.src" alt="">
                    </div>
                    <h3><span>{{i.title}}</span></h3>
                    <p class="price">{{i.price}}</p>
                    <a class="buttons">
                        <span class="btnPrimary" data-title="BUY NOW" >BUY NOW</span>
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
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
@import '@/sass/component/_btn.scss';

//banner
.banner{
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(1,fr);
    grid-template-rows: repeat(3,fr);
    h2{
        grid-column: 1/1;
        grid-row: 1/1;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        right: 0;
        background-color: #ffffff80;
        @include m($m-breakpoint){    
            background-color: #12181E80;
        }
        span{
            &:first-child{
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
   
    .img_box{
        @include m($m-breakpoint) {
            display: flex;
            width: 50%;
        }
        img{
            width: 100%;
            object-fit: cover;
            vertical-align: bottom;
        }
    }
    .buttons{
        width: 100%;
        grid-column: 1/1;
        grid-row: 3/3;
        .btnPrimary{
            margin: 0 auto;
            position: relative;
            top: -50px;
            @include primaryBtn (150px);
        }

    }
}
//step
.step_wrapper{
    width: 100%;
    position: relative;
    padding: 20px 0;

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
    p{
        &:first-child{
            font:$caption-s-h4;
            @include m($m-breakpoint) {
                font: $caption-m-h4;
            }
        }
        width: 100%;
        text-align: center;
        span{
            font-weight: light;
        }
    }
    .step_container{
        position: relative;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        gap: 2rem;
        padding: 2rem;
        .slide{
            width: 200px;
            line-height: 50px;
            padding: 20px;
            background: linear-gradient(98.29deg, #077AF9 10.1%, #9C4DD6 82.53%);
            font: $caption-s-p;
            color: $txt-color;
            box-sizing: border-box;
            text-align: center;
            z-index: 10;
            border-radius: 20px;
            @include m($m-breakpoint) {
                width: 400px;
            }
        }
    }
}
.buttons{
    width: 100%;
    .btnPrimary{
        position: relative;
        margin: 20px auto;
        top: 0;
        @include primaryBtn (150px);

    }
    .btnSecond{
        position: relative;
        margin: 0 auto;
        top: 0;
        @include secondBtn (150px);

    }
}
// category
.category{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .c{
        text-align: center;
        h5{
            padding: 10px 0;
            width: 300px;
            background-color: #324e68;
            border-radius: 50px;
            margin: 10px 0;
            &:hover{
                background-color: #000;
                box-shadow: 0 0 30px $blue;
                transition: all .5s;
            }
            @include m($m-breakpoint) {
                margin:  0 20px;    
            }
        }
    }
}
//all product
.all_product{
    width: 100%;
    h2{
        text-align: center;
    }
    p{
        text-align: center;
    }
//     .poly{
//         position: absolute;
//         top: -10px;
//         left: 10%;
//         width: 80px;
//         height: 100px;
//         background-color: $ored;
//         border-top-left-radius:20px ;
//         border-top-right-radius:20px ;
//         border-bottom-left-radius:20px ;
//         border-bottom-right-radius:20px ;
//         span{
//             color: #f5f5f5;
//             position: relative;
//             top: 20px;
//             left: 15px;
//             font:$caption-s-h5 ;
//         }
//     } 
//     .tra{
//         position: absolute;
//         top: -3px;
//         left: 9%;
//         width: 0;
//         border-left: 50px solid transparent;
//         border-right: 50px solid transparent;
//         border-top:  50px solid #232A3E;
// ;
//         border-bottom:50px solid transparent ;
//         color: #000;
//         transform: rotate(180deg);          
//     }
    .card_slider{
         width: 100%;
         position: relative;
        .card_slider_items{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            .card_slider_item{
                width: 300px;
                margin: 20px;
                background-color: #232A3E;
                border-radius:20px;
                box-shadow: 0 0 10px #324e68;
                &:first-child{
                        box-shadow: 0 0 10px $ored;
                }
                .product_box{
                    .img_box{
                        width: 300px;
                        img{
                            width: 100%;

                        }
                    }
                    .detail_box{
                        margin: 20px;
                        padding: 20px 0;
                        color: #f5f5f5;
                        text-align: center;
                        .title,.price{
                            padding: 10px 0;
                        }
                    }
                }

            }
        }
    }
}
//AD
.video{
    width: 100%;
    height: 500px;
    object-position: center;
    background: url(../assets/images/shop/video.PNG);
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(1.0);
    h2{
        width: 100%;
        line-height: 500px;
        margin:0 auto;
        text-align: center;
        color: #f5f5f5;
        span{
            color: $ored; 
            font-size: 50px;
        }
    }
    p{
        text-align: center;
        margin-top: -150px;
        color: $fff;
        font: $caption-h5;
        span{
            color: $ored;
            font-weight: light;
            font-size: 30px;
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
    p{
        text-align: center;
    }
    .card_slider{
        .card_slider_items{
            flex-wrap:wrap;
            display: flex;
            justify-content: center;
            .card_slider_item{
                padding: 10px;
                margin: 10px;
                background-color: #232A3E;
                border-radius: 20px;
                box-sizing: border-box;
                position: relative;
                box-shadow: 0 0 10px #324e68;
                &:first-child{
                        box-shadow: 0 0 10px $ored;
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
                        font:$caption-s-h5 ;
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
                    max-width: 300px;  
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
                            flex-wrap: wrap;
                            justify-content: center;
                            .btnPrimary{
                                font: $caption-s-h5;
                                @include primaryBtn(150px);
                                    margin: 20px;
                                @include m($m-breakpoint) {
                                    margin: 10px;
                                }
                            }
                            .btnSecond{
                                font: $caption-s-h5;
                                @include secondBtn(150px);
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
        // max-width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
        background-color: #232A3E;
        .card_container{
            max-width: 1200px;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            // overflow: hidden;
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
                        font: $caption-s-h5;
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