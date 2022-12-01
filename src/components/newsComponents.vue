<script setup>
import { computed, onMounted, reactive, ref } from 'vue';

onMounted(() => {
//    tagGame();
});


const lastNews = reactive({
    data: {
        "id": 1,
        "boolean": true,
        "tagName": "Games",
        "title": "SkyPixel 8th style free ",
        "src": "/images/about/img_05.jpg",
        "tag": {
            "game": true,
            "custom": true,
            "photoshot": true,
        },
    },
    data2:{
        "id": 2,
        "tagName": "Customed",
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "src": "/images/about/img_06.jpg",
        "tag": {
            "game": true,
            "custom": true,
            "photoshot": true,
        },
    },
    data3:{
        "id": 2,
        "tagName": "Customed",
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "src": "/images/about/img_07.jpg",
        "tag": {
            "game": true,
            "custom": true,
            "photoshot": true,
        },
    },
    data4:{
        "id": 3,
        "tagName": "Photoshot",
        "title": "Mens Cotton Jacket",
        "src": "/images/about/img_08.jpg",
        "tag": {
            "game": true,
            "custom": true,
            "photoshot": true,
        },
    },
    data5:{
        "id": 1,
        "boolean": true,
        "tagName": "Games",
        "title": "Sol Gold Petite Micropave",
        "src": "/images/about/img_09.jpg",
        "tag": {
            "game": true,
            "custom": true,
            "photoshot": true,
        },
    },
    data6:{
        "id": 1,
        "tagName": "Games",
        "boolean": true,
        "title": "White Gold Plated Princess",
        "src": "/images/about/img_12.jpg",
        "tag": {
            "game": true,
            "custom": true,
            "photoshot": true,
        },
    },
})
const view = reactive(true);
// console.log(this.lastNews)
    let cache = reactive(lastNews.data4.tag.game);
    console.log(view)
    console.log(cache)
    // const 
    const tagGame = computed((item) => {
         item.data2.tag.game === true
        
    })
    // return cache
</script>

<template>

    <button @click="tagCustom">Customed</button>
    <button @click="tagGame">Games</button>
    <button @click="tagOutput">Output</button>

    <div class="label">
        <div class="output_content_box cards">
        <div class="content">    
            <div class="card" v-for="(item,index) in lastNews" :key="index"> 
                <router-link class="anchor" to="/"><img :src="item.src" :alt="item.id"></router-link>
                <div class="item_box">
                    <div class="item" >{{item.tagName}}</div>
                </div>
                <div class="title"><p>{{item.title}}</p></div>
                <router-link class="article" to="/"><button>Remove &rarr;</button></router-link>  
            </div>
        </div>
        </div>
    </div>
    <!-- <div class="label">
        <div class="output_content_box cards">
        <div class="content">    
            <div class="card" v-for="(icon,index) in test" :key="index"> 
                <router-link class="anchor" to="/"><img :src="icon.src" :alt="icon.id"></router-link>
                <div class="item_box">
                    <div class="item">{{icon.tagName}}</div>
                </div>
                <div class="title"><p>{{icon.title}}</p></div>
                <router-link class="article" to="/"><button>Remove &rarr;</button></router-link>  
            </div>
        </div>
        </div>
    </div> -->
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
@import '@/css/reset.css';
.newsPage {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    // background: #fff;
    .card {
        width: 33.3333%;
        img {
            width: 100%;
        }
    }
}


.cards{
    width: 100%;
    .content{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .card{
            position: relative;
            width: 170px;
            height: 220px;
            margin: 5px;
            border-radius: 5px;
            transition: 0.5s all;
            background-color: #0F1F3D;
            overflow: hidden;
            &:hover{
                height: 190px;
                transform: scale(1.05);
            }
            &:hover button{
                opacity: 1;
            }
            img{
                width: 100%;
                height: 150px;
                border-radius: 5px 5px 0 0;
            }
            .item_box{
                display: flex;
                .item{
                    display: flex;
                    width: 50px;
                    margin:  15px;
                    padding: 10px;
                    justify-content: center;
                    color: rgb(190, 190, 190);
                    border: 1px solid rgb(170, 170, 170);
                    cursor: pointer;
                    background-color: transparent;
                    margin: 5px;
                    padding: 3px;
                    border-radius: 3px;
                    font-size: 13px;
                    transition: 0.5s all;
                    font-family: 'Poppins', sans-serif;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            p{
                margin: 5px 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            button{
                position: absolute;
                bottom: 0px;
                opacity: 0;
                width:100%;
                height: 30px;
                background-color: $blue;
                color: #fff;
                font-size: 18px;
                align-items: center;
                border-radius: 5px;
                border: none;
                transition: 0.5s all;
                cursor: pointer;
                &:hover{
                    background-color: #1f64e4;
                }
            }
        }
        @include m($m-breakpoint){
            
            .card{
                width: 290px;
                height: 280px;
                margin: 10px;
                padding: 0;
                &:hover{
                    height: 250px;
                    transform: scale(1.05);
                }
                &:hover button{
                opacity: 1;
                }
                img{
                    height: 200px;
                    object-fit: cover;
                }
                .item_box{
                    .item{
                        width: 70px;
                    }
                }
                button{
                    position: absolute;
                    bottom: -5px;
                    opacity: 0;
                    width:100%;
                    height: 48px;
                    background-color: $blue;
                    color: #fff;
                    font-size: 18px;
                    align-items: center;
                    border-radius: 5px;
                    border: none;
                    transition: 0.5s all;
                    cursor: pointer;
                    &:hover{
                        background-color: #1f64e4;
                    }
                }
            }
        }
        @include l($l-breakpoint){
            .card{
                width: 350px;
                height: 320px;
                &:hover{
                    height: 260px;
                    transform: scale(1.05);
                }
                img{
                    height: 210px;
                }

            }
        }
    }
}



</style>
