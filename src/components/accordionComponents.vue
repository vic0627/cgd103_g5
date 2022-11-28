<template>
   
    
    <div class="faq_field_wrapper">
        <div class="faq_field" v-for="(faq,i) in faqBase" :key="i">
            <div class="open_faq" @click="closeAllFaq(faq)">
                <p class="q_box">
                    {{faq.q}}
                    <span class="plus" :class="faq.open ? 'rotate':'' ">+</span>
                </p>
                <p class="invisible" :class="faq.open ? 'visible':'' ">
                    {{faq.a}}
                </p>
            </div>
        </div>
    </div>
    

</template>

<script>
import {ref} from 'vue'
    export default{
        setup(){
            const faqBase = ref([
                {
                    q:'Lorem ipsum dolor sit amet.',
                    a:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    open:false
                },
                {
                    q:'Lorem ipsum dolor sit amet.',
                    a:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    open:false
                },
                {
                    q:'Lorem ipsum dolor sit amet.',
                    a:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    open:false
                },
                {
                    q:'Lorem ipsum dolor sit amet.',
                    a:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    open:false
                },
                {
                    q:'Lorem ipsum dolor sit amet.',
                    a:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    open:false
                },
                {
                    q:'Lorem ipsum dolor sit amet.',
                    a:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    open:false
                }
            ])
            const closeAllFaq = (item) => {
                if(!item.open){
                    faqBase.value.forEach(el => el.open = false)
                }
                item.open = !item.open;
            } 
            return {faqBase,closeAllFaq}   
        }
    }

</script>

<style lang="scss" scoped>
@import '@/sass/style.scss';
.faq_field_wrapper{
    width: 90%;
    max-width: 900px;
    margin: 10px auto;
    .faq_field{
        width: 100%;
        border-bottom: 1px solid #d3d3d38c;
        border-radius: 5px;
        background: rgba(75, 75, 75, 0.1);
        margin: 10px 0;
        .open_faq{
            width: 100%;
            cursor: pointer;
            .q_box{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 10px ;
                transition: .3s ease;
                background: rgba(255, 255, 255, 0.1);
                .plus{
                    transition: transform 0.3s;
                }
            }
            .invisible{
                visibility: hidden;
                color: rgb(203, 203, 203);
                opacity: 1;
                overflow: hidden;
                height: 0;
                transition:.3s;
            }
            .visible{
                visibility: visible;
                height: 120px;
                opacity: 1;
                padding: 15px 10px;
            }
            .rotate{
                transform: rotate(45deg);
            }
        }
    }
    
}


</style>