<script setup>
import { ref,reactive, onMounted } from 'vue';
    const prodRows = ref([]);

    const getProductSearch = () =>{
    fetch("http://localhost/cgd103_g5_v2/public/g5PHP/getProduct.php")
        .then(res => res.json())
        .then(json => {
            prodRows.value = json;
        })
    }

    getProductSearch();
    
    const table = ref(['編號','商品名稱','商品分類','售價','折價','折價後價格','顏色','圖片'])
</script>
<template>
  <div class="productQuery">
     <div class="top">
        <h2>商品查詢</h2>
        <outComponents />
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
            <tr v-for="prodRow in prodRows" :key="prodRow">
                <td>{{prodRow.prd_no}}</td>
                <td>{{prodRow.prd_name}}</td>
                <td>{{prodRow.cat_no}}</td>
                <td>{{prodRow.prd_price}}</td>
                <td>{{prodRow.sale}}</td>
                <td>{{prodRow.sale_price}}</td>
                <td>{{prodRow.color}}</td>
                <td><img :src="`/dist/assets/${prodRow.images}`" alt="product_pic"></td>
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
.productQuery {
    width: 85%;
  height: 100%;
  overflow-y: auto;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px ;
    padding: 20px ;
    background-color: #597897;
    h2{
        align-items: center;
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
                background: $blue;
                border-radius: 5px;
                padding: 5px;
                transition: background 0.5s;
                cursor: pointer;
                &:hover{
                    background: #06519d;
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
    width: 100%;
    margin: auto;
    table{
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
                cursor: pointer;
                width: 150px;
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
.revised{
    cursor: pointer;
}

</style>
