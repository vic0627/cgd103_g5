<script>

</script>
<template>
<div class="tops">
  <h2>
    後台首頁
    <outComponents />
  </h2>
  <div class="box">
    <div class="top_box">
      <!-- 客戶總數 -->
      <div class="item">
        <div class="list">
          <img src="../assets/images/About/user.png" alt="會員總數">
        </div>
        <div class="word">
          <span class="num">1500</span>
          <p class="client">會員總數</p>
        </div>
      </div>
      <!-- 網站點擊 -->
      <div class="item">
        <div class="list">
          <img src="../assets/images/About/cursor.png" alt="網站點擊">
        </div>
        <div class="word">
          <span class="num">4800</span>
          <p class="click">網站點擊</p>
        </div>
      </div>
      <!-- 來電數 -->
      <div class="item">
        <div class="list">
          <img src="../assets/images/About/call.png" alt="來電">
        </div>
        <div class="word">
          <span class="num">500</span>
          <p class="call">來電數</p>
        </div>
      </div>
      <!-- 本月收入 -->
      <div class="item">
        <div class="list">
          <img src="../assets/images/About/dollar.png" alt="本月收入">
        </div>
        <div class="word">
          <span class="num">500</span>
          <p class="income">本月收入</p>
        </div>
      </div>
      <!-- // -->
    </div>
    <!-- // -->
    <div class="down_box"></div>
  </div>
</div>
  

</template>
<style scoped lang="scss" >
@import '@/sass/style.scss';

.tops {
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
.box{
  width: 100%;
  border: 1px solid #ccc;
  .top_box{
    width: 95%;
    margin: auto;
    border: 1px solid #f00;
    display: flex;
    .item{
      width: 260px;
      margin: 0 15px;
      border: 1px solid #fa0;
    }
  }
}

</style>