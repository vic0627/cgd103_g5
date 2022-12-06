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
        <h2>TITLE</h2>
    </div>
    <div class="box">
        <div class="img_box">
            <img src="../assets/images/About/img_01.jpg" alt="img">
        </div>
        <div class="word_box">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt recusandae odit impedit facilis expedita soluta! Asperiores obcaecati laudantium, ipsam beatae unde laboriosam eum pariatur ad numquam quos magni voluptatum omnis, repellendus, possimus similique. Amet, rem explicabo animi quod maxime, porro repudiandae earum vel sint modi, non facere libero omnis ea?
            </p>
        </div>
    </div>
    <div class="box">
        <div class="img_box">
            <img src="../assets/images/About/img_01.jpg" alt="img">
        </div>
        <div class="word_box">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt recusandae odit impedit facilis expedita soluta! Asperiores obcaecati laudantium, ipsam beatae unde laboriosam eum pariatur ad numquam quos magni voluptatum omnis, repellendus, possimus similique. Amet, rem explicabo animi quod maxime, porro repudiandae earum vel sint modi, non facere libero omnis ea?
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt recusandae odit impedit facilis expedita soluta! Asperiores obcaecati laudantium, ipsam beatae unde laboriosam eum pariatur ad numquam quos magni voluptatum omnis, repellendus, possimus similique. Amet, rem explicabo animi quod maxime, porro repudiandae earum vel sint modi, non facere libero omnis ea?
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