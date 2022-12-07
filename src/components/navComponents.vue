<script setup>
import { reactive, onMounted } from 'vue';
const mainMenu = reactive([
    {
        "id": "shop",
        "name": "STORE",
    },
    {
        "id": "custom",
        "name": "CUSTOM",
    },
    {
        "id": "about",
        "name": "ABOUT",
    },
    {
        "id": "race",
        "name": "RACE",
    },
    {
        "id": "news",
        "name": "NEWS",
    },
])
onMounted(() => {
    // console.log(mainMenu);
});
const NavClass = defineProps({
    home:{
        type: String,
        default:'',
    },
    news:{
        type: String,
        default:'',
    },
    about:{
        type: String,
        default:'',
    }
});

// :style="NavClass.className"
</script>

<template>
    <header>
        <div class="header">
            <div class="logo">
                <router-link class="header-link" to="/home">
                    <img src="@/assets/images/home/g5_logo_EFVP_Horz.png" alt="LOGO">
                </router-link>
            </div>
            <input type="checkbox" id="active">
            <label for="active" class="menu-btn"><span></span></label>
            <label for="active" class="close"></label>
            <div class="wrapper">
                <ul>
                    <li v-for="(item,index) in mainMenu" :key="index">
                            <router-link class="navHover" :to="`/${item.id}`">{{item.name}}</router-link>
                    </li>
                    <div class="icon-wrap">
                        <li><router-link to="/signin" class="shop"><img src="../assets/images/home/icon1.png" alt="member"></router-link></li>
                        <li><router-link to="/cart" class="shop"><img src="../assets/images/home/icon2.png" alt="cart">
                        </router-link></li>
                    </div>
                </ul>
            </div>
                <div class="menu">
                <ul>
                    <!-- <li v-for="(item,index) in mainMenu" :key="index">
                        <router-link class="navHover" :to="`/${item.id}`">{{item.name}}</router-link>
                    </li> -->
                    <li><router-link to="/shop" class="navHover">STORE</router-link></li>
                    <li><router-link to="/custom" class="navHover">CUSTOM</router-link></li>
                    <li><router-link to="/about" class="navHover">ABOUT</router-link></li>
                    <li><router-link to="/race" class="navHover">RACE</router-link></li>
                    <li><router-link to="/news" class="navHover">NEWS</router-link></li>
                </ul>
            </div>
            <div class="shop-cart">  
                <router-link to="/signin" class="shop"><img src="../assets/images/home/icon1.png" alt="member"></router-link>   
                <router-link to="/cart" class="shop"><img src="../assets/images/home/icon2.png" alt="cart">
                </router-link>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
@import '@/css/reset.css';

