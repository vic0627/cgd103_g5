<script>
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import {bodyInit} from '../composables/useOnunmounted';
bodyInit();

export default{
  components:{
    navComponentsVue,
    footerComponentsVue
  }
}

</script>

<template>
<navComponentsVue />

<div class="article">
    <div class="title_box">
        <h2>SkyPixel 8th style free </h2>
    </div>
    <div class="box">
        <div class="img_box">
            <img src="../assets/images/About/img_01.jpg" alt="img">
        </div>
        <div class="word_box">
            <p>
                Will Robson gets exclusive access to some of the British military's most secretive, sophisticated and controversial drones, and talks to the men and women who operate them. He gets an insider perspective on what it means to fight a war remotely, and finds out how long distant combat affects those at the controls.
            </p>
        </div>
    </div>
    <div class="box">
        <div class="img_box">
            <img src="../assets/images/About/img_01.jpg" alt="img">
        </div>
        <div class="word_box">
            <p>
                In a remote corner of west Wales, in a matt green shipping container, a group of engineers and military officials crowd around a high-tech bank of screens and joysticks. A monitor feeds them live aerial footage of the Carmarthenshire coastline. The image is crisp, they can make out dolphins swimming in the wake of a fishing trawler. They're testing the limits of the British Army's Watchkeeper surveillance drone, one of a new fleet of Unmanned Aerial Systems (UAS) which have an £850m pound price tag.
            </p>
            <p>
                While the military have welcomed UAS as a way of reducing costs and casualties, not everyone is convinced. Critics say that drones could bring an age of airborne occupation and dispassionate warfare. They claim that when war can be fought without consequence to the aggressor, violence quickly becomes easier than diplomacy.
            </p>
        </div>
    </div>
</div>
<footerComponentsVue />

</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
body{
    overflow: hidden;
}
.article{
    width: 100%;
    padding-top: 100px;
    overflow: hidden;

    .title_box{
        width: 100%;
        text-align: center;
    }
    .box{
        width: 100%;
        max-width: 1200px;
        margin: 30px auto;
        // text-align: center;
        .img_box{
            width: 90%;
            margin: auto;
            img{
                border: 2.5px solid #fff;
                width: 100%;
                border-radius: 5px;
                object-fit: cover;
            }
        }
        .word_box{
            width: 90%;
            margin: 15px 5px;
            padding: 15px;
            p{
                margin: 15px 0;
            }
        }
        @include m($m-breakpoint){
        .word_box{
            margin: auto;
        }
    }
    }
    @include m($m-breakpoint){
        .word_box{
            margin: auto;
        }
        .img_box{
            img{
                height: 600px;
                object-position: center 18%;
                object-fit: cover;
            }
        }
    }
}
</style>