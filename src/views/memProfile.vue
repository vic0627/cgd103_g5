<script setup>
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import menuVue from '@/components/memberCenter/menu.vue';
import memberCardVue from '@/components/memberCenter/memberCard.vue';
import memberLevelVue from '@/components/memberCenter/memberLevel.vue';
import { log, $$, $all, getW, BIND_URL }from "../composables/useCommon" ;

import $ from 'jquery';
import { ref, onMounted,reactive,computed,watch } from 'vue';
// import { Script } from 'vm';

const memberinfo =ref({});
onMounted(()=> {

    getMemLevel();
    function getMemLevel(){
        // fetch('/dist/g5PHP/getMemLevel.php',{
        fetch(`${BIND_URL('getMemLevel.php', 'g5PHP')}`,{
                method: "get",
                credentials: 'include',
            })
            .then((res) => res.json())//將php response的內容轉成json格式
            .then(mem =>{//該json
                // console.log(mem);
                if(mem.mem_acc){//回傳帳號為true時
                    //取得需要的會員資料
                    memberinfo.value = {
                        mem_acc : mem.mem_acc,
                        mem_first_name : mem.mem_first_name,
                        mem_last_name : mem.mem_last_name,
                        mem_gender : mem.mem_gender,
                        city : mem.city,
                        address : mem.address,
                        phone : mem.phone,
                    }
                    // console.log(memberinfo.value);
                }
            })
            .catch(error =>console.log(error));
    }

    document.getElementById('updateMemberInfo').onclick = sendForm;
    function sendForm(){  
        if(window.confirm("Do you really want to change your profile?")){
            let formData = new FormData(); // 一開始表單的資料是空的
            formData.append('mem_acc', memberinfo.value.mem_acc);
            formData.append('mem_first_name', memberinfo.value.mem_first_name); 
            formData.append('mem_last_name', memberinfo.value.mem_last_name);
            formData.append('city', memberinfo.value.city); 
            formData.append('address', memberinfo.value.address); 
            formData.append('phone', memberinfo.value.phone); 
            // fetch('/dist/g5PHP/updateMember.php',{
            fetch(`${BIND_URL('updateMember.php', 'g5PHP')}`,{
                method: "post",
                body: formData,
            })
            .then((res) => res.text())//php echo的內容
            .then(text =>alert(text))
            .catch(error =>console.log(error));
        }
        }//function_checkId 
});


const lightBoxClose = () => {
	lightBoxShow.value = false;
};
const lightBoxShow = ref(false);


const mempsw =ref({});
function changePsw(){
    lightBoxShow.value = true;
    if(mempsw.value.newpsw != mempsw.value.newpsw2){
        alert("new password and comfirm password are not the same,please check again!");
    }else if(!showinfo1() || !showinfo2() || !showinfo3()){
        alert("please chcek your password again");
        return false;
    }else if(window.confirm("Do you really want to change your password?")){
        
        let formData = new FormData(); // 一開始表單的資料是空的
        formData.append('mem_oldpsw', mempsw.value.oldpsw);
        formData.append('mem_newpsw', mempsw.value.newpsw);
        // fetch('/dist/g5PHP/updateMemPassword.php',{
        fetch(`${BIND_URL('updateMemPassword.php', 'g5PHP')}`,{
            method: "post",
            credentials: 'include',
            body: formData,
        })
        .then((res) => res.text())//php echo的內容
        .then(text =>alert(text))
        .catch(error =>console.log(error));
    }
}

