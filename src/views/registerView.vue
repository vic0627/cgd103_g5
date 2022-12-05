<script setup>
    import headerComponentsVue from '@/components/headerComponents.vue';
    // import { verify } from 'crypto';
    import {reactive,ref, onMounted} from "vue";


    onMounted(()=> {
        //email verify
        const uname=document.querySelector('#username');
        uname.addEventListener('input',function verifyuname(){
            let regex_psw=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            
            if(this.value !=''){
                if(regex_psw.test(this.value) == false){
                    document.querySelector('.unameinfo').textContent=' Format error';
                    document.querySelector('.unameinfo').style['color']='red';
                }else if(regex_psw.test(this.value)){
                    document.querySelector('.unameinfo').textContent=' Match the rules';
                    document.querySelector('.unameinfo').style['color']='lightgreen';
                }
            }else{
                document.querySelector('.unameinfo').textContent='';
                document.querySelector('.unameinfo').style['color']='rgb(72, 72, 72)';
            }
        });
        //password verify
        const psw=document.querySelector('#password');
        psw.addEventListener('input',function verifypsw(){
            let regex_psw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if(this.value !=''){
                if(regex_psw.test(this.value) == false){
                    document.querySelector('.pswinfo').textContent=' Format error';
                    document.querySelector('.pswinfo').style['color']='red';
                }else if(regex_psw.test(this.value)){
                    document.querySelector('.pswinfo').textContent=' Match the rules';
                    document.querySelector('.pswinfo').style['color']='lightgreen';
                }
            }else{
                document.querySelector('.pswinfo').textContent='The password must be 8 characters or more and contain at least one uppercase character, at least one lowercase character and at least one number.';
                document.querySelector('.pswinfo').style['color']='red';
            }
        });
        //password2 verify
        const psw2=document.querySelector('#password2');
        psw2.addEventListener('input',function verifypsw(){
            let regex_psw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if(this.value !=''){
                if(regex_psw.test(this.value) == false){
                    document.querySelector('.pswinfo2').textContent=' Format error';
                    document.querySelector('.pswinfo2').style['color']='red';
                }else if(regex_psw.test(this.value)&& psw.value !=psw2.value  ){
                    document.querySelector('.pswinfo2').textContent=' Match the rules but wrong password';
                    document.querySelector('.pswinfo2').style['color']='orange';
                }else if(regex_psw.test(this.value)&& psw.value ==psw2.value){
                    document.querySelector('.pswinfo2').textContent=' Match the rules';
                    document.querySelector('.pswinfo2').style['color']='lightgreen';
                }
            }else{
                document.querySelector('.pswinfo2').textContent='';
                document.querySelector('.pswinfo2').style['color']='rgb(72, 72, 72)';
            }

        });
    })
</script>

