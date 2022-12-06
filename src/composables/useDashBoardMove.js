import gsap from "gsap";
import { ref } from 'vue';
import { log, $$ } from '../composables/useCommon';

export const deg = ref({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
});
export const niddleSpin = (id, d, ratio) => {
    deg.value[id] = d;
    gsap.to(`.niddle${id}`, {
        rotate: d * ratio+150,
        duration: .3
    })
    if(d * ratio>=180){
        let tl = new gsap.timeline({repeat: -1, delay: .3});
        tl.to($$('.board p'), {
            color: `#f00`,
            duration: .3,
        })
        tl.to($$('.board p'), {
            color: `#fff`,
            duration: .3,
            delay: .3,
        })
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