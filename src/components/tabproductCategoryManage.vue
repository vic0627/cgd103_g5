<script setup>
import { ref,reactive, onMounted,h,computed } from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal, } from 'naive-ui';
import { BIND_URL } from "../composables/useCommon";

const cateRows = ref([]);

const getProCat = () =>{
    fetch(`${BIND_URL('getProCat.php','g5PHP')}`)
        .then(res => res.json())
        .then(json => {
            cateRows.value = json;
        })
    }
    getProCat();
onMounted(()=>{
})
    const showModal = ref(false);
    const showModal2 = ref(false);
    const newName = ref('');
    const newNo = ref('');

    //data-table
    const createColumns = ({selectId,showModal2})=>{
        return [
    {
        title: "類別編號",
        key: "cat_no",
        sorter: (row1, row2) => row2.cat_no - row1.cat_no,
    },
    {
        title: "類別名稱",
        key: "cat_id"
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
        {
        title: "刪除",
        key: "actions",
        render(row, index) {
            return h(
            NButton,
            {
                size: "medium",
                color: "#FF4E4E",
                onClick: () => showModal2(row,index),
            },
            { default: () => "刪除" }
            );
        }
        },
        
    ]
    };
    const column = createColumns({
        selectId(rowData,index) {
            showModal.value = true;
            newName.value = rowData.cat_id;
            newNo.value = rowData.cat_no;
    },
        showModal2(rowData,index){
            showModal2.value = true
            newName.value = rowData.cat_id;
    }
    })
    //分頁
    const paginationReactive = reactive({
        page: 2,
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
    //更新
    const updateCate =()=>{
        const newCate = {
            cat_no: Number(newNo.value),
            cat_id: newName.value,
        }
        fetch(`${BIND_URL('updateCat.php','g5PHP')}`, {
            method: "POST",
            body: new URLSearchParams(newCate),
        }).then(res=>{
            res.json()
        })
        showModal.value = false
        getProCat();
    }
    //刪除
    const deleteCate =()=>{
        const delCat = {
            cat_no: Number(newNo.value)
        }
        
        fetch(`${BIND_URL('deleteCat.php','g5PHP')}`, {
            method: "POST",
            body: new URLSearchParams(delCat),
        }).then(res=>{
            res.json()
        })
        showModal2.value = false
    }
    //搜尋
    const search = ref('');
    const returnCat = computed(() => {
    let cache = cateRows.value;
    if(search.value!==''){
        cache = cache.filter(i => String(i[select[selectVal.value].val]).includes(search.value))
        if(search.value=='all'){
        cache = cateRows.value;
        }
    }else{
        cache = [];
    }
    return cache;
    });
    const select = [
    {
        id: 0,
        title: '類別編號',
        val: 'cat_no',
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
        <h2>商品類別</h2>
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
    <div class="mainContent">
        <form action="post">
            <n-data-table :columns="column" :data="returnCat" :pagination="pagination"  :bordered="true" :single-line="false" />
                <n-modal
                    v-model:show="showModal"
                    preset="dialog"
                    title="確認"
                    content="你確定嗎?"
                >
                    <label for="cat_id"> 修改類別 : </label>
                    <input type="text" name="cat_id" v-model="newName">
                    <n-button @click="showModal = true; updateCate(index)" type="error">
                    確認
                    </n-button>
                </n-modal>
            
                <n-modal
                    v-model:show="showModal2"
                    preset="dialog"
                    title="確認"
                    content="你確定嗎?"
                >
                <n-button @click="showModal2 = true; deleteCate(index)" type="error">
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
    h2{
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
    width: 90%;
    margin: auto;
    table{
        width: 85%;        
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
            padding: 10px;
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

}
.revised{
    cursor: pointer;
}

</style>
