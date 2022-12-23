<script>
import Chart from 'chart.js/auto';
export default{
  mounted(){
  const ctx = document.getElementById('myChart');
    const labels = ['06月','07月','08月','09月','10月','11月','12月'];
      const data = {
        labels: labels,
        datasets: [{
        label: '營業曲線圖',
        data: [65, 19, 80, 61, 26, 55, 90],
        fill: false,
        borderColor: '#597897',
        tension: 0,
      }],
    };
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        animations: {
          tension: {
          duration: 2500,
          easing: 'ease',
          from: 0.5,
          to: 0,
          loop: true
          }
        },
        scales: {
          y: { 
            min: 0,
            max: 100
          }
        }
      }
    });
  }
}
</script>
<template>
<div class="tops">
  <h2>
    <span id="admin_acc"></span>   <!-- 使用者姓名 -->
    <outComponents />
  </h2>
  <div class="box">
    <div class="top_box">
      <!-- 客戶總數 -->
      <div class="item mem">
        <div class="list">
          <img src="../assets/images/About/user.png" alt="會員總數">
        </div>
        <div class="word">
          <p class="client">會員總數</p>
          <p class="num">1500</p>
        </div>
      </div>
      <!-- 網站點擊 -->
      <div class="item cli">
        <div class="list">
          <img src="../assets/images/About/cursor.png" alt="網站點擊">
        </div>
        <div class="word">
          <p class="click">網站點擊</p>
          <p class="num">4800</p>
        </div>
      </div>
      <!-- 來電數 -->
      <div class="item cal">
        <div class="list">
          <img src="../assets/images/About/phone-call.png" alt="來電">
        </div>
        <div class="word">
          <p class="call">來電數</p>
          <p class="num">500</p>
        </div>
      </div>
      <!-- 本月收入 -->
      <div class="item inc">
        <div class="list">
          <img src="../assets/images/About/dollar.png" alt="本月收入">
        </div>
        <div class="word">
          <p class="income">本月收入</p>
          <p class="num">59000 美金</p>
        </div>
      </div>
      <!-- // -->
    </div>
    <!-- // -->
    <div class="down_box">
      <div class="left">
        <div class="round_box">
        <div class="round"><p>Sales</p><span>75%</span></div>
        <h3>平均銷售額</h3>
        </div>
        <div class="sales_summary">
        <h3>銷售概要</h3>
        <div class="summary">
          <div class="sum_list">
            <div class="txt">
              <img src="../assets/images/About/smiling-face.png" alt="訪客數">
              <div class="txt_box">
                <p>訪客數</p>
                <span>每周訪客</span>
              </div>
            </div>
            <div class="money">
              <p>15300</p>
              <span>增加45%</span>
            </div>
          </div>
          <div class="sum_list">
            <div class="txt">
              <img src="../assets/images/About/file.png" alt="本月收入" class="file">
              <div class="txt_box">
                <p>總稅額</p>
                <span>每周利潤</span>
              </div>
            </div>
            <div class="money">
              <p>$17300</p>
              <span>增加75%</span>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="right">
        <canvas id="myChart" width="1000" height="640"></canvas>
      </div>
    </div>
  </div>
</div>
  

</template>
<style scoped lang="scss" >
@import '@/sass/style.scss';


.tops {
  width: 100%;
  display: block;
  overflow: auto;
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
  width: 99%;
  justify-content: center;
  .top_box{
    width: 95%;
    margin: 15px auto;
    display: flex;
    justify-content:space-between;
    .item{
      width: 350px;
      margin: 5px;
      padding: 5px;
      border-radius: 5px;
      text-align: center;
      img{
        width: 40px;
        height: 40px;
        object-fit: cover;
        margin-top: 10px;
        border-radius: 100%;
      }
      .word{
        margin: 10px 0;
        display: flex;
        text-align: center;
        justify-content: center;
        p{
          color: rgb(83, 46, 22);
          margin: 0 10px;
        }
      }
    }
  }
}
.mem {
  background: #d1e0f5;
  &:hover{
    transition: transform 0.8s;
    transform: scale(1.05);
  }
}
.cli {
  background: #e4d1eca5;
  &:hover{
    transition: transform 0.8s;
    transform: scale(1.05);
  }
}
.inc {
  background: #fff5e3cb;
  &:hover{
    transition: transform 0.8s;
    transform: scale(1.05);
  }
}
.cal{
  background: #f6e2e2;
  &:hover{
    transition: transform 0.8s;
    transform: scale(1.05);
  }
}

.down_box{
  width: 100%;
  margin:  auto;
  justify-content: center;
  display: flex;
  .round_box{
    width: 500px;
    // height: 400px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    h3{
      font-size: 25px;
      color: rgb(48, 48, 48);
      text-align: center;
    }
    .round{
      width: 300px;
      height: 300px;
      border-radius: 50%;
      margin: 15px auto;
      border: 15px solid rgb(231, 231, 231);
      position: relative;
      justify-content: center;
      text-align: center;
      display: block;
      span{
        color: $blue;
        position: absolute;
        top:65%;
        left: 52%;
        transform: translate(-65%, -52%);
      }
      p{
        font-size: 25px;
        color: $blue;
        position: absolute;
        font-weight: 600;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &::after{
        content: "";
        position: absolute;
        top: -15px;
        left: -15px;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        border: 15px solid ;
        transform: rotate(45deg);
        border-color: $blue $blue $blue rgb(231, 231, 231);
        animation: round 5s  ease;
      }
    }
  }
}

@keyframes round {
  0%{
    transform: rotate(-140deg);
    border-color:rgb(231, 231, 231)  rgb(231, 231, 231) $blue;
  }
  50%{
    transform: rotate(100deg);
    border-color: $blue rgb(231, 231, 231) $blue rgb(231, 231, 231) ;
  }
  100%{
    transform: rotate(45deg);
    border-color: $blue $blue $blue rgb(231, 231, 231);
  }
}
.sales_summary{
  width: 500px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  h3{
    text-align: left;
    font-size: 25px;
    color: #000;
    margin: 5px 20px;
  }
  .summary{
    .sum_list{
      width: 95%;
      display: flex;
      margin:auto;
      margin-bottom: 20px;
      align-items: center;
      justify-content:space-between;
      
      .txt{
        display: flex;
        align-items: center;
        img{
          width: 35px;
          height: 35px;
          margin: 5px;
          margin-right: 10px;
        }
        .file{
          width: 40px;
          height: 40px;
        }
        p{
          color: #000;
        }
        span{
          color: #f00;
        }
      }

      .money {
        
        display: block;
        p{
          color: #000;
        }
        span{
          
          color: #fa0;
        }
      }
    }
    
  }
}

.right{
  width: 1015px;
  height: 645px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>