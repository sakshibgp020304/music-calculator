let display = document.getElementById("display");
let music = document.getElementById("music");


// Add number or operator
function addValue(value) {

    if (display.value === "0") {
        display.value = value;
    } 
    else {
        display.value += value;
    }
}


// Clear calculator
function clearDisplay() {
    display.value = "0";
}


// Delete last character
function deleteNumber() {

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } 
    else {
        display.value = "0";
    }
}


// Calculate result
function calculate() {

    try {

        let expression = display.value;

        let result = eval(expression);

        display.value = result;

    } 
    catch (error) {

        display.value = "Error";

        setTimeout(() => {
            display.value = "0";
        }, 1000);
    }
}

const music = document.getElementById("music");

// Play music
function playMusic() {
    music.play();
}


// Pause music
function pauseMusic() {
    music.pause();
}