<script setup>
// import headerComponentsVue from '@/components/headerComponents.vue';
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import $ from 'jquery';
import { ref, onMounted } from 'vue';

onMounted(()=> {
    $('.List-item>a').parent().siblings().find('ul').hide();
    $('.List-item>a').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
        // $(this).parent().siblings().find('a').removeClass('rmminus');
        // $(this).toggleClass('rmminus');
    });


    // on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });


    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 1500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }
})

const sidenav = ref({
    account :{
        title : "Account",
        list : {
            a:{
                cn :"Profile Overview",
                path : "/profile",
            }},
        
    },
    order :{
        title : "Orders",
        list : {
            a:{
                cn :"Normal Orders",
                path : "/NormalOrders",
            },
            b:{
                cn :"Customized Orders",
                path : "/CustomizedOrders",
            },
        },
        
    },
    racing :{
        title : "Racing",
        list : {
            a:{
                cn :"My Racing",
                path : "/home",
            }},
        
    },
    person :{
        title : "Personal Setting",
        list : {
            a:{
                cn :"Payment",
                path : "/home",
            }},
        
    },
});


const percent = ref(70);
    


</script>

<template>
    <navComponentsVue />
    <div class="main">
        <nav class="sidenav" >
            <li class="List-item" v-for="item in sidenav" :key="item">
                <a href="">{{item.title}}</a>
                <ul class="subitem">
                    <li class=""  v-for="i in item.list" :key="i" ><router-link :to="i.path">{{i.cn}}</router-link></li>
                </ul>
            </li>
        </nav>
        <div class="maincontent">
            <section class="maininfo">
                <div class="meminfo">
                    <div class="circle"></div>
                    <div class="memcard">
                        <p>SEVAGOTH PRIME</p>
                        <p class="p2">mesaprime@gmail.com</p>
                    </div>
                </div>
                <div class="memgrade">
                    <div class="level"><span>TOP LEVEL</span></div>
                    <p>Bronze Member</p>
                    <p>Member Discount : All products 5%Off</p>
                    <!-- <input type="text" class="pgg" v-model="percent"> -->
                    <div class="pb">
                        <div class="progress-wrap progress" :data-progress-percent="percent">
                            <div class="progress-bar progress"></div>
                        </div>
                        <div class="showper">
                            {{percent}}%
                        </div>
                        
                    </div>
                </div>
            </section>
            <section class="profiles-list">
                <!-- 內容 -->
            </section>
        </div>
    </div>
    <footerComponentsVue />
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';
section{
    margin: 0;
}
input{
    display: block;
}
.main{
    max-width: 1200px;
    width: 100%;
    margin: 90px auto;
    display: flex;
    justify-content: start;
    gap: 10px;
    .sidenav{
        width: 25%;
        height: fit-content;
        background-color: #1C2023;
        padding: 20px;
        border-radius: 10px;
        .List-item{
            padding: 5px 15px;
            a{
                font-size: 15px;
            }
            .subitem{
                padding: 10px 0 10px 20px;
                li{
                    margin: 10px 0;
                    a{
                        font-size: 20px;
                        color: rgb(12, 66, 226);
                        &:hover{
                            color: rgb(255, 162, 0);
                        }
                    }
                }
            }
        }
    }
    .maincontent{
        width: 75%;
        margin: 0;
        .maininfo{
            display: flex;
            gap: 10px;
            .meminfo{
                display: flex;
                width: 500px;
                aspect-ratio: 16/9;
                // background-image: linear-gradient(135deg, rgb(156, 114, 15), gold);
                background: linear-gradient(-200deg, #f9f48f, #fbc65d, #e8b443, #e4b445);
                border-radius: 10px;
                .circle{
                    aspect-ratio: 1/1;
                    position: relative;
                    top: 15px;
                    left: 15px;
                    border-radius: 50%;
                    width: 150px;
                    height: 150px;
                    background-color: rgb(216, 229, 255);
                    // outline: 5px solid #6723C7 ;
                    border: 5px solid  #4591D8;
                }
                .memcard{
                    flex-grow: 1;
                    p{
                        // display: block;
                        margin: 80px 30px 0;
                        color: rgb(33, 33, 33);
                        font-size: 30px;
                        font-weight: 800;
                    }
                    .p2{
                        margin-top: 10px;
                        font-size: 20px;
                    }
                }
            }
            .memgrade{
                flex-grow: 1;
                height: auto;
                background-color: #616574;
                border-radius: 10px;
                p{
                    padding: 10px;
                }
                .level{
                    padding: 10px;
                }
                .pb{
                    padding: 20px;
                    .progress {
                        // box-sizing: border-box;
                        border-radius: 20px;
                        width: 100%;
                        height: 20px;
                    }
                    .progress-wrap {
                        border: 2px solid rgb(0, 31, 85);
                        background: linear-gradient(270deg, #473421 30%, #EDC793 70%);
                        margin: 20px 0;
                        overflow: hidden;
                        position: relative;
                        .progress-bar {
                            border-radius: 0;
                            background: #ddd;
                            left: 0;
                            position: absolute;
                            top: 0;
                        }
                    }
                    .showper{
                        text-align: right;
                    }

                }
            }
        }
        .profiles-list{
            width: 100%;
            height: 500px;
            margin:10px 0;
            background-color: #333;
            border-radius: 10px;
        }
    }
}


</style>