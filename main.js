var number = document.getElementById('number');
var prevNumber = document.getElementById('prev-number');
var startBtn = document.getElementById('start-btn');
var stopBtn = document.getElementById('stop-btn');
var upBtn = document.getElementById('up-btn');
var downBtn = document.getElementById('down-btn');

var numberText = undefined;
var prevNumberText = undefined;
var interval = undefined;
var increasingNumber = 0;

startBtn.addEventListener('click', () => {
    document.getElementById('app').classList.remove('success') || document.getElementById('app').classList.remove('wrong');
    startBtn.disabled = true;
    stopBtn.disabled = false;
    if(numberText) {
        downBtn.disabled = false;
        upBtn.disabled = false;
        setValues(null, prevNumberText);
    }

    startIncreasing();
});

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.style.display = 'none';
    upBtn.style.display = 'block';
    downBtn.style.display = 'block';
    startBtn.style.display = 'block';
    stopIncreasing();
    prevNumberText = numberText;
    setValues(null, prevNumberText);
});

upBtn.addEventListener('click', () => {
    stopIncreasing();
    checkNumbers('up');
    downBtn.disabled = true;
    upBtn.disabled = true;
    startBtn.disabled = false;
    prevNumberText = numberText;
    // setValues(null, prevNumberText);
});

downBtn.addEventListener('click', () => {
    stopIncreasing();
    checkNumbers();
    downBtn.disabled = true;
    upBtn.disabled = true;
    startBtn.disabled = false;
    prevNumberText = numberText;
    // setValues(null, prevNumberText);
});

function checkNumbers(dir) {
    if(dir === 'up') {
        if(numberText > prevNumberText) {
            document.getElementById('app').classList.add('success');
        } else {
            document.getElementById('app').classList.add('wrong');
        }
    } else {
        if(numberText < prevNumberText) {
            document.getElementById('app').classList.add('success');
        } else {
            document.getElementById('app').classList.add('wrong');
        }
    }
}

function startIncreasing() {
    interval = setInterval(() => {
        increasingNumber++;
        if(increasingNumber >= 60) {
            increasingNumber = 0;
        }

        numberText = increasingNumber;
        setValues(numberText, null);
    }, 20);
}

function stopIncreasing() {
    clearInterval(interval);
}

function setValues(curr, prev) {
    if(curr) {
        number.textContent = curr;
    }

    if(prev) {
        prevNumber.textContent = prev;
    }
}
