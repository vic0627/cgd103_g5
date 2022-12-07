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
        var getPercent = ($('.progress-wrap').data('progress-percent') / 1000);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 1500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }
});
const point = ref(599);
const member_level = ref({
    Level_1:{
        title : "Bronze Member",
        upgrade_point : 1000,
    },
    Level_2:{
        title : "Silver Member",
        upgrade_point : 5000,
    },
    Level_3:{
        title : "Gold Member",
        upgrade_point : 10000,
    },
});

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
                path : "/payment",
            }},
        
    },
});



    


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
                    <div class="circle">
                        <img src="../assets/images/member/head.jpeg" alt="">
                    </div>
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
                        
                        <div class="progress-wrap progress" :data-progress-percent="point">
                            <div class="progress-bar progress"></div>
                            <span class="np">{{point}}/1000</span>
                        </div>
                        <div class="showper">
                            {{(point/10)}}% completed
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
header{
    top: 0;
}
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
                // background: linear-gradient(-200deg, #f9f48f, #fbc65d, #e8b443, #e4b445);
                background: linear-gradient(-200deg, #E6BA79 0.51%, rgba(173, 99, 12, 0.83) 98.54%);
                border-radius: 10px;
                .circle{
                    aspect-ratio: 1/1;
                    position: relative;
                    top: 50px;
                    left: 15px;
                    border-radius: 50%;
                    width: 150px;
                    height: 150px;
                    background: linear-gradient(135.57deg, #4591D8 15.58%, #6723C7 82.75%);
                    img{
                        position: relative;
                        top: 5px;
                        left: 5px;
                        width: 140px;
                        height: 140px;
                        border-radius: 50%;
                    }
                }
                .memcard{
                    flex-grow: 1;
                    p{
                        // display: block;
                        margin: 80px 30px 0;
                        color: #fff;
                        font-size: 30px;
                        font-weight: 800;
                    }
                    .p2{
                        color: #333;
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
                        border: 2px solid #273747;
                        background: linear-gradient(270deg, #ff8000 10%, #EDC793 90%);
                        margin: 20px 0;
                        overflow: hidden;
                        position: relative;
                        .progress-bar {
                            
                            border-radius: 0;
                            background: #273747;
                            left: 0;
                            position: absolute;
                            top: 0;
                        }
                    }
                    .showper{
                        text-align: right;
                    }
                    .np{
                        font-size: 12px;
                        line-height: 100%;
                        padding-left: 10px;
                        color: #333;
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