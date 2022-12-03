<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {

});



</script>

<template>
   <div class="mem_title"><h2>MEMBER</h2></div>
    <div class="member_box" id="member_box">
        <div class="member_item" i>
          <div class="member_img">
            <img src="../assets/images/About/mem_03.jpg" alt="mem_img">
          </div>
          <div class="member_word">
            <div class="member_txt">
              <div class="mem_name">Anyu</div>
              <span class="mem_small">Manager</span>
            </div>
          </div>
        </div>
        <div class="member_item">
          <div class="member_img">
            <img src="../assets/images/About/mem_01.jpg" alt="mem_img">
          </div>
          <div class="member_word">
            <div class="member_txt">
              <div class="mem_name">Anyu</div>
              <span class="mem_small">Photographer</span>
            </div>
          </div>
        </div>
        <div class="member_item">
          <div class="member_img">
            <img src="../assets/images/About/mem_02.jpg" alt="mem_img">
          </div>
          <div class="member_word">
            <div class="member_txt">
              <div class="mem_name">Siffin</div>
              <span class="mem_small">Planning</span>
            </div>
          </div>
        </div>
        <div class="member_item">
          <div class="member_img">
            <img src="../assets/images/About/mem_04.jpg" alt="mem_img">
          </div>
          <div class="member_word">
            <div class="member_txt">
              <div class="mem_name">Wei Na</div>
              <span class="mem_small">Design</span>
            </div>
          </div>
        </div>
        <div class="member_item">
          <div class="member_img">
            <img src="../assets/images/About/mem_05.jpg" alt="mem_img">
          </div>
          <div class="member_word">
            <div class="member_txt">
              <div class="mem_name">Andy</div>
              <span class="mem_small">Engineer</span>
            </div>
          </div>
        </div>
        <div class="member_item">
          <div class="member_img">
            <img src="../assets/images/About/charmy03.png" alt="mem_img">
          </div>
          <div class="member_word">
            <div class="member_txt">
              <div class="mem_name">Charmy</div>
              <span class="mem_small">Group Pet</span>
            </div>
          </div>
        </div>
        <div class="member_item">
          <div class="member_img">
            <img src="../assets/images/About/mem_08.jpg" alt="mem_img">
          </div>
          <div class="member_word">
            <div class="member_txt">
              <div class="mem_name">Jain</div>
              <span class="mem_small">Assembler</span>
            </div>
          </div>
        </div>
        <div class="member_item">
          <div class="member_img">
            <img src="../assets/images/About/mem_09.jpg" alt="mem_img">
          </div>
          <div class="member_word">
            <div class="member_txt">
              <div class="mem_name">Thalia</div>
              <span class="mem_small">Accounting</span>
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/sass/style.scss';
.mem_title{
    width: 100%;
    margin: 15px 0;
    text-align: center;
  }
  .member_box {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .member_item {
      width: 165px;
      height: 300px;
      margin: 10px 10px;
      opacity: 0.8;
      transition: 0.8s;
      &:hover {
        opacity: 1;
      }
      .member_img{
        width: 165px;
        height: 220px;
        border-radius: 5px;
        border: 1px solid rgba(154, 154, 154, 0.475);
        img{
          width: 100%;
          height: 220px;
          border-radius: 5px;
          object-fit: cover;
        }
      }
      .member_word{
        width: 165px;
        height: 75px;
        display: flex;
        text-align: center;
        .member_txt{
          width: 100%;
          text-align: center;
          .mem_name{
            color: #fff;
            font-size: 20px;
            margin: 10px 0;
            font-family: 'Poppins', sans-serif;
          }
          span{
            color: $blue;
            font-size: 15px;
            margin-left: 5px;
          }
        }
      }
    }
    @include m($m-breakpoint){
        .member_item{
          width: 300px;
          height: 350px;
          .member_img{
            width: 300px;
            height: 280px;
            img{
              width: 300px;
              height: 280px;
            }
          }
          .member_word{
            width: 300px;
          }
      }
    }

    @include l($l-breakpoint){
        .member_item{
          width: 380px;
          height: 420px;
          .member_img{
            width: 380px;
            height: 340px;
            img{
              width: 380px;
              height: 340px;
            }
          }
          .member_word{
            width: 380px;
          }
      }
    }
  }
</style>