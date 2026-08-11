const display = document.getElementById("display");
const music = document.getElementById("music");

function addValue(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteNumber() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";

        setTimeout(function () {
            display.value = "0";
        }, 1000);
    }
}

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}
