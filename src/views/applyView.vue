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
        <label for=""
          >Name :
          <input type="text" />
          <input type="text" />
        </label>

        <label for="">
          Phone :
          <input type="text" />
        </label>

        <label for="">
          address :
          <input type="text" />
        </label>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// Competition information

section {
  .race {
    margin: 0 20px;
    h2 {
      text-align: center;
      margin-bottom: 50px;
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

.form {
  text-align: center;
  color: white;
}
</style>
