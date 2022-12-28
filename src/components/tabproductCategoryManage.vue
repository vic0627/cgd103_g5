<script setup>
import { ref,reactive, onMounted } from 'vue';
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
    const table = ref(['編號','類別名稱','編輯','刪除'])
    const showModal = ref(false);
    const showModal2 = ref(false);
    const newName = ref('');
    const newNo = ref('');
    const selectId = (user)=>{
        newName.value = cateRows.value[user].cat_id;
        newNo.value = cateRows.value[user].cat_no;
    }
    const updateCate =()=>{
        const newCate = {
            cat_no: Number(newNo.value),
            cat_id: newName.value,
        }
        fetch(`${BIND_URL('getProCat.php','g5PHP')}`, {
            method: "POST",
            body: new URLSearchParams(newCate),
        }).then(res=>{
            console.log(res)
            res.json()
        })
        showModal.value = false
        getProCat();
    }
    const deleteCate =()=>{
        const delCat = {
            cat_no: Number(newNo.value)
        }
        
        fetch(`${BIND_URL('deleteCat.php','g5PHP')}`, {
            method: "POST",
            body: new URLSearchParams(delCat),
        }).then(res=>{
            console.log(res)
            res.json()
        })
        showModal2.value = false
    }
</script>
<template>
  <div class="productQuery">
    <div class="top">
        <h2>商品類別</h2>
        <outComponents />
    </div>   
    <div class="mainContent">
        <form action="post">
            <n-table>
            <thead>
                <tr>
                    <th v-for="item in table" :key="item">
                    <p>{{item}}</p> 
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cateRow,index) in cateRows" :key="index">
                    <td>{{cateRow.cat_no}}</td>
                    <td>{{cateRow.cat_id}}</td>
                    <td>
                        <n-button @click="showModal = true; selectId(index)" type="info">
                        編輯
                        </n-button>
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
                    </td>
                    <td>
                        <n-button @click="showModal2 = true; selectId(index)" type="info">
                        刪除
                        </n-button>
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
                    </td>
                    
                </tr>
            </tbody>
            </n-table>
            
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
  
  .mainContent{
    width: 100%;
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
