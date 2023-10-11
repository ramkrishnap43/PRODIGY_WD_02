const playButton = document.getElementsByClassName("play")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const milliSecond = document.getElementsByClassName("msec")[0];

let isPlay = false;
let sec;
let secCounter = 0;
let centisec;
let centiCounter = 0;
let min;
let minCounter = 0;

const toggleButton = () => {
  lapButton.classList.remove("hidden");
  resetButton.classList.remove("hidden");
};

const play = () => {
  if (!isPlay) {
    playButton.innerHTML = "Pause";
    min = setInterval(() => {
        if(minCounter === 60){
            minCounter = 0
        }
      minute.innerText = `${++minCounter} : `;
    }, 60*1000);

    sec = setInterval(() => {
        if(secCounter === 60){
            secCounter = 0
        }
      second.innerText = `${++secCounter} : `;
    }, 1000);
    centisec = setInterval(() => {
        if(centiCounter === 100){
            centiCounter = 0
        }
        milliSecond.innerText = `${++centiCounter}`;
      }, 10);
    isPlay = true;
  } else {
    playButton.innerHTML = "Play";
    clearInterval(min)
    clearInterval(sec)
    clearInterval(centisec)
    isPlay = false;
  }
  toggleButton();
};

const reset = () => {
  play();
  lapButton.classList.add("hidden");
  resetButton.classList.add("hidden");
  minute.innerHTML = "0 :"
  second.innerHTML = "0 :"
  milliSecond.innerHTML = "0 "
};

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
