<script setup></script>
<template>
    <div class="scrollHint">
        <p>scroll</p>
    </div>
</template>
<style lang="scss" scoped>
@import '@/sass/base/_color.scss';
.scrollHint{
    width: 10px;
    height: 15px;
    margin-left: -7px;
    border-left: 2px solid $brown;
    border-right: 2px solid $brown;
    background: linear-gradient(transparent, #fff3);
    position: relative;
    box-shadow: 0 5px 10px 2px $black;
}
.scrollHint p{
    width: 80px;
    text-align: center;
    color: $ored;
    text-shadow: 0px 0px 5px $black;
    font-size: 12px;
    position: absolute;
    top: -32px;
    left: -35px;
}
.scrollHint::before, .scrollHint::after{
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
}
.scrollHint::before{
    width: 8px;
    height: 8px;
    top: -4px;
    left: 1px;
    background-color: $ored;
    transform-origin: center center;
    animation: hint 2s ease-in-out infinite;
    z-index: 1;
}
@keyframes hint {
    0%{transform: scale(1); top: -4px;}
    25%{transform: scale(0); top: -4px;}
    50%{transform: scale(0); top: 11px;}
    75%{transform: scale(1); top: 11px;}
    100%{transform: scale(1); top: -4px;}
}
.scrollHint::after{
    bottom: -6px;
    left: -2px;
    border: 2px solid $brown;
    background: #fff3;
    clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
}
</style>