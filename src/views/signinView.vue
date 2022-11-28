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
                    document.querySelector('.unameinfo').textContent=' format error';
                    document.querySelector('.unameinfo').style['color']='red';
                }else if(regex_psw.test(this.value)){
                    document.querySelector('.unameinfo').textContent=' match the rules';
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
                    document.querySelector('.pswinfo').textContent=' format error';
                    document.querySelector('.pswinfo').style['color']='red';
                }else if(regex_psw.test(this.value)){
                    document.querySelector('.pswinfo').textContent=' match the rules';
                }
            }else{
                document.querySelector('.pswinfo').textContent='The password must be eight characters or more and contain at least one uppercase character, at least one lowercase character and at least one number.';
                document.querySelector('.pswinfo').style['color']='rgb(72, 72, 72)';
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
                    <a href="/home" class="logo"><img src="../assets/images/Signin/g5_logo_grey.png" alt=""></a>
                    <div class="login">
                        <h1>Log in to EFPV</h1>
                        <div class="tab_panel">
                            <label for="username">Email Address</label>
                            <input type="email" name="username" id="username" maxlength="35">
                            <span class="unameinfo"></span>
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" maxlength="20">
                            <span class="pswinfo">The password must be eight characters or more and contain at least one uppercase character, at least one lowercase character and at least one number.</span>
                            <div class="login_info">
                                <input type="checkbox" name="remember" id="remember">
                                <label for="remember">Remember me</label>
                                <a href="" class="forget_password">Forget Password?</a>
                            </div>
                            <div class="action">
                                <button type="submit">submit</button>
                                <p>New user?<a href="/register">Create Your EFPV Account </a></p>
                            </div>
                        </div>
                        <div class="divider">
                            <span> or login with </span>
                        </div>
                        <div class="login_with">
                            <a href=""><img src="../assets/images/Signin/btn_google_signin_dark_normal_web@2x.png" alt=""></a>
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
            <span>Shot On EFPV Avata Pro-View Combo</span>
        </div>
</template>



<style scoped lang="scss">
@import '@/sass/style.scss';

.banner{
    position: relative;
    width: 100%;
    .img_box{
        background-image: url("../assets/images/Signin/bgimg01.jpeg");
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
            background-color: #fff;
            box-shadow: 0 16px 32px rgb(0 0 0 / 10%);
            padding: 48px 32px;
            .logo{
                width: 100%;
                img{
                    width: 100px;
                }
            }
            .login{
                width: 100%;
                h1{
                    font-size: 24px;
                    color: #000;
                    padding-top: 24px;
                    font-weight: 300;
                }
                .tab_panel{
                        label{
                            display: block;
                            margin-top: 24px;
                        }
                        input[type="email"],input[type="password"]{
                            box-sizing: border-box;
                            width: 100%;
                            border: 1px solid rgba(0,0,0,.15);
                            height: 40px;
                            padding: 7px 11px;
                            font-size: 20px;
                            line-height: 20px;
                            // letter-spacing: -.02em;
                            margin-top: 8px;
                            border-radius: 4px;
                        }
                        .forget_password{
                            font-style: italic;
                            font-size: 12px;
                            margin: 8px 0 24px 0;
                            color: #007FFB;
                            width: auto;
                            // display: inline;
                            flex-grow: 1;
                            text-align: right;
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
                                color: #fff;
                                background-color: #007FFB;
                            }
                            p{
                                display: block;
                                font-size: 12px;
                                color: #000;
                                margin: 8px 0 24px 0;
                                text-align: center;
                                a{
                                    color: #007FFB;
                                    font-size: 12px;
                                    display: inline;
                                }
                            }
                        }
                        span{
                            font-size: 12px;
                            color: rgb(72, 72, 72);
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
                        background: #fff;
                        color: rgba(0,0,0,.45);
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
                    background: rgba(0,0,0,.06);
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
                        color: #000;
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
    }
}
</style>