let timer;
let isRunning = false;
let elapsedTime = 0;
let startTime = 0;

function startStop() {
    const startStopBtn = document.getElementById('startStopBtn');
    if (!isRunning) {
        startStopBtn.textContent = 'Pause';
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 100);
    } else {
        startStopBtn.textContent = 'Start';
        isRunning = false;
        elapsedTime = Date.now() - startTime;
        clearInterval(timer);
    }
}

function updateTime() {
    const display = document.getElementById('display');
    elapsedTime = Date.now() - startTime;

    const hours = Math.floor((elapsedTime / 3600000) % 24);
    const minutes = Math.floor((elapsedTime / 60000) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    display.textContent = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStopBtn').textContent = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        const laps = document.getElementById('laps');
        const lapTime = document.createElement('li');
        const lapIndex = document.createElement('span');
        const lapValue = document.createElement('span');

        lapIndex.textContent = `Lap ${laps.childElementCount + 1}`;
        lapValue.textContent = document.getElementById('display').textContent;

        lapTime.appendChild(lapIndex);
        lapTime.appendChild(lapValue);
        laps.appendChild(lapTime);
    }
}
