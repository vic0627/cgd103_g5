<script setup>
import navComponentsVue from "@/components/navComponents.vue";
import { reactive, onMounted, ref, defineComponent, h, computed } from "vue";
import raceQuestion from "../components/raceQueston.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import { bodyInit } from "../composables/useOnunmounted";

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
  fetch("http://localhost/cgd103_g5/public/g5PHP/getRace.php")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      raceRows.value = json;
    });
};
onMounted(() => {
  getProducts();
});

const btnStatus = ref(false);
const submitBtn = () => {
  if (btnStatus.value) {
    lightBoxText.value.title.content = "Please log in as a member first!";
  } else {
    lightBoxText.value.title.content = "Appointment successful!";
  }
};

//book燈箱
const lightBoxShow = ref(false);

const bookLightBox = () => {
  lightBoxShow.value = true;
  console.log(lightBoxShow);
};
const lightBoxClose = () => {
  lightBoxShow.value = false;
};

//抓session資料
const prodin = ref([]);
const title = reactive([{ name: "no" }, { name: "name" }, { name: "images" }]);
// const prodInfo = computed(() => prodin);
const strings = ref([]);
const session = () => {
  strings.value = sessionStorage["prodInfo"];
  prodin.value = JSON.parse(strings.value);
  console.log(prodin.value);
  console.log(prodin.value.price);
};
</script>

<template>
  <navComponentsVue />
  <!-- Competition information -->
  <section>
    <div class="race" v-for="(raceRow, index) in raceRows" :key="index">
      <h2>{{ raceRow.cpt_name }}</h2>

      <div class="raceimg">
        <img src="../assets/images/race/contest02.png" alt="Competition" />
      </div>

      <div class="date">
        <h3>{{ raceRow.cpt_start }}</h3>
        <h3>~</h3>
        <h3>{{ raceRow.cpt_end }}</h3>
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
    <!-- <div class="form">
      <h2>REGISTRATION FORM</h2>

      <form action="#">
        <div class="name">
          <label for="">
            Name :
            <input class="shot" type="text" placeholder="First Name" />
            <input class="shot" type="text" placeholder="Last Name" />
          </label>
        </div>

        <div class="sex">
          <p class="ggg" style="display: inline">Sex :</p>
          <input type="radio" id="Male" name="sex" value="Male" />
          <label class="ggg" for="Male"> Male</label>
          <input type="radio" id="Female" name="sex" value="Female" />
          <label class="ggg" for="Female"> Female</label>
        </div>

        <div class="email">
          <label for="">
            Email :
            <input class="long" type="email" />
          </label>
        </div>

        <div class="phone">
          <label for="">
            Phone :
            <input class="long" type="tel" />
          </label>
        </div>

        <div class="address">
          <label for="">
            Address :
            <input class="long" type="text" />
          </label>
        </div>
      </form>
    </div> -->

    <div class="book">
      <div class="lightBox" v-if="lightBoxShow"></div>
      <div class="Submit">
        <a
          class="btn submitBtn"
          id="btn2"
          data-title="Submit"
          @click="bookLightBox"
        >
          <span>Submit</span>
        </a>
      </div>
    </div>
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
      @include l($l-breakpoint) {
        max-width: 1000px;
        margin: auto;
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
}
</style>
