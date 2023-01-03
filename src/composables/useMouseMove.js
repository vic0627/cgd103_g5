import gsap from "gsap";
const ww = window.innerWidth;
export const useMouseMove = (e) => {
    if (ww>1024) {
        let x,y;
        window.addEventListener('mousemove', (e)=> {
            x = `${e.pageX}px`, y = e.clientY;
            gsap.to('#mouse', {
                y: e.pageY+'px',
                x,
                duration: 0,
            });
        });
        window.addEventListener('scroll', () => {
            console.log(window)
            gsap.to('#mouse', {
                y: y+window.scrollY+'px',
                x,
                duration: 0,
            });
        })
    };
};
requestAnimationFrame(useMouseMove);
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