<template>
    <div class="step_box">
        <div class="steps" >
            <div class="step" v-for="step in orderStep" :key="step">
                <div :class="step.circleObj"></div>
                <p :class="step.titleObj">Step{{step.title}}</p>
                <p :class="step.textObj">{{step.text}}</p>
            </div>
        </div>
    </div>
</template>    

<script setup>
import {ref,reactive} from 'vue'
const orderStep = reactive(
    [
    {
        id:1,
        title:'One',
        text:'CONFIRM PRODUCT',
        circleObj:{
            active_circle: false,
            unactive_circle: true,
        },
        titleObj:{
            active_title:false,
            step_title:true
        },
        textObj:{
            active_text:false,
            step_text:true
        }
    },
    {
        id:2,
        title:'Two',
        text:'CONFIRM DETAIL',
        circleObj:{
            active_circle: true,
            unactive_circle: false,
        },
        titleObj:{
            active_title:true,
            step_title:false
        },
        textObj:{
            active_text:true,
            step_text:false
        }
    },
    {
        id:3,
        title:'Three',
        text:'ORDER COMPELED',
        circleObj:{
            active_circle: false,
            unactive_circle: true,
        },
        titleObj:{
            active_title:false,
            step_title:true
        },
        textObj:{
            active_text:false,
            step_text:true
        }
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
        justify-content: flex-end;
        align-items: center;
        .step{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 200px;
            gap: 5px;
            margin: 0 auto;
            // &:last-child{
            //     &::before{
            //         content:'';
            //         width: 0;
            //         height: 0;
            //         border:none
            //     }
            // }
            // &::before{
            //     position: absolute;
            //     top:-100%;
            //     right: -100%;
            //     content:'➪';
            //     color: rgb(206, 204, 204);
            //     font-size: 100px;
            // }
          
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
            .step_title{
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
            .step_text{
                color: #697386;
                font-size: 14px;
            }

            
        }
    }
}
    
   
</style>