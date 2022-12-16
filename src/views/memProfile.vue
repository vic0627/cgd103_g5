<script setup>
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import menuVue from '@/components/memberCenter/menu.vue';
import memberCardVue from '@/components/memberCenter/memberCard.vue';
import memberLevelVue from '@/components/memberCenter/memberLevel.vue';
// import $ from 'jquery';
import { ref, onMounted,reactive,computed,watch } from 'vue';

onMounted(()=> {
    
});

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
                    <!-- <select name="city" id="" class="input-s">
                        <option>CHOOSE YOUR LOCATION</option>
                        <option :value="i" v-for="i in city" :key="i">{{i}}</option>
                    </select> -->
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
                        <button type="">Cancel</button>
                        <button type="submit">Confirmed</button>
                    </div>
                </form>
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
    color: $text-color;
    
    .maincontent{
        width: 100%;
        margin: 0;
        .maininfo{
            // display: flex;
            // gap: 10px;
            display: block;
        }
        .profiles-list{
            width: 100%;
            // height: 500px;
            margin:10px 0;
            background-color: #333;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 10px;
            .tab_panel{
                label{
                    display: block;
                    margin-top: 24px;
                }
                .action{
                    display: flex;
                    gap: 100px;
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