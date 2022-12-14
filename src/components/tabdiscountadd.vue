<script></script>
<template>
  <div class="top">
    <h2>
      優惠新增
      <outComponents />
    </h2>
    <div class="discount">
      <div class="name">
        <h3>優惠名稱</h3>
        <input type="text" placeholder="優惠名稱" id="name" />
      </div>
      <div class="description">
        <h3>優惠描述</h3>
        <input type="text" placeholder="優惠描述" id="description" />
      </div>
      <div class="start">
        <h3>優惠開始時間</h3>
        <input type="date" id="start" />
      </div>
      <div class="end">
        <h3>優惠結束時間</h3>
        <input type="date" id="end" />
      </div>
      <div class="papa">
        <h3>折扣設定</h3>
        <input type="text" placeholder="折扣設定" id="papa" />
      </div>
    </div>
    <div class="btn">
      <input type="submit" value="取消新增" id="cancel" />
      <input type="submit" value="確定新增" id="confirm" />
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
.discount {
  width: 100%;
  margin: 50px;
  .name {
    display: flex;
    h3 {
      font-size: 30px;
      color: rgb(26, 26, 26);
      width: 200px;
    }
    input {
      width: 800px;
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
  }
  .description {
    display: flex;
    h3 {
      font-size: 30px;
      color: rgb(26, 26, 26);
      width: 200px;
    }
    input {
      width: 800px;
      height: 40px;
      margin-top: 10px;
      padding-left: 10px;
      margin-left: 50px;
      font-size: 18px;
      border: 1px solid rgb(124, 124, 124);
      border-radius: 5px;
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
  .start {
    display: flex;
    h3 {
      font-size: 30px;
      color: rgb(26, 26, 26);
      width: 200px;
    }
    input {
      width: 800px;
      height: 40px;
      margin-top: 10px;
      padding-left: 10px;
      margin-left: 50px;
      font-size: 18px;
      border: 1px solid rgb(124, 124, 124);
      border-radius: 5px;
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
  .end {
    display: flex;
    h3 {
      font-size: 30px;
      color: rgb(26, 26, 26);
      width: 200px;
    }
    input {
      width: 800px;
      height: 40px;
      margin-top: 10px;
      padding-left: 10px;
      margin-left: 50px;
      font-size: 18px;
      border: 1px solid rgb(124, 124, 124);
      border-radius: 5px;
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
  .papa {
    display: flex;
    h3 {
      font-size: 30px;
      color: rgb(26, 26, 26);
      width: 200px;
    }
    input {
      width: 800px;
      height: 40px;
      margin-top: 10px;
      padding-left: 10px;
      margin-left: 50px;
      font-size: 18px;
      border: 1px solid rgb(124, 124, 124);
      border-radius: 5px;
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
  #cancel {
    border-radius: 5px;
    border: 1px solid #999;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba(204, 204, 204, 0.326);
    }
  }
  #confirm {
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
