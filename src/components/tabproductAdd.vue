<script setup>
import { ref, onMounted } from "vue";

const prd_name = ref("");
const prd_price = ref("");
const cat_no = ref("");
const color = ref("");

const addProduct = () => {
  const payload = {
    prd_name: prd_name.value,
    prd_price: prd_price.value,
    cat_no: cat_no.value,
    color: color.value,
  };
  fetch("http://localhost/cgd103_g5_v2/public/g5PHP/insertProducts.php", {
    method: "POST",
    body: new URLSearchParams(payload),
  }).then((res) => {
    res.text();
  });
};
const getCat = () => {
  fetch("http://localhost/cgd103_g5_v2/public/g5PHP/getProCat.php")
    .then((res) => res.json())
    .then((json) => {
      cat_no.value = json;
    });
};

onMounted(() => {
  getCat();
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
    image.style.maxWidth = "500px";
    image.style.maxHeight = "500px";
  });

  const formData = new FormData();
  formData.append("image", file);
  fetch("http://localhost/cgd103_g5_v2/public/g5PHP/insertPhoto.php", {
    method: "POST",
    body: formData,
  });
}
</script>
<template>
  <div class="top">
    <h2>
      商品新增
      <outComponents />
    </h2>
    <div class="proAdd">
      <form action="post">
        <div>
          <label for="">商品名稱</label>
          <input
            type="text"
            name="prd_name"
            placeholder="請輸入"
            v-model="prd_name"
          />
        </div>
        <div class="">
          商品分類
          <select name="cat_no" id="" v-model="cat_no">
            <option disabled>商品分類</option>
            <option v-for="(cat, index) in cat_no" :key="index">
              {{ cat.cat_no }}
            </option>
          </select>
        </div>
        <div>
          <label for="">售價(美元)</label>
          <input
            type="text"
            name="prd_price"
            placeholder="請輸入"
            v-model="prd_price"
          />
        </div>
        <div>
          <label for="">商品顏色</label>
          <input
            type="text"
            name="color"
            placeholder="請輸入"
            v-model="color"
          />
        </div>
      </form>
      <div class="imgBox">
        <p>
          <img id="image" />
        </p>
      </div>
      <input type="file" id="theFile" @change="fileChange" />
      <div class="btn">
        <input
          type="button"
          value="確定新增"
          id="conFirm"
          @click="addProduct()"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/sass/style.scss";

.top {
  width: 85%;
  height: 100%;
  overflow-y: auto;
}

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

.proAdd {
  // width: 100%;
  margin: 50px;
  .proCol {
    h3 {
      font-size: 30px;
      color: rgb(26, 26, 26);
    }
    label{
      font: $caption-p;
    }
    input {
      width: 50%;
      height: 40px;
      margin-top: 10px;
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
  height: 490px;
  border-radius: 5px;
  border: 1px solid rgb(124, 124, 124);
}
#theFile {
  border: none;
}
</style>
