<script setup>
import navComponentsVue from "@/components/navComponents.vue";
import { reactive, onMounted, ref, defineComponent, h, computed } from "vue";
import raceQuestion from "../components/raceQueston.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import { bodyInit } from "../composables/useOnunmounted";
import router from "@/router";

bodyInit();

// const no = ref("");
const name = ref("");
const start = ref("");
const end = ref("");
const aboard = ref("");
const photo = ref("");
const txt = ref("");

// const newcpt_no = ref("");
const newcpt_name = ref("");
const newcpt_start = ref("");
const newcpt_end = ref("");
const newcpt_aboard = ref("");
const newcpt_photo = ref("");
const newcpt_txt = ref("");
const showModal = ref(false);

const props = defineProps(["tab"]);
const raceRows = ref([]);
const getProducts = () => {
  //取得比賽資料
  fetch("/dist/g5PHP/getRace.php")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      raceRows.value = json;
    });
};
onMounted(() => {
  getProducts();
  session();
  getMemberInfoSS();
  // membook();
  getMemberInfo();
});

const getMemberInfoSS = () => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const member = JSON.parse(xhr.responseText);
    // console.log("SS:"+member);
    if (member.Account) {
      //有帳密資料
      // $id("memName").innerText = member.memName;
      // $id("spanLogin").innerText = "登出";
      // meminfo.value = [member.memName,member.email];
      // console.log(mem.value)
    } else {
      // alert("Please log in before checkout!");
      // location.href="http://localhost:8888/dist/home";
      // router.push({ path: "/signin" });
    }
  };
  xhr.open("GET", "/dist/g5PHP/getMemberInfo.php", true); //查看使用者是否有登入
  xhr.send(null);
};

//抓session資料
const prodin = ref([]);
const title = reactive([{ name: "no" }, { name: "name" }, { name: "images" }]);
// const prodInfo = computed(() => prodin);
const strings = ref([]);
const session = () => {
  strings.value = sessionStorage["racename"];
  prodin.value = JSON.parse(strings.value);
  console.log(prodin.value);
  console.log(prodin.value.price);
};

//預約成功 燈箱
const lightBoxShow = ref(false);

// const forgetPW = () => {
//   lightBoxShow.value = true;
// };
const lightBoxClose = () => {
  lightBoxShow.value = false;
};

//送出預約資訊進後台

// const regis_no = ref("");
const comp_no = ref("");
const mem_no = ref("");
// const regis_date = ref("");

const cartItem = ref([]);

const membook = () => {
  let id = sessionStorage["race"];
  let aaa = JSON.parse(`${sessionStorage[id]}`);
  console.log(aaa);
  comp_no.value = sessionStorage.getItem("race");
  // mem_no.value = mem.mem_no;
  console.log(comp_no);
  lightBoxShow.value = true;
  /* regis_no.value = sessionStorage.getItem("regis_no");
  comp_no.value = sessionStorage.getItem("comp_no");
  mem_no.value = sessionStorage.getItem("mem_no");
  regis_date.value = sessionStorage.getItem("regis_date"); */
  const payload = {
    comp_no: Number(comp_no.value),
    mem_no: Number(mem_no.value),
  };
  fetch("/dist/g5PHP/insertBook.php", {
    method: "POST",
    body: new URLSearchParams(payload),
  }).then((res) => {
    res.text();
  });
};

