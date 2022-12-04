<script>
import navComponentsVue from '@/components/navComponents.vue';

export default{
  components:{
    navComponentsVue
  }
}



</script>

<template>
<navComponentsVue />
<section class="machine">
  <div class="machine_box">
    <div class="machine_title">
      <h2>Combined machines currently owned</h2>
    </div>
    <div class="box">
      <div class="item">
        <img src="../assets/images/About/body01.png" alt="body">
        <p>Machine 1</p>
      </div>
      <div class="item">
        <img src="../assets/images/About/body02.png" alt="body">
        <p>Machine 2</p>
      </div>
      <div class="item">
        <img src="../assets/images/About/body01.png" alt="body">
        <p>Machine 3</p>
      </div>
      <div class="item">
        <img src="../assets/images/About/body02.png" alt="body">
        <p>Machine 4</p>
      </div>
    </div>
    <div class="btn">
      <router-link class="article" to="/CustomizedOrders"><button>View customization &rarr;</button></router-link>
    </div>
  </div>
</section>
        
    
</template>
<style lang="scss" scoped>
@import '@/sass/style.scss';
body{
  overflow: hidden;
}
.machine{
  width: 100%;
  margin-top: 0;
  .machine_box{
    width: 100%;
    .machine_title{
      width: 100%;
      justify-content: center;
      h2{
        font-size: 15px;
        margin: 25px 0;
        text-align: center;
      }
    }
    .box{
      width: 100%;
      max-width: 1200px;
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
      gap: 20px;
      margin: auto;
      text-align: center;
      .item{
        overflow: hidden;
        margin: 0 15px;
        padding: 15px;
        align-items: center;
        border-radius: 5px;
        background: rgba(67, 67, 67, 0.31);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        img{
          width: 250px;
          height: 135px;
        }
        p{
          margin-top: 15px;
        }
      }
      
    }
    @include m($m-breakpoint){
      .box{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
        gap: 20px;
      }
    }
    @include m($m-breakpoint){
      .box{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(450px,1fr));
        gap: 20px;
        .item{
          padding: 50px 15px;
          img{
            width: 300px;
          }
        }
      }
    }
    .btn{
      width: 100%;
      justify-content: center;
      text-align: center;
      margin: 50px auto;
      button{
        padding: 10px;
        border: none;
        color: #fff;
        outline: none;
        background: $blue;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;
        &:hover{
          transform: scale(1.05);
          background: linear-gradient(98.29deg, #077AF9 10.1%, #9C4DD6 82.53%);
        }
      }
      @include m($m-breakpoint){
        button{
          padding: 15px;
        }
      }
    }
  }
}
</style>