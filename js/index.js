const durationInput = document.getElementById('duration'),
	startButton = document.getElementById('start'),
	pauseButton = document.getElementById('pause'),
	circle = document.querySelector('circle'),
  message = document.querySelector('.message')

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},

	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},

	onComplete() {
    message.innerHTML = "Timer is Complete"
    
    setTimeout(() => {
      message.innerHTML = ""
      durationInput.value = 60;
    }, 5000)
		
	}
});
