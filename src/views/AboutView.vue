<script setup>
<<<<<<< HEAD

=======
import video_01 from '@/assets/video/about/video_01.mp4'
import { onMounted } from 'vue';
import mouseComponentsVue from '../components/mouseComponents.vue';
import * as MOUSE from '@/composables/useMouseMove';
onMounted(()=> {
    MOUSE.useMouseMove();
});
>>>>>>> 2f847c4a6dc65587ce316b18945c604f64e49247
</script>


<template>
  <!-- @mouseenter="MOUSE.mouseFocus()"
  @mouseleave="MOUSE.mouseRe()" -->
    
  <!-- 01 video start -->
  <section class="video_box">
        <div class="top_video">
            <div class="video_word">
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
                &nbsp;&nbsp;
                <span>U</span>
                <span>S</span>
                <div class="small_box">
                  <p class="video_small">
                    Discover who we & what we do.
                </p>
                </div>
            </div>
            <video autoplay muted loop src="@/assets/video/about/video_01.mp4" id="bg-video"></video>
            <!-- 影片上的標題+小字 -->
        </div>
  </section>
  <!-- 01 video end -->

  <!-- 02 professional_team start -->
  <section class="team_spirit">
      <div class="team_spirit_box">
        <div class="team_word">
          <div class="team_img">
            <img src="../assets/images/about/img_us.jpg" alt="team_img">
          </div>
          <div class="team_title">
            <h2>TEAM SPIRIT</h2>
            <p class="team_txt">
              Our team is like mixing a fresh cold brew decaf large decaf vanilla soy latte with a warm dead beer on a cold summer night - totally overrated but somehow after the third What a pleasure. We mixed a James Bond martini with the final season of Game of Thrones — and let's just say "special."
              Join our team! We are great!
            </p>
          </div>
        </div>
        <div class="team_word">
          <div class="team_title">
            <h2>TEAM SPIRIT</h2>
            <p class="team_txt">
              Our team is like mixing a fresh cold brew decaf large decaf vanilla soy latte with a warm dead beer on a cold summer night - totally overrated but somehow after the third What a pleasure. We mixed a James Bond martini with the final season of Game of Thrones — and let's just say "special."
              Join our team! We are great!
            </p>
          </div>
          <div class="team_img">
            <img src="../assets/images/about/img_us_small.jpg" alt="team_img">
          </div>
        </div>
      </div>
  </section>

  <!-- 02 professional_team end -->

  <!-- 03 team_partner start -->
  <!-- <section class="team_partner">
    <div class="team_partner_box">
      <div class="partner_word">
        <div class="partner_img">
          <div class="partner_img_box">
            <img src="../assets/images/about/dog.jpg" alt="dog_img">
          </div>
          <div class="partner_img_box">
            <img src="../assets/images/about/dog.jpg" alt="dog_img">
          </div>
          <div class="partner_img_box">
            <img src="../assets/images/about/dog.jpg" alt="dog_img">
          </div>
        </div>
        <div class="partner_prev" onclick="plusSlide(-1)">&#10094;</div>
        <div class="partner_next" onclick="plusSlide(1)">&#10095;</div>
        <div class="partner_title">
          <h2>TEAM PARTNER</h2>
          <div class="partner_txt">
            <span class="bdquo">&bdquo;</span>
            <p class="partner_name">Coffee</p>
            <p class="partner_small">is a manager who loves to eat</p>
            <p><span class="dfpv">DFPV</span>&nbsp; Leisure Director</p>
          </div>
        </div>
      </div>
      <div class="partner_btn">
        <div class="partner_btn_box">
          <span class="par_btns" onclick="currentSlide(1)"></span>
          <span class="par_btns" onclick="currentSlide(2)"></span>
          <span class="par_btns" onclick="currentSlide(3)"></span>
          <span class="par_btns" onclick="currentSlide(4)"></span>
        </div>
      </div>
    </div>
  </section> -->
  
<mouseComponentsVue />
</template>

