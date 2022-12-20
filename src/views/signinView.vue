<script setup>
    // import headerComponentsVue from '@/components/headerComponents.vue';
    import navComponentsVue from '@/components/navComponents.vue';
    import footerComponentsVue from '@/components/footerComponents.vue';
    // import { verify } from 'crypto';
    import {reactive,ref, onMounted} from "vue";

    onMounted(()=> {
        function getMemberInfo(){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                member = JSON.parse(xhr.responseText);
                if(member.memId){
                    $id("memName").innerText = member.memName;
                    $id("spanLogin").innerText = "登出";          
                }
        }
            xhr.open("get","getMemberInfo.php",true);//查看使用者是否有登入
            xhr.send(null);
        }

        getMemberInfo();

        function $id(id){
            return document.getElementById(id);
        }	
        
        function sendForm(){
            if(!verifyuname() || !verifypsw()){
                alert("wrong username or password!");
                return false;
            }
            // fetch("http://localhost/cgd103_g5/public/g5PHP/memLogin.php",{
            //     method : "POST",
            //     body : JSON.stringify({
            //         username : document.getElementById("username").value,
            //         password : document.getElementById("password").value,
            //     })
            // }).then(res => console.log(res));


            //-----------------------------------使用Ajax 回server端,取回登入者姓名, 放到頁面上    
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                let member = JSON.parse(xhr.responseText);
                console.log(member);
                if(member.memId){ //帳密正確
                    // alert("帳密正確~");
                    // document.getElementById("memName").innerText = member.memName;
                    document.querySelector(".showname").innerText = member.memName;
                    // document.getElementById("spanLogin").innerText = "登出";
                }else{
                    alert("wrong username or password!~");
                }
            }
            xhr.open("post", "/dist/g5PHP/memLogin.php", true);//連接到php
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");//php格式
            //let data_info = `memId=${$id("username").value}&memPsw=${$id("password").value}`;//送出的內容
            //xhr.send(data_info);//送出
            //-----------------------------------

            let datas = {};
            datas.username = $id("username").value;//將資料打包進datas物件中
            datas.password = $id("password").value;
            // datas.memName = $id("memName").value;//以此類推,註冊時要填寫的資料
            // datas.email = $id("email").value;//以此類推
            
            let data_info = `datas=${JSON.stringify(datas)}`;//將datas轉為json字串
            xhr.send(data_info);   //post送出

        }  
        
        $id('btnLogin').onclick = sendForm;


        //email verify
        const uname=document.querySelector('#username');
        uname.addEventListener('input',function(){verifyuname() });

        function verifyuname(){
            let regex_psw=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if(uname.value !=''){
                if(regex_psw.test(uname.value) == false){
                    document.querySelector('.unameinfo').textContent='Incorrect email address format';
                    document.querySelector('.unameinfo').style['color']='red';

                }else if(regex_psw.test(uname.value)){
                    document.querySelector('.unameinfo').textContent=' Good!';
                    document.querySelector('.unameinfo').style['color']='lightgreen';
                    return true;
                }
            }else{
                document.querySelector('.unameinfo').textContent='';

            }
            return false;
        }
        //password verify
        const psw=document.querySelector('#password');
        psw.addEventListener('input',function(){verifypsw()});
        function verifypsw(){
            let regex_psw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if(psw.value !=''){
                if(regex_psw.test(psw.value) == false){
                    document.querySelector('.pswinfo').textContent='Incorrect password format';
                    document.querySelector('.pswinfo').style['color']='red';
                }else if(regex_psw.test(psw.value)){
                    document.querySelector('.pswinfo').textContent=' Good!';
                    document.querySelector('.pswinfo').style['color']='lightgreen';
                    return true;
                }
            }else{
                document.querySelector('.pswinfo').textContent='The password must be eight characters or more and contain at least one uppercase character, at least one lowercase character and at least one number.';
                document.querySelector('.pswinfo').style['color']='#888';
            }
            return false;
        }

        
        
    })
    

    
    function init(){
    //===設定spanLogin.onclick 事件處理程序是 showLoginForm
    // $id('spanLogin').onclick = showLoginForm;


    //===設定btnLogin.onclick 事件處理程序是 sendForm
    // $id('btnLogin').onclick = sendForm;

    //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
    // $id('btnLoginCancel').onclick = cancelLogin;


    }; //window.onload
