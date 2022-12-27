<script setup>
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import menuVue from '@/components/memberCenter/menu.vue';
import memberCardVue from '@/components/memberCenter/memberCard.vue';
import memberLevelVue from '@/components/memberCenter/memberLevel.vue';


// import $ from 'jquery';
import { ref, onMounted,reactive,computed,watch } from 'vue';
// import { Script } from 'vm';

const memberinfo =ref({});
onMounted(()=> {
    getMemLevel();
    
    function getMemLevel(){
        fetch('/dist/g5PHP/getMemLevel.php',{
                method: "get",
            })
            .then((res) => res.json())//將php response的內容轉成json格式
            .then(mem =>{//該json
                console.log(mem);
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
                    console.log(memberinfo.value);
                    // memberinfo.value.mem_first_name = mem.mem_first_name;
                    // memberinfo.value.mem_email = mem.mem_email;
                    // memberinfo.value.mem_grade = mem.mem_grade;
                    // memberinfo.value.mem_points = mem.mem_points;
                }
            })
            .catch(error =>console.log(error));
    }

    document.getElementById('updateMemberInfo').onclick = sendForm;

    function sendForm(){  
            let formData = new FormData(); // 一開始表單的資料是空的
            formData.append('mem_acc', memberinfo.value.mem_acc);
            formData.append('mem_first_name', memberinfo.value.mem_first_name); 
            formData.append('mem_last_name', memberinfo.value.mem_last_name);
            formData.append('city', memberinfo.value.city); 
            formData.append('address', memberinfo.value.address); 
            formData.append('phone', memberinfo.value.phone); 
            fetch('/dist/g5PHP/updateMember.php',{
                method: "post",
                body: formData,
            })
            .then((res) => res.text())//php echo的內容
            .then(text =>alert(text))
            .catch(error =>console.log(error));

        }//function_checkId 
    
});


const lightBoxClose = () => {
	lightBoxShow.value = false;
};
const lightBoxShow = ref(false);

function changePsw(){
    lightBoxShow.value = true;
    fetch('/dist/g5PHP/updateMemPassword.php',{
                method: "post",
                // body : ,
    })
    .then((res) => res.json())//php echo的內容
    .then(text =>alert(text))
    .catch(error =>console.log(error));


}








//address
// const state = reactive({
//     frameworksIdx: 0, // 記錄第一層選單的被選取項目
//     contentsIdx: 0, // 記錄第二層選單的被選取項目
//     frameworks : [
//         {
//             type: 'Choose Your Location',
//             contents: [
//                 { name: 'Choose Your Country'},
//             ],
//         },
//         {
//             type: 'AMERICAS',
//             contents: [
//                 { name: 'USA'},
//                 { name: 'Brasil'},
//                 { name: 'Canada(English)'},
//                 { name: 'Canada(Français)'},
//                 { name: 'Mexico'},
//             ],
//         },
//         {
//             type: 'EUROPE',
//             contents: [
//                 { name: 'Belgium'},
//                 { name: 'Denmark (English)'},
//                 { name: 'Deutschland'},
//                 { name: 'Finland (English)'},
//                 { name: 'France'},
//                 { name: 'Ireland'},
//                 { name: 'Italia'},
//                 { name: 'Luxembourg (English)'},
//                 { name: 'Monaco (English)'},
//                 { name: 'Nederland (English)'},
//             ],
//         },
//         {
//             type: 'ASIA',
//             contents: [
//                 { name: '台灣'},
//                 { name: '中國大陸'},
//                 { name: '日本'},
//                 { name: '대한민국'},
//                 { name: '香港特別行政區'},
//                 { name: 'Singapore'},
//                 { name: 'ประเทศไทย'},
//                 { name: 'Việt Nam'},
//             ],
//         },
//         {
//             type: 'OCEANIA',
//             contents: [
//                 { name: 'Australia'},
//                 { name: 'New Zealand'},
//             ],
//         },
//         {
//             type: 'MIDDLE EAST',
//             contents: [
//                 { name: 'UAE (English)'},
//                 { name: 'Kuwait (English)'},
//                 { name: 'KSA (English)'},
//             ],
//         },
//     ],
// });
// const pickContents = computed(() => {
//     return state.frameworks[state.frameworksIdx].contents;
// });
// watch(() => state.frameworksIdx, (value) =>{
//     state.contentsIdx = 0;
// });





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
                    <input type="button" name="password" id="changepsw" maxlength="20" value="Change Password" @click="lightBoxShow=true">

                    <div class="lightBox" v-if="lightBoxShow">
                        <div class="lightBoxContent">
                            <div class="close" @click="lightBoxClose"></div>
                            <title>修改密碼</title>
                            <div>
                                <label for="">舊密碼</label>
                                <input type="text">
                                <label for="">新密碼</label>
                                <input type="text">
                                <label for="">確認密碼</label>
                                <input type="text">
                                <router-link to="/profile"><button id="nochange">取消</button></router-link>
                                <router-link to="/member"><button id="comchange" @click="changePsw">確認</button></router-link>

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
                    <!-- <select name="city" id="" class="input-s">
                        <option>CHOOSE YOUR LOCATION</option>
                        <option :value="i" v-for="i in city" :key="i">{{i}}</option>
                    </select> -->
                    <!-- <div class="selcon">
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
                    </div> -->
                    <input type="text" class="input-s" name="" id="" maxlength="15" v-model="memberinfo.city" placeholder="City">
                    <input type="text" class="input-s" name="" id="" maxlength="100" v-model="memberinfo.address" placeholder="Address">
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
	.lightBoxContent{
		height: 300px;
	}
}
label{
    color: $text-color;
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
    
    .maincontent{
        width: 100%;
        margin: 0;
        .maininfo{
            display: block;
        }
        .profiles-list{
            width: 100%;
            margin:10px 0;
            background-color: #333;
            border-radius: 10px;
            padding: 20px;
            box-sizing: border-box;
            .tab_panel{
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
                // display: flex;
                display: grid;
                grid-template-columns: repeat(2,1fr);
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