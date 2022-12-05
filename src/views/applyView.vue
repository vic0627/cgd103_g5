<script setup></script>

<template>
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
            <input type="text" />
            <input type="text" />
          </label>
        </div>

        <div class="sex">
          <p style="display: inline">sex :</p>
          <input type="radio" id="Male" name="sex" value="Male" />
          <label for="Male">Male</label>
          <input type="radio" id="Female" name="sex" value="Female" />
          <label for="Female">Female</label>
        </div>

        <div class="email">
          <label for="">
            Email :
            <input type="email" />
          </label>
        </div>

        <div class="phone">
          <label for="">
            Phone :
            <input type="tel" />
          </label>
        </div>

        <div class="address">
          <label for="">
            Address :
            <input type="text" />
          </label>
        </div>
      </form>
    </div>
    <div class="book">
      <div class="learn">
        <a
          href="../views/applyView.vue"
          class="btn"
          id="btn2"
          data-title="Learn"
          @mouseenter="MOUSE.mouseFocus()"
          @mouseleave="MOUSE.mouseRe()"
        >
          <span>Learn</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Competition information

section {
  margin: 0;
  .race {
    margin: 0 20px;
    h2 {
      text-align: center;
      margin: 50px 0;
    }
    .raceimg {
      width: 100%;
      margin-bottom: 50px;
      img {
        width: 100%;
      }
    }
    .racetext {
      text-align: center;
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
  width: 100%;
  form {
    div {
      margin: auto;
      margin-bottom: 20px;
    }
  }
}

.book {
  margin: auto;
}
</style>
