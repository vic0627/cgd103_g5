<script setup>
import { ref } from 'vue';


const lightBoxClose = () => {
	lightBoxShow.value = false;
};
const lightBoxShow = ref(true);
</script>

<template>
    <div class="lightBox" v-if="lightBoxShow">
        <div class="lightBoxContent">
			<div class="close" @click="lightBoxClose"></div>
		</div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/sass/component/_lightBox.scss';
.lightBox{
	@include lightBox();
	.lightBoxContent{
		height: 300px;
	}
}
</style>