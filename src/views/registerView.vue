<script setup>
    // import headerComponentsVue from '@/components/headerComponents.vue';
    import navComponentsVue from '@/components/navComponents.vue';
    import footerComponentsVue from '@/components/footerComponents.vue';
    // import { verify } from 'crypto';
    import $ from 'jquery';
    import axios from "axios";
    import {reactive,ref, onMounted,computed,watch} from "vue";


    const getQuery = (classname) =>document.querySelector(classname);
    // const sendForm = ()=>{
    //     if(!verifyuname() || !verifypsw1() || !verifypsw1()){
    //         alert("check your enter");
    //         return false;
    //     }
    // }


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



    const memberinfo =ref({
        mem_acc : "",
        mem_pw : "",
        mem_first_name : "",
        mem_last_name : "",
        gender : "",
        phone : "",
        city : "",
        address : "",
    });



    onMounted(()=> {


        function sendForm(){
            if(!verifyuname() || !verifypsw1() || !verifypsw2()){
                alert("please chcek your Id or password");
                // if(document.getElementById("username").value == ""){
                //     $("#username").focus();
                // }
                return false;
            }else{
                // alert("要送出囉！");
                checkId();
            }


            // if(document.getElementById("username").value = ""){
            //     alert("go");
            //         $("#username").focus();
            // }
        }
        document.getElementById('btnLogin').onclick = sendForm;

        



        //email verify
        const uname=getQuery('#username');
        uname.addEventListener('input',function(){verifyuname()});
        function verifyuname(){
            let regex_psw=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            
            if(uname.value !=''){
                if(regex_psw.test(uname.value) == false){
                    getQuery('.unameinfo').textContent='Incorrect email address format';
                    getQuery('.unameinfo').style['color']='red';
                }else if(regex_psw.test(uname.value)){
                    getQuery('.unameinfo').textContent='Good!';
                    getQuery('.unameinfo').style['color']='lightgreen';
                    return true;
                }
            }else{
                getQuery('.unameinfo').textContent='';
                getQuery('.unameinfo').style['color']='rgb(72, 72, 72)';
            }
            return false;
            
        }

        //check if email has been used
        uname.addEventListener('blur',()=>{
            if(uname.value !=""){//有輸入資料時
                // checkId();
            }else{
                return false;
            }

        });

        //帳號驗證
        function checkId(){  
            let formData = new FormData(); // 一開始表單的資料是空的
            formData.append('mem_acc', memberinfo.value.mem_acc);
            formData.append('mem_pw', memberinfo.value.mem_pw); 
            formData.append('mem_first_name', memberinfo.value.mem_first_name); 
            formData.append('mem_last_name', memberinfo.value.mem_last_name); 
            formData.append('mem_gender', memberinfo.value.gender); 
            formData.append('mem_email', memberinfo.value.mem_acc); 
            formData.append('city', memberinfo.value.city); 
            formData.append('address', memberinfo.value.address); 
            formData.append('phone', memberinfo.value.phone); 
            fetch('/dist/g5PHP/ckeckMemId.php',{
                method: "post",
                body: formData,
            })
            .then((res) => res.text())//php echo的內容
            .then(text =>alert(text))
            .catch(error =>console.log(error));

        }//function_checkId 



        //password verify
        const psw=getQuery('#password');
        psw.addEventListener('input',function() {verifypsw1()});
        function verifypsw1(){
            let regex_psw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if(psw.value !=''){
                if(regex_psw.test(psw.value) == false){
                    getQuery('.pswinfo').textContent='Incorrect password format';
                    getQuery('.pswinfo').style['color']='red';
                }else if(regex_psw.test(psw.value)){
                    getQuery('.pswinfo').textContent='Good!';
                    getQuery('.pswinfo').style['color']='lightgreen';
                    return true;
                }
            }else{
                getQuery('.pswinfo').textContent='The password must be 8 characters or more and contain at least one uppercase character, at least one lowercase character and at least one number.';
                getQuery('.pswinfo').style['color']='#888';
                getQuery('.pswinfo').style['font-size']='16px';
            }
            return false;
        }
        //password2 verify
        const psw2=getQuery('#password2');
        psw2.addEventListener('input',function(){verifypsw2()});
        function verifypsw2(){
            let regex_psw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if(psw2.value !=''){
                if(regex_psw.test(psw2.value) == false){
                    getQuery('.pswinfo2').textContent='Incorrect password format';
                    getQuery('.pswinfo2').style['color']='red';
                }else if(regex_psw.test(psw2.value)&& psw.value !=psw2.value  ){
                    getQuery('.pswinfo2').textContent='Correct password format,but confirmed password does not match the new password, please enter again!';
                    getQuery('.pswinfo2').style['color']='orange';
                }else if(regex_psw.test(psw2.value)&& psw.value ==psw2.value){
                    getQuery('.pswinfo2').textContent='Good!';
                    getQuery('.pswinfo2').style['color']='lightgreen';
                    return true;
                }
            }else{
                getQuery('.pswinfo2').textContent='';
                getQuery('.pswinfo2').style['color']='rgb(72, 72, 72)';
            }
            return false;
        }


        let aaa = document.querySelector(".dd");
        aaa.firstElementChild.setAttribute("disabled", "");
        let cc = document.querySelector(".cc");
        cc.firstElementChild.setAttribute("disabled", "");
    })

    


