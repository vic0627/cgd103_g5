<script>
//draggle func
// const sliderContainer = document.querySelector('.card_slider');
// const slider = document.querySelector('.card_slider_items');
// let clicked = false;
// let xAxis,x;// xAxis = x軸方向 , x = 滑鼠點到x的位置

// sliderContainer.addEventListener('mouseup',()=>{
//     sliderContainer.style.cursor = `grab`;
// })

// sliderContainer.addEventListener('mousedown', (e) => {
//     clicked = true;
//     xAxis = e.offsetX - slider.offsetLeft;
//     sliderContainer.style.cursor = `grabbing`;
// })

// window.addEventListener('mouseup',()=>{
//     clicked = false
// })

// sliderContainer.addEventListener('mousemove', (e) => {
//     if(!clicked) return;
//     e.preventDefault();

//     x =  e.offsetX;
//     slider.style.left = `${x - xAxis}px`;

//     resize();
// })

// function resize(){
//     let sliderContainerOut = sliderContainer.getBoundingClientRect();
//     let sliderIn = slider.getBoundingClientRect();

//     if(parseInt(slider.style.left) >0){
//         slider.style.left = `0px`;
//     }else if(sliderIn.right < sliderContainerOut.right){
//         slider.style.left = `-${sliderIn.width - sliderContainerOut.width }px`
//     }
// } 

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


</script>

<template>
    <h2><span>ALL PRODUCT</span></h2>
    <div class="arrow_box">
        <span class="arrow"></span>
        <span class="arrow"></span>
    </div>
    <div class="card_slider">
        <div class="card_slider_items">
            <div v-for= "item in 4" class="card_slider_item" :key="item">
                <div class="poly"><span>NEW</span></div>
                <div class="tra"></div>
                <div class="product_box">
                    <img src="../assets/images/shop/body_01.png" alt="">
                    <div class="spotlightFront"></div>
                    <div class="spotlightBack"></div>
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
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
@import '@/sass/component/_btn.scss';

.arrow_box{
        width: 100%;
        .arrow{
            &:first-of-type{
                display: block;
                width: 50px;
                height: 3px;
                background-color: $grey;
                margin-bottom: 20px;
                margin-left: 10px;
            }
            &:last-of-type{
                position: relative;
                top: -30px;
                left: 42px;
                display: block;
                width: 20px;
                height: 3px;
                background-color: $grey;
                transform: rotate(45deg);
            }
        }
    }
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
        height: 585px;
        overflow: hidden;
        margin: 0 auto;
        position: relative;
        .card_slider_items{
            display: flex;
            max-width: 320px;
            position: absolute;
            .card_slider_item{
                max-width: 360px;
                padding: 10px;
                margin: 10px;
                background-color: #232A3E;
                box-sizing: border-box;
                position: relative;
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
                    max-width: 360px;
                    height: 550px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    img{
                        // position: relative;
                        // top: -100px;
                        width: 100%;
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
                        width: 340px;
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
                            font: $caption-s-h5;
                            @include primaryBtn(100px);
                                margin: 20px;
                            @include m($m-breakpoint) {
                                margin: 10px;
                            }
                        }
                        .btnSecond{
                            font: $caption-s-h5;
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
</style>
