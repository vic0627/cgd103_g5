import gsap from "gsap";
const ww = window.innerWidth;
export const useMouseMove = (e) => {
    if (ww>1024) {
        window.addEventListener('mousemove', (e)=> {
            gsap.to('#mouse', {
                top: e.pageY-8+'px',
                left: e.pageX-8+'px',
                duration: .2,
            });
        });
    };
};
export const mouseFocus = () => {
    if (ww>1024) {
        gsap.to('#mouse', {
            scale: 3,
            boxShadow: `0 0 5px 1px #fff`,
            duration: .5,
        });
    };
};
export const mouseEnhance = () => {
    if (ww>1024) {
        gsap.to('#mouse', {
            scale: 3,
            boxShadow: `0 0 10px 2px #9c4dd6`,
            backdropFilter: `hue-rotate(120deg)`,
            duration: .5,
        });
    }; 
};
export const mouseRe = () => {
    if (ww>1024) {
        gsap.to('#mouse', {
            scale: 1,
            boxShadow: `0 0 20px 4px #fff`,
            backdropFilter: `hue-rotate(0deg) invert(100%)`,
            duration: .5,
        });
    };
};