</script>

<template>
        <!-- <headerComponentsVue /> -->
        <navComponentsVue />
        <section class="banner">
            <div class="img_box"></div>
            <div class="wrapper">
                <main class="container">
                    <!-- <a href="./HomeView.vue" class="logo"></a> -->
                    <router-link class="logo" to="/home"><img src="../assets/images/register/g5_logo_grey.png" alt=""></router-link>
                    <div class="login">
                        <h1>Create Your EFPV Account</h1>
                        <form class="tab_panel" action="">
                            <label for="username">Email Address</label>
                            <input type="text" class="input-s" name="username" id="username" maxlength="35" v-model="memberinfo.mem_acc">
                            <span class="unameinfo"></span>
                            <!-- {{memberinfo.mem_acc}} -->
                            <label for="password">Password</label>
                            <input type="password" class="input-s" name="password" id="password" maxlength="20" v-model="memberinfo.mem_pw">
                            <span class="pswinfo"></span>
                            <!-- {{ memberinfo.mem_pw }} -->
                            
                            <label for="password2">Enter new password again</label> <!--Confirmed password does not match the new password, please enter again-->
                            <input type="password" class="input-s" name="password" id="password2" maxlength="20">
                            <span class="pswinfo2"></span>


                            <label for="uname">User name</label>
                            <div class="username">
                                <input type="text" class="input-s" name="" id="uname" maxlength="15" placeholder="First Name" v-model="memberinfo.mem_first_name">
                                <input type="text" class="input-s" name="" id="uname2" maxlength="15" placeholder="Last Name" v-model="memberinfo.mem_last_name">
                            </div>
                            <span class=""></span>
                            <!-- {{ memberinfo.mem_first_name }} -->
                            <!-- {{ memberinfo.mem_last_name }} -->


                            <label for="">Gender</label>
                            <div class="gender">
                                <input type="radio" name="Gender" id="male" value="1" v-model="memberinfo.gender">
                                <label for="male">male</label>
                                <input type="radio" name="Gender" id="female" value="2" v-model="memberinfo.gender">
                                <label for="female">female</label>
                            </div>
                            <!-- {{ memberinfo.gender }} -->


                            <!-- <label for="bday">Date of birth</label>
                            <input type="date" class="input-s" name="" id="bday" value="2022-01-01"> -->

                            <label for="phone_no">Phone number</label>
                            <input type="number" class="input-s" name="phone_no" id="phone_no" maxlength="15" v-model="memberinfo.phone">
                            <span class=""></span>
                            <!-- {{ memberinfo.phone }} -->

                            <label for="address">Address</label>
                            <!-- <select name="city" id="" class="input-s">
                                <option>CHOOSE YOUR LOCATION</option>
                                <option :value="i" v-for="i in city" :key="i">{{i}}</option>
                            </select> -->
                            <select v-model="state.frameworksIdx" class="input-s dd" >
                                <option v-for="(item, index) in state.frameworks" :key="index">
                                    {{item.type}}
                                </option>
                            </select>
                            <select v-model="state.contentsIdx" class="input-s cc">
                                <option v-for="(item, index) in pickContents" :key="index">
                                    {{item.name}}
                                </option>
                            </select>
                            
                            <input type="text" class="input-s" name="" id="" maxlength="15" v-model="memberinfo.address">
                            <span class=""></span>
                            <!-- {{ memberinfo.address }} -->



                            <div class="login_info">
                                <input type="checkbox" name="remember" id="remember">
                                <label for="remember">Remember me</label>
                                <!-- <a href="" class="forget_password">Forget Password?</a> -->
                            </div>
                            <div class="action">
                                
                                <!-- <input type="button" id="btnLogin" value="submit"> -->
                                <router-link to="/signin"><input type="submit" id="btnLogin" value="submit"></router-link>
                                <p>Already have an account?<router-link to="/signin">Log in now</router-link></p>
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
        <footerComponentsVue />
</template>



<style scoped lang="scss">
@import '@/sass/style.scss';
$text-color:#fff;
$link-color:#0080ff;
$btn-color:#007FFB;
$bg-color:#0F1F3D;
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

.banner{
    position: relative;
    width: 100%;
    color: $text-color;
    .img_box{
        background-image:none;
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
            background-image: url("../assets/images/register/pexels-tembela-bohle-2050720.jpeg");
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