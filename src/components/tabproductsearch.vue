<script setup>
import { ref,reactive, onMounted,h,computed } from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal, } from 'naive-ui';
import { BIND_URL } from "../composables/useCommon";

    const prodRows = ref([]);

    const getProductSearch = () =>{
     
    fetch(`${BIND_URL('getProduct.php','g5PHP')}`)
        .then(res => res.json())
        .then(json => {
            prodRows.value = json;
            console.log('prodRows',prodRows)
        })
    }

    getProductSearch();
    
    const showModal = ref(false);
    const newName = ref('');const newPrice = ref('');const newSale = ref('');const newSalePrice = ref('');const newColor = ref('');const newImg = ref('');const newPrd_no = ref('');
    
    const updatePro =()=>{
        const newPro = {
            prd_name: String(newName.value),
            prd_price: Number(newPrice.value),
            sale: Number(newSale.value),
            sale_price: Number(newSalePrice.value),
            color: String(newColor.value),
            images: String(newImg.value),
            prd_no: Number(newPrd_no.value)
        }
        
        fetch(`${BIND_URL('updatePro.php','g5PHP')}`, {
            method: "POST",
            body: new URLSearchParams(newPro),
        }).then(res=>{
            res.json()
        }).then(res=>{
            showModal.value = false
            getProductSearch();            
        })

    }

//分頁js
const paginationReactive = reactive({
      page: 1,
      pageSize: 10,
      onChange: (page) => {
        paginationReactive.page = page;
      },
      onUpdatePageSize: (pageSize) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      }
    });
const  pagination = paginationReactive;

//data-table
const createColumns = ({selectId})=>{
    return [
  {
    title: "編號",
    key: "prd_no",
    sorter: (row1, row2) => row2.prd_no - row1.prd_no,
  },
  {
    title: "名稱",
    key: "prd_name",
  },
  {
    title: "價格",
    key: "prd_price",
  },
  {
    title: "折價",
    key: "sale",
  },
  {
    title: "折價後價格",
    key: "sale_price",
  },
  {
    title: "圖片",
    key: "images",
  },
  {
      title: "編輯",
      key: "actions",
      render(row, index) {
        return h(
          NButton,
          {
            size: "medium",
            color: "#077AF9",
            onClick: () => selectId(row,index),
            // onClick: () => modal(row)
          },
          { default: () => "編輯" }
        );
      }
    },
  ]
};

//解析內容跟事件
const column = createColumns({
  selectId(rowData,index) {
    showModal.value = true;
    newName.value = rowData.prd_name;
    newPrd_no.value = rowData.prd_no;
    newPrice.value = rowData.prd_price;
    newSale.value = rowData.sale;
    newSalePrice.value = rowData.sale_price;
    newColor.value = rowData.color;
    newImg.value = rowData.images;
  }
})

// 搜尋

const search = ref('');
const returnPro = computed(() => {
  let cache = prodRows.value;
  
  if(search.value!==''){
    cache = cache.filter(i => String(i[select[selectVal.value].val]).includes(search.value))
    if(search.value=='all'){
      cache = prodRows.value;
    }
  }else{
    cache = [];
  }
  return cache;
});
const select = [
  {
    id: 0,
    title: '產品編號',
    val: 'prd_no',
  },
  {
    id: 1,
    title: '產品名稱',
    val: 'prd_name',
  },
  {
    id: 2,
    title: '產品價格',
    val: 'prd_price',
  },
  {
    id: 3,
    title: '優惠',
    val: 'sale',
  },
];
const selectVal = ref('0');
const testVal = (e) => {
  selectVal.value = e.target.value;
};
</script>
<template>
    <div class="productQuery">
      <div class="top">
          <h2>商品查詢</h2>
          <outComponents />
      </div>   
      <div class="search_box">
              <p>依</p>
              <select name="searchMethods" id="searchMethods" @change="testVal">
              <option v-for="i in select" :key="i.id" :value="i.id">{{ i.title }}</option>
              </select>
              <p>查詢</p>
              <label for="search" class="label">
              <input type="search" id="search" name="search" v-model="search" :placeholder="`請輸入${select[selectVal].title}`">
              </label>
              <p>輸入"all"可查詢所有項目</p>
      </div>
      <div class="mainContent" id="products">
          <form action="" method="post">
              <n-data-table :columns="column" :data="returnPro" :pagination="pagination"  :bordered="true" :single-line="false" />
                  <n-modal
                      v-model:show="showModal"
                      preset="dialog"
                      title="確認"
                      content="你確定嗎?"
                  >
                  
                      <input type="hidden" name="prd_no" v-model="newPrd_no">
                      <label for="prd_name"> 產品名稱 : </label>
                      <input type="text" name="prd_name" v-model="newName"><br>

                      <label for="prd_price"> 產品價格 : </label>
                      <input type="number" name="prd_price" v-model="newPrice"><br>

                      <label for="sale"> 產品優惠 : </label>
                      <input type="number" name="sale" v-model="newSale"><br>
                  
                      <label for="sale_price"> 優惠價格 : </label>
                      <input type="number" name="sale_price" v-model="newSalePrice"><br>

                      <label for="color"> 產品顏色 : </label>
                      <input type="text" name="color" v-model="newColor"><br>
                  
                      <label for="images"> 產品圖片 : </label>
                      <input type="text" name="images" v-model="newImg"><br>

                      <n-button @click="showModal = true; updatePro(index)" type="error">
                      確認
                      </n-button>
                  </n-modal>
          </form>
      
      </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/sass/style.scss';
.productQuery {
    width: 85%;
    display: block;
    overflow-y: auto;
    height: 100%;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px ;
    background-color: #597897;
    h2 {
        font-size: 40px;
        color: #fff;
        margin: 10px 10px;
        background-color: #597897;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
  .search_box{
  display: flex;
  justify-content: right;
  margin: 30px 15px;
  p{
    color: #000;
  }
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
}

  .mainContent{
    width: 85%;
    display: block;
    margin: 0 auto;
    overflow-y: auto;
    height: 100%;
    overflow: auto;
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
