<script setup>
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import menuVue from '@/components/memberCenter/menu.vue';
import memberCardVue from '@/components/memberCenter/memberCard.vue';
import memberLevelVue from '@/components/memberCenter/memberLevel.vue';
import $ from 'jquery';
import { ref, onMounted,reactive,computed,watch } from 'vue';

//輸入信用卡的input
const credit_no = ref("");

//清空信用卡的號碼
const clear = ()=>{
    credit_no.value = "";
}
//將寫進的資料存進資料庫
const addCard = ()=>{
    const payload = {
        credit_no : credit_no.value
    };
    fetch("http://localhost/cgd103_g5_v2/public/g5PHP/updateCreditCard.php",{
        method: "POST",
        body: new URLSearchParams(payload),
    }).then((res) => {res.text()});
};
onMounted(()=> {
    addCard();
})
//信用卡驗證

$(document).ready(()=>{
    $('#credit').on('input',()=>{
        $('.remindTxt span').css('color','red');
        $('#credit').text()
        let noLength = document.getElementById('credit').value;
        if(noLength.length>=16){
            $('.remindTxt').text("Success! please click add button to renew your credit card number").css('color','green');
        }
        // console.log(noLength.length);
        // console.log(typeof(noLength));
    })
    $('#credit').blur(()=>{
        $('.remindTxt span').css('color','white');
    })
})
</script>

<template>
    <navComponentsVue />

    <div class="main">
        <menuVue />
        <div class="maincontent">
            <section class="maininfo">
                <memberCardVue/>
                <memberLevelVue/>
            </section>
            <section class="payment">
                <!-- <form method="post"> -->
                    <h2>Payment</h2>
                    <p>Note: New payment methods can only be added during checkout due to verification requirements.</p>
                    <div class="creditCardBox">
                        <div class="cardImg">
                            <img  id="img" src="../assets/images/Signin/empty_creditCard.png" alt="creditCard">
                            <p class="card_no" >{{credit_no}}</p>
                        </div>
                        <div class="cardInfo">
                            <label for="card_no">Card Number</label>
                            <input type="number" id="credit" v-model="credit_no" oninput="if(value.length>16) value=value.slice(0,16)">
                            <p class="remindTxt">please type in <span>16</span> number</p>
                            <div class="buttons">
                                <button class="btn" @click="addCard">Add </button>
                                <button class="btn2" @click="clear">reset</button>
                            </div>
                        
                        </div>
                    </div>
                <!-- </form> -->
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
.payment{
    margin: 10px 0;
    padding: 20px;
    background-color: #333;
}
input{
    display: block;
}
.card_no{
    color: #333;
    position: relative;
    top: -100px;
    left: 60px;
}
.main{
    max-width: 1200px;
    width: 100%;
    margin: 90px auto;
    display: flex;
    justify-content: start;
    gap: 10px;
    color: $text-color;

    .maincontent{
        width: 100%;
        margin: 0;
        .maininfo{
            // display: flex;
            // gap: 10px;
            display: block;
            background-color: #333;
        }
        .creditCardBox{
            width: 100%;
            
            @include m($m-breakpoint){
                display: flex;
                align-items: flex-start;
            }
            .cardImg{
            }
            .cardInfo{
                margin: 20px;
                font:$caption-h3;
                label{
                   font-size: 30px;
                   color: #fff;
                }
                input{
                    width: 300px;
                    height: 30px;
                    border-radius: 10px;
                }
                .buttons{
                    margin-left: 112px;
                    button{
                        width:90px;
                        height: 30px;
                        font:$caption-p;
                        background-color: $blue;
                        color: #fff;
                        border-radius: 10px;
                        border:none;
                        margin: 5px;
                    }
                    .btn2{
                        background-color: transparent;
                        border: 1px solid rgb(201, 198, 198);
                    }
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