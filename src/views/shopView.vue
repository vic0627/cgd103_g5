<script setup>
import $ from 'jquery';
import { ref,reactive, onMounted } from 'vue';
import navComponentsVue from '@/components/navComponents.vue';


const products = reactive([
    {
        "name" : 'p1', 
        "title":'EFVP Mavic 1 Classic',
        "Original_Price":'USD$999',
        "src": '/images/shop/body_01.png',
        "new":true,
        "sale":false 
    },
    {
        "name" : 'p2', 
        "title":'EFVP Mavic 2 Classic',
        "Original_Price":'USD$888',
        "src":'/images/shop/body_02.png',
        "new":false,
        "sale":false
    },
    {
        "name" : 'p3', 
        "title":'EFVP Mavic 3 Classic',
        "Original_Price":'USD$999',
        "Discount_Price":'USD$888',
        "src":'/images/shop/body_03.png',
        "sale":true,
        "new":false,
    },
    {
        "name" : 'p4', 
        "title":'EFVP Mavic 4 Classic',
        "Original_Price":'USD$666',
        "src":'/images/shop/body_01.png',
        "new":false,
        "sale":false
    }
])
const steps = reactive([
    {
        "id" : "1",
        "text" : "Choose your favorite color",
        "diff" : "color"
    },
    {
        "id" : "2",
        "text" : "Choose your favorite wing",
        "diff" : "wing"
    },
    {
        "id" : "3",
        "text" : "Choose your favorite speed",
        "diff" : "speed"
    },
    {
        "id" : "4",
        "text" : "Finish your exclusive FVP",
        "diff" : "own FVP"
    }

])
const accessories = reactive([
    {
        "name" : 'a1', 
        "title":'EFVP propeller1',
        "Original_Price":'USD$333',
        "src":'/images/shop/accs01.png',
        "new":true
    },
    {
        "name" : 'a2', 
        "title":'EFVP propeller2',
        "Original_Price":'USD$333',
        "Discount_Price":'USD$222',
        "src":'/images/shop/accs02.png',
        "sale":true
    },
    {
        "name" : 'a3', 
        "title":'EFVP propeller3',
        "Original_Price":'USD$333',
        "Discount_Price":'USD$222',
        "src":'/images/shop/accs03.png',
        "sale":true
    },
    {
        "name" : 'a4', 
        "title":'EFVP propeller4',
        "Original_Price":'USD$333',
        "src":'/images/shop/accs04.png',
        "new":true
    },
])
const bundle_A = reactive([
    {
        "name" : 'A1', 
        "title":'EFVP bundle simple',
        "price":'USD$1200',
        "src":'/images/shop/bundle_01.png'
    },
    {
        "name" : 'A2', 
        "title":'EFVP bundle simple',
        "price":'USD$1200',
        "src":'/images/shop/bundle_01.png',
    },
    {
        "name" : 'A3', 
        "title":'EFVP bundle simple',
        "price":'USD$1200',
        "src":'/images/shop/bundle_01.png',
    },
    {
        "name" : 'A4', 
        "title":'EFVP bundle simple',
        "price":'USD$1200',
        "src":'/images/shop/bundle_01.png'
    },

])
const bundle_B = reactive([
    {
        "name" : 'b1', 
        "title":'EFVP bundle pro',
        "price":'USD$1200',
        "src":'../../public/images/shop/bundle_02.jpg'
    },
    {
        "name" : 'b2', 
        "title":'EFVP bundle pro',
        "price":'USD$1200',
        "src":'../../public/images/shop/bundle_02.jpg'
    },
    {
        "name" : 'b3', 
        "title":'EFVP bundle pro',
        "price":'USD$1200',
        "src":'../../public/images/shop/bundle_02.jpg'
    },
    {
        "name" : 'b4', 
        "title":'EFVP bundle pro',
        "price":'USD$1200',
        "src":'../../public/images/shop/bundle_02.jpg'
    },

])
onMounted(()=>{
})
// switch bundle_A / bundle_B
const  view = ref(1);
const  viewchange = (index) => {
    view.value = index ;
}


</script>

