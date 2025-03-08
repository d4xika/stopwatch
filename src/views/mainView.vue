<template>
	<div id="background"></div>
	<div>
		<div style="display: flex; justify-content: center; flex-direction: row">
			<div id="timerBox">
				<p>{{this.timer.display}}</p>
			</div>
		</div>
		<div style="display: flex; justify-content: center; gap: 5px; margin-top: 5px">
			<circleButton @click="this.stopTimer" icon="restart"/>
			<circleButton @click="this.pauseTimer" v-if="this.timer.running" icon="pause"/>
			<circleButton @click="startTimer" v-else icon="resume"/>
			<circleButton @click="stopTimer" icon="stop"/>
		</div>
	</div>
</template>

<script>
import circleButton from '@/components/buttons/circleButton.vue'

export default {
	name: 'mainView',
	components: {
		circleButton
	},
	data() {
		return {
			timer: {
				value: 0,
				running: false,
				display: "00:00",
				finished: false
			}
		}
	},
	methods: {
		changeTimerFormat() {
			let seconds = Math.floor(this.timer.value % 60)
			let minutes = Math.floor(this.timer.value / 60)
			let seconds_string = seconds
			let minutes_string = minutes

			if (seconds <= 9) {
				seconds_string = "0" + seconds
			}

			if (minutes <= 9) {
				minutes_string = "0" + minutes
			}

			this.timer.display = minutes_string + ":" + seconds_string
		},

		startTimer() {
			if(!this.timer.running) {
				this.timer.running = true
				this.timer.object = setInterval(() => {
					this.timer.value++
					this.changeTimerFormat()
				}, 1000);
			}
		},

		pauseTimer() {
			this.timer.running = false
			clearInterval(this.timer.object);
		},

		stopTimer() {
			this.timer.running = false
			clearInterval(this.timer.object);
			this.timer.value = 0
			this.changeTimerFormat();
		}

	}
}

</script>

<style scoped>

#background {
	background-color: lightblue;
	top: 0;
	left: 0;
	z-index: -1;
	position: fixed;
	width: 100%;
	height: 100%;
}

#timerBox {
	background-color: #2c3e50;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 150px;
	border-radius: 15px;
}

</style>