<script>
import video_01 from '@/assets/video/about/video_01.mp4'
import { onMounted, registerRuntimeCompiler } from 'vue';
import Accordion from '../components/accordionComponents.vue';
import mem from '../components/memComponents.vue';
import navComponentsVue from '@/components/navComponents.vue';



import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



export default{
  components:{
    Accordion,
    mem,
    navComponentsVue
  }
}




</script>


<template>
  <navComponentsVue />
  <!-- 01 video start -->
  <section class="video_box" >
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
        </div>
  </section>
  <!-- 01 video end -->

  <!-- <section class="top">
    <top />
  </section> -->

  
  <!-- 02 start -->
  <section class="team">
    <div class="teambox">
      <h2>TEAM</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore maxime, iste assumenda modi corporis exercitationem aperiam blanditiis. Numquam, asperiores. Impedit in quas, ab distinctio alias quibusdam amet perspiciatis eos, veritatis ratione reprehenderit, adipisci soluta sapiente qui esse a? Ipsa eum quibusdam doloremque accusamus et sunt omnis molestias, provident eius!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore maxime, iste assumenda modi corporis exercitationem aperiam blanditiis. Numquam, asperiores. Impedit in quas, ab distinctio alias quibusdam amet perspiciatis eos, veritatis ratione reprehenderit, adipisci soluta sapiente qui esse a? Ipsa eum quibusdam doloremque accusamus et sunt omnis molestias, provident eius!
      </p>
    </div>
    <div class="imgbox" data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-sine">
      <img src="../assets/images/About/us02.jpg" alt="img">
    </div>
  </section>
  <section class="team">
    <div class="imgbox" data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-sine">
      <img src="../assets/images/About/us03.jpg" alt="img">
    </div>
    <div class="teambox text">
      <h2>BELIEF</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore maxime, iste assumenda modi corporis exercitationem aperiam blanditiis. Numquam, asperiores. Impedit in quas, ab distinctio alias quibusdam amet perspiciatis eos, veritatis ratione reprehenderit, adipisci soluta sapiente qui esse a? Ipsa eum quibusdam doloremque accusamus et sunt omnis molestias, provident eius!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore maxime, iste assumenda modi corporis exercitationem aperiam blanditiis. Numquam, asperiores. Impedit in quas, ab distinctio alias quibusdam amet perspiciatis eos, veritatis ratione reprehenderit, adipisci soluta sapiente qui esse a? Ipsa eum quibusdam doloremque accusamus et sunt omnis molestias, provident eius!
      </p>
    </div>
  </section>
  <!-- 02 end -->

  <!-- 03 member start -->
  <section class="member">
    <mem />
  </section>
  <!-- 03 member end -->

  <!-- 04 logo start -->
  <section class="logo">
    <div class="logo_box">
      <div class="logo_img" data-aos="fade-up"
     data-aos-duration="3000">
        <img src="../assets/images/About/g5_logo_grey.png" alt="logo">
      </div>
      <div class="logo_title">
        <h2>LOGO DESIGN CONCEPT</h2>
      </div>
      <div class="logo_word">
        <p class="logo_txt">
          The pattern is inspired by eagles and propellers, with black and gray gradient colors, presenting customers with a technological, professional and luxurious consumption experience.
        </p>
        <p class="logo_txt">
          The first word of the brand is E=Eagle, and Eagle. The overall tone is made of black and gray gradients, because eagles like to hunt in the daytime when the night is approaching and the sky begins to darken, giving customers a hunting and condescending feeling. The movement of the eagle is mainly by flying. First, it flaps its wings quickly, and then begins to glide, which symbolizes the proud posture of the FPV flying machine flying in the air.
        </p>
      </div>
    </div>
  </section>
  <!-- 04 logo end -->

  <!-- 05 store start -->
  <section class="store_rofile">
    <h2>CONTACT INFO</h2>
    <div class="store_container">
      <div class="box">
        <div class="thumb">
          <img src="../assets/images/About/store_01.jpg" alt="store_img">
        </div>
        <div class="details">
          <div class="content">
            <img src="../assets/images/About/call.png" alt="call_number">
            <p>Tel Number</p>
            <p>123456789</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="thumb">
          <img src="../assets/images/About/store_02.jpg" alt="store_img">
        </div>
        <div class="details">
          <div class="content">
            <img src="../assets/images/About/email.png" alt="email">
            <p>Email</p>
            <p>EFPV@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="thumb">
          <img src="../assets/images/About/store_03.jpg" alt="store_img">
        </div>
        <div class="details">
          <div class="content">
            <img src="../assets/images/About/placeholder.png" alt="address">
            <p>Address</p>
            <p>No. 46, Fuxing Road, Zhongli District</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="thumb">
          <img src="../assets/images/About/store_04.png" alt="store_img">
        </div>
        <div class="details">
          <div class="content">
            <img src="../assets/images/About/clock.png" alt="time">
            <p>Business Hours</p>
            <p>09:00AM - 21:00PM</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 05 store end -->

  <!-- 06 FAQ start -->
  <section class="faqs">
    <h2>FAQ</h2>
    <Accordion />
  </section>

  <!-- 06 FAQ end -->


  