<<<<<<< HEAD
<style scoped lang="scss">
=======
<style lang="scss" scoped>
@import '@/sass/style.scss';
.btn{
    @include primaryBtn(120px);
    margin: 40px;
}
.video_box {
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;
  box-sizing: border-box;
  position: relative;
  &::before{
    z-index: 2;
    content: "";
    position: absolute;
    width: 100%;
    height: 120px;
    bottom: 0;
    left: 0;
    background: linear-gradient(transparent,#1c1c1c);
  }
  .top_video {
    position: relative;
    height: 100vh;
    #bg-video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      z-index: -99;
    }
    .video_word {
      width: 90%;
      height: 85px;
      padding-top: 10px;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      text-align: center;
      opacity: 0;
      animation: word_bg 10s forwards;
      backdrop-filter: blur(1px);
      background-color: rgba(0, 0, 0, 0.3);
      span {
        display: inline-block;
        font-size: 35px;
        font-weight: 800;
        color: #fff;
        text-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
        position: relative;
        transform: translateY(-100vh);
        animation: word 3.5s forwards;
        &:nth-child(2) {
          animation-delay: 0.7s;
        }
        &:nth-child(3) {
          animation-delay: 1.4s;
        }
        &:nth-child(4) {
          animation-delay: 2.1s;
        }
        &:nth-child(5) {
          animation-delay: 2.8s;
        }
        &:nth-child(6) {
          animation-delay: 3.5s;
        }
        &:nth-child(7) {
          animation-delay: 4.2s;
        }
      }
      p {
        color: #fff;
        display: inline-block;
        position: relative;
        animation: small_word 4.5s 5.5s forwards;
        opacity: 0;
      }
    }
  }
}
@keyframes word_bg {
  100% {
    opacity: 1;
  }
}
@keyframes word {
  100% {
    transform: translateY(0);
  }
}
@keyframes small_word {
  100% {
    opacity: 1;
  }
}
>>>>>>> 2f847c4a6dc65587ce316b18945c604f64e49247

.team_spirit {
  width: 100%;
    .team_spirit_box{
      width: 100%;
      max-width: 1200px;
      margin: 50px auto;
      justify-content: center;
      align-items: center;
      .team_word{
        text-align: center;
        display: block;
        margin: 50px 0;
        
        .team_title{
          margin: 0 10px;
          h2{
            margin-top: 10px;
          }
          p{
            padding: 15px;
        }
        }
      }
      .team_img{
        width: 95%;
        max-width: 500px;
        margin: auto;
        img {
          width: 100%;
          border-radius: 10px;
          object-fit: cover;
        }
      }
      @include m($m-breakpoint){
        .team_word{
          display: flex;
          padding: 0 10px;
          text-align: left;
          h2{
            margin-left: 15px;
          }
          .team_img{
            img {
              width: 400px;
              border-radius: 10px;
              object-fit: cover;
            }
          }
        }
      }
  }
}

.team_partner {
  width: 100%;
  .team_partner_box{
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    .partner_word{
      width: 100%;
      max-width: 1200px;
      .partner_img{
        position: relative;
        width: 100%;
        margin: auto;
        justify-content: center;
        align-items: center;
        display: flex;
        .partner_img_box{
          width: 100%;
          text-align: center;
          border-radius: 100%;
          img{
            width:250px;
            height: 250px;
            border-radius: 100%;
            object-fit: cover;
          }
        }
      }
      .partner_prev{
          width: 40px;
          height: 60px;
          font-size: 50px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: absolute;
          left: 0;
          &:hover,.actives{
            color: $blue;
          }
        }
        .partner_next{
          width: 40px;
          height: 60px;
          font-size: 50px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: absolute;
          right: 0;
          &:hover{
            color: $blue;
          }
        }
      .partner_title{
          width: 100%;
          margin-top: 15px;
          text-align: center;
          p{
            margin: 15px 0;
          }
          span{
            color: $blue;
            font-weight: 800;
          }
      }
    }
    .partner_btn{
      position: relative;
      width: 300px;
      margin: auto;
      height: 25px;
      .partner_btn_box{
        position: absolute;
        right: 0;
        display: flex;
        .par_btns{
          width: 20px;
          height: 20px;
          margin: 0 5px;
          border-radius: 100%;
          background-color: rgb(155, 155, 155);
          cursor: pointer;
          transition:background-color 0.4s ease;
          &:hover {
            background-color: $blue;
          }
        }
      }
      
    }
  }
}
</style>