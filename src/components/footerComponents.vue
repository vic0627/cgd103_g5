<script setup>
import { ref, onMounted, reactive } from 'vue';


</script>

<template>
    <footer>
        <div class="container">
            <div class="footer">
                <div class="foot-item">
                    <nav>
                        <h4>Drones</h4>
                        <router-link class="footer-link" to="/custom">Custom</router-link>
                        <router-link class="footer-link" to="/shop">Accossiries</router-link>
                        <router-link class="footer-link" to="/shop">Bundle</router-link>
                    </nav>
                </div>
                <div class="foot-item">
                    <nav>
                        <h4>About</h4>
                        <router-link class="footer-link" to="/about">About us</router-link>
                        <router-link class="footer-link" to="/news">News</router-link>
                        <router-link class="footer-link" to="/shop">F&Q</router-link>
                    </nav>
                </div>
                <div class="foot-item">
                    <nav>
                        <h4>Service</h4>
                        <router-link class="footer-link" to="/game">Game</router-link>
                        <router-link class="footer-link" to="/race">Race search</router-link>
                        <router-link class="footer-link" to="/shop">Order status</router-link>
                    </nav>
                </div>
                <div class="foot-item">
                    <nav>
                        <h4>Service</h4>
                        <router-link class="footer-link" to="/game">Game</router-link>
                        <router-link class="footer-link" to="/race">Race search</router-link>
                        <router-link class="footer-link" to="/shop">Order status</router-link>
                    </nav>
                </div>
            </div>
            <div class="footer-logo">
                <div class="footer-logo-pic">
                    <img src="../assets/images/home/g5_logo_EFVP_Horz.png" alt="">
                </div>
                <!-- <div class="footer-logo-txt">
                    <p>Tel : (020)308-6699</p>
                    <p>Addres : No. 46, Fuxing Road, Zhongli District</p>
                </div> -->
            </div>
            <div class="copyright">
                <p>Copyright &copy;  This platform protects learning policies and displays.</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
@import '@/css/reset.css';
footer {
    background: #0E1621;
    .footer-logo {
        display: flex;
        flex-direction: column;
        align-content: center;
        text-align: center;
        .footer-logo-pic {
            @include flexCenter($center);
            margin: 40px 0;
            img {
                width: 80%;
            }
        }
        .footer-logo-txt {
            text-align: center;
            p {
                margin: 10px 0;
            }
        }
    }
    .copyright {
        width: 90%;
        margin: 20px auto;
        border-top: 1px solid #eeeeee;
        text-align: center;
        p {
            margin: 10px 0;
        }
    }
}
.footer {
    width: 100%;
    padding-top: 50px;
    display: flex;
    flex-wrap: wrap;
    .foot-item {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0;
        nav {
            margin: 10px;
            display: flex;
            flex-direction: column;
            .footer-link {
                margin: 5px 0;
                color: #ccc;
                font-size: 18px;
                &:hover {
                    transform: scale(1.03);
                    color: #e8e8e8;
                    transition: all 0.5s;
                }
            }
        }
    }
}
@include m($m-breakpoint){
    .container {
        display: flex;
        flex-wrap: wrap;
        .footer {
            width: 70%;
            padding-top: 20px;
            .foot-item {
                width: 25%;
                h4 {
                    font-size: 24px;
                }
            }
        }
        .footer-logo {
            width: 30%;
            justify-content: center;
            .footer-logo-txt {
                text-align: left;
            }
            .footer-logo-pic {
                padding: 10px;
                img {
                    width: 100%;
                }
            }
        }
    }
}
@include l($l-breakpoint){
    .container {
        width: 1200px;
        margin: 0 auto;
         .copyright {
            width: 100%;
        }
    } 
}
</style>
