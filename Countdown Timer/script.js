const totalMinutes = 10;
let time = totalMinutes * 60;

const countDownEl = document.getElementById('countdown');

setInterval(countDownTImer,1000);

function countDownTImer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds =  seconds < 10 ? '0' + seconds : seconds;

  countDownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;
}
 


