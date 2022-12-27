<script setup>
import { ref, onMounted} from 'vue';
import $ from 'jquery';


const memberinfo =ref({
    mem_grade : "",
    grade_name : "",
    mem_discount : "",
    mem_points : "",
    upgrade_point : "",
});

onMounted(()=> {
    // on page load...
    // moveProgressBar();
    // on browser resize...
    // moveProgressBar();
    
    // SIGNATURE PROGRESS
    function moveProgressBar() {
        console.log("moveProgressBar");
        console.log("hihi"+memberinfo.value.mem_points+"and"+memberinfo.value.upgrade_point);
        var getPercent = memberinfo.value.mem_points/memberinfo.value.upgrade_point;
        // var getPercent = 0.1;
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 1500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

    
    getMemLevel();
    
    function getMemLevel(){
        fetch('/dist/g5PHP/getMemLevel.php',{
                method: "get",
            })
            .then((res) => res.json())//php echo的內容
            .then(mem =>{
                console.log(mem);
                memberinfo.value.mem_grade = mem.mem_grade;
                memberinfo.value.grade_name = mem.grade_name;
                memberinfo.value.mem_discount   =mem.mem_discount;
                memberinfo.value.mem_points   =mem.mem_points;
                memberinfo.value.upgrade_point  =mem.upgrade_point ;
                moveProgressBar();

                $(window).resize(function() {
                    moveProgressBar();
                });

            })
            .catch(error =>console.log(error));

    }
});




</script>


<template>
    <div class="memgrade">
        <div class="level"><span>LEVEL {{memberinfo.mem_grade}}</span></div>
        <h6>{{memberinfo.grade_name}} Member</h6>
        <p>Member Discount :<br> All products <span class="memdis">{{100-(memberinfo.mem_discount*100)}}%Off</span> </p>
        <!-- <input type="text" class="pgg" v-model="percent"> -->
        <div class="pb">
            <!-- <div class="progress-wrap progress" :data-progress-percent="10"> -->
            <div class="progress-wrap progress">
                <div class="progress-bar progress"></div>
                <div class="np">{{memberinfo.mem_points}}/{{memberinfo.upgrade_point}}</div>
            </div>
            <div class="showper" v-if="memberinfo.mem_points<10000">
                {{((memberinfo.mem_points/memberinfo.upgrade_point)*100).toFixed(0)}}%
            </div>
            <div class="showper" v-else-if="memberinfo.mem_points>=10000">
                MAX LEVEL
            </div>
            <div class="showper" v-else-if="memberinfo.mem_points='0'">
                You Haven't Buy Anything~
            </div>
            
        </div>
    </div>
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';

.memgrade{
    box-sizing: border-box;
    // flex-grow: 1;
    // width: 50%;
    background-color: #2d2f35;
    border-radius: 10px;
    padding: 10px;
    .memdis{
        color: #ffe400;
        font-weight: 700;
    }
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
            background: rgb(14, 56, 127);
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
            // background: linear-gradient(270deg, #ff8000 10%, #EDC793 90%);
            background: linear-gradient(135.57deg, #4591D8 15.58%, #6723C7 82.75%);
            // margin: 20px 0;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
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
            color: rgb(255, 255, 255);
            z-index: 1;
        }
    }
}
</style>
