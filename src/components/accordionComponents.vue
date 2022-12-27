<script setup>
import { onMounted,ref } from 'vue';
import { zhTW, NPagination,NTable,NDataTable,NButton,NModal,NCollapse,NCollapseItem } from 'naive-ui';

const props = defineProps(["tab"])
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
// 連結 php 抓資料
const des = ref("");
const ans = ref("");
const no = ref("");
const newFaq_des = ref("");
const newFaq_no = ref('');
const newFaq_ans = ref('');
const showModal = ref(false);
const showModal2 = ref(false);

</script>

<template>
 <div class="faq_field_wrapper">
 <n-collapse @item-header-click="handleItemHeaderClick" v-for="(faqRow,index) in faqRows" :key="index" >
    <n-collapse-item  class="faq_field">
      <template #header>
        <div class="des">{{index+1}} &nbsp;{{faqRow.faq_des}}</div>
      </template>
      <div class="ans">{{faqRow.faq_ans}}</div>
    </n-collapse-item>
  </n-collapse>
</div>

</template>


<style lang="scss" scoped>
@import '@/sass/style.scss';

.ans{
    font-size: 22px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    padding: 15px ;
    border-top: 1px solid rgba(78, 78, 78, 0.371);
    background: rgba(8, 8, 8, 0.1);
}
.des{
    font-size: 22px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    padding: 15px 10px ;
    transition: .3s ease;
}
.faq_field_wrapper{
    width: 90%;
    max-width: 900px;
    margin: 30px auto;
    .faq_field{
        width: 100%;
        // height: 52px;
        border-bottom: 1px solid #d3d3d38c;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);
        margin: 10px 0;
       
    }
    
}


</style>