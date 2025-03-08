<template>
	<div>
		<mainView />
	</div>
</template>

<script>
import mainView from '@/views/mainView.vue';

export default {
	name: 'App',
	components: {
		mainView
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin-top: 60px;
}
</style>