header {
    top: 0;
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 70px;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 70px;
        z-index: -1;
        background: rgba(#000,0.4);
        backdrop-filter:blur(20px);
    }
}
.header-link {
    margin: auto;   
    display: flex;
}
.header {
    display: flex;
    height: 70px;
    .logo {
        width: 60%;
        margin: 10px 20px;
        display: flex;
        // align-items: center;
        // align-self: center;
        @include s($s-breakpoint) {
            width: 30%;
        }
        img {
            width: 100%;
        }
        @include l($l-breakpoint) {
            width: 300px;
        }
    }
    .menu {
        opacity: 0;
        @include l($l-breakpoint) {
            opacity: 1;
            width: 700px;
        }
    }
    .shop-cart {
        display: none;
        @include l($l-breakpoint) {
            width: 150px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .shop {
                width: 40%;
                img {
                width: 60%;
                height: 85%;
                padding: 10px;
                &:hover{
                    filter: invert(50%) sepia(51%) saturate(7497%) hue-rotate(194deg) brightness(97%) contrast(108%);
                }
                }    
            }
            
        }
    }
}
.wrapper{
    position: fixed;
    top: 0;
    right: -100%;
    height: 100%;
    width: 100%;
    background: #000;
    z-index: 10;
    transition: all 0.6s ease-in-out;
    .icon-wrap {
        display: flex;
    }
}
#active:checked ~ .wrapper{
    right:0;
}
.menu-btn{
    position: absolute;
    z-index: 21;
    right: 20px;
    /*left: 20px; */
    top: 10px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.menu-btn span,
.menu-btn:before,
.menu-btn:after{
	content: "";
	position: absolute;
	top: calc(50% - 1px);
	left: 30%;
	width: 40%;
	border-bottom: 2px solid #ffffff;
	transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu-btn:before{
    transform: translateY(-8px);
}
.menu-btn:after{
    transform: translateY(8px);
}


.close {
	z-index: 1;
	// width: 100%;
	// height: 100%;
	pointer-events: none;
	transition: background .6s;
}

/* closing animation */
#active:checked + .menu-btn span {
	transform: scaleX(0);
}
#active:checked + .menu-btn:before {
	transform: rotate(45deg);
    border-color: #fff;
}
#active:checked + .menu-btn:after {
	transform: rotate(-45deg);
  border-color: #fff;
}
.wrapper ul{
    position: absolute;
    top: 60%;
    left: 50%;
    height: 90%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
}
.wrapper ul li{
    height: 10%;
    margin: 15px 0;
}
.wrapper ul li .navHover{
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    padding: 5px 30px;
    color: #fff;
    //   border-radius: 50px;
    position: absolute;
    line-height: 50px;
    margin: 5px 30px;
    opacity: 0;
    transition: all 0.3s ease;
    transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.wrapper .icon-wrap li {
    opacity: 0;
    transition: all 0.6s ease;
}

.wrapper ul li .navHover:hover:after{
    transform: scaleY(1);
}
.wrapper ul li .navHover:hover{
    color: $blue;
    border-bottom: 2px solid $blue;
    transform: .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
input[type="checkbox"]{
    display: none;
}

#active:checked ~ .wrapper ul li .navHover{
    opacity: 1;
}
#active:checked ~ .wrapper .icon-wrap li {
    opacity: 1;
}
.wrapper ul li .navHover{
    transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(100px);
}
.wrapper .icon-wrap li {
    transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(100px);
}
#active:checked ~ .wrapper .icon-wrap li {
    transform: none;
	transition-timing-function: ease, cubic-bezier(.1,1.3,.3,1);
    transition-delay: 1s;
    transform: translateX(0px);
}
#active:checked ~ .wrapper ul li .navHover{
	transform: none;
	transition-timing-function: ease, cubic-bezier(.1,1.3,.3,1);
    transition-delay: .6s;
    transform: translateX(-100px);
}


.img {
    img {
        width: 60%;
        position: relative;
        z-index: 2;
    }
}


@include l($l-breakpoint) {
    // header,.header {
    //     height: 70px;
    //     &::before {
    //         height: 70px;
    //     }
    // }
    .header {
        width: 1200px;
        margin: 0 auto;
    }   
    #active,.menu-btn,.close {
        display: none;
    }
    .menu {
        display: flex;
        align-content: center;
        justify-content: flex-end;
    }
    
    .menu > ul {
        display: flex;
        align-items: center;
        li {
            margin-right: 30px;
            .navHover {
                font-size: 18px;  
                padding-bottom: 5px;
                padding-top: 10px;
                overflow: hidden;
                position: relative;
                display: inline-block;
                
                &:hover{
                    color: $blue;
                    transform: scale(1.05);
                    transition: all 0.3s ease-in-out;
                }
                &:focus {
                    color: $blue;
                }
                &::before {
                    content: "";
                    left: 0;
                    bottom: 3px;
                    width: 100%;
                    color: $blue;
                    height: 3px;
                    background: $blue;
                    transform: translateX(-101%);
                    position: absolute;
                    
                }
                &:hover::before{
                    transform: translateX(0);
                    transition: transform 0.4s ease-in-out;
                }
            }
        }
    }
}
</style>
