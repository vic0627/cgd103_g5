<script setup>
import { ref,reactive, onMounted } from 'vue';
import img1 from '../../public/images/shop/body_01_green_1.png';
import img2 from '../../public/images/shop/body_01_white_1.png';
import img3 from '../../public/images/shop/body_01_red_1.png';
import img4 from '../../public/images/shop/body_01_black_1.png';
    const imgs = reactive([
        {   
            pno:1,
            src:img1,
            pname:"Mavic 1 Green",
           
        },
        {   
            pno:2,
            src:img2,
            pname:"Mavic 2 White",
           
        },
        {   
            pno:3,
            src:img3,
            pname:"EMavic 3 Red",
           
        },
        {   
            pno:4,
            src:img4,
            pname:"Mavic 4 Black",
           
        }
    ]
    )
    const table = ref(['圖片編號','圖片','圖片名稱','修改' ])
</script>
<template>
  <div class="productImgManage">
     <div class="top">
        <h2>商品圖片管理</h2>
        <outComponents />
     </div>
     
    <div class="headeBar">
        <div class="left_bar">
            <select name="" id="">圖片類別
                <option value="圖片類別">圖片類別</option>
                <option value="機身">機身</option>
                <option value="零件">零件</option>
                <option value="組合">組合</option>
            </select>
        </div>
        <div class="right_bar">
            <div class="search_box">
                <label for="search" class="label">商品編號<input type="search" id="search" name="search" placeholder="請輸入編號"></label>
                <div class="btn">
                    <button class="magBox"><img src="../assets/images/About/search.png" alt="search"></button>
                </div>
            </div>
        </div>
        
    </div>
    <div class="mainContent">
        <table>
            <tr>
                <th v-for="item in table" :key="item">
                   <p>{{item}}</p> 
                </th>
            </tr>
            <tr v-for="items in imgs" :key="items.pno">
                <td>{{items.pno}}</td>
                <td><img :src="items.src" alt="product_pic"></td>
                <td>{{items.pname}}</td>
                <td><div class="revised">修改/<span>刪除</span></div></td>
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
.productImgManage {
    width: 100%;
  height: 100vh;
  overflow: scroll;
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
        // width: 80%;
        position: relative;
        left: -20px;
    }
    span{
        max-width: 130px;
        display: block;
        position: relative;
        font-size: 20px;
    }
  }  
  .headeBar{
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
        .search_box{
            display: flex;
            justify-content: right;
            margin: 30px 15px;
            label {
                margin-right: 10px;
                font-size: 20px;
                color: rgb(26, 26, 26);
                input{
                margin-left: 10px;
                height: 35px;
                border: 1px solid rgb(124, 124, 124);
                border-radius: 5px;
                padding-left: 10px;
                font-size: 18px;
                &:focus{
                    color: #06519d;
                    border: 1px solid #1671cd;
                    outline: none;
                    &::placeholder{
                    opacity: 0;
                    }
                }
                &::placeholder{
                    padding-left: 5px;
                    color: rgba(181, 181, 181, 0.749);
                }
            }
        }
        .btn {
            button{
            width: 50px;
            text-align: center;
            border: none;
            background: #597897;
            border-radius: 5px;
            padding: 5px;
            transition: background 0.5s;
            cursor: pointer;
            &:hover{
                background: $blue;
            }
            img{
                width: 20px;
                height: 20px;
                margin-top: 2px;
            }
            }
        }
        }
    }
    
  }
  .mainContent{
    max-width: 100%;
    margin: auto;
    table{
        // font:$caption-p;
        width: 95%;
        margin: 0 auto;
        font-size: 20px;
        border: 1px solid #C0C0C0;
        tr{
            text-align: center;
            border: 1px solid #C0C0C0;
            &:hover td{
                background: rgba(89, 120, 151, 0.11);
            }
        }
        th{
            padding: 20px 10px;
            background-color: #597897;
            border: 1px solid #C0C0C0;
            border-top: 1px solid #597897;
            p{
                color: #fff;
            }
        }
        td{
            border: 1px solid #C0C0C0;
            padding: 20px 10px; 
            vertical-align: middle;
            .revised{
                color: #597897;
                span{
                    margin: 5px;
                    color: $ored;
                    &:focus{
                    border-bottom: 1px solid #1671cd;
                }
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
