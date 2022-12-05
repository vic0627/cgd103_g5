<script setup>
import headerComponentsVue from '@/components/headerComponents.vue';
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

})
</script>

<template>
    <headerComponentsVue />
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
                <div class="memgrade"></div>
            </section>
            <section class="profiles-list">
                <form class="tab_panel" style="color: #fff;">
                    <label for="uname">First name</label>
                    <input type="text" name="" class="input-s" id="uname" maxlength="15" required>
                    <label for="uname">Last name</label>
                    <input type="text" name="" class="input-s" id="" maxlength="15" required>

                    <label for="">Gender</label>
                    <input type="radio" name="Gender" class="input-s" id="male" checked>
                    <label for="male">male</label>
                    <input type="radio" name="Gender" class="input-s" id="female">
                    <label for="female">female</label>

                    <label for="bday">Date of birth</label>
                    <input type="date" name="" class="input-s" id="bday" value="2022-01-01">
                    
                    <label for="password">Change Password</label>
                    <input type="button" name="password" class="input-s" id="password" maxlength="20" value="Change Password">
                    
                    <label for="phone_no">Phone number</label>
                    <input type="number" name="phone_no" class="input-s" id="phone_no" maxlength="15">
                    <span class=""></span>

                    <label for="username">Email Address</label>
                    <input type="email" name="username" class="input-s" id="username" maxlength="35" required>
                    <span class="unameinfo"></span>

                    <label for="address">Address</label>
                    <input type="text" name="" class="input-s" id="address" maxlength="10">
                    <input type="text" name="" class="input-s" id="" maxlength="15">
                    <span class=""></span>

                </form>
            </section>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';
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
    margin: 50px auto;
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
        width: 75%;
        margin: 0;
        .maininfo{
            display: flex;
            gap: 10px;
            .meminfo{
                width: 500px;
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
        .profiles-list{
            width: 100%;
            // height: 500px;
            margin:10px 0;
            background-color: #8e8e8e3d;
            padding: 50px 100px;
            box-sizing: border-box;
            border-radius: 10px;
        }
    }
}
</style>