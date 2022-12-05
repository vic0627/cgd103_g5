import { onUnmounted } from 'vue';
import gsap from 'gsap';

export const bodyInit = () => onUnmounted(()=> {
    gsap.to(document.body, {
        background: 'linear-gradient(109.69deg, #12181E 16.49%, #13181F 26.68%, #151A23 36.59%, #181D24 41.08%, #1D2229 48.97%, #21282E 55.3%, #242B32 61.38%, #262D35 68.74%, #262D35 75.3%, #262D35 80.67%, #263038 86.99%)',
        duration: 0,
    })
    window.scroll(0,0);
})