<script setup>
import headerComponentsVue from '@/components/headerComponents.vue';
import $ from 'jquery';
import { ref, onMounted } from 'vue';

onMounted(()=> {
    $('.List-item>a').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
        // $(this).parent().siblings().find('a').removeClass('rmminus');
        // $(this).toggleClass('rmminus');
    });

})
</script>

<template>
    <headerComponentsVue />
    <div class="main">
        <nav class="sidenav">
            <li class="List-item">
                <a href="">Account</a>
                <ul class="subitem">
                    <li class="">Profile Overview</li>
                </ul>
            </li>
            <li class="List-item">
                <a href="">Orders</a>
                <ul class="subitem">
                    <li class="">Normal Orders</li>
                    <li class="">Customized Orders</li>
                </ul>
            </li>
            <li class="List-item">
                <a href="">Racing</a>
                <ul class="subitem">
                    <li class="">My Racing</li>
                </ul>
            </li>
            <li class="List-item">
                <a href="">Personal Setting</a>
                <ul class="subitem">
                    <li class="">Payment</li>
                </ul>
            </li>
        </nav>
        <div class="maincontent">
            <section class="maininfo">
                <div class="meminfo"></div>
                <div class="memgrade"></div>
            </section>
            <section class="profiles-list">
                
            </section>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';
section{
    margin: 0;
}
input{
    display: block;
}
.main{
    max-width: 1200px;
    width: 100%;
    margin: 50px auto;
    display: flex;
    justify-content: start;
    gap: 10px;
    .sidenav{
        width: 25%;
        height: fit-content;
        background-color: #1C2023;
        padding: 20px;
        border-radius: 10px;
        .List-item{
            padding: 10px;
            a{
                font-size: 15px;
            }
            .subitem{
                // display: none;
                padding: 10px 0 10px 20px;
            }
        }
    }
    .maincontent{
        width: 75%;
        margin: 0;
        .maininfo{
            display: flex;
            gap: 10px;
            .meminfo{
                width: 500px;
                aspect-ratio: 16/9;
                background-image: linear-gradient(135deg, rgb(156, 114, 15), gold);
                border-radius: 10px;
            }
            .memgrade{
                flex-grow: 1;
                height: auto;
                background-color: #616574;
                border-radius: 10px;
            }
        }
        .profiles-list{
            width: 100%;
            height: 500px;
            margin:10px 0;
            background-color: #8E8E8E;
            opacity: 0.2;
            border-radius: 10px;
        }
    }
}
</style>