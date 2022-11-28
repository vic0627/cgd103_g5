<script setup>
import { ref, onMounted } from 'vue';
const mainMenu = {
    drones: "DRONES",
    about: "ABOUT",
    game: "GAME",
    contest: "CONTEST",
    news: "NEWS"
}
onMounted(() => {
    console.log(mainMenu);
})


</script>

<template>
    <!-- <nav>
        <router-link class="anchor" to="/">Home</router-link>
        <router-link class="anchor" to="/about">About</router-link>
        <router-link class="anchor" to="/news">News</router-link>
        <router-link class="anchor" to="/shop">Shop</router-link>
        <router-link class="anchor" to="/shop/shopInfo">shopInfo</router-link>
        <router-link class="anchor" to="/cart">Cart</router-link>
        <router-link class="anchor" to="/game">Game</router-link>
        <router-link class="anchor" to="/custom">Custom</router-link>
        <router-link class="anchor" to="/showcase">Showcase</router-link>
        <router-link class="anchor" to="/race">Race</router-link>
        <router-link class="anchor" to="/member">Member</router-link>
    </nav> -->
    <header>
            <div class="header">
                <div class="logo">
                    <img src="@/assets/images/home/g5_logo_EFVP_Horz.png" alt="LOGO">
                </div>
                <input type="checkbox" id="active">
                <label for="active" class="menu-btn"><span></span></label>
                <label for="active" class="close"></label>
                <div class="wrapper">
                    <ul>
                        <li v-for="(item,index) in mainMenu" :key="index">
                            <a href="#">{{item}}</a>
                        </li>
                    </ul>
                </div>
                 <div class="menu">
                    <ul>
                        <li v-for="(item,index) in mainMenu" :key="index">
                            <a href="#" class="navHover">{{item}}</a>
                        </li>
                    </ul>
                </div>
                <div class="shop-cart">     
                    <img src="@/assets/images/home/icon1.png" alt="cart1">
                    <img src="@/assets/images/home/icon2.png" alt="cart2">
                </div>
            </div>
    </header>
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
@import '@/css/reset.css';

header {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 80px;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 80px;
        z-index: -1;
        background: rgba(#000,0.4);
        backdrop-filter:blur(20px);
    }
}
.header {
    display: flex;
    height: 80px;
    .logo {
        width: 60%;
        margin: 10px 20px;
        display: flex;
        align-content: center;
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
            width: 200px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img {
                width: 30%;
                height: 85%;
                padding: 10px;
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
    // background: rgba(#000,0.2);
    // backdrop-filter:blur(10px);
    z-index: 10;
    transition: all 0.6s ease-in-out;
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
.wrapper ul li a{
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
// .wrapper ul li a:after{
//   position: absolute;
//   content: "";
//   background: #fff;
//    /*background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);*/
//   /*background: linear-gradient(375deg, #1cc7d0, #2ede98);*/
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top: 0;
//   border-radius: 50px;
//   transform: scaleY(0);
//   z-index: -1;
//   transition: transform 0.3s ease;
// }
.wrapper ul li a:hover:after{
    transform: scaleY(1);
}
.wrapper ul li a:hover{
    color: $blue;
    border-bottom: 2px solid $blue;
    transform: .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
input[type="checkbox"]{
    display: none;
}

#active:checked ~ .wrapper ul li a{
    opacity: 1;
}
.wrapper ul li a{
    transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(100px);
}
#active:checked ~ .wrapper ul li a{
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
    header,.header {
        height: 70px;
        &::before {
            height: 70px;
        }
    }
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
                    transform: scale(1.05   );
                    transition: all 0.3s ease-in-out;
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