<template>
        <headerComponentsVue />
        <section class="banner">
            <div class="img_box"></div>
            <div class="wrapper">
                <main class="container">
                    <a href="./HomeView.vue" class="logo"><img src="../assets/images/register/g5_logo_grey.png" alt=""></a>
                    <div class="login">
                        <h1>Create Your EFPV Account</h1>
                        <form class="tab_panel">
                            <label for="username">Email Address</label>
                            <input type="email" class="input-s" name="username" id="username" maxlength="35" required>
                            <span class="unameinfo"></span>

                            <label for="password">Password</label>
                            <input type="password" class="input-s" name="password" id="password" maxlength="20" required>
                            <span class="pswinfo"></span>
                            
                            <label for="password2">Enter new password again</label> <!--Confirmed password does not match the new password, please enter again-->
                            <input type="password" class="input-s" name="password" id="password2" maxlength="20" required>
                            <span class="pswinfo2"></span>


                            <label for="uname">User name</label>
                            <div class="username">
                                <input type="text" class="input-s" name="" id="uname" maxlength="15" required>
                                <input type="text" class="input-s" name="" id="" maxlength="15" required>
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
                            <input type="date" class="input-s" name="" id="bday">

                            <label for="phone_no">Phone number</label>
                            <input type="number" class="input-s" name="phone_no" id="phone_no" maxlength="15">
                            <span class=""></span>

                            <label for="address">Address</label>
                            <input type="text" class="input-s" name="" id="address" maxlength="10">
                            <input type="text" class="input-s" name="" id="" maxlength="15">
                            <span class=""></span>

                            <div class="login_info">
                                <input type="checkbox" name="remember" id="remember">
                                <label for="remember">Remember me</label>
                                <!-- <a href="" class="forget_password">Forget Password?</a> -->
                            </div>
                            <div class="action">
                                <button type="submit">Log in</button>
                                <p>Already have an account?<a href="/signin">Log in now</a></p>
                            </div>
                        </form>
                        <div class="divider">
                            <span> or login with </span>
                        </div>
                        <div class="login_with">
                            <a href=""><img src="../assets/images/register/btn_google_signin_dark_normal_web@2x.png" alt=""></a>
                        </div>
                        <div class="login_agree">
                            <span>By continuing, you hereby agree to the Privacy Policy and Terms of Use</span>
                        </div>
                        <div class="divider">
                            <span></span>
                        </div>
                    </div>
                </main>
            </div>
        </section>
        <div class="bginfo">
            <span>Shot On EFPV Mini 3 Pro</span>
        </div>
</template>



<style scoped lang="scss">
@import '@/sass/style.scss';
$text-color:#fff;
$link-color:#7abcff;
$btn-color:#007FFB;
$bg-color:rgb(54, 54, 54);
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
span{
    display: block;
    padding: 10px 0;
}
.banner{
    position: relative;
    width: 100%;
    color: $text-color;
    .img_box{
        background-image: url("../assets/images/register/pexels-tembela-bohle-2050720.jpeg");
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100vw;
        height: 100%;
        background-position: 50%;
    }
    .wrapper{
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 16px;
        .container{
            margin-left: auto;
            position: relative;
            width: 400px;
            background-color: $bg-color;
            box-shadow: 0 16px 32px rgb(0 0 0 / 10%);
            padding: 48px 32px;
            
            .logo{
                display: inline;
                width: 100%;
                img{
                    width: 100px;
                }
            }
            .login{
                width: 100%;
                h1{
                    font-size: 24px;
                    color: $text-color;
                    padding-top: 24px;
                    font-weight: 300;
                }
                .tab_panel{
                        label{
                            display: block;
                            margin-top: 24px;
                        }
                        .login_info{
                            display: flex;
                            input[type="checkbox"]{
                                height: 15px;
                                margin-top: 8px;
                            }
                            label{
                                margin-top: 8px;
                            }
                        }
                        .action{
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
                }
                .divider{
                    width: 100%;
                    height: 48px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span{
                        margin: 0 auto;
                        z-index: 1;
                        padding: 0 12px;
                        background: $bg-color;
                        color: $text-color;
                        font-size: 12px;
                        line-height: 16px;
                        letter-spacing: -.02em;
                    }
                }
                .divider:before{
                    position: absolute;
                    left: 0;
                    top: 50%;
                    content: "";
                    width: 100%;
                    height: 1px;
                    background: rgb(200, 200, 200);
                    overflow: hidden;
                }
                .login_with{
                    margin: 20px 0;
                    a{
                        display: inline;
                        img{
                            display: block;
                            width: 200px;
                            margin: 0 auto;
                        }
                    }
                }
                .login_agree{
                    span{
                        color: $text-color;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
.bginfo{
    position: fixed;
    left: 15px;
    bottom: 15px;
    width: 200px;
    span{
        color: #fff;
        font-size: 15px;
        font-weight: 300;
        text-shadow: rgb(140, 140, 140) 0.1em 0.1em 0.1em;
        user-select: none;
    }
}
</style>