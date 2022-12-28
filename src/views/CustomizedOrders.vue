<script setup>
// import headerComponentsVue from '@/components/headerComponents.vue';
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import menuVue from '@/components/memberCenter/menu.vue';
import memberCardVue from '@/components/memberCenter/memberCard.vue';
import memberLevelVue from '@/components/memberCenter/memberLevel.vue';
import { log, $$, $all, getW, BIND_URL }from "../composables/useCommon" ;
import $ from 'jquery';
import { ref, onMounted } from 'vue';

onMounted(()=> {});


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
            <section class="profiles-list">
                <!-- 內容 -->
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
.main{
    max-width: 1200px;
    width: 100%;
    margin: 90px auto;
    color: $text-color;
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
            height: 500px;//有內容後就刪掉
            margin:10px 0;
            background-color: #333;
            border-radius: 10px;
            padding: 20px;
            box-sizing: border-box;
        }
    }
}
@include s($s-breakpoint) {//>575px
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
                gap: 10px;
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


</style>