//抓會員
const memberInfo = ref({
  mem_no: "",
  // mem_grade: "",
  // mem_first_name: "",
  // mem_last_name: "",
  // phone: "",
  // mem_gender: "",
  // mem_email: "",
  // city: "",
  // address: "",
  // credit_no: "",
});
function getMemberInfo() {
  fetch("/dist/g5PHP/getMemInfo.php", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((mem) => {
      console.log(mem);
      mem_no.value = mem.mem_no;
    })
    .catch((error) => console.log(error));
}
</script>

<template>
  <navComponentsVue />
  <!-- Competition information -->
  <section>
    <div class="race">
      <h2>{{ prodin.name }}</h2>

      <div class="raceimg">
        <img
          :src="`http://localhost/cgd103_g5/src/assets/images/race/${prodin.img}`"
          alt="Competition"
        />
      </div>

      <div class="date">
        <h3>{{ prodin.start }}</h3>
        <h3 class="gggg">~</h3>
        <h3>{{ prodin.end }}</h3>
      </div>

      <div class="racetext">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a laborum
          excepturi veritatis labore earum consequuntur sit eum voluptatum velit
          rerum magni similique, necessitatibus quas facilis autem tempora minus
          tenetur possimus cupiditate, rem vitae mollitia? Suscipit aliquid
          fugit iste quas, eos fugiat veritatis magnam sapiente eveniet dolorum
          rerum repellat blanditiis!
        </p>
      </div>
    </div>
  </section>

  <!-- race QA -->
  <section>
    <div class="raceQa">
      <h2>RACE QUESTIONS</h2>
      <raceQuestion />
    </div>
  </section>

  <!-- Registration Form -->
  <section>
    <div class="book">
      <div class="Submit">
        <a class="btn submitBtn" id="btn2" data-title="Book" @click="membook">
          <span>Book</span>
        </a>
      </div>

      <div class="lightBox" v-if="lightBoxShow">
        <div class="lightBoxContent">
          <form @submit="sendEmail">
            <div>
              <p>Success</p>
            </div>
          </form>
          <!-- v-if="removeItem" -->
          <div class="close" @click="lightBoxClose"></div>
        </div>
      </div>
    </div>

    <form action="post">
      <!-- <input type="hidden" v-model="memberInfo.regis_no" name="regis_no" /> -->
      <input type="hidden" v-model="comp_no" name="comp_no" />
      <input type="hidden" v-model="mem_no" name="mem_no" />
      <!-- <input type="hidden" v-model="regis_date" name="regis_date" /> -->
    </form>
  </section>

  <footerComponentsVue />
</template>

<style lang="scss" scoped>
@import "../sass/style.scss";
@import "../sass/component/_btn.scss";
@import "../sass/component/lightBox";
// Competition information

header {
  position: sticky;
  top: 0;
}

section {
  // margin: 0;
  .race {
    margin: 0 20px;
    h2 {
      text-align: center;
      margin: 50px 0;
    }
    .raceimg {
      width: 100%;
      margin-bottom: 50px;
      @include l($l-breakpoint) {
        width: 70%;
        margin: auto;
        margin-bottom: 50px;
      }
      img {
        width: 100%;
      }
    }
    .racetext {
      text-align: center;
      @include l($l-breakpoint) {
        max-width: 1000px;
        margin: auto;
        text-align: left;
      }
    }
  }
}

// race QA

.raceQa {
  h2 {
    text-align: center;
  }
}

//Registration Form

h3 {
  display: inline-block;
  letter-spacing: 0.5rem;
}

.gggg {
  display: block;
}
.date {
  text-align: center;
  margin-bottom: 50px;
}

.form {
  text-align: center;
  color: white;
  form {
    div {
      margin: auto;
      margin-bottom: 20px;
      input {
        height: 20px;
      }
      label {
        font-size: 20px;
      }
      .ggg {
        font-size: 20px;
        margin-right: 33px;
      }
      .shot {
        width: 100px;
        margin-right: 18px;
      }
      .long {
        width: 250px;
      }
    }
    .address {
      margin-right: 15px;
    }
  }
}

.Submit {
  display: flex;
  justify-content: center;
  // margin-bottom: 50px;
}

.lightBox {
  @include lightBox();
  margin: auto;
  z-index: 10;
  .lightBoxContent {
    padding: 10px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 50px;
      text-align: center;
    }
    .buttons {
      text-align: center;
      button {
        font: $caption-p;
        width: 100px;
        height: 40px;
        margin: 20px;
        border-radius: 10px;
        padding: 0 5px;
        border: none;
      }
    }
  }
}
</style>
