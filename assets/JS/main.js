function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return; //stop function from running if there is no audio
  audio.currentTime = 0; // return audio to start
  console.log(e)
  audio.play();
  key.classList.add("playing") // adds the class playing
}
function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip it if it is not transform
  this.classList.remove('playing');
  
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound)

