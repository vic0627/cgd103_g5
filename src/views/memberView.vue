<script>
import { onMounted, registerRuntimeCompiler} from 'vue';
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import {bodyInit} from '../composables/useOnunmounted';
bodyInit();


import {useMotion} from '@vueuse/motion';
export default{
  components:{
    navComponentsVue,
    footerComponentsVue
  }
}
</script>

<template>
<navComponentsVue />
<section class="member">
    <div class="member_box">
        <div class="member_top">
            <div class="member_card">
                <img src="../assets/images/member/mem_img02.png" alt="badge" class="badge">
                <div class="card_top">
                    <div class="card_top_word">
                        <img src="../assets/images/member/mem_img.png" alt="head_sticker" class="head">
                    <h2>Thr Odinson</h2>
                    </div>
                </div>
                <div class="card_down">
                    <div class="gold_box">
                        <p>Gold Member</p>
                    </div>
                    <div class="point_box">
                        <p class="point_txt">
                            POINTS : <span>56,813</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="member_drone">
                <img src="../assets/images/member/mem_drone02.png" alt="drone">
                <div class="drone_word">
                    <h3>FPV Name</h3>
                    <router-link class="drone_more" to="/machineView"><button>Leam more</button></router-link>
                </div>
            </div>
        </div>
        <div class="mem_down">
            <div class="round_item">
                <router-link class="anchor" to="/profile">
                    <p>PROFILE</p>
                </router-link>
            </div>
            <div class="round_item">
                <router-link class="anchor" to="/NormalOrders">
                    <p>NORMAL ORDERS</p>
                </router-link>
            </div>
            <div class="round_item">
                <router-link class="anchor" to="/CustomizedOrders">
                    <p>CUSTOM ORDERS</p>
                </router-link>
            </div>
            <div class="round_item">
                <router-link class="anchor" to="/">
                    <p>RACING</p>
                </router-link>
            </div>
        </div>
    </div>
</section>
<footerComponentsVue />

</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';

section{
    margin-top: 0;
}
.member{
    width: 100%;
    padding-top: 100px;
    cursor: pointer;
    .member_box{
        width: 100%;
        max-width: 1200px;
        justify-content: center;
        margin: 0 auto;
        .member_top{
            width: 90%;
            margin: 0 auto;
            .member_card{
                position: relative;
                width: 100%;
                border:1px solid rgb(255, 255, 255);
                max-width: 520px;
                height: 200px;
                background: linear-gradient(-200deg, #f9f48f, #fbc65d, #e8b443, #e4b445);
                margin: auto;
                border-radius: 10px;
                .badge{
                    position: absolute;
                    top: -15px;
                    left: 0;
                    width: 35px;
                    height: 50px;
                }
                .card_top{
                    display: flex;
                    margin: 15px;
                    
                    .card_top_word{
                        display: flex;
                        margin: 20px 15px;
                        position: relative;
                        .head{
                            width: 90px;
                            height: 90px;
                        }
                        h2{
                            font-size: 22px;
                            margin: auto 15px;
                            color: #61451B;
                        }
                    } 
                    @include l($l-breakpoint){
                        .card_top_word{
                            .head{
                                width: 120px;
                                height: 120px;
                            }
                        }
                    }
                }
                .card_down {
                    display: flex;
                    justify-content: space-around;
                    .gold_box{
                        p{ 
                            font-weight: 700;
                            color: #934005;
                        }
                    }
                    .point_box{
                        p{
                            font-weight: 700;
                            color: #934005;
                            span{
                                color: #652d05;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
            @include m($m-breakpoint){
                .member_card{
                    height: 220px;
                }
            }
            @include l($l-breakpoint){
                .member_card{
                    height: 250px;
                }
            }
            .member_drone{
                // width: 90%;
                max-width: 700px;
                margin: 15px auto;
                text-align: center;
                img{
                    margin: 15px 0;
                    width: 100%;
                    height: 180px;
                    max-width: 400px;
                }
                .drone_word{
                    display: flex;
                    justify-content: space-between;
                    h3{
                        font-size: 30px;
                    }
                    button{
                        width: 120px;
                        height: 35px;
                        font-size: 15px;
                        margin-top: 5px;
                        cursor: pointer;
                        border:1px solid #fff;
                        border-radius: 5px;
                        color: #fff;
                        font-family: 'Poppins', sans-serif;
                        background-color: transparent;
                        transition: 0.5s ease-in;
                        &:hover{
                            background: linear-gradient(135deg, rgba(39, 145, 242, 0.8) 0%, #8869CC 100%);
                        }
                    }
                    @include l($l-breakpoint){
                        button{
                            margin-top: 15px;
                        }
                    }
                }
            }

        }
        @include m($m-breakpoint){
            .member_top{
                width: 100%;
            }
        }
        .mem_down{
            width: 100%;
            max-width: 1200px;
            margin: 30px 0;
            display: flex;
            flex-wrap: wrap;
            .round_item{
                width: 175px;
                height: 100px;
                border-radius: 5px;
                margin: 5px auto;
                opacity : 0.9;
                background: #576588;
                &:hover{
                    opacity : 1;
                    background: linear-gradient(135deg, rgba(39, 145, 242, 0.8) 0%, #8869CC 100%);
                }
                p{
                    line-height: 100px;
                    text-align: center;
                }
            }
            @include m($m-breakpoint){
                .round_item{
                    width: 165px;
                    height: 160px;
                    border-radius: 100%;
                    p{
                        line-height: 160px;
                        text-align: center;
                        margin: 5px;
                    }
                }
            }
            @include l($l-breakpoint){
                .round_item{
                    width: 180px;
                    height: 180px;
                    p{
                        line-height: 180px;
                        text-align: center;
                        margin: 5px;
                    }
                }
            }
        }
        @include m($m-breakpoint){
            width: 90%;
            max-width: 1200px;
            margin: 30px auto;
        }
    }
    @include m($m-breakpoint){
            .member_top{
                display: flex;
                align-items: center;
            } 
   
        
    }
   

}

</style>