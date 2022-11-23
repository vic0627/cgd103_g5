import gsap from "gsap";
export const useMouseMove = (e) => {
    window.addEventListener('mousemove', (e)=> {
        gsap.to('#mouse', {
            top: e.pageY-8+'px',
            left: e.pageX-8+'px',
            duration: .2,
        });
    });
};
export const mouseFocus = () => {
    gsap.to('#mouse', {
        scale: 2,
        duration: .5,
    });
};
export const mouseEnhance = () => {
    gsap.to('#mouse', {
        scale: 2,
        backdropFilter: `hue-rotate(120deg)`,
        duration: .5,
    });
};
export const mouseRe = () => {
    gsap.to('#mouse', {
        scale: 1,
        backdropFilter: `hue-rotate(0deg) invert(100%)`,
        duration: .5,
    });
};