let regex_psw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
function showinfo1(){
    if(mempsw.value.oldpsw !=""){//輸入時
        if(!regex_psw.test(mempsw.value.oldpsw)){
            $('.info1').addClass("warning");
            mempsw.value.info1="Incorrect password format"
        }else if(regex_psw.test(mempsw.value.oldpsw)){
            $('.info1').addClass("pass");
            mempsw.value.info1="Good!";
            return true;
        }
    }else{
        mempsw.value.info="";
        $('.info1').removeClass("warning");
    }
    return false;
}
function showinfo2(){
    if(mempsw.value.newpsw !=""){//輸入時
        if(!regex_psw.test(mempsw.value.newpsw)){
            $('.info2').addClass("warning");
            mempsw.value.info2="Incorrect password format"
        }else if(regex_psw.test(mempsw.value.newpsw)){
            $('.info2').addClass("pass");
            mempsw.value.info2="Good!";
            return true;
        }
    }else{
        mempsw.value.info2="";
        $('.info2').removeClass("warning");
    }
    return false;
}
function showinfo3(){
    if(mempsw.value.newpsw2 !=""){//輸入時
        if(!regex_psw.test(mempsw.value.newpsw2)){
            $('.info3').addClass("warning");
            mempsw.value.info3="Incorrect password format"
        }else if(regex_psw.test(mempsw.value.newpsw2)){
            $('.info3').addClass("pass");
            mempsw.value.info3="Good!";
            return true;
        }
    }else{
        mempsw.value.info3="";
        $('.info3').removeClass("warning");
    }
    return false;
}

</script>

<template>
    <navComponentsVue/>
    <div class="main">
        <menuVue/>
        <div class="maincontent">
            <section class="maininfo">
                <memberCardVue/>
                <memberLevelVue/>
            </section>
            <section class="profiles-list">
                <h1>Profile Overview</h1>
                <form class="tab_panel">
                    <label for="username">Email Address</label>
                    <input type="text" class="input-s" name="username" id="username" maxlength="35" v-model="memberinfo.mem_acc" disabled>
                    <span class="unameinfo"></span>
                    <!-- {{memberinfo.mem_acc}} -->
                    
                    <label for="password">Change Password</label>
                    <input type="button" name="password" id="changepsw" class="change_btn" value="Change Password" @click="lightBoxShow=true">

                    <div class="lightBox" v-if="lightBoxShow">
                        <div class="lightBoxContent">
                            <div class="close" @click="lightBoxClose"></div>
                            <title>Change Password</title>
                            <div>
                                <label for="">Password</label>
                                <input type="password" class="input-s" v-model="mempsw.oldpsw" @input="showinfo1">
                                <span class="info1">{{ mempsw.info1 }}</span>
                                
                                <label for="">New password</label>
                                <input type="password" class="input-s" v-model="mempsw.newpsw" @input="showinfo2">
                                <span class="info2">{{ mempsw.info2 }}</span>
                                
                                <label for="">Enter new password again</label>
                                <input type="password" class="input-s" v-model="mempsw.newpsw2" @input="showinfo3">
                                <span class="info3">{{ mempsw.info3 }}</span>

                                <router-link to="/profile"><button id="comchange" class="change_btn2" @click="changePsw">確認</button></router-link>

                            </div>
                        </div>
                    </div>


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
                        <input type="radio" name="Gender" id="male" value="1" v-model="memberinfo.mem_gender" v-if="memberinfo.mem_gender ==1" checked disabled>
                        <input type="radio" name="Gender" id="male" value="1" v-model="memberinfo.mem_gender" v-else-if="memberinfo.mem_gender ==2" disabled>
                        <label for="male">male</label>
                        <input type="radio" name="Gender" id="female" value="2" v-model="memberinfo.mem_gender" v-if="memberinfo.mem_gender ==1" disabled>
                        <input type="radio" name="Gender" id="female" value="2" v-model="memberinfo.mem_gender" v-else-if="memberinfo.mem_gender ==2" checked disabled>
                        <label for="female">female</label>
                    </div>
                    <!-- {{ memberinfo.mem_gender }} -->

                    
                    <label for="phone_no">Phone number</label>
                    <input type="number" class="input-s" name="phone_no" id="phone_no" maxlength="15" v-model="memberinfo.phone">
                    <span class=""></span>
                    <!-- {{ memberinfo.phone }} -->

                    <label for="address">Address</label>
                    <input type="text" class="input-s" maxlength="15" v-model="memberinfo.city" placeholder="City">
                    <input type="text" class="input-s" maxlength="100" v-model="memberinfo.address" placeholder="Address">
                    <span class=""></span>
                    <!-- {{ memberinfo.city }} -->
                    <!-- {{ memberinfo.address }} -->

                    <div class="action">
                        <button type="">Cancel</button>
                        <!-- <button type="submit">Confirmed</button> -->
                        <router-link to="/member"><button type="submit" id="updateMemberInfo">Confirmed</button></router-link>
                    </div>
                </form>
            </section>
        </div>
    </div>
    <footerComponentsVue />
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';
@import '@/sass/component/_lightBox.scss';
$text-color:#fff;
$link-color:#7abcff;
$btn-color:#007FFB;
$bg-color:rgb(54, 54, 54);
.lightBox{
	@include lightBox();
    background: rgba(0, 0, 0, 0.8);
	.lightBoxContent{
        box-sizing: border-box;
		height: 100vh;
        padding: 40px;
        // width: fit-content;
        // overflow: scroll;
        width: 100vw;
        title{
            display: block;
            font-size: 40px;
            padding: 20px;
            border-bottom: 3px solid rgb(125, 125, 125);
        }
	}
}
label{
    color: $text-color;
}

