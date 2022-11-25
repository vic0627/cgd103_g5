import { ref, onMounted, onUnmounted } from 'vue';
export let x , y;
export function useMousePosition (e) {
    const mouseE = (e) => {
        x = e.pageX;
        y = e.pageY;
    };
    onMounted(()=> {
        window.addEventListener('mousemove', mouseE);
    });
    onUnmounted(()=> {
        window.removeEventListener('mousemove', mouseE);
    });
};
