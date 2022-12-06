<template>
    <div class="step_box">
        <div class="steps" >
            <div class="step" v-for="step in orderStep" :key="step">
                <div :class="( props.step == step.id ? 'active_circle':'unactive_circle')"></div>
                <p :class="( props.step == step.id ? 'active_title':'unactive_title')">Step{{step.title}}</p>
                <p :class="( props.step == step.id ? 'active_text':'unactive_text')">{{step.text}}</p>
            </div>
        </div>
    </div>
</template>    



<script setup>
import {ref,reactive} from 'vue'

const props = defineProps(['step'])
// console.log(props.step);
const orderStep = reactive(
    [
    {
        id:1,
        title:'One',
        text:'CONFIRM PRODUCT',
    },
    {
        id:2,
        title:'Two',
        text:'CONFIRM DETAIL',
        componentName: 'Step2',
    },
    {
        id:3,
        title:'Three',
        text:'ORDER COMPELED',
    },
    ]
)
</script>

<style scoped lang="scss">
@import '@/sass/style.scss';
.step_box{
    width: 100%;
    height: 150px;
    overflow: hidden;
    .steps{  
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .step{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 200px;
            gap: 5px;
            margin: 0 auto;
            &::after{
                content: "";
                background-color: #fff;
                position: absolute;
                top: 15%;
                left: 100%;
                transform: translate(-20%,-20%);
                @include m($m-breakpoint){
                    width: 200px;
                    height:2px;
                    width: 260px;
                    transform: translate(-20%,-20%);
                }
                // @include l($l-breakpoint){
                //     width: calc(1200px/3);
                // }
            } 
            &:last-child{
                &::after{
                    content:"";
                    width: 0px;
                    height:0px;
                }

            }
                     
            .title,.detail{
                margin: 10px;
            }
            .active_circle{
                width: 40px;
                height: 40px;
                background-color: #007FFB;
                border-radius:50% ;
                z-index: 2;
            }
            .unactive_circle{
                width: 40px;
                height: 40px;
                background-color: #fff;
                border-radius:50% ;
                z-index: 2;
            }
            .unactive_title{
                color: #3C4257;
                font-size: 24px;
                margin: 10px 0;
            }
            .active_title{
                color: #fff;
                font-size: 24px;
                margin: 10px 0;
            }
            .active_text{
                color: $fff;
                font-size: 14px;
            }
            .unactive_text{
                color: #697386;
                font-size: 14px;
            }

            
        }
    }
}
    
   
</style>