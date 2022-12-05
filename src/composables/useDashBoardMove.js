import gsap from "gsap";
import { log, $$ } from '../composables/useCommon';
import { onMounted } from 'vue';
/* let w, ww;
onMounted(() => {
    w = Number(window.getComputedStyle($$('.dashBoard'),null).getPropertyValue("width").split('px')[0])/2, ww = window.innerWidth;
    window.addEventListener('resize', () => {
        w = Number(window.getComputedStyle($$('.dashBoard'),null).getPropertyValue("width").split('px')[0])/2;
        ww = window.innerWidth;
    })
}) */

export const useDashBoardMove = (ww, w) => {
    if (ww>1024) {
        window.addEventListener('mousemove', (e)=> {
            let x = -(e.pageX-w-$$('.dashBoard').offsetLeft);
            let y = -(e.pageY-w-$$('.dashBoard').offsetTop);
            /* if(x>20||x<-20){
                x=20
            }
            if(y>20||y<-20){
                y=20
            } */
            gsap.to($$('.board h5'), {
                rotateX: y/100,
                rotateY: x/100,
                x: x/150,
                y: y/150,
                duration: .5,
            });
            gsap.to($$('.board p'), {
                rotateX: y/80,
                rotateY: x/80,
                x: x/80,
                y: y/80,
                duration: 1.5,
            });
            gsap.to($$('.board span'), {
                rotateX: y/200,
                rotateY: x/200,
                x: x/200,
                y: y/200,
                duration: 1,
            });
            gsap.to($$('.innerScale'), {
                rotateX: y/210,
                rotateY: x/210,
                x: x/210,
                y: y/210,
                duration: 2,
            });
            gsap.to($$('.niddle span'), {
                rotateX: y/200,
                rotateY: x/200,
                x: x/200,
                y: y/200,
                duration: .5,
            });
            gsap.to('.numberScales', {
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