<script setup>
import { ref } from "vue";

// const no = ref("");
const name = ref("");
const start = ref("");
const end = ref("");
const aboard = ref("");
const photo = ref("");
const txt = ref("");
const add = () => {
  const payload = {
    // cpt_no: name.value,
    cpt_name: name.value,
    cpt_start: start.value,
    cpt_end: end.value,
    cpt_aboard: aboard.value,
    cpt_photo: photo.value,
    cpt_txt: txt.value,
  };
  fetch("http://localhost/cgd103_g5/public/g5PHP/insertRace.php", {
    method: "POST",
    body: new URLSearchParams(payload),
  }).then((res) => {
    res.text();
  });
};
</script>
<template>
  <div class="top">
    <h2>
      賽事新增
      <outComponents />
    </h2>
    <form action="" method="post">
      <div class="cpt">
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
            type="date"
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
            type="date"
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

        <div class="photo">
          <h3>圖片</h3>
          <p>
            <img id="image" />
          </p>
          <input type="file" id="theFile" @change="fileChange" />
        </div>

        <div class="txt">
          <h3>內容</h3>
          <input
            type="text"
            name="cpt_txt"
            id="txt"
            placeholder="請輸入內容"
            v-model="cpt_txt"
            required
          />
        </div>
      </div>
    </form>
    <div class="btn">
      <button value="確定新增" id="conFirm" @click="add()">確定新增</button>
    </div>
    <!-- <div class="box">
      <div class="word">
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
    </div> -->
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
