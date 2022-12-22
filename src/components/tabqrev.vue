<script setup>
import { reactive, onMounted,ref ,defineComponent,h} from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal, } from 'naive-ui';
const des = ref("");
const ans = ref("");
const no = ref("");
const newFaq_des = ref("");
const newFaq_no = ref('');
const newFaq_ans = ref('');
const showModal = ref(false);
const showModal2 = ref(false);

//data-table
const createColumns = ({
  selectId,showmodal})=>{
    return [
  {
    title: "編號",
    key: "faq_no"
  },
  {
    title: "問題",
    key: "faq_des"
  },
  {
    title: "回答",
    key: "faq_ans",
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
            onClick: () => showmodal(row,index),
          },
          { default: () => "刪除" }
        );
      }
    },
    
  ]
};
//解析內容跟事件
const column = createColumns({
  selectId(rowData,index) {
    showModal.value = true;
    newFaq_des.value = faqRows.value[index].faq_des;
    newFaq_no.value = faqRows.value[index].faq_no;
    newFaq_ans.value = faqRows.value[index].faq_ans;
  },
  showmodal(rowData,index){
    showModal2.value = true
    newFaq_no.value = faqRows.value[index].faq_no;
  }
})
//分頁js
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

const props = defineProps(["tab"])
//取得資料庫資料
const faqRows = ref([]);
		const getProducts = () => {
			//取得商品資料
      fetch("http://localhost/g5/public/g5PHP/getFaqs.php")
      .then(res => res.json())
      .then(json => {
        console.log(json)
        faqRows.value = json;
      })
		}
	onMounted(()=>{
		getProducts();
  });

//更新資料
const updateFaq = (user)=>{
  const newFaq = {
    faq_no: Number(newFaq_no.value),
    faq_des: newFaq_des.value, 
    faq_ans: newFaq_ans.value
  }
  fetch("http://localhost/g5/public/g5PHP/updateFaqs.php", {
    method: "POST",
    body: new URLSearchParams(newFaq),
  }).then(res=>{
    console.log(res)
    res.json()
  })
  showModal.value = false
  getProducts();
}

// 刪除資料
const deleteFaq = ()=>{
  const delFaq = {
    faq_no: Number(newFaq_no.value)
  }
  fetch("http://localhost/g5/public/g5PHP/deleteFaq.php",{
    method: "POST",
    body: new URLSearchParams(delFaq),
  }).then(res=>{
    res.json()
  })
  showModal2.value = false
  getProducts();
}
</script>


<template>
<div class="top">
    <h2>
      FAQ列表
      <outComponents />
    </h2>
    <div class="bigbox">
      <div class="search_box">
      <label for="search" class="label">查詢編號<input type="search" id="search" name="search" placeholder="請輸入編號"></label>
      <div class="btn">
        <button class="magBox"><img src="../assets/images/About/search.png" alt="search"></button>
      </div>
    </div>
  </div>
 
  <div class="tables" id="products" align="center">
    <form action="" method="post">
      <n-data-table :columns="column" :data="faqRows" :pagination="pagination"  :bordered="true" :single-line="false" />
      <n-modal
                v-model:show="showModal"
                preset="dialog"
                title="確認"
                content="你確定嗎?"
              >
            <label for="faq_des"> 修改問題 : </label>
            <textarea name="faq_des" v-model="newFaq_des" rows="10" cols="50" placeholder="請輸入問題" maxlength="200"></textarea>
            <textarea name="faq_ans" v-model="newFaq_ans" rows="10" cols="50" placeholder="請輸入回答" maxlength="300" ></textarea>
            <n-button @click="showModal = true; updateFaq(index)" type="error">
              確認
            </n-button>
      </n-modal>
      <n-modal
          v-model:show="showModal2"
          preset="dialog"
          title="確認"
          content="你確定嗎?"
        >
      <n-button @click="showModal2 = true; deleteFaq(index)" type="error">
        刪除
      </n-button>
      </n-modal>
    <!-- <n-table id="table">
      <thead>
        <tr>
        <th>編號</th>
        <th>問題</th>
        <th>回答</th>
        <th>編輯</th>
        <th>刪除</th>
	      </tr>
      </thead>
      <tbody>
        
        <tr v-for="(faqRow,index) in faqRows" :key="index" >
        <td>{{index+1}}</td>
        <td>{{faqRow.faq_des}}</td>
        <td>{{faqRow.faq_ans}}</td>
        <td><n-button @click="showModal = true; selectId(index)" type="info">
              編輯
            </n-button>
            <n-modal
                v-model:show="showModal"
                preset="dialog"
                title="確認"
                content="你確定嗎?"
              >
            <label for="faq_des"> 修改問題 : </label>
            <textarea name="faq_des" v-model="newFaq_des" rows="10" cols="50" placeholder="請輸入問題" maxlength="200"></textarea>
            <textarea name="faq_ans" v-model="newFaq_ans" rows="10" cols="50" placeholder="請輸入回答" maxlength="300" ></textarea>
            <n-button @click="showModal = true; updateFaq(index)" type="error">
              確認
            </n-button>
           </n-modal>
          </td>

        <td><n-button @click="showModal2 = true;selectId(index)" type="error">
              刪除
            </n-button>
            <n-modal
                v-model:show="showModal2"
                preset="dialog"
                title="確認"
                content="你確定嗎?"
              >
            <n-button @click="showModal2 = true; deleteFaq(index)" type="error">
              刪除
            </n-button>
            </n-modal>
          </td>
      </tr>	
      </tbody>
    </n-table> -->
  </form>
  </div>
</div>


</template>
<style scoped lang="scss">
@import '@/sass/style.scss';
textarea{
  margin-top: 10px;
}

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

.bigbox{
  width: 97%;
  margin: 15px auto;
  display: flex;
  justify-content: right;
  .add{
    width: 150px;
    margin: 15px ;
    input{
      width: 150px;
      font-size: 20px;
      padding: 10px;
      border:none;
      border-radius: 5px;
      background: #597897;
      cursor: pointer;
      color: #fff;
      transition: background 0.5s;
      opacity: 0.9;
      &:hover{
        background: $blue;
      }
    }
  }
  .search_box{
    display: flex;
    // justify-content: right;
    margin: 15px;
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
        background:#597897;
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

.tables {
  width: 95%;
  margin: auto;
}

.modal-mask{
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper{
  display: table-cell;
  vertical-align: middle;
}
</style>