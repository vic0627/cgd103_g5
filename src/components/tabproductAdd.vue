<script setup>
import { ref, onMounted } from "vue";
import { BIND_URL } from "../composables/useCommon";

const prd_name = ref("");
const prd_price = ref("");
const cat_no = ref("");
const color = ref("");
const images = ref("");

const addProduct = () => {
  const payload = {
    prd_name: String(prd_name.value),
    prd_price: Number(prd_price.value),
    cat_no: Number(cat_no.value),
    color: String(color.value),
    images: String(images.value)

  };
  
  fetch(`${BIND_URL('insertProducts.php','g5PHP')}`, {
    method: "POST",
    body: new URLSearchParams(payload),
  }).then((res) => {
    res.text();
  });
};

const getCat = () => {
  fetch(`${BIND_URL('getProCat.php','g5PHP')}`)
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

  fetch(`${BIND_URL('insertPhoto.php',g5PHP)}`, {
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
            placeholder="EX:body_04"
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
            placeholder="請輸入$USD"
            v-model="prd_price"
          />
        </div>
        <div>
          <label for="">商品顏色</label>
          <input
            type="text"
            name="color"
            placeholder="Ex:green"
            v-model="color"
          />
        </div>
        <div>
          <label for="">商品圖片路徑</label>
          <input
            type="text"
            name="color"
            placeholder="Ex:body_01.png"
            v-model="images"
          />
        </div>
      </form>

      <!-- <div class="imgBox">
        <p>
          <img id="image" />
        </p>
      </div>
      <input type="file" id="theFile" @change="fileChange" /> -->
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
  display: block;
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
label{
  font: $caption-p;
  margin: 10px 0;
}
input {
  margin: 10px 0;
  margin-left: 10px;
  width: 200px;
  height: 40px;
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
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 20px;
  border: 1px solid rgb(124, 124, 124);
  font-size: 20px;
}
.proAdd {
  margin: 50px;
  .proCol {
    h3 {
      font-size: 30px;
      color: rgb(26, 26, 26);
    }
    form{
      div{
        label{
          font: $caption-p;
          margin: 10px 0;
        }
        input {
          margin: 10px 0;
          width: 50%;
          height: 40px;
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
