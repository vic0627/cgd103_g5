<script setup>
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import { bodyInit } from "../composables/useOnunmounted";
bodyInit();
</script>

<template>
  <navComponentsVue />
  <!-- Competition information -->
  <section>
    <div class="race">
      <h2>COMPETITION NAME</h2>

      <div class="raceimg">
        <img src="../assets/images/race/contest01.png" alt="Competition" />
      </div>

      <div class="racetext">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat,
          consequuntur sapiente magni vitae neque officia maxime accusantium in
          unde cum pariatur! Fugiat mollitia modi possimus fugit molestias ut
          doloribus reiciendis corporis rem beatae similique hic dolores tenetur
          magnam aut deserunt, esse placeat maiores voluptatum alias nostrum
          sapiente officiis! Veritatis.
        </p>
      </div>
    </div>
  </section>
  <!-- Registration Form -->
  <section>
    <div class="form">
      <h3>REGISTRATION FORM</h3>

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
    </div>

    <div class="book">
      <div class="Submit">
        <a
          href="#"
          class="btn"
          id="btn2"
          data-title="Submit"
          @mouseenter="MOUSE.mouseFocus()"
          @mouseleave="MOUSE.mouseRe()"
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
        width: 60vw;
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
      }
    }
  }
}

//Registration Form

h3 {
  margin: 50px 0;
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
  margin-bottom: 50px;
}
</style>
