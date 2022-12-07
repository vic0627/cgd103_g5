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

    $('.btn').click(()=>{
        $('#img').attr('src','src/assets/images/Signin/creditCard.png');
    })
    $('.btn2').click(()=>{
        $('#img').attr('src','src/assets/images/Signin/empty_creditCard.png');
    })
   
})



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


</script>

<template>
    <!-- <headerComponentsVue /> -->
    <!-- <navComponentsVue /> -->

    <div class="main">
        <nav class="sidenav">
            <li class="List-item">
                <a href="">Account</a>
                <ul class="subitem">
                    <li class="">Profile Overview</li>
                </ul>
            </li>
            <li class="List-item">
                <a href="">Orders</a>
                <ul class="subitem">
                    <li class="">Normal Orders</li>
                    <li class="">Customized Orders</li>
                </ul>
            </li>
            <li class="List-item">
                <a href="">Racing</a>
                <ul class="subitem">
                    <li class="">My Racing</li>
                </ul>
            </li>
            <li class="List-item">
                <a href="">Personal Setting</a>
                <ul class="subitem">
                    <li class="">Payment</li>
                </ul>
            </li>
        </nav>
        <div class="maincontent">
            <section class="maininfo">
                <div class="meminfo">
                    <div class="memhead"></div>
                </div>
                <div class="memgrade">123</div>
            </section>
            <!-- <section class="profiles-list">
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
            </section> -->
            <section class="payment">
                <h2>Payment</h2>
                <p>Note: New payment methods can only be added during checkout due to verification requirements.</p>
                <div class="creditCardBox">
                    <div class="cardImg">
                        <img  id="img" src="../assets/images/Signin/empty_creditCard.png" alt="creditCard">
                    </div>
                    <div class="cardInfo">
                        <label for="card_no">Card Number</label>
                        <input type="number">
                        <p>請輸入16碼</p>
                        <button class="btn">Add New Card</button>
                        <button class="btn2">redo</button>
                    </div>
                </div>
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
            padding: 10px;
            a{
                font-size: 15px;
            }
            .subitem{
                // display: none;
                padding: 10px 0 10px 20px;
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
                flex-grow: 1.5;
                aspect-ratio: 16/9;
                // background-image: linear-gradient(135deg, rgb(156, 114, 15), gold);
                background: linear-gradient(-200deg, #f9f48f, #fbc65d, #e8b443, #e4b445);
                border-radius: 10px;
            }
            .memgrade{
                flex-grow: 1;
                height: auto;
                background-color: #616574;
                border-radius: 10px;
            }
        }
        // .profiles-list{
        //     width: 100%;
        //     // height: 500px;
        //     margin:10px 0;
        //     background-color: #333;
        //     padding: 20px;
        //     box-sizing: border-box;
        //     border-radius: 10px;
        //     .tab_panel{
        //                 label{
        //                     display: block;
        //                     margin-top: 24px;
        //                 }
        //                 .action{
        //                     display: flex;
        //                     gap: 100px;
        //                     padding-top: 32px;
        //                     button{
        //                         width: 100%;
        //                         height: 48px;
        //                         border-radius: 10px;
        //                         font-size: 16px;
        //                         color: $text-color;
        //                         background-color: $btn-color;
        //                     }
        //                     p{
        //                         display: block;
        //                         font-size: 12px;
        //                         color: $text-color;
        //                         margin: 8px 0 24px 0;
        //                         text-align: center;
        //                         a{
        //                             color: $link-color;
        //                             font-size: 12px;
        //                             display: inline;
        //                         }
        //                     }
        //                 }
        //                 span{
        //                     font-size: 12px;
        //                     color: $text-color;
        //                 }
        //                 .username{
        //                     display: flex;
        //                     gap: 10px;
        //                 }
        //                 .gender{
        //                     display: flex;
        //                     gap: 10px;
        //                     label{
        //                         margin: 20px 20px 20px 0;
        //                         font-size: 20px;
        //                     }
        //                 }
        //                 .selcon{
        //                     display: flex;
        //                     gap: 10px;
        //                 }
        //         }
        // }
        .creditCardBox{
            width: 100%;
            
            @include m($m-breakpoint){
                display: flex;
                align-items: flex-start;
            }
            .cardImg{
                img{
                    // width: 100%;
                }
            }
            .cardInfo{
                margin: 20px;
                font:$caption-h3;
                label{
                   font-size: 30px;
                }
                input{
                    width: 300px;
                    height: 30px;
                    border-radius: 10px;
                }
                button{
                    width: 300px;
                    height: 30px;
                    font:$caption-p;
                    background-color: $blue;
                    color: #fff;
                    border-radius: 10px;
                    border:none;
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