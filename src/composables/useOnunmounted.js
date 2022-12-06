import { onUnmounted } from 'vue';
import gsap from 'gsap';

export const bodyInit = () => onUnmounted(()=> {
    gsap.to(document.body, {
        background: '#12181E',
        duration: 0,
    })
    window.scroll(0,0);
})