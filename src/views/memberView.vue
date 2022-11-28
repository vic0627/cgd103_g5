<script>
import { onMounted, registerRuntimeCompiler} from 'vue';

// import {useMotion} from '@vueuse/motion';




</script>

<template>

<section class="member">

    <div class="member_box">
        <div class="member_top">
            <div class="member_card">
                <div class="card_top">
                    <img src="../assets/images/member/mem_img.png" alt="head_sticker">
                    <div class="card_top_word">
                        <p class="welcome">Welcome!</p>
                        <h2 class="mem_name">Thr Odinson</h2>
                    </div>
                </div>
                <div class="card_down">
                    <div class="gold_box">
                        <img src="../assets/images/member/mem_img02.png" alt="badge">
                        <p>Gold Member</p>
                    </div>
                    <div class="point_box">
                        <p class="point_txt">
                            POINTS <span>56,813</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="member_drone">
                <h2>FPV Name</h2>
                <img src="../assets/images/member/mem_drone02.png" alt="drone">
                <router-link class="drone_more" to="/"><button>Leam more</button></router-link>
            </div>
        </div>
        <!-- <div class="mem_down">
            <div class="round_item">
                <router-link class="anchor" to="/">
                    <p>PROFILE</p>
                </router-link>
            </div>
            <div class="round_item">
                <router-link class="anchor" to="/">
                    <p>NORMAL ORDERS</p>
                </router-link>
            </div>
            <div class="round_item">
                <router-link class="anchor" to="/">
                    <p>CUSTOM ORDERS</p>
                </router-link>
            </div>
            <div class="round_item">
                <router-link class="anchor" to="/">
                    <p>RACING</p>
                </router-link>
            </div>
        </div> -->
    </div>
</section>

</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';

.member{
    width: 100%;
}

</style>