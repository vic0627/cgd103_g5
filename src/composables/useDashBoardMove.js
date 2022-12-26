import gsap from "gsap";
import { ref } from 'vue';
import { log, $$, $all } from '../composables/useCommon';

export const deg = ref({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
});
export const overLoad = ref({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
});

export const niddleSpin = (id, d, ratio) => {
    deg.value[id] = d;
    let accdeg = d*ratio;
    if(deg.value[id] == "Infinity"){
        deg.value[id] = 0;
        accdeg = 0;
    }
    gsap.to(`.niddle${id}`, {
        rotate: accdeg+150,
        duration: 1
    })
    if(accdeg>=180){
        overLoad.value[id] = true;
        $$(`.boardP${id}`).classList.add('warnP');
    }else{
        overLoad.value[id] = false;
        $$(`.boardP${id}`).classList.remove('warnP');
    }
}
export const useDashBoardMove = (id ,ww, w) => {
    if (ww>1024) {
        window.addEventListener('mousemove', (e)=> {
            let x = -(e.pageX-w-$$(`.dashBoard${id}`).offsetLeft);
            let y = -(e.pageY-w-$$(`.dashBoard${id}`).offsetTop);
            gsap.to(`.boardTitle${id}`, {
                rotateX: y/100,
                rotateY: x/100,
                x: x/150,
                y: y/150,
                duration: .5,
            });
            gsap.to(`.boardP${id}`, {
                rotateX: y/80,
                rotateY: x/80,
                x: x/80,
                y: y/80,
                duration: 1.5,
            });
            gsap.to(`.boardSpan${id}`, {
                rotateX: y/200,
                rotateY: x/200,
                x: x/200,
                y: y/200,
                duration: 1,
            });
            gsap.to(`.innerScale${id}`, {
                rotateX: y/210,
                rotateY: x/210,
                x: x/210,
                y: y/210,
                duration: 2,
            });
            gsap.to(`.dot${id}`, {
                rotateX: y/200,
                rotateY: x/200,
                x: y/200,
                y: x/200,
                duration: .5,
            });
            gsap.to(`.numberScales${id}`, {
                rotateX: y/150,
                rotateY: x/150,
                x: x/200,
                y: y/200,
                duration: 1,
            });
            gsap.to('.longScale', {
                rotateX: y/170,
                rotateY: x/170,
                x: x/230,
                y: y/230,
                duration: 1.5,
            });
            gsap.to('.shortScale', {
                rotateX: y/170,
                rotateY: x/170,
                x: x/230,
                y: y/230,
                duration: 1.5,
            });
        });
    };
};