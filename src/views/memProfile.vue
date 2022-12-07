<script setup>
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import $ from 'jquery';
import { ref, onMounted,reactive,computed,watch } from 'vue';

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


})


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




//address
const state = reactive({
    frameworksIdx: 0, // 記錄第一層選單的被選取項目
    contentsIdx: 0, // 記錄第二層選單的被選取項目
    frameworks : [
        {
            type: 'Choose Your Location',
            contents: [
                { name: 'Choose Your Country'},
            ],
        },
        {
            type: 'AMERICAS',
            contents: [
                { name: 'USA'},
                { name: 'Brasil'},
                { name: 'Canada(English)'},
                { name: 'Canada(Français)'},
                { name: 'Mexico'},
            ],
        },
        {
            type: 'EUROPE',
            contents: [
                { name: 'Belgium'},
                { name: 'Denmark (English)'},
                { name: 'Deutschland'},
                { name: 'Finland (English)'},
                { name: 'France'},
                { name: 'Ireland'},
                { name: 'Italia'},
                { name: 'Luxembourg (English)'},
                { name: 'Monaco (English)'},
                { name: 'Nederland (English)'},
            ],
        },
        {
            type: 'ASIA',
            contents: [
                { name: '台灣'},
                { name: '中國大陸'},
                { name: '日本'},
                { name: '대한민국'},
                { name: '香港特別行政區'},
                { name: 'Singapore'},
                { name: 'ประเทศไทย'},
                { name: 'Việt Nam'},
            ],
        },
        {
            type: 'OCEANIA',
            contents: [
                { name: 'Australia'},
                { name: 'New Zealand'},
            ],
        },
        {
            type: 'MIDDLE EAST',
            contents: [
                { name: 'UAE (English)'},
                { name: 'Kuwait (English)'},
                { name: 'KSA (English)'},
            ],
        },
    ],
});
const pickContents = computed(() => {
    return state.frameworks[state.frameworksIdx].contents;
});
watch(() => state.frameworksIdx, (value) =>{
    state.contentsIdx = 0;
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
    <!-- <headerComponentsVue /> -->
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
                <h1>Profile Overview</h1>
                <form class="tab_panel">
                    <label for="username">Email Address</label>
                    <input type="email" class="input-s" name="username" id="username" maxlength="35" required>
                    <span class="unameinfo"></span>
                    
                    <label for="password">Change Password</label>
                    <input type="button" name="password" id="password" maxlength="20" value="Change Password">

                    <label for="uname">User name</label>
                    <div class="username">
                        <input type="text" class="input-s" name="" id="uname" maxlength="15" placeholder="First Name" required>
                        <input type="text" class="input-s" name="" id="" maxlength="15" placeholder="Last Name" required>
                    </div>
                    <span class=""></span>

                    <label for="">Gender</label>
                    <div class="gender">
                        <input type="radio" name="Gender" id="male" checked>
                        <label for="male">male</label>
                        <input type="radio" name="Gender" id="female">
                        <label for="female">female</label>
                    </div>

                    <label for="bday">Date of birth</label>
                    <input type="date" class="input-s" name="" id="bday" value="2022-01-01">

                    <label for="phone_no">Phone number</label>
                    <input type="number" class="input-s" name="phone_no" id="phone_no" maxlength="15">
                    <span class=""></span>

                    <label for="address">Address</label>
                    <!-- <select name="city" id="" class="input-s">
                        <option>CHOOSE YOUR LOCATION</option>
                        <option :value="i" v-for="i in city" :key="i">{{i}}</option>
                    </select> -->
                    <div class="selcon">
                        <select v-model="state.frameworksIdx" class="input-s">
                            <option v-for="(item, index) in state.frameworks" :value="index">
                                {{item.type}}
                            </option>
                        </select>
                        <select v-model="state.contentsIdx" class="input-s">
                            <option v-for="(item, index) in pickContents" :value="index">
                                {{item.name}}
                            </option>
                        </select>
                    </div>
                    <input type="text" class="input-s" name="" id="" maxlength="15">
                    <span class=""></span>

                    <div class="action">
                        <button type="submit">Confermed</button>
                        <button type="">Cancel</button>
                    </div>
                </form>
            </section>
        </div>
    </div>
    <footerComponentsVue />
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';


$text-color:#fff;
$link-color:#7abcff;
$btn-color:#007FFB;
$bg-color:rgb(54, 54, 54);
header{
    top: 0;
}
section{
    margin: 0;
}
input{
    display: block;
}

.input-s{
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,.15);
    height: 40px;
    padding: 7px 11px;
    font-size: 20px;
    line-height: 20px;
    margin-top: 8px;
    border-radius: 4px;
}
.main{
    max-width: 1200px;
    width: 100%;
    margin: 90px auto;
    display: flex;
    justify-content: start;
    gap: 10px;
    color: $text-color;
    .sidenav{
        display: none;
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
                    color: rgb(90, 131, 255);
                    &:hover{
                      color: rgb(255, 162, 0);
                    }
                  }
                }
            }
        }
    }
    .maincontent{
        width: 100%;
        margin: 0;
        .maininfo{
            // display: flex;
            // gap: 10px;
            display: block;
            .meminfo{
                display: flex;
                flex-grow: 1.5;
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
                        // margin: 20px 0;
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
            // height: 500px;
            margin:10px 0;
            background-color: #333;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 10px;
            .tab_panel{
                        label{
                            display: block;
                            margin-top: 24px;
                        }
                        .action{
                            display: flex;
                            gap: 100px;
                            padding-top: 32px;
                            button{
                                width: 100%;
                                height: 48px;
                                border-radius: 10px;
                                font-size: 16px;
                                color: $text-color;
                                background-color: $btn-color;
                            }
                            p{
                                display: block;
                                font-size: 12px;
                                color: $text-color;
                                margin: 8px 0 24px 0;
                                text-align: center;
                                a{
                                    color: $link-color;
                                    font-size: 12px;
                                    display: inline;
                                }
                            }
                        }
                        span{
                            font-size: 12px;
                            color: $text-color;
                        }
                        .username{
                            display: flex;
                            gap: 10px;
                        }
                        .gender{
                            display: flex;
                            gap: 10px;
                            label{
                                margin: 20px 20px 20px 0;
                                font-size: 20px;
                            }
                        }
                        .selcon{
                            display: flex;
                            gap: 10px;
                        }
                }
        }
    }
}
@include s($s-breakpoint) {//>575px
    .main{
        padding: 10px;
        .sidenav{
            display: block;
        }
        .maincontent{
            width: 75%;
            .profiles-list{
                padding: 50px;
            }
            .maininfo{
                display: flex;
                gap: 10px;
            }
        }
    }
}
@include m($m-breakpoint) {//>1023px
    .main{
        .maincontent{
            .profiles-list{
                padding: 70px 100px;
            }
        }
    }
}  
@include l($l-breakpoint) {//>1199px

} 
</style>