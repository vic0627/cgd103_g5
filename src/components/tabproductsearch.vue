<script setup>
import { ref,reactive, onMounted } from 'vue';
    const products = reactive([
        {   
            pno:1,
            pname:"EFVP Mavic 1 Green",
            Original_Price:'USD$900',
            info:'EFVP Mavic 1 Green不僅身懷高超飛行技藝，為你呈現旗艦級影像質感。帶它走遍山海，大作盡顯光彩。',
        },
        {   
            pno:2,
            pname:"EFVP Mavic 2 White",
            Original_Price:'USD$900',
            info:'EFVP Mavic 2 White不僅身懷高超飛行技藝，為你呈現旗艦級影像質感。帶它走遍山海，大作盡顯光彩。',
        },
        {   
            pno:3,
            pname:"EEFVP Mavic 3 Red",
            Original_Price:'USD$900',
            info:'EFVP Mavic 3 Red不僅身懷高超飛行技藝，為你呈現旗艦級影像質感。帶它走遍山海，大作盡顯光彩。',
        },
        {   
            pno:4,
            pname:"EFVP Mavic 4 Black",
            Original_Price:'USD$900',
            info:'EFVP Mavic 4 Black不僅身懷高超飛行技藝，為你呈現旗艦級影像質感。帶它走遍山海，大作盡顯光彩。',
        }
    ]
    )
    const table = ref(['品名','商品編號','價格','資訊','修改' ])
</script>
<template>
  <div class="productQuery">
     <div class="top">
        <h2>商品查詢</h2>
        <span>
            <router-link class="out" to="/">離開後台 &rarr; </router-link>
        </span>
     </div>
     
    <div class="headeBar">
        <div class="left_bar">
            <select name="" id="">商品類別
                <option value="商品類別">商品類別</option>
                <option value="機身">機身</option>
                <option value="零件">零件</option>
                <option value="組合">組合</option>
            </select>
        </div>
        <div class="right_bar">
            <label for="">商品編號</label>
            <input type="search" name="" id="" placeholder="請輸入查詢">
            <button type="submit">
                <img src="../assets/images/backend/search.png" alt="search">
            </button>
            <button type="submit">
                <img src="../assets/images/backend/add.png" alt="add">
            </button>
        </div>
        
    </div>
    <div class="mainContent">
        <table>
            <tr>
                <th v-for="item in table" :key="item">
                   <p>{{item}}</p> 
                </th>
            </tr>
            <tr v-for="items in products" :key="items.pno">
                <td>{{items.pno}}</td>
                <td>{{items.pname}}</td>
                <td>{{items.Original_Price}}</td>
                <td>{{items.info}}</td>
                <td><a href="#">修改/<span>刪除</span></a></td>
            </tr>
        </table>
        <span class="infoCount">目前頁數 1 / 2，總共有15筆資訊</span>
    </div>
    <div class="pagination">
        &lt;
        <a v-for="page in 2" :key="page">{{page}}</a>
    	&gt;
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/sass/style.scss';
body{
  background: #fff;
  box-sizing: border-box;
}
.productQuery {
    width: 100%;
  height: 100vh;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px ;
    padding: 20px ;
    background-color: #597897;
    h2{
        font:$caption-h2;
        font-size: 60px;
        color: #fff;
    }
    img{
        position: relative;
        left: -20px;
    }
    span{
        .out{
            max-width: 130px;
            display: block;
            position: relative;
            font-size: 20px;
        }
    }
  }  
  .headeBar{
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    .left_bar{
        font:$caption-p;
        max-width: 50%;
        height: 50px;
        select{
            font:$caption-p;
            width: 100%;
            height: 100%;
            padding: 0 5px;
             @include m($m-breakpoint){
                font:$caption-h4;
            }
            &::after{
                content:"⌵";
            }
        }
    }
    .right_bar {
        label,input{
            max-width: 200px;
            font:$caption-p;
        }
        button{
            &:nth-child(2){
                display: none;
            }
            position: relative;
            top: 10px;
            background-color: transparent;
            border: none;
            @include m($m-breakpoint){
               
            }
        }
    }
    
  }
  .mainContent{
    max-width: 100%;
    color: black;
    text-align: center;
    margin-left: 20px;
    @include m($m-breakpoint){
        margin: 20px;
    }
    table{
        font:$caption-p;
        max-width: 100%;
        height: 50px;
        border: 1px solid black;
        tr:not(:last-child){
            border-bottom:1px solid #ccc ;
            padding: 20px;
            margin: 20px;
        }
        tr:hover td{
                background-color: #ddd;
        }
        th{
            &:nth-child(4){
                display: none;
            }
            padding-top: 15px;
            background-color: #ccc;
            p{
                color: #111;
                font-weight: bold;
            }
            @include m($m-breakpoint){
                &:nth-child(4){
                    display: block;
                }
            }
        }
        td{
            font:$caption-p;
            padding: 20px;
            margin: 20px;
            vertical-align: middle;
            &:nth-child(4){
                display: none;
            }

            a{
                color: #333;
                span{
                    color: red;
                }
            }
            @include m($m-breakpoint){
                &:nth-child(4){
                    display: block;
                }
            }
        }
    }
    .infoCount{
        display: block;
        line-height: 50px;
        text-align: right;
        color: black;
    }
  }

  .pagination{
    height: 100px;
    display: flex;
    justify-content: center;
    a{
        cursor: pointer;
        color: #ccc;
        margin: -5px 20px;

        &:active{
            color: #597897;
        }
        &:first-child{
            color: #597897;
        }
    }
  }
}


</style>
