<script setup>
import { ref, onMounted } from "vue";

const cpt_name = ref("");
const cpt_start = ref("");
const cpt_end = ref("");
const cpt_aboard = ref("");
const cpt_photo = ref("");
const cpt_txt = ref("");

const addProduct = () => {
  const payload = {
    cpt_name: cpt_name.value,
    cpt_start: cpt_start.value,
    cpt_end: cpt_end.value,
    cpt_aboard: cpt_aboard.value,
    cpt_photo: cpt_photo.value,
    cpt_txt: cpt_txt.value,
  };
  fetch("http://localhost/cgd103_g5/public/g5PHP/insertRace.php", {
    method: "POST",
    body: new URLSearchParams(payload),
  }).then((res) => {
    res.text();
  });
};
// const getCat = () => {
//   fetch("http://localhost/cgd103_g5_v2/public/g5PHP/getProCat.php")
//     .then((res) => res.json())
//     .then((json) => {
//       cat_no.value = json;
//     });
// };

onMounted(() => {
  // getCat();
  addProduct();

  function doFirst() {
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById("theFile").onchange = fileChange;
  }

  window.addEventListener("load", doFirst);
});
function fileChange() {
  let file = document.getElementById("theFile").files[0];
  console.log("input");
  // ==========
  let readFile = new FileReader();
  readFile.readAsDataURL(file);

  readFile.addEventListener("load", () => {
    let image = document.getElementById("image");
    image.src = readFile.result;
    image.style.maxWidth = "550px";
    image.style.maxHeight = "550px";
  });

  const formData = new FormData();
  formData.append("image", file);
  fetch("http://localhost/cgd103_g5/public/g5PHP/insertPhoto.php", {
    method: "POST",
    body: formData,
  });
}
</script>
<template>
  <div class="top">
    <h2>
      賽事新增
      <outComponents />
    </h2>
    <form action="" method="post">
      <div class="cpt">
        <div>
          <div class="name">
            <h3>賽事名稱</h3>
            <input
              type="text"
              name="cpt_name"
              id="name"
              placeholder="請輸入賽事名稱"
              v-model="cpt_name"
              required
            />
          </div>

          <div class="start">
            <h3>開始日期</h3>
            <input
              type="text"
              name="cpt_start"
              id="start"
              placeholder="請輸入開始日期"
              v-model="cpt_start"
              required
            />
          </div>

          <div class="end">
            <h3>結束日期</h3>
            <input
              type="text"
              name="cpt_end"
              id="end"
              placeholder="請輸入結束日期"
              v-model="cpt_end"
              required
            />
          </div>

          <div class="aboard">
            <h3>地點</h3>
            <input
              type="text"
              name="cpt_aboard"
              id="aboard"
              placeholder="請輸入地點"
              v-model="cpt_aboard"
              required
            />
          </div>
        </div>

        <div>
          <!-- <div class="photo">
            <h3>圖片</h3>
            <p>
              <img id="image" />
            </p>
            <input type="file" id="theFile" @change="fileChange" />
          </div> -->

          <div class="txt">
            <h3>內容</h3>
            <textarea
              type="text"
              name="cpt_txt"
              id="txt"
              placeholder="請輸入內容"
              v-model="cpt_txt"
              rows="10"
              cols="50"
              required
            />
          </div>
        </div>
      </div>
    </form>
    <div class="btn">
      <input
        type="button"
        value="確定新增"
        id="conFirm"
        @click="addProduct()"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/sass/style.scss";

template {
}

.top {
  width: 100%;
  display: block;
}
// div {
//   margin: 10px;
// }
h2 {
  font-size: 40px;
  color: #fff;
  margin: 10px 10px;
  padding: 10px 10px;
  background-color: #597897;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 20px;
  color: black;
}

.cpt {
  padding-left: 20px;
  display: flex;
  gap: 100px;
}

.proAdd {
  width: 100%;
  height: 100vh;
  margin: 50px;

  overflow: scroll;
  .proCol {
    h3 {
      font-size: 30px;
      color: rgb(26, 26, 26);
    }
    input {
      width: 50%;
      height: 40px;
      margin-top: 10px;
      margin-left: 50px;
      border: 1px solid rgb(124, 124, 124);
      border-radius: 5px;
      padding-left: 10px;
      font-size: 18px;
      &:focus {
        color: #06519d;
        border: 1px solid #1671cd;
        outline: none;
        &::placeholder {
          opacity: 0;
        }
      }
      &::placeholder {
        padding-left: 5px;
        color: rgba(181, 181, 181, 0.749);
      }
    }
    select {
      width: 50%;
      height: 40px;
      border-radius: 5px;
      margin-top: 10px;
      margin-left: 50px;
      border: 1px solid rgb(124, 124, 124);
      font-size: 20px;
    }
  }
}
.btn {
  display: flex;
  margin: 50px;
  input {
    width: 150px;
    font-size: 20px;
    margin-right: 15px;
    padding: 10px;
    text-align: center;
    border: none;
  }
  #canCel {
    border-radius: 5px;
    border: 1px solid #999;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba(204, 204, 204, 0.326);
    }
  }
  #conFirm {
    border-radius: 5px;
    background-color: $blue;
    color: #fff;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: #06519d;
    }
  }
}
.imgBox {
  margin-top: 25px;
}
#image {
  width: 50%;
  height: 200px;
  border-radius: 5px;
  border: 1px solid rgb(124, 124, 124);
}
#theFile {
  border: none;
}
</style>
