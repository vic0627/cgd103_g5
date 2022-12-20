<script setup>
import { ref, onMounted} from 'vue';
import $ from 'jquery';
onMounted(()=> {

    // on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });
    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 1000);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 1500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }
});

const point = ref(599);




</script>


<template>
    <div class="memgrade">
        <div class="level"><span>LEVEL</span></div>
        <h6>Bronze Member</h6>
        <p>Member Discount :<br> All products <span style="color: red">5%Off</span> </p>
        <!-- <input type="text" class="pgg" v-model="percent"> -->
        <div class="pb">
            <div class="progress-wrap progress" :data-progress-percent="point">
                <div class="progress-bar progress"></div>
                <span class="np">{{point}}/1000</span>
            </div>
            <div class="showper">
                {{(point/10)}}% completed
            </div>
            
        </div>
    </div>
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';

.memgrade{
    box-sizing: border-box;
    // flex-grow: 1;
    width: 50%;
    background-color: #616574;
    border-radius: 10px;
    padding: 10px;
    p,h6{
        padding:0 10px;
    }
    .level{
        // padding: 10px;
        span{
            margin: 10px;
            width: fit-content;
            display: block;
            padding: 10px;
            background: rgb(226, 185, 2);
            border-radius: 10px;
            font-size: 20px;
        }
    }
    .pb{
        padding: 10px;
        .progress {
            border-radius: 20px;
            width: 100%;
            height: 20px;
        }
        .progress-wrap {
            border: 2px solid #273747;
            background: linear-gradient(270deg, #ff8000 10%, #EDC793 90%);
            // margin: 20px 0;
            overflow: hidden;
            position: relative;
            .progress-bar {
                border-radius: 0;
                background: #273747;
                left: 0;
                position: absolute;
                top: 0;
            }
        }
        .showper{
            text-align: right;
        }
        .np{
            font-size: 12px;
            line-height: 100%;
            padding-left: 10px;
            color: #333;
        }
    }
}
</style>
