<script setup>
import headerComponentsVue from '@/components/headerComponents.vue';
import $ from 'jquery';
import {reactive,ref, onMounted} from "vue";
// const title = reactive({
//     name:
// })


onMounted(()=> {
    controls();
})

//slide func
function controls(){
    $(this).addClass('selected').siblings('button').removeClass('selected');
    $('.sliderDiv').animate({
        top: -$('.slider').height() * $(this).index()
    },450);
    runAnim();
}

const runAnim = ()=>{
    const button = document.querySelectorAll('button');

    if(button){
        for(var i = 0;i< button.length ; i++){
            button[i].addEventListener('click',controls,false);
        }
    }
}
            
    
</script>

<template>
    <div id="app">
        <headerComponentsVue />
            <!-- banner -->
        <section class="banner">
            <h1>NEW ARRIVAL</h1>
            <div class="img_box">
                <img src="/src/assets/images/store/new2.jpg" alt="new2">
            </div>
        </section>

        <section class="step_wrapper">
            <h2>CUSTOMIZE STEP</h2>
            <div class="step_container">
                <div class="sliderDiv">
                    <article class="slider active">
                        <span>1. Choose your own color and wing</span>
                    </article>
                    <article class="slider">
                        <span>2. Choose your own color and wing</span>
                    </article>
                    <article class="slider">
                        <span>3. Choose your own color and wing</span>
                    </article>
                    <article class="slider">
                        <span>4. Choose your own color and wing</span>
                        <div>Learn More</div>
                    </article>
                </div> 
                <!-- controller -->
                <nav class="controls" >
                    <button type="" class="btn">step 1</button>
                    <button type="" class="btn">step 2</button>
                    <button type="" class="btn">step 3</button>
                    <button type="" class="btn">step 4</button>
                </nav>
            </div>
        </section>
    </div>


</template>

<style scoped lang="scss">
@import '@/sass/style.scss';

//shop 第一屏
.banner{
    position: relative;
    width: 100%;
    h1{
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0 auto;
        translate:(-50%,-50%);

        background: #444;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    img{
        width: 100%;
    }
}

//shop 第二屏 
.step_wrapper{
    width: 100%;
    box-sizing: border-box;
    h2{
        background: linear-gradient(98.14deg, #007FFB 2.15%, #9C4DD5 95.33%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        text-shadow: 1px 1px 4px rgba(215, 215, 215, 0.6);
    }
    .step_container{
        max-width: 1200px;
        height: 600px;
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-image: url(/src/assets/images/store/step_bg.PNG);
        background-size: contain;
        filter:grayscale(0.5);
        .sliderDiv{
            position: absolute;
            top: 30px;
            max-width: 1200px;
            height: 180px;
            margin: 20px;
            background-color: #ffffff80;
            .slider{
                max-width: 100%;
                height: 50vh;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                span{
                    text-align: center;
                    color: $fff;
                    position: relative;
                    top:50px;
                    font-size: 1.6rem;
                }
            }
        }
        .controls{
            position: absolute;
            top: 40px;
            right: 0;
            padding: .5rem;
            text-align: center;
            // background-color:  rgba(215, 215, 215, 0.6);
            .btn{
                height: 1rem;
                display: block;
                cursor: pointer;
                border: none;
                transition: all ease .2s;
                background-color: transparent;
                color: $fff;
                &:hover,&:focus{
                    opacity: 1;
                }
                &::before{
                    content:"― | "
                }
            }
            .btn:not(:last-child){
                margin-bottom: 0.63rem;
            }
            .selected{
                color: #ccc;
                background-color: $ored;
                transform: scale(1.15);
            }
        }
    }
}
.all_product{
    width: 100%;

    .allProduct_container{
        margin: 0 auto;
        display: flex;
        justify-content: center;
        .card{
            max-width: 400px;
            display: flex;
            flex-direction: column;
            background-image:url(/image/product_bg.) ;
            background-repeat: no-repeat;
            box-sizing: border-box;
            padding: 10px;
            margin: 10px;
            overflow: hidden;
            .product_box{
                position: relative;
                .title{
                    color: #ccc;
                    text-align: center;
                    text-transform: uppercase;
                }
                .pic{
                    width: 380px;
                    img{
                        width: 100%;
                    }
                    .spotlightFront{
                        position: relative;
                        top: -50px;
                        max-width: 400px;
                        height: 40px;
                        box-shadow: 0 20px 40px #e6e9f05d;
                        border-radius: 50%;
                    }
                    .spotlightBack{
                        position: relative;
                        top: -80px;
                        max-width: 400px;
                        height: 40px;
                        box-shadow: 0 10px 10px #e6e9f08d;
                        border-radius: 50%;
                        transition: all 2s ;
                    }
                }
                .description{
                    max-width: 200px;
                    display: none;
                    padding: 10px;
                    overflow: hidden;
                    color: #ccc;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    &:hover{
                        box-shadow: 0 0 20px #ccc;
                        transition: all .5s;
                    }
                }
                .btn_group{
                    width: 100%;
                    
                    a{
                        margin: 0 auto;
                    }
                  /*   a:first-child{
                       @include primaryBtn(50px);
                       @include caption-title($caption-a, $fff, $spacing-p);
                    }
                    a:nth-child(2){
                       @include secondBtn(50px);
                       font-size: 20px;
                    } */
                }
            }
        }
    }
}

</style>