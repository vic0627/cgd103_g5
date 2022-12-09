<template>
   
    
    <div class="faq_field_wrapper">
        <div class="faq_field" v-for="(faq,i) in faqBase" :key="i">
            <div class="open_faq" @click="closeAllFaq(faq)">
                <p class="q_box">
                    {{faq.n}} &nbsp; {{faq.q}}
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
                    n:1,
                    q:'What is a crossing machine?',
                    a:'Mainly through the visual system on the UAV for backhaul control, the experience of flying is a first-person perspective, so it is called immersive flying UAV.',
                    open:false
                },
                {
                    n:2,
                    q:'How to become an EFPV member?',
                    a:'Press the button in the upper right corner to enter the login screen, and then press Register to become a member.',
                    open:false
                },
                {
                    n:3,
                    q:'What should I do if there is a problem with the purchased product?',
                    a:'You can call us at 02-12345678 and someone will serve you.',
                    open:false
                },
                {
                    n:4,
                    q:'How to check my order?',
                    a:'Click to log in and enter the member center to see the order button.',
                    open:false
                },
                {
                    n:5,
                    q:'Is there an assembly fee for customized products?',
                    a:'Yes, we include the assembly fee, please check the details on the checkout page.',
                    open:false
                },
                {
                    n:6,
                    q:'Will there be an invoice?',
                    a:'Yes, sent back with your monthly membership letter.',
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