.warning{
    display: block;
    color: rgb(255, 25, 25);
    font-size: 16px;
    margin: 10px 0;
}
.pass{
    display: block;
    color: #49ff49;
    font-size: 16px;
    margin: 10px 0;
}


header{
    top: 0;
}
section{
    margin: 0;
}
input{
    display: block;
}
.change_btn{
    height: 48px;
    border-radius: 10px;
    font-size: 16px;
    color: $text-color;
    background-color: $btn-color;
    padding: 0 20px;
    margin: 10px 0;
}
.change_btn2{
    width: 100%;
    height: 48px;
    border-radius: 10px;
    font-size: 16px;
    color: $text-color;
    background-color: $btn-color;
    margin: 50px 0 0;
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
    display: block;
    color: #fff;
    .sidenav{
        width: 100%;
        box-sizing: border-box;
    }
    .maincontent{
        width: 100%;
        margin: 0;
        .maininfo{
            display: flex;
            flex-direction: column;
            width: 100%;
            .meminfo{
                aspect-ratio: 16/9;
            }
            .memgrade{
                aspect-ratio: 16/9;
            }
        }
        .profiles-list{
            width: 100%;
            margin:10px 0;
            background-color: #333;
            border-radius: 10px;
            padding: 20px;
            box-sizing: border-box;
            .tab_panel{//內容
                label{
                    display: block;
                    margin-top: 24px;
                }
                .action{
                    display: flex;
                    // gap: 100px;
                    justify-content: space-between;
                    padding-top: 32px;
                    button{
                        // width: 100%;
                        height: 48px;
                        border-radius: 10px;
                        font-size: 16px;
                        color: $text-color;
                        background-color: $btn-color;
                        padding: 0 20px;
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
    .lightBox{
    background: rgba(0, 0, 0, 0.8);
	.lightBoxContent{
        box-sizing: border-box;
		height: 100vh;
        padding: 40px;
        width: fit-content;
        // overflow: scroll;
        title{
            display: block;
            font-size: 40px;
            padding: 20px;
            border-bottom: 3px solid rgb(125, 125, 125);
        }
	}
}
    .main{
        .sidenav{
            display: block;
        }
        .maincontent{
            .profiles-list{
                padding: 50px;
            }
            .maininfo{
                display: grid;
                grid-template-columns: repeat(2,1fr);
                grid-gap: 10px;
                .meminfo{
                    aspect-ratio: 0;
                }
                .memgrade{
                    aspect-ratio: 0;
                }
            }
        }
    }
}
@include m($m-breakpoint) {//>1023px
    .main{
        display: flex;
        .sidenav{
            width: 30%;
        }
        .maincontent{
            width: 70%;
            .profiles-list{
                padding: 70px 100px;
            }
        }
    }
}  
@include l($l-breakpoint) {//>1199px
    
} 
</style>