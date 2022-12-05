<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import $ from 'jquery';
onMounted(() => {

});
const lastNews = reactive([
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "SkyPixel 8th style free ",
        "src": "/images/about/img_05.jpg",
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "src": "/images/about/img_06.jpg",
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "src": "/images/about/img_07.jpg",
    },
    {
        "id": 2,
        "tagName": "FPV",
        "title": "Mens Cotton Jacket",
        "src": "/images/about/img_08.jpg",
    },
    {
        "id": 4,
        "tagName": "Customed",
        "title": "Sol Gold Petite Micropave",
        "src": "/images/about/img_09.jpg",
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "White Gold Plated Princess",
        "src": "/images/about/img_12.jpg",
    },
    //-------------------
    {
        "id": 1,
        "tagName": "Travel",
        "title": "Peak District cloud inversion leaves drone pilot speechless",
        "src": "/images/news/news_04.jpg",
    },
    {
        "id": 4,
        "tagName": "Customed",
        "title": "Drone footage shows deadly Brazil flooding",
        "src": "/images/news/news_02.jpg",
    },
    {
        "id": 2,
        "tagName": "FPV",
        "title": "Drones to track Walsall's off-road bikers",
        "src": "/images/news/news_03.jpg",
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "Frequently Asked Questions About Time Travel",
        "src": "/images/news/news_04.jpg",
    },
    {
        "id": 2,
        "tagName": "FPV",
        "title": "UK drone pilots have 25 days to register with regulator",
        "src": "/images/news/news_05.jpg",
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "A quintessentially Irish way to travel",
        "src": "/images/news/news_06.jpg",
    },
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "Frank Lampard photoshop used to promote New York park",
        "src": "/images/news/news_07.jpg",
    },
    {
        "id": 2,
        "tagName": "FPV",
        "title": "Drone racing: How it works",
        "src": "/images/news/news_08.jpg",
    },
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "Adobe Voco 'Photoshop-for-voice' causes concern",
        "src": "/images/news/news_09.jpg",
    },
    {
        "id": 4,
        "tagName": "Customed",
        "title": "Adult social care reform, Energy credit balances, Revolut fraud victims",
        "src": "/images/news/news_10.jpg",
    },
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "Tones, Drones and Arpeggios: The Magic of Minimalism",
        "src": "/images/news/news_11.jpg",
    },
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "Why mourners are opting to scatter ashes by drone",
        "src": "/images/news/news_12.jpg",
    },
])

// const view = ref(1);
const vsc = ref(false);
const filter = ref(0);
const changeView = (index) => {
    filter.value = index;
}

</script>

<template>
    <div class="tab-tag">
        <button class="tag" @click="changeView(1)">Travel</button>
        <button class="tag" @click="changeView(2)">FPV</button>        
        <button class="tag" @click="changeView(3)">Photoshot</button>
         <button class="tag" @click="changeView(4)">Customed</button>
        <button class="tag" @click="changeView(0)">ALL</button>    
    </div>

    <div class="label">
        <div class="output_content_box cards">
        <div class="content">    
            <div v-for="(item,index) in lastNews" :key="index">
                <Transition name="tad" mode="out-in">
                <div class="card" v-if="filter === 0">
                    <router-link class="anchor" to="/"><img :src="item.src" :alt="item.id"></router-link>
                    <div class="item_box">
                        <div class="item" >{{item.tagName}}</div>
                    </div>
                    <div class="title"><p>{{item.title}}</p></div>
                    <router-link class="article" to="/"><button>Read more &rarr;</button></router-link>
                </div>
                </Transition>
                <Transition name="tad" mode="out-in">
                <div class="card" v-if="filter === 1 && item.id === 1">
                    <router-link class="anchor" to="/"><img :src="item.src" :alt="item.id"></router-link>
                    <div class="item_box">
                        <div class="item" >{{item.tagName}}</div>
                    </div>
                    <div class="title"><p>{{item.title}}</p></div>
                    <router-link class="article" to="/"><button>Read more &rarr;</button></router-link>
                </div>
                </Transition>
                <Transition name="tad" mode="out-in">
                <div class="card" v-if="filter === 2 && item.id === 2">
                    <router-link class="anchor" to="/"><img :src="item.src" :alt="item.id"></router-link>
                    <div class="item_box">
                        <div class="item" >{{item.tagName}}</div>
                    </div>
                    <div class="title"><p>{{item.title}}</p></div>
                    <router-link class="article" to="/"><button>Read more &rarr;</button></router-link>
                </div>
                </Transition>
                <Transition name="tad" mode="out-in">
                <div class="card" v-if="filter === 3 && item.id === 3">
                    <router-link class="anchor" to="/"><img :src="item.src" :alt="item.id"></router-link>
                    <div class="item_box">
                        <div class="item" >{{item.tagName}}</div>
                    </div>
                    <div class="title"><p>{{item.title}}</p></div>
                    <router-link class="article" to="/"><button>Read more &rarr;</button></router-link>
                </div>
                </Transition>
                <Transition name="tad" mode="out-in">
                <div class="card" v-if="filter === 4 && item.id === 4">
                    <router-link class="anchor" to="/"><img :src="item.src" :alt="item.id"></router-link>
                    <div class="item_box">
                        <div class="item" >{{item.tagName}}</div>
                    </div>
                    <div class="title"><p>{{item.title}}</p></div>
                    <router-link class="article" to="/"><button>Read more &rarr;</button></router-link>
                </div>
                </Transition>
            </div>
        </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
@import '@/css/reset.css';
.tad-enter-active {
  animation: tad-in 1.5s;
}
.tad-leave-active {
  animation: tad-in 0.5s reverse;
}
@keyframes tad-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}


.tab-tag {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.tag {    border-radius: 10px;
    background: transparent;
    color: #eeeeee;
    border: 2px solid #eeeeee;
    padding: 10px 15px;
    margin: 10px;
    cursor: pointer;
}



.display {
    display: none;
    color: red;
}
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
