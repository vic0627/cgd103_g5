import gsap from "gsap";
import { log, $$ } from '../composables/useCommon';


export const useDashBoardMove = (ww, w) => {
    if (ww>1024) {
        window.addEventListener('mousemove', (e)=> {
            let x = -(e.pageX-w-$$('.dashBoard').offsetLeft);
            let y = -(e.pageY-w-$$('.dashBoard').offsetTop);
            gsap.to('.boardTitle', {
                rotateX: y/100,
                rotateY: x/100,
                x: x/150,
                y: y/150,
                duration: .5,
            });
            gsap.to('.boardP', {
                rotateX: y/80,
                rotateY: x/80,
                x: x/80,
                y: y/80,
                duration: 1.5,
            });
            gsap.to('.boardSpan', {
                rotateX: y/200,
                rotateY: x/200,
                x: x/200,
                y: y/200,
                duration: 1,
            });
            gsap.to('.innerScale', {
                rotateX: y/210,
                rotateY: x/210,
                x: x/210,
                y: y/210,
                duration: 2,
            });
            gsap.to('.dot', {
                rotateX: y/200,
                rotateY: x/200,
                x: y/200,
                y: x/200,
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