let display = document.getElementById("display");
let sound = document.getElementById("clickSound");

function playSound() {
    sound.currentTime = 0;
    sound.play();
}

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function toggleTheme() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
}
