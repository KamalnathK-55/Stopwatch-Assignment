let timer;
let elapsedTime = 0;
let running = false;
var displaytime, lapcount = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('laptime')

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = (elapsedTime % 1000).toString().padStart(3, '0');
    displaytime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    display.textContent=displaytime;
}

function start() {
    if (!running) {
        running = true;
        const startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1);
    }
}

function stop() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function reset() {
    stop();
    elapsedTime = 0;
    updateDisplay();
}

function laptime(){
   document.getElementById("lapsection").style.display="block";
   lapcount += 1;

   let newrow = document.createElement('tr');
   newrow.setAttribute("id",("laptime"+lapcount));

   let newcount = document.createElement('td');
   newcount.innerText = lapcount;

   let newlap = document.createElement('td');
   newlap.innerText = displaytime;

   //Append Function
   document.getElementById("lapData").appendChild(newrow).appendChild(newcount);
   document.getElementById(("laptime"+lapcount)).appendChild(newlap);
  }




//Intializing
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', laptime)

updateDisplay();
