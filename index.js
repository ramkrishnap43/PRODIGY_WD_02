const playButton = document.getElementsByClassName("play")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const milliSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const clearButton = document.getElementsByClassName("clear-button")[0];
const bg = document.getElementsByClassName("outer")[0];

let isPlay = false;
let sec;
let secCounter = 0;
let centisec;
let centiCounter = 0;
let min;
let minCounter = 0;
let isReset = false;
let lapItem = 0;

const toggleButton = () => {
  lapButton.classList.remove("hidden");
  resetButton.classList.remove("hidden");
};

const play = () => {
  if (!isPlay && !isReset) {
    playButton.innerHTML = "Pause";
    bg.classList.add("background-animation");
    min = setInterval(() => {
        if(minCounter === 60){
            minCounter = 0
        }
      minute.innerHTML = `${++minCounter} : `;
    }, 60*1000);

    sec = setInterval(() => {
        if(secCounter === 60){
            secCounter = 0
        }
      second.innerHTML = `&nbsp;${++secCounter} : `;
    }, 1000);
    centisec = setInterval(() => {
        if(centiCounter === 100){
            centiCounter = 0
        }
        milliSecond.innerHTML = `&nbsp;${++centiCounter}`;
      }, 10);
    isPlay = true;
    isReset = true;
  } else {
    playButton.innerHTML = "Play";
    clearInterval(min)
    clearInterval(sec)
    clearInterval(centisec)
    isPlay = false;
    isReset = false;
    bg.classList.remove("background-animation")
  }
  toggleButton();
};

const reset = () => {
  isReset = true;
  play();
  lapButton.classList.add("hidden");
  resetButton.classList.add("hidden");
  minute.innerHTML = "0 :"
  second.innerHTML = "&nbsp;0 :"
  milliSecond.innerHTML = "&nbsp;0 "
};

const lap = () => {

  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeLap = document.createElement("span");


  li.setAttribute("class" , "lap-item");
  number.setAttribute("class" , "number");
  timeLap.setAttribute("class", "time-lap");

    number.innerText = `${++lapItem}`
    timeLap.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`

    li.append(number , timeLap);
    laps.append(li)

    clearButton.classList.remove("hidden")

}

const clearAll = () => {
  laps.innerHTML = " ";
  laps.append(clearButton);
  clearButton.classList.add("hidden");
  lapItem = 0;
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll)