</script>

<template>
        <!-- <headerComponentsVue /> -->
        <navComponentsVue />
        <section class="banner">
            <div class="img_box"></div>
            <div class="wrapper">
                <main class="container">
                    <!-- <a href="/home" class="logo"></a> -->
                    <router-link class="logo" to="/home"><img src="../assets/images/Signin/g5_logo_grey.png" alt=""></router-link>
                    <div class="login">
                        <h1>Log in to EFPV</h1>
                        <!-- <form class="tab_panel" action="/member" method="get"> -->
                        <form class="tab_panel">
                            <label for="username">Email Address</label>
                            <input type="text" name="username" class="input-s" id="username" maxlength="35">
                            <span class="unameinfo"></span>
                            <label for="password">Password</label>
                            <input type="password" name="password" class="input-s" id="password" maxlength="20">
                            <span class="pswinfo"></span>
                            <div class="login_info">
                                <input type="checkbox" name="remember" id="remember">
                                <label for="remember">Remember me</label>
                                <!-- <a href="" class="forget_password">Forget Password?</a> -->
                                <router-link class="forget_password" to="/">Forget Password?</router-link>
                            </div>
                            <div class="action">
                                <!-- <button type="button" id="btnLogin">submit</button> -->
                                <span class="showname"></span>
                                <router-link to="/member"><input type="button" id="btnLogin" value="submit"></router-link>
                                
                                <p>New user?<router-link to="/register">Create Your EFPV Account</router-link></p>
                            </div>
                        </form>
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
            <div class="bginfo">
                <span>Shot On EFPV Avata Pro-View Combo</span>
            </div>
        </section>
        <footerComponentsVue />
</template>



<style scoped lang="scss">
@import '@/sass/style.scss';
$text-color:#fff;
$link-color:#0080ff;
$btn-color:#007FFB;
$bg-color:#0F1F3D;

$danger:#ff0000;
section{
    margin: 0;
}
header{
    top: 0;
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
span{
    display: block;
    padding: 5px 0;
}
.banner{
    position: relative;
    width: 100%;
    color: $text-color;
    .img_box{
        background-image: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100vw;
        height: 100%;
        background-position: 50%;
    }
    .wrapper{
        .container{
            background-color: $bg-color;
            box-shadow: 0 16px 32px rgb(0 0 0 / 10%);
            padding: 48px 32px;
            .logo{
                width: 100%;
                img{
                    width: 0;
                }
            }
            .login{
                width: 100%;
                h1{
                    font-size: 24px;
                    color: $text-color;
                    padding-top: 10px;
                    font-weight: 300;
                }
                .tab_panel{
                        label{
                            display: block;
                            margin-top: 24px;
                        }
                        .forget_password{
                            font-style: italic;
                            font-size: 12px;
                            margin: 8px 0 24px 0;
                            color: $link-color;
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
                            #btnLogin{
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
                            color: $text-color;
                            display: block;
                            padding: 5px 0;
                            font-size: 16px;

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
                    background: rgb(138, 138, 138);
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
    display: none;
    position: sticky;
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

@include s($s-breakpoint) {//575
    section{
        margin: 50px 0;
    }
    .banner{
        .img_box{
            background-image: url("../assets/images/Signin/pexels-tembela-bohle-2050718.jpeg");
        }
        .wrapper{
            
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 16px;
            .container{
                top: 50px;
                margin-left: auto;
                margin-bottom: 50px;
                position: relative;
                width: 400px;
                .logo{
                    width: 100%;
                    img{
                        width: 100px;
                    }
                }
            }
        }
    }
    .bginfo{
        display: block;
    }
}
@include m($m-breakpoint) {//1023
    
}  
@include l($l-breakpoint) {//1199
} 
</style>