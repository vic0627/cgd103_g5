<script setup>
import headerComponentsVue from '@/components/headerComponents.vue';
import $ from 'jquery';
import { ref, onMounted } from 'vue';

onMounted(()=> {
    $('.List-item>a').parent().siblings().find('ul').hide();
    $('.List-item>a').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
        // $(this).parent().siblings().find('a').removeClass('rmminus');
        // $(this).toggleClass('rmminus');
    });
})

const sidenav = ref({
    account :{
        title : "Account",
        list : ["Profile Overview"],
    },
    order :{
        title : "Orders",
        list : ["Normal Orders","Customized Orders"],
    },
    racing :{
        title : "Racing",
        list : ["My Racing"],
    },
    person :{
        title : "Personal Setting",
        list : ["Payment"],
    }
});

const isShow = ref(false)

</script>

<template>
    <headerComponentsVue />
    <div class="main">
        <nav class="sidenav" >
            <li class="List-item" v-for="item in sidenav" :key="item">
                <a href="">{{item.title}}</a>
                <ul class="subitem">
                    <li class=""  v-for="i in item.list" :key="i" >{{i}}</li>
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
                // background-image: linear-gradient(135deg, rgb(156, 114, 15), gold);
                background: linear-gradient(-200deg, #f9f48f, #fbc65d, #e8b443, #e4b445);
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