<template>
    <navComponentsVue />
     <!-- banner start-->
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
    <!-- banner end-->

    <!-- step start-->
    <section class="step_wrapper">
            <h2><span>CUSTOMIZE STEP</span></h2>
            <p>Create Your Unique Style</p>
        <div class="step_container">
            <span></span>
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
    <!-- step end-->

    <!-- category start-->
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
    <!-- category end-->

    <!-- all product start-->
    <section class="all_product" id="all_product">
        <h2><span>ALL PRODUCT</span></h2>
        <p>Select All You Need</p>
        <div class="card_slider">
            <div class="card_slider_items">
                <div v-for= "item in products" class="card_slider_item" :key="item.name">
                    <img v-if="item.new == true" class ="new" src="../assets/images/shop/new_icon.png" alt="new_icon">
                    <img v-if="item.sale == true" class ="sale" src="../assets/images/shop/sale_icon.PNG" alt="sale_icon">
                    <div class="product_box">
                        <div class="img_box">
                            <img :src="item.src" alt="">
                           <span></span>
                           <span></span>
                           <span></span>
                        </div>
                        <div class="detail_box">
                            <h5 class="title">{{item.title}}</h5>
                            <p v-if="item.sale != true " class="price">{{item.Original_Price}}</p>
                            <p v-if="item.sale == true" class="price d">{{item.Original_Price}}</p>
                            <p  v-if="item.Discount_Price !='' " class="price discount">{{item.Discount_Price}}</p>
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
    <!-- all product end-->

    <!--accessories  start-->
    <section class="accessories" id="accessories">
        <h2><span>ACCESSORIES</span></h2>
        <p>More Various Then You Think</p>
        <div class="card_slider">
            <div class="card_slider_items">
                <div v-for="i in accessories" class="card_slider_item"  :key="i.name">
                    <img v-if="i.new == true" class ="new" src="../assets/images/shop/new_icon.png" alt="new_icon">
                    <img v-if="i.sale == true" class ="sale" src="../assets/images/shop/sale_icon.PNG" alt="sale_icon">
                    <div class="product_box">
                        <div class="img_box">
                            <img :src="i.src" alt="">                   
                        </div>
                        <div class="detail_box">
                            <h5 class="title">{{i.title}}</h5>
                            <p v-if="i.sale != true " class="price">{{i.Original_Price}}</p>
                            <p v-if="i.sale == true" class="price d">{{i.Original_Price}}</p>
                            <p  v-if="i.Discount_Price !='' " class="price discount">{{i.Discount_Price}}</p>
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
    <!--accessories  end-->

    <!-- bundle start-->
    <section class="bundle" id="bundle">
        <h2><span>BUNDLE</span></h2>
        <p>Make You More Professional</p>
        <div class="wrapper">
            <button href="beginner" @click="viewchange(1)">beginner</button>
            <button href="veteran"  @click="viewchange(2)">veteran</button>
        </div>

        <div  class="area active">
            <div class="card_container">
                <template  v-if="view === 1">
                    <div  v-for="beginner in bundle_A" class="card" :key="beginner.name" id="beginner">
                        <div class="pic">
                            <img :src="beginner.src" alt="beginner">
                        </div>
                        <h5><span>{{beginner.title}}</span></h5>
                        <p class="price">{{beginner.price}}</p>
                        <a class="buttons">
                            <span class="btnPrimary" data-title="BUY NOW" >BUY NOW</span>
                        </a>
                    </div>
                </template>
                <template v-else-if="view === 2">
                    <div v-for="veteran in bundle_B" class="card"  :key="veteran.name" id="veteran">
                        <div class="pic">
                            <img :src="veteran.src" alt="veteran">
                        </div>
                        <h5><span>{{veteran.title}}</span></h5>
                        <p class="price">{{veteran.price}}</p>
                        <a class="buttons">
                            <span class="btnPrimary" data-title="BUY NOW" >BUY NOW</span>
                        </a>
                    </div>               
                </template>
            </div>
        </div>
        <!-- <div   class="area">
            <div class="card_container">
            </div>
        </div>     -->
    </section>
    <!-- bundle end-->

    <!-- ad -->
    <section class="ad">
        <h2>FEEL <span>FREEDOM</span> IN THE SKY</h2>
        <p><span>VDAF</span> visual focus technology</p>
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
    margin-top: 0;
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
    overflow: hidden;
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
            color: $ored;
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
        gap: 1rem;
        padding: 2rem;
        &::before{
            content: url(../assets/images/shop/drone.png);
            position: absolute;
            top:0;
            left: 0;
            z-index: -1;
            transition: all 1s;
            animation-name: fly;
            animation-duration: 5s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-delay: 0;   
            filter:brightness(3) blur(1.5);
            // overflow: hidden;  
            @keyframes fly {
                0%{
                    transform: translateX(0px) rotate(0deg);
                }
                100%{
                    transform: translateX(100vw)  rotate(360deg);
                }
            }
        }
        
        @include m($m-breakpoint){
            gap: 2rem;
            display: flex;
            justify-content: center;
        }
        .slide{
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            width: 100%;
            line-height: 50px;
            padding: 20px;
            margin: 20px auto;
            background: linear-gradient(98.29deg, #077AF9 10.1%, #9C4DD6 82.53%);
            font: $caption-s-p;
            color: $txt-color;
            box-sizing: border-box;
            text-align: center;
            z-index: 1;
            border-radius: 20px;
            &:hover{
                background: #000;
                box-shadow: 0 0 30px $blue;
                transition: all .5s;
            }
            @include m($m-breakpoint) {
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 300px;
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
//category
.category{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .c{
        text-align: center;
        display: flex;
        &:before{
            content: "|";
            font-size: 50px;
            margin-top: 10px;
            color: #324e6880;
        }
        h5{
            padding: 20px;
            max-width: 300px;
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
    h2,p{
        text-align: center;
    }
    .card_slider{
         width: 100%;
         .card_slider_items{
             display: flex;
             justify-content: center;
             align-items: center;
             flex-wrap: wrap;
             .card_slider_item{
                position: relative;
                max-width: 300px;
                padding: 10px;
                margin: 10px;
                background-color: #232A3E;
                border-radius:10px;
                box-shadow: 0 0 10px #324e68;
               
                img.new,img.sale{
                    position: absolute;
                    top: -10px;
                    left: 0;
                    width: 50px;
                }
                .product_box{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    .img_box{
                        max-width: 300px;
                        height: 200px;
                        // padding: 20px 0;
                        display: flex;
                        align-items: center;
                        &::before{
                            content:"<";
                            color: #f5f5f5;
                            font-size: 30px;
                        }
                        &::after{
                            content:">";
                            color: #f5f5f5;
                            font-size: 30px;
                        }
                        img{
                            width: 80%;
                            margin-left:25px ;
                            object-fit: cover;
                            object-position: center 10px; 

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
                    }
                    .detail_box{
                        &::before{
                            display: inline-block;
                            content: " ";
                            width: 100%;
                            height: 40px;
                            box-shadow: 2px 5px 10px #e6e9f0;
                            border-radius: 50%;
                            margin-bottom: 10px;
                        }
                        margin: 20px;
                        // padding: 20px 0;
                        color: #f5f5f5;
                        .title,.price{
                            // padding: 10px;
                            text-align: left;
                        }
                        .price{
                            text-align: right;
                        }
                        .price.d{
                            text-decoration: line-through;
                        }
                        .price.discount{
                            color: red;
                        }
                    }
                }

            }
        }
    }
}
//accessories
.accessories{
    width: 100%;
    text-align: center;
    h2{
        width: 100%;
        margin: 0 auto;
        span{
            font-size: $caption-s-h2;
        // max-width: 200px;
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
        width: 100%;
        .card_slider_items{
                flex-wrap: wrap;
                display: flex;
                justify-content: center;
                align-items: center;
            .card_slider_item{
                max-width: 300px;
                padding: 10px;
                margin: 10px;
                background-color: #232A3E;
                border-radius: 10px;
                box-sizing: border-box;
                position: relative;
                box-shadow: 0 0 10px #324e68;
                img.new,img.sale{
                    position: absolute;
                    top: -10px;
                    left: 0;
                    width: 50px;
                }
                
                .product_box{
                    box-sizing: border-box;
                    @include m($m-breakpoint) {
                    } 
                    .img_box{
                        display: flex;
                        align-items: center;
                        &::before{
                            content:"<";
                            color:#f5f5f5 ;
                            font-size: 30px;
                        }
                        &::after{
                            content:">";
                            color: #f5f5f5;
                            font-size: 30px;
                        }
                        img{
                            width: 80%;
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
                    }
                    .detail_box{
                        &::before{
                            display: inline-block;
                            content: " ";
                            width: 100%;
                            height: 40px;
                            box-shadow: 2px 5px 10px #e6e9f0;
                            border-radius: 50%;
                            margin-bottom: 10px;
                        }
                        .title,.price{
                            // padding: 10px;
                            text-align: left;
                        }
                        .price{
                            text-align: right;
                        }
                        .price.d{
                            text-decoration: line-through;
                        }
                        .price.discount{
                            color: red;
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
    width: 100%;
    text-align: center;
}
.wrapper{
    max-width:1200px;
        margin:10px auto;
        display: flex;
        justify-content: center;
        button{
        width: 100px;
        height: 60px;
        background-color: #324e68;
        color: #f5f5f5;
        border: none;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        font-size: 20px;
    }
}
    .area{
        // max-width: 1200px;
        margin: 0 auto;
        .card_container{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .card{
                max-width: 300px;
                margin: 10px;
                padding: 10px;
                background-color: #232A3E;
                box-sizing: border-box;
                border-radius: 10px;
                box-shadow: 0 0 10px #324e68;
                .pic{
                    max-width: 100%;
                    img{
                        width: 100%;
                    }
                }
                h5{
                    width: 100%;
                }
                .price{
                    margin-top:10px;
                    text-align: right;
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
//ad
.ad{
    width: 100%;
    height: 500px;
    object-position: center;
    background: url(../assets/images/shop/video.PNG);
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(1.0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2{
        width: 100%;
        // line-height: 500px;
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
        color: $fff;
        font: $caption-h5;
        span{
            color: $ored;
            font-weight: light;
            font-size: 30px;
        }
    }
}

</style>