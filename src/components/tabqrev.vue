<script setup>
import { reactive, onMounted,ref } from 'vue';
const props = defineProps(["tab"])
const faqRows = ref([]);
		const getProducts = () => {
			//取得商品資料
			let xhr = new XMLHttpRequest();
			xhr.onload = function(){
				if(xhr.status == 200){ //OK
					faqRows.value = JSON.parse(xhr.responseText);
				}
			}
			xhr.open("get", "/dist/g5PHP/getFaqs.php", true);
			xhr.send(null);
		}
	

	onMounted(()=>{
		getProducts();
  });
const table = ref([
  {
    number:5,
    q:"How to become a member of EFPV?",
    a:"Click the member center icon in the upper right corner of the homepage to register/login.",
  },
  {
    number:4,
    q:"How to contact us?",
    a:"123",
  },
  {
    number:3,
    q:"How to contact us?",
    a:"123",
  },
  {
    number:2,
    q:"How to contact us?",
    a:"123",
  },
  {
    number:1,
    q:"How to contact us?",
    a:"123",
  },

])

</script>

<template>
<div class="top">
  <h2>
    FAQ列表
    <outComponents />
  </h2>
  <div class="search_box">
    <label for="search" class="label">查詢編號<input type="search" id="search" name="search" placeholder="請輸入編號"></label>
    <div class="btn">
      <button class="magBox"><img src="../assets/images/About/search.png" alt="search"></button>
    </div>
  </div>
  <div class="tables" id="products" align="center">
    <table>
      <tr>
		  <th>編號</th>
		  <th>問題</th>
		  <th>回答</th>
		  <th>編輯</th>
      <th>刪除</th>
	  </tr>
	  <tr v-for="faqRow in faqRows" :key="faqRow">
			<td>{{faqRow.faq_no}}</td>
			<td>{{faqRow.faq_des}}</td>
			<td>{{faqRow.faq_ans}}</td>
      <td><button @click="props.tab('mod')" class="block">編輯</button></td>
      <td><button class="red">刪除</button></td>
	  </tr>	
    </table>
    
  </div>
</div>


</template>
<style scoped lang="scss">
@import '@/sass/style.scss';
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

.tables {
  width: 100%;
  margin: auto;
  table{
    width: 95%;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    border: 1px solid #C0C0C0;
    tr {
      border: 1px solid #C0C0C0;
      &:hover td{
        background: rgba(89, 120, 151, 0.11);
      }
      th {
        padding: 20px 10px;
        background-color:#597897;
        color: #fff;
        border: 1px solid #C0C0C0;
        border-top: 1px solid #597897;
      }
      td{
        border: 1px solid #C0C0C0;
        padding: 20px 10px;
        overflow: hidden;
        a{
          color: #273747;
          span{
            color: #273747;
          }
          .block{
            &:hover{
              border-bottom: 1px solid #273747;
            }
          }
          .red{
            color: #F25A2A;
            &:hover{
              border-bottom: 1px solid #F25A2A;
            }
          }
        }
      }
    }
  }
}

</style>