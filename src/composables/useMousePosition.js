import { ref, onMounted, onUnmounted } from 'vue';

export function useMousePosition (e) {
    const x = ref(0),
          y = ref(0);
    const mouseE = (e) => {
        x.value = e.pageX;
        y.value = e.pageY;
    };
    onMounted(()=> {
        window.addEventListener('mousemove', mouseE);
    });
    onUnmounted(()=> {
        window.removeEventListener('mousemove', mouseE);
    });
    return {x, y};
}