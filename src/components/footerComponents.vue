<script setup>
import { ref, onMounted, reactive } from "vue";

const mainMenu = reactive([
  {
    id: "shop",
    name: "STORE",
  },
  {
    id: "custom",
    name: "CUSTOM",
  },
  {
    id: "about",
    name: "ABOUT",
  },
  {
    id: "race",
    name: "RACE",
  },
  {
    id: "news",
    name: "NEWS",
  },
]);
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-wrap">
        <div class="footer-logo-pic">
          <img src="../assets/images/home/g5_logo_EFVP_Horz.png" alt="" />
        </div>
        <div class="foot-item">
          <ul>
            <li v-for="item in mainMenu" :key="item.id">
              <router-link class="footer-link" :to="`/${item.id}`">{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail">
        <div class="detail-txt">
          <p>0921-124-142</p>
          <p>EFPV@gmail.com</p>
          <p>No. 46, Fuxing Road, Zhongli District</p>
          <p>09:00AM - 21:00PM</p>
        </div>
        <div class="soical">
          <div class="soical-item">
            <router-link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style="fill: rgba(232, 232, 232, 1); transform: ; msfilter: "
              >
                <path
                  d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                ></path>
              </svg>
            </router-link>
          </div>
          <div class="soical-item">
            <router-link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style="fill: rgba(232, 232, 232, 1); transform: ; msfilter: "
              >
                <path
                  d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
                ></path></svg
            ></router-link>
          </div>
          <div class="soical-item">
            <router-link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style="fill: rgba(232, 232, 232, 1); transform: ; msfilter: "
              >
                <path
                  d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"
                ></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path
                  d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                ></path></svg
            ></router-link>
          </div>
          <div class="soical-item">
            <router-link to="/"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                style="fill: rgba(232, 232, 232, 1); transform: ; msfilter: "
              >
                <path
                  d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"
                ></path></svg
            ></router-link>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>
          Copyright &copy; This platform protects learning policies and
          displays.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/sass/style.scss";
@import "@/css/reset.css";
footer {
  width: 100%;
  margin-top: 40px;
  @include l($l-breakpoint) {
    padding-top: 100px;
  }
  // background: #2c4e7e55;
  background: transparent;
  .footer-wrap {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    // text-align: center;
    .footer-logo-pic {
      @include flexCenter($center);
      justify-content: flex-start;
      margin: 30px 20px 10px;
      width: 80%;
      img {
        width: 100%;
        @include s($s-breakpoint) {
          width: 50%;
        }
      }
    }
  }
  .copyright {
    width: 100%;
    margin: 0 10px 10px;
    border-top: 1px solid #eeeeee;
    text-align: center;
    p {
      font-size: 12px;
      margin: 10px 0;
    }
  }
}
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .footer-wrap {
    .foot-item {
      width: 100%;
      display: flex;
      margin: 10px 0;
      justify-content: center;
      // justify-content: center;
      ul {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        li {
          width: 40%;
          margin: 10px;
          .footer-link {
            font-weight: 400;
          }
        }
      }
    }
  }
  .detail {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 15px 10px;
    justify-content: center;
    .detail-txt {
      width: 80%;
      text-align: left;
      p {
        font-size: 14px;
        margin: 5px 0;
      }
    }
    .soical {
      width: 80%;
      display: flex;
      .soical-item {
        margin: 10px 10px 10px 0;
      }
    }
  }
}
@include s($s-breakpoint) {
  .foot-item {
    width: 20%;
  }
}
@include m($m-breakpoint) {
  .container {
    display: flex;
    justify-content: center;
    .footer-wrap {
      width: 60%;
      .footer-logo-pic {
        img {
          width: 60%;
        }
      }
      .foot-item {
        ul {
          li {
            width: 20%;
          }
        }
      }
    }
    .detail {
      width: 30%;
      .detail-txt {
        width: 80%;
        text-align: right;
        p {
          font-size: 16px;
        }
      }
      .soical {
        width: 80%;
        justify-content: flex-end;
        .soical-item {
          margin: 10px 0 10px 10px;
        }
      }
    }
  }
}

@include l($l-breakpoint) {
  .container {
    width: 1200px;
    margin: 0 auto;
    .footer-wrap {
      justify-content: center;
      .footer-logo-pic {
        width: 100%;
      }
      .foot-item {
        margin: 20px 40px;
        ul {
          margin: 10px 10px 0;
          width: 100%;
          li {
            width: 17%;
          }
        }
      }
    }
    .detail {
    }
    .copyright {
      width: 90%;
    }
  }
  svg {
    &:hover {
      filter: invert(50%) sepia(51%) saturate(7497%) hue-rotate(194deg)
        brightness(97%) contrast(108%);
    }
  }
}
</style>
