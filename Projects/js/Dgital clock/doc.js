// script.js
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());

    const clockElement = document.getElementById("clock");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}


setInterval(updateClock, 1000);

updateClock();
