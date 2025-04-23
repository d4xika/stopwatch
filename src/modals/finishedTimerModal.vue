<template>
	<div id="dimmBackground">
		<div id="modal">
			<closeButton @click="this.$emit('closeModal')" id="closeButton"/>
			<p>Great job!</p>
		</div>
	</div>
</template>

<script>
import closeButton from '@/components/buttons/closeButton.vue'

export default {
	name: 'finishedTimerModal',
	components: {
		closeButton
	}
}

</script>

<style scoped>

#dimmBackground {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(34, 34, 34, 0.5);
	backdrop-filter: blur(3px);
	left: 0;
	top: 0
}

#modal {
	position: relative;
	justify-content: center;
	align-content: center;
	width: 300px;
	height: 200px;
	border-radius: 15px;
	background-color: #2c3e50;
}

#closeButton {
	position: absolute;
	right: 10px;
	top: 10px;
}

p {
	color: white;
	font-size: x-large;
	font-family: "Chakra Petch", sans-serif;
	font-weight: 400;
	font-style: normal;
}

</style>