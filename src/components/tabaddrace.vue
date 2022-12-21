<script setup>
import { reactive, onMounted, ref } from "vue";
onMounted(() => {
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
}
</script>
<template>
  <div class="top">
    <h2>
      賽事新增
      <outComponents />
    </h2>
    <div class="box">
      <div class="word">
        <div class="title">
          <h3>賽事編號</h3>
          <input
            type="text"
            name="tit"
            id="tit"
            placeholder="請輸入賽事編號"
            required
          />
        </div>
        <div class="title">
          <h3>賽事名稱</h3>
          <input
            type="text"
            name="tit"
            id="tit"
            placeholder="請輸入賽事名稱"
            required
          />
        </div>
        <div class="title">
          <h3>地區</h3>
          <input
            type="text"
            name="tit"
            id="tit"
            placeholder="請輸入地區"
            required
          />
        </div>
        <div class="title">
          <h3>開始日期</h3>
          <input type="date" name="tit" id="tit" required />
        </div>
        <div class="title">
          <h3>結束日期</h3>
          <input type="date" name="tit" id="tit" required />
        </div>
        <div class="text">
          <h3>比賽內文</h3>
          <textarea
            cols="40"
            rows="10"
            name="txt"
            id="txt"
            placeholder="請輸入內容"
            required
          ></textarea>
          <div class="btns">
            <input type="submit" value="送出" id="conFirm" />
          </div>
        </div>
      </div>
      <div class="imgBox">
        <p>
          <img id="image" />
        </p>
        <input type="file" id="theFile" @change="fileChange" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/sass/style.scss";
.top {
  width: 100%;
  display: block;
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
h3 {
  font-size: 30px;
  color: rgb(26, 26, 26);
}

.search_box {
  display: flex;
  justify-content: right;
  margin: 30px 15px;
  label {
    margin-right: 10px;
    font-size: 20px;
    color: rgb(26, 26, 26);
    input {
      margin-left: 10px;
      height: 35px;
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
  }
  .btn {
    button {
      width: 50px;
      text-align: center;
      border: none;
      background: #597897;
      border-radius: 5px;
      padding: 5px;
      transition: background 0.5s;
      cursor: pointer;
      &:hover {
        background: $blue;
      }
      img {
        width: 20px;
        height: 20px;
        margin-top: 2px;
      }
    }
  }
}

.box {
  width: 100%;
  display: flex;
  .word {
    margin: 0 25px;
  }
}
.title {
  margin: 15px 0;
}
.text {
  margin: 15px 0;
}
.labels {
  margin: 0;
}
label {
  margin-right: 10px;
  font-size: 20px;
  color: rgb(26, 26, 26);
}
input {
  width: 400px;
  height: 35px;
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
textarea {
  font-size: 18px;
  height: 300px;
  padding-left: 10px;
  padding-top: 10px;
  &:focus {
    color: #06519d;
    border: 1px solid #1671cd;
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    font-size: 20px;
    padding-left: 5px;
    color: rgba(181, 181, 181, 0.749);
  }
}
.imgBox {
  margin-top: 25px;
}
#image {
  width: 500px;
  height: 300px;
  border-radius: 5px;
  border: 1px solid rgb(124, 124, 124);
}
#theFile {
  border: none;
}
.btns {
  margin: 10px 0;
  input {
    width: 120px;
    margin-left: -1px;
    font-size: 20px;
    line-height: 25px;
    padding: 5px 10px;
    text-align: center;
    border: none;
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
</style>