</template>

<style lang="scss" scoped>
@import '@/sass/style.scss';
body{
  overflow: hidden;
  scroll-behavior: smooth;
}

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
          animation-delay: 0.2s;
        }
        &:nth-child(3) {
          animation-delay: 0.9s;
        }
        &:nth-child(4) {
          animation-delay: 1.6s;
        }
        &:nth-child(5) {
          animation-delay: 2.3s;
        }
        &:nth-child(6) {
          animation-delay: 3s;
        }
        &:nth-child(7) {
          animation-delay: 3.7s;
        }
      }
      p {
        color: #fff;
        display: inline-block;
        position: relative;
        animation: small_word 4s 4.4s forwards;
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

.pro_box {
  width: 100%;
  height: auto;
  .pro_team {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    justify-content: center;
    align-items: center;
    display: block;
    transition: 5s;
    transform-origin: left;
    transform: scaleX(1);
    .pro_img{
      width: 350px;
      margin: 15px 10px;
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .pro_word {
      width: 100%;
      text-align: center;
      h2 {
      text-align: center;
      margin: 15px 0;
      }
      p{
        margin: 5px 0;
      }
    }
  }
  @include m($m-breakpoint){
    .pro_team {
      .pro_img{
        width: 1000px;
        img{
          width: 100%;
          height: 500px;
        }
      }
      .pro_word {
        h2 {
        text-align: center;
        margin: 5px 0;
        }
        p{
          padding: 5px 10px;
        }
      }
    }
  }

  @include l($l-breakpoint){
    .pro_team {
      .pro_img{
        width: 1200px;
        img{
          width: 100%;
          height: 600px;
        }
      }
    }
  }
 
}
.team {
  width: 100%;
  .teambox{
    width: 90%;
    margin: auto;
    text-align: center;
    background-color: #515151af;
    border-radius: 5px;
    padding: 5px;
    z-index: 1;
    h2{
      margin: 5px;
    }
    p{
      margin: 5px;
    }
  }
  
  @include m($m-breakpoint){
    .teambox{
      transform: translateX(25px);
      padding: 15px;
    }
    .text{
      transform: translateX(-25px);
    }
  }
  @include l($l-breakpoint){
    .teambox{
      transform: translateX(50px);
      padding: 15px 20px;
      height: 450px;
      p{
        margin-top: 15px;
      }
    }
    .text{
      transform: translateX(-50px);
    }
  }
  .imgbox{
    width: 100%;
    align-items: center;
    margin: 30px auto;
    text-align: center;
    img{
      width: 90%;
      height: 350px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  @include m($m-breakpoint){
      .imgbox{
        img{
          width: 100%;
          height: 500px;
        }
      }
  }
  @include l($l-breakpoint){
    .imgbox{
      img{
          width: 100%;
          height: 850px;
        }
    }
    
  }
}
@include m($m-breakpoint){
  .team{
    display: flex;
  }
}
.member{
  width: 100%;
  // .mem_title{
  //   width: 100%;
  //   margin: 15px 0;
  //   text-align: center;
  // }
  // .member_box {
  //   width: 100%;
  //   max-width: 1200px;
  //   margin: 0 auto;
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: center;
  //   align-items: center;
  //   .member_item {
  //     width: 165px;
  //     height: 300px;
  //     margin: 10px 10px;
  //     opacity: 0.8;
  //     transition: 0.8s;
  //     &:hover {
  //       opacity: 1;
  //     }
  //     .member_img{
  //       width: 165px;
  //       height: 220px;
  //       border-radius: 5px;
  //       border: 1px solid rgba(154, 154, 154, 0.475);
  //       img{
  //         width: 100%;
  //         height: 220px;
  //         border-radius: 5px;
  //         object-fit: cover;
  //       }
  //     }
  //     .member_word{
  //       width: 165px;
  //       height: 75px;
  //       display: flex;
  //       text-align: center;
  //       .member_txt{
  //         width: 100%;
  //         text-align: center;
  //         .mem_name{
  //           color: #fff;
  //           font-size: 20px;
  //           margin: 10px 0;
  //           font-family: 'Poppins', sans-serif;
  //         }
  //         span{
  //           color: $blue;
  //           font-size: 15px;
  //           margin-left: 5px;
  //         }
  //       }
  //     }
  //   }
  //   @include m($m-breakpoint){
  //       .member_item{
  //         width: 300px;
  //         height: 350px;
  //         .member_img{
  //           width: 300px;
  //           height: 280px;
  //           img{
  //             width: 300px;
  //             height: 280px;
  //           }
  //         }
  //         .member_word{
  //           width: 300px;
  //         }
  //     }
  //   }

  //   @include l($l-breakpoint){
  //       .member_item{
  //         width: 380px;
  //         height: 420px;
  //         .member_img{
  //           width: 380px;
  //           height: 340px;
  //           img{
  //             width: 380px;
  //             height: 340px;
  //           }
  //         }
  //         .member_word{
  //           width: 380px;
  //         }
  //     }
  //   }
  // }
}

.logo{
  width: 100%;
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 0.033);
  .logo_box{
    width: 100%;
    max-width: 1200px;
    margin: auto;
    .logo_img{
      width: 300px;
      margin: auto;
      height: 220px;
      img{
        width: 100%;
        object-fit: cover;
      }
    }
    @include m($m-breakpoint){
        .logo_img{
          width: 400px;
          height: 300px;
          margin: 15px auto;
        }
      }
    .logo_title{
      margin: 15px auto;
      text-align: center;
    }
    .logo_word{
      width: 100%;
      margin: auto;
      text-align: center;
      p{
        padding: 10px;
        margin: 10px;
      }
    }
    @include m($m-breakpoint){
      .logo_word{
      p{
        padding: 10px;
        margin: 20px 10px;
      }
    }
    }
  }
  
}

// store start
.store_rofile{
    width: 100%;
    margin: 100px 0;
    h2{
      text-align: center;
    }
    .store_container{
      height: auto;
      width: 100%;
      padding: 20px;
      top: 0;
      left: 0;
      transform: translate(0);
      box-sizing: border-box;
      display: initial;
      justify-content: center;
      .box{
        position: relative;
        width: 90%;
        margin: auto;
        height: 250px;
        float: none;
        background-color: #ccc;
        transition: 0.5s;
        &:nth-child(odd) .thumb{
            bottom: 0;
            left: 0;
        }
        &:nth-child(even) .details{
            bottom: 0;
            left: 0;
        }
        &:nth-child(1) .details{
            background-color: #000;
        }
        &:nth-child(2) .details{
            background-color: $blue;
        }
        &:nth-child(3) .details{
            background-color: $ored;
        }
        &:nth-child(4) .details{
            background-color: $purple;
        }
        &:hover{
          transform: scale(1.1);
          z-index: 1;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        }
        &:hover .content{
          top: calc(50%);
        }
        .thumb{
          position: absolute;
          width: 100%;
          height: 250px;
          overflow: hidden;
          display: none;
          img{
            width: 100%;
            height: 250px;
          }
        }
        .details{
          position: absolute;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background-color: #000;
          .content{
            position: absolute;
            top: calc(50% + 16px);
            transform: translateY(-50%);
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            transition: 0.5s;
            p{
              padding: 10px 0;
              margin: 0;
            }
          }
        }
      }
    }
}

@include m($m-breakpoint){
  .store_rofile{
    width: 100%;
    .store_container{
      height: auto;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      .box{
        position: relative;
        width: 300px;
        height: 250px;
        background-color: #ccc;
        transition: 0.5s;
        &:nth-child(odd) .thumb{
            bottom: 0;
            left: 0;
        }
        &:nth-child(even) .details{
            bottom: 0;
            left: 0;
        }
        &:nth-child(1) .details{
            background-color: #000;
        }
        &:nth-child(2) .details{
            background-color: $blue;
        }
        &:nth-child(3) .details{
            background-color: $ored;
        }
        &:nth-child(4) .details{
            background-color: $purple;
        }
        &:hover{
          transform: scale(1.1);
          z-index: 1;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        }
        &:hover .content{
          top: calc(50%);
        }
        .thumb{
          position: absolute;
          width: 100%;
          height: 250px;
          overflow: hidden;
          img{
            width: 100%;
            height: 250px;
          }
        }
        .details{
          position: absolute;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background-color: #000;
          .content{
            position: absolute;
            top: calc(50% + 16px);
            transform: translateY(-50%);
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            transition: 0.5s;
            p{
              padding: 10px 0;
              margin: 0;
            }
          }
        }
      }
    }
  }
}

@include l($l-breakpoint){
  .store_rofile{
    width: 100%;
    .store_container{
      height: 500px;
      width: 1200px;
      margin: auto;
      display: flex;
      .box{
        position: relative;
        width: 300px;
        height: 500px;
        background-color: #ccc;
        transition: 0.5s;
       
        &:nth-child(odd) .thumb{
            bottom: 0;
            left: 0;
        }
        &:nth-child(even) .details{
            bottom: 0;
            left: 0;
        }
        &:nth-child(1) .details{
            background-color: #000;
        }
        &:nth-child(2) .details{
            background-color: $blue;
        }
        &:nth-child(3) .details{
            background-color: $ored;
        }
        &:nth-child(4) .details{
            background-color: $purple;
        }
        &:hover{
          transform: scale(1.1);
          z-index: 1;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        }
        &:hover .content{
          top: calc(50%);
        }
        .thumb{
          position: absolute;
          width: 100%;
          height: 250px;
          overflow: hidden;
          display: block;
          img{
            width: 100%;
            height: 250px;
          }
        }
        .details{
          position: absolute;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background-color: #000;
          .content{
            position: absolute;
            top: calc(50% + 16px);
            transform: translateY(-50%);
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            transition: 0.5s;
            p{
              padding: 10px 0;
              margin: 0;
            }
          }
        }
      }
    }
    
  }
}

// store end

.faqs{
  width: 100%;
  h2{
    text-align: center;
  } 
}
</style>