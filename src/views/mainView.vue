<template>
	<div id="background"></div>
	<div>
		<div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
			<div>
				<img v-if="this.timer.running" style="height: 200px; margin-bottom: 5px" src="/images/workingKitty.gif" alt="working kitty" />
				<img v-else style="height: 160px; margin-top: 45px" src="/images/sleepingKitty.GIF" alt="sleeping kitty" />
			</div>
			<div id="timerBox">
				<p>{{this.timer.display}}</p>
			</div>
		</div>
		<div style="display: flex; justify-content: center; gap: 7px; margin-top: 7px">
			<circleButton @click="this.resetTimer" icon="restart"/>
			<circleButton @click="this.pauseTimer" v-if="this.timer.running" icon="pause"/>
			<circleButton @click="this.startTimer" v-else icon="resume"/>
			<circleButton @click="this.stopTimer" icon="stop"/>
		</div>
	</div>

	<finishedTimerModal v-if="this.timer.finished" @closeModal="this.timer.finished = false"/>
</template>

<script>
import circleButton from '@/components/buttons/circleButton.vue'
import finishedTimerModal from '@/modals/finishedTimerModal.vue'

export default {
	name: 'mainView',
	components: {
		circleButton,
		finishedTimerModal
	},
	data() {
		return {
			timer: {
				value: 0,
				running: false,
				display: "00:00",
				finished: false
			},
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

		resetTimer() {
			this.timer.running = false
			clearInterval(this.timer.object);
			this.timer.value = 0
			this.changeTimerFormat();
		},

		stopTimer() {
			this.timer.running = false
			clearInterval(this.timer.object);
			this.timer.value = 0
			this.changeTimerFormat();
			this.timer.finished = true
		}

	},

	beforeMount() {
		this.changeTimerFormat()
		this.resetTimer()
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
	margin-bottom: 10px;
	margin-top: 10px;
}

p {
	color: lightgrey;
	font-size: xxx-large;
	font-family: "Chakra Petch", sans-serif;
	font-weight: 400;
	font-style: normal;
